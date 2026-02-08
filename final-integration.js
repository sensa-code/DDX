const fs = require('fs');

console.log('=== 最終整合腳本 ===\n');

// 1. 讀取基礎檔案（語法正確的 git 版本）
let html = fs.readFileSync('vet-differential-diagnosis-v2.html', 'utf8');
console.log('基礎檔案大小:', html.length);

// 2. 讀取所有批次 JSON
const batches = [
    'batch3-ent-congenital.json',
    'batch4-immune-emergency.json',
    'batch5-repro-dental-behavior.json',
    'batch6-onco-tox-heme.json',
    'batch7-additional.json',
    'batch8-expand.json',
    'batch9-final.json',
    'batch10-more.json',
    'batch11-final.json'
];

let allNewDiseases = {};
for (const batch of batches) {
    try {
        const data = JSON.parse(fs.readFileSync(batch, 'utf8'));
        Object.assign(allNewDiseases, data);
        console.log(`${batch}: ${Object.keys(data).length} 疾病`);
    } catch (e) {
        console.log(`讀取 ${batch} 失敗`);
    }
}

console.log('\n批次總計:', Object.keys(allNewDiseases).length, '疾病');

// 3. 過濾已存在的疾病
const newDiseases = {};
for (const [key, value] of Object.entries(allNewDiseases)) {
    if (!html.includes(`"${key}":`)) {
        newDiseases[key] = value;
    }
}

console.log('實際新增:', Object.keys(newDiseases).length, '疾病');

// 4. 找到 DISEASE_INFO 結尾位置
// 格式是 }; 後面跟換行和新的 const 或 //
const diseaseInfoStart = html.indexOf('const DISEASE_INFO = {');
const afterStart = html.substring(diseaseInfoStart);

// 找 };\n\n// 或 };\nconst
const endPattern = /\};\s*\n\s*(\/\/|const)/;
const endMatch = afterStart.match(endPattern);

if (!endMatch) {
    console.log('找不到 DISEASE_INFO 結尾');
    process.exit(1);
}

const insertPos = diseaseInfoStart + endMatch.index;
console.log('\n插入位置:', insertPos);

// 5. 構建新疾病字串（使用與原檔案相同的格式：鍵不加引號）
function formatDisease(key, data) {
    // 轉換為原始格式（鍵不加引號）
    let str = `  "${key}": {\n`;
    str += `    zh: "${data.zh}",\n`;
    str += `    en: "${data.en}",\n`;
    str += `    definition: ${JSON.stringify(data.definition)},\n`;
    str += `    synonyms: ${JSON.stringify(data.synonyms)},\n`;
    str += `    epidemiology: ${JSON.stringify(data.epidemiology)},\n`;
    str += `    clinicalPresentation: ${JSON.stringify(data.clinicalPresentation)},\n`;
    str += `    pathophysiology: ${JSON.stringify(data.pathophysiology)},\n`;
    str += `    diagnosis: ${JSON.stringify(data.diagnosis)},\n`;
    str += `    treatment: ${JSON.stringify(data.treatment)},\n`;
    str += `    prognosis: ${JSON.stringify(data.prognosis)},\n`;
    str += `    pearls: ${JSON.stringify(data.pearls)},\n`;
    str += `    monitoring: ${JSON.stringify(data.monitoring)},\n`;
    str += `    reference: ${JSON.stringify(data.reference)}\n`;
    str += `  }`;
    return str;
}

let insertStr = '';
for (const [key, value] of Object.entries(newDiseases)) {
    insertStr += ',\n' + formatDisease(key, value);
}

// 6. 插入新疾病
const newHtml = html.substring(0, insertPos) + insertStr + html.substring(insertPos);
console.log('新檔案大小:', newHtml.length);

// 7. 驗證
const scriptMatch = newHtml.match(/<script>([\s\S]*?)<\/script>/);
if (scriptMatch) {
    try {
        new Function(scriptMatch[1]);
        console.log('\nJavaScript 語法: 通過');
    } catch (e) {
        console.log('\nJavaScript 錯誤:', e.message);

        // 找錯誤
        const lines = scriptMatch[1].split('\n');
        for (let i = 1; i <= Math.min(lines.length, 500); i++) {
            try {
                new Function(lines.slice(0, i).join('\n'));
            } catch (e2) {
                if (!e2.message.includes('Unexpected end')) {
                    console.log('錯誤在第', i, '行:', lines[i-1].substring(0, 60));
                    break;
                }
            }
        }
        process.exit(1);
    }
}

// 計算疾病數
const diseaseCount = (newHtml.match(/^\s+zh:\s*"/gm) || []).length;
console.log('總疾病數:', diseaseCount);

// 8. 儲存
fs.writeFileSync('vet-differential-diagnosis-v2.html', newHtml, 'utf8');
console.log('\n已儲存');

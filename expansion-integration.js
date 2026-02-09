const fs = require('fs');

console.log('=== 疾病擴充整合腳本 ===\n');

// 1. 讀取當前檔案
let html = fs.readFileSync('vet-differential-diagnosis-v2.html', 'utf8');
const originalSize = html.length;
console.log('原始檔案大小:', originalSize);

// 驗證原始檔案結構
if (!html.includes('</script>') || !html.includes('</body>') || !html.includes('</html>')) {
    console.log('ERROR: 原始檔案結構不完整，中止操作');
    process.exit(1);
}

const originalDiseaseCount = (html.match(/^\s+zh:\s*"/gm) || []).length;
console.log('原始疾病數:', originalDiseaseCount);

// 2. 讀取新批次 JSON
// Read batch list from command line or use defaults
const defaultBatches = [
    'batch12-tier1-critical.json',
    'batch13-tier2-high.json',
    'batch14-tier3-moderate.json',
    'batch15-tier3b.json',
    'batch16-tier4.json',
    'batch17-final-remaining.json',
    'batch18-fungal-infectious.json',
    'batch19-derm-ophtho-misc.json',
    'batch20-cardio-heme-onco.json'
];

// Allow specifying specific batches via command line: node expansion-integration.js batch18 batch19 batch20
const args = process.argv.slice(2);
const newBatches = args.length > 0
    ? args.map(a => a.endsWith('.json') ? a : a + '.json')
    : defaultBatches;

let allNewDiseases = {};
let batchStats = [];
for (const batch of newBatches) {
    try {
        const raw = fs.readFileSync(batch, 'utf8');
        const data = JSON.parse(raw);
        const count = Object.keys(data).length;
        Object.assign(allNewDiseases, data);
        batchStats.push({ batch, count, status: 'OK' });
        console.log(`  ${batch}: ${count} 疾病`);
    } catch (e) {
        batchStats.push({ batch, count: 0, status: 'FAILED: ' + e.message.substring(0, 80) });
        console.log(`  ${batch}: 讀取失敗 - ${e.message.substring(0, 80)}`);
    }
}

const totalInBatches = Object.keys(allNewDiseases).length;
console.log('\n批次總計 (去重後):', totalInBatches, '疾病');

// 3. 過濾已存在的疾病
const newDiseases = {};
const skipped = [];
for (const [key, value] of Object.entries(allNewDiseases)) {
    if (!html.includes(`"${key}":`)) {
        // 驗證必要欄位
        if (value.zh && value.en && value.definition) {
            newDiseases[key] = value;
        } else {
            console.log(`  WARN: ${key} 缺少必要欄位，跳過`);
        }
    } else {
        skipped.push(key);
    }
}

console.log('已存在跳過:', skipped.length, '疾病');
console.log('實際新增:', Object.keys(newDiseases).length, '疾病\n');

if (Object.keys(newDiseases).length === 0) {
    console.log('沒有新疾病需要整合');
    process.exit(0);
}

// 4. 找到 DISEASE_INFO 結尾位置（使用安全方法）
const diseaseInfoStart = html.indexOf('const DISEASE_INFO = {');
if (diseaseInfoStart === -1) {
    console.log('ERROR: 找不到 DISEASE_INFO 開頭');
    process.exit(1);
}

const afterStart = html.substring(diseaseInfoStart);

// 找 }; 後面跟換行和 // 或 const（DISEASE_INFO 物件的結尾）
const endPattern = /\};\s*\n\s*(\/\/|const)/;
const endMatch = afterStart.match(endPattern);

if (!endMatch) {
    console.log('ERROR: 找不到 DISEASE_INFO 結尾');
    process.exit(1);
}

const insertPos = diseaseInfoStart + endMatch.index;
console.log('插入位置:', insertPos);

// 5. 構建新疾病字串（使用與原檔案相同的格式：鍵不加引號）
function formatDisease(key, data) {
    let str = `  "${key}": {\n`;
    str += `    zh: "${data.zh}",\n`;
    str += `    en: "${data.en}",\n`;
    str += `    definition: ${JSON.stringify(data.definition)},\n`;
    str += `    synonyms: ${JSON.stringify(data.synonyms || [])},\n`;
    str += `    epidemiology: ${JSON.stringify(data.epidemiology || {})},\n`;
    str += `    clinicalPresentation: ${JSON.stringify(data.clinicalPresentation || {})},\n`;
    str += `    pathophysiology: ${JSON.stringify(data.pathophysiology || "")},\n`;
    str += `    diagnosis: ${JSON.stringify(data.diagnosis || {})},\n`;
    str += `    treatment: ${JSON.stringify(data.treatment || {})},\n`;
    str += `    prognosis: ${JSON.stringify(data.prognosis || "")},\n`;
    str += `    pearls: ${JSON.stringify(data.pearls || [])},\n`;
    str += `    monitoring: ${JSON.stringify(data.monitoring || [])},\n`;
    str += `    reference: ${JSON.stringify(data.reference || "")}\n`;
    str += `  }`;
    return str;
}

let insertStr = '';
let addedCount = 0;
for (const [key, value] of Object.entries(newDiseases)) {
    insertStr += ',\n' + formatDisease(key, value);
    addedCount++;
}

// 6. 插入新疾病
const newHtml = html.substring(0, insertPos) + insertStr + html.substring(insertPos);
console.log('新檔案大小:', newHtml.length);
console.log('增加大小:', newHtml.length - originalSize, 'bytes');

// 7. 驗證 - 多重安全檢查
let valid = true;

// 7a. 結構完整性
if (!newHtml.includes('</script>')) { console.log('ERROR: </script> 遺失！'); valid = false; }
if (!newHtml.includes('</body>')) { console.log('ERROR: </body> 遺失！'); valid = false; }
if (!newHtml.includes('</html>')) { console.log('ERROR: </html> 遺失！'); valid = false; }
if (!newHtml.includes('const DB = {')) { console.log('ERROR: DB 物件遺失！'); valid = false; }
if (!newHtml.includes('const SYNONYMS = {')) { console.log('ERROR: SYNONYMS 物件遺失！'); valid = false; }

// 7b. JavaScript 語法檢查
const scriptMatch = newHtml.match(/<script>([\s\S]*?)<\/script>/);
if (scriptMatch) {
    try {
        new Function(scriptMatch[1]);
        console.log('\nJavaScript 語法: 通過');
    } catch (e) {
        console.log('\nJavaScript 語法錯誤:', e.message);
        valid = false;

        // 定位錯誤
        const lines = scriptMatch[1].split('\n');
        for (let i = 1; i <= Math.min(lines.length, 2000); i++) {
            try {
                new Function(lines.slice(0, i).join('\n'));
            } catch (e2) {
                if (!e2.message.includes('Unexpected end')) {
                    console.log('錯誤在第', i, '行:', lines[i-1].substring(0, 100));
                    if (i > 1) console.log('上一行:', lines[i-2].substring(0, 100));
                    break;
                }
            }
        }
    }
} else {
    console.log('ERROR: 找不到 <script> 標籤');
    valid = false;
}

// 7c. 計算疾病數
const newDiseaseCount = (newHtml.match(/^\s+zh:\s*"/gm) || []).length;
console.log('總疾病數:', newDiseaseCount);
console.log('新增疾病:', newDiseaseCount - originalDiseaseCount);

if (newDiseaseCount <= originalDiseaseCount) {
    console.log('ERROR: 疾病數沒有增加！');
    valid = false;
}

// 8. 儲存（只在驗證通過時）
if (valid) {
    fs.writeFileSync('vet-differential-diagnosis-v2.html', newHtml, 'utf8');
    console.log('\n已安全儲存');
    console.log(`\n=== 整合成功 ===`);
    console.log(`原始: ${originalDiseaseCount} 疾病`);
    console.log(`新增: ${newDiseaseCount - originalDiseaseCount} 疾病`);
    console.log(`總計: ${newDiseaseCount} 疾病`);
} else {
    console.log('\n驗證失敗，未儲存。請檢查錯誤。');
    process.exit(1);
}

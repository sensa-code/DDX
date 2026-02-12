// 整合第二批疾病資料 - 來自 new-diseases-batch1.json 的詳細免疫系統疾病
const fs = require('fs');

// 讀取 HTML 文件
let html = fs.readFileSync('vet-differential-diagnosis-v2.html', 'utf8');

// 讀取 JSON 疾病資料
const newDiseasesData = JSON.parse(fs.readFileSync('new-diseases-batch1.json', 'utf8'));

// 過濾掉已經存在的疾病（檢查 key 是否已在 HTML 中）
const existingKeys = ['immune-mediated-arthritis', 'anaphylaxis', 'vasculitis'];
const diseasesToAdd = {};

for (const [key, value] of Object.entries(newDiseasesData)) {
    if (!existingKeys.includes(key) && !html.includes(`"${key}":`)) {
        diseasesToAdd[key] = value;
    }
}

if (Object.keys(diseasesToAdd).length === 0) {
    console.log('所有疾病已經存在，無需新增');
    process.exit(0);
}

// 找到 DISEASE_INFO 結尾的位置
const endMarker = '\n};';
const diseaseInfoStart = html.indexOf('const DISEASE_INFO = {');
const diseaseInfoEnd = html.indexOf(endMarker, diseaseInfoStart);

if (diseaseInfoStart === -1 || diseaseInfoEnd === -1) {
    console.error('無法找到 DISEASE_INFO 結構');
    process.exit(1);
}

// 將疾病資料轉換為格式化的 JSON 字串
function formatDiseaseEntry(key, data) {
    return `
    "${key}": ${JSON.stringify(data, null, 4).split('\n').map((line, i) => i === 0 ? line : '    ' + line).join('\n')}`;
}

// 組合所有新疾病
let newDiseasesStr = '';
for (const [key, value] of Object.entries(diseasesToAdd)) {
    newDiseasesStr += ',' + formatDiseaseEntry(key, value);
}

// 找到最後一個疾病條目的結尾位置（在 }; 之前）
const lastBracePos = html.lastIndexOf('}', diseaseInfoEnd - 1);

// 插入新疾病
const before = html.substring(0, lastBracePos + 1);
const after = html.substring(lastBracePos + 1);

const newHtml = before + newDiseasesStr + after;

// 寫入更新後的文件
fs.writeFileSync('vet-differential-diagnosis-v2.html', newHtml, 'utf8');

console.log(`成功新增 ${Object.keys(diseasesToAdd).length} 個疾病`);
console.log('新增的疾病列表:');
Object.keys(diseasesToAdd).forEach((key, i) => {
    console.log(`  ${i + 1}. ${key} - ${diseasesToAdd[key].zh}`);
});

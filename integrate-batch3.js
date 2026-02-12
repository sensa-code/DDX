// 整合第三批疾病資料 - ENT + 先天性疾病
const fs = require('fs');

let html = fs.readFileSync('vet-differential-diagnosis-v2.html', 'utf8');
const newDiseases = JSON.parse(fs.readFileSync('batch3-ent-congenital.json', 'utf8'));

// 過濾已存在的疾病
const diseasesToAdd = {};
for (const [key, value] of Object.entries(newDiseases)) {
    if (!html.includes(`"${key}":`)) {
        diseasesToAdd[key] = value;
    }
}

if (Object.keys(diseasesToAdd).length === 0) {
    console.log('所有疾病已存在');
    process.exit(0);
}

// 找到 DISEASE_INFO 結尾位置
const diseaseInfoStart = html.indexOf('const DISEASE_INFO = {');
const endMarker = '\n};';
const diseaseInfoEnd = html.indexOf(endMarker, diseaseInfoStart);

if (diseaseInfoStart === -1 || diseaseInfoEnd === -1) {
    console.error('無法找到 DISEASE_INFO');
    process.exit(1);
}

// 格式化疾病條目
function formatEntry(key, data) {
    return `\n    "${key}": ${JSON.stringify(data, null, 4).split('\n').map((l, i) => i === 0 ? l : '    ' + l).join('\n')}`;
}

let newStr = '';
for (const [key, value] of Object.entries(diseasesToAdd)) {
    newStr += ',' + formatEntry(key, value);
}

const lastBrace = html.lastIndexOf('}', diseaseInfoEnd - 1);
const before = html.substring(0, lastBrace + 1);
const after = html.substring(lastBrace + 1);

fs.writeFileSync('vet-differential-diagnosis-v2.html', before + newStr + after, 'utf8');
console.log(`成功新增 ${Object.keys(diseasesToAdd).length} 個疾病`);
Object.keys(diseasesToAdd).forEach((k, i) => console.log(`  ${i+1}. ${k}`));

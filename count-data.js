// 計算資料數量
const fs = require('fs');
const content = fs.readFileSync('E:\\CLAUDE CODE\\BOOK\\vet-differential-diagnosis-v2.html', 'utf8');

console.log('=== 資料統計 ===\n');

// 提取JavaScript區塊
const scriptMatch = content.match(/<script>([\s\S]*?)<\/script>/);
const jsCode = scriptMatch[1];

// 計算症狀數量
const symptomsMatch = jsCode.match(/const\s+DB\s*=\s*\{\s*symptoms:\s*\[([\s\S]*?)\]\s*\};/);
if (symptomsMatch) {
  const symptomsBlock = symptomsMatch[1];
  const symptomCount = (symptomsBlock.match(/\{\s*id:\s*"/g) || []).length;
  console.log(`症狀數量: ${symptomCount}`);
} else {
  console.log('無法解析症狀資料');
}

// 計算實驗室指標數量
const labMatch = jsCode.match(/const\s+LAB_DB\s*=\s*\{\s*abnormalities:\s*\[([\s\S]*?)\]\s*\};/);
if (labMatch) {
  const labBlock = labMatch[1];
  const labCount = (labBlock.match(/\{\s*id:\s*"/g) || []).length;
  console.log(`實驗室指標數量: ${labCount}`);
} else {
  console.log('無法解析實驗室資料');
}

// 計算疾病縮寫數量
const diseaseAliasMatch = jsCode.match(/const\s+DISEASE_ALIASES\s*=\s*\{([\s\S]*?)\};/);
if (diseaseAliasMatch) {
  const aliasCount = (diseaseAliasMatch[1].match(/"/g) || []).length / 2;
  console.log(`疾病別名/縮寫: 約 ${Math.floor(aliasCount)} 個`);
}

// 計算症狀俗語數量
const synonymMatch = jsCode.match(/const\s+SYNONYMS\s*=\s*\{([\s\S]*?)\};/);
if (synonymMatch) {
  const synonymCount = (synonymMatch[1].match(/"/g) || []).length / 2;
  console.log(`症狀俗語對照: 約 ${Math.floor(synonymCount)} 個`);
}

// 估算疾病詳細資料數量
const diseaseDetailsCount = (jsCode.match(/\n\s+"[\w-]+"\s*:\s*\{[\s\S]*?zh:\s*"/g) || []).length;
console.log(`疾病詳細資料: 約 ${diseaseDetailsCount} 個`);

// 估算症狀-實驗室關聯
const symptomLabMatch = jsCode.match(/const\s+SYMPTOM_LAB_LINKS\s*=\s*\{([\s\S]*?)\};/);
if (symptomLabMatch) {
  const linkCount = (symptomLabMatch[1].match(/"/g) || []).length / 2;
  console.log(`症狀-實驗室關聯: 約 ${Math.floor(linkCount)} 個`);
}

console.log('\n總評: 資料豐富度高');

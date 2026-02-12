// 尋找DB結構
const fs = require('fs');

const html = fs.readFileSync('E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2.html', 'utf8');

// 尋找 const DB = 的位置
const patterns = [
  'const DB = { symptoms: [',
  'const DB = {symptoms: [',
  'const DB = { symptoms:[',
  'const DB={symptoms:['
];

let dbStart = -1;
let usedPattern = '';

for (const pattern of patterns) {
  dbStart = html.indexOf(pattern);
  if (dbStart !== -1) {
    usedPattern = pattern;
    break;
  }
}

if (dbStart === -1) {
  console.log('❌ 找不到 DB 定義');

  // 嘗試更廣泛的搜尋
  const dbMatch = html.match(/const\s+DB\s*=/);
  if (dbMatch) {
    console.log('✅ 找到 DB 定義在位置:', dbMatch.index);
    const snippet = html.substring(dbMatch.index, dbMatch.index + 200);
    console.log('\n內容預覽:');
    console.log(snippet);
  } else {
    console.log('❌ 完全找不到 DB 定義');
  }
  process.exit(1);
}

console.log(`✅ 找到 DB 定義，使用模式: "${usedPattern}"`);
console.log(`   位置: ${dbStart}\n`);

// 尋找 sections 的位置
const sectionsPatterns = [
  '],\nsections:',
  '], sections:',
  '],sections:',
  ']\n,\nsections:'
];

let sectionsStart = -1;
let usedSectionsPattern = '';

for (const pattern of sectionsPatterns) {
  sectionsStart = html.indexOf(pattern, dbStart);
  if (sectionsStart !== -1) {
    usedSectionsPattern = pattern;
    break;
  }
}

if (sectionsStart === -1) {
  console.log('❌ 找不到 sections 定義');

  // 顯示DB區域後面的內容
  const afterDB = html.substring(dbStart + 1000, dbStart + 1500);
  console.log('\nDB 定義後的內容:');
  console.log(afterDB);
  process.exit(1);
}

console.log(`✅ 找到 sections 定義，使用模式: "${usedSectionsPattern}"`);
console.log(`   位置: ${sectionsStart}\n`);

// 提取症狀陣列
const symptomsArray = html.substring(dbStart, sectionsStart);
const arrayLength = symptomsArray.length;
console.log(`症狀陣列長度: ${arrayLength} 字元 (${Math.round(arrayLength / 1024)} KB)\n`);

// 計算症狀數量
const idMatches = symptomsArray.match(/\bid:"[^"]+"/g);
const symptomCount = idMatches ? idMatches.length : 0;

console.log(`找到 ${symptomCount} 個症狀`);

// 顯示症狀列表摘要
if (idMatches && idMatches.length > 0) {
  console.log('\n前20個症狀:');
  idMatches.slice(0, 20).forEach((match, i) => {
    const id = match.match(/id:"([^"]+)"/)[1];
    console.log(`${String(i + 1).padStart(2)}. ${id}`);
  });

  if (idMatches.length > 20) {
    console.log(`... (還有 ${idMatches.length - 20} 個)`);
  }
}

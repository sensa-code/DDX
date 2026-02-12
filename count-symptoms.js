// 精確計算症狀數量
const fs = require('fs');

const html = fs.readFileSync('E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2.html', 'utf8');

// 找到DB.symptoms陣列的完整內容
const dbStart = html.indexOf('const DB = { symptoms: [');
const sectionsStart = html.indexOf('],\nsections:', dbStart);

if (dbStart === -1 || sectionsStart === -1) {
  console.log('❌ 無法定位 DB.symptoms 陣列');
  process.exit(1);
}

const symptomsArray = html.substring(dbStart, sectionsStart);

// 計算症狀數量（每個症狀都有唯一的id）
const idMatches = symptomsArray.match(/\bid:"[^"]+"/g);
const symptomCount = idMatches ? idMatches.length : 0;

console.log(`找到 ${symptomCount} 個症狀\n`);

// 列出前10個症狀ID
if (idMatches && idMatches.length > 0) {
  console.log('前10個症狀:');
  idMatches.slice(0, 10).forEach((match, i) => {
    const id = match.match(/id:"([^"]+)"/)[1];
    console.log(`${i + 1}. ${id}`);
  });

  if (idMatches.length > 10) {
    console.log(`... 還有 ${idMatches.length - 10} 個症狀`);
  }
}

// 檢查每個section有多少症狀
console.log('\n按分類統計:');
const sectionCounts = {};
const sectionMatches = symptomsArray.matchAll(/section:"(\d+\.\d+)"/g);
for (const match of sectionMatches) {
  const section = match[1];
  sectionCounts[section] = (sectionCounts[section] || 0) + 1;
}

Object.keys(sectionCounts).sort().forEach(section => {
  console.log(`${section}: ${sectionCounts[section]} 個症狀`);
});

console.log(`\n總計: ${symptomCount} 個症狀`);

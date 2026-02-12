// analyze-structure.js
const fs = require('fs');

const script = fs.readFileSync('E:/CLAUDE CODE/BOOK/extracted-script.js', 'utf8');
const lines = script.split('\n');

console.log('=== 分析檔案結構 ===\n');

// 找出所有重要的結構標記
const markers = [
  { pattern: /^const DISEASE_INFO = \{/, name: 'DISEASE_INFO 開始' },
  { pattern: /^const \w+_ALIASES = \{/, name: 'ALIASES 對象' },
  { pattern: /^const \w+_CATEGORIES = \{/, name: 'CATEGORIES 對象' },
  { pattern: /^};$/, name: '對象結束' },
  { pattern: /\/\/ ===== From .*diseases\.js =====/, name: '疾病數據區塊' },
  { pattern: /^const \w+ = \{/, name: '新const對象' }
];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  for (const marker of markers) {
    if (marker.pattern.test(line)) {
      console.log(`第 ${String(i + 1).padStart(5)} 行: ${marker.name.padEnd(25)} | ${line.trim().substring(0, 60)}`);
    }
  }
}

console.log('\n=== 關鍵發現 ===');
console.log('1. 檢查 DISEASE_INFO 是否過早關閉');
console.log('2. 檢查所有疾病數據是否都在 DISEASE_INFO 內');

// remove-aliases.js - 移除所有獨立的ALIASES定義
const fs = require('fs');

const filePath = 'E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2.html';
let content = fs.readFileSync(filePath, 'utf8');

console.log('=== 移除獨立的ALIASES定義 ===\n');

// 需要移除的ALIASES定義模式
const aliasPatterns = [
  'GASTROINTESTINAL_DISEASE_ALIASES',
  'ENDOCRINE_DISEASE_ALIASES',
  'DERMATOLOGICAL_DISEASE_ALIASES',
  'RESPIRATORY_DISEASE_ALIASES',
  'INFECTIOUS_DISEASE_ALIASES',
  'MUSCULOSKELETAL_DISEASE_ALIASES',
  'IMMUNOLOGICAL_DISEASE_ALIASES',
  'ENT_DISEASE_ALIASES',
  'BEHAVIORAL_OTHER_DISEASE_ALIASES',
  'EMERGENCY_CRITICAL_CARE_ALIASES'
];

let totalRemoved = 0;

aliasPatterns.forEach(pattern => {
  // 匹配 const PATTERN = { ... };
  const regex = new RegExp(`const ${pattern} = \\{[\\s\\S]*?\\n\\};\\n`, 'g');
  const matches = content.match(regex);

  if (matches) {
    matches.forEach(match => {
      const lines = match.split('\n').length - 1;
      const chars = match.length;
      console.log(`✓ 找到 ${pattern}: ${lines} 行, ${chars} 字元`);
      totalRemoved += lines;
    });

    content = content.replace(regex, '');
  } else {
    console.log(`⚠️  找不到 ${pattern}`);
  }
});

console.log(`\n總共移除 ${totalRemoved} 行\n`);

// 寫回檔案
fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ 檔案已更新');

// 驗證語法
console.log('\n=== 驗證修復後的語法 ===\n');

const scriptMatch = content.match(/<script>([\s\S]*?)<\/script>/);
if (scriptMatch) {
  const script = scriptMatch[1];
  try {
    new Function(script);
    console.log('✅ JavaScript 語法正確！');
  } catch (e) {
    console.log(`❌ 仍有語法錯誤: ${e.message}`);
  }
} else {
  console.log('❌ 找不到script標籤');
}

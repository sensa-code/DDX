// auto-fix-syntax.js - 自動修復語法錯誤
const fs = require('fs');

console.log('=== 自動語法修復工具 ===\n');

const html = fs.readFileSync('E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2.html', 'utf8');
const lines = html.split('\n');

console.log(`總共 ${lines.length} 行\n`);

// 修復策略：
// 1. 在 HTML第5925行的 } 後添加逗號
// 2. 刪除 HTML第5927行的 }; (過早關閉)
// 3. 在合適位置重新關閉DISEASE_INFO

const fixes = [];

// 修復1：第5925行添加逗號
if (lines[5924] && lines[5924].trim() === '}') {
  console.log('修復1：第5925行 - 添加逗號到 trigeminal-neuritis 結尾');
  lines[5924] = '  },';
  fixes.push('第5925行：} → },');
}

// 修復2：註釋掉第5927行的過早關閉
if (lines[5926] && lines[5926].trim() === '};') {
  console.log('修復2：第5927行 - 註釋掉過早的DISEASE_INFO關閉');
  lines[5926] = '// }; // REMOVED: This was closing DISEASE_INFO too early';
  fixes.push('第5927行：}; → // };');
}

// 修復3：註釋掉NEUROLOGICAL_DISEASE_ALIASES的開始
if (lines[5927] && lines[5927].includes('const NEUROLOGICAL_DISEASE_ALIASES')) {
  console.log('修復3：第5928行 - 將NEUROLOGICAL_DISEASE_ALIASES轉為DISEASE_INFO內容');
  lines[5927] = '// const NEUROLOGICAL_DISEASE_ALIASES = { // MOVED: These should be in DISEASE_INFO';
  fixes.push('第5928行：開始ALIASES → 註釋');
}

// 保存修復後的檔案
const fixed = lines.join('\n');
fs.writeFileSync('E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2.html', fixed, 'utf8');

console.log('\n✓ 修復完成！\n');
console.log('應用的修復：');
fixes.forEach((fix, i) => {
  console.log(`  ${i + 1}. ${fix}`);
});

// 測試修復
console.log('\n測試修復結果...');
const scriptMatch = fixed.match(/<script>([\s\S]*?)<\/script>/);
if (scriptMatch) {
  const script = scriptMatch[1];
  fs.writeFileSync('E:/CLAUDE CODE/BOOK/test-fixed-script.js', script, 'utf8');

  try {
    require('./test-fixed-script.js');
    console.log('✓✓✓ 語法檢查通過！修復成功！');
  } catch (e) {
    console.log('✗ 還有錯誤:');
    console.log(`  ${e.message}`);
    const match = e.stack.match(/test-fixed-script\.js:(\d+)/);
    if (match) {
      console.log(`  位置: Script第${match[1]}行`);
    }
  }
}

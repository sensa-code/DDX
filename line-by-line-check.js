// line-by-line-check.js
const fs = require('fs');

const content = fs.readFileSync('E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2.html', 'utf8');
const scriptMatch = content.match(/<script>([\s\S]*?)<\/script>/);
const script = scriptMatch[1];
const lines = script.split('\n');

console.log(`檢查 ${lines.length} 行代碼...\n`);

// 逐行累加檢查
let accumulated = '';
let lastGoodLine = 0;

for (let i = 0; i < lines.length; i++) {
  accumulated += lines[i] + '\n';

  try {
    new Function(accumulated);
    lastGoodLine = i;
  } catch (e) {
    console.log(`❌ 第 ${i + 1} 行出錯！\n`);
    console.log(`錯誤訊息: ${e.message}\n`);
    console.log(`前10行代碼:`);
    for (let j = Math.max(0, i - 10); j <= i; j++) {
      const marker = j === i ? '>>> ' : '    ';
      console.log(`${marker}${String(j + 1).padStart(5)}: ${lines[j]}`);
    }
    console.log(`\n最後一個正常行: ${lastGoodLine + 1}`);

    // 檢查這一行的常見問題
    const line = lines[i];
    console.log(`\n問題行內容: "${line}"\n`);
    console.log('可能的問題:');

    // 檢查引號
    const singleQuotes = (line.match(/'/g) || []).length;
    const doubleQuotes = (line.match(/"/g) || []).length;
    const backticks = (line.match(/`/g) || []).length;

    console.log(`- 單引號數量: ${singleQuotes} ${singleQuotes % 2 !== 0 ? '❌ 奇數！' : '✓'}`);
    console.log(`- 雙引號數量: ${doubleQuotes} ${doubleQuotes % 2 !== 0 ? '❌ 奇數！' : '✓'}`);
    console.log(`- 反引號數量: ${backticks} ${backticks % 2 !== 0 ? '❌ 奇數！' : '✓'}`);

    // 檢查上一行
    if (i > 0) {
      const prevLine = lines[i - 1];
      console.log(`\n上一行內容: "${prevLine}"`);

      // 檢查是否缺少逗號
      if (prevLine.trim().match(/["}]\s*$/) && !prevLine.trim().endsWith(',') && !prevLine.trim().endsWith('{') && !prevLine.trim().endsWith('[')) {
        console.log('⚠️  上一行可能缺少逗號！');
      }

      // 檢查上一行引號
      const prevSingleQuotes = (prevLine.match(/'/g) || []).length;
      const prevDoubleQuotes = (prevLine.match(/"/g) || []).length;
      const prevBackticks = (prevLine.match(/`/g) || []).length;

      console.log(`上一行引號檢查:`);
      console.log(`- 單引號: ${prevSingleQuotes} ${prevSingleQuotes % 2 !== 0 ? '❌ 奇數！' : '✓'}`);
      console.log(`- 雙引號: ${prevDoubleQuotes} ${prevDoubleQuotes % 2 !== 0 ? '❌ 奇數！' : '✓'}`);
      console.log(`- 反引號: ${prevBackticks} ${prevBackticks % 2 !== 0 ? '❌ 奇數！' : '✓'}`);
    }

    process.exit(1);
  }
}

console.log('✅ 所有行都通過語法檢查！');

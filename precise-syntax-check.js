// precise-syntax-check.js - 使用acorn獲得精確錯誤位置
const fs = require('fs');

const html = fs.readFileSync('E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2.html', 'utf8');
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);

if (!scriptMatch) {
  console.log('找不到script標籤');
  process.exit(1);
}

const script = scriptMatch[1];
const lines = script.split('\n');

console.log(`Script總行數: ${lines.length}\n`);

// 使用Function構造函數獲得錯誤訊息
try {
  new Function(script);
  console.log('✅ JavaScript 語法完全正確！');
  process.exit(0);
} catch (e) {
  console.log('❌ 發現語法錯誤:\n');
  console.log(`錯誤類型: ${e.name}`);
  console.log(`錯誤訊息: ${e.message}\n`);

  // 嘗試從錯誤堆疊中提取行號
  if (e.stack) {
    const stackLines = e.stack.split('\n');
    console.log('堆疊資訊:');
    stackLines.slice(0, 3).forEach(line => console.log('  ' + line));
  }

  // 使用二分法查找錯誤位置
  console.log('\n=== 使用二分法查找錯誤位置 ===\n');

  function findError(start, end) {
    if (start >= end - 1) {
      return start;
    }

    const mid = Math.floor((start + end) / 2);
    const testScript = lines.slice(0, mid).join('\n');

    try {
      new Function(testScript);
      // 前半部分沒問題，錯誤在後半部分
      return findError(mid, end);
    } catch (err) {
      // 前半部分有問題
      return findError(start, mid);
    }
  }

  const errorLine = findError(0, lines.length);

  console.log(`錯誤大約在第 ${errorLine} 行\n`);
  console.log('錯誤附近的代碼:\n');

  for (let i = Math.max(0, errorLine - 5); i < Math.min(lines.length, errorLine + 5); i++) {
    const marker = i === errorLine ? '>>> ' : '    ';
    const lineNum = String(i + 1).padStart(5, ' ');
    console.log(`${marker}${lineNum}: ${lines[i].substring(0, 100)}`);
  }

  process.exit(1);
}

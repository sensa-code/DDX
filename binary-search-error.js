// binary-search-error.js
const fs = require('fs');

const content = fs.readFileSync('E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2.html', 'utf8');
const scriptMatch = content.match(/<script>([\s\S]*?)<\/script>/);
const script = scriptMatch[1];
const lines = script.split('\n');

console.log(`總共 ${lines.length} 行代碼`);

// 二分法查找錯誤
function findError(start, end, depth = 0) {
  if (end - start <= 1) {
    console.log(`\n🎯 錯誤在第 ${start + 1} 行附近`);
    return start;
  }

  const mid = Math.floor((start + end) / 2);
  const testScript = lines.slice(0, mid).join('\n');

  try {
    new Function(testScript);
    console.log(`${'  '.repeat(depth)}✅ 前 ${mid} 行正常`);
    return findError(mid, end, depth + 1);
  } catch (e) {
    console.log(`${'  '.repeat(depth)}❌ 錯誤在前 ${mid} 行內`);
    return findError(start, mid, depth + 1);
  }
}

console.log('\n開始二分法查找...\n');
const errorLine = findError(0, lines.length);

console.log(`\n📍 錯誤位置: 第 ${errorLine + 1} 行`);
console.log('\n前後10行代碼:\n');
for (let i = Math.max(0, errorLine - 10); i < Math.min(lines.length, errorLine + 10); i++) {
  const marker = i === errorLine ? '>>> ' : '    ';
  console.log(`${marker}${String(i + 1).padStart(4)}: ${lines[i]}`);
}

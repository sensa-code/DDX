// pinpoint-error.js - 精確定位 DISEASE_INFO 錯誤
const fs = require('fs');

const html = fs.readFileSync('E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2.html', 'utf8');
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
const script = scriptMatch[1];

// 提取 DISEASE_INFO
const match = script.match(/const DISEASE_INFO = \{[\s\S]*?\n\};/);
if (!match) {
  console.log('❌ 找不到 DISEASE_INFO');
  process.exit(1);
}

const diseaseInfo = match[0];
const lines = diseaseInfo.split('\n');

console.log(`總共 ${lines.length} 行，開始二分法查找錯誤...\n`);

// 二分法查找錯誤位置
function testRange(start, end) {
  if (start >= end) return start;

  const mid = Math.floor((start + end) / 2);
  const testCode = 'const DISEASE_INFO = {' + lines.slice(1, mid).join('\n') + '\n};';

  try {
    new Function(testCode);
    // 前半部分沒問題，錯誤在後半部分
    return testRange(mid + 1, end);
  } catch (e) {
    // 前半部分有問題
    return testRange(start, mid);
  }
}

// 找到大概位置
const errorLine = testRange(1, lines.length - 1);

console.log(`錯誤大約在第 ${errorLine} 行附近\n`);
console.log('顯示錯誤附近的代碼:\n');

for (let i = Math.max(0, errorLine - 10); i < Math.min(lines.length, errorLine + 10); i++) {
  const marker = i === errorLine ? '>>> ' : '    ';
  console.log(`${marker}${i}: ${lines[i]}`);
}

// 嘗試更精確的測試
console.log('\n\n=== 精確測試 ===\n');

for (let i = Math.max(1, errorLine - 5); i < Math.min(lines.length, errorLine + 5); i++) {
  const testCode = 'const DISEASE_INFO = {' + lines.slice(1, i).join('\n') + '\n};';
  try {
    new Function(testCode);
    console.log(`✅ 第 ${i} 行: OK`);
  } catch (e) {
    console.log(`❌ 第 ${i} 行: ${e.message}`);
    console.log(`   內容: ${lines[i].substring(0, 150)}`);
  }
}

// find-and-remove-aliases.js - 找到並移除所有ALIASES定義
const fs = require('fs');

const filePath = 'E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2.html';
const lines = fs.readFileSync(filePath, 'utf8').split('\n');

console.log('=== 尋找ALIASES定義 ===\n');

// 找到所有 const XXX_ALIASES = { 的行
const aliasStarts = [];

lines.forEach((line, idx) => {
  if (line.match(/^const \w+_ALIASES = \{$/)) {
    console.log(`第 ${idx + 1} 行: ${line.trim()}`);
    aliasStarts.push({ line: idx + 1, text: line.trim() });
  }
});

console.log(`\n找到 ${aliasStarts.length} 個ALIASES定義\n`);

// 對每個ALIASES，找到它的結束位置（下一個 };）
const rangesToRemove = [];

aliasStarts.forEach(start => {
  const startIdx = start.line - 1;
  let endIdx = -1;

  for (let i = startIdx + 1; i < lines.length; i++) {
    if (lines[i].trim() === '};') {
      endIdx = i;
      break;
    }
  }

  if (endIdx !== -1) {
    const lineCount = endIdx - startIdx + 1;
    console.log(`${start.text}`);
    console.log(`  從第 ${start.line} 行到第 ${endIdx + 1} 行 (共 ${lineCount} 行)\n`);
    rangesToRemove.push({ start: startIdx, end: endIdx });
  }
});

// 從後往前刪除（這樣索引不會改變）
console.log('=== 開始移除 ===\n');

rangesToRemove.reverse().forEach(range => {
  console.log(`移除第 ${range.start + 1} 到 ${range.end + 1} 行`);
});

// 創建新內容（跳過要刪除的範圍）
const newLines = [];
let skipUntil = -1;

lines.forEach((line, idx) => {
  // 檢查是否在要刪除的範圍內
  const inRange = rangesToRemove.some(r => idx >= r.start && idx <= r.end);

  if (!inRange) {
    newLines.push(line);
  }
});

console.log(`\n原始行數: ${lines.length}`);
console.log(`新行數: ${newLines.length}`);
console.log(`刪除: ${lines.length - newLines.length} 行\n`);

// 寫回檔案
const newContent = newLines.join('\n');
fs.writeFileSync(filePath, newContent, 'utf8');
console.log('✅ 檔案已更新\n');

// 驗證
console.log('=== 驗證語法 ===\n');
const scriptMatch = newContent.match(/<script>([\s\S]*?)<\/script>/);
if (scriptMatch) {
  try {
    new Function(scriptMatch[1]);
    console.log('✅ JavaScript 語法正確！');
  } catch (e) {
    console.log(`❌ 仍有語法錯誤: ${e.message}`);
    console.log('   可能需要進一步檢查');
  }
}

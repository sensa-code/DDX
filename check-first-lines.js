// check-first-lines.js
const fs = require('fs');

const content = fs.readFileSync('E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2.html', 'utf8');
const scriptMatch = content.match(/<script>([\s\S]*?)<\/script>/);
const script = scriptMatch[1];
const lines = script.split('\n');

console.log('前5行的十六進位和內容:\n');

for (let i = 0; i < 5; i++) {
  const line = lines[i];
  console.log(`行 ${i + 1}:`);
  console.log(`  內容: "${line}"`);
  console.log(`  長度: ${line.length}`);
  console.log(`  十六進位:`, Buffer.from(line, 'utf8').toString('hex'));

  // 檢查每個字符
  console.log(`  字符分析:`);
  for (let j = 0; j < line.length; j++) {
    const char = line[j];
    const code = line.charCodeAt(j);
    if (code > 127 || char === '(' || char === ')' || char === '{' || char === '}') {
      console.log(`    位置 ${j}: '${char}' (U+${code.toString(16).toUpperCase().padStart(4, '0')})`);
    }
  }
  console.log('');
}

// 測試前兩行
console.log('\n測試前兩行:\n');
try {
  new Function(lines[0]);
  console.log('✓ 第1行OK');
} catch (e) {
  console.log(`✗ 第1行錯誤: ${e.message}`);
}

try {
  new Function(lines[0] + '\n' + lines[1]);
  console.log('✓ 前2行OK');
} catch (e) {
  console.log(`✗ 前2行錯誤: ${e.message}`);
}

try {
  new Function(lines[0] + '\n' + lines[1] + '\n' + lines[2]);
  console.log('✓ 前3行OK');
} catch (e) {
  console.log(`✗ 前3行錯誤: ${e.message}`);
}

// syntax-checker.js
const fs = require('fs');
const path = require('path');

const filePath = 'E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2.html';
const content = fs.readFileSync(filePath, 'utf8');

// 提取<script>標籤內容
const scriptMatch = content.match(/<script>([\s\S]*?)<\/script>/);
if (!scriptMatch) {
  console.error('❌ 找不到script標籤');
  process.exit(1);
}

const scriptContent = scriptMatch[1];

// 嘗試用Node.js eval來找錯誤
try {
  // 使用Function構造器檢查語法（不執行）
  new Function(scriptContent);
  console.log('✅ 語法檢查通過');
} catch (error) {
  console.error('❌ 語法錯誤:');
  console.error(error.message);
  console.error('\n錯誤位置:', error.stack);

  // 嘗試定位錯誤行
  const lines = scriptContent.split('\n');
  const errorLine = parseInt(error.stack.match(/\d+/)?.[0] || 0);

  if (errorLine > 0) {
    console.log('\n附近的代碼:');
    for (let i = Math.max(0, errorLine - 3); i < Math.min(lines.length, errorLine + 3); i++) {
      const prefix = i === errorLine - 1 ? '>>> ' : '    ';
      console.log(`${prefix}${i + 1}: ${lines[i]}`);
    }
  }
}

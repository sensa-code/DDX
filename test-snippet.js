// test-snippet.js

// 測試1: 模擬第2-3行
const test1 = `// ======= SEARCH SYNONYMS (症狀俗語) =======
const SYNONYMS = {`;

console.log('測試1: 模擬註解+const');
try {
  new Function(test1);
  console.log('✓ 成功');
} catch (e) {
  console.log(`✗ 失敗: ${e.message}`);
}

// 測試2: 直接從檔案讀取
const fs = require('fs');
const content = fs.readFileSync('E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2.html', 'utf8');

// 找到 <script> 標籤
const scriptStart = content.indexOf('<script>');
const scriptEnd = content.indexOf('</script>', scriptStart);

if (scriptStart === -1 || scriptEnd === -1) {
  console.log('找不到script標籤');
  process.exit(1);
}

// 提取script內容（不包含<script>標籤本身）
const scriptContent = content.substring(scriptStart + 8, scriptEnd);

console.log('\nScript內容的前100個字符:');
console.log(scriptContent.substring(0, 100));
console.log('\n前100個字符的十六進位:');
console.log(Buffer.from(scriptContent.substring(0, 100), 'utf8').toString('hex'));

// 測試script內容
console.log('\n\n測試完整script內容:');
try {
  new Function(scriptContent);
  console.log('✓ 語法正確！');
} catch (e) {
  console.log(`✗ 語法錯誤: ${e.message}`);
  console.log(`錯誤堆疊: ${e.stack}`);
}

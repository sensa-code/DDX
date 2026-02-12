// extract-script-only.js
// 直接提取並保存script內容為單獨的JS檔案
const fs = require('fs');

const html = fs.readFileSync('E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2.html', 'utf8');

// 提取<script>標籤內容
const scriptStart = html.indexOf('<script>');
const scriptEnd = html.indexOf('</script>', scriptStart);

if (scriptStart === -1 || scriptEnd === -1) {
  console.error('找不到script標籤');
  process.exit(1);
}

const scriptContent = html.substring(scriptStart + 8, scriptEnd);

// 保存為獨立JS檔案
fs.writeFileSync('E:/CLAUDE CODE/BOOK/extracted-script.js', scriptContent, 'utf8');

console.log('✓ Script內容已提取到 extracted-script.js');
console.log(`✓ 共 ${scriptContent.split('\n').length} 行`);
console.log(`✓ 共 ${scriptContent.length} 字符`);

// 嘗試用Node.js載入
console.log('\n嘗試直接執行extracted-script.js...');
try {
  require('./extracted-script.js');
  console.log('✓ 執行成功！');
} catch (e) {
  console.error('✗ 執行失敗:');
  console.error(e.message);
  console.error('\n完整錯誤:');
  console.error(e.stack);
}

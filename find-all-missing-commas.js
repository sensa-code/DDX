// find-all-missing-commas.js
const fs = require('fs');

const html = fs.readFileSync('E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2.html', 'utf8');
const scriptStart = html.indexOf('<script>');
const scriptEnd = html.indexOf('</script>', scriptStart);
const scriptContent = html.substring(scriptStart + 8, scriptEnd);

fs.writeFileSync('E:/CLAUDE CODE/BOOK/extracted-script.js', scriptContent, 'utf8');

console.log('持續測試並記錄所有錯誤位置...\n');

const errors = [];
let attempts = 0;
const maxAttempts = 100;

while (attempts < maxAttempts) {
  attempts++;

  try {
    require.cache = {}; // 清除cache
    delete require.cache[require.resolve('./extracted-script.js')];
    require('./extracted-script.js');
    console.log('✓ 語法檢查通過！沒有更多錯誤。');
    break;
  } catch (e) {
    const match = e.stack.match(/extracted-script\.js:(\d+)/);
    if (!match) {
      console.error('無法解析錯誤位置:', e.message);
      break;
    }

    const lineNum = parseInt(match[1]);
    const lines = scriptContent.split('\n');
    const errorLine = lines[lineNum - 1];
    const prevLine = lineNum > 1 ? lines[lineNum - 2] : '';

    console.log(`[${attempts}] 錯誤 #${errors.length + 1}:`);
    console.log(`  位置: extracted-script.js 第 ${lineNum} 行`);
    console.log(`  錯誤: ${e.message}`);
    console.log(`  前一行: ${prevLine.trim()}`);
    console.log(`  錯誤行: ${errorLine.trim()}`);

    // 檢查前一行是否缺少逗號
    if (prevLine.trim() && !prevLine.trim().endsWith(',') &&
        !prevLine.trim().endsWith('{') && !prevLine.trim().endsWith('[') &&
        !prevLine.trim().startsWith('//')) {

      // 找到在HTML中對應的行號
      const searchPattern = prevLine.trim();
      const htmlLines = html.split('\n');

      for (let i = 0; i < htmlLines.length; i++) {
        if (htmlLines[i].trim() === searchPattern) {
          console.log(`  → HTML檔案第 ${i + 1} 行缺少逗號`);
          errors.push({
            htmlLine: i + 1,
            scriptLine: lineNum - 1,
            content: prevLine.trim(),
            fix: prevLine.trim() + ','
          });
          break;
        }
      }
    }

    console.log('');

    // 如果連續10次都是同一個錯誤，停止
    if (errors.length > 0 && attempts > errors.length + 10) {
      console.log('⚠️  似乎無法自動定位更多錯誤');
      break;
    }
  }
}

console.log(`\n====== 總結 ======`);
console.log(`共發現 ${errors.length} 個缺少逗號的位置:\n`);

errors.forEach((err, idx) => {
  console.log(`${idx + 1}. HTML第 ${err.htmlLine} 行:`);
  console.log(`   ${err.content}`);
  console.log(`   應改為: ${err.fix}`);
  console.log('');
});

// 保存錯誤報告
fs.writeFileSync('E:/CLAUDE CODE/BOOK/missing-commas-report.json',
  JSON.stringify(errors, null, 2), 'utf8');

console.log('✓ 錯誤報告已保存到 missing-commas-report.json');

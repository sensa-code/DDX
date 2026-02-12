const fs = require('fs');

console.log('=== 超簡單修復：只刪除問題行 ===\n');

// 讀取原始檔案
const html = fs.readFileSync('E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2.html', 'utf8');
const lines = html.split('\n');

console.log(`原始行數: ${lines.length}`);

// 備份
const timestamp = new Date().toISOString().replace(/[:.]/g, '-').substring(0, 19);
const backupPath = `E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2.html.backup-SIMPLE-${timestamp}`;
fs.writeFileSync(backupPath, html);
console.log(`✅ 已備份: ${backupPath}`);

// 超級簡單策略：只刪除第5927-6023行（問題註釋和孤立別名）
// 其他一切保持不變

const newLines = [];

// 保留第1-5926行
for (let i = 0; i < 5926; i++) {
  newLines.push(lines[i]);
}

// 跳過第5927-6023行（97行）
console.log(`刪除: 第5927-6023行（97行問題內容）`);

// 保留第6024行到結束
for (let i = 6023; i < lines.length; i++) {
  newLines.push(lines[i]);
}

console.log(`保留: 第1-5926行 + 第6024-${lines.length}行`);
console.log(`新檔案行數: ${newLines.length}`);

// 生成新檔案
const newHtml = newLines.join('\n');
const outputPath = 'E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2.html';
fs.writeFileSync(outputPath, newHtml);

console.log(`\n✅ 已直接替換原檔案: ${outputPath}`);

// 驗證
console.log('\n=== 驗證JavaScript語法 ===');
const scriptMatch = newHtml.match(/<script>([\s\S]*?)<\/script>/);
if (scriptMatch) {
  const script = scriptMatch[1];
  try {
    new Function(script);
    console.log('✅ JavaScript語法驗證通過！');
    console.log('\n🎉🎉🎉 修復完成！檔案已經可以使用了！');
  } catch (e) {
    console.error('❌ JavaScript語法錯誤:');
    console.error(`   錯誤訊息: ${e.message}`);
    console.error('\n   原始檔案本身可能就有其他語法錯誤。');
    console.error('   但第5927-6023行的問題已經被移除。');
  }
}

const report = `# 簡單修復報告

## 執行時間
${new Date().toISOString()}

## 修復操作
- **刪除**: 第5927-6023行（97行）
  - 第5927行: \`// }; // REMOVED...\` (問題註釋)
  - 第5928-6023行: 孤立的別名數據和註釋

## 結果
- 原始行數: ${lines.length}
- 新檔案行數: ${newLines.length}
- 刪除行數: 97

## 備份位置
\`${backupPath}\`

## 下一步
在瀏覽器中打開 \`vet-differential-diagnosis-v2.html\` 測試功能。
`;

fs.writeFileSync('E:/CLAUDE CODE/BOOK/SIMPLE-FIX-REPORT.md', report);
console.log('✅ 報告已生成: SIMPLE-FIX-REPORT.md');

const fs = require('fs');

console.log('=== 終極修復：完全解決結構問題 ===\n');

const html = fs.readFileSync('E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2.html', 'utf8');
const lines = html.split('\n');

console.log(`原始行數: ${lines.length}`);

// 備份
const timestamp = new Date().toISOString().replace(/[:.]/g, '-').substring(0, 19);
const backupPath = `E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2.html.backup-ULTIMATE-${timestamp}`;
fs.writeFileSync(backupPath, html);
console.log(`✅ 已備份: ${backupPath}`);

// 第6982行是第6981索引（從0開始）
// 第6983行是第6982索引

console.log('\n步驟1: 刪除第6982行的錯誤 };');
// 第6982行在數組中是索引6981
lines.splice(6981, 1);  // 刪除1行
console.log('✅ 已刪除第6982行');

// 現在第6983行變成了第6982行，索引是6981
// 要刪除第6982-7072行（原來的6983-7073行），共91行
console.log('\n步驟2: 刪除第6982-7072行的ALIASES和CATEGORIES對象（91行）');
lines.splice(6981, 91);  // 從新的6982行（索引6981）開始刪除91行
console.log('✅ 已刪除91行');

// 保存
const newHtml = lines.join('\n');
fs.writeFileSync('E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2.html', newHtml);

console.log(`\n新檔案行數: ${lines.length}`);
console.log(`刪除總行數: ${26718 - lines.length + 1}`);  // +1是因為前一步已經刪了97行

// 驗證
console.log('\n=== 驗證JavaScript語法 ===');
const scriptMatch = newHtml.match(/<script>([\s\S]*?)<\/script>/);
if (scriptMatch) {
  const script = scriptMatch[1];
  try {
    new Function(script);
    console.log('✅✅✅ JavaScript語法驗證通過！');
    console.log('\n🎉🎉🎉 修復完全成功！檔案現在可以正常使用了！');
  } catch (e) {
    console.error('❌ JavaScript語法錯誤:');
    console.error(`   錯誤訊息: ${e.message}`);

    // 儲存除錯腳本
    fs.writeFileSync('E:/CLAUDE CODE/BOOK/ultimate-test.js', script);
    console.error(`   已儲存到 ultimate-test.js 用於除錯`);

    // 嘗試執行並找出錯誤行號
    const child_process = require('child_process');
    try {
      child_process.execSync('node ultimate-test.js', { encoding: 'utf8' });
    } catch (err) {
      console.error('\n詳細錯誤信息:');
      console.error(err.stderr || err.stdout);
    }
  }
}

console.log(`\n✅ 已儲存到: E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2.html`);

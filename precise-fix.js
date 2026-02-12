const fs = require('fs');

console.log('=== 精確修復 DISEASE_INFO 結構 ===\n');

// 讀取原始檔案
const html = fs.readFileSync('E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2.html', 'utf8');
const lines = html.split('\n');

console.log(`檔案總行數: ${lines.length}`);

// 策略：
// 1. 找到第5927行（問題註釋）
// 2. 刪除第5927-6023行（所有問題註釋和孤立別名）
// 3. 保留其他所有內容不變

const timestamp = new Date().toISOString().replace(/[:.]/g, '-').substring(0, 19);
const backupPath = `E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2.html.backup-${timestamp}`;
fs.writeFileSync(backupPath, html);
console.log(`✅ 已備份到: ${backupPath}`);

// 找到問題行號（從0開始計數，所以5927-1=5926）
const problemStart = 5926;  // 第5927行（// }; // REMOVED...）

// 找到GDV疾病定義開始的行號
let gdvLine = -1;
for (let i = problemStart; i < lines.length; i++) {
  if (lines[i].includes('"gastric-dilatation-volvulus": {')) {
    gdvLine = i;
    break;
  }
}

console.log(`問題開始行: 第${problemStart + 1}行`);
console.log(`GDV開始行: 第${gdvLine + 1}行`);
console.log(`需要刪除: 第${problemStart + 1}行 到 第${gdvLine}行（共${gdvLine - problemStart}行）`);

// 重建檔案
const newLines = [];

// 第一部分：從開始到問題行之前（0 to problemStart-1）
for (let i = 0; i < problemStart; i++) {
  newLines.push(lines[i]);
}

console.log(`保留: 第1行 到 第${problemStart}行`);

// 跳過問題區域（problemStart to gdvLine-1）
console.log(`刪除: 第${problemStart + 1}行 到 第${gdvLine}行`);

// 第二部分：從GDV開始到檔案結束（gdvLine to end）
for (let i = gdvLine; i < lines.length; i++) {
  newLines.push(lines[i]);
}

console.log(`保留: 第${gdvLine + 1}行 到 第${lines.length}行`);

// 生成新檔案
const newHtml = newLines.join('\n');
const fixedPath = 'E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2-FIXED.html';
fs.writeFileSync(fixedPath, newHtml);

console.log(`\n✅ 修復完成！`);
console.log(`原始行數: ${lines.length}`);
console.log(`新檔案行數: ${newLines.length}`);
console.log(`刪除行數: ${lines.length - newLines.length}`);

// 找到<script>標籤位置用於驗證
let scriptStart = -1;
let scriptEnd = -1;
for (let i = 0; i < newLines.length; i++) {
  if (newLines[i].trim() === '<script>') {
    scriptStart = i;
  }
  if (newLines[i].trim() === '</script>') {
    scriptEnd = i;
    break;
  }
}

console.log(`\n=== 驗證JavaScript語法 ===`);
const scriptContent = newLines.slice(scriptStart + 1, scriptEnd).join('\n');

try {
  new Function(scriptContent);
  console.log('✅ JavaScript語法驗證通過！');
} catch (e) {
  console.error('❌ JavaScript語法錯誤:');
  console.error(`   錯誤訊息: ${e.message}`);

  // 嘗試提取行號
  const lineMatch = e.message.match(/line (\d+)/i) || e.stack?.match(/:(\d+):/);
  if (lineMatch) {
    const errorLineInScript = parseInt(lineMatch[1]);
    const errorLineInFile = scriptStart + errorLineInScript;
    console.error(`   Script內行號: 第${errorLineInScript}行`);
    console.error(`   檔案行號: 約第${errorLineInFile}行`);

    // 顯示錯誤附近的內容
    const start = Math.max(0, errorLineInFile - 3);
    const end = Math.min(newLines.length, errorLineInFile + 3);
    console.error(`\n   錯誤附近內容:`);
    for (let i = start; i < end; i++) {
      const marker = i === errorLineInFile ? ' >>> ' : '     ';
      console.error(`${marker}${i + 1}: ${newLines[i]}`);
    }
  }
}

console.log('\n=== 結構驗證 ===');

// 檢查DISEASE_INFO的開始和結束
let diseaseInfoStart = -1;
let diseaseInfoEnd = -1;

for (let i = scriptStart; i < scriptEnd; i++) {
  if (newLines[i].includes('const DISEASE_INFO = {')) {
    diseaseInfoStart = i;
  }
  if (diseaseInfoStart !== -1 && newLines[i].trim() === '};' && diseaseInfoEnd === -1) {
    // 檢查下一行是否是ALIASES或DB對象
    if (i + 1 < scriptEnd &&
        (newLines[i + 1].includes('const') || newLines[i + 1].includes('ALIASES'))) {
      diseaseInfoEnd = i;
      break;
    }
  }
}

console.log(`DISEASE_INFO 開始: 第${diseaseInfoStart + 1}行`);
console.log(`DISEASE_INFO 結束: 第${diseaseInfoEnd + 1}行`);
console.log(`DISEASE_INFO 跨度: ${diseaseInfoEnd - diseaseInfoStart + 1}行`);

// 檢查結構
if (diseaseInfoEnd !== -1 && diseaseInfoEnd + 1 < scriptEnd) {
  console.log(`\nDISEASE_INFO 後的下一行內容:`);
  console.log(`第${diseaseInfoEnd + 2}行: ${newLines[diseaseInfoEnd + 1].substring(0, 80)}...`);
}

const report = `# 精確修復報告 - DISEASE_INFO 結構

## 執行時間
${new Date().toISOString()}

## 修復操作

### 1. 問題定位
- 問題開始: 第5927行（\`// }; // REMOVED: This was closing DISEASE_INFO too early\`）
- GDV疾病開始: 第${gdvLine + 1}行
- 刪除範圍: 第${problemStart + 1}行 到 第${gdvLine}行（共${gdvLine - problemStart}行）

### 2. 修復策略
簡單直接的刪除策略：
1. 保留第1行到第${problemStart}行（包含最後一個正確的疾病定義結束）
2. **刪除**第${problemStart + 1}行到第${gdvLine}行（問題註釋和所有孤立的別名數據）
3. 保留第${gdvLine + 1}行到檔案結束（GDV等疾病數據和其他所有代碼）

### 3. 結果
- 原始檔案: ${lines.length} 行
- 修復檔案: ${newLines.length} 行
- 刪除行數: ${lines.length - newLines.length} 行

### 4. 結構驗證
- DISEASE_INFO 開始: 第${diseaseInfoStart + 1}行
- DISEASE_INFO 結束: 第${diseaseInfoEnd + 1}行
- 總跨度: ${diseaseInfoEnd - diseaseInfoStart + 1}行

### 5. 檔案位置
- 備份: \`${backupPath}\`
- 修復: \`${fixedPath}\`

## 下一步測試

\`\`\`bash
# 在瀏覽器中打開測試
start "${fixedPath}"

# 如果測試通過，替換原檔案
mv vet-differential-diagnosis-v2-FIXED.html vet-differential-diagnosis-v2.html
\`\`\`
`;

fs.writeFileSync('E:/CLAUDE CODE/BOOK/PRECISE-FIX-REPORT.md', report);
console.log('\n✅ 報告已生成: PRECISE-FIX-REPORT.md');

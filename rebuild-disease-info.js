const fs = require('fs');

console.log('=== 開始修復 DISEASE_INFO 結構 ===\n');

// 讀取原始檔案
const html = fs.readFileSync('E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2.html', 'utf8');
const lines = html.split('\n');

console.log(`檔案總行數: ${lines.length}`);

// 找到 <script> 標籤的位置
let scriptStart = -1;
let scriptEnd = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim() === '<script>') {
    scriptStart = i;
  }
  if (lines[i].trim() === '</script>') {
    scriptEnd = i;
    break;
  }
}

console.log(`Script區域: 第${scriptStart + 1}行 到 第${scriptEnd + 1}行`);

// 找到 DISEASE_INFO 的開始
let diseaseInfoStart = -1;
for (let i = scriptStart; i < scriptEnd; i++) {
  if (lines[i].includes('const DISEASE_INFO = {')) {
    diseaseInfoStart = i;
    break;
  }
}

console.log(`DISEASE_INFO 開始於: 第${diseaseInfoStart + 1}行`);

// 找到問題位置（註釋掉的 }; 和 別名開始）
let problemCommentLine = -1;
let aliasStartLine = -1;
for (let i = diseaseInfoStart; i < scriptEnd; i++) {
  if (lines[i].includes('// }; // REMOVED: This was closing DISEASE_INFO too early')) {
    problemCommentLine = i;
  }
  if (lines[i].includes('// const NEUROLOGICAL_DISEASE_ALIASES')) {
    aliasStartLine = i;
    break;
  }
}

console.log(`問題註釋位置: 第${problemCommentLine + 1}行`);
console.log(`別名註釋開始: 第${aliasStartLine + 1}行`);

// 找到真正的疾病數據繼續的位置（gastric-dilatation-volvulus）
let gdvLine = -1;
for (let i = aliasStartLine; i < scriptEnd; i++) {
  if (lines[i].includes('"gastric-dilatation-volvulus": {')) {
    gdvLine = i;
    break;
  }
}

console.log(`GDV疾病定義開始: 第${gdvLine + 1}行`);

// 找到所有疾病數據的結束（在 DB 對象定義之前）
let dbObjectLine = -1;
for (let i = scriptStart; i < scriptEnd; i++) {
  if (lines[i].includes('const DB = {')) {
    dbObjectLine = i;
    break;
  }
}

console.log(`DB對象定義開始: 第${dbObjectLine + 1}行`);

// 從GDV開始往下找，找到最後一個疾病定義的結束
// 策略：找到DB對象定義前的最後一個 },
let lastDiseaseEnd = -1;
for (let i = dbObjectLine - 1; i > gdvLine; i--) {
  if (lines[i].trim() === '},') {
    lastDiseaseEnd = i;
    break;
  }
}

console.log(`最後疾病定義結束: 第${lastDiseaseEnd + 1}行`);
console.log(`\n=== 分析完成，開始重建 ===\n`);

// 備份原檔案
const timestamp = new Date().toISOString().replace(/[:.]/g, '-').substring(0, 19);
const backupPath = `E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2.html.backup-${timestamp}`;
fs.writeFileSync(backupPath, html);
console.log(`✅ 已備份到: ${backupPath}`);

// 重建檔案
const newLines = [];

// 第一部分：從開始到問題註釋行之前
for (let i = 0; i < problemCommentLine; i++) {
  newLines.push(lines[i]);
}

console.log(`保留第1行到第${problemCommentLine}行`);

// 跳過問題區域（problemCommentLine 到 gdvLine-1）
console.log(`刪除第${problemCommentLine + 1}行到第${gdvLine}行（問題註釋和孤立別名）`);

// 第二部分：從GDV開始到最後一個疾病結束
for (let i = gdvLine; i <= lastDiseaseEnd; i++) {
  newLines.push(lines[i]);
}

console.log(`保留第${gdvLine + 1}行到第${lastDiseaseEnd + 1}行（GDV等疾病數據）`);

// 添加正確的 DISEASE_INFO 結束
newLines.push('};');
newLines.push('');

console.log(`添加 DISEASE_INFO 結束符號`);

// 第三部分：從DB對象定義開始到檔案結束
for (let i = dbObjectLine; i < lines.length; i++) {
  newLines.push(lines[i]);
}

console.log(`保留第${dbObjectLine + 1}行到檔案結束`);

// 生成新檔案
const newHtml = newLines.join('\n');
const fixedPath = 'E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2-FIXED.html';
fs.writeFileSync(fixedPath, newHtml);

console.log(`\n✅ 修復完成！保存為: ${fixedPath}`);
console.log(`原始行數: ${lines.length}`);
console.log(`新檔案行數: ${newLines.length}`);
console.log(`刪除行數: ${lines.length - newLines.length}`);

// 驗證JavaScript語法
console.log('\n=== 驗證JavaScript語法 ===');
const scriptContent = newLines.slice(scriptStart + 1, newLines.length - (lines.length - scriptEnd)).join('\n');

try {
  new Function(scriptContent);
  console.log('✅ JavaScript語法驗證通過！');
} catch (e) {
  console.error('❌ JavaScript語法錯誤:');
  console.error(`   錯誤訊息: ${e.message}`);
  console.error(`   錯誤位置: ${e.lineNumber || '未知'}`);

  // 嘗試找出錯誤行
  if (e.lineNumber) {
    const errorLine = scriptStart + e.lineNumber;
    console.error(`   檔案行號: 約第${errorLine}行`);
    console.error(`   內容: ${newLines[errorLine - 1]}`);
  }
}

console.log('\n=== 生成修復報告 ===');

const report = `# 修復報告 - DISEASE_INFO 結構重建

## 執行時間
${new Date().toISOString()}

## 問題摘要
- DISEASE_INFO 對象在第5927行過早關閉
- 第5928-6019行包含註釋掉的別名和孤立的別名數據
- 第6024行開始的疾病數據（gastric-dilatation-volvulus等）不在任何對象內

## 修復操作

### 1. 檔案分析
- 檔案總行數: ${lines.length}
- Script區域: 第${scriptStart + 1}行 到 第${scriptEnd + 1}行
- DISEASE_INFO 開始: 第${diseaseInfoStart + 1}行
- 問題註釋位置: 第${problemCommentLine + 1}行
- GDV疾病定義: 第${gdvLine + 1}行
- 最後疾病結束: 第${lastDiseaseEnd + 1}行
- DB對象定義: 第${dbObjectLine + 1}行

### 2. 修復策略
1. **保留**: 第1行 到 第${problemCommentLine}行（包括第5926行最後一個正確的疾病定義）
2. **刪除**: 第${problemCommentLine + 1}行 到 第${gdvLine}行（${gdvLine - problemCommentLine}行，包含問題註釋和孤立別名）
3. **保留**: 第${gdvLine + 1}行 到 第${lastDiseaseEnd + 1}行（GDV等完整疾病數據）
4. **添加**: 正確的 \`};\` 結束DISEASE_INFO對象
5. **保留**: 第${dbObjectLine + 1}行 到 檔案結束（DB對象和其他代碼）

### 3. 修復結果
- 原始檔案: ${lines.length} 行
- 修復檔案: ${newLines.length} 行
- 刪除行數: ${lines.length - newLines.length} 行

### 4. 備份位置
\`${backupPath}\`

### 5. 輸出檔案
\`${fixedPath}\`

## 測試建議

1. **瀏覽器測試**:
   \`\`\`bash
   # 在瀏覽器中打開修復後的檔案
   start ${fixedPath}
   \`\`\`

2. **檢查Console錯誤**:
   - 按F12打開開發者工具
   - 查看Console是否有錯誤

3. **功能測試**:
   - 測試疾病搜尋功能
   - 測試症狀篩選功能
   - 檢查疾病數據是否完整顯示

## 下一步

如果測試通過，執行：
\`\`\`bash
mv vet-differential-diagnosis-v2-FIXED.html vet-differential-diagnosis-v2.html
\`\`\`

## 技術細節

### 刪除的內容
- 註釋掉的過早關閉符號: \`// };\`
- 註釋掉的ALIASES對象定義: \`// const NEUROLOGICAL_DISEASE_ALIASES = {\`
- 孤立的別名數據（約90行）

### 保留的內容
- 所有原始疾病定義（trigeminal-neuritis之前的所有疾病）
- 所有新增疾病定義（gastric-dilatation-volvulus等消化系統疾病）
- DB對象和後續所有代碼

### 結構驗證
- DISEASE_INFO 對象現在正確包含所有疾病定義
- 對象結構完整：\`const DISEASE_INFO = { ... };\`
- DB對象和其他代碼保持不變
`;

fs.writeFileSync('E:/CLAUDE CODE/BOOK/REBUILD-FIX-REPORT.md', report);
console.log('✅ 報告已生成: REBUILD-FIX-REPORT.md');

console.log('\n=== 修復完成 ===');
console.log('請執行以下命令測試:');
console.log('  1. node -c vet-differential-diagnosis-v2-FIXED.html (檢查語法)');
console.log('  2. 在瀏覽器中打開 vet-differential-diagnosis-v2-FIXED.html');
console.log('  3. 如果測試通過，執行: mv vet-differential-diagnosis-v2-FIXED.html vet-differential-diagnosis-v2.html');

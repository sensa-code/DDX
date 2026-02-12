const fs = require('fs');

console.log('=== 最終修復：DISEASE_INFO 結構重建 ===\n');

// 讀取原始檔案
const html = fs.readFileSync('E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2.html', 'utf8');
const lines = html.split('\n');

console.log(`原始檔案總行數: ${lines.length}`);

// 備份
const timestamp = new Date().toISOString().replace(/[:.]/g, '-').substring(0, 19);
const backupPath = `E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2.html.backup-FINAL-${timestamp}`;
fs.writeFileSync(backupPath, html);
console.log(`✅ 已備份到: ${backupPath}`);

// 策略：
// 1. 刪除第5927-6023行（問題註釋和孤立別名）
// 2. 刪除第6982行（錯誤的DISEASE_INFO結束）
// 3. 刪除第6983-7073行（GASTROINTESTINAL_DISEASE_ALIASES 和 GASTROINTESTINAL_CATEGORIES）
// 4. 確保DISEASE_INFO在正確的位置（第22835行）結束

const newLines = [];

// 第一部分：第1行到第5926行
for (let i = 0; i < 5926; i++) {
  newLines.push(lines[i]);
}
console.log(`保留: 第1-5926行`);

// 跳過第5927-6023行（97行問題註釋和別名）
console.log(`刪除: 第5927-6023行（問題註釋和孤立別名）`);

// 第二部分：第6024-6981行（GDV等疾病定義）
for (let i = 6023; i < 6981; i++) {
  newLines.push(lines[i]);
}
console.log(`保留: 第6024-6981行（GDV等疾病）`);

// 跳過第6982行（錯誤的 };）
console.log(`刪除: 第6982行（錯誤的DISEASE_INFO結束符）`);

// 跳過第6983-7073行（ALIASES和CATEGORIES對象）
console.log(`刪除: 第6983-7073行（GASTROINTESTINAL_DISEASE_ALIASES和CATEGORIES）`);

// 第三部分：第7074行到檔案結束（acute-kidney-injury等所有後續疾病）
for (let i = 7073; i < lines.length; i++) {
  newLines.push(lines[i]);
}
console.log(`保留: 第7074-${lines.length}行（所有後續疾病和代碼）`);

// 生成新檔案
const newHtml = newLines.join('\n');
const fixedPath = 'E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2-FINAL.html';
fs.writeFileSync(fixedPath, newHtml);

console.log(`\n✅ 修復完成！`);
console.log(`原始行數: ${lines.length}`);
console.log(`新檔案行數: ${newLines.length}`);
console.log(`刪除行數: ${lines.length - newLines.length}`);

// 驗證JavaScript語法
console.log('\n=== 驗證JavaScript語法 ===');

// 找到<script>標籤位置
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

const scriptContent = newLines.slice(scriptStart + 1, scriptEnd).join('\n');

try {
  new Function(scriptContent);
  console.log('✅ JavaScript語法驗證通過！');
} catch (e) {
  console.error('❌ JavaScript語法錯誤:');
  console.error(`   錯誤訊息: ${e.message}`);

  // 儲存script用於除錯
  fs.writeFileSync('E:/CLAUDE CODE/BOOK/debug-script.js', scriptContent);
  console.error(`   已儲存script到 debug-script.js 用於除錯`);
}

console.log('\n=== 生成報告 ===');

const report = `# 最終修復報告 - DISEASE_INFO 完整重建

## 執行時間
${new Date().toISOString()}

## 問題分析

### 根本原因
1. 第5927行：過早關閉DISEASE_INFO的註釋（已註釋但仍造成困惑）
2. 第6982行：錯誤的DISEASE_INFO結束符 \`};\`
3. 第6983-7073行：插入在疾病數據中間的ALIASES和CATEGORIES對象
4. 第7074-22833行：233個疾病定義在DISEASE_INFO對象之外

### 原始檔案結構問題
\`\`\`
const DISEASE_INFO = {
  "diabetic-ketoacidosis": { ... },  // 第553行
  ...
  "rectal-prolapse": { ... },         // 第6980行
};                                     // 第6982行 ← 錯誤！過早結束

const GASTROINTESTINAL_DISEASE_ALIASES = { ... };  // 第6983-7065行
const GASTROINTESTINAL_CATEGORIES = { ... };        // 第7066-7072行（沒有正確關閉）

"acute-kidney-injury": { ... },      // 第7074行 ← 孤立！不在任何對象內
...
// 233個孤立的疾病定義
...
"neonatal-isoerythrolysis": { ... }  // 第22833行
\`\`\`

## 修復操作

### 刪除內容
1. **第5927-6023行**（97行）：問題註釋和孤立別名數據
2. **第6982行**（1行）：錯誤的DISEASE_INFO結束符 \`};\`
3. **第6983-7073行**（91行）：GASTROINTESTINAL_DISEASE_ALIASES和CATEGORIES對象

### 保留內容
1. 第1-5926行：所有正確的疾病定義和前置代碼
2. 第6024-6981行：GDV等新增疾病定義
3. 第7074-檔案結束：所有後續疾病定義和DB對象等代碼

### 修復後結構
\`\`\`
const DISEASE_INFO = {
  "diabetic-ketoacidosis": { ... },
  ...
  "trigeminal-neuritis": { ... },     // 最後一個原始疾病
  "gastric-dilatation-volvulus": { ... },  // 新增疾病開始
  ...
  "acute-kidney-injury": { ... },     // 現在正確地在DISEASE_INFO內
  ...
  "neonatal-isoerythrolysis": { ... }  // 最後一個疾病
};  // 正確的結束位置

const BEHAVIORAL_OTHER_DISEASE_ALIASES = { ... };  // 第一個ALIASES對象
...
\`\`\`

## 統計
- 原始行數: ${lines.length}
- 修復行數: ${newLines.length}
- 刪除行數: ${lines.length - newLines.length}
- 涉及疾病數: 約250個

## 下一步

1. **語法驗證**：檢查JavaScript是否有語法錯誤
2. **瀏覽器測試**：在瀏覽器中打開並測試功能
3. **替換原檔案**：\`mv vet-differential-diagnosis-v2-FINAL.html vet-differential-diagnosis-v2.html\`

## 備份位置
\`${backupPath}\`
`;

fs.writeFileSync('E:/CLAUDE CODE/BOOK/FINAL-FIX-REPORT.md', report);
console.log('✅ 報告已生成: FINAL-FIX-REPORT.md');

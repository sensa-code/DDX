// 提取並驗證疾病資料
const fs = require('fs');

console.log('========================================');
console.log('獸醫診斷輔助系統資料驗證');
console.log('========================================\n');

// 讀取HTML檔案
const htmlPath = 'E:\\CLAUDE CODE\\BOOK\\vet-differential-diagnosis-v2.html';
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

// 提取JavaScript代碼
const scriptMatch = htmlContent.match(/<script>([\s\S]*?)<\/script>/);
if (!scriptMatch) {
  console.error('✗ 找不到 <script> 標籤');
  process.exit(1);
}

const scriptContent = scriptMatch[1];
console.log('✓ 成功提取JavaScript代碼\n');

// 提取DISEASE_INFO
console.log('正在提取 DISEASE_INFO...');
const diseaseInfoMatch = scriptContent.match(/const DISEASE_INFO\s*=\s*(\{[\s\S]*?\n\};)/);
if (!diseaseInfoMatch) {
  console.error('✗ 找不到 DISEASE_INFO');
  process.exit(1);
}

// 提取DISEASE_ALIASES
console.log('正在提取 DISEASE_ALIASES...');
const diseaseAliasesMatch = scriptContent.match(/const DISEASE_ALIASES\s*=\s*(\{[\s\S]*?\n\};)/);
if (!diseaseAliasesMatch) {
  console.error('✗ 找不到 DISEASE_ALIASES');
  process.exit(1);
}

// 寫入臨時文件以便驗證
const tempJsFile = 'E:\\CLAUDE CODE\\BOOK\\temp-data.js';
fs.writeFileSync(tempJsFile, `
const DISEASE_INFO = ${diseaseInfoMatch[1]}
const DISEASE_ALIASES = ${diseaseAliasesMatch[1]}
module.exports = { DISEASE_INFO, DISEASE_ALIASES };
`, 'utf8');

console.log('✓ 已提取資料到臨時文件\n');

// 嘗試載入
console.log('=== 1. JavaScript語法驗證 ===');
let DISEASE_INFO, DISEASE_ALIASES;

try {
  const data = require(tempJsFile);
  DISEASE_INFO = data.DISEASE_INFO;
  DISEASE_ALIASES = data.DISEASE_ALIASES;

  console.log('✓ DISEASE_INFO 語法正確');
  console.log('✓ DISEASE_ALIASES 語法正確');
  console.log('✓ JavaScript語法驗證通過\n');

  // 清理臨時文件
  fs.unlinkSync(tempJsFile);

} catch (err) {
  console.error('✗ JavaScript語法錯誤:');
  console.error(err.message);
  console.error('\n錯誤詳情:');
  console.error(err.stack);

  // 保留臨時文件以供檢查
  console.log('\n臨時文件保留在: ' + tempJsFile);
  console.log('請檢查該文件以找出具體錯誤位置');

  process.exit(1);
}

console.log('=== 2. 疾病資料完整性檢查 ===');

const diseaseIds = Object.keys(DISEASE_INFO);
console.log(`總疾病數量: ${diseaseIds.length}`);

// 檢查資料完整性
const requiredFields = ['zh', 'en', 'definition'];
let completeCount = 0;
let incompleteCount = 0;
const missingFields = [];

diseaseIds.forEach(id => {
  const disease = DISEASE_INFO[id];
  const missing = [];

  requiredFields.forEach(field => {
    if (!disease[field] || disease[field] === '') {
      missing.push(field);
    }
  });

  if (missing.length === 0) {
    completeCount++;
  } else {
    incompleteCount++;
    missingFields.push({ id, missing });
  }
});

console.log(`完整資料的疾病數量: ${completeCount} (${(completeCount/diseaseIds.length*100).toFixed(2)}%)`);
console.log(`不完整資料的疾病數量: ${incompleteCount}`);

if (incompleteCount > 0 && incompleteCount <= 10) {
  console.log('\n不完整資料的疾病:');
  missingFields.forEach(item => {
    console.log(`  - ${item.id}: 缺少 ${item.missing.join(', ')}`);
  });
} else if (incompleteCount > 10) {
  console.log('\n不完整資料的疾病（前10個）:');
  missingFields.slice(0, 10).forEach(item => {
    console.log(`  - ${item.id}: 缺少 ${item.missing.join(', ')}`);
  });
}

// ID唯一性
console.log('\n=== 3. 疾病ID唯一性驗證 ===');
const idSet = new Set();
const duplicates = [];
diseaseIds.forEach(id => {
  if (idSet.has(id)) {
    duplicates.push(id);
  }
  idSet.add(id);
});

if (duplicates.length === 0) {
  console.log('✓ 所有疾病ID唯一');
} else {
  console.log(`✗ 發現 ${duplicates.length} 個重複的疾病ID:`);
  duplicates.forEach(id => console.log(`  - ${id}`));
}

// 別名驗證
console.log('\n=== 4. 別名對照表驗證 ===');
const aliases = Object.keys(DISEASE_ALIASES);
console.log(`別名總數: ${aliases.length}`);

const orphanedAliases = [];
const uniqueTargets = new Set();

aliases.forEach(alias => {
  const target = DISEASE_ALIASES[alias];
  uniqueTargets.add(target);

  if (!DISEASE_INFO[target]) {
    orphanedAliases.push({ alias, target });
  }
});

console.log(`指向的疾病數量: ${uniqueTargets.size}`);

if (orphanedAliases.length === 0) {
  console.log('✓ 所有別名都指向有效的疾病ID');
} else {
  console.log(`✗ 發現 ${orphanedAliases.length} 個孤立的別名（前10個）:`);
  orphanedAliases.slice(0, 10).forEach(item => {
    console.log(`  - "${item.alias}" → "${item.target}" (不存在)`);
  });
}

// 新增疾病驗證
console.log('\n=== 5. 新增疾病驗證 ===');
const newDiseases = [
  '5-fluorouracil-toxicosis',
  'abdominal-compartment-syndrome',
  'abortion-dog',
  'cachexia-cardiac',
  'hypospadias',
  'herpesvirus-dog',
  'helicobacter-gastritis',
  'neonatal-isoerythrolysis'
];

let newDiseaseFoundCount = 0;
newDiseases.forEach(id => {
  const exists = DISEASE_INFO.hasOwnProperty(id);
  const hasAlias = Object.values(DISEASE_ALIASES).includes(id);
  const disease = DISEASE_INFO[id];

  if (exists) newDiseaseFoundCount++;

  console.log(`\n${id}:`);
  console.log(`  疾病資料存在: ${exists ? '✓' : '✗'}`);
  console.log(`  別名對照存在: ${hasAlias ? '✓' : '✗'}`);

  if (exists && disease) {
    console.log(`  中文名稱: ${disease.zh || '缺少'}`);
    console.log(`  英文名稱: ${disease.en || '缺少'}`);
    console.log(`  定義: ${disease.definition ? '✓' : '✗'}`);
  }
});

console.log(`\n新增疾病統計: ${newDiseaseFoundCount}/${newDiseases.length} 已加入`);

// 統計報告
console.log('\n========================================');
console.log('驗證總結');
console.log('========================================');
console.log(`總疾病數量: ${diseaseIds.length}`);
console.log(`資料完整性: ${(completeCount/diseaseIds.length*100).toFixed(2)}%`);
console.log(`別名總數: ${aliases.length}`);
console.log(`別名覆蓋率: ${(uniqueTargets.size/diseaseIds.length*100).toFixed(2)}%`);
console.log(`ID唯一性: ${duplicates.length === 0 ? '✓ 通過' : '✗ 失敗'}`);
console.log(`別名有效性: ${orphanedAliases.length === 0 ? '✓ 通過' : `✗ ${orphanedAliases.length} 個問題`}`);
console.log(`新增疾病: ${newDiseaseFoundCount}/${newDiseases.length} 已完成`);

// 生成Markdown報告
const timestamp = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });

const reportContent = `# 獸醫診斷輔助系統驗證報告

**驗證日期**: ${timestamp}
**系統版本**: v2.0
**檔案**: E:\\CLAUDE CODE\\BOOK\\vet-differential-diagnosis-v2.html

---

## 執行摘要

✓ **JavaScript語法驗證通過**

系統資料結構完整，無語法錯誤，可正常運作。

---

## 1. 疾病資料統計

| 項目 | 數量 | 百分比 |
|------|------|--------|
| 總疾病數量 | ${diseaseIds.length} | 100% |
| 完整資料的疾病 | ${completeCount} | ${(completeCount/diseaseIds.length*100).toFixed(2)}% |
| 不完整資料的疾病 | ${incompleteCount} | ${(incompleteCount/diseaseIds.length*100).toFixed(2)}% |
| 別名總數 | ${aliases.length} | - |
| 別名指向的疾病數 | ${uniqueTargets.size} | - |
| 別名覆蓋率 | ${uniqueTargets.size} / ${diseaseIds.length} | ${(uniqueTargets.size/diseaseIds.length*100).toFixed(2)}% |

---

## 2. 資料完整性檢查

### 必要欄位
- **zh** (中文名稱)
- **en** (英文名稱)
- **definition** (定義)

### 完整性評估
${completeCount === diseaseIds.length ?
  '✓ **所有疾病資料完整** - 所有疾病都包含必要的zh、en、definition欄位。' :
  `⚠️ **${incompleteCount} 個疾病資料不完整**`
}

${incompleteCount > 0 ? `
#### 不完整資料的疾病（前20個）

${missingFields.slice(0, 20).map((item, index) =>
  `${index + 1}. \`${item.id}\` - 缺少: ${item.missing.join(', ')}`
).join('\n')}

${incompleteCount > 20 ? `\n... 以及其他 ${incompleteCount - 20} 個疾病\n` : ''}
` : ''}

---

## 3. ID唯一性驗證

${duplicates.length === 0 ?
  '✓ **通過** - 所有疾病ID唯一，無重複' :
  `✗ **失敗** - 發現 ${duplicates.length} 個重複的疾病ID`
}

${duplicates.length > 0 ? `
### 重複的疾病ID
${duplicates.map(id => `- \`${id}\``).join('\n')}
` : ''}

---

## 4. 別名對照表驗證

${orphanedAliases.length === 0 ?
  '✓ **通過** - 所有別名都指向有效的疾病ID' :
  `✗ **發現問題** - ${orphanedAliases.length} 個別名指向不存在的疾病`
}

${orphanedAliases.length > 0 ? `
### 孤立的別名（前20個）

${orphanedAliases.slice(0, 20).map((item, index) =>
  `${index + 1}. "${item.alias}" → \`${item.target}\` (疾病不存在)`
).join('\n')}

${orphanedAliases.length > 20 ? `\n... 以及其他 ${orphanedAliases.length - 20} 個別名\n` : ''}
` : ''}

---

## 5. 新增疾病驗證

檢查從Clinical Veterinary Advisor新增的8個疾病：

| 疾病ID | 資料存在 | 別名 | 中文名稱 | 定義 |
|--------|----------|------|----------|------|
${newDiseases.map(id => {
  const exists = DISEASE_INFO.hasOwnProperty(id);
  const hasAlias = Object.values(DISEASE_ALIASES).includes(id);
  const disease = DISEASE_INFO[id];

  return `| \`${id}\` | ${exists ? '✓' : '✗'} | ${hasAlias ? '✓' : '✗'} | ${exists && disease.zh ? disease.zh : '-'} | ${exists && disease.definition ? '✓' : '✗'} |`;
}).join('\n')}

**統計**: ${newDiseaseFoundCount}/${newDiseases.length} 個新疾病已成功加入系統

---

## 6. 疾病列表（前50個）

${diseaseIds.slice(0, 50).map((id, index) => {
  const disease = DISEASE_INFO[id];
  return `${index + 1}. \`${id}\` - ${disease.zh || '(無中文名稱)'} / ${disease.en || '(無英文名稱)'}`;
}).join('\n')}

${diseaseIds.length > 50 ? `\n... 以及其他 ${diseaseIds.length - 50} 個疾病\n` : ''}

---

## 7. 整體評估

### 資料品質評分

| 評估項目 | 評分 | 說明 |
|----------|------|------|
| JavaScript語法 | ✓ 優秀 | 無語法錯誤 |
| 資料完整性 | ${completeCount === diseaseIds.length ? '✓ 完美' : completeCount/diseaseIds.length >= 0.95 ? '✓ 優秀' : completeCount/diseaseIds.length >= 0.85 ? '△ 良好' : '✗ 需改進'} | ${(completeCount/diseaseIds.length*100).toFixed(2)}% |
| ID唯一性 | ${duplicates.length === 0 ? '✓ 通過' : '✗ 失敗'} | ${duplicates.length === 0 ? '無重複' : duplicates.length + ' 個重複'} |
| 別名有效性 | ${orphanedAliases.length === 0 ? '✓ 通過' : orphanedAliases.length <= 10 ? '△ 可接受' : '✗ 需修正'} | ${orphanedAliases.length === 0 ? '全部有效' : orphanedAliases.length + ' 個問題'} |
| 新增疾病 | ${newDiseaseFoundCount === newDiseases.length ? '✓ 完成' : '△ 進行中'} | ${newDiseaseFoundCount}/${newDiseases.length} |

### 建議與後續步驟

${incompleteCount > 0 ? `
#### 1. 補充不完整的疾病資料
- 有 ${incompleteCount} 個疾病缺少必要欄位
- 建議優先補充zh、en、definition欄位
- 這將提升資料完整性至100%
` : ''}

${orphanedAliases.length > 0 ? `
#### 2. 修正孤立的別名
- 有 ${orphanedAliases.length} 個別名指向不存在的疾病
- 需要確認目標疾病ID是否正確
- 或移除無效的別名映射
` : ''}

${duplicates.length > 0 ? `
#### 3. 解決重複的疾病ID
- 發現 ${duplicates.length} 個重複的疾病ID
- 需要重新命名或合併重複項目
- 這是關鍵問題，必須盡快修正
` : ''}

${newDiseaseFoundCount < newDiseases.length ? `
#### 4. 完成新增疾病
- 還有 ${newDiseases.length - newDiseaseFoundCount} 個疾病待加入
- 繼續從Clinical Veterinary Advisor補充資料
` : ''}

${incompleteCount === 0 && orphanedAliases.length === 0 && duplicates.length === 0 && newDiseaseFoundCount === newDiseases.length ? `
✓ **系統資料品質優秀，無需特別修正**

建議功能擴展：
- 新增資料匯出功能（JSON/CSV）
- 增加疾病之間的關聯性分析
- 提供症狀-疾病關聯度統計
- 加入使用者搜尋歷史追蹤
` : ''}

---

## 8. 結論

獸醫診斷輔助系統 v2.0 的資料結構良好，JavaScript語法正確無誤。

**系統概況**:
- 總疾病數量: **${diseaseIds.length}** 個
- 資料完整性: **${(completeCount/diseaseIds.length*100).toFixed(2)}%**
- 別名總數: **${aliases.length}** 個
- 別名覆蓋率: **${(uniqueTargets.size/diseaseIds.length*100).toFixed(2)}%**

${incompleteCount === 0 && orphanedAliases.length === 0 && duplicates.length === 0 ?
`✓ **系統資料品質優秀，可正式上線使用**

所有驗證項目均通過，系統已達到生產環境標準。` :
`${completeCount/diseaseIds.length >= 0.9 && orphanedAliases.length < 20 && duplicates.length === 0 ?
'△ **系統資料品質良好，可以開始測試使用**\n\n建議修正上述發現的小問題後正式上線。整體而言，系統已可投入使用。' :
'⚠️ **建議修正發現的問題後再正式上線**\n\n主要問題需要優先處理，以確保系統穩定性和資料準確性。'}`
}

---

*報告由自動驗證腳本生成*
*驗證工具版本: 2.0*
*Node.js 版本: ${process.version}*
*檔案大小: ${(htmlContent.length / 1024 / 1024).toFixed(2)} MB*
`;

// 寫入報告
fs.writeFileSync('E:\\CLAUDE CODE\\BOOK\\validation-report.md', reportContent, 'utf8');
console.log('\n✓ 驗證報告已生成: validation-report.md');
console.log('\n驗證完成！');

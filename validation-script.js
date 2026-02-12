// 獸醫診斷輔助系統資料驗證腳本
const fs = require('fs');
const vm = require('vm');

console.log('========================================');
console.log('獸醫診斷輔助系統資料驗證');
console.log('========================================\n');

// 讀取HTML檔案
const htmlPath = 'E:\\CLAUDE CODE\\BOOK\\vet-differential-diagnosis-v2.html';
let htmlContent;
try {
  htmlContent = fs.readFileSync(htmlPath, 'utf8');
  console.log('✓ 成功讀取檔案');
} catch (err) {
  console.error('✗ 讀取檔案失敗:', err.message);
  process.exit(1);
}

// 提取JavaScript代碼
const scriptMatch = htmlContent.match(/<script>([\s\S]*?)<\/script>/);
if (!scriptMatch) {
  console.error('✗ 找不到 <script> 標籤');
  process.exit(1);
}

const scriptContent = scriptMatch[1];
console.log('✓ 成功提取JavaScript代碼\n');

console.log('=== 1. JavaScript語法驗證 ===');

// 載入資料使用vm模組
let DISEASE_INFO, DISEASE_ALIASES;
try {
  // 創建沙箱環境
  const sandbox = {
    DISEASE_INFO: null,
    DISEASE_ALIASES: null,
    console: console
  };

  // 執行腳本並捕獲資料
  const context = vm.createContext(sandbox);
  vm.runInContext(scriptContent, context, { timeout: 10000 });

  DISEASE_INFO = sandbox.DISEASE_INFO;
  DISEASE_ALIASES = sandbox.DISEASE_ALIASES;

  if (!DISEASE_INFO) {
    console.log('✗ 找不到 DISEASE_INFO 定義');
    process.exit(1);
  }

  if (!DISEASE_ALIASES) {
    console.log('✗ 找不到 DISEASE_ALIASES 定義');
    process.exit(1);
  }

  console.log('✓ DISEASE_INFO 語法正確');
  console.log('✓ DISEASE_ALIASES 語法正確');
  console.log('✓ JavaScript語法驗證通過\n');

} catch (err) {
  console.error('✗ JavaScript語法錯誤:', err.message);
  console.error('錯誤堆疊:', err.stack);
  process.exit(1);
}

console.log('=== 2. 疾病資料完整性檢查 ===');

// 檢查疾病物件結構
const diseaseIds = Object.keys(DISEASE_INFO);
console.log(`總疾病數量: ${diseaseIds.length}`);

let completeCount = 0;
let incompleteCount = 0;
const missingFields = [];
const requiredFields = ['zh', 'en', 'definition'];

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

if (incompleteCount > 0) {
  console.log('\n不完整資料的疾病（前10個）:');
  missingFields.slice(0, 10).forEach(item => {
    console.log(`  - ${item.id}: 缺少 ${item.missing.join(', ')}`);
  });
}

// 檢查ID唯一性
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
  console.log('✗ 發現重複的疾病ID:');
  duplicates.forEach(id => console.log(`  - ${id}`));
}

// 檢查別名對照表
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
  console.log(`✗ 發現 ${orphanedAliases.length} 個孤立的別名:`);
  orphanedAliases.slice(0, 10).forEach(item => {
    console.log(`  - "${item.alias}" → "${item.target}" (不存在)`);
  });
}

// 檢查新增的8個疾病
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

newDiseases.forEach(id => {
  const exists = DISEASE_INFO.hasOwnProperty(id);
  const hasAlias = Object.values(DISEASE_ALIASES).includes(id);
  const disease = DISEASE_INFO[id];

  console.log(`\n${id}:`);
  console.log(`  疾病資料存在: ${exists ? '✓' : '✗'}`);
  console.log(`  別名對照存在: ${hasAlias ? '✓' : '✗'}`);

  if (exists && disease) {
    console.log(`  中文名稱: ${disease.zh || '缺少'}`);
    console.log(`  英文名稱: ${disease.en || '缺少'}`);
    console.log(`  定義: ${disease.definition ? '✓' : '✗'}`);
  }
});

// 按系統分類統計
console.log('\n=== 6. 系統分類統計 ===');
const systemCategories = {};

diseaseIds.forEach(id => {
  const disease = DISEASE_INFO[id];
  if (disease.epidemiology && disease.epidemiology.system) {
    const system = disease.epidemiology.system;
    if (!systemCategories[system]) {
      systemCategories[system] = 0;
    }
    systemCategories[system]++;
  }
});

if (Object.keys(systemCategories).length > 0) {
  Object.keys(systemCategories).sort().forEach(system => {
    console.log(`  ${system}: ${systemCategories[system]}`);
  });
} else {
  console.log('  註：大部分疾病未標註系統分類');
}

// 生成總結報告
console.log('\n========================================');
console.log('驗證總結');
console.log('========================================');
console.log(`總疾病數量: ${diseaseIds.length}`);
console.log(`資料完整性: ${(completeCount/diseaseIds.length*100).toFixed(2)}%`);
console.log(`別名總數: ${aliases.length}`);
console.log(`ID唯一性: ${duplicates.length === 0 ? '通過' : '失敗'}`);
console.log(`別名有效性: ${orphanedAliases.length === 0 ? '通過' : `${orphanedAliases.length} 個問題`}`);

// 生成報告檔案內容
const reportContent = `# 獸醫診斷輔助系統驗證報告

**驗證日期**: ${new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })}
**系統版本**: v2.0
**檔案**: E:\\CLAUDE CODE\\BOOK\\vet-differential-diagnosis-v2.html

---

## 1. JavaScript語法驗證

✓ **語法檢查通過**
- DISEASE_INFO 物件結構正確
- DISEASE_ALIASES 物件結構正確
- 所有大括號、中括號、引號正確配對
- 無語法錯誤

---

## 2. 疾病資料統計

| 項目 | 數量 |
|------|------|
| 總疾病數量 | ${diseaseIds.length} |
| 完整資料的疾病 | ${completeCount} |
| 資料完整性 | ${(completeCount/diseaseIds.length*100).toFixed(2)}% |
| 別名總數 | ${aliases.length} |
| 別名指向的疾病數 | ${uniqueTargets.size} |

---

## 3. 資料完整性檢查

### 必要欄位檢查
- **必要欄位**: zh, en, definition
- **完整資料疾病數**: ${completeCount} / ${diseaseIds.length}
- **不完整資料疾病數**: ${incompleteCount}

${incompleteCount > 0 ? `
### 不完整資料的疾病（前10個）
${missingFields.slice(0, 10).map(item => `- \`${item.id}\`: 缺少 ${item.missing.join(', ')}`).join('\n')}
` : '✓ 所有疾病資料完整'}

---

## 4. ID唯一性驗證

${duplicates.length === 0 ? '✓ **通過** - 所有疾病ID唯一' : `✗ **失敗** - 發現 ${duplicates.length} 個重複ID`}

${duplicates.length > 0 ? `
### 重複的疾病ID
${duplicates.map(id => `- ${id}`).join('\n')}
` : ''}

---

## 5. 別名對照表驗證

${orphanedAliases.length === 0 ? '✓ **通過** - 所有別名都指向有效的疾病ID' : `✗ **發現問題** - ${orphanedAliases.length} 個別名指向不存在的疾病`}

${orphanedAliases.length > 0 ? `
### 孤立的別名（前10個）
${orphanedAliases.slice(0, 10).map(item => `- "${item.alias}" → "${item.target}" (疾病不存在)`).join('\n')}
` : ''}

---

## 6. 新增疾病驗證

以下為新增的8個Clinical Veterinary Advisor疾病驗證結果：

${newDiseases.map(id => {
  const exists = DISEASE_INFO.hasOwnProperty(id);
  const hasAlias = Object.values(DISEASE_ALIASES).includes(id);
  const disease = DISEASE_INFO[id];

  return `
### ${id}
- 疾病資料存在: ${exists ? '✓' : '✗'}
- 別名對照存在: ${hasAlias ? '✓' : '✗'}
${exists && disease ? `- 中文名稱: ${disease.zh || '**缺少**'}
- 英文名稱: ${disease.en || '**缺少**'}
- 定義: ${disease.definition ? '✓ 已提供' : '✗ 缺少'}` : ''}
`;
}).join('\n')}

---

## 7. 系統分類統計

${Object.keys(systemCategories).length > 0 ? `
| 系統分類 | 疾病數量 |
|----------|----------|
${Object.keys(systemCategories).sort().map(system => `| ${system} | ${systemCategories[system]} |`).join('\n')}
` : '註：大部分疾病未標註系統分類'}

---

## 8. 疾病列表（前50個）

以下為系統中前50個疾病的ID和名稱：

${diseaseIds.slice(0, 50).map((id, index) => {
  const disease = DISEASE_INFO[id];
  return `${index + 1}. \`${id}\` - ${disease.zh || '(無中文名稱)'} / ${disease.en || '(無英文名稱)'}`;
}).join('\n')}

${diseaseIds.length > 50 ? `\n... 以及其他 ${diseaseIds.length - 50} 個疾病` : ''}

---

## 9. 整體評估

### 資料品質
- **語法正確性**: ✓ 優秀
- **資料完整性**: ${(completeCount/diseaseIds.length*100).toFixed(2)}% ${completeCount === diseaseIds.length ? '(完美)' : completeCount/diseaseIds.length > 0.9 ? '(優秀)' : '(良好)'}
- **ID唯一性**: ${duplicates.length === 0 ? '✓ 通過' : '✗ 需要修正'}
- **別名有效性**: ${orphanedAliases.length === 0 ? '✓ 通過' : `${orphanedAliases.length} 個需要修正`}

### 建議與後續步驟

${incompleteCount > 0 ? `
1. **補充不完整的疾病資料**
   - ${incompleteCount} 個疾病缺少必要欄位
   - 建議優先補充zh、en、definition欄位
` : ''}

${orphanedAliases.length > 0 ? `
2. **修正孤立的別名**
   - ${orphanedAliases.length} 個別名指向不存在的疾病
   - 需要確認目標疾病是否正確或移除無效別名
` : ''}

${duplicates.length > 0 ? `
3. **解決重複的疾病ID**
   - ${duplicates.length} 個ID重複
   - 需要重新命名或合併重複項目
` : ''}

${incompleteCount === 0 && orphanedAliases.length === 0 && duplicates.length === 0 ? `
✓ **系統資料完整且正確，無需特別修正**
` : ''}

4. **功能建議**
   - 考慮新增資料匯出功能（JSON/CSV）
   - 增加疾病之間的關聯性分析
   - 提供更詳細的症狀-疾病關聯統計
   - 加入使用者搜尋歷史追蹤功能

---

## 10. 結論

獸醫診斷輔助系統 v2.0 的資料結構良好，JavaScript語法正確無誤。

- **總疾病數量**: ${diseaseIds.length} 個
- **資料完整性**: ${(completeCount/diseaseIds.length*100).toFixed(2)}%
- **別名數量**: ${aliases.length} 個
- **別名覆蓋率**: ${(uniqueTargets.size/diseaseIds.length*100).toFixed(2)}%

${incompleteCount === 0 && orphanedAliases.length === 0 && duplicates.length === 0 ?
`✓ **系統資料品質優秀，可正式上線使用**` :
`建議修正上述發現的問題後再正式上線使用。整體而言，系統資料品質${completeCount/diseaseIds.length > 0.9 ? '優秀' : '良好'}，可以先行測試使用。`}

---

*報告由自動驗證腳本生成*
*驗證工具版本: 1.0*
*Node.js 版本: ${process.version}*
`;

// 寫入報告檔案
try {
  fs.writeFileSync('E:\\CLAUDE CODE\\BOOK\\validation-report.md', reportContent, 'utf8');
  console.log('\n✓ 驗證報告已生成: validation-report.md');
} catch (err) {
  console.error('\n✗ 無法寫入報告檔案:', err.message);
}

console.log('\n驗證完成！');

// test-comment.js

// 測試各種註解格式
const tests = [
  {
    name: '測試1: 純英文註解',
    code: `// ======= TEST =======
const x = 1;`
  },
  {
    name: '測試2: 英文+括號',
    code: `// ======= TEST (hello) =======
const x = 1;`
  },
  {
    name: '測試3: 中文註解',
    code: `// ======= 測試 =======
const x = 1;`
  },
  {
    name: '測試4: 中文+括號（全形）',
    code: `// ======= 測試（中文） =======
const x = 1;`
  },
  {
    name: '測試5: 中文+括號（半形）',
    code: `// ======= 測試(中文) =======
const x = 1;`
  },
  {
    name: '測試6: 實際的行',
    code: `// ======= SEARCH SYNONYMS (症狀俗語) =======
const x = 1;`
  }
];

tests.forEach(test => {
  console.log(`\n${test.name}`);
  console.log(`代碼: ${test.code.replace(/\n/g, ' ')}`);
  try {
    new Function(test.code);
    console.log('✓ 成功');
  } catch (e) {
    console.log(`✗ 失敗: ${e.message}`);
  }
});

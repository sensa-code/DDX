// 深度驗證腳本 - 檢查JavaScript資料結構完整性
const fs = require('fs');

const content = fs.readFileSync('E:\\CLAUDE CODE\\BOOK\\vet-differential-diagnosis-v2.html', 'utf8');

console.log('=== 深度驗證開始 ===\n');

const issues = [];
const warnings = [];

// 提取JavaScript區塊（從<script>到</script>）
const scriptMatch = content.match(/<script>([\s\S]*?)<\/script>/);
if (!scriptMatch) {
  issues.push({ severity: 'CRITICAL', msg: '找不到JavaScript區塊' });
} else {
  const jsCode = scriptMatch[1];

  console.log('1. JavaScript區塊大小檢查...');
  const jsLines = jsCode.split('\n').length;
  const jsSize = (jsCode.length / 1024).toFixed(2);
  console.log(`  - 行數: ${jsLines}`);
  console.log(`  - 大小: ${jsSize} KB`);

  // 檢查關鍵變數定義
  console.log('\n2. 檢查關鍵變數定義...');
  const keyVars = ['SYNONYMS', 'DISEASE_ALIASES', 'DB', 'LAB_DB', 'SYMPTOM_LAB_LINKS', 'state'];

  keyVars.forEach(varName => {
    const pattern = new RegExp(`(const|let|var)\\s+${varName}\\s*=`, 'g');
    const found = jsCode.match(pattern);
    if (found) {
      console.log(`  ✓ ${varName}: 已定義`);
    } else {
      issues.push({ severity: 'CRITICAL', msg: `變數 ${varName} 未定義` });
      console.log(`  ✗ ${varName}: 未定義`);
    }
  });

  // 檢查函式定義
  console.log('\n3. 檢查關鍵函式...');
  const keyFunctions = [
    'renderSidebar',
    'renderWelcome',
    'renderSymptomDetail',
    'performMultiSearch',
    'performLabSearch',
    'performCompositeSearch',
    'calculateScore',
    'updateHash',
    'globalSearch'
  ];

  keyFunctions.forEach(funcName => {
    const pattern = new RegExp(`function\\s+${funcName}\\s*\\(`, 'g');
    const found = jsCode.match(pattern);
    if (found) {
      console.log(`  ✓ ${funcName}()`);
    } else {
      warnings.push({ severity: 'MEDIUM', msg: `函式 ${funcName}() 可能未定義` });
      console.log(`  ⚠ ${funcName}(): 未找到`);
    }
  });

  // 檢查DB結構
  console.log('\n4. 檢查DB資料結構...');

  // 提取DB定義
  const dbMatch = jsCode.match(/const\s+DB\s*=\s*\{[\s\S]*?symptoms:\s*\[([\s\S]*?)\]\s*\}/);
  if (dbMatch) {
    console.log('  ✓ DB.symptoms 結構存在');

    // 估算症狀數量（粗略計算）
    const symptomCount = (dbMatch[1].match(/\{\s*id:/g) || []).length;
    console.log(`  - 估計症狀數量: ${symptomCount}`);

    if (symptomCount < 50) {
      warnings.push({ severity: 'MEDIUM', msg: `症狀數量偏少: ${symptomCount}` });
    }
  } else {
    issues.push({ severity: 'HIGH', msg: 'DB.symptoms 結構不完整' });
    console.log('  ✗ DB.symptoms 結構問題');
  }

  // 檢查LAB_DB結構
  const labDbMatch = jsCode.match(/const\s+LAB_DB\s*=\s*\{[\s\S]*?abnormalities:\s*\[([\s\S]*?)\]\s*\}/);
  if (labDbMatch) {
    console.log('  ✓ LAB_DB.abnormalities 結構存在');

    const labCount = (labDbMatch[1].match(/\{\s*id:/g) || []).length;
    console.log(`  - 估計實驗室指標數量: ${labCount}`);

    if (labCount < 20) {
      warnings.push({ severity: 'MEDIUM', msg: `實驗室指標數量偏少: ${labCount}` });
    }
  } else {
    issues.push({ severity: 'HIGH', msg: 'LAB_DB.abnormalities 結構不完整' });
    console.log('  ✗ LAB_DB.abnormalities 結構問題');
  }

  // 檢查事件監聽器
  console.log('\n5. 檢查事件監聽器...');
  const eventPatterns = [
    { pattern: /addEventListener\(['"]DOMContentLoaded['"]/, name: 'DOMContentLoaded' },
    { pattern: /addEventListener\(['"]hashchange['"]/, name: 'hashchange' },
    { pattern: /addEventListener\(['"]click['"]/, name: 'click事件' },
    { pattern: /addEventListener\(['"]input['"]/, name: 'input事件' }
  ];

  eventPatterns.forEach(ep => {
    const found = jsCode.match(ep.pattern);
    if (found) {
      console.log(`  ✓ ${ep.name} 監聽器`);
    } else {
      console.log(`  - ${ep.name} 監聽器: 未找到（可能使用其他方式綁定）`);
    }
  });

  // 檢查語法錯誤模式
  console.log('\n6. 檢查潛在語法問題...');

  // 檢查未閉合的字串
  const lines = jsCode.split('\n');
  let inString = false;
  let stringChar = null;
  let unclosedStrings = 0;

  lines.forEach((line, idx) => {
    // 簡化檢查：計算引號數量
    const doubleQuotes = (line.match(/"/g) || []).length;
    const singleQuotes = (line.match(/'/g) || []).length;

    if (doubleQuotes % 2 !== 0 && !line.includes('//')) {
      unclosedStrings++;
      if (unclosedStrings <= 3) {
        warnings.push({ severity: 'LOW', msg: `行 ${idx + 365}: 引號可能不配對` });
      }
    }
  });

  if (unclosedStrings === 0) {
    console.log('  ✓ 未發現明顯的未閉合字串');
  } else {
    console.log(`  ⚠ 可能有 ${unclosedStrings} 行引號不配對（可能誤報）`);
  }

  // 檢查常見錯誤
  const errorPatterns = [
    { pattern: /\bfunction\s+\w+\s*\([^)]*\)\s*\{[^}]*$/, name: '函式未閉合' },
    { pattern: /\[object Object\]/, name: '物件未正確序列化' },
    { pattern: /SyntaxError|ReferenceError|TypeError/, name: '錯誤訊息殘留' }
  ];

  errorPatterns.forEach(ep => {
    const matches = jsCode.match(ep.pattern);
    if (matches) {
      issues.push({ severity: 'HIGH', msg: `發現 ${ep.name}: ${matches.length} 處` });
      console.log(`  ✗ ${ep.name}: ${matches.length} 處`);
    }
  });
}

// HTML結構檢查
console.log('\n7. HTML結構完整性...');
const htmlChecks = [
  { tag: 'header', required: true },
  { tag: 'nav', required: true },
  { tag: 'main', required: true },
  { tag: 'sidebar', class: true, required: true },
  { tag: 'main-content', id: true, required: true }
];

htmlChecks.forEach(check => {
  let pattern;
  if (check.class) {
    pattern = new RegExp(`class=["'][^"']*\\b${check.tag}\\b[^"']*["']`);
  } else if (check.id) {
    pattern = new RegExp(`id=["']${check.tag}["']`);
  } else {
    pattern = new RegExp(`<${check.tag}[^>]*>`);
  }

  const found = content.match(pattern);
  if (found) {
    console.log(`  ✓ ${check.tag}`);
  } else {
    if (check.required) {
      issues.push({ severity: 'HIGH', msg: `必要元素 ${check.tag} 不存在` });
      console.log(`  ✗ ${check.tag} (必要)`);
    } else {
      console.log(`  - ${check.tag} (選用)`);
    }
  }
});

// 總結
console.log('\n=== 驗證總結 ===');
console.log(`致命問題: ${issues.filter(i => i.severity === 'CRITICAL').length}`);
console.log(`高優先級問題: ${issues.filter(i => i.severity === 'HIGH').length}`);
console.log(`警告: ${warnings.length}`);

if (issues.length > 0) {
  console.log('\n致命/高優先級問題:');
  issues.forEach((issue, idx) => {
    console.log(`  ${idx + 1}. [${issue.severity}] ${issue.msg}`);
  });
}

if (warnings.length > 0 && warnings.length <= 10) {
  console.log('\n警告:');
  warnings.forEach((warn, idx) => {
    console.log(`  ${idx + 1}. [${warn.severity}] ${warn.msg}`);
  });
}

// 最終評估
console.log('\n=== 最終評估 ===');
const criticalCount = issues.filter(i => i.severity === 'CRITICAL').length;
const highCount = issues.filter(i => i.severity === 'HIGH').length;

if (criticalCount === 0 && highCount === 0) {
  console.log('✓ 檔案結構完整，未發現致命問題');
  console.log('✓ 檔案應可在瀏覽器中正常載入');
} else if (criticalCount > 0) {
  console.log('✗ 發現致命問題，檔案可能無法載入');
} else {
  console.log('⚠ 發現一些問題，但檔案應可載入');
}

// 儲存報告
const report = {
  timestamp: new Date().toISOString(),
  status: criticalCount === 0 && highCount === 0 ? 'PASS' : (criticalCount > 0 ? 'FAIL' : 'WARNING'),
  issues: issues,
  warnings: warnings
};

fs.writeFileSync('E:\\CLAUDE CODE\\BOOK\\deep-validation-report.json', JSON.stringify(report, null, 2));
console.log('\n詳細報告已儲存: deep-validation-report.json');

// 網頁巡航檢查腳本
const fs = require('fs');
const path = require('path');

const filePath = 'E:\\CLAUDE CODE\\BOOK\\vet-differential-diagnosis-v2.html';
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

console.log('=== 網頁巡航檢查開始 ===\n');

const issues = [];

// 1. 檢查HTML基本結構
console.log('1. 檢查HTML基本結構...');
const hasDoctype = content.includes('<!DOCTYPE html>');
const hasHtmlOpen = content.includes('<html');
const hasHtmlClose = content.includes('</html>');
const hasHead = content.includes('<head>') && content.includes('</head>');
const hasBody = content.includes('<body>') && content.includes('</body>');

if (!hasDoctype) issues.push({ severity: 'CRITICAL', line: 1, msg: '缺少 <!DOCTYPE html>' });
if (!hasHtmlOpen) issues.push({ severity: 'CRITICAL', line: 1, msg: '缺少 <html> 開始標籤' });
if (!hasHtmlClose) issues.push({ severity: 'CRITICAL', line: lines.length, msg: '缺少 </html> 結束標籤' });
if (!hasHead) issues.push({ severity: 'CRITICAL', line: 1, msg: 'head 標籤不完整' });
if (!hasBody) issues.push({ severity: 'CRITICAL', line: 1, msg: 'body 標籤不完整' });

console.log(`  - DOCTYPE: ${hasDoctype ? '✓' : '✗'}`);
console.log(`  - HTML標籤: ${hasHtmlOpen && hasHtmlClose ? '✓' : '✗'}`);
console.log(`  - HEAD標籤: ${hasHead ? '✓' : '✗'}`);
console.log(`  - BODY標籤: ${hasBody ? '✓' : '✗'}`);

// 2. 檢查中文引號
console.log('\n2. 檢查中文引號...');
const chineseQuotes = [];
lines.forEach((line, idx) => {
  if (line.match(/[""]/) && idx >= 364) { // 只檢查JavaScript區域 (第365行開始)
    chineseQuotes.push({ line: idx + 1, content: line.trim().substring(0, 80) });
  }
});
console.log(`  發現 ${chineseQuotes.length} 處中文引號`);
if (chineseQuotes.length > 0 && chineseQuotes.length <= 10) {
  chineseQuotes.slice(0, 10).forEach(q => {
    console.log(`    行 ${q.line}: ${q.content}`);
    issues.push({ severity: 'HIGH', line: q.line, msg: '使用中文引號 "" 應改為 ""' });
  });
} else if (chineseQuotes.length > 10) {
  issues.push({ severity: 'HIGH', line: 'multiple', msg: `發現 ${chineseQuotes.length} 處中文引號需要修復` });
}

// 3. 檢查JavaScript語法基本問題
console.log('\n3. 檢查JavaScript語法...');

// 檢查大括號配對
const openBraces = (content.match(/\{/g) || []).length;
const closeBraces = (content.match(/\}/g) || []).length;
console.log(`  - 大括號: { ${openBraces} vs } ${closeBraces} ${openBraces === closeBraces ? '✓' : '✗'}`);
if (openBraces !== closeBraces) {
  issues.push({ severity: 'CRITICAL', line: 'unknown', msg: `大括號不配對: { ${openBraces} vs } ${closeBraces}` });
}

// 檢查中括號配對
const openBrackets = (content.match(/\[/g) || []).length;
const closeBrackets = (content.match(/\]/g) || []).length;
console.log(`  - 中括號: [ ${openBrackets} vs ] ${closeBrackets} ${openBrackets === closeBrackets ? '✓' : '✗'}`);
if (openBrackets !== closeBrackets) {
  issues.push({ severity: 'CRITICAL', line: 'unknown', msg: `中括號不配對: [ ${openBrackets} vs ] ${closeBrackets}` });
}

// 檢查script標籤配對
const scriptOpens = (content.match(/<script[^>]*>/g) || []).length;
const scriptCloses = (content.match(/<\/script>/g) || []).length;
console.log(`  - Script標籤: ${scriptOpens} vs ${scriptCloses} ${scriptOpens === scriptCloses ? '✓' : '✗'}`);
if (scriptOpens !== scriptCloses) {
  issues.push({ severity: 'CRITICAL', line: 'unknown', msg: `script標籤不配對: ${scriptOpens} vs ${scriptCloses}` });
}

// 4. 檢查常見語法錯誤
console.log('\n4. 檢查常見語法錯誤...');
const syntaxPatterns = [
  { pattern: /,\s*[}\]]/g, name: '物件/陣列結尾多餘逗號' },
  { pattern: /\bundefined\b/g, name: 'undefined關鍵字' },
  { pattern: /\bnull\s*\.\s*\w+/g, name: 'null引用錯誤' },
  { pattern: /\bNaN\b/g, name: 'NaN值' },
  { pattern: /===/g, name: '使用===運算子' } // 這個是正常的，只是計數
];

syntaxPatterns.forEach(sp => {
  const matches = content.match(sp.pattern);
  const count = matches ? matches.length : 0;
  console.log(`  - ${sp.name}: ${count} 處`);
  if (sp.name !== '使用===運算子' && count > 0 && count <= 5) {
    issues.push({ severity: 'MEDIUM', line: 'multiple', msg: `發現 ${count} 處 ${sp.name}` });
  }
});

// 5. 檢查HTML標籤配對
console.log('\n5. 檢查主要HTML標籤配對...');
const tags = ['div', 'section', 'header', 'main', 'nav', 'style'];
tags.forEach(tag => {
  const opens = (content.match(new RegExp(`<${tag}[^>]*>`, 'g')) || []).length;
  const closes = (content.match(new RegExp(`</${tag}>`, 'g')) || []).length;
  const matched = opens === closes;
  console.log(`  - <${tag}>: ${opens} vs ${closes} ${matched ? '✓' : '✗'}`);
  if (!matched) {
    issues.push({ severity: 'HIGH', line: 'unknown', msg: `<${tag}> 標籤不配對: ${opens} vs ${closes}` });
  }
});

// 6. 總結
console.log('\n=== 巡航檢查總結 ===');
console.log(`總行數: ${lines.length}`);
console.log(`檔案大小: ${(content.length / 1024 / 1024).toFixed(2)} MB`);

const critical = issues.filter(i => i.severity === 'CRITICAL').length;
const high = issues.filter(i => i.severity === 'HIGH').length;
const medium = issues.filter(i => i.severity === 'MEDIUM').length;

console.log(`\n發現問題: ${issues.length} 個`);
console.log(`  - 致命 (CRITICAL): ${critical}`);
console.log(`  - 高 (HIGH): ${high}`);
console.log(`  - 中 (MEDIUM): ${medium}`);

if (issues.length > 0) {
  console.log('\n問題清單:');
  issues.forEach((issue, idx) => {
    console.log(`  ${idx + 1}. [${issue.severity}] 行${issue.line}: ${issue.msg}`);
  });
}

// 生成報告JSON
const report = {
  timestamp: new Date().toISOString(),
  file: filePath,
  fileSize: content.length,
  lines: lines.length,
  summary: { critical, high, medium, total: issues.length },
  checks: {
    htmlStructure: { hasDoctype, hasHtmlOpen, hasHtmlClose, hasHead, hasBody },
    syntax: { openBraces, closeBraces, openBrackets, closeBrackets, scriptOpens, scriptCloses },
    chineseQuotes: chineseQuotes.length
  },
  issues: issues
};

fs.writeFileSync('E:\\CLAUDE CODE\\BOOK\\patrol-report.json', JSON.stringify(report, null, 2));
console.log('\n詳細報告已儲存: patrol-report.json');

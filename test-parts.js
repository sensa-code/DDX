// test-parts.js - 測試各個部分
const fs = require('fs');

const html = fs.readFileSync('E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2.html', 'utf8');
const lines = html.split('\n');

// 找到script開始和結束
const scriptStart = lines.findIndex(l => l.includes('<script>'));
const scriptEnd = lines.findIndex(l => l.includes('</script>'));

console.log(`Script從第 ${scriptStart + 1} 行到第 ${scriptEnd + 1} 行\n`);

// 提取script
const scriptLines = lines.slice(scriptStart + 1, scriptEnd);
const script = scriptLines.join('\n');

console.log(`Script內容: ${scriptLines.length} 行\n`);

// 測試1: 只載入SYNONYMS
const synonymsEnd = scriptLines.findIndex(l => l.trim() === '};');
console.log(`第一個 }; 在第 ${synonymsEnd + 1} 行 (相對於script開始)`);

const test1 = scriptLines.slice(0, synonymsEnd + 1).join('\n');
console.log('\n測試1: SYNONYMS');
try {
  new Function(test1);
  console.log('✅ SYNONYMS 語法正確\n');
} catch (e) {
  console.log(`❌ SYNONYMS 有錯誤: ${e.message}\n`);
}

// 測試2: 載入到DISEASE_ALIASES結束
const diseaseAliasesStart = scriptLines.findIndex(l => l.includes('const DISEASE_ALIASES'));
const diseaseAliasesEnd = scriptLines.findIndex((l, idx) => idx > diseaseAliasesStart && l.trim() === '};');

console.log(`DISEASE_ALIASES 從第 ${diseaseAliasesStart + 1} 到第 ${diseaseAliasesEnd + 1} 行`);

const test2 = scriptLines.slice(0, diseaseAliasesEnd + 1).join('\n');
console.log('\n測試2: SYNONYMS + DISEASE_ALIASES');
try {
  new Function(test2);
  console.log('✅ 語法正確\n');
} catch (e) {
  console.log(`❌ 有錯誤: ${e.message}\n`);
}

// 測試3: 載入到DISEASE_INFO開始
const diseaseInfoStart = scriptLines.findIndex(l => l.includes('const DISEASE_INFO'));
console.log(`DISEASE_INFO 從第 ${diseaseInfoStart + 1} 行開始`);

const test3 = scriptLines.slice(0, diseaseInfoStart).join('\n');
console.log('\n測試3: DISEASE_INFO之前的所有代碼');
try {
  new Function(test3);
  console.log('✅ 語法正確\n');
} catch (e) {
  console.log(`❌ 有錯誤: ${e.message}\n`);
}

// 測試4: 完整script
console.log('測試4: 完整script');
try {
  new Function(script);
  console.log('✅ 完整script語法正確！');
} catch (e) {
  console.log(`❌ 完整script有錯誤: ${e.message}`);
}

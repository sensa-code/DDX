/**
 * integrate-references.js
 *
 * Integrates structured references from batch-refs-*.json files
 * into vet-differential-diagnosis-v2.html
 *
 * Adds a `references` array field to each disease entry.
 * Inserts before the `monitoring:` or `reference:` field.
 *
 * Usage: node integrate-references.js [batch-files...]
 */

const fs = require('fs');
const path = require('path');

const HTML_FILE = 'vet-differential-diagnosis-v2.html';

const BATCH_FILES = process.argv.length > 2
  ? process.argv.slice(2)
  : ['batch-refs-1.json', 'batch-refs-2.json', 'batch-refs-3.json',
     'batch-refs-4.json', 'batch-refs-5.json'];

console.log('═══════════════════════════════════════════');
console.log('  文獻引用整合腳本 (Literature References Integration)');
console.log('═══════════════════════════════════════════\n');

// Step 1: Load all batch files
let allRefs = {};
let totalLoaded = 0;

for (const batchFile of BATCH_FILES) {
  const filePath = path.join(__dirname, batchFile);
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  ${batchFile}: 檔案不存在，跳過`);
    continue;
  }

  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const keys = Object.keys(data);
    let validCount = 0;

    for (const key of keys) {
      if (data[key].references && Array.isArray(data[key].references) && data[key].references.length > 0) {
        if (!allRefs[key]) {
          allRefs[key] = data[key].references;
          validCount++;
        }
      }
    }

    console.log(`✅ ${batchFile}: ${validCount}/${keys.length} 個有效文獻引用`);
    totalLoaded += validCount;
  } catch (e) {
    console.log(`❌ ${batchFile}: JSON 解析失敗 - ${e.message.slice(0, 80)}`);
  }
}

console.log(`\n📊 共載入 ${totalLoaded} 個疾病的文獻引用\n`);

if (totalLoaded === 0) {
  console.log('❌ 沒有可整合的資料，中止');
  process.exit(1);
}

// Step 2: Read HTML
console.log('📖 讀取 HTML 檔案...');
let html = fs.readFileSync(HTML_FILE, 'utf8');
const originalLength = html.length;
const originalLines = html.split('\n').length;

const diseaseInfoStart = html.indexOf('const DISEASE_INFO');
if (diseaseInfoStart === -1) {
  console.log('❌ 找不到 DISEASE_INFO');
  process.exit(1);
}

// Step 3: Collect insertion points
const insertions = [];
let skipCount = 0;
let failCount = 0;
const failedIds = [];

for (const [diseaseId, refs] of Object.entries(allRefs)) {
  const entryPattern = `"${diseaseId}": {`;
  const entryIndex = html.indexOf(entryPattern, diseaseInfoStart);

  if (entryIndex === -1) {
    failedIds.push(diseaseId);
    failCount++;
    continue;
  }

  // Find this disease's block
  const nextEntryRegex = /\n\s+"[a-z][a-z0-9-]+":\s*\{\s*\n\s+zh:/;
  const searchStart = entryIndex + entryPattern.length;
  const searchSlice = html.substring(searchStart, searchStart + 25000);
  const nextMatch = nextEntryRegex.exec(searchSlice);
  const blockEnd = nextMatch ? searchStart + nextMatch.index : searchStart + 25000;
  const diseaseBlock = html.substring(entryIndex, blockEnd);

  // Skip if already has references array
  if (diseaseBlock.includes('references: [')) {
    skipCount++;
    continue;
  }

  // Find insertion point: before "reference:" (old single-string field)
  // or before "monitoring:" if no reference field
  const refFieldIdx = diseaseBlock.indexOf('\n    reference:');
  const monitoringIdx = diseaseBlock.indexOf('\n    monitoring:');

  let insertRelative = -1;

  if (refFieldIdx > 0) {
    insertRelative = refFieldIdx + 1;
  } else if (monitoringIdx > 0) {
    insertRelative = monitoringIdx + 1;
  } else {
    // Fallback: before diagnosticAlgorithm or pearls
    const algoIdx = diseaseBlock.indexOf('\n    diagnosticAlgorithm:');
    const pearlsIdx = diseaseBlock.indexOf('\n    pearls:');
    if (algoIdx > 0) insertRelative = algoIdx + 1;
    else if (pearlsIdx > 0) insertRelative = pearlsIdx + 1;
  }

  if (insertRelative <= 0) {
    failedIds.push(diseaseId);
    failCount++;
    continue;
  }

  const absolutePos = entryIndex + insertRelative;
  const refsText = formatReferences(refs);
  const insertText = `    references: ${refsText},\n`;

  insertions.push({ position: absolutePos, text: insertText, id: diseaseId });
}

console.log(`📋 準備插入: ${insertions.length} 個`);
console.log(`   跳過(已存在): ${skipCount}`);
if (failCount > 0) {
  console.log(`   失敗: ${failCount} 個`);
  if (failedIds.length <= 15) {
    console.log(`   失敗 ID: ${failedIds.join(', ')}`);
  } else {
    console.log(`   失敗 ID: ${failedIds.slice(0, 15).join(', ')}... 等 ${failedIds.length} 個`);
  }
}

// Step 4: Apply in reverse order
insertions.sort((a, b) => b.position - a.position);

for (const ins of insertions) {
  html = html.substring(0, ins.position) + ins.text + html.substring(ins.position);
}

console.log(`\n✅ 已插入 ${insertions.length} 個文獻引用`);

// Step 5: Validate
console.log('\n🔍 驗證中...');

const hasScript = html.includes('</script>');
const hasBody = html.includes('</body>');
const hasHtml = html.includes('</html>');
console.log(`  </script>: ${hasScript ? '✅' : '❌'}`);
console.log(`  </body>: ${hasBody ? '✅' : '❌'}`);
console.log(`  </html>: ${hasHtml ? '✅' : '❌'}`);

if (!hasScript || !hasBody || !hasHtml) {
  console.log('❌ 結構標籤缺失，中止寫入');
  process.exit(1);
}

try {
  const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
  if (scriptMatch) {
    new Function(scriptMatch[1]);
    console.log('  JS 語法: ✅');
  }
} catch (e) {
  console.log(`  JS 語法: ❌ - ${e.message.slice(0, 200)}`);
  console.log('❌ JS 語法錯誤，中止寫入');
  fs.writeFileSync('refs-integration-failed.html', html);
  console.log('  已儲存失敗版本到 refs-integration-failed.html');
  process.exit(1);
}

const diseaseCount = (html.match(/"([a-z][a-z0-9-]+)":\s*\{\s*\n\s*zh:/gm) || []).length;
console.log(`  疾病數量: ${diseaseCount} (原始: 548)`);

if (diseaseCount < 548) {
  console.log('❌ 疾病數量減少，中止寫入');
  process.exit(1);
}

const refsArrayCount = (html.match(/references:\s*\[/g) || []).length;
console.log(`  references 陣列數量: ${refsArrayCount}`);

// Count total reference items
let totalRefItems = 0;
const refItemRegex = /references:\s*\[([\s\S]*?)\]/g;
let rm;
while ((rm = refItemRegex.exec(html)) !== null) {
  const items = rm[1].match(/title:\s*"/g);
  if (items) totalRefItems += items.length;
}
console.log(`  總文獻引用數: ${totalRefItems}`);

// Step 6: Write
const newLines = html.split('\n').length;
console.log(`\n📝 寫入檔案...`);
console.log(`  原始: ${originalLines} 行, ${originalLength} 字元`);
console.log(`  更新: ${newLines} 行, ${html.length} 字元`);
console.log(`  增加: ${newLines - originalLines} 行, ${html.length - originalLength} 字元`);

fs.writeFileSync(HTML_FILE, html);
console.log('\n✅ 整合完成！');
console.log(`   ${insertions.length} 個疾病已加入文獻引用`);

// ─── Helper Functions ───

function formatReferences(refs) {
  const items = refs.map(r => {
    const parts = [];
    if (r.authors) parts.push(`authors: "${esc(r.authors)}"`);
    parts.push(`title: "${esc(r.title)}"`);
    if (r.journal) parts.push(`journal: "${esc(r.journal)}"`);
    if (r.year) parts.push(`year: "${esc(String(r.year))}"`);
    if (r.pmid) parts.push(`pmid: "${esc(String(r.pmid))}"`);
    if (r.doi) parts.push(`doi: "${esc(r.doi)}"`);
    if (r.url) parts.push(`url: "${esc(r.url)}"`);
    return `{ ${parts.join(', ')} }`;
  });

  if (items.length <= 2) {
    return `[${items.join(', ')}]`;
  }
  return `[\n      ${items.join(',\n      ')}\n    ]`;
}

function esc(s) {
  if (!s) return '';
  return String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
}

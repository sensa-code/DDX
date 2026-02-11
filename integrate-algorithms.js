/**
 * integrate-algorithms.js
 *
 * Integrates diagnosticAlgorithm data from batch-algo-*.json files
 * into vet-differential-diagnosis-v2.html
 *
 * Strategy: Collect all insertion points first, then apply in reverse
 * order (from end of file to beginning) to avoid position shifts.
 *
 * Usage: node integrate-algorithms.js [batch-files...]
 * Default: all batch-algo-*.json files
 */

const fs = require('fs');
const path = require('path');

// Configuration
const HTML_FILE = 'vet-differential-diagnosis-v2.html';

// Allow custom batch files from command line, or use defaults
const BATCH_FILES = process.argv.length > 2
  ? process.argv.slice(2)
  : ['batch-algo-1.json', 'batch-algo-2.json', 'batch-algo-3.json',
     'batch-algo-4.json', 'batch-algo-4b.json', 'batch-algo-5.json'];

console.log('═══════════════════════════════════════════');
console.log('  診斷流程整合腳本 (Diagnostic Algorithm Integration)');
console.log('═══════════════════════════════════════════\n');

// Step 1: Load and validate all batch files
let allAlgorithms = {};
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
      if (data[key].diagnosticAlgorithm &&
          data[key].diagnosticAlgorithm.steps &&
          data[key].diagnosticAlgorithm.steps.length > 0) {
        if (!allAlgorithms[key]) {  // Don't overwrite existing
          allAlgorithms[key] = data[key].diagnosticAlgorithm;
          validCount++;
        }
      }
    }

    console.log(`✅ ${batchFile}: ${validCount}/${keys.length} 個有效診斷流程`);
    totalLoaded += validCount;
  } catch (e) {
    console.log(`❌ ${batchFile}: JSON 解析失敗 - ${e.message.slice(0, 80)}`);
  }
}

console.log(`\n📊 共載入 ${totalLoaded} 個診斷流程\n`);

if (totalLoaded === 0) {
  console.log('❌ 沒有可整合的資料，中止');
  process.exit(1);
}

// Step 2: Read HTML file
console.log('📖 讀取 HTML 檔案...');
let html = fs.readFileSync(HTML_FILE, 'utf8');
const originalLength = html.length;
const originalLines = html.split('\n').length;

// Step 3: Find DISEASE_INFO section
const diseaseInfoStart = html.indexOf('const DISEASE_INFO');
if (diseaseInfoStart === -1) {
  console.log('❌ 找不到 DISEASE_INFO');
  process.exit(1);
}

// Step 4: Collect all insertion points FIRST, then apply in reverse
const insertions = []; // { position, text }
let skipCount = 0;
let failCount = 0;
const failedIds = [];

for (const [diseaseId, algorithm] of Object.entries(allAlgorithms)) {
  // Find the disease entry: "disease-id": {
  const entryPattern = `"${diseaseId}": {`;
  const entryIndex = html.indexOf(entryPattern, diseaseInfoStart);

  if (entryIndex === -1) {
    failedIds.push(diseaseId);
    failCount++;
    continue;
  }

  // Check if already has diagnosticAlgorithm (search within this disease block)
  const nextEntryRegex = /\n\s+"[a-z][a-z0-9-]+":\s*\{\s*\n\s+zh:/;
  const searchStart = entryIndex + entryPattern.length;
  const searchSlice = html.substring(searchStart, searchStart + 20000);
  const nextMatch = nextEntryRegex.exec(searchSlice);
  const blockEnd = nextMatch ? searchStart + nextMatch.index : searchStart + 20000;
  const diseaseBlock = html.substring(entryIndex, blockEnd);

  if (diseaseBlock.includes('diagnosticAlgorithm:')) {
    skipCount++;
    continue;
  }

  // Find insertion point: before "monitoring:" or "pearls:" line
  // These are the last fields in most disease entries
  const monitoringIdx = diseaseBlock.indexOf('\n    monitoring:');
  const pearlsIdx = diseaseBlock.indexOf('\n    pearls:');

  let insertRelative = -1;

  if (monitoringIdx > 0) {
    insertRelative = monitoringIdx + 1; // +1 to get past the \n
  } else if (pearlsIdx > 0) {
    insertRelative = pearlsIdx + 1;
  } else {
    // Fallback: find after "definition:" line
    const defIdx = diseaseBlock.indexOf('\n    definition:');
    if (defIdx > 0) {
      const nextNewline = diseaseBlock.indexOf('\n', defIdx + 1);
      if (nextNewline > 0) {
        insertRelative = nextNewline + 1;
      }
    }
  }

  if (insertRelative <= 0) {
    failedIds.push(diseaseId);
    failCount++;
    continue;
  }

  const absolutePos = entryIndex + insertRelative;
  const algoText = formatAlgorithm(algorithm);
  const insertText = `    diagnosticAlgorithm: ${algoText},\n`;

  insertions.push({ position: absolutePos, text: insertText, id: diseaseId });
}

console.log(`📋 準備插入: ${insertions.length} 個`);
console.log(`   跳過(已存在): ${skipCount}`);
if (failCount > 0) {
  console.log(`   失敗: ${failCount} 個`);
  if (failedIds.length <= 10) {
    console.log(`   失敗 ID: ${failedIds.join(', ')}`);
  } else {
    console.log(`   失敗 ID: ${failedIds.slice(0, 10).join(', ')}... 等 ${failedIds.length} 個`);
  }
}

// Step 5: Apply insertions in REVERSE order (end→start) to preserve positions
insertions.sort((a, b) => b.position - a.position);

for (const ins of insertions) {
  html = html.substring(0, ins.position) + ins.text + html.substring(ins.position);
}

console.log(`\n✅ 已插入 ${insertions.length} 個診斷流程`);

// Step 6: Validate before writing
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

// JS syntax check
try {
  const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
  if (scriptMatch) {
    new Function(scriptMatch[1]);
    console.log('  JS 語法: ✅');
  }
} catch (e) {
  console.log(`  JS 語法: ❌ - ${e.message.slice(0, 200)}`);
  console.log('❌ JS 語法錯誤，中止寫入');
  fs.writeFileSync('integration-failed.html', html);
  console.log('  已儲存失敗版本到 integration-failed.html');
  process.exit(1);
}

// Count diseases
const diseaseCount = (html.match(/"([a-z][a-z0-9-]+)":\s*\{\s*\n\s*zh:/gm) || []).length;
console.log(`  疾病數量: ${diseaseCount} (原始: 548)`);

if (diseaseCount < 548) {
  console.log('❌ 疾病數量減少，中止寫入');
  process.exit(1);
}

// Count diagnosticAlgorithm entries
const algoCount = (html.match(/diagnosticAlgorithm:\s*\{/g) || []).length;
console.log(`  diagnosticAlgorithm 數量: ${algoCount}`);

// Step 7: Write
const newLines = html.split('\n').length;
console.log(`\n📝 寫入檔案...`);
console.log(`  原始: ${originalLines} 行, ${originalLength} 字元`);
console.log(`  更新: ${newLines} 行, ${html.length} 字元`);
console.log(`  增加: ${newLines - originalLines} 行, ${html.length - originalLength} 字元`);

fs.writeFileSync(HTML_FILE, html);
console.log('\n✅ 整合完成！');
console.log(`   ${insertions.length} 個疾病已加入診斷流程`);

// ─── Helper Functions ───

function formatAlgorithm(algo) {
  const stepsStr = algo.steps.map(s => {
    let parts = [
      `step: ${s.step}`,
      `action: "${esc(s.action)}"`,
      `details: "${esc(s.details)}"`
    ];
    if (s.findings && s.findings.length > 0) {
      parts.push(`findings: [${s.findings.map(f => `"${esc(f)}"`).join(', ')}]`);
    }
    return `{ ${parts.join(', ')} }`;
  }).join(',\n        ');

  return `{\n      title: "${esc(algo.title)}",\n      steps: [\n        ${stepsStr}\n      ]\n    }`;
}

function esc(s) {
  if (!s) return '';
  return String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
}

/**
 * analyze-completeness.js
 *
 * Analyzes which diseases are missing key fields:
 * epidemiology, clinicalPresentation, diagnosis, treatment, pathophysiology, prognosis
 */

const fs = require('fs');

const h = fs.readFileSync('vet-differential-diagnosis-v2.html', 'utf8');
const start = h.indexOf('const DISEASE_INFO');
const end = h.indexOf('\n// ====', start + 100);
const section = h.substring(start, end > 0 ? end : start + 800000);

const diseaseRegex = /"([a-z][a-z0-9-]+)":\s*\{\s*\n\s*zh:\s*"([^"]+)",\s*\n\s*en:\s*"([^"]+)"/gm;

const complete = [];
const incomplete = [];
let m;

while ((m = diseaseRegex.exec(section)) !== null) {
  const id = m[1], zh = m[2], en = m[3];

  // Get this disease's block
  const blockStart = m.index;
  // Find next disease entry
  const afterEntry = section.substring(blockStart + 20, blockStart + 20000);
  const nextEntryMatch = afterEntry.match(/\n\s+"[a-z][a-z0-9-]+":\s*\{\s*\n\s+zh:/);
  const blockEnd = nextEntryMatch
    ? blockStart + 20 + nextEntryMatch.index
    : blockStart + 20000;
  const block = section.substring(blockStart, blockEnd);

  const fields = {
    epidemiology: block.includes('epidemiology:'),
    clinicalPresentation: block.includes('clinicalPresentation:'),
    pathophysiology: block.includes('pathophysiology:'),
    diagnosis: block.includes('diagnosis:'),
    treatment: block.includes('treatment:'),
    prognosis: block.includes('prognosis:')
  };

  const missing = Object.entries(fields)
    .filter(([k, v]) => !v)
    .map(([k]) => k);

  if (missing.length === 0) {
    complete.push({ id, zh, en });
  } else {
    incomplete.push({ id, zh, en, missing, missingCount: missing.length });
  }
}

// Sort incomplete by most missing first
incomplete.sort((a, b) => b.missingCount - a.missingCount);

console.log('═══════════════════════════════════════════');
console.log('  疾病資料完整性分析報告');
console.log('═══════════════════════════════════════════\n');
console.log(`總疾病數: ${complete.length + incomplete.length}`);
console.log(`完整 (6大欄位全有): ${complete.length} (${(complete.length / (complete.length + incomplete.length) * 100).toFixed(1)}%)`);
console.log(`不完整: ${incomplete.length} (${(incomplete.length / (complete.length + incomplete.length) * 100).toFixed(1)}%)\n`);

// Count by missing count
const bySeverity = {};
incomplete.forEach(d => {
  bySeverity[d.missingCount] = (bySeverity[d.missingCount] || 0) + 1;
});
console.log('不完整程度分布:');
Object.entries(bySeverity).sort((a,b) => b[0]-a[0]).forEach(([count, num]) => {
  console.log(`  缺 ${count} 個欄位: ${num} 個疾病`);
});

// Per-field statistics
const fieldStats = {};
incomplete.forEach(d => {
  d.missing.forEach(f => {
    fieldStats[f] = (fieldStats[f] || 0) + 1;
  });
});
console.log('\n各欄位缺失統計:');
Object.entries(fieldStats).sort((a,b) => b[1]-a[1]).forEach(([field, count]) => {
  console.log(`  ${field}: ${count} 個疾病缺失`);
});

// Save full analysis
const output = {
  summary: {
    total: complete.length + incomplete.length,
    complete: complete.length,
    incomplete: incomplete.length,
    completeness: (complete.length / (complete.length + incomplete.length) * 100).toFixed(1) + '%'
  },
  fieldStats,
  incompleteDiseasesById: incomplete.map(d => ({
    id: d.id,
    zh: d.zh,
    en: d.en,
    missing: d.missing
  }))
};

fs.writeFileSync('completeness-analysis.json', JSON.stringify(output, null, 2));
console.log('\n✅ 詳細分析已存入 completeness-analysis.json');
console.log(`\n需要補完的疾病共 ${incomplete.length} 個`);

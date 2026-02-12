// count-all2.js — Count RELATED_SYMPTOMS and LAB_DB
const fs = require('fs');
const html = fs.readFileSync('vet-differential-diagnosis-v2.html', 'utf8');

// Helper: extract object block
function extractBlock(constName) {
  const start = html.indexOf('const ' + constName + ' =');
  if (start === -1) return null;
  const braceStart = html.indexOf('{', start);
  let depth = 0, end = braceStart;
  for (let i = braceStart; i < html.length; i++) {
    if (html[i] === '{') depth++;
    else if (html[i] === '}') { depth--; if (depth === 0) { end = i + 1; break; } }
  }
  return html.substring(start, end);
}

// RELATED_SYMPTOMS — these are the clinical symptoms
const rsBlock = extractBlock('RELATED_SYMPTOMS');
if (rsBlock) {
  // Top-level keys are symptom categories
  const topKeys = rsBlock.match(/^\s{2}"[^"]+"\s*:\s*\{/gm) || [];
  console.log('=== RELATED_SYMPTOMS (臨床症狀) ===');
  console.log('類別數 (categories):', topKeys.length);

  // Individual symptoms are the nested keys with arrays
  const symptoms = rsBlock.match(/^\s{4,6}"[^"]+"\s*:\s*\[/gm) || [];
  console.log('個別症狀數 (symptoms):', symptoms.length);

  // List categories
  console.log('\n類別列表:');
  topKeys.forEach((k, i) => {
    const name = k.match(/"([^"]+)"/)[1];
    console.log('  ' + (i+1) + '. ' + name);
  });
}

// LAB_DB — lab indicators
const labBlock = extractBlock('LAB_DB');
if (labBlock) {
  const topKeys = labBlock.match(/^\s{2}"[^"]+"\s*:\s*\{/gm) || [];
  console.log('\n=== LAB_DB (實驗室指標) ===');
  console.log('類別數 (categories):', topKeys.length);

  const indicators = labBlock.match(/^\s{4,6}"[^"]+"\s*:\s*\[/gm) || [];
  console.log('個別指標數 (indicators):', indicators.length);

  console.log('\n類別列表:');
  topKeys.forEach((k, i) => {
    const name = k.match(/"([^"]+)"/)[1];
    console.log('  ' + (i+1) + '. ' + name);
  });
}

// DISEASE_INFO — count unique diseases
const diStart = html.indexOf('const DISEASE_INFO = {');
const dbStart = html.indexOf('const DB = {');
const diseaseBlock = html.substring(diStart, dbStart);
const diseaseIds = diseaseBlock.match(/^\s{4}"[a-z0-9\-\s]+"\s*:\s*\{/gm) || [];
console.log('\n=== DISEASE_INFO ===');
console.log('鑑別診斷疾病數:', diseaseIds.length);

// DB — how many unique target diseases are referenced
const dbBlock2 = extractBlock('DB');
if (dbBlock2) {
  const vals = new Set();
  const dbEntries = dbBlock2.match(/"[^"]+"\s*:\s*"([^"]+)"/g) || [];
  dbEntries.forEach(e => {
    const v = e.match(/:\s*"([^"]+)"/);
    if (v) vals.add(v[1]);
  });
  console.log('\nDB alias → unique targets:', vals.size);
  console.log('DB total entries:', dbEntries.length);
}

// validate-completeness.js — 驗證所有疾病欄位完整度
const fs = require('fs');

const html = fs.readFileSync('vet-differential-diagnosis-v2.html', 'utf8');
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
if (!scriptMatch) { console.error('ERROR: Cannot extract <script> block'); process.exit(1); }

// Syntax check
try {
  new Function(scriptMatch[1]);
  console.log('✓ JavaScript syntax valid');
} catch (e) {
  console.error('✗ JavaScript syntax ERROR:', e.message);
  process.exit(1);
}

// Check closing tags
['</script>', '</body>', '</html>'].forEach(tag => {
  if (html.includes(tag)) console.log('✓ ' + tag + ' found');
  else { console.error('✗ MISSING ' + tag); process.exit(1); }
});

const script = scriptMatch[1];
const diseaseBlock = script.substring(
  script.indexOf('const DISEASE_INFO = {'),
  script.indexOf('const DB = {')
);

// Find all disease entries
const regex = /\"([a-z0-9\-\s]+)\":\s*\{[^}]*?zh:\s*\"([^"]+)\"/g;
let match;
const diseases = [];
while ((match = regex.exec(diseaseBlock)) !== null) {
  diseases.push({ id: match[1], zh: match[2], pos: match.index });
}

console.log('\n=== Disease Count: ' + diseases.length + ' ===\n');

// Check each disease's fields
const fieldChecks = {
  'epidemiology(obj)': /epidemiology:\s*\{/,
  'epidemiology(any)': /epidemiology:\s*[\{\"]/,
  'clinicalPresentation(obj)': /clinicalPresentation:\s*\{/,
  'clinicalPresentation(any)': /clinicalPresentation:\s*[\{\[]/,
  'diagnosis(obj)': /diagnosis:\s*\{/,
  'diagnosis(any)': /diagnosis:\s*[\{\[]/,
  'treatment(obj)': /treatment:\s*\{/,
  'treatment(any)': /treatment:\s*[\{\[]/,
  'pearls(arr)': /pearls:\s*\[/,
  'pearls(any)': /pearls:\s*[\[\"]/,
  'monitoring(arr)': /monitoring:\s*\[/,
  'monitoring(any)': /monitoring:\s*[\[\"]/,
  'diagnosticAlgorithm': /diagnosticAlgorithm:\s*\{/,
  'definition': /definition:\s*\"[^\"]{10,}/,
  'pathophysiology': /pathophysiology:\s*\"[^\"]{10,}/,
  'prognosis': /prognosis:\s*\"[^\"]{5,}/,
  'reference': /reference:\s*\"/
};

const stats = {};
Object.keys(fieldChecks).forEach(f => stats[f] = 0);

let structuredCount = 0;
let simpleCount = 0;
const incomplete = [];

for (let i = 0; i < diseases.length; i++) {
  const start = diseases[i].pos;
  const end = i + 1 < diseases.length ? diseases[i + 1].pos : diseaseBlock.length;
  const block = diseaseBlock.substring(start, end);

  const isStructured = /epidemiology:\s*\{/.test(block);
  if (isStructured) structuredCount++;
  else simpleCount++;

  const missing = [];
  Object.entries(fieldChecks).forEach(([field, rx]) => {
    if (rx.test(block)) stats[field]++;
    else if (!field.includes('(any)') && !field.includes('(obj)') && !field.includes('(arr)')) {
      missing.push(field);
    }
  });

  // Check structured fields specifically
  if (!isStructured) missing.push('epidemiology(obj)');
  if (!/clinicalPresentation:\s*\{/.test(block) && /clinicalPresentation:\s*\[/.test(block)) missing.push('clinicalPresentation→needs obj');
  if (!/diagnosis:\s*\{/.test(block) && /diagnosis:\s*\[/.test(block)) missing.push('diagnosis→needs obj');
  if (!/treatment:\s*\{/.test(block) && /treatment:\s*\[/.test(block)) missing.push('treatment→needs obj');
  if (!/diagnosticAlgorithm:\s*\{/.test(block)) missing.push('diagnosticAlgorithm');

  if (missing.length > 0) {
    incomplete.push({ id: diseases[i].id, zh: diseases[i].zh, missing });
  }
}

console.log('=== Format Distribution ===');
console.log('Structured (epidemiology as object): ' + structuredCount);
console.log('Simple (epidemiology as string): ' + simpleCount);

console.log('\n=== Field Stats ===');
Object.entries(stats).forEach(([field, count]) => {
  const pct = Math.round(count / diseases.length * 100);
  const marker = pct === 100 ? '✓' : pct >= 90 ? '~' : '✗';
  console.log(marker + ' ' + field + ': ' + count + '/' + diseases.length + ' (' + pct + '%)');
});

console.log('\n=== Incomplete Diseases: ' + incomplete.length + ' ===');

// Group by type
const needsFullRestructure = incomplete.filter(d => d.missing.includes('epidemiology(obj)'));
const needsAlgoOnly = incomplete.filter(d => !d.missing.includes('epidemiology(obj)') && d.missing.includes('diagnosticAlgorithm'));

console.log('Need full restructure: ' + needsFullRestructure.length);
console.log('Need diagnosticAlgorithm only: ' + needsAlgoOnly.length);

// Completeness percentage
const totalFields = diseases.length * 5; // 5 structural fields per disease
const structuredFields = stats['epidemiology(obj)'] + stats['clinicalPresentation(obj)'] + stats['diagnosis(obj)'] + stats['treatment(obj)'] + stats['diagnosticAlgorithm'];
console.log('\n=== Overall Structural Completeness: ' + Math.round(structuredFields / totalFields * 100) + '% ===');

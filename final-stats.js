// final-stats.js — Final comprehensive statistics for completion report
const fs = require('fs');
const html = fs.readFileSync('vet-differential-diagnosis-v2.html', 'utf8');
const diStart = html.indexOf('const DISEASE_INFO = {');
const dbStart = html.indexOf('const DB = {');
const diseaseBlock = html.substring(diStart, dbStart);

const zhRegex = /"([a-z0-9\-\s]+)":\s*\{[^}]*?zh:\s*"/g;
let match, diseases = [];
while ((match = zhRegex.exec(diseaseBlock)) !== null) {
  diseases.push({ id: match[1].trim(), pos: match.index });
}

function extractField(block, fieldName) {
  const idx = block.indexOf(fieldName + ': "');
  if (idx === -1) return '';
  const start = idx + fieldName.length + 3;
  let i = start;
  while (i < block.length) {
    if (block[i] === '\\') { i += 2; continue; }
    if (block[i] === '"') break;
    i++;
  }
  return block.substring(start, i);
}

let stats = {
  total: diseases.length,
  def40: 0, def100: 0,
  patho50: 0, patho100: 0, pathoObj: 0,
  prog30: 0, prog60: 0,
  hasAlgo: 0, hasEpid: 0, hasClin: 0, hasDiag: 0, hasTreat: 0, hasMon: 0,
  hasPearls: 0, hasRef: 0, hasSynonyms: 0
};

for (let i = 0; i < diseases.length; i++) {
  const start = diseases[i].pos;
  const end = i + 1 < diseases.length ? diseases[i + 1].pos : diseaseBlock.length;
  const block = diseaseBlock.substring(start, end);
  const def = extractField(block, 'definition');
  const patho = extractField(block, 'pathophysiology');
  const prog = extractField(block, 'prognosis');

  if (def.length >= 40) stats.def40++;
  if (def.length >= 100) stats.def100++;

  const hasPathoObj = block.includes('pathophysiology: {');
  if (patho.length >= 50 || hasPathoObj) stats.patho50++;
  if (patho.length >= 100 || hasPathoObj) stats.patho100++;
  if (hasPathoObj) stats.pathoObj++;

  if (prog.length >= 30) stats.prog30++;
  if (prog.length >= 60) stats.prog60++;

  if (block.includes('diagnosticAlgorithm:')) stats.hasAlgo++;
  if (block.includes('epidemiology:')) stats.hasEpid++;
  if (block.includes('clinicalPresentation:')) stats.hasClin++;
  if (block.includes('diagnosis:')) stats.hasDiag++;
  if (block.includes('treatment:')) stats.hasTreat++;
  if (block.includes('monitoring:')) stats.hasMon++;
  if (block.includes('pearls:')) stats.hasPearls++;
  if (block.includes('reference:')) stats.hasRef++;
  if (block.includes('synonyms:')) stats.hasSynonyms++;
}

const pct = (n) => Math.round(n / stats.total * 100);

console.log('=== FINAL COMPLETION STATISTICS ===');
console.log('Total diseases: ' + stats.total);
console.log('');
console.log('--- Structural Fields ---');
console.log('epidemiology:          ' + stats.hasEpid + '/' + stats.total + ' (' + pct(stats.hasEpid) + '%)');
console.log('clinicalPresentation:  ' + stats.hasClin + '/' + stats.total + ' (' + pct(stats.hasClin) + '%)');
console.log('diagnosis:             ' + stats.hasDiag + '/' + stats.total + ' (' + pct(stats.hasDiag) + '%)');
console.log('treatment:             ' + stats.hasTreat + '/' + stats.total + ' (' + pct(stats.hasTreat) + '%)');
console.log('diagnosticAlgorithm:   ' + stats.hasAlgo + '/' + stats.total + ' (' + pct(stats.hasAlgo) + '%)');
console.log('monitoring:            ' + stats.hasMon + '/' + stats.total + ' (' + pct(stats.hasMon) + '%)');
console.log('pearls:                ' + stats.hasPearls + '/' + stats.total + ' (' + pct(stats.hasPearls) + '%)');
console.log('synonyms:              ' + stats.hasSynonyms + '/' + stats.total + ' (' + pct(stats.hasSynonyms) + '%)');
console.log('reference:             ' + stats.hasRef + '/' + stats.total + ' (' + pct(stats.hasRef) + '%)');
console.log('');
console.log('--- Content Quality ---');
console.log('definition >= 40 chars:  ' + stats.def40 + '/' + stats.total + ' (' + pct(stats.def40) + '%)');
console.log('definition >= 100 chars: ' + stats.def100 + '/' + stats.total + ' (' + pct(stats.def100) + '%)');
console.log('pathophysiology >= 50:   ' + stats.patho50 + '/' + stats.total + ' (' + pct(stats.patho50) + '%)');
console.log('pathophysiology >= 100:  ' + stats.patho100 + '/' + stats.total + ' (' + pct(stats.patho100) + '%)');
console.log('  (object format):       ' + stats.pathoObj);
console.log('prognosis >= 30 chars:   ' + stats.prog30 + '/' + stats.total + ' (' + pct(stats.prog30) + '%)');
console.log('prognosis >= 60 chars:   ' + stats.prog60 + '/' + stats.total + ' (' + pct(stats.prog60) + '%)');

// File stats
const lines = html.split('\n').length;
const sizeKB = Math.round(fs.statSync('vet-differential-diagnosis-v2.html').size / 1024);
console.log('');
console.log('--- File Stats ---');
console.log('Lines: ' + lines);
console.log('Size: ' + sizeKB + ' KB (' + Math.round(sizeKB/1024*10)/10 + ' MB)');

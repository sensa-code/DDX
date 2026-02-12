// analyze-thin.js — Detailed analysis of thin content for Phase 3 planning
const fs = require('fs');

const html = fs.readFileSync('vet-differential-diagnosis-v2.html', 'utf8');

const diStart = html.indexOf('const DISEASE_INFO = {');
const dbStart = html.indexOf('const DB = {');
const diseaseBlock = html.substring(diStart, dbStart);

const zhRegex = /"([a-z0-9\-\s]+)":\s*\{[^}]*?zh:\s*"/g;
let match;
const diseases = [];
while ((match = zhRegex.exec(diseaseBlock)) !== null) {
  diseases.push({ id: match[1].trim(), pos: match.index });
}

// Categorize
let goodCount = 0;
let thinDef = 0, thinPatho = 0, thinProg = 0;
let needsWork = [];

for (let i = 0; i < diseases.length; i++) {
  const start = diseases[i].pos;
  const end = i + 1 < diseases.length ? diseases[i + 1].pos : diseaseBlock.length;
  const block = diseaseBlock.substring(start, end);
  const id = diseases[i].id;

  const defMatch = block.match(/definition:\s*"([^"]*?)"/);
  const pathoMatch = block.match(/pathophysiology:\s*"([^"]*?)"/);
  const progMatch = block.match(/prognosis:\s*"([^"]*?)"/);

  const def = defMatch ? defMatch[1] : '';
  const patho = pathoMatch ? pathoMatch[1] : '';
  const prog = progMatch ? progMatch[1] : '';

  const defThin = def.length < 100;
  const pathoThin = patho.length < 100;
  const progThin = prog.length < 60;

  if (defThin || pathoThin || progThin) {
    needsWork.push({
      id,
      defLen: def.length,
      pathoLen: patho.length,
      progLen: prog.length,
      defThin,
      pathoThin,
      progThin
    });
  } else {
    goodCount++;
  }
}

console.log(`=== Phase 3 Scope Analysis ===`);
console.log(`Total diseases: ${diseases.length}`);
console.log(`Already adequate content: ${goodCount}`);
console.log(`Need enrichment: ${needsWork.length}`);
console.log(`\nBreakdown:`);

// Count by severity
let all3 = needsWork.filter(d => d.defThin && d.pathoThin && d.progThin).length;
let any2 = needsWork.filter(d => [d.defThin, d.pathoThin, d.progThin].filter(Boolean).length === 2).length;
let any1 = needsWork.filter(d => [d.defThin, d.pathoThin, d.progThin].filter(Boolean).length === 1).length;

console.log(`  All 3 fields thin: ${all3}`);
console.log(`  2 fields thin: ${any2}`);
console.log(`  1 field thin: ${any1}`);

// Average lengths for thin diseases
const avgDef = Math.round(needsWork.reduce((s, d) => s + d.defLen, 0) / needsWork.length);
const avgPatho = Math.round(needsWork.reduce((s, d) => s + d.pathoLen, 0) / needsWork.length);
const avgProg = Math.round(needsWork.reduce((s, d) => s + d.progLen, 0) / needsWork.length);
console.log(`\nAverage lengths for thin diseases:`);
console.log(`  Definition: ${avgDef} chars (target: 100-200)`);
console.log(`  Pathophysiology: ${avgPatho} chars (target: 200-400)`);
console.log(`  Prognosis: ${avgProg} chars (target: 100-200)`);

// Save list of IDs only (no duplicates with spaces)
const ids = needsWork.map(d => d.id);
console.log(`\nBatch planning (${Math.ceil(ids.length / 25)} batches of ~25):`);
for (let i = 0; i < ids.length; i += 25) {
  const batch = ids.slice(i, i + 25);
  console.log(`  C-${Math.floor(i/25)+1}: ${batch.length} diseases`);
}

fs.writeFileSync('phase3-diseases.json', JSON.stringify(needsWork, null, 2));
console.log(`\nSaved detailed list to phase3-diseases.json`);

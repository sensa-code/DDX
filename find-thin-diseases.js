// find-thin-diseases.js — Find diseases with thin definition/pathophysiology/prognosis
const fs = require('fs');

const html = fs.readFileSync('vet-differential-diagnosis-v2.html', 'utf8');

// Extract DISEASE_INFO block
const diStart = html.indexOf('const DISEASE_INFO = {');
const dbStart = html.indexOf('const DB = {');
const diseaseBlock = html.substring(diStart, dbStart);

// Find all diseases with position-based extraction
const zhRegex = /"([a-z0-9\-\s]+)":\s*\{[^}]*?zh:\s*"/g;
let match;
const diseases = [];
while ((match = zhRegex.exec(diseaseBlock)) !== null) {
  diseases.push({ id: match[1], pos: match.index });
}

let thinDef = [], thinPatho = [], thinProg = [], allThin = new Set();

for (let i = 0; i < diseases.length; i++) {
  const start = diseases[i].pos;
  const end = i + 1 < diseases.length ? diseases[i + 1].pos : diseaseBlock.length;
  const block = diseaseBlock.substring(start, end);
  const id = diseases[i].id;

  // Extract definition
  const defMatch = block.match(/definition:\s*"([^"]*?)"/);
  const def = defMatch ? defMatch[1] : '';

  // Extract pathophysiology
  const pathoMatch = block.match(/pathophysiology:\s*"([^"]*?)"/);
  const patho = pathoMatch ? pathoMatch[1] : '';

  // Extract prognosis
  const progMatch = block.match(/prognosis:\s*"([^"]*?)"/);
  const prog = progMatch ? progMatch[1] : '';

  if (def.length < 100) { thinDef.push({ id, len: def.length }); allThin.add(id); }
  if (patho.length < 100) { thinPatho.push({ id, len: patho.length }); allThin.add(id); }
  if (prog.length < 60) { thinProg.push({ id, len: prog.length }); allThin.add(id); }
}

console.log(`=== Thin Content Analysis ===`);
console.log(`Total diseases: ${diseases.length}`);
console.log(`Definition < 100 chars: ${thinDef.length}`);
console.log(`Pathophysiology < 100 chars: ${thinPatho.length}`);
console.log(`Prognosis < 60 chars: ${thinProg.length}`);
console.log(`Total unique thin diseases: ${allThin.size}`);
console.log(`\n--- Thin diseases list (for Phase 3) ---`);

// Sort and output
const thinList = [...allThin].sort();
thinList.forEach(id => console.log(id));

// Save to JSON for batch processing
fs.writeFileSync('thin-diseases.json', JSON.stringify(thinList, null, 2));
console.log(`\nSaved to thin-diseases.json`);

// check-remaining.js — Check how many diseases still need enrichment
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

let needsWork = [];
for (let i = 0; i < diseases.length; i++) {
  const start = diseases[i].pos;
  const end = i + 1 < diseases.length ? diseases[i + 1].pos : diseaseBlock.length;
  const block = diseaseBlock.substring(start, end);
  const zhMatch = block.match(/zh:\s*"([^"]*)"/);
  const def = extractField(block, 'definition');
  const patho = extractField(block, 'pathophysiology');
  const prog = extractField(block, 'prognosis');
  if (def.length < 40 || patho.length < 50 || prog.length < 30) {
    needsWork.push({ id: diseases[i].id, zh: zhMatch?.[1], defLen: def.length, pathoLen: patho.length, progLen: prog.length });
  }
}

console.log('Still need enrichment:', needsWork.length);
console.log('\nAll remaining:');
needsWork.forEach((d, i) => {
  const flags = [];
  if (d.defLen < 40) flags.push('D');
  if (d.pathoLen < 50) flags.push('P');
  if (d.progLen < 30) flags.push('R');
  console.log(`${i+1}. ${d.id} (${d.zh}) [${flags.join(',')}] def:${d.defLen} patho:${d.pathoLen} prog:${d.progLen}`);
});

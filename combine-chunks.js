const fs = require('fs');
const path = require('path');

const dir = 'E:\\CLAUDE CODE\\BOOK';
const chunks = [];

for (let i = 1; i <= 11; i++) {
  const file = path.join(dir, `chunk${i}.json`);
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  chunks.push(data);
}

// Merge all chunks into one object
const merged = {};
for (const chunk of chunks) {
  for (const [key, value] of Object.entries(chunk)) {
    merged[key] = value;
  }
}

// Write the final file
const output = JSON.stringify(merged, null, 2);
fs.writeFileSync(path.join(dir, 'batch-algo-2.json'), output, 'utf8');

// Validate by parsing back
const validated = JSON.parse(fs.readFileSync(path.join(dir, 'batch-algo-2.json'), 'utf8'));
const count = Object.keys(validated).length;
console.log(`SUCCESS: batch-algo-2.json written with ${count} diseases`);

// Verify all have diagnosticAlgorithm
let missingAlgo = 0;
for (const [id, data] of Object.entries(validated)) {
  if (!data.diagnosticAlgorithm) {
    console.log(`MISSING diagnosticAlgorithm: ${id}`);
    missingAlgo++;
  }
}
if (missingAlgo === 0) {
  console.log('All diseases have diagnosticAlgorithm');
}

// Now check against the input disease list
const input = JSON.parse(fs.readFileSync(path.join(dir, 'agent-group-2.json'), 'utf8'));
const inputIds = input.diseases.map(d => d.id);
const outputIds = Object.keys(validated);

const missing = inputIds.filter(id => !outputIds.includes(id));
const extra = outputIds.filter(id => !inputIds.includes(id));

console.log(`Input diseases: ${inputIds.length}`);
console.log(`Output diseases: ${outputIds.length}`);
if (missing.length > 0) {
  console.log(`MISSING from output: ${JSON.stringify(missing)}`);
} else {
  console.log('All input diseases accounted for');
}
if (extra.length > 0) {
  console.log(`EXTRA in output: ${JSON.stringify(extra)}`);
}

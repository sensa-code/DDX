const fs = require('fs');
const h = fs.readFileSync('vet-differential-diagnosis-v2.html', 'utf8');
const diStart = h.indexOf('const DISEASE_INFO = {');
const dbStart = h.indexOf('const DB = {');
const di = h.substring(diStart, dbStart);

const diseases = process.argv.slice(2);
for (const id of diseases) {
  const idx = di.indexOf('"' + id + '":');
  if (idx === -1) { console.log(id + ': NOT FOUND'); continue; }
  console.log('=== ' + id + ' ===');
  console.log(di.substring(idx, idx + 600));
  console.log('\n');
}

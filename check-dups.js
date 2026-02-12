const fs = require('fs');
const html = fs.readFileSync('vet-differential-diagnosis-v2.html', 'utf8');
const diStart = html.indexOf('const DISEASE_INFO = {');
const dbStart = html.indexOf('const DB = {');
const di = html.substring(diStart, dbStart);

const ids = ['pancreatitis','pyometra','lymphoma','insulinoma','hypoglycemia','hyperglycemia',
             'hypercalcemia','hypocalcemia','intervertebral disc disease','urethral obstruction',
             'dilated cardiomyopathy'];

for (const id of ids) {
  let count = 0, pos = 0;
  const search = '"' + id + '":';
  while (true) {
    const idx = di.indexOf(search, pos);
    if (idx === -1) break;
    count++;
    pos = idx + 1;
  }
  console.log(id + ': ' + count + ' occurrence(s)');

  // Show what the definition looks like at first occurrence
  const firstIdx = di.indexOf(search);
  if (firstIdx !== -1) {
    const snippet = di.substring(firstIdx, firstIdx + 200);
    const defMatch = snippet.match(/definition:\s*"([^"]{0,60})/);
    console.log('  -> def preview:', defMatch?.[1] || 'N/A');
  }
}

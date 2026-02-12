const fs = require('fs');
const h = fs.readFileSync('vet-differential-diagnosis-v2.html', 'utf8');
const start = h.indexOf('const DISEASE_INFO');
const end = h.indexOf('\n// ====', start + 100);
const section = h.substring(start, end > 0 ? end : start + 800000);

// Count diseases with reference fields
const singleRefCount = (section.match(/reference:\s*"/g) || []).length;
const arrayRefCount = (section.match(/references:\s*\[/g) || []).length;
console.log('有 reference (單一字串):', singleRefCount);
console.log('有 references (陣列):', arrayRefCount);

// Extract unique reference values
const refRegex = /reference:\s*"([^"]+)"/g;
const refs = new Set();
let m;
while ((m = refRegex.exec(section)) !== null) {
  refs.add(m[1]);
}
console.log('\n唯一的 reference 值 (' + refs.size + ' 個):');
[...refs].forEach(r => console.log('  ', r));

// Count diseases WITHOUT any reference
const diseaseRegex = /"([a-z][a-z0-9-]+)":\s*\{\s*\n\s*zh:\s*"([^"]+)"/gm;
let total = 0;
let withRef = 0;
let withoutRef = [];

while ((m = diseaseRegex.exec(section)) !== null) {
  total++;
  const id = m[1], zh = m[2];
  const blockStart = m.index;
  const afterEntry = section.substring(blockStart + 20, blockStart + 20000);
  const nextEntryMatch = afterEntry.match(/\n\s+"[a-z][a-z0-9-]+":\s*\{\s*\n\s+zh:/);
  const blockEnd = nextEntryMatch ? blockStart + 20 + nextEntryMatch.index : blockStart + 20000;
  const block = section.substring(blockStart, blockEnd);

  if (block.includes('reference:') || block.includes('references:')) {
    withRef++;
  } else {
    withoutRef.push({ id, zh });
  }
}

console.log('\n總疾病:', total);
console.log('有文獻引用:', withRef);
console.log('缺文獻引用:', withoutRef.length);

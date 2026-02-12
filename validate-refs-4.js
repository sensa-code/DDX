const fs = require('fs');
const src = JSON.parse(fs.readFileSync('E:/CLAUDE CODE/BOOK/agent-group-4.json', 'utf8'));
const refs = JSON.parse(fs.readFileSync('E:/CLAUDE CODE/BOOK/batch-refs-4.json', 'utf8'));
const refKeys = new Set(Object.keys(refs));

let missing = [];
src.diseases.forEach(d => {
  if (!refKeys.has(d.id)) missing.push(d.id);
});

if (missing.length === 0) {
  console.log('ALL ' + src.diseases.length + ' diseases covered!');
} else {
  console.log('Missing: ' + missing.length);
  missing.forEach(m => console.log('  - ' + m));
}

// Check minimum refs per disease
let underRef = [];
Object.entries(refs).forEach(([id, data]) => {
  if (data.references.length < 2) underRef.push(id + ' (' + data.references.length + ')');
});
if (underRef.length > 0) {
  console.log('\nDiseases with < 2 refs:');
  underRef.forEach(u => console.log('  - ' + u));
} else {
  console.log('All diseases have >= 2 references.');
}

// Check all refs have title and year
let badRefs = [];
Object.entries(refs).forEach(([id, data]) => {
  data.references.forEach((r, i) => {
    if (!r.title || !r.year) badRefs.push(id + ' ref[' + i + ']');
  });
});
if (badRefs.length > 0) {
  console.log('\nRefs missing title or year:');
  badRefs.forEach(b => console.log('  - ' + b));
} else {
  console.log('All references have title and year.');
}

console.log('\nTotal diseases: ' + Object.keys(refs).length);
console.log('Total references: ' + Object.values(refs).reduce((s, d) => s + d.references.length, 0));

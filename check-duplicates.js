const fs = require('fs');
const html = fs.readFileSync('vet-differential-diagnosis-v2.html', 'utf8');

const re = /"([a-z][a-z0-9-]+)":\s*\{[\s\n]+zh:/gm;
const ids = [];
let m;
while ((m = re.exec(html)) !== null) {
    ids.push(m[1]);
}

const seen = new Set();
const dups = [];
for (const id of ids) {
    if (seen.has(id)) dups.push(id);
    seen.add(id);
}

console.log('Unique disease IDs:', seen.size);
console.log('Duplicates:', dups.length === 0 ? 'NONE' : dups.join(', '));

// Batch integration verification
const batchFiles = [
    'batch12-tier1-critical.json',
    'batch13-tier2-high.json',
    'batch14-tier3-moderate.json',
    'batch15-tier3b.json',
    'batch16-tier4.json',
    'batch17-final-remaining.json'
];

console.log('\nBatch integration status:');
for (const bf of batchFiles) {
    try {
        const data = JSON.parse(fs.readFileSync(bf, 'utf8'));
        const keys = Object.keys(data);
        let present = 0;
        for (const k of keys) {
            if (html.includes('"' + k + '"')) present++;
        }
        console.log(`  ${bf}: ${present}/${keys.length} integrated`);
    } catch (e) {
        console.log(`  ${bf}: ERROR - ${e.message.substring(0, 50)}`);
    }
}

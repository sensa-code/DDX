const fs = require('fs');
const files = ['batch22-onco-infect.json','batch23-tox-neuro.json','batch24-derm-ophtho.json','batch25-repro-heme-msk.json','batch26-cardio-gi-misc.json'];
const existing = new Set(fs.readFileSync('current-disease-ids.txt','utf8').split('\n').map(l=>l.trim()).filter(Boolean));
let totalNew = 0;
let duplicates = [];

files.forEach(f => {
    if (!fs.existsSync(f)) {
        console.log(f + ': NOT YET CREATED');
        return;
    }
    try {
        const d = JSON.parse(fs.readFileSync(f, 'utf8'));
        const keys = Object.keys(d);
        console.log(f + ': ' + keys.length + ' diseases - VALID JSON');

        keys.forEach(k => {
            if (existing.has(k)) {
                duplicates.push(k);
                console.log('  DUPLICATE: ' + k);
            }
            const e = d[k];
            const missing = [];
            if (!e.zh) missing.push('zh');
            if (!e.en) missing.push('en');
            if (!e.definition) missing.push('definition');
            if (missing.length) console.log('  ' + k + ' MISSING FIELDS: ' + missing.join(', '));
        });
        totalNew += keys.length;
    } catch(e) {
        console.log(f + ': JSON ERROR - ' + e.message.slice(0, 100));
    }
});

console.log('\n=== Summary ===');
console.log('Total new diseases across all batches: ' + totalNew);
console.log('Duplicates with existing 451: ' + duplicates.length);
if (duplicates.length) console.log('Duplicate IDs: ' + duplicates.join(', '));
console.log('Current: 451 + New: ' + totalNew + ' = Target: ' + (451 + totalNew));

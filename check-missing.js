const fs = require('fs');
const done = new Set(Object.keys(JSON.parse(fs.readFileSync('batch-algo-3.json','utf8'))));
const input = JSON.parse(fs.readFileSync('agent-group-3.json','utf8'));
const missing = input.diseases.filter(d => !done.has(d.id));
console.log('Missing count:', missing.length);
missing.forEach(d => console.log(d.id, '|', d.zh));

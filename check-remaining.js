const diseases = require('./agent-group-5.json').diseases;
const done = Object.keys(require('./batch-algo-5.json'));
const remaining = diseases.filter(d => done.indexOf(d.id) === -1);
console.log('Remaining:', remaining.length);
remaining.forEach(d => console.log(d.id, '|', d.zh));

const fs = require('fs');
const d = JSON.parse(fs.readFileSync('batch-algo-3.json', 'utf8'));
let totalSteps = 0;
let errors = [];
for (const [id, val] of Object.entries(d)) {
  if (!val.diagnosticAlgorithm) { errors.push(id + ' missing diagnosticAlgorithm'); continue; }
  const algo = val.diagnosticAlgorithm;
  if (!algo.title) { errors.push(id + ' missing title'); }
  if (!algo.steps || !Array.isArray(algo.steps)) { errors.push(id + ' missing steps'); continue; }
  totalSteps += algo.steps.length;
  for (const s of algo.steps) {
    if (!s.step || !s.action || !s.details || !s.findings) { errors.push(id + ' step ' + s.step + ' missing fields'); }
    if (s.findings && s.findings.length < 2) { errors.push(id + ' step ' + s.step + ' fewer than 2 findings'); }
  }
}
console.log('Total steps across all diseases:', totalSteps);
console.log('Average steps per disease:', (totalSteps / 110).toFixed(1));
console.log('Structure errors:', errors.length);
errors.forEach(e => console.log(' -', e));

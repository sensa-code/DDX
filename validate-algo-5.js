const fs = require('fs');

// 1. Validate JSON parse
let data;
try {
  const raw = fs.readFileSync('./batch-algo-5.json', 'utf8');
  data = JSON.parse(raw);
  console.log('JSON parse: OK');
} catch(e) {
  console.error('JSON parse FAILED:', e.message);
  process.exit(1);
}

// 2. Count diseases
const keys = Object.keys(data);
console.log('Total diseases:', keys.length);

// 3. Check all diseases from input file are present
const inputDiseases = require('./agent-group-5.json').diseases;
const missing = inputDiseases.filter(d => !data[d.id]);
if (missing.length > 0) {
  console.error('MISSING diseases:', missing.map(d => d.id));
} else {
  console.log('All 108 input diseases present: OK');
}

// 4. Validate structure of each disease
let errors = [];
let stepCounts = {};
keys.forEach(id => {
  const entry = data[id];
  if (!entry.diagnosticAlgorithm) {
    errors.push(id + ': missing diagnosticAlgorithm');
    return;
  }
  const algo = entry.diagnosticAlgorithm;
  if (!algo.title) errors.push(id + ': missing title');
  if (!algo.steps || !Array.isArray(algo.steps)) {
    errors.push(id + ': missing or invalid steps');
    return;
  }
  if (algo.steps.length < 3 || algo.steps.length > 5) {
    errors.push(id + ': steps count out of range: ' + algo.steps.length);
  }

  // Track step count distribution
  stepCounts[algo.steps.length] = (stepCounts[algo.steps.length] || 0) + 1;

  algo.steps.forEach((step, i) => {
    if (!step.step) errors.push(id + ' step ' + (i+1) + ': missing step number');
    if (!step.action) errors.push(id + ' step ' + (i+1) + ': missing action');
    if (!step.details) errors.push(id + ' step ' + (i+1) + ': missing details');
    if (!step.findings || !Array.isArray(step.findings)) {
      errors.push(id + ' step ' + (i+1) + ': missing or invalid findings');
    } else if (step.findings.length < 2 || step.findings.length > 4) {
      errors.push(id + ' step ' + (i+1) + ': findings count ' + step.findings.length + ' (expected 2-4)');
    }
  });
});

if (errors.length > 0) {
  console.log('\nErrors found:');
  errors.forEach(e => console.log('  - ' + e));
} else {
  console.log('Structure validation: OK (all entries valid)');
}

console.log('\nStep count distribution:');
Object.keys(stepCounts).sort().forEach(k => {
  console.log('  ' + k + ' steps: ' + stepCounts[k] + ' diseases');
});

// 5. File size
const stats = fs.statSync('./batch-algo-5.json');
console.log('\nFile size:', (stats.size / 1024).toFixed(1) + ' KB');

const fs = require('fs');
const data = JSON.parse(fs.readFileSync('batch13-tier2-high.json','utf8'));
const requiredFields = ['zh','en','definition','synonyms','epidemiology','clinicalPresentation','pathophysiology','diagnosis','treatment','prognosis','pearls','monitoring','reference'];
const epidFields = ['species','age','sex','riskFactors'];
const clinFields = ['history','physicalExam'];
const diagFields = ['overview','differentials','initialDB','advanced'];
const txFields = ['overview','acute','chronic'];
let errors = [];
for (const [id, entry] of Object.entries(data)) {
  for (const f of requiredFields) {
    if (!entry[f]) errors.push(id + ': missing ' + f);
  }
  if (entry.epidemiology) {
    for (const f of epidFields) {
      if (!entry.epidemiology[f]) errors.push(id + '.epidemiology: missing ' + f);
    }
  }
  if (entry.clinicalPresentation) {
    for (const f of clinFields) {
      if (!entry.clinicalPresentation[f]) errors.push(id + '.clinicalPresentation: missing ' + f);
    }
  }
  if (entry.diagnosis) {
    for (const f of diagFields) {
      if (!entry.diagnosis[f]) errors.push(id + '.diagnosis: missing ' + f);
    }
  }
  if (entry.treatment) {
    for (const f of txFields) {
      if (!entry.treatment[f]) errors.push(id + '.treatment: missing ' + f);
    }
  }
}
if (errors.length === 0) {
  console.log('All 25 entries pass structural validation!');
} else {
  console.log('Errors found:');
  errors.forEach(e => console.log('  - ' + e));
}

const stats = fs.statSync('batch13-tier2-high.json');
console.log('File size:', (stats.size / 1024).toFixed(1), 'KB');

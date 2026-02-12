const fs = require('fs');
const data = JSON.parse(fs.readFileSync('batch18-fungal-infectious.json','utf8'));
const requiredFields = ['zh','en','definition','synonyms','epidemiology','clinicalPresentation','pathophysiology','diagnosis','treatment','prognosis','pearls','monitoring','reference'];
const epiFields = ['species','age','sex','riskFactors'];
const cpFields = ['history','physicalExam'];
const dxFields = ['overview','differentials','initialDB','advanced'];
const txFields = ['overview','acute','chronic'];

let errors = [];
for (const [id, entry] of Object.entries(data)) {
  for (const f of requiredFields) {
    if (!entry[f]) errors.push(id + ': missing ' + f);
  }
  for (const f of epiFields) {
    if (!entry.epidemiology || !entry.epidemiology[f]) errors.push(id + '.epidemiology: missing ' + f);
  }
  for (const f of cpFields) {
    if (!entry.clinicalPresentation || !entry.clinicalPresentation[f]) errors.push(id + '.clinicalPresentation: missing ' + f);
  }
  for (const f of dxFields) {
    if (!entry.diagnosis || !entry.diagnosis[f]) errors.push(id + '.diagnosis: missing ' + f);
  }
  for (const f of txFields) {
    if (!entry.treatment || !entry.treatment[f]) errors.push(id + '.treatment: missing ' + f);
  }
}

if (errors.length === 0) {
  console.log('VALIDATION PASSED: All 25 diseases have complete structure');
} else {
  console.log('ERRORS FOUND:');
  errors.forEach(e => console.log('  - ' + e));
}

const fileContent = fs.readFileSync('batch18-fungal-infectious.json','utf8');
console.log('File size:', (fileContent.length / 1024).toFixed(1) + ' KB');
console.log('Total lines:', fileContent.split('\n').length);
console.log('Disease count:', Object.keys(data).length);

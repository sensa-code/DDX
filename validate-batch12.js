const fs = require('fs');
const data = JSON.parse(fs.readFileSync('E:/CLAUDE CODE/BOOK/batch12-tier1-critical.json', 'utf8'));
const requiredFields = ['zh','en','definition','synonyms','epidemiology','clinicalPresentation','pathophysiology','diagnosis','treatment','prognosis','pearls','monitoring','reference'];
const epidFields = ['species','age','sex','riskFactors'];
const cpFields = ['history','physicalExam'];
const dxFields = ['overview','differentials','initialDB','advanced'];
const txFields = ['overview','acute','chronic'];
let errors = [];
Object.entries(data).forEach(([id, d]) => {
  requiredFields.forEach(f => {
    if (!d[f]) errors.push(id + ' missing ' + f);
  });
  if (d.epidemiology) {
    epidFields.forEach(f => {
      if (!d.epidemiology[f]) errors.push(id + ' epidemiology missing ' + f);
    });
  }
  if (d.clinicalPresentation) {
    cpFields.forEach(f => {
      if (!d.clinicalPresentation[f]) errors.push(id + ' clinicalPresentation missing ' + f);
    });
  }
  if (d.diagnosis) {
    dxFields.forEach(f => {
      if (!d.diagnosis[f]) errors.push(id + ' diagnosis missing ' + f);
    });
  }
  if (d.treatment) {
    txFields.forEach(f => {
      if (!d.treatment[f]) errors.push(id + ' treatment missing ' + f);
    });
  }
});
if (errors.length === 0) {
  console.log('All 25 entries have complete structure with all required nested fields.');
} else {
  errors.forEach(e => console.log('ERROR: ' + e));
}
console.log('Total entries:', Object.keys(data).length);

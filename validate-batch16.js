const fs = require('fs');
const j = JSON.parse(fs.readFileSync('E:/CLAUDE CODE/BOOK/batch16-tier4.json', 'utf8'));
const keys = Object.keys(j);
let ok = true;

keys.forEach(k => {
  const d = j[k];
  const fields = ['zh','en','definition','synonyms','epidemiology','clinicalPresentation','pathophysiology','diagnosis','treatment','prognosis','pearls','monitoring','reference'];
  fields.forEach(f => {
    if (!d[f]) { console.log('MISSING: ' + k + '.' + f); ok = false; }
  });
  if (d.epidemiology) {
    ['species','age','sex','riskFactors'].forEach(f => {
      if (!d.epidemiology[f]) { console.log('MISSING: ' + k + '.epidemiology.' + f); ok = false; }
    });
  }
  if (d.clinicalPresentation) {
    ['history','physicalExam'].forEach(f => {
      if (!d.clinicalPresentation[f]) { console.log('MISSING: ' + k + '.clinicalPresentation.' + f); ok = false; }
    });
  }
  if (d.diagnosis) {
    ['overview','differentials','initialDB','advanced'].forEach(f => {
      if (!d.diagnosis[f]) { console.log('MISSING: ' + k + '.diagnosis.' + f); ok = false; }
    });
  }
  if (d.treatment) {
    ['overview','acute','chronic'].forEach(f => {
      if (!d.treatment[f]) { console.log('MISSING: ' + k + '.treatment.' + f); ok = false; }
    });
  }
});

if (ok) console.log('All ' + keys.length + ' entries have complete structure!');

// Check file size
const stats = fs.statSync('E:/CLAUDE CODE/BOOK/batch16-tier4.json');
console.log('File size: ' + (stats.size / 1024).toFixed(1) + ' KB');

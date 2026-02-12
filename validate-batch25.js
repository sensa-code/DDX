const fs = require('fs');
const data = JSON.parse(fs.readFileSync('E:/CLAUDE CODE/BOOK/batch25-repro-heme-msk.json', 'utf8'));
const keys = Object.keys(data);
const rf = ['zh','en','definition','synonyms','epidemiology','clinicalPresentation','pathophysiology','diagnosis','treatment','prognosis','pearls','monitoring','reference'];

let errors = 0;
keys.forEach(function(k) {
  rf.forEach(function(f) {
    if (data[k][f] === undefined || data[k][f] === null) {
      console.log('MISSING: ' + k + ' -> ' + f);
      errors++;
    }
  });
});
console.log('Field errors: ' + errors);

let warnings = 0;
keys.forEach(function(k) {
  var d = data[k];
  if (d.clinicalPresentation.symptoms.length < 8) { console.log('WARN <8 symptoms: ' + k + ' (' + d.clinicalPresentation.symptoms.length + ')'); warnings++; }
  if (d.clinicalPresentation.physicalExam.length < 4) { console.log('WARN <4 physExam: ' + k + ' (' + d.clinicalPresentation.physicalExam.length + ')'); warnings++; }
  if (d.diagnosis.primary.length < 3) { console.log('WARN <3 primary: ' + k); warnings++; }
  if (d.diagnosis.differential.length < 4) { console.log('WARN <4 diff: ' + k); warnings++; }
  if (d.treatment.medications.length < 3) { console.log('WARN <3 meds: ' + k); warnings++; }
  if (d.pearls.length < 3) { console.log('WARN <3 pearls: ' + k); warnings++; }
  if (d.monitoring.length < 3) { console.log('WARN <3 monitoring: ' + k); warnings++; }
});
console.log('Warnings: ' + warnings);
console.log('Total diseases: ' + keys.length);
console.log('Validation complete.');

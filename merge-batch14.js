// Merge all batch14 parts into final file
const fs = require('fs');

const part1 = JSON.parse(fs.readFileSync('E:/CLAUDE CODE/BOOK/batch14-part1.json', 'utf8'));
const part2 = JSON.parse(fs.readFileSync('E:/CLAUDE CODE/BOOK/batch14-part2.json', 'utf8'));
const part3 = JSON.parse(fs.readFileSync('E:/CLAUDE CODE/BOOK/batch14-part3.json', 'utf8'));
const part4 = JSON.parse(fs.readFileSync('E:/CLAUDE CODE/BOOK/batch14-part4.json', 'utf8'));
const part5 = JSON.parse(fs.readFileSync('E:/CLAUDE CODE/BOOK/batch14-part5.json', 'utf8'));

const merged = { ...part1, ...part2, ...part3, ...part4, ...part5 };

const keys = Object.keys(merged);
console.log('Total diseases: ' + keys.length);
console.log('Disease IDs:');
keys.forEach((k, i) => console.log('  ' + (i+1) + '. ' + k));

// Validate structure
let valid = true;
const requiredFields = ['zh', 'en', 'definition', 'synonyms', 'epidemiology', 'clinicalPresentation', 'pathophysiology', 'diagnosis', 'treatment', 'prognosis', 'pearls', 'monitoring', 'reference'];
const requiredEpiFields = ['species', 'age', 'sex', 'riskFactors'];
const requiredCPFields = ['history', 'physicalExam'];
const requiredDxFields = ['overview', 'differentials', 'initialDB', 'advanced'];
const requiredTxFields = ['overview', 'acute', 'chronic'];

keys.forEach(k => {
  requiredFields.forEach(f => {
    if (!merged[k][f]) {
      console.log('MISSING: ' + k + '.' + f);
      valid = false;
    }
  });
  requiredEpiFields.forEach(f => {
    if (!merged[k].epidemiology[f]) {
      console.log('MISSING: ' + k + '.epidemiology.' + f);
      valid = false;
    }
  });
  requiredCPFields.forEach(f => {
    if (!merged[k].clinicalPresentation[f]) {
      console.log('MISSING: ' + k + '.clinicalPresentation.' + f);
      valid = false;
    }
  });
  requiredDxFields.forEach(f => {
    if (!merged[k].diagnosis[f]) {
      console.log('MISSING: ' + k + '.diagnosis.' + f);
      valid = false;
    }
  });
  requiredTxFields.forEach(f => {
    if (!merged[k].treatment[f]) {
      console.log('MISSING: ' + k + '.treatment.' + f);
      valid = false;
    }
  });
});

if (valid) {
  console.log('\nAll validations passed!');
} else {
  console.log('\nSome validations failed!');
}

// Write final file
fs.writeFileSync('E:/CLAUDE CODE/BOOK/batch14-tier3-moderate.json', JSON.stringify(merged, null, 2), 'utf8');
console.log('\nFinal file written: batch14-tier3-moderate.json');

// Check file size
const stats = fs.statSync('E:/CLAUDE CODE/BOOK/batch14-tier3-moderate.json');
console.log('File size: ' + (stats.size / 1024).toFixed(1) + ' KB');

// Verify JSON validity
try {
  JSON.parse(fs.readFileSync('E:/CLAUDE CODE/BOOK/batch14-tier3-moderate.json', 'utf8'));
  console.log('JSON validation: VALID');
} catch (e) {
  console.log('JSON validation: INVALID - ' + e.message);
}

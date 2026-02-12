// find-unlinked.js — Find DISEASE_INFO entries not referenced in DB.symptoms or LAB_DB
const fs = require('fs');
const html = fs.readFileSync('vet-differential-diagnosis-v2.html', 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
const vm = require('vm');

// Extract data sections
const diseaseInfoStart = script.indexOf('const DISEASE_INFO = {');
const relatedSympStart = script.indexOf('const RELATED_SYMPTOMS = {');
const labDbStart = script.indexOf('const LAB_DB = { abnormalities:');
const dbStart = script.indexOf('const DB = { symptoms:');
const ageBiasStart = script.indexOf('const AGE_BIAS = {');
const symptomLabStart = script.indexOf('const SYMPTOM_LAB_LINKS');

// 1. Get all DISEASE_INFO keys
const diSection = script.substring(diseaseInfoStart, relatedSympStart);
const diFunc = new Function(diSection + '\nreturn DISEASE_INFO;');
const DISEASE_INFO = diFunc();
const allDiseaseIds = new Set(Object.keys(DISEASE_INFO));

// 2. Get DB.symptoms differentials — collect all referenced disease names (en field)
const dbSection = script.substring(dbStart, ageBiasStart);
const dbFunc = new Function(dbSection + '\nreturn DB;');
const DB = dbFunc();

const referencedInSymptoms = new Set();
const symptomRefMap = {}; // disease en -> which symptoms reference it

DB.symptoms.forEach(s => {
  if (s.differentials) {
    s.differentials.forEach(d => {
      referencedInSymptoms.add(d.en);
      if (!symptomRefMap[d.en]) symptomRefMap[d.en] = [];
      symptomRefMap[d.en].push(s.zhName);
    });
  }
});

// 3. Get LAB_DB differentials
const labSection = script.substring(labDbStart, symptomLabStart);
const labFunc = new Function(labSection + '\nreturn LAB_DB;');
const LAB_DB = labFunc();

const referencedInLab = new Set();
LAB_DB.abnormalities.forEach(a => {
  if (a.differentials) {
    a.differentials.forEach(d => referencedInLab.add(d.en));
  }
});

// 4. Now try to match DISEASE_INFO keys to referenced names
// DISEASE_INFO keys are like "pancreatitis", "dilated-cardiomyopathy"
// DB.symptoms differentials use en like "Pancreatitis", "Dilated cardiomyopathy (DCM)"
// We need fuzzy matching

const linkedDiseases = new Set();
const unmatchedRefs = new Set();

// Build lookup from DISEASE_INFO: id -> { zh, en }
const diseaseIndex = {};
for (const [id, info] of Object.entries(DISEASE_INFO)) {
  diseaseIndex[id] = { zh: info.zh, en: info.en };
}

// For each referenced disease name, try to find matching DISEASE_INFO entry
function normalizeForMatch(str) {
  return str.toLowerCase()
    .replace(/[()（）/／\s\-_,\.]/g, '')
    .replace(/disease|syndrome|disorder/gi, '');
}

const allRefNames = new Set([...referencedInSymptoms, ...referencedInLab]);

for (const refName of allRefNames) {
  const normRef = normalizeForMatch(refName);
  let found = false;

  for (const [id, info] of Object.entries(DISEASE_INFO)) {
    const normId = normalizeForMatch(id);
    const normEn = normalizeForMatch(info.en || '');

    if (normRef === normId || normRef === normEn ||
        normRef.includes(normId) || normId.includes(normRef) ||
        normRef.includes(normEn) || normEn.includes(normRef)) {
      linkedDiseases.add(id);
      found = true;
      break;
    }
  }

  if (!found) {
    unmatchedRefs.add(refName);
  }
}

// Unlinked diseases = DISEASE_INFO keys not in linkedDiseases
const unlinkedDiseases = [];
for (const id of allDiseaseIds) {
  if (!linkedDiseases.has(id)) {
    unlinkedDiseases.push({ id, zh: DISEASE_INFO[id].zh, en: DISEASE_INFO[id].en });
  }
}

console.log('=== 統計 ===');
console.log('DISEASE_INFO 疾病總數:', allDiseaseIds.size);
console.log('DB.symptoms 引用的不重複疾病名:', referencedInSymptoms.size);
console.log('LAB_DB 引用的不重複疾病名:', referencedInLab.size);
console.log('合併去重後:', allRefNames.size);
console.log('');
console.log('成功比對到 DISEASE_INFO 的:', linkedDiseases.size);
console.log('未比對到 DISEASE_INFO 的引用名:', unmatchedRefs.size);
console.log('DISEASE_INFO 中沒被引用的疾病:', unlinkedDiseases.length);

if (unmatchedRefs.size > 0) {
  console.log('\n=== 在 DB.symptoms/LAB_DB 有引用但找不到 DISEASE_INFO 的疾病 ===');
  [...unmatchedRefs].sort().forEach(r => console.log('  - ' + r));
}

console.log('\n=== DISEASE_INFO 中沒被任何症狀/指標引用的疾病 (' + unlinkedDiseases.length + ') ===');
// Group by category if possible
unlinkedDiseases.sort((a, b) => a.id.localeCompare(b.id));
unlinkedDiseases.forEach((d, i) => {
  console.log('  ' + (i+1) + '. ' + d.id + ' (' + d.zh + ') — ' + d.en);
});

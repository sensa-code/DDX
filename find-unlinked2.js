// find-unlinked2.js — Better matching using synonyms and DISEASE_ALIASES
const fs = require('fs');
const html = fs.readFileSync('vet-differential-diagnosis-v2.html', 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];

// Extract data sections
const diseaseInfoStart = script.indexOf('const DISEASE_INFO = {');
const relatedSympStart = script.indexOf('const RELATED_SYMPTOMS = {');
const labDbStart = script.indexOf('const LAB_DB = { abnormalities:');
const dbStart = script.indexOf('const DB = { symptoms:');
const ageBiasStart = script.indexOf('const AGE_BIAS = {');
const symptomLabStart = script.indexOf('const SYMPTOM_LAB_LINKS');
const diseaseAliasStart = script.indexOf('const DISEASE_ALIASES = {');

// 1. DISEASE_INFO
const diSection = script.substring(diseaseInfoStart, relatedSympStart);
const DISEASE_INFO = (new Function(diSection + '\nreturn DISEASE_INFO;'))();

// 2. DISEASE_ALIASES
const daSection = script.substring(diseaseAliasStart, diseaseInfoStart);
const DISEASE_ALIASES = (new Function(daSection + '\nreturn DISEASE_ALIASES;'))();

// 3. DB.symptoms
const dbSection = script.substring(dbStart, ageBiasStart);
const DB = (new Function(dbSection + '\nreturn DB;'))();

// 4. LAB_DB
const labSection = script.substring(labDbStart, symptomLabStart);
const LAB_DB = (new Function(labSection + '\nreturn LAB_DB;'))();

// Build comprehensive lookup: normalize string -> disease id
const lookup = {};
function norm(s) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, '');
}

for (const [id, info] of Object.entries(DISEASE_INFO)) {
  // id itself
  lookup[norm(id)] = id;
  // en name
  if (info.en) lookup[norm(info.en)] = id;
  // zh name
  if (info.zh) lookup[norm(info.zh)] = id;
  // synonyms
  if (Array.isArray(info.synonyms)) {
    info.synonyms.forEach(s => { lookup[norm(s)] = id; });
  }
}

// Also add DISEASE_ALIASES
for (const [alias, target] of Object.entries(DISEASE_ALIASES)) {
  lookup[norm(alias)] = target;
}

// Collect all referenced disease names from DB.symptoms
const symptomRefs = new Map(); // refName -> Set of symptom zhNames
DB.symptoms.forEach(s => {
  if (s.differentials) {
    s.differentials.forEach(d => {
      const key = d.en;
      if (!symptomRefs.has(key)) symptomRefs.set(key, new Set());
      symptomRefs.get(key).add(s.zhName);
    });
  }
});

// Collect from LAB_DB
const labRefs = new Set();
LAB_DB.abnormalities.forEach(a => {
  if (a.differentials) {
    a.differentials.forEach(d => labRefs.add(d.en));
  }
});

// All unique references
const allRefs = new Set([...symptomRefs.keys(), ...labRefs]);

// Match each reference
const linkedDiseaseIds = new Set();
const unmatchedRefs = [];

for (const refName of allRefs) {
  const n = norm(refName);
  if (lookup[n]) {
    linkedDiseaseIds.add(lookup[n]);
  } else {
    // Try partial matching
    let found = false;
    for (const [key, id] of Object.entries(lookup)) {
      if (key.length > 5 && (n.includes(key) || key.includes(n))) {
        linkedDiseaseIds.add(id);
        found = true;
        break;
      }
    }
    if (!found) {
      unmatchedRefs.push(refName);
    }
  }
}

// Unlinked = in DISEASE_INFO but NOT referenced
const unlinked = [];
for (const id of Object.keys(DISEASE_INFO)) {
  if (!linkedDiseaseIds.has(id)) {
    unlinked.push({ id, zh: DISEASE_INFO[id].zh, en: DISEASE_INFO[id].en });
  }
}

console.log('=== 比對結果（使用 synonyms + aliases 增強） ===');
console.log('DISEASE_INFO 疾病總數:', Object.keys(DISEASE_INFO).length);
console.log('DB.symptoms + LAB_DB 引用的不重複疾病名:', allRefs.size);
console.log('');
console.log('成功比對到 DISEASE_INFO:', linkedDiseaseIds.size);
console.log('無法比對的引用名:', unmatchedRefs.length);
console.log('DISEASE_INFO 中沒被引用的疾病:', unlinked.length);

// Categorize unmatched refs
if (unmatchedRefs.length > 0) {
  // Check if they are generic/descriptive terms vs actual diseases
  const generic = [];
  const possibleDiseases = [];
  const genericKeywords = ['drug', 'iatrogenic', 'idiopathic', 'unknown', 'other', 'various',
    'artifact', 'physiologic', 'normal', 'excess', 'loss', 'factor', 'generic',
    'secondary', 'chronic', 'acute', 'neoplasia', 'infection', 'damage', 'obstruction',
    'haemorrhage', 'inflammation', 'deficiency', 'overload', 'imbalance'];

  unmatchedRefs.sort().forEach(r => {
    const lower = r.toLowerCase();
    const isGeneric = genericKeywords.some(k => lower.includes(k)) ||
                      lower.includes('/') || lower.includes('(') || r.length > 50;
    if (isGeneric) generic.push(r);
    else possibleDiseases.push(r);
  });

  console.log('\n--- 無法比對的引用名分類 ---');
  console.log('\n泛稱/非特定疾病名 (' + generic.length + '):');
  generic.forEach(r => console.log('  · ' + r));
  console.log('\n可能是具體疾病但未匹配 (' + possibleDiseases.length + '):');
  possibleDiseases.forEach(r => console.log('  · ' + r));
}

if (unlinked.length > 0) {
  console.log('\n=== 未被引用的 DISEASE_INFO 疾病 (' + unlinked.length + ') ===');
  unlinked.sort((a, b) => a.id.localeCompare(b.id));
  unlinked.forEach((d, i) => console.log('  ' + (i+1) + '. ' + d.id + ' — ' + d.zh));
}

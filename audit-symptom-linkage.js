// audit-symptom-linkage.js — Cross-reference DISEASE_INFO clinicalPresentation vs DB.symptoms
const fs = require('fs');

const html = fs.readFileSync('vet-differential-diagnosis-v2.html', 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];

// Extract data
const diStart = script.indexOf('const DISEASE_INFO = {');
const relSympStart = script.indexOf('const RELATED_SYMPTOMS = {');
const labDbStart = script.indexOf('const LAB_DB = { abnormalities:');
const dbStart = script.indexOf('const DB = { symptoms:');
const ageBiasStart = script.indexOf('const AGE_BIAS = {');
const symptomLabStart = script.indexOf('const SYMPTOM_LAB_LINKS');
const aliasStart = script.indexOf('const DISEASE_ALIASES = {');

const DISEASE_INFO = (new Function(script.substring(diStart, relSympStart) + '\nreturn DISEASE_INFO;'))();
const DB = (new Function(script.substring(dbStart, ageBiasStart) + '\nreturn DB;'))();
const LAB_DB = (new Function(script.substring(labDbStart, symptomLabStart) + '\nreturn LAB_DB;'))();
const DISEASE_ALIASES = (new Function(script.substring(aliasStart, diStart) + '\nreturn DISEASE_ALIASES;'))();

// ==========================================
// KEYWORD → SYMPTOM MAPPING (120+ entries)
// ==========================================
const KEYWORD_TO_SYMPTOM = {
  // === 全身性/代謝 ===
  "多尿多渴": "polyuria-polydipsia", "PU/PD": "polyuria-polydipsia", "多尿": "polyuria-polydipsia",
  "多渴": "polyuria-polydipsia", "喝很多水": "polyuria-polydipsia",
  "體重減輕": "weight-loss", "消瘦": "weight-loss", "體重下降": "weight-loss", "削瘦": "weight-loss",
  "體重增加": "weight-gain", "肥胖": "weight-gain",
  "多食": "polyphagia", "多食症": "polyphagia", "食慾增加": "polyphagia",
  "厭食": "anorexia", "食慾下降": "anorexia", "食慾降低": "anorexia", "不吃": "anorexia",
  "拒食": "anorexia", "食慾不振": "anorexia",
  "生長遲滯": "failure-to-grow", "發育不良": "failure-to-grow", "生長緩慢": "failure-to-grow",
  "昏厥": "syncope", "暈倒": "syncope", "倒地": "syncope",
  "虛弱": "weakness", "無力": "weakness", "虛脫": "weakness", "精神差": "weakness",
  "嗜睡": "weakness", "精神抑鬱": "weakness", "活動力下降": "weakness", "疲倦": "weakness",
  "體溫過高": "hyperthermia", "發燒": "hyperthermia", "高體溫": "hyperthermia", "高燒": "hyperthermia",
  "運動不耐": "exercise-intolerance",

  // === 呼吸 ===
  "呼吸困難": "dyspnoea", "喘": "dyspnoea", "開口呼吸": "dyspnoea", "張口呼吸": "dyspnoea",
  "端坐呼吸": "dyspnoea", "呼吸急促": "dyspnoea", "呼吸費力": "dyspnoea",
  "咳嗽": "coughing", "乾咳": "coughing", "濕咳": "coughing",
  "咳血": "haemoptysis",

  // === 消化 ===
  "吞嚥困難": "dysphagia", "無法進食": "dysphagia", "進食困難": "dysphagia",
  "吐回食物": "regurgitation", "回流": "regurgitation",
  "嘔吐": "vomiting", "乾嘔": "vomiting",
  "腹瀉": "diarrhoea", "軟便": "diarrhoea", "水樣腹瀉": "diarrhoea", "水瀉": "diarrhoea",
  "黑便": "melaena", "柏油便": "melaena",
  "血便": "haematochezia", "鮮血便": "haematochezia",
  "吐血": "haematemesis", "嘔血": "haematemesis",
  "便秘": "constipation", "排便困難": "constipation",
  "脹氣": "flatulence",
  "作嘔": "gagging",
  "腹部膨大": "abdominal-distension", "腹部膨脹": "abdominal-distension",
  "腹部脹大": "abdominal-distension", "腹脹": "abdominal-distension",
  "裡急後重": "faecal-tenesmus",
  "糞便失禁": "faecal-incontinence", "大便失禁": "faecal-incontinence",

  // === 泌尿 ===
  "頻尿": "pollakiuria", "排尿困難": "pollakiuria", "排尿異常": "pollakiuria",
  "頻繁進出砂盆": "pollakiuria", "尿淋漓": "pollakiuria",
  "血尿": "haematuria", "色素尿": "haematuria", "紅色尿液": "haematuria",
  "尿失禁": "urinary-incontinence",

  // === 神經 ===
  "跛行": "lameness", "走路異常": "lameness", "步態異常": "lameness",
  "癱瘓": "paresis-paralysis", "輕癱": "paresis-paralysis", "後肢癱瘓": "paresis-paralysis",
  "四肢癱瘓": "paresis-paralysis", "後肢無力": "paresis-paralysis",
  "關節腫脹": "polyarthritis", "多關節疼痛": "polyarthritis",
  "共濟失調": "ataxia", "步態不穩": "ataxia", "搖晃步態": "ataxia",
  "顫抖": "trembling", "震顫": "trembling", "肌肉震顫": "trembling", "肌肉抽搐": "trembling",
  "癲癇": "seizures", "抽搐": "seizures", "癲癇發作": "seizures", "痙攣": "seizures",
  "昏迷": "coma-stupor", "意識改變": "coma-stupor", "意識喪失": "coma-stupor",
  "失明": "blindness", "視力喪失": "blindness", "視力障礙": "blindness",

  // === 眼科 ===
  "眼睛紅": "red-eye", "結膜充血": "red-eye", "結膜發紅": "red-eye", "眼部紅腫": "red-eye",

  // === 皮膚 ===
  "搔癢": "skin-pruritus", "皮膚癢": "skin-pruritus", "抓癢": "skin-pruritus", "瘙癢": "skin-pruritus",
  "脫毛": "alopecia", "禿毛": "alopecia", "掉毛": "alopecia", "對稱性脫毛": "alopecia",

  // === 其他 ===
  "淋巴結腫大": "lymphadenopathy", "淋巴腫大": "lymphadenopathy",
  "黃疸": "jaundice",
  "腹水": "ascites",
  "流涎": "ptyalism", "過度流涎": "ptyalism", "唾液過多": "ptyalism",
  "噴嚏": "sneezing", "打噴嚏": "sneezing",
  "陰道分泌物": "vaginal-discharge", "陰部分泌物": "vaginal-discharge",
  "鼻出血": "epistaxis", "流鼻血": "epistaxis",
  "心雜音": "heart-murmur",

  // === 新增映射 (Phase 5.3) ===
  // B組：映射到現有症狀
  "發熱": "hyperthermia", "體溫升高": "hyperthermia",
  "食慾廢絕": "anorexia",
  "心搏過速": "tachycardia-bradycardia", "心跳加速": "tachycardia-bradycardia",
  "心律不整": "tachycardia-bradycardia", "心搏過緩": "tachycardia-bradycardia",
  "黏膜蒼白": "pallor-cyanosis", "黏膜蒼白或發紺": "pallor-cyanosis",
  "肌肉萎縮": "cachexia-muscle-wasting", "惡病質": "cachexia-muscle-wasting",
  "口腔潰瘍": "halitosis-stomatitis", "口臭": "halitosis-stomatitis", "口炎": "halitosis-stomatitis",
  "頸靜脈怒張": "tachycardia-bradycardia",
  "瘀斑": "petechiae-ecchymoses", "出血點": "petechiae-ecchymoses", "點狀出血": "petechiae-ecchymoses",
  "喘鳴": "stertor-stridor", "吸氣音異常": "stertor-stridor",
  "少尿": "oliguria-anuria", "無尿": "oliguria-anuria",
  "水腫": "peripheral-oedema", "周邊水腫": "peripheral-oedema",
  "皮膚腫塊": "cutaneous-masses", "腫塊": "cutaneous-masses", "結節": "cutaneous-masses",
  "頭歪": "head-tilt", "頭部傾斜": "head-tilt",
  "腹痛": "abdominal-pain", "腹部疼痛": "abdominal-pain", "腹部觸診疼痛": "abdominal-pain",
  "腹部不適": "abdominal-pain",

  // 新增6個症狀的映射
  "脫水": "dehydration", "脫水徵象": "dehydration",
  "肝腫大": "hepatomegaly", "肝脾腫大": "hepatomegaly",
  "脾臟腫大": "splenomegaly", "脾腫大": "splenomegaly",
  "行為改變": "behaviour-change", "行為異常": "behaviour-change",
  "瞳孔散大": "mydriasis", "散瞳": "mydriasis",
  "低體溫": "hypothermia-sign",
  "發紺": "pallor-cyanosis",

  // 額外補充映射
  "低血壓": "dehydration",
  "休克徵象": "dehydration",
  "眼球震顫": "nystagmus",
};

// ==========================================
// Build reverse index: which diseases does each symptom currently list?
// ==========================================

// Build DISEASE_INFO key lookup (normalized)
function norm(s) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, '');
}

const diseaseKeyLookup = {};
for (const [id, info] of Object.entries(DISEASE_INFO)) {
  diseaseKeyLookup[norm(id)] = id;
  if (info.en) diseaseKeyLookup[norm(info.en)] = id;
  if (info.zh) diseaseKeyLookup[norm(info.zh)] = id;
  if (Array.isArray(info.synonyms)) {
    info.synonyms.forEach(s => { diseaseKeyLookup[norm(s)] = id; });
  }
}
for (const [alias, target] of Object.entries(DISEASE_ALIASES)) {
  diseaseKeyLookup[norm(alias)] = target;
}

// For each symptom, collect which DISEASE_INFO IDs it references
const symptomToDiseases = {};
const symptomNames = {};
DB.symptoms.forEach(s => {
  if (s.id.startsWith('test-')) return; // skip test entries
  symptomToDiseases[s.id] = new Set();
  symptomNames[s.id] = s.zhName;
  if (s.differentials) {
    s.differentials.forEach(d => {
      // Try to match d.en or d.zh to a DISEASE_INFO key
      const nEn = norm(d.en || '');
      const nZh = norm(d.zh || '');
      const matchedId = diseaseKeyLookup[nEn] || diseaseKeyLookup[nZh];
      if (matchedId && DISEASE_INFO[matchedId]) {
        symptomToDiseases[s.id].add(matchedId);
      }
    });
  }
});

// LAB_DB also references diseases
const labToDiseases = {};
LAB_DB.abnormalities.forEach(a => {
  labToDiseases[a.id] = new Set();
  if (a.differentials) {
    a.differentials.forEach(d => {
      const nEn = norm(d.en || '');
      const nZh = norm(d.zh || '');
      const matchedId = diseaseKeyLookup[nEn] || diseaseKeyLookup[nZh];
      if (matchedId && DISEASE_INFO[matchedId]) {
        labToDiseases[a.id].add(matchedId);
      }
    });
  }
});

// Build reverse: disease → which symptoms currently list it
const diseaseToSymptoms = {};
for (const [symptomId, diseaseSet] of Object.entries(symptomToDiseases)) {
  for (const did of diseaseSet) {
    if (!diseaseToSymptoms[did]) diseaseToSymptoms[did] = new Set();
    diseaseToSymptoms[did].add(symptomId);
  }
}

// ==========================================
// For each disease, determine EXPECTED symptoms from clinicalPresentation
// ==========================================
const gapByDisease = {};
const gapBySymptom = {};
const unmappedKeywords = {};
let reachableCount = 0;
let unreachableCount = 0;

for (const [diseaseId, info] of Object.entries(DISEASE_INFO)) {
  const history = (info.clinicalPresentation && info.clinicalPresentation.history) || [];
  const physExam = (info.clinicalPresentation && info.clinicalPresentation.physicalExam) || [];
  const allPresentation = [...history, ...physExam];

  const expectedSymptoms = new Set();
  const unmapped = [];

  for (const item of allPresentation) {
    let matched = false;
    for (const [keyword, symptomId] of Object.entries(KEYWORD_TO_SYMPTOM)) {
      if (item.includes(keyword)) {
        expectedSymptoms.add(symptomId);
        matched = true;
      }
    }
    if (!matched) {
      unmapped.push(item);
      // Track unmapped keywords
      const cleanItem = item.replace(/（[^）]*）/g, '').replace(/\([^)]*\)/g, '').trim();
      if (!unmappedKeywords[cleanItem]) unmappedKeywords[cleanItem] = { count: 0, diseases: [] };
      unmappedKeywords[cleanItem].count++;
      if (unmappedKeywords[cleanItem].diseases.length < 5) {
        unmappedKeywords[cleanItem].diseases.push(diseaseId);
      }
    }
  }

  const actualSymptoms = diseaseToSymptoms[diseaseId] || new Set();
  const missing = [...expectedSymptoms].filter(s => !actualSymptoms.has(s));
  const isReachable = actualSymptoms.size > 0;

  if (isReachable) reachableCount++;
  else unreachableCount++;

  if (missing.length > 0 || !isReachable) {
    gapByDisease[diseaseId] = {
      zh: info.zh,
      expected: [...expectedSymptoms],
      actual: [...actualSymptoms],
      missing: missing,
      unmapped: unmapped,
      reachable: isReachable
    };
  }

  // Track by symptom
  for (const symptomId of missing) {
    if (!gapBySymptom[symptomId]) gapBySymptom[symptomId] = {
      name: symptomNames[symptomId],
      current: symptomToDiseases[symptomId] ? symptomToDiseases[symptomId].size : 0,
      shouldAdd: []
    };
    gapBySymptom[symptomId].shouldAdd.push(diseaseId);
  }
}

// Sort unmapped keywords by count
const sortedUnmapped = Object.entries(unmappedKeywords)
  .sort((a, b) => b[1].count - a[1].count);

// ==========================================
// Output
// ==========================================

const report = {
  summary: {
    totalDiseases: Object.keys(DISEASE_INFO).length,
    reachable: reachableCount,
    unreachable: unreachableCount,
    diseasesWithGaps: Object.keys(gapByDisease).length,
    symptomsWithGaps: Object.keys(gapBySymptom).length,
    totalMissingLinks: Object.values(gapBySymptom).reduce((s, g) => s + g.shouldAdd.length, 0)
  },
  bySymptom: gapBySymptom,
  unmappedKeywords: Object.fromEntries(sortedUnmapped.slice(0, 50))
};

fs.writeFileSync('gap-report.json', JSON.stringify(report, null, 2), 'utf8');

// Console output
console.log('=== SYMPTOM LINKAGE AUDIT ===');
console.log('Total diseases:', report.summary.totalDiseases);
console.log('Currently reachable via symptoms:', report.summary.reachable);
console.log('Currently unreachable:', report.summary.unreachable);
console.log('Diseases with missing links:', report.summary.diseasesWithGaps);
console.log('Symptoms that need expansion:', report.summary.symptomsWithGaps);
console.log('Total missing links to add:', report.summary.totalMissingLinks);

console.log('\n=== TOP SYMPTOMS NEEDING EXPANSION ===');
const sortedSymptoms = Object.entries(gapBySymptom)
  .sort((a, b) => b[1].shouldAdd.length - a[1].shouldAdd.length);
sortedSymptoms.forEach(([id, data]) => {
  console.log('  ' + id + ' (' + (data.name || '?') + '): +' + data.shouldAdd.length + ' diseases (current: ' + data.current + ')');
});

console.log('\n=== TOP 30 UNMAPPED KEYWORDS (need new symptoms or mapping) ===');
sortedUnmapped.slice(0, 30).forEach(([kw, data]) => {
  console.log('  "' + kw + '": ' + data.count + ' diseases (e.g. ' + data.diseases.slice(0, 3).join(', ') + ')');
});

console.log('\n=== UNREACHABLE DISEASES (first 30) ===');
const unreachable = Object.entries(gapByDisease)
  .filter(([, g]) => !g.reachable)
  .sort((a, b) => a[0].localeCompare(b[0]));
unreachable.slice(0, 30).forEach(([id, g]) => {
  console.log('  ' + id + ' (' + g.zh + ') — expected: [' + g.expected.join(', ') + ']');
});
console.log('  ... total unreachable:', unreachable.length);

console.log('\nWrote gap-report.json');

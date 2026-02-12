const fs = require('fs');
const data = JSON.parse(fs.readFileSync('batch-algo-4b.json', 'utf8'));
const keys = Object.keys(data);
console.log('Total diseases:', keys.length);

let errors = [];
keys.forEach(k => {
  const algo = data[k].diagnosticAlgorithm;
  if (!algo) { errors.push(k + ' missing diagnosticAlgorithm'); return; }
  if (!algo.title) errors.push(k + ' missing title');
  if (!algo.steps || !Array.isArray(algo.steps)) { errors.push(k + ' missing steps'); return; }
  if (algo.steps.length < 3 || algo.steps.length > 4) errors.push(k + ' has ' + algo.steps.length + ' steps (expected 3-4)');
  algo.steps.forEach((s, i) => {
    if (s.step !== i + 1) errors.push(k + ' step numbering wrong at index ' + i);
    if (!s.action) errors.push(k + ' step ' + s.step + ' missing action');
    if (!s.details) errors.push(k + ' step ' + s.step + ' missing details');
    if (!s.findings || s.findings.length < 2 || s.findings.length > 3) {
      errors.push(k + ' step ' + s.step + ' has ' + (s.findings ? s.findings.length : 0) + ' findings (expected 2-3)');
    }
  });
});

if (errors.length > 0) {
  console.log('ERRORS FOUND:');
  errors.forEach(e => console.log('  - ' + e));
} else {
  console.log('ALL VALIDATION PASSED');
}

// Check against expected disease list
const expected = [
  "hepatozoonosis","neosporosis","leishmaniasis","salmon-poisoning-disease","plague",
  "tularemia","angiostrongylus-vasorum","dirofilaria-immitis-cat","sebaceous-adenitis",
  "eosinophilic-granuloma-complex","uveodermatologic-syndrome","dermatomyositis",
  "sterile-nodular-panniculitis","zinc-responsive-dermatosis","canine-juvenile-cellulitis",
  "acral-lick-dermatitis","vasculitis","allergic-rhinitis","pannus","iris-melanoma",
  "retrobulbar-abscess","orbital-tumor","anterior-lens-luxation","feline-eosinophilic-keratitis",
  "hordeolum-chalazion","eyelid-tumor","neonatal-isoerythrolysis","fading-puppy-kitten-syndrome",
  "swimmer-puppy-syndrome","tooth-root-abscess","esophageal-stricture","gastroesophageal-reflux",
  "megacolon-feline","atrial-fibrillation","supraventricular-tachycardia","ventricular-tachycardia",
  "third-degree-av-block","constrictive-pericarditis","polycythemia-vera","multiple-myeloma",
  "cutaneous-lymphoma","thymoma","chondrosarcoma","peripheral-nerve-sheath-tumor",
  "hyperviscosity-syndrome","amyloidosis","feline-hyperesthesia-syndrome","cerebellar-hypoplasia",
  "canine-chronic-bronchitis","eosinophilic-bronchopneumopathy","pulmonary-fibrosis",
  "diaphragmatic-hernia-traumatic","fanconi-syndrome","hypernatremia","hyponatremia",
  "hypermagnesemia","hypomagnesemia","hypervitaminosis-d","narcolepsy-cataplexy",
  "lung-lobe-torsion","bile-peritonitis","hepatic-abscess","myocardial-contusion",
  "pemphigus-vulgaris","bullous-pemphigoid","oral-fibrosarcoma","nasal-adenocarcinoma",
  "lymphangiectasia","exocrine-pancreatic-neoplasia","tracheal-foreign-body"
];

const missing = expected.filter(id => !keys.includes(id));
const extra = keys.filter(id => !expected.includes(id));

if (missing.length > 0) console.log('MISSING:', missing);
if (extra.length > 0) console.log('EXTRA:', extra);
if (missing.length === 0 && extra.length === 0) console.log('All 70 diseases match expected list');

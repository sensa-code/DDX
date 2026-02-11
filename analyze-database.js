const fs = require('fs');
const html = fs.readFileSync('vet-differential-diagnosis-v2.html', 'utf8');

// === 1. Count unique disease IDs ===
const diseaseIds = new Set();
const idRegex = /"([a-z][a-z0-9-]+)":\s*\{\s*\n\s*zh:/gm;
let m;
while (m = idRegex.exec(html)) {
    diseaseIds.add(m[1]);
}

// === 2. Extract DISEASE_INFO content for field analysis ===
const infoStart = html.indexOf('const DISEASE_INFO');
const infoEnd = html.indexOf('};', infoStart + 100);
// Find the real end by looking for the closing }; before SYNONYMS or DB
const nextConst = html.indexOf('\nconst ', infoStart + 100);

// Count fields per disease
const zhMatches = html.match(/^\s+zh:\s*"/gm) || [];
const enMatches = html.match(/^\s+en:\s*"/gm) || [];
const defMatches = html.match(/^\s+definition:\s*"/gm) || [];
const synMatches = html.match(/^\s+synonyms:\s*\[/gm) || [];
const epiMatches = html.match(/^\s+epidemiology:\s*\{/gm) || [];
const clinMatches = html.match(/^\s+clinicalPresentation:\s*\{/gm) || [];
const pathoMatches = html.match(/^\s+pathophysiology:\s*"/gm) || [];
const diagMatches = html.match(/^\s+diagnosis:\s*\{/gm) || [];
const treatMatches = html.match(/^\s+treatment:\s*\{/gm) || [];
const progMatches = html.match(/^\s+prognosis:\s*"/gm) || [];
const pearlMatches = html.match(/^\s+pearls:\s*\[/gm) || [];
const monMatches = html.match(/^\s+monitoring:\s*\[/gm) || [];
const refMatches = html.match(/^\s+reference:\s*"/gm) || [];

// === 3. Count symptoms in DB ===
const dbStart = html.indexOf('const DB');
const dbSection = html.substring(dbStart, html.indexOf('};', dbStart) + 2);
const symptomEntries = dbSection.match(/"[^"]+"\s*:\s*\[/g) || [];

// Count differentials per symptom
const diffRegex = /"([^"]+)":\s*\[([\s\S]*?)\]/g;
let totalDifferentials = 0;
let symptomCount = 0;
let symptomDetails = [];
let dm;
const dbContent = html.substring(dbStart);
const symptomsRegex = /symptoms:\s*\{([\s\S]*?)\n\s*\}/;
const sympMatch = dbContent.match(symptomsRegex);
if (sympMatch) {
    const sympContent = sympMatch[1];
    const entryRegex = /"([^"]+)":\s*\[([^\]]*)\]/g;
    while (dm = entryRegex.exec(sympContent)) {
        symptomCount++;
        const diffs = dm[2].match(/"[^"]+"/g) || [];
        totalDifferentials += diffs.length;
        symptomDetails.push({ symptom: dm[1], differentials: diffs.length });
    }
}

// === 4. Count SYNONYMS ===
const synStart = html.indexOf('const SYNONYMS');
const synSection = html.substring(synStart, html.indexOf('};', synStart) + 2);
const synonymEntries = synSection.match(/"[^"]+"\s*:\s*"/g) || [];

// === 5. Categorize diseases by system ===
const categories = {
    '腫瘤 Oncology': [],
    '心血管 Cardiovascular': [],
    '神經 Neurology': [],
    '消化 Gastrointestinal': [],
    '呼吸 Respiratory': [],
    '泌尿 Urinary': [],
    '內分泌 Endocrine': [],
    '皮膚 Dermatology': [],
    '眼科 Ophthalmology': [],
    '感染 Infectious': [],
    '血液 Hematology': [],
    '毒物 Toxicology': [],
    '骨骼肌肉 Musculoskeletal': [],
    '生殖 Reproductive': [],
    '免疫 Immunology': [],
    '牙科 Dental': [],
    '行為 Behavioral': [],
    '急診 Emergency': [],
    '肝膽 Hepatobiliary': [],
    '其他 Other': []
};

const catKeywords = {
    '腫瘤 Oncology': ['tumor', 'carcinoma', 'sarcoma', 'lymphoma', 'leukemia', 'melanoma', 'mast-cell', 'mesothelioma', 'hemangio', 'thymoma', 'plasmacytoma', 'histiocyt', 'chemodectoma', 'adenoma', 'neoplasi', 'oncol'],
    '心血管 Cardiovascular': ['cardio', 'heart', 'mitral', 'aortic', 'pulmonic', 'atrial', 'ventricular', 'patent-ductus', 'arrhythm', 'tachycardia', 'endocard', 'pericard', 'tamponade', 'thromboembol', 'hypertension', 'cor-pulmonale'],
    '神經 Neurology': ['epilep', 'vestibular', 'meningit', 'encephalit', 'myelopathy', 'neuropath', 'hydrocephalus', 'syringomyelia', 'wobbler', 'cerebell', 'tremor', 'narcolepsy', 'cognitive', 'degenerative-myelop', 'horner', 'facial-nerve', 'scottie', 'polyneuropath', 'arachnoid', 'lysosomal', 'status-epilepticus'],
    '消化 Gastrointestinal': ['gastri', 'intestin', 'colitis', 'colon', 'rectal', 'enteropathy', 'enteritis', 'pancreat', 'esophag', 'megacolon', 'intussuscept', 'volvulus', 'foreign-body', 'cecal', 'bilious', 'stromal', 'dietary', 'hemorrhagic-gastro', 'giardia', 'coccidia'],
    '呼吸 Respiratory': ['pneumo', 'trachea', 'laryngeal', 'brachycephalic', 'bronch', 'pulmonary', 'chylothorax', 'pyothorax', 'aspiration', 'rhinit', 'nasopharyngeal', 'ciliary', 'lung-lobe', 'smoke-inhalation'],
    '泌尿 Urinary': ['kidney', 'renal', 'urinary', 'ureter', 'urolith', 'pyelonephritis', 'cystitis', 'nephro', 'uroabdomen', 'glomerulo', 'fanconi', 'urethral', 'bladder-tumor', 'polycystic-kidney'],
    '內分泌 Endocrine': ['diabetes', 'thyroid', 'hypothyroid', 'hyperthyroid', 'adrenocort', 'insulinoma', 'acromegaly', 'aldosteron', 'hypoglycemi', 'hyperglycemi', 'hypersomato', 'growth-hormone', 'pheochromocytoma', 'hyperosmolar'],
    '皮膚 Dermatology': ['dermat', 'alopecia', 'pyoderma', 'seborrh', 'mange', 'flea-allergy', 'food-allergy', 'atopic', 'pemphig', 'lupus', 'acne', 'hot-spot', 'lick-dermat', 'miliary', 'calcinosis', 'vasculit', 'erythema-multi', 'necrolytic', 'intertrigo', 'acanthosis', 'follicular', 'color-dilut', 'pattern-alopecia', 'panniculit', 'skin-mass'],
    '眼科 Ophthalmology': ['glaucoma', 'cataract', 'corneal', 'conjunctivit', 'keratit', 'retinal', 'uveitis', 'uveoderma', 'cherry-eye', 'entropion', 'ectropion', 'distichia', 'lens-luxat', 'proptosis', 'pannus', 'iris-melanom', 'nuclear-sclerosis', 'eyelid', 'episclerit', 'optic-neurit', 'chorioretinit', 'endophthalmit', 'phthisis', 'anterior-uveitis', 'orbital'],
    '感染 Infectious': ['parvo', 'distemper', 'herpes', 'calici', 'corona', 'lepto', 'brucell', 'ehrlich', 'anaplasm', 'babesi', 'bartonell', 'toxoplasm', 'leishman', 'hepatozoon', 'nocard', 'actinomy', 'ringworm', 'cryptococ', 'blastomy', 'histoplasm', 'coccidioid', 'sporotrich', 'pythiosis', 'aspergill', 'botulism', 'tetanus', 'plague', 'tularemia', 'rabies', 'papillomatosis', 'mycobacter', 'leproid', 'salmon-poisoning', 'feline-infectious', 'feline-leukemia', 'feline-immunodef', 'infectious-canine', 'salmonellosis', 'campylobacter', 'hemotropic', 'yersini', 'streptococc', 'helicobacter', 'encephalitoz', 'coccidiosis', 'clostridial'],
    '血液 Hematology': ['imha', 'thrombocytop', 'disseminated', 'hemophilia', 'von-willebrand', 'anemia', 'polycythemia', 'myelodysplast', 'cold-agglutinin', 'neonatal-iso', 'pure-red-cell', 'pancytopenia', 'reactive-thromb', 'hypereosinophilic', 'hyperviscosity', 'erythrocytosis', 'heinz-body', 'methemoglobin', 'microangiopathic', 'aplastic', 'leukemia'],
    '毒物 Toxicology': ['toxicosis', 'toxicos', 'envenomation', 'electrocution', 'near-drowning', 'poisoning'],
    '骨骼肌肉 Musculoskeletal': ['hip-dysplasia', 'elbow-dysplasia', 'cruciate', 'patellar', 'osteosarcoma', 'osteochondr', 'osteoarthrit', 'luxation', 'fracture', 'intervertebral', 'panosteitis', 'hypertrophic-osteo', 'legg-calve', 'angular-limb', 'masticatory', 'polymyositis', 'swimmer-puppy', 'discospondyl', 'spinal-fracture', 'fibrocartil', 'septic-arthrit', 'osteomyelit', 'bicipital', 'fibrotic-myop', 'luxating-shoulder', 'ununited-anconeal'],
    '生殖 Reproductive': ['pyometra', 'dystocia', 'eclampsia', 'crypto', 'prostatic', 'prostatitis', 'ovarian', 'testicular', 'vaginit', 'paraphimosis', 'galacto', 'pseudopregnancy', 'metritis', 'mammary', 'penile', 'mastitis', 'vaginal-prolapse', 'agalactia', 'retained-placenta', 'subinvolution', 'uterine'],
    '免疫 Immunology': ['immune-complex', 'immune-mediated-poly', 'systemic-lupus', 'anaphylaxis', 'primary-immune', 'transfusion-reaction', 'drug-eruption', 'anaphylaxis-vaccine'],
    '牙科 Dental': ['periodontal', 'tooth', 'gingival', 'cleft-palate', 'retained-deciduous', 'stomatitis', 'oronasal', 'dry-socket'],
    '行為 Behavioral': ['aggression', 'pica', 'hyperactivity', 'psychogenic', 'fear-based'],
    '急診 Emergency': ['cardiopulmonary-arrest', 'heatstroke', 'hypothermia', 'shock', 'acute-abdomen', 'sepsis', 'septic-peritonitis', 'bite-wound', 'crush-injury', 'vehicular-trauma', 'high-rise', 'heat-stroke'],
    '肝膽 Hepatobiliary': ['hepat', 'cholangio', 'gallbladder', 'portosystemic', 'bile-peritonit', 'copper-storage', 'copper-assoc']
};

// Classify each disease
const classified = new Set();
for (const id of diseaseIds) {
    let found = false;
    for (const [cat, keywords] of Object.entries(catKeywords)) {
        if (keywords.some(kw => id.includes(kw))) {
            categories[cat].push(id);
            classified.add(id);
            found = true;
            break;
        }
    }
    if (!found) {
        categories['其他 Other'].push(id);
    }
}

// === OUTPUT ===
console.log('╔══════════════════════════════════════════════════════════════╗');
console.log('║      獸醫鑑別診斷系統 — 資料庫統計報告                     ║');
console.log('╚══════════════════════════════════════════════════════════════╝\n');

console.log('━━━ 一、疾病資料總覽 ━━━');
console.log(`  唯一疾病 ID 數量:     ${diseaseIds.size}`);
console.log(`  zh (中文名) 出現次數: ${zhMatches.length}`);
console.log(`  檔案大小:             ${(fs.statSync('vet-differential-diagnosis-v2.html').size / 1024 / 1024).toFixed(2)} MB`);

console.log('\n━━━ 二、疾病欄位完整度 ━━━');
console.log(`  zh (中文名):            ${zhMatches.length}`);
console.log(`  en (英文名):            ${enMatches.length}`);
console.log(`  definition (定義):      ${defMatches.length}`);
console.log(`  synonyms (同義詞):      ${synMatches.length}`);
console.log(`  epidemiology (流行病學): ${epiMatches.length}`);
console.log(`  clinicalPresentation:   ${clinMatches.length}`);
console.log(`  pathophysiology:        ${pathoMatches.length}`);
console.log(`  diagnosis (診斷):       ${diagMatches.length}`);
console.log(`  treatment (治療):       ${treatMatches.length}`);
console.log(`  prognosis (預後):       ${progMatches.length}`);
console.log(`  pearls (臨床要點):      ${pearlMatches.length}`);
console.log(`  monitoring (監測):      ${monMatches.length}`);
console.log(`  reference (參考文獻):   ${refMatches.length}`);

console.log('\n━━━ 三、症狀鑑別診斷資料庫 (DB) ━━━');
console.log(`  症狀條目數:       ${symptomCount}`);
console.log(`  鑑別診斷總連結數: ${totalDifferentials}`);
if (symptomCount > 0) {
    const avgDiff = (totalDifferentials / symptomCount).toFixed(1);
    console.log(`  平均每症狀鑑別數: ${avgDiff}`);

    // Top 10 symptoms by differential count
    symptomDetails.sort((a, b) => b.differentials - a.differentials);
    console.log('\n  Top 15 症狀 (按鑑別數量):');
    symptomDetails.slice(0, 15).forEach((s, i) => {
        console.log(`    ${(i+1).toString().padStart(2)}. ${s.symptom}: ${s.differentials} 個鑑別診斷`);
    });
}

console.log('\n━━━ 四、同義詞索引 (SYNONYMS) ━━━');
console.log(`  同義詞映射數量: ${synonymEntries.length}`);

console.log('\n━━━ 五、按系統分類統計 ━━━');
const sortedCats = Object.entries(categories)
    .filter(([_, diseases]) => diseases.length > 0)
    .sort((a, b) => b[1].length - a[1].length);

sortedCats.forEach(([cat, diseases]) => {
    console.log(`  ${cat.padEnd(30)} ${diseases.length.toString().padStart(3)} 種`);
});

console.log('\n━━━ 六、各分類疾病明細 ━━━');
sortedCats.forEach(([cat, diseases]) => {
    console.log(`\n  【${cat}】(${diseases.length} 種)`);
    diseases.sort().forEach(d => {
        console.log(`    • ${d}`);
    });
});

// Save summary JSON
const summary = {
    total_unique_diseases: diseaseIds.size,
    zh_count: zhMatches.length,
    file_size_mb: (fs.statSync('vet-differential-diagnosis-v2.html').size / 1024 / 1024).toFixed(2),
    field_completeness: {
        zh: zhMatches.length,
        en: enMatches.length,
        definition: defMatches.length,
        synonyms: synMatches.length,
        epidemiology: epiMatches.length,
        clinicalPresentation: clinMatches.length,
        pathophysiology: pathoMatches.length,
        diagnosis: diagMatches.length,
        treatment: treatMatches.length,
        prognosis: progMatches.length,
        pearls: pearlMatches.length,
        monitoring: monMatches.length,
        reference: refMatches.length
    },
    symptom_db: {
        symptom_count: symptomCount,
        total_differential_links: totalDifferentials,
        avg_differentials_per_symptom: symptomCount > 0 ? +(totalDifferentials / symptomCount).toFixed(1) : 0,
        top_symptoms: symptomDetails.slice(0, 15).map(s => ({ symptom: s.symptom, differentials: s.differentials }))
    },
    synonyms_count: synonymEntries.length,
    categories: Object.fromEntries(sortedCats.map(([cat, diseases]) => [cat, { count: diseases.length, diseases: diseases.sort() }]))
};

fs.writeFileSync('database-statistics.json', JSON.stringify(summary, null, 2), 'utf8');
console.log('\n\n✅ 完整統計已儲存至 database-statistics.json');

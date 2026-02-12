// 準確分析疾病覆蓋率的腳本
const fs = require('fs');

// 讀取 HTML 文件
const html = fs.readFileSync('vet-differential-diagnosis-v2.html', 'utf8');

// 提取 DISEASE_INFO 區塊
const startMarker = 'const DISEASE_INFO = {';
const endMarker = '\n};';
const startIndex = html.indexOf(startMarker);
const endIndex = html.indexOf(endMarker, startIndex);

if (startIndex === -1) {
    console.error('無法找到 DISEASE_INFO');
    process.exit(1);
}

const diseaseInfoStr = html.substring(startIndex + startMarker.length, endIndex);

// 找出真正的疾病 key (頂層 key，有 "zh" 屬性的物件)
const diseases = [];
const diseaseRegex = /"([a-z][a-z0-9-]+)":\s*\{\s*"zh":\s*"([^"]+)",\s*"en":\s*"([^"]+)"/g;
let match;

while ((match = diseaseRegex.exec(diseaseInfoStr)) !== null) {
    diseases.push({
        key: match[1],
        zh: match[2],
        en: match[3]
    });
}

console.log('=== 疾病統計 ===');
console.log('有詳細介紹的疾病總數:', diseases.length);

// 輸出所有疾病列表
console.log('\n=== 疾病清單 ===');
diseases.forEach((d, i) => {
    console.log(`${i+1}. ${d.key} - ${d.zh} (${d.en})`);
});

// 分類統計
const categories = {
    'cardiovascular': { name: '心血管系統', keywords: ['heart', 'cardiac', 'cardio', 'arrhythmia', 'valve', 'endocarditis', 'myocarditis', 'pericardi', 'vascular', 'thromboembol', 'hypertension', 'stenosis'], diseases: [] },
    'respiratory': { name: '呼吸系統', keywords: ['pneumo', 'pulmon', 'respiratory', 'bronch', 'trache', 'laryn', 'lung', 'pleural', 'asthma', 'rhinit', 'nasal', 'thorax', 'pyothorax', 'chylothorax', 'brachycephalic'], diseases: [] },
    'gastrointestinal': { name: '消化系統', keywords: ['gastro', 'intestin', 'colon', 'esophag', 'hepat', 'liver', 'pancrea', 'bowel', 'cholang', 'megaesophagus', 'intussus', 'gastric', 'megacolon', 'rectal', 'anal', 'portosystemic', 'pyloric', 'malabsorption'], diseases: [] },
    'neurological': { name: '神經系統', keywords: ['neuro', 'brain', 'spinal', 'epilep', 'seizure', 'mening', 'encephalit', 'vestibul', 'paralys', 'myasthenia', 'polyneuro', 'polyneuropathy', 'hydrocephalus', 'syringomyelia', 'cognitive', 'horner', 'trigeminal', 'cervical-spondylo', 'atlantoaxial', 'lumbosacral', 'degenerative-myelopathy', 'fibrocartilaginous', 'intervertebral', 'wobbler'], diseases: [] },
    'dermatological': { name: '皮膚科', keywords: ['dermat', 'skin', 'pyoderma', 'alopecia', 'pruritus', 'eczema', 'ringworm', 'demodic', 'mange', 'pemphigus', 'sebaceous', 'otitis', 'onycho', 'histiocytoma', 'lipoma'], diseases: [] },
    'endocrine': { name: '內分泌系統', keywords: ['thyroid', 'adrenal', 'diabetes', 'cushing', 'addison', 'insulin', 'hormone', 'pituitary', 'hyperaldosteronism', 'pheochromocytoma', 'hypersomatotropism', 'ketoacidosis'], diseases: [] },
    'urinary': { name: '泌尿系統', keywords: ['kidney', 'renal', 'urinary', 'bladder', 'urolith', 'cystit', 'nephro', 'glomerul', 'polycystic', 'ectopic-ureter', 'urethral', 'calculi', 'hydronephrosis', 'pyelonephritis'], diseases: [] },
    'reproductive': { name: '生殖系統', keywords: ['reproduct', 'pyometra', 'prostat', 'testic', 'ovarian', 'uterine', 'mammary', 'pregnant', 'dystocia', 'cryptorchidism'], diseases: [] },
    'musculoskeletal': { name: '肌肉骨骼系統', keywords: ['orthoped', 'bone', 'joint', 'arthrit', 'ligament', 'tendon', 'osteo', 'fracture', 'luxat', 'hip-dysplasia', 'elbow-dysplasia', 'patella', 'cruciate', 'panosteitis', 'legg-calve', 'muscle', 'masticatory', 'polymyositis', 'temporomandibular'], diseases: [] },
    'ophthalmological': { name: '眼科', keywords: ['eye', 'ocular', 'ophthalm', 'glaucoma', 'cataract', 'retinal', 'conjunctiv', 'uveitis', 'cornea', 'keratoconjunctivitis', 'cherry-eye', 'lens-luxation', 'entropion', 'ectropion', 'pannus', 'hyphema', 'progressive-retinal'], diseases: [] },
    'hematological': { name: '血液系統', keywords: ['anemia', 'anaemia', 'blood', 'thrombocyt', 'leukemia', 'imha', 'imtp', 'coagul', 'hemolytic', 'polycythemia', 'von-willebrand', 'hemophilia', 'aplastic', 'myeloma', 'disseminated-intravascular'], diseases: [] },
    'infectious': { name: '傳染病', keywords: ['parvo', 'distemper', 'lepto', 'ehrlich', 'babesi', 'toxoplasm', 'giardia', 'feline-infectious', 'viral', 'bacterial', 'fungal', 'fip', 'felv', 'fiv', 'calicivirus', 'panleukopenia', 'influenza', 'lyme', 'rocky-mountain', 'brucellosis', 'cryptococcosis', 'coccidioidomycosis', 'kennel-cough', 'coccidia', 'rabies', 'rhinotracheitis', 'tick-borne', 'aspergillosis', 'anaplasmosis'], diseases: [] },
    'oncological': { name: '腫瘤科', keywords: ['tumor', 'cancer', 'carcinoma', 'sarcoma', 'lymphoma', 'melanoma', 'mast-cell', 'neoplasia', 'oncolog', 'splenic-neoplasia', 'anal-sac-adenocarcinoma', 'transitional-cell'], diseases: [] },
    'toxicological': { name: '毒理學', keywords: ['toxic', 'poison', 'intoxic', 'rodenticide', 'antifreeze', 'chocolate', 'xylitol', 'grape', 'nsaid', 'acetaminophen', 'ethylene-glycol', 'marijuana', 'permethrin', 'lily', 'organophosphate', 'envenomation'], diseases: [] },
    'immunological': { name: '免疫系統', keywords: ['immune-mediated', 'autoimmune', 'allerg', 'anaphyla', 'lupus', 'pemphigus', 'polyarthritis'], diseases: [] },
    'dental': { name: '牙科/口腔', keywords: ['dental', 'tooth', 'periodon', 'stomatit', 'gingiv', 'oral', 'malocclusion', 'eosinophilic-granuloma', 'oronasal', 'orofacial'], diseases: [] },
    'behavioral': { name: '行為學', keywords: ['behavior', 'anxiety', 'aggress', 'phobia', 'compulsive', 'cognitive-dysfunction', 'inappropriate-elimination', 'rage'], diseases: [] },
    'emergency': { name: '急診/重症', keywords: ['shock', 'crisis', 'emergency', 'trauma', 'hemorrh', 'collapse', 'heat-stroke', 'splenic-torsion', 'gastric-dilatation-volvulus'], diseases: [] },
    'ent': { name: '耳鼻喉', keywords: ['otitis', 'ear', 'aural', 'nasopharyngeal', 'ear-mites'], diseases: [] },
    'congenital': { name: '先天性疾病', keywords: ['patent-ductus', 'ventricular-septal', 'atrial-septal', 'portosystemic-shunt', 'ectopic-ureter', 'atlantoaxial', 'polycystic'], diseases: [] },
    'electrolyte': { name: '電解質/代謝', keywords: ['hypoglycemia', 'hyperglycemia', 'hypercalcemia', 'hypocalcemia', 'hypokalemia', 'hyperkalemia', 'hypoadrenocorticism', 'hyperadrenocorticism'], diseases: [] }
};

// 分類疾病
const categorized = new Set();
diseases.forEach(d => {
    const lowerKey = d.key.toLowerCase();
    const lowerZh = d.zh.toLowerCase();
    let foundCategory = false;

    for (const [catKey, cat] of Object.entries(categories)) {
        for (const keyword of cat.keywords) {
            if (lowerKey.includes(keyword) || lowerZh.includes(keyword)) {
                cat.diseases.push(d);
                categorized.add(d.key);
                foundCategory = true;
                break;
            }
        }
        if (foundCategory) break;
    }
});

// 未分類的疾病
const uncategorized = diseases.filter(d => !categorized.has(d.key));

console.log('\n=== 分類統計 ===');
let totalCategorized = 0;
Object.entries(categories).forEach(([key, cat]) => {
    if (cat.diseases.length > 0) {
        console.log(`${cat.name} (${key}): ${cat.diseases.length} 個`);
        totalCategorized += cat.diseases.length;
    }
});
console.log(`\n已分類: ${totalCategorized} 個`);
console.log(`未分類: ${uncategorized.length} 個`);

// 列出未分類的疾病
if (uncategorized.length > 0) {
    console.log('\n=== 未分類疾病 ===');
    uncategorized.forEach(d => {
        console.log(`  - ${d.key}: ${d.zh}`);
    });
}

// 找出需要擴增的類別
console.log('\n=== 需要擴增的類別（少於15個疾病）===');
Object.entries(categories)
    .filter(([key, cat]) => cat.diseases.length > 0 && cat.diseases.length < 15)
    .sort((a, b) => a[1].diseases.length - b[1].diseases.length)
    .forEach(([key, cat]) => {
        console.log(`${cat.name}: ${cat.diseases.length} 個`);
        cat.diseases.forEach(d => console.log(`    - ${d.zh} (${d.en})`));
    });

// 輸出結果到 JSON
const result = {
    totalDiseases: diseases.length,
    categorizedCount: totalCategorized,
    uncategorizedCount: uncategorized.length,
    categories: {},
    uncategorized: uncategorized
};

Object.entries(categories).forEach(([key, cat]) => {
    if (cat.diseases.length > 0) {
        result.categories[key] = {
            name: cat.name,
            count: cat.diseases.length,
            diseases: cat.diseases
        };
    }
});

fs.writeFileSync('coverage-analysis.json', JSON.stringify(result, null, 2), 'utf8');
console.log('\n已將詳細分析寫入 coverage-analysis.json');

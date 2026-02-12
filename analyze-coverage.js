// 分析疾病覆蓋率的腳本
const fs = require('fs');

// 讀取 HTML 文件
const html = fs.readFileSync('vet-differential-diagnosis-v2.html', 'utf8');

// 提取 DISEASE_INFO
const diseaseInfoMatch = html.match(/const DISEASE_INFO = \{([\s\S]*?)\n\};/);
if (!diseaseInfoMatch) {
    console.error('無法找到 DISEASE_INFO');
    process.exit(1);
}

// 使用正則表達式找出所有疾病 key
const diseaseKeys = [];
const keyRegex = /^\s*"([a-z][a-z0-9-]*)"\s*:\s*\{/gm;
let match;
const fullDiseaseInfo = 'const DISEASE_INFO = {' + diseaseInfoMatch[1] + '\n};';

while ((match = keyRegex.exec(fullDiseaseInfo)) !== null) {
    diseaseKeys.push(match[1]);
}

console.log('=== DISEASE_INFO 統計 ===');
console.log('總疾病數:', diseaseKeys.length);

// 分類統計
const categories = {
    cardiovascular: [],
    respiratory: [],
    gastrointestinal: [],
    neurological: [],
    dermatological: [],
    endocrine: [],
    urinary: [],
    reproductive: [],
    musculoskeletal: [],
    ophthalmological: [],
    hematological: [],
    infectious: [],
    oncological: [],
    toxicological: [],
    immunological: [],
    dental: [],
    behavioral: [],
    emergency: [],
    other: []
};

// 根據疾病名稱關鍵字分類
diseaseKeys.forEach(key => {
    const lowerKey = key.toLowerCase();
    if (lowerKey.includes('heart') || lowerKey.includes('cardiac') || lowerKey.includes('cardio') ||
        lowerKey.includes('arrhythmia') || lowerKey.includes('valve') || lowerKey.includes('endocarditis') ||
        lowerKey.includes('myocarditis') || lowerKey.includes('pericardi')) {
        categories.cardiovascular.push(key);
    } else if (lowerKey.includes('pneumo') || lowerKey.includes('pulmon') || lowerKey.includes('respiratory') ||
               lowerKey.includes('bronch') || lowerKey.includes('trache') || lowerKey.includes('laryn') ||
               lowerKey.includes('lung') || lowerKey.includes('pleural') || lowerKey.includes('asthma')) {
        categories.respiratory.push(key);
    } else if (lowerKey.includes('gastro') || lowerKey.includes('intestin') || lowerKey.includes('colon') ||
               lowerKey.includes('esophag') || lowerKey.includes('hepat') || lowerKey.includes('liver') ||
               lowerKey.includes('pancrea') || lowerKey.includes('bowel') || lowerKey.includes('cholang') ||
               lowerKey.includes('megaesophagus') || lowerKey.includes('intussus') || lowerKey.includes('gastric')) {
        categories.gastrointestinal.push(key);
    } else if (lowerKey.includes('neuro') || lowerKey.includes('brain') || lowerKey.includes('spinal') ||
               lowerKey.includes('epilep') || lowerKey.includes('seizure') || lowerKey.includes('mening') ||
               lowerKey.includes('encephalit') || lowerKey.includes('vestibul') || lowerKey.includes('paralys') ||
               lowerKey.includes('myasthenia') || lowerKey.includes('polyneuro')) {
        categories.neurological.push(key);
    } else if (lowerKey.includes('dermat') || lowerKey.includes('skin') || lowerKey.includes('pyoderma') ||
               lowerKey.includes('alopecia') || lowerKey.includes('pruritus') || lowerKey.includes('eczema') ||
               lowerKey.includes('ringworm') || lowerKey.includes('demodic')) {
        categories.dermatological.push(key);
    } else if (lowerKey.includes('thyroid') || lowerKey.includes('adrenal') || lowerKey.includes('diabetes') ||
               lowerKey.includes('cushing') || lowerKey.includes('addison') || lowerKey.includes('insulin') ||
               lowerKey.includes('hormone') || lowerKey.includes('pituitary')) {
        categories.endocrine.push(key);
    } else if (lowerKey.includes('kidney') || lowerKey.includes('renal') || lowerKey.includes('urinary') ||
               lowerKey.includes('bladder') || lowerKey.includes('urolith') || lowerKey.includes('cystit') ||
               lowerKey.includes('nephro') || lowerKey.includes('glomerul')) {
        categories.urinary.push(key);
    } else if (lowerKey.includes('reproduct') || lowerKey.includes('pyometra') || lowerKey.includes('prostat') ||
               lowerKey.includes('testic') || lowerKey.includes('ovarian') || lowerKey.includes('uterine') ||
               lowerKey.includes('mammary') || lowerKey.includes('pregnant') || lowerKey.includes('dystocia')) {
        categories.reproductive.push(key);
    } else if (lowerKey.includes('orthoped') || lowerKey.includes('bone') || lowerKey.includes('joint') ||
               lowerKey.includes('arthrit') || lowerKey.includes('ligament') || lowerKey.includes('tendon') ||
               lowerKey.includes('osteo') || lowerKey.includes('fracture') || lowerKey.includes('luxat') ||
               lowerKey.includes('hip') || lowerKey.includes('elbow') || lowerKey.includes('patella')) {
        categories.musculoskeletal.push(key);
    } else if (lowerKey.includes('eye') || lowerKey.includes('ocular') || lowerKey.includes('ophthalm') ||
               lowerKey.includes('glaucoma') || lowerKey.includes('cataract') || lowerKey.includes('retinal') ||
               lowerKey.includes('conjunctiv') || lowerKey.includes('uveitis') || lowerKey.includes('cornea')) {
        categories.ophthalmological.push(key);
    } else if (lowerKey.includes('anemia') || lowerKey.includes('anaemia') || lowerKey.includes('blood') ||
               lowerKey.includes('thrombocyt') || lowerKey.includes('leukemia') || lowerKey.includes('imha') ||
               lowerKey.includes('imtp') || lowerKey.includes('coagul') || lowerKey.includes('hemolytic')) {
        categories.hematological.push(key);
    } else if (lowerKey.includes('parvo') || lowerKey.includes('distemper') || lowerKey.includes('lepto') ||
               lowerKey.includes('ehrlich') || lowerKey.includes('babesi') || lowerKey.includes('toxoplasm') ||
               lowerKey.includes('giardia') || lowerKey.includes('feline-infectious') || lowerKey.includes('viral') ||
               lowerKey.includes('bacterial') || lowerKey.includes('fungal') || lowerKey.includes('fip') ||
               lowerKey.includes('felv') || lowerKey.includes('fiv')) {
        categories.infectious.push(key);
    } else if (lowerKey.includes('tumor') || lowerKey.includes('cancer') || lowerKey.includes('carcinoma') ||
               lowerKey.includes('sarcoma') || lowerKey.includes('lymphoma') || lowerKey.includes('melanoma') ||
               lowerKey.includes('mast-cell') || lowerKey.includes('neoplasia') || lowerKey.includes('oncolog')) {
        categories.oncological.push(key);
    } else if (lowerKey.includes('toxic') || lowerKey.includes('poison') || lowerKey.includes('intoxic') ||
               lowerKey.includes('rodenticide') || lowerKey.includes('antifreeze') || lowerKey.includes('chocolate')) {
        categories.toxicological.push(key);
    } else if (lowerKey.includes('immune') || lowerKey.includes('autoimmune') || lowerKey.includes('allerg') ||
               lowerKey.includes('anaphyla') || lowerKey.includes('lupus')) {
        categories.immunological.push(key);
    } else if (lowerKey.includes('dental') || lowerKey.includes('tooth') || lowerKey.includes('periodon') ||
               lowerKey.includes('stomatit') || lowerKey.includes('gingiv') || lowerKey.includes('oral')) {
        categories.dental.push(key);
    } else if (lowerKey.includes('behavior') || lowerKey.includes('anxiety') || lowerKey.includes('aggress') ||
               lowerKey.includes('phobia') || lowerKey.includes('compulsive')) {
        categories.behavioral.push(key);
    } else if (lowerKey.includes('shock') || lowerKey.includes('crisis') || lowerKey.includes('emergency') ||
               lowerKey.includes('trauma') || lowerKey.includes('hemorrh') || lowerKey.includes('collapse')) {
        categories.emergency.push(key);
    } else {
        categories.other.push(key);
    }
});

console.log('\n=== 分類統計 ===');
Object.keys(categories).forEach(cat => {
    if (categories[cat].length > 0) {
        console.log(`${cat}: ${categories[cat].length} 個疾病`);
    }
});

// 列出每個類別的疾病
console.log('\n=== 詳細清單 ===');
Object.keys(categories).forEach(cat => {
    if (categories[cat].length > 0) {
        console.log(`\n【${cat}】(${categories[cat].length}個):`);
        categories[cat].forEach(d => console.log(`  - ${d}`));
    }
});

// 找出需要擴增的類別（數量較少的）
console.log('\n=== 需要擴增的類別（少於10個疾病）===');
Object.keys(categories).forEach(cat => {
    if (categories[cat].length > 0 && categories[cat].length < 10) {
        console.log(`${cat}: 只有 ${categories[cat].length} 個，建議擴增`);
    }
});

// 輸出所有疾病 key 到文件
fs.writeFileSync('disease-keys.txt', diseaseKeys.join('\n'), 'utf8');
console.log('\n已將所有疾病 key 寫入 disease-keys.txt');

// 輸出 JSON 格式的分類結果
fs.writeFileSync('disease-categories.json', JSON.stringify(categories, null, 2), 'utf8');
console.log('已將分類結果寫入 disease-categories.json');

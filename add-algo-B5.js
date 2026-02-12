// add-algo-B5.js — Add diagnosticAlgorithm to 12 diseases (batch B-5)
const fs = require('fs');

const htmlFile = 'vet-differential-diagnosis-v2.html';
let html = fs.readFileSync(htmlFile, 'utf8');

const algorithms = {
  "hip dysplasia": {
    title: "髖關節發育不良 診斷流程",
    steps: [
      { step: 1, action: "臨床懷疑", details: "大型犬後肢跛行+活動度下降", findings: ["兔跳式步態（幼犬）", "起立困難+運動後跛行加重"] },
      { step: 2, action: "骨科檢查", details: "Ortolani test+後肢伸展痛", findings: ["Ortolani test陽性（關節鬆弛）", "後肢伸展觸發疼痛"] },
      { step: 3, action: "X光分級", details: "VD骨盆X光+OFA/PennHIP", findings: ["OFA分級：Excellent→Severe", "PennHIP DI值（鬆弛度指數）"] },
      { step: 4, action: "治療決策", details: "依年齡和嚴重度選擇", findings: ["幼犬：JPS/DPO/TPO", "成犬：FHO/THR+體重管理"] }
    ]
  },
  "patellar luxation": {
    title: "膝蓋骨脫位 診斷流程",
    steps: [
      { step: 1, action: "跛行評估", details: "間歇性後肢跛行（跳步）", findings: ["突然抬腳數步後恢復", "小型犬多為內側脫位"] },
      { step: 2, action: "觸診分級", details: "膝蓋骨脫位分級（Grade I-IV）", findings: ["Grade I：可誘發脫位但自行復位", "Grade IV：永久脫位無法復位"] },
      { step: 3, action: "X光", details: "膝關節X光+評估骨骼排列", findings: ["股骨溝深度", "脛骨嵴偏移程度"] },
      { step: 4, action: "治療決策", details: "依分級選擇保守或手術", findings: ["Grade I-II無症狀：保守管理", "Grade III-IV或持續跛行：手術矯正"] }
    ]
  },
  "atopic dermatitis": {
    title: "異位性皮膚炎 診斷流程",
    steps: [
      { step: 1, action: "臨床模式", details: "搔癢+典型分布（面、耳、足、腋窩）", findings: ["1-3歲發病", "季節性或全年性搔癢"] },
      { step: 2, action: "排除其他原因", details: "糞檢+皮膚刮片+飲食試驗", findings: ["排除體外寄生蟲（Sarcoptes等）", "嚴格食物排除試驗8-12週"] },
      { step: 3, action: "過敏原檢測", details: "皮內試驗(IDT)或血清IgE", findings: ["IDT為金標準（麻醉下進行）", "血清IgE幫助設計免疫療法"] },
      { step: 4, action: "多模式治療", details: "避免過敏原+免疫調節+症狀控制", findings: ["Oclacitinib/Lokivetmab快速控制", "過敏原特異性免疫療法（長期）"] }
    ]
  },
  "food allergy": {
    title: "食物過敏 診斷流程",
    steps: [
      { step: 1, action: "臨床懷疑", details: "非季節性搔癢+/-GI症狀", findings: ["面部、耳、足部搔癢", "同時有嘔吐/軟便（10-30%）"] },
      { step: 2, action: "排除試驗", details: "嚴格新型蛋白/水解蛋白飲食", findings: ["8-12週嚴格排除試驗", "期間不給任何其他食物/零食"] },
      { step: 3, action: "激發試驗", details: "逐一重新引入原食物成分", findings: ["每種蛋白引入1-2週", "症狀復發確認過敏原"] },
      { step: 4, action: "長期飲食管理", details: "避免已確認的過敏原蛋白", findings: ["終生避免致敏蛋白", "定期評估是否發展新過敏"] }
    ]
  },
  "flea allergy dermatitis": {
    title: "跳蚤過敏性皮膚炎 診斷流程",
    steps: [
      { step: 1, action: "臨床模式", details: "腰薦部三角區搔癢+脫毛", findings: ["尾根部、後腿內側搔癢最嚴重", "犬：背側分布、貓：粟粒性皮膚炎"] },
      { step: 2, action: "跳蚤證據", details: "梳毛+跳蚤糞便檢查", findings: ["跳蚤排泄物（黑色顆粒+水變紅）", "可能看不到成蟲（過敏犬咬除）"] },
      { step: 3, action: "排除共病", details: "排除Sarcoptes+食物過敏", findings: ["皮膚刮片排除疥蟎", "可能與atopy並存"] },
      { step: 4, action: "嚴格除蚤", details: "所有同居寵物+環境除蚤", findings: ["Isoxazoline類口服除蚤藥（快速殺蚤）", "環境處理+持續預防至少3個月"] }
    ]
  },
  "otitis externa": {
    title: "外耳炎 診斷流程",
    steps: [
      { step: 1, action: "耳鏡檢查", details: "評估耳道和鼓膜", findings: ["耳道紅腫+分泌物", "鼓膜完整性（穿孔需注意用藥）"] },
      { step: 2, action: "耳分泌物檢查", details: "細胞學染色", findings: ["球菌/桿菌感染", "Malassezia酵母菌感染"] },
      { step: 3, action: "原因分析", details: "區分原發/促發/維持因子", findings: ["原發：過敏（最常見）、異物", "維持：中耳炎、耳道增生"] },
      { step: 4, action: "治療", details: "清潔+局部+全身+治療原發病", findings: ["清潔耳道+局部抗菌/抗黴", "慢性：排除過敏並長期管理"] }
    ]
  },
  "keratoconjunctivitis sicca": {
    title: "乾眼症 診斷流程",
    steps: [
      { step: 1, action: "臨床懷疑", details: "黏液膿性眼分泌物+角膜病變", findings: ["反覆結膜炎不回應抗生素", "黏稠分泌物+角膜混濁/色素沉著"] },
      { step: 2, action: "Schirmer test", details: "Schirmer淚液試驗I", findings: ["犬：<15 mm/min=低、<10 mm/min=KCS", "貓：<5 mm/min（較少見）"] },
      { step: 3, action: "眼表評估", details: "Fluorescein染色+Rose Bengal", findings: ["角膜潰瘍（Fluorescein陽性）", "角膜新生血管/色素沉著"] },
      { step: 4, action: "免疫調節治療", details: "Cyclosporine/Tacrolimus眼藥", findings: ["Cyclosporine 0.2% q12h長期使用", "人工淚液作為輔助（非替代）"] }
    ]
  },
  "tracheal collapse": {
    title: "氣管塌陷 診斷流程",
    steps: [
      { step: 1, action: "臨床懷疑", details: "小型犬鵝鳴樣咳嗽", findings: ["興奮/運動/牽繩時加重", "肥胖中老年小型犬多見"] },
      { step: 2, action: "X光", details: "吸氣+呼氣X光", findings: ["吸氣：頸段氣管塌陷", "呼氣：胸段氣管塌陷"] },
      { step: 3, action: "透視/內視鏡", details: "動態評估塌陷程度", findings: ["透視：即時觀察塌陷動態", "支氣管鏡：分級I-IV+取樣"] },
      { step: 4, action: "治療", details: "醫療管理或支架置放", findings: ["減重+鎮咳+避免刺激", "Grade III-IV+藥物無效→氣管內支架"] }
    ]
  },
  "brachycephalic airway syndrome": {
    title: "短頭犬呼吸道症候群 診斷流程",
    steps: [
      { step: 1, action: "品種辨識", details: "短頭犬/貓呼吸困難+打鼾", findings: ["運動不耐+打鼾+喘鳴音", "Pug, Bulldog, Persian等品種"] },
      { step: 2, action: "解剖評估", details: "鼻孔+軟顎+喉部檢查", findings: ["鼻孔狹窄（外觀即可判斷）", "軟顎過長需麻醉下評估"] },
      { step: 3, action: "進階評估", details: "CT/內視鏡評估呼吸道", findings: ["喉囊外翻（繼發性變化）", "氣管發育不全（Bulldog）"] },
      { step: 4, action: "手術矯正", details: "多部位矯正手術", findings: ["鼻孔擴張+軟顎截短", "早期手術(1-2歲)預後較好"] }
    ]
  },
  "laryngeal paralysis": {
    title: "喉麻痺 診斷流程",
    steps: [
      { step: 1, action: "臨床懷疑", details: "老年大型犬聲音改變+吸氣困難", findings: ["吠叫聲音變弱/嘶啞", "吸氣喘鳴音+運動不耐"] },
      { step: 2, action: "喉鏡檢查", details: "輕度鎮靜下評估杓狀軟骨運動", findings: ["杓狀軟骨吸氣時不外展", "單側或雙側麻痺"] },
      { step: 3, action: "併發症評估", details: "甲狀腺+肌電圖+神經檢查", findings: ["排除甲狀腺低下", "GOLPP：四肢也有神經症狀"] },
      { step: 4, action: "手術", details: "杓狀軟骨側化（tie-back）", findings: ["單側杓狀軟骨側化術", "術後注意吸入性肺炎風險"] }
    ]
  },
  "chronic bronchitis": {
    title: "慢性支氣管炎 診斷流程",
    steps: [
      { step: 1, action: "臨床定義", details: "咳嗽>2個月+排除其他原因", findings: ["每日咳嗽+痰多", "中老年小型犬多見"] },
      { step: 2, action: "胸部X光", details: "支氣管壁增厚+肺過度充氣", findings: ["支氣管壁增厚（甜甜圈/鐵軌徵）", "肺過度充氣+支氣管擴張"] },
      { step: 3, action: "BAL分析", details: "支氣管肺泡灌洗液細胞學+培養", findings: ["嗜中性球或嗜酸性球增多", "排除感染（培養+藥敏）"] },
      { step: 4, action: "長期管理", details: "抗發炎+支氣管擴張+環境控制", findings: ["Prednisolone吸入劑or口服", "Theophylline/Terbutaline支氣管擴張"] }
    ]
  },
  "feline asthma": {
    title: "貓哮喘 診斷流程",
    steps: [
      { step: 1, action: "臨床懷疑", details: "貓反覆咳嗽+呼吸困難", findings: ["蹲坐+伸頸+張口呼吸", "呼氣延長+喘鳴音"] },
      { step: 2, action: "胸部X光", details: "支氣管pattern+肺過度充氣", findings: ["支氣管壁增厚", "嚴重時肺葉塌陷（右中肺葉）"] },
      { step: 3, action: "BAL", details: "支氣管肺泡灌洗液分析", findings: ["嗜酸性球>17%支持診斷", "排除心絲蟲和肺蠕蟲"] },
      { step: 4, action: "治療", details: "吸入型類固醇+支氣管擴張", findings: ["Fluticasone MDI+AeroKat spacer", "急性：Terbutaline 0.01 mg/kg SC"] }
    ]
  }
};

let count = 0;
for (const [diseaseId, algo] of Object.entries(algorithms)) {
  const searchStr = `"${diseaseId}":`;
  const startIdx = html.indexOf(searchStr);
  if (startIdx === -1) { console.error(`Disease "${diseaseId}" not found!`); continue; }

  const braceStart = html.indexOf('{', startIdx);
  let braceCount = 0, endIdx = braceStart;
  for (let i = braceStart; i < html.length; i++) {
    if (html[i] === '{') braceCount++;
    else if (html[i] === '}') { braceCount--; if (braceCount === 0) { endIdx = i + 1; break; } }
  }
  const block = html.substring(braceStart, endIdx);

  const monitoringOffset = block.indexOf('monitoring:');
  if (monitoringOffset === -1) { console.error(`No monitoring field in "${diseaseId}"!`); continue; }

  const insertPos = braceStart + monitoringOffset;

  const stepsStr = algo.steps.map(s => {
    const findingsArr = s.findings.map(f => `"${f.replace(/"/g, '\\"')}"`).join(', ');
    return `        { step: ${s.step}, action: "${s.action}", details: "${s.details.replace(/"/g, '\\"')}", findings: [${findingsArr}] }`;
  }).join(',\n');

  const algoStr = `diagnosticAlgorithm: {\n      title: "${algo.title}",\n      steps: [\n${stepsStr}\n      ]\n    },\n    `;

  html = html.substring(0, insertPos) + algoStr + html.substring(insertPos);
  count++;
  console.log(`✓ Added diagnosticAlgorithm to ${diseaseId}`);
}

fs.writeFileSync(htmlFile, html, 'utf8');
console.log(`\n=== Added ${count}/${Object.keys(algorithms).length} algorithms ===`);

const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
try { new Function(scriptMatch[1]); console.log('✓ JavaScript syntax valid'); }
catch (e) { console.error('✗ Syntax ERROR:', e.message); }

const algoCount = (html.match(/diagnosticAlgorithm:\s*\{/g) || []).length;
console.log(`diagnosticAlgorithm count: ${algoCount}/612`);

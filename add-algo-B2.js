// add-algo-B2.js — Add diagnosticAlgorithm to 13 diseases (batch B-2)
const fs = require('fs');

const htmlFile = 'vet-differential-diagnosis-v2.html';
let html = fs.readFileSync(htmlFile, 'utf8');

const algorithms = {
  "rodenticide toxicosis": {
    title: "抗凝血鼠藥中毒 診斷流程",
    steps: [
      { step: 1, action: "暴露史與出血", details: "確認鼠藥接觸史+出血傾向", findings: ["攝入抗凝血鼠藥史", "瘀青、血尿、呼吸困難"] },
      { step: 2, action: "凝血功能", details: "PT/aPTT/ACT檢查", findings: ["PT顯著延長（最早24-48小時）", "aPTT也延長"] },
      { step: 3, action: "PIVKA檢測", details: "維生素K拮抗蛋白檢測", findings: ["PIVKA陽性確認抗凝血效應", "凝血因子II, VII, IX, X下降"] },
      { step: 4, action: "維生素K1治療", details: "Vitamin K1 2.5-5 mg/kg PO分次給予", findings: ["PT 48小時後複檢應正常化", "需持續治療4-6週"] }
    ]
  },
  "chocolate toxicosis": {
    title: "巧克力中毒 診斷流程",
    steps: [
      { step: 1, action: "暴露評估", details: "確認巧克力種類和攝入量", findings: ["計算甲基黃嘌呤總劑量（mg/kg）", "黑巧克力>烘焙巧克力>牛奶巧克力"] },
      { step: 2, action: "臨床分級", details: "依劑量預測毒性等級", findings: ["可可鹼>20 mg/kg：GI症狀", ">40 mg/kg：心臟毒性風險"] },
      { step: 3, action: "監測", details: "心電圖+血壓+神經監測", findings: ["竇性心搏過速/室性心律不整", "躁動、震顫、癲癇"] },
      { step: 4, action: "去汙+支持治療", details: "催吐+活性碳+輸液支持", findings: ["攝入2小時內催吐效果最佳", "活性碳 1-2 g/kg PO"] }
    ]
  },
  "xylitol toxicosis": {
    title: "木糖醇中毒 診斷流程",
    steps: [
      { step: 1, action: "暴露確認", details: "確認木糖醇攝入量和時間", findings: [">0.1 g/kg：低血糖風險", ">0.5 g/kg：肝衰竭風險"] },
      { step: 2, action: "血糖監測", details: "每30分鐘監測血糖", findings: ["低血糖可在攝入後10-60分鐘出現", "血糖<60 mg/dL需緊急處理"] },
      { step: 3, action: "肝功能", details: "12-24小時後追蹤肝指數", findings: ["ALT/AST急性升高", "PT延長提示肝衰竭"] },
      { step: 4, action: "積極支持", details: "Dextrose CRI+肝保護", findings: ["Dextrose 2.5-5% CRI維持血糖", "監測72小時肝功能變化"] }
    ]
  },
  "nsaid toxicosis": {
    title: "NSAID中毒 診斷流程",
    steps: [
      { step: 1, action: "暴露評估", details: "確認NSAID種類、劑量和時間", findings: ["Ibuprofen犬毒性劑量>50 mg/kg", "貓對所有NSAID極度敏感"] },
      { step: 2, action: "腎功能+電解質", details: "BUN/Crea/電解質監測", findings: ["肌酸酐升高提示腎損傷", "高血鉀需監測"] },
      { step: 3, action: "GI評估", details: "糞便潛血+腹部觸診", findings: ["黑便或血便", "腹部疼痛/壓痛"] },
      { step: 4, action: "去汙+GI保護", details: "催吐+活性碳+GI保護劑", findings: ["Sucralfate+Omeprazole", "靜脈輸液維持腎灌流"] }
    ]
  },
  "acetaminophen toxicosis": {
    title: "對乙醯氨基酚中毒 診斷流程",
    steps: [
      { step: 1, action: "暴露確認", details: "確認攝入劑量（貓極低毒性閾值）", findings: ["貓：>10 mg/kg即有毒性", "犬：>150 mg/kg"] },
      { step: 2, action: "血液學", details: "CBC+MetHb+Heinz body", findings: ["變性血紅素血症（MetHb升高）", "Heinz body出現"] },
      { step: 3, action: "肝功能", details: "肝酵素+膽紅素追蹤", findings: ["犬：肝毒性為主（ALT升高）", "貓：氧化損傷為主（發紺）"] },
      { step: 4, action: "NAC解毒", details: "N-acetylcysteine 140 mg/kg IV loading", findings: ["維持劑量 70 mg/kg q6h × 7次", "SAMe作為輔助肝保護"] }
    ]
  },
  "grape raisin toxicosis": {
    title: "葡萄/葡萄乾中毒 診斷流程",
    steps: [
      { step: 1, action: "暴露確認", details: "確認攝入葡萄/葡萄乾量", findings: ["葡萄乾毒性高於葡萄", "目前無安全劑量（個體差異大）"] },
      { step: 2, action: "腎功能基線", details: "BUN/Crea/SDMA+尿液分析", findings: ["攝入後24-72小時腎指數升高", "尿液比重下降/蛋白尿"] },
      { step: 3, action: "去汙", details: "催吐+活性碳（攝入6小時內）", findings: ["催吐後確認嘔出葡萄殘渣", "活性碳可減少吸收"] },
      { step: 4, action: "積極輸液", details: "48-72小時靜脈輸液保護腎臟", findings: ["維持尿量>2 mL/kg/hr", "每12小時複檢腎功能"] }
    ]
  },
  "lily toxicosis": {
    title: "百合中毒 診斷流程",
    steps: [
      { step: 1, action: "暴露確認", details: "確認百合品種（真百合屬致命）", findings: ["Lilium和Hemerocallis屬對貓有腎毒性", "所有部位均有毒（花粉也危險）"] },
      { step: 2, action: "腎功能監測", details: "每12小時追蹤BUN/Crea/電解質", findings: ["攝入後12-24小時開始氮質血症", "72小時內可進展至無尿性腎衰竭"] },
      { step: 3, action: "緊急去汙", details: "立即催吐+活性碳+皮膚清洗", findings: ["攝入6小時內催吐", "皮膚沾染花粉需徹底沖洗"] },
      { step: 4, action: "積極輸液", details: "48-72小時IV輸液（2-3倍維持量）", findings: ["維持良好尿量", "預後取決於治療開始時間"] }
    ]
  },
  "marijuana toxicosis": {
    title: "大麻中毒 診斷流程",
    steps: [
      { step: 1, action: "暴露史", details: "確認攝入大麻產品種類和量", findings: ["THC食用品比乾燥植物毒性高", "飼主可能不願意坦承"] },
      { step: 2, action: "臨床特徵", details: "典型神經+泌尿症狀辨識", findings: ["共濟失調+瞳孔散大+尿失禁", "對聲音過度敏感/嗜睡"] },
      { step: 3, action: "尿液篩檢", details: "人用THC尿液快篩（參考用）", findings: ["陽性支持診斷但非確診", "假陰性可能（代謝物不同）"] },
      { step: 4, action: "支持治療", details: "監測+防吸入+維持體溫", findings: ["大多數24-72小時自行恢復", "嚴重案例需IV輸液和抗嘔吐"] }
    ]
  },
  "snail bait toxicosis": {
    title: "蝸牛餌中毒 診斷流程",
    steps: [
      { step: 1, action: "暴露確認", details: "確認聚乙醛(metaldehyde)接觸", findings: ["攝入蝸牛餌或污染水源", "症狀可在攝入1-4小時出現"] },
      { step: 2, action: "臨床辨識", details: "典型肌肉震顫+過熱", findings: ["全身性肌肉震顫/強直", "體溫>41°C（惡性高熱）"] },
      { step: 3, action: "支持診斷", details: "排除其他震顫原因", findings: ["血氣：代謝性酸中毒", "排除有機磷、strychnine"] },
      { step: 4, action: "積極冷卻+肌鬆", details: "控制震顫+降溫+輸液", findings: ["Methocarbamol 55-220 mg/kg IV", "冷水浴+IV輸液直到穩定"] }
    ]
  },
  "permethrin toxicosis": {
    title: "除蟲菊酯中毒 診斷流程",
    steps: [
      { step: 1, action: "暴露確認", details: "確認高濃度除蟲菊酯接觸（尤其貓）", findings: ["犬用除蚤產品誤用於貓", "接觸後數小時出現症狀"] },
      { step: 2, action: "臨床辨識", details: "典型肌肉震顫和癲癇", findings: ["耳部震顫→全身性震顫", "癲癇發作（嚴重案例）"] },
      { step: 3, action: "去汙", details: "溫水+洗碗精徹底清洗", findings: ["去除皮膚殘留藥物", "避免用含除蟲菊酯的寵物洗毛精"] },
      { step: 4, action: "控制震顫", details: "Methocarbamol+支持治療", findings: ["Methocarbamol 55-220 mg/kg IV", "大多數48-72小時恢復"] }
    ]
  },
  "lyme disease": {
    title: "萊姆病 診斷流程",
    steps: [
      { step: 1, action: "臨床懷疑", details: "壁蝨暴露區犬隻急性跛行", findings: ["間歇性跛行+關節腫脹", "發燒+食慾下降+嗜睡"] },
      { step: 2, action: "血清學篩檢", details: "SNAP 4Dx快篩+C6抗體", findings: ["C6抗體陽性", "區分感染和疫苗反應"] },
      { step: 3, action: "確認性檢測", details: "Quant C6 + 尿蛋白肌酸酐比", findings: ["Quant C6 >30 U/mL提示活動感染", "UPC排除蛋白流失性腎病"] },
      { step: 4, action: "Doxycycline治療", details: "Doxycycline 10 mg/kg PO q24h × 30天", findings: ["臨床改善通常48-72小時內", "4-6個月後複檢C6滴度"] }
    ]
  },
  "heartworm disease": {
    title: "心絲蟲病 診斷流程",
    steps: [
      { step: 1, action: "抗原篩檢", details: "心絲蟲抗原快篩", findings: ["抗原陽性（偵測成蟲雌蟲）", "注意：低蟲量或純雄蟲可假陰性"] },
      { step: 2, action: "確認+分期", details: "微絲蟲鏡檢+胸部X光", findings: ["Modified Knott's test找微絲蟲", "X光：肺動脈擴張+右心擴大"] },
      { step: 3, action: "心臟超音波", details: "評估蟲體數量和心臟功能", findings: ["肺動脈和右心室見蟲體", "右心功能和肺動脈壓評估"] },
      { step: 4, action: "殺蟲治療", details: "Melarsomine IM（三次注射法）", findings: ["AHS分期決定治療方案", "治療期間嚴格限制運動"] }
    ]
  },
  "canine distemper": {
    title: "犬瘟熱 診斷流程",
    steps: [
      { step: 1, action: "臨床懷疑", details: "未接種幼犬多系統症狀", findings: ["發燒+眼鼻分泌物+咳嗽", "嘔吐腹瀉+神經症狀"] },
      { step: 2, action: "快速檢測", details: "CDV抗原快篩（結膜或鼻腔）", findings: ["CDV Ag SNAP陽性", "敏感度有限（陰性不能排除）"] },
      { step: 3, action: "確認性檢測", details: "RT-PCR（血液、尿液或CSF）", findings: ["RT-PCR敏感度和特異度高", "CSF PCR確認神經型犬瘟熱"] },
      { step: 4, action: "支持治療", details: "抗生素預防繼發感染+支持療法", findings: ["預後取決於神經受累程度", "肌陣攣為預後不良指標"] }
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

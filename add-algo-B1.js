// add-algo-B1.js — Add diagnosticAlgorithm to 13 diseases (batch B-1)
const fs = require('fs');

const htmlFile = 'vet-differential-diagnosis-v2.html';
let html = fs.readFileSync(htmlFile, 'utf8');

const algorithms = {
  "diabetic ketoacidosis": {
    title: "糖尿病酮酸中毒 診斷流程",
    steps: [
      { step: 1, action: "血糖與酮體", details: "測定血糖、尿酮體和血中β-羥基丁酸", findings: ["血糖 >250 mg/dL", "酮體陽性"] },
      { step: 2, action: "血氣與電解質", details: "靜脈血氣分析、電解質全套", findings: ["代謝性酸中毒（pH <7.3, HCO3 <15）", "低鉀/低磷需監測"] },
      { step: 3, action: "觸發因子評估", details: "尋找感染、胰臟炎等觸發因子", findings: ["CBC見應激性白血球升高", "cPLI/fPLI排除胰臟炎"] },
      { step: 4, action: "穩定+胰島素", details: "輸液穩定後開始胰島素CRI", findings: ["血糖逐步下降", "酸鹼狀態改善"] }
    ]
  },
  "chronic kidney disease": {
    title: "慢性腎病 診斷流程",
    steps: [
      { step: 1, action: "腎功能標記物", details: "SDMA、BUN、肌酸酐、尿液分析", findings: ["SDMA或肌酸酐持續升高", "尿比重下降（犬<1.030, 貓<1.035）"] },
      { step: 2, action: "IRIS分期", details: "依據肌酸酐/SDMA進行IRIS分期和亞分期", findings: ["Stage 1-4分期", "蛋白尿和血壓亞分期"] },
      { step: 3, action: "影像學", details: "腹部超音波評估腎臟結構", findings: ["腎臟縮小或結構異常", "排除腎結石和阻塞"] },
      { step: 4, action: "併發症篩檢", details: "評估貧血、電解質、甲狀旁腺功能", findings: ["非再生性貧血", "高磷血症/低鈣血症"] }
    ]
  },
  "hepatic lipidosis": {
    title: "貓肝脂肪沉積症 診斷流程",
    steps: [
      { step: 1, action: "臨床懷疑", details: "肥胖貓厭食>3天+黃疸", findings: ["黃疸+體重急速下降", "肝酵素和膽紅素升高"] },
      { step: 2, action: "血液生化", details: "肝功能指標全套", findings: ["ALP顯著升高（犬型ALP）", "GGT正常或輕度升高"] },
      { step: 3, action: "肝臟超音波", details: "評估肝臟回聲和大小", findings: ["肝臟瀰漫性高回聲", "肝臟腫大"] },
      { step: 4, action: "細針穿刺確診", details: "超音波引導肝臟FNA", findings: ["肝細胞內大量脂肪空泡", "排除淋巴瘤等其他原因"] }
    ]
  },
  "portosystemic shunt": {
    title: "門體分流 診斷流程",
    steps: [
      { step: 1, action: "臨床懷疑", details: "幼年動物生長遲緩+肝腦病變症狀", findings: ["餐後行為異常/流涎", "BUN低+白蛋白低+肝酵素輕度異常"] },
      { step: 2, action: "膽酸測試", details: "空腹和餐後膽酸測定", findings: ["餐後膽酸顯著升高", "空腹可能輕度升高"] },
      { step: 3, action: "影像定位", details: "腹部超音波或CT血管攝影", findings: ["超音波見異常血管", "CT確認分流位置和數量"] },
      { step: 4, action: "手術或管理", details: "依分流類型決定治療", findings: ["肝外分流→手術結紮", "肝內分流→評估手術可行性"] }
    ]
  },
  "gastric dilatation-volvulus": {
    title: "胃擴張扭轉 診斷流程",
    steps: [
      { step: 1, action: "臨床辨識", details: "大型犬急性腹脹+非生產性嘔吐", findings: ["腹部膨脹+叩診鼓音", "嘗試嘔吐但吐不出"] },
      { step: 2, action: "X光確認", details: "右側臥位腹部X光", findings: ["雙氣泡徵（double bubble sign）", "幽門背側移位"] },
      { step: 3, action: "緊急穩定", details: "靜脈輸液+胃減壓", findings: ["大口徑導管IV輸液", "經口胃管或穿刺減壓"] },
      { step: 4, action: "手術", details: "手術復位+胃固定術+評估脾臟", findings: ["胃復位", "預防性胃固定術"] }
    ]
  },
  "feline infectious peritonitis": {
    title: "貓傳染性腹膜炎 診斷流程",
    steps: [
      { step: 1, action: "臨床懷疑", details: "年輕貓持續發燒+腹水或神經症狀", findings: ["發燒不退+體重減輕", "腹水或胸水"] },
      { step: 2, action: "體腔液分析", details: "腹水或胸水特徵性分析", findings: ["高蛋白（>3.5 g/dL）黏稠滲出液", "Rivalta test陽性"] },
      { step: 3, action: "血液標記物", details: "A/G ratio、fCoV抗體效價", findings: ["A/G ratio <0.4高度提示", "高冠狀病毒抗體效價"] },
      { step: 4, action: "確認性檢測", details: "免疫組織化學或RT-PCR", findings: ["體腔液RT-PCR陽性", "組織免疫染色確診"] }
    ]
  },
  "inflammatory bowel disease": {
    title: "炎症性腸病 診斷流程",
    steps: [
      { step: 1, action: "排除常見原因", details: "糞便檢查、飲食試驗排除寄生蟲和食物反應", findings: ["糞檢排除寄生蟲", "嚴格飲食試驗6-8週"] },
      { step: 2, action: "血液和影像", details: "CBC、生化、B12/葉酸、腹部超音波", findings: ["低蛋白血症", "腸壁增厚"] },
      { step: 3, action: "內視鏡+活檢", details: "上下消化道內視鏡取黏膜活檢", findings: ["黏膜淋巴球-漿細胞浸潤", "嗜酸性球或肉芽腫性浸潤"] },
      { step: 4, action: "確診+分級", details: "組織病理確認IBD類型和嚴重度", findings: ["WSAVA標準化評分", "排除淋巴瘤（免疫組化）"] }
    ]
  },
  "dilated cardiomyopathy": {
    title: "擴張型心肌病 診斷流程",
    steps: [
      { step: 1, action: "臨床懷疑", details: "大型犬運動不耐受+心律不整", findings: ["心音減弱/奔馬律", "脈搏弱/不規則"] },
      { step: 2, action: "心電圖", details: "12導程ECG評估心律", findings: ["心房顫動", "心室早期收縮（VPCs）"] },
      { step: 3, action: "心臟超音波", details: "M-mode和2D評估心臟結構和功能", findings: ["左心室擴大", "縮短分數（FS）下降<25%"] },
      { step: 4, action: "分期+治療", details: "胸部X光評估肺水腫，開始治療", findings: ["心臟擴大指數", "有無充血性心衰竭"] }
    ]
  },
  "hypertrophic cardiomyopathy": {
    title: "肥厚型心肌病 診斷流程",
    steps: [
      { step: 1, action: "臨床懷疑", details: "貓心雜音或呼吸急促", findings: ["收縮期心雜音", "奔馬律（S3/S4）"] },
      { step: 2, action: "心臟超音波", details: "評估左心室壁厚度和舒張功能", findings: ["左心室壁或中隔>6mm", "左心房擴大"] },
      { step: 3, action: "排除繼發原因", details: "T4、血壓測量排除甲亢和高血壓", findings: ["T4正常排除甲亢", "血壓排除高血壓性心病"] },
      { step: 4, action: "分期+監測", details: "NT-proBNP、胸部X光評估", findings: ["NT-proBNP升高程度", "血栓風險評估（LA/Ao ratio）"] }
    ]
  },
  "intervertebral disc disease": {
    title: "椎間盤疾病 診斷流程",
    steps: [
      { step: 1, action: "神經學定位", details: "完整神經學檢查確定病變區段", findings: ["C1-C5/C6-T2/T3-L3/L4-S3定位", "疼痛等級和行走能力評估"] },
      { step: 2, action: "影像學", details: "脊椎X光和/或MRI", findings: ["X光：椎間隙狹窄或鈣化", "MRI：椎間盤突出和脊髓壓迫"] },
      { step: 3, action: "嚴重度分級", details: "依據神經功能缺損分為1-5級", findings: ["1-2級：疼痛/共濟失調", "3-5級：癱瘓/深層痛覺缺損"] },
      { step: 4, action: "治療決策", details: "依嚴重度選擇保守或手術", findings: ["輕度(1-2級)：保守治療", "重度(3-5級)：手術減壓"] }
    ]
  },
  "urethral obstruction": {
    title: "尿道阻塞 診斷流程",
    steps: [
      { step: 1, action: "臨床辨識", details: "公貓反覆嘗試排尿但無法排出", findings: ["膀胱脹大堅硬", "精神極度沉鬱"] },
      { step: 2, action: "急診評估", details: "心電圖+血鉀+腎功能", findings: ["高血鉀（>7.0 mEq/L）", "代謝性酸中毒+氮質血症"] },
      { step: 3, action: "緊急穩定", details: "處理高血鉀+導尿解除阻塞", findings: ["Calcium gluconate保護心臟", "導尿管放置引流"] },
      { step: 4, action: "阻塞原因", details: "評估阻塞原因和預防復發", findings: ["尿液分析和培養", "結石分析/飲食調整"] }
    ]
  },
  "diabetes mellitus": {
    title: "糖尿病 診斷流程",
    steps: [
      { step: 1, action: "臨床懷疑", details: "多飲多尿+多食+體重減輕", findings: ["持續性高血糖（>250 mg/dL）", "糖尿"] },
      { step: 2, action: "確認診斷", details: "排除應激性高血糖（貓）+果糖胺", findings: ["果糖胺升高（>400 μmol/L）", "排除其他多飲多尿原因"] },
      { step: 3, action: "併發症篩檢", details: "評估酮症、感染、胰臟炎", findings: ["尿酮體狀態", "併發UTI或胰臟炎"] },
      { step: 4, action: "胰島素開始", details: "選擇胰島素類型、劑量和監測計畫", findings: ["犬：NPH或Vetsulin", "貓：Glargine或PZI"] }
    ]
  },
  "ethylene glycol toxicosis": {
    title: "乙二醇中毒 診斷流程",
    steps: [
      { step: 1, action: "病史與早期症狀", details: "接觸抗凍液後的神經症狀", findings: ["類醉酒步態（攝入後1-6小時）", "嘔吐、多飲多尿"] },
      { step: 2, action: "血液檢查", details: "血氣、電解質、乙二醇濃度", findings: ["代謝性酸中毒（高陰離子間隙）", "滲透壓間隙升高"] },
      { step: 3, action: "尿液檢查", details: "尿沉渣顯微鏡檢查", findings: ["草酸鈣結晶（單水合或雙水合）", "腎小管細胞損傷"] },
      { step: 4, action: "緊急解毒", details: "Fomepizole或乙醇+積極輸液", findings: ["攝入8小時內開始效果最佳", "監測腎功能恢復"] }
    ]
  }
};

let count = 0;
for (const [diseaseId, algo] of Object.entries(algorithms)) {
  // Find the monitoring field to insert before it
  const searchStr = `"${diseaseId}":`;
  const startIdx = html.indexOf(searchStr);
  if (startIdx === -1) { console.error(`Disease "${diseaseId}" not found!`); continue; }

  // Find monitoring: within this disease's block
  const braceStart = html.indexOf('{', startIdx);
  let braceCount = 0, endIdx = braceStart;
  for (let i = braceStart; i < html.length; i++) {
    if (html[i] === '{') braceCount++;
    else if (html[i] === '}') { braceCount--; if (braceCount === 0) { endIdx = i + 1; break; } }
  }
  const block = html.substring(braceStart, endIdx);

  // Find monitoring: within this block
  const monitoringOffset = block.indexOf('monitoring:');
  if (monitoringOffset === -1) { console.error(`No monitoring field in "${diseaseId}"!`); continue; }

  const insertPos = braceStart + monitoringOffset;

  // Build the algorithm string
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

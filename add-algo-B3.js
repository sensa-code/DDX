// add-algo-B3.js — Add diagnosticAlgorithm to 13 diseases (batch B-3)
const fs = require('fs');

const htmlFile = 'vet-differential-diagnosis-v2.html';
let html = fs.readFileSync(htmlFile, 'utf8');

const algorithms = {
  "infectious canine hepatitis": {
    title: "犬傳染性肝炎 診斷流程",
    steps: [
      { step: 1, action: "臨床懷疑", details: "幼犬急性發燒+肝腫大+凝血異常", findings: ["發燒+嘔吐+腹痛", "肝臟腫大+黃疸"] },
      { step: 2, action: "血液生化", details: "CBC+肝功能+凝血功能", findings: ["白血球減少→隨後升高", "ALT/ALP顯著升高+PT延長"] },
      { step: 3, action: "確認性檢測", details: "血清學或PCR", findings: ["CAV-1抗體效價升高（4倍以上）", "肝臟或尿液PCR確認"] },
      { step: 4, action: "支持治療", details: "輸液+肝保護+凝血因子", findings: ["恢復期可出現藍眼病（角膜水腫）", "1-2週自限性"] }
    ]
  },
  "kennel cough": {
    title: "犬舍咳 診斷流程",
    steps: [
      { step: 1, action: "臨床診斷", details: "典型鵝鳴樣咳嗽+犬群暴露史", findings: ["乾性陣發性咳嗽+嘔吐樣動作", "氣管觸診誘發咳嗽"] },
      { step: 2, action: "排除併發症", details: "聽診+胸部X光", findings: ["單純上呼吸道：肺音正常", "併發肺炎：支氣管肺泡音"] },
      { step: 3, action: "病原鑑定", details: "PCR呼吸道panel（嚴重或群發時）", findings: ["Bordetella, CIV, CPiV, CAV-2", "鑑定有助群體防疫決策"] },
      { step: 4, action: "治療決策", details: "依嚴重度選擇支持或抗生素", findings: ["輕度：7-14天自限性", "重度/發燒：Doxycycline 5-10 mg/kg BID"] }
    ]
  },
  "feline leukemia virus": {
    title: "貓白血病病毒 診斷流程",
    steps: [
      { step: 1, action: "抗原篩檢", details: "SNAP FeLV/FIV Combo快篩", findings: ["FeLV p27抗原ELISA陽性", "新貓入戶/疑似暴露必測"] },
      { step: 2, action: "確認+分期", details: "IFA或PCR確認+CBC+生化", findings: ["IFA陽性=骨髓感染（持續性感染）", "IFA陰性+ELISA陽性=暫時性或早期"] },
      { step: 3, action: "複檢", details: "30天後重複檢測確認持續感染", findings: ["兩次陽性間隔30天=持續性感染", "轉陰=暫時性感染已清除"] },
      { step: 4, action: "併發症監測", details: "定期監測貧血、淋巴瘤和免疫抑制", findings: ["每6個月CBC+生化全套", "注意淋巴結腫大和體重變化"] }
    ]
  },
  "feline immunodeficiency virus": {
    title: "貓免疫不全病毒 診斷流程",
    steps: [
      { step: 1, action: "抗體篩檢", details: "SNAP FeLV/FIV Combo快篩", findings: ["FIV抗體陽性", "注意：疫苗接種後也會陽性"] },
      { step: 2, action: "確認性檢測", details: "Western blot或proviral PCR", findings: ["Western blot確認", "PCR區分疫苗抗體和自然感染"] },
      { step: 3, action: "免疫狀態評估", details: "CBC+CD4/CD8比值", findings: ["CD4/CD8比值反轉", "淋巴球減少提示免疫抑制進展"] },
      { step: 4, action: "長期監測", details: "管理感染+預防併發症", findings: ["室內飼養防止傳播", "每6個月全面健檢"] }
    ]
  },
  "feline upper respiratory infection": {
    title: "貓上呼吸道感染 診斷流程",
    steps: [
      { step: 1, action: "臨床診斷", details: "典型打噴嚏+眼鼻分泌物", findings: ["漿液性→膿性鼻分泌物", "結膜充血+口腔潰瘍（FCV）"] },
      { step: 2, action: "嚴重度分級", details: "評估食慾、脫水、發燒", findings: ["輕度：食慾正常、活力好", "重度：厭食、脫水、發燒>40°C"] },
      { step: 3, action: "病原鑑定", details: "PCR（僅群發或嚴重案例）", findings: ["FHV-1（疱疹）：角膜潰瘍常見", "FCV（杯狀）：口腔潰瘍為主"] },
      { step: 4, action: "支持治療", details: "清潔眼鼻+營養支持+抗病毒", findings: ["FHV-1：L-Lysine有爭議/Famciclovir", "厭食>3天：警惕肝脂肪沉積"] }
    ]
  },
  "feline panleukopenia": {
    title: "貓泛白血球減少症 診斷流程",
    steps: [
      { step: 1, action: "臨床懷疑", details: "未接種幼貓急性嘔吐+腹瀉+發燒", findings: ["出血性腹瀉+嚴重脫水", "發燒→後期可低體溫（預後差）"] },
      { step: 2, action: "CBC", details: "完全血球計數", findings: ["白血球<2000/μL（泛白血球減少）", "淋巴球和嗜中性球同時下降"] },
      { step: 3, action: "糞便快篩", details: "犬Parvo SNAP test用於貓", findings: ["CPV Ag快篩可用於偵測FPV", "注意：減毒活疫苗後7-14天可假陽性"] },
      { step: 4, action: "積極支持治療", details: "IV輸液+抗嘔吐+抗生素+營養", findings: ["Maropitant止吐+Ampicillin/Metronidazole", "早期腸道營養改善預後"] }
    ]
  },
  "canine influenza": {
    title: "犬流感 診斷流程",
    steps: [
      { step: 1, action: "臨床懷疑", details: "犬群暴露後咳嗽+鼻分泌物", findings: ["持續10-21天咳嗽", "高致病株：高燒+出血性肺炎"] },
      { step: 2, action: "病原檢測", details: "鼻腔/咽部拭子PCR", findings: ["CIV H3N2或H3N8 PCR", "發病3-7天內取樣最佳"] },
      { step: 3, action: "血清學", details: "急性期和恢復期配對血清", findings: ["抗體效價4倍以上升高", "確認診斷但為回溯性"] },
      { step: 4, action: "治療+隔離", details: "支持治療+嚴格隔離", findings: ["輕度：7-10天自限性", "重度：Amoxicillin/clavulanate+輸液"] }
    ]
  },
  "foreign body gi": {
    title: "消化道異物 診斷流程",
    steps: [
      { step: 1, action: "臨床懷疑", details: "急性嘔吐+食慾下降+異物攝入史", findings: ["反覆嘔吐（尤其餐後）", "年輕犬或有咀嚼異物習慣"] },
      { step: 2, action: "腹部X光", details: "腹部正側位X光", findings: ["顯影異物直接可見", "腸梗阻徵象：腸管擴張+氣液平面"] },
      { step: 3, action: "超音波/造影", details: "非顯影異物用超音波或造影劑", findings: ["超音波見腸管內高回聲+聲影", "造影：充填缺損或線性異物"] },
      { step: 4, action: "治療決策", details: "內視鏡取出或手術", findings: ["胃內平滑異物→內視鏡嘗試", "腸阻塞或穿孔→手術"] }
    ]
  },
  "hemorrhagic gastroenteritis": {
    title: "出血性胃腸炎 診斷流程",
    steps: [
      { step: 1, action: "臨床辨識", details: "急性出血性腹瀉+快速脫水", findings: ["果醬樣血便", "小型犬多見（Miniature Schnauzer等）"] },
      { step: 2, action: "血容比", details: "PCV/TS檢測", findings: ["PCV顯著升高（>60%）伴TS正常/低", "血液濃縮為特徵性發現"] },
      { step: 3, action: "排除其他原因", details: "Parvo快篩+糞檢+腹部影像", findings: ["Parvo SNAP陰性", "排除異物/腸套疊/胰臟炎"] },
      { step: 4, action: "積極輸液", details: "IV晶體液+電解質校正", findings: ["24-48小時內通常改善", "監測PCV下降確認再水合"] }
    ]
  },
  "exocrine pancreatic insufficiency": {
    title: "外分泌胰臟機能不全 診斷流程",
    steps: [
      { step: 1, action: "臨床懷疑", details: "慢性腹瀉+體重減輕+食慾正常/增加", findings: ["大量脂肪便", "體重進行性減輕+毛髮差"] },
      { step: 2, action: "TLI檢測", details: "血清Trypsin-like Immunoreactivity", findings: ["犬TLI <2.5 μg/L確診", "貓TLI <8 μg/L確診"] },
      { step: 3, action: "併發症評估", details: "B12/葉酸/鈷胺素+小腸細菌過度生長", findings: ["B12常顯著低下（需補充）", "葉酸升高提示SIBO"] },
      { step: 4, action: "酶替代治療", details: "胰臟酵素補充+B12注射", findings: ["每餐添加胰臟酵素粉", "B12 SC注射每週×6週→每月"] }
    ]
  },
  "protein losing enteropathy": {
    title: "蛋白流失性腸病 診斷流程",
    steps: [
      { step: 1, action: "臨床懷疑", details: "慢性腹瀉+低蛋白血症+水腫/腹水", findings: ["白蛋白<2.0 g/dL", "週邊水腫或腹水或胸水"] },
      { step: 2, action: "排除其他原因", details: "尿蛋白+肝功能確認腸道流失", findings: ["UPC正常排除腎臟流失", "肝功能正常排除肝合成不足"] },
      { step: 3, action: "內視鏡+活檢", details: "消化道內視鏡取黏膜活檢", findings: ["淋巴管擴張", "淋巴球-漿細胞性腸炎"] },
      { step: 4, action: "治療", details: "免疫抑制+低脂飲食+白蛋白支持", findings: ["Prednisolone+Chlorambucil", "極低脂飲食（<15%脂肪）"] }
    ]
  },
  "acute kidney injury": {
    title: "急性腎損傷 診斷流程",
    steps: [
      { step: 1, action: "臨床辨識", details: "急性嘔吐+無尿/少尿+腎區疼痛", findings: ["肌酸酐急性升高", "尿量減少或無尿"] },
      { step: 2, action: "腎功能+電解質", details: "BUN/Crea/SDMA/K/Ca/P", findings: ["肌酸酐每日升高>0.3 mg/dL", "高血鉀+高磷+代謝性酸中毒"] },
      { step: 3, action: "原因調查", details: "毒物暴露+影像+尿液分析", findings: ["超音波：腎臟腫大+腎盂擴張", "尿液：管型+糖尿+低比重"] },
      { step: 4, action: "積極輸液+利尿", details: "IV輸液+Furosemide+治療原因", findings: ["維持尿量>1-2 mL/kg/hr", "無反應考慮透析"] }
    ]
  },
  "feline lower urinary tract disease": {
    title: "貓下泌尿道疾病 診斷流程",
    steps: [
      { step: 1, action: "臨床表現", details: "頻尿+血尿+排尿困難", findings: ["反覆進出貓砂盆", "不適當排尿+血尿"] },
      { step: 2, action: "體檢+膀胱評估", details: "觸診膀胱+確認是否阻塞", findings: ["膀胱小而疼痛=非阻塞", "膀胱大而硬=阻塞（緊急！）"] },
      { step: 3, action: "尿液+影像", details: "尿液分析+培養+X光/超音波", findings: ["尿液：血尿+結晶", "影像：結石?腫瘤?（>10歲需排除）"] },
      { step: 4, action: "鑑別分類", details: "區分FIC、結石、感染、腫瘤", findings: ["<10歲+尿培養陰性=多為FIC(60-70%)", "結石+感染+腫瘤各佔<20%"] }
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

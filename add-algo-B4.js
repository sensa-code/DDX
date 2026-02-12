// add-algo-B4.js — Add diagnosticAlgorithm to 13 diseases (batch B-4)
const fs = require('fs');

const htmlFile = 'vet-differential-diagnosis-v2.html';
let html = fs.readFileSync(htmlFile, 'utf8');

const algorithms = {
  "prostatic disease": {
    title: "前列腺疾病 診斷流程",
    steps: [
      { step: 1, action: "臨床懷疑", details: "未絕育公犬排尿/排便困難", findings: ["裡急後重（排便困難）", "血尿+尿道分泌物"] },
      { step: 2, action: "直腸觸診", details: "評估前列腺大小、對稱性、疼痛", findings: ["對稱性腫大=BPH", "不對稱/疼痛=膿瘍/腫瘤"] },
      { step: 3, action: "影像+取樣", details: "超音波+前列腺液/FNA", findings: ["超音波：均勻vs囊性vs不均勻", "細胞學區分感染/增生/腫瘤"] },
      { step: 4, action: "治療決策", details: "依病因選擇治療", findings: ["BPH：絕育為首選治療", "膿瘍：引流+抗生素、腫瘤：預後差"] }
    ]
  },
  "mammary tumor": {
    title: "乳腺腫瘤 診斷流程",
    steps: [
      { step: 1, action: "觸診評估", details: "系統性觸診所有乳腺", findings: ["記錄腫塊位置、大小、活動性", "貓乳腺腫瘤>90%為惡性"] },
      { step: 2, action: "分期檢查", details: "胸部X光+腹部超音波+局部淋巴結", findings: ["胸部三張X光排除肺轉移", "腹部淋巴結評估"] },
      { step: 3, action: "FNA/活檢", details: "細針穿刺或切除活檢", findings: ["細胞學初步分類", "組織病理確認型別和分級"] },
      { step: 4, action: "手術切除", details: "依腫瘤位置選擇切除範圍", findings: ["犬：區域或半側乳腺切除", "貓：建議雙側全乳腺切除"] }
    ]
  },
  "testicular tumor": {
    title: "睪丸腫瘤 診斷流程",
    steps: [
      { step: 1, action: "觸診發現", details: "睪丸不對稱或腫塊", findings: ["一側腫大+對側萎縮", "隱睪犬風險高13倍"] },
      { step: 2, action: "超音波", details: "睪丸超音波評估", findings: ["實質性腫塊+血流增加", "區分Sertoli/Seminoma/Interstitial"] },
      { step: 3, action: "內分泌評估", details: "雌激素水平+CBC", findings: ["Sertoli cell tumor：高雌激素", "骨髓抑制（全血球減少）"] },
      { step: 4, action: "睪丸切除", details: "雙側睪丸切除+組織病理", findings: ["大多數為良性（切除可治癒）", "Sertoli cell需評估骨髓恢復"] }
    ]
  },
  "mitral valve disease": {
    title: "二尖瓣疾病 診斷流程",
    steps: [
      { step: 1, action: "聽診發現", details: "左心尖收縮期心雜音", findings: ["心雜音分級（I-VI）", "小型老年犬最常見"] },
      { step: 2, action: "胸部X光", details: "評估心臟大小和肺部", findings: ["VHS（椎體心臟評分）增大", "肺靜脈充血/肺水腫"] },
      { step: 3, action: "心臟超音波", details: "評估瓣膜形態和心臟功能", findings: ["二尖瓣增厚/脫垂", "LA/Ao ratio>1.6=左心房擴大"] },
      { step: 4, action: "ACVIM分期", details: "B1/B2/C/D分期決定治療", findings: ["B1(無重塑)：監測", "B2(重塑)→C(心衰)：開始用藥"] }
    ]
  },
  "congestive heart failure": {
    title: "充血性心衰竭 診斷流程",
    steps: [
      { step: 1, action: "臨床辨識", details: "呼吸急促+運動不耐受+咳嗽", findings: ["犬：夜間咳嗽+端坐呼吸", "貓：呼吸急促+張口呼吸"] },
      { step: 2, action: "胸部X光", details: "評估心臟大小+肺野", findings: ["心臟擴大", "肺水腫（犬：背側肺葉為主）"] },
      { step: 3, action: "NT-proBNP", details: "心臟生物標記物", findings: ["犬>900 pmol/L高度提示CHF", "貓>270 pmol/L提示心臟病"] },
      { step: 4, action: "緊急穩定+用藥", details: "Furosemide+Pimobendan+ACEi", findings: ["Furosemide 2-4 mg/kg IV/IM（急性）", "穩定後加Pimobendan+Enalapril"] }
    ]
  },
  "aortic thromboembolism": {
    title: "主動脈血栓栓塞 診斷流程",
    steps: [
      { step: 1, action: "臨床辨識", details: "貓急性後肢癱瘓+疼痛嚎叫", findings: ["後肢冰冷+無脈搏", "腳掌發紺+肌肉僵硬"] },
      { step: 2, action: "5P評估", details: "Pain, Pulselessness, Pallor, Paralysis, Poikilothermia", findings: ["股動脈搏動消失", "患肢指甲切開無出血"] },
      { step: 3, action: "心臟評估", details: "心臟超音波+NT-proBNP", findings: ["大多數有HCM或其他心肌病", "左心房自發性顯影（SEC）"] },
      { step: 4, action: "治療決策", details: "疼痛控制+抗凝血+心臟治療", findings: ["Clopidogrel 18.75 mg/cat/day", "預後不良：30天死亡率~50%"] }
    ]
  },
  "pericardial effusion": {
    title: "心包積液 診斷流程",
    steps: [
      { step: 1, action: "臨床懷疑", details: "運動不耐+腹水+頸靜脈怒張", findings: ["心音減弱（遠心音）", "Beck's triad（低血壓/怒張頸靜脈/遠心音）"] },
      { step: 2, action: "影像", details: "X光+心臟超音波", findings: ["X光：球形心影", "超音波：心包腔無回聲液體"] },
      { step: 3, action: "心包穿刺", details: "超音波引導心包穿刺引流", findings: ["血性液體（不凝固=慢性）", "液體細胞學+pH+PCV"] },
      { step: 4, action: "原因調查", details: "區分腫瘤vs特發性", findings: ["血管肉瘤（右心房腫塊）", "特發性（中大型犬、反覆發作）"] }
    ]
  },
  "patent ductus arteriosus": {
    title: "開放性動脈導管 診斷流程",
    steps: [
      { step: 1, action: "聽診發現", details: "幼犬/貓持續性機械樣心雜音", findings: ["左心基底部連續性雜音", "「洗衣機」樣雜音（收縮+舒張）"] },
      { step: 2, action: "胸部X光", details: "評估心臟大小和肺血管", findings: ["左心房+左心室擴大", "肺過度灌流（肺血管紋理增多）"] },
      { step: 3, action: "心臟超音波", details: "確認導管存在和分流方向", findings: ["肺動脈內偵測到連續性紊亂血流", "左→右分流（典型PDA）"] },
      { step: 4, action: "手術/介入", details: "導管結紮或ACDO裝置", findings: ["手術結紮（傳統方法）", "經導管ACDO封堵（微創）"] }
    ]
  },
  "idiopathic epilepsy": {
    title: "特發性癲癇 診斷流程",
    steps: [
      { step: 1, action: "發作描述", details: "詳細記錄發作型態和頻率", findings: ["全身性強直-陣攣發作", "發作年齡1-5歲+發作間期正常"] },
      { step: 2, action: "排除代謝原因", details: "CBC+生化+血糖+膽酸+NH3", findings: ["血液學全部正常", "排除低血糖/肝腦病變/電解質異常"] },
      { step: 3, action: "排除結構性原因", details: "腦部MRI+CSF分析", findings: ["MRI正常（排除腫瘤/腦炎）", "CSF正常（排除感染/發炎）"] },
      { step: 4, action: "抗癲癇治療", details: "選擇AED開始治療", findings: ["犬首選：Phenobarbital或Levetiracetam", "貓首選：Levetiracetam或Phenobarbital"] }
    ]
  },
  "vestibular disease": {
    title: "前庭疾病 診斷流程",
    steps: [
      { step: 1, action: "神經學定位", details: "區分中樞vs週邊前庭", findings: ["週邊：頭歪+水平眼振+無意識缺損", "中樞：垂直眼振+姿態反應異常+意識改變"] },
      { step: 2, action: "耳鏡+影像", details: "耳鏡檢查+鼓室泡X光/CT", findings: ["週邊：中/內耳感染、息肉", "中樞：腦幹MRI必要"] },
      { step: 3, action: "實驗室", details: "甲狀腺功能+CBC+生化", findings: ["老年犬：排除甲狀腺低下", "貓：排除鼻咽息肉"] },
      { step: 4, action: "治療+觀察", details: "依原因治療+支持療法", findings: ["特發性前庭（老犬）：2-3週自限性", "中耳感染：6-8週抗生素"] }
    ]
  },
  "fibrocartilaginous embolism": {
    title: "纖維軟骨栓塞 診斷流程",
    steps: [
      { step: 1, action: "臨床特徵", details: "運動中急性非進行性脊髓症狀", findings: ["突然發作→6-12小時內穩定", "通常不對稱+無疼痛"] },
      { step: 2, action: "神經學定位", details: "確定病變脊髓節段", findings: ["常見T3-L3或L4-S3節段", "上運動/下運動神經元徵象"] },
      { step: 3, action: "MRI", details: "脊髓MRI（確診需要）", findings: ["T2WI：脊髓實質內高信號", "與一個椎間盤對應位置"] },
      { step: 4, action: "物理治療", details: "積極復健+時間", findings: ["大多數2-6週內改善", "深層痛覺保留者預後良好"] }
    ]
  },
  "myasthenia gravis": {
    title: "重症肌無力 診斷流程",
    steps: [
      { step: 1, action: "臨床懷疑", details: "運動性虛弱+巨食道+反覆誤嚥", findings: ["運動後加重、休息後改善", "局部型：巨食道+面部無力"] },
      { step: 2, action: "Tensilon test", details: "Edrophonium 0.1 mg/kg IV", findings: ["注射後肌力暫時改善", "5-10分鐘內效果消退"] },
      { step: 3, action: "AChR抗體", details: "血清乙醯膽鹼受體抗體效價", findings: ["犬>0.6 nmol/L=陽性", "確認後天免疫介導型MG"] },
      { step: 4, action: "治療+胸腺評估", details: "Pyridostigmine+胸腔CT", findings: ["Pyridostigmine 0.5-3 mg/kg PO q8-12h", "排除胸腺瘤（特別是貓）"] }
    ]
  },
  "cranial cruciate ligament rupture": {
    title: "前十字韌帶斷裂 診斷流程",
    steps: [
      { step: 1, action: "跛行評估", details: "後肢跛行+膝關節腫脹", findings: ["急性：承重困難", "慢性：間歇性跛行+肌肉萎縮"] },
      { step: 2, action: "骨科檢查", details: "Drawer test + Tibial thrust", findings: ["前抽屜試驗陽性（膝關節前移）", "脛骨壓迫試驗陽性"] },
      { step: 3, action: "X光", details: "膝關節X光評估", findings: ["關節積液（脂肪墊徵象消失）", "骨關節炎變化+脛骨前移"] },
      { step: 4, action: "手術", details: "TPLO/TTA/lateral suture", findings: ["TPLO為目前首選術式", "半月板評估（同時損傷常見）"] }
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

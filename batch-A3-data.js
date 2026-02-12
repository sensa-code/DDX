// batch-A3-data.js — 先天/結構性疾病 10種 structured data
module.exports = {
  "inguinal-hernia": {
    zh: "腹股溝疝氣",
    en: "Inguinal Hernia",
    definition: "腹股溝疝氣是腹腔臟器（如腸道、膀胱、子宮或網膜）經由擴大的腹股溝環突出至腹股溝區域的先天性或後天性疾病。先天性型態因腹股溝管發育異常所致，後天性型態常與荷爾蒙、肥胖或妊娠有關。",
    synonyms: ["鼠蹊疝氣", "腹股溝裂孔疝"],
    epidemiology: {
      species: "犬貓皆可，犬較常見",
      age: "先天性：幼年；後天性：中老年母犬",
      sex: "母犬較好發（腹股溝管較短寬、雌激素影響結締組織）",
      riskFactors: ["玩具犬種（吉娃娃、馬爾濟斯、貴賓）", "未絕育母犬", "肥胖", "妊娠", "先天腹股溝環過大"]
    },
    clinicalPresentation: {
      history: ["腹股溝區域可觸及腫塊", "腫塊可能時大時小", "嵌頓時出現疼痛、嘔吐、食慾下降", "母犬懷孕後期加重"],
      physicalExam: ["腹股溝區域可觸診軟性腫塊", "可復位性疝氣可將內容物推回腹腔", "嵌頓性疝氣觸診疼痛且無法復位", "絞扼性疝氣伴局部發熱腫脹", "雙側腹股溝應同時檢查"]
    },
    pathophysiology: "腹股溝管由內腹斜肌外側界定、直肌和內腹斜肌內側界定。當腹股溝環先天性過大或後天因荷爾蒙（雌激素）影響使結締組織鬆弛時，腹壓增加可推動腹腔臟器通過腹股溝管突出。嵌頓（incarceration）發生時臟器被卡住無法復位，若血供受阻則進展為絞扼（strangulation），導致組織缺血壞死，為外科急症。",
    diagnosis: {
      overview: "多數可藉觸診確診，影像學用於評估嵌頓內容物",
      differentials: ["腹股溝淋巴結腫大", "脂肪瘤", "乳腺腫瘤延伸", "膿瘍"],
      initialDB: ["腹股溝區觸診（可復位性 vs 嵌頓性）", "腹部X光", "腹部超音波（評估疝氣內容物）"],
      advanced: ["對比X光（疑似膀胱疝出時）", "CT掃描（複雜疝氣評估）"]
    },
    treatment: {
      overview: "手術修復為首選治療，嵌頓或絞扼時為急診手術",
      acute: ["絞扼性疝氣：緊急開腹探查+壞死組織切除", "靜脈輸液支持+止痛", "抗生素預防性投予"],
      chronic: ["擇期疝氣修補術（herniorrhaphy）", "同時進行卵巢子宮切除術（未絕育母犬）", "雙側腹股溝環均應評估並修補"]
    },
    prognosis: "擇期手術修補預後極佳，復發率低。絞扼性疝氣若及時手術，預後仍佳；延誤治療導致腸壞死時預後下降。建議術後限制活動2-4週。",
    pearls: ["母犬腹股溝疝氣常見於未絕育中老年犬，修補時應同時絕育", "雙側腹股溝均應檢查，單側疝氣對側亦可能有潛在缺損", "嵌頓性疝氣不應嘗試強力復位，應直接手術"],
    diagnosticAlgorithm: {
      title: "腹股溝疝氣 診斷流程",
      steps: [
        { step: 1, action: "理學檢查", details: "觸診腹股溝區域腫塊，評估可復位性", findings: ["軟性可復位腫塊", "硬性不可復位腫塊（嵌頓）", "疼痛伴發熱（絞扼）"] },
        { step: 2, action: "影像學檢查", details: "X光及超音波評估疝氣內容物", findings: ["腸管疝出", "膀胱疝出", "子宮/網膜疝出"] },
        { step: 3, action: "實驗室檢查", details: "嵌頓或絞扼時評估全身狀態", findings: ["CBC（感染指標）", "生化指標（腎功能若膀胱嵌頓）"] },
        { step: 4, action: "手術計畫", details: "根據疝氣類型決定擇期或急診手術", findings: ["可復位→擇期修補", "嵌頓/絞扼→急診手術"] }
      ]
    },
    monitoring: ["術後傷口癒合狀況", "術後2-4週限制活動", "觀察復發跡象", "體重管理"],
    reference: "VCA Animal Hospitals — Inguinal Hernias; MSD Veterinary Manual — Hernias in Animals; dvm360 — Hernia Repair Proceedings"
  },

  "diaphragmatic-hernia-congenital": {
    zh: "先天性橫膈疝氣",
    en: "Congenital Diaphragmatic Hernia",
    definition: "先天性橫膈疝氣是因胚胎發育期間橫膈膜形成不完全，導致腹腔臟器（肝臟、胃、腸道、脾臟等）經由橫膈缺損進入胸腔的先天性疾病。包括腹膜心包橫膈疝氣（PPDH）和胸膜腹膜裂孔疝氣等亞型。",
    synonyms: ["先天性膈疝", "PPDH（腹膜心包橫膈疝氣）"],
    epidemiology: {
      species: "犬貓皆可，貓較犬常見先天性型",
      age: "先天性：任何年齡可診斷，常於幼年或偶然發現",
      sex: "無明顯性別傾向",
      riskFactors: ["遺傳缺陷", "胚胎期致畸因子暴露", "Weimaraner犬種（PPDH好發）", "波斯貓和喜馬拉雅貓"]
    },
    clinicalPresentation: {
      history: ["呼吸困難（輕度至嚴重）", "運動不耐", "偶發嘔吐或食慾下降", "部分病例無症狀（偶然影像學發現）"],
      physicalExam: ["胸腔聽診肺音減弱或消失", "胸腔內可聽到腸蠕動音", "心音可能移位", "腹部觸診臟器減少（因位移至胸腔）", "嚴重者呈端坐呼吸"]
    },
    pathophysiology: "胚胎發育期間，橫膈膜由隔膜橫板（septum transversum）、胸膜腹膜膜、食道背系膜和體壁肌肉組織融合形成。任何部分發育障礙均可導致橫膈缺損。腹腔臟器經缺損移入胸腔，壓迫肺葉導致肺不張和通氣不足。PPDH型態中腹腔臟器進入心包囊，可能影響心臟舒張功能。長期代償後急性失代償可能因臟器嵌頓或胃擴張觸發。",
    diagnosis: {
      overview: "胸腔X光為主要診斷工具，超音波和CT可進一步確認",
      differentials: ["外傷性橫膈疝氣", "胸腔積液", "肺葉扭轉", "胸腔腫瘤"],
      initialDB: ["胸腔X光（腹側背側+側位）", "腹腔超音波（評估腹腔臟器位置）", "胸腔超音波"],
      advanced: ["對比消化道攝影（確認胃腸疝出）", "CT掃描（術前計畫）", "心臟超音波（PPDH評估心包內容物）"]
    },
    treatment: {
      overview: "手術修補為根治性治療，術前需穩定呼吸循環狀態",
      acute: ["氧氣支持", "胸腔穿刺引流（大量氣胸或積液時）", "靜脈輸液穩定循環"],
      chronic: ["腹正中開腹橫膈修補術", "疝出臟器復位回腹腔", "橫膈缺損直接縫合或網片修補"]
    },
    prognosis: "PPDH手術死亡率低，長期預後極佳。非PPDH型先天性橫膈疝氣預後取決於疝出臟器種類和併發症。術後需注意再膨脹性肺水腫（re-expansion pulmonary edema），特別是慢性病例。",
    pearls: ["PPDH常為偶然影像學發現，無症狀者仍建議手術以防未來嵌頓", "術後緩慢復位肺葉以減少再膨脹性肺水腫風險", "先天性橫膈疝氣在貓比犬更常見"],
    diagnosticAlgorithm: {
      title: "先天性橫膈疝氣 診斷流程",
      steps: [
        { step: 1, action: "理學檢查+聽診", details: "評估呼吸型態和胸腔聽診異常", findings: ["肺音減弱/消失", "胸腔腸蠕動音", "心音移位"] },
        { step: 2, action: "胸腹X光", details: "正側位X光評估橫膈完整性", findings: ["橫膈輪廓消失", "胸腔內可見腹腔臟器影像", "心影增大（PPDH）"] },
        { step: 3, action: "超音波+對比攝影", details: "進一步確認疝出內容物", findings: ["肝臟/腸道位於胸腔", "心包內可見臟器（PPDH）"] },
        { step: 4, action: "CT術前評估", details: "複雜病例的手術計畫", findings: ["精確定位缺損大小和位置", "評估併發臟器損傷"] }
      ]
    },
    monitoring: ["術後呼吸監測（再膨脹性肺水腫）", "術後胸腔X光追蹤", "活動限制2-4週", "長期預後評估"],
    reference: "ACVS — Diaphragmatic Hernia; Merck Veterinary Manual — Diaphragmatic Hernia in Animals; VCA Animal Hospitals"
  },

  "pectus-excavatum": {
    zh: "漏斗胸",
    en: "Pectus Excavatum",
    definition: "漏斗胸是一種先天性胸骨畸形，表現為胸骨向內凹陷（特別是後段胸骨），導致胸腔容積減少。嚴重病例可壓迫心肺，影響呼吸和心臟功能。主要見於幼犬和幼貓，貓較犬常見。",
    synonyms: ["凹胸", "沉胸", "Funnel Chest"],
    epidemiology: {
      species: "犬貓皆可，貓較常見",
      age: "出生即存在，通常於幼年（< 4月齡）發現",
      sex: "無明顯性別傾向",
      riskFactors: ["遺傳因素（可能為遺傳性缺陷）", "鬥牛犬和臘腸犬好發", "緬甸貓好發", "早產或低體重幼畜"]
    },
    clinicalPresentation: {
      history: ["胸部明顯凹陷", "呼吸費力或呼吸急促", "運動不耐", "發育遲緩", "輕度病例可能無症狀"],
      physicalExam: ["胸骨後段明顯向背側凹陷", "觸診可感受胸骨凹陷程度", "心音可能異常（心臟位移）", "肺音可能減弱", "嚴重者可見發紺"]
    },
    pathophysiology: "漏斗胸的確切病因不明，推測與胸骨和肋軟骨的先天性發育異常有關，可能涉及軟骨基質代謝缺陷。胸骨向背側凹陷壓迫胸腔內容物，減少功能性肺容積，限制肺擴張能力。嚴重凹陷可使心臟位移或受壓，影響心輸出量。部分病例可隨成長自行改善，但嚴重病例需早期手術干預。",
    diagnosis: {
      overview: "視診和觸診即可初步診斷，影像學評估嚴重程度",
      differentials: ["扁胸（pectus carinatum）", "肋骨骨折", "胸壁腫瘤", "先天性心臟病"],
      initialDB: ["胸部X光（側位+腹背位）", "觸診評估凹陷程度", "胸骨指數測量（Vertebral Index）"],
      advanced: ["CT掃描（精確測量凹陷程度和心肺壓迫）", "心臟超音波（評估心功能）", "動脈血氣分析"]
    },
    treatment: {
      overview: "輕度病例可觀察，嚴重病例需於2-4月齡內手術矯正",
      acute: ["氧氣支持（呼吸窘迫時）", "胸腔穿刺（併發氣胸時）"],
      chronic: ["外固定夾板矯正術（最常見方法）", "夾板縫合於胸骨，外部施加矯正力約6週", "成年後手術矯正效果差，胸壁順應性已降低"]
    },
    prognosis: "輕度病例部分可隨成長改善，預後良好。嚴重病例未經治療預後差。2-4月齡內手術矯正成功率較高，延遲手術因胸壁硬化效果下降。術後需密切監測夾板位置和傷口。",
    pearls: ["手術矯正應在2-4月齡進行，越早越好", "部分輕度病例可隨成長自行改善", "嚴重漏斗胸需排除併發先天性心臟病"],
    diagnosticAlgorithm: {
      title: "漏斗胸 診斷流程",
      steps: [
        { step: 1, action: "視診+觸診", details: "評估胸骨凹陷程度和呼吸狀態", findings: ["胸骨明顯凹陷", "呼吸費力", "發育遲緩"] },
        { step: 2, action: "胸部X光", details: "側位和腹背位X光評估", findings: ["胸骨指數異常", "心臟位移", "肺壓迫"] },
        { step: 3, action: "CT掃描", details: "精確測量凹陷程度和評估併發症", findings: ["Haller指數計算", "心肺受壓程度"] },
        { step: 4, action: "心臟超音波", details: "排除先天性心臟病", findings: ["心功能評估", "排除結構性異常"] }
      ]
    },
    monitoring: ["術後夾板固定位置", "呼吸功能改善追蹤", "成長發育監測", "術後6週移除夾板"],
    reference: "MSPCA-Angell — Pectus Excavatum; PMC — Surgical correction of pectus excavatum in cats; PetMD — Chest Bone Deformity"
  },

  "persistent-right-aortic-arch": {
    zh: "持續性右主動脈弓",
    en: "Persistent Right Aortic Arch",
    definition: "持續性右主動脈弓（PRAA）是最常見的血管環異常，正常發育時右側第四主動脈弓應退化，但在PRAA中右側弓持續存在並形成主動脈，與動脈導管韌帶共同環繞並壓迫食道，導致食道梗阻和巨食道。約佔血管環異常病例的95%。",
    synonyms: ["PRAA", "血管環異常"],
    epidemiology: {
      species: "犬較常見，貓偶見",
      age: "斷奶開始固體食物時發病（3-6月齡）",
      sex: "無明顯性別傾向",
      riskFactors: ["德國牧羊犬", "愛爾蘭雪達犬", "波士頓梗犬", "英國鬥牛犬", "拉布拉多犬", "遺傳因素"]
    },
    clinicalPresentation: {
      history: ["斷奶後開始嘔吐/反流固體食物", "液體食物可正常通過", "發育遲緩", "體重減輕", "偶有咳嗽（吸入性肺炎）"],
      physicalExam: ["體重過輕、營養不良", "前胸部食道擴張（頸部觸診）", "肺部聽診異常（吸入性肺炎時）", "反流未消化食物（非嘔吐物）"]
    },
    pathophysiology: "胚胎發育時左右各有第四主動脈弓。正常情況下左弓發育為主動脈，右弓退化。PRAA中右弓持續存在成為主動脈，位於食道右背側。動脈導管韌帶（ligamentum arteriosum）從左肺動脈連接至右側主動脈，跨越食道左側。食道因此被氣管（腹側）、主動脈（右背側）、肺動脈（左側）和動脈導管韌帶（左背側）形成的血管環包圍壓迫，導致環前方食道擴張（巨食道），固體食物無法通過。",
    diagnosis: {
      overview: "胸部X光可見前縱隔食道擴張，對比攝影確認，CT精確定位",
      differentials: ["先天性巨食道", "食道異物", "食道狹窄", "其他血管環異常"],
      initialDB: ["胸部X光（可見心基部前食道擴張）", "對比食道攝影（鋇劑吞嚥）", "CBC和生化（評估營養狀態）"],
      advanced: ["CT血管造影（精確定位異常血管走向）", "心臟超音波（排除併發先天性心臟病）", "內視鏡（評估食道黏膜）"]
    },
    treatment: {
      overview: "手術切斷動脈導管韌帶以解除血管環壓迫為唯一根治方法",
      acute: ["吸入性肺炎治療：抗生素+氧氣支持", "營養支持：高熱量流質餵食", "垂直姿勢餵食減少反流"],
      chronic: ["左側第四肋間開胸術切斷動脈導管韌帶", "術後繼續垂直姿勢餵食3-6個月", "逐漸轉換為固體食物", "早期手術（2-6月齡）預後最佳"]
    },
    prognosis: "87%的犬術後長期預後良好至極佳。早期手術（6月齡內）效果最好。術前已有嚴重巨食道者，食道功能可能無法完全恢復，需長期管理餵食方式。吸入性肺炎是主要死亡原因。",
    pearls: ["PRAA佔所有血管環異常的95%", "關鍵鑑別：反流固體食物但液體正常通過", "手術越早進行效果越好，延遲會導致永久性食道損傷", "術後需持續垂直餵食數月至食道功能恢復"],
    diagnosticAlgorithm: {
      title: "持續性右主動脈弓 診斷流程",
      steps: [
        { step: 1, action: "病史+理學檢查", details: "斷奶後反流固體食物為主要線索", findings: ["固體食物反流、液體正常", "發育遲緩", "營養不良"] },
        { step: 2, action: "胸部X光", details: "評估食道擴張和肺部狀態", findings: ["心基部前食道擴張", "可能的吸入性肺炎"] },
        { step: 3, action: "對比食道攝影", details: "鋇劑吞嚥確認食道梗阻位置", findings: ["心基部食道狹窄", "狹窄前食道明顯擴張"] },
        { step: 4, action: "CT血管造影", details: "術前精確定位異常血管", findings: ["右側主動脈弓", "動脈導管韌帶走向確認"] }
      ]
    },
    monitoring: ["術後反流改善程度", "體重增長追蹤", "吸入性肺炎監測", "逐漸恢復正常飲食"],
    reference: "Merck Veterinary Manual — Vascular Malformations; ACVS; UC Davis School of Veterinary Medicine"
  },

  "portosystemic-shunt-congenital": {
    zh: "先天性門體分流",
    en: "Congenital Portosystemic Shunt",
    definition: "先天性門體分流（CPSS）是一種先天性血管異常，門脈血液經由異常血管通道繞過肝臟直接進入體循環。導致肝臟發育不全、解毒功能障礙，毒素（特別是氨）累積於血液中引起肝性腦病等全身性症狀。分為肝外型（小型犬和貓多見）和肝內型（大型犬多見）。",
    synonyms: ["先天性肝門脈分流", "CPSS", "Liver Shunt"],
    epidemiology: {
      species: "犬貓皆可",
      age: "多於1歲前出現症狀",
      sex: "無明顯性別傾向",
      riskFactors: ["約克夏梗（肝外型最常見犬種）", "馬爾濟斯、西乎犬", "愛爾蘭獵狼犬、金毛犬（肝內型）", "波斯貓和喜馬拉雅貓", "遺傳傾向"]
    },
    clinicalPresentation: {
      history: ["神經症狀（迷失方向、踱步、凝視牆壁、癲癇）", "餐後症狀加重", "發育遲緩、體型小於同窩仔", "多飲多尿", "間歇性嘔吐或腹瀉", "異食癖"],
      physicalExam: ["體型偏小", "肝臟觸診縮小", "銅色虹膜（貓）", "尿酸銨結石（膀胱觸診）", "神經學檢查異常（共濟失調、頭部震顫）"]
    },
    pathophysiology: "正常情況下，門脈血液攜帶來自胃腸道的營養物質和毒素進入肝臟進行代謝和解毒。先天性門體分流中，異常血管使門脈血液繞過肝竇直接進入後腔靜脈或奇靜脈。肝臟因缺乏門脈血流中的肝營養因子（hepatotropic factors）而發育不全（microhepatica）。腸道產生的氨、硫醇、假性神經傳導物質等毒素未經肝臟代謝直接進入體循環，累積後引起肝性腦病（hepatic encephalopathy）。尿酸因肝臟無法將其轉化為尿囊素而在尿液中累積，形成尿酸銨結石。",
    diagnosis: {
      overview: "血清膽汁酸檢測為篩檢首選，CT血管造影為確診金標準",
      differentials: ["後天性門體分流（繼發於肝硬化）", "肝微血管發育不全", "其他原因的肝性腦病", "先天性腎功能異常"],
      initialDB: ["空腹及餐後血清膽汁酸", "CBC（常見微小紅血球症）", "生化（BUN低、白蛋白低、膽固醇低）", "尿液分析（尿酸銨結晶）"],
      advanced: ["CT血管造影（確診金標準，精確定位分流血管）", "腹部超音波+都卜勒（篩檢分流血管）", "門脈壓力測量（術中）", "核醫學門脈造影"]
    },
    treatment: {
      overview: "手術漸進式結紮或介入性栓塞為首選，內科治療用於術前穩定或無法手術者",
      acute: ["肝性腦病急性發作：乳果糖灌腸+IV輸液", "抗癲癇藥物（levetiracetam）", "低蛋白飲食+抗生素（減少腸道氨產生）"],
      chronic: ["ameroid constrictor或cellophane banding漸進式結紮", "經皮經靜脈彈簧圈栓塞（肝內型）", "內科管理：乳果糖+甲硝唑/安比西林+處方低蛋白飲食"]
    },
    prognosis: "犬手術治療後預後通常良好。肝外單一分流手術成功率>85%。貓的預後略遜於犬。純內科治療的長期預後較差。術後需監測門脈高壓症狀（多發性後天分流形成）。",
    pearls: ["約克夏梗和小型犬多為肝外型，大型犬多為肝內型", "餐後神經症狀加重是重要的診斷線索", "血清膽汁酸正常不能完全排除分流（敏感度85-90%）", "術前內科穩定至少2-4週再進行手術"],
    diagnosticAlgorithm: {
      title: "先天性門體分流 診斷流程",
      steps: [
        { step: 1, action: "臨床懷疑", details: "幼年小型犬餐後神經症狀", findings: ["發育遲緩", "餐後行為異常", "多飲多尿"] },
        { step: 2, action: "血液篩檢", details: "膽汁酸+CBC+生化", findings: ["空腹/餐後膽汁酸升高", "微小紅血球症", "BUN/白蛋白/膽固醇偏低"] },
        { step: 3, action: "影像篩檢", details: "腹部超音波+都卜勒評估", findings: ["肝臟縮小", "異常血管通道", "門脈血流異常"] },
        { step: 4, action: "確診影像", details: "CT血管造影精確定位", findings: ["分流血管起止點", "肝內型vs肝外型分類", "術前計畫"] }
      ]
    },
    monitoring: ["術後膽汁酸追蹤（1個月、3個月、6個月）", "肝臟大小追蹤（超音波）", "神經症狀改善", "體重增長", "尿液分析（結石風險）"],
    reference: "PMC — Congenital PSS Classification and Diagnosis (Vet Sci 2023); ACVS — Portosystemic Shunts; dvm360"
  },

  "congenital-megaesophagus": {
    zh: "先天性巨食道症",
    en: "Congenital Megaesophagus",
    definition: "先天性巨食道症是食道因先天性神經肌肉功能異常導致的瀰漫性擴張和蠕動喪失。食道無法有效將食物推送至胃部，導致食物滯留、反流和吸入性肺炎風險。為犬最常見的食道運動障礙，貓較少見。",
    synonyms: ["先天性食道擴張", "先天性食道無蠕動症"],
    epidemiology: {
      species: "犬為主，貓罕見（除自主神經失調症外）",
      age: "斷奶開始固體食物時發病（3-12週齡）",
      sex: "無明顯性別傾向",
      riskFactors: ["鋼毛獵狐梗（遺傳性，常染色體隱性）", "迷你雪納瑞（遺傳性）", "大丹犬", "德國牧羊犬", "拉布拉多犬", "紐芬蘭犬", "沙皮犬", "愛爾蘭雪達犬"]
    },
    clinicalPresentation: {
      history: ["斷奶後開始反流未消化食物", "反流為被動過程（與嘔吐不同，無腹部用力）", "體重減輕、發育遲緩", "咳嗽（吸入性肺炎）", "食慾正常但營養不良"],
      physicalExam: ["體重不足、消瘦", "頸部食道擴張可觸及", "肺部聽診可能有囉音（吸入性肺炎）", "被毛粗糙", "口臭"]
    },
    pathophysiology: "先天性巨食道症的確切病因尚不完全明瞭，推測為食道神經肌肉接合的發育缺陷。可能涉及迷走神經傳入神經異常或食道肌層（犬的食道全段為橫紋肌）功能缺陷。食道失去正常蠕動功能後呈現瀰漫性擴張（megaesophagus），食物依賴重力通過食道。滯留的食物可發酵產氣進一步擴張食道，也可在反流時被誤吸入氣管引起吸入性肺炎，這是最主要的死亡原因。",
    diagnosis: {
      overview: "胸部X光可見食道擴張，鋇劑造影確認運動功能喪失",
      differentials: ["持續性右主動脈弓（PRAA）", "食道異物", "食道狹窄", "後天性巨食道症（重症肌無力等）"],
      initialDB: ["胸部X光（側位可見食道擴張、氣管背側位移）", "鋇劑食道造影（確認食道運動功能喪失）", "CBC和生化"],
      advanced: ["乙醯膽鹼受體抗體檢測（排除重症肌無力）", "甲狀腺功能（排除甲狀腺機能低下）", "食道內視鏡", "食道壓力測定"]
    },
    treatment: {
      overview: "以營養管理為主，無有效的手術治療方法",
      acute: ["吸入性肺炎治療：廣效抗生素+氧氣支持", "營養支持：高熱量流質飲食", "脫水矯正"],
      chronic: ["垂直姿勢餵食（Bailey chair或高架餵食台）", "餐後維持直立10-30分鐘利用重力排空食道", "少量多餐（每日3-6次）", "高熱量泥狀食物（部分犬反而用固體食物球更好）", "Cisapride促進食道蠕動（效果因個體而異）"]
    },
    prognosis: "先天性巨食道症預後優於後天性，部分幼犬可在成長過程中恢復食道功能（恢復率20-46%）。嚴重者需終身管理餵食方式。吸入性肺炎是主要死亡原因。配合diligent餵食管理，許多犬仍可達到正常壽命。",
    pearls: ["反流（被動、管狀未消化食物）vs嘔吐（主動、腹部用力、含膽汁）是關鍵鑑別", "Bailey chair垂直餵食是最重要的管理措施", "先天性型部分可隨成長恢復，但後天性型恢復率極低", "每隻犬對食物質地的反應不同，需個別試驗最佳餵食方式"],
    diagnosticAlgorithm: {
      title: "先天性巨食道症 診斷流程",
      steps: [
        { step: 1, action: "病史評估", details: "區分反流與嘔吐，確認發病年齡", findings: ["被動反流未消化食物", "斷奶後發病", "液體較固體易通過"] },
        { step: 2, action: "胸部X光", details: "評估食道擴張和併發症", findings: ["食道瀰漫性擴張", "氣管背側位移", "吸入性肺炎徵象"] },
        { step: 3, action: "對比食道攝影", details: "鋇劑吞嚥確認食道蠕動喪失", findings: ["鋇劑滯留於食道", "無有效蠕動波", "排除局部梗阻"] },
        { step: 4, action: "排除繼發原因", details: "排除後天性巨食道症的已知病因", findings: ["AChR抗體陰性（排除MG）", "甲狀腺功能正常", "PRAA排除"] }
      ]
    },
    monitoring: ["體重和體態追蹤", "肺部X光監測吸入性肺炎", "餵食方式調整", "食道功能恢復評估（幼犬定期追蹤）"],
    reference: "VCA Animal Hospitals — Megaesophagus; Merck Veterinary Manual; Veterinary Partner — VIN; Clinician's Brief"
  },

  "tetralogy-of-fallot": {
    zh: "法洛氏四合症",
    en: "Tetralogy of Fallot",
    definition: "法洛氏四合症（TOF）是一種複雜的先天性心臟缺陷，包含四個病理組成：肺動脈狹窄、心室中隔缺損（VSD）、主動脈騎跨（overriding aorta）和右心室肥厚。因右至左分流導致未氧合血進入體循環，產生發紺。約佔犬先天性心臟病的1/4000。",
    synonyms: ["TOF", "法洛四聯症"],
    epidemiology: {
      species: "犬較常見，貓偶見",
      age: "出生即存在，通常6月齡內出現症狀",
      sex: "無明顯性別傾向",
      riskFactors: ["基斯犬（Keeshond）— 遺傳性", "英國鬥牛犬", "可能的遺傳傾向"]
    },
    clinicalPresentation: {
      history: ["運動不耐", "發紺（嘴唇、舌頭、牙齦呈紫藍色）", "運動後暈厥或虛脫", "發育遲緩", "癲癇發作（嚴重缺氧時）"],
      physicalExam: ["黏膜發紺", "心臟聽診：收縮期雜音（肺動脈狹窄）", "發育遲緩體型偏小", "血容比升高（代償性紅血球增多症）", "運動後發紺加重"]
    },
    pathophysiology: "TOF源於胚胎期心臟圓錐幹（conotruncal）發育異常。肺動脈狹窄增加右心室壓力，當右心室壓力超過左心室壓力時，血液通過VSD形成右至左分流（right-to-left shunt），未氧合血直接進入主動脈和體循環。主動脈騎跨使主動脈根部跨坐於VSD上方，同時接收左右心室的血液。右心室因後負荷增加而代償性肥厚。分流量取決於肺動脈狹窄的嚴重程度和VSD大小。代償性紅血球增多症（polycythemia）是對慢性低氧的適應反應，但過度增加使血液黏稠度上升，增加血栓風險。",
    diagnosis: {
      overview: "心臟超音波為確診方法，可同時評估四個病理組成和分流方向",
      differentials: ["艾森曼格症候群", "肺動脈狹窄（單純型）", "心室中隔缺損（單純型）", "其他發紺性先天性心臟病"],
      initialDB: ["心臟聽診", "胸部X光（右心室增大、肺血管紋路減少）", "CBC（紅血球增多症、PCV升高）", "動脈血氧飽和度"],
      advanced: ["心臟超音波（確診：四個組成同時可見）", "心臟CT/MRI", "心導管檢查（壓力測量）"]
    },
    treatment: {
      overview: "以姑息性管理為主，根治性手術（體外循環下修復）在獸醫極少執行",
      acute: ["發紺危象：氧氣支持+鎮靜", "嚴重紅血球增多症（PCV>65-70%）：治療性放血+等量晶體液補充"],
      chronic: ["β-阻斷劑（atenolol或propranolol）減少右心室流出道動態性梗阻", "避免劇烈運動", "姑息性手術：改良Blalock-Taussig分流術（少數中心可執行）", "定期監測PCV，必要時治療性放血"]
    },
    prognosis: "未治療的TOF多數犬在1歲內死亡。β-阻斷劑和限制運動可延長生存期。接受改良Blalock-Taussig分流手術的犬平均存活約7年。貓的TOF極少見，文獻報告有限。",
    pearls: ["TOF是獸醫最常見的發紺性先天性心臟病", "PCV>65%時應考慮治療性放血以降低血液黏稠度", "運動和激動可加重發紺（因增加右至左分流）", "基斯犬為已知遺傳性好發品種"],
    diagnosticAlgorithm: {
      title: "法洛氏四合症 診斷流程",
      steps: [
        { step: 1, action: "理學檢查", details: "評估發紺和心臟雜音", findings: ["黏膜發紺", "收縮期雜音", "運動不耐"] },
        { step: 2, action: "基礎檢查", details: "X光+CBC評估", findings: ["右心室增大", "肺血管紋路減少", "PCV升高（紅血球增多症）"] },
        { step: 3, action: "心臟超音波", details: "確診四個病理組成", findings: ["肺動脈狹窄", "VSD", "主動脈騎跨", "右心室肥厚"] },
        { step: 4, action: "分流評估", details: "評估分流方向和嚴重度", findings: ["右至左分流確認", "肺動脈狹窄梯度", "預後評估"] }
      ]
    },
    monitoring: ["定期PCV監測（每1-3個月）", "心臟超音波追蹤", "運動限制依從性", "發紺程度變化"],
    reference: "Merck Veterinary Manual — Tetralogy of Fallot in Animals; UC Davis CVM; JAVMA 2016 — 31 cases study"
  },

  "primary-ciliary-dyskinesia": {
    zh: "原發性纖毛運動障礙",
    en: "Primary Ciliary Dyskinesia",
    definition: "原發性纖毛運動障礙（PCD）是一組遺傳性纖毛結構和功能異常疾病，導致呼吸道黏膜纖毛清除功能喪失。約50%病例伴有內臟轉位（situs inversus），稱為Kartagener症候群。呈常染色體隱性遺傳。",
    synonyms: ["PCD", "不動纖毛症候群", "Kartagener症候群（伴內臟轉位時）"],
    epidemiology: {
      species: "犬為主，貓極罕見",
      age: "幼年發病（通常<1歲出現慢性呼吸道症狀）",
      sex: "無明顯性別傾向",
      riskFactors: ["古代牧羊犬（Old English Sheepdog）— 已知基因突變", "英國可卡犬", "比格犬", "邊境牧羊犬", "長毛臘腸犬", "近親繁殖"]
    },
    clinicalPresentation: {
      history: ["慢性鼻分泌物（從幼年開始）", "反覆呼吸道感染（鼻竇炎、支氣管炎、肺炎）", "慢性咳嗽（濕咳）", "公犬不孕（精子運動異常）"],
      physicalExam: ["雙側黏液膿性鼻分泌物", "肺部聽診囉音和喘鳴音", "支氣管擴張徵象", "心音右側較強（右位心，50%病例）", "體態可能正常或偏瘦"]
    },
    pathophysiology: "呼吸道上皮纖毛頂端和杯狀細胞分泌的黏液是黏液纖毛清除系統的重要組成。正常時，吸入的病原體和異物黏附於黏液層，由纖毛的協調擺動（escalator action）向口腔方向推送排出。PCD中，纖毛的動力臂蛋白（dynein arm）或微管結構異常導致纖毛不動或運動不協調，黏液清除功能喪失。黏液滯留於呼吸道導致細菌繁殖和慢性感染，反覆感染引起支氣管擴張。同一基因缺陷也影響精子鞭毛運動（導致雄性不孕）和胚胎期節點纖毛（導致內臟左右不對稱，即situs inversus）。",
    diagnosis: {
      overview: "無金標準診斷法，需綜合臨床表現、影像學和組織學",
      differentials: ["慢性鼻竇炎（其他原因）", "支氣管擴張（後天性）", "慢性支氣管炎", "氣道異物"],
      initialDB: ["胸部X光（支氣管擴張型態）", "鼻腔和胸腔X光", "CBC（慢性感染指標）", "鼻分泌物細菌培養"],
      advanced: ["呼吸道黏膜刷取活檢+電子顯微鏡（觀察纖毛超微結構）", "CT掃描（評估支氣管擴張和鼻竇病變）", "基因檢測（古代牧羊犬可做）", "精子運動分析（公犬）"]
    },
    treatment: {
      overview: "無根治方法，以控制感染和促進分泌物排出為主",
      acute: ["急性肺炎：廣效抗生素（基於培養藥敏結果）", "霧化治療（生理食鹽水）促進分泌物排出", "拍痰/物理治療"],
      chronic: ["長期間歇性抗生素治療（根據培養結果）", "定期霧化治療+物理治療", "避免環境刺激物（煙塵、灰塵）", "運動適度促進分泌物排出"]
    },
    prognosis: "PCD無法治癒，為終身管理疾病。積極控制感染和促進分泌物排出可維持良好生活品質。支氣管擴張為不可逆病變，隨時間可能進展。多數犬在適當管理下可維持數年良好生活品質。建議攜帶基因者不做繁殖。",
    pearls: ["右位心（X光心影在右側）+慢性鼻分泌物+反覆肺炎 = 高度懷疑PCD", "約50%PCD伴有situs inversus（Kartagener症候群）", "古代牧羊犬已有基因檢測可用", "公犬不孕可為唯一主訴"],
    diagnosticAlgorithm: {
      title: "原發性纖毛運動障礙 診斷流程",
      steps: [
        { step: 1, action: "臨床懷疑", details: "幼年起慢性呼吸道感染+右位心", findings: ["慢性鼻分泌物", "反覆肺炎", "右位心（50%）"] },
        { step: 2, action: "影像學檢查", details: "X光和CT評估", findings: ["支氣管擴張", "慢性鼻竇炎", "右位心或內臟轉位"] },
        { step: 3, action: "組織學確認", details: "呼吸道黏膜活檢+電子顯微鏡", findings: ["dynein臂缺失", "微管異常", "纖毛方向紊亂"] },
        { step: 4, action: "基因檢測", details: "特定品種可做基因檢測", findings: ["古代牧羊犬CCDC39基因突變", "常染色體隱性遺傳確認"] }
      ]
    },
    monitoring: ["定期胸部X光追蹤支氣管擴張", "呼吸道培養藥敏監測", "體重和生活品質評估", "繁殖建議（攜帶者不繁殖）"],
    reference: "PMC — Siewert-Kartagener's syndrome in a dog; PMC — PCD prevalence in OES; Morrison 1987 — PCD in the Dog (JVIM)"
  },

  "tracheal-hypoplasia": {
    zh: "氣管發育不全",
    en: "Tracheal Hypoplasia",
    definition: "氣管發育不全是一種先天性疾病，因氣管軟骨環異常融合或重疊導致氣管管徑先天性狹窄。常見於短頭種犬，為短頭種氣道症候群（BOAS）的組成之一。英國鬥牛犬發生率最高（約55%）。",
    synonyms: ["先天性氣管狹窄", "Hypoplastic Trachea"],
    epidemiology: {
      species: "犬為主（幾乎僅見於短頭種）",
      age: "先天性，可於任何年齡診斷",
      sex: "無明顯性別傾向",
      riskFactors: ["英國鬥牛犬（55%發生率）", "巴哥犬", "波士頓梗犬", "法國鬥牛犬", "其他短頭種犬"]
    },
    clinicalPresentation: {
      history: ["呼吸困難或呼吸音增大", "運動不耐", "打鼾", "咳嗽", "部分犬無明顯症狀"],
      physicalExam: ["吸氣性喘鳴音", "呼吸音增強", "短頭種特徵性臉部構造", "可能伴有BOAS其他表現（鼻孔狹窄、軟顎過長）", "嚴重者可見發紺"]
    },
    pathophysiology: "正常氣管由C型軟骨環支撐，背側由氣管肌膜（dorsal tracheal membrane）覆蓋。氣管發育不全中，軟骨環異常融合或重疊，環狀結構過度閉合，導致氣管內徑先天性狹窄。氣流通過狹窄氣管時阻力增加，增加呼吸功。此外，狹窄的氣管降低黏液纖毛清除效率，增加呼吸道感染風險。氣管發育不全常與BOAS的其他組成（鼻孔狹窄、軟顎過長、喉囊翻轉）同時存在，多重狹窄加乘呼吸阻力。部分幼犬的氣管發育不全可隨成長部分或完全改善。",
    diagnosis: {
      overview: "胸頸部X光測量氣管直徑與胸廓入口比值即可診斷",
      differentials: ["氣管塌陷", "氣管異物", "氣管腫瘤", "氣管外壓迫"],
      initialDB: ["頸胸部X光（側位）", "氣管直徑/胸廓入口比值（TD/TI ratio）", "氣管直徑/第三肋骨比值"],
      advanced: ["CT掃描（精確測量氣管各段直徑）", "氣管內視鏡", "動態呼吸攝影（排除氣管塌陷）"]
    },
    treatment: {
      overview: "無手術矯正方法，以保守治療和管理BOAS為主",
      acute: ["呼吸窘迫：氧氣支持+鎮靜", "急性感染：抗生素", "短效類固醇減輕氣道腫脹"],
      chronic: ["體重管理（避免肥胖增加呼吸負擔）", "支氣管擴張劑（必要時）", "避免高溫和劇烈運動", "同時矯正BOAS其他組成（鼻孔擴大術、軟顎縮短術）"]
    },
    prognosis: "無併發心臟病或嚴重BOAS的犬，氣管發育不全可能不產生臨床症狀。部分幼犬隨成長氣管可部分改善。合併嚴重BOAS者需同時處理所有氣道狹窄組成。英國鬥牛犬的氣管發育不全最為嚴重但部分可隨成熟改善。",
    pearls: ["英國鬥牛犬超過半數有氣管發育不全", "TD/TI ratio < 0.20 高度提示氣管發育不全", "部分幼犬可隨成長改善，不需急於介入", "氣管發育不全無法手術矯正，重點在管理BOAS"],
    diagnosticAlgorithm: {
      title: "氣管發育不全 診斷流程",
      steps: [
        { step: 1, action: "品種和症狀評估", details: "短頭種犬合併呼吸困難", findings: ["短頭種（特別是英國鬥牛犬）", "呼吸音增大", "運動不耐"] },
        { step: 2, action: "頸胸X光", details: "側位X光測量氣管直徑", findings: ["氣管管徑狹窄", "TD/TI ratio降低", "排除氣管塌陷"] },
        { step: 3, action: "CT掃描", details: "精確評估氣管各段直徑", findings: ["全段或局部氣管狹窄", "軟骨環融合/重疊"] },
        { step: 4, action: "BOAS綜合評估", details: "評估所有短頭種氣道組成", findings: ["鼻孔狹窄程度", "軟顎長度", "喉囊狀態"] }
      ]
    },
    monitoring: ["定期X光追蹤氣管直徑（幼犬）", "體重管理", "呼吸功能評估", "BOAS症狀監測"],
    reference: "PMC — Radiographic tracheal dimensions in brachycephalic breeds; UPEI — Hypoplastic Trachea; Cornell CVM — BOAS"
  },

  "hypoplastic-trachea": {
    zh: "氣管發育不良",
    en: "Hypoplastic Trachea",
    definition: "氣管發育不良是先天性氣管軟骨環發育異常導致的氣管管徑狹窄，與氣管發育不全（tracheal hypoplasia）為同義詞。主要見於短頭種犬，英國鬥牛犬發生率最高。氣管管徑狹窄增加氣道阻力，影響呼吸功能和黏液清除。",
    synonyms: ["氣管發育不全", "Tracheal Hypoplasia"],
    epidemiology: {
      species: "犬為主（短頭種）",
      age: "先天性，任何年齡可發現",
      sex: "無明顯性別傾向",
      riskFactors: ["英國鬥牛犬", "巴哥犬", "波士頓梗犬", "法國鬥牛犬"]
    },
    clinicalPresentation: {
      history: ["呼吸困難", "運動不耐", "打鼾或呼吸音過大", "反覆呼吸道感染", "部分犬無症狀"],
      physicalExam: ["吸氣性喘鳴音", "短頭種臉部特徵", "BOAS相關表現", "嚴重者可見發紺"]
    },
    pathophysiology: "氣管軟骨環在胚胎發育過程中形成異常，環狀結構過度融合或重疊，導致氣管內徑比正常小。氣管直徑減小使氣道阻力按反比第四次方增加（泊肅葉定律），即使輕度狹窄也顯著增加呼吸功。黏液纖毛清除功能因狹窄氣管而降低，增加呼吸道感染易感性。通常與BOAS的其他組成並存，多重氣道狹窄產生加乘效應。",
    diagnosis: {
      overview: "X光測量氣管管徑比值為主要診斷方法",
      differentials: ["氣管塌陷", "氣管內異物", "氣管腫瘤", "氣管外壓迫性病灶"],
      initialDB: ["頸胸X光側位", "氣管直徑/胸廓入口比值測量", "CBC（感染指標）"],
      advanced: ["CT掃描", "氣管內視鏡", "動態螢光透視"]
    },
    treatment: {
      overview: "無手術矯正方法，保守治療和BOAS管理為主",
      acute: ["呼吸窘迫時氧氣支持", "短效類固醇減輕氣道水腫", "急性感染抗生素治療"],
      chronic: ["體重控制", "避免過度運動和高溫環境", "支氣管擴張劑（必要時）", "BOAS手術矯正（鼻孔、軟顎等）"]
    },
    prognosis: "輕度者可能終身無症狀，部分幼犬隨成長改善。合併嚴重BOAS者預後取決於綜合氣道管理。體重控制和避免環境誘因是長期管理關鍵。",
    pearls: ["本病與tracheal-hypoplasia為同義詞，強調不同面向", "體重管理是最重要的保守治療措施", "繁殖選擇應避免嚴重氣管發育不良個體"],
    diagnosticAlgorithm: {
      title: "氣管發育不良 診斷流程",
      steps: [
        { step: 1, action: "品種風險評估", details: "短頭種犬呼吸症狀", findings: ["短頭種犬", "呼吸音增大", "運動不耐"] },
        { step: 2, action: "X光測量", details: "頸胸側位X光氣管直徑", findings: ["TD/TI ratio < 0.20", "氣管全段狹窄"] },
        { step: 3, action: "進階影像", details: "CT或內視鏡精確評估", findings: ["軟骨環異常", "氣管各段直徑"] },
        { step: 4, action: "綜合評估", details: "評估BOAS所有組成", findings: ["鼻孔狹窄", "軟顎過長", "喉囊翻轉"] }
      ]
    },
    monitoring: ["氣管直徑追蹤（幼犬成長期）", "體重管理", "呼吸症狀監測", "BOAS綜合管理"],
    reference: "UPEI — Hypoplastic Trachea; PMC — Radiographic tracheal dimensions; wagwalking.com — Hypoplastic Trachea in Dogs"
  }
};

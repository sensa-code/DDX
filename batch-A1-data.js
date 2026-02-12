// Batch A-1: Emergency/Critical Care — 10 diseases structured data
// Sources: MSD Veterinary Manual, PubMed, VCA, Cornell, Today's Veterinary Practice, JVECC

module.exports = {
  "heatstroke": {
    zh: "熱衰竭/中暑",
    en: "Heatstroke",
    definition: "非發熱性體溫過高（核心體溫>41°C/106°F），因散熱機制失敗導致全身性發炎反應、熱休克蛋白表達異常及多器官功能障礙的危急症候群。若未及時治療可迅速進展為DIC、急性腎損傷及死亡。",
    synonyms: ["熱射病", "熱中風", "Heat Stroke", "Hyperthermia"],
    epidemiology: {
      species: "犬遠較貓常見，短頭犬種為最高風險群",
      age: "任何年齡均可發生，老年犬因心肺代償能力下降風險增加",
      sex: "無明顯性別傾向",
      riskFactors: ["短頭品種（Bulldog、Pug、Boston Terrier、Pekingese）", "肥胖或過重", "厚毛或深色毛髮", "心肺疾病或上呼吸道疾病史", "高溫高濕環境暴露（車內密閉、戶外運動）", "缺乏飲水或遮蔭"]
    },
    clinicalPresentation: {
      history: ["高溫環境暴露或劇烈運動後", "突發虛弱或倒地", "持續喘息不停", "嘔吐或腹瀉", "意識改變（躁動→嗜睡→昏迷）", "車內密閉空間暴露史"],
      physicalExam: ["直腸溫度>41°C（常達42-43°C）", "黏膜充血磚紅色或蒼白泥灰色", "心搏過速", "喘息或呼吸困難", "CRT延長", "點狀出血或瘀斑（DIC徵象）", "肌肉震顫或癲癇發作"]
    },
    pathophysiology: "體溫超過散熱代償能力時，高溫直接導致蛋白質變性和細胞膜損傷。熱休克蛋白（HSP）表達異常，觸發全身性發炎反應（SIRS）。腸道黏膜屏障破壞導致細菌易位和內毒素血症。凝血瀑布過度活化引發DIC，加上橫紋肌溶解釋放肌紅蛋白造成急性腎小管壞死。最終導致多器官功能衰竭（MODS）。",
    diagnosis: {
      overview: "臨床診斷為主：高溫暴露史+核心體溫>41°C+多系統異常。需快速評估多器官受損程度",
      differentials: ["感染性發熱（敗血症）", "癲癇重積狀態", "惡性高熱", "運動性高熱", "甲狀腺風暴"],
      initialDB: ["直腸溫度測量", "CBC（血小板減少、破碎紅血球提示DIC）", "血清生化（BUN/Crea升高、肝酶ALT/AST升高、電解質）", "凝血功能（PT/aPTT/D-dimer/纖維蛋白原）", "血氣分析（代謝性酸中毒）"],
      advanced: ["尿液分析（肌紅素尿、管型）", "乳酸測定（組織灌流指標）", "心電圖（心律不整監測）", "TFAST/腹部超音波（排除其他病因）"]
    },
    treatment: {
      overview: "時間是最關鍵預後因素：緊急降溫+積極輸液+多器官功能支持",
      acute: [
        "立即降溫：室溫水噴灑+風扇對流蒸發散熱（禁用冰水，避免周邊血管收縮阻礙散熱）",
        "降溫目標：直腸溫達39.4°C時停止積極降溫，避免反彈性低體溫",
        "靜脈輸液：室溫等張晶體液（犬60-90 mL/kg/hr shock dose，貓40-60 mL/kg/hr）",
        "氧氣治療：鼻導管或氧氣籠",
        "抗癲癇：Diazepam 0.5-1 mg/kg IV PRN",
        "止吐：Maropitant 1 mg/kg SC/IV q24h",
        "廣效抗生素：考慮腸道細菌易位風險（Ampicillin-sulbactam 或 Cephalosporin）"
      ],
      chronic: [
        "住院監測24-72小時（延遲性AKI和DIC常見）",
        "DIC處理：新鮮冷凍血漿15-20 mL/kg",
        "腎功能支持：持續輸液維持尿量>1-2 mL/kg/hr",
        "康復期避免高溫環境和劇烈運動",
        "長期預後評估（腎功能、神經後遺症）"
      ]
    },
    prognosis: "死亡率約50%，與最高體溫值和高溫持續時間正相關。體溫>42°C且持續>30分鐘者死亡率達50-70%。即時降溫可將死亡率降至<30%。存活者需注意延遲性AKI（24-72小時後）和神經後遺症。",
    pearls: [
      "死亡率與最高體溫及持續時間正相關，早期介入是關鍵",
      "禁用冰水降溫——周邊血管收縮反而阻礙核心散熱",
      "39.4°C時停止積極降溫，避免低體溫反彈",
      "DIC和AKI可能在降溫後24-72小時才顯現，需持續監測",
      "短頭犬種即使輕度體溫升高也可能快速惡化"
    ],
    diagnosticAlgorithm: {
      title: "熱衰竭/中暑 診斷與處置流程",
      steps: [
        { step: 1, action: "緊急評估與降溫", details: "ABCD評估+直腸溫度測量，確認高溫暴露史", findings: ["直腸溫度>41°C", "黏膜磚紅色或泥灰色", "意識改變（躁動→昏迷）", "心搏過速+CRT延長"] },
        { step: 2, action: "多器官功能篩檢", details: "急查CBC/生化/凝血/血氣，評估器官損傷程度", findings: ["血小板<100×10⁹/L（DIC風險）", "ALT/AST顯著升高（肝損傷）", "BUN/Crea升高（AKI）", "代謝性酸中毒+乳酸升高"] },
        { step: 3, action: "凝血功能詳細評估", details: "PT/aPTT/D-dimer/纖維蛋白原/血液抹片", findings: ["PT/aPTT延長", "D-dimer升高", "纖維蛋白原降低", "血液抹片見裂片紅血球（DIC確認）"] },
        { step: 4, action: "穩定化與持續監測", details: "積極輸液+器官支持，72小時密集監測", findings: ["體溫穩定在38-39°C", "尿量>1-2 mL/kg/hr", "凝血指標趨勢改善", "神經狀態評估（延遲性腦損傷）"] }
      ]
    },
    monitoring: ["體溫（每15-30分鐘直到穩定）", "尿量（導尿管監測，目標>1-2 mL/kg/hr）", "凝血功能（PT/aPTT/血小板 q12-24h前72小時）", "腎功能（BUN/Crea/電解質 q12-24h）", "肝功能（ALT/AST/膽紅素）", "神經狀態評估", "心電圖監測"],
    reference: "Bruchim Y, et al. Heat stroke in dogs: A retrospective study. JVECC 2017;27(2):116-127; MSD Veterinary Manual 2023"
  },

  "hypothermia": {
    zh: "低體溫症",
    en: "Hypothermia",
    definition: "核心體溫低於正常範圍（犬<37.5°C/貓<37.8°C）的病理狀態。依嚴重程度分為輕度（36-37.5°C）、中度（34-36°C）和重度（<34°C）。可為原發性（環境暴露）或繼發性（疾病、麻醉、休克）。",
    synonyms: ["低溫症", "體溫過低", "Accidental Hypothermia"],
    epidemiology: {
      species: "犬貓均可發生，小型犬和幼貓風險較高",
      age: "新生幼畜和老年動物最易受影響（體溫調節能力差）",
      sex: "無明顯性別傾向",
      riskFactors: ["新生幼畜（體溫調節中樞未成熟）", "小型或超小型品種（體表面積/體重比大）", "老年動物（代謝率低）", "全身麻醉或鎮靜", "休克或嚴重創傷", "寒冷環境暴露或落水"]
    },
    clinicalPresentation: {
      history: ["寒冷環境暴露", "落水或長時間戶外", "術後恢復期", "新生幼畜分離母體", "創傷或休克後", "長時間未進食（低代謝狀態）"],
      physicalExam: ["直腸溫度低於正常", "輕度：顫抖、嗜睡", "中度：停止顫抖、心搏過緩、瞳孔散大", "重度：僵硬、反射消失、表觀死亡", "黏膜蒼白或發紺", "呼吸淺慢", "心搏過緩"]
    },
    pathophysiology: "核心體溫下降時，初期交感神經代償引起血管收縮和顫抖產熱。溫度降至<34°C後，體溫調節失敗——停止顫抖，血管從收縮轉為擴張，加速核心熱量散失。代謝率每降1°C約下降6%，心肌傳導減慢引發心搏過緩和心律不整。嚴重時出現Osborn波（J波）。<28°C時心室顫動風險極高。凝血功能障礙、血小板功能異常和免疫抑制亦隨溫度降低而惡化。",
    diagnosis: {
      overview: "臨床診斷直接明確：低核心體溫+對應臨床徵象。重點在評估潛在病因和併發症",
      differentials: ["原發性低體溫（環境暴露）", "繼發性低體溫（休克、敗血症、甲狀腺低下）", "麻醉後低體溫", "新生兒低體溫"],
      initialDB: ["直腸溫度（需使用可測低溫的溫度計）", "CBC/生化（評估器官功能）", "血氣分析（代謝性酸中毒）", "血糖（低血糖常見伴發症）", "心電圖（心搏過緩、Osborn波、心律不整）"],
      advanced: ["凝血功能（PT/aPTT延長常見）", "乳酸（灌流不足指標）", "甲狀腺功能（排除甲低作為病因）", "影像學（排除創傷）"]
    },
    treatment: {
      overview: "根據嚴重程度選擇回溫策略：輕度被動回溫，中重度主動核心回溫，目標每小時升溫1-2°C",
      acute: [
        "輕度：被動外部回溫（毛毯包裹、溫暖環境）",
        "中度：主動外部回溫（溫水袋、強制暖氣、Bair Hugger加溫毯）",
        "重度：主動核心回溫（溫熱靜脈輸液40-42°C、溫水腹腔灌洗、溫水灌腸）",
        "靜脈輸液：預溫至40°C的等張晶體液",
        "血糖矯正：50% Dextrose 0.5-1 mL/kg IV（低血糖時）",
        "心律不整處理：需先回溫至>30°C再考慮抗心律不整藥物"
      ],
      chronic: [
        "持續監測直到體溫穩定>37.5°C至少24小時",
        "治療潛在病因（甲狀腺低下、敗血症、休克）",
        "營養支持（恢復代謝功能）",
        "注意「回溫後降低」現象（afterdrop）——周邊冷血回流核心"
      ]
    },
    prognosis: "輕中度低體溫經適當回溫預後良好。重度低體溫（<30°C）即使出現心肺停止，適當治療後仍有完全康復的潛力（\"沒有人是死的，直到溫暖且死亡\"原則）。預後取決於潛在病因、低溫持續時間及併發症嚴重程度。",
    pearls: [
      "體溫<34°C時動物停止顫抖——這是惡化徵兆而非改善",
      "Osborn波（J波）是ECG特徵表現，見於30-34°C",
      "重度低體溫不要急於心肺復甦——先回溫至>30°C",
      "回溫過程中注意afterdrop現象（周邊冷血回流導致核心溫度再降）",
      "貓的回溫需特別注意輸液速率，避免肺水腫"
    ],
    diagnosticAlgorithm: {
      title: "低體溫症 診斷與處置流程",
      steps: [
        { step: 1, action: "體溫評估與分級", details: "使用可測低溫的直腸溫度計，確定嚴重程度", findings: ["輕度36-37.5°C：顫抖、嗜睡", "中度34-36°C：停止顫抖、心搏過緩", "重度<34°C：僵硬、無反射", "需使用專用低溫溫度計"] },
        { step: 2, action: "病因篩查", details: "區分原發性（環境暴露）與繼發性（疾病相關）", findings: ["環境暴露史", "麻醉/手術史", "創傷/休克徵象", "甲狀腺功能低下體徵"] },
        { step: 3, action: "併發症評估", details: "ECG、血氣、血糖、凝血功能", findings: ["ECG：Osborn波、心搏過緩", "代謝性酸中毒", "低血糖", "凝血功能異常"] },
        { step: 4, action: "分級回溫治療", details: "依嚴重程度選擇回溫策略，目標1-2°C/hr", findings: ["輕度→被動回溫", "中度→主動外部回溫", "重度→核心回溫（溫熱輸液/腹腔灌洗）", "監測afterdrop現象"] }
      ]
    },
    monitoring: ["核心體溫（每15-30分鐘）", "心電圖連續監測（心律不整）", "血壓", "血氣與電解質", "血糖（q2-4h）", "尿量", "凝血功能"],
    reference: "Brodeur A, et al. Hypothermia and targeted temperature management in cats and dogs. JVECC 2017;27(2):151-163; MSD Veterinary Manual 2023"
  },

  "hemorrhagic-shock": {
    zh: "出血性休克",
    en: "Hemorrhagic Shock",
    definition: "因急性大量失血導致有效循環血量嚴重不足，組織灌流不足引發細胞缺氧和器官功能障礙的危急狀態。屬於低血容積性休克的亞型，犬失血達總血量30-40%即可致命。",
    synonyms: ["失血性休克", "Hemorrhagic Hypovolemic Shock"],
    epidemiology: {
      species: "犬貓均可發生，犬因創傷和脾臟腫瘤破裂較常見",
      age: "任何年齡，老年犬因脾臟血管腫瘤（血管肉瘤）風險增加",
      sex: "無明顯性別傾向",
      riskFactors: ["外傷（車禍、咬傷、刀傷）", "脾臟腫瘤破裂（血管肉瘤）", "凝血功能障礙（滅鼠藥中毒、DIC）", "手術併發症", "消化道潰瘍出血"]
    },
    clinicalPresentation: {
      history: ["已知創傷史", "突發虛弱或倒地", "腹部膨脹（腹腔內出血）", "已知抗凝血劑暴露", "吐血或黑便", "術後出血"],
      physicalExam: ["心搏過速（犬>140 bpm，貓>220 bpm）", "脈搏微弱或消失", "黏膜蒼白", "CRT延長>2秒", "低血壓（收縮壓<90 mmHg）", "四肢冰冷", "意識混沌或嗜睡"]
    },
    pathophysiology: "急性失血導致靜脈回流減少→心搏出量降低→組織灌流不足。早期代償反應包括：壓力感受器啟動交感神經→心率加快、血管收縮、腎素-血管張力素-醛固酮系統活化以保留水鈉。當失血超過代償能力（犬約30%總血量），進入失代償期：乳酸堆積→代謝性酸中毒→心肌抑制→惡性循環。持續缺氧導致細胞死亡、內皮損傷和全身性發炎反應，最終引發MODS和DIC。",
    diagnosis: {
      overview: "臨床診斷結合血液動力學指標：休克指數（HR/SBP）升高、乳酸升高、PCV/TP進行性下降",
      differentials: ["其他類型休克（心因性、分配性、阻塞性）", "嚴重脫水", "心包積液", "張力性氣胸"],
      initialDB: ["PCV/TP/血液抹片（急診快速評估）", "血壓測量（Doppler或oscillometric）", "乳酸測定", "TFAST/AFAST超音波（腹腔/胸腔積液）", "CBC/生化"],
      advanced: ["凝血功能（PT/aPTT/D-dimer）", "血型（輸血前準備）", "交叉配血試驗", "影像學（定位出血來源）"]
    },
    treatment: {
      overview: "控制出血來源+容積復甦+維持組織氧合。現代概念強調「低容積復甦」和「損害控制手術」",
      acute: [
        "止血：壓迫外傷傷口、腹帶加壓（腹腔出血）、緊急手術",
        "晶體液：初始快速輸注10-20 mL/kg（犬）或5-10 mL/kg（貓）over 15-30 min，評估反應後重複",
        "膠體液：Hetastarch 5 mL/kg（犬）或2-5 mL/kg（貓）bolus",
        "輸血指標：PCV<20%或急性失血>20%血量→pRBC 10-20 mL/kg",
        "新鮮冷凍血漿：15-20 mL/kg（凝血因子補充+膠體壓維持）",
        "低容積復甦策略：MAP目標60-65 mmHg即可（避免稀釋性凝血障礙）"
      ],
      chronic: [
        "持續監測血液動力學穩定性",
        "尋找並處理出血根源（腫瘤切除、器官修復）",
        "鐵劑補充（慢性失血後）",
        "營養支持與恢復"
      ]
    },
    prognosis: "取決於失血量、出血速率和介入時間。失血<20%總血量且及時止血預後良好。失血>40%或合併DIC者死亡率顯著增加。脾臟血管肉瘤破裂即使手術存活，中位存活僅1-3個月。",
    pearls: [
      "犬總血量約80-90 mL/kg，貓約60-70 mL/kg",
      "PCV在急性出血後數小時才開始下降——初始PCV正常不能排除嚴重出血",
      "AFAST可在數分鐘內偵測腹腔積液，比X光更快速",
      "低容積復甦策略（permissive hypotension）可減少稀釋性凝血障礙",
      "貓的輸液復甦劑量約為犬的一半，過量易導致肺水腫"
    ],
    diagnosticAlgorithm: {
      title: "出血性休克 診斷與處置流程",
      steps: [
        { step: 1, action: "快速休克評估", details: "ABCD approach + 休克指數計算", findings: ["心搏過速+脈搏微弱", "黏膜蒼白+CRT延長", "低血壓（MAP<65 mmHg）", "意識改變"] },
        { step: 2, action: "出血來源定位", details: "TFAST/AFAST超音波+PCV/TP/乳酸", findings: ["AFAST陽性（腹腔積液）", "PCV進行性下降", "乳酸>4 mmol/L", "外在出血來源"] },
        { step: 3, action: "容積復甦啟動", details: "分段式輸液復甦+輸血準備", findings: ["晶體液bolus後評估反應", "PCV<20%→啟動輸血", "凝血異常→FFP", "維持MAP 60-65 mmHg"] },
        { step: 4, action: "決定性止血", details: "手術或介入處理出血來源", findings: ["手術適應症評估", "脾臟切除（腫瘤破裂）", "創傷修復", "持續監測48小時"] }
      ]
    },
    monitoring: ["血壓（連續或每15分鐘）", "PCV/TP（每1-2小時急性期）", "乳酸（復甦指標）", "尿量（灌流充足指標 >1-2 mL/kg/hr）", "凝血功能", "心電圖"],
    reference: "Hopper K. Volume resuscitation in the acutely hemorrhaging patient. Front Vet Sci 2021;8:638104; Silverstein DC. Small Animal Critical Care Medicine, 2nd Ed. Saunders, 2014"
  },

  "cardiogenic-shock": {
    zh: "心因性休克",
    en: "Cardiogenic Shock",
    definition: "因心臟幫浦功能嚴重障礙（收縮或舒張功能異常）導致心搏出量不足、組織灌流不全的危急狀態。與低血容積性休克不同，血管內容量正常或增加，但心臟無法有效輸出。",
    synonyms: ["心源性休克", "Pump Failure Shock"],
    epidemiology: {
      species: "犬貓均可發生；犬以DCM和瓣膜疾病為主因，貓以HCM為主因",
      age: "中老年動物較常見，與心臟疾病好發年齡一致",
      sex: "犬DCM好發於大型公犬；貓HCM好發於公貓",
      riskFactors: ["擴張性心肌病（DCM，大型犬）", "肥厚性心肌病（HCM，貓）", "嚴重瓣膜疾病", "心包填塞", "嚴重心律不整", "心肌炎"]
    },
    clinicalPresentation: {
      history: ["呼吸急促/困難進行性加重", "運動不耐或突然虛弱", "已知心臟病史", "咳嗽（犬為主）", "食慾下降", "開口呼吸（貓）"],
      physicalExam: ["心搏過速或心律不整", "脈搏微弱", "肺部囉音（肺水腫）", "心雜音或奔馬律", "頸靜脈怒張", "肝腫大", "黏膜蒼白或發紺", "口鼻血泡沫（嚴重肺水腫）"]
    },
    pathophysiology: "心肌收縮力下降或舒張功能障礙→每搏輸出量減少→心搏出量不足。Frank-Starling機制代償導致前負荷增加（容積過載），但病變心臟無法有效利用。RAAS活化導致鈉水滯留加重充血。肺靜脈壓升高→肺水腫。後負荷增加進一步加重心臟負擔。最終形成惡性循環：低心搏出量→組織缺氧→代謝性酸中毒→心肌進一步抑制。",
    diagnosis: {
      overview: "臨床休克表現+心臟功能障礙證據。關鍵鑑別：液體復甦禁忌，與低血容積性休克治療方向相反",
      differentials: ["低血容積性休克（需仔細區別）", "阻塞性休克（心包填塞、肺栓塞）", "嚴重肺部疾病", "張力性氣胸"],
      initialDB: ["胸腔X光（心臟擴大、肺水腫）", "心臟超音波（FS%降低、室壁運動異常）", "心電圖（心律不整、傳導異常）", "血壓測量（收縮壓<90 mmHg）", "NT-proBNP或cardiac troponin"],
      advanced: ["進階心臟超音波（E/A比值、組織都普勒）", "中心靜脈壓（CVP升高）", "連續血壓監測", "乳酸/血氣分析"]
    },
    treatment: {
      overview: "與低血容積性休克相反——限制輸液、降低前後負荷、改善心肌收縮力。需依據病因選擇策略",
      acute: [
        "氧氣治療（優先穩定呼吸）",
        "利尿劑：Furosemide 2-4 mg/kg IV（犬），1-2 mg/kg IV（貓）PRN",
        "正性肌力藥：Dobutamine 5-15 μg/kg/min CRI（改善收縮力）",
        "血管擴張劑：Nitroglycerin外用或Nitroprusside 1-5 μg/kg/min（降低後負荷）",
        "抗心律不整：依據心律類型選擇（Lidocaine、Diltiazem等）",
        "禁忌：大量快速輸液（會加重肺水腫）"
      ],
      chronic: [
        "口服心衰藥物（Pimobendan 0.25 mg/kg PO q12h、ACE inhibitor）",
        "口服利尿劑維持（Furosemide、Spironolactone）",
        "飲食管理（限鈉）",
        "活動限制與環境壓力控制"
      ]
    },
    prognosis: "急性心因性休克預後嚴峻，住院死亡率高。犬DCM穩定後中位存活3-6個月。貓HCM合併CHF中位存活約18個月。瓣膜疾病經藥物控制後存活相對較長。心包填塞引起者若能排液預後較佳。",
    pearls: [
      "心因性休克禁忌大量快速輸液——這是與低血容積性休克的最關鍵區別",
      "犬有肺囉音+心雜音+頸靜脈怒張=高度懷疑心因性休克",
      "Dobutamine是急性心因性休克首選正性肌力藥",
      "貓的心因性休克常以呼吸窘迫為首發表現，需避免過度stress",
      "測量NT-proBNP有助於區分心源性vs非心源性呼吸困難"
    ],
    diagnosticAlgorithm: {
      title: "心因性休克 診斷與處置流程",
      steps: [
        { step: 1, action: "休克鑑別", details: "評估休克類型——是否有容量過載（充血）證據", findings: ["頸靜脈怒張", "肺部囉音/呼吸困難", "心雜音或奔馬律", "肝腫大"] },
        { step: 2, action: "心臟功能評估", details: "胸腔X光+心臟超音波+ECG", findings: ["心臟擴大（X光VHS增加）", "FS%<25%或E/A異常", "肺水腫（X光肺紋增粗）", "心律不整（ECG）"] },
        { step: 3, action: "穩定呼吸功能", details: "氧氣+利尿劑，禁止大量輸液", findings: ["Furosemide IV→30-60分鐘內尿量增加", "氧氣治療→SpO2改善", "限制輸液速率", "呼吸頻率下降"] },
        { step: 4, action: "心肌支持與病因治療", details: "正性肌力藥+血管擴張劑+抗心律不整", findings: ["Dobutamine CRI→血壓改善", "Pimobendan口服（穩定後）", "針對性抗心律不整", "長期心衰管理計畫"] }
      ]
    },
    monitoring: ["血壓（連續監測）", "呼吸頻率與型態", "心電圖連續監測", "SpO2", "尿量（利尿反應評估）", "胸腔X光（肺水腫變化）", "心臟超音波追蹤"],
    reference: "Silverstein DC. Small Animal Critical Care Medicine, 2nd Ed. Saunders, 2014; Ware WA. Cardiovascular Disease in Small Animal Medicine. Manson, 2011"
  },

  "distributive-shock": {
    zh: "分配性休克",
    en: "Distributive Shock",
    definition: "因全身性血管擴張和血管通透性增加導致有效循環血量嚴重分佈不均的休克類型。包括敗血性休克、過敏性休克和神經性休克。血管內容量正常但血管張力喪失導致組織灌流不足。",
    synonyms: ["血管擴張性休克", "Vasodilatory Shock"],
    epidemiology: {
      species: "犬貓均可發生；敗血性休克為最常見亞型",
      age: "任何年齡，免疫力低下者風險增加",
      sex: "無明顯性別傾向",
      riskFactors: ["敗血症（腹膜炎、肺炎、腎盂腎炎）", "過敏原暴露（疫苗、蜂螫、藥物）", "脊髓損傷（神經性休克）", "嚴重創傷或燒傷", "免疫抑制狀態"]
    },
    clinicalPresentation: {
      history: ["敗血性：感染病灶或手術後發熱", "過敏性：疫苗注射或蟲螫後數分鐘內急性發作", "神經性：脊髓創傷史", "突發虛弱或倒地", "嘔吐或腹瀉", "面部腫脹（過敏性）"],
      physicalExam: ["黏膜充血（高動力期）或蒼白（失代償期）", "CRT<1秒（高動力期）或>2秒（失代償期）", "心搏過速", "脈搏洪大跳躍（高動力期）或微弱（失代償期）", "低血壓（對輸液反應差）", "體溫升高（敗血性）或正常/偏低（過敏性）", "蕁麻疹/血管性水腫（過敏性）"]
    },
    pathophysiology: "敗血性：細菌內毒素和促炎細胞因子（TNF-α、IL-1、IL-6）觸發全身性血管擴張，一氧化氮（NO）大量釋放導致持續性低血壓。血管通透性增加導致血漿外滲。過敏性：IgE介導的肥大細胞脫顆粒，大量組織胺釋放導致血管擴張和通透性增加。犬的過敏性休克主要靶器官為肝臟（門脈系統血管阻力可增加220%），貓則以肺部為主。神經性：脊髓損傷導致交感神經失控→血管張力喪失。",
    diagnosis: {
      overview: "臨床休克表現+特徵性血液動力學模式（高動力期vs失代償期）+病因線索",
      differentials: ["低血容積性休克", "心因性休克", "阻塞性休克", "藥物過量"],
      initialDB: ["血壓測量（低血壓為核心特徵）", "乳酸測定（>4 mmol/L提示組織灌流不足）", "CBC/生化（白血球計數、感染標記）", "血液培養（敗血性休克）", "血氣分析"],
      advanced: ["PCT降鈣素原（敗血症標記）", "心臟超音波（排除心因性）", "TFAST/AFAST", "影像學（定位感染灶）"]
    },
    treatment: {
      overview: "針對病因治療+容積復甦+升壓藥維持灌流壓",
      acute: [
        "過敏性休克首選：Epinephrine 0.01-0.02 mg/kg IM/IV（每5-15分鐘可重複）",
        "晶體液快速輸注：犬20 mL/kg、貓10 mL/kg bolus over 15 min（可重複）",
        "膠體液：Hetastarch 5 mL/kg bolus（血管通透性增加時）",
        "升壓藥（輸液反應不足時）：Norepinephrine 0.1-2 μg/kg/min或Vasopressin 0.5-5 mU/kg/min",
        "Dopamine 5-20 μg/kg/min CRI（次選升壓藥）",
        "敗血性：廣效抗生素（在第一小時內給予）"
      ],
      chronic: [
        "敗血性：source control（感染灶清除/引流/手術）",
        "過敏性：抗組織胺（Diphenhydramine 2 mg/kg IM）+H2 blocker+類固醇",
        "持續升壓藥支持和逐步減量",
        "營養支持與免疫功能恢復"
      ]
    },
    prognosis: "過敏性休克若即時給予Epinephrine預後良好。敗血性休克死亡率40-70%，取決於感染來源是否可控制和器官功能損害程度。神經性休克視脊髓損傷程度而定。所有亞型的預後均與介入速度密切相關。",
    pearls: [
      "分配性休克的血液動力學特徵：高心搏出量+低血管阻力（與心因性休克相反）",
      "犬的過敏性休克靶器官是肝臟（門脈充血），貓是肺部",
      "Epinephrine是過敏性休克唯一的第一線藥物，抗組織胺和類固醇僅為輔助",
      "敗血性休克的黃金一小時：在第一小時內給予抗生素和輸液復甦",
      "如果輸液無法維持血壓→早期開始升壓藥（Norepinephrine首選）"
    ],
    diagnosticAlgorithm: {
      title: "分配性休克 診斷與處置流程",
      steps: [
        { step: 1, action: "休克類型鑑別", details: "評估血液動力學模式和病因線索", findings: ["高動力期：黏膜充血、脈搏洪大、CRT<1秒", "失代償期：黏膜蒼白、脈搏微弱", "病因線索：感染?過敏暴露?脊髓損傷?", "低血壓+輸液反應差=分配性休克"] },
        { step: 2, action: "快速病因評估", details: "區分敗血性/過敏性/神經性", findings: ["發熱+感染灶→敗血性", "過敏原暴露+蕁麻疹→過敏性", "脊髓創傷+心搏過緩→神經性", "血液培養送檢（敗血性）"] },
        { step: 3, action: "病因導向治療", details: "針對亞型給予第一線治療", findings: ["過敏性→Epinephrine IM/IV", "敗血性→廣效抗生素+輸液", "神經性→輸液+升壓藥", "所有亞型：MAP目標≥65 mmHg"] },
        { step: 4, action: "升壓藥與器官支持", details: "輸液反應不足時啟動升壓藥", findings: ["Norepinephrine首選升壓藥", "Vasopressin作為附加", "乳酸清除率作為復甦指標", "source control（敗血性）"] }
      ]
    },
    monitoring: ["血壓（連續監測，MAP目標≥65 mmHg）", "乳酸（復甦指標，q2-4h）", "CVP（容量狀態）", "尿量（>1-2 mL/kg/hr）", "體溫", "血液培養追蹤（敗血性）", "心電圖"],
    reference: "Silverstein DC. Small Animal Critical Care Medicine, 2nd Ed. Saunders, 2014; Pachtinger G. Distributive Shock. Clinician's Brief 2019"
  },

  "hypovolemic-shock": {
    zh: "低血容積性休克",
    en: "Hypovolemic Shock",
    definition: "因血管內容量嚴重不足導致心搏出量降低、組織灌流不全的休克類型。可因失血（出血性）或非出血性體液喪失（嚴重嘔吐、腹瀉、第三間隙積液、燒傷）引起。是小動物急診中最常見的休克類型。",
    synonyms: ["容積不足性休克", "Volume Depletion Shock"],
    epidemiology: {
      species: "犬貓均常見，是最常見的休克類型",
      age: "幼年和老年動物代償能力差，風險較高",
      sex: "無明顯性別傾向",
      riskFactors: ["創傷", "嚴重嘔吐腹瀉（腸胃炎、腸阻塞）", "第三間隙體液喪失（腹膜炎、胰臟炎）", "嚴重燒傷", "大量出血（手術、腫瘤破裂）"]
    },
    clinicalPresentation: {
      history: ["已知體液喪失病因（嘔吐、腹瀉、創傷、出血）", "進行性虛弱", "食慾廢絕", "尿量減少", "意識改變"],
      physicalExam: ["心搏過速", "脈搏微弱細速", "黏膜蒼白或灰白", "CRT延長>2秒", "皮膚彈性降低（脫水）", "低血壓（收縮壓<90 mmHg）", "四肢冰冷", "嗜睡或昏迷"]
    },
    pathophysiology: "血管內容量減少→靜脈回流降低→前負荷下降→每搏輸出量降低→心搏出量不足。代償反應：壓力感受器活化→交感神經興奮→心率增加+血管收縮+腎素-血管張力素-醛固酮系統活化。ADH釋放促進水分滯留。代償失敗後→組織灌流不足→無氧代謝→乳酸堆積→代謝性酸中毒→心肌抑制→不可逆休克。",
    diagnosis: {
      overview: "臨床休克表現+明確體液喪失病史。PCV/TP、乳酸、血壓為核心評估指標",
      differentials: ["心因性休克（容積過載而非不足）", "分配性休克（血管擴張性）", "阻塞性休克（心包填塞、GDV）", "嚴重脫水（尚未達休克）"],
      initialDB: ["PCV/TP（快速評估）", "血壓測量", "乳酸測定", "電解質+血糖", "BUN/Crea（腎灌流評估）"],
      advanced: ["血氣分析（酸鹼平衡）", "TFAST/AFAST超音波（腔體積液）", "凝血功能", "CVP測量（指導輸液）"]
    },
    treatment: {
      overview: "快速容積復甦+治療潛在病因。輸液速率和種類依據脫水/出血嚴重程度調整",
      acute: [
        "等張晶體液：犬shock dose 60-90 mL/kg（分1/4劑量bolus，每次評估反應），貓40-60 mL/kg",
        "快速輸液bolus：犬20-25 mL/kg over 15-30 min，貓10-20 mL/kg over 15-30 min",
        "膠體液：Hetastarch 5 mL/kg bolus（低蛋白或持續低血壓時）",
        "高張鹽水：7.5% NaCl 3-5 mL/kg over 5-10 min（快速擴容，出血性低容積）",
        "輸血：PCV<20%（急性出血）→pRBC 10-20 mL/kg",
        "電解質矯正：低鉀血症、低鈣血症等"
      ],
      chronic: [
        "治療潛在病因（止血、止瀉、手術）",
        "維持輸液（維持需求量+持續喪失量+脫水矯正量）",
        "營養支持（早期腸道營養）",
        "逐步減少輸液速率"
      ]
    },
    prognosis: "輕中度低血容積性休克經適當輸液復甦預後良好。重度休克（失代償期）且合併多器官功能障礙者死亡率顯著增高。預後取決於病因可逆性、介入時間及器官損傷程度。乳酸清除率是重要預後指標。",
    pearls: [
      "低血容積性休克是小動物急診最常見休克類型，輸液是基石治療",
      "犬的shock dose晶體液90 mL/kg、貓44-60 mL/kg——但不要一次全給，分1/4劑量逐步評估",
      "高張鹽水可快速擴容但效果短暫（30-60分鐘），必須後續接等張晶體液",
      "貓的輸液復甦要更保守——過量易導致肺水腫",
      "乳酸清除率（每2小時下降>50%）比單一數值更能預測預後"
    ],
    diagnosticAlgorithm: {
      title: "低血容積性休克 診斷與處置流程",
      steps: [
        { step: 1, action: "休克辨識與分級", details: "評估灌流指標：HR、脈搏品質、CRT、黏膜、血壓、意識", findings: ["代償期：心搏過速+黏膜正常+CRT正常", "早期失代償：心搏過速+黏膜蒼白+CRT延長", "晚期失代償：心搏過緩+黏膜灰白+低血壓", "乳酸>4 mmol/L提示組織灌流不足"] },
        { step: 2, action: "病因評估", details: "判斷出血性vs非出血性體液喪失", findings: ["PCV/TP同步下降→出血性", "PCV正常+TP下降→蛋白喪失", "病史：嘔吐/腹瀉→非出血性", "AFAST→腹腔/胸腔積液"] },
        { step: 3, action: "容積復甦", details: "分段式bolus輸液+評估反應", findings: ["晶體液1/4 shock dose→15 min後評估", "HR下降+BP改善=正向反應", "無反應→重複bolus或加膠體", "PCV<20%→輸血準備"] },
        { step: 4, action: "持續治療與監測", details: "維持灌流+治療病因+監測併發症", findings: ["乳酸q2h追蹤清除率", "尿量>1-2 mL/kg/hr", "MAP≥65 mmHg", "治療潛在病因"] }
      ]
    },
    monitoring: ["血壓（每15-30分鐘或連續）", "乳酸（q2-4h，追蹤清除率）", "PCV/TP（q2-4h急性期）", "尿量（>1-2 mL/kg/hr）", "心率與脈搏品質", "電解質與血糖", "體重（輸液過量指標）"],
    reference: "Silverstein DC. Small Animal Critical Care Medicine, 2nd Ed. Saunders, 2014; Merck Veterinary Manual: Fluid Resuscitation Plan 2023"
  },

  "near-drowning": {
    zh: "溺水救治",
    en: "Near-Drowning (Submersion Injury)",
    definition: "因浸沒或沈入液體中導致呼吸功能損害的急症。水分吸入造成肺表面活性物質稀釋和失活、支氣管痙攣、肺泡-毛細血管膜通透性增加及非心因性肺水腫。「二次溺水」可在初始事件後數小時至數天出現。",
    synonyms: ["溺水", "浸沒傷害", "Submersion Injury", "Drowning"],
    epidemiology: {
      species: "犬較貓常見（犬更頻繁接觸水域），貓溺水預後更差",
      age: "幼年動物和老年動物風險較高",
      sex: "無明顯性別傾向",
      riskFactors: ["無人看管的泳池接觸", "自然水域暴露（河流、湖泊、海洋）", "癲癇病史（水中發作）", "冬季冰面墜入", "短頭犬種（泳技差）"]
    },
    clinicalPresentation: {
      history: ["水中浸沒事件", "發現時在水中或水邊", "咳嗽或嘔吐水", "呼吸困難", "可能有短暫無意識", "事件後短期看似正常（二次溺水前兆）"],
      physicalExam: ["呼吸困難/呼吸窘迫", "肺部囉音/濕囉音", "低體溫（常見併發症）", "心搏過速或心搏過緩（重度低溫）", "黏膜發紺", "意識改變（嗜睡至昏迷）", "口鼻泡沫樣分泌物"]
    },
    pathophysiology: "水分吸入→肺表面活性物質（surfactant）稀釋和功能失活→肺泡塌陷（肺不張）。肺泡-毛細血管膜損傷→通透性增加→非心因性肺水腫。支氣管痙攣加重通氣障礙。淡水吸入→肺泡液體快速吸收入血→血液稀釋→電解質紊亂。海水吸入→高滲液吸引組織液入肺→更嚴重肺水腫。低氧血症→多器官損傷。低體溫為常見併發症但亦有神經保護效果。",
    diagnosis: {
      overview: "基於浸沒事件史+呼吸窘迫+影像學表現。需高度警覺「二次溺水」延遲性肺水腫",
      differentials: ["其他原因肺水腫（心因性）", "吸入性肺炎", "異物吸入", "ARDS"],
      initialDB: ["SpO2/血氣分析（低氧血症程度）", "胸腔X光（肺水腫、肺不張）", "肺部超音波（B-lines表示肺水腫）", "直腸溫度（低體溫評估）", "CBC/生化/電解質"],
      advanced: ["連續胸腔X光（監測二次溺水）", "心電圖（心律不整、低溫相關）", "凝血功能", "血液培養（吸入污水後感染風險）"]
    },
    treatment: {
      overview: "氧氣治療為基石+回溫+支持療法。必須監測至少24-48小時以偵測延遲性肺水腫",
      acute: [
        "確保氣道通暢（清除口腔異物和水分）",
        "100%氧氣治療（鼻導管、氧氣籠或插管機械通氣）",
        "嚴重低氧：氣管插管+正壓通氣（PEEP 5-10 cmH2O）",
        "低體溫回溫（參見低體溫症處置）",
        "輸液治療：審慎給予（避免加重肺水腫），等張晶體液維持",
        "支氣管擴張劑：Terbutaline 0.01 mg/kg SC（支氣管痙攣時）"
      ],
      chronic: [
        "住院監測至少24-48小時（二次溺水可延遲出現）",
        "連續SpO2/血氣監測",
        "抗生素（若吸入污水：Amoxicillin-clavulanate或Fluoroquinolone）",
        "肺部物理治療（叩擊、姿位引流）"
      ]
    },
    prognosis: "犬的存活率約72%（文獻報告18/25），貓的預後較差（0/3存活的報告）。淡水溺水較海水溺水預後略佳。低體溫可能具神經保護效果。延遲性（二次）溺水是重要死因，需住院監測至少48小時。",
    pearls: [
      "「二次溺水」可在初始事件後數小時至數天出現——必須住院監測≥48小時",
      "肺部超音波B-lines比X光更即時且可重複監測肺水腫程度",
      "淡水vs海水對治療策略影響不大，兩者都會破壞surfactant",
      "不要嘗試倒掛動物「倒水」——無效且浪費時間",
      "低體溫本身可能提供神經保護效果，回溫不宜過急"
    ],
    diagnosticAlgorithm: {
      title: "溺水救治 診斷與處置流程",
      steps: [
        { step: 1, action: "緊急評估與氣道確保", details: "ABCD approach，清除口腔異物和水分", findings: ["呼吸型態評估", "SpO2測量（<94%需氧氣）", "體溫測量（低體溫常見）", "意識狀態評估"] },
        { step: 2, action: "氧合與呼吸支持", details: "氧氣治療，嚴重者機械通氣", findings: ["鼻導管O2→SpO2目標>94%", "嚴重低氧→插管+PEEP", "肺部聽診（濕囉音程度）", "支氣管痙攣→擴張劑"] },
        { step: 3, action: "影像與實驗室評估", details: "胸腔X光/肺超音波+血液檢查", findings: ["肺水腫範圍（X光）", "B-lines數量（肺超音波）", "血氣：低氧血症程度", "電解質紊亂"] },
        { step: 4, action: "延遲性併發症監測", details: "住院48小時監測二次溺水", findings: ["連續SpO2監測", "每6-12小時胸腔X光或肺超音波", "體溫穩定化", "感染徵象監測"] }
      ]
    },
    monitoring: ["SpO2/血氣分析（連續或q2-4h）", "呼吸頻率與型態", "胸腔X光/肺超音波（q6-12h前48小時）", "體溫（回溫監測）", "電解質", "神經狀態"],
    reference: "Nemi C, et al. Noncardiogenic pulmonary edema in dogs and cats. JVECC 2023;33(3); Today's Veterinary Practice: Environmental Lung Injuries 2020"
  },

  "smoke-inhalation": {
    zh: "煙霧吸入傷害",
    en: "Smoke Inhalation Injury",
    definition: "因火災或燃燒環境中吸入煙霧導致的複合性呼吸道損傷，包括：(1)熱損傷（上呼吸道灼傷），(2)化學損傷（有毒氣體腐蝕下呼吸道），(3)全身性中毒（一氧化碳和氰化物導致組織缺氧）。可伴隨皮膚燒傷。",
    synonyms: ["煙害吸入", "火災吸入傷害", "Smoke Inhalation", "Inhalation Injury"],
    epidemiology: {
      species: "犬貓均可發生；貓因躲藏習性在火災中更難救出",
      age: "任何年齡",
      sex: "無明顯性別傾向",
      riskFactors: ["住宅火災", "車庫或密閉空間燃燒", "短頭犬種（呼吸道更脆弱）", "既有呼吸道疾病", "幼年或老年動物（逃生能力差）"]
    },
    clinicalPresentation: {
      history: ["火災現場救出", "密閉空間煙霧暴露", "咳嗽和呼吸困難", "口鼻周圍燒焦或煤灰", "面部或體表燒傷", "意識改變"],
      physicalExam: ["呼吸困難/呼吸窘迫", "口鼻黏膜充血或燒傷", "鼻腔和口腔煤灰沉積", "肺部囉音或哮鳴音", "黏膜櫻桃紅（CO中毒）或發紺", "角膜水腫（熱/化學損傷）", "體表燒傷"]
    },
    pathophysiology: "煙霧傷害分三個機制：(1)熱損傷：主要影響上呼吸道（聲門以上），因為空氣散熱效率高保護了下呼吸道，但蒸氣可達下呼吸道。引起黏膜水腫和氣道阻塞。(2)化學損傷：燃燒產物（醛類、酸類、氨）直接腐蝕呼吸道上皮，破壞黏膜纖毛清除機制，引發化學性肺炎和ARDS。(3)全身性中毒：一氧化碳（CO）與血紅蛋白結合力為O₂的200倍，形成碳氧血紅蛋白（COHb）→組織缺氧。氰化物（HCN）抑制線粒體細胞色素c氧化酶→有氧代謝停止。",
    diagnosis: {
      overview: "基於煙霧暴露史+呼吸道症狀。CO-oximetry是確診CO中毒的關鍵。呼吸道損傷程度可能在24-72小時後才完全顯現",
      differentials: ["其他原因呼吸窘迫", "過敏性支氣管炎", "吸入性肺炎", "ARDS（其他病因）"],
      initialDB: ["SpO2/血氣分析（注意：傳統脈搏血氧儀無法區分COHb）", "CO-oximetry（碳氧血紅蛋白濃度）", "胸腔X光（初期可能正常，24-48小時後出現浸潤）", "CBC/生化", "乳酸測定（升高提示氰化物中毒或灌流不足）"],
      advanced: ["支氣管鏡檢查（評估氣道損傷程度）", "連續胸腔X光（48-72小時監測）", "氰化物濃度（若可用）", "心電圖（心肌缺氧/CO中毒）"]
    },
    treatment: {
      overview: "100%氧氣為基石治療（加速CO排除+改善組織氧合）。氣道管理和支持療法。懷疑氰化物中毒立即給予解毒劑",
      acute: [
        "100%氧氣治療（CO半衰期在室內空氣中250分鐘→100%O₂下30-40分鐘）",
        "氣道管理：插管（嚴重上呼吸道水腫時需緊急氣切）",
        "支氣管擴張劑：Albuterol霧化或Aminophylline 5-10 mg/kg IV",
        "氰化物解毒劑：Hydroxocobalamin 70 mg/kg IV（首選）或Sodium thiosulfate",
        "輸液治療：審慎給予，避免加重肺水腫",
        "Nebulization：生理鹽水霧化+叩擊排痰"
      ],
      chronic: [
        "住院監測48-72小時（呼吸道損傷延遲表現）",
        "廣效抗生素（若有證據顯示二次感染）",
        "燒傷傷口照護",
        "肺部物理治療（叩擊、姿位引流、鼓勵咳嗽）"
      ]
    },
    prognosis: "輕度煙霧吸入經氧氣治療預後良好。中重度呼吸道損傷預後取決於ARDS發展程度和併發症。伴隨嚴重皮膚燒傷（>50%體表面積）者預後不良。呼吸道損傷的完整嚴重程度可能在48-72小時後才顯現。",
    pearls: [
      "傳統脈搏血氧儀SpO2會被CO中毒「騙」——讀數可能正常但實際嚴重缺氧",
      "CO半衰期：室內空氣250分鐘→100% O₂ 30-40分鐘→高壓氧15-20分鐘",
      "呼吸道損傷程度在初始評估時可能被低估——需48-72小時持續監測",
      "乳酸不明原因升高+煙霧暴露→高度懷疑氰化物中毒→不需等確認就給Hydroxocobalamin",
      "黏膜櫻桃紅色是CO中毒特徵但並非總是出現"
    ],
    diagnosticAlgorithm: {
      title: "煙霧吸入傷害 診斷與處置流程",
      steps: [
        { step: 1, action: "緊急評估與氧氣治療", details: "確認煙霧暴露史，立即給予100%氧氣", findings: ["口鼻煤灰沉積", "呼吸困難程度評估", "黏膜顏色（櫻桃紅=CO中毒）", "體表燒傷評估"] },
        { step: 2, action: "CO/氰化物評估", details: "CO-oximetry+乳酸測定", findings: ["COHb>10%確認CO中毒", "乳酸不明原因升高→懷疑氰化物", "SpO2不可靠（假正常）", "立即Hydroxocobalamin（懷疑HCN）"] },
        { step: 3, action: "呼吸道評估", details: "胸腔X光+肺部聽診+氣道評估", findings: ["初期X光可能正常", "上呼吸道水腫→需準備氣切", "下呼吸道：哮鳴音/囉音", "支氣管鏡（可行時）"] },
        { step: 4, action: "延遲性損傷監測", details: "住院48-72小時密集監測", findings: ["連續胸腔X光（q12-24h）", "ARDS發展監測", "呼吸功能趨勢", "二次感染徵象"] }
      ]
    },
    monitoring: ["SpO2（注意CO中毒時不可靠）+CO-oximetry", "呼吸頻率與型態", "胸腔X光（q12-24h前72小時）", "血氣分析", "乳酸", "體溫", "燒傷傷口狀態"],
    reference: "Merck Veterinary Manual: Smoke Inhalation Injury 2023; Lee JA. Smoke Inhalation in Veterinary Patients. Vet Clin N Am 2024"
  },

  "electrocution": {
    zh: "觸電傷害",
    en: "Electrocution (Electrical Injury)",
    definition: "因接觸電源（最常見為咬電線）導致的組織損傷和全身性效應。主要併發症包括非心因性肺水腫（神經源性）、心律不整、口腔燒傷和心肺驟停。幼年動物因好奇咬嚼電線為最常見情境。",
    synonyms: ["電擊傷", "電傷害", "Electrical Injury", "Electric Shock"],
    epidemiology: {
      species: "犬貓均可發生，幼犬幼貓因咬電線最常見",
      age: "幼年動物為最高風險群（好奇心驅使咬嚼電線）",
      sex: "無明顯性別傾向",
      riskFactors: ["幼年動物（<1歲）好奇咬電線", "室內電線暴露", "假期裝飾燈串", "咬嚼行為（出牙期）", "戶外電線或閃電擊中（罕見）"]
    },
    clinicalPresentation: {
      history: ["被發現咬電線或靠近電源", "突然尖叫或驚嚇", "口腔發現燒傷痕跡", "呼吸困難", "倒地或短暫失去意識", "口腔流涎或拒食"],
      physicalExam: ["口腔燒傷（嘴唇、舌頭、腭部灰白色或焦黑壞死斑）", "呼吸困難（肺水腫）", "肺部囉音或濕囉音", "心律不整", "黏膜蒼白或發紺", "口鼻粉紅色泡沫（肺水腫）", "肌肉僵硬或震顫"]
    },
    pathophysiology: "電流通過組織時產生熱效應導致局部燒傷。低壓交流電（家用110-220V）主要危害為：(1)神經源性肺水腫：電流刺激引發大量兒茶酚胺釋放→肺微血管壓力急劇升高→肺泡-毛細血管膜損傷→非心因性肺水腫（可延遲12-36小時出現）。(2)心律不整：電流直接影響心臟傳導系統，可引發心室顫動或心搏停止。(3)口腔組織壞死：電流入口處（通常為嘴唇-腭部接觸電線處）產生局部凝固性壞死。",
    diagnosis: {
      overview: "基於電線咬嚼或電源接觸史+口腔燒傷+呼吸窘迫。需持續監測12-36小時以偵測延遲性肺水腫",
      differentials: ["其他原因口腔潰瘍（化學灼傷、自體免疫）", "心因性肺水腫", "過敏性反應", "中毒"],
      initialDB: ["胸腔X光（肺水腫——初期可能正常）", "心電圖（心律不整）", "SpO2/血氣分析", "CBC/生化（器官損傷評估）"],
      advanced: ["連續胸腔X光（延遲性肺水腫可在12-36小時出現）", "心臟超音波（排除心因性肺水腫）", "肝腎功能追蹤", "心電圖連續監測24小時"]
    },
    treatment: {
      overview: "支持療法為主：氧氣治療+肺水腫處理+心律不整控制+口腔傷口照護",
      acute: [
        "氧氣治療（鼻導管或氧氣籠）",
        "肺水腫處理：Furosemide 2-4 mg/kg IV（犬），1-2 mg/kg IV（貓）",
        "嚴重呼吸窘迫：氣管插管+正壓通氣",
        "心律不整：Lidocaine 2 mg/kg IV bolus（犬VPC/VT），持續25-80 μg/kg/min CRI",
        "疼痛管理：Buprenorphine 0.01-0.02 mg/kg IV/IM",
        "口腔燒傷沖洗：0.12% Chlorhexidine口腔沖洗"
      ],
      chronic: [
        "住院監測12-36小時（延遲性肺水腫）",
        "口腔傷口長期照護（軟食、抗生素覆蓋感染）",
        "口腔壞死組織可能在1-2週後脫落需清創",
        "嚴重口腔缺損可能需重建手術"
      ]
    },
    prognosis: "輕度觸電（口腔燒傷為主）預後良好，口腔傷口通常2-3週癒合。中度（併發肺水腫）經適當氧氣和利尿劑治療後多能恢復，神經源性肺水腫通常12-24小時開始消退。嚴重（心肺驟停或大面積燒傷）預後較差。貓及時就醫者預後通常良好。",
    pearls: [
      "非心因性肺水腫可延遲12-36小時出現——即使初期X光正常也需住院監測",
      "口腔燒傷是觸電的「指紋」——灰白色凝固壞死斑見於嘴唇或腭部",
      "神經源性肺水腫機制：兒茶酚胺風暴→肺微血管壓力驟升",
      "壞死組織脫落可能在1-2週後發生，可能導致口鼻瘻管",
      "假期期間（聖誕燈串）是幼犬幼貓觸電高峰期"
    ],
    diagnosticAlgorithm: {
      title: "觸電傷害 診斷與處置流程",
      steps: [
        { step: 1, action: "初始評估與穩定", details: "ABCD approach + 確認電源暴露史", findings: ["口腔燒傷檢查", "呼吸型態評估", "心律評估", "意識狀態"] },
        { step: 2, action: "心肺功能評估", details: "胸腔X光+ECG+SpO2", findings: ["X光：肺水腫（可能初期正常）", "ECG：心律不整類型", "SpO2下降", "心臟超音波排除心因性"] },
        { step: 3, action: "急性治療", details: "氧氣+利尿劑+抗心律不整", findings: ["Furosemide→肺水腫改善", "Lidocaine→VPC控制", "氧氣治療→SpO2改善", "疼痛管理（口腔燒傷）"] },
        { step: 4, action: "延遲性併發症監測", details: "住院12-36小時監測延遲性肺水腫", findings: ["連續X光q12h", "肺水腫通常12-24h消退", "口腔壞死組織追蹤（1-2週）", "心律監測24小時"] }
      ]
    },
    monitoring: ["胸腔X光（q12h前36小時）", "心電圖連續監測24小時", "SpO2", "呼吸頻率", "口腔傷口狀態", "食慾與進食能力"],
    reference: "MSPCA-Angell: Electrical Cord Injury 2023; BMC Vet Res: Pulmonary edema secondary to electrocution 2024; Merck Veterinary Manual 2023"
  },

  "crush-injury": {
    zh: "壓砸傷",
    en: "Crush Injury / Crush Syndrome",
    definition: "因長時間壓迫導致肌肉組織缺血壞死，壓力解除後釋放大量肌紅蛋白、鉀離子及其他細胞內容物入血，引發橫紋肌溶解症和全身性「再灌流傷害」。主要併發症為急性腎損傷（肌紅蛋白腎毒性）和致命性高鉀血症。",
    synonyms: ["壓碾傷", "擠壓症候群", "Crush Syndrome", "Traumatic Rhabdomyolysis"],
    epidemiology: {
      species: "犬較貓常見（犬更常暴露於車禍和大型物體壓迫）",
      age: "任何年齡，戶外活動頻繁者風險較高",
      sex: "無明顯性別傾向",
      riskFactors: ["車禍（最常見原因）", "建築物倒塌", "重物墜落壓迫", "地震等自然災害", "大型動物踩踏"]
    },
    clinicalPresentation: {
      history: ["已知壓迫/創傷事件", "被困於重物下", "車禍後肢體腫脹", "解除壓迫後急性惡化（paradoxical）", "深色（可樂色）尿液", "患肢極度疼痛"],
      physicalExam: ["受壓肢體嚴重腫脹、硬實", "肌肉觸診極度疼痛", "皮下瘀傷", "深色尿液（肌紅蛋白尿）", "心搏過速或心律不整（高鉀血症）", "休克徵象（蒼白、CRT延長、低血壓）", "受壓區域遠端脈搏減弱"]
    },
    pathophysiology: "壓迫期：持續壓迫→肌肉缺血→ATP耗竭→細胞膜Na⁺/K⁺-ATPase失能→細胞內鉀、磷、肌紅蛋白累積。解壓（再灌流）期：壓力解除後缺血組織再灌流→大量鉀離子、肌紅蛋白、磷酸鹽、尿酸和乳酸釋入循環。肌紅蛋白在酸性尿液中沉積於腎小管→急性腎小管壞死（AKI發生率達人醫報告的50%）。高鉀血症→致命性心律不整。自由基和炎性介質造成全身性再灌流傷害。",
    diagnosis: {
      overview: "基於壓迫創傷史+肌紅蛋白尿+CK顯著升高。需緊急評估鉀離子和腎功能",
      differentials: ["運動性橫紋肌溶解（無壓迫史）", "藥物性肌病", "熱衰竭伴橫紋肌溶解", "蛇咬傷引起的肌壞死"],
      initialDB: ["CK（肌酸激酶，常>10,000 U/L，可達數十萬）", "電解質（緊急鉀離子——高鉀可致命）", "BUN/Crea（AKI評估）", "尿液分析（肌紅蛋白尿→深色尿、潛血陽性但無RBC）", "心電圖（高鉀血症心律變化）"],
      advanced: ["血氣分析（代謝性酸中毒）", "磷酸鹽/鈣離子", "凝血功能（DIC風險）", "影像學（評估骨折和軟組織損傷）"]
    },
    treatment: {
      overview: "關鍵：壓力解除前即開始輸液！積極輸液稀釋肌紅蛋白+鹼化尿液+控制高鉀血症",
      acute: [
        "積極靜脈輸液：0.9% NaCl 4-6 mL/kg/hr（解壓前開始，維持尿量>2 mL/kg/hr）",
        "尿液鹼化：NaHCO₃ 1-2 mEq/kg IV慢速（目標尿pH>6.5，防止肌紅蛋白沉積）",
        "高鉀血症處理：Regular Insulin 0.25-0.5 U/kg IV + Dextrose 50% 1-2 g/U insulin",
        "Calcium gluconate 10% 0.5-1.5 mL/kg IV緩慢（心肌保護，ECG監測）",
        "Mannitol 0.5-1 g/kg IV over 20 min（利尿+自由基清除）",
        "止痛：Methadone 0.1-0.3 mg/kg IV或Fentanyl CRI 2-5 μg/kg/hr"
      ],
      chronic: [
        "持續輸液維持尿量目標>2 mL/kg/hr",
        "腎功能支持（必要時血液透析）",
        "壞死組織清創或截肢（嚴重肢體壓砸）",
        "營養支持與復健"
      ]
    },
    prognosis: "輕度壓砸傷（小面積、短時間壓迫）經積極輸液預後良好。廣泛肌肉壞死合併AKI者預後較差。高鉀血症是最急性致命風險。文獻報告犬經間歇性血液透析治療橫紋肌溶解合併AKI可完全恢復。早期積極輸液是改善預後的關鍵。",
    pearls: [
      "壓力解除是最危險的時刻——再灌流傷害可致急性高鉀血症和心停止",
      "理想的做法是在解壓前就開始輸液（pre-rescue fluid resuscitation）",
      "CK>10,000 U/L高度提示橫紋肌溶解，>100,000 U/L預示嚴重AKI風險",
      "尿液潛血試紙陽性但鏡檢無紅血球→肌紅蛋白尿（非血尿）",
      "尿液鹼化（pH>6.5）可減少肌紅蛋白在腎小管沉積"
    ],
    diagnosticAlgorithm: {
      title: "壓砸傷/壓砸症候群 診斷與處置流程",
      steps: [
        { step: 1, action: "現場評估與輸液", details: "確認壓迫創傷史，解壓前開始輸液", findings: ["受壓時間和範圍評估", "立即建立靜脈通路", "0.9% NaCl 4-6 mL/kg/hr開始", "解壓後密切監測血壓和心律"] },
        { step: 2, action: "高鉀血症緊急評估", details: "ECG+急查電解質+CK", findings: ["ECG：高尖T波→帳篷狀T波→QRS增寬", "K⁺>6.0 mEq/L需緊急處理", "CK顯著升高（>10,000 U/L）", "肌紅蛋白尿（深色尿）"] },
        { step: 3, action: "腎保護策略", details: "積極輸液+尿液鹼化+利尿", findings: ["尿量目標>2 mL/kg/hr", "NaHCO₃鹼化尿液（pH>6.5）", "Mannitol利尿", "BUN/Crea基線值"] },
        { step: 4, action: "持續監測與後續處理", details: "腎功能追蹤+傷口處理+併發症監測", findings: ["Crea q12-24h追蹤AKI", "電解質q6-12h", "CK趨勢（下降=肌肉損傷穩定）", "壞死組織清創評估"] }
      ]
    },
    monitoring: ["電解質（K⁺ q4-6h急性期）", "CK（橫紋肌溶解趨勢）", "BUN/Crea（AKI監測）", "尿量（目標>2 mL/kg/hr）", "尿液顏色和pH", "心電圖連續監測", "血壓"],
    reference: "Chen Y, Aroch I. Acute kidney injury secondary to traumatic rhabdomyolysis in a dog. JVECC 2018;28(5):469-475; K9 Clinical Practice Guideline: Blast, Burn and Crush Injuries"
  }
};

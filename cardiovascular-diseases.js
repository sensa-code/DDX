// ======= 心血管疾病 DISEASE_INFO =======
// Cardiovascular Diseases
// 資料來源：Clinical Veterinary Advisor: Dogs and Cats, 2nd Ed. (Etienne Côté)

const CARDIOVASCULAR_DISEASES = {
  "dilated-cardiomyopathy": {
    zh: "擴張型心肌病",
    en: "Dilated Cardiomyopathy (DCM)",
    definition: "心肌收縮功能障礙導致心室擴張、心壁變薄、心輸出量降低的原發性心肌疾病。",
    synonyms: ["DCM", "擴張性心肌病", "充血性心肌病", "Congestive Cardiomyopathy"],
    epidemiology: {
      species: "主要影響犬，貓罕見（多與牛磺酸缺乏相關）",
      age: "中大型犬4-10歲，杜賓犬可更早發病",
      sex: "公犬較母犬更常見（約2-3:1）",
      riskFactors: ["大型及巨型犬種", "杜賓犬", "拳師犬", "大丹犬", "愛爾蘭獵狼犬", "可卡犬", "牛磺酸缺乏（貓）", "左旋肉鹼缺乏", "某些穀物無關飼料（FDA調查中）"]
    },
    clinicalPresentation: {
      history: ["運動不耐", "虛弱", "咳嗽", "呼吸困難", "腹部膨大（腹水）", "昏厥", "突然死亡（尤其杜賓犬）", "食慾下降", "體重減輕"],
      physicalExam: ["心搏過速", "心律不整（心房顫動、心室早搏）", "第三心音（奔馬律）", "心雜音（二尖瓣/三尖瓣逆流）", "脈搏弱或脈搏缺失", "肺部濕囉音", "頸靜脈怒張", "肝腫大", "腹水", "黏膜蒼白"]
    },
    pathophysiology: "心肌細胞功能障礙或喪失 → 心室收縮力下降 → 心室擴張（Frank-Starling代償）→ 心壁變薄 → 二尖瓣/三尖瓣環擴大致瓣膜逆流 → 心房擴張 → 神經內分泌活化（RAAS、交感神經）→ 液體滯留 → 充血性心衰竭",
    diagnosis: {
      overview: "心臟超聲是確診金標準，顯示心室擴張和收縮功能下降",
      differentials: ["二尖瓣疾病", "心包積液", "心律不整誘發的心肌病", "缺血性心肌病", "牛磺酸缺乏性心肌病"],
      initialDB: ["心臟超聲（LVIDD↑、LVIDS↑、FS↓<20%、EPSS↑）", "胸腔X光（心臟擴大、肺水腫）", "ECG（心房顫動、心室早搏、寬QRS）", "NT-proBNP或cTnI"],
      advanced: ["24小時Holter監測（隱匿性DCM篩檢）", "牛磺酸和左旋肉鹼濃度", "基因檢測（杜賓犬PDK4突變）"]
    },
    treatment: {
      overview: "改善心臟功能、減輕心臟負擔、控制心律不整、改善生活品質",
      acute: [
        "急性充血性心衰竭：",
        "- 氧氣支持",
        "- Furosemide: 2-4 mg/kg IV q1-4h直到穩定",
        "- Pimobendan: 0.25-0.3 mg/kg PO q12h（正性肌力+血管擴張）",
        "- 硝酸甘油軟膏（降低前負荷）",
        "- 嚴重低心輸出量：Dobutamine 2.5-10 μg/kg/min CRI",
        "心房顫動急性控制：Diltiazem IV或口服"
      ],
      chronic: [
        "Pimobendan: 0.25-0.3 mg/kg PO q12h（首選正性肌力藥）",
        "ACEI: Enalapril 0.5 mg/kg PO q12-24h 或 Benazepril 0.25-0.5 mg/kg PO q12-24h",
        "Furosemide: 1-4 mg/kg PO q8-12h（依需要調整）",
        "Spironolactone: 1-2 mg/kg PO q12-24h",
        "心房顫動：Diltiazem 0.5-1.5 mg/kg PO q8h 或 Digoxin",
        "心室早搏：Sotalol 1-2 mg/kg PO q12h 或 Mexiletine",
        "牛磺酸補充（若缺乏）：250-500 mg PO q12h",
        "L-carnitine（若缺乏）：50-100 mg/kg PO q8h",
        "Omega-3脂肪酸",
        "限鈉飲食"
      ]
    },
    prognosis: "預後謹慎至差。杜賓犬DCM預後最差（確診後中位生存期約6-8週至數月）。其他犬種確診CHF後中位生存期約6-24個月。隱匿期DCM可存活較長。",
    pearls: [
      "杜賓犬DCM有高達30-50%終生罹患率，建議年度Holter和Echo篩檢",
      "心房顫動在DCM犬中很常見，需控制心率",
      "Pimobendan可延長DCM犬的存活時間",
      "隱匿期DCM（無症狀）仍需治療",
      "某些無穀飼料與DCM的關聯仍在研究中",
      "貓DCM多與牛磺酸缺乏相關，補充後可能改善"
    ],
    monitoring: ["呼吸頻率（家中監測RRR<30）", "心臟超聲", "胸腔X光", "ECG/Holter", "腎功能和電解質", "體重", "NT-proBNP"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "hypertrophic-cardiomyopathy": {
    zh: "肥厚型心肌病",
    en: "Hypertrophic Cardiomyopathy (HCM)",
    definition: "原發性心肌肥厚導致心室壁增厚、心室腔縮小、舒張功能障礙的心肌疾病，是貓最常見的心臟病。",
    synonyms: ["HCM", "肥厚性心肌病", "Hypertrophic Obstructive Cardiomyopathy (HOCM)"],
    epidemiology: {
      species: "貓最常見，犬罕見",
      age: "貓多在5-7歲診斷，但可在任何年齡發生（6個月至16歲）",
      sex: "公貓較常見（約3:1）",
      riskFactors: ["緬因貓", "布偶貓", "英國短毛貓", "波斯貓", "斯芬克斯貓", "家族遺傳", "甲狀腺機能亢進（繼發性）", "系統性高血壓（繼發性）", "生長激素過多"]
    },
    clinicalPresentation: {
      history: ["可能完全無症狀", "呼吸困難", "呼吸急促", "張口呼吸", "運動不耐", "後肢癱瘓（動脈血栓栓塞）", "昏厥", "突然死亡", "食慾下降"],
      physicalExam: ["心雜音（收縮期，動態性流出道阻塞或SAM）", "奔馬律（S4）", "心律不整", "心搏過速", "股動脈脈搏減弱或消失（ATE）", "後肢冰冷、疼痛（ATE）", "肺部濕囉音（肺水腫）", "呼吸音減弱（胸腔積液）"]
    },
    pathophysiology: "基因突變（肌節蛋白）→ 心肌細胞肥大和排列紊亂 → 左心室壁肥厚 → 舒張功能障礙（順應性下降）→ 左心房擴張 → 肺靜脈壓升高 → 肺水腫/胸腔積液。SAM（二尖瓣收縮期前向運動）→ 動態性流出道阻塞。左心房擴張和血流淤滯 → 血栓形成 → ATE",
    diagnosis: {
      overview: "心臟超聲確診，需排除繼發性心肌肥厚原因",
      differentials: ["甲狀腺機能亢進（繼發性肥厚）", "系統性高血壓（繼發性肥厚）", "主動脈狹窄", "脫水假性肥厚", "限制型心肌病", "未分類心肌病"],
      initialDB: ["心臟超聲（LVW或IVS≥6mm、LA/Ao>1.5、SAM、動態流出道阻塞）", "胸腔X光", "血壓測量", "T4（排除甲亢）", "ECG", "心肌標記物（cTnI、NT-proBNP）"],
      advanced: ["基因檢測（緬因貓MYBPC3、布偶貓MYBPC3突變）", "24小時Holter", "進階超聲（組織多普勒、應變成像）"]
    },
    treatment: {
      overview: "控制心率、改善舒張功能、預防血栓、治療充血症狀",
      acute: [
        "急性CHF：",
        "- 氧氣支持（最小化應激）",
        "- Furosemide: 1-2 mg/kg IV/IM q1-4h",
        "- 胸腔穿刺（若有大量胸腔積液）",
        "- 避免過度處置造成應激",
        "動脈血栓栓塞（ATE）：",
        "- 止痛（極重要）：Methadone、Buprenorphine",
        "- 抗凝：Heparin或低分子肝素",
        "- 支持治療"
      ],
      chronic: [
        "無症狀HCM治療爭議：",
        "- 輕度：可能不需治療或Atenolol",
        "- 中重度心房擴大：建議抗血小板/抗凝",
        "β-blocker: Atenolol 6.25-12.5 mg/貓 PO q12-24h",
        "Diltiazem: 7.5-15 mg/貓 PO q8h（替代β-blocker）",
        "CHF穩定後：Furosemide 1-2 mg/kg PO q12-24h",
        "血栓預防：",
        "- Clopidogrel: 18.75 mg/貓 PO q24h（首選）",
        "- 或 Aspirin: 81 mg/貓 PO q72h",
        "- 高風險：加上Rivaroxaban或低分子肝素",
        "ACEI: Benazepril 0.5-1 mg/kg PO q24h（CHF時）"
      ]
    },
    prognosis: "高度變異。無症狀貓可存活多年。一旦發展CHF，中位生存期約3-18個月。ATE後預後差，中位生存期約2-6個月，但復發率高。",
    pearls: [
      "貓HCM是最常見的心臟病，但許多貓終生無症狀",
      "心雜音不代表HCM，約1/3 HCM貓無雜音",
      "NT-proBNP可用於篩檢，但需結合超聲確診",
      "ATE是HCM最嚴重的併發症之一",
      "應激可誘發急性失代償，處置時需溫和",
      "繼發性肥厚（甲亢、高血壓）需排除並治療原因"
    ],
    monitoring: ["呼吸頻率（家中RRR<30）", "心臟超聲（每6-12個月）", "T4", "血壓", "腎功能", "NT-proBNP"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "mitral-valve-disease": {
    zh: "二尖瓣疾病",
    en: "Mitral Valve Disease (MVD)",
    definition: "二尖瓣結構退化導致瓣膜閉鎖不全和逆流的慢性進行性疾病，是犬最常見的心臟病。",
    synonyms: ["MVD", "MMVD", "二尖瓣黏液瘤性退化", "Myxomatous Mitral Valve Disease", "Endocardiosis", "二尖瓣閉鎖不全", "Mitral Regurgitation"],
    epidemiology: {
      species: "犬最常見，貓罕見",
      age: "中老年犬（>5歲），年齡增加罹患率增加",
      sex: "公犬較常見（約1.5:1）",
      riskFactors: ["小型犬種", "騎士查理王小獵犬（早發且嚴重）", "臘腸犬", "貴賓犬", "約克夏梗", "吉娃娃", "博美犬", "年齡"]
    },
    clinicalPresentation: {
      history: ["早期無症狀（僅雜音）", "咳嗽（尤其夜間或興奮時）", "運動不耐", "呼吸困難", "昏厥", "腹部膨大", "食慾下降", "體重減輕"],
      physicalExam: ["收縮期心尖區心雜音（左側最響，可輻射至右側）", "雜音強度與疾病嚴重度相關", "心搏過速", "竇性心律不整消失", "脈搏品質變化", "肺部濕囉音", "頸靜脈怒張（若右心衰竭）", "腹水", "體重減輕/肌肉消耗"]
    },
    pathophysiology: "瓣膜黏液瘤性退化 → 瓣葉增厚、脫垂 → 腱索延長或斷裂 → 二尖瓣逆流 → 左心房容量超負荷和擴張 → 肺靜脈壓升高 → 肺水腫。慢性容量超負荷 → 離心性左心室重塑 → 最終收縮功能下降 → 低心輸出量",
    diagnosis: {
      overview: "聽診發現雜音後以心臟超聲確診和分期",
      differentials: ["擴張型心肌病", "先天性二尖瓣發育不良", "感染性心內膜炎", "心肌梗塞後二尖瓣逆流"],
      initialDB: ["胸腔X光（VHS評估心臟大小、肺水腫）", "心臟超聲（LA/Ao、LVIDD、E波速度、逆流評估）", "血壓", "基本血檢"],
      advanced: ["NT-proBNP", "cTnI", "ECG/Holter"]
    },
    treatment: {
      overview: "依ACVIM分期指引治療。目標：延長壽命、延緩疾病進展、改善生活品質",
      acute: [
        "急性CHF（肺水腫）：",
        "- 氧氣支持",
        "- Furosemide: 2-4 mg/kg IV q1-2h直到呼吸改善",
        "- Pimobendan: 0.25-0.3 mg/kg PO q12h（立即開始）",
        "- 硝酸甘油（降低前負荷）",
        "- 嚴重時：Nitroprusside CRI",
        "腱索斷裂急性惡化：密切監測，可能需要手術"
      ],
      chronic: [
        "ACVIM B1期（雜音但無心臟擴大）：監測，無需藥物",
        "ACVIM B2期（心臟擴大但無症狀）：",
        "- Pimobendan: 0.25-0.3 mg/kg PO q12h（EPIC研究證實延長無症狀期）",
        "ACVIM C期（有或曾有CHF症狀）：",
        "- Pimobendan: 0.25-0.3 mg/kg PO q12h",
        "- Furosemide: 1-4 mg/kg PO q8-12h（最低有效劑量）",
        "- ACEI: Enalapril或Benazepril 0.5 mg/kg PO q12h",
        "- Spironolactone: 1-2 mg/kg PO q12-24h",
        "ACVIM D期（難治性CHF）：",
        "- 增加Furosemide劑量或頻率",
        "- 加上Torasemide",
        "- Amlodipine（降低後負荷）",
        "- 飲食調整",
        "- 考慮外科修復（若可行）"
      ]
    },
    prognosis: "早期MVD進展緩慢，許多犬可存活數年。一旦發展CHF，平均存活約9-12個月（有治療）。EPIC研究顯示Pimobendan在B2期可延長約15個月無症狀期。",
    pearls: [
      "雜音強度≥3/6且有心臟擴大才建議開始Pimobendan（B2期）",
      "家中呼吸頻率監測是最重要的居家監測指標",
      "咳嗽可能是肺水腫或左主支氣管受壓，需區分",
      "騎士查理王小獵犬常早發且進展快",
      "外科二尖瓣修復在專業中心有良好成果",
      "心房顫動預後較差"
    ],
    monitoring: ["家中呼吸頻率（RRR<30/min）", "胸腔X光", "心臟超聲（每6-12個月）", "腎功能和電解質", "體重", "血壓"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; ACVIM Consensus Guidelines 2019"
  },

  "tricuspid-valve-dysplasia": {
    zh: "三尖瓣發育不良",
    en: "Tricuspid Valve Dysplasia (TVD)",
    definition: "先天性三尖瓣結構異常導致三尖瓣閉鎖不全和右心容量超負荷的心臟畸形。",
    synonyms: ["TVD", "三尖瓣畸形", "先天性三尖瓣逆流", "Ebstein異常（嚴重形式）"],
    epidemiology: {
      species: "犬較常見，貓罕見",
      age: "先天性，年輕時診斷（通常<1歲）",
      sex: "公犬略多",
      riskFactors: ["拉布拉多犬", "德國牧羊犬", "大丹犬", "愛爾蘭雪達犬", "魏瑪犬", "舊英國牧羊犬", "遺傳"]
    },
    clinicalPresentation: {
      history: ["可能無症狀", "運動不耐", "腹部膨大（腹水）", "發育遲緩", "昏厥", "呼吸困難"],
      physicalExam: ["右側心尖區收縮期雜音", "可能有頸靜脈搏動", "肝腫大", "腹水", "頸靜脈怒張", "周邊水腫"]
    },
    pathophysiology: "三尖瓣葉發育異常（增厚、黏連、位置下移）→ 三尖瓣閉鎖不全 → 右心房和右心室容量超負荷 → 右心擴張 → 右心衰竭 → 體靜脈淤血 → 腹水、肝腫大",
    diagnosis: {
      overview: "心臟超聲確診，評估瓣膜結構和逆流嚴重程度",
      differentials: ["三尖瓣黏液瘤性退化", "心絲蟲相關三尖瓣逆流", "肺動脈高血壓繼發三尖瓣逆流", "心內膜墊缺損"],
      initialDB: ["心臟超聲（瓣膜結構異常、RA/RV擴張、三尖瓣逆流）", "胸腔X光（右心擴大）", "ECG（右心房擴大、右束支傳導阻滯、心室早搏）"],
      advanced: ["心血管造影", "CT血管造影"]
    },
    treatment: {
      overview: "目前無法治癒，治療以控制右心衰竭症狀為主",
      acute: [
        "急性右心衰竭：",
        "- Furosemide: 2-4 mg/kg IV",
        "- 腹腔穿刺（大量腹水影響呼吸時）",
        "- 氧氣支持（若需要）"
      ],
      chronic: [
        "輕度無症狀：監測，無需藥物",
        "右心衰竭：",
        "- Furosemide: 1-4 mg/kg PO q8-12h",
        "- Spironolactone: 1-2 mg/kg PO q12-24h",
        "- ACEI: Enalapril 0.5 mg/kg PO q12h",
        "- Pimobendan: 0.25-0.3 mg/kg PO q12h（可能有益）",
        "- 限鈉飲食",
        "- 定期腹腔穿刺（難治性腹水）",
        "心律不整治療（若需要）",
        "外科治療：目前仍在發展中"
      ]
    },
    prognosis: "高度變異。輕度病例可存活數年。中重度病例預後較差，尤其發展右心衰竭後。Ebstein異常（嚴重形式）預後差。",
    pearls: [
      "三尖瓣發育不良與二尖瓣發育不良可同時存在",
      "腹水可能是首要臨床表現",
      "ECG可見右心房擴大（P波增高）和右軸偏移",
      "與心絲蟲病鑑別很重要，尤其在流行區",
      "外科修復技術仍在發展中"
    ],
    monitoring: ["腹水量", "體重", "呼吸頻率", "心臟超聲", "肝功能", "ECG"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "patent-ductus-arteriosus": {
    zh: "開放性動脈導管",
    en: "Patent Ductus Arteriosus (PDA)",
    definition: "出生後動脈導管未能正常關閉，導致主動脈和肺動脈之間持續存在異常通道的先天性心臟缺陷。",
    synonyms: ["PDA", "動脈導管未閉", "開存性動脈導管"],
    epidemiology: {
      species: "犬較貓常見",
      age: "先天性，通常幼年診斷",
      sex: "母犬較公犬常見（約3:1）",
      riskFactors: ["貴賓犬", "馬爾濟斯犬", "博美犬", "可卡犬", "德國牧羊犬", "柯利犬", "設得蘭牧羊犬", "遺傳"]
    },
    clinicalPresentation: {
      history: ["可能無症狀", "運動不耐", "呼吸困難", "發育遲緩", "後肢無力（若反向PDA）", "昏厥"],
      physicalExam: ["連續性機械樣心雜音（左基底部，雜音在S2時最響）", "「洗衣機樣雜音」", "跳躍脈（水沖脈）", "股動脈脈搏強勁", "心前區震顫", "若左心衰竭：肺部濕囉音", "若反向PDA：後肢發紺、差異性發紺"]
    },
    pathophysiology: "正常：胎兒期動脈導管連接主動脈和肺動脈，出生後數日關閉。PDA：導管未閉 → 血液從高壓主動脈分流至低壓肺動脈（左向右分流）→ 肺過度灌注 → 肺靜脈回流增加 → 左心房和左心室容量超負荷 → 左心衰竭。反向PDA：肺動脈高血壓 → 右向左分流 → 差異性發紺",
    diagnosis: {
      overview: "典型連續性雜音高度提示，心臟超聲確診",
      differentials: ["主動脈-肺動脈窗", "冠狀動脈瘻管", "主動脈竇動脈瘤破裂", "動靜脈瘻管"],
      initialDB: ["胸腔X光（左心擴大、肺血管擴張、導管膨大「3」或「D」形）", "心臟超聲（導管可視化、左心容量超負荷、多普勒確認分流）", "ECG（左心室肥大）"],
      advanced: ["心血管造影", "CT血管造影", "反向PDA需評估肺動脈壓"]
    },
    treatment: {
      overview: "確診後應盡早關閉導管，外科結紮或經導管關閉",
      acute: [
        "急性CHF穩定：",
        "- Furosemide: 2-4 mg/kg IV",
        "- 氧氣支持",
        "- 穩定後盡快安排手術"
      ],
      chronic: [
        "導管關閉（首選治療）：",
        "- 經導管關閉（Amplatz Canine Ductal Occluder, ACDO）：微創，成功率高",
        "- 外科結紮：開胸手術",
        "- 建議在2-3月齡時進行",
        "術前CHF管理：",
        "- Furosemide",
        "- ACEI",
        "反向PDA：禁忌關閉導管，僅支持治療",
        "- 避免激動和運動",
        "- 可能使用羥基脲（減少紅血球生成）"
      ]
    },
    prognosis: "未治療：約64%在1歲內死於CHF。早期導管關閉後：預後極佳，可接近正常壽命。反向PDA：預後差，平均存活約2-3年。",
    pearls: [
      "連續性機械樣雜音是PDA的經典特徵",
      "早期診斷和治療至關重要",
      "經導管關閉已成為首選治療方式",
      "反向PDA（Eisenmenger綜合症）不可關閉導管",
      "差異性發紺（前肢正常，後肢發紺）提示反向PDA",
      "遺傳性疾病，受影響動物不應繁殖"
    ],
    monitoring: ["術前：心臟超聲、CHF監測", "術後：心臟超聲確認關閉完全、左心大小恢復"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "aortic-stenosis": {
    zh: "主動脈狹窄",
    en: "Aortic Stenosis (AS)",
    definition: "主動脈瓣或其周圍區域狹窄導致左心室流出道阻塞的先天性心臟缺陷，最常見為瓣膜下型。",
    synonyms: ["AS", "SAS", "Subaortic Stenosis", "瓣膜下主動脈狹窄", "主動脈口狹窄"],
    epidemiology: {
      species: "犬較常見，貓罕見",
      age: "先天性，通常年輕時診斷",
      sex: "公犬略多",
      riskFactors: ["紐芬蘭犬", "金毛尋回犬", "拳師犬", "德國牧羊犬", "羅威納犬", "拉布拉多犬", "大丹犬", "遺傳"]
    },
    clinicalPresentation: {
      history: ["可能無症狀", "運動不耐", "昏厥（尤其運動時）", "突然死亡", "呼吸困難"],
      physicalExam: ["收縮期遞增遞減型雜音（左基底部，輻射至頸部和胸骨右側）", "雜音輻射至頸動脈", "股動脈脈搏弱且遲緩上升（pulsus parvus et tardus）", "心前區震顫", "若CHF：肺部濕囉音"]
    },
    pathophysiology: "主動脈瓣下纖維環或纖維肌性狹窄 → 左心室流出道阻塞 → 左心室壓力超負荷 → 向心性左心室肥厚 → 舒張功能障礙。高速血流損傷主動脈瓣 → 主動脈瓣逆流。冠狀動脈灌注受損 + 心肌氧需增加 → 心肌缺血 → 心律不整 → 昏厥/猝死",
    diagnosis: {
      overview: "心臟超聲結合多普勒確診並評估嚴重程度",
      differentials: ["主動脈瓣狹窄", "肺動脈狹窄", "心室中隔缺損", "動態流出道阻塞"],
      initialDB: ["心臟超聲（瓣膜下狹窄可視化、多普勒流速測量壓力梯度）", "胸腔X光（心臟大小可能正常、主動脈後狹窄擴張）", "ECG（左心室肥大、心律不整）"],
      advanced: ["24小時Holter監測", "心血管造影"]
    },
    treatment: {
      overview: "目前無法完全矯正，治療目標為減少症狀和猝死風險",
      acute: [
        "昏厥急性處理：支持治療",
        "急性CHF：標準CHF治療"
      ],
      chronic: [
        "輕度（壓力梯度<50 mmHg）：監測，無需藥物",
        "中重度（壓力梯度≥50 mmHg）：",
        "- β-blocker: Atenolol 0.5-1 mg/kg PO q12-24h（減少心肌氧需、預防心律不整）",
        "- 活動限制（避免激烈運動）",
        "- 抗生素預防（牙科或其他手術時，預防心內膜炎）",
        "球囊擴張術：效果不如肺動脈狹窄，改善有限",
        "外科切除：風險高，效果不確定",
        "CHF：標準治療"
      ]
    },
    prognosis: "取決於嚴重程度。輕度（壓力梯度<50 mmHg）：預後良好，接近正常壽命。重度（壓力梯度>80 mmHg）：高猝死風險，3年存活率約50%。",
    pearls: [
      "瓣膜下型（SAS）是犬最常見的主動脈狹窄類型",
      "紐芬蘭犬SAS有遺傳基礎，建議篩檢繁殖犬",
      "雜音在成長過程中可能加重（病變進展）",
      "避免激烈運動可減少猝死風險",
      "感染性心內膜炎風險增加",
      "β-blocker可能減少症狀但未證實延長壽命"
    ],
    monitoring: ["心臟超聲（每6-12個月）", "Holter監測（評估心律不整）", "活動耐受度"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "pulmonic-stenosis": {
    zh: "肺動脈狹窄",
    en: "Pulmonic Stenosis (PS)",
    definition: "肺動脈瓣或其周圍區域狹窄導致右心室流出道阻塞的先天性心臟缺陷。",
    synonyms: ["PS", "肺動脈瓣狹窄", "肺動脈口狹窄", "右心室流出道阻塞"],
    epidemiology: {
      species: "犬較常見，貓罕見",
      age: "先天性，通常年輕時診斷",
      sex: "無明顯性別傾向",
      riskFactors: ["英國鬥牛犬", "法國鬥牛犬", "拳師犬", "獒犬", "比乙獵犬", "可卡犬", "西高地白梗", "薩摩耶犬", "迷你雪納瑞"]
    },
    clinicalPresentation: {
      history: ["可能無症狀", "運動不耐", "昏厥", "腹部膨大（若右心衰竭）", "發紺（若有右向左分流）"],
      physicalExam: ["收縮期遞增遞減型雜音（左基底部，肺動脈區）", "心前區震顫", "頸靜脈怒張（若右心衰竭）", "腹水", "肝腫大"]
    },
    pathophysiology: "肺動脈瓣發育不良或融合 → 右心室流出道阻塞 → 右心室壓力超負荷 → 向心性右心室肥厚 → 最終可能發展右心衰竭。若存在ASD或開放性卵圓孔 → 右向左分流 → 發紺",
    diagnosis: {
      overview: "心臟超聲結合多普勒確診並評估嚴重程度",
      differentials: ["主動脈狹窄", "心室中隔缺損", "法洛四聯症", "右心室雙出口"],
      initialDB: ["心臟超聲（瓣膜增厚/融合、右心室肥厚、多普勒壓力梯度）", "胸腔X光（右心擴大、主肺動脈後狹窄擴張）", "ECG（右心室肥大、右軸偏移）"],
      advanced: ["血管造影", "CT血管造影"]
    },
    treatment: {
      overview: "球囊瓣膜成形術是首選治療，可顯著降低壓力梯度",
      acute: [
        "急性右心衰竭：",
        "- Furosemide: 2-4 mg/kg IV",
        "- 腹腔穿刺（大量腹水時）",
        "- 氧氣支持"
      ],
      chronic: [
        "輕度（壓力梯度<50 mmHg）：監測，無需干預",
        "中重度（壓力梯度≥50-80 mmHg）：",
        "- 球囊瓣膜成形術（首選）：成功率高，可降低50%以上壓力梯度",
        "- β-blocker: Atenolol 0.5-1 mg/kg PO q12-24h（若不適合手術）",
        "Type B發育不良（瓣膜下肥厚型）：球囊效果較差，可能需外科",
        "右心衰竭：",
        "- Furosemide",
        "- ACEI",
        "- 低鈉飲食"
      ]
    },
    prognosis: "球囊瓣膜成形術後預後良好。輕度PS通常預後極佳。重度未治療PS：預後較差，可能發展右心衰竭或猝死。Type A（瓣膜融合型）治療反應比Type B（發育不良型）好。",
    pearls: [
      "Type A（瓣膜融合型）球囊擴張效果最好",
      "Type B（發育不良型，常見於英國鬥牛犬）球囊效果較差",
      "壓力梯度>80 mmHg為重度，建議介入",
      "球囊瓣膜成形術是微創且效果良好的選擇",
      "短頭犬種PS常合併冠狀動脈異常（R2A）",
      "遺傳性疾病，受影響動物不應繁殖"
    ],
    monitoring: ["心臟超聲（術後追蹤壓力梯度）", "ECG", "右心衰竭徵象"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "ventricular-septal-defect": {
    zh: "心室中隔缺損",
    en: "Ventricular Septal Defect (VSD)",
    definition: "心室中隔先天性缺損導致左右心室之間存在異常通道的心臟畸形。",
    synonyms: ["VSD", "心室間隔缺損", "室間隔缺損"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "先天性",
      sex: "無明顯性別傾向",
      riskFactors: ["英國鬥牛犬", "西高地白梗", "拉布拉多犬", "英國史賓格犬", "遺傳"]
    },
    clinicalPresentation: {
      history: ["小型限制性VSD可能無症狀", "運動不耐", "呼吸困難", "發育遲緩", "發紺（若反向分流）"],
      physicalExam: ["收縮期心雜音（右側胸骨旁最響）", "心前區震顫", "若大型VSD左心衰竭：肺部濕囉音", "若反向VSD：發紺"]
    },
    pathophysiology: "心室中隔發育不完全 → 左右心室間異常通道。小型限制性VSD：高速左向右分流，血流動力學影響小。大型非限制性VSD：大量左向右分流 → 肺過度灌注 → 左心容量超負荷 → 左心衰竭。慢性肺過度灌注 → 肺動脈高血壓 → 反向分流（Eisenmenger綜合症）",
    diagnosis: {
      overview: "心臟超聲可直接觀察缺損並評估分流方向和量",
      differentials: ["心內膜墊缺損", "主動脈瓣逆流", "二尖瓣逆流", "三尖瓣逆流"],
      initialDB: ["心臟超聲（缺損可視化、彩色多普勒分流、Qp:Qs比值）", "胸腔X光（心臟擴大程度、肺血管）", "ECG"],
      advanced: ["心導管檢查", "CT血管造影"]
    },
    treatment: {
      overview: "依缺損大小和血流動力學影響決定治療策略",
      acute: [
        "急性CHF：標準CHF治療"
      ],
      chronic: [
        "小型限制性VSD（無心臟擴大）：",
        "- 通常不需治療",
        "- 定期監測",
        "- 抗生素預防（手術時）",
        "中大型VSD有血流動力學影響：",
        "- CHF藥物治療（Furosemide、ACEI、Pimobendan）",
        "- 經導管關閉或外科修復（技術上可行時）",
        "Eisenmenger綜合症（反向VSD）：",
        "- 禁忌關閉缺損",
        "- 支持治療",
        "- 肺動脈高血壓治療（Sildenafil）"
      ]
    },
    prognosis: "小型限制性VSD：預後極佳，可正常壽命。大型VSD：取決於是否能成功關閉。Eisenmenger綜合症：預後差。",
    pearls: [
      "VSD位置多在膜周部（perimembranous）",
      "雜音強度不一定反映缺損大小（小缺損高速血流可產生響亮雜音）",
      "Qp:Qs>2:1提示顯著分流",
      "小型VSD可能自發性縮小或關閉",
      "大型VSD應考慮早期關閉以防止Eisenmenger綜合症",
      "感染性心內膜炎風險增加"
    ],
    monitoring: ["心臟超聲定期追蹤", "心臟大小變化", "肺動脈壓估計"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "atrial-septal-defect": {
    zh: "心房中隔缺損",
    en: "Atrial Septal Defect (ASD)",
    definition: "心房中隔先天性缺損導致左右心房之間存在異常通道的心臟畸形。",
    synonyms: ["ASD", "心房間隔缺損", "房間隔缺損"],
    epidemiology: {
      species: "犬貓皆可發生，犬較常見",
      age: "先天性",
      sex: "無明顯性別傾向",
      riskFactors: ["薩摩耶犬", "拳師犬", "杜賓犬", "遺傳", "常與其他先天性心臟病合併"]
    },
    clinicalPresentation: {
      history: ["多數無症狀", "運動不耐（大型缺損）", "呼吸困難", "發紺（若反向分流）"],
      physicalExam: ["可能無雜音或有輕微收縮期雜音（肺動脈區相對狹窄）", "第二心音固定分裂", "若大型ASD合併三尖瓣逆流：右側收縮期雜音"]
    },
    pathophysiology: "心房中隔缺損 → 左向右分流（因左心房壓力略高於右心房）→ 右心容量超負荷 → 右心擴張 → 可能發展肺動脈高血壓 → 反向分流（Eisenmenger，罕見）",
    diagnosis: {
      overview: "心臟超聲可直接觀察缺損，但可能被誤診或漏診",
      differentials: ["開放性卵圓孔（PFO）", "肺靜脈異常回流", "三尖瓣疾病"],
      initialDB: ["心臟超聲（缺損可視化、右心擴張、彩色多普勒分流）", "胸腔X光（右心擴大、肺血管擴張）", "ECG（右心擴大、不完全右束支傳導阻滯）"],
      advanced: ["氣泡對比超聲", "經食道超聲", "心導管檢查"]
    },
    treatment: {
      overview: "多數ASD血流動力學影響小，不需治療",
      acute: [
        "若有急性右心衰竭：標準治療"
      ],
      chronic: [
        "小型ASD：不需治療，定期監測",
        "大型ASD有顯著右心擴張：",
        "- 經導管關閉（若技術可行）",
        "- 外科修復",
        "右心衰竭：利尿劑、ACEI",
        "反向ASD：禁忌關閉，支持治療"
      ]
    },
    prognosis: "多數ASD預後良好，尤其小型缺損。大型ASD若能成功關閉預後也好。Eisenmenger綜合症罕見但預後差。",
    pearls: [
      "單純ASD較VSD和PDA少見",
      "ASD常與其他先天性心臟病合併",
      "開放性卵圓孔（PFO）與真正ASD不同",
      "ASD可能終生無症狀",
      "經導管關閉技術在獸醫領域發展中"
    ],
    monitoring: ["心臟超聲定期追蹤", "右心大小", "肺動脈壓"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "heartworm-disease": {
    zh: "心絲蟲病",
    en: "Heartworm Disease",
    definition: "由犬心絲蟲(Dirofilaria immitis)感染引起的嚴重心肺疾病，成蟲寄生於肺動脈和右心。",
    synonyms: ["Dirofilariasis", "犬心絲蟲感染", "Canine Heartworm Disease"],
    epidemiology: {
      species: "犬為主要宿主，貓為非典型宿主（感染較輕但症狀可能更嚴重）",
      age: "任何年齡，感染需數月至數年才出現症狀",
      sex: "無性別傾向",
      riskFactors: ["生活在流行區", "未使用預防藥物", "戶外活動", "蚊蟲暴露"]
    },
    clinicalPresentation: {
      history: ["早期可能無症狀", "咳嗽（慢性、輕度）", "運動不耐", "呼吸困難", "昏厥", "腹部膨大（腹水）", "體重減輕", "咳血"],
      physicalExam: ["心雜音（三尖瓣逆流）", "肺部異常音", "肝腫大", "腹水", "頸靜脈搏動", "休克徵象（腔靜脈症候群）", "貓：呼吸困難、嘔吐、神經症狀"]
    },
    pathophysiology: "蚊蟲傳播L3幼蟲 → 皮下移行發育 → 進入血管 → 到達肺動脈成熟（約6個月）→ 成蟲引起血管內皮損傷 → 肺動脈炎和栓塞 → 肺動脈高血壓 → 右心衰竭。腔靜脈症候群：大量蟲體阻塞三尖瓣和腔靜脈 → 急性右心衰竭和溶血",
    diagnosis: {
      overview: "抗原檢測是主要篩檢方法，結合微絲蚴檢查",
      differentials: ["原發性肺動脈高血壓", "肺血栓栓塞", "慢性呼吸道疾病", "右心衰竭其他原因"],
      initialDB: ["心絲蟲抗原檢測（檢測成蟲，感染後6-7個月才陽性）", "微絲蚴檢查（改良Knott法或濃縮法）", "胸腔X光（肺動脈擴張、扭曲、肺實質病變）", "心臟超聲（蟲體可視化、右心擴張、三尖瓣逆流）"],
      advanced: ["CBC（嗜酸性球增多、貧血）", "生化（肝腎功能）", "尿液分析", "貓：抗體檢測"]
    },
    treatment: {
      overview: "殺蟲治療前需評估風險和分期，嚴重病例需先穩定",
      acute: [
        "腔靜脈症候群：",
        "- 緊急外科取蟲（經頸靜脈）",
        "- 輸液支持",
        "- 氧氣",
        "急性肺血栓栓塞：",
        "- 籠內休息",
        "- 氧氣",
        "- 抗炎劑量類固醇",
        "- 支持治療"
      ],
      chronic: [
        "美國心絲蟲學會（AHS）治療指南：",
        "治療前準備：",
        "- 開始口服預防藥（殺死微絲蚴和幼蟲）",
        "- Doxycycline 10 mg/kg PO q12h x 4週（殺死Wolbachia共生菌）",
        "- 限制運動",
        "殺成蟲治療（Melarsomine）：",
        "- 第1天：2.5 mg/kg IM深層腰部肌肉",
        "- 等待30天",
        "- 第31天：2.5 mg/kg IM",
        "- 第32天：2.5 mg/kg IM（對側）",
        "術後管理：",
        "- 嚴格限制運動6-8週",
        "- Prednisone漸減",
        "- 監測血栓栓塞併發症",
        "抗原測試追蹤（治療後6-9個月）"
      ]
    },
    prognosis: "輕度感染：治療後預後良好。中重度感染：預後謹慎，取決於肺動脈和心臟損傷程度。腔靜脈症候群：急性死亡率高。貓：預後更難預測。",
    pearls: [
      "預防勝於治療 - 每月預防藥是最佳策略",
      "抗原檢測可能有假陰性（低蟲量、全公蟲、免疫複合物阻斷）",
      "殺蟲後血栓栓塞是主要併發症，嚴格限制運動很重要",
      "Doxycycline可減少殺蟲後的肺部反應",
      "貓心絲蟲病診斷和治療更具挑戰性",
      "年度篩檢建議所有狗，即使使用預防藥"
    ],
    monitoring: ["治療期間臨床症狀", "胸腔X光", "抗原測試（治療後6-9個月確認清除）"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; American Heartworm Society Guidelines"
  },

  "pericardial-effusion": {
    zh: "心包積液",
    en: "Pericardial Effusion",
    definition: "心包腔內異常液體積聚，可能導致心臟壓塞和循環障礙的病理狀態。",
    synonyms: ["心包滲出液", "心包積水", "Pericardial Fluid Accumulation"],
    epidemiology: {
      species: "犬較常見，貓罕見",
      age: "中老年犬（腫瘤相關），任何年齡（特發性或感染性）",
      sex: "公犬較常見（血管肉瘤）",
      riskFactors: ["大型犬", "金毛尋回犬（血管肉瘤）", "德國牧羊犬（血管肉瘤）", "短頭犬種（心臟基底腫瘤）", "心臟腫瘤", "凝血障礙"]
    },
    clinicalPresentation: {
      history: ["虛弱", "運動不耐", "腹部膨大（腹水）", "昏厥", "突然倒下", "呼吸困難", "食慾下降"],
      physicalExam: ["Beck三徵：低血壓、頸靜脈怒張、心音低沉", "心搏過速", "脈搏弱", "奇脈", "腹水", "肝腫大", "黏膜蒼白", "CRT延長"]
    },
    pathophysiology: "心包積液積聚 → 心包腔壓力升高 → 心室舒張充盈受限（心臟壓塞）→ 心輸出量下降 → 代償性心搏過速和全身血管收縮 → 組織灌注不足。病因：腫瘤（血管肉瘤、心臟基底腫瘤、間皮瘤）、特發性、感染、凝血障礙、尿毒症、心臟破裂",
    diagnosis: {
      overview: "心臟超聲快速確診，需同時評估病因",
      differentials: ["腹腔積液其他原因", "充血性心衰竭", "休克其他原因"],
      initialDB: ["心臟超聲（心包積液、心臟壓塞徵象、腫瘤評估）", "胸腔X光（球形心影）", "ECG（低電壓、電交替）", "心包液分析"],
      advanced: ["CT（尋找腫瘤）", "心包液細胞學", "心臟標記物（cTnI）"]
    },
    treatment: {
      overview: "心包穿刺是急性處理的關鍵，長期管理取決於病因",
      acute: [
        "心包穿刺術：",
        "- 右側臥位，4-6肋間心尖區",
        "- 超聲引導下更安全",
        "- 使用大口徑導管（14-16G）",
        "- 引流直到負壓或臨床改善",
        "- 保存液體送檢",
        "輸液支持",
        "ECG監測（穿刺中可能心律不整）"
      ],
      chronic: [
        "特發性心包積液：",
        "- 可能需反覆穿刺",
        "- 心包切除術（經常復發者）",
        "- 預後較好",
        "腫瘤相關：",
        "- 血管肉瘤：預後差，化療（Doxorubicin）可能延長數月",
        "- 心臟基底腫瘤：進展慢，心包切除術後可能存活1-2年",
        "- 間皮瘤：化療或胸腔內藥物",
        "感染性：抗生素治療",
        "心包切除術：",
        "- 經常復發的特發性",
        "- 結紮性心包炎",
        "- 緩解腫瘤相關心包積液"
      ]
    },
    prognosis: "特發性：心包切除術後預後良好，5年存活率可達50%以上。血管肉瘤：預後差，中位生存期約1-4個月。心臟基底腫瘤：進展慢，中位生存期可達1-2年。",
    pearls: [
      "積液量和速度決定症狀嚴重度 - 慢性積聚可耐受更大量",
      "血性心包積液不一定是腫瘤（特發性也可能血性）",
      "心包液pH<7.0或葡萄糖低提示感染",
      "心包液細胞學對腫瘤診斷敏感度低（約50%）",
      "穿刺後立即改善具有診斷價值（確認壓塞）",
      "金毛尋回犬心包積液高度懷疑血管肉瘤"
    ],
    monitoring: ["臨床症狀", "超聲追蹤積液再積聚", "腫瘤篩查"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "infective-endocarditis": {
    zh: "感染性心內膜炎",
    en: "Infective Endocarditis (IE)",
    definition: "心臟瓣膜或心內膜的微生物感染，形成疣狀贅生物導致瓣膜功能障礙和全身性併發症。",
    synonyms: ["IE", "細菌性心內膜炎", "Bacterial Endocarditis", "心內膜炎"],
    epidemiology: {
      species: "犬較常見，貓罕見",
      age: "中大型犬，中老年",
      sex: "公犬較常見",
      riskFactors: ["大型犬", "主動脈瓣疾病", "先天性心臟病", "免疫抑制", "長期導管留置", "口腔疾病", "椎間盤炎", "前列腺炎", "先前心臟手術"]
    },
    clinicalPresentation: {
      history: ["發燒（可能間歇性）", "嗜睡", "食慾下降", "體重減輕", "跛行（栓塞性關節炎）", "呼吸困難", "昏厥", "急性神經症狀（腦栓塞）"],
      physicalExam: ["發燒", "新出現的心雜音或雜音變化", "心律不整", "跛行/關節腫脹", "脾腫大", "瘀點", "眼部病變", "神經缺損"]
    },
    pathophysiology: "菌血症 + 心內膜損傷 → 細菌定植 → 形成感染性疣狀贅生物（細菌、纖維蛋白、血小板）→ 瓣膜破壞 → 瓣膜逆流 → 充血性心衰竭。贅生物碎片脫落 → 敗血性栓塞 → 多器官感染/梗塞（腎、脾、腦、關節）",
    diagnosis: {
      overview: "基於臨床表現、血液培養陽性、心臟超聲發現疣狀贅生物（改良Duke標準）",
      differentials: ["非感染性瓣膜疾病", "其他發燒原因", "免疫介導性疾病", "腫瘤"],
      initialDB: ["血液培養（多次、抗生素使用前、動脈和靜脈）", "心臟超聲（疣狀贅生物、瓣膜逆流、心臟擴大）", "CBC（白血球增多、貧血、血小板減少）", "生化（腎功能、肝功能）", "尿液分析（蛋白尿、血尿）"],
      advanced: ["尿液培養", "關節液分析", "C-反應蛋白", "ECG（傳導阻滯提示膿腫）"]
    },
    treatment: {
      overview: "長期靜脈抗生素治療，支持性心臟藥物",
      acute: [
        "經驗性抗生素（血液培養結果前）：",
        "- Ampicillin 22 mg/kg IV q8h + Enrofloxacin 5-10 mg/kg IV q24h",
        "- 或 Ampicillin + Gentamicin（監測腎功能）",
        "急性CHF：標準CHF治療"
      ],
      chronic: [
        "根據血液培養和藥敏調整抗生素",
        "抗生素療程：至少6-8週",
        "- 前2-4週IV",
        "- 之後可轉口服（若臨床改善）",
        "常見致病菌：",
        "- Staphylococcus（最常見）",
        "- Streptococcus",
        "- E. coli",
        "- Bartonella（需特殊培養）",
        "心臟藥物（若有CHF或瓣膜逆流）：",
        "- Furosemide",
        "- ACEI",
        "- Pimobendan",
        "外科瓣膜置換：在獸醫很少進行"
      ]
    },
    prognosis: "預後謹慎至差。主動脈瓣受累預後較二尖瓣差。早期診斷和積極治療可改善預後。死亡率約50-70%。",
    pearls: [
      "主動脈瓣是犬最常受累的瓣膜",
      "「發燒+新雜音」高度懷疑IE",
      "血液培養陰性不能排除（可能已使用抗生素或Bartonella等難培養菌）",
      "Bartonella是重要病因，尤其在流行區",
      "椎間盤炎和IE可能同時存在",
      "口腔健康維護可能預防IE"
    ],
    monitoring: ["體溫", "心臟超聲（疣狀物大小變化）", "血液培養複查", "腎功能", "心律"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "arterial-thromboembolism": {
    zh: "動脈血栓栓塞",
    en: "Arterial Thromboembolism (ATE)",
    definition: "血栓從心臟脫落並栓塞至周邊動脈，導致急性缺血的危急狀態，最常見於貓並累及後肢。",
    synonyms: ["ATE", "貓主動脈血栓栓塞", "Feline Aortic Thromboembolism", "FATE", "騎跨式栓塞", "Saddle Thrombus"],
    epidemiology: {
      species: "貓最常見（與HCM相關），犬罕見",
      age: "中老年貓（平均8-12歲）",
      sex: "公貓略多",
      riskFactors: ["肥厚型心肌病（HCM）", "其他心肌病", "左心房擴張", "自發性回聲對比", "先前ATE病史", "心房顫動"]
    },
    clinicalPresentation: {
      history: ["突然發作後肢癱瘓", "劇烈疼痛/嚎叫", "無法行走", "拖行後肢", "可能有已知心臟病史"],
      physicalExam: ["後肢癱瘓（最常見）", "股動脈脈搏消失", "後肢冰冷", "肉墊發紺或蒼白", "後肢肌肉僵硬（晚期）", "劇烈疼痛", "過度換氣", "低體溫", "心雜音或奔馬律", "呼吸急促/困難"]
    },
    pathophysiology: "心臟病（HCM等）→ 左心房擴張和血流淤滯 → 血栓形成（通常在左心耳）→ 血栓脫落 → 主動脈遠端分叉處栓塞（最常見）→ 後肢急性缺血 → 缺血性神經肌肉損傷。血管收縮物質釋放 → 側枝循環受損 → 加重缺血",
    diagnosis: {
      overview: "典型臨床表現（5P's）結合股動脈脈搏消失即可臨床診斷",
      differentials: ["椎間盤疾病", "脊髓栓塞", "下運動神經元疾病", "創傷"],
      initialDB: ["體檢（5P's：Pain疼痛、Pulselessness無脈、Paralysis癱瘓、Pallor蒼白、Poikilothermia溫差）", "心臟超聲（心臟病評估、左心房血栓）", "多普勒超聲（確認血流阻斷）", "血糖（患肢血糖通常低於前肢）"],
      advanced: ["肌酸激酶（CK，顯著升高）", "電解質（高血鉀）", "凝血功能", "乳酸"]
    },
    treatment: {
      overview: "止痛是首要任務，抗凝治療，支持性心臟治療",
      acute: [
        "止痛（極重要）：",
        "- Methadone 0.1-0.3 mg/kg IV/IM q4-6h",
        "- 或 Buprenorphine 0.01-0.02 mg/kg IV/IM q6-8h",
        "- 或 Fentanyl CRI",
        "抗凝治療：",
        "- Heparin: 250-300 IU/kg IV，然後150-250 IU/kg SC q8h",
        "- 或 低分子肝素（Enoxaparin）: 1 mg/kg SC q12h",
        "溶栓治療（效果和風險爭議）：",
        "- tPA或Streptokinase（出血風險高）",
        "心臟病治療：",
        "- CHF：Furosemide",
        "- 氧氣支持",
        "支持治療：",
        "- 維持水合",
        "- 監測高血鉀",
        "- 體溫管理"
      ],
      chronic: [
        "長期抗血小板/抗凝治療：",
        "- Clopidogrel 18.75 mg/貓 PO q24h（首選）",
        "- 或 Aspirin 81 mg/貓 PO q72h",
        "- 高風險：加上Rivaroxaban 1.25-2.5 mg/貓 PO q24h",
        "心臟病管理：",
        "- β-blocker或Diltiazem",
        "- ACEI（若CHF）",
        "物理治療（恢復期）"
      ]
    },
    prognosis: "整體預後謹慎。短期存活率約30-40%。有些貓可在數週內恢復功能。預後不良因素：低體溫、多肢受累、嚴重心臟病、高血鉀、休克。復發率高（約25-50%在1年內）。",
    pearls: [
      "ATE是獸醫急診最痛苦的病症之一，止痛是第一優先",
      "約90%的貓ATE有潛在心臟病（主要是HCM）",
      "股動脈脈搏消失是診斷關鍵",
      "患肢血糖低於前肢有診斷價值",
      "恢復功能可能需要數週，主人教育很重要",
      "即使恢復，復發風險高",
      "Clopidogrel比Aspirin預防效果更好（FAT CAT研究）"
    ],
    monitoring: ["疼痛控制", "心臟功能", "電解質（尤其鉀）", "肢體循環恢復", "復發徵象"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "systemic-hypertension": {
    zh: "系統性高血壓",
    en: "Systemic Hypertension",
    definition: "持續性動脈血壓升高，可導致靶器官損傷（眼、腎、心、腦）的病理狀態。",
    synonyms: ["高血壓", "Arterial Hypertension", "全身性高血壓"],
    epidemiology: {
      species: "犬貓皆可發生，貓較常見",
      age: "中老年動物",
      sex: "無明顯性別傾向",
      riskFactors: ["慢性腎病（最常見原因）", "甲狀腺機能亢進（貓）", "腎上腺皮質機能亢進", "嗜鉻細胞瘤", "醛固酮過多症", "糖尿病", "肥胖"]
    },
    clinicalPresentation: {
      history: ["可能無症狀", "突然失明", "眼睛異常", "神經症狀（癲癇、步態異常）", "多飲多尿", "體重變化"],
      physicalExam: ["眼部：視網膜出血、水腫、剝離、眼前房出血、失明", "心臟：心雜音、奔馬律、左心室肥厚", "神經：精神改變、癲癇、共濟失調、頭部傾斜", "腎臟：可能觸及腎臟異常"]
    },
    pathophysiology: "血壓持續升高 → 血管壁應力增加 → 內皮損傷和動脈硬化。靶器官損傷：眼（小血管出血/剝離）、腎（腎小球硬化）、心（壓力超負荷致左心室肥厚）、腦（出血/缺血）",
    diagnosis: {
      overview: "多次測量確認持續高血壓，並評估靶器官損傷和潛在病因",
      differentials: ["白袍高血壓（焦慮性）", "測量誤差"],
      initialDB: ["血壓測量（Doppler或oscillometric，多次測量）", "眼科檢查（眼底檢查）", "CBC、生化（腎功能、電解質）", "尿液分析和UPC", "T4（貓）"],
      advanced: ["心臟超聲", "腹部超聲", "低劑量地塞米松抑制試驗（懷疑庫欣）", "醛固酮/腎素比", "腹部CT（腎上腺腫瘤）"]
    },
    treatment: {
      overview: "降壓藥物控制血壓，治療潛在病因，防止靶器官損傷",
      acute: [
        "高血壓急症（嚴重眼或神經症狀）：",
        "- Amlodipine（首選）: 犬 0.1-0.25 mg/kg PO q24h；貓 0.625-1.25 mg/貓 PO q24h",
        "- 嚴重時：Hydralazine或Nitroprusside CRI",
        "- 避免血壓下降過快（維持腦灌注）"
      ],
      chronic: [
        "貓首選：Amlodipine 0.625-1.25 mg/貓 PO q24h",
        "- 若效果不足可增至2.5 mg/貓",
        "- 可加上Telmisartan 2 mg/kg PO q24h",
        "犬：",
        "- Amlodipine 0.1-0.5 mg/kg PO q24h",
        "- ACEI: Enalapril或Benazepril 0.5 mg/kg PO q12-24h",
        "- β-blocker: Atenolol（若心搏過速）",
        "治療潛在病因：",
        "- 甲亢：抗甲狀腺藥物",
        "- 腎病：腎病管理",
        "- 庫欣：相應治療",
        "目標血壓：",
        "- 收縮壓 <140-160 mmHg（無靶器官損傷）",
        "- 收縮壓 <140 mmHg（有靶器官損傷）"
      ]
    },
    prognosis: "取決於潛在病因和靶器官損傷程度。早期發現和控制可預防或延緩靶器官損傷。視網膜剝離若及時降壓可能恢復部分視力。",
    pearls: [
      "貓高血壓常與CKD和甲亢相關",
      "突然失明可能是高血壓的首要表現",
      "眼底檢查是評估靶器官損傷的重要方法",
      "測量血壓需要正確技術和動物放鬆",
      "Amlodipine是貓高血壓的首選藥物",
      "血壓分級：正常<140，低風險140-159，中風險160-179，高風險≥180 mmHg",
      "治療高血壓可能揭露潛在的CKD進展"
    ],
    monitoring: ["血壓（每1-2週直到穩定，之後每3-6個月）", "眼底檢查", "腎功能", "心臟超聲（若有左心室肥厚）"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; ACVIM Consensus on Hypertension"
  },

  "pulmonary-hypertension": {
    zh: "肺動脈高血壓",
    en: "Pulmonary Hypertension (PH)",
    definition: "肺動脈壓力異常升高的病理狀態，可能是原發性或繼發於心臟、肺部或血栓栓塞疾病。",
    synonyms: ["PH", "肺高壓", "Pulmonary Arterial Hypertension", "PAH"],
    epidemiology: {
      species: "犬較常見，貓罕見",
      age: "中老年犬",
      sex: "無明顯性別傾向",
      riskFactors: ["心絲蟲病", "慢性呼吸道疾病", "左心疾病（二尖瓣病變）", "先天性心臟病", "肺血栓栓塞", "高海拔"]
    },
    clinicalPresentation: {
      history: ["運動不耐", "呼吸困難", "咳嗽", "昏厥", "腹部膨大（腹水）", "發紺"],
      physicalExam: ["心雜音（三尖瓣逆流或肺動脈瓣逆流）", "第二心音分裂或增強", "頸靜脈怒張", "肝腫大", "腹水", "發紺", "心搏過速"]
    },
    pathophysiology: "各種原因導致肺血管阻力增加 → 肺動脈壓升高 → 右心室壓力超負荷 → 右心室肥厚 → 右心衰竭。分類（基於人類WHO分組）：第1組：肺動脈高血壓（原發性）；第2組：左心疾病相關；第3組：肺疾病/低氧相關；第4組：血栓栓塞相關；第5組：多因素",
    diagnosis: {
      overview: "心臟超聲估計肺動脈壓是主要診斷方法，同時需尋找病因",
      differentials: ["右心衰竭其他原因", "三尖瓣疾病"],
      initialDB: ["心臟超聲（三尖瓣逆流速度估計PAP、右心擴張/肥厚、中隔平坦化）", "胸腔X光（肺動脈擴張、右心擴大、肺部病變）", "心絲蟲抗原測試", "動脈血氣（低氧血症）"],
      advanced: ["心導管（確診金標準，獸醫少用）", "CT血管造影（肺栓塞）", "凝血功能", "D-dimer", "6分鐘步行試驗"]
    },
    treatment: {
      overview: "治療潛在病因，使用肺血管擴張劑，支持性右心衰竭治療",
      acute: [
        "急性右心衰竭：",
        "- 氧氣支持",
        "- Furosemide: 2-4 mg/kg IV",
        "- 減少應激",
        "嚴重低氧：氧氣，可能需機械通氣"
      ],
      chronic: [
        "肺血管擴張劑：",
        "- Sildenafil（首選）: 1-2 mg/kg PO q8-12h",
        "- Tadalafil: 1 mg/kg PO q24h",
        "- Pimobendan: 0.25-0.3 mg/kg PO q12h（正性肌力+血管擴張）",
        "右心衰竭治療：",
        "- Furosemide: 1-4 mg/kg PO q8-12h",
        "- Spironolactone: 1-2 mg/kg PO q12-24h",
        "治療潛在病因：",
        "- 心絲蟲：殺蟲治療",
        "- 左心病：心臟藥物",
        "- 呼吸道疾病：支氣管擴張劑、類固醇",
        "- 血栓栓塞：抗凝治療",
        "氧氣治療（若慢性低氧）",
        "限制運動"
      ]
    },
    prognosis: "取決於病因和嚴重程度。繼發於可治療病因（心絲蟲）預後較好。原發性或嚴重繼發性PH預後較差。中位存活期可能為數月至1-2年。",
    pearls: [
      "三尖瓣逆流速度>3 m/s提示肺動脈高血壓",
      "心臟超聲估計的肺動脈壓可能低估實際壓力",
      "Sildenafil是目前獸醫最常用的肺血管擴張劑",
      "心絲蟲是犬PH的重要且可預防的原因",
      "昏厥在PH犬中常見且預後較差",
      "需要尋找和治療潛在病因"
    ],
    monitoring: ["臨床症狀", "心臟超聲（三尖瓣逆流速度、右心大小）", "運動耐受度", "血氧"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; ACVIM Consensus on PH"
  }
};

// 匯出供整合使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CARDIOVASCULAR_DISEASES;
}

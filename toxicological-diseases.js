// ======= 中毒疾病 DISEASE_INFO =======
// Toxicological Diseases
// 資料來源：Clinical Veterinary Advisor: Dogs and Cats, 2nd Ed. (Etienne Côté)
// Small Animal Toxicology, 3rd Ed. (Peterson & Talcott)
// ASPCA Animal Poison Control Center Guidelines

const TOXICOLOGICAL_DISEASES = {
  "ethylene-glycol-toxicity": {
    zh: "乙二醇中毒",
    en: "Ethylene Glycol Toxicity",
    definition: "攝入乙二醇（防凍液的主要成分）導致的嚴重中毒，特徵為代謝性酸中毒、急性腎衰竭和神經系統損傷。",
    synonyms: ["防凍液中毒", "Antifreeze Poisoning", "EG Toxicosis"],
    epidemiology: {
      species: "犬貓皆可發生，貓對毒性更敏感",
      age: "任何年齡，年輕好奇動物更常見",
      sex: "無性別傾向",
      riskFactors: ["接觸防凍液", "車庫或車道漏液", "冬季更常見", "甜味吸引動物攝入"]
    },
    clinicalPresentation: {
      history: ["接觸防凍液史", "嘔吐", "多尿多渴", "共濟失調", "虛弱", "癲癇"],
      physicalExam: [
        "第一階段（0.5-12小時）：類醉酒狀態、共濟失調、嘔吐、多尿多渴、中樞神經系統抑制",
        "第二階段（12-24小時）：心肺症狀、心搏過速、呼吸急促",
        "第三階段（24-72小時犬/12-24小時貓）：急性腎衰竭、無尿、嘔吐、口腔潰瘍、昏迷、癲癇"
      ]
    },
    pathophysiology: "乙二醇本身毒性低，但經醇脫氫酶代謝產生有毒代謝物（乙醛酸、草酸）→ 嚴重代謝性酸中毒（高陰離子間隙）→ 草酸鈣結晶沉積於腎小管 → 急性腎小管壞死 → 腎衰竭",
    diagnosis: {
      overview: "病史、臨床表現、高陰離子間隙代謝性酸中毒、尿液草酸鈣結晶、血清乙二醇檢測",
      differentials: ["其他中毒（甲醇、異丙醇）", "急性腎衰竭其他原因", "糖尿病酮酸中毒", "乳酸酸中毒"],
      initialDB: [
        "血氣分析（代謝性酸中毒、高陰離子間隙>20-25 mEq/L）",
        "血清滲透壓（滲透壓間隙升高）",
        "尿液分析（草酸鈣單水或雙水結晶）",
        "BUN/Creatinine",
        "電解質（低鈣）",
        "血糖"
      ],
      advanced: ["血清乙二醇濃度", "即時檢測試劑盒", "腎臟超聲"]
    },
    treatment: {
      overview: "早期給予解毒劑（醇脫氫酶抑制劑）、糾正酸中毒、支持腎功能",
      acute: [
        "若攝入<1-2小時：催吐（若無禁忌症）",
        "解毒劑（越早越好）：",
        "- Fomepizole（4-MP）：犬 20 mg/kg IV 初始，12h後 15 mg/kg，24h後 15 mg/kg，36h後 5 mg/kg",
        "- Fomepizole：貓 125 mg/kg IV q12h x 3劑",
        "- 或 Ethanol 20%：犬 5.5 mL/kg IV q4h x 5劑，然後 q6h x 4劑",
        "- Ethanol：貓 5 mL/kg IV q6h x 5劑",
        "糾正酸中毒：Sodium bicarbonate（根據血氣計算）",
        "積極輸液維持腎灌注",
        "監測並糾正低鈣血症",
        "血液透析（若已腎衰竭且設備可用）"
      ],
      chronic: ["腎衰竭支持治療", "可能需要長期透析"]
    },
    prognosis: "攝入後8小時內（犬）或3小時內（貓）給予解毒劑預後良好。一旦出現腎衰竭，預後極差。貓致死劑量低（1.5 mL/kg），犬約4.4-6.6 mL/kg。",
    pearls: [
      "「時間就是腎臟」- 早期治療至關重要",
      "貓對乙二醇極度敏感，約1茶匙可致死",
      "Wood's燈下尿液可能螢光（某些防凍液含螢光劑）",
      "草酸鈣結晶出現較晚，缺乏不能排除診斷",
      "Fomepizole優於Ethanol（副作用少），但較昂貴",
      "滲透壓間隙 = 測量滲透壓 - 計算滲透壓（正常<10）"
    ],
    monitoring: ["腎功能（BUN/Crea q12-24h）", "尿量", "血氣", "電解質", "滲透壓間隙"],
    reference: "Peterson ME, Talcott PA: Small Animal Toxicology, 3rd Ed. Elsevier, 2013; Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "chocolate-toxicity": {
    zh: "巧克力中毒",
    en: "Chocolate Toxicity",
    definition: "攝入巧克力中的甲基黃嘌呤類（可可鹼和咖啡因）導致的中毒，主要影響心血管、神經和消化系統。",
    synonyms: ["可可鹼中毒", "Theobromine Toxicity", "Methylxanthine Toxicosis"],
    epidemiology: {
      species: "主要影響犬，貓罕見（較挑食）",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["節日期間（情人節、復活節、聖誕節）", "家中有巧克力存放", "狗的好奇心和食欲"]
    },
    clinicalPresentation: {
      history: ["攝入巧克力史", "嘔吐", "腹瀉", "躁動", "多尿"],
      physicalExam: ["嘔吐", "腹瀉", "多尿多渴", "躁動/過度興奮", "心搏過速", "心律不整", "高熱", "肌肉震顫", "癲癇（嚴重時）", "昏迷（極嚴重時）"]
    },
    pathophysiology: "可可鹼半衰期長（犬約17.5小時）→ 腺苷受體拮抗 → 磷酸二酯酶抑制 → cAMP增加 → 心臟興奮性增加、血管擴張、利尿、中樞神經興奮 → 兒茶酚胺釋放增加 → 心律不整",
    diagnosis: {
      overview: "病史和臨床表現為主要診斷依據",
      differentials: ["咖啡因中毒", "興奮劑中毒", "其他甲基黃嘌呤中毒", "偽乙麻黃鹼中毒"],
      initialDB: ["心電圖（心律不整）", "血壓", "體溫", "基礎生化"],
      advanced: ["血清可可鹼/咖啡因濃度（通常不需要）"]
    },
    treatment: {
      overview: "去污染、支持治療、控制心律不整和癲癇",
      acute: [
        "去污染（攝入<2小時）：",
        "- 催吐：Apomorphine 0.03-0.04 mg/kg IV或結膜下",
        "- 活性炭：1-2 g/kg PO（可每4-6小時重複，因腸肝循環）",
        "輸液支持（促進排泄、糾正脫水）",
        "心律不整治療：",
        "- 室性心律不整：Lidocaine 2 mg/kg IV bolus（犬）",
        "- 心搏過速：β-blocker（Atenolol、Propranolol）",
        "癲癇控制：Diazepam 0.5-1 mg/kg IV",
        "降溫措施（若高熱）",
        "導尿監測尿量",
        "膀胱導尿可減少可可鹼再吸收"
      ],
      chronic: ["監測心臟功能直到症狀消退"]
    },
    prognosis: "輕度中毒預後良好。嚴重中毒若及時治療預後仍可良好。可可鹼LD50約100-200 mg/kg。",
    pearls: [
      "毒性取決於巧克力類型：烘焙巧克力>黑巧克力>牛奶巧克力>白巧克力",
      "可可鹼含量：烘焙巧克力~450 mg/oz，黑巧克力~150 mg/oz，牛奶巧克力~60 mg/oz",
      "白巧克力幾乎不含可可鹼，但高脂肪可導致胰臟炎",
      "症狀可能延遲6-12小時出現",
      "活性炭可重複給予（腸肝循環）",
      "輕度症狀（<20 mg/kg）：輕微胃腸道症狀",
      "中度症狀（20-60 mg/kg）：心血管和神經症狀",
      "重度症狀（>60 mg/kg）：癲癇、死亡風險"
    ],
    monitoring: ["心電圖", "心率", "體溫", "血壓", "尿量", "神經狀態"],
    reference: "Peterson ME, Talcott PA: Small Animal Toxicology, 3rd Ed. Elsevier, 2013"
  },

  "xylitol-toxicity": {
    zh: "木糖醇中毒",
    en: "Xylitol Toxicity",
    definition: "攝入木糖醇（一種常見的人工甜味劑）導致的中毒，在犬引起嚴重低血糖和潛在的肝衰竭。",
    synonyms: ["木糖醇中毒", "Sugar Alcohol Toxicosis", "Birch Sugar Poisoning"],
    epidemiology: {
      species: "主要影響犬，貓罕見（可能無臨床意義）",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["接觸含木糖醇產品（口香糖、糖果、烘焙食品、牙膏、某些藥物）"]
    },
    clinicalPresentation: {
      history: ["攝入含木糖醇產品史", "虛弱", "嘔吐", "共濟失調", "昏厥"],
      physicalExam: [
        "低血糖症狀（攝入後30-60分鐘）：虛弱、嘔吐、共濟失調、震顫、癲癇、昏迷",
        "肝毒性症狀（攝入後12-72小時）：嘔吐、嗜睡、黃疸、出血傾向"
      ]
    },
    pathophysiology: "犬攝入木糖醇 → 快速吸收（30分鐘內）→ 胰島素大量釋放（比葡萄糖刺激強2.5-7倍）→ 嚴重低血糖。高劑量 → 肝細胞氧化損傷 → ATP消耗 → 肝細胞壞死 → 急性肝衰竭、凝血障礙",
    diagnosis: {
      overview: "病史結合低血糖和/或肝功能異常",
      differentials: ["胰島素過量", "胰島素瘤", "其他低血糖原因", "肝毒性其他原因"],
      initialDB: ["血糖（低血糖）", "肝功能（ALT、AST、ALP、Bilirubin）", "凝血功能（PT/PTT）", "電解質（低鉀）"],
      advanced: ["腹部超聲（肝臟評估）"]
    },
    treatment: {
      overview: "糾正低血糖、肝臟保護、支持治療",
      acute: [
        "去污染（若攝入<30分鐘且無症狀）：",
        "- 催吐",
        "- 活性炭效果不確定",
        "低血糖治療：",
        "- Dextrose bolus：0.5-1 g/kg IV（25-50%溶液稀釋）",
        "- Dextrose CRI：2.5-5%維持正常血糖",
        "肝臟保護：",
        "- N-Acetylcysteine（NAC）：140 mg/kg IV loading，然後 70 mg/kg IV q6h",
        "- S-Adenosylmethionine（SAMe）：20 mg/kg PO q24h",
        "- Silymarin（水飛薊）：20-50 mg/kg/day",
        "輸液支持",
        "新鮮冷凍血漿（若凝血障礙）",
        "維生素K1（若PT延長）"
      ],
      chronic: ["持續監測肝功能", "肝臟支持治療"]
    },
    prognosis: "單純低血糖若及時治療預後良好。肝衰竭預後謹慎至差。低血糖劑量：>0.1 g/kg；肝毒性劑量：>0.5 g/kg。",
    pearls: [
      "口香糖木糖醇含量差異大（0.3-1.0 g/片）",
      "低血糖可在攝入後10-60分鐘內快速發展",
      "肝損傷可能延遲至攝入後12-72小時",
      "貓可能不受影響（代謝不同）",
      "許多無糖產品含木糖醇 - 仔細檢查成分",
      "花生醬是常見的隱藏來源",
      "症狀無關時也應監測肝功能48-72小時"
    ],
    monitoring: ["血糖（q1-2h直到穩定）", "肝功能（q12-24h x 72h）", "凝血功能", "精神狀態"],
    reference: "Peterson ME, Talcott PA: Small Animal Toxicology, 3rd Ed. Elsevier, 2013"
  },

  "nsaid-toxicity": {
    zh: "非類固醇消炎藥中毒",
    en: "NSAID Toxicity",
    definition: "攝入過量非類固醇消炎藥（NSAIDs）導致的中毒，主要引起胃腸道潰瘍、腎損傷和肝毒性。",
    synonyms: ["NSAID中毒", "Ibuprofen Toxicity", "Naproxen Toxicity", "消炎止痛藥中毒"],
    epidemiology: {
      species: "犬貓皆可發生，貓更敏感",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["誤食人用NSAIDs", "主人錯誤給藥", "與其他藥物合併使用", "脫水", "腎臟疾病"]
    },
    clinicalPresentation: {
      history: ["攝入NSAIDs史", "嘔吐（可能帶血）", "腹痛", "食慾下降", "黑便", "虛弱"],
      physicalExam: ["嘔吐", "吐血", "黑便", "腹痛", "脫水", "蒼白", "黃疸（肝毒性）", "無尿或少尿（腎衰竭）", "CNS抑制（高劑量）"]
    },
    pathophysiology: "NSAIDs抑制COX-1和COX-2 → 前列腺素合成減少 → 胃黏膜保護下降 → 胃潰瘍、穿孔；腎血流減少 → 急性腎損傷；某些NSAIDs有直接肝毒性",
    diagnosis: {
      overview: "病史結合胃腸道和腎臟損傷徵象",
      differentials: ["其他胃腸道潰瘍原因", "急性腎損傷其他原因", "出血性腸胃炎"],
      initialDB: ["CBC（貧血）", "生化（BUN/Crea、肝酶）", "糞便潛血", "尿液分析"],
      advanced: ["腹部X光/超聲", "內視鏡"]
    },
    treatment: {
      overview: "去污染、胃腸道保護、腎臟支持",
      acute: [
        "去污染（攝入<2小時）：",
        "- 催吐",
        "- 活性炭：1-2 g/kg（可能需重複給予）",
        "胃腸道保護：",
        "- Omeprazole：1-2 mg/kg PO/IV q12-24h",
        "- Sucralfate：0.5-1 g/狗 PO q6-8h（餐前空腹）",
        "- Misoprostol：2-5 μg/kg PO q8h（PGE1類似物）",
        "止吐：Maropitant 1 mg/kg SC/IV q24h",
        "積極輸液（維持腎灌注）",
        "輸血（若嚴重貧血）",
        "肝保護（若有肝損傷）：SAMe、NAC"
      ],
      chronic: ["持續胃腸道保護治療", "監測腎功能恢復"]
    },
    prognosis: "輕度中毒預後良好。嚴重胃腸道穿孔或腎衰竭預後謹慎至差。",
    pearls: [
      "不同NSAIDs毒性劑量差異大",
      "Ibuprofen犬中毒劑量：GI症狀>25 mg/kg，腎毒性>100 mg/kg，CNS毒性>400 mg/kg",
      "Naproxen毒性比Ibuprofen強",
      "貓對所有NSAIDs極度敏感（半衰期長）",
      "不要同時使用多種NSAIDs或NSAIDs+類固醇",
      "Sucralfate與其他口服藥應間隔2小時",
      "腎衰竭可能延遲數天出現"
    ],
    monitoring: ["腎功能", "糞便顏色", "PCV", "腹痛程度", "尿量"],
    reference: "Peterson ME, Talcott PA: Small Animal Toxicology, 3rd Ed. Elsevier, 2013"
  },

  "acetaminophen-toxicity": {
    zh: "對乙醯胺酚中毒",
    en: "Acetaminophen Toxicity",
    definition: "攝入對乙醯胺酚（撲熱息痛/泰諾）導致的中毒，在貓引起變性血紅蛋白血症，在犬主要引起肝損傷。",
    synonyms: ["撲熱息痛中毒", "Paracetamol Toxicity", "Tylenol Poisoning", "泰諾中毒"],
    epidemiology: {
      species: "貓極度敏感，犬較耐受",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["主人錯誤給藥（以為安全）", "貓缺乏葡萄糖醛酸化能力"]
    },
    clinicalPresentation: {
      history: ["攝入對乙醯胺酚史", "虛弱", "呼吸困難", "臉部/爪子腫脹（貓）"],
      physicalExam: [
        "貓：變性血紅蛋白血症（棕色黏膜、發紺）、臉部/爪子水腫、呼吸困難、抑鬱、嘔吐、流涎",
        "犬：嘔吐、嗜睡、黃疸、腹痛、肝腫大（高劑量）"
      ]
    },
    pathophysiology: "貓缺乏葡萄糖醛酸轉移酶 → 無法有效代謝 → 有毒代謝物（NAPQI）累積 → 消耗谷胱甘肽 → 血紅蛋白氧化為變性血紅蛋白 → 組織缺氧；犬高劑量 → 肝臟谷胱甘肽耗盡 → 肝細胞壞死",
    diagnosis: {
      overview: "病史、臨床表現（貓的棕色血液/黏膜）、血液檢測",
      differentials: ["其他變性血紅蛋白血症原因（洋蔥、苯佐卡因）", "溶血性貧血", "肝毒性其他原因"],
      initialDB: [
        "變性血紅蛋白（正常<1%，中毒可>30%）",
        "血液顏色（棕巧克力色）",
        "脈搏血氧儀（讀數可能假性正常或降低）",
        "Heinz小體（血塗片）",
        "肝功能（ALT、ALP）",
        "膽紅素"
      ],
      advanced: ["血清對乙醯胺酚濃度"]
    },
    treatment: {
      overview: "解毒劑（N-乙醯半胱氨酸）、變性血紅蛋白還原、肝保護",
      acute: [
        "去污染（若攝入<1-2小時）：",
        "- 催吐",
        "- 活性炭：1-2 g/kg",
        "解毒劑（越早越好）：",
        "- N-Acetylcysteine（NAC）：140-280 mg/kg IV/PO loading",
        "- 然後 70 mg/kg IV/PO q4-6h x 7劑",
        "還原變性血紅蛋白：",
        "- Ascorbic acid（維生素C）：30 mg/kg PO/IV q6h",
        "- SAMe：20 mg/kg PO q24h",
        "氧氣支持（若低氧血症）",
        "輸血（若PCV<15%或嚴重變性血紅蛋白血症）",
        "積極輸液"
      ],
      chronic: ["肝功能監測", "肝臟支持治療"]
    },
    prognosis: "貓：若及時治療（攝入後2小時內）預後良好；延遲治療預後差。貓致死劑量低至10 mg/kg。犬：中毒劑量較高（>150 mg/kg），預後通常較好。",
    pearls: [
      "貓對對乙醯胺酚極度敏感 - 半片泰諾可致死",
      "棕色/巧克力色血液是變性血紅蛋白血症的特徵性表現",
      "臉部/爪子水腫是貓中毒的早期徵兆",
      "脈搏血氧儀對變性血紅蛋白血症不可靠",
      "NAC是谷胱甘肽前驅物，應盡早給予",
      "永遠不要給貓服用對乙醯胺酚"
    ],
    monitoring: ["變性血紅蛋白%", "PCV", "肝功能", "臨床狀態", "尿液顏色"],
    reference: "Peterson ME, Talcott PA: Small Animal Toxicology, 3rd Ed. Elsevier, 2013"
  },

  "grape-raisin-toxicity": {
    zh: "葡萄/葡萄乾中毒",
    en: "Grape/Raisin Toxicity",
    definition: "攝入葡萄、葡萄乾或相關產品導致的中毒，引起犬的急性腎損傷。毒性成分可能為酒石酸。",
    synonyms: ["葡萄中毒", "葡萄乾中毒", "Grape Toxicosis", "Raisin Toxicosis"],
    epidemiology: {
      species: "主要影響犬，貓和雪貂可能也敏感",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["接觸葡萄/葡萄乾", "某些個體可能更易感（機制不明）"]
    },
    clinicalPresentation: {
      history: ["攝入葡萄/葡萄乾史", "嘔吐（常含葡萄殘渣）", "腹瀉", "食慾下降", "嗜睡", "少尿/無尿"],
      physicalExam: ["嘔吐", "腹瀉", "腹痛", "脫水", "嗜睡", "口腔潰瘍", "腎區疼痛", "無尿（晚期）"]
    },
    pathophysiology: "確切毒素尚不完全清楚（可能為酒石酸及其鉀鹽）→ 腎近端小管壞死 → 急性腎損傷。個體敏感性差異大，某些犬攝入少量即中毒，某些犬大量攝入無症狀",
    diagnosis: {
      overview: "病史結合急性腎損傷",
      differentials: ["乙二醇中毒", "百合中毒", "NSAIDs中毒", "鉤端螺旋體病", "腎前性/腎後性氮血症"],
      initialDB: ["BUN/Creatinine", "電解質", "尿液分析（等比重尿、糖尿、管型）", "尿沉渣"],
      advanced: ["腎臟超聲", "腎臟活檢"]
    },
    treatment: {
      overview: "去污染、積極輸液維持腎灌注、監測腎功能",
      acute: [
        "去污染（攝入<6小時）：",
        "- 催吐",
        "- 活性炭：1-2 g/kg（效果不確定）",
        "積極靜脈輸液：",
        "- 晶體液2倍維持量 x 48-72小時",
        "- 目標：維持良好尿量",
        "監測尿量（導尿）",
        "若少尿/無尿：",
        "- Furosemide：2-4 mg/kg IV bolus，然後CRI",
        "- Mannitol：0.5-1 g/kg IV（若無尿）",
        "止吐：Maropitant、Ondansetron",
        "血液透析（若設備可用且腎衰竭）"
      ],
      chronic: ["持續監測腎功能（至少72小時）", "腎病管理（若永久損傷）"]
    },
    prognosis: "早期積極治療預後可良好。一旦出現無尿性腎衰竭，預後極差。沒有確定的毒性劑量閾值（個體差異大）。",
    pearls: [
      "毒性劑量無法預測 - 建議任何攝入都當作潛在中毒處理",
      "葡萄乾比葡萄濃縮，可能毒性更高",
      "2022年研究提示酒石酸可能是毒性成分",
      "某些無籽葡萄品種可能酒石酸含量較低",
      "嘔吐物中發現葡萄殘渣有診斷價值",
      "腎損傷可能延遲24-72小時出現",
      "不是所有犬都會中毒，但無法預測哪些會"
    ],
    monitoring: ["BUN/Creatinine q12-24h x 72h", "尿量", "尿比重", "電解質"],
    reference: "Peterson ME, Talcott PA: Small Animal Toxicology, 3rd Ed. Elsevier, 2013; Wegenast CA et al. JAVMA 2022"
  },

  "lily-toxicity": {
    zh: "百合中毒",
    en: "Lily Toxicity",
    definition: "貓攝入真百合屬（Lilium）或萱草屬（Hemerocallis）植物導致的嚴重中毒，引起急性腎衰竭。",
    synonyms: ["百合花中毒", "True Lily Toxicosis", "Easter Lily Poisoning", "Daylily Toxicity"],
    epidemiology: {
      species: "僅影響貓，犬似乎不受影響",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["家中有百合植物", "復活節/春季（百合花季）", "貓愛啃咬植物"]
    },
    clinicalPresentation: {
      history: ["接觸/攝入百合植物（任何部分）", "嘔吐", "食慾下降", "嗜睡", "多尿→無尿"],
      physicalExam: [
        "早期（0-12小時）：嘔吐、流涎、食慾下降",
        "中期（12-24小時）：多尿、脫水、嗜睡",
        "晚期（24-72小時）：無尿、尿毒症症狀（口腔潰瘍、嘔吐、嗜睡、癲癇）"
      ]
    },
    pathophysiology: "毒素成分尚不明確 → 快速吸收 → 腎近端小管壞死 → 急性腎小管壞死 → 急性腎衰竭。所有部分（花、葉、莖、花粉、花瓶水）皆有毒",
    diagnosis: {
      overview: "病史（接觸百合）結合急性腎損傷",
      differentials: ["乙二醇中毒", "葡萄/葡萄乾中毒", "NSAIDs中毒", "尿路阻塞"],
      initialDB: ["BUN/Creatinine", "電解質（高鉀、高磷）", "尿液分析（管型、糖尿）", "尿比重"],
      advanced: ["腎臟超聲", "腎臟活檢"]
    },
    treatment: {
      overview: "去污染、極積極的輸液治療、腎功能支持",
      acute: [
        "去污染（越早越好）：",
        "- 催吐（若攝入<2小時且無症狀）",
        "- 活性炭：1-2 g/kg",
        "極積極的靜脈輸液（關鍵）：",
        "- 晶體液2-3倍維持量 x 48-72小時",
        "- 開始越早越好（理想<6小時）",
        "監測尿量（導尿）",
        "若少尿：",
        "- Furosemide：2-4 mg/kg IV",
        "- Mannitol：0.25-0.5 g/kg IV",
        "糾正電解質異常（尤其高鉀）",
        "血液透析或腹膜透析（若可用）",
        "止吐和營養支持"
      ],
      chronic: ["腎功能監測", "慢性腎病管理（若永久損傷）"]
    },
    prognosis: "攝入後18小時內開始積極輸液治療預後良好。延遲治療或已出現腎衰竭預後極差。即使少量攝入（一片葉子、舔舐花粉）也可致死。",
    pearls: [
      "所有真百合對貓都有致命毒性：復活節百合、亞洲百合、日本百合、虎皮百合、萱草",
      "植物所有部分都有毒，包括花粉和花瓶水",
      "「安全」的百合：鈴蘭百合（心臟毒性不同）、和平百合（不是真百合）",
      "治療窗口窄 - 早期積極治療是關鍵",
      "即使貓看起來正常，接觸後也應立即治療",
      "教育主人：家有貓不要種百合",
      "預後與開始治療時間直接相關"
    ],
    monitoring: ["BUN/Creatinine q12-24h", "尿量", "電解質（K、P）", "尿比重"],
    reference: "Peterson ME, Talcott PA: Small Animal Toxicology, 3rd Ed. Elsevier, 2013"
  },

  "marijuana-toxicity": {
    zh: "大麻中毒",
    en: "Marijuana Toxicity",
    definition: "攝入大麻（Cannabis sativa）或其製品導致的中毒，主要成分四氫大麻酚（THC）引起神經系統症狀。",
    synonyms: ["大麻中毒", "THC Toxicosis", "Cannabis Intoxication", "Pot Poisoning"],
    epidemiology: {
      species: "犬最常見，貓也可發生",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["家中有大麻產品", "大麻合法化地區病例增加", "含THC的食用品更危險（高濃度、延遲吸收）"]
    },
    clinicalPresentation: {
      history: ["可能接觸大麻史（主人可能否認）", "行為異常", "共濟失調", "尿失禁"],
      physicalExam: [
        "神經系統：共濟失調、定向障礙、過度興奮或抑鬱、瞳孔散大、眼球震顫、對刺激過度反應",
        "心血管：心搏過緩（常見）或心搏過速、低血壓",
        "其他：低體溫、流涎、尿失禁、嘔吐、震顫、昏迷（嚴重時）"
      ]
    },
    pathophysiology: "THC經CB1和CB2大麻素受體作用 → 神經傳導改變 → 中樞神經系統抑制/興奮。犬大麻素受體密度高於人類，對THC更敏感。食用品可能含巧克力或木糖醇增加毒性",
    diagnosis: {
      overview: "臨床症狀為主，病史通常不可靠",
      differentials: ["其他中毒（酒精、巴比妥、苯二氮卓）", "前庭疾病", "低血糖", "肝腦病"],
      initialDB: ["血糖", "血壓", "心電圖", "基礎生化", "尿液分析"],
      advanced: ["人用尿液THC快篩（假陰性常見）"]
    },
    treatment: {
      overview: "主要為支持治療，大多數病例自限性",
      acute: [
        "去污染：",
        "- 催吐（若攝入<30分鐘且意識清醒）",
        "- 活性炭：1-2 g/kg（注意誤吸風險）",
        "支持治療：",
        "- 靜脈輸液",
        "- 保暖（若低體溫）",
        "- 心搏過緩：Atropine 0.02-0.04 mg/kg IV（必要時）",
        "防止自傷：安靜環境、適當約束",
        "躁動控制：低劑量Diazepam",
        "防止誤吸（若嚴重意識抑制）",
        "脂肪乳劑（ILE）可能加速恢復（爭議）"
      ],
      chronic: ["通常不需要"]
    },
    prognosis: "大多數病例預後良好，症狀通常在24-72小時內消退。致死率極低，但高濃度食用品或合併其他毒素（巧克力）可能嚴重。",
    pearls: [
      "主人可能否認大麻暴露 - 不要過度依賴病史",
      "典型三聯症：共濟失調、尿失禁、對刺激過度反應",
      "人用THC尿液快篩對犬假陰性率高（~30%）",
      "食用品（brownies、gummies）可能含巧克力、木糖醇或高脂肪",
      "心搏過緩是大麻中毒特徵（與其他中毒不同）",
      "大多數病例支持治療即可恢復",
      "CBD產品通常毒性低，但可能含THC"
    ],
    monitoring: ["心率", "體溫", "神經狀態", "呼吸功能"],
    reference: "Peterson ME, Talcott PA: Small Animal Toxicology, 3rd Ed. Elsevier, 2013"
  },

  "organophosphate-toxicity": {
    zh: "有機磷中毒",
    en: "Organophosphate Toxicity",
    definition: "暴露於有機磷類化合物（農藥、殺蟲劑）導致的膽鹼酯酶抑制中毒，引起膽鹼能危象。",
    synonyms: ["有機磷農藥中毒", "OP Toxicosis", "Anticholinesterase Poisoning", "膽鹼酯酶抑制劑中毒"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["農業環境", "接觸殺蟲劑", "使用蚤藥項圈或噴霧（過量或不當使用）", "工業環境"]
    },
    clinicalPresentation: {
      history: ["接觸農藥/殺蟲劑史", "使用蚤藥產品後", "流涎", "嘔吐", "腹瀉", "呼吸困難"],
      physicalExam: [
        "SLUDGE/DUMBELS症狀（毒蕈鹼樣）：",
        "- S: Salivation（流涎）",
        "- L: Lacrimation（流淚）",
        "- U: Urination（排尿）",
        "- D: Defecation（排便）",
        "- G: GI distress（胃腸不適）",
        "- E: Emesis（嘔吐）",
        "尼古丁樣症狀：肌肉震顫、抽搐、虛弱、麻痺",
        "中樞症狀：躁動、癲癇、昏迷",
        "其他：瞳孔縮小、心搏過緩、支氣管痙攣、呼吸衰竭"
      ]
    },
    pathophysiology: "有機磷不可逆抑制乙醯膽鹼酯酶 → 乙醯膽鹼在突觸累積 → 過度刺激毒蕈鹼受體（腺體、平滑肌、心臟）和尼古丁受體（骨骼肌、神經節）→ 膽鹼能危象。若未及時治療，酶-磷複合物「老化」變得不可逆",
    diagnosis: {
      overview: "臨床症狀結合暴露史、膽鹼酯酶活性下降",
      differentials: ["氨基甲酸酯中毒", "其他膽鹼能藥物過量", "蘑菇中毒（某些種類）"],
      initialDB: ["膽鹼酯酶活性（血液或視網膜）", "血氣（呼吸性酸中毒）", "血糖", "電解質"],
      advanced: ["毒物篩檢確認"]
    },
    treatment: {
      overview: "穩定呼吸、解毒劑（Atropine、2-PAM）、去污染、支持治療",
      acute: [
        "穩定呼吸（最優先）：",
        "- 氧氣支持",
        "- 必要時氣管插管和機械通氣",
        "- 清除呼吸道分泌物",
        "解毒劑：",
        "- Atropine（阻斷毒蕈鹼症狀）：0.2-0.5 mg/kg IV，1/4劑量先給",
        "- 根據分泌物控制重複給藥（可能需要大量）",
        "- 目標：乾燥分泌物，不是瞳孔大小",
        "- Pralidoxime（2-PAM，重新活化膽鹼酯酶）：10-20 mg/kg IV slow，q8-12h",
        "- 2-PAM需在「老化」前使用（越早越好）",
        "去污染：",
        "- 皮膚暴露：肥皂水徹底沖洗",
        "- 口服暴露：活性炭（若已穩定）",
        "癲癇控制：Diazepam",
        "避免使用：Succinylcholine、吩噻嗪類"
      ],
      chronic: ["監測膽鹼酯酶恢復", "注意中間症候群（肌肉無力延遲發作）"]
    },
    prognosis: "及時治療預後可良好。延遲治療或嚴重呼吸抑制預後差。中間症候群可在中毒後1-4天出現。",
    pearls: [
      "SLUDGE是記憶毒蕈鹼症狀的助記詞",
      "呼吸衰竭是主要死因",
      "Atropine劑量按效果調整，不是固定劑量",
      "2-PAM越早給予越有效（在「老化」前）",
      "皮膚去污時工作人員需保護自己（PPE）",
      "Atropine只治療毒蕈鹼症狀，不治療肌肉無力",
      "氨基甲酸酯中毒類似但通常較輕（可逆抑制）"
    ],
    monitoring: ["呼吸功能", "分泌物量", "心率", "膽鹼酯酶活性", "神經肌肉功能"],
    reference: "Peterson ME, Talcott PA: Small Animal Toxicology, 3rd Ed. Elsevier, 2013"
  },

  "pyrethrin-permethrin-toxicity": {
    zh: "除蟲菊酯中毒",
    en: "Pyrethrin/Permethrin Toxicity",
    definition: "暴露於除蟲菊素（天然）或合成除蟲菊酯類（如百滅寧）導致的神經毒性，貓對合成除蟲菊酯極度敏感。",
    synonyms: ["百滅寧中毒", "Permethrin Toxicosis", "Pyrethroid Toxicity", "合成除蟲菊酯中毒"],
    epidemiology: {
      species: "貓對合成除蟲菊酯極度敏感，犬較耐受",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["誤用犬用除蚤產品於貓", "貓與剛使用除蚤產品的犬接觸", "小體型", "年幼或體弱"]
    },
    clinicalPresentation: {
      history: ["接觸除蚤/驅蟲產品史", "誤用犬用產品於貓", "貓舔舐同居犬身上的產品"],
      physicalExam: [
        "神經系統（主要）：肌肉震顫、抽搐、癲癇、共濟失調、過度興奮",
        "「耳尖抽動」是特徵性表現",
        "流涎、嘔吐",
        "瞳孔散大",
        "感覺過敏",
        "低體溫或高體溫",
        "死亡（嚴重時）"
      ]
    },
    pathophysiology: "除蟲菊酯延遲鈉離子通道關閉 → 神經過度興奮 → 反覆動作電位。貓缺乏葡萄糖醛酸化能力 → 代謝慢 → 毒性物質累積。II型除蟲菊酯（如百滅寧）毒性>I型",
    diagnosis: {
      overview: "典型病史（犬用產品用於貓）結合神經症狀",
      differentials: ["有機磷中毒", "蝸牛藥中毒", "癲癇", "低血糖", "低鈣血症"],
      initialDB: ["血糖", "電解質（Ca、Mg）", "體溫", "肝腎功能"],
      advanced: ["毒物篩檢（通常不需要）"]
    },
    treatment: {
      overview: "去污染、肌肉鬆弛劑/抗癲癇、支持治療",
      acute: [
        "去污染（重要）：",
        "- 局部暴露：用溫肥皂水或洗碗精徹底洗浴",
        "- 口服暴露：活性炭（若無癲癇）",
        "控制震顫和癲癇：",
        "- Methocarbamol：44-220 mg/kg IV slow（不超過330 mg/kg/day）",
        "- 或 Diazepam：0.5-2 mg/kg IV（按需重複）",
        "- 或 Propofol CRI（嚴重病例）",
        "脂肪乳劑療法（ILE）：",
        "- 20% Intralipid：1.5 mL/kg IV bolus over 15min",
        "- 然後 0.25 mL/kg/min x 30-60min",
        "- 可顯著加速恢復",
        "體溫控制（降溫若高熱，保暖若低體溫）",
        "靜脈輸液",
        "營養支持（恢復期）"
      ],
      chronic: ["通常完全恢復，無長期後遺症"]
    },
    prognosis: "積極治療預後良好，大多數貓在24-72小時內恢復。延遲治療或嚴重病例可能死亡。脂肪乳劑療法顯著改善預後。",
    pearls: [
      "永遠不要將犬用除蚤產品用於貓",
      "「耳尖抽動」是典型表現",
      "皮膚去污非常重要 - 徹底洗浴",
      "脂肪乳劑療法是近年重要進展",
      "Methocarbamol優於苯二氮卓類控制震顫",
      "警告主人：同居犬使用百滅寧產品後應與貓隔離",
      "低濃度除蟲菊素（貓用產品）通常安全"
    ],
    monitoring: ["震顫程度", "體溫", "心率", "神經狀態"],
    reference: "Peterson ME, Talcott PA: Small Animal Toxicology, 3rd Ed. Elsevier, 2013"
  },

  "lead-toxicity": {
    zh: "鉛中毒",
    en: "Lead Toxicity",
    definition: "攝入或吸入鉛導致的慢性或急性中毒，主要影響神經系統、消化系統和造血系統。",
    synonyms: ["鉛中毒", "Lead Poisoning", "Plumbism", "鉛毒症"],
    epidemiology: {
      species: "犬較常見，貓相對少見",
      age: "幼年動物更常見（啃咬行為、吸收率高）",
      sex: "無性別傾向",
      riskFactors: ["老舊建築（含鉛油漆）", "裝修環境", "接觸電池、彈藥、釣魚墜子、某些玩具"]
    },
    clinicalPresentation: {
      history: ["可能接觸鉛來源史", "嘔吐", "腹痛", "食慾下降", "行為改變", "癲癇"],
      physicalExam: [
        "消化系統：嘔吐、腹瀉或便秘、腹痛、食慾下降",
        "神經系統：行為改變、嗜睡、共濟失調、失明、癲癇（急性）",
        "造血系統：貧血（通常再生性）",
        "其他：牙齦鉛線（慢性，罕見）"
      ]
    },
    pathophysiology: "鉛抑制多種酶系統 → 血紅素合成障礙（δ-ALA脫水酶、血紅素合成酶）→ 貧血和嗜鹼性點彩紅血球；神經毒性（影響神經傳導、髓鞘形成）→ 腦病；GI毒性（平滑肌痙攣）→ 腹絞痛",
    diagnosis: {
      overview: "病史、臨床表現、血液鉛濃度升高",
      differentials: ["其他重金屬中毒", "癲癇其他原因", "胃腸道疾病", "貧血其他原因"],
      initialDB: [
        "血液鉛濃度（>40 μg/dL通常有症狀）",
        "CBC（再生性貧血、嗜鹼性點彩紅血球、有核紅血球）",
        "腹部X光（放射線不透性異物）",
        "生化（肝腎功能）"
      ],
      advanced: ["骨髓檢查", "尿鉛排泄"]
    },
    treatment: {
      overview: "去除鉛來源、螯合治療、控制神經症狀",
      acute: [
        "穩定（若有癲癇）：Diazepam",
        "控制腦水腫（若有）：Mannitol",
        "去除GI道鉛（若X光可見）：",
        "- 內視鏡取出",
        "- 或手術取出（大塊異物）",
        "- 高纖維飲食促進排出（小顆粒）",
        "螯合治療：",
        "- CaEDTA（首選）：25 mg/kg SC q6h x 5天",
        "- 休息5天後可重複療程",
        "- 或 Succimer（DMSA）：10 mg/kg PO q8h x 10天",
        "- D-Penicillamine：10-15 mg/kg PO q8h x 1-2週",
        "避免使用MgSO4或NaSO4（增加鉛吸收）"
      ],
      chronic: ["移除環境中的鉛來源", "可能需要多次螯合療程", "監測血鉛濃度"]
    },
    prognosis: "早期治療預後良好。神經損傷可能部分不可逆。慢性暴露可導致永久性損害。",
    pearls: [
      "幼年動物吸收率高（30-50% vs 成年10%）",
      "嗜鹼性點彩紅血球是重要線索（但不特異）",
      "腹部X光可見放射線不透性異物有診斷價值",
      "GI道鉛異物需先取出再螯合（避免增加吸收）",
      "CaEDTA通過SC給予避免局部刺激",
      "螯合治療期間需補充鋅（螯合劑也結合鋅）",
      "追蹤血鉛濃度確認治療效果"
    ],
    monitoring: ["血鉛濃度", "神經狀態", "CBC", "腎功能"],
    reference: "Peterson ME, Talcott PA: Small Animal Toxicology, 3rd Ed. Elsevier, 2013"
  },

  "zinc-toxicity": {
    zh: "鋅中毒",
    en: "Zinc Toxicity",
    definition: "攝入含鋅物質（硬幣、五金零件、氧化鋅乳膏）導致的中毒，引起溶血性貧血和多器官損傷。",
    synonyms: ["鋅中毒", "Zinc Poisoning", "Penny Toxicosis", "硬幣中毒"],
    epidemiology: {
      species: "犬較常見（喜吞異物），貓罕見",
      age: "幼年動物更常見",
      sex: "無性別傾向",
      riskFactors: ["接觸含鋅物品", "美國1983年後硬幣（高鋅含量）", "五金零件（螺帽、螺栓）", "氧化鋅乳膏"]
    },
    clinicalPresentation: {
      history: ["可能吞入異物史", "嘔吐", "腹瀉", "虛弱", "黃疸", "紅色/褐色尿"],
      physicalExam: [
        "消化系統：嘔吐、腹瀉、腹痛、食慾下降",
        "溶血性貧血：黏膜蒼白、黃疸、心搏過速、虛弱",
        "血紅蛋白尿/血紅蛋白血症",
        "多器官損傷：肝臟、腎臟、胰臟",
        "Heinz小體溶血（可能）"
      ]
    },
    pathophysiology: "胃酸環境中鋅溶解 → 鋅離子被吸收 → 紅血球膜損傷 → 血管內溶血；氧化應激 → Heinz小體形成；直接組織毒性 → 肝、腎、胰臟損傷",
    diagnosis: {
      overview: "病史、X光可見異物、溶血性貧血、血清鋅升高",
      differentials: ["IMHA", "其他溶血性貧血原因", "其他金屬中毒", "洋蔥/大蒜中毒"],
      initialDB: [
        "腹部X光（放射線不透性異物 - 硬幣、金屬物）",
        "CBC（再生性貧血、球形紅血球、Heinz小體）",
        "生化（肝腎功能、膽紅素升高）",
        "網織紅血球計數",
        "尿液分析（血紅蛋白尿）"
      ],
      advanced: ["血清鋅濃度（正常0.7-2.0 μg/mL）", "Coombs試驗（排除IMHA）"]
    },
    treatment: {
      overview: "移除鋅來源、支持溶血、器官功能保護",
      acute: [
        "移除鋅來源（優先）：",
        "- 催吐（若剛攝入且無症狀）",
        "- 內視鏡取出",
        "- 手術取出（若內視鏡失敗）",
        "輸血（若嚴重貧血）：",
        "- pRBC或全血",
        "- 目標PCV >20-25%",
        "輸液支持（維持腎灌注）",
        "止吐：Maropitant",
        "胃腸道保護：Omeprazole、Sucralfate",
        "螯合治療（爭議，通常不需要）",
        "監測並支持器官功能"
      ],
      chronic: ["監測PCV恢復", "肝腎功能追蹤"]
    },
    prognosis: "早期移除鋅來源且積極支持治療預後良好。延遲治療或嚴重溶血預後謹慎。",
    pearls: [
      "美國1983年後1分硬幣含97.5%鋅",
      "胃內酸性環境加速鋅溶解和吸收",
      "X光是快速診斷工具 - 尋找金屬異物",
      "移除異物是治療關鍵",
      "溶血可能在異物移除後持續數天",
      "鋅螯合治療通常不需要（移除來源即可）",
      "氧化鋅乳膏攝入較少引起嚴重中毒（吸收有限）"
    ],
    monitoring: ["PCV/TS", "網織紅血球", "肝腎功能", "尿液顏色"],
    reference: "Peterson ME, Talcott PA: Small Animal Toxicology, 3rd Ed. Elsevier, 2013"
  },

  "metaldehyde-toxicity": {
    zh: "蝸牛藥中毒",
    en: "Metaldehyde Toxicity",
    definition: "攝入含聚乙醛的蝸牛/蛞蝓誘餌導致的嚴重中毒，引起持續性肌肉震顫、癲癇和高熱。",
    synonyms: ["蝸牛餌中毒", "Slug Bait Poisoning", "Snail Bait Toxicosis", "聚乙醛中毒"],
    epidemiology: {
      species: "犬較常見（誘餌有吸引力），貓也可發生",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["花園使用蝸牛餌", "春季和秋季（蝸牛活躍季節）", "犬喜歡誘餌味道（可能含麩皮、糖蜜）"]
    },
    clinicalPresentation: {
      history: ["可能接觸蝸牛藥史", "焦躁", "肌肉震顫", "共濟失調", "癲癇"],
      physicalExam: [
        "神經系統：焦躁、過度興奮、共濟失調、持續性肌肉震顫（「顫動」）、強直陣攣性癲癇",
        "高熱（可達>42°C/108°F）- 因持續肌肉活動",
        "心搏過速、呼吸急促",
        "流涎、腹瀉",
        "角弓反張、刺激敏感",
        "肝衰竭（延遲，2-3天後）"
      ]
    },
    pathophysiology: "聚乙醛在胃中分解為乙醛 → GABA和單胺氧化酶抑制 → 神經興奮性增加 → 持續肌肉震顫 → 代謝產熱 → 惡性高熱 → 橫紋肌溶解、DIC、多器官衰竭",
    diagnosis: {
      overview: "典型臨床表現結合可能的暴露史",
      differentials: ["癲癇", "有機磷中毒", "士的寧中毒", "低血糖", "低血鈣", "腦炎"],
      initialDB: ["血糖", "電解質", "體溫", "肝腎功能", "CK（橫紋肌溶解）", "凝血功能"],
      advanced: ["毒物篩檢（胃內容物聚乙醛）"]
    },
    treatment: {
      overview: "控制震顫/癲癇、積極降溫、支持治療",
      acute: [
        "控制震顫和癲癇（最優先）：",
        "- Methocarbamol：55-220 mg/kg IV slow（首選控制震顫）",
        "- Diazepam：0.5-2 mg/kg IV",
        "- Propofol CRI：2-6 mg/kg/h（嚴重病例）",
        "- Pentobarbital：3-15 mg/kg IV（若上述無效）",
        "積極降溫：",
        "- 冷水浴、風扇、冷靜脈輸液",
        "- 目標：體溫<40°C/104°F",
        "去污染（若剛攝入且可行）：",
        "- 催吐（僅限清醒、無症狀）",
        "- 胃灌洗（麻醉下）",
        "- 活性炭：1-2 g/kg",
        "靜脈輸液（維持腎灌注、預防橫紋肌溶解併發症）",
        "肝臟保護：NAC、SAMe",
        "監測凝血功能（DIC風險）"
      ],
      chronic: ["肝功能監測（2-3天）", "腎功能監測"]
    },
    prognosis: "早期積極治療預後可良好。高熱未控制或發展為多器官衰竭預後差。致死劑量約100-600 mg/kg。",
    pearls: [
      "「shake and bake」- 震顫和高熱是特徵",
      "高熱是主要死因 - 積極降溫至關重要",
      "Methocarbamol比Diazepam更有效控制震顫",
      "肝衰竭可能在24-72小時後延遲出現",
      "教育主人使用寵物安全的替代產品",
      "某些蝸牛藥也含有機磷或氨基甲酸酯",
      "症狀可在攝入後1-3小時迅速出現"
    ],
    monitoring: ["體溫（q15-30min至穩定）", "震顫程度", "肝功能", "腎功能", "凝血功能", "CK"],
    reference: "Peterson ME, Talcott PA: Small Animal Toxicology, 3rd Ed. Elsevier, 2013"
  },

  "mushroom-toxicity": {
    zh: "蘑菇中毒",
    en: "Mushroom Toxicity",
    definition: "攝入有毒蘑菇導致的中毒，症狀取決於蘑菇種類，從輕微胃腸道症狀到致命肝衰竭。",
    synonyms: ["毒蕈中毒", "Toadstool Poisoning", "Mycetism", "野生蘑菇中毒"],
    epidemiology: {
      species: "犬較常見（戶外啃食行為），貓罕見",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["戶外活動", "潮濕環境", "秋季（蘑菇生長季節）", "院子或公園有野生蘑菇"]
    },
    clinicalPresentation: {
      history: ["可能攝入蘑菇史", "症狀取決於蘑菇類型"],
      physicalExam: [
        "A類（肝毒性 - Amanita, Galerina）：6-24小時延遲後GI症狀 → 假性恢復期 → 2-4天肝衰竭、黃疸、凝血障礙、死亡",
        "B類（神經毒性 - Inocybe, Clitocybe）：SLUDGE症狀（毒蕈鹼樣）- 流涎、流淚、排尿、排便",
        "C類（CNS興奮 - Psilocybe）：幻覺、共濟失調、行為異常、心搏過速",
        "D類（CNS抑制 - Amanita muscaria）：抑鬱、共濟失調、昏迷、癲癇",
        "E類（GI刺激 - 多種）：快速發作嘔吐、腹瀉、腹痛",
        "F類（溶血 - Gyromitra）：溶血、肝損傷"
      ]
    },
    pathophysiology: "因蘑菇毒素種類而異。Amatoxins（鵝膏毒素）：抑制RNA聚合酶II → 蛋白質合成停止 → 肝細胞壞死。Muscarine：毒蕈鹼受體激動。Psilocybin：血清素受體作用。",
    diagnosis: {
      overview: "病史結合臨床表現，蘑菇鑑定有助診斷",
      differentials: ["其他中毒", "胃腸道疾病", "肝病其他原因", "神經疾病"],
      initialDB: ["生化（肝腎功能）", "凝血功能", "CBC", "血糖", "電解質"],
      advanced: ["蘑菇鑑定（保留樣本/照片）", "毒素特異性檢測（通常不可用）"]
    },
    treatment: {
      overview: "去污染、支持治療、針對毒素類型特異性治療",
      acute: [
        "去污染：",
        "- 催吐（若攝入<1小時且無症狀）",
        "- 活性炭：1-2 g/kg（可重複）",
        "- 活性炭對Amatoxins重要（腸肝循環）",
        "肝毒性蘑菇（Amanita）特異性治療：",
        "- Silibinin/Silymarin：20-50 mg/kg/day IV/PO",
        "- N-Acetylcysteine：140 mg/kg loading，然後70 mg/kg q6h",
        "- Penicillin G：25-50萬U/kg/day IV",
        "- 高劑量葡萄糖輸液",
        "毒蕈鹼樣症狀：Atropine 0.04 mg/kg IV",
        "輸液支持",
        "止吐",
        "血液透析/血漿置換（Amatoxin中毒，若可用）",
        "肝移植（人類最後手段）"
      ],
      chronic: ["肝功能監測", "凝血功能監測"]
    },
    prognosis: "取決於蘑菇類型。GI刺激型預後良好。肝毒性蘑菇（Amanita）即使治療死亡率高（>50%）。症狀延遲出現（>6小時）提示更危險類型。",
    pearls: [
      "「延遲症狀（>6小時）= 危險蘑菇」",
      "Amanita phalloides（死亡帽蘑菇）是最致命的",
      "保留蘑菇樣本供鑑定（冷藏，不要冷凍）",
      "活性炭可重複給予（腸肝循環）",
      "不要依賴民間辨識方法（外觀不可靠）",
      "假性恢復期後突然惡化是Amatoxin中毒特徵",
      "聯繫毒物中心或真菌學專家協助鑑定"
    ],
    monitoring: ["肝功能（q6-12h初期）", "凝血功能", "腎功能", "血糖", "精神狀態"],
    reference: "Peterson ME, Talcott PA: Small Animal Toxicology, 3rd Ed. Elsevier, 2013"
  },

  "blue-green-algae-toxicity": {
    zh: "藍綠藻中毒",
    en: "Blue-Green Algae Toxicity",
    definition: "暴露於藍綠藻（藍藻/藍菌）產生的毒素導致的急性中毒，主要引起肝毒性或神經毒性。",
    synonyms: ["藍藻中毒", "Cyanobacteria Toxicosis", "Algal Toxicosis", "藍菌毒素中毒"],
    epidemiology: {
      species: "犬最常見（喜歡游泳、喝池塘水），貓和其他動物也可發生",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["溫暖季節", "停滯水體", "富營養化水域", "藻華期間", "犬游泳或喝受污染水"]
    },
    clinicalPresentation: {
      history: ["接觸池塘、湖泊或停滯水體", "游泳或喝水後不久發病", "發病極快（分鐘至數小時）"],
      physicalExam: [
        "神經毒素（Anatoxin-a）：肌肉震顫、強直、癲癇、呼吸麻痺、快速死亡（分鐘至小時）",
        "肝毒素（Microcystin）：嘔吐、腹瀉（可能帶血）、虛弱、黃疸、肝腫大、休克、DIC（數小時至數天）",
        "皮膚毒素：皮膚刺激、紅疹"
      ]
    },
    pathophysiology: "神經毒素（Anatoxin-a, Anatoxin-a(s)）：尼古丁受體激動（depolarizing block）→ 肌肉麻痺 → 呼吸衰竭。肝毒素（Microcystin, Nodularin）：蛋白磷酸酶抑制 → 肝細胞骨架破壞 → 大量肝細胞壞死 → 急性肝衰竭、休克",
    diagnosis: {
      overview: "典型暴露史結合快速發病、環境評估",
      differentials: ["其他快速作用中毒", "癲癇", "急性肝衰竭其他原因", "感染性疾病"],
      initialDB: ["肝功能（ALT、AST、ALP大幅升高）", "膽紅素", "凝血功能", "血糖", "電解質"],
      advanced: ["水樣本藻毒素檢測", "胃內容物/組織毒素檢測", "肝臟活檢/病理"]
    },
    treatment: {
      overview: "去污染、支持治療、肝臟保護（肝毒素），大多數神經毒素中毒因發展太快而無法有效治療",
      acute: [
        "去污染（若可行）：",
        "- 催吐（若剛暴露且無神經症狀）",
        "- 活性炭：1-2 g/kg",
        "- 皮膚暴露：徹底水洗",
        "神經毒素（支持治療為主）：",
        "- 呼吸支持（可能需要機械通氣）",
        "- 控制癲癇：Diazepam",
        "- Atropine（若為Anatoxin-a(s) - 膽鹼酯酶抑制）",
        "肝毒素：",
        "- 積極輸液",
        "- 肝臟保護：NAC、SAMe、Silymarin",
        "- 新鮮冷凍血漿（凝血障礙）",
        "- Vitamin K1（若PT延長）",
        "- 止吐",
        "膽酸結合劑（Cholestyramine）：可能減少毒素吸收"
      ],
      chronic: ["肝功能監測", "長期肝臟支持"]
    },
    prognosis: "預後通常極差。神經毒素：發病極快，多數在數小時內死亡。肝毒素：死亡率高，存活者可能有永久性肝損傷。",
    pearls: [
      "「看起來像豌豆湯或綠色油漆的水 = 危險」",
      "神經毒素作用極快 - 可能來不及治療",
      "肝毒素相對較慢發展但同樣致命",
      "溫暖天氣+富營養化水體 = 高風險",
      "教育主人：避免讓狗在藻華水體游泳或喝水",
      "即使少量暴露也可能致死",
      "保留水樣本供檢測"
    ],
    monitoring: ["神經功能", "呼吸功能", "肝功能（q6-12h）", "凝血功能", "血糖"],
    reference: "Peterson ME, Talcott PA: Small Animal Toxicology, 3rd Ed. Elsevier, 2013"
  }
};

// 匯出供整合使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TOXICOLOGICAL_DISEASES;
}

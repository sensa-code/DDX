// ======= 骨骼肌肉系統疾病 DISEASE_INFO =======
// 生成日期: 2026-02-04
// 包含: 髖關節發育不良、肘關節發育不良、前十字韌帶斷裂、髕骨脫位、離斷性骨軟骨炎、
//       泛骨炎、肥厚性骨營養不良、骨關節炎、免疫介導性多發性關節炎、化膿性關節炎、
//       骨折、股骨頭缺血性壞死、搖擺症候群、寰樞椎半脫位、腰薦椎疾病

const MUSCULOSKELETAL_DISEASES = {

  // ==================== 關節發育疾病 ====================

  "hip-dysplasia": {
    zh: "髖關節發育不良",
    en: "Hip Dysplasia",
    definition: "髖關節的發育異常，導致股骨頭與髖臼不能正確吻合，造成關節鬆弛、異常磨損和繼發性骨關節炎。是大型犬最常見的骨科發育疾病。",
    synonyms: ["Canine Hip Dysplasia", "CHD", "髖關節發育不全", "髖關節形成不良"],
    epidemiology: {
      species: "犬為主，貓罕見",
      age: "臨床症狀可在4-12月齡開始出現，或成年後因骨關節炎顯現",
      sex: "無明顯性別傾向",
      riskFactors: ["大型至巨型犬種（German Shepherd、Labrador、Golden Retriever、Rottweiler、Saint Bernard）", "遺傳因素（多基因遺傳）", "快速生長", "過度營養", "過度運動（幼犬時期）", "肥胖"]
    },
    clinicalPresentation: {
      history: ["後肢跛行（可單側或雙側）", "起立困難", "運動不耐", "上樓梯困難", "跳躍減少", "「兔跳」步態", "後肢肌肉萎縮", "症狀可能時好時壞"],
      physicalExam: ["Ortolani test陽性（關節鬆弛）", "後肢肌肉萎縮", "髖關節活動範圍減少", "外展時疼痛", "Barlow/Bardens test陽性", "站姿可見後肢基部狹窄"]
    },
    pathophysiology: "遺傳因素 + 環境因素 → 關節鬆弛 → 股骨頭與髖臼不穩定 → 異常應力分布 → 關節軟骨和關節囊損傷 → 骨重塑（骨刺形成、髖臼變淺、股骨頭變形）→ 繼發性骨關節炎。關節鬆弛是起始病因，骨關節炎是最終結果。",
    diagnosis: {
      overview: "X光檢查是確診的標準方法，需評估關節鬆弛度和骨關節炎程度",
      differentials: ["髕骨脫位", "前十字韌帶斷裂", "股骨頭缺血性壞死", "泛骨炎", "腰薦椎疾病", "多發性關節炎"],
      initialDB: ["骨科檢查（Ortolani test）", "髖關節X光（標準伸展位）", "評估骨關節炎程度", "觀察股骨頭覆蓋率和關節吻合度"],
      advanced: ["PennHIP放射檢查（評估鬆弛度指數）", "CT掃描（手術計畫）", "關節液分析（排除感染或免疫性）"]
    },
    treatment: {
      overview: "根據年齡、症狀嚴重度和關節退化程度選擇保守或手術治療",
      acute: [
        "急性疼痛發作管理：",
        "  - 休息和活動限制",
        "  - NSAIDs: Carprofen 2.2 mg/kg PO q12h 或 4.4 mg/kg q24h",
        "  - Meloxicam 0.1 mg/kg PO q24h（維持劑量）",
        "  - 冰敷（急性期）",
        "體重管理"
      ],
      chronic: [
        "保守治療：",
        "  - 體重控制（最重要）",
        "  - 適度規律運動（游泳最佳）",
        "  - NSAIDs長期使用（注意監測）",
        "  - 關節保健品（Glucosamine、Chondroitin、Omega-3）",
        "  - 物理治療和復健",
        "手術選項：",
        "  - 幼犬（<5-6月齡）：JPS（Juvenile Pubic Symphysiodesis）",
        "  - 幼犬-青年犬：TPO/DPO（Triple/Double Pelvic Osteotomy）",
        "  - 成犬：THR（Total Hip Replacement）- 最佳預後",
        "  - FHO（Femoral Head Ostectomy）- 姑息性，適用小型犬"
      ]
    },
    prognosis: "保守治療可維持多數犬的生活品質。THR手術成功率>90%，可恢復正常功能。FHO小型犬預後較好。早期診斷和介入可延緩骨關節炎進展。",
    pearls: [
      "PennHIP在16週齡即可評估，是最準確的鬆弛度測量",
      "OFA評估需24月齡，主要評估骨關節炎而非鬆弛度",
      "體重控制是所有治療的基礎",
      "雙側症狀時應同時評估兩側",
      "繁殖犬應進行髖關節評估篩選"
    ],
    monitoring: ["體重", "跛行評分", "定期X光追蹤", "肝腎功能（若長期使用NSAIDs）", "生活品質評估"],
    reference: "Tobias KM, Johnston SA: Veterinary Surgery: Small Animal, 2nd Ed. Elsevier, 2018"
  },

  "elbow-dysplasia": {
    zh: "肘關節發育不良",
    en: "Elbow Dysplasia",
    definition: "肘關節發育異常的總稱，包括內側冠狀突分離(FCP)、肘突不癒合(UAP)、骨軟骨炎(OCD)和肘關節不協調。是大型犬前肢跛行最常見的原因之一。",
    synonyms: ["Canine Elbow Dysplasia", "ED", "肘關節發育不全", "肘關節形成不良"],
    epidemiology: {
      species: "犬為主",
      age: "通常4-10月齡開始出現症狀",
      sex: "公犬略多",
      riskFactors: ["大型犬種（Labrador、Golden Retriever、Rottweiler、German Shepherd、Bernese Mountain Dog）", "遺傳因素", "快速生長", "營養過剩", "過度運動"]
    },
    clinicalPresentation: {
      history: ["前肢跛行（常單側，但50%為雙側）", "運動後加重", "起立僵硬", "行走時肘部外展", "活動力下降", "症狀可能從幼年持續"],
      physicalExam: ["肘關節腫脹", "關節活動時疼痛", "完全伸展和屈曲時疼痛", "肌肉萎縮（前臂肌群）", "關節活動範圍可能減少", "步態異常（划圓步態）"]
    },
    pathophysiology: "遺傳因素 + 生長不協調 → 尺骨-橈骨-肱骨生長速率不匹配 → 關節不協調 → 異常應力 → 軟骨損傷和骨碎片形成。FCP最常見（67%），UAP和OCD較少見。關節不協調導致內側關節面承受過大壓力。",
    diagnosis: {
      overview: "X光檢查是初步診斷標準，但CT或關節鏡可提供更精確評估",
      differentials: ["肩關節OCD", "泛骨炎", "骨折", "全骨炎", "免疫性多發性關節炎"],
      initialDB: ["骨科檢查", "肘關節X光（至少3個角度：AP、ML、flexed ML）", "評估骨關節炎程度", "對側比較"],
      advanced: ["CT掃描（FCP診斷的gold standard）", "關節鏡（診斷和治療）", "MRI（軟骨評估）", "關節液分析"]
    },
    treatment: {
      overview: "手術治療是多數病例的首選，尤其是年輕有症狀的犬",
      acute: [
        "症狀控制：",
        "  - 休息和活動限制",
        "  - NSAIDs: Carprofen或Meloxicam",
        "  - 冰敷",
        "等待手術評估"
      ],
      chronic: [
        "手術治療（建議）：",
        "  - FCP: 關節鏡碎片移除、冠狀突次全切除術、PAUL手術",
        "  - UAP: 肘突固定或移除、尺骨截骨術",
        "  - OCD: 病灶清創",
        "  - 關節不協調: 尺骨/橈骨截骨術",
        "保守治療（輕度或老年）：",
        "  - 體重管理",
        "  - NSAIDs",
        "  - 關節保健品",
        "  - 物理治療",
        "  - 適度運動",
        "末期骨關節炎：關節置換或關節固定術"
      ]
    },
    prognosis: "早期手術治療預後較好，但多數犬仍會發展骨關節炎。晚期診斷或嚴重骨關節炎預後較保守。手術可減緩骨關節炎進展和改善功能。",
    pearls: [
      "X光可能漏診早期FCP，CT更敏感",
      "雙側病例需同時評估兩側",
      "術後仍需長期骨關節炎管理",
      "早期手術（<1歲）預後較佳",
      "繁殖犬應進行肘關節評估篩選"
    ],
    monitoring: ["跛行評分", "關節腫脹", "活動範圍", "X光追蹤", "生活品質"],
    reference: "Tobias KM, Johnston SA: Veterinary Surgery: Small Animal, 2nd Ed. Elsevier, 2018"
  },

  // ==================== 韌帶和軟骨疾病 ====================

  "cranial-cruciate-ligament-rupture": {
    zh: "前十字韌帶斷裂",
    en: "Cranial Cruciate Ligament Rupture",
    definition: "膝關節前十字韌帶（CCL/ACL）的部分或完全斷裂，導致關節不穩定、疼痛和繼發性骨關節炎。是犬後肢跛行最常見的骨科原因。",
    synonyms: ["CCL Rupture", "ACL Tear", "Cruciate Disease", "十字韌帶損傷", "前交叉韌帶斷裂"],
    epidemiology: {
      species: "犬常見，貓少見",
      age: "任何年齡，中年犬最常見（4-7歲）",
      sex: "已絕育動物風險較高",
      riskFactors: ["肥胖", "絕育", "品種傾向（Labrador、Rottweiler、Newfoundland、Staffordshire Terrier）", "膝關節結構異常（脛骨平台角度過陡）", "對側CCL斷裂史（40-60%會發生對側斷裂）"]
    },
    clinicalPresentation: {
      history: ["急性後肢跛行（可能在活動中突然發生）", "逐漸惡化的慢性跛行", "起立困難", "坐姿異常（患肢外伸）", "活動力下降", "常見雙側問題"],
      physicalExam: ["膝關節腫脹（尤其內側）", "抽屜試驗陽性（Cranial drawer test）", "脛骨前移試驗陽性（Tibial thrust test）", "膝關節活動時疼痛", "肌肉萎縮（股四頭肌）", "可能有半月板click", "坐姿時患肢外展"]
    },
    pathophysiology: "犬CCL斷裂主要是退化性疾病而非急性創傷（與人類不同）。韌帶退化 → 部分撕裂 → 完全斷裂 → 膝關節不穩定 → 異常負荷 → 軟骨損傷 + 半月板損傷 → 骨關節炎。脛骨平台角度過陡會增加韌帶負荷。",
    diagnosis: {
      overview: "臨床檢查（抽屜試驗）通常足以診斷，影像學用於評估骨關節炎和排除其他問題",
      differentials: ["髕骨脫位", "髖關節疾病", "腰薦椎疾病", "多發性關節炎", "骨腫瘤", "半月板損傷（可併發）"],
      initialDB: ["骨科檢查（抽屜試驗、脛骨前移試驗）", "膝關節X光（關節積液、骨關節炎）", "對側膝關節評估"],
      advanced: ["關節液分析", "MRI（評估半月板和部分撕裂）", "CT（手術計畫，測量脛骨平台角度）", "關節鏡"]
    },
    treatment: {
      overview: "手術治療是>15-20kg犬的首選；小型犬可考慮保守治療",
      acute: [
        "初期穩定：",
        "  - 休息和活動限制",
        "  - NSAIDs止痛",
        "  - 冰敷",
        "安排手術評估"
      ],
      chronic: [
        "手術治療（建議）：",
        "  - TPLO（Tibial Plateau Leveling Osteotomy）- 最常用",
        "  - TTA（Tibial Tuberosity Advancement）",
        "  - CBLO（CORA-Based Leveling Osteotomy）",
        "  - 關節外穩定術（小型犬，lateral suture）",
        "  - TightRope技術",
        "保守治療（<15kg或手術風險高）：",
        "  - 嚴格休息8-12週",
        "  - 體重控制",
        "  - NSAIDs",
        "  - 物理治療",
        "  - 護膝支架",
        "半月板損傷需同時處理"
      ]
    },
    prognosis: "手術治療成功率約90%，可恢復良好功能。保守治療小型犬預後較好，大型犬較差。40-60%犬會發生對側CCL斷裂。骨關節炎會持續進展但可良好管理。",
    pearls: [
      "部分撕裂可能抽屜試驗陰性",
      "鎮靜下檢查更準確",
      "X光看不到韌帶，但可見關節積液和骨關節炎",
      "術後對側預防性體重管理很重要",
      "半月板損傷會影響預後"
    ],
    monitoring: ["跛行評分", "肌肉量評估", "對側膝關節狀態", "體重", "骨關節炎進展"],
    reference: "Tobias KM, Johnston SA: Veterinary Surgery: Small Animal, 2nd Ed. Elsevier, 2018"
  },

  "patellar-luxation": {
    zh: "髕骨脫位",
    en: "Patellar Luxation",
    definition: "髕骨從股骨滑車溝脫出，可向內側（最常見）或外側脫位。是小型犬最常見的骨科問題之一。",
    synonyms: ["Luxating Patella", "Slipped Kneecap", "膝蓋骨脫臼", "髕骨脫臼"],
    epidemiology: {
      species: "犬常見，貓少見",
      age: "先天性或幼年發病，症狀可能到成年才明顯",
      sex: "無明顯性別傾向",
      riskFactors: ["小型犬種（Pomeranian、Chihuahua、Yorkshire Terrier、Toy/Miniature Poodle）", "內側脫位>外側", "大型犬外側脫位較多", "遺傳因素"]
    },
    clinicalPresentation: {
      history: ["間歇性後肢跛行（突然提腿、抖腿後恢復）", "「跳躍」步態", "內八或外八步態", "可能無症狀", "雙側常見"],
      physicalExam: ["髕骨可手動脫位和復位", "分級（Grade I-IV）", "股骨和脛骨可能變形", "膝關節可能有腫脹", "可能併發CCL損傷"]
    },
    pathophysiology: "先天性骨骼和軟組織發育異常 → 伸肌機制排列不正 → 髕骨被牽拉出滑車溝 → 反覆脫位 → 軟骨磨損 → 骨關節炎。內側脫位常伴隨股骨內翻、脛骨內旋、滑車溝變淺。",
    diagnosis: {
      overview: "觸診髕骨可脫位即可診斷，X光用於評估骨骼變形和手術計畫",
      differentials: ["前十字韌帶斷裂", "髖關節疾病", "股骨頭缺血性壞死（小型犬）", "脛骨骨折"],
      initialDB: ["骨科檢查和髕骨脫位分級", "膝關節X光（VD和lateral）", "評估骨骼變形程度"],
      advanced: ["CT（嚴重變形病例的手術計畫）", "評估CCL完整性"]
    },
    treatment: {
      overview: "Grade II以上有症狀的病例建議手術治療",
      acute: [
        "急性脫位無法復位：",
        "  - 可嘗試手動復位",
        "  - 休息",
        "  - 止痛藥物"
      ],
      chronic: [
        "分級治療建議：",
        "  - Grade I: 通常不需治療，監測",
        "  - Grade II: 若有症狀，建議手術",
        "  - Grade III-IV: 強烈建議手術",
        "手術技術組合：",
        "  - 滑車溝加深術（Trochleoplasty）",
        "  - 脛骨粗隆移位術（TTT）",
        "  - 關節囊縫縮術",
        "  - 外側或內側支持帶放鬆/緊縮",
        "  - 股骨/脛骨矯正截骨術（嚴重變形）",
        "保守治療（Grade I或手術禁忌）：",
        "  - 體重管理",
        "  - 適度運動",
        "  - 關節保健品",
        "  - NSAIDs（需要時）"
      ]
    },
    prognosis: "手術成功率約90%。Grade I-II預後優良，Grade III-IV預後良好但較高復發率。小型犬預後通常優於大型犬。",
    pearls: [
      "分級：I=可脫位可自動復位；II=可脫位需手動復位；III=持續脫位可手動復位；IV=永久脫位無法復位",
      "雙側手術可同時或分階段進行",
      "大型犬常需更複雜的矯正",
      "CCL損傷是常見併發症",
      "繁殖犬應進行篩選"
    ],
    monitoring: ["跛行評分", "髕骨穩定性", "骨關節炎進展", "對側狀態"],
    reference: "Tobias KM, Johnston SA: Veterinary Surgery: Small Animal, 2nd Ed. Elsevier, 2018"
  },

  "osteochondrosis-dissecans": {
    zh: "離斷性骨軟骨炎",
    en: "Osteochondrosis Dissecans (OCD)",
    definition: "軟骨內骨化過程異常，導致關節軟骨和軟骨下骨增厚、壞死，最終軟骨碎片剝離形成關節鼠。常見於肩關節，也可發生於肘、膝和跗關節。",
    synonyms: ["OCD", "Osteochondritis Dissecans", "骨軟骨炎", "離斷性骨軟骨病"],
    epidemiology: {
      species: "犬為主",
      age: "4-8月齡發病，症狀可能延遲出現",
      sex: "公犬較多（約2:1）",
      riskFactors: ["大型至巨型犬種（Labrador、Golden Retriever、Great Dane、Rottweiler）", "快速生長", "營養過剩（鈣、能量）", "遺傳因素"]
    },
    clinicalPresentation: {
      history: ["漸進性跛行", "運動後加重", "休息後改善", "肩關節OCD最常見（前肢跛行）", "可能雙側（25-50%）"],
      physicalExam: ["關節腫脹", "關節活動範圍受限", "完全伸展時疼痛", "肌肉萎縮", "肩OCD：肩關節外展和伸展時疼痛"]
    },
    pathophysiology: "遺傳因素 + 營養因素（過量鈣、能量） + 外傷 → 軟骨內骨化障礙 → 軟骨過度增厚 → 深層軟骨壞死 → 軟骨碎片剝離 → 關節鼠形成 → 關節炎症和骨關節炎。好發於承重區域的關節面。",
    diagnosis: {
      overview: "X光檢查可見軟骨下骨缺損，關節鏡是gold standard",
      differentials: ["肘關節發育不良", "泛骨炎", "肥厚性骨營養不良", "外傷性骨折", "感染性關節炎"],
      initialDB: ["骨科檢查", "病變關節X光（多角度）", "對側比較", "評估其他關節（常多發）"],
      advanced: ["關節鏡（診斷+治療）", "CT或MRI（評估病變範圍）", "關節液分析"]
    },
    treatment: {
      overview: "手術移除碎片是治療標準，尤其對於大型碎片和明顯跛行",
      acute: [
        "診斷確立後：",
        "  - 休息和活動限制",
        "  - NSAIDs止痛",
        "  - 安排手術"
      ],
      chronic: [
        "手術治療（首選）：",
        "  - 關節鏡碎片移除和病灶清創",
        "  - 開放性手術（無關節鏡時）",
        "  - OATs或軟骨移植（大範圍缺損）",
        "保守治療（無明顯碎片或手術禁忌）：",
        "  - 休息4-6週",
        "  - 體重管理",
        "  - NSAIDs",
        "  - 關節保健品",
        "  - 物理治療",
        "術後管理：",
        "  - 限制活動4-6週",
        "  - 物理治療",
        "  - 關節保健品"
      ]
    },
    prognosis: "肩關節OCD手術後預後優良（>90%功能恢復）。肘和跗關節預後較保守。早期診斷和治療預後較好。繼發性骨關節炎會持續進展。",
    pearls: [
      "肩關節OCD預後最好，膝關節最差",
      "雙側發病率高，應評估對側",
      "大型犬幼犬飲食應控制鈣和熱量",
      "X光「典型缺損」可能在病程後期才明顯",
      "關節鏡是診斷和治療的gold standard"
    ],
    monitoring: ["跛行評分", "關節活動範圍", "X光追蹤", "生活品質"],
    reference: "Tobias KM, Johnston SA: Veterinary Surgery: Small Animal, 2nd Ed. Elsevier, 2018"
  },

  // ==================== 發育性骨病 ====================

  "panosteitis": {
    zh: "泛骨炎",
    en: "Panosteitis",
    definition: "大型犬的自限性、自發性骨髓炎，特徵為長骨骨髓腔的炎症性病變，導致間歇性跛行。常稱為「生長痛」。",
    synonyms: ["Pano", "Enostosis", "Eosinophilic Panosteitis", "生長痛", "游走性跛行"],
    epidemiology: {
      species: "犬（大型犬）",
      age: "5-18月齡最常見，可達5歲",
      sex: "公犬較多（4:1）",
      riskFactors: ["大型犬種（German Shepherd最常見、Great Dane、Doberman、Golden Retriever、Labrador）", "快速生長期"]
    },
    clinicalPresentation: {
      history: ["急性跛行（單肢或多肢）", "「游走性」跛行（不同肢體輪流）", "發作性（好幾天後復發）", "可能發燒", "食慾下降", "活動力減低"],
      physicalExam: ["長骨觸診疼痛（尤其骨幹中段）", "輕度發燒", "跛行程度不一", "可能多肢同時或輪流受影響", "最常見尺骨，其次肱骨、股骨、脛骨、橈骨"]
    },
    pathophysiology: "病因不明。可能涉及：血管問題、代謝異常、感染、自體免疫。病理變化：骨髓腔脂肪細胞被纖維組織和新生骨取代 → 骨內壓增加 → 疼痛。是自限性疾病，通常會自行消退。",
    diagnosis: {
      overview: "臨床症狀結合典型X光表現可確診",
      differentials: ["肥厚性骨營養不良（HOD）", "骨髓炎", "骨腫瘤", "OCD", "肘/髖關節發育不良", "骨折"],
      initialDB: ["骨科檢查（長骨觸診）", "長骨X光（可能需要多次檢查）", "CBC（可能有輕度嗜酸性球增多）"],
      advanced: ["骨掃描（早期診斷）", "骨活檢（罕需要）"]
    },
    treatment: {
      overview: "支持性治療為主，疾病會自行消退",
      acute: [
        "止痛治療：",
        "  - NSAIDs: Carprofen 2.2 mg/kg PO q12h",
        "  - Meloxicam 0.1 mg/kg PO q24h",
        "休息（避免過度活動）",
        "發燒時支持照護"
      ],
      chronic: [
        "間歇性給予NSAIDs（症狀發作時）",
        "避免過度限制活動",
        "營養適當（避免過度營養）",
        "等待自然消退",
        "監測症狀變化"
      ]
    },
    prognosis: "預後優良。自限性疾病，通常在18-24月齡前自行消退。不會造成永久損傷。",
    pearls: [
      "典型X光：骨髓腔內不規則高密度影（棉花狀）",
      "X光變化可能落後臨床症狀2-3週",
      "「游走性」跛行是特徵",
      "German Shepherd是最常見品種",
      "不需要抗生素治療"
    ],
    monitoring: ["症狀發作頻率和嚴重度", "體重和生長", "X光追蹤（若診斷不確定）"],
    reference: "Tobias KM, Johnston SA: Veterinary Surgery: Small Animal, 2nd Ed. Elsevier, 2018"
  },

  "hypertrophic-osteodystrophy": {
    zh: "肥厚性骨營養不良",
    en: "Hypertrophic Osteodystrophy",
    definition: "大型犬幼犬的骨骼發育疾病，影響長骨生長板區域，特徵為生長板周圍的炎症和壞死。通常伴隨全身症狀。",
    synonyms: ["HOD", "Metaphyseal Osteopathy", "骨幹端骨病"],
    epidemiology: {
      species: "犬（大型至巨型犬）",
      age: "2-8月齡（快速生長期）",
      sex: "公犬略多",
      riskFactors: ["大型至巨型犬種（Great Dane、Weimaraner、Irish Setter、German Shepherd）", "營養過剩", "維生素C補充過量（有爭議）", "可能與某些疫苗相關"]
    },
    clinicalPresentation: {
      history: ["急性跛行（可多肢）", "發燒（常39.5-41°C）", "食慾不振", "嗜睡", "不願站立或行走", "四肢末端腫脹"],
      physicalExam: ["長骨骨幹端腫脹、溫熱、疼痛", "最常見橈/尺骨遠端、脛骨遠端", "高燒", "淋巴結腫大", "可能脫水", "可能有膿性眼鼻分泌物（嚴重病例）"]
    },
    pathophysiology: "病因不明，可能涉及：感染因素、免疫反應、營養因素。生長板附近的血管炎 → 血流中斷 → 骨組織壞死 → 炎症反應 → 骨幹端腫脹和疼痛。嚴重病例可能導致生長板損傷和骨骼畸形。",
    diagnosis: {
      overview: "典型臨床表現和X光變化可確診",
      differentials: ["泛骨炎", "骨髓炎", "肥厚性骨關節病（HPO）", "敗血性關節炎", "營養性繼發性甲狀旁腺功能亢進"],
      initialDB: ["骨科檢查", "長骨X光（尤其橈/尺骨、脛骨遠端）", "CBC（可能有白血球增多）", "生化（可能有低蛋白）"],
      advanced: ["血液培養（排除敗血症）", "關節液分析", "骨活檢（罕需要）"]
    },
    treatment: {
      overview: "主要為支持性治療，嚴重病例需積極介入",
      acute: [
        "止痛治療：",
        "  - NSAIDs: Carprofen或Meloxicam",
        "  - 嚴重病例可考慮短期類固醇",
        "輸液支持（脫水或發燒）",
        "營養支持",
        "舒適護理（軟墊、保溫）"
      ],
      chronic: [
        "飲食調整：",
        "  - 改為成犬飼料或控制熱量",
        "  - 避免額外鈣或維生素補充",
        "持續止痛管理",
        "監測生長板損傷",
        "限制過度活動",
        "復發時重新治療"
      ]
    },
    prognosis: "多數病例預後良好，會在數週內改善。嚴重或復發病例可能有骨骼變形後遺症。Weimaraner品種預後可能較差。",
    pearls: [
      "典型X光：生長板附近「雙線徵」（透亮線+硬化線）",
      "與泛骨炎不同：HOD有全身症狀、影響骨幹端",
      "不要額外補充鈣或維生素D",
      "Weimaraner可能有更嚴重的表現",
      "部分病例與犬瘟熱疫苗相關（仍有爭議）"
    ],
    monitoring: ["體溫", "食慾和體重", "跛行和疼痛程度", "X光追蹤（評估骨骼變形）"],
    reference: "Tobias KM, Johnston SA: Veterinary Surgery: Small Animal, 2nd Ed. Elsevier, 2018"
  },

  // ==================== 關節炎疾病 ====================

  "osteoarthritis": {
    zh: "骨關節炎",
    en: "Osteoarthritis",
    definition: "關節軟骨退化、關節周圍骨增生和滑膜炎的進行性退化性關節疾病。是犬貓最常見的慢性疼痛原因之一。也稱為退化性關節疾病(DJD)。",
    synonyms: ["OA", "Degenerative Joint Disease", "DJD", "退化性關節炎", "關節退化"],
    epidemiology: {
      species: "犬貓皆常見（犬20%，貓>60%老年貓）",
      age: "隨年齡增加，中老年最常見",
      sex: "無明顯性別傾向",
      riskFactors: ["年齡", "肥胖", "先前關節損傷/手術", "發育性疾病（髖/肘關節發育不良）", "關節不穩定（CCL斷裂）", "工作犬/運動犬"]
    },
    clinicalPresentation: {
      history: ["漸進性跛行", "起立困難（休息後僵硬）", "活動力下降", "上下樓梯困難", "跳躍減少", "「暖機」後改善", "天氣變化時加重", "貓：梳理減少、跳躍改變、如廁習慣改變"],
      physicalExam: ["關節腫脹（骨性或液體性）", "關節活動範圍減少", "活動時疼痛/不適", "肌肉萎縮", "骨贅形成（可觸及）", "關節不穩定（若有前置因素）"]
    },
    pathophysiology: "關節損傷或老化 → 軟骨基質降解（MMPs增加）→ 軟骨細胞死亡 → 軟骨變薄 → 軟骨下骨暴露 → 骨刺形成 → 滑膜炎症 → 關節囊纖維化 → 惡性循環。是不可逆的進行性疾病。",
    diagnosis: {
      overview: "根據臨床症狀和X光變化診斷",
      differentials: ["免疫介導性多發性關節炎", "感染性關節炎", "腫瘤性關節疾病", "神經性疼痛", "軟組織損傷"],
      initialDB: ["完整骨科檢查", "受影響關節X光", "CBC和生化（使用NSAIDs前基線）"],
      advanced: ["關節液分析（排除感染或免疫性）", "進階影像（MRI）", "關節鏡"]
    },
    treatment: {
      overview: "多模式治療：體重管理、運動調整、止痛藥物、營養補充、物理治療",
      acute: [
        "急性發作管理：",
        "  - 休息和活動限制",
        "  - NSAIDs: Carprofen、Meloxicam、Robenacoxib（貓）",
        "  - 冰敷",
        "  - 可考慮短期Tramadol輔助"
      ],
      chronic: [
        "核心治療：",
        "  - 體重管理（最重要）",
        "  - 適度運動（規律、低衝擊）",
        "  - 環境調整（軟墊、坡道、低矮貓砂盆）",
        "藥物治療：",
        "  - NSAIDs長期使用（定期監測肝腎）",
        "  - Librela（bedinvetmab，抗NGF抗體）：犬每月注射",
        "  - Solensia（frunevetmab）：貓每月注射",
        "  - Gabapentin: 5-10 mg/kg q8-12h（神經性疼痛）",
        "  - Amantadine: 3-5 mg/kg q24h（NMDA拮抗）",
        "營養補充：",
        "  - Omega-3脂肪酸（EPA/DHA）",
        "  - Glucosamine/Chondroitin",
        "  - 處方關節飲食",
        "物理治療：",
        "  - 水療（游泳、水中跑步機）",
        "  - 物理復健",
        "  - 針灸（可考慮）",
        "關節注射：",
        "  - 關節內類固醇（慎用）",
        "  - PRP、幹細胞治療（新興）"
      ]
    },
    prognosis: "無法治癒但可良好管理。多數動物經適當治療可維持良好生活品質。體重控制是最有效的介入措施。",
    pearls: [
      "貓的OA被嚴重低估，常誤認為「正常老化」",
      "X光變化與臨床症狀不一定相關",
      "多模式治療比單一藥物更有效",
      "Librela/Solensia是安全有效的新選擇",
      "定期監測NSAIDs的肝腎影響"
    ],
    monitoring: ["疼痛評分", "活動力/生活品質評估", "體重", "肝腎功能（使用NSAIDs時）", "X光追蹤（病程進展）"],
    reference: "Lascelles BD, et al: Joint diseases in canine and feline. JAAHA 55:1-10, 2019"
  },

  "immune-mediated-polyarthritis": {
    zh: "免疫介導性多發性關節炎",
    en: "Immune-Mediated Polyarthritis",
    definition: "免疫系統攻擊關節滑膜導致的非侵蝕性或侵蝕性多發性關節炎。可為原發性（特發性）或繼發於感染、腫瘤或藥物。",
    synonyms: ["IMPA", "Idiopathic Polyarthritis", "免疫性關節炎", "多發性關節炎"],
    epidemiology: {
      species: "犬較常見，貓也可發生",
      age: "任何年齡，年輕至中年成犬最常見",
      sex: "某些類型公犬較多",
      riskFactors: ["品種傾向（Shar-Pei、Akita、German Shepherd、Boxer）", "慢性感染", "腫瘤", "某些藥物", "疫苗接種後"]
    },
    clinicalPresentation: {
      history: ["多關節跛行（常移行性）", "僵硬（尤其休息後）", "發燒", "食慾減退", "嗜睡", "不願行走", "症狀可能時好時壞"],
      physicalExam: ["多個關節腫脹、溫熱", "關節活動時疼痛", "常見腕、跗、膝、肘關節", "發燒", "淋巴結腫大", "可能有原發病的其他發現"]
    },
    pathophysiology: "免疫複合物沉積於滑膜 → 補體活化 → 發炎細胞浸潤 → 滑膜炎症 → 關節積液和疼痛。非侵蝕性不破壞軟骨；侵蝕性（如類風濕）會破壞軟骨和骨。繼發性IMPA需尋找潛在觸發因素。",
    diagnosis: {
      overview: "關節液分析是診斷關鍵，需排除感染和尋找繼發原因",
      differentials: ["敗血性/感染性關節炎", "萊姆病關節炎", "骨關節炎", "離斷性骨軟骨炎", "全身性紅斑狼瘡", "類風濕關節炎"],
      initialDB: ["完整骨科檢查", "多關節X光", "關節液分析（多個關節）", "CBC和生化", "尿液分析"],
      advanced: ["ANA、RF檢測", "傳染病篩檢（Borrelia、Ehrlichia等）", "胸腹X光/超音波（尋找腫瘤/感染源）", "關節液培養", "骨活檢（侵蝕性病例）"]
    },
    treatment: {
      overview: "免疫抑制治療，同時尋找並治療繼發原因",
      acute: [
        "免疫抑制治療：",
        "  - Prednisolone: 2-4 mg/kg/day PO（初始劑量）",
        "  - 分1-2次給予",
        "止痛輔助（若需要）：",
        "  - 避免同時使用NSAIDs和類固醇",
        "繼發性IMPA需同時治療原發病"
      ],
      chronic: [
        "緩慢減量類固醇：",
        "  - 症狀緩解後2-4週開始減量",
        "  - 每2-4週減25%",
        "  - 目標：最低有效劑量或停藥",
        "若類固醇反應差或需長期高劑量：",
        "  - Azathioprine: 2 mg/kg PO q24h（犬）",
        "  - Cyclosporine: 5 mg/kg PO q12-24h",
        "  - Leflunomide: 2-4 mg/kg PO q24h",
        "  - Mycophenolate: 10 mg/kg PO q12h",
        "侵蝕性關節炎可能需要更積極治療"
      ]
    },
    prognosis: "原發性IMPA預後通常良好，多數可達緩解（約70%）。繼發性預後取決於原發病。侵蝕性（類風濕）預後較差。復發常見，可能需長期低劑量維持。",
    pearls: [
      "關節液：典型為非感染性炎症（WBC升高，以中性球為主，無細菌）",
      "Shar-Pei可能有特殊的反覆發燒多發性關節炎",
      "排除感染非常重要（培養！）",
      "藥物誘發型停藥後可能改善",
      "監測類固醇副作用（PU/PD、肝酶升高）"
    ],
    monitoring: ["臨床症狀", "關節液分析（追蹤）", "CBC和生化", "尿液", "類固醇副作用"],
    reference: "Ettinger SJ, Feldman EC: Textbook of Veterinary Internal Medicine, 8th Ed. Elsevier, 2017"
  },

  "septic-arthritis": {
    zh: "化膿性關節炎",
    en: "Septic Arthritis",
    definition: "關節內細菌感染導致的急性炎症性關節疾病。可經血行播散、直接穿刺傷、手術後感染或鄰近組織感染蔓延。屬於骨科急症。",
    synonyms: ["Infectious Arthritis", "Bacterial Arthritis", "感染性關節炎", "關節感染"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡",
      sex: "無明顯性別傾向",
      riskFactors: ["穿刺傷/咬傷", "關節手術後", "免疫抑制", "糖尿病", "菌血症", "慢性關節病"]
    },
    clinicalPresentation: {
      history: ["急性單關節（偶多關節）跛行", "快速進展", "可能有外傷史或近期手術", "發燒", "食慾不振", "不願活動"],
      physicalExam: ["關節明顯腫脹、溫熱", "劇烈疼痛（不願觸碰）", "關節活動嚴重受限", "可能有傷口或瘻管", "發燒", "全身不適"]
    },
    pathophysiology: "細菌進入關節腔 → 快速增殖 → 急性滑膜炎 → 膿性關節積液 → 細菌酵素和炎症介質破壞軟骨 → 軟骨下骨感染 → 骨髓炎。若未及時治療，可在數天內造成不可逆軟骨損傷。",
    diagnosis: {
      overview: "關節液分析和培養是診斷關鍵，需緊急處理",
      differentials: ["免疫介導性關節炎", "痛風性關節炎", "外傷性關節炎", "腫瘤"],
      initialDB: ["關節液分析（細胞學、培養）", "受影響關節X光", "CBC和生化", "尿液分析"],
      advanced: ["血液培養", "關節液PCR（Mycoplasma等）", "進階影像（CT/MRI評估骨髓炎）"]
    },
    treatment: {
      overview: "緊急關節沖洗/清創和全身性抗生素是治療關鍵",
      acute: [
        "關節沖洗/清創：",
        "  - 關節鏡沖洗（首選）",
        "  - 開放性關節切開沖洗",
        "  - 多次沖洗可能需要",
        "經驗性抗生素（培養結果前）：",
        "  - Amoxicillin-Clavulanate 12.5-25 mg/kg PO q12h",
        "  - 或 Cefazolin 22 mg/kg IV q8h（住院時）",
        "  - 根據培養結果調整",
        "止痛（NSAIDs或opioids）",
        "輸液支持"
      ],
      chronic: [
        "抗生素治療療程：",
        "  - 至少4-6週",
        "  - 根據培養/藥敏結果選擇",
        "常見致病菌：Staphylococcus、Streptococcus、E. coli、Pasteurella",
        "關節功能評估",
        "物理治療（感染控制後）",
        "骨髓炎需更長療程"
      ]
    },
    prognosis: "早期診斷和治療預後良好。延遲治療或已有軟骨損傷預後較差。術後感染需取出植入物。骨髓炎可能需要數月治療。",
    pearls: [
      "時間就是軟骨！需緊急處理",
      "關節液：細胞數通常>40,000-100,000/μL，大量退化性中性球",
      "X光早期可能正常，骨溶解需7-14天才顯現",
      "培養陰性不排除感染（可能已用過抗生素）",
      "單次關節穿刺可能不足以控制感染"
    ],
    monitoring: ["臨床改善", "發燒消退", "關節液分析追蹤", "X光（骨髓炎監測）", "白血球和炎症指標"],
    reference: "Tobias KM, Johnston SA: Veterinary Surgery: Small Animal, 2nd Ed. Elsevier, 2018"
  },

  // ==================== 骨骼疾病 ====================

  "bone-fracture": {
    zh: "骨折",
    en: "Bone Fracture",
    definition: "骨骼結構的連續性中斷。可為外傷性或病理性，依骨折型態、位置和嚴重程度分類。是小動物最常見的骨科急症之一。",
    synonyms: ["Fracture", "骨裂", "斷骨"],
    epidemiology: {
      species: "犬貓皆常見",
      age: "任何年齡，幼年和老年動物可能更易骨折",
      sex: "無明顯性別傾向",
      riskFactors: ["外傷（車禍、墜落、被踩）", "病理性因素（骨腫瘤、代謝性骨病）", "高樓墜落（貓）", "激烈活動"]
    },
    clinicalPresentation: {
      history: ["明確外傷事件", "急性跛行或不負重", "受傷肢體腫脹", "可能有外傷可見", "開放性骨折可見骨頭露出"],
      physicalExam: ["疼痛（觸診或負重）", "腫脹", "異常活動或角度", "骨摩擦音（crepitus）", "開放性傷口（開放性骨折）", "神經血管評估", "全身外傷評估"]
    },
    pathophysiology: "外力超過骨骼承受能力 → 骨折。骨折癒合過程：血腫形成 → 炎症期 → 軟骨痂形成 → 硬骨痂形成 → 骨重塑。幼年動物癒合較快。病理性骨折因骨質已弱化而在輕微外力下發生。",
    diagnosis: {
      overview: "X光檢查是診斷標準，需評估骨折類型和制定治療計畫",
      differentials: ["關節脫位", "韌帶損傷", "軟組織損傷", "病理性骨折（需查原因）"],
      initialDB: ["完整外傷評估（ABCDE）", "受傷部位X光（至少2個角度）", "全身評估（多發外傷）"],
      advanced: ["CT（複雜骨折的手術計畫）", "骨折處活檢（懷疑病理性時）"]
    },
    treatment: {
      overview: "根據骨折類型、位置、患者因素選擇保守或手術治療",
      acute: [
        "急救穩定：",
        "  - ABCDE評估",
        "  - 止痛：Opioids（Methadone 0.1-0.5 mg/kg）",
        "  - 休克治療（若需要）",
        "  - 傷口處理（開放性骨折）",
        "骨折暫時固定：",
        "  - Robert Jones繃帶",
        "  - 夾板固定",
        "開放性骨折需緊急手術和抗生素"
      ],
      chronic: [
        "保守治療（適用於某些骨折）：",
        "  - 外固定：夾板、石膏（僅限肘/膝以下）",
        "  - 嚴格籠養休息4-8週",
        "手術治療（多數骨折首選）：",
        "  - 骨板固定（最常用）",
        "  - 髓內釘",
        "  - 外固定架",
        "  - 鋼絲/環扎",
        "  - 互鎖髓內釘",
        "術後管理：",
        "  - 止痛",
        "  - 活動限制",
        "  - 物理治療（適時開始）",
        "  - X光追蹤癒合"
      ]
    },
    prognosis: "多數骨折經適當治療可良好癒合。年輕動物預後較好。開放性、粉碎性或關節內骨折預後較保守。病理性骨折需同時處理原發病。",
    pearls: [
      "開放性骨折分級：I=皮膚小傷口，II=軟組織損傷較大，III=嚴重軟組織損傷/污染",
      "開放性骨折需立即抗生素和清創",
      "生長板骨折需特別注意，可能影響生長",
      "病理性骨折要找原因（腫瘤！）",
      "癒合時間：幼犬2-4週，成犬6-12週，老年犬可能更久"
    ],
    monitoring: ["疼痛評估", "X光追蹤（每4-6週）", "傷口護理（手術/開放傷口）", "功能恢復"],
    reference: "Tobias KM, Johnston SA: Veterinary Surgery: Small Animal, 2nd Ed. Elsevier, 2018"
  },

  "avascular-necrosis-femoral-head": {
    zh: "股骨頭缺血性壞死",
    en: "Avascular Necrosis of Femoral Head",
    definition: "股骨頭血液供應中斷導致的缺血性壞死，造成股骨頭塌陷和髖關節破壞。主要影響小型犬幼犬。也稱為Legg-Calve-Perthes病。",
    synonyms: ["Legg-Calve-Perthes Disease", "LCPD", "Aseptic Necrosis of Femoral Head", "股骨頭壞死"],
    epidemiology: {
      species: "犬（小型犬）",
      age: "4-12月齡",
      sex: "無明顯性別傾向",
      riskFactors: ["小型犬種（Yorkshire Terrier、Miniature Pinscher、Pomeranian、Toy Poodle、West Highland White Terrier）", "遺傳因素"]
    },
    clinicalPresentation: {
      history: ["漸進性後肢跛行", "單側為主（10-15%雙側）", "運動後加重", "患肢肌肉萎縮", "症狀發展數週到數月"],
      physicalExam: ["髖關節活動時疼痛", "外展和伸展時尤其疼痛", "患肢肌肉萎縮", "髖關節活動範圍可能受限", "可能有骨摩擦音"]
    },
    pathophysiology: "股骨頭骨骺血液供應中斷（原因不明，可能涉及遺傳和解剖因素）→ 股骨頭骨骺缺血壞死 → 骨吸收和弱化 → 在正常負重下塌陷和變形 → 繼發性骨關節炎。與人類的Legg-Calve-Perthes病類似。",
    diagnosis: {
      overview: "X光檢查可見典型股骨頭變化",
      differentials: ["髖關節發育不良", "髖關節脫位", "股骨頸骨折", "敗血性關節炎"],
      initialDB: ["骨科檢查", "髖關節X光（伸展位）", "對側比較", "評估塌陷程度"],
      advanced: ["CT（評估塌陷範圍）", "MRI（早期診斷）"]
    },
    treatment: {
      overview: "手術治療是標準療法，保守治療效果有限",
      acute: [
        "止痛管理：",
        "  - NSAIDs",
        "休息和活動限制",
        "安排手術評估"
      ],
      chronic: [
        "手術治療（首選）：",
        "  - FHO（Femoral Head and Neck Ostectomy）- 最常用",
        "  - THR（Total Hip Replacement）- 較少用於小型犬",
        "保守治療（限特定情況）：",
        "  - 嚴格籠養休息",
        "  - 止痛藥物",
        "  - 物理治療",
        "  - 效果通常不佳",
        "術後復健：",
        "  - 早期物理治療很重要",
        "  - 被動活動範圍訓練",
        "  - 游泳",
        "  - 漸進式負重"
      ]
    },
    prognosis: "FHO手術預後通常優良，小型犬術後功能恢復良好。術後積極復健可改善結果。保守治療預後較差。",
    pearls: [
      "典型X光：股骨頭不規則、密度不均、塌陷、關節間隙增寬",
      "早期X光可能正常",
      "與髖關節發育不良不同：LCPD發生在小型犬、單側為主",
      "FHO後需要積極物理治療",
      "遺傳性疾病，繁殖犬應排除"
    ],
    monitoring: ["跛行改善", "肌肉量恢復", "活動範圍", "X光追蹤（保守治療時）"],
    reference: "Tobias KM, Johnston SA: Veterinary Surgery: Small Animal, 2nd Ed. Elsevier, 2018"
  },

  // ==================== 脊椎疾病 ====================

  "wobbler-syndrome": {
    zh: "搖擺症候群",
    en: "Wobbler Syndrome",
    definition: "頸椎脊髓壓迫導致的神經功能障礙，表現為步態不協調（共濟失調）。主要有兩種類型：骨性壓迫（大型犬幼犬）和椎間盤突出相關（大型犬成犬）。",
    synonyms: ["Cervical Spondylomyelopathy", "CSM", "Cervical Vertebral Instability", "CVI", "頸椎脊髓病變", "頸椎不穩定"],
    epidemiology: {
      species: "犬（大型至巨型犬）",
      age: "骨性壓迫型：<3歲；椎間盤型：>5歲",
      sex: "公犬較多",
      riskFactors: ["品種傾向（Great Dane、Doberman Pinscher、Mastiff）", "快速生長", "營養過剩（幼犬時期）"]
    },
    clinicalPresentation: {
      history: ["漸進性後肢無力和共濟失調", "步態不協調（搖擺步態）", "後肢比前肢症狀明顯", "頸部可能僵硬或疼痛", "可能跌倒", "嚴重可發展為四肢癱瘓"],
      physicalExam: ["後肢本體感覺遲鈍", "後肢共濟失調步態", "可能四肢都有症狀（但後肢較重）", "頸部過度伸展或屈曲可能誘發或加重症狀", "脊髓反射可能增強（UMN徵象）", "肌肉萎縮（慢性）"]
    },
    pathophysiology: "頸椎骨異常/椎間盤突出/韌帶肥厚 → 頸椎脊髓壓迫 → 脊髓損傷 → 步態異常和神經功能障礙。Great Dane多為骨性壓迫（C3-C5）；Doberman多為椎間盤突出相關（C5-C7）。慢性壓迫導致脊髓萎縮。",
    diagnosis: {
      overview: "MRI是診斷gold standard，可同時評估脊髓和周圍結構",
      differentials: ["椎間盤疾病", "脊髓腫瘤", "纖維軟骨栓塞", "退化性脊髓病變", "脊椎不穩定/骨折", "椎間盤脊椎炎"],
      initialDB: ["完整神經學檢查", "頸椎X光（篩檢，但敏感度有限）", "排除其他代謝問題"],
      advanced: ["頸椎MRI（首選）", "CT/脊髓造影", "動態研究（屈曲/伸展位）", "腦脊液分析"]
    },
    treatment: {
      overview: "根據壓迫類型和嚴重程度選擇保守或手術治療",
      acute: [
        "保守治療（輕度病例）：",
        "  - 嚴格籠養休息",
        "  - 頸圈限制頸部活動",
        "  - NSAIDs或類固醇（短期）",
        "  - 體重管理"
      ],
      chronic: [
        "保守治療（持續）：",
        "  - 活動限制",
        "  - 體重控制",
        "  - 物理治療",
        "  - 止痛管理",
        "  - 約50%輕度病例可改善",
        "手術治療（中重度或進行性）：",
        "  - 腹側減壓術（ventral slot）",
        "  - 椎間盤開窗術",
        "  - 椎體融合術/椎間墊片",
        "  - 背側椎板切除術（dorsal laminectomy）",
        "術後管理：",
        "  - 密切神經監測",
        "  - 物理治療",
        "  - 活動限制8-12週"
      ]
    },
    prognosis: "保守治療約50%短期改善，但常復發或惡化。手術成功率約70-80%，但併發症風險存在。嚴重脊髓損傷或多節段病變預後較差。",
    pearls: [
      "Great Dane和Doberman是最常見品種，但表現不同",
      "X光敏感度有限，MRI是診斷標準",
      "「搖擺」步態是特徵，後肢比前肢明顯",
      "手術可能導致鄰近節段加速退化（domino lesion）",
      "幼犬營養管理可能有預防作用"
    ],
    monitoring: ["神經學狀態", "步態改善", "疼痛控制", "MRI追蹤（保守治療時）"],
    reference: "Dewey CW, da Costa RC: Practical Guide to Canine and Feline Neurology, 3rd Ed. Wiley-Blackwell, 2016"
  },

  "atlantoaxial-subluxation": {
    zh: "寰樞椎半脫位",
    en: "Atlantoaxial Subluxation",
    definition: "第一頸椎（寰椎）和第二頸椎（樞椎）之間的不穩定或半脫位，導致脊髓壓迫。主要是先天性發育異常，好發於小型犬。可能危及生命。",
    synonyms: ["AA Subluxation", "AA Instability", "Atlantoaxial Instability", "寰樞關節不穩定", "C1-C2不穩定"],
    epidemiology: {
      species: "犬（小型犬為主）",
      age: "先天性病例多在<2歲發病，外傷性可任何年齡",
      sex: "無明顯性別傾向",
      riskFactors: ["小型犬種（Yorkshire Terrier、Pomeranian、Chihuahua、Toy Poodle）", "先天性齒突發育不全或缺如", "韌帶發育不良", "外傷"]
    },
    clinicalPresentation: {
      history: ["急性或慢性頸部疼痛", "頭部姿勢異常（低頭或仰頭）", "四肢無力或癱瘓", "步態不協調", "可能因輕微外傷或正常活動誘發", "嚴重可呼吸困難或猝死"],
      physicalExam: ["頸部疼痛（觸診或移動時）", "抗拒頸部檢查", "四肢本體感覺異常", "四肢共濟失調或癱瘓", "可能有UMN徵象（四肢反射增強）", "嚴重可能呼吸異常"]
    },
    pathophysiology: "齒突（dens）發育不全/缺如 + 橫韌帶發育不良 → 寰樞椎關節不穩定 → 樞椎向腹側移位 → 頸髓（C1-C2節段）壓迫 → 四肢癱瘓。此節段脊髓包含呼吸中樞，嚴重壓迫可致死。",
    diagnosis: {
      overview: "X光可見典型變化，但操作需極度小心",
      differentials: ["頸椎椎間盤疾病", "頸椎骨折/脫位", "寰枕畸形", "脊椎腫瘤"],
      initialDB: ["神經學檢查", "頸椎X光（側位，neutral position；小心操作！）", "避免過度屈曲頸部"],
      advanced: ["CT（評估骨性結構）", "MRI（評估脊髓和韌帶）", "屈曲位X光（風險高，需鎮靜和小心操作）"]
    },
    treatment: {
      overview: "手術穩定是中重度病例的標準治療，輕度可嘗試保守",
      acute: [
        "緊急穩定：",
        "  - 嚴格限制頸部活動",
        "  - 頸部夾板或支架固定",
        "  - 止痛：Opioids（避免過度鎮靜導致頸部塌陷）",
        "  - 類固醇（脊髓水腫）：Methylprednisolone 30 mg/kg IV或Dexamethasone 0.2-0.5 mg/kg IV",
        "  - 緊急手術評估"
      ],
      chronic: [
        "保守治療（輕度或手術風險高）：",
        "  - 頸部夾板固定6-12週",
        "  - 嚴格籠養",
        "  - 避免頸圈（改用胸背帶）",
        "  - 成功率約30-60%",
        "手術治療（首選，中重度）：",
        "  - 腹側穩定術（ventral stabilization）",
        "  - 背側穩定術",
        "  - 骨水泥或螺釘固定",
        "術後管理：",
        "  - 頸部固定4-8週",
        "  - 活動限制",
        "  - 物理治療（穩定後）"
      ]
    },
    prognosis: "保守治療復發率高。手術成功率約80-90%，但小型犬手術風險較高。輕度病例預後較好。嚴重脊髓損傷預後謹慎。",
    pearls: [
      "這是潛在致命的疾病，處理需極度小心",
      "X光檢查時避免屈曲頸部！可能加重脫位",
      "術後頸部固定很重要",
      "小型犬使用胸背帶而非頸圈",
      "先天性病例可能伴隨其他畸形（水腦等）"
    ],
    monitoring: ["神經學狀態", "呼吸功能", "X光追蹤（穩定性）", "疼痛控制"],
    reference: "Dewey CW, da Costa RC: Practical Guide to Canine and Feline Neurology, 3rd Ed. Wiley-Blackwell, 2016"
  },

  "lumbosacral-disease": {
    zh: "腰薦椎疾病",
    en: "Lumbosacral Disease",
    definition: "腰薦椎交界處（L7-S1）的退化性病變，導致馬尾神經壓迫，表現為後肢和尾部神經功能障礙。也稱為退化性腰薦椎狹窄或馬尾症候群。",
    synonyms: ["Degenerative Lumbosacral Stenosis", "Cauda Equina Syndrome", "Lumbosacral Stenosis", "LS Disease", "馬尾症候群", "腰薦椎狹窄"],
    epidemiology: {
      species: "犬（中大型犬）",
      age: "中老年（>5歲）",
      sex: "公犬較多",
      riskFactors: ["大型犬種（German Shepherd最常見、Rottweiler、Boxer）", "工作犬/警犬", "肥胖", "先天性腰薦椎移行椎"]
    },
    clinicalPresentation: {
      history: ["後肢跛行或無力", "起立困難", "上下樓梯、跳躍困難", "尾巴下垂或活動減少", "排尿/排便問題（重度）", "自殘舔尾部或後肢", "症狀可能時好時壞"],
      physicalExam: ["腰薦椎區域觸診疼痛", "背部伸展（lordosis）時疼痛", "尾巴張力減弱", "後肢本體感覺可能正常或異常", "膝蓋和跟腱反射通常正常", "會陰反射可能減弱", "肛門張力可能減弱"]
    },
    pathophysiology: "L7-S1椎間盤退化 + 椎間關節病變 + 韌帶肥厚 → 椎管狹窄 → 馬尾神經（坐骨神經、陰部神經、尾神經）壓迫 → 後肢疼痛、無力和自主神經功能障礙。與人類的腰椎管狹窄類似。",
    diagnosis: {
      overview: "MRI是診斷gold standard，X光價值有限",
      differentials: ["髖關節疾病", "前十字韌帶斷裂", "退化性脊髓病變", "腰椎椎間盤疾病", "脊髓腫瘤", "前列腺疾病"],
      initialDB: ["完整神經學檢查", "腰薦椎X光（評估結構異常）", "直腸檢查（前列腺、薦骨）"],
      advanced: ["腰薦椎MRI（首選）", "CT/脊髓造影", "肌電圖（EMG）", "動態屈曲/伸展研究"]
    },
    treatment: {
      overview: "根據症狀嚴重度選擇保守或手術治療",
      acute: [
        "保守治療（輕中度）：",
        "  - 嚴格休息4-6週",
        "  - NSAIDs: Carprofen或Meloxicam",
        "  - Gabapentin: 5-10 mg/kg PO q8h（神經痛）",
        "  - 體重管理",
        "  - 避免跳躍、爬樓梯"
      ],
      chronic: [
        "保守治療（持續）：",
        "  - 物理治療和復健",
        "  - 體重控制",
        "  - 適度運動（游泳）",
        "  - 止痛藥物（長期）",
        "  - 針灸（可考慮）",
        "  - 約50%病例可暫時改善",
        "手術治療（重度或保守治療失敗）：",
        "  - 背側椎板切除術（dorsal laminectomy）",
        "  - 椎間孔擴大術",
        "  - 椎間盤切除術",
        "  - 椎體固定術（嚴重不穩定）",
        "術後管理：",
        "  - 活動限制6-8週",
        "  - 物理治療",
        "  - 持續體重管理"
      ]
    },
    prognosis: "保守治療約50%可短期改善，但常復發。手術成功率約70-90%。有大小便失禁者預後較差。早期治療預後較好。",
    pearls: [
      "X光變化與臨床症狀相關性差",
      "MRI可見典型的椎間盤突出和椎管狹窄",
      "German Shepherd是最常見品種",
      "區分LMN（馬尾）和UMN（脊髓）徵象很重要",
      "移行椎可能是發病因素"
    ],
    monitoring: ["疼痛評估", "神經功能（大小便、尾巴、後肢）", "活動力和生活品質", "體重"],
    reference: "Dewey CW, da Costa RC: Practical Guide to Canine and Feline Neurology, 3rd Ed. Wiley-Blackwell, 2016"
  },

  // ==================== 肌肉疾病 ====================

  "polymyositis": {
    zh: "多發性肌炎",
    en: "Polymyositis",
    definition: "免疫介導性的發炎性肌病，特徵為多個骨骼肌群的發炎性浸潤和肌纖維損傷。可為特發性或繼發於感染、腫瘤或其他免疫疾病。",
    synonyms: ["Myositis", "Immune-mediated Myositis", "Inflammatory Myopathy", "肌炎", "免疫介導性肌炎", "發炎性肌病"],
    epidemiology: {
      species: "犬貓均可發生",
      age: "任何年齡，中年較常見",
      sex: "無明顯性別傾向",
      riskFactors: ["大型犬較常見（German Shepherd、Golden Retriever、Newfoundland、Boxer）", "可能伴發系統性紅斑狼瘡(SLE)", "可能伴發腫瘤（副腫瘤症候群）", "可能伴發感染（弓形蟲、新孢子蟲）"]
    },
    clinicalPresentation: {
      history: ["全身性肌肉無力", "步態僵硬", "運動不耐受", "肌肉疼痛", "肌肉萎縮", "吞嚥困難（若食道肌肉受影響）", "發聲改變", "可能有發燒和全身症狀"],
      physicalExam: ["肌肉觸診疼痛", "肌肉萎縮（可能全身性或局部）", "步態異常", "可能有巨食道徵象"],
      acuteVsChronic: {
        acute: "突發嚴重肌肉疼痛、腫脹、無力",
        chronic: "漸進性肌肉萎縮和無力"
      }
    },
    pathophysiology: "免疫介導性多發性肌炎涉及細胞介導和體液免疫對肌纖維的攻擊。T淋巴細胞和巨噬細胞浸潤肌肉組織，抗體可能針對肌肉特異性抗原（如抗2M抗體）。這導致肌纖維壞死、再生和纖維化。繼發性多發性肌炎可由感染原（弓形蟲、新孢子蟲、鉤端螺旋體）或腫瘤誘發。",
    diagnosis: {
      overview: "肌酸激酶(CK)升高結合肌肉活檢是診斷關鍵",
      differentials: ["咀嚼肌肌炎", "重症肌無力", "感染性肌炎", "內分泌肌病（甲狀腺功能低下）", "代謝性肌病", "肌營養不良"],
      initialDB: ["CK（肌酸激酶）- 通常顯著升高", "AST、ALT（可能肌源性升高）", "CBC和生化", "排除感染：弓形蟲、新孢子蟲血清學"],
      advanced: ["肌肉活檢：淋巴細胞和漿細胞浸潤、肌纖維壞死和再生、纖維化", "肌電圖(EMG)：自發性電位活動、正向銳波", "血清2M抗體檢測", "排除腫瘤：全身影像學檢查"]
    },
    treatment: {
      overview: "免疫抑制治療為主，同時尋找並治療繼發原因",
      acute: [
        "免疫抑制治療：",
        "  - Prednisolone: 2-4 mg/kg/day PO（初始劑量）",
        "  - 分1-2次給予",
        "  - 症狀嚴重可考慮IV Dexamethasone",
        "支持療法：",
        "  - 輸液、營養支持",
        "  - 若有吞嚥困難：提高餵食姿勢、流質飲食"
      ],
      chronic: [
        "緩慢減量類固醇：",
        "  - 症狀緩解後2-4週開始減量",
        "  - 每2-4週減25%",
        "  - 目標：最低有效劑量或停藥",
        "  - 治療通常需要數月",
        "難治性病例加用：",
        "  - Azathioprine: 2 mg/kg PO q24h（犬）",
        "  - Cyclosporine: 5 mg/kg PO q12-24h",
        "  - Mycophenolate: 10 mg/kg PO q12h",
        "巨食道管理：",
        "  - 抬高進食",
        "  - 餐後保持直立15-30分鐘",
        "  - 監測吸入性肺炎",
        "感染性肌炎：適當抗感染治療",
        "腫瘤相關性：治療原發腫瘤"
      ]
    },
    prognosis: "特發性免疫介導性多發性肌炎對免疫抑制治療反應通常良好，但可能需長期治療且可能復發。有巨食道併發症者預後較差（吸入性肺炎風險）。感染性肌炎在適當治療後預後良好。腫瘤相關性肌炎預後取決於原發腫瘤。",
    pearls: [
      "CK顯著升高是重要的診斷線索",
      "肌肉活檢是確診的gold standard",
      "需排除感染和腫瘤原因",
      "巨食道是重要的併發症，影響預後",
      "可能需要長期免疫抑制治療"
    ],
    monitoring: ["CK定期檢測（評估治療反應）", "臨床肌力評估", "體重（若有巨食道）", "胸腔X光（吸入性肺炎監測）", "免疫抑制藥物副作用"],
    reference: "Ettinger SJ, Feldman EC: Textbook of Veterinary Internal Medicine, 8th Ed. Elsevier, 2017"
  },

  "masticatory-muscle-myositis": {
    zh: "咀嚼肌肌炎",
    en: "Masticatory Muscle Myositis",
    definition: "局限於咀嚼肌群的免疫介導性肌病。特徵為針對咀嚼肌特有的2M肌纖維的自體免疫反應，導致咀嚼肌發炎、腫脹和最終萎縮。",
    synonyms: ["MMM", "Masticatory Myositis", "Eosinophilic Myositis", "Atrophic Myositis", "嚼肌炎", "顳肌炎"],
    epidemiology: {
      species: "幾乎只影響犬，貓極罕見",
      age: "任何年齡，年輕成犬至中年犬最常見",
      sex: "無明顯性別傾向",
      riskFactors: ["大型犬較常見（German Shepherd、Golden Retriever、Labrador、Doberman、Cavalier King Charles Spaniel）"]
    },
    clinicalPresentation: {
      history: {
        acute: ["下頜腫脹、咀嚼肌明顯腫大", "張口疼痛或無法張口", "流涎", "無法進食", "可能有突眼（因咀嚼肌腫脹）", "發燒和全身不適"],
        chronic: ["咀嚼肌嚴重萎縮", "顴骨弓突出明顯", "張口受限（牙關緊閉）", "可能無法正常進食"]
      },
      physicalExam: ["急性：咀嚼肌腫脹、疼痛", "慢性：咀嚼肌萎縮、顴骨弓突出", "張口受限（測量兩門齒間距離）", "眼球可能突出或內陷"],
      affectedMuscles: ["咬肌(Masseter)", "顳肌(Temporalis)", "翼內肌(Medial pterygoid)", "翼外肌(Lateral pterygoid)", "二腹肌後腹"]
    },
    pathophysiology: "MMM是針對咀嚼肌特有的2M肌纖維的自體免疫性疾病。2M肌纖維只存在於咀嚼肌中，這解釋了疾病的局限性。自體抗體和T細胞攻擊2M肌纖維，導致肌纖維壞死。急性期表現為肌肉腫脹和疼痛；慢性期則因纖維化導致肌肉萎縮和攣縮。不治療或治療不當會導致永久性牙關緊閉。",
    diagnosis: {
      overview: "2M抗體檢測是診斷gold standard",
      differentials: ["多發性肌炎", "三叉神經炎", "顳下頜關節疾病", "眼球後腫瘤或膿腫", "外傷", "破傷風"],
      initialDB: ["血清2M抗體（ELISA檢測）：敏感性和特異性高", "CK（急性期可能升高）", "完整口腔和神經學檢查"],
      advanced: ["咀嚼肌活檢：淋巴細胞和漿細胞浸潤、肌纖維壞死和吞噬、纖維化（慢性期）", "肌電圖(EMG)", "CT/MRI排除眼球後病變"]
    },
    treatment: {
      overview: "免疫抑制治療是標準療法，早期治療至關重要",
      acute: [
        "免疫抑制治療：",
        "  - Prednisolone: 1-2 mg/kg PO BID（初始劑量）",
        "  - 持續至症狀完全緩解",
        "  - 通常2-4週內可見改善",
        "支持療法：",
        "  - 軟食或流質飲食",
        "  - 嚴重張口受限可能需要胃管餵食",
        "  - 止痛輔助"
      ],
      chronic: [
        "緩慢減量類固醇：",
        "  - 症狀緩解後維持4-6週",
        "  - 然後每2-4週減25%",
        "  - 治療總時程至少4-6個月",
        "  - 過早停藥常導致復發",
        "難治性病例：",
        "  - Azathioprine: 2 mg/kg PO q24h",
        "  - Mycophenolate mofetil",
        "  - Cyclosporine",
        "慢性纖維化病例：",
        "  - 物理治療：輕柔的下頜被動運動",
        "  - 嚴重纖維化效果有限",
        "2M抗體滴度可用於指導減藥"
      ]
    },
    prognosis: "早期診斷和治療預後良好，大多數病例可恢復正常功能。延遲治療導致纖維化和永久性牙關緊閉，預後較差。慢性病例即使治療也可能有持續的張口受限。復發常見，尤其是過早停藥時。",
    pearls: [
      "2M抗體檢測是診斷gold standard",
      "早期治療至關重要，可防止永久性纖維化",
      "治療時間要足夠長（至少4-6個月）",
      "過早停藥是復發的主要原因",
      "慢性萎縮期治療效果有限",
      "與多發性肌炎不同：MMM只影響咀嚼肌"
    ],
    monitoring: ["張口程度（兩門齒間距離）", "2M抗體滴度（指導減藥）", "肌肉體積評估", "進食能力", "皮質類固醇副作用"],
    reference: "Shelton GD: Myasthenia gravis and disorders of neuromuscular transmission. Vet Clin North Am Small Anim Pract 32:189-206, 2002"
  },

  // ==================== 關節疾病（補充） ====================

  "joint-luxation": {
    zh: "關節脫位",
    en: "Joint Luxation",
    definition: "關節面之間正常解剖關係的完全喪失，通常伴有關節囊和支持韌帶的損傷。部分喪失稱為半脫位(subluxation)。可為創傷性或先天性。",
    synonyms: ["Dislocation", "Joint Dislocation", "關節脫臼", "脫臼"],
    epidemiology: {
      species: "犬貓均可發生",
      age: "任何年齡",
      sex: "無明顯性別傾向",
      riskFactors: ["外傷（車禍、墜落、打鬥）", "先天性關節鬆弛", "慢性關節病變"]
    },
    clinicalPresentation: {
      history: ["急性外傷事件", "突發跛行或完全不負重", "明顯疼痛", "可見關節變形"],
      physicalExam: ["關節解剖標誌異常", "關節活動範圍異常", "劇烈疼痛", "腫脹和軟組織損傷"],
      commonTypes: {
        hip: {
          description: "最常見，約75%為頭背側脫位",
          signs: ["患肢短縮、外旋、內收", "大轉子位置高於正常", "無法外展"]
        },
        elbow: {
          description: "常伴隨骨折",
          signs: ["肘關節異常角度", "無法正常屈伸", "嚴重腫脹"]
        },
        shoulder: {
          description: "較少見，多為內側脫位",
          signs: ["肩關節明顯變形", "肩胛骨外側突出"]
        },
        carpusTarsus: {
          description: "常伴韌帶損傷",
          signs: ["關節不穩定", "異常角度"]
        },
        temporomandibular: {
          description: "顳下頜關節，常見於貓",
          signs: ["無法閉口", "下頜偏斜"]
        }
      }
    },
    pathophysiology: "創傷性脫位由強大外力導致，造成關節囊撕裂和支持韌帶斷裂。髖關節脫位時圓韌帶斷裂，可向頭背側（最常見）或尾腹側脫位。脫位後周圍軟組織損傷和腫脹增加復位難度。先天性或發育性脫位涉及骨骼結構異常和軟組織鬆弛。",
    diagnosis: {
      overview: "臨床檢查結合X光確診",
      differentials: ["骨折", "軟組織損傷", "關節內骨折", "病理性脫位"],
      initialDB: ["完整骨科檢查", "受影響關節X光（至少2個角度）", "評估神經血管狀態"],
      advanced: ["CT掃描（複雜病例或伴隨骨折）", "對側比較X光"]
    },
    treatment: {
      overview: "閉鎖復位是急性單純脫位首選，失敗則需手術",
      acute: [
        "閉鎖復位（急性病例首選）：",
        "  - 需要全身麻醉和適當肌肉鬆弛",
        "  - 髖關節：外展、外旋、伸展後復位",
        "  - 復位後需外固定穩定",
        "髖關節脫位復位後：",
        "  - 頭背側脫位：Ehmer sling 2-3週",
        "  - 尾腹側脫位：Hobbles 2-3週",
        "止痛管理：",
        "  - Opioids（急性）",
        "  - NSAIDs（亞急性）"
      ],
      chronic: [
        "開放復位手術（閉鎖失敗或慢性脫位）：",
        "  - 韌帶重建或關節囊修復",
        "  - 髖關節選項：",
        "    • 關節囊修復",
        "    • 髂股縫合(iliofemoral suture)",
        "    • Toggle pin固定",
        "    • 全髖關節置換(THR)",
        "    • 股骨頭切除術(FHO)",
        "  - 肘關節：側副韌帶修復、經關節固定",
        "術後管理：",
        "  - 限制活動4-6週",
        "  - 物理治療",
        "  - 定期追蹤關節穩定性"
      ]
    },
    prognosis: "急性創傷性脫位在早期復位後預後良好。髖關節脫位閉鎖復位成功率約50%，失敗後需要手術。延遲處理或復發性脫位預後較差。併發症包括：復發脫位、慢性不穩定、繼發性骨關節炎。",
    pearls: [
      "髖關節脫位需排除股骨頭或髖臼骨折",
      "閉鎖復位應在受傷後24-72小時內進行",
      "復位後需適當外固定防止再脫位",
      "復發性脫位通常需要手術穩定",
      "貓高處墜落常見骶髂關節脫位（與骨盆骨折並發）"
    ],
    monitoring: ["復位後X光確認", "外固定期間監測舒適度和循環", "追蹤關節穩定性", "長期監測繼發性骨關節炎"],
    reference: "Tobias KM, Johnston SA: Veterinary Surgery: Small Animal, 2nd Ed. Elsevier, 2018"
  },

  // ==================== 發育性疾病（補充） ====================

  "chondrodysplasia": {
    zh: "軟骨發育不全",
    en: "Chondrodysplasia",
    definition: "一組影響軟骨和骨骼發育的遺傳性疾病，特徵為異常的軟骨內骨化，導致長骨短小和骨骼畸形。在某些品種中是正常品種特徵（如Dachshund、Basset Hound），在其他品種中則是疾病。",
    synonyms: ["Dwarfism", "Achondroplasia", "Short-limbed Dwarfism", "侏儒症", "短肢症", "軟骨營養不良"],
    epidemiology: {
      species: "犬貓均可發生",
      breedNormal: ["Dachshund（臘腸犬）", "Basset Hound（巴吉度獵犬）", "Welsh Corgi（柯基犬）", "Scottish Terrier", "Shih Tzu", "Pekingese"],
      breedAbnormal: {
        dogs: ["Norwegian Elkhound", "Labrador Retriever", "Samoyed", "Great Pyrenees", "English Pointer", "Alaskan Malamute"],
        cats: ["Scottish Fold（蘇格蘭折耳貓）", "Munchkin（曼切堪貓）"]
      },
      inheritance: "多為體染色體隱性或顯性遺傳",
      riskFactors: ["近親繁殖", "品種特定基因突變"]
    },
    clinicalPresentation: {
      history: ["肢體短小", "生長發育異常", "可能有行走困難", "某些類型有關節問題"],
      physicalExam: ["短肢（不成比例的侏儒症）", "彎曲的前肢", "擴大的關節（尤其生長板區域）", "異常步態", "可能有脊椎問題"],
      breedSpecific: {
        normalBreeds: "短肢是品種特徵，但可能易發椎間盤疾病(IVDD)",
        scottishFold: "折耳基因同時影響耳軟骨和關節軟骨，純合子發生嚴重骨軟骨病變",
        osteochondrodysplasia: "進行性關節疼痛和僵硬"
      },
      complications: ["椎間盤疾病（臘腸犬等）", "骨關節炎", "脊椎畸形", "Scottish Fold：骨軟骨發育不良(Osteochondrodysplasia)"]
    },
    pathophysiology: "軟骨發育不全由影響軟骨生長和分化的基因突變引起。常見突變影響成纖維細胞生長因子受體3(FGFR3)、膠原蛋白基因、或硫酸鹽轉運蛋白。這些突變導致生長板軟骨細胞功能異常，軟骨內骨化受損，長骨生長減慢。Scottish Fold的折耳基因(Fd)同時影響耳軟骨和關節軟骨，純合子(Fd/Fd)個體發生嚴重骨軟骨病變。",
    diagnosis: {
      overview: "臨床表現結合品種和X光確診",
      differentials: ["營養性繼發性副甲狀腺功能亢進", "甲狀腺功能低下", "生長激素缺乏", "其他骨發育異常", "骨代謝疾病"],
      initialDB: ["完整骨科檢查", "長骨X光（評估生長板和骨骼形態）", "脊椎X光（若有神經症狀）"],
      advanced: ["基因檢測（可用於某些已知突變）", "甲狀腺功能檢測", "生長激素檢測"]
    },
    treatment: {
      overview: "無法治療遺傳原因，管理重點在併發症",
      management: [
        "疼痛管理：",
        "  - NSAIDs（關節炎）",
        "  - Gabapentin（神經性疼痛）",
        "體重管理（減輕關節負擔）",
        "適度運動維持肌肉量",
        "關節保護劑（Glucosamine、Chondroitin）",
        "Omega-3脂肪酸"
      ],
      surgical: [
        "嚴重肢體畸形可考慮矯正手術",
        "椎間盤疾病需要相應治療",
        "關節問題的姑息治療"
      ],
      scottishFold: [
        "早期可用關節保護劑",
        "疼痛管理",
        "避免繁殖純合子(Fd/Fd)",
        "嚴重病例可能需要長期止痛或安樂死"
      ],
      prevention: [
        "負責任的繁殖選擇",
        "基因檢測篩選",
        "避免繁殖受影響個體",
        "Scottish Fold只繁殖折耳x立耳"
      ]
    },
    prognosis: "作為正常品種特徵的軟骨發育不全，動物可有正常壽命但易發相關併發症。病理性軟骨發育不全預後取決於嚴重程度。Scottish Fold的骨軟骨病變是進行性的，純合子個體預後較差。",
    pearls: [
      "區分品種正常特徵 vs 病理性軟骨發育不全",
      "臘腸犬等短肢品種椎間盤疾病風險極高",
      "Scottish Fold不應繁殖純合子（折耳x折耳）",
      "基因檢測可用於繁殖決策",
      "管理重點在預防和控制併發症"
    ],
    monitoring: ["定期評估關節健康", "監測椎間盤疾病徵兆", "追蹤疼痛程度和活動能力", "Scottish Fold需密切監測關節變化"],
    reference: "Genetics of the Dog - Ostrander EA, Ruvinsky A. 2nd Ed. CABI, 2012"
  }

};

// 疾病別名映射（用於搜尋）
const MUSCULOSKELETAL_DISEASE_ALIASES = {
  // 髖關節發育不良
  "髖關節發育不良": "hip-dysplasia",
  "髖關節發育不全": "hip-dysplasia",
  "髖關節形成不良": "hip-dysplasia",
  "CHD": "hip-dysplasia",
  "hip dysplasia": "hip-dysplasia",
  "canine hip dysplasia": "hip-dysplasia",

  // 肘關節發育不良
  "肘關節發育不良": "elbow-dysplasia",
  "肘關節發育不全": "elbow-dysplasia",
  "肘關節形成不良": "elbow-dysplasia",
  "ED": "elbow-dysplasia",
  "elbow dysplasia": "elbow-dysplasia",

  // 前十字韌帶斷裂
  "前十字韌帶斷裂": "cranial-cruciate-ligament-rupture",
  "十字韌帶損傷": "cranial-cruciate-ligament-rupture",
  "前交叉韌帶斷裂": "cranial-cruciate-ligament-rupture",
  "CCL斷裂": "cranial-cruciate-ligament-rupture",
  "ACL斷裂": "cranial-cruciate-ligament-rupture",
  "CCL rupture": "cranial-cruciate-ligament-rupture",
  "ACL tear": "cranial-cruciate-ligament-rupture",
  "cruciate disease": "cranial-cruciate-ligament-rupture",

  // 髕骨脫位
  "髕骨脫位": "patellar-luxation",
  "髕骨脫臼": "patellar-luxation",
  "膝蓋骨脫臼": "patellar-luxation",
  "luxating patella": "patellar-luxation",
  "patellar luxation": "patellar-luxation",

  // 離斷性骨軟骨炎
  "離斷性骨軟骨炎": "osteochondrosis-dissecans",
  "骨軟骨炎": "osteochondrosis-dissecans",
  "離斷性骨軟骨病": "osteochondrosis-dissecans",
  "OCD": "osteochondrosis-dissecans",
  "osteochondritis dissecans": "osteochondrosis-dissecans",

  // 泛骨炎
  "泛骨炎": "panosteitis",
  "生長痛": "panosteitis",
  "游走性跛行": "panosteitis",
  "pano": "panosteitis",
  "enostosis": "panosteitis",

  // 肥厚性骨營養不良
  "肥厚性骨營養不良": "hypertrophic-osteodystrophy",
  "骨幹端骨病": "hypertrophic-osteodystrophy",
  "HOD": "hypertrophic-osteodystrophy",
  "metaphyseal osteopathy": "hypertrophic-osteodystrophy",

  // 骨關節炎
  "骨關節炎": "osteoarthritis",
  "退化性關節炎": "osteoarthritis",
  "關節退化": "osteoarthritis",
  "OA": "osteoarthritis",
  "DJD": "osteoarthritis",
  "degenerative joint disease": "osteoarthritis",

  // 免疫介導性多發性關節炎
  "免疫介導性多發性關節炎": "immune-mediated-polyarthritis",
  "免疫性關節炎": "immune-mediated-polyarthritis",
  "多發性關節炎": "immune-mediated-polyarthritis",
  "IMPA": "immune-mediated-polyarthritis",
  "idiopathic polyarthritis": "immune-mediated-polyarthritis",

  // 化膿性關節炎
  "化膿性關節炎": "septic-arthritis",
  "感染性關節炎": "septic-arthritis",
  "關節感染": "septic-arthritis",
  "septic arthritis": "septic-arthritis",
  "infectious arthritis": "septic-arthritis",

  // 骨折
  "骨折": "bone-fracture",
  "骨裂": "bone-fracture",
  "斷骨": "bone-fracture",
  "fracture": "bone-fracture",

  // 股骨頭缺血性壞死
  "股骨頭缺血性壞死": "avascular-necrosis-femoral-head",
  "股骨頭壞死": "avascular-necrosis-femoral-head",
  "Legg-Calve-Perthes": "avascular-necrosis-femoral-head",
  "LCPD": "avascular-necrosis-femoral-head",
  "aseptic necrosis femoral head": "avascular-necrosis-femoral-head",

  // 搖擺症候群
  "搖擺症候群": "wobbler-syndrome",
  "頸椎脊髓病變": "wobbler-syndrome",
  "頸椎不穩定": "wobbler-syndrome",
  "wobbler": "wobbler-syndrome",
  "CSM": "wobbler-syndrome",
  "CVI": "wobbler-syndrome",
  "cervical spondylomyelopathy": "wobbler-syndrome",

  // 寰樞椎半脫位
  "寰樞椎半脫位": "atlantoaxial-subluxation",
  "寰樞關節不穩定": "atlantoaxial-subluxation",
  "C1-C2不穩定": "atlantoaxial-subluxation",
  "AA subluxation": "atlantoaxial-subluxation",
  "atlantoaxial instability": "atlantoaxial-subluxation",

  // 腰薦椎疾病
  "腰薦椎疾病": "lumbosacral-disease",
  "馬尾症候群": "lumbosacral-disease",
  "腰薦椎狹窄": "lumbosacral-disease",
  "LS disease": "lumbosacral-disease",
  "cauda equina syndrome": "lumbosacral-disease",
  "lumbosacral stenosis": "lumbosacral-disease",

  // 多發性肌炎
  "多發性肌炎": "polymyositis",
  "肌炎": "polymyositis",
  "免疫介導性肌炎": "polymyositis",
  "發炎性肌病": "polymyositis",
  "myositis": "polymyositis",
  "inflammatory myopathy": "polymyositis",

  // 咀嚼肌肌炎
  "咀嚼肌肌炎": "masticatory-muscle-myositis",
  "嚼肌炎": "masticatory-muscle-myositis",
  "顳肌炎": "masticatory-muscle-myositis",
  "MMM": "masticatory-muscle-myositis",
  "masticatory myositis": "masticatory-muscle-myositis",
  "eosinophilic myositis": "masticatory-muscle-myositis",

  // 關節脫位
  "關節脫位": "joint-luxation",
  "關節脫臼": "joint-luxation",
  "脫臼": "joint-luxation",
  "脫位": "joint-luxation",
  "dislocation": "joint-luxation",
  "joint dislocation": "joint-luxation",
  "luxation": "joint-luxation",

  // 軟骨發育不全
  "軟骨發育不全": "chondrodysplasia",
  "侏儒症": "chondrodysplasia",
  "短肢症": "chondrodysplasia",
  "軟骨營養不良": "chondrodysplasia",
  "dwarfism": "chondrodysplasia",
  "achondroplasia": "chondrodysplasia"
};

// 導出（若在模組環境中使用）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MUSCULOSKELETAL_DISEASES, MUSCULOSKELETAL_DISEASE_ALIASES };
}

console.log("Musculoskeletal Disease Info loaded:", Object.keys(MUSCULOSKELETAL_DISEASES).length, "diseases");

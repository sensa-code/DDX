// ======= 神經系統疾病 DISEASE_INFO =======
// Neurological Diseases
// 資料來源：Clinical Veterinary Advisor: Dogs and Cats, 2nd Ed. (Etienne Cote)
// 生成日期：2026-02-04
// 包含：IVDD、FCE、退化性脊髓病、特發性癲癇、GME、壞死性腦膜腦炎、
//       前庭疾病、水腦症、脊髓空洞症、重症肌無力、多發性肌炎、
//       認知功能障礙、霍納氏症候群、顏面神經麻痺、三叉神經炎

const NEUROLOGICAL_DISEASES = {

  // ==================== 脊髓疾病 ====================

  "intervertebral-disc-disease": {
    zh: "椎間盤疾病",
    en: "Intervertebral Disc Disease (IVDD)",
    definition: "椎間盤退化導致髓核突出或纖維環膨出壓迫脊髓或神經根，引起疼痛和神經功能障礙的常見脊髓疾病。",
    synonyms: ["IVDD", "椎間盤突出", "Herniated Disc", "Slipped Disc", "椎間盤脫出", "Disc Extrusion", "Disc Protrusion"],
    epidemiology: {
      species: "犬最常見，貓罕見",
      age: "Hansen Type I: 3-7歲；Hansen Type II: 8歲以上",
      sex: "無明顯性別傾向",
      riskFactors: ["軟骨發育不良品種（Dachshund、Beagle、Shih Tzu、Pekingese、Cocker Spaniel、French Bulldog）", "肥胖", "高衝擊活動（跳躍、爬樓梯）", "遺傳因素"]
    },
    clinicalPresentation: {
      history: ["急性或漸進性後肢無力/癱瘓", "頸部或背部疼痛", "不願行走或跳躍", "哭叫（尤其移動時）", "步態異常", "大小便失禁（嚴重）"],
      physicalExam: ["脊椎疼痛（觸診或活動時）", "本體感覺缺失", "運動失調", "輕癱或癱瘓", "反射異常（依病變位置）", "肌肉萎縮（慢性）", "深部痛覺缺失（嚴重）"]
    },
    pathophysiology: "Hansen Type I（突出型）：髓核急性突出穿過纖維環 → 脊髓急性壓迫和挫傷。Hansen Type II（膨出型）：纖維環慢性退化變厚 → 慢性脊髓壓迫。壓迫導致：缺血、水腫、神經細胞損傷、軸突退化。頸椎好發C2-C3、C3-C4；胸腰椎好發T11-L2（T12-T13最常見）。",
    diagnosis: {
      overview: "神經學檢查定位病變，影像學確認",
      differentials: ["纖維軟骨栓塞(FCE)", "脊髓腫瘤", "脊髓炎", "椎體骨折/脫位", "退化性脊髓病", "椎間盤脊椎炎", "先天性脊髓異常"],
      initialDB: ["完整神經學檢查", "脊椎X光（椎間隙變窄、礦化椎間盤）", "血液檢查（排除系統性疾病）"],
      advanced: ["MRI（首選：可見軟組織、脊髓變化）", "CT（骨骼細節、礦化椎間盤）", "脊髓造影（若無MRI）", "腦脊液分析"]
    },
    treatment: {
      overview: "依嚴重程度分級治療：保守治療或手術減壓",
      acute: [
        "神經功能分級：",
        "  Grade I: 僅疼痛 → 保守治療",
        "  Grade II: 輕度運動失調，可行走 → 保守或手術",
        "  Grade III: 嚴重運動失調，輕癱 → 手術建議",
        "  Grade IV: 癱瘓，保留深部痛覺 → 手術",
        "  Grade V: 癱瘓，無深部痛覺 → 緊急手術（48小時內）",
        "保守治療（Grade I-II）：",
        "  - 嚴格籠休4-6週",
        "  - 止痛：Gabapentin 5-10 mg/kg PO q8-12h",
        "  - 肌肉鬆弛：Methocarbamol 15-20 mg/kg PO q8h",
        "  - NSAIDs（無類固醇使用時）：Carprofen 2.2 mg/kg PO q12h",
        "  - 避免類固醇（爭議且副作用多）",
        "手術治療：",
        "  - 半椎板切除術(Hemilaminectomy)：胸腰椎",
        "  - 腹側開窗術(Ventral Slot)：頸椎",
        "  - 目的：減壓、移除突出物質"
      ],
      chronic: [
        "物理治療和復健",
        "水療（水中跑步機）",
        "輪椅輔助（永久癱瘓）",
        "膀胱管理（神經性膀胱）",
        "體重管理",
        "環境調整（防滑地板、斜坡）"
      ]
    },
    prognosis: "Grade I-II: 保守治療成功率85-95%。Grade III-IV: 手術成功率80-95%。Grade V: 手術成功率50-60%（深部痛覺喪失<48小時較佳）。深部痛覺喪失>48小時預後差。復發率約15-20%。",
    pearls: [
      "深部痛覺是最重要的預後指標",
      "Dachshund的IVDD風險是其他品種的10-12倍",
      "進行性脊髓軟化(PMM)是致命併發症，約10% Grade V病例",
      "「籠休」必須嚴格，僅允許出籠大小便",
      "類固醇與NSAIDs不可併用",
      "MRI可發現X光看不到的軟組織壓迫"
    ],
    monitoring: ["神經功能評估（每日→每週）", "疼痛評估", "膀胱功能", "復健進展", "體重"],
    reference: "Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; Brisson BA: Intervertebral disc disease in dogs. Vet Clin North Am Small Anim Pract 40:829-858, 2010"
  },

  "fibrocartilaginous-embolism": {
    zh: "纖維軟骨栓塞",
    en: "Fibrocartilaginous Embolism (FCE)",
    definition: "椎間盤纖維軟骨物質栓塞脊髓血管導致缺血性脊髓病變，引起急性、非進行性、通常非疼痛性的神經功能障礙。",
    synonyms: ["FCE", "脊髓梗塞", "Spinal Cord Infarction", "Ischemic Myelopathy", "纖維軟骨栓塞性脊髓病"],
    epidemiology: {
      species: "犬為主，貓罕見",
      age: "年輕至中年成犬（平均3-6歲）",
      sex: "無明顯性別傾向",
      riskFactors: ["大型和巨型犬種（German Shepherd、Labrador、Great Dane）", "小型犬中Miniature Schnauzer和Shetland Sheepdog較常見", "運動或輕微創傷後發作"]
    },
    clinicalPresentation: {
      history: ["急性發作（通常與運動或輕微創傷相關）", "發作時可能尖叫", "初期疼痛後迅速消退", "非進行性（24小時內穩定）", "不對稱性神經缺損常見"],
      physicalExam: ["不對稱性輕癱或癱瘓", "發作後24小時內無疼痛", "下運動神經元或上運動神經元徵象（依病變位置）", "一側肢體可能比另一側嚴重", "脊椎觸診不痛"]
    },
    pathophysiology: "椎間盤纖維軟骨物質（髓核來源）→ 進入脊髓血管系統（動脈或靜脈）→ 栓塞脊髓節段血管 → 缺血 → 脊髓壞死。確切進入機制不明，可能與椎間盤退化和新生血管有關。病變範圍取決於栓塞血管分布。",
    diagnosis: {
      overview: "臨床特徵高度提示，MRI確認，排除其他疾病",
      differentials: ["IVDD（Hansen Type I）", "脊髓創傷", "脊髓腫瘤", "脊髓炎", "出血", "動靜脈畸形"],
      initialDB: ["完整神經學檢查", "脊椎X光（通常正常）", "血液檢查"],
      advanced: ["MRI（首選）：急性期可見T2高信號脊髓內病變", "腦脊液分析（輕度蛋白升高或正常）", "排除壓迫性病變"]
    },
    treatment: {
      overview: "支持治療和物理復健為主，無特異性治療",
      acute: [
        "無手術指征（非壓迫性病變）",
        "支持治療：",
        "  - 舒適的墊褥（預防褥瘡）",
        "  - 輔助翻身（癱瘓動物每4小時）",
        "  - 膀胱管理（手動擠壓或導尿）",
        "  - 營養支持",
        "止痛（若有殘餘疼痛）：Gabapentin 5-10 mg/kg PO q8-12h",
        "類固醇無明確療效，不建議使用"
      ],
      chronic: [
        "物理治療是關鍵：",
        "  - 被動關節活動",
        "  - 站立訓練",
        "  - 水療",
        "  - 神經肌肉電刺激",
        "輪椅輔助（部分病例）",
        "持續膀胱管理（若需要）"
      ]
    },
    prognosis: "整體預後較好。約75-85%犬隻在數週至數月內恢復行走能力。預後因素：深部痛覺保留者預後好；病變範圍小者預後好；一週內有改善者預後好。完全恢復可能，但部分可能有殘餘缺損。",
    pearls: [
      "「急性、非進行性、非疼痛性、不對稱性」是FCE的典型特徵",
      "與IVDD鑑別：IVDD通常疼痛且對稱",
      "MRI的急性脊髓內T2高信號支持診斷",
      "確診需排除壓迫性病變",
      "物理治療對恢復至關重要",
      "貓的FCE極為罕見"
    ],
    monitoring: ["每日神經功能評估（前1-2週）", "膀胱功能", "皮膚完整性", "肌肉量", "復健進展"],
    reference: "Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; De Risio L et al: Fibrocartilaginous embolic myelopathy in small animals. Vet Clin North Am Small Anim Pract 40:859-869, 2010"
  },

  "degenerative-myelopathy": {
    zh: "退化性脊髓病",
    en: "Degenerative Myelopathy (DM)",
    definition: "成年犬的進行性、非疼痛性脊髓退化疾病，特徵為後肢進行性運動失調和輕癱，最終導致四肢癱瘓。與SOD1基因突變相關。",
    synonyms: ["DM", "German Shepherd Degenerative Myelopathy", "慢性退化性脊髓病", "Canine Degenerative Myelopathy"],
    epidemiology: {
      species: "犬，貓極罕見",
      age: "中老年犬（通常8歲以上）",
      sex: "無明顯性別傾向",
      riskFactors: ["品種：German Shepherd（最常見）、Pembroke Welsh Corgi、Boxer、Rhodesian Ridgeback、Chesapeake Bay Retriever", "SOD1基因突變純合子"]
    },
    clinicalPresentation: {
      history: ["隱匿性起病，進行性惡化", "後肢無力和運動失調", "指甲磨損", "腳背著地", "非疼痛性", "大小便功能初期正常", "病程6-12個月後可能發展為四肢無力"],
      physicalExam: ["後肢上運動神經元性輕癱", "本體感覺缺失", "跨步反應延遲或缺失", "後肢肌肉萎縮", "脊椎觸診無疼痛", "晚期可能出現前肢異常", "晚期可能有下運動神經元徵象"]
    },
    pathophysiology: "SOD1(Superoxide dismutase 1)基因突變 → 蛋白質異常聚集 → 軸突和髓鞘退化 → 脊髓白質變性。病變主要在胸腰脊髓，後期擴展至頸髓和腦幹。類似人類肌萎縮側索硬化症(ALS)的動物模型。",
    diagnosis: {
      overview: "排除性診斷；確診需要病理學檢查",
      differentials: ["IVDD（Hansen Type II）", "腰薦椎狹窄", "脊髓腫瘤", "髖關節疾病", "多發性神經根病", "退化性關節炎"],
      initialDB: ["完整神經學檢查", "脊椎X光（排除骨病變）", "SOD1基因檢測（風險評估，非確診）", "血液檢查"],
      advanced: ["MRI（排除壓迫性病變；DM時脊髓可能萎縮）", "腦脊液分析（通常正常）", "電生理檢查", "肌肉/神經活檢", "確診：死後脊髓病理"]
    },
    treatment: {
      overview: "無治癒方法，以支持治療和延緩進展為主",
      acute: [
        "無急性治療需求（進行性疾病）",
        "向主人解釋疾病本質和預後"
      ],
      chronic: [
        "物理治療：",
        "  - 持續運動（維持肌肉量）",
        "  - 水療（減重運動）",
        "  - 被動關節活動",
        "  - 站立訓練",
        "營養補充（理論效益，證據有限）：",
        "  - 維生素E",
        "  - Omega-3脂肪酸",
        "  - N-乙醯半胱氨酸",
        "輔助設備：",
        "  - 後肢支撐帶",
        "  - 輪椅",
        "  - 防滑靴套",
        "環境調整：防滑地板",
        "安樂死時機討論（生活品質考量）"
      ]
    },
    prognosis: "預後差，疾病不可逆且持續進行。從後肢癱瘓到需要安樂死通常6-12個月。維持運動可能減緩進展。最終因呼吸肌麻痺或生活品質考量而安樂死。",
    pearls: [
      "DM是排除性診斷，確診需要病理",
      "SOD1基因檢測：純合子突變=高風險，但非所有都會發病",
      "與IVDD Type II鑑別：DM非疼痛性，兩側對稱",
      "保持運動是目前最佳「治療」",
      "類似人類ALS，是重要的研究模型",
      "早期MRI可能正常或僅見脊髓輕度萎縮"
    ],
    monitoring: ["定期神經功能評估", "肌肉量", "生活品質評估", "膀胱功能（晚期）"],
    reference: "Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; Coates JR, Wininger FA: Canine degenerative myelopathy. Vet Clin North Am Small Anim Pract 40:929-950, 2010"
  },

  // ==================== 癲癇和發炎性疾病 ====================

  "idiopathic-epilepsy": {
    zh: "特發性癲癇",
    en: "Idiopathic Epilepsy",
    definition: "排除結構性和代謝性原因後，反覆發生的癲癇發作。被認為有遺傳基礎，是犬最常見的癲癇病因。",
    synonyms: ["原發性癲癇", "Primary Epilepsy", "Genetic Epilepsy", "遺傳性癲癇", "IE"],
    epidemiology: {
      species: "犬最常見，貓較少見",
      age: "首次發作通常6個月至6歲（多數1-5歲）",
      sex: "公犬略多（某些品種）",
      riskFactors: ["品種傾向：Labrador Retriever、Golden Retriever、German Shepherd、Beagle、Belgian Shepherd（Tervuren）、Border Collie、Australian Shepherd、Vizsla", "家族史"]
    },
    clinicalPresentation: {
      history: ["反覆發生的癲癇發作", "發作間期完全正常", "可能有前兆期（焦慮、躲藏、尋求主人）", "發作類型：全身性強直-陣攣最常見", "發作後期：混亂、失明、飢餓"],
      physicalExam: ["發作間期：神經學檢查完全正常", "發作時：意識喪失、強直-陣攣、流涎、排尿排便", "發作後：短暫意識模糊、失明、運動失調"]
    },
    pathophysiology: "遺傳因素導致神經元興奮性和抑制性平衡失調 → 神經元異常同步放電 → 癲癇發作。某些品種已確認特定基因突變（如LGI2 in Lagotto Romagnolo）。大多數為多基因遺傳。",
    diagnosis: {
      overview: "排除性診斷：排除結構性、代謝性和中毒原因",
      differentials: ["結構性癲癇（腦腫瘤、腦炎、腦積水）", "代謝性癲癇（低血糖、肝腦病、電解質異常）", "反應性癲癇（中毒）", "運動障礙", "暈厥", "發作性睡病"],
      initialDB: ["完整神經學檢查（應正常）", "CBC、生化全套、電解質", "血糖（發作時和空腹）", "甲狀腺功能", "膽汁酸或血氨（排除肝腦病）", "尿液分析"],
      advanced: ["腦部MRI（>6歲首發或神經學異常者必要）", "腦脊液分析", "腦電圖（EEG）（可用性有限）", "基因檢測（特定品種）"]
    },
    treatment: {
      overview: "抗癲癇藥物(AED)控制發作頻率和嚴重度",
      acute: [
        "叢集發作或癲癇持續狀態（見急診章節）：",
        "  - Diazepam: 0.5-1 mg/kg IV/rectal",
        "  - Midazolam: 0.2-0.5 mg/kg IM/IN",
        "  - 若無效：Levetiracetam 60 mg/kg IV",
        "居家發作處理教育"
      ],
      chronic: [
        "開始長期AED治療的指征：",
        "  - 發作頻率>1次/月",
        "  - 叢集發作史",
        "  - 癲癇持續狀態史",
        "  - 發作後期嚴重或延長",
        "一線藥物選擇（犬）：",
        "  - Phenobarbital: 2.5-3 mg/kg PO q12h（目標血藥濃度25-35 ug/mL）",
        "  - Levetiracetam (Keppra): 20-30 mg/kg PO q8h（安全性高）",
        "  - Zonisamide: 5-10 mg/kg PO q12h",
        "  - Potassium bromide: 30-40 mg/kg PO q24h（負荷量可更快）",
        "貓：",
        "  - Phenobarbital: 1-2 mg/kg PO q12h",
        "  - Levetiracetam: 20 mg/kg PO q8h（首選）",
        "難治性癲癇：聯合用藥或加用Imepitoin"
      ]
    },
    prognosis: "約70-80%犬隻可用藥物達到良好控制（發作減少>50%）。約20-30%為難治性（藥物反應差）。預後因素：發作頻率高、叢集發作、早發型預後較差。大多數需終身治療。",
    pearls: [
      "「排除性診斷」- 必須排除其他原因",
      "首發年齡>6歲應高度懷疑結構性病變",
      "Phenobarbital需定期監測血藥濃度和肝功能",
      "不可突然停藥（誘發反彈發作）",
      "叢集發作是急診",
      "建議主人記錄發作日誌"
    ],
    monitoring: ["發作日誌（頻率、持續時間、類型）", "血藥濃度（Phenobarbital、Bromide）", "肝功能（Phenobarbital）", "腎功能（Bromide）", "CBC", "生活品質"],
    reference: "Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; Podell M et al: 2015 ACVIM small animal consensus statement on seizure management in dogs. J Vet Intern Med 30:477-490, 2016"
  },

  "granulomatous-meningoencephalitis": {
    zh: "肉芽腫性腦膜腦炎",
    en: "Granulomatous Meningoencephalitis (GME)",
    definition: "犬的非感染性、免疫介導的中樞神經系統炎症性疾病，特徵為單核細胞和組織細胞在腦和脊髓形成肉芽腫性病變。",
    synonyms: ["GME", "Inflammatory Reticulosis", "網狀細胞增生症", "Meningoencephalitis of Unknown Etiology (MUE)"],
    epidemiology: {
      species: "犬，貓極罕見",
      age: "年輕至中年（平均5歲，但1-12歲皆可）",
      sex: "母犬可能略多",
      riskFactors: ["小型犬品種：Maltese、Yorkshire Terrier、Poodle、Chihuahua、Pug", "中型犬亦可發生"]
    },
    clinicalPresentation: {
      history: ["急性或亞急性起病", "進行性神經功能障礙", "依病變位置表現：前腦徵象（癲癇、行為改變、盲目）、腦幹徵象（運動失調、頭歪斜、顏面麻痺）、脊髓徵象（輕癱）", "頸部疼痛常見"],
      physicalExam: ["多灶性神經學缺損（最常見）", "或單灶性病變（占位型GME）", "或僅眼部病變（眼部GME）", "發燒（部分病例）", "頸部僵硬或疼痛"]
    },
    pathophysiology: "確切病因不明，被認為是免疫介導的炎症反應。病理特徵：血管周圍淋巴細胞、單核細胞、組織細胞浸潤，形成肉芽腫。三種形式：播散型（多灶性，最常見且最具侵襲性）、局灶型（占位效應）、眼部型（視神經和眼部）。",
    diagnosis: {
      overview: "MRI和腦脊液支持診斷，確診需組織病理",
      differentials: ["壞死性腦膜腦炎(NME)", "壞死性白質腦炎(NLE)", "感染性腦炎（犬瘟熱、隱球菌、弓漿蟲）", "腦腫瘤", "腦梗塞"],
      initialDB: ["完整神經學檢查", "眼底檢查（視神經乳頭水腫、視網膜炎）", "CBC、生化（通常正常）", "傳染病篩檢"],
      advanced: ["腦部MRI：T2高信號病變、可能有強化和占位效應", "腦脊液分析：單核細胞增多、蛋白升高", "確診：腦組織活檢或死後病理（臨床上常依MRI+CSF推定診斷）"]
    },
    treatment: {
      overview: "免疫抑制治療",
      acute: [
        "高劑量類固醇起始：",
        "  - Prednisone/Prednisolone: 1-2 mg/kg PO q12h x 2-4週",
        "  - 或 Dexamethasone: 0.25-0.5 mg/kg IV q12-24h（急性嚴重）",
        "癲癇控制：抗癲癇藥物",
        "腦水腫管理（若有）：Mannitol"
      ],
      chronic: [
        "類固醇逐漸減量至最低有效劑量",
        "添加類固醇節約藥物（steroid-sparing）：",
        "  - Cytosine arabinoside (Ara-C): 50 mg/m2 SQ q12h x 2天，每3-4週",
        "  - 或 Cyclosporine: 5-10 mg/kg PO q12h",
        "  - 或 Mycophenolate mofetil: 10-20 mg/kg PO q12h",
        "  - 或 Leflunomide: 2-4 mg/kg PO q24h",
        "  - 或 Procarbazine: 25-50 mg/m2 PO q24h",
        "維持治療通常需要終身"
      ]
    },
    prognosis: "預後謹慎至差。播散型預後最差，中位生存期數月。局灶型和眼部型預後較好，部分可存活1-2年以上。治療反應良好者預後較佳。復發常見。",
    pearls: [
      "GME屬於「不明原因腦膜腦炎(MUE)」大類",
      "與NME和NLE統稱為「犬特發性非感染性腦炎」",
      "Ara-C是小動物腫瘤科常用藥物，在GME有良好效果",
      "MRI雖高度提示但無法與NME/NLE或腫瘤完全區分",
      "早期積極治療可能改善預後",
      "類固醇副作用在長期治療中是顯著問題"
    ],
    monitoring: ["神經功能評估", "類固醇副作用（PU/PD、食慾、皮膚、肌肉）", "追蹤MRI（評估療效）", "腦脊液複查（部分病例）"],
    reference: "Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; Granger N et al: Canine meningoencephalomyelitis of unknown origin. Vet Clin North Am Small Anim Pract 40:881-900, 2010"
  },

  "necrotizing-meningoencephalitis": {
    zh: "壞死性腦膜腦炎",
    en: "Necrotizing Meningoencephalitis (NME)",
    definition: "犬的非感染性、免疫介導的腦部炎症性疾病，特徵為腦實質壞死病變，主要影響灰質和白質交界處，高度品種相關。",
    synonyms: ["NME", "Pug Dog Encephalitis", "巴哥腦炎", "Necrotizing Encephalitis"],
    epidemiology: {
      species: "犬（特定品種），貓極罕見",
      age: "年輕成犬（多數1-7歲，平均2-4歲）",
      sex: "母犬可能略多",
      riskFactors: ["高度品種相關：Pug（最典型）、Yorkshire Terrier、Maltese、Chihuahua、French Bulldog、Shih Tzu", "可能有遺傳傾向"]
    },
    clinicalPresentation: {
      history: ["急性或亞急性起病", "快速進行性", "癲癇發作（最常見，常難以控制）", "視力障礙/失明", "行為改變", "意識改變（昏迷）"],
      physicalExam: ["前腦徵象為主：癲癇、失明、盤旋、頭壓牆、行為改變", "可能有運動失調", "頸部疼痛或僵硬", "進行性惡化"]
    },
    pathophysiology: "病因不明，認為是免疫介導。病理特徵：灰質和白質廣泛壞死，炎症細胞浸潤，主要影響大腦皮質。與GME不同，NME以壞死為主，血管周圍炎症較輕。Pug犬中可能與DLA II類基因型相關。",
    diagnosis: {
      overview: "MRI高度提示，確診需病理學",
      differentials: ["GME", "壞死性白質腦炎(NLE)", "感染性腦炎", "腦腫瘤", "腦梗塞", "代謝性腦病"],
      initialDB: ["神經學檢查", "眼底檢查", "CBC、生化（通常正常）", "傳染病篩檢"],
      advanced: ["腦部MRI：多灶性T2高信號，主要在灰白質交界，不對稱性，可能有腦萎縮", "腦脊液：單核細胞增多、蛋白升高", "確診：病理學"]
    },
    treatment: {
      overview: "與GME相似的免疫抑制治療，但療效較差",
      acute: [
        "高劑量類固醇：",
        "  - Prednisone: 1-2 mg/kg PO q12h",
        "積極癲癇控制（常難治）：",
        "  - Levetiracetam: 20-30 mg/kg PO q8h",
        "  - 加用Phenobarbital或Zonisamide",
        "腦水腫處理：Mannitol 0.5-1 g/kg IV"
      ],
      chronic: [
        "免疫抑制藥物（同GME）：",
        "  - Cytosine arabinoside",
        "  - Cyclosporine",
        "  - Mycophenolate",
        "持續癲癇管理",
        "支持治療"
      ]
    },
    prognosis: "預後差，通常比GME更具侵襲性。中位生存期通常僅數週至數月。癲癇控制困難是主要問題。少數病例可較長期存活。早期積極治療可能改善預後。",
    pearls: [
      "NME在Pug犬中特別典型（Pug Dog Encephalitis）",
      "癲癇常是首發症狀且難以控制",
      "與NLE區分：NLE主要影響白質",
      "MRI上壞死病變和萎縮是特徵",
      "比GME進展更快且預後更差",
      "需要與主人充分溝通預後"
    ],
    monitoring: ["癲癇頻率和嚴重度", "神經功能", "生活品質", "藥物副作用"],
    reference: "Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; Levine JM et al: Necrotizing meningoencephalitis in Pug Dogs. J Vet Intern Med 22:1128-1134, 2008"
  },

  // ==================== 前庭和其他腦部疾病 ====================

  "vestibular-disease": {
    zh: "前庭疾病",
    en: "Vestibular Disease",
    definition: "影響前庭系統（維持平衡和空間定向）的疾病總稱，分為周邊型（內耳和前庭神經）和中樞型（腦幹前庭核）。",
    synonyms: ["Vestibular Syndrome", "前庭症候群", "Old Dog Vestibular Disease", "老犬前庭疾病", "Geriatric Vestibular Syndrome"],
    epidemiology: {
      species: "犬貓皆常見",
      age: "周邊型：犬老年（特發性）、貓任何年齡；中樞型：任何年齡",
      sex: "無明顯性別傾向",
      riskFactors: ["老年（特發性）", "中耳/內耳感染", "甲狀腺功能低下（犬）", "耳毒性藥物", "顱內病變（中樞型）"]
    },
    clinicalPresentation: {
      history: ["急性發作的傾斜/倒向一側", "眼球震顫", "嘔吐", "食慾下降", "頭傾斜", "轉圈"],
      physicalExam: [
        "周邊型徵象：",
        "  - 頭傾斜向病變側",
        "  - 水平或旋轉眼球震顫（快相向對側）",
        "  - 跌倒或滾向病變側",
        "  - 無本體感覺缺失",
        "  - 可能有顏面麻痺或霍納氏症候群（同側）",
        "中樞型徵象：",
        "  - 垂直或方向改變的眼球震顫",
        "  - 本體感覺缺失",
        "  - 意識改變",
        "  - 其他顱神經缺損",
        "  - 運動失調超過傾斜程度"
      ]
    },
    pathophysiology: "周邊型：內耳前庭器官或前庭神經(CN VIII)病變 → 兩側前庭輸入不平衡 → 傾斜和眼球震顫。中樞型：腦幹前庭核或其聯繫病變 → 類似但常伴其他神經缺損。犬特發性前庭疾病原因不明，可能與血管問題相關。",
    diagnosis: {
      overview: "區分周邊型和中樞型是關鍵，指導進一步檢查",
      differentials: [
        "周邊型：特發性（老犬最常見）、中耳/內耳炎、耳毒性藥物、甲狀腺功能低下、多發性神經病、耳腫瘤",
        "中樞型：腦腫瘤、腦幹腦炎、腦梗塞、腦外傷、硫胺缺乏"
      ],
      initialDB: ["完整神經學檢查（區分周邊/中樞）", "耳鏡檢查", "耳道和鼓室X光或CT", "血液檢查（含甲狀腺功能）"],
      advanced: ["腦部MRI（中樞型或對治療無反應者）", "耳道和鼓室CT", "腦脊液分析", "BAER（腦幹聽覺誘發反應）"]
    },
    treatment: {
      overview: "治療原發病因；特發性以支持治療為主",
      acute: [
        "特發性前庭疾病：",
        "  - 支持治療",
        "  - 防跌倒和受傷",
        "  - 輸液（若嘔吐導致脫水）",
        "止吐/抗暈：",
        "  - Maropitant (Cerenia): 1 mg/kg SQ/PO q24h",
        "  - 或 Meclizine: 犬 25 mg PO q8-24h",
        "  - 或 Diphenhydramine: 2-4 mg/kg PO/IM q8h",
        "中耳炎：抗生素（全身和/或局部）",
        "中樞型：治療原發病因"
      ],
      chronic: [
        "物理治療（恢復期）",
        "環境調整（防滑墊）",
        "中耳炎：可能需要手術（鼓室切開、全耳道切除）",
        "甲狀腺功能低下：補充甲狀腺素"
      ]
    },
    prognosis: "特發性前庭疾病：預後良好，多數2-4週明顯改善，部分殘餘頭傾斜。中耳炎：治療原發感染後預後良好。中樞型：依病因而異。腫瘤相關者預後差。",
    pearls: [
      "犬特發性前庭病是老犬「中風樣」發作最常見原因",
      "周邊型和中樞型的區分至關重要",
      "本體感覺缺失提示中樞型",
      "垂直眼球震顫幾乎確定是中樞型",
      "特發性無需影像學（除非懷疑中樞）",
      "恢復期頭傾斜可能永久存在"
    ],
    monitoring: ["神經功能進展", "食慾和水分攝取", "嘔吐情況", "行走能力"],
    reference: "Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; Rossmeisl JH: Vestibular disease in dogs and cats. Vet Clin North Am Small Anim Pract 40:81-100, 2010"
  },

  "hydrocephalus": {
    zh: "水腦症",
    en: "Hydrocephalus",
    definition: "腦室內腦脊液(CSF)異常積聚導致腦室擴張和顱內壓升高的疾病，分為先天性和後天性。",
    synonyms: ["腦積水", "水頭症", "Ventriculomegaly"],
    epidemiology: {
      species: "犬較常見，貓罕見",
      age: "先天性：幼犬/幼貓；後天性：任何年齡",
      sex: "無明顯性別傾向",
      riskFactors: ["先天性：玩具犬和短頭品種（Chihuahua、Yorkshire Terrier、Pomeranian、Maltese、Pug、Boston Terrier、English Bulldog）", "後天性：腦腫瘤、腦炎、出血、創傷"]
    },
    clinicalPresentation: {
      history: ["先天性：幼年時發現、發育遲緩、學習困難", "後天性：進行性神經功能惡化", "癲癇", "失明", "行為異常"],
      physicalExam: ["先天性：圓頂狀頭顱、開放囟門、雙眼外斜（落日徵）、發育不良", "前腦徵象：行為改變、盤旋、失明、癲癇", "可能有運動失調", "嚴重者昏迷"]
    },
    pathophysiology: "CSF生成（脈絡叢）、循環或吸收（蛛網膜顆粒）障礙 → CSF積聚 → 腦室擴張 → 腦實質壓迫 → 神經功能障礙。先天性常因腦中導水管狹窄（阻塞性）。後天性可因腫瘤、感染、出血阻塞CSF流動。",
    diagnosis: {
      overview: "影像學確認腦室擴張",
      differentials: ["腦萎縮（腦室擴大但因腦實質減少）", "腦囊腫", "其他先天性腦畸形"],
      initialDB: ["神經學檢查", "頭顱觸診（開放囟門）", "眼底檢查（視神經乳頭水腫）"],
      advanced: ["腦部MRI（首選）或CT", "超音波（經開放囟門）", "腦脊液分析（謹慎，顱內壓高時風險）"]
    },
    treatment: {
      overview: "藥物減少CSF產生或手術引流",
      acute: [
        "急性神經惡化/顱內壓升高：",
        "  - Mannitol: 0.5-1 g/kg IV over 15-20min",
        "  - 頭部抬高15-30度",
        "  - 避免頸部壓迫"
      ],
      chronic: [
        "藥物治療：",
        "  - Omeprazole: 0.5-1 mg/kg PO q12-24h（減少CSF產生）",
        "  - Furosemide: 0.5-1 mg/kg PO q12h（輔助）",
        "  - Prednisone: 0.25-0.5 mg/kg PO q12-24h（減少水腫）",
        "癲癇控制：抗癲癇藥物",
        "手術治療：",
        "  - 腦室-腹膜分流術(Ventriculoperitoneal shunt)",
        "  - 適用於藥物無效或嚴重病例",
        "  - 併發症：感染、阻塞、過度引流"
      ]
    },
    prognosis: "先天性輕度：可能無症狀或穩定，預後可良好。有症狀者：藥物控制可能有效，嚴重者需手術。手術成功率約80%，但分流相關併發症常見。後天性：依原發病因而異。",
    pearls: [
      "「腦室擴大」不等於「水腦症」- 需有臨床症狀或進行性",
      "許多短頭犬種有無症狀的腦室擴大",
      "開放囟門本身非診斷標準",
      "Omeprazole減少CSF產生的機制未完全明瞭",
      "分流手術需長期追蹤監測",
      "後天性需尋找和治療原發病因"
    ],
    monitoring: ["神經功能", "頭圍（幼年）", "囟門大小", "追蹤MRI", "分流功能（若手術）"],
    reference: "Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; Thomas WB: Hydrocephalus in dogs and cats. Vet Clin North Am Small Anim Pract 40:143-159, 2010"
  },

  "syringomyelia": {
    zh: "脊髓空洞症",
    en: "Syringomyelia (SM)",
    definition: "脊髓內形成液體腔洞（脊髓空洞）的疾病，常繼發於Chiari樣畸形(CM)，導致脊髓損傷和神經性疼痛。",
    synonyms: ["SM", "脊髓空洞", "Chiari-like Malformation and Syringomyelia (CMSM)", "Chiari樣畸形伴脊髓空洞症"],
    epidemiology: {
      species: "犬為主，貓罕見",
      age: "症狀通常1-7歲出現（6月齡至>10歲皆可）",
      sex: "無明顯性別傾向",
      riskFactors: ["高度品種相關：Cavalier King Charles Spaniel（>95%有CM，約35-70%有SM）", "King Charles Spaniel、Brussels Griffon、Affenpinscher、Chihuahua、Yorkshire Terrier、Maltese等"]
    },
    clinicalPresentation: {
      history: ["神經性疼痛（最典型）：抓搔頸肩部（尤其牽繩行走時）", "幻搔(Phantom scratching)：腳不接觸皮膚的搔抓動作", "頸部疼痛", "對頭頸觸摸敏感", "夜間嗚咽", "行走異常"],
      physicalExam: ["頸部疼痛或過敏", "脊柱側彎（部分病例）", "輕度運動失調", "前肢無力", "肌肉萎縮（嚴重）", "頭傾斜（部分）"]
    },
    pathophysiology: "Chiari樣畸形：枕骨發育不全 → 後顱窩過小 → 小腦扁桃體疝入枕骨大孔 → 阻礙CSF正常流動 → CSF脈動壓力異常 → CSF進入脊髓中央管 → 形成脊髓空洞 → 壓迫脊髓背角（感覺神經元）→ 神經性疼痛和感覺異常。",
    diagnosis: {
      overview: "MRI是診斷金標準",
      differentials: ["頸椎間盤疾病", "脊髓腫瘤", "脊髓炎", "過敏性皮膚病（搔癢行為）", "肩關節問題"],
      initialDB: ["神經學檢查", "皮膚科評估（排除搔癢其他原因）"],
      advanced: ["頸胸椎MRI（必要）：可見小腦扁桃體疝出、枕骨大孔擁擠、脊髓空洞（T2高信號管狀結構）", "全脊髓MRI（空洞範圍評估）"]
    },
    treatment: {
      overview: "藥物控制疼痛；手術減壓適用於嚴重或進行性病例",
      acute: [
        "疼痛控制：",
        "  - Gabapentin: 10-20 mg/kg PO q8h（首選）",
        "  - 或 Pregabalin: 2-4 mg/kg PO q8-12h",
        "  - 可加用NSAIDs：Carprofen 2.2 mg/kg PO q12h",
        "減少CSF壓力：",
        "  - Omeprazole: 0.5-1 mg/kg PO q12-24h",
        "  - 或 Cimetidine: 5-10 mg/kg PO q6-12h",
        "類固醇（短期）：Prednisone 0.5-1 mg/kg PO q24h"
      ],
      chronic: [
        "長期藥物管理（同上）",
        "手術治療：",
        "  - 枕骨大孔減壓術(Foramen Magnum Decompression)",
        "  - 適應症：藥物無效、症狀嚴重或進行性",
        "  - 成功率約80%症狀改善，但約25-50%可能復發",
        "避免頸部牽引（使用胸背帶）",
        "避免極端頸部位置"
      ]
    },
    prognosis: "進行性疾病，症狀可能逐漸惡化。藥物可控制多數輕中度病例。手術可改善症狀但不能治癒。早期空洞預後較好。嚴重神經缺損預後較差。生活品質管理是重點。",
    pearls: [
      "Cavalier King Charles Spaniel是「代表品種」",
      "幻搔是高度特異性徵象",
      "MRI是唯一可靠診斷方法",
      "「有SM」不等於「有症狀」- 許多為亞臨床",
      "胸背帶取代項圈非常重要",
      "遺傳篩檢和負責任繁殖可減少發病率"
    ],
    monitoring: ["疼痛評估量表", "神經功能", "藥物副作用", "生活品質", "追蹤MRI（手術後或進行性惡化）"],
    reference: "Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; Rusbridge C et al: Syringomyelia in Cavalier King Charles Spaniels. J Am Vet Med Assoc 232:1870-1876, 2008"
  },

  // ==================== 神經肌肉疾病 ====================

  "myasthenia-gravis": {
    zh: "重症肌無力",
    en: "Myasthenia Gravis (MG)",
    definition: "神經肌肉接合處乙醯膽鹼受體(AChR)功能障礙導致的骨骼肌無力疾病，分為先天性（受體缺乏）和後天性（自體免疫抗體介導）。",
    synonyms: ["MG", "肌無力症", "重症肌無力症"],
    epidemiology: {
      species: "犬較常見，貓亦可發生",
      age: "先天性：幼年發病；後天性：雙峰（1-4歲和9-13歲）",
      sex: "無明顯性別傾向",
      riskFactors: ["品種傾向（後天性）：Akita、German Shepherd、Golden Retriever、Labrador、Dachshund", "先天性：Jack Russell Terrier、Smooth Fox Terrier、Springer Spaniel", "胸腺瘤相關"]
    },
    clinicalPresentation: {
      history: ["運動不耐（運動後惡化，休息後改善）", "虛弱", "吞嚥困難", "反覆吸入性肺炎", "巨食道症狀（逆流、嘔吐）", "聲音改變"],
      physicalExam: [
        "局部型：僅影響特定肌群",
        "  - 食道型：巨食道（最常見局部型）",
        "  - 咽喉型：吞嚥困難、發聲異常",
        "  - 眼型：眼瞼下垂（罕見）",
        "全身型：",
        "  - 進行性全身肌肉無力",
        "  - 運動後明顯惡化",
        "  - 脊椎反射正常",
        "  - 可能有巨食道"
      ]
    },
    pathophysiology: "後天性：自體抗體攻擊神經肌肉接合處的AChR → 受體減少和功能障礙 → 乙醯膽鹼訊號傳導失敗 → 肌肉無力。先天性：AChR或其他接合處蛋白的遺傳缺陷。與胸腺瘤相關病例中，胸腺異常可能觸發自體免疫。",
    diagnosis: {
      overview: "臨床表現、血清抗體檢測和藥物試驗",
      differentials: ["多發性肌炎", "其他原因的巨食道", "代謝性肌病", "急性多發性神經根炎", "蜱麻痺", "肉毒桿菌中毒"],
      initialDB: ["神經學檢查", "Tensilon試驗(Edrophonium): 0.1-0.2 mg/kg IV（短暫改善支持診斷）", "AChR抗體滴度（確診後天性）", "胸腔X光（巨食道、胸腺瘤）"],
      advanced: ["胸腔CT（胸腺瘤評估）", "肌電圖(EMG)：遞減反應", "肌肉活檢（先天性）"]
    },
    treatment: {
      overview: "抗膽鹼酯酶藥物、免疫抑制（後天性）、處理併發症",
      acute: [
        "Pyridostigmine (Mestinon): 0.5-3 mg/kg PO q8-12h",
        "若無法口服：Neostigmine 0.04 mg/kg IM q6h",
        "吸入性肺炎治療：廣譜抗生素",
        "肌無力危象：",
        "  - 呼吸支持（氧氣、可能需機械通氣）",
        "  - 謹慎使用抗膽鹼酯酶（避免膽鹼能危象）"
      ],
      chronic: [
        "抗膽鹼酯酶藥物維持",
        "免疫抑制（後天性，尤其抗體高滴度）：",
        "  - Prednisone: 1-2 mg/kg PO q12-24h（緩慢增量以避免惡化）",
        "  - Azathioprine: 2 mg/kg PO q24h",
        "  - Mycophenolate: 10-20 mg/kg PO q12h",
        "胸腺切除術（胸腺瘤相關）",
        "巨食道管理：",
        "  - 高位餵食（Bailey椅）",
        "  - 少量多餐",
        "  - 餵食後維持直立15-30分鐘",
        "  - 飲食調整（稠度）"
      ]
    },
    prognosis: "後天性：部分可自發緩解（約30-50%在6-18個月內）。治療反應良好者預後較佳。與胸腺瘤相關者需手術，預後較謹慎。吸入性肺炎是主要死亡原因。先天性：預後依嚴重程度和品種而異。",
    pearls: [
      "巨食道可以是MG的唯一表現",
      "Tensilon試驗陰性不能排除MG",
      "抗體滴度與嚴重度不完全相關",
      "類固醇初期可能暫時惡化症狀",
      "吸入性肺炎預防是護理重點",
      "部分病例可自發緩解"
    ],
    monitoring: ["肌肉力量評估", "體重", "胸腔X光（巨食道、肺炎）", "AChR抗體滴度追蹤", "藥物副作用"],
    reference: "Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; Shelton GD: Myasthenia gravis and disorders of neuromuscular transmission. Vet Clin North Am Small Anim Pract 32:189-206, 2002"
  },

  "polymyositis": {
    zh: "多發性肌炎",
    en: "Polymyositis",
    definition: "骨骼肌的免疫介導性炎症疾病，特徵為肌肉炎症、壞死和再生，導致虛弱和肌肉萎縮。",
    synonyms: ["免疫介導性肌炎", "Immune-mediated Myositis", "Inflammatory Myopathy", "炎症性肌病"],
    epidemiology: {
      species: "犬較常見，貓罕見",
      age: "任何年齡，成犬最常見",
      sex: "無明顯性別傾向",
      riskFactors: ["品種傾向：German Shepherd、Boxer、Newfoundland、Hungarian Vizsla", "可能與感染、腫瘤或其他自體免疫疾病相關"]
    },
    clinicalPresentation: {
      history: ["進行性肌肉無力", "僵硬步態", "運動不耐", "吞嚥困難（咽部肌肉受累）", "發聲改變", "肌肉萎縮", "肌肉疼痛"],
      physicalExam: ["全身肌肉無力", "肌肉萎縮", "肌肉觸診疼痛", "顳肌和咀嚼肌萎縮（特定類型）", "發燒（部分病例）", "脊椎反射正常或降低"]
    },
    pathophysiology: "免疫介導機制（可能T細胞介導）→ 淋巴細胞和巨噬細胞浸潤肌肉 → 肌纖維損傷和壞死 → 肌肉再生嘗試 → 進行性肌肉萎縮和纖維化。某些型式有特定自體抗體（如抗2M型肌纖維抗體）。",
    diagnosis: {
      overview: "肌肉酵素升高、EMG異常、肌肉活檢確診",
      differentials: ["重症肌無力", "感染性肌炎（弓漿蟲、Neospora）", "代謝性肌病", "內分泌性肌病（甲狀腺功能低下、庫欣症）", "皮肌炎", "咀嚼肌肌炎"],
      initialDB: ["肌肉酵素：CK（通常明顯升高）、AST、LDH", "CBC、生化全套", "甲狀腺功能", "傳染病篩檢（弓漿蟲、Neospora抗體）"],
      advanced: ["肌電圖(EMG)：自發活動、纖顫電位", "肌肉活檢（確診）：炎症細胞浸潤、肌纖維壞死和再生", "2M抗體檢測（特定型式）", "ANA（排除SLE）"]
    },
    treatment: {
      overview: "免疫抑制治療",
      acute: [
        "類固醇：",
        "  - Prednisone: 2-4 mg/kg/day PO 分次給予",
        "  - 急性嚴重：Dexamethasone 0.2-0.5 mg/kg IV",
        "支持治療：",
        "  - 輸液",
        "  - 營養支持（吞嚥困難者）",
        "  - 褥瘡預防（臥床者）"
      ],
      chronic: [
        "類固醇漸減至最低有效劑量",
        "類固醇節約藥物：",
        "  - Azathioprine: 2 mg/kg PO q24h",
        "  - 或 Mycophenolate: 10-20 mg/kg PO q12h",
        "  - 或 Cyclosporine: 5-10 mg/kg PO q12h",
        "物理治療（恢復期）",
        "長期監測復發"
      ]
    },
    prognosis: "預後變異大。多數對免疫抑制治療反應良好，但可能需要長期治療。復發常見。吞嚥困難和呼吸肌受累預後較差。慢性肌肉萎縮可能不完全恢復。",
    pearls: [
      "CK明顯升高是重要線索，但不特異",
      "必須排除感染性原因（弓漿蟲、Neospora）",
      "肌肉活檢是確診金標準",
      "咀嚼肌肌炎是特殊的局部型式",
      "治療反應通常需2-4週才明顯",
      "完全停藥後復發率高"
    ],
    monitoring: ["CK（治療反應指標）", "肌肉力量和萎縮", "體重", "類固醇副作用", "複查EMG（部分病例）"],
    reference: "Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; Evans J et al: Canine inflammatory myopathies: A clinicopathological review of 200 cases. J Vet Intern Med 18:679-691, 2004"
  },

  // ==================== 老年和其他神經疾病 ====================

  "cognitive-dysfunction-syndrome": {
    zh: "認知功能障礙症候群",
    en: "Cognitive Dysfunction Syndrome (CDS)",
    definition: "老年犬貓的進行性神經退化性疾病，特徵為行為改變、認知能力下降，類似人類阿茲海默症。",
    synonyms: ["CDS", "認知障礙", "Canine/Feline Dementia", "犬貓痴呆", "老年痴呆", "認知功能退化"],
    epidemiology: {
      species: "犬貓皆常見",
      age: "老年（犬>8歲，貓>11歲；患病率隨年齡增加）",
      sex: "無明顯性別傾向",
      riskFactors: ["高齡是主要因素", "某些品種可能更易患病", "缺乏心智刺激"]
    },
    clinicalPresentation: {
      history: [
        "DISHA徵象：",
        "  - D: Disorientation（定向障礙）- 迷路、盯著牆壁",
        "  - I: Interaction changes（互動改變）- 對主人反應減少",
        "  - S: Sleep-wake cycle disturbances（睡眠週期紊亂）- 夜間嚎叫、日夜顛倒",
        "  - H: House soiling（居家排泄異常）- 忘記訓練",
        "  - A: Activity changes（活動改變）- 減少或重複行為",
        "可能有焦慮增加"
      ],
      physicalExam: ["神經學檢查通常正常（除年齡相關變化）", "可能有反應遲鈍", "可能有聽力或視力下降", "需排除其他醫學問題"]
    },
    pathophysiology: "類似人類阿茲海默症的病理改變：β-澱粉樣蛋白在腦內沉積 → 老年斑形成 → 神經元損傷和死亡 → 腦萎縮 → 認知功能下降。氧化壓力、血管病變和神經傳導物質（如多巴胺）減少也參與病程。",
    diagnosis: {
      overview: "排除性診斷；需排除其他導致類似行為改變的疾病",
      differentials: ["腦腫瘤", "腦炎", "代謝性腦病（肝腦病、尿毒症）", "甲狀腺功能異常", "高血壓性腦病", "疼痛", "聽力/視力喪失", "其他行為問題"],
      initialDB: ["完整神經學檢查", "CBC、生化全套", "甲狀腺功能", "血壓測量", "尿液分析"],
      advanced: ["腦部MRI（排除結構性病變，可能見腦萎縮）", "認知功能評估量表"]
    },
    treatment: {
      overview: "多模式治療：環境管理、飲食調整、藥物和營養補充",
      acute: [
        "無急性治療（慢性退化性疾病）",
        "處理任何共病問題"
      ],
      chronic: [
        "環境富化：",
        "  - 維持規律的日常作息",
        "  - 心智刺激（益智玩具、訓練）",
        "  - 適度運動",
        "  - 維持社交互動",
        "飲食：",
        "  - 抗氧化飲食（Hill's b/d等）",
        "  - Medium-chain triglycerides (MCT)",
        "藥物治療：",
        "  - Selegiline (Anipryl): 0.5-1 mg/kg PO q24h AM（MAO-B抑制劑）",
        "  - 效果通常在4-8週後評估",
        "營養補充：",
        "  - SAMe (S-adenosyl-L-methionine): 18-20 mg/kg PO q24h",
        "  - Omega-3脂肪酸（DHA/EPA）",
        "  - 維生素E和C",
        "  - Apoaequorin (Neutricks)",
        "焦慮管理：",
        "  - Trazodone（夜間嚎叫）",
        "  - 費洛蒙產品"
      ]
    },
    prognosis: "進行性疾病，無法治癒。治療目標是減緩進展和維持生活品質。部分狗貓對治療有良好反應。平均存活期診斷後1-2年。",
    pearls: [
      "CDS常被低估 - 主人可能認為「只是老了」",
      "需徹底排除其他醫學原因",
      "早期介入可能更有效",
      "夜間嚎叫是常見且困擾主人的症狀",
      "多模式治療優於單一方法",
      "「用進廢退」- 心智刺激很重要"
    ],
    monitoring: ["行為日誌", "認知功能評估量表", "生活品質評估", "定期複診"],
    reference: "Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; Landsberg GM et al: Cognitive dysfunction in cats: A syndrome we used to dismiss as old age. J Feline Med Surg 12:837-848, 2010"
  },

  "horners-syndrome": {
    zh: "霍納氏症候群",
    en: "Horner's Syndrome",
    definition: "眼部交感神經支配中斷導致的典型徵象群，包括瞳孔縮小、眼瞼下垂、眼球內陷和第三眼瞼突出。",
    synonyms: ["Horner氏症候群", "Oculosympathetic Paresis", "眼交感神經麻痺"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡，依病因而異",
      sex: "無明顯性別傾向，Golden Retriever在特發性病例中較多",
      riskFactors: ["中耳/內耳疾病", "頸部創傷或手術", "胸腔腫瘤", "臂神經叢病變", "品種：Golden Retriever、Cocker Spaniel（特發性）"]
    },
    clinicalPresentation: {
      history: ["眼睛「外觀異常」", "可能有耳部疾病、頸部創傷或手術史", "可能無其他症狀"],
      physicalExam: [
        "霍納氏症候群四徵：",
        "  - Miosis（瞳孔縮小）- 患側瞳孔較小",
        "  - Ptosis（上眼瞼下垂）",
        "  - Enophthalmos（眼球內陷）",
        "  - Third eyelid protrusion（第三眼瞼突出）",
        "可能伴隨：",
        "  - 同側結膜充血",
        "  - 若為周邊病變，可能有前庭徵象、顏面麻痺"
      ]
    },
    pathophysiology: "交感神經傳導路徑三級：一級（下視丘→胸椎T1-T3脊髓）→ 二級（脊髓→頸前神經節）→ 三級（神經節→眼部）。任一級中斷都會導致霍納氏症候群。犬貓最常見：三級（中耳、鼓室泡）>特發性>二級（胸腔）>一級（頸椎/腦幹）。",
    diagnosis: {
      overview: "臨床徵象確診；藥理試驗定位病變層級；影像學找病因",
      differentials: ["前葡萄膜炎（瞳孔縮小的其他原因）", "眼眶疾病"],
      initialDB: ["完整眼科檢查", "神經學檢查", "耳鏡檢查", "藥理定位試驗：", "  - Phenylephrine 10%滴眼：三級病變<20分鐘瞳孔散大；二級或一級>40分鐘"],
      advanced: ["胸腔X光（胸腔腫瘤）", "頸椎X光/MRI", "耳道和鼓室CT/MRI", "臂神經叢評估"]
    },
    treatment: {
      overview: "治療潛在病因；特發性多數自行恢復",
      acute: [
        "無緊急處理需求（霍納本身不損害視力）",
        "針對原發病因治療：",
        "  - 中耳炎：抗生素、可能手術",
        "  - 腫瘤：依類型和位置",
        "  - 創傷：支持治療"
      ],
      chronic: [
        "特發性：觀察，多數8-16週內自行恢復",
        "若有美觀考量：Phenylephrine 10% q12h（暫時性改善）",
        "長期未恢復者可能為永久性"
      ]
    },
    prognosis: "取決於病因。特發性（最常見）：預後良好，多數自行恢復。中耳炎相關：治療感染後恢復。腫瘤相關：依腫瘤類型和位置。部分病例可能永久存在但不影響視力。",
    pearls: [
      "霍納氏症候群本身不影響視力",
      "藥理試驗幫助定位但不總是準確",
      "中耳疾病是犬貓最常見病因",
      "Golden Retriever的特發性病例常見",
      "若有其他神經徵象，需更積極尋找病因",
      "特發性通常自行恢復，需耐心等待"
    ],
    monitoring: ["霍納徵象變化", "原發疾病治療反應", "神經功能"],
    reference: "Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; Kern TJ et al: Horner's syndrome in dogs and cats: 100 cases. J Am Vet Med Assoc 195:369-373, 1989"
  },

  "facial-nerve-paralysis": {
    zh: "顏面神經麻痺",
    en: "Facial Nerve Paralysis",
    definition: "第七對顱神經（顏面神經）功能障礙導致的面部表情肌麻痺，表現為眼瞼閉合障礙、耳朵下垂和嘴唇下垂。",
    synonyms: ["顏面神經癱瘓", "Facial Palsy", "Bell's Palsy（特發性）", "CN VII Paralysis"],
    epidemiology: {
      species: "犬較常見，貓亦可發生",
      age: "任何年齡，中老年較多",
      sex: "無明顯性別傾向",
      riskFactors: ["中耳/內耳疾病", "甲狀腺功能低下", "外傷", "腫瘤（顏面神經相關）", "品種：Cocker Spaniel、Cavalier King Charles Spaniel、Pembroke Welsh Corgi較常見特發性"]
    },
    clinicalPresentation: {
      history: ["眼睛無法閉合", "嘴唇一側下垂", "流涎（從患側流出）", "進食困難（食物卡在患側）", "可能有耳部疾病史"],
      physicalExam: [
        "患側徵象：",
        "  - 眼瞼無法閉合（眨眼反射缺失）",
        "  - 上下嘴唇下垂",
        "  - 耳朵位置下垂",
        "  - 鼻孔不對稱",
        "  - 角膜反射傳入正常但傳出缺失",
        "雙側麻痺（罕見）：表情呆滯",
        "可能伴隨：霍納氏症候群、前庭徵象（若中耳疾病）"
      ]
    },
    pathophysiology: "顏面神經經內耳道、面神經管和鼓室走行 → 控制面部表情肌、淚腺和唾液腺。病變可在顱內段、岩骨段或周邊段。中耳病變常影響面神經（解剖位置接近）。犬貓最常見原因：特發性>中耳炎>甲狀腺功能低下>創傷>腫瘤。",
    diagnosis: {
      overview: "臨床診斷明確；尋找潛在病因",
      differentials: ["腦幹病變（顱內）", "神經肌肉疾病（若雙側或伴全身症狀）"],
      initialDB: ["完整神經學檢查", "眼科檢查（Schirmer淚液試驗、角膜狀況）", "耳鏡檢查", "甲狀腺功能檢測", "血液檢查"],
      advanced: ["耳道和鼓室CT/MRI", "腦部MRI（若懷疑顱內病變）", "肌電圖", "淚液分泌功能評估"]
    },
    treatment: {
      overview: "保護角膜、治療潛在病因",
      acute: [
        "角膜保護（最重要）：",
        "  - 人工淚液：q4-6h（頻繁使用）",
        "  - 潤滑眼膏：夜間",
        "  - 若Schirmer淚液試驗降低：",
        "    Cyclosporine 0.2%眼藥 q12h或",
        "    Tacrolimus 0.03%眼藥 q12h",
        "治療原發病因：",
        "  - 中耳炎：抗生素",
        "  - 甲狀腺功能低下：Levothyroxine補充"
      ],
      chronic: [
        "持續眼部護理",
        "特發性：觀察，部分可自行恢復",
        "若中耳炎：可能需要手術（全耳道切除術）",
        "物理治療（部分建議）"
      ]
    },
    prognosis: "特發性：約50%在數週至數月內恢復。中耳炎相關：治療感染後約50%恢復。甲狀腺功能低下相關：補充治療後可能改善。創傷/腫瘤：依嚴重程度。部分永久性麻痺但可管理併發症。",
    pearls: [
      "角膜保護是最重要的治療目標",
      "眼瞼閉合障礙導致暴露性角膜炎",
      "特發性是排除性診斷",
      "顏面麻痺伴前庭徵象強烈提示中耳疾病",
      "甲狀腺功能低下可導致多發性顱神經病變",
      "恢復後可能有殘餘不對稱"
    ],
    monitoring: ["角膜健康（染色檢查）", "Schirmer淚液試驗", "神經功能恢復", "原發疾病治療反應"],
    reference: "Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; Garosi LS et al: Results of diagnostic investigations and long-term outcome of 33 dogs with brain infarction. J Vet Intern Med 19:725-731, 2005"
  },

  "trigeminal-neuritis": {
    zh: "三叉神經炎",
    en: "Trigeminal Neuritis",
    definition: "三叉神經（第五對顱神經）的特發性炎症性疾病，主要影響運動支，導致急性雙側下顎麻痺，無法閉合口部。",
    synonyms: ["特發性三叉神經炎", "Idiopathic Trigeminal Neuropathy", "Mandibular Paralysis", "Dropped Jaw", "下顎麻痺", "張口症"],
    epidemiology: {
      species: "犬為主，貓罕見",
      age: "任何年齡，成犬最常見",
      sex: "無明顯性別傾向",
      riskFactors: ["無特定品種傾向（任何品種可發生）", "病因不明"]
    },
    clinicalPresentation: {
      history: ["急性發作（24-48小時內）", "無法閉合嘴巴", "進食和飲水困難", "流涎", "無法撿起玩具/物品"],
      physicalExam: [
        "典型徵象：",
        "  - 下顎下垂、無法閉合",
        "  - 雙側咀嚼肌張力喪失",
        "  - 舌頭功能正常",
        "  - 吞嚥功能正常（可以吞嚥，但無法抓取食物）",
        "感覺功能：",
        "  - 純運動型：面部感覺正常",
        "  - 混合型（少數）：面部感覺減退",
        "霍納氏症候群可能伴隨（部分病例）"
      ]
    },
    pathophysiology: "確切病因不明。病理特徵：三叉神經雙側非化膿性炎症和脫髓鞘，主要影響運動支（支配咀嚼肌）。被認為可能是免疫介導或病毒相關。感覺支通常保留，但部分病例可能受累。自限性疾病。",
    diagnosis: {
      overview: "臨床診斷為主；需排除其他原因",
      differentials: ["狂犬病（重要排除！）", "肉毒桿菌中毒", "多發性肌炎（咀嚼肌肌炎）", "三叉神經腫瘤", "下顎骨折/脫臼", "顳顎關節疾病", "破傷風"],
      initialDB: ["完整神經學檢查", "口腔檢查（排除骨折/脫臼）", "咀嚼肌觸診", "面部感覺測試", "狂犬病風險評估"],
      advanced: ["肌電圖：咀嚼肌去神經支配", "MRI：可見三叉神經增粗和強化", "肌肉活檢（排除肌炎）", "腦脊液分析"]
    },
    treatment: {
      overview: "支持治療為主；通常自行恢復",
      acute: [
        "營養支持（最重要）：",
        "  - 輔助進食：將食物放入口腔後方",
        "  - 高位餵食（抬高碗）",
        "  - 軟食或流質飲食（成球狀放入口腔）",
        "  - 用注射器給水（小心吸入）",
        "  - 嚴重者：食道餵管或胃管",
        "保護口腔：",
        "  - 軟繃帶/吊帶支撐下顎（部分建議，需小心）",
        "  - 保持口腔清潔"
      ],
      chronic: [
        "持續營養支持直到恢復",
        "物理治療：被動開合下顎（維持關節活動）",
        "類固醇效果不確定：",
        "  - 部分建議Prednisone 1 mg/kg PO q24h",
        "  - 但多數病例自行恢復，類固醇效果不明",
        "等待自然恢復"
      ]
    },
    prognosis: "預後良好。約90%病例在2-4週內開始恢復，多數在4-8週內完全恢復。少數可能需要更長時間或有殘餘肌肉萎縮。復發罕見。主要風險是恢復前的營養不良和吸入性肺炎。",
    pearls: [
      "「下顎下垂但吞嚥功能正常」是典型特徵",
      "必須排除狂犬病（尤其在疫區）",
      "營養支持是治療關鍵",
      "通常2-4週開始改善",
      "咀嚼肌萎縮可能在恢復後仍存在",
      "與咀嚼肌肌炎鑑別：肌炎會痛且不能張口"
    ],
    monitoring: ["體重", "進食能力", "下顎功能恢復", "咀嚼肌萎縮程度", "吸入性肺炎徵象"],
    reference: "Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; Mayhew PD et al: Trigeminal neuropathy in dogs: A retrospective study of 29 cases. J Am Anim Hosp Assoc 38:262-270, 2002"
  }

};

// 疾病別名映射（用於搜尋）
const NEUROLOGICAL_DISEASE_ALIASES = {
  // 脊髓疾病
  "IVDD": "intervertebral-disc-disease",
  "椎間盤突出": "intervertebral-disc-disease",
  "椎間盤脫出": "intervertebral-disc-disease",
  "椎間盤疾病": "intervertebral-disc-disease",
  "disc disease": "intervertebral-disc-disease",
  "herniated disc": "intervertebral-disc-disease",
  "slipped disc": "intervertebral-disc-disease",
  "intervertebral disc": "intervertebral-disc-disease",

  "FCE": "fibrocartilaginous-embolism",
  "纖維軟骨栓塞": "fibrocartilaginous-embolism",
  "脊髓梗塞": "fibrocartilaginous-embolism",
  "spinal cord infarction": "fibrocartilaginous-embolism",
  "ischemic myelopathy": "fibrocartilaginous-embolism",

  "DM": "degenerative-myelopathy",
  "退化性脊髓病": "degenerative-myelopathy",
  "degenerative myelopathy": "degenerative-myelopathy",
  "慢性退化性脊髓病": "degenerative-myelopathy",

  // 癲癇和發炎性疾病
  "癲癇": "idiopathic-epilepsy",
  "特發性癲癇": "idiopathic-epilepsy",
  "原發性癲癇": "idiopathic-epilepsy",
  "epilepsy": "idiopathic-epilepsy",
  "seizure disorder": "idiopathic-epilepsy",

  "GME": "granulomatous-meningoencephalitis",
  "肉芽腫性腦膜腦炎": "granulomatous-meningoencephalitis",
  "肉芽腫性腦炎": "granulomatous-meningoencephalitis",
  "MUE": "granulomatous-meningoencephalitis",

  "NME": "necrotizing-meningoencephalitis",
  "壞死性腦膜腦炎": "necrotizing-meningoencephalitis",
  "壞死性腦炎": "necrotizing-meningoencephalitis",
  "巴哥腦炎": "necrotizing-meningoencephalitis",
  "pug dog encephalitis": "necrotizing-meningoencephalitis",

  // 前庭和其他腦部疾病
  "前庭疾病": "vestibular-disease",
  "前庭症候群": "vestibular-disease",
  "老犬前庭": "vestibular-disease",
  "vestibular syndrome": "vestibular-disease",
  "old dog vestibular": "vestibular-disease",

  "水腦症": "hydrocephalus",
  "腦積水": "hydrocephalus",
  "水頭症": "hydrocephalus",

  "SM": "syringomyelia",
  "脊髓空洞症": "syringomyelia",
  "脊髓空洞": "syringomyelia",
  "CMSM": "syringomyelia",
  "Chiari畸形": "syringomyelia",

  // 神經肌肉疾病
  "MG": "myasthenia-gravis",
  "重症肌無力": "myasthenia-gravis",
  "肌無力症": "myasthenia-gravis",
  "myasthenia": "myasthenia-gravis",

  "多發性肌炎": "polymyositis",
  "肌炎": "polymyositis",
  "inflammatory myopathy": "polymyositis",

  // 老年和其他神經疾病
  "CDS": "cognitive-dysfunction-syndrome",
  "認知功能障礙": "cognitive-dysfunction-syndrome",
  "認知障礙": "cognitive-dysfunction-syndrome",
  "老年痴呆": "cognitive-dysfunction-syndrome",
  "犬痴呆": "cognitive-dysfunction-syndrome",
  "貓痴呆": "cognitive-dysfunction-syndrome",
  "dementia": "cognitive-dysfunction-syndrome",

  "霍納氏症候群": "horners-syndrome",
  "霍納症候群": "horners-syndrome",
  "Horner": "horners-syndrome",
  "oculosympathetic": "horners-syndrome",

  "顏面神經麻痺": "facial-nerve-paralysis",
  "面神經麻痺": "facial-nerve-paralysis",
  "顏面癱瘓": "facial-nerve-paralysis",
  "facial palsy": "facial-nerve-paralysis",
  "Bell's palsy": "facial-nerve-paralysis",

  "三叉神經炎": "trigeminal-neuritis",
  "下顎麻痺": "trigeminal-neuritis",
  "張口症": "trigeminal-neuritis",
  "dropped jaw": "trigeminal-neuritis",
  "mandibular paralysis": "trigeminal-neuritis"
};

// 導出（若在模組環境中使用）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { NEUROLOGICAL_DISEASES, NEUROLOGICAL_DISEASE_ALIASES };
}

console.log("Neurological Diseases loaded:", Object.keys(NEUROLOGICAL_DISEASES).length, "diseases");

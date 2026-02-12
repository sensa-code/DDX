// ======= 皮膚科疾病 DISEASE_INFO =======
// Dermatological Diseases
// 資料來源：Clinical Veterinary Advisor: Dogs and Cats, 2nd Ed. (Etienne Côté)
// Muller & Kirk's Small Animal Dermatology, 7th Ed.
// 生成日期：2026-02-04

const DERMATOLOGICAL_DISEASES = {

  // ==================== 過敏性皮膚病 ====================

  "atopic-dermatitis": {
    zh: "異位性皮膚炎",
    en: "Atopic Dermatitis",
    definition: "一種遺傳易感性的炎症性和搔癢性皮膚病，與環境過敏原（如塵蟎、花粉、黴菌）的IgE抗體相關。是犬第二常見的過敏性皮膚病（僅次於跳蚤過敏）。",
    synonyms: ["Atopy", "異位性過敏", "Allergic Inhalant Dermatitis", "環境過敏"],
    epidemiology: {
      species: "犬最常見，貓較少見但可發生",
      age: "通常1-3歲發病，6個月至7歲皆可",
      sex: "無明顯性別傾向",
      riskFactors: ["品種傾向（West Highland White Terrier、Labrador、Golden Retriever、German Shepherd、Boxer、Bulldog、Shar-Pei、Dalmatian）", "家族史", "生活環境（室內、城市）", "早期過度清潔環境"]
    },
    clinicalPresentation: {
      history: ["搔癢為主要症狀（可能是唯一症狀）", "季節性發作（初期）逐漸變為全年性", "臉部、耳朵、腳掌、腋下、腹股溝搔抓", "反覆耳炎", "舔腳", "揉臉"],
      physicalExam: ["紅斑", "丘疹", "脫毛", "色素沉著", "苔蘚化（慢性）", "繼發感染（膿皮症、馬拉色菌）", "外耳炎", "結膜炎（部分病例）", "病變分布：臉、耳、腋窩、腹股溝、指間"]
    },
    pathophysiology: "遺傳性皮膚屏障缺陷 + 免疫調節異常 → 過敏原透過皮膚進入 → Th2免疫反應 → IgE產生 → 肥大細胞致敏 → 再次接觸過敏原 → 組織胺和其他介質釋放 → 搔癢和炎症 → 抓傷 → 皮膚屏障進一步破壞 → 繼發感染",
    diagnosis: {
      overview: "臨床診斷為主，基於Favrot標準排除其他搔癢性疾病",
      differentials: ["跳蚤過敏性皮膚炎", "食物過敏", "疥癬", "馬拉色菌皮膚炎", "膿皮症", "接觸性過敏"],
      initialDB: ["完整病史和體檢", "嚴格跳蚤控制試驗", "皮膚刮搔（排除疥癬）", "皮膚細胞學（酵母菌、細菌）", "真菌培養", "食物排除試驗（8-12週）"],
      advanced: ["皮內過敏原測試（金標準）", "血清IgE過敏原測試", "皮膚活檢（非典型病例）"]
    },
    treatment: {
      overview: "多模式治療：避免過敏原、控制搔癢和炎症、修復皮膚屏障、控制繼發感染",
      acute: [
        "急性發作搔癢控制：",
        "- Oclacitinib (Apoquel): 犬 0.4-0.6 mg/kg PO q12h x 14天，之後q24h",
        "- Lokivetmab (Cytopoint): 犬 1-2 mg/kg SC q4-8週",
        "- 短期類固醇：Prednisolone 0.5-1 mg/kg PO q24h x 5-7天",
        "繼發感染治療：",
        "- 抗生素（膿皮症）：Cephalexin 22-30 mg/kg PO q12h",
        "- 抗真菌（馬拉色菌）：Ketoconazole 5-10 mg/kg PO q24h"
      ],
      chronic: [
        "長期管理：",
        "- Oclacitinib或Lokivetmab維持",
        "- Cyclosporine: 5 mg/kg PO q24h（效果需4-6週）",
        "過敏原特異性免疫治療(ASIT)：皮下注射或舌下",
        "皮膚屏障修復：",
        "- 必需脂肪酸補充（Omega-3/6）",
        "- 保濕噴霧/洗劑",
        "- Phytosphingosine產品",
        "藥浴：每週1-2次抗菌/抗真菌/舒緩洗劑",
        "環境控制：減少塵蟎暴露、空氣淨化器"
      ]
    },
    prognosis: "終身管理但可良好控制。早期積極治療可防止皮膚慢性變化。ASIT約60-70%有效。多模式治療效果優於單一藥物。",
    pearls: [
      "Favrot標準：發病<3歲、主要室內、類固醇反應性搔癢、初期無皮膚病變、前腳受累、耳廓受累、耳廓邊緣不受累、腰背部不受累",
      "必須先排除跳蚤過敏和食物過敏",
      "繼發感染是搔癢惡化的常見原因",
      "Oclacitinib不建議用於<12月齡或有腫瘤風險的犬",
      "ASIT是唯一可能改變疾病進程的治療"
    ],
    monitoring: ["搔癢評分（CADESI-4或PVAS）", "繼發感染監測", "藥物副作用（類固醇、Cyclosporine）", "季節性變化"],
    reference: "Miller WH et al: Muller & Kirk's Small Animal Dermatology, 7th Ed. Elsevier, 2013"
  },

  "food-allergy": {
    zh: "食物過敏",
    en: "Food Allergy",
    definition: "對食物中蛋白質成分產生的免疫介導過敏反應，主要表現為非季節性搔癢性皮膚病，可能伴隨消化道症狀。",
    synonyms: ["Cutaneous Adverse Food Reaction", "食物過敏性皮膚炎", "Food Hypersensitivity", "Dietary Allergy"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡，部分在1歲前發病",
      sex: "無明顯性別傾向",
      riskFactors: ["品種傾向（犬：Labrador、Golden Retriever、German Shepherd、Cocker Spaniel、Boxer；貓：Siamese）", "其他過敏病史", "腸道屏障功能異常"]
    },
    clinicalPresentation: {
      history: ["非季節性搔癢", "對類固醇反應較差", "可能伴隨嘔吐、腹瀉", "軟便或排便頻繁", "搔癢可能從幼年開始", "肛門周圍搔癢"],
      physicalExam: ["病變分布類似異位性皮膚炎", "臉部、耳朵、腳掌搔癢", "外耳炎", "肛門周圍紅斑", "可能有膿皮症", "貓：頭頸部皮膚炎、嗜酸性肉芽腫", "腹部和軀幹病變可能更明顯"]
    },
    pathophysiology: "食物抗原通過腸道屏障 → 免疫系統致敏 → 產生食物特異性IgE（部分）或T細胞介導反應 → 再次攝入相同抗原 → 過敏反應 → 皮膚和/或消化道症狀。常見過敏原：牛肉、乳製品、雞肉、小麥、羊肉（犬）；魚、牛肉、乳製品（貓）",
    diagnosis: {
      overview: "排除飲食試驗是唯一可靠的診斷方法",
      differentials: ["異位性皮膚炎", "跳蚤過敏性皮膚炎", "疥癬", "接觸性過敏"],
      initialDB: ["詳細飲食史", "嚴格食物排除試驗（8-12週）", "- 水解蛋白飲食（如Hill's z/d、Royal Canin HP）", "- 或新型蛋白質飲食（之前未接觸過的蛋白質）", "挑戰試驗（確認診斷）"],
      advanced: ["皮膚活檢（非特異性）", "血清IgE食物測試（敏感性/特異性差，不推薦）"]
    },
    treatment: {
      overview: "終身避免致敏食物成分",
      acute: [
        "開始排除飲食試驗前處理繼發感染",
        "搔癢控制（排除試驗期間）：",
        "- Oclacitinib短期使用可接受",
        "- 避免長期類固醇（可能影響試驗結果解讀）"
      ],
      chronic: [
        "確認過敏原後的長期飲食：",
        "- 避免所有含致敏成分的食物",
        "- 選擇適當的商業飲食或自製飲食",
        "- 自製飲食需營養專家配方",
        "逐一挑戰試驗識別具體過敏原",
        "定期飲食評估"
      ]
    },
    prognosis: "嚴格飲食控制下預後極好。一旦識別過敏原，完全避免可控制症狀。某些患者可能對多種食物過敏。",
    pearls: [
      "排除試驗期間必須100%嚴格：無零食、調味藥物、磨牙骨",
      "血清食物過敏測試不可靠，不應作為診斷依據",
      "約30%食物過敏犬同時有環境過敏",
      "排除試驗效果可能需要8-12週才明顯",
      "水解蛋白飲食並非對所有患者都有效"
    ],
    monitoring: ["飲食遵從性", "症狀改善（排除試驗期間每2-4週評估）", "體重和營養狀態", "繼發感染"],
    reference: "Miller WH et al: Muller & Kirk's Small Animal Dermatology, 7th Ed. Elsevier, 2013"
  },

  "flea-allergy-dermatitis": {
    zh: "跳蚤過敏性皮膚炎",
    en: "Flea Allergy Dermatitis",
    definition: "對跳蚤唾液中過敏原產生的過敏反應，是犬貓最常見的過敏性皮膚病。即使少量跳蚤叮咬也可引起嚴重搔癢。",
    synonyms: ["FAD", "跳蚤過敏", "Flea Bite Hypersensitivity", "Flea Bite Dermatitis"],
    epidemiology: {
      species: "犬貓皆極常見",
      age: "任何年齡，通常1歲後發病",
      sex: "無性別傾向",
      riskFactors: ["有跳蚤暴露", "戶外活動", "多寵物家庭", "溫暖潮濕環境", "未進行跳蚤預防", "其他過敏體質"]
    },
    clinicalPresentation: {
      history: ["劇烈搔癢，尤其腰背部和尾巴根部", "季節性（溫暖月份加重）或全年性（室內）", "可能有發現跳蚤或跳蚤糞便", "反覆發作"],
      physicalExam: ["犬：腰背部、尾巴根部、後腿內側丘疹、脫毛、結痂", "貓：粟粒性皮膚炎、嗜酸性肉芽腫群、對稱性脫毛", "繼發感染（膿皮症、馬拉色菌）", "可能發現跳蚤或跳蚤糞便（梳檢）"]
    },
    pathophysiology: "跳蚤叮咬注入唾液 → 唾液中過敏原致敏 → IgE和T細胞介導的過敏反應 → 單次叮咬可引起數天的搔癢反應。過敏個體對跳蚤唾液中多種蛋白質（如cte f 1）產生反應。",
    diagnosis: {
      overview: "臨床診斷結合跳蚤控制反應試驗",
      differentials: ["異位性皮膚炎", "食物過敏", "疥癬", "皮癬菌感染", "膿皮症"],
      initialDB: ["特徵性病變分布", "發現跳蚤或跳蚤糞便", "梳檢", "跳蚤糞便水試驗（溶解呈紅褐色）", "嚴格跳蚤控制8-12週反應試驗"],
      advanced: ["皮內過敏原測試（跳蚤抗原）", "血清IgE（跳蚤）"]
    },
    treatment: {
      overview: "徹底跳蚤控制是關鍵，需處理患者、同住動物和環境",
      acute: [
        "搔癢控制：",
        "- Oclacitinib: 0.4-0.6 mg/kg PO q12h x 7-14天",
        "- 或短期類固醇：Prednisolone 0.5-1 mg/kg q24h x 5-7天",
        "繼發感染治療",
        "立即開始跳蚤控制"
      ],
      chronic: [
        "終身跳蚤預防（過敏個體）：",
        "口服類：",
        "- Fluralaner (Bravecto): 犬貓 q12週",
        "- Sarolaner (Simparica): 犬 q月",
        "- Afoxolaner (NexGard): 犬 q月",
        "- Spinosad (Comfortis): 犬貓 q月",
        "外用類：",
        "- Selamectin (Revolution): q月",
        "- Fipronil/S-methoprene (Frontline Plus): q月",
        "- Imidacloprid/Flumethrin (Seresto): 項圈，8個月",
        "所有同住動物都需要治療",
        "環境處理：吸塵、清洗寢具、環境噴霧（含IGR）"
      ]
    },
    prognosis: "嚴格跳蚤控制下預後極好。可能需要數週到數月才能完全控制。終身預防對過敏個體至關重要。",
    pearls: [
      "找不到跳蚤不能排除FAD - 過敏貓可能把跳蚤梳掉",
      "單次叮咬可引起2週的搔癢",
      "必須治療所有同住動物",
      "環境中95%的跳蚤是卵、幼蟲、蛹",
      "新型isoxazoline類藥物殺蚤速度快，效果佳"
    ],
    monitoring: ["臨床症狀改善", "跳蚤監測（梳檢）", "環境跳蚤負荷", "藥物遵從性"],
    reference: "Miller WH et al: Muller & Kirk's Small Animal Dermatology, 7th Ed. Elsevier, 2013"
  },

  // ==================== 寄生蟲性皮膚病 ====================

  "sarcoptic-mange": {
    zh: "疥癬",
    en: "Sarcoptic Mange",
    definition: "由疥癬蟎(Sarcoptes scabiei var. canis)引起的高度傳染性、劇烈搔癢的皮膚病。是人畜共通傳染病。",
    synonyms: ["Scabies", "犬疥癬", "Sarcoptes Infection", "疥蟎感染"],
    epidemiology: {
      species: "犬為主，貓罕見",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["接觸感染動物", "收容所", "流浪動物", "犬舍", "野生動物接觸（狐狸）"]
    },
    clinicalPresentation: {
      history: ["劇烈搔癢（與皮膚病變嚴重程度不成比例）", "搔癢持續且進展", "接觸史", "家中其他動物或人可能有症狀"],
      physicalExam: ["初期：耳廓邊緣、肘部、跗部、腹部丘疹和結痂", "後期：全身性、脫毛、結痂、苔蘚化", "耳廓-腳反射陽性（搓耳朵時後腳抓）", "淋巴結腫大"]
    },
    pathophysiology: "疥癬蟎鑽入表皮挖掘隧道 → 產卵 → 生命周期17-21天 → 蟎蟲及其排泄物引起強烈過敏反應 → 劇烈搔癢 → 抓傷和繼發感染",
    diagnosis: {
      overview: "高度懷疑時應進行試驗性治療，因為刮搔陽性率低",
      differentials: ["異位性皮膚炎", "食物過敏", "跳蚤過敏", "接觸性過敏", "皮癬菌感染"],
      initialDB: ["多處皮膚刮搔（耳廓邊緣、肘部、跗部）", "- 陽性率僅20-50%", "耳廓-腳反射", "試驗性治療反應"],
      advanced: ["血清疥癬抗體（ELISA）", "皮膚活檢（非特異性）"]
    },
    treatment: {
      overview: "殺蟎治療，需治療所有接觸動物和環境",
      acute: [
        "首選治療：",
        "- Sarolaner (Simparica): 2 mg/kg PO，每2週一次，共3次",
        "- Fluralaner (Bravecto): 單劑量25-56 mg/kg PO",
        "- Afoxolaner (NexGard): 2.7-6.9 mg/kg PO，每2週共3次",
        "替代治療：",
        "- Selamectin: 6-12 mg/kg局部，每2週共3次",
        "- Ivermectin: 0.2-0.4 mg/kg PO或SC，每週共4-6次",
        "  （注意：Collie及相關品種禁用）",
        "繼發感染治療：抗生素",
        "搔癢控制：短期類固醇"
      ],
      chronic: [
        "所有接觸動物同時治療",
        "環境處理：清洗寢具、吸塵",
        "蟎蟲離開宿主存活時間短（數天）",
        "隔離治療中動物直到痊癒"
      ]
    },
    prognosis: "適當治療預後極好。搔癢可能在蟎蟲清除後持續數週（過敏反應）。",
    pearls: [
      "耳廓-腳反射：搓耳廓邊緣時後腳抓 - 陽性提示疥癬",
      "刮搔陰性不能排除疥癬",
      "高度懷疑時應進行試驗性治療",
      "Isoxazoline類藥物現為首選",
      "人類接觸後可能出現暫時性皮疹（自限性）"
    ],
    monitoring: ["臨床改善", "2-4週後評估", "接觸動物和人的症狀"],
    reference: "Miller WH et al: Muller & Kirk's Small Animal Dermatology, 7th Ed. Elsevier, 2013"
  },

  "demodectic-mange": {
    zh: "蠕形蟎症",
    en: "Demodectic Mange",
    definition: "由蠕形蟎(Demodex canis犬，D. cati/D. gatoi貓)過度增殖引起的皮膚病。蠕形蟎是正常皮膚微生物群的一部分，免疫功能異常時會過度增殖。",
    synonyms: ["Demodicosis", "毛囊蟎症", "Red Mange", "Demodex Infection"],
    epidemiology: {
      species: "犬最常見，貓較少見",
      age: "幼年型：3-18月齡；成年型：>4歲",
      sex: "無性別傾向",
      riskFactors: ["幼年型：遺傳易感性、短毛純種犬", "成年型：免疫抑制（腫瘤、庫欣症、糖尿病、化療）", "品種傾向（Pit Bull、Shar-Pei、Bulldog、Boston Terrier）"]
    },
    clinicalPresentation: {
      history: ["局部型：1-2個脫毛斑，輕微或無搔癢", "全身型：多處脫毛，可能搔癢（繼發感染）", "成年發病應考慮潛在免疫抑制疾病"],
      physicalExam: ["局部型：臉部、前肢1-5個脫毛斑，輕微鱗屑，可自癒", "全身型：廣泛脫毛、紅斑、毛囊炎、膿皮症", "足蹠型：腳掌腫脹、疼痛、結節", "可能有淋巴結腫大"]
    },
    pathophysiology: "蠕形蟎正常存在於毛囊中，由母犬在哺乳期傳給幼犬。T細胞功能缺陷（遺傳或獲得性）→ 蟎蟲過度增殖 → 毛囊炎 → 繼發細菌感染 → 更嚴重的炎症和免疫抑制 → 惡性循環",
    diagnosis: {
      overview: "深層皮膚刮搔找到大量蠕形蟎即可確診",
      differentials: ["皮癬菌感染", "膿皮症", "疥癬", "過敏性皮膚炎"],
      initialDB: ["深層皮膚刮搔（擠壓皮膚至出血）", "毛髮拔除（拔毛檢查）", "皮膚刮搔需多處採樣", "成年發病需檢查潛在疾病"],
      advanced: ["皮膚活檢（毛囊內蟎蟲）", "免疫功能評估（成年型）", "潛在疾病篩檢（庫欣、糖尿病、腫瘤）"]
    },
    treatment: {
      overview: "殺蟎治療，全身型需要數月治療",
      acute: [
        "首選治療（Isoxazoline類）：",
        "- Fluralaner (Bravecto): 25-56 mg/kg PO，每月一次直到痊癒",
        "- Sarolaner (Simparica): 2 mg/kg PO q月",
        "- Afoxolaner (NexGard): 2.7-6.9 mg/kg PO q月",
        "替代治療：",
        "- Ivermectin: 0.3-0.6 mg/kg PO q24h（逐漸增量）",
        "  （Collie品種禁用，需MDR1基因檢測）",
        "- Milbemycin: 1-2 mg/kg PO q24h",
        "繼發膿皮症治療：長期抗生素"
      ],
      chronic: [
        "治療直到連續2次（間隔1個月）皮膚刮搔陰性",
        "全身型通常需要3-6個月治療",
        "成年型需治療潛在免疫抑制疾病",
        "受影響動物不建議繁殖（遺傳傾向）"
      ]
    },
    prognosis: "局部型：90%自癒，預後極好。全身型幼年：適當治療預後良好。成年型：取決於潛在疾病，可能需要長期管理。",
    pearls: [
      "蠕形蟎症不傳染給其他成年犬或人",
      "幼年局部型多數自癒，可選擇觀察",
      "Isoxazoline類藥物革命性改變了治療",
      "成年發病必須尋找潛在免疫抑制原因",
      "繼發膿皮症是常見併發症，需同時治療"
    ],
    monitoring: ["每月皮膚刮搔（追蹤蟎蟲數量）", "臨床改善", "繼發感染控制", "潛在疾病（成年型）"],
    reference: "Miller WH et al: Muller & Kirk's Small Animal Dermatology, 7th Ed. Elsevier, 2013"
  },

  "ear-mites": {
    zh: "耳蟎",
    en: "Ear Mites (Otodectes)",
    definition: "由耳蟎(Otodectes cynotis)感染引起的高度傳染性外耳道寄生蟲病，是幼年犬貓外耳炎的最常見原因。",
    synonyms: ["Otodectes cynotis感染", "Otodectic Mange", "Ear Mange", "耳癬"],
    epidemiology: {
      species: "貓最常見，犬亦可感染",
      age: "幼年動物最常見",
      sex: "無性別傾向",
      riskFactors: ["幼年動物", "多動物家庭", "收容所", "繁殖場", "接觸感染動物"]
    },
    clinicalPresentation: {
      history: ["劇烈耳朵搔癢", "頻繁甩頭", "抓耳朵", "黑色耳垢", "傳染給其他動物"],
      physicalExam: ["雙側外耳道大量黑褐色乾燥耳垢（咖啡渣樣）", "耳道紅腫", "耳廓損傷（抓傷）", "可能有頭頸部異位感染", "檢耳鏡可見白色移動蟎蟲"]
    },
    pathophysiology: "耳蟎生活在外耳道表面，以表皮碎屑和組織液為食 → 生命周期約21天 → 蟎蟲活動和排泄物引起刺激和過敏反應 → 搔癢和炎症 → 耳垢產生增加",
    diagnosis: {
      overview: "檢耳鏡直視或耳垢顯微鏡檢查",
      differentials: ["細菌性外耳炎", "馬拉色菌外耳炎", "過敏性外耳炎", "異物"],
      initialDB: ["檢耳鏡檢查（見白色移動蟎蟲）", "耳垢顯微鏡檢查（蟎蟲、卵）", "礦物油塗片"],
      advanced: ["皮膚刮搔（若有異位感染）"]
    },
    treatment: {
      overview: "殺蟎治療，需治療所有接觸動物",
      acute: [
        "全身性治療（首選）：",
        "- Selamectin (Revolution): 6 mg/kg局部，每月一次共2次",
        "- Sarolaner (Simparica): 單劑量",
        "- Fluralaner (Bravecto): 單劑量",
        "- Ivermectin: 0.2-0.3 mg/kg SC，每2週共3次",
        "局部治療：",
        "- Ivermectin耳滴劑",
        "- Milbemycin耳滴劑",
        "- Thiabendazole/Tresaderm",
        "耳道清潔：移除過多耳垢"
      ],
      chronic: [
        "所有接觸動物同時治療",
        "環境清潔（蟎蟲離開宿主存活時間短）",
        "預防性使用含殺蟎成分的預防藥"
      ]
    },
    prognosis: "適當治療預後極好。一般2-3週可清除感染。",
    pearls: [
      "黑色咖啡渣樣耳垢是典型特徵",
      "必須治療所有同住動物",
      "全身性Isoxazoline類藥物非常有效",
      "10%的外耳炎病例可能有耳蟎參與",
      "成年動物單獨感染較少見，應考慮免疫問題"
    ],
    monitoring: ["2-3週後重新檢查", "症狀改善", "其他動物症狀"],
    reference: "Miller WH et al: Muller & Kirk's Small Animal Dermatology, 7th Ed. Elsevier, 2013"
  },

  // ==================== 自體免疫性皮膚病 ====================

  "pemphigus": {
    zh: "天疱瘡",
    en: "Pemphigus",
    definition: "一組自體免疫性皮膚病，特徵為針對角質形成細胞間連結蛋白（橋粒）的自身抗體，導致表皮內水疱和膿疱。落葉型天疱瘡是犬貓最常見的類型。",
    synonyms: ["Pemphigus Foliaceus", "落葉型天疱瘡", "PF", "Pemphigus Vulgaris", "尋常型天疱瘡"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡，中年（4-6歲）最常見",
      sex: "無明顯性別傾向",
      riskFactors: ["品種傾向（犬：Akita、Chow Chow、Doberman、Dachshund、Newfoundland；貓：無）", "可能由藥物誘發", "可能由慢性皮膚病演變"]
    },
    clinicalPresentation: {
      history: ["落葉型(PF)：臉部開始的膿疱和結痂", "尋常型(PV)：口腔潰瘍、皮膚黏膜交界處病變", "可能有全身症狀（發燒、嗜睡）"],
      physicalExam: ["PF：膿疱（易破裂）、結痂、糜爛、脫毛", "分布：鼻樑、耳廓、眼周、腳墊、全身", "腳墊過度角化", "PV：口腔、皮膚黏膜交界處潰瘍（嚴重型）", "Nikolsky sign可能陽性（壓迫正常皮膚產生水疱）"]
    },
    pathophysiology: "自身抗體（抗橋粒芯蛋白抗體）→ 攻擊角質形成細胞間連結 → 棘層細胞鬆解（acantholysis）→ 表皮內水疱/膿疱形成。PF抗體針對淺層橋粒芯蛋白1；PV抗體針對深層橋粒芯蛋白3",
    diagnosis: {
      overview: "皮膚活檢是診斷金標準",
      differentials: ["膿皮症", "皮癬菌感染", "蠕形蟎症", "紅斑性狼瘡", "藥疹", "表皮代謝壞死"],
      initialDB: ["膿疱細胞學（棘層鬆解細胞）", "皮膚刮搔（排除蟎蟲）", "真菌培養", "皮膚活檢（新鮮膿疱或水疱邊緣）"],
      advanced: ["免疫螢光/免疫組織化學", "抗核抗體(ANA)"]
    },
    treatment: {
      overview: "免疫抑制治療是主要方案",
      acute: [
        "誘導緩解：",
        "- Prednisolone/Prednisone: 2-4 mg/kg/day PO（分次給予）",
        "- 或 Dexamethasone: 0.2-0.4 mg/kg/day",
        "繼發感染治療（若有）",
        "局部治療：Tacrolimus軟膏（局部病變）"
      ],
      chronic: [
        "維持治療（類固醇減量方案）：",
        "- 逐漸減量至最低有效劑量",
        "- 目標：隔日最低劑量",
        "類固醇替代藥物（減少副作用）：",
        "- Azathioprine: 犬 2 mg/kg q24-48h（貓禁用）",
        "- Mycophenolate mofetil: 10-20 mg/kg PO q12h",
        "- Chlorambucil: 貓 0.1-0.2 mg/kg q24-48h",
        "- Cyclosporine: 5-10 mg/kg PO q12-24h",
        "難治病例：",
        "- 金製劑注射",
        "- 人免疫球蛋白(hIVIG)"
      ]
    },
    prognosis: "需終身治療。多數患者可良好控制。約75%需要長期免疫抑制。部分可達到緩解並減藥。預後因類型而異：PF較好，PV較差。",
    pearls: [
      "膿疱易破裂，臨床常見結痂而非膿疱",
      "細胞學見棘層鬆解細胞高度提示天疱瘡",
      "活檢應取新鮮膿疱或水疱邊緣",
      "Azathioprine對貓有嚴重骨髓抑制風險，禁用",
      "藥物誘發型停藥可能緩解"
    ],
    monitoring: ["臨床症狀（每2-4週直到穩定）", "血液檢查（類固醇/免疫抑制劑副作用）", "繼發感染"],
    reference: "Miller WH et al: Muller & Kirk's Small Animal Dermatology, 7th Ed. Elsevier, 2013"
  },

  "lupus-erythematosus": {
    zh: "紅斑性狼瘡",
    en: "Lupus Erythematosus",
    definition: "自體免疫性疾病，分為系統性紅斑性狼瘡(SLE)和皮膚型紅斑性狼瘡(CLE)。SLE累及多器官系統；CLE主要局限於皮膚。盤狀紅斑性狼瘡(DLE)是最常見的皮膚型。",
    synonyms: ["SLE", "系統性紅斑性狼瘡", "DLE", "盤狀紅斑性狼瘡", "Discoid Lupus Erythematosus", "Cutaneous Lupus"],
    epidemiology: {
      species: "犬為主，貓罕見",
      age: "SLE：年輕至中年犬；DLE：中年犬",
      sex: "SLE：母犬可能較多",
      riskFactors: ["品種傾向（SLE：Collie、German Shepherd、Shetland Sheepdog；DLE：German Shepherd、Siberian Husky、Collie、Shetland Sheepdog）", "紫外線暴露加重DLE"]
    },
    clinicalPresentation: {
      history: ["DLE：鼻樑脫色和潰瘍", "SLE：多系統症狀（關節痛、腎病、皮膚病變、發燒）"],
      physicalExam: ["DLE：鼻鏡色素脫失、紅斑、結痂、潰瘍、鼻紋消失", "可能擴展到鼻樑和眼周", "SLE：多形性皮膚病變、多發性關節炎、蛋白尿、貧血、血小板減少"]
    },
    pathophysiology: "自身抗體形成（抗核抗體、抗DNA抗體等）→ 免疫複合物沉積 → 補體活化 → 組織損傷。SLE涉及多器官；DLE局限於皮膚基底膜區域免疫複合物沉積",
    diagnosis: {
      overview: "DLE：臨床和活檢；SLE：多系統證據結合血清學",
      differentials: ["天疱瘡", "皮癬菌感染", "蠕形蟎症", "鼻部鱗狀細胞癌", "黏膜皮膚膿皮症"],
      initialDB: ["皮膚活檢（界面皮膚炎、基底膜帶免疫複合物）", "DLE：鼻鏡活檢", "SLE：ANA、LE細胞、Coombs試驗、尿液分析"],
      advanced: ["免疫螢光（基底膜帶）", "抗dsDNA抗體", "關節液分析", "腎臟活檢（SLE）"]
    },
    treatment: {
      overview: "DLE：局部治療和免疫調節；SLE：全身免疫抑制",
      acute: [
        "DLE：",
        "- 避免日曬（防曬霜、限制戶外活動）",
        "- 局部類固醇或Tacrolimus",
        "- 口服維生素E: 400-800 IU q12h",
        "- 必需脂肪酸補充",
        "SLE：",
        "- Prednisolone: 2-4 mg/kg/day誘導",
        "- 治療器官特異性問題"
      ],
      chronic: [
        "DLE（難治病例）：",
        "- Tetracycline + Niacinamide",
        "- 低劑量口服類固醇",
        "SLE維持治療：",
        "- 類固醇減量至最低有效劑量",
        "- 免疫抑制劑（Azathioprine、Mycophenolate）",
        "終身監測和治療"
      ]
    },
    prognosis: "DLE：預後良好，可良好控制但需終身管理。SLE：預後謹慎至差，取決於器官累及程度。腎臟累及預後較差。",
    pearls: [
      "DLE是犬最常見的自體免疫皮膚病",
      "鼻鏡「鵝卵石」紋路消失是DLE早期徵兆",
      "DLE可能進展為SLE（罕見）",
      "SLE診斷需滿足多項標準",
      "避免日曬是DLE管理的重要部分"
    ],
    monitoring: ["DLE：臨床症狀、照片記錄", "SLE：腎功能、CBC、尿液分析、ANA滴度"],
    reference: "Miller WH et al: Muller & Kirk's Small Animal Dermatology, 7th Ed. Elsevier, 2013"
  },

  // ==================== 皮脂腺和角化異常 ====================

  "sebaceous-adenitis": {
    zh: "皮脂腺炎",
    en: "Sebaceous Adenitis",
    definition: "一種免疫介導的皮脂腺炎症性疾病，導致皮脂腺破壞、脫毛和嚴重鱗屑。主要影響特定品種犬。",
    synonyms: ["SA", "Granulomatous Sebaceous Adenitis", "肉芽腫性皮脂腺炎"],
    epidemiology: {
      species: "犬為主，貓罕見",
      age: "1-5歲多見",
      sex: "無明顯性別傾向",
      riskFactors: ["品種傾向（Standard Poodle、Akita、Samoyed、Vizsla、German Shepherd）", "遺傳傾向"]
    },
    clinicalPresentation: {
      history: ["進行性脫毛", "皮膚乾燥、鱗屑", "毛髮變粗糙", "可能無症狀或輕微搔癢"],
      physicalExam: ["Standard Poodle型：對稱性脫毛、銀白色鱗屑、毛囊角栓", "Akita型：脂漏、油膩結痂、繼發膿皮症", "分布：背部、頸部、頭頂、耳廓", "毛髮簇狀貼附在鱗屑中"]
    },
    pathophysiology: "病因不明，可能為自體免疫機制 → 淋巴細胞和組織細胞浸潤皮脂腺 → 皮脂腺破壞 → 皮脂分泌減少 → 毛囊角化異常 → 脫毛和鱗屑",
    diagnosis: {
      overview: "皮膚活檢是診斷金標準",
      differentials: ["蠕形蟎症", "皮癬菌感染", "原發性脂漏症", "甲狀腺功能低下", "內分泌性脫毛"],
      initialDB: ["皮膚活檢（早期：皮脂腺周圍肉芽腫性炎症；晚期：皮脂腺缺失）", "皮膚刮搔（排除蟎蟲）", "真菌培養", "甲狀腺功能"],
      advanced: ["多處活檢", "遺傳檢測（繁殖評估）"]
    },
    treatment: {
      overview: "外用油浴治療為主，嚴重病例需全身免疫調節",
      acute: [
        "油浴治療（每週1-2次）：",
        "- 礦物油或嬰兒油塗抹全身",
        "- 浸泡1-2小時",
        "- 溫和洗劑清洗",
        "角質溶解洗劑",
        "繼發感染治療（若有）"
      ],
      chronic: [
        "長期油浴維持",
        "口服必需脂肪酸",
        "免疫調節治療（嚴重病例）：",
        "- Cyclosporine: 5 mg/kg PO q12-24h",
        "- 維生素A: 10,000-30,000 IU q24h",
        "- 合成維生素A酸（慎用）",
        "局部Propylene glycol噴霧"
      ]
    },
    prognosis: "終身管理。Standard Poodle型對治療反應較好。Akita型較難控制。早期治療可能改善預後。毛髮再生可能不完全。",
    pearls: [
      "活檢時機很重要：晚期可能只見皮脂腺缺失",
      "Standard Poodle的SA是常染色體隱性遺傳",
      "油浴是治療基礎，需要主人配合",
      "繼發膿皮症常見於Akita型",
      "繁殖犬應進行皮膚活檢篩檢"
    ],
    monitoring: ["臨床改善", "繼發感染", "皮膚活檢追蹤（繁殖篩檢）"],
    reference: "Miller WH et al: Muller & Kirk's Small Animal Dermatology, 7th Ed. Elsevier, 2013"
  },

  "seborrhea": {
    zh: "脂漏症",
    en: "Seborrhea",
    definition: "皮膚角化異常導致的鱗屑和/或油膩皮膚狀態。可為原發性（遺傳）或繼發於其他皮膚病。",
    synonyms: ["Seborrheic Dermatitis", "脂漏性皮膚炎", "Keratinization Disorder", "角化異常"],
    epidemiology: {
      species: "犬為主",
      age: "原發性：幼年發病；繼發性：任何年齡",
      sex: "無性別傾向",
      riskFactors: ["原發性：品種傾向（Cocker Spaniel、Springer Spaniel、West Highland White Terrier、Basset Hound、Irish Setter、German Shepherd、Shar-Pei）", "繼發性：過敏、內分泌病、寄生蟲、感染"]
    },
    clinicalPresentation: {
      history: ["皮膚鱗屑（乾性）或油膩（油性）", "皮膚氣味（油性型）", "可能有搔癢（繼發感染或過敏）"],
      physicalExam: ["乾性脂漏(Seborrhea sicca)：乾燥白色鱗屑", "油性脂漏(Seborrhea oleosa)：油膩黃褐色鱗屑、皮膚油膩", "混合型最常見", "常伴隨外耳炎", "繼發馬拉色菌和/或細菌感染"]
    },
    pathophysiology: "原發性：遺傳性角質形成細胞更新加速（正常21-28天→數天）→ 鱗屑堆積、皮脂分泌異常。繼發性：潛在疾病影響角化和皮脂分泌 → 脂漏表現",
    diagnosis: {
      overview: "需排除繼發性原因，原發性脂漏是排除性診斷",
      differentials: ["過敏（異位性、食物、跳蚤）", "甲狀腺功能低下", "庫欣症", "蠕形蟎症", "皮癬菌感染", "皮脂腺炎"],
      initialDB: ["詳細病史", "皮膚刮搔", "皮膚細胞學（酵母菌、細菌）", "真菌培養", "甲狀腺功能", "食物排除試驗"],
      advanced: ["皮膚活檢", "過敏原測試", "內分泌功能全面評估"]
    },
    treatment: {
      overview: "治療潛在病因（繼發性）；症狀控制（原發性）",
      acute: [
        "繼發感染治療：",
        "- 馬拉色菌：Ketoconazole 5-10 mg/kg PO q24h",
        "- 膿皮症：適當抗生素",
        "藥浴治療"
      ],
      chronic: [
        "藥浴療法（每週1-3次根據嚴重程度）：",
        "- 乾性脂漏：保濕洗劑、燕麥洗劑",
        "- 油性脂漏：含硫、水楊酸、過氧化苯甲醯的洗劑",
        "- 混合型：交替使用",
        "- 抗真菌洗劑（Miconazole、Chlorhexidine）",
        "口服治療：",
        "- 必需脂肪酸",
        "- 維生素A（原發性脂漏）",
        "治療潛在疾病"
      ]
    },
    prognosis: "繼發性：治療潛在病因後預後良好。原發性：終身管理，可控制但無法治癒。定期藥浴可維持良好皮膚狀態。",
    pearls: [
      "90%以上的脂漏症是繼發性的",
      "必須排除過敏和內分泌病",
      "馬拉色菌過度生長幾乎總是存在",
      "Cocker Spaniel是原發性脂漏的典型品種",
      "藥浴頻率根據症狀調整"
    ],
    monitoring: ["臨床改善", "繼發感染控制", "潛在疾病管理"],
    reference: "Miller WH et al: Muller & Kirk's Small Animal Dermatology, 7th Ed. Elsevier, 2013"
  },

  // ==================== 脫毛疾病 ====================

  "alopecia-x": {
    zh: "X型脫毛症",
    en: "Alopecia X",
    definition: "一種病因不明的非炎症性脫毛疾病，主要影響北歐犬種。皮膚和毛囊對正常激素水平反應異常，導致進行性脫毛。",
    synonyms: ["Growth Hormone Responsive Dermatosis", "Castration Responsive Dermatosis", "黑皮症", "BSD (Black Skin Disease)", "Adrenal Sex Hormone Imbalance"],
    epidemiology: {
      species: "犬",
      age: "1-3歲或>9歲雙峰發病",
      sex: "公犬略多，絕育後也可發生",
      riskFactors: ["品種傾向（Pomeranian、Chow Chow、Alaskan Malamute、Samoyed、Siberian Husky、Keeshond、Miniature Poodle）", "可能有遺傳成分"]
    },
    clinicalPresentation: {
      history: ["進行性脫毛，無搔癢", "從臀部和大腿開始", "皮膚顏色變深", "毛髮再生後可能再次脫落"],
      physicalExam: ["雙側對稱性脫毛", "皮膚色素沉著（黑皮症）", "頭部和四肢毛髮保留", "皮膚無炎症、無結痂", "可能有毛髮質地改變（羊毛狀）"]
    },
    pathophysiology: "病因不明，可能涉及毛囊對多種激素（生長激素、腎上腺性激素、褪黑激素等）反應異常。毛囊進入休止期並停止生長周期。皮膚活檢顯示毛囊萎縮和「火焰狀」毛囊。",
    diagnosis: {
      overview: "排除性診斷，需排除其他內分泌性脫毛",
      differentials: ["甲狀腺功能低下", "庫欣症", "性激素失衡", "蠕形蟎症", "皮癬菌感染", "毛囊發育不良"],
      initialDB: ["完整病史和體檢", "甲狀腺功能（T4、fT4、TSH）", "皮質醇/ACTH刺激試驗", "性激素檢測", "皮膚刮搔", "真菌培養"],
      advanced: ["皮膚活檢（毛囊萎縮、火焰狀毛囊）", "腎上腺性激素panel", "ACTH刺激後性激素", "腹部超音波（腎上腺評估）"]
    },
    treatment: {
      overview: "純粹美容問題，可選擇不治療；多種治療方法效果不定",
      acute: [
        "絕育（未絕育動物）：部分病例有效",
        "觀察等待（純美容問題）"
      ],
      chronic: [
        "藥物治療（效果不一）：",
        "- Melatonin: 3-6 mg PO q8-12h（可能有效）",
        "- Trilostane: 2-5 mg/kg PO q24h（監測腎上腺功能）",
        "- Deslorelin植入（抗GnRH）",
        "局部Minoxidil（效果有限）",
        "微針刺激毛髮生長（實驗性）"
      ]
    },
    prognosis: "對健康無影響，純美容問題。治療效果不可預測。部分犬自發性毛髮再生。可能有周期性變化。",
    pearls: [
      "這是一個美容問題，不影響健康",
      "Pomeranian是最常見的受影響品種",
      "絕育可能促進毛髮再生（機制不明）",
      "治療反應難以預測",
      "皮膚活檢有特徵性但非診斷性發現"
    ],
    monitoring: ["照片記錄毛髮變化", "若使用Trilostane需監測腎上腺功能"],
    reference: "Miller WH et al: Muller & Kirk's Small Animal Dermatology, 7th Ed. Elsevier, 2013"
  },

  "pattern-baldness": {
    zh: "型態性禿毛",
    en: "Pattern Baldness",
    definition: "一種遺傳性的非炎症性脫毛疾病，表現為特定區域的進行性毛髮稀疏和脫落，類似人類的雄性禿。",
    synonyms: ["Canine Pattern Alopecia", "Pattern Alopecia", "品種相關性禿毛", "Pinnal Alopecia"],
    epidemiology: {
      species: "犬",
      age: "6個月至3歲開始",
      sex: "依亞型不同，公犬或母犬可能更常見",
      riskFactors: ["品種傾向（Dachshund、Chihuahua、Whippet、Italian Greyhound、Boston Terrier、Miniature Pinscher）", "遺傳因素"]
    },
    clinicalPresentation: {
      history: ["進行性、非炎症性脫毛", "特定區域毛髮稀疏", "無搔癢", "從年輕時開始"],
      physicalExam: ["耳廓禿毛（Pinnal alopecia）：耳廓背面進行性脫毛", "腹側型（Ventral pattern）：胸腹部、頸部腹側、大腿內側脫毛", "馬鞍型：軀幹兩側和尾巴", "皮膚正常、無炎症、無色素沉著", "毛髮逐漸稀疏直到完全禿毛"]
    },
    pathophysiology: "遺傳性毛囊對雄激素的敏感性或毛囊微型化。毛囊逐漸縮小，產生越來越細的毛髮直到停止生長。不涉及炎症或免疫機制。",
    diagnosis: {
      overview: "臨床診斷為主，基於典型分布和品種",
      differentials: ["內分泌性脫毛（甲狀腺功能低下、庫欣症）", "毛囊發育不良", "蠕形蟎症"],
      initialDB: ["詳細病史", "特徵性臨床表現", "皮膚刮搔（排除蟎蟲）", "甲狀腺功能（鑑別診斷）"],
      advanced: ["皮膚活檢（毛囊微型化、無炎症）"]
    },
    treatment: {
      overview: "純粹美容問題，通常無需治療",
      acute: [
        "無特異性急性治療",
        "排除其他疾病"
      ],
      chronic: [
        "通常不需要治療（純美容問題）",
        "嘗試性治療（效果不確定）：",
        "- Melatonin: 3-6 mg PO q8-12h",
        "- 局部Minoxidil（效果有限）",
        "防曬保護暴露皮膚"
      ]
    },
    prognosis: "對健康無影響。脫毛通常進行性但限於特定區域。無法恢復。不影響壽命或生活品質。",
    pearls: [
      "這是遺傳性美容問題，不影響健康",
      "Dachshund的耳廓禿毛是典型例子",
      "短毛品種較常見",
      "與人類雄性禿類似機制",
      "無有效治療方法"
    ],
    monitoring: ["照片記錄變化", "防曬（暴露皮膚）"],
    reference: "Miller WH et al: Muller & Kirk's Small Animal Dermatology, 7th Ed. Elsevier, 2013"
  },

  // ==================== 其他皮膚病 ====================

  "hot-spot": {
    zh: "急性濕疹",
    en: "Hot Spot (Acute Moist Dermatitis)",
    definition: "急性、局部、表淺性的化膿性皮膚炎，因自我創傷（舔、咬、抓）導致。常在數小時內快速發展，是犬最常見的皮膚急症之一。",
    synonyms: ["Acute Moist Dermatitis", "Pyotraumatic Dermatitis", "急性濕性皮膚炎", "Summer Sores"],
    epidemiology: {
      species: "犬為主，貓罕見",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["長毛、濃密毛髮品種（Golden Retriever、Labrador、German Shepherd、St. Bernard、Newfoundland）", "夏季/潮濕季節", "游泳後", "跳蚤過敏", "過敏性皮膚炎", "耳炎", "肛門腺問題"]
    },
    clinicalPresentation: {
      history: ["快速發展（數小時）", "劇烈舔或抓某部位", "可能有潛在病因（跳蚤、游泳、耳炎）"],
      physicalExam: ["境界清楚的紅斑、糜爛、滲出病灶", "濕潤、黏稠分泌物", "脫毛", "疼痛", "周圍毛髮粘結", "常見於頭部、頸部、臀部"]
    },
    pathophysiology: "潛在刺激（搔癢、疼痛）→ 自我創傷（舔、咬、抓）→ 表皮損傷 → 繼發細菌感染（葡萄球菌）→ 滲出和炎症 → 更多搔癢 → 惡性循環。熱氣和濕氣加速細菌增殖。",
    diagnosis: {
      overview: "臨床診斷，需尋找潛在誘因",
      differentials: ["深層膿皮症", "蠕形蟎症", "皮癬菌感染", "腫瘤"],
      initialDB: ["臨床表現", "細胞學（球菌）", "評估潛在誘因（跳蚤、耳炎、肛門腺）"],
      advanced: ["皮膚刮搔（排除蟎蟲）", "細菌培養（難治病例）", "皮膚活檢（非典型或不癒合）"]
    },
    treatment: {
      overview: "剃毛、清潔、控制感染和搔癢、治療潛在病因",
      acute: [
        "局部治療：",
        "- 剃毛病灶周圍（充分暴露病灶邊界）",
        "- 清潔消毒（Chlorhexidine、Povidone-iodine）",
        "- 外用抗生素軟膏（Mupirocin、Fusidic acid）",
        "- 局部類固醇噴霧（減少炎症）",
        "全身治療（較大或嚴重病灶）：",
        "- 抗生素：Cephalexin 22-30 mg/kg PO q12h x 7-14天",
        "- 短期類固醇：Prednisolone 0.5-1 mg/kg x 3-5天",
        "- 或 Oclacitinib止癢",
        "伊莉莎白項圈防止繼續自我創傷"
      ],
      chronic: [
        "識別和治療潛在誘因",
        "跳蚤預防",
        "過敏管理",
        "定期梳毛保持皮膚乾燥"
      ]
    },
    prognosis: "適當治療預後極好，通常5-7天癒合。復發常見若未處理潛在誘因。",
    pearls: [
      "剃毛是關鍵步驟 - 病灶常比看起來大",
      "必須找出潛在誘因防止復發",
      "Golden Retriever的臀部熱斑可能是深層膿皮症",
      "頭頸部熱斑常與耳炎相關",
      "夏季游泳後特別容易發生"
    ],
    monitoring: ["48-72小時後評估改善", "潛在誘因處理"],
    reference: "Miller WH et al: Muller & Kirk's Small Animal Dermatology, 7th Ed. Elsevier, 2013"
  },

  "callus-pressure-sore": {
    zh: "繭/壓瘡",
    en: "Callus/Pressure Sore",
    definition: "繭是反覆壓力或摩擦導致的皮膚增厚和角化過度；壓瘡是持續壓力導致的皮膚和軟組織缺血性壞死。常見於骨突部位。",
    synonyms: ["Callus", "繭", "Decubital Ulcer", "褥瘡", "Pressure Ulcer", "Bed Sore", "Hygromatic Ulcer"],
    epidemiology: {
      species: "犬為主",
      age: "任何年齡，老年或臥床動物更易發生壓瘡",
      sex: "無性別傾向",
      riskFactors: ["繭：大型/巨型犬種、睡硬地面、肥胖", "壓瘡：癱瘓、無法行動、住院、瘦弱、營養不良、老年"]
    },
    clinicalPresentation: {
      history: ["繭：逐漸形成的肘部或跗部厚皮", "壓瘡：臥床動物的皮膚破損"],
      physicalExam: ["繭：肘部、跗部、胸骨的增厚、角化過度、無毛皮膚", "可能有裂隙", "繭膿皮症：繭部位的毛囊炎和癤腫", "壓瘡：骨突部位的紅斑、糜爛、潰瘍、壞死", "可能深達骨骼"]
    },
    pathophysiology: "繭：反覆壓力和摩擦 → 表皮增厚（保護性反應）→ 角化過度 → 毛囊阻塞可導致繭膿皮症。壓瘡：持續壓力 → 局部血流受阻 → 組織缺血 → 細胞死亡 → 壞死和潰瘍",
    diagnosis: {
      overview: "臨床診斷",
      differentials: ["繭膿皮症", "腫瘤", "感染"],
      initialDB: ["臨床表現", "細胞學（若有分泌物）"],
      advanced: ["皮膚活檢（排除腫瘤）", "細菌培養（感染病例）", "X光（評估骨骼累及）"]
    },
    treatment: {
      overview: "繭：減少壓力、軟化皮膚；壓瘡：解除壓力、傷口護理",
      acute: [
        "繭：",
        "- 提供柔軟墊料/床墊",
        "- 肘部護墊",
        "- 保濕軟化劑",
        "繭膿皮症：",
        "- 抗生素（Cephalexin 22-30 mg/kg q12h）3-4週以上",
        "- 溫敷促進引流",
        "壓瘡：",
        "- 解除壓力（勤翻身、使用氣墊床）",
        "- 傷口清創",
        "- 保持傷口濕潤清潔"
      ],
      chronic: [
        "繭預防：",
        "- 永久提供柔軟睡墊",
        "- 體重管理",
        "壓瘡：",
        "- 每2-4小時翻身（臥床動物）",
        "- 營養支持",
        "- 壓力釋放裝置",
        "- 嚴重病例可能需要手術修復"
      ]
    },
    prognosis: "繭：預防性措施下預後良好。繭膿皮症需要長期治療。壓瘡：取決於嚴重程度和潛在疾病，嚴重者預後謹慎。",
    pearls: [
      "大型犬提供適當睡墊是最佳預防",
      "繭膿皮症需要長期抗生素治療",
      "壓瘡預防比治療容易",
      "癱瘓動物需要嚴格的護理計畫",
      "營養狀態影響傷口癒合"
    ],
    monitoring: ["繭大小和狀態", "壓瘡癒合進度", "感染徵象"],
    reference: "Miller WH et al: Muller & Kirk's Small Animal Dermatology, 7th Ed. Elsevier, 2013"
  },

  "zinc-responsive-dermatosis": {
    zh: "鋅反應性皮膚病",
    en: "Zinc-Responsive Dermatosis",
    definition: "因鋅缺乏或鋅利用障礙導致的皮膚病，表現為結痂、鱗屑和角化過度，尤其在身體開口處和壓力點。",
    synonyms: ["Zinc Deficiency", "鋅缺乏性皮膚病", "Zinc-Dependent Dermatosis"],
    epidemiology: {
      species: "犬",
      age: "依類型不同：症候群I（北歐犬種，任何年齡）；症候群II（快速生長幼犬）",
      sex: "無性別傾向",
      riskFactors: ["症候群I：Siberian Husky、Alaskan Malamute（遺傳性鋅吸收障礙）", "症候群II：快速生長期、高穀物/高鈣飲食、Giant品種幼犬"]
    },
    clinicalPresentation: {
      history: ["身體開口處結痂和鱗屑", "生長快速期發病（症候群II）", "飲食史（高穀物、缺乏肉類）"],
      physicalExam: ["症候群I：眼周、口周、耳廓紅斑、結痂、鱗屑", "肘部、跗部角化過度", "腳墊增厚、裂隙", "症候群II：類似分布但更嚴重", "可能有全身症狀（厭食、生長遲緩）"]
    },
    pathophysiology: "症候群I：遺傳性腸道鋅吸收障礙 → 即使飲食鋅正常也會缺乏。症候群II：飲食鋅不足或被飲食中過量鈣、植酸鹽結合 → 鋅生物利用度降低。鋅是角質形成細胞正常功能所必需 → 缺乏導致角化異常",
    diagnosis: {
      overview: "臨床表現、品種傾向和治療反應",
      differentials: ["皮癬菌感染", "脂漏症", "天疱瘡", "紅斑性狼瘡", "泛發性蠕形蟎症"],
      initialDB: ["詳細飲食史", "臨床表現", "皮膚活檢（角化不全、棘皮症）", "血清鋅濃度（可能正常）"],
      advanced: ["皮膚活檢", "對鋅補充的反應"]
    },
    treatment: {
      overview: "鋅補充是主要治療",
      acute: [
        "症候群I：",
        "- 硫酸鋅：10 mg/kg PO q24h（與食物分開給予）",
        "- 或甲硫胺酸鋅：2 mg/kg PO q24h",
        "- 或葡萄糖酸鋅：5 mg/kg PO q24h",
        "症候群II：",
        "- 糾正飲食（減少植酸、鈣）",
        "- 暫時性鋅補充"
      ],
      chronic: [
        "症候群I：終身鋅補充",
        "症候群II：飲食糾正後通常不需要長期補充",
        "改善需要4-6週"
      ]
    },
    prognosis: "症候群I：需要終身鋅補充，補充後預後良好。症候群II：飲食糾正後預後極好，通常完全恢復。",
    pearls: [
      "Siberian Husky和Alaskan Malamute是症候群I典型品種",
      "鋅最好與食物分開給予以提高吸收",
      "高鈣飲食干擾鋅吸收",
      "血清鋅濃度可能正常（組織缺乏）",
      "治療反應通常在4-6週內可見"
    ],
    monitoring: ["臨床改善", "治療反應", "鋅毒性症狀（罕見）"],
    reference: "Miller WH et al: Muller & Kirk's Small Animal Dermatology, 7th Ed. Elsevier, 2013"
  }

};

// 疾病別名映射（用於搜尋）
const DERMATOLOGICAL_DISEASE_ALIASES = {
  // 過敏性皮膚病
  "異位性皮膚炎": "atopic-dermatitis",
  "異位性過敏": "atopic-dermatitis",
  "環境過敏": "atopic-dermatitis",
  "atopy": "atopic-dermatitis",
  "atopic": "atopic-dermatitis",

  "食物過敏": "food-allergy",
  "食物過敏性皮膚炎": "food-allergy",
  "飲食過敏": "food-allergy",
  "food hypersensitivity": "food-allergy",

  "跳蚤過敏": "flea-allergy-dermatitis",
  "跳蚤過敏性皮膚炎": "flea-allergy-dermatitis",
  "FAD": "flea-allergy-dermatitis",
  "flea allergy": "flea-allergy-dermatitis",

  // 寄生蟲性皮膚病
  "疥癬": "sarcoptic-mange",
  "犬疥癬": "sarcoptic-mange",
  "疥蟎": "sarcoptic-mange",
  "scabies": "sarcoptic-mange",
  "sarcoptes": "sarcoptic-mange",

  "蠕形蟎症": "demodectic-mange",
  "蠕形蟎": "demodectic-mange",
  "毛囊蟎": "demodectic-mange",
  "demodicosis": "demodectic-mange",
  "demodex": "demodectic-mange",

  "耳蟎": "ear-mites",
  "耳癬": "ear-mites",
  "otodectes": "ear-mites",

  // 自體免疫性皮膚病
  "天疱瘡": "pemphigus",
  "落葉型天疱瘡": "pemphigus",
  "PF": "pemphigus",
  "pemphigus foliaceus": "pemphigus",

  "紅斑性狼瘡": "lupus-erythematosus",
  "狼瘡": "lupus-erythematosus",
  "SLE": "lupus-erythematosus",
  "DLE": "lupus-erythematosus",
  "盤狀紅斑性狼瘡": "lupus-erythematosus",
  "lupus": "lupus-erythematosus",

  // 皮脂腺和角化異常
  "皮脂腺炎": "sebaceous-adenitis",
  "SA": "sebaceous-adenitis",
  "sebaceous adenitis": "sebaceous-adenitis",

  "脂漏症": "seborrhea",
  "脂漏性皮膚炎": "seborrhea",
  "脂漏": "seborrhea",
  "seborrheic": "seborrhea",

  // 脫毛疾病
  "X型脫毛": "alopecia-x",
  "X型脫毛症": "alopecia-x",
  "黑皮症": "alopecia-x",
  "BSD": "alopecia-x",

  "型態性禿毛": "pattern-baldness",
  "品種相關性禿毛": "pattern-baldness",
  "pattern alopecia": "pattern-baldness",

  // 其他皮膚病
  "急性濕疹": "hot-spot",
  "熱斑": "hot-spot",
  "hot spot": "hot-spot",
  "pyotraumatic dermatitis": "hot-spot",

  "繭": "callus-pressure-sore",
  "壓瘡": "callus-pressure-sore",
  "褥瘡": "callus-pressure-sore",
  "callus": "callus-pressure-sore",
  "pressure sore": "callus-pressure-sore",
  "decubital ulcer": "callus-pressure-sore",

  "鋅反應性皮膚病": "zinc-responsive-dermatosis",
  "鋅缺乏": "zinc-responsive-dermatosis",
  "zinc deficiency": "zinc-responsive-dermatosis",
  "zinc responsive": "zinc-responsive-dermatosis"
};

// 導出供整合使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DERMATOLOGICAL_DISEASES, DERMATOLOGICAL_DISEASE_ALIASES };
}

console.log("Dermatological Diseases Info loaded:", Object.keys(DERMATOLOGICAL_DISEASES).length, "diseases");

// ======= 內分泌疾病 DISEASE_INFO =======
// Endocrine Diseases
// 生成日期: 2026-02-04
// 資料來源：Clinical Veterinary Advisor: Dogs and Cats, 2nd Ed. (Etienne Cote)
// 包含: 糖尿病、甲狀腺功能亢進/低下、腎上腺皮質功能亢進/低下、嗜鉻細胞瘤、
//       副甲狀腺功能亢進/低下、生長激素過多/缺乏、尿崩症、高醛固酮症、
//       甲狀腺癌、腎上腺腫瘤、胰島素瘤

const ENDOCRINE_DISEASES = {

  // ==================== 糖尿病 ====================

  "diabetes-mellitus": {
    zh: "糖尿病",
    en: "Diabetes Mellitus",
    definition: "因胰島素絕對或相對缺乏導致的碳水化合物、脂肪和蛋白質代謝異常，特徵為持續性高血糖和相關臨床症狀。",
    synonyms: ["DM", "Sugar Diabetes", "糖尿病", "Insulin Deficiency Diabetes"],
    epidemiology: {
      species: "犬貓皆常見",
      age: "犬：中老年（7-9歲高峰）；貓：中老年（平均10-13歲）",
      sex: "犬：未絕育母犬風險較高；貓：公貓較多（尤其已絕育肥胖公貓）",
      riskFactors: ["肥胖（尤其貓）", "品種傾向（犬：Samoyed、Australian Terrier、Miniature Schnauzer、Miniature/Toy Poodle；貓：Burmese）", "胰臟炎", "庫欣症", "使用類固醇或黃體素", "懷孕/動情期（母犬）"]
    },
    clinicalPresentation: {
      history: ["多飲多尿（PU/PD）", "多食（polyphagia）", "體重減輕（儘管食慾增加）", "嗜睡", "肌肉萎縮", "貓：後肢無力/跖行姿勢（糖尿病神經病變）"],
      physicalExam: ["消瘦或體態過低", "肌肉量減少", "脫水", "白內障（犬常見，貓罕見）", "肝腫大", "貓：跖行姿勢、被毛不良", "酮酸中毒時：嘔吐、虛弱、Kussmaul呼吸"]
    },
    pathophysiology: "犬：主要為胰島β細胞破壞（類似人類1型DM），與免疫介導、胰臟炎、品種遺傳相關。貓：主要為胰島素阻抗+β細胞功能衰退（類似人類2型DM），胰澱粉樣沉積常見。結果：高血糖 → 腎臟葡萄糖閾值超過 → 滲透性利尿 → PU/PD → 細胞無法利用葡萄糖 → 脂肪分解 → 酮體產生",
    diagnosis: {
      overview: "持續性空腹高血糖結合糖尿確診。排除應激性高血糖（尤其貓）",
      differentials: ["應激性高血糖（貓）", "庫欣症", "肢端肥大症（貓）", "胰臟炎", "腎臟疾病", "甲狀腺功能亢進（貓）"],
      initialDB: [
        "血糖（空腹>200 mg/dL 犬；>250 mg/dL 貓）",
        "尿液分析（糖尿、可能酮尿）",
        "果糖胺（Fructosamine）：反映2-3週平均血糖",
        "CBC、生化全套",
        "尿液培養（UTI常見併發症）"
      ],
      advanced: ["胰臟特異性脂肪酶(Spec cPL/fPL)", "腹部超音波", "糖化血紅蛋白(HbA1c)", "胰島素濃度（懷疑胰島素阻抗時）"]
    },
    treatment: {
      overview: "胰島素治療為主，配合飲食管理。貓部分病例可能緩解",
      acute: [
        "糖尿病酮酸中毒(DKA)：",
        "  - 積極輸液復甦（0.9% NaCl）",
        "  - 短效胰島素(Regular Insulin)：0.1-0.2 U/kg/h IV CRI 或 IM q1-2h",
        "  - 電解質補充（尤其鉀、磷）",
        "  - 監測並糾正酸中毒",
        "  - 當血糖<250 mg/dL時轉為皮下胰島素+輸液加葡萄糖"
      ],
      chronic: [
        "胰島素治療：",
        "犬：",
        "  - Vetsulin (Lente porcine): 0.25-0.5 U/kg SC q12h",
        "  - NPH insulin: 0.25-0.5 U/kg SC q12h",
        "  - Glargine: 若NPH控制不佳",
        "貓：",
        "  - Glargine (Lantus) 或 Detemir (Levemir): 1-2 U/貓 SC q12h（首選）",
        "  - ProZinc (PZI): 1-2 U/貓 SC q12h",
        "飲食管理：",
        "  - 犬：高纖維、複合碳水化合物飲食",
        "  - 貓：高蛋白、低碳水化合物飲食（關鍵！）",
        "  - 定時定量餵食",
        "體重管理（肥胖者減重）",
        "母犬：建議絕育"
      ]
    },
    prognosis: "犬：需終身胰島素治療，適當管理下預後良好，中位生存期約3年。貓：約20-30%可達到糖尿病緩解（尤其早期積極治療+飲食控制），緩解後需監測復發。併發症影響預後。",
    pearls: [
      "貓的應激性高血糖可達300-400 mg/dL，果糖胺有助於區分",
      "犬糖尿病幾乎都需終身胰島素；貓有緩解可能",
      "貓的低碳水化合物飲食非常重要，可提高緩解率",
      "白內障在犬糖尿病極為常見（>80%），貓罕見",
      "Somogyi效應：過量胰島素導致反彈性高血糖",
      "居家血糖監測可改善控制效果"
    ],
    monitoring: ["血糖曲線（每2-4週直到穩定）", "果糖胺（每4-6週）", "體重", "水攝取量", "臨床症狀", "尿液分析（每3-6個月）"],
    reference: "Cote E: Clinical Veterinary Advisor: Dogs and Cats, 2nd Ed. Mosby, 2011"
  },

  // ==================== 甲狀腺功能亢進（貓） ====================

  "hyperthyroidism-cat": {
    zh: "甲狀腺功能亢進（貓）",
    en: "Hyperthyroidism (Feline)",
    definition: "因甲狀腺激素（T3、T4）過度分泌導致的高代謝狀態，是老年貓最常見的內分泌疾病。",
    synonyms: ["Feline Hyperthyroidism", "貓甲亢", "Thyrotoxicosis", "甲狀腺毒症"],
    epidemiology: {
      species: "貓（犬罕見且通常與甲狀腺腫瘤相關）",
      age: "中老年貓（平均12-13歲，>95%超過10歲）",
      sex: "無明顯性別傾向",
      riskFactors: ["年齡", "室內飼養", "罐頭飲食（某些研究）", "使用貓砂（某些研究）", "環境因素（某些研究提示多溴二苯醚等）"]
    },
    clinicalPresentation: {
      history: ["體重減輕（儘管食慾增加或正常）", "多食", "多飲多尿", "嘔吐", "腹瀉/軟便", "過度活躍/不安/易怒", "被毛不良", "虛弱"],
      physicalExam: ["消瘦、肌肉萎縮", "甲狀腺結節可觸及（>80%病例）", "心搏過速", "心雜音或奔馬律", "高血壓", "過度活躍", "被毛粗糙或脫毛"]
    },
    pathophysiology: "95%以上為良性甲狀腺腺瘤或腺瘤樣增生（雙側70%，單側30%），<5%為甲狀腺癌。甲狀腺激素增加 → 基礎代謝率增加 → 蛋白質分解、脂肪動員 → 體重減輕。同時影響心臟（肥厚性心肌病變）、腎臟（GFR增加可能掩蓋潛在CKD）。",
    diagnosis: {
      overview: "血清總T4升高結合典型臨床表現。正常T4不能排除（早期或隱匿性甲亢）",
      differentials: ["慢性腎病", "糖尿病", "腸道疾病（IBD、淋巴瘤）", "肝病", "心臟病"],
      initialDB: [
        "血清總T4（Total T4）：升高確診；正常時需進一步檢查",
        "CBC、生化全套（評估併發症）",
        "尿液分析",
        "血壓測量",
        "胸腔X光"
      ],
      advanced: [
        "游離T4（Free T4）：總T4正常但高度懷疑時",
        "TSH濃度：甲亢時應降低",
        "甲狀腺閃爍掃描(99mTc)：評估異位甲狀腺組織、癌症",
        "心臟超聲（評估甲亢性心臟病）",
        "T3抑制試驗（少用）"
      ]
    },
    treatment: {
      overview: "四種治療選項：藥物、放射碘、手術、飲食。選擇取決於患者狀況和主人因素",
      acute: [
        "嚴重甲亢或甲狀腺風暴（罕見）：",
        "  - Beta-blocker (Atenolol): 6.25-12.5 mg/貓 PO q12-24h",
        "  - 支持治療（輸液、降溫）",
        "  - Methimazole 立即開始"
      ],
      chronic: [
        "1. 藥物治療（最常用初始治療）：",
        "  - Methimazole: 2.5 mg PO q12h 起始，依T4調整",
        "  - Carbimazole: 5 mg PO q8h 或 10-15 mg PO q24h",
        "  - 經皮Methimazole（耳廓內側）：不耐口服時",
        "  - 需終身用藥，監測副作用",
        "",
        "2. 放射碘治療(I-131)（金標準/治癒性）：",
        "  - 單次注射，治癒率>95%",
        "  - 無需麻醉",
        "  - 需專門設施和隔離期",
        "",
        "3. 手術切除（治癒性）：",
        "  - 雙側或單側甲狀腺切除",
        "  - 術前需用藥物穩定",
        "  - 風險：低血鈣、喉返神經損傷",
        "",
        "4. 飲食治療：",
        "  - Hill's y/d（極低碘飲食）",
        "  - 必須是唯一飲食來源",
        "  - 適合無法給藥或不適合其他治療者"
      ]
    },
    prognosis: "治療後預後良好。放射碘治療治癒率>95%。藥物控制需終身。主要影響預後的因素：併發CKD、心臟病、高血壓。治療後需評估潛在腎功能。",
    pearls: [
      "治療前務必評估腎功能 - 甲亢可掩蓋潛在CKD",
      "治療後1個月內重測腎功能",
      "Methimazole副作用：嘔吐、厭食、面部搔抓、骨髓抑制、肝毒性",
      "甲狀腺閃爍掃描是評估是否適合手術的最佳方法",
      "部分「隱匿性甲亢」T4正常但有臨床症狀",
      "放射碘是最佳長期治療選擇（若可行）"
    ],
    monitoring: [
      "藥物治療：T4、腎功能、CBC（前3個月每2-4週，穩定後每3-6個月）",
      "血壓",
      "體重",
      "心臟狀況",
      "藥物副作用"
    ],
    reference: "Cote E: Clinical Veterinary Advisor: Dogs and Cats, 2nd Ed. Mosby, 2011"
  },

  // ==================== 甲狀腺功能低下（犬） ====================

  "hypothyroidism-dog": {
    zh: "甲狀腺功能低下（犬）",
    en: "Hypothyroidism (Canine)",
    definition: "因甲狀腺激素（T3、T4）產生不足導致的低代謝狀態，是犬最常見的內分泌疾病之一。",
    synonyms: ["Canine Hypothyroidism", "犬甲低", "甲狀腺功能減退"],
    epidemiology: {
      species: "犬常見，貓罕見（通常為醫源性或放射碘後）",
      age: "中年犬（4-10歲，平均7歲）",
      sex: "無明顯性別傾向，絕育動物可能風險略高",
      riskFactors: ["品種傾向（Golden Retriever、Doberman Pinscher、Irish Setter、Miniature Schnauzer、Dachshund、Cocker Spaniel、Airedale Terrier）", "中大型犬較常見", "絕育"]
    },
    clinicalPresentation: {
      history: ["嗜睡、活動力下降", "體重增加（儘管食慾正常或下降）", "畏寒", "皮膚問題（脫毛、皮膚感染）", "繁殖障礙"],
      physicalExam: ["肥胖", "雙側對稱性脫毛（軀幹、尾巴「鼠尾」）", "皮膚增厚、色素沉著", "皮脂溢出", "反覆皮膚感染", "心搏過緩", "「悲傷面容」（黏液水腫）", "神經肌肉症狀（罕見：虛弱、跛行、面部麻痺）"]
    },
    pathophysiology: "95%為原發性（甲狀腺本身問題）：50%淋巴細胞性甲狀腺炎（免疫介導），50%特發性甲狀腺萎縮。繼發性（腦下垂體TSH不足）和三發性（下視丘TRH不足）罕見。甲狀腺激素減少 → 代謝率下降 → 體重增加、嗜睡、毛髮生長週期異常。",
    diagnosis: {
      overview: "結合臨床症狀、低T4和TSH升高診斷。單獨T4低不能確診（非甲狀腺病態綜合症）",
      differentials: ["非甲狀腺病態綜合症(NTIS/Euthyroid Sick Syndrome)", "庫欣症", "藥物影響（類固醇、磺胺藥、Phenobarbital）", "其他代謝疾病"],
      initialDB: [
        "總T4（Total T4）：低；但正常不能排除、低不能確診",
        "游離T4（Free T4 by ED）：更準確",
        "TSH（犬TSH）：原發性甲低時升高",
        "CBC、生化全套（可能見高膽固醇、輕度貧血）"
      ],
      advanced: [
        "甲狀腺球蛋白自身抗體(TgAA)：陽性提示淋巴細胞性甲狀腺炎",
        "T3抑制試驗",
        "TSH刺激試驗（黃金標準但TSH難取得）",
        "甲狀腺閃爍掃描"
      ]
    },
    treatment: {
      overview: "終身甲狀腺激素補充治療",
      acute: [
        "黏液水腫昏迷（罕見急症）：",
        "  - Levothyroxine IV（若可取得）或高劑量口服",
        "  - 支持治療（保溫、輸液、通氣支持）",
        "  - 類固醇（若懷疑腎上腺功能不全）"
      ],
      chronic: [
        "Levothyroxine (L-T4)：",
        "  - 起始劑量：0.02 mg/kg 或 0.5 mg/m² PO q12h",
        "  - 最大單次劑量：0.8 mg",
        "  - 與食物間隔給藥（空腹吸收較好）",
        "  - 品牌藥物較佳（生物利用度穩定）",
        "",
        "劑量調整：",
        "  - 4-6週後根據T4濃度和臨床反應調整",
        "  - 目標：給藥後4-6小時T4在正常上限或略高"
      ]
    },
    prognosis: "適當補充甲狀腺激素預後極佳。臨床症狀改善時程：活動力1-2週，皮膚3-6個月。需終身治療。",
    pearls: [
      "不要僅憑低T4診斷 - NTIS在病犬很常見",
      "結合fT4和TSH可提高診斷準確性",
      "高膽固醇血症是甲低的常見發現",
      "某些藥物（Phenobarbital、類固醇、磺胺藥）可降低T4",
      "治療反應是最佳確診方式之一",
      "每6-12個月監測一次足夠（穩定後）"
    ],
    monitoring: [
      "治療後4-6週測T4（給藥後4-6小時）",
      "穩定後每6-12個月監測",
      "臨床症狀改善",
      "體重",
      "皮膚狀況"
    ],
    reference: "Cote E: Clinical Veterinary Advisor: Dogs and Cats, 2nd Ed. Mosby, 2011"
  },

  // ==================== 腎上腺皮質功能亢進（庫欣症） ====================

  "hyperadrenocorticism": {
    zh: "腎上腺皮質功能亢進",
    en: "Hyperadrenocorticism (Cushing's Syndrome)",
    definition: "因皮質醇長期過量導致的多系統代謝異常。分為腦下垂體依賴型(PDH)、腎上腺腫瘤型(ADH)和醫源性。",
    synonyms: ["Cushing's Syndrome", "庫欣症", "Cushing's Disease", "皮質醇過多症"],
    epidemiology: {
      species: "犬常見，貓罕見",
      age: "中老年犬（平均9-12歲）",
      sex: "無明顯性別傾向",
      riskFactors: ["品種傾向（Poodle、Dachshund、Beagle、Boston Terrier、Boxer、German Shepherd）", "小型犬PDH較多，大型犬ADH較多", "長期類固醇使用（醫源性）"]
    },
    clinicalPresentation: {
      history: ["多飲多尿（最常見，>90%）", "多食", "腹部膨大（「大肚腩」）", "喘氣", "脫毛", "皮膚變薄", "肌肉無力", "嗜睡"],
      physicalExam: ["腹部膨大（肝腫大+肌肉萎縮+脂肪重分布）", "皮膚變薄、脫毛（雙側對稱）", "皮膚鈣質沉著", "粉刺", "皮膚易瘀青", "肌肉萎縮", "喘氣"]
    },
    pathophysiology: "PDH（80-85%）：腦下垂體腫瘤過度分泌ACTH → 雙側腎上腺增生 → 皮質醇過量。ADH（15-20%）：腎上腺腫瘤（腺瘤或癌）自主分泌皮質醇。皮質醇過量 → 糖質新生、蛋白質分解、脂肪重分布、免疫抑制。",
    diagnosis: {
      overview: "三步驟：確認皮質醇過量 → 區分PDH vs ADH → 評估併發症",
      differentials: ["糖尿病", "慢性腎病", "肝病", "甲狀腺功能低下", "醫源性類固醇效應"],
      initialDB: [
        "篩檢試驗（需2種以上）：",
        "  - 尿液皮質醇/肌酸酐比值(UCCR)：高敏感度",
        "  - 低劑量Dexamethasone抑制試驗(LDDS)：首選",
        "  - ACTH刺激試驗：醫源性除外",
        "CBC、生化（典型：ALP↑、ALT↑、高血糖、高膽固醇）",
        "尿液分析（低比重、可能UTI）"
      ],
      advanced: [
        "區分試驗：",
        "  - 高劑量Dexamethasone抑制試驗(HDDS)",
        "  - 內源性ACTH濃度：PDH正常至高，ADH低",
        "影像學：",
        "  - 腹部超音波（腎上腺大小和對稱性）",
        "  - 腹部CT/MRI（腎上腺、腦下垂體）",
        "血壓測量"
      ]
    },
    treatment: {
      overview: "PDH以藥物為主，ADH考慮手術切除",
      acute: [
        "嚴重併發症處理：",
        "  - 血栓栓塞：抗凝治療",
        "  - 糖尿病：胰島素治療",
        "  - 嚴重感染：積極抗生素治療"
      ],
      chronic: [
        "PDH藥物治療：",
        "  - Trilostane（首選）：起始2-4 mg/kg PO q24h（餐後）",
        "    * 4週後ACTH刺激試驗調整劑量",
        "    * 若控制不佳可改q12h",
        "  - Mitotane (o,p'-DDD)：誘導25-50 mg/kg/day分次，維持25-50 mg/kg/week",
        "    * 副作用較多，需密切監測",
        "",
        "ADH治療：",
        "  - 腎上腺切除術（首選，若可行）",
        "  - 術前/術後需類固醇補充",
        "  - 無法手術時：藥物控制同PDH",
        "",
        "腦下垂體巨腺瘤：",
        "  - 放射治療",
        "  - 手術切除（少數中心）"
      ]
    },
    prognosis: "PDH藥物控制下中位生存期約2-2.5年。ADH腺瘤手術切除後預後良好；癌預後差。併發症（血栓、感染、糖尿病）影響預後。",
    pearls: [
      "PU/PD是最敏感的臨床指標",
      "ALP升高（肝臟同工酶誘導）是典型發現",
      "UCCR陰性基本可排除庫欣症",
      "Trilostane需要終身用藥和定期監測",
      "腎上腺危象是Trilostane罕見但嚴重的副作用",
      "貓庫欣症罕見且常併發糖尿病",
      "約10%的犬ADH為惡性"
    ],
    monitoring: [
      "Trilostane：ACTH刺激試驗（起始後10天、4週、3個月，穩定後每3-6個月）",
      "臨床症狀改善",
      "電解質（尤其鈉/鉀）",
      "血壓",
      "併發症監測"
    ],
    reference: "Cote E: Clinical Veterinary Advisor: Dogs and Cats, 2nd Ed. Mosby, 2011"
  },

  // ==================== 腎上腺皮質功能低下（愛迪生症） ====================

  "hypoadrenocorticism": {
    zh: "腎上腺皮質功能低下",
    en: "Hypoadrenocorticism (Addison's Disease)",
    definition: "因腎上腺皮質激素（糖皮質激素和/或礦物質皮質激素）產生不足導致的代謝紊亂。可表現為急性危象或慢性非特異性症狀。",
    synonyms: ["Addison's Disease", "愛迪生症", "Adrenocortical Insufficiency", "腎上腺功能不全"],
    epidemiology: {
      species: "犬較常見，貓罕見",
      age: "年輕至中年犬（平均4-5歲，範圍很廣）",
      sex: "母犬較多（約70%）",
      riskFactors: ["品種傾向（Standard Poodle、Portuguese Water Dog、Bearded Collie、West Highland White Terrier、Great Dane、Soft Coated Wheaten Terrier）", "已知遺傳基礎的品種", "自體免疫疾病傾向"]
    },
    clinicalPresentation: {
      history: ["間歇性嘔吐、腹瀉", "嗜睡、虛弱", "食慾下降", "體重減輕", "症狀時好時壞（「住院就好」）", "應激後症狀加重"],
      physicalExam: [
        "典型型（醛固酮+皮質醇不足）：",
        "  - 脫水、低血壓、心搏過緩",
        "  - 虛弱、嗜睡",
        "  - 腹痛",
        "非典型型（僅皮質醇不足）：",
        "  - 較不特異，電解質正常",
        "  - 虛弱、嘔吐、體重減輕"
      ]
    },
    pathophysiology: "原發性（95%）：免疫介導的腎上腺皮質破壞最常見。繼發性：腦下垂體ACTH分泌不足（罕見）或長期類固醇使用後突然停藥。醛固酮缺乏 → 鈉流失、鉀滯留 → 低血鈉、高血鉀 → 心律不整、低血壓。皮質醇缺乏 → 無法應對應激 → 代謝異常。",
    diagnosis: {
      overview: "高度懷疑時進行ACTH刺激試驗確診。經典電解質改變高度提示",
      differentials: ["急性腎衰竭", "尿路阻塞", "腸胃道疾病", "敗血症", "心臟疾病", "藥物毒性"],
      initialDB: [
        "電解質：低Na、高K（Na:K比值<27高度懷疑）",
        "BUN/Creatinine：可能升高（腎前性）",
        "血糖：可能低",
        "CBC：可能無應激白血球圖譜、淋巴球和嗜酸性球增多",
        "ECG：高鉀相關變化（T波高尖、P波消失、QRS增寬）"
      ],
      advanced: [
        "ACTH刺激試驗（確診）：",
        "  - 給予Cosyntropin 5 μg/kg IV",
        "  - 1小時後測皮質醇",
        "  - 基線和刺激後皮質醇均<2 μg/dL 確診",
        "基線皮質醇：<2 μg/dL 高度懷疑",
        "內源性ACTH（區分原發vs繼發）",
        "腹部超音波（腎上腺萎縮）"
      ]
    },
    treatment: {
      overview: "急性危象需緊急處理，慢性需終身激素補充",
      acute: [
        "愛迪生危象（緊急！）：",
        "  - 積極輸液：0.9% NaCl 60-90 mL/kg/h 第一小時",
        "  - 監測並糾正高血鉀（輸液通常足夠）",
        "  - 嚴重高血鉀：",
        "    * Calcium gluconate 10%: 0.5-1.5 mL/kg IV slow（心臟保護）",
        "    * Regular insulin: 0.25-0.5 U/kg + Dextrose",
        "  - 糖皮質激素：",
        "    * Dexamethasone SP: 0.5-2 mg/kg IV（不干擾ACTH刺激試驗）",
        "    * 或 Hydrocortisone: 0.5 mg/kg/h CRI",
        "  - 低血糖處理：Dextrose補充"
      ],
      chronic: [
        "礦物質皮質激素替代：",
        "  - Fludrocortisone (Florinef): 0.01-0.02 mg/kg PO q12-24h",
        "    * 需頻繁調整劑量",
        "  - DOCP (Percorten-V/Zycortal): 2.2 mg/kg IM/SC q25-28天",
        "    * 較穩定，長期較方便",
        "",
        "糖皮質激素替代：",
        "  - Prednisone: 0.1-0.2 mg/kg PO q24h",
        "  - 使用DOCP時通常需要",
        "  - 應激時需增加劑量",
        "",
        "非典型型：僅需Prednisone，但可能進展為典型型"
      ]
    },
    prognosis: "一旦確診並適當補充激素，預後極佳。中位生存期與正常犬相當。需終身治療和監測。",
    pearls: [
      "愛迪生是「偉大的模仿者」- 症狀非特異",
      "「住院就好」是重要線索",
      "Na:K <27 高度懷疑，但<25%病例電解質正常（非典型型）",
      "基線皮質醇>2 μg/dL 基本可排除",
      "應激時需增加Prednisone劑量（手術前2-3倍）",
      "DOCP比Fludrocortisone給藥方便，長期成本可能較低"
    ],
    monitoring: [
      "電解質（起始每週，穩定後每3-6個月）",
      "臨床症狀",
      "體重",
      "應激事件時需調整用藥"
    ],
    reference: "Cote E: Clinical Veterinary Advisor: Dogs and Cats, 2nd Ed. Mosby, 2011"
  },

  // ==================== 嗜鉻細胞瘤 ====================

  "pheochromocytoma": {
    zh: "嗜鉻細胞瘤",
    en: "Pheochromocytoma",
    definition: "起源於腎上腺髓質嗜鉻細胞的腫瘤，可分泌兒茶酚胺（腎上腺素、去甲腎上腺素）導致陣發性或持續性高血壓及相關症狀。",
    synonyms: ["Pheo", "嗜鉻細胞瘤", "Adrenal Medullary Tumor", "Chromaffin Cell Tumor"],
    epidemiology: {
      species: "犬為主，貓罕見",
      age: "老年犬（平均10-11歲）",
      sex: "無明顯性別傾向",
      riskFactors: ["無已知品種傾向", "約50%為惡性", "可能與功能性腎上腺皮質腫瘤並存"]
    },
    clinicalPresentation: {
      history: ["陣發性虛弱或倒地", "不安、焦躁", "喘氣", "嘔吐", "心悸感", "運動不耐", "體重減輕", "症狀可間歇性發作"],
      physicalExam: ["高血壓（可能陣發性）", "心搏過速或心律不整", "眼底病變（視網膜出血、脫離）", "腹部可觸及腫塊（若腫瘤夠大）", "後肢水腫（若侵犯後腔靜脈）", "出血傾向"]
    },
    pathophysiology: "腫瘤自主分泌兒茶酚胺 → 陣發性或持續性血管收縮 → 高血壓 → 靶器官損傷（心臟、眼、腎、腦）。腫瘤可局部侵犯後腔靜脈、腎靜脈。約50%有遠處轉移（肝、肺、淋巴結）。",
    diagnosis: {
      overview: "需高度懷疑。影像學發現腎上腺腫塊結合高血壓提示診斷",
      differentials: ["腎上腺皮質腫瘤", "腎上腺轉移瘤", "其他原因高血壓", "心臟疾病"],
      initialDB: [
        "血壓測量（重複測量，可能陣發性升高）",
        "眼底檢查",
        "腹部超音波（腎上腺腫塊）",
        "CBC、生化（可能高血糖、低血鉀）"
      ],
      advanced: [
        "尿液兒茶酚胺或代謝產物（metanephrines）：敏感度有限",
        "腹部CT/MRI：評估腫瘤範圍和血管侵犯",
        "超音波評估後腔靜脈侵犯",
        "胸腔X光/CT：轉移評估"
      ]
    },
    treatment: {
      overview: "手術切除是首選治療。需術前穩定血壓",
      acute: [
        "高血壓危象：",
        "  - Phentolamine: 0.02-0.1 mg/kg IV bolus",
        "  - Nitroprusside: 1-5 μg/kg/min CRI",
        "心律不整：",
        "  - Beta-blocker（必須在Alpha-blocker之後使用）"
      ],
      chronic: [
        "手術前準備（10-14天）：",
        "  - Phenoxybenzamine (Alpha-blocker): 0.25-1.5 mg/kg PO q12h",
        "  - 目標：血壓正常化、減少手術風險",
        "  - 輸液擴張血容量",
        "",
        "手術切除：",
        "  - 腎上腺切除術（有經驗的外科醫師）",
        "  - 術中準備處理血壓波動",
        "  - 可能需要後腔靜脈腫瘤栓子取出",
        "",
        "無法手術時：",
        "  - Phenoxybenzamine長期控制",
        "  - 化療效果有限"
      ]
    },
    prognosis: "完全切除且無轉移預後可良好（中位生存期>3年）。有血管侵犯或轉移預後較差（中位生存期約1年）。術中死亡風險存在。",
    pearls: [
      "陣發性症狀是重要線索",
      "術前Alpha-blocker準備極為重要",
      "Beta-blocker必須在Alpha-blocker之後使用（避免無對抗的Alpha效應）",
      "術中血壓可能劇烈波動",
      "約50%為惡性，但惡性度的影像學預測困難",
      "可與功能性皮質腫瘤並存"
    ],
    monitoring: [
      "術後血壓",
      "影像學追蹤（復發/轉移）",
      "臨床症狀"
    ],
    reference: "Cote E: Clinical Veterinary Advisor: Dogs and Cats, 2nd Ed. Mosby, 2011"
  },

  // ==================== 副甲狀腺功能亢進 ====================

  "hyperparathyroidism": {
    zh: "副甲狀腺功能亢進",
    en: "Hyperparathyroidism",
    definition: "副甲狀腺激素(PTH)過度分泌導致高鈣血症的疾病。分為原發性（副甲狀腺本身問題）和繼發性（對低鈣或高磷的反應）。",
    synonyms: ["HPT", "副甲狀腺功能亢進症", "Primary Hyperparathyroidism", "PHPTH"],
    epidemiology: {
      species: "犬較常見，貓少見",
      age: "老年犬（平均10-11歲）",
      sex: "無明顯性別傾向",
      riskFactors: ["品種傾向（Keeshond有遺傳傾向）", "原發性：副甲狀腺腺瘤最常見", "繼發性：CKD、營養性（鈣不足）"]
    },
    clinicalPresentation: {
      history: ["多飲多尿（高鈣血症導致）", "虛弱、嗜睡", "食慾下降", "便秘", "嘔吐", "可能無症狀（偶然發現高鈣）"],
      physicalExam: ["常無特異性發現", "肌肉無力", "脫水", "可能觸及頸部腫塊（若腺瘤夠大）", "心律不整（嚴重高鈣）"]
    },
    pathophysiology: "原發性：副甲狀腺腺瘤（單發最常見）或增生自主分泌PTH → PTH促進骨�ite吸收、腎臟鈣重吸收、腸道鈣吸收 → 高鈣血症。繼發性：CKD → 磷滯留 → 低鈣 → PTH代償性升高。高鈣血症影響腎臟、神經肌肉、心臟功能。",
    diagnosis: {
      overview: "高鈣血症 + PTH不適當升高或正常高值 = 原發性HPT",
      differentials: ["惡性腫瘤相關高鈣血症(HHM)", "維生素D中毒", "肉芽腫性疾病", "腎衰竭（繼發性HPT）", "Addison's disease"],
      initialDB: [
        "離子鈣（首選）或總鈣",
        "磷：原發性HPT通常正常低值或低",
        "PTH（同時測鈣）：原發性升高或不適當正常",
        "PTHrP：腫瘤相關高鈣時升高",
        "腎功能（BUN、Creatinine）",
        "尿液分析"
      ],
      advanced: [
        "頸部超音波：副甲狀腺腫塊",
        "99mTc-sestamibi閃爍掃描：定位病灶",
        "腹部超音波：腎結石、腎鈣化"
      ]
    },
    treatment: {
      overview: "原發性HPT首選手術切除病變腺體",
      acute: [
        "嚴重高鈣血症（>16 mg/dL或有症狀）：",
        "  - 0.9% NaCl積極輸液：促進鈣排泄",
        "  - Furosemide: 2-4 mg/kg IV q8-12h（輸液充足後）",
        "  - Calcitonin: 4-8 IU/kg SC q8-12h（快速但短效）",
        "  - Bisphosphonates: Pamidronate 1-2 mg/kg IV over 2-4h",
        "  - Glucocorticoids: 對淋巴瘤等有效，對原發性HPT無效"
      ],
      chronic: [
        "手術切除：",
        "  - 術前影像定位病灶",
        "  - 副甲狀腺腺瘤切除",
        "  - 術後監測低鈣血症",
        "",
        "超音波引導經皮熱消融/乙醇注射：",
        "  - 非手術替代選項",
        "  - 較少侵入性",
        "",
        "術後管理：",
        "  - 監測血鈣（術後24-72小時最低點）",
        "  - 低鈣血症補充：",
        "    * 輕度：口服鈣補充",
        "    * 嚴重：Calcium gluconate 10%: 0.5-1.5 mL/kg IV slow",
        "  - Calcitriol: 20-30 ng/kg/day（促進鈣吸收）"
      ]
    },
    prognosis: "手術成功切除預後極佳。約2-4%可能復發或為癌。術後低鈣血症通常是暫時性的。",
    pearls: [
      "高鈣血症鑑別：腫瘤最常見，原發性HPT次之",
      "PTH正常但高鈣 = 不適當正常 = 支持原發性HPT",
      "惡性腫瘤高鈣通常PTH低、PTHrP高",
      "術後低鈣血症（「飢餓骨症候群」）需密切監測",
      "Keeshond有遺傳性原發性HPT"
    ],
    monitoring: [
      "術後血鈣（每6-12小時共48-72小時）",
      "穩定後每週至每月",
      "長期每6-12個月追蹤"
    ],
    reference: "Cote E: Clinical Veterinary Advisor: Dogs and Cats, 2nd Ed. Mosby, 2011"
  },

  // ==================== 副甲狀腺功能低下 ====================

  "hypoparathyroidism": {
    zh: "副甲狀腺功能低下",
    en: "Hypoparathyroidism",
    definition: "副甲狀腺激素(PTH)分泌不足或作用缺陷導致低鈣血症的疾病。可為原發性（免疫介導、醫源性）或罕見的先天性。",
    synonyms: ["Hypopara", "副甲狀腺功能減退", "PTH Deficiency"],
    epidemiology: {
      species: "犬為主，貓少見",
      age: "中年犬（平均4-8歲）",
      sex: "無明顯性別傾向",
      riskFactors: ["甲狀腺/副甲狀腺手術後（醫源性，最常見）", "品種傾向（原發性免疫介導型：Toy Poodle、Miniature Schnauzer、Labrador、German Shepherd）"]
    },
    clinicalPresentation: {
      history: ["肌肉顫抖、抽搐", "面部搔抓", "步態僵硬", "焦躁不安", "喘氣", "癲癇發作", "嗜睡", "症狀可間歇性發作"],
      physicalExam: ["肌肉強直或顫抖", "肌肉痙攣（尤其面部）", "發燒（肌肉活動）", "心搏過緩", "第三眼瞼突出", "白內障（慢性低鈣）"]
    },
    pathophysiology: "原發性：免疫介導的副甲狀腺破壞。醫源性：甲狀腺手術時意外損傷或切除。PTH缺乏 → 骨鈣釋放減少、腎臟鈣重吸收減少、腸道鈣吸收減少 → 低鈣血症 → 神經肌肉興奮性增加 → 強直、癲癇。",
    diagnosis: {
      overview: "低鈣血症 + PTH低或不適當正常 = 副甲狀腺功能低下",
      differentials: ["腎衰竭（低鈣合併高磷）", "低白蛋白血症（假性低鈣）", "膿毒症", "胰臟炎", "乙二醇中毒", "產後低鈣（哺乳）", "EDTA抗凝血管假性低鈣"],
      initialDB: [
        "離子鈣（首選）：降低",
        "總鈣和白蛋白：校正後總鈣低",
        "磷：升高（腎功能正常時）",
        "PTH（與鈣同時測）：低或不適當正常",
        "腎功能（BUN、Creatinine）：正常排除腎性原因",
        "ECG：QT延長"
      ],
      advanced: [
        "頸部超音波：評估副甲狀腺",
        "鎂濃度：低鎂可加重低鈣症狀",
        "維生素D代謝物"
      ]
    },
    treatment: {
      overview: "急性低鈣血症緊急處理，慢性需終身鈣和維生素D補充",
      acute: [
        "低鈣血症急症（癲癇、強直）：",
        "  - 10% Calcium gluconate: 0.5-1.5 mL/kg IV slow (over 10-20min)",
        "  - 持續ECG監測（心搏過緩立即停止）",
        "  - 避免皮下注射（組織壞死）",
        "  - 可重複給予或CRI: 2.5-3.75 mg/kg/h elemental Ca",
        "控制癲癇：",
        "  - Diazepam（若仍在發作）",
        "  - 鈣補充通常可控制"
      ],
      chronic: [
        "口服鈣補充：",
        "  - Calcium carbonate: 25-50 mg/kg/day elemental Ca 分次給予",
        "  - 或 Calcium gluconate/lactate",
        "",
        "維生素D補充（必需）：",
        "  - Calcitriol（首選）: 20-30 ng/kg/day 起始",
        "    * 作用快、半衰期短，調整方便",
        "  - 或 Dihydrotachysterol: 0.02-0.03 mg/kg/day",
        "  - 或 Ergocalciferol（作用慢，不推薦起始）",
        "",
        "劑量調整：",
        "  - 目標鈣：正常低限（8-9.5 mg/dL）",
        "  - 避免過度補充導致高鈣血症和腎鈣化"
      ]
    },
    prognosis: "適當補充終身預後良好。需終身治療和監測。初期劑量調整期風險較高。",
    pearls: [
      "醫源性是最常見原因 - 甲狀腺手術後需密切監測",
      "離子鈣比總鈣更準確",
      "Calcitriol因半衰期短是首選維生素D",
      "過度補充導致的高鈣血症和腎鈣化需警惕",
      "目標維持鈣在正常低限，不需要正常化",
      "急性時避免碳酸鈣（吸收不夠快）"
    ],
    monitoring: [
      "初期：血鈣每週測量直到穩定",
      "穩定後：每2-4個月",
      "腎功能和尿比重（腎鈣化風險）"
    ],
    reference: "Cote E: Clinical Veterinary Advisor: Dogs and Cats, 2nd Ed. Mosby, 2011"
  },

  // ==================== 生長激素過多症（肢端肥大症） ====================

  "hypersomatotropism": {
    zh: "生長激素過多症",
    en: "Hypersomatotropism (Acromegaly)",
    definition: "因生長激素(GH)過度分泌導致的代謝和形態學改變。貓主要由腦下垂體腫瘤引起，犬主要由黃體素相關引起。",
    synonyms: ["Acromegaly", "肢端肥大症", "GH Excess", "巨人症（生長板關閉前）"],
    epidemiology: {
      species: "貓較常見（腦下垂體腫瘤），犬少見（黃體素相關）",
      age: "貓：老年（平均10-11歲）；犬：中年母犬（動情期相關）",
      sex: "貓：公貓較多；犬：未絕育母犬",
      riskFactors: ["貓：無已知品種傾向", "犬：未絕育母犬、外源性黃體素使用"]
    },
    clinicalPresentation: {
      history: ["難以控制的糖尿病（胰島素阻抗明顯）", "體型/體重增加（儘管可能多食）", "下頜骨突出、面部變寬", "呼吸困難或打鼾（軟組織增生）", "多飲多尿"],
      physicalExam: ["下頜骨突出（prognathia inferior）", "頭部和面部寬大", "爪子增大（貓）", "體重增加", "器官腫大（心臟、肝臟、腎臟）", "口腔軟組織增生", "心雜音（心肌病變）"]
    },
    pathophysiology: "貓：腦下垂體GH分泌腫瘤（通常為腺瘤）。犬：黃體素刺激乳腺產生GH。GH過量 → IGF-1升高 → 軟骨、骨骼、軟組織增生 + 胰島素阻抗 → 糖尿病。心臟也受影響導致肥厚性心肌病。",
    diagnosis: {
      overview: "難控制的糖尿病貓應考慮此診斷。IGF-1升高結合臨床特徵",
      differentials: ["單純糖尿病", "甲狀腺功能亢進", "心臟病其他原因", "腎病"],
      initialDB: [
        "IGF-1（血清）：升高強烈支持診斷（>1000 ng/mL高度提示）",
        "血糖和果糖胺：糖尿病證據",
        "CBC、生化全套",
        "心臟超聲：評估心肌病變"
      ],
      advanced: [
        "頭部CT/MRI：腦下垂體腫瘤",
        "GH濃度（不常用，波動大）",
        "腹部超音波：器官腫大"
      ]
    },
    treatment: {
      overview: "貓：放射治療或藥物控制；犬：絕育或停止黃體素",
      acute: [
        "糖尿病控制：",
        "  - 高劑量胰島素（可能需>15 U/貓 q12h）",
        "  - 頻繁監測血糖"
      ],
      chronic: [
        "貓：",
        "  - 放射治療：可控制腫瘤、改善胰島素敏感性",
        "  - 腦下垂體切除術：少數中心",
        "  - Pasireotide（生長抑素類似物）：部分病例有效",
        "  - 保守治療：高劑量胰島素控制糖尿病",
        "",
        "犬：",
        "  - 絕育（首選）：移除黃體素來源",
        "  - 停止外源性黃體素",
        "  - GH和IGF-1應在數週內正常化"
      ]
    },
    prognosis: "犬：絕育後通常可治癒。貓：放射治療後中位生存期約2年；保守治療約1年。心臟病和糖尿病控制影響預後。",
    pearls: [
      "難以控制的糖尿病貓應檢測IGF-1",
      "胰島素需求>1.5-2 U/kg q12h 提示胰島素阻抗",
      "面部和身體變化可能subtle，比較舊照片有幫助",
      "約25%肢端肥大症貓IGF-1可正常（需CT/MRI）",
      "犬肢端肥大症絕育可治癒",
      "治療後糖尿病可能緩解"
    ],
    monitoring: [
      "血糖和糖尿病控制",
      "IGF-1（治療後）",
      "心臟超聲",
      "MRI追蹤腫瘤大小（放療後）"
    ],
    reference: "Cote E: Clinical Veterinary Advisor: Dogs and Cats, 2nd Ed. Mosby, 2011"
  },

  // ==================== 生長激素缺乏 ====================

  "growth-hormone-deficiency": {
    zh: "生長激素缺乏",
    en: "Growth Hormone Deficiency",
    definition: "生長激素(GH)分泌不足導致的發育遲緩或成年動物的皮膚和代謝異常。可為先天性或後天性。",
    synonyms: ["GH Deficiency", "Pituitary Dwarfism", "腦下垂體侏儒症", "生長激素不足"],
    epidemiology: {
      species: "犬為主（先天性），貓罕見",
      age: "先天性：幼犬（2-3月齡開始明顯）；後天性：成年",
      sex: "無明顯性別傾向",
      riskFactors: ["品種傾向（先天性）：German Shepherd（常見）、Karelian Bear Dog、Saarloos Wolfdog、Czechoslovakian Wolfdog", "遺傳性（常染色體隱性）"]
    },
    clinicalPresentation: {
      history: ["幼年：生長遲緩、同窩最小", "保留幼年被毛、不換毛", "智力和行為正常", "成年：雙側對稱性脫毛", "嗜睡"],
      physicalExam: ["身材矮小（幼年發病）", "保留幼年被毛（柔軟、綿毛狀）", "雙側對稱性脫毛（軀幹）", "皮膚色素沉著過度", "睪丸發育不全（公犬）", "可能保留乳齒"]
    },
    pathophysiology: "先天性：腦下垂體發育異常（囊腫、發育不全）→ GH和其他腦下垂體激素缺乏。German Shepherd多為腦下垂體囊腫。GH缺乏 → IGF-1減少 → 骨骼發育不全、毛囊週期異常、皮膚變薄。常合併甲狀腺功能低下（繼發性）。",
    diagnosis: {
      overview: "幼年型侏儒症臨床特徵明顯；成年型需功能性檢測",
      differentials: ["先天性甲狀腺功能低下", "先天性腎上腺皮質功能低下", "肝門脈分流", "營養不良", "寄生蟲感染", "其他侏儒原因"],
      initialDB: [
        "IGF-1：降低（篩檢）",
        "CBC、生化全套",
        "甲狀腺功能：常繼發性低下",
        "ACTH刺激試驗：評估腎上腺功能"
      ],
      advanced: [
        "GH刺激試驗（確診）：",
        "  - Clonidine、GHRH或Xylazine刺激",
        "  - GH反應低下確診",
        "頭部MRI/CT：腦下垂體囊腫或發育不全",
        "遺傳檢測（某些品種）"
      ]
    },
    treatment: {
      overview: "GH補充治療效果有限且取得困難；支持治療為主",
      acute: [
        "無急性治療需求"
      ],
      chronic: [
        "生長激素補充（若可取得）：",
        "  - Porcine GH: 0.1 IU/kg SC 3次/週，共4-6週",
        "  - 效果不一，可能導致糖尿病",
        "  - 來源困難",
        "",
        "替代療法：",
        "  - Progestins（刺激乳腺GH）：",
        "    * Medroxyprogesterone: 2.5-5 mg/kg SC q3週",
        "    * 風險：糖尿病、子宮蓄膿、乳腺腫瘤",
        "",
        "甲狀腺激素補充（若繼發性甲低）：",
        "  - Levothyroxine: 標準劑量",
        "",
        "皮膚護理：保濕、預防感染"
      ]
    },
    prognosis: "壽命通常縮短（先天性，約3-5歲）。繼發感染和代謝問題常見死因。治療可改善皮膚症狀但難以改變預後。",
    pearls: [
      "German Shepherd腦下垂體侏儒症有遺傳檢測可用",
      "保留幼年毛是特徵性表現",
      "常合併其他腦下垂體激素缺乏",
      "GH補充風險大於益處（糖尿病風險）",
      "繁殖計畫中應排除帶因者"
    ],
    monitoring: [
      "皮膚狀況",
      "甲狀腺功能",
      "血糖（若使用progestins或GH）",
      "整體生長和發育"
    ],
    reference: "Cote E: Clinical Veterinary Advisor: Dogs and Cats, 2nd Ed. Mosby, 2011"
  },

  // ==================== 尿崩症 ====================

  "diabetes-insipidus": {
    zh: "尿崩症",
    en: "Diabetes Insipidus",
    definition: "因抗利尿激素(ADH/AVP)缺乏（中樞性）或腎臟對ADH反應不足（腎源性）導致的大量稀釋尿液和繼發性多飲。",
    synonyms: ["DI", "水尿症", "Central DI", "Nephrogenic DI", "CDI", "NDI"],
    epidemiology: {
      species: "犬貓皆可發生，但罕見",
      age: "任何年齡",
      sex: "無明顯性別傾向",
      riskFactors: ["頭部創傷", "腦下垂體腫瘤", "腦下垂體手術後", "先天性（罕見）", "腎臟疾病（腎源性）", "藥物（鋰、某些利尿劑）"]
    },
    clinicalPresentation: {
      history: ["極度多飲（可>100 mL/kg/day）", "極度多尿", "尿稀如水", "尿失禁（膀胱容量不足）", "可能有神經症狀（若有腦部病變）"],
      physicalExam: ["通常無特異性發現", "脫水（若無法自由飲水）", "神經學異常（腦部病變時）"]
    },
    pathophysiology: "中樞性(CDI)：下視丘-腦下垂體後葉損傷 → ADH分泌不足 → 腎臟集合管水重吸收減少 → 大量稀釋尿液。腎源性(NDI)：ADH正常但腎臟V2受體或aquaporin-2異常 → 對ADH反應不足。原發性多飲：行為性過度飲水導致的繼發性尿液稀釋。",
    diagnosis: {
      overview: "排除其他PU/PD原因後，水剝奪試驗和DDAVP反應試驗鑑別",
      differentials: ["糖尿病", "庫欣症", "腎衰竭", "肝衰竭", "高鈣血症", "子宮蓄膿", "甲狀腺功能亢進（貓）", "低鈉血症", "原發性多飲"],
      initialDB: [
        "尿比重：極低（<1.005-1.008）",
        "血清滲透壓：正常或略高",
        "尿液滲透壓：低（<血清滲透壓）",
        "CBC、生化全套、尿液分析：排除其他原因",
        "甲狀腺功能（貓）、腎上腺功能（若懷疑）"
      ],
      advanced: [
        "改良式水剝奪試驗：",
        "  - 在監測下限水直到體重減少3-5%或血清滲透壓>320 mOsm/kg",
        "  - 測尿比重和滲透壓",
        "  - 給予DDAVP後再測（區分CDI vs NDI）",
        "",
        "DDAVP試驗反應：",
        "  - CDI：尿液濃縮改善",
        "  - NDI：無反應",
        "  - 原發性多飲：漸進式改善",
        "",
        "頭部MRI：評估下視丘-腦下垂體區"
      ]
    },
    treatment: {
      overview: "CDI對DDAVP反應良好；NDI治療較困難",
      acute: [
        "嚴重脫水時：",
        "  - 輸液補充（注意不要過快糾正鈉）",
        "  - 自由飲水（若可行）"
      ],
      chronic: [
        "中樞性尿崩症(CDI)：",
        "  - Desmopressin (DDAVP)：",
        "    * 滴眼劑入結膜囊：1-4滴 q12-24h",
        "    * 或口服：0.05-0.2 mg q8-12h",
        "    * 劑量依反應調整",
        "",
        "腎源性尿崩症(NDI)：",
        "  - 治療困難",
        "  - Thiazide利尿劑 + 低鈉飲食：可減少20-50%尿量",
        "  - 確保自由飲水",
        "",
        "原發性多飲：",
        "  - 行為修正",
        "  - 漸進式限水"
      ]
    },
    prognosis: "CDI用DDAVP控制良好，預後佳。腦部腫瘤相關預後取決於腫瘤性質。NDI控制較差但可存活。需終身治療。",
    pearls: [
      "完全性CDI尿比重<1.005；部分性可能略高",
      "水剝奪試驗有風險，需在醫院密切監測",
      "DDAVP滴眼劑比口服便宜且有效",
      "過量DDAVP可能導致水中毒（低鈉血症）",
      "創傷後CDI可能是暫時性的",
      "腎髓質沖刷可延長尿液濃縮恢復時間"
    ],
    monitoring: [
      "飲水量和尿量",
      "尿比重",
      "電解質（尤其鈉）",
      "體重"
    ],
    reference: "Cote E: Clinical Veterinary Advisor: Dogs and Cats, 2nd Ed. Mosby, 2011"
  },

  // ==================== 高醛固酮症（Conn's症） ====================

  "hyperaldosteronism": {
    zh: "高醛固酮症",
    en: "Hyperaldosteronism (Conn's Syndrome)",
    definition: "腎上腺醛固酮過度分泌導致高血壓、低血鉀和代謝性鹼中毒的疾病。分為原發性（腎上腺腫瘤或增生）和繼發性（腎素-血管緊張素系統活化）。",
    synonyms: ["Conn's Syndrome", "Primary Hyperaldosteronism", "原發性高醛固酮症", "PHA"],
    epidemiology: {
      species: "貓較常見（原發性），犬少見",
      age: "貓：老年（平均13歲）",
      sex: "無明顯性別傾向",
      riskFactors: ["年齡", "原發性：腎上腺腫瘤（單側腺瘤或癌）或雙側增生", "繼發性：心衰竭、肝硬化、腎病"]
    },
    clinicalPresentation: {
      history: ["肌肉無力（低血鉀）", "頸部腹側屈曲（貓特徵性）", "嗜睡", "多飲多尿", "失明（高血壓視網膜病變）"],
      physicalExam: ["全身肌肉無力", "頸部腹側屈曲（無法抬頭）", "高血壓", "眼底病變（視網膜出血、脫離、水腫）", "心雜音或奔馬律"]
    },
    pathophysiology: "原發性：腎上腺腫瘤或增生自主分泌醛固酮。繼發性：低血容量或腎灌流減少 → RAAS活化。醛固酮過量 → 腎臟鈉重吸收和鉀排泄增加 → 高血壓 + 低血鉀 → 肌肉無力、心律不整。",
    diagnosis: {
      overview: "低血鉀 + 高血壓 + 腎上腺腫塊高度提示原發性高醛固酮症",
      differentials: ["慢性腎病（貓常見低血鉀原因）", "甲狀腺功能亢進（貓）", "其他腎上腺腫瘤", "藥物性低血鉀", "原發性高血壓"],
      initialDB: [
        "電解質：低血鉀（通常<3.0 mEq/L）、可能高鈉",
        "血壓：升高",
        "CBC、生化全套",
        "甲狀腺功能（排除甲亢）",
        "腎功能"
      ],
      advanced: [
        "醛固酮濃度：升高",
        "醛固酮/腎素比值(ARR)：升高（原發性）",
        "腹部超音波：腎上腺腫塊或增生",
        "腹部CT：更精確評估腎上腺",
        "眼底檢查"
      ]
    },
    treatment: {
      overview: "手術切除腎上腺腫瘤或藥物控制",
      acute: [
        "低血鉀處理：",
        "  - 口服或靜脈鉀補充（KCl）",
        "  - 嚴重時緩慢IV: 0.5 mEq/kg/h",
        "",
        "高血壓處理：",
        "  - Amlodipine: 0.625-1.25 mg/貓 PO q24h"
      ],
      chronic: [
        "手術治療（首選，若單側腫瘤）：",
        "  - 腎上腺切除術",
        "  - 術前鉀和血壓控制",
        "  - 可能需要術後類固醇補充",
        "",
        "藥物治療（無法手術或雙側病變）：",
        "  - Spironolactone（醛固酮拮抗劑）: 2 mg/kg PO q12h",
        "  - 或 Eplerenone: 較少副作用",
        "  - 鉀補充（若需要）",
        "  - 高血壓藥物（Amlodipine）"
      ]
    },
    prognosis: "手術成功切除良性腫瘤預後良好。惡性腫瘤或雙側增生預後較差。藥物可控制症狀但不治癒。眼睛病變可能不可逆。",
    pearls: [
      "貓的頸部腹側屈曲是低血鉀肌病的特徵",
      "不是所有貓低血鉀都是高醛固酮症 - CKD更常見",
      "腎上腺癌vs腺瘤影像學難以區分",
      "術後對側腎上腺可能萎縮，需監測",
      "Spironolactone可能引起貓的面部皮炎",
      "高血壓視網膜病變可能導致永久失明"
    ],
    monitoring: [
      "血鉀（每週直到穩定）",
      "血壓",
      "臨床症狀",
      "影像追蹤（腫瘤大小）"
    ],
    reference: "Cote E: Clinical Veterinary Advisor: Dogs and Cats, 2nd Ed. Mosby, 2011"
  },

  // ==================== 甲狀腺癌 ====================

  "thyroid-carcinoma": {
    zh: "甲狀腺癌",
    en: "Thyroid Carcinoma",
    definition: "起源於甲狀腺上皮細胞的惡性腫瘤。犬甲狀腺腫瘤多為惡性但通常無功能；貓甲狀腺腫瘤多為良性但有功能。",
    synonyms: ["Thyroid Cancer", "甲狀腺惡性腫瘤", "Thyroid Neoplasia"],
    epidemiology: {
      species: "犬為主（惡性多），貓較少（通常良性功能性）",
      age: "犬：老年（平均9-10歲）；貓甲狀腺癌：老年",
      sex: "無明顯性別傾向",
      riskFactors: ["犬：無已知品種傾向，中大型犬可能較多", "貓：長期未治療的甲狀腺功能亢進"]
    },
    clinicalPresentation: {
      history: ["頸部腫塊（漸進性增大）", "呼吸困難或喘息", "吞嚥困難", "聲音改變", "體重減輕", "功能性腫瘤：甲亢症狀"],
      physicalExam: ["頸部可觸及腫塊（常單側）", "腫塊可移動或固定", "頸部淋巴結腫大", "功能性腫瘤：心搏過速、消瘦"]
    },
    pathophysiology: "犬：90%以上甲狀腺腫瘤為惡性（腺癌、濾泡性癌、髓質癌）。約10-20%有功能（分泌甲狀腺激素）。侵襲性強，常侵犯周圍組織和血管，轉移至肺和區域淋巴結常見。貓：甲狀腺腫瘤<5%為惡性，但惡性者侵襲性強。",
    diagnosis: {
      overview: "頸部腫塊 + 影像評估 + 細胞學/組織學確診",
      differentials: ["良性甲狀腺腺瘤（貓）", "甲狀腺增生", "頸部淋巴結腫大", "涎腺腫瘤", "頸部其他腫瘤"],
      initialDB: [
        "甲狀腺功能（T4、TSH）：評估功能狀態",
        "頸部超音波：腫塊大小、侵犯程度、淋巴結",
        "胸腔X光（三視圖）：肺轉移評估",
        "細針抽吸細胞學（若可行）"
      ],
      advanced: [
        "99mTc甲狀腺閃爍掃描：評估功能和異位組織",
        "CT/MRI：術前分期、侵犯評估",
        "組織病理學（切除或活檢）",
        "免疫組織化學（甲狀腺球蛋白、降鈣素）"
      ]
    },
    treatment: {
      overview: "可移動腫瘤首選手術；固定或轉移者考慮其他治療",
      acute: [
        "功能性腫瘤引起甲亢：術前藥物控制"
      ],
      chronic: [
        "手術切除（首選，若腫瘤可移動）：",
        "  - 甲狀腺切除術",
        "  - 可能需要雙側切除",
        "  - 保留副甲狀腺（若可行）",
        "",
        "放射治療：",
        "  - 無法切除或切除不完全",
        "  - 外部放射治療",
        "",
        "放射碘(I-131)：",
        "  - 功能性腫瘤",
        "  - 轉移性分化型甲狀腺癌",
        "  - 高劑量，需專門設施",
        "",
        "化療：",
        "  - Doxorubicin為主",
        "  - 效果有限",
        "",
        "酪氨酸激酶抑制劑：",
        "  - Toceranib: 某些病例可能有效",
        "",
        "術後：",
        "  - 監測甲狀腺功能",
        "  - 低鈣血症管理（若副甲狀腺損傷）",
        "  - 甲狀腺激素補充（若雙側切除）"
      ]
    },
    prognosis: "可完全切除的可移動腫瘤預後較好（中位生存期>2年）。侵犯周圍組織或轉移預後差（中位生存期約3-6個月）。貓甲狀腺癌預後通常較差。",
    pearls: [
      "犬頸部腫塊應考慮甲狀腺癌",
      "腫塊可移動vs固定是重要預後因素",
      "大部分犬甲狀腺腫瘤無功能（T4正常）",
      "術前閃爍掃描有助於評估手術可行性",
      "貓甲狀腺功能亢進惡性比例<5%",
      "轉移常見部位：肺和區域淋巴結"
    ],
    monitoring: [
      "術後：甲狀腺功能、血鈣",
      "影像追蹤（胸腔X光、超音波）",
      "頸部觸診（局部復發）"
    ],
    reference: "Cote E: Clinical Veterinary Advisor: Dogs and Cats, 2nd Ed. Mosby, 2011"
  },

  // ==================== 腎上腺腫瘤 ====================

  "adrenal-tumor": {
    zh: "腎上腺腫瘤",
    en: "Adrenal Tumor",
    definition: "起源於腎上腺皮質或髓質的腫瘤。皮質腫瘤可為功能性（分泌皮質醇或醛固酮）或無功能性；髓質腫瘤主要為嗜鉻細胞瘤。",
    synonyms: ["Adrenal Neoplasia", "Adrenocortical Tumor", "腎上腺腫塊"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "老年（犬平均9-11歲；貓平均11-12歲）",
      sex: "功能性皮質腫瘤母犬略多；嗜鉻細胞瘤無性別傾向",
      riskFactors: ["年齡", "大型犬腎上腺依賴性庫欣症(ADH)較多"]
    },
    clinicalPresentation: {
      history: [
        "功能性皮質腫瘤（皮質醇）：庫欣症症狀",
        "功能性皮質腫瘤（醛固酮）：高醛固酮症症狀",
        "嗜鉻細胞瘤：陣發性症狀",
        "無功能性腫瘤：可能無症狀（偶然發現）或腹痛、腹脹"
      ],
      physicalExam: [
        "依功能狀態而異",
        "大型腫瘤可能觸及腹部腫塊",
        "腫瘤出血：急性腹痛、休克",
        "後腔靜脈侵犯：後肢水腫"
      ]
    },
    pathophysiology: "皮質腫瘤：腺瘤（良性）或癌（惡性），約50%各佔一半。功能性者自主分泌皮質激素。髓質腫瘤（嗜鉻細胞瘤）：分泌兒茶酚胺。惡性腫瘤可局部侵犯（後腔靜脈常見）或遠處轉移（肝、肺）。",
    diagnosis: {
      overview: "影像學發現腎上腺腫塊後，評估功能狀態和侵犯範圍",
      differentials: ["腦下垂體依賴性庫欣症（雙側腎上腺增生）", "轉移性腫瘤", "腎上腺增生", "腎上腺囊腫", "其他腹膜後腫塊"],
      initialDB: [
        "腹部超音波：腎上腺大小、對稱性、腫塊特徵",
        "評估後腔靜脈侵犯",
        "皮質醇功能檢測：LDDS、UCCR",
        "內源性ACTH：ADH時低",
        "電解質（高醛固酮症時低血鉀）"
      ],
      advanced: [
        "腹部CT/MRI：精確分期、血管侵犯評估",
        "尿液兒茶酚胺/metanephrines（嗜鉻細胞瘤）",
        "胸腔影像：轉移評估",
        "血壓測量",
        "凝血功能（術前）"
      ]
    },
    treatment: {
      overview: "可切除腫瘤首選手術；無法手術者藥物或保守治療",
      acute: [
        "腫瘤出血/破裂：",
        "  - 輸液復甦",
        "  - 輸血（若需要）",
        "  - 緊急手術（穩定後）",
        "",
        "嗜鉻細胞瘤高血壓危象：見嗜鉻細胞瘤治療"
      ],
      chronic: [
        "手術切除（首選）：",
        "  - 腎上腺切除術",
        "  - 術前穩定（功能性腫瘤：控制皮質醇或血壓）",
        "  - 後腔靜脈腫瘤栓子處理",
        "  - 術後皮質醇補充（對側腎上腺萎縮）",
        "",
        "無法手術的功能性皮質腫瘤：",
        "  - Trilostane或Mitotane控制",
        "  - 劑量可能需較高",
        "",
        "無功能性腫瘤：",
        "  - 小型：監測觀察",
        "  - 大型或進展：考慮手術",
        "",
        "轉移性疾病：",
        "  - 化療（效果有限）",
        "  - 姑息治療"
      ]
    },
    prognosis: "良性腺瘤完全切除預後佳。惡性癌視侵犯和轉移程度而定。有血管侵犯者手術風險和預後較差。中位生存期差異大（數月至數年）。",
    pearls: [
      "腎上腺「偶發瘤」(incidentaloma)：偶然發現，需評估功能和惡性度",
      "腫瘤>2cm惡性可能性增加",
      "後腔靜脈侵犯不一定是手術禁忌，但風險增加",
      "功能性ADH對側腎上腺可能萎縮 - 術後需皮質醇補充",
      "CT對血管侵犯評估優於超音波"
    ],
    monitoring: [
      "術後：皮質醇（腎上腺功能恢復）",
      "影像追蹤（復發/轉移）",
      "藥物治療時：ACTH刺激試驗、電解質"
    ],
    reference: "Cote E: Clinical Veterinary Advisor: Dogs and Cats, 2nd Ed. Mosby, 2011"
  },

  // ==================== 胰島素瘤 ====================

  "insulinoma": {
    zh: "胰島素瘤",
    en: "Insulinoma",
    definition: "起源於胰島β細胞的功能性腫瘤，分泌過量胰島素導致低血糖。大多數為惡性，但生長緩慢。",
    synonyms: ["Beta Cell Tumor", "胰島細胞瘤", "Insulin-Secreting Tumor", "胰島β細胞腫瘤"],
    epidemiology: {
      species: "犬為主，貓罕見",
      age: "中老年犬（平均9-10歲，範圍3-14歲）",
      sex: "無明顯性別傾向",
      riskFactors: ["品種傾向：中大型犬（German Shepherd、Irish Setter、Golden Retriever、Labrador Retriever、Boxer、Standard Poodle）"]
    },
    clinicalPresentation: {
      history: ["發作性虛弱或倒地", "癲癇發作", "運動後症狀", "禁食後症狀", "行為改變、定向障礙", "顫抖", "進食後症狀改善"],
      physicalExam: ["發作間期通常正常", "發作時：虛弱、顫抖、抽搐、昏迷", "可能肥胖（胰島素促進合成代謝）", "腹部觸診通常無異常"]
    },
    pathophysiology: "β細胞腫瘤自主分泌胰島素 → 不受血糖負反饋調控 → 低血糖 → 神經糖原減少症狀（行為改變、定向障礙、癲癇、昏迷）+ 交感神經反應（顫抖、心悸）。進食或運動可誘發症狀（胰島素釋放或葡萄糖消耗）。>90%為惡性，常轉移至肝和區域淋巴結。",
    diagnosis: {
      overview: "低血糖時胰島素不適當升高（Whipple三徵）",
      differentials: ["其他低血糖原因：肝衰竭、敗血症、腎上腺皮質功能低下、腫瘤旁症候群、狩獵犬低血糖、幼犬低血糖、藥物（胰島素過量）"],
      initialDB: [
        "血糖：<60 mg/dL（症狀時同時測胰島素）",
        "血清胰島素：相對於低血糖不適當升高",
        "  - 血糖<60 mg/dL時胰島素應<10 μU/mL",
        "  - 胰島素瘤時通常>20 μU/mL",
        "修正胰島素/葡萄糖比值(AIGR)：>30高度懷疑",
        "CBC、生化全套（排除其他原因）"
      ],
      advanced: [
        "腹部超音波：胰臟腫塊（敏感度約50-70%）",
        "腹部CT：更敏感",
        "肝臟超音波/CT：轉移評估",
        "術中探查：最終診斷"
      ]
    },
    treatment: {
      overview: "手術切除是首選；無法手術或轉移時藥物控制",
      acute: [
        "低血糖急症：",
        "  - 家中：口服糖漿或蜂蜜塗抹牙齦",
        "  - 醫院：Dextrose 50%稀釋後 0.5-1 mL/kg IV bolus",
        "  - 持續監測，可能需要CRI",
        "  - 避免過度葡萄糖刺激胰島素釋放",
        "",
        "癲癇發作：",
        "  - Diazepam（若持續）",
        "  - 葡萄糖補充"
      ],
      chronic: [
        "手術治療（首選）：",
        "  - 部分胰臟切除術（腫瘤所在區）",
        "  - 術中仔細檢查全胰臟和肝臟",
        "  - 轉移灶減瘤（若可行）",
        "  - 術後監測血糖（可能暫時性高血糖或低血糖）",
        "",
        "藥物治療（術後復發或無法手術）：",
        "  - 飲食管理：",
        "    * 少量多餐（4-6餐/天）",
        "    * 高蛋白、高脂肪、低單醣飲食",
        "    * 避免長時間禁食和劇烈運動",
        "",
        "  - Prednisone：0.5-1 mg/kg PO q12h",
        "    * 促進糖質新生、拮抗胰島素",
        "    * 初始常用",
        "",
        "  - Diazoxide：5-30 mg/kg PO q12h",
        "    * 抑制胰島素分泌",
        "    * 可與Prednisone併用",
        "",
        "  - Octreotide（生長抑素類似物）：10-50 μg SC q8-12h",
        "    * 效果不一",
        "",
        "化療：",
        "  - Streptozotocin：有腎毒性，需大量輸液",
        "  - 效果有限"
      ]
    },
    prognosis: "手術完全切除中位生存期約12-18個月。術後復發或轉移常見。藥物控制可維持數月至1年以上。",
    pearls: [
      "Whipple三徵：(1)低血糖症狀 (2)同時血糖低 (3)給葡萄糖後症狀改善",
      "血糖<40-50 mg/dL時測胰島素最有意義",
      "影像學陰性不能排除 - 腫瘤可能很小",
      "術後可能暫時性糖尿病（其他β細胞受抑制）",
      "避免高糖飲食和食物 - 刺激胰島素釋放",
      "運動前應先進食"
    ],
    monitoring: [
      "血糖（定期居家監測）",
      "低血糖發作頻率和嚴重度",
      "影像追蹤（復發/轉移）",
      "藥物副作用"
    ],
    reference: "Cote E: Clinical Veterinary Advisor: Dogs and Cats, 2nd Ed. Mosby, 2011"
  }

};

// 疾病別名映射（用於搜尋）
const ENDOCRINE_DISEASE_ALIASES = {
  // 糖尿病
  "糖尿病": "diabetes-mellitus",
  "糖尿": "diabetes-mellitus",
  "DM": "diabetes-mellitus",
  "diabetes": "diabetes-mellitus",
  "sugar diabetes": "diabetes-mellitus",
  "高血糖": "diabetes-mellitus",

  // 甲狀腺功能亢進（貓）
  "甲亢": "hyperthyroidism-cat",
  "貓甲亢": "hyperthyroidism-cat",
  "甲狀腺功能亢進": "hyperthyroidism-cat",
  "甲狀腺亢進": "hyperthyroidism-cat",
  "hyperthyroidism": "hyperthyroidism-cat",
  "hyperthyroid": "hyperthyroidism-cat",
  "feline hyperthyroidism": "hyperthyroidism-cat",

  // 甲狀腺功能低下（犬）
  "甲低": "hypothyroidism-dog",
  "犬甲低": "hypothyroidism-dog",
  "甲狀腺功能低下": "hypothyroidism-dog",
  "甲狀腺低下": "hypothyroidism-dog",
  "hypothyroidism": "hypothyroidism-dog",
  "hypothyroid": "hypothyroidism-dog",
  "canine hypothyroidism": "hypothyroidism-dog",

  // 腎上腺皮質功能亢進
  "庫欣症": "hyperadrenocorticism",
  "庫欣氏症": "hyperadrenocorticism",
  "cushings": "hyperadrenocorticism",
  "cushing": "hyperadrenocorticism",
  "腎上腺皮質功能亢進": "hyperadrenocorticism",
  "HAC": "hyperadrenocorticism",
  "hyperadrenocorticism": "hyperadrenocorticism",

  // 腎上腺皮質功能低下
  "愛迪生症": "hypoadrenocorticism",
  "愛迪生氏症": "hypoadrenocorticism",
  "addisons": "hypoadrenocorticism",
  "addison": "hypoadrenocorticism",
  "腎上腺皮質功能低下": "hypoadrenocorticism",
  "腎上腺功能不全": "hypoadrenocorticism",
  "hypoadrenocorticism": "hypoadrenocorticism",

  // 嗜鉻細胞瘤
  "嗜鉻細胞瘤": "pheochromocytoma",
  "pheo": "pheochromocytoma",
  "pheochromocytoma": "pheochromocytoma",
  "腎上腺髓質瘤": "pheochromocytoma",

  // 副甲狀腺功能亢進
  "副甲狀腺功能亢進": "hyperparathyroidism",
  "副甲亢": "hyperparathyroidism",
  "HPT": "hyperparathyroidism",
  "hyperparathyroidism": "hyperparathyroidism",
  "高鈣血症": "hyperparathyroidism",

  // 副甲狀腺功能低下
  "副甲狀腺功能低下": "hypoparathyroidism",
  "副甲低": "hypoparathyroidism",
  "hypoparathyroidism": "hypoparathyroidism",
  "低鈣血症": "hypoparathyroidism",

  // 生長激素過多症
  "肢端肥大症": "hypersomatotropism",
  "acromegaly": "hypersomatotropism",
  "GH過多": "hypersomatotropism",
  "生長激素過多": "hypersomatotropism",
  "hypersomatotropism": "hypersomatotropism",

  // 生長激素缺乏
  "生長激素缺乏": "growth-hormone-deficiency",
  "GH缺乏": "growth-hormone-deficiency",
  "侏儒症": "growth-hormone-deficiency",
  "腦下垂體侏儒症": "growth-hormone-deficiency",
  "pituitary dwarfism": "growth-hormone-deficiency",

  // 尿崩症
  "尿崩症": "diabetes-insipidus",
  "DI": "diabetes-insipidus",
  "diabetes insipidus": "diabetes-insipidus",
  "水尿症": "diabetes-insipidus",
  "中樞性尿崩症": "diabetes-insipidus",
  "腎源性尿崩症": "diabetes-insipidus",

  // 高醛固酮症
  "高醛固酮症": "hyperaldosteronism",
  "Conn症": "hyperaldosteronism",
  "conns": "hyperaldosteronism",
  "原發性高醛固酮症": "hyperaldosteronism",
  "hyperaldosteronism": "hyperaldosteronism",

  // 甲狀腺癌
  "甲狀腺癌": "thyroid-carcinoma",
  "甲狀腺腫瘤": "thyroid-carcinoma",
  "thyroid cancer": "thyroid-carcinoma",
  "thyroid carcinoma": "thyroid-carcinoma",

  // 腎上腺腫瘤
  "腎上腺腫瘤": "adrenal-tumor",
  "腎上腺腫塊": "adrenal-tumor",
  "adrenal tumor": "adrenal-tumor",
  "adrenal mass": "adrenal-tumor",
  "腎上腺偶發瘤": "adrenal-tumor",

  // 胰島素瘤
  "胰島素瘤": "insulinoma",
  "insulinoma": "insulinoma",
  "胰島細胞瘤": "insulinoma",
  "beta cell tumor": "insulinoma",
  "低血糖腫瘤": "insulinoma"
};

// 導出（若在模組環境中使用）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ENDOCRINE_DISEASES, ENDOCRINE_DISEASE_ALIASES };
}

console.log("Endocrine Disease Info loaded:", Object.keys(ENDOCRINE_DISEASES).length, "diseases");

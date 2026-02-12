// ======= 生殖系統疾病 DISEASE_INFO =======
// Reproductive System Diseases
// 資料來源：Clinical Veterinary Advisor: Dogs and Cats, 2nd Ed. (Etienne Cote)
// Small Animal Internal Medicine, 5th Ed. (Nelson & Couto)
// Textbook of Veterinary Internal Medicine, 8th Ed. (Ettinger, Feldman, Cote)

const REPRODUCTIVE_DISEASES = {
  "pyometra": {
    zh: "子宮蓄膿",
    en: "Pyometra",
    definition: "子宮腔內膿液積聚的嚴重感染性疾病，通常發生在動情週期的黃體期，是未絕育母犬和母貓的常見急症。",
    synonyms: ["子宮積膿", "Uterine Empyema", "Cystic Endometrial Hyperplasia-Pyometra Complex", "CEH-Pyometra"],
    epidemiology: {
      species: "犬較常見，貓也可發生",
      age: "中老年（犬平均7-8歲），但任何年齡未絕育母犬皆可發生",
      sex: "僅限未絕育母犬/母貓",
      breedPredilection: "Collie、Cavalier King Charles Spaniel、Golden Retriever、Rottweiler、Bernese Mountain Dog",
      riskFactors: ["未絕育", "外源性荷爾蒙治療（雌激素、黃體素）", "假懷孕", "不規則發情週期", "從未懷孕"]
    },
    clinicalPresentation: {
      history: ["發情後2-8週發病", "陰道分泌物（開放型）", "多飲多尿", "食慾下降", "嘔吐", "腹部膨大", "嗜睡"],
      physicalExam: ["陰道膿性/血性分泌物（開放型）", "腹部膨大或疼痛", "脫水", "發燒或低體溫", "休克徵象（敗血症）", "子宮觸診增大"]
    },
    pathophysiology: "黃體期高黃體素 → 子宮內膜增生（CEH）→ 子宮免疫力下降 → 細菌（主要為E. coli）上行感染 → 子宮積膿。開放型：子宮頸開放，膿液排出；閉鎖型：子宮頸關閉，膿液積聚，更危險",
    diagnosis: {
      overview: "病史、臨床症狀、影像學確診",
      differentials: ["懷孕", "子宮積液（黏液/血液）", "子宮扭轉", "卵巢囊腫", "陰道炎"],
      initialDB: ["CBC（嗜中性白血球增多伴左移、單核球增多、貧血）", "生化（氮血症、肝酵素升高、低白蛋白血症）", "腹部超聲（擴張的子宮角，管腔內低迴聲液體）"],
      advanced: ["腹部X光", "陰道細胞學", "血液培養（若敗血症）", "凝血功能"]
    },
    treatment: {
      overview: "首選外科卵巢子宮切除術（OVH），穩定後盡快手術",
      acute: [
        "術前穩定：",
        "- 靜脈輸液糾正脫水和電解質失衡",
        "- 廣譜抗生素：Ampicillin-Sulbactam 22 mg/kg IV q8h + Enrofloxacin 5-10 mg/kg IV q24h",
        "- 或 Cefazolin 22 mg/kg IV q8h + Metronidazole 15 mg/kg IV q12h",
        "手術治療：",
        "- 卵巢子宮切除術（OVH）- 首選且治癒性治療",
        "- 術後繼續抗生素7-14天",
        "內科治療（保留生育能力，風險較高）：",
        "- Aglepristone（黃體素拮抗劑）: 10 mg/kg SC q24h x 2-3天",
        "- Cloprostenol（PGF2α類似物）: 1-3 μg/kg SC q12-24h x 3-5天",
        "- 必須密切監測，復發率高"
      ],
      chronic: ["術後抗生素療程完成", "監測復發（內科治療者）"]
    },
    prognosis: "手術治療：預後良好，死亡率約5-8%。閉鎖型和敗血症死亡率較高。內科治療：復發率20-77%，下次發情後建議絕育。",
    pearls: [
      "閉鎖型比開放型更危險，因為沒有引流",
      "多飲多尿是E. coli內毒素干擾腎臟濃縮功能所致",
      "不要等到穩定完美才手術 - 感染源在子宮內",
      "絕育是最好的預防",
      "發情後4-8週是高風險期"
    ],
    monitoring: ["術後腎功能", "體溫", "白血球計數", "傷口癒合"],
    reference: "Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; Nelson RW, Couto CG: Small Animal Internal Medicine, 5th Ed. Elsevier, 2014"
  },

  "dystocia": {
    zh: "難產",
    en: "Dystocia",
    definition: "分娩過程中由於母體或胎兒因素導致的分娩困難，無法順利娩出胎兒，是產科急症。",
    synonyms: ["分娩困難", "Obstructed Labor", "Difficult Birth"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何生育年齡，初產和高齡產婦風險較高",
      sex: "僅限母犬/母貓",
      breedPredilection: "短頭犬種（Bulldog、Boston Terrier、French Bulldog）、小型犬、蘇格蘭折耳貓、波斯貓",
      riskFactors: ["單胎妊娠", "過大胎兒", "骨盆狹窄", "肥胖", "高齡", "子宮惰性", "胎位不正"]
    },
    clinicalPresentation: {
      history: ["妊娠超過預產期（>70天）", "第一產程>24小時無進展", "第二產程>2小時無胎兒產出", "胎兒間隔>2小時", "綠色分泌物無胎兒產出", "虛弱/抑鬱"],
      physicalExam: ["腹部緊張努責", "可見或觸及卡住的胎兒", "陰道分泌物（綠色提示胎盤分離）", "脫水", "虛弱", "胎心率異常（<150或>220 bpm）"]
    },
    pathophysiology: "母體因素：子宮惰性（原發性或繼發性）、骨盆狹窄、陰道/外陰狹窄、子宮扭轉。胎兒因素：過大、畸形、死胎、胎位不正、胎數過多。結果：分娩停滯 → 胎兒窘迫 → 胎兒和/或母體死亡",
    diagnosis: {
      overview: "病史、理學檢查、影像學確診並評估胎兒狀態",
      differentials: ["正常分娩間歇", "假懷孕"],
      initialDB: ["腹部X光（胎兒數目、大小、位置、骨骼畸形）", "腹部超聲（胎心率、胎兒存活）", "陰道檢查（子宮頸擴張、胎兒位置）", "血糖", "電解質", "血鈣"],
      advanced: ["血氣分析", "血鈣（低血鈣可致子宮惰性）"]
    },
    treatment: {
      overview: "根據情況選擇內科或外科治療，胎兒窘迫需緊急剖腹產",
      acute: [
        "內科治療（子宮惰性、子宮頸已擴張、胎兒存活）：",
        "- Oxytocin: 0.25-2 IU IV/IM，可每20-30分鐘重複（最多3次）",
        "- Calcium gluconate 10%: 0.5-1 mL/kg IV slow（監測ECG）",
        "- 輸液糾正脫水",
        "- 葡萄糖補充（若低血糖）",
        "外科治療（剖腹產）指征：",
        "- 內科治療失敗",
        "- 胎兒-母體不成比例",
        "- 胎兒窘迫（心率<150 bpm）",
        "- 骨盆阻塞",
        "- 子宮扭轉/破裂",
        "- 綠色分泌物無進展",
        "- 品種高風險（Bulldog等）",
        "剖腹產技術：",
        "- 術前最小化胎兒藥物暴露",
        "- 快速取出胎兒並復甦"
      ],
      chronic: ["產後子宮復舊監測", "泌乳支持", "考慮未來絕育"]
    },
    prognosis: "及時治療：母犬存活率>90%，胎兒存活率60-90%。延遲治療：母犬和胎兒死亡率顯著增加。短頭犬種剖腹產率可達80-100%。",
    pearls: [
      "綠色分泌物表示胎盤已分離，胎兒缺氧倒數計時開始",
      "Oxytocin過量可致子宮破裂，謹慎使用",
      "低血鈣是子宮惰性的常見原因",
      "胎兒心率正常150-220 bpm，<150 bpm提示窘迫",
      "短頭犬種應計劃性剖腹產"
    ],
    monitoring: ["母犬生命徵象", "胎兒心率", "子宮收縮", "陰道分泌物"],
    reference: "Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "mastitis": {
    zh: "乳腺炎",
    en: "Mastitis",
    definition: "乳腺組織的炎症或感染，通常發生在哺乳期，可能是細菌感染（敗血性）或非感染性（乳汁鬱積）。",
    synonyms: ["乳房炎", "Mammary Gland Infection", "乳腺感染"],
    epidemiology: {
      species: "犬較常見，貓也可發生",
      age: "哺乳期任何年齡",
      sex: "僅限哺乳中的母犬/母貓",
      breedPredilection: "無特定品種傾向",
      riskFactors: ["哺乳期", "乳頭創傷", "環境衛生差", "幼仔牙齒/指甲傷害", "乳汁鬱積", "早期離乳"]
    },
    clinicalPresentation: {
      history: ["哺乳中或近期哺乳", "乳腺腫脹疼痛", "拒絕讓幼仔吸乳", "食慾下降", "發燒", "嗜睡"],
      physicalExam: ["乳腺腫脹、發熱、疼痛", "乳汁異常（膿性、血性、變色）", "乳腺硬塊或膿瘍", "發燒", "脫水", "敗血症徵象（嚴重病例）"]
    },
    pathophysiology: "細菌（E. coli、Staphylococcus、Streptococcus）經乳頭管上行感染或血行播散 → 乳腺組織感染 → 炎症反應 → 乳汁鬱積加重 → 可能形成膿瘍或進展為敗血症/壞疽",
    diagnosis: {
      overview: "臨床表現結合乳汁檢查",
      differentials: ["乳腺腫瘤", "乳腺增生", "乳汁鬱積（非感染性）"],
      initialDB: ["乳汁細胞學（嗜中性白血球、細菌）", "乳汁細菌培養和藥敏", "CBC（白血球增多）", "血糖（排除低血糖）"],
      advanced: ["超聲（評估膿瘍）", "細針抽吸細胞學"]
    },
    treatment: {
      overview: "抗生素治療、支持療法，膿瘍可能需要引流",
      acute: [
        "抗生素治療（基於培養或經驗性）：",
        "- Amoxicillin-Clavulanate: 12.5-25 mg/kg PO q12h x 2-3週",
        "- 或 Cephalexin: 22-30 mg/kg PO q8-12h",
        "- 或 Enrofloxacin: 5-10 mg/kg PO q24h（若繼續哺乳需謹慎）",
        "支持療法：",
        "- 輸液（若脫水或敗血症）",
        "- 溫敷受影響乳腺",
        "- 輕柔擠奶促進引流",
        "- 止痛：Meloxicam 0.1 mg/kg PO q24h",
        "膿瘍處理：",
        "- 切開引流",
        "- 沖洗",
        "壞疽性乳腺炎：",
        "- 可能需要乳腺切除",
        "- 積極輸液和抗生素",
        "哺乳管理：",
        "- 輕度感染可繼續哺乳（促進引流）",
        "- 嚴重感染或膿瘍需離乳"
      ],
      chronic: ["完成抗生素療程", "環境衛生改善"]
    },
    prognosis: "單純性細菌性乳腺炎：及時治療預後良好。壞疽性乳腺炎：預後謹慎，可能致命。膿瘍：引流後通常預後良好。",
    pearls: [
      "壞疽性乳腺炎是急症，乳腺呈紫黑色",
      "輕度感染讓幼仔繼續吸乳可促進引流",
      "乳汁pH>7.0和白血球增多提示感染",
      "正常乳汁應為白色、無臭、稠度均勻",
      "抗生素選擇需考慮是否繼續哺乳"
    ],
    monitoring: ["乳腺外觀和疼痛", "體溫", "幼仔體重增長", "乳汁性狀"],
    reference: "Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "eclampsia": {
    zh: "產褥熱/低血鈣",
    en: "Eclampsia (Puerperal Tetany)",
    definition: "哺乳期因大量鈣質流失至乳汁導致的低血鈣危症，表現為神經肌肉興奮性增高和肌肉痙攣。",
    synonyms: ["產褥低血鈣症", "Puerperal Tetany", "Lactation Tetany", "Hypocalcemia of Lactation", "Milk Fever"],
    epidemiology: {
      species: "犬較常見，貓罕見",
      age: "任何生育年齡",
      sex: "僅限哺乳中的母犬",
      breedPredilection: "小型犬（Chihuahua、Pomeranian、Yorkshire Terrier、Toy Poodle）",
      riskFactors: ["小型犬", "大量幼仔", "哺乳高峰期（產後2-4週）", "初產母犬", "營養不良", "妊娠期過量鈣補充"]
    },
    clinicalPresentation: {
      history: ["哺乳中（通常產後1-4週）", "焦躁不安", "步態僵硬", "肌肉顫抖", "喘氣", "癲癇發作"],
      physicalExam: ["肌肉僵硬/強直", "顫抖", "心搏過速", "發燒（肌肉活動產熱）", "瞳孔散大", "喘氣", "癲癇發作", "倒地不起"]
    },
    pathophysiology: "哺乳期乳汁鈣流失 > 腸道吸收和骨骼動員 → 血鈣急劇下降 → 神經肌肉膜興奮性增高 → 肌肉痙攣、強直、癲癇。妊娠期過量鈣補充可抑制PTH和維生素D活化，導致產後適應不良",
    diagnosis: {
      overview: "臨床表現（哺乳母犬+肌肉痙攣）高度懷疑，血鈣確診",
      differentials: ["癲癇（其他原因）", "中毒", "低血糖", "腦炎"],
      initialDB: ["血清總鈣（<7 mg/dL，正常9-11.5 mg/dL）", "離子鈣（<0.8 mmol/L）", "血糖（可能同時低血糖）", "ECG"],
      advanced: ["電解質全套", "肌酐"]
    },
    treatment: {
      overview: "緊急鈣補充是救命措施",
      acute: [
        "靜脈鈣補充（急救）：",
        "- Calcium gluconate 10%: 0.5-1.5 mL/kg IV slow（5-15分鐘）",
        "- 必須監測ECG（心搏過緩、心律不整立即停止）",
        "- 效果通常在15-30分鐘內顯現",
        "控制癲癇（若嚴重）：",
        "- Diazepam: 0.5-1 mg/kg IV",
        "高體溫處理：",
        "- 主動降溫（若體溫>40°C）",
        "後續維持：",
        "- Calcium gluconate: 0.5-1 mL/kg SC q6-8h稀釋給予",
        "- 或 口服鈣補充：Calcium carbonate 25-50 mg/kg/day PO分次",
        "哺乳管理：",
        "- 暫停或減少哺乳24-48小時",
        "- 補餵幼仔",
        "- 逐漸恢復哺乳",
        "嚴重或復發病例：",
        "- 考慮早期離乳"
      ],
      chronic: ["口服鈣和維生素D補充", "營養改善", "下次妊娠避免過量鈣補充"]
    },
    prognosis: "及時治療：預後極佳，通常數分鐘至數小時內恢復。未治療：可能致命。復發常見，尤其繼續哺乳。",
    pearls: [
      "這是緊急情況 - 延遲治療可能致命",
      "IV鈣給予時必須監測心臟",
      "妊娠期過量鈣補充反而增加產後風險",
      "發燒是肌肉活動產熱，不是感染",
      "小型犬大窩更高風險"
    ],
    monitoring: ["血鈣（q12-24h至穩定）", "ECG", "臨床症狀", "幼仔餵養狀態"],
    reference: "Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "metritis": {
    zh: "子宮炎",
    en: "Metritis",
    definition: "產後子宮的急性細菌感染，通常發生在分娩後一週內，可快速進展為敗血症。",
    synonyms: ["產後子宮炎", "Postpartum Metritis", "Puerperal Metritis", "Acute Metritis"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何生育年齡",
      sex: "僅限產後母犬/母貓",
      breedPredilection: "無特定品種傾向",
      riskFactors: ["難產", "人工助產", "剖腹產", "胎兒/胎盤滯留", "流產", "子宮扭轉", "長時間分娩"]
    },
    clinicalPresentation: {
      history: ["產後1-7天發病", "惡臭陰道分泌物", "發燒", "食慾下降", "忽視幼仔", "嗜睡", "乳汁減少"],
      physicalExam: ["發燒", "脫水", "惡臭血膿性陰道分泌物", "子宮增大", "腹部疼痛", "休克徵象（敗血症）"]
    },
    pathophysiology: "分娩過程子宮頸開放 → 細菌上行感染（E. coli、Streptococcus、Staphylococcus）→ 滯留胎兒/胎盤提供培養基 → 子宮壁感染 → 內毒素血症 → 敗血症",
    diagnosis: {
      overview: "產後病史結合臨床表現",
      differentials: ["子宮蓄膿", "正常產後惡露", "子宮破裂", "腹膜炎"],
      initialDB: ["CBC（嗜中性白血球增多伴左移，或白血球減少若敗血症）", "生化（氮血症、電解質失衡）", "腹部超聲（子宮增大、腔內液體、滯留胎兒/胎盤）", "陰道細胞學和培養"],
      advanced: ["腹部X光", "血液培養", "凝血功能"]
    },
    treatment: {
      overview: "穩定後手術切除感染子宮是首選治療",
      acute: [
        "術前穩定：",
        "- 積極靜脈輸液",
        "- 廣譜抗生素：",
        "  Ampicillin 22 mg/kg IV q8h + Enrofloxacin 5-10 mg/kg IV q24h",
        "  或 Cefazolin 22 mg/kg IV q8h + Metronidazole 15 mg/kg IV q12h",
        "手術治療：",
        "- 卵巢子宮切除術（OVH）- 首選",
        "- 移除感染源",
        "內科治療（保留生育能力，風險高）：",
        "- Prostaglandin F2α: 0.1-0.25 mg/kg SC q12-24h（促進子宮排空）",
        "- 抗生素治療",
        "- 僅限輕度病例和有繁殖價值動物",
        "滯留胎兒/胎盤處理：",
        "- Oxytocin: 0.5-2 IU IM（促進排出）"
      ],
      chronic: ["完成抗生素療程", "監測康復"]
    },
    prognosis: "及時手術治療：預後良好。敗血症病例：預後謹慎，死亡率較高。內科治療：風險較高，可能進展為子宮蓄膿。",
    pearls: [
      "子宮炎 vs 子宮蓄膿：子宮炎是產後急性感染，子宮蓄膿是發情週期相關",
      "惡臭分泌物是特徵性表現",
      "滯留胎兒/胎盤需要移除以控制感染",
      "哺乳管理：抗生素和感染可能影響幼仔",
      "早期識別和治療是關鍵"
    ],
    monitoring: ["體溫", "陰道分泌物", "白血球計數", "幼仔健康"],
    reference: "Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "ovarian-cysts": {
    zh: "卵巢囊腫",
    en: "Ovarian Cysts",
    definition: "卵巢上形成的液體填充結構，包括濾泡囊腫和黃體囊腫，可導致持續發情或發情異常。",
    synonyms: ["卵巢濾泡囊腫", "Follicular Cysts", "Luteal Cysts", "Cystic Ovarian Disease"],
    epidemiology: {
      species: "犬較常見，貓也可發生",
      age: "中老年未絕育母犬",
      sex: "僅限未絕育母犬/母貓",
      breedPredilection: "無明確品種傾向",
      riskFactors: ["未絕育", "外源性荷爾蒙", "卵巢腫瘤"]
    },
    clinicalPresentation: {
      history: ["持續發情（濾泡囊腫）", "發情週期不規則", "假懷孕症狀", "對公犬持續吸引力", "脫毛", "外陰腫大"],
      physicalExam: ["外陰腫大和分泌物", "乳腺發育", "對稱性脫毛", "可能觸診到卵巢增大", "骨髓抑制徵象（若高雌激素血症嚴重）"]
    },
    pathophysiology: "濾泡囊腫：濾泡未排卵、持續分泌雌激素 → 持續發情、子宮內膜增生、骨髓抑制（嚴重時）。黃體囊腫：黃體持續存在、分泌黃體素 → 假懷孕症狀、子宮蓄膿風險增加",
    diagnosis: {
      overview: "病史、臨床表現、超聲確診",
      differentials: ["卵巢腫瘤", "正常發情週期變異", "外源性荷爾蒙", "卵巢殘餘症候群"],
      initialDB: ["腹部超聲（卵巢囊性結構，>1 cm）", "血清雌二醇（濾泡囊腫時升高）", "血清黃體素（黃體囊腫時升高）", "CBC（若高雌激素血症：貧血、血小板減少）", "陰道細胞學（持續角化細胞）"],
      advanced: ["LH/FSH測定", "腹腔鏡檢查"]
    },
    treatment: {
      overview: "卵巢子宮切除術是根治性治療，內科治療用於保留生育力",
      acute: [
        "手術治療（首選）：",
        "- 卵巢子宮切除術（OVH）",
        "- 根治性，消除復發和子宮蓄膿風險",
        "內科治療（保留生育力）：",
        "濾泡囊腫：",
        "- hCG: 250-500 IU IM（犬），250 IU IM（貓）",
        "- 或 GnRH: 2.2 μg/kg IM",
        "- 促進排卵或黃體化",
        "黃體囊腫：",
        "- Prostaglandin F2α: 0.1-0.25 mg/kg SC q24h x 5-7天",
        "- 促進黃體溶解",
        "高雌激素血症伴骨髓抑制：",
        "- 輸血支持",
        "- 卵巢切除（在可能情況下）"
      ],
      chronic: ["內科治療後監測復發", "考慮絕育"]
    },
    prognosis: "手術治療：預後極佳。內科治療：可能復發，需監測。高雌激素血症伴骨髓抑制：預後謹慎。",
    pearls: [
      "持續發情>3-4週應懷疑濾泡囊腫",
      "高雌激素血症可致骨髓抑制（再生不良性貧血）",
      "超聲是診斷金標準",
      "內科治療後建議下次發情後絕育",
      "卵巢囊腫與子宮蓄膿風險相關"
    ],
    monitoring: ["發情週期", "陰道細胞學", "CBC（若有骨髓抑制史）"],
    reference: "Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "testicular-tumor": {
    zh: "睪丸腫瘤",
    en: "Testicular Tumor",
    definition: "睪丸組織發生的腫瘤，主要包括Sertoli細胞瘤、精原細胞瘤和間質細胞瘤三種類型。",
    synonyms: ["睪丸癌", "Testicular Neoplasia", "Sertoli Cell Tumor", "Seminoma", "Interstitial Cell Tumor"],
    epidemiology: {
      species: "犬常見，貓罕見",
      age: "中老年犬（平均10歲）",
      sex: "僅限未絕育公犬",
      breedPredilection: "Boxer、German Shepherd、Afghan Hound、Weimaraner、Shetland Sheepdog",
      riskFactors: ["隱睪症（風險增加10-14倍）", "未絕育", "年齡"]
    },
    clinicalPresentation: {
      history: ["睪丸腫大或萎縮", "女性化症狀（Sertoli細胞瘤）", "脫毛", "乳腺發育", "對公犬吸引力增加"],
      physicalExam: ["單側睪丸腫大", "對側睪丸萎縮（Sertoli細胞瘤）", "乳腺發育", "對稱性脫毛", "包皮下垂", "腹部腫塊（隱睪腫瘤）"]
    },
    pathophysiology: "Sertoli細胞瘤：分泌雌激素 → 女性化症狀、骨髓抑制。精原細胞瘤：生殖細胞來源，通常不分泌荷爾蒙。間質細胞瘤：分泌睪固酮或雌激素，通常良性。隱睪腫瘤：腹腔溫度促進惡性轉化",
    diagnosis: {
      overview: "理學檢查、影像學、組織病理學確診",
      differentials: ["睪丸炎", "睪丸扭轉", "精索囊腫", "鼠蹊疝氣"],
      initialDB: ["睪丸觸診和測量", "腹部超聲（隱睪定位）", "腹部X光（轉移評估）", "胸腔X光（轉移評估）", "CBC（高雌激素血症：貧血、血小板減少、白血球減少）"],
      advanced: ["雌二醇測定", "組織病理學（術後）", "淋巴結細針抽吸"]
    },
    treatment: {
      overview: "手術切除是首選治療",
      acute: [
        "手術治療：",
        "- 雙側睪丸切除術（首選）",
        "- 腹腔探查（隱睪）",
        "- 區域淋巴結評估",
        "高雌激素血症伴骨髓抑制：",
        "- 輸血支持（若嚴重貧血）",
        "- 骨髓恢復需要數週至數月",
        "- 睪丸切除後荷爾蒙效應通常在1-3個月內消退",
        "轉移性疾病：",
        "- 化療（精原細胞瘤對化療敏感）",
        "- 放射治療"
      ],
      chronic: ["術後監測轉移", "骨髓功能恢復監測"]
    },
    prognosis: "良性（大多數間質細胞瘤）：手術後預後極佳。惡性（10-15%的Sertoli細胞瘤和精原細胞瘤可轉移）：取決於分期。高雌激素血症伴骨髓抑制：手術後通常可逆，嚴重病例預後謹慎。",
    pearls: [
      "隱睪是主要風險因素，應建議隱睪犬絕育",
      "三種腫瘤可同時存在",
      "女性化症狀高度提示Sertoli細胞瘤",
      "骨髓抑制可能是致命的",
      "精原細胞瘤對放化療敏感"
    ],
    monitoring: ["CBC恢復（若有骨髓抑制）", "轉移監測", "女性化症狀消退"],
    reference: "Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; Withrow SJ: Small Animal Clinical Oncology, 5th Ed."
  },

  "cryptorchidism": {
    zh: "隱睪症",
    en: "Cryptorchidism",
    definition: "一側或雙側睪丸未能下降至陰囊的發育異常，睪丸可能位於腹腔內或鼠蹊管內。",
    synonyms: ["睪丸未下降", "Retained Testicle", "Undescended Testicle"],
    epidemiology: {
      species: "犬較常見，貓也可發生",
      age: "先天性，通常在幼年發現",
      sex: "僅限公犬/公貓",
      breedPredilection: "Toy Poodle、Pomeranian、Yorkshire Terrier、Chihuahua、Boxer、小型犬",
      riskFactors: ["遺傳因素", "小型犬品種", "家族史"]
    },
    clinicalPresentation: {
      history: ["常規檢查發現睪丸缺失", "繁殖問題", "可能無症狀"],
      physicalExam: ["陰囊內一側或雙側睪丸缺失", "鼠蹊區可能觸及滯留睪丸", "腹部不可觸及（腹腔內）"]
    },
    pathophysiology: "正常睪丸下降：腹腔 → 鼠蹊管 → 陰囊（犬出生後2週內完成，最遲6-8週）。隱睪：gubernaculum或荷爾蒙訊號異常 → 下降停止。滯留睪丸因腹腔溫度 → 精子生成障礙，但睪固酮產生正常。腫瘤風險增加10-14倍",
    diagnosis: {
      overview: "理學檢查為主，影像學定位滯留睪丸",
      differentials: ["睪丸發育不全", "先前手術切除", "睪丸異位"],
      initialDB: ["仔細觸診陰囊和鼠蹊區", "腹部超聲（定位腹腔內睪丸）", "hCG或GnRH刺激試驗（確認睪丸組織存在）"],
      advanced: ["腹腔鏡檢查", "睪固酮測定"]
    },
    treatment: {
      overview: "手術切除滯留睪丸，避免繁殖以防遺傳傳遞",
      acute: [
        "手術治療：",
        "- 雙側睪丸切除術（強烈建議）",
        "- 腹腔內睪丸：腹腔切開或腹腔鏡取出",
        "- 鼠蹊睪丸：鼠蹊切開取出",
        "手術時機：",
        "- 建議6-12月齡手術",
        "- 確認睪丸未下降（等到6-8週以上）",
        "不建議的治療：",
        "- 荷爾蒙治療（hCG/GnRH）促進下降 - 成功率低",
        "- 不應讓隱睪犬繁殖"
      ],
      chronic: ["監測腫瘤發展（若未手術）"]
    },
    prognosis: "手術切除：預後極佳。未治療：腫瘤風險顯著增加（10-14倍），但可能多年無症狀。",
    pearls: [
      "睪丸應在出生後2週內下降，最遲6-8週",
      "這是遺傳性疾病，不應讓隱睪犬繁殖",
      "右側隱睪比左側更常見",
      "腹腔內睪丸腫瘤風險最高",
      "超聲是定位隱睪的首選方法"
    ],
    monitoring: ["若未手術，每6-12個月超聲檢查監測腫瘤"],
    reference: "Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "benign-prostatic-hyperplasia": {
    zh: "前列腺肥大",
    en: "Benign Prostatic Hyperplasia (BPH)",
    definition: "未絕育老年公犬前列腺的良性增生，是最常見的前列腺疾病，與睪固酮和雌激素作用有關。",
    synonyms: ["良性前列腺增生", "BPH", "Prostatic Hypertrophy", "前列腺增生"],
    epidemiology: {
      species: "犬（貓罕見）",
      age: "中老年公犬（>5歲發生率逐漸增加，9歲以上80-100%有某種程度BPH）",
      sex: "僅限未絕育公犬",
      breedPredilection: "無特定品種，所有未絕育公犬",
      riskFactors: ["未絕育", "年齡增加"]
    },
    clinicalPresentation: {
      history: ["常無症狀", "排便困難/裡急後重", "便秘", "帶狀便", "血尿", "尿道分泌物（血性/透明）", "排尿困難（較少見）"],
      physicalExam: ["直腸檢查：前列腺對稱性增大、平滑、無痛", "腹部觸診可能觸及增大的前列腺"]
    },
    pathophysiology: "睪固酮在前列腺內轉化為DHT（雙氫睪固酮）→ 持續刺激前列腺生長 → 腺體和間質增生 → 對稱性增大 → 壓迫直腸（排便困難）> 尿道（排尿困難較少）",
    diagnosis: {
      overview: "中老年未絕育公犬、對稱性無痛性前列腺增大",
      differentials: ["前列腺炎", "前列腺囊腫", "前列腺癌", "前列腺膿瘍"],
      initialDB: ["直腸檢查", "腹部超聲（對稱性增大、均勻回聲、可能有囊腫）", "尿液分析", "前列腺液細胞學"],
      advanced: ["前列腺穿刺/活檢", "CPSE（犬前列腺特異性酯酶）測定"]
    },
    treatment: {
      overview: "絕育是最有效治療，內科治療用於不適合手術者",
      acute: [
        "手術治療（首選）：",
        "- 睪丸切除術",
        "- 術後4-12週前列腺縮小50-70%",
        "內科治療（暫時性）：",
        "- Finasteride（5α-還原酶抑制劑）: 0.1-0.5 mg/kg PO q24h",
        "  - 減少DHT產生，3-4週見效",
        "- Osaterone（抗雄激素）: 0.25-0.5 mg/kg PO q24h x 7天",
        "- Deslorelin植入物（GnRH激動劑）: 4.7mg SC",
        "  - 初期短暫睪固酮升高，後續抑制",
        "支持療法：",
        "- 糞便軟化劑（若便秘）",
        "- 飲食調整（高纖維）"
      ],
      chronic: ["內科治療需長期維持", "定期監測前列腺大小"]
    },
    prognosis: "良性疾病，絕育後預後極佳。內科治療有效但需長期維持，停藥後復發。",
    pearls: [
      "BPH本身很少造成尿道阻塞（與人類不同）",
      "便秘比排尿困難更常見",
      "超聲下囊腫常見，是BPH的一部分",
      "血性尿道分泌物（與排尿無關）是特徵",
      "絕育是根治方法"
    ],
    monitoring: ["前列腺大小（超聲）", "臨床症狀", "排便排尿功能"],
    reference: "Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "prostatitis": {
    zh: "前列腺炎",
    en: "Prostatitis",
    definition: "前列腺的細菌感染，可分為急性和慢性，通常由尿道上行感染引起。",
    synonyms: ["前列腺感染", "Bacterial Prostatitis", "Prostatic Infection"],
    epidemiology: {
      species: "犬（貓罕見）",
      age: "中老年公犬",
      sex: "主要影響未絕育公犬（絕育公犬少見但可發生）",
      breedPredilection: "無特定品種傾向",
      riskFactors: ["BPH", "尿道感染", "免疫抑制", "前列腺囊腫"]
    },
    clinicalPresentation: {
      history: [
        "急性：發燒、嗜睡、食慾下降、排尿困難、血尿、步態僵硬",
        "慢性：反覆尿道感染、血尿、不孕"
      ],
      physicalExam: [
        "急性：發燒、脫水、腹部/腰部疼痛、直腸檢查前列腺疼痛和可能增大、僵硬步態",
        "慢性：可能無明顯異常或輕度前列腺不對稱"
      ]
    },
    pathophysiology: "細菌（E. coli最常見）上行感染經尿道進入前列腺 → 急性炎症反應 → 膿瘍形成（嚴重時）。BPH導致前列腺防禦機制下降，增加感染風險。慢性感染可能抗生素難以穿透",
    diagnosis: {
      overview: "臨床表現結合前列腺液或尿液培養",
      differentials: ["BPH", "前列腺膿瘍", "前列腺癌", "尿道感染"],
      initialDB: ["CBC（白血球增多，急性）", "尿液分析和培養", "前列腺液細胞學和培養", "腹部超聲", "直腸檢查"],
      advanced: ["前列腺穿刺活檢", "血液培養（若敗血症）"]
    },
    treatment: {
      overview: "長期抗生素治療，絕育可輔助治療",
      acute: [
        "急性前列腺炎：",
        "- 靜脈輸液（若脫水或敗血症）",
        "- 抗生素（基於培養或經驗性）：",
        "  急性期：Enrofloxacin 5-10 mg/kg IV/PO q24h",
        "  或 Trimethoprim-Sulfa 15 mg/kg PO q12h",
        "- 療程：4-6週",
        "- 止痛",
        "慢性前列腺炎：",
        "- 抗生素需具有良好前列腺穿透性：",
        "  Enrofloxacin、Trimethoprim-Sulfa、Clindamycin",
        "- 療程：6-12週",
        "- 定期尿液/前列腺液培養監測",
        "絕育：",
        "- 建議感染控制後進行",
        "- 減少復發風險"
      ],
      chronic: ["長期抗生素", "定期培養確認清除", "考慮絕育"]
    },
    prognosis: "急性前列腺炎：適當治療預後良好。慢性前列腺炎：可能難以根治，復發常見。絕育可改善預後。",
    pearls: [
      "急性前列腺炎時前列腺按摩是禁忌（可致敗血症）",
      "慢性感染時前列腺血液屏障阻礙抗生素穿透",
      "Fluoroquinolones和Trimethoprim-Sulfa有良好前列腺穿透性",
      "治療後需確認培養陰性",
      "BPH是常見的誘發因素"
    ],
    monitoring: ["臨床症狀", "尿液培養（治療中和停藥後）", "前列腺超聲"],
    reference: "Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "prostatic-abscess": {
    zh: "前列腺膿瘍",
    en: "Prostatic Abscess",
    definition: "前列腺內形成的膿液積聚，是前列腺炎的嚴重併發症，可能導致敗血症和腹膜炎。",
    synonyms: ["前列腺化膿", "Prostatic Suppuration"],
    epidemiology: {
      species: "犬（貓罕見）",
      age: "中老年公犬",
      sex: "主要影響未絕育公犬",
      breedPredilection: "無特定品種傾向",
      riskFactors: ["慢性前列腺炎", "BPH", "免疫抑制", "前列腺囊腫感染"]
    },
    clinicalPresentation: {
      history: ["發燒", "嗜睡", "食慾下降", "嘔吐", "排尿困難", "血尿/膿尿", "腹部疼痛", "步態僵硬"],
      physicalExam: ["發燒", "脫水", "腹部疼痛", "直腸檢查：前列腺增大、不對稱、疼痛、可能波動感", "休克徵象（若破裂）"]
    },
    pathophysiology: "慢性前列腺炎 → 感染局部化 → 膿瘍形成 → 可能多發或單發。破裂風險：膿瘍→腹腔 → 敗血性腹膜炎。常見細菌：E. coli、Staphylococcus、Streptococcus、Proteus",
    diagnosis: {
      overview: "臨床表現結合影像學確診",
      differentials: ["前列腺囊腫", "前列腺炎", "前列腺癌", "副前列腺囊腫"],
      initialDB: ["CBC（白血球增多伴左移）", "生化（氮血症）", "腹部超聲（前列腺內低迴聲/無迴聲區，可能有碎屑）", "尿液培養"],
      advanced: ["超聲引導穿刺（診斷性，需謹慎）", "CT", "腹腔液分析（若懷疑破裂）"]
    },
    treatment: {
      overview: "外科引流結合長期抗生素治療",
      acute: [
        "術前穩定：",
        "- 靜脈輸液",
        "- 廣譜抗生素：",
        "  Ampicillin-Sulbactam 22 mg/kg IV q8h + Enrofloxacin 5-10 mg/kg IV q24h",
        "手術治療：",
        "- 膿瘍引流和沖洗（超聲引導或手術）",
        "- 前列腺部分切除或網膜包裹術",
        "- 同時睪丸切除術",
        "- 放置引流管",
        "術後管理：",
        "- 長期抗生素（6-12週）",
        "- 定期超聲監測",
        "膿瘍破裂：",
        "- 緊急剖腹探查",
        "- 腹腔灌洗",
        "- 可能需要引流管"
      ],
      chronic: ["完成抗生素療程", "定期超聲監測復發"]
    },
    prognosis: "未破裂且及時手術：預後中等至良好。膿瘍破裂/敗血性腹膜炎：預後謹慎至差。復發可能，尤其未同時絕育。",
    pearls: [
      "前列腺膿瘍破裂是外科急症",
      "單純抗生素治療通常不足以控制",
      "絕育是治療的重要組成部分",
      "超聲引導穿刺有破裂風險，需謹慎",
      "復發率較高，需長期監測"
    ],
    monitoring: ["體溫", "白血球計數", "超聲監測", "尿液培養"],
    reference: "Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "paraphimosis": {
    zh: "陰莖嵌頓",
    en: "Paraphimosis",
    definition: "陰莖在勃起後無法縮回包皮內的緊急狀況，可導致陰莖水腫、缺血和壞死。",
    synonyms: ["包皮嵌頓", "陰莖外露", "Penis Entrapment"],
    epidemiology: {
      species: "犬較常見，貓罕見",
      age: "任何年齡",
      sex: "僅限公犬/公貓",
      breedPredilection: "長毛犬（毛髮纏繞）、小型犬",
      riskFactors: ["包皮開口狹窄", "包皮過短", "毛髮纏繞", "交配後", "人工採精後", "創傷", "腫瘤"]
    },
    clinicalPresentation: {
      history: ["陰莖無法縮回", "過度舔舐生殖器", "焦躁不安", "交配或勃起後發生"],
      physicalExam: ["陰莖外露", "陰莖腫脹、充血", "黏膜乾燥或損傷", "可能有毛髮纏繞", "包皮開口緊縮", "陰莖變色（缺血）"]
    },
    pathophysiology: "勃起後陰莖無法縮回 → 包皮環狀壓迫 → 靜脈和淋巴回流受阻 → 陰莖水腫加重 → 動脈血供受損 → 缺血 → 壞死",
    diagnosis: {
      overview: "臨床診斷明確",
      differentials: ["正常勃起", "陰莖脫垂", "陰莖骨折", "陰莖腫瘤"],
      initialDB: ["視診和觸診", "評估陰莖存活性"],
      advanced: ["無需額外檢查，除非懷疑潛在疾病"]
    },
    treatment: {
      overview: "緊急處理以恢復陰莖血流和保護組織",
      acute: [
        "非手術治療（輕度、早期）：",
        "- 清潔陰莖",
        "- 移除毛髮纏繞（若有）",
        "- 潤滑（水溶性潤滑劑、生理鹽水）",
        "- 高滲溶液減輕水腫（50%葡萄糖或高滲鹽水濕敷）",
        "- 輕柔壓迫減少水腫",
        "- 嘗試手動復位",
        "手術治療（復位失敗或包皮狹窄）：",
        "- 鎮靜或全身麻醉",
        "- 包皮切開術擴大開口",
        "- 陰莖復位",
        "- 包皮縫合",
        "嚴重壞死：",
        "- 陰莖截除術",
        "- 尿道造口術",
        "術後護理：",
        "- Elizabethan collar",
        "- 抗生素（若黏膜損傷）",
        "- 止痛"
      ],
      chronic: ["包皮整形術（若反覆發作）", "監測排尿功能"]
    },
    prognosis: "早期處理：預後良好。延遲治療或嚴重壞死：可能需要截除，但排尿和生活品質通常可維持。",
    pearls: [
      "這是緊急狀況 - 延遲可致陰莖壞死",
      "高滲溶液可有效減輕水腫",
      "毛髮纏繞是常見且可預防的原因",
      "長毛犬建議定期修剪包皮周圍毛髮",
      "交配後監測對種公犬很重要"
    ],
    monitoring: ["陰莖存活性", "排尿功能", "傷口癒合"],
    reference: "Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "vaginal-hyperplasia": {
    zh: "陰道增生",
    en: "Vaginal Hyperplasia",
    definition: "發情期雌激素刺激導致陰道黏膜過度增生和水腫，組織可能突出於陰門外。",
    synonyms: ["陰道脫垂", "Vaginal Prolapse", "Vaginal Edema", "Vaginal Fold Prolapse"],
    epidemiology: {
      species: "犬常見，貓罕見",
      age: "年輕母犬（1-3歲），初次或第二次發情",
      sex: "僅限未絕育母犬",
      breedPredilection: "大型犬（Boxer、Mastiff、German Shepherd、Labrador Retriever、Bulldog）",
      riskFactors: ["未絕育", "年輕", "大型犬品種", "發情期"]
    },
    clinicalPresentation: {
      history: ["發情期出現", "陰道組織突出", "過度舔舐", "排尿困難", "無法交配"],
      physicalExam: ["粉紅色/紅色組織從陰門突出", "組織水腫", "黏膜乾燥或損傷", "可能有潰瘍", "通常在陰道底部"]
    },
    pathophysiology: "發情前期/發情期雌激素升高 → 陰道黏膜增生和水腫 → 組織突出 → 暴露導致乾燥和創傷 → 黃體期雌激素下降後自然消退（但下次發情可能復發）",
    diagnosis: {
      overview: "臨床診斷明確，需區分真性脫垂",
      differentials: ["真性陰道脫垂", "陰道腫瘤", "陰道息肉", "尿道脫垂", "傳染性性病腫瘤(TVT)"],
      initialDB: ["視診", "陰道鏡檢查", "陰道細胞學（確認發情期）"],
      advanced: ["組織活檢（若懷疑腫瘤）", "腹部超聲"]
    },
    treatment: {
      overview: "保護組織、等待消退，絕育可預防復發",
      acute: [
        "保守治療（大多數病例）：",
        "- 保持組織濕潤和清潔",
        "- 水溶性潤滑劑保護",
        "- Elizabethan collar防止舔舐",
        "- 等待發情結束後自然消退（通常7-14天）",
        "促進消退：",
        "- 誘導排卵：hCG 500-1000 IU IM或",
        "- GnRH 2.2 μg/kg IM",
        "- 縮短發情期，加速消退",
        "手術治療（嚴重壞死或潰瘍）：",
        "- 增生組織切除",
        "- 陰道固定術",
        "絕育：",
        "- 黃體期或發情間期進行",
        "- 預防復發（下次發情幾乎100%復發）"
      ],
      chronic: ["絕育預防復發", "若保留繁殖力需人工授精"]
    },
    prognosis: "預後良好。多數發情結束後消退。絕育後不復發。若不絕育，下次發情幾乎必定復發。",
    pearls: [
      "這是增生而非真正的脫垂",
      "發情結束後自然消退",
      "復發率極高，建議絕育",
      "保持組織濕潤是護理重點",
      "可能影響自然交配，需人工授精"
    ],
    monitoring: ["組織狀態", "發情週期", "排尿功能"],
    reference: "Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "transmissible-venereal-tumor": {
    zh: "傳染性性病腫瘤",
    en: "Transmissible Venereal Tumor (TVT)",
    definition: "一種通過交配傳播的性傳播腫瘤，主要影響外生殖器，可經由活腫瘤細胞直接移植傳染。",
    synonyms: ["TVT", "Sticker Tumor", "Venereal Granuloma", "Transmissible Sarcoma", "犬傳染性生殖器腫瘤"],
    epidemiology: {
      species: "犬（貓罕見）",
      age: "性成熟犬，1-8歲最常見",
      sex: "公犬和母犬皆可感染",
      breedPredilection: "無特定品種，流浪犬和未絕育犬高風險",
      riskFactors: ["未絕育", "流浪", "多重交配對象", "免疫抑制"]
    },
    clinicalPresentation: {
      history: ["生殖器腫塊", "血性分泌物", "過度舔舐生殖器", "交配困難"],
      physicalExam: ["菜花狀、易碎、出血性腫塊", "陰莖/包皮（公犬）或陰道/外陰（母犬）", "可能轉移至鼻腔、口腔、皮膚", "區域淋巴結可能腫大"]
    },
    pathophysiology: "腫瘤細胞本身是傳染原 → 交配或直接接觸時細胞移植 → 2-6個月潛伏期 → 腫瘤生長 → 免疫功能正常時可能自發消退，免疫抑制時進展和轉移",
    diagnosis: {
      overview: "臨床表現結合細胞學/組織病理學確診",
      differentials: ["其他生殖器腫瘤", "陰道增生", "肉芽腫", "乳頭狀瘤"],
      initialDB: ["腫塊印片或細針抽吸細胞學（特徵性圓細胞，細胞質空泡）", "組織病理學", "區域淋巴結評估"],
      advanced: ["胸腔X光（轉移評估）", "腹部超聲"]
    },
    treatment: {
      overview: "Vincristine化療是首選治療，治癒率高",
      acute: [
        "化療（首選）：",
        "- Vincristine: 0.5-0.7 mg/m² IV 每週一次",
        "- 持續至腫瘤消退後2-3週（通常4-8次）",
        "- 治癒率>90%",
        "- 注意血管外滲（嚴重組織壞死）",
        "監測血球計數：",
        "- 每次治療前CBC",
        "- 嗜中性白血球<2000/μL時延遲治療",
        "替代治療：",
        "- Doxorubicin: 30 mg/m² IV q3週",
        "- 手術切除（復發率較高，用於局部小腫瘤）",
        "- 放射治療（有效但較少使用）",
        "轉移性疾病：",
        "- 化療仍有效",
        "- 可能需要更長療程"
      ],
      chronic: ["治療後監測復發", "建議絕育"]
    },
    prognosis: "對Vincristine反應極佳，治癒率>90%。轉移性疾病預後較差但仍可能反應。免疫功能正常時可能自發消退（少數）。",
    pearls: [
      "TVT是唯一已知通過活細胞移植傳播的腫瘤",
      "腫瘤細胞有獨特的染色體數目（57-64 vs 正常78）",
      "Vincristine是首選治療，反應率極高",
      "避免血管外滲 - 造成嚴重組織壞死",
      "絕育和控制流浪犬是預防關鍵"
    ],
    monitoring: ["腫瘤大小（每次治療前）", "CBC", "復發監測"],
    reference: "Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; Withrow SJ: Small Animal Clinical Oncology, 5th Ed."
  },

  "pseudopregnancy": {
    zh: "假懷孕",
    en: "Pseudopregnancy",
    definition: "未懷孕母犬在黃體期表現出懷孕和哺乳行為的生理或病理狀態，與黃體素下降和泌乳素升高有關。",
    synonyms: ["假孕", "False Pregnancy", "Pseudocyesis", "Phantom Pregnancy", "偽妊娠"],
    epidemiology: {
      species: "犬常見，貓罕見",
      age: "任何年齡未絕育母犬",
      sex: "僅限未絕育母犬",
      breedPredilection: "Afghan Hound、Beagle、Dachshund（可能較常見）",
      riskFactors: ["未絕育", "發情週期正常", "某些個體反覆發生"]
    },
    clinicalPresentation: {
      history: ["發情後4-9週出現", "乳腺腫大和泌乳", "築巢行為", "對玩具的母性行為", "食慾改變", "體重增加", "嗜睡或焦躁"],
      physicalExam: ["乳腺腫大", "乳汁分泌", "腹部可能輕度膨脹", "行為改變"]
    },
    pathophysiology: "正常黃體期結束 → 黃體素急劇下降 → 泌乳素相對升高 → 乳腺發育和泌乳 → 母性行為。犬的黃體期長度（約2個月）無論懷孕與否相似，因此假懷孕很常見",
    diagnosis: {
      overview: "病史和臨床表現，需排除真懷孕和子宮蓄膿",
      differentials: ["真懷孕", "子宮蓄膿", "乳腺腫瘤", "甲狀腺功能減退"],
      initialDB: ["腹部超聲（排除懷孕和子宮蓄膿）", "腹部X光", "乳腺檢查"],
      advanced: ["無需額外檢查"]
    },
    treatment: {
      overview: "大多數自限性，2-3週消退；嚴重症狀可藥物治療",
      acute: [
        "保守治療（大多數病例）：",
        "- 減少刺激乳腺（避免自舔、熱敷）",
        "- 移除築巢材料和「收養」的玩具",
        "- Elizabethan collar（若過度舔乳）",
        "- 減少食物量（減少泌乳刺激）",
        "- 增加運動分散注意力",
        "藥物治療（嚴重或持續症狀）：",
        "- Cabergoline（泌乳素抑制劑）: 5 μg/kg PO q24h x 5-10天",
        "- 或 Bromocriptine: 10-30 μg/kg PO q12h",
        "- 副作用：嘔吐（與食物同服減少）",
        "不建議：",
        "- 擠奶（刺激更多泌乳）",
        "- 利尿劑（無效）",
        "乳腺炎併發症：",
        "- 若繼發感染需抗生素"
      ],
      chronic: ["反覆嚴重假懷孕建議絕育", "下次發情後可能復發"]
    },
    prognosis: "自限性疾病，通常2-3週自行消退。不影響未來繁殖力。反覆嚴重發作者建議絕育。",
    pearls: [
      "假懷孕是犬正常生理的一部分，非疾病",
      "狼群中可能有利於群體育幼（非繁殖母狼協助哺乳）",
      "不要擠奶 - 會刺激更多泌乳",
      "首要排除真懷孕和子宮蓄膿",
      "Cabergoline效果良好但非必要"
    ],
    monitoring: ["症狀消退", "乳腺是否感染"],
    reference: "Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  }
};

// 匯出供整合使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = REPRODUCTIVE_DISEASES;
}

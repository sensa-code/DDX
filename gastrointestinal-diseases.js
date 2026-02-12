// ======= 消化系統疾病 DISEASE_INFO =======
// Gastrointestinal Diseases
// 資料來源：Clinical Veterinary Advisor: Dogs and Cats, 3rd Ed. (Etienne Cote)
// Gough A, Murphy K: Differential Diagnosis in Small Animal Medicine, 2nd Ed.
// 生成日期: 2026-02-04

const GASTROINTESTINAL_DISEASES = {

  // ==================== 胃部疾病 ====================

  "gastric-dilatation-volvulus": {
    zh: "胃擴張扭轉",
    en: "Gastric Dilatation-Volvulus (GDV)",
    definition: "胃部急性擴張並沿其腸系膜軸旋轉的危及生命緊急狀況，導致胃流出道阻塞、血管壓迫和組織缺血。",
    synonyms: ["GDV", "胃扭轉", "Bloat", "Gastric Torsion", "胃脹氣扭轉"],
    epidemiology: {
      species: "犬（貓極罕見）",
      age: "中老年犬較常見（平均7歲），但任何年齡可發生",
      sex: "公犬略多",
      riskFactors: ["大型深胸犬種（Great Dane、German Shepherd、Standard Poodle、Weimaraner、Irish Setter、Saint Bernard）", "體重>20 kg", "胸深/胸寬比高", "一級親屬有GDV史", "快速進食", "每日一餐大量餵食", "進食後劇烈運動", "膨脹性乾糧", "焦慮性情", "年齡增長"]
    },
    clinicalPresentation: {
      history: ["急性發作（通常數小時內）", "非生產性乾嘔（典型）", "流涎", "腹部膨大", "煩躁不安", "虛弱或倒地", "呼吸困難", "進食後發生"],
      physicalExam: ["腹部明顯膨脹（左側明顯）", "叩診呈鼓音", "非生產性乾嘔", "流涎", "心搏過速", "脈搏弱或無法觸及", "CRT延長", "黏膜蒼白或發紺", "低血壓", "休克徵象", "觸診脾臟可能異位"]
    },
    pathophysiology: "胃擴張（氣體、液體、食物）→ 胃沿腸系膜軸順時針旋轉（從尾側看）90-360度 → 幽門和賁門阻塞 → 胃進一步擴張 → 壓迫後腔靜脈和門脈 → 靜脈回流減少 → 心輸出量下降 → 休克。同時：脾臟隨胃旋轉可能扭轉 → 脾臟充血壞死；胃壁缺血 → 胃壁壞死（尤其大彎側）；再灌注損傷 → SIRS、心律不整、DIC",
    diagnosis: {
      overview: "臨床表現高度提示，腹部X光確認",
      differentials: ["單純胃擴張（無扭轉）", "脾臟扭轉", "腸阻塞", "腹腔腫瘤"],
      initialDB: ["腹部X光（右側臥位最佳）：「雙氣泡」征、「Popeye手臂」征、「C」字型胃、幽門移位至背側", "PCV/TS", "乳酸（>6 mmol/L預後差）", "電解質", "血氣", "ECG"],
      advanced: ["凝血功能", "血液培養（若懷疑敗血症）"]
    },
    treatment: {
      overview: "緊急穩定 + 胃減壓 + 外科手術。這是外科急症！",
      acute: [
        "休克復甦（同時進行）：",
        "  - 兩條大口徑靜脈導管",
        "  - 等張晶體液 60-90 mL/kg/h（第一小時）",
        "  - 膠體液 10-20 mL/kg bolus",
        "胃減壓：",
        "  - 口胃管（首選，若可通過賁門）",
        "  - 經皮穿刺減壓（若口胃管失敗）：右側腹最鼓音處",
        "止痛：Opioids（Fentanyl 2-5 μg/kg IV）",
        "抗心律不整（若有室性心律不整）：",
        "  - Lidocaine: 2 mg/kg IV bolus, then 50-80 μg/kg/min CRI",
        "廣譜抗生素：Ampicillin-Sulbactam 或 Cefazolin + Metronidazole",
        "緊急手術（穩定後立即）：",
        "  - 復位胃和脾臟",
        "  - 評估胃壁和脾臟活性",
        "  - 胃壁壞死：部分胃切除",
        "  - 脾臟扭轉/壞死：脾臟切除",
        "  - 胃固定術（Gastropexy）預防復發"
      ],
      chronic: [
        "術後護理：",
        "  - 持續ECG監測（心律不整高峰在術後12-72小時）",
        "  - 電解質監測和補充",
        "  - 營養支持（術後12-24小時開始小量餵食）",
        "預防復發：",
        "  - 預防性胃固定術（高風險犬）",
        "  - 少量多餐",
        "  - 避免進食後運動",
        "  - 使用慢食碗"
      ]
    },
    prognosis: "整體存活率約80-90%（及時手術）。預後不良因素：乳酸>6 mmol/L、胃壁壞死、脾臟切除、術前心律不整、低血壓時間長。無胃固定術復發率高達80%，有胃固定術復發率<5%。",
    pearls: [
      "「時間就是胃壁」- 延遲手術增加壞死風險",
      "Great Dane終生GDV風險約40%",
      "預防性胃固定術可考慮於高風險犬（如絕育時同時進行）",
      "術後心律不整（室性早搏、室速）常見，峰值在12-72小時",
      "乳酸是良好的預後指標",
      "右側臥X光最能顯示「雙氣泡」征"
    ],
    monitoring: ["ECG（持續監測48-72小時）", "乳酸", "電解質（尤其鉀）", "血壓", "尿量", "傷口/腹部"],
    reference: "Cote E: Clinical Veterinary Advisor, 3rd Ed. Elsevier, 2015; Brockman DJ et al: Canine gastric dilatation/volvulus syndrome in a veterinary critical care unit. JAVMA 207:460-464, 1995"
  },

  "gastric-ulcer": {
    zh: "胃潰瘍",
    en: "Gastric Ulcer",
    definition: "胃黏膜缺損深達黏膜下層或更深的病變，可導致出血、穿孔等嚴重併發症。",
    synonyms: ["Gastric Ulceration", "胃糜爛", "Gastroduodenal Ulcer", "Peptic Ulcer"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡，中老年較常見",
      sex: "無明顯性別傾向",
      riskFactors: ["NSAIDs使用（最常見原因）", "皮質類固醇", "肝臟疾病", "腎臟疾病", "肥大細胞瘤", "胃泌素瘤", "應激（重症、手術、創傷）", "脊髓疾病", "休克", "Helicobacter感染（角色不明確）"]
    },
    clinicalPresentation: {
      history: ["嘔吐（可能有咖啡渣樣物或鮮血）", "黑便（melena）", "食慾下降", "體重減輕", "腹痛", "虛弱", "NSAID或類固醇用藥史"],
      physicalExam: ["腹部觸診疼痛（上腹部）", "黏膜蒼白（若出血）", "心搏過速", "黑便（直腸檢查）", "可能觸及腹部腫塊（若有腫瘤）", "脫水"]
    },
    pathophysiology: "正常胃黏膜保護機制受損（黏液-碳酸氫鹽屏障、前列腺素、黏膜血流）→ 胃酸和胃蛋白酶對黏膜的損傷 → 糜爛（淺表）→ 潰瘍（深達黏膜下層）。NSAIDs抑制COX-1 → 前列腺素減少 → 黏膜保護減弱。肥大細胞瘤釋放組織胺 → 胃酸分泌增加。",
    diagnosis: {
      overview: "臨床懷疑結合內視鏡確診",
      differentials: ["胃炎", "胃腫瘤", "胃異物", "胰臟炎", "肝膽疾病", "腎衰竭", "Addison病"],
      initialDB: ["CBC（貧血、血小板）", "生化（BUN升高可因消化道出血）", "糞便潛血", "腹部X光", "腹部超聲"],
      advanced: ["上消化道內視鏡（金標準）+活檢", "凝血功能", "胃泌素濃度（若懷疑胃泌素瘤）", "肥大細胞瘤排查"]
    },
    treatment: {
      overview: "停用致病藥物、抑制胃酸、保護黏膜、治療原發病因",
      acute: [
        "停用NSAIDs和皮質類固醇",
        "輸液支持（若脫水或出血）",
        "輸血（若嚴重貧血 PCV<20%）",
        "胃酸抑制：",
        "  - PPI（首選）：Omeprazole 1-2 mg/kg PO q12-24h",
        "  - 或 Pantoprazole 1 mg/kg IV q12-24h（重症）",
        "  - H2阻斷劑：Famotidine 0.5-1 mg/kg PO/IV q12-24h",
        "黏膜保護：",
        "  - Sucralfate: 0.5-1 g PO q8h（空腹，與其他藥物間隔2小時）",
        "  - Misoprostol: 2-5 μg/kg PO q8h（前列腺素類似物）",
        "止吐：Maropitant 1 mg/kg SC/IV q24h",
        "穿孔或無法控制的出血：緊急手術"
      ],
      chronic: [
        "長期胃酸抑制（4-8週或更長）",
        "治療原發病因（腫瘤、肝腎病等）",
        "避免使用胃毒性藥物",
        "若必須使用NSAIDs：選擇COX-2選擇性，併用胃保護劑",
        "飲食：少量多餐、易消化飲食"
      ]
    },
    prognosis: "取決於病因。藥物性潰瘍停藥後預後良好。腫瘤相關預後取決於腫瘤類型。穿孔預後謹慎。",
    pearls: [
      "NSAIDs + 皮質類固醇併用風險顯著增加",
      "BUN升高但Creatinine正常提示消化道出血",
      "肥大細胞瘤應列入鑑別診斷",
      "PPI比H2阻斷劑更有效抑制胃酸",
      "Sucralfate需空腹給予，會影響其他藥物吸收",
      "貓的胃潰瘍較少見但可發生"
    ],
    monitoring: ["PCV/TS", "糞便顏色", "食慾和嘔吐", "腹部疼痛", "內視鏡追蹤（嚴重病例）"],
    reference: "Cote E: Clinical Veterinary Advisor, 3rd Ed. Elsevier, 2015"
  },

  // ==================== 腸道疾病 ====================

  "inflammatory-bowel-disease": {
    zh: "發炎性腸病",
    en: "Inflammatory Bowel Disease (IBD)",
    definition: "一組以胃腸道黏膜慢性炎症細胞浸潤為特徵的疾病，導致持續或反覆的消化道症狀。需要組織病理學確診並排除其他原因。",
    synonyms: ["IBD", "慢性腸病", "Chronic Enteropathy", "淋巴細胞-漿細胞性腸炎", "嗜酸性腸炎"],
    epidemiology: {
      species: "犬貓皆常見",
      age: "中老年較常見，但任何年齡可發生",
      sex: "無明顯性別傾向",
      riskFactors: ["品種傾向（犬：German Shepherd、Basenji、Soft-Coated Wheaten Terrier、Shar-Pei、Boxer）", "品種傾向（貓：Siamese）", "遺傳因素", "腸道菌群失調"]
    },
    clinicalPresentation: {
      history: ["慢性（>3週）間歇性或持續性嘔吐和/或腹瀉", "體重減輕", "食慾改變（增加或減少）", "腸鳴音增加", "排氣增加", "小腸型腹瀉（量大、次數少）vs 大腸型（量少、次數多、裡急後重）"],
      physicalExam: ["體態評分下降", "腹部觸診：腸壁增厚、腸系膜淋巴結腫大", "被毛品質差", "可能有腹水（低蛋白血症）", "口腔潰瘍（貓嚴重病例）"]
    },
    pathophysiology: "遺傳易感性 + 環境觸發因素（飲食抗原、腸道菌群）→ 腸道免疫反應失調 → 黏膜屏障功能受損 → 抗原持續刺激 → 慢性炎症。炎症細胞類型決定分類：淋巴細胞-漿細胞性（最常見）、嗜酸性、肉芽腫性等。",
    diagnosis: {
      overview: "IBD是排除性診斷，需要組織病理學確認",
      differentials: ["食物反應性腸病", "抗生素反應性腸病", "腸道淋巴瘤", "腸道感染（Giardia、寄生蟲、細菌）", "胰外分泌功能不全", "甲狀腺功能亢進（貓）", "腸道異物"],
      initialDB: ["CBC（嗜酸性球？貧血？）", "生化（蛋白、肝腎功能）", "TLI（排除EPI）", "糞便檢查（寄生蟲、Giardia抗原）", "cobalamin/folate", "腹部超聲", "fPLI/cPLI（排除胰臟炎）"],
      advanced: ["上/下消化道內視鏡+活檢（金標準）", "或剖腹探查+全層活檢", "組織病理學（WSAVA標準化評分）", "FISH（細菌黏附）", "免疫組化（排除淋巴瘤）"]
    },
    treatment: {
      overview: "階梯式治療：飲食試驗 → 抗菌治療 → 免疫抑制",
      acute: [
        "排除感染（驅蟲、Giardia治療）",
        "飲食試驗（最少2-4週）：",
        "  - 新蛋白質飲食（Novel protein）",
        "  - 或水解蛋白飲食（Hydrolyzed protein）",
        "  - 嚴格限制，無零食",
        "若飲食無反應，考慮抗菌治療：",
        "  - Metronidazole: 10-15 mg/kg PO q12h x 2-4週",
        "  - 或 Tylosin: 10-20 mg/kg PO q12h"
      ],
      chronic: [
        "免疫抑制治療（飲食和抗菌無效時）：",
        "犬：",
        "  - Prednisone: 1-2 mg/kg PO q12h，逐漸減量",
        "  - Budesonide: 3 mg/m² PO q24h（局部作用，全身副作用較少）",
        "  - 難治性：加用 Azathioprine 2 mg/kg PO q24h（初始）→ q48h",
        "  - 或 Chlorambucil 4-6 mg/m² PO q48h",
        "貓：",
        "  - Prednisolone: 1-2 mg/kg PO q12h，逐漸減量",
        "  - Budesonide: 1 mg/cat PO q24h",
        "  - Chlorambucil: 2 mg/cat PO q48-72h（比Azathioprine安全）",
        "Cobalamin補充（若缺乏）：",
        "  - 犬：250-1500 μg SC q7d x 6週，然後q30d",
        "  - 貓：250 μg SC q7d x 6週",
        "益生菌可能有輔助效果",
        "嚴重低蛋白血症：見PLE治療"
      ]
    },
    prognosis: "多數可良好控制但需長期管理。預後因素：疾病嚴重度、對治療反應、低白蛋白血症（預後差）、組織學類型。嗜酸性腸炎通常對類固醇反應好。需要鑑別淋巴瘤（預後差）。",
    pearls: [
      "IBD和腸道淋巴瘤（尤其貓小細胞淋巴瘤）可能難以區分",
      "Cobalamin缺乏會影響治療反應，需要補充",
      "German Shepherd的IBD常較嚴重且難治",
      "Basenji的免疫增生性腸病預後較差",
      "飲食試驗需要嚴格執行才有診斷價值",
      "全層活檢比內視鏡活檢更能評估深層病變"
    ],
    monitoring: ["體重", "CCECAI或FCEAI臨床評分", "白蛋白", "Cobalamin", "臨床症狀"],
    reference: "Cote E: Clinical Veterinary Advisor, 3rd Ed. Elsevier, 2015; Washabau RJ et al: Endoscopic, biopsy, and histopathologic guidelines for the evaluation of gastrointestinal inflammation in companion animals. JVIM 24:10-26, 2010"
  },

  "protein-losing-enteropathy": {
    zh: "蛋白質流失性腸病",
    en: "Protein-Losing Enteropathy (PLE)",
    definition: "腸道過度流失蛋白質導致低白蛋白血症的綜合症，可由多種腸道疾病引起。",
    synonyms: ["PLE", "腸道蛋白流失症", "Intestinal Protein Loss"],
    epidemiology: {
      species: "犬較常見，貓少見",
      age: "中年犬較常見",
      sex: "無明顯性別傾向",
      riskFactors: ["品種傾向（Yorkshire Terrier、Soft-Coated Wheaten Terrier、Rottweiler、Basenji、Norwegian Lundehund）", "IBD", "腸道淋巴瘤", "淋巴管擴張", "消化道寄生蟲"]
    },
    clinicalPresentation: {
      history: ["慢性腹瀉（小腸型）", "體重減輕", "嘔吐", "腹部膨大（腹水）", "肢體水腫", "呼吸困難（胸水）", "食慾可能正常或下降"],
      physicalExam: ["消瘦", "腹水", "周邊水腫", "胸水（呼吸困難）", "腸壁增厚", "腸系膜淋巴結腫大", "被毛品質差"]
    },
    pathophysiology: "多種機制導致腸道蛋白流失：1）黏膜損傷（IBD、感染）→ 蛋白滲漏；2）淋巴管擴張或阻塞 → 富含蛋白的淋巴液漏入腸腔；3）腫瘤浸潤。低白蛋白血症 → 膠體滲透壓下降 → 水腫、腹水、胸水。同時可能流失免疫球蛋白、抗凝血因子、脂溶性維生素。",
    diagnosis: {
      overview: "確認低蛋白血症，排除其他原因，找出腸道病因",
      differentials: ["蛋白流失性腎病", "肝功能衰竭", "失血", "皮膚大面積傷口", "長期飢餓"],
      initialDB: ["血清蛋白（白蛋白<2.0 g/dL，球蛋白也常低）", "尿蛋白/肌酐比（排除腎流失）", "肝功能（排除肝病）", "膽固醇（常低）", "鈣（常低，低白蛋白校正後）", "糞便檢查", "cobalamin/folate", "腹部超聲（腸壁、淋巴結、淋巴管）"],
      advanced: ["上下消化道內視鏡+活檢", "組織病理學", "淋巴管造影（少用）"]
    },
    treatment: {
      overview: "治療原發腸道疾病 + 支持低白蛋白血症",
      acute: [
        "嚴重低白蛋白血症（<1.5 g/dL）伴腔體積液：",
        "  - 新鮮冷凍血漿 10-20 mL/kg（補充白蛋白短暫）",
        "  - 人工膠體（Hetastarch）5-10 mL/kg bolus",
        "  - 25% Human albumin（有過敏風險）",
        "腹水/胸水：治療性穿刺（若影響呼吸）",
        "輸液支持（注意膠體滲透壓）"
      ],
      chronic: [
        "飲食管理：",
        "  - 超低脂飲食（淋巴管擴張：脂肪<15%乾物質基準）",
        "  - 中鏈三酸甘油酯(MCT)補充（不經淋巴吸收）",
        "  - 高品質蛋白質",
        "  - 可能需水解蛋白或新蛋白飲食",
        "免疫抑制（若為IBD）：",
        "  - Prednisone/Prednisolone: 2 mg/kg PO q12h",
        "  - 常需加用第二線藥物：",
        "    Azathioprine（犬）: 2 mg/kg PO q24h",
        "    Chlorambucil（貓或犬）: 4-6 mg/m² PO q48h",
        "    Cyclosporine: 5 mg/kg PO q12-24h",
        "Cobalamin補充",
        "抗血栓（低白蛋白血症增加血栓風險）：",
        "  - Clopidogrel: 1-2 mg/kg PO q24h",
        "  - 或低劑量Aspirin: 0.5-1 mg/kg PO q24h",
        "營養補充：",
        "  - 脂溶性維生素（若嚴重吸收不良）",
        "  - 鈣和維生素D（若低鈣）"
      ]
    },
    prognosis: "預後謹慎至差，取決於病因。Yorkshire Terrier淋巴管擴張經飲食控制可良好。嚴重IBD或腫瘤預後較差。白蛋白<1.5 g/dL預後不良。血栓栓塞是重要併發症和死因。",
    pearls: [
      "白蛋白和球蛋白同時低提示腸道流失（肝病多見白蛋白低球蛋白正常或高）",
      "總鈣低但離子鈣可能正常（白蛋白結合鈣減少）",
      "血栓風險高：流失抗凝血因子，應考慮預防性抗血栓",
      "Yorkshire Terrier的淋巴管擴張對超低脂飲食反應可能很好",
      "Norwegian Lundehund有特殊的PLE/淋巴管擴張傾向",
      "治療反應可能需要4-6週才見效"
    ],
    monitoring: ["白蛋白（每1-2週）", "體重", "腹圍", "臨床症狀", "血栓警示症狀"],
    reference: "Cote E: Clinical Veterinary Advisor, 3rd Ed. Elsevier, 2015; Dossin O, Lavoue R: Protein-losing enteropathies in dogs. Vet Clin North Am Small Anim Pract 41:399-418, 2011"
  },

  "hemorrhagic-gastroenteritis": {
    zh: "出血性胃腸炎",
    en: "Hemorrhagic Gastroenteritis (HGE)",
    definition: "急性、嚴重的出血性腹瀉綜合症，特徵為血性腹瀉、嘔吐和快速血液濃縮。現也稱為急性出血性腹瀉綜合症(AHDS)。",
    synonyms: ["HGE", "AHDS", "Acute Hemorrhagic Diarrhea Syndrome", "出血性腸炎"],
    epidemiology: {
      species: "犬（貓罕見）",
      age: "青年至中年（2-4歲最常見）",
      sex: "無明顯性別傾向",
      riskFactors: ["小型犬種（Miniature Schnauzer、Yorkshire Terrier、Miniature Poodle、Maltese）", "焦慮性情", "都市環境", "先前HGE病史（可復發）"]
    },
    clinicalPresentation: {
      history: ["突發性血性腹瀉（「覆盆子果醬」樣）", "嘔吐", "嗜睡", "食慾廢絕", "數小時內快速惡化", "通常無發燒史"],
      physicalExam: ["血性腹瀉", "脫水", "心搏過速", "CRT延長", "腹部觸診可能疼痛", "體溫通常正常或略低", "休克徵象（嚴重病例）"]
    },
    pathophysiology: "病因不完全明確。可能與Clostridium perfringens腸毒素或其他細菌毒素有關。腸道黏膜急性壞死 → 大量蛋白質、液體和血液流入腸腔 → 血液濃縮（PCV可>60%）→ 低血容量性休克。不是典型的細菌性腸炎。",
    diagnosis: {
      overview: "臨床表現結合顯著血液濃縮，排除其他出血性腹瀉原因",
      differentials: ["犬小病毒腸炎", "腸套疊", "胃腸道異物/穿孔", "凝血障礙", "Addison病", "急性胰臟炎", "細菌性腸炎（Salmonella、Campylobacter）", "寄生蟲（鉤蟲大量感染）", "腸道腫瘤出血"],
      initialDB: ["PCV/TS（PCV顯著升高>55-60%，TS正常或低）", "血糖", "電解質", "糞便檢查（寄生蟲、Parvovirus快篩）", "血塗片"],
      advanced: ["凝血功能", "腹部X光/超聲", "糞便培養（若懷疑細菌感染）", "Cortisol基礎值或ACTH刺激試驗（排除Addison）"]
    },
    treatment: {
      overview: "積極輸液復甦是治療關鍵",
      acute: [
        "靜脈輸液（最重要）：",
        "  - 等張晶體液：休克劑量 60-90 mL/kg/h（第一小時）",
        "  - 之後根據脫水程度和持續流失調整",
        "  - 補鉀（低鉀常見）",
        "膠體液（嚴重病例）：",
        "  - Hetastarch 5-10 mL/kg bolus",
        "止吐：",
        "  - Maropitant 1 mg/kg SC/IV q24h",
        "  - Ondansetron 0.1-0.2 mg/kg IV q8-12h",
        "抗生素（爭議，但嚴重病例常用）：",
        "  - Ampicillin 22 mg/kg IV q8h",
        "  - 或 Metronidazole 10-15 mg/kg IV q12h",
        "胃腸保護：",
        "  - Omeprazole 1 mg/kg PO/IV q12-24h",
        "禁食12-24小時後逐漸恢復餵食"
      ],
      chronic: [
        "恢復期餵食：高消化性低脂飲食",
        "益生菌可能有益",
        "監測復發（可能再發）"
      ]
    },
    prognosis: "及時治療預後良好，多數犬24-72小時內顯著改善。死亡率<10%（及時治療）。可能復發。",
    pearls: [
      "PCV升高但TS正常或低是HGE特徵（與脫水不同）",
      "與Parvovirus鑑別：HGE通常無發燒、白血球正常、Parvo快篩陰性",
      "抗生素使用有爭議，但嚴重病例仍常使用預防繼發感染",
      "輸液反應通常很快，12-24小時內改善",
      "不要低估輸液需求，可能需要大量",
      "恢復後可正常餵食，無需長期飲食限制"
    ],
    monitoring: ["PCV/TS（每4-6小時直到穩定）", "電解質", "血糖", "尿量", "糞便性狀"],
    reference: "Cote E: Clinical Veterinary Advisor, 3rd Ed. Elsevier, 2015"
  },

  "colitis": {
    zh: "結腸炎",
    en: "Colitis",
    definition: "結腸黏膜的炎症，導致大腸型腹瀉（頻繁、量少、可能帶黏液或鮮血、裡急後重）。可為急性或慢性。",
    synonyms: ["Large Bowel Diarrhea", "大腸炎", "大腸型腹瀉"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡",
      sex: "無明顯性別傾向",
      riskFactors: ["飲食不當", "寄生蟲", "細菌感染", "應激", "品種傾向（犬：German Shepherd、Boxer - 組織細胞性潰瘍性結腸炎）"]
    },
    clinicalPresentation: {
      history: ["大腸型腹瀉特徵：", "  - 排便頻繁（>3-4次/日）", "  - 每次量少", "  - 裡急後重（tenesmus）", "  - 排便急迫感", "  - 黏液便", "  - 鮮血（hematochezia）", "體重通常維持（除非嚴重或慢性）", "嘔吐較少見"],
      physicalExam: ["腹部觸診通常無異常", "直腸檢查可能疼痛", "可能觸及增厚的結腸", "肛門區可能有糞便沾染"]
    },
    pathophysiology: "急性：感染、飲食、應激導致結腸黏膜炎症 → 分泌增加、吸收減少 → 腹瀉。慢性：可能與IBD、食物不耐受、菌群失調有關。組織細胞性潰瘍性結腸炎（Boxer、French Bulldog）：與黏膜相關大腸桿菌感染有關。",
    diagnosis: {
      overview: "區分急性vs慢性，排除感染和其他原因",
      differentials: ["感染性（Giardia、Tritrichomonas、Campylobacter、Salmonella、Clostridium、寄生蟲）", "飲食反應性", "IBD（結腸型）", "應激性結腸炎", "結腸腫瘤", "直腸息肉"],
      initialDB: ["糞便檢查（寄生蟲、Giardia抗原）", "糞便培養（Salmonella、Campylobacter）", "糞便Clostridium毒素", "直腸檢查", "糞便細胞學（炎症細胞、原蟲）"],
      advanced: ["結腸鏡+活檢", "腹部超聲", "FISH（E. coli，組織細胞性結腸炎）"]
    },
    treatment: {
      overview: "急性多可自限或飲食調整；慢性需針對病因",
      acute: [
        "急性結腸炎：",
        "  - 飲食：高纖維或低殘渣飲食試驗",
        "  - 驅蟲（經驗性）：Fenbendazole 50 mg/kg PO q24h x 5天",
        "  - Metronidazole: 10-15 mg/kg PO q12h x 5-7天",
        "  - Probiotics",
        "感染性（確診後）：",
        "  - Giardia：Fenbendazole或Metronidazole",
        "  - Tritrichomonas（貓）：Ronidazole 30 mg/kg PO q24h x 14天",
        "  - Clostridium：Metronidazole或Tylosin"
      ],
      chronic: [
        "飲食試驗（4-6週）：",
        "  - 高纖維飲食（添加車前子）",
        "  - 或新蛋白/水解蛋白飲食",
        "慢性特發性結腸炎：",
        "  - Sulfasalazine（犬）: 10-30 mg/kg PO q8-12h",
        "  - 或 Mesalamine（5-ASA）",
        "  - 難治性：Prednisone 1-2 mg/kg PO q12h",
        "組織細胞性潰瘍性結腸炎：",
        "  - Enrofloxacin 5-10 mg/kg PO q24h x 6-8週",
        "  - 預後可良好"
      ]
    },
    prognosis: "急性結腸炎預後良好。慢性結腸炎需要長期管理。組織細胞性潰瘍性結腸炎抗生素治療後預後良好。結腸腫瘤預後取決於類型和分期。",
    pearls: [
      "大腸型vs小腸型腹瀉區分很重要（見臨床表現）",
      "鮮血便提示結腸或直腸問題",
      "Tritrichomonas是貓慢性大腸型腹瀉的常見原因",
      "高纖維飲食對許多慢性結腸炎有效",
      "Boxer的組織細胞性結腸炎需長期Enrofloxacin治療",
      "直腸檢查是評估結腸疾病的重要步驟"
    ],
    monitoring: ["糞便性狀和頻率", "體重", "直腸檢查追蹤"],
    reference: "Cote E: Clinical Veterinary Advisor, 3rd Ed. Elsevier, 2015"
  },

  "constipation-megacolon": {
    zh: "便秘/巨結腸",
    en: "Constipation/Megacolon",
    definition: "便秘為排便困難或減少；巨結腸為結腸持續性擴張伴運動功能障礙，導致頑固性便秘。貓最常見。",
    synonyms: ["Obstipation", "頑固性便秘", "Feline Megacolon", "貓巨結腸"],
    epidemiology: {
      species: "貓最常見，犬少見",
      age: "中老年貓（平均5-8歲）",
      sex: "公貓略多（約70%）",
      riskFactors: ["肥胖", "脫水", "低纖維飲食", "缺乏運動", "疼痛性排便（骨盆骨折、肛門腺疾病）", "神經疾病", "骨盆狹窄（骨折後）", "特發性（最常見）"]
    },
    clinicalPresentation: {
      history: ["排便減少或無排便", "排便困難（tenesmus）", "排便時哭叫", "糞便乾硬", "可能有嘔吐", "食慾下降", "嗜睡", "可能有少量液狀糞便（繞過糞石）"],
      physicalExam: ["腹部觸診：堅硬擴張的結腸（充滿糞便）", "脫水", "體態評估", "直腸檢查：糞便嵌塞、骨盆狹窄評估", "神經學檢查（排除神經原因）", "肛門區檢查"]
    },
    pathophysiology: "特發性巨結腸：結腸平滑肌功能障礙 → 運動力下降 → 糞便滯留 → 水分過度吸收 → 糞便乾硬 → 進一步擴張 → 惡性循環。繼發性：骨盆狹窄、神經病變、代謝問題（低鉀、高鈣、甲狀腺功能低下）可導致。長期擴張 → 不可逆結腸肌肉損傷。",
    diagnosis: {
      overview: "臨床表現結合影像學確認，排除可治療原因",
      differentials: ["特發性巨結腸", "骨盆骨折/狹窄", "神經病變", "代謝性（低鉀、高鈣、甲狀腺功能低下）", "藥物性（Opioids、抗膽鹼藥）", "腫瘤", "直腸狹窄/異物"],
      initialDB: ["腹部X光（結腸擴張程度、糞便量、骨盆結構）", "生化（鉀、鈣、腎功能）", "T4（貓）", "直腸檢查", "神經學檢查"],
      advanced: ["骨盆X光（骨盆狹窄評估）", "腹部超聲", "結腸鏡（排除腫瘤/狹窄）"]
    },
    treatment: {
      overview: "解除糞便嵌塞 + 長期管理預防復發 + 嚴重病例手術",
      acute: [
        "糾正脫水和電解質失衡",
        "糞便嵌塞清除（可能需鎮靜/麻醉）：",
        "  - 溫鹽水灌腸（5-10 mL/kg）",
        "  - 手動碎解糞石（溫和）",
        "  - 避免使用磷酸鹽灌腸（對貓有毒）",
        "灌腸溶液選擇：",
        "  - 溫水或溫鹽水",
        "  - Docusate sodium（軟便劑）",
        "  - Lactulose溶液",
        "多次短療程比一次長時間更安全"
      ],
      chronic: [
        "飲食管理：",
        "  - 高纖維飲食（輕度病例）",
        "  - 或低殘渣飲食（減少糞便量）",
        "  - 增加水分攝入（濕食、飲水噴泉）",
        "緩瀉劑：",
        "  - Lactulose: 0.5 mL/kg PO q8-12h（調整至軟便）",
        "  - Polyethylene glycol(MiraLax): 1/8-1/4 tsp/cat PO q12-24h",
        "促動力藥：",
        "  - Cisapride: 2.5-5 mg/cat PO q8-12h",
        "  - Ranitidine: 1-2 mg/kg PO q12h（輕微促動力）",
        "軟便劑：",
        "  - Docusate sodium: 50 mg/cat PO q12-24h",
        "環境：充足乾淨的貓砂盆、減少應激",
        "手術（內科無效）：",
        "  - 結腸次全切除術（Subtotal colectomy）",
        "  - 術後最初可能腹瀉，多數長期預後良好"
      ]
    },
    prognosis: "輕度便秘：內科管理預後良好。巨結腸：內科可控制一段時間但多數最終需要手術。結腸次全切除術預後良好（>90%改善）。",
    pearls: [
      "貓巨結腸多為特發性（約60%）",
      "磷酸鹽灌腸（Fleet enema）對貓有致命危險（高磷、低鈣）",
      "不要過度灌腸，可能造成結腸損傷",
      "Cisapride是最有效的結腸促動力藥，但可能需要複方藥局配製",
      "結腸切除術後的腹瀉通常在數週至數月內改善",
      "骨盆狹窄嚴重時可能需要骨盆骨切開術"
    ],
    monitoring: ["排便頻率和性狀", "腹部觸診", "體重", "X光追蹤（若需要）"],
    reference: "Cote E: Clinical Veterinary Advisor, 3rd Ed. Elsevier, 2015; Washabau RJ: Feline constipation and idiopathic megacolon. In: Bonagura JD, Twedt DC: Kirk's Current Veterinary Therapy XV. Elsevier, 2014"
  },

  // ==================== 食道疾病 ====================

  "esophageal-foreign-body": {
    zh: "食道異物",
    en: "Esophageal Foreign Body",
    definition: "異物滯留於食道無法通過的危急狀況，可導致食道損傷、穿孔和嚴重併發症。",
    synonyms: ["食道卡異物", "Esophageal Obstruction", "食道阻塞"],
    epidemiology: {
      species: "犬最常見，貓較少",
      age: "年輕犬最常見（好奇亂吃）",
      sex: "無明顯性別傾向",
      riskFactors: ["小型犬（相對食道直徑較小）", "年輕好動犬隻", "搶食行為", "常見異物：骨頭（最常見）、魚鉤、針、玩具、食物塊"]
    },
    clinicalPresentation: {
      history: ["進食後急性不適", "流涎", "吞嚥困難", "乾嘔", "反流（非嘔吐）", "頸部不適", "拒食", "煩躁不安", "咳嗽（若壓迫氣管）"],
      physicalExam: ["流涎", "吞嚥痛", "頸部觸診可能有疼痛", "可能觸及頸部異物（頸段食道）", "脫水", "發燒（若有穿孔或感染）", "皮下氣腫（若有穿孔）"]
    },
    pathophysiology: "異物滯留常見部位：胸腔入口、心基部、食道裂孔（生理性狹窄處）。異物壓迫食道黏膜 → 缺血 → 壞死 → 可能穿孔 → 縱隔炎、胸膜炎、膿胸（嚴重併發症）。尖銳異物直接穿刺食道壁。時間越長損傷越嚴重。",
    diagnosis: {
      overview: "病史高度提示，影像學確認位置和併發症",
      differentials: ["食道狹窄", "食道腫瘤", "食道裂孔疝", "血管環異常", "食道運動障礙", "口咽異物"],
      initialDB: ["頸胸部X光（正側位）：顯影異物、食道擴張、氣體積聚", "注意縱隔、胸腔積液/氣腫", "避免使用鋇劑（若懷疑穿孔）"],
      advanced: ["內視鏡（診斷+治療金標準）", "CT（評估穿孔和併發症）", "碘對比劑造影（若懷疑穿孔）"]
    },
    treatment: {
      overview: "這是急症！盡快取出異物，評估和處理併發症",
      acute: [
        "穩定：輸液、止痛、禁食",
        "異物取出（首選內視鏡）：",
        "  - 全身麻醉",
        "  - 內視鏡引導下取出",
        "  - 若無法經口取出，可嘗試推入胃內（鈍性異物）",
        "  - 骨頭可能需碎解後取出",
        "內視鏡失敗或穿孔時：手術取出",
        "  - 頸段：頸側切開",
        "  - 胸段：開胸術",
        "取出後內視鏡評估食道損傷程度"
      ],
      chronic: [
        "術後管理：",
        "  - 輕度損傷：禁食24小時後開始流質餵食",
        "  - 中重度損傷：",
        "    - 胃管餵食7-14天",
        "    - 或經皮胃造廔管(PEG tube)",
        "  - 廣譜抗生素（若懷疑穿孔或嚴重損傷）",
        "  - 胃酸抑制劑（減少反流）",
        "  - Sucralfate懸液",
        "食道狹窄預防/治療：",
        "  - Prednisone: 0.5-1 mg/kg PO q12h x 2-3週",
        "  - 球囊擴張（若形成狹窄）"
      ]
    },
    prognosis: "早期取出（<24小時）且無穿孔預後良好。滯留時間長、穿孔、嚴重壞死預後謹慎至差。食道狹窄是常見併發症（約30-50%嚴重損傷病例）。",
    pearls: [
      "時間是關鍵 - 越早取出，併發症越少",
      "骨頭是最常見的食道異物",
      "不要嘗試讓動物自行嘔出，可能加重損傷",
      "皮下氣腫提示穿孔",
      "內視鏡是首選取出方法",
      "食道狹窄可能在取出後1-3週形成"
    ],
    monitoring: ["食慾和吞嚥功能", "發燒", "胸腔X光（若有穿孔風險）", "反流症狀", "食道狹窄徵象"],
    reference: "Cote E: Clinical Veterinary Advisor, 3rd Ed. Elsevier, 2015"
  },

  // ==================== 胰臟疾病 ====================

  "exocrine-pancreatic-insufficiency": {
    zh: "胰外分泌功能不全",
    en: "Exocrine Pancreatic Insufficiency (EPI)",
    definition: "胰臟外分泌功能不足，導致消化酶缺乏，造成營養吸收不良和消化不良的慢性疾病。",
    synonyms: ["EPI", "胰臟功能不全", "Pancreatic Insufficiency", "消化酶缺乏"],
    epidemiology: {
      species: "犬較常見，貓少見",
      age: "犬：年輕至中年（German Shepherd 1-5歲）；貓：中老年",
      sex: "無明顯性別傾向",
      riskFactors: ["犬：品種傾向（German Shepherd、Rough Collie - 胰腺萎縮）", "貓：慢性胰臟炎後", "胰臟切除術後"]
    },
    clinicalPresentation: {
      history: ["慢性小腸型腹瀉（量大、油脂性）", "體重減輕（儘管食慾旺盛或增加）", "多食（polyphagia）", "脂肪便（steatorrhea）- 灰白色油膩便", "可能有食糞症", "被毛品質差", "腸鳴音增加"],
      physicalExam: ["消瘦/體態評分低", "被毛乾燥粗糙", "可能有皮屑", "腹部觸診通常無異常", "肛門區可能有油脂性糞便沾染"]
    },
    pathophysiology: "犬：胰腺腺泡萎縮（PAA，遺傳性，最常見於German Shepherd）或慢性胰臟炎 → 外分泌組織喪失>90% → 消化酶（脂肪酶、蛋白酶、澱粉酶）缺乏 → 脂肪、蛋白質、碳水化合物消化不良 → 吸收不良 → 腹瀉、消瘦。繼發：腸道菌群過度生長、Cobalamin缺乏常見。",
    diagnosis: {
      overview: "TLI是診斷金標準",
      differentials: ["IBD", "腸道淋巴瘤", "寄生蟲", "SIBO", "其他吸收不良疾病"],
      initialDB: ["血清TLI（Trypsin-Like Immunoreactivity）：", "  - 犬：<2.5 μg/L（正常5.7-45.2）= EPI", "  - 貓：<8 μg/L（正常12-82）= EPI", "  - 需空腹12小時採血", "Cobalamin（常低）", "Folate（可能高，提示SIBO）"],
      advanced: ["糞便彈性蛋白酶（Fecal elastase）", "糞便脂肪定量（較少用）", "腹部超聲（胰臟萎縮）"]
    },
    treatment: {
      overview: "終身消化酶補充 + Cobalamin補充 + 飲食管理",
      acute: [
        "消化酶補充（終身）：",
        "  - 粉狀胰酶製劑（Pancreatin/Pancrelipase）",
        "  - 劑量：初始 1-2 茶匙/餐（犬），1/2-1 茶匙/餐（貓）",
        "  - 與食物混合餵食",
        "  - 根據反應調整劑量",
        "生豬/牛胰臟（替代品，若成本考量）：",
        "  - 30-90 g/餐（需冷凍保存）"
      ],
      chronic: [
        "Cobalamin補充（若缺乏，常見）：",
        "  - 犬：250-1500 μg SC q7d x 6週，然後q30d",
        "  - 貓：250 μg SC q7d x 6週",
        "  - 或口服Cobalamin（較高劑量）",
        "飲食：",
        "  - 高消化性、低纖維",
        "  - 適度脂肪（低脂飲食不一定更好）",
        "  - 少量多餐",
        "抗生素（若有SIBO）：",
        "  - Tylosin 10-20 mg/kg PO q12h",
        "  - 或Metronidazole 10-15 mg/kg PO q12h",
        "維生素補充（若嚴重吸收不良）：",
        "  - 脂溶性維生素（A、D、E、K）"
      ]
    },
    prognosis: "經適當治療預後良好，多數犬貓可維持良好生活品質。需要終身酶補充。部分病例可能難以完全控制體重。",
    pearls: [
      "German Shepherd的PAA有遺傳性，不建議繁殖",
      "TLI是種屬特異性的，犬貓需要分別檢測",
      "Cobalamin缺乏會影響治療反應，必須補充",
      "初始治療可能需要2-4週才見明顯改善",
      "酶預先與食物混合不會增加效果",
      "貓EPI通常繼發於慢性胰臟炎，可能同時有糖尿病"
    ],
    monitoring: ["體重", "糞便性狀", "Cobalamin（治療初期每月）", "食慾和精神狀態"],
    reference: "Cote E: Clinical Veterinary Advisor, 3rd Ed. Elsevier, 2015; Westermarck E, Wiberg M: Exocrine pancreatic insufficiency in dogs. Vet Clin North Am Small Anim Pract 33:1165-1179, 2003"
  },

  // ==================== 肝膽疾病 ====================

  "hepatic-lipidosis": {
    zh: "肝臟脂肪沉積症",
    en: "Hepatic Lipidosis",
    definition: "肝臟脂肪過度堆積導致肝功能障礙的疾病，最常見於厭食後的過重貓。是貓最常見的肝臟疾病。",
    synonyms: ["Feline Hepatic Lipidosis", "貓脂肪肝", "Fatty Liver Disease", "FHL"],
    epidemiology: {
      species: "貓（犬罕見且通常繼發於其他疾病）",
      age: "中年貓（平均7歲）",
      sex: "無明顯性別傾向，但過重貓多見",
      riskFactors: ["過重/肥胖（最重要）", "厭食超過2-7天", "應激事件（搬家、新寵物、環境變化）", "潛在疾病（糖尿病、胰臟炎、IBD、膽管炎、腫瘤）"]
    },
    clinicalPresentation: {
      history: ["食慾下降或完全厭食（2天至數週）", "體重減輕", "嘔吐", "嗜睡", "近期應激或環境變化", "可能有潛在疾病症狀"],
      physicalExam: ["黃疸（常見，80-90%）", "肝臟腫大", "消瘦（但可能仍過重）", "脫水", "虛弱", "肌肉萎縮", "嗜睡", "流涎（噁心）", "腹水（嚴重低白蛋白病例）", "肝腦病徵象（嚴重病例）"]
    },
    pathophysiology: "厭食 → 外周脂肪動員增加 → 游離脂肪酸湧入肝臟 → 肝臟代謝能力不足（貓缺乏足夠的脂蛋白合成和分泌能力）→ 三酸甘油酯堆積於肝細胞 → 肝細胞腫脹和功能障礙 → 膽汁淤積和黃疸。過重貓脂肪動員更多，風險更高。厭食本身又加重病情（惡性循環）。",
    diagnosis: {
      overview: "臨床懷疑結合實驗室和影像學，肝臟細胞學或活檢確診",
      differentials: ["膽管炎/膽管肝炎", "肝腫瘤", "淋巴瘤", "胰臟炎", "三體炎（胰臟炎+膽管炎+IBD）", "糖尿病"],
      initialDB: ["CBC（可能有Heinz小體）", "生化：ALT↑、ALP↑↑（可達10倍以上）、膽紅素↑、低鉀常見", "凝血功能（可能延長）", "腹部超聲（肝臟高回聲、腫大）", "尿液分析"],
      advanced: ["肝臟細針抽吸細胞學（可確診，但有出血風險）", "肝臟活檢", "Cobalamin/Folate", "fPLI（排除胰臟炎）", "尋找潛在疾病"]
    },
    treatment: {
      overview: "關鍵是早期積極營養支持（餵食管）+ 支持治療",
      acute: [
        "輸液糾正脫水和電解質（尤其低鉀）：",
        "  - 補鉀：20-40 mEq/L",
        "  - 補磷（若低）",
        "營養支持（最關鍵）：",
        "  - 食道餵食管或胃造廔管（PEG）：首選",
        "  - 不要強迫口服餵食（應激+嗆咳風險）",
        "  - 不要使用食慾刺激劑替代餵食管",
        "餵食計畫：",
        "  - 高蛋白飲食（30-40%蛋白質）",
        "  - 起始：1/3計算熱量需求，3-5天增至全量",
        "  - RER = 70 × (體重kg)^0.75",
        "  - 每日分6-8餐餵食",
        "止吐：Maropitant 1 mg/kg SC/IV q24h",
        "維生素補充：",
        "  - Vitamin K1: 0.5-1.5 mg/kg SC q12h x 3劑（若凝血異常）",
        "  - Vitamin B complex",
        "  - Vitamin E: 10 IU/kg/day"
      ],
      chronic: [
        "持續管餵餵食4-6週或更長",
        "肝臟支持：",
        "  - SAMe (S-adenosylmethionine): 20 mg/kg PO q24h 空腹",
        "  - Ursodiol: 10-15 mg/kg PO q24h（若膽汁淤積明顯）",
        "L-Carnitine: 250-500 mg/cat PO q24h（可能有助脂肪代謝）",
        "治療潛在疾病",
        "逐漸過渡到自主進食後移除餵食管"
      ]
    },
    prognosis: "積極營養支持存活率約60-80%。預後不良因素：嚴重低鉀、嚴重低磷、肝腦病、嚴重凝血障礙、潛在疾病（如淋巴瘤）。恢復後預防復發很重要。",
    pearls: [
      "「不要讓過重貓厭食超過2天」是重要的主人教育",
      "餵食管是救命措施，不是最後手段",
      "強迫口服餵食會增加肝腦病和嗆咳風險",
      "ALP升高通常比ALT更顯著（貓特點）",
      "約50%有潛在疾病誘發厭食",
      "恢復需要4-6週，主人需要耐心和配合"
    ],
    monitoring: ["體重", "肝指數（每週）", "電解質（尤其鉀）", "進食量和嘔吐", "黃疸程度", "神經狀態"],
    reference: "Cote E: Clinical Veterinary Advisor, 3rd Ed. Elsevier, 2015; Center SA: Feline hepatic lipidosis. Vet Clin North Am Small Anim Pract 35:225-269, 2005"
  },

  "portosystemic-shunt": {
    zh: "肝門脈分流",
    en: "Portosystemic Shunt (PSS)",
    definition: "門脈血液繞過肝臟直接進入體循環的異常血管通道，導致肝臟功能降低和全身性毒素（如氨）累積。",
    synonyms: ["PSS", "Portosystemic Vascular Anomaly", "PSVA", "肝分流", "Liver Shunt", "門體分流"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "先天性：年輕（多在1歲前診斷）；後天性：任何年齡",
      sex: "無明顯性別傾向",
      riskFactors: ["先天性肝外分流：小型犬（Yorkshire Terrier、Maltese、Shih Tzu、Miniature Schnauzer、Pug）", "先天性肝內分流：大型犬（Irish Wolfhound、Golden Retriever、Labrador、Australian Cattle Dog）", "貓較少見（波斯貓、喜馬拉雅貓略多）", "後天性：門脈高壓（肝硬化等）"]
    },
    clinicalPresentation: {
      history: ["生長遲緩", "體型小於同窩", "間歇性神經症狀（餐後或蛋白攝入後惡化）", "行為異常（呆滯、盯視、轉圈）", "癲癇", "失明", "下泌尿道症狀（尿結石，尿酸銨）", "多尿多渴", "嘔吐、腹瀉", "流涎（貓）"],
      physicalExam: ["體型小", "肌肉發育不良", "可能有神經症狀", "麻醉恢復延遲史", "可能有銅色虹膜（貓）", "肝臟小（先天性）或正常/大（後天性）"]
    },
    pathophysiology: "門脈血液繞過肝臟 → 1）毒素（氨、芳香族氨基酸、假性神經傳導物質）直接進入體循環 → 肝腦病；2）肝臟營養因子減少 → 肝臟發育不良或萎縮；3）尿酸代謝異常 → 尿酸銨結石。先天性：胚胎期血管未正常閉合；後天性：門脈高壓導致側枝循環開放。",
    diagnosis: {
      overview: "臨床懷疑結合肝功能檢測和影像學確認分流",
      differentials: ["其他肝臟疾病", "腎衰竭（尿素氮升高）", "特發性癲癇", "中毒", "代謝性腦病"],
      initialDB: ["CBC（可能有輕度非再生性貧血、紅血球小）", "生化：BUN低、白蛋白低、肝指數輕度升高或正常、膽固醇低、血糖低", "尿液分析（尿酸銨結晶、尿比重低）", "空腹和餐後膽汁酸（顯著升高）", "空腹血氨（升高）"],
      advanced: ["腹部超聲（尋找分流血管、小肝、腎結石）", "CT血管造影（金標準定位分流）", "門脈造影（手術中）", "肝臟活檢"]
    },
    treatment: {
      overview: "手術結紮/閉塞分流血管是根本治療；內科管理肝腦病",
      acute: [
        "肝腦病急性發作：",
        "  - 停止蛋白攝入",
        "  - 輸液（避免乳酸林格，用0.9% NaCl或含葡萄糖液）",
        "  - Lactulose: 0.5 mL/kg PO q8h 或灌腸",
        "  - 抗生素減少產氨菌：",
        "    Metronidazole 7.5 mg/kg PO q12h",
        "    或 Neomycin 20 mg/kg PO q8h",
        "  - 癲癇控制（避免使用肝代謝藥物）：",
        "    Levetiracetam 20-60 mg/kg IV",
        "  - 低血糖處理"
      ],
      chronic: [
        "內科管理（術前或不適合手術）：",
        "  - 蛋白限制飲食（乳蛋白和植物蛋白較好）",
        "  - Lactulose: 0.5 mL/kg PO q8-12h（調整至每日2-3次軟便）",
        "  - 抗生素：Metronidazole或Amoxicillin",
        "  - SAMe補充",
        "手術治療：",
        "  - Ameroid constrictor：漸進性閉塞",
        "  - Cellophane banding：漸進性閉塞",
        "  - 部分或完全結紮",
        "  - 介入性栓塞（肝內分流）",
        "術後監測門脈高壓徵象",
        "術後膽汁酸可能持續異常（肝臟發育不完全）"
      ]
    },
    prognosis: "手術治療預後良好（80-90%臨床改善）。單一肝外分流手術預後最好。多發性後天分流預後較差。肝內分流手術較複雜。單純內科治療可維持部分病例但長期預後較差。",
    pearls: [
      "餐後膽汁酸是良好的篩檢工具",
      "血氨升高但膽汁酸正常需考慮尿素循環酶缺陷",
      "貓PSS較犬少見但臨床表現類似（常見流涎）",
      "術前穩定很重要，嚴重肝腦病需先內科控制",
      "術後「分流性腦病」可能發生（快速閉塞導致門脈高壓）",
      "年輕時手術預後比年長好（肝臟仍可發育）"
    ],
    monitoring: ["神經狀態", "膽汁酸（術後3個月）", "血氨", "肝指數", "腹部超聲"],
    reference: "Cote E: Clinical Veterinary Advisor, 3rd Ed. Elsevier, 2015; Berent AC, Tobias KM: Portosystemic vascular anomalies. Vet Clin North Am Small Anim Pract 39:513-541, 2009"
  },

  "cholangiohepatitis": {
    zh: "膽管肝炎",
    en: "Cholangiohepatitis",
    definition: "膽道系統和肝臟的炎症性疾病，貓最常見的肝膽疾病之一。可分為中性球性（急性/化膿性）和淋巴細胞性（慢性）兩大類。",
    synonyms: ["Cholangitis", "膽管炎", "Feline Cholangitis Complex", "貓膽管炎複合症"],
    epidemiology: {
      species: "貓最常見，犬較少（犬多見慢性肝炎）",
      age: "中性球性：年輕至中年；淋巴細胞性：中老年",
      sex: "公貓略多（中性球性）",
      riskFactors: ["腸道疾病（IBD）", "胰臟炎", "膽道結構異常", "細菌上行感染", "可能與免疫機制有關（淋巴細胞性）"]
    },
    clinicalPresentation: {
      history: ["食慾下降或厭食", "嘔吐", "嗜睡", "體重減輕", "黃疸", "中性球性：急性起病、發燒；淋巴細胞性：慢性病程、間歇性症狀"],
      physicalExam: ["黃疸", "肝臟腫大或萎縮", "腹部觸診疼痛（中性球性）", "發燒（中性球性常見）", "脫水", "可能有腹水"]
    },
    pathophysiology: "中性球性：細菌從腸道經膽管上行感染（常見大腸桿菌、腸球菌）→ 急性化膿性炎症 → 膽汁淤積和肝細胞損傷。淋巴細胞性：可能為免疫介導，也可能是中性球性的慢性演變 → 門脈區淋巴細胞和漿細胞浸潤 → 進展至肝硬化。「三體炎」：膽管炎 + 胰臟炎 + IBD 常同時存在。",
    diagnosis: {
      overview: "需要肝臟活檢確定類型，但臨床可初步區分",
      differentials: ["肝脂肪沉積症", "肝臟腫瘤/淋巴瘤", "FIP", "肝臟毒素", "其他膽道疾病"],
      initialDB: ["CBC：中性球性可見白血球增多、左移；淋巴細胞性白血球正常", "生化：ALT↑、ALP↑、GGT↑、膽紅素↑", "腹部超聲：膽管擴張、膽囊壁增厚、肝臟回聲改變", "凝血功能", "尿液分析"],
      advanced: ["肝臟細針抽吸細胞學", "肝臟活檢（金標準，區分類型）", "膽汁培養和敏感試驗", "fPLI（排除胰臟炎）", "Cobalamin/Folate（評估腸道）"]
    },
    treatment: {
      overview: "中性球性需抗生素；淋巴細胞性需免疫抑制",
      acute: [
        "中性球性膽管炎：",
        "  - 抗生素（長療程4-6週）：",
        "    - Amoxicillin-Clavulanate: 12.5-25 mg/kg PO q12h",
        "    - + Metronidazole: 7.5-10 mg/kg PO q12h",
        "    - 或 Enrofloxacin + Metronidazole",
        "  - 輸液支持",
        "  - 止吐：Maropitant",
        "  - 營養支持（可能需餵食管，因常合併肝脂肪沉積）",
        "淋巴細胞性膽管炎（及慢性期）：",
        "  - Prednisolone: 1-2 mg/kg PO q12h，逐漸減量",
        "  - 難治性可加用Chlorambucil",
        "共同治療：",
        "  - Ursodiol: 10-15 mg/kg PO q24h（利膽、肝保護）",
        "  - SAMe: 90 mg/cat PO q24h 空腹",
        "  - Vitamin K1（若凝血異常）",
        "  - 治療合併的胰臟炎/IBD"
      ],
      chronic: [
        "長期肝臟支持：",
        "  - Ursodiol持續使用",
        "  - SAMe或Silybin",
        "飲食：高品質蛋白質、適度脂肪",
        "監測和治療「三體炎」的各組成部分"
      ]
    },
    prognosis: "中性球性：及時抗生素治療預後良好，但需長療程避免復發。淋巴細胞性：預後較謹慎，可能進展至肝硬化，但許多貓可長期管理。「三體炎」需要同時處理三個器官系統。",
    pearls: [
      "貓的膽管和胰管共同開口，易發生「三體炎」",
      "中性球性較急性，淋巴細胞性較慢性",
      "膽汁培養陽性率不高，經驗性抗生素常需要",
      "淋巴細胞性膽管炎和低度淋巴瘤可能難以區分",
      "肝脂肪沉積常與膽管炎同時存在",
      "Ursodiol對貓膽管疾病有良好證據支持"
    ],
    monitoring: ["肝指數", "膽紅素", "超聲追蹤", "體重和食慾", "Cobalamin"],
    reference: "Cote E: Clinical Veterinary Advisor, 3rd Ed. Elsevier, 2015; Rothuizen J et al: WSAVA Standards for Clinical and Histological Diagnosis of Canine and Feline Liver Diseases. Saunders, 2006"
  },

  "copper-storage-hepatopathy": {
    zh: "銅儲積性肝病",
    en: "Copper Storage Hepatopathy",
    definition: "肝臟銅異常蓄積導致肝細胞損傷和進行性肝病的疾病。可為原發性（遺傳性）或繼發於膽汁淤積。",
    synonyms: ["Copper-Associated Hepatitis", "銅中毒性肝病", "Copper Toxicosis", "銅蓄積症"],
    epidemiology: {
      species: "犬（貓罕見）",
      age: "中年（通常3-7歲出現症狀）",
      sex: "母犬可能略多（某些品種）",
      riskFactors: ["品種傾向：Bedlington Terrier（COMMD1基因突變）、West Highland White Terrier、Skye Terrier、Doberman Pinscher、Labrador Retriever、Dalmatian", "高銅飲食（長期）", "膽汁淤積性疾病（繼發性）"]
    },
    clinicalPresentation: {
      history: ["可能長期無症狀", "慢性進行性症狀：", "  - 食慾下降", "  - 體重減輕", "  - 嘔吐", "  - 多尿多渴", "  - 黃疸", "急性危機（溶血、肝衰竭）可能是首發表現"],
      physicalExam: ["黃疸", "肝臟腫大或（晚期）萎縮", "腹水", "消瘦", "急性期可能有溶血性貧血表現（蒼白、黃疸）"]
    },
    pathophysiology: "原發性：遺傳性銅代謝缺陷（如Bedlington Terrier的COMMD1基因突變）→ 膽汁銅排泄減少 → 肝細胞銅蓄積。繼發性：膽汁淤積 → 膽汁銅排泄障礙 → 銅蓄積。銅蓄積 → 氧化損傷 → 肝細胞壞死 → 慢性肝炎 → 肝硬化 → 肝衰竭。急性大量銅釋放可導致溶血性危機。",
    diagnosis: {
      overview: "肝臟活檢銅定量是金標準",
      differentials: ["其他慢性肝炎", "藥物性肝病", "感染性肝炎", "膽管炎", "肝腫瘤"],
      initialDB: ["CBC（可能有再生性貧血、Heinz小體）", "生化：ALT↑、ALP↑、膽紅素↑（晚期）、白蛋白↓（晚期）", "凝血功能", "腹部超聲"],
      advanced: ["肝臟活檢+組織病理學（銅染色：Rhodanine、Rubeanic acid）", "肝臟銅定量（金標準）：", "  - 正常：<400 μg/g乾重", "  - 升高：400-1000 μg/g", "  - 顯著升高：>1000-2000 μg/g（Bedlington可>10000）", "遺傳檢測（Bedlington Terrier）"]
    },
    treatment: {
      overview: "減少銅攝入 + 銅螯合治療 + 肝臟支持",
      acute: [
        "急性肝衰竭/溶血危機：",
        "  - 輸液支持",
        "  - 輸血（若嚴重溶血）",
        "  - 止吐、肝臟支持",
        "  - 治療肝腦病（若有）"
      ],
      chronic: [
        "銅螯合劑（主要治療）：",
        "  - D-Penicillamine: 10-15 mg/kg PO q12h 空腹",
        "    （副作用：嘔吐、食慾下降，需與食物間隔）",
        "  - Trientine: 10-15 mg/kg PO q12h（副作用較少）",
        "鋅補充（阻止銅吸收）：",
        "  - Zinc gluconate/acetate: 50-100 mg元素鋅 PO q12h",
        "  - 不可與銅螯合劑同時給予（間隔2小時）",
        "  - 可用於維持期或無法耐受螯合劑時",
        "飲食：",
        "  - 低銅飲食（避免肝臟、貝類、堅果）",
        "  - 處方肝臟飲食",
        "肝臟支持：",
        "  - SAMe: 20 mg/kg PO q24h",
        "  - Ursodiol: 10-15 mg/kg PO q24h",
        "  - Vitamin E: 10 IU/kg PO q24h（抗氧化）"
      ]
    },
    prognosis: "早期診斷和治療預後可良好。已有肝硬化預後較差。Bedlington Terrier若未治療可能致命。定期監測和終身治療是必要的。",
    pearls: [
      "Bedlington Terrier的COMMD1檢測可用於篩檢和繁殖決策",
      "肝臟銅定量需要足夠組織量，需向實驗室確認",
      "D-Penicillamine空腹給予效果最好但胃腸副作用多",
      "鋅治療需要數月才能降低肝臟銅含量",
      "繼發性銅蓄積治療原發病更重要",
      "飲食中銅含量往往被低估（自來水管、飼料添加）"
    ],
    monitoring: ["肝指數（每1-2個月）", "肝臟活檢銅定量（每6-12個月，評估治療效果）", "鋅治療時監測血清鋅"],
    reference: "Cote E: Clinical Veterinary Advisor, 3rd Ed. Elsevier, 2015; Fieten H et al: Canine models of copper toxicosis for understanding mammalian copper metabolism. Mamm Genome 23:62-75, 2012"
  },

  // ==================== 肛門直腸疾病 ====================

  "anal-sac-disease": {
    zh: "肛門腺疾病",
    en: "Anal Sac Disease",
    definition: "肛門腺（肛門囊）的疾病，包括嵌塞、感染（肛門腺炎）和膿腫形成。是小動物常見的問題。",
    synonyms: ["肛門囊疾病", "Anal Gland Disease", "Anal Sac Impaction", "肛門腺嵌塞", "Anal Sac Abscess"],
    epidemiology: {
      species: "犬最常見，貓較少見",
      age: "任何年齡",
      sex: "無明顯性別傾向",
      riskFactors: ["小型犬種", "肥胖", "軟便或腹瀉（無法自然排空）", "過敏性皮膚病", "解剖異常（腺管狹窄）", "低纖維飲食"]
    },
    clinicalPresentation: {
      history: ["摩擦屁股（scooting）", "過度舔肛門區", "排便困難或疼痛", "尾根或肛門區腫脹", "坐立不安", "追咬尾巴", "膿腫破裂後可見肛門旁傷口"],
      physicalExam: ["肛門腺腫大、堅硬（嵌塞）", "觸診疼痛（感染/膿腫）", "肛門旁紅腫（膿腫）", "可能有膿性或血性分泌物", "發燒（感染嚴重時）", "肛門旁皮膚破潰（膿腫破裂）"]
    },
    pathophysiology: "正常肛門腺在排便時被擠壓排空。嵌塞：腺體分泌物濃稠或排出口阻塞 → 腺體腫脹 → 不適。感染：細菌入侵（常為糞便菌群）→ 肛門腺炎 → 可能形成膿腫 → 可能穿破皮膚形成廔管。",
    diagnosis: {
      overview: "直腸檢查和肛門腺擠壓即可診斷",
      differentials: ["肛門周圍廔管", "肛門腫瘤（尤其肛門囊腺癌）", "會陰疝", "直腸脫出", "肛門周圍皮膚感染"],
      initialDB: ["直腸檢查和肛門腺觸診", "肛門腺內容物檢查（正常為棕色糊狀，感染為膿性或血性）"],
      advanced: ["分泌物細胞學和培養（反覆感染時）", "腹部/會陰超聲（排除腫瘤）", "直腸鏡（排除直腸疾病）"]
    },
    treatment: {
      overview: "擠壓排空 + 沖洗（感染時）+ 抗生素（膿腫）+ 必要時手術",
      acute: [
        "肛門腺嵌塞：",
        "  - 手動擠壓排空（外部或直腸內）",
        "  - 嚴重嵌塞可能需鎮靜",
        "肛門腺炎/膿腫：",
        "  - 擠壓排空（可能需鎮靜/止痛）",
        "  - 生理鹽水或稀釋Chlorhexidine沖洗",
        "  - 抗生素注入（如Panalog）",
        "  - 全身抗生素（膿腫）：",
        "    Amoxicillin-Clavulanate 12.5-25 mg/kg PO q12h x 7-14天",
        "  - 熱敷促進引流",
        "  - 膿腫破裂：清創、引流、抗生素"
      ],
      chronic: [
        "反覆嵌塞的預防：",
        "  - 定期擠壓（每4-8週）",
        "  - 增加飲食纖維",
        "  - 體重管理",
        "反覆感染或嚴重病例：",
        "  - 肛門腺切除術（Anal sacculectomy）",
        "  - 併發症：暫時性或永久性大便失禁（<5%）"
      ]
    },
    prognosis: "單純嵌塞預後良好。反覆感染可考慮手術切除。肛門腺切除術成功率高但有大便失禁風險。",
    pearls: [
      "定期美容院擠壓可能不必要且可能造成創傷",
      "過敏性皮膚病常與反覆肛門腺問題相關",
      "老年犬肛門腺腫塊需排除腺癌",
      "貓肛門腺問題較少但可發生",
      "肛門腺分泌物有強烈臭味是正常的",
      "雙側同時切除比單側有較高大便失禁風險"
    ],
    monitoring: ["症狀復發", "肛門區檢查", "定期擠壓（若有嵌塞傾向）"],
    reference: "Cote E: Clinical Veterinary Advisor, 3rd Ed. Elsevier, 2015"
  },

  "rectal-prolapse": {
    zh: "直腸脫出",
    en: "Rectal Prolapse",
    definition: "直腸黏膜或全層經肛門脫出體外的病況，可為部分（僅黏膜）或完全（全層）脫出。",
    synonyms: ["直腸脫垂", "Rectal Prolapse", "脫肛"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "幼年動物較常見（腸道寄生蟲相關）",
      sex: "無明顯性別傾向",
      riskFactors: ["腸道寄生蟲（幼年動物最常見原因）", "嚴重腹瀉", "便秘和裡急後重", "難產", "下泌尿道疾病（裡急後重）", "直腸/結腸腫瘤", "會陰疝"]
    },
    clinicalPresentation: {
      history: ["肛門突出紅色腫塊", "排便困難或裡急後重", "腹瀉或便秘史", "可能有血便或黏液便", "舔肛門區"],
      physicalExam: ["圓柱形紅色組織從肛門突出", "部分脫出：僅黏膜", "完全脫出：全層直腸壁", "組織可能水腫、乾燥或壞死", "可能有外傷或潰瘍", "區分脫出vs腸套疊（探針測試）"]
    },
    pathophysiology: "裡急後重（tenesmus）→ 腹壓持續增加 → 直腸黏膜或全層脫出 → 暴露在外的組織水腫、乾燥 → 可能外傷或壞死。若不處理，水腫加重使復位更困難。",
    diagnosis: {
      overview: "臨床診斷明確，需區分脫出類型和尋找原因",
      differentials: ["腸套疊脫出（雙層，探針可插入肛門旁）", "直腸腫瘤", "直腸息肉"],
      initialDB: ["身體檢查確認脫出", "探針測試：直腸脫出探針無法插入組織與肛門之間；腸套疊脫出可以", "糞便檢查（寄生蟲）", "直腸檢查（評估腫塊、狹窄）"],
      advanced: ["腹部X光或超聲（評估腸套疊、腫塊）", "結腸鏡（排除腫瘤/息肉）", "CBC和生化"]
    },
    treatment: {
      overview: "復位脫出組織 + 防止復發 + 治療根本原因",
      acute: [
        "評估組織活性",
        "減輕水腫：",
        "  - 50%葡萄糖溶液或高滲鹽水濕敷15-20分鐘",
        "  - 冷敷",
        "手動復位（可能需鎮靜/麻醉）：",
        "  - 潤滑組織",
        "  - 輕柔推回",
        "復位後防止復發：",
        "  - 荷包縫合（Purse-string suture）：留置3-5天",
        "  - 確保可排便",
        "組織壞死時：直腸切除術（Rectal resection）",
        "治療根本原因：",
        "  - 驅蟲",
        "  - 治療腹瀉/便秘",
        "  - 治療下泌尿道疾病"
      ],
      chronic: [
        "反覆脫出：",
        "  - Colopexy（結腸固定術）",
        "確保治療根本原因",
        "飲食調整（纖維、水分）"
      ]
    },
    prognosis: "早期復位且組織健康預後良好。需要找出並治療根本原因以防復發。壞死組織需要手術切除，預後仍可良好但更複雜。",
    pearls: [
      "幼年動物直腸脫出首先考慮寄生蟲",
      "探針測試可區分直腸脫出和腸套疊脫出",
      "高滲溶液可有效減輕組織水腫",
      "荷包縫合不要太緊，需能排便",
      "反覆脫出需考慮手術固定",
      "組織顏色從紅轉暗紫/黑色提示壞死"
    ],
    monitoring: ["組織活性", "復發", "排便功能", "根本原因控制"],
    reference: "Cote E: Clinical Veterinary Advisor, 3rd Ed. Elsevier, 2015"
  }

};

// 疾病別名映射（用於搜尋）
const GASTROINTESTINAL_DISEASE_ALIASES = {
  // 胃部疾病
  "GDV": "gastric-dilatation-volvulus",
  "胃扭轉": "gastric-dilatation-volvulus",
  "胃擴張": "gastric-dilatation-volvulus",
  "bloat": "gastric-dilatation-volvulus",
  "胃脹氣": "gastric-dilatation-volvulus",
  "gastric torsion": "gastric-dilatation-volvulus",

  "胃潰瘍": "gastric-ulcer",
  "gastric ulceration": "gastric-ulcer",
  "peptic ulcer": "gastric-ulcer",

  // 腸道疾病
  "IBD": "inflammatory-bowel-disease",
  "發炎性腸病": "inflammatory-bowel-disease",
  "慢性腸病": "inflammatory-bowel-disease",
  "inflammatory bowel": "inflammatory-bowel-disease",

  "PLE": "protein-losing-enteropathy",
  "蛋白流失": "protein-losing-enteropathy",
  "蛋白質流失": "protein-losing-enteropathy",
  "腸道蛋白流失": "protein-losing-enteropathy",

  "HGE": "hemorrhagic-gastroenteritis",
  "AHDS": "hemorrhagic-gastroenteritis",
  "出血性胃腸炎": "hemorrhagic-gastroenteritis",
  "出血性腸炎": "hemorrhagic-gastroenteritis",
  "血便腹瀉": "hemorrhagic-gastroenteritis",

  "結腸炎": "colitis",
  "大腸炎": "colitis",
  "大腸型腹瀉": "colitis",

  "便秘": "constipation-megacolon",
  "巨結腸": "constipation-megacolon",
  "megacolon": "constipation-megacolon",
  "obstipation": "constipation-megacolon",

  // 食道疾病
  "食道異物": "esophageal-foreign-body",
  "食道卡異物": "esophageal-foreign-body",
  "esophageal obstruction": "esophageal-foreign-body",

  // 胰臟疾病
  "EPI": "exocrine-pancreatic-insufficiency",
  "胰臟功能不全": "exocrine-pancreatic-insufficiency",
  "胰外分泌不全": "exocrine-pancreatic-insufficiency",
  "消化酶缺乏": "exocrine-pancreatic-insufficiency",

  // 肝膽疾病
  "脂肪肝": "hepatic-lipidosis",
  "肝脂肪沉積": "hepatic-lipidosis",
  "貓脂肪肝": "hepatic-lipidosis",
  "fatty liver": "hepatic-lipidosis",

  "PSS": "portosystemic-shunt",
  "肝分流": "portosystemic-shunt",
  "門體分流": "portosystemic-shunt",
  "liver shunt": "portosystemic-shunt",
  "PSVA": "portosystemic-shunt",

  "膽管炎": "cholangiohepatitis",
  "膽管肝炎": "cholangiohepatitis",
  "cholangitis": "cholangiohepatitis",
  "三體炎": "cholangiohepatitis",

  "銅蓄積": "copper-storage-hepatopathy",
  "銅中毒肝病": "copper-storage-hepatopathy",
  "copper toxicosis": "copper-storage-hepatopathy",

  // 肛門直腸疾病
  "肛門腺": "anal-sac-disease",
  "肛門囊": "anal-sac-disease",
  "肛門腺嵌塞": "anal-sac-disease",
  "肛門腺炎": "anal-sac-disease",
  "肛門腺膿腫": "anal-sac-disease",
  "anal gland": "anal-sac-disease",

  "直腸脫出": "rectal-prolapse",
  "脫肛": "rectal-prolapse",
  "直腸脫垂": "rectal-prolapse"
};

// 依系統分類索引
const GASTROINTESTINAL_CATEGORIES = {
  "stomach": ["gastric-dilatation-volvulus", "gastric-ulcer"],
  "intestine": ["inflammatory-bowel-disease", "protein-losing-enteropathy", "hemorrhagic-gastroenteritis", "colitis", "constipation-megacolon"],
  "esophagus": ["esophageal-foreign-body"],
  "pancreas": ["exocrine-pancreatic-insufficiency"],
  "liver": ["hepatic-lipidosis", "portosystemic-shunt", "cholangiohepatitis", "copper-storage-hepatopathy"],
  "anorectal": ["anal-sac-disease", "rectal-prolapse"]
};

// 導出（若在模組環境中使用）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    GASTROINTESTINAL_DISEASES,
    GASTROINTESTINAL_DISEASE_ALIASES,
    GASTROINTESTINAL_CATEGORIES
  };
}

console.log("Gastrointestinal Disease Info loaded:", Object.keys(GASTROINTESTINAL_DISEASES).length, "diseases");

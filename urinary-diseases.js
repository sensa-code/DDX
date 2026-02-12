// ======= 泌尿系統疾病 DISEASE_INFO =======
// Urinary System Diseases
// 資料來源：Clinical Veterinary Advisor: Dogs and Cats, 2nd Ed. (Etienne Côté)
// Differential Diagnosis in Small Animal Medicine, 2nd Ed. (Gough, Murphy)

const URINARY_DISEASES = {
  "acute-kidney-injury": {
    zh: "急性腎損傷",
    en: "Acute Kidney Injury (AKI)",
    definition: "腎臟功能在數小時至數天內急劇下降，導致氮質血症、電解質失衡和尿量異常的緊急狀態。",
    synonyms: ["AKI", "急性腎衰竭", "Acute Renal Failure", "ARF", "急性腎功能不全"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡，但老年動物風險較高",
      sex: "無明顯性別傾向",
      riskFactors: ["腎毒性藥物（NSAIDs、氨基糖苷類）", "百合中毒（貓）", "葡萄/葡萄乾中毒（犬）", "乙二醇中毒", "脫水", "低血壓", "敗血症", "尿道阻塞", "腎前性因素"]
    },
    clinicalPresentation: {
      history: ["突發嘔吐", "厭食", "嗜睡", "尿量改變（少尿或無尿）", "可能有毒物暴露史", "近期手術或麻醉"],
      physicalExam: ["脫水", "口腔潰瘍（尿毒症）", "口臭（氨味）", "腹部疼痛（腎臟腫大）", "黏膜蒼白", "體溫可低或高", "心律不整（高血鉀）"]
    },
    pathophysiology: "腎前性：腎臟灌注不足 → GFR下降。腎性：直接腎小管損傷 → 細胞壞死 → 腎功能喪失。腎後性：尿路阻塞 → 背壓升高 → 腎損傷。共同結果：氮質血症、電解質失衡（高血鉀）、代謝性酸中毒、液體失衡",
    diagnosis: {
      overview: "基於急性氮質血症病史和臨床表現，需區分腎前性、腎性和腎後性",
      differentials: ["腎前性氮質血症", "腎後性阻塞", "慢性腎臟病急性惡化", "腎盂腎炎"],
      initialDB: ["BUN/Creatinine", "電解質（K+尤其重要）", "尿液分析（比重、沉渣）", "血氣分析", "腹部超聲（腎臟大小、腎盂積水）"],
      advanced: ["SDMA", "尿液蛋白/肌酐比", "腎臟活檢（特定情況）", "尿液培養", "乙二醇/鈣草酸鹽晶體"]
    },
    treatment: {
      overview: "恢復腎灌注、糾正電解質和酸鹼失衡、治療原發病因、支持治療",
      acute: [
        "靜脈輸液復甦：晶體液糾正脫水（計算脫水量 + 維持需求 + 持續損失）",
        "高血鉀處理（K+ >6.5 mEq/L）：",
        "- 10% Calcium gluconate: 0.5-1 mL/kg IV slow（心臟保護）",
        "- Regular insulin: 0.25-0.5 U/kg IV + Dextrose 2 g/U insulin",
        "- Sodium bicarbonate: 1-2 mEq/kg IV slow",
        "利尿劑（恢復水合後若仍少尿）：",
        "- Furosemide: 2-6 mg/kg IV（可持續輸注2-5 mg/kg/h）",
        "- Mannitol: 0.5-1 g/kg IV over 20min（需排除梗阻）",
        "代謝性酸中毒：Sodium bicarbonate（若pH<7.1或HCO3<12）",
        "止吐：Maropitant 1 mg/kg IV/SQ q24h",
        "胃保護：Omeprazole 1 mg/kg PO q12-24h",
        "腎臟替代治療（血液透析）：嚴重或無反應病例"
      ],
      chronic: ["逐漸過渡至腎臟處方飲食", "監測腎功能恢復", "避免腎毒性藥物"]
    },
    prognosis: "取決於病因、嚴重程度和治療反應。腎前性若及時糾正預後良好。腎性損傷可能需要數週恢復，部分可能進展為CKD。存活率約40-60%。少尿/無尿和嚴重高血鉀預後較差。",
    pearls: [
      "尿比重<1.030（犬）或<1.035（貓）伴隨氮質血症提示腎性問題",
      "腎臟大小正常或腫大提示AKI；萎縮提示CKD",
      "貓百合中毒24-72小時後出現腎衰竭",
      "乙二醇中毒治療黃金時間：犬<8-12小時，貓<3小時",
      "尿量目標：>1-2 mL/kg/h"
    ],
    monitoring: ["尿量（導尿管+收集）", "體重（q8-12h）", "BUN/Creatinine（q12-24h）", "電解質（q8-12h）", "血壓", "CVP（若有）"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; IRIS AKI Guidelines"
  },

  "chronic-kidney-disease": {
    zh: "慢性腎臟病",
    en: "Chronic Kidney Disease (CKD)",
    definition: "腎臟結構或功能異常持續超過3個月的進行性、不可逆疾病，為犬貓最常見的腎臟疾病。",
    synonyms: ["CKD", "慢性腎衰竭", "Chronic Renal Failure", "CRF", "腎功能不全"],
    epidemiology: {
      species: "貓較犬更常見",
      age: "老年動物好發（貓>10歲，犬>7歲）",
      sex: "無明顯性別傾向",
      riskFactors: ["老年", "先前AKI", "腎毒性藥物暴露", "腎盂腎炎史", "多囊腎病（波斯貓）", "腎發育不良", "澱粉樣變性"]
    },
    clinicalPresentation: {
      history: ["多飲多尿（PU/PD）", "食慾下降", "體重減輕", "嘔吐", "口臭", "被毛品質變差", "嗜睡", "便秘"],
      physicalExam: ["脫水", "消瘦", "口腔潰瘍", "被毛粗糙", "腎臟可能縮小（觸診）", "黏膜蒼白（貧血）", "高血壓（視網膜病變）"]
    },
    pathophysiology: "功能性腎元持續喪失 → 殘餘腎元代償性肥大 → 高濾過 → 腎絲球硬化 → 進一步腎元喪失（惡性循環）。後果：氮質血症、濃縮能力喪失、電解質失衡、代謝性酸中毒、腎性貧血、腎性繼發性副甲狀腺亢進",
    diagnosis: {
      overview: "基於持續性氮質血症、等張尿、影像學腎臟變化。IRIS分期指導治療",
      differentials: ["急性腎損傷", "腎前性氮質血症", "腎後性阻塞", "甲狀腺亢進（貓）"],
      initialDB: ["BUN/Creatinine", "SDMA", "尿液分析（比重、蛋白）", "UPC（尿蛋白/肌酐比）", "電解質（K+、磷）", "CBC（貧血）", "腹部超聲"],
      advanced: ["血壓測量", "甲狀腺功能（貓）", "PTH和離子鈣", "眼底檢查", "腎臟活檢（特定情況）"]
    },
    irisStaging: {
      stage1: "Creatinine <1.4 mg/dL（犬）或 <1.6 mg/dL（貓）；SDMA <18 μg/dL",
      stage2: "Creatinine 1.4-2.8 mg/dL（犬）或 1.6-2.8 mg/dL（貓）；SDMA 18-35 μg/dL",
      stage3: "Creatinine 2.9-5.0 mg/dL；SDMA 36-54 μg/dL",
      stage4: "Creatinine >5.0 mg/dL；SDMA >54 μg/dL",
      subStaging: "依據蛋白尿（非蛋白尿、臨界蛋白尿、蛋白尿）和血壓（正常、前期高血壓、高血壓、嚴重高血壓）"
    },
    treatment: {
      overview: "減緩疾病進展、控制併發症、維持生活品質",
      acute: [
        "尿毒症危象處理：",
        "- 靜脈輸液糾正脫水",
        "- 止吐：Maropitant 1 mg/kg SQ q24h",
        "- 胃保護：Omeprazole 1 mg/kg PO q12-24h",
        "- 食慾刺激：Mirtazapine 1.88 mg/貓 q48h 或犬 0.5-1 mg/kg q24h"
      ],
      chronic: [
        "飲食管理（腎臟處方飲食）：限制磷、適度蛋白、增加omega-3",
        "磷結合劑（若高磷血症）：Aluminum hydroxide、Calcium carbonate、Lanthanum、Sucroferric oxyhydroxide",
        "蛋白尿控制：",
        "- ACE抑制劑：Benazepril 0.5-1 mg/kg PO q12-24h 或 Enalapril 0.5 mg/kg PO q12-24h",
        "- ARB：Telmisartan 1 mg/kg PO q24h（貓首選）",
        "高血壓控制：Amlodipine 0.1-0.25 mg/kg PO q24h（貓首選）",
        "貧血管理：Darbepoetin 1 μg/kg SQ q1-2週（需補充鐵）",
        "噁心/嘔吐：Maropitant、Ondansetron",
        "代謝性酸中毒：Potassium citrate 或 Sodium bicarbonate",
        "低血鉀：Potassium gluconate 補充",
        "皮下輸液：維持水合（家庭照護）"
      ]
    },
    prognosis: "取決於IRIS分期和併發症控制。Stage 1-2：數年。Stage 3：數月至1-2年。Stage 4：數週至數月。蛋白尿和高血壓加速進展。",
    pearls: [
      "SDMA比Creatinine更早偵測腎功能下降（約40% vs 75%功能喪失）",
      "貓CKD常合併甲狀腺亢進，治療甲亢後腎功能可能惡化",
      "腎臟處方飲食可延長2-3倍存活時間",
      "高磷血症加速CKD進展",
      "血壓>160 mmHg需要治療以保護靶器官"
    ],
    monitoring: ["BUN/Crea/SDMA q2-4週（初期）then q2-4月", "UPC", "血壓q1-3月", "電解質", "PCV", "體重", "生活品質評估"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; IRIS Guidelines 2023"
  },

  "feline-lower-urinary-tract-disease": {
    zh: "貓下泌尿道疾病",
    en: "Feline Lower Urinary Tract Disease (FLUTD)",
    definition: "影響貓膀胱和/或尿道的一系列疾病統稱，表現為排尿困難、血尿、頻尿等症狀。",
    synonyms: ["FLUTD", "貓泌尿症候群", "FUS", "Feline Urologic Syndrome", "貓特發性膀胱炎", "FIC"],
    epidemiology: {
      species: "貓特有",
      age: "1-10歲，好發於中年（2-6歲）",
      sex: "公貓和母貓皆可發生，公貓更易阻塞",
      riskFactors: ["室內生活", "多貓家庭", "緊迫/壓力", "肥胖", "缺乏運動", "乾糧為主", "飲水量少"]
    },
    clinicalPresentation: {
      history: ["頻尿", "排尿困難", "血尿", "亂尿（不在貓砂盆排尿）", "舔舐生殖器", "叫聲痛苦", "反覆發作"],
      physicalExam: ["膀胱可能敏感", "膀胱大小（阻塞時膨大且硬）", "尿道可能觸診到結石", "會陰區可能紅腫"]
    },
    etiology: {
      overview: "FLUTD是症候群，非單一診斷",
      causes: [
        "特發性膀胱炎（FIC）：最常見（55-65%）",
        "尿路結石：10-25%（草酸鈣、鳥糞石）",
        "尿道栓子：10-20%",
        "泌尿道感染：<5%（年輕貓罕見）",
        "解剖異常：尿道狹窄、腫瘤",
        "行為問題"
      ]
    },
    pathophysiology: "FIC：緊迫 → HPA軸失調 → 膀胱GAG層損傷 → 神經性炎症 → 疼痛和臨床症狀。結石：礦物質過飽和 → 結晶形成 → 結石生長 → 阻塞或刺激。栓子：晶體+黏液+細胞碎片 → 尿道阻塞",
    diagnosis: {
      overview: "排除可治療病因（結石、感染），FIC為排除性診斷",
      differentials: ["特發性膀胱炎", "尿路結石", "泌尿道感染", "尿道阻塞", "腫瘤", "解剖異常"],
      initialDB: ["尿液分析（包含沉渣）", "尿液培養", "腹部X光", "腹部超聲"],
      advanced: ["尿道造影", "膀胱鏡", "尿石分析"]
    },
    treatment: {
      overview: "依據病因治療：FIC以環境管理和鎮痛為主；結石依類型處理",
      acute: [
        "疼痛控制：Buprenorphine 0.01-0.02 mg/kg SL q6-8h",
        "解痙：Prazosin 0.25-0.5 mg/貓 PO q8-12h（公貓尿道痙攣）",
        "抗焦慮：短期可考慮Gabapentin 5-10 mg/kg PO",
        "若阻塞：見「尿道阻塞」處理"
      ],
      chronic: [
        "環境豐富化（MEMO）：",
        "- 多個貓砂盆（n+1原則）",
        "- 增加飲水量（流動飲水器、濕食）",
        "- 減少緊迫（貓費洛蒙、安全空間）",
        "- 互動和遊戲",
        "飲食管理：增加水分攝取、泌尿道處方飲食",
        "鳥糞石結石：溶解飲食（若適用）",
        "草酸鈣結石：手術移除（無法溶解）",
        "Amitriptyline：10 mg/貓 PO q24h（頑固性FIC，需監測）",
        "Polysulfated glycosaminoglycan：可考慮（證據有限）"
      ]
    },
    prognosis: "FIC：多數自限性（數天內緩解），但復發率高。結石：移除後預後良好，需預防復發。公貓阻塞若未及時處理可致命。",
    pearls: [
      "年輕貓（<10歲）UTI罕見，不要常規使用抗生素",
      "FIC是排除性診斷，但最常見",
      "環境管理比藥物更重要",
      "公貓反覆阻塞可考慮會陰尿道造口術",
      "草酸鈣結石無法溶解，鳥糞石可溶解"
    ],
    monitoring: ["症狀緩解情況", "尿液分析（追蹤）", "影像學追蹤結石", "體重管理"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; AAFP/ISFM Guidelines on FLUTD"
  },

  "urinary-tract-infection": {
    zh: "泌尿道感染",
    en: "Urinary Tract Infection (UTI)",
    definition: "病原微生物（通常為細菌）在正常無菌的泌尿道內定殖並引起炎症反應的感染性疾病。",
    synonyms: ["UTI", "膀胱炎", "Bacterial Cystitis", "尿路感染"],
    epidemiology: {
      species: "犬較貓常見",
      age: "母犬任何年齡，公犬和貓多為老年",
      sex: "母犬較公犬常見（尿道較短）",
      riskFactors: ["母犬（解剖因素）", "老年", "糖尿病", "腎上腺皮質功能亢進", "免疫抑制", "尿液滯留", "尿路結石", "留置導尿管", "先天性異常"]
    },
    clinicalPresentation: {
      history: ["頻尿", "排尿困難", "血尿", "尿液混濁或惡臭", "亂尿", "舔舐泌尿生殖區"],
      physicalExam: ["膀胱可能敏感", "發燒（若腎盂腎炎）", "會陰區可能發紅", "外陰分泌物（母犬）"]
    },
    pathophysiology: "細菌（多為腸道菌）上行感染 → 黏附於膀胱上皮 → 繁殖 → 炎症反應 → 黏膜損傷 → 臨床症狀。宿主防禦機制受損加重感染：正常尿流、黏膜屏障、免疫功能",
    commonPathogens: ["Escherichia coli（最常見）", "Staphylococcus spp.", "Proteus spp.", "Enterococcus spp.", "Klebsiella spp.", "Pseudomonas（複雜性UTI）"],
    diagnosis: {
      overview: "尿液培養和藥敏試驗是金標準",
      differentials: ["特發性膀胱炎（貓）", "尿路結石", "腫瘤", "前列腺疾病（公犬）"],
      initialDB: ["尿液分析（膀胱穿刺取樣最佳）", "尿液培養和藥敏", "尿沉渣（細菌、WBC）"],
      advanced: ["腹部超聲", "X光（排除結石）", "血糖（排除糖尿病）", "腎上腺功能檢查"]
    },
    utiClassification: {
      simple: "首次或偶發性UTI，無潛在疾病或解剖異常",
      complicated: "反覆感染、有潛在疾病、解剖異常、或感染擴展（腎盂腎炎、前列腺炎）",
      subclinical: "尿液培養陽性但無臨床症狀（通常不治療，除非特殊情況）"
    },
    treatment: {
      overview: "基於尿液培養和藥敏結果選擇抗生素",
      acute: [
        "單純性UTI（經驗性治療，等待培養結果）：",
        "- Amoxicillin: 11-15 mg/kg PO q8h × 7-14天",
        "- Amoxicillin-clavulanate: 12.5-25 mg/kg PO q12h",
        "- Trimethoprim-sulfa: 15-30 mg/kg PO q12h",
        "複雜性UTI：依據培養結果，療程較長（4-6週）",
        "腎盂腎炎：見相關條目",
        "鎮痛（若需要）：NSAIDs短期使用（注意腎功能）"
      ],
      chronic: [
        "復發性UTI管理：",
        "- 尋找並治療潛在病因",
        "- 長期低劑量抗生素（夜間給藥）",
        "- 或間歇性自我治療（主人觀察症狀時給藥）",
        "增加水分攝取",
        "定期監測尿液培養"
      ]
    },
    prognosis: "單純性UTI：預後良好。複雜性/復發性：取決於潛在病因控制。",
    pearls: [
      "膀胱穿刺取樣避免污染，是培養金標準",
      "年輕健康貓UTI罕見，需考慮其他病因",
      "無症狀菌尿通常不需治療（除非免疫抑制、即將手術等）",
      "反覆UTI應尋找潛在病因（糖尿病、腎上腺皮質功能亢進）",
      "氟喹諾酮類應保留給多重抗藥性感染"
    ],
    monitoring: ["治療結束後5-7天尿液培養確認清除", "反覆感染需定期培養"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; ISCAID Guidelines on UTI"
  },

  "pyelonephritis": {
    zh: "腎盂腎炎",
    en: "Pyelonephritis",
    definition: "腎盂和腎實質的細菌感染，為上泌尿道感染，可為急性或慢性。",
    synonyms: ["腎臟感染", "Upper UTI", "Kidney Infection"],
    epidemiology: {
      species: "犬較貓常見",
      age: "任何年齡，中老年較多",
      sex: "母犬略多",
      riskFactors: ["下泌尿道感染上行", "尿路結石", "先天性異常（異位輸尿管、VUR）", "免疫抑制", "糖尿病", "腎上腺皮質功能亢進", "留置導尿管"]
    },
    clinicalPresentation: {
      history: ["發燒", "嗜睡", "食慾下降", "嘔吐", "腰背痛", "多飲多尿", "可能有下泌尿道症狀"],
      physicalExam: ["發燒", "腎臟區疼痛（腰部觸診）", "腎臟可能腫大", "脫水", "黏膜充血或蒼白"]
    },
    pathophysiology: "細菌從膀胱上行至腎臟 → 腎盂黏膜感染 → 擴展至腎實質 → 化膿性炎症 → 腎間質纖維化（慢性）→ 腎功能喪失。血源性感染較少見但可發生。",
    diagnosis: {
      overview: "臨床表現結合尿液培養陽性和影像學發現",
      differentials: ["下泌尿道感染", "腎結石", "急性腎損傷", "腎膿腫"],
      initialDB: ["尿液分析和培養", "CBC（嗜中性球增多、左移）", "生化（可能氮質血症）", "腹部超聲（腎盂擴張、腎臟腫大、皮質回音改變）"],
      advanced: ["腹部CT", "靜脈腎盂造影", "腎臟穿刺培養"]
    },
    treatment: {
      overview: "長期抗生素治療基於培養結果，支持治療",
      acute: [
        "住院治療（嚴重病例）：",
        "- 靜脈輸液糾正脫水",
        "- IV抗生素（初期）：",
        "  * Ampicillin: 20-40 mg/kg IV q6-8h + Enrofloxacin: 5-10 mg/kg IV q24h",
        "  * 或 Ampicillin-sulbactam: 20-30 mg/kg IV q8h",
        "- 止痛：Buprenorphine或其他鴉片類",
        "- 止吐：Maropitant 1 mg/kg IV q24h"
      ],
      chronic: [
        "口服抗生素（依培養結果）：4-6週療程",
        "常用選擇：",
        "- Amoxicillin-clavulanate: 12.5-25 mg/kg PO q12h",
        "- 氟喹諾酮類：Enrofloxacin 5-10 mg/kg PO q24h",
        "- Trimethoprim-sulfa: 15-30 mg/kg PO q12h",
        "治療潛在病因（結石移除、異常矯正）",
        "慢性腎盂腎炎可能需要更長療程"
      ]
    },
    prognosis: "急性若及時治療預後良好。慢性或反覆發作可導致永久性腎損傷和CKD。雙側嚴重感染預後謹慎。",
    pearls: [
      "急性腎盂腎炎是全身性疾病，不只是UTI",
      "超聲可見腎盂擴張但不一定有積水",
      "氮質血症可能是暫時性（腎臟腫脹）或永久性（腎損傷）",
      "抗生素療程需要4-6週以根除腎臟感染",
      "治療後需追蹤尿液培養確認清除"
    ],
    monitoring: ["體溫", "腎功能（BUN/Crea）", "尿液培養（治療中和治療後）", "超聲追蹤"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "polycystic-kidney-disease": {
    zh: "多囊性腎病",
    en: "Polycystic Kidney Disease (PKD)",
    definition: "以腎臟出現多個液體填充囊腫為特徵的遺傳性疾病，隨年齡進展導致腎功能喪失。",
    synonyms: ["PKD", "多囊腎", "Polycystic Kidneys"],
    epidemiology: {
      species: "貓較常見（波斯貓及相關品種），犬少見",
      age: "先天性，但臨床症狀多在中老年出現",
      sex: "無性別傾向",
      breedPredisposition: ["波斯貓（約36-50%發生率）", "喜馬拉雅貓", "英國短毛貓", "異國短毛貓", "蘇格蘭摺耳貓"],
      riskFactors: ["遺傳（常染色體顯性遺傳，PKD1基因突變）"]
    },
    clinicalPresentation: {
      history: ["多飲多尿（PU/PD）", "體重減輕", "食慾下降", "嘔吐", "嗜睡"],
      physicalExam: ["腎臟不規則腫大（雙側觸診）", "腹部觸診可感覺到凹凸不平的腎臟", "脫水", "CKD相關症狀"]
    },
    pathophysiology: "PKD1基因突變 → polycystin-1蛋白異常 → 腎小管上皮細胞增殖和分泌異常 → 囊腫形成和擴大 → 壓迫正常腎實質 → 腎功能進行性喪失。囊腫數量和大小隨年齡增加。",
    diagnosis: {
      overview: "超聲診斷為主，基因檢測可早期確診",
      differentials: ["腎臟腫瘤", "腎臟淋巴瘤", "腎周假性囊腫", "水腎"],
      initialDB: ["腹部超聲（多個囊腫，雙側腎臟）", "BUN/Creatinine/SDMA", "尿液分析", "血壓"],
      advanced: ["PKD1基因檢測（可在幼年進行）", "CT或MRI"]
    },
    geneticTesting: {
      indication: "繁殖前篩檢、早期診斷",
      method: "PCR檢測PKD1基因突變",
      timing: "可在任何年齡進行，推薦繁殖前"
    },
    treatment: {
      overview: "無法治癒，治療目標為延緩CKD進展和控制併發症",
      acute: [
        "尿毒症危象：同CKD處理",
        "囊腫感染：長期抗生素（需穿透囊腫壁）",
        "- Fluoroquinolones較佳穿透性",
        "- 療程4-6週"
      ],
      chronic: [
        "CKD管理（參見CKD條目）：",
        "- 腎臟處方飲食",
        "- 磷結合劑",
        "- 血壓控制",
        "- 蛋白尿控制",
        "- 皮下輸液維持水合",
        "Tolvaptan：在人類PKD有效，獸醫尚無標準用法",
        "囊腫引流：僅用於巨大囊腫引起不適（效果暫時）"
      ]
    },
    prognosis: "進展速度因個體差異大。多數貓在3-10歲出現CKD。平均診斷腎衰竭年齡約7歲。基因檢測陽性不等於一定會發展為腎衰竭。",
    pearls: [
      "超聲10週齡即可檢測到囊腫，但早期可能漏診",
      "基因檢測是唯一100%準確的早期診斷方法",
      "繁殖控制是降低發病率的關鍵",
      "囊腫感染難以治療，抗生素需能穿透囊壁",
      "肝臟也可能有囊腫（較少引起臨床症狀）"
    ],
    monitoring: ["定期超聲（q6-12月）", "腎功能（BUN/Crea/SDMA）", "血壓", "體重"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "protein-losing-nephropathy": {
    zh: "蛋白質流失性腎病",
    en: "Protein-Losing Nephropathy (PLN)",
    definition: "以腎絲球屏障功能障礙導致大量蛋白質經尿液流失為特徵的腎臟疾病。",
    synonyms: ["PLN", "腎絲球疾病", "Glomerulonephritis", "腎絲球腎炎", "蛋白尿性腎病"],
    epidemiology: {
      species: "犬較貓常見",
      age: "中老年犬好發",
      sex: "無明顯性別傾向",
      breedPredisposition: ["Soft-coated Wheaten Terrier", "Bernese Mountain Dog", "English Cocker Spaniel", "Bull Terrier", "Dalmatian", "Samoyed"],
      riskFactors: ["感染性疾病（萊姆病、心絲蟲）", "免疫介導疾病", "腫瘤", "遺傳因素"]
    },
    clinicalPresentation: {
      history: ["初期可能無症狀", "體重減輕", "嗜睡", "水腫", "腹水", "呼吸困難（胸水）", "CKD症狀"],
      physicalExam: ["四肢水腫", "腹水", "體腔積液", "消瘦", "高血壓相關徵象"]
    },
    pathophysiology: "腎絲球屏障損傷（免疫複合物沉積、遺傳缺陷等）→ 通透性增加 → 白蛋白和其他蛋白質流失 → 低白蛋白血症 → 水腫、腹水。同時：高脂血症、凝血亢進（抗凝血酶III流失）→ 血栓栓塞風險增加",
    diagnosis: {
      overview: "基於持續性蛋白尿（UPC > 0.5犬，> 0.4貓）和排除其他蛋白尿原因",
      differentials: ["下泌尿道感染/炎症引起的蛋白尿", "管性蛋白尿", "其他低白蛋白血症原因"],
      initialDB: ["UPC（尿蛋白/肌酐比）", "尿液分析和培養", "BUN/Crea/SDMA", "血漿白蛋白", "血脂", "CBC"],
      advanced: ["抗凝血酶III", "膽固醇", "感染疾病篩檢（萊姆病、心絲蟲等）", "ANA", "腎臟超聲", "腎臟活檢（金標準診斷腎絲球疾病類型）"]
    },
    treatment: {
      overview: "治療原發病因、減少蛋白尿、管理併發症",
      acute: [
        "嚴重低白蛋白血症（<1.5 g/dL）：",
        "- 新鮮冷凍血漿",
        "- 人工膠體（慎用）",
        "血栓栓塞預防：",
        "- Clopidogrel: 1-2 mg/kg PO q24h",
        "- 或/加 低劑量Aspirin: 0.5-1 mg/kg PO q24h"
      ],
      chronic: [
        "減少蛋白尿（腎保護）：",
        "- ACE抑制劑：Enalapril/Benazepril 0.5-1 mg/kg PO q12-24h",
        "- ARB：Telmisartan 1 mg/kg PO q24h",
        "- 可合併使用",
        "高血壓控制：Amlodipine 0.1-0.25 mg/kg PO q24h",
        "腎臟處方飲食（限制蛋白、補充omega-3）",
        "免疫抑制治療（免疫介導性腎絲球腎炎）：",
        "- Mycophenolate: 10-20 mg/kg PO q12h",
        "- 避免長期類固醇（可能加重蛋白尿和促進血栓）",
        "治療原發感染（萊姆病：Doxycycline）",
        "抗凝治療持續進行"
      ]
    },
    prognosis: "取決於原發病因和治療反應。UPC > 3.5和低白蛋白血症預後較差。血栓栓塞是常見致死併發症。",
    pearls: [
      "UPC > 2.0 高度提示腎絲球疾病",
      "必須排除尿路感染和炎症再評估蛋白尿",
      "血栓栓塞風險與蛋白尿嚴重程度相關",
      "腎臟活檢可區分不同類型腎絲球疾病",
      "類固醇在多數情況下不是首選免疫抑制劑"
    ],
    monitoring: ["UPC（q2-4週初期，然後q2-4月）", "血壓", "白蛋白", "腎功能", "血栓症狀"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; ACVIM Consensus Statement on PLN"
  },

  "renal-dysplasia": {
    zh: "腎發育不良",
    en: "Renal Dysplasia",
    definition: "腎臟在發育過程中出現異常分化，導致結構和功能異常的先天性疾病。",
    synonyms: ["腎發育異常", "Juvenile Nephropathy", "幼年型腎病", "Familial Nephropathy"],
    epidemiology: {
      species: "犬較常見",
      age: "幼年至青年（通常<2歲出現症狀）",
      sex: "無明顯性別傾向",
      breedPredisposition: ["Shih Tzu", "Lhasa Apso", "Soft-coated Wheaten Terrier", "Standard Poodle", "Alaskan Malamute", "Chow Chow", "Golden Retriever", "Cocker Spaniel"]
    },
    clinicalPresentation: {
      history: ["多飲多尿", "生長遲緩", "食慾不振", "體重不增或減輕", "嘔吐", "嗜睡", "被毛品質差"],
      physicalExam: ["體型較同齡小", "消瘦", "脫水", "腎臟小或觸診不到", "可能有口腔潰瘍", "橡皮頜（腎性骨營養不良）"]
    },
    pathophysiology: "胎兒期腎臟發育異常 → 不成熟或發育不全的腎小管和腎絲球 → 功能性腎元減少 → 代償性肥大不足以彌補 → 進行性腎功能喪失。病理特徵：原始腎小管、不成熟腎絲球、間質纖維化",
    diagnosis: {
      overview: "幼年動物出現CKD表現應懷疑，腎臟活檢確診",
      differentials: ["腎盂腎炎", "腎毒性", "先天性尿路梗阻", "多囊腎病"],
      initialDB: ["BUN/Creatinine", "尿液分析（等張尿）", "電解質", "腹部超聲（小腎臟、皮髓質分界不清）", "X光（可能有骨骼變化）"],
      advanced: ["腎臟活檢（確診）", "離子鈣/PTH（繼發性甲狀旁腺亢進）"]
    },
    treatment: {
      overview: "無法治癒，治療同CKD，預後較差",
      acute: [
        "尿毒症危象：",
        "- 靜脈輸液",
        "- 止吐",
        "- 胃保護"
      ],
      chronic: [
        "CKD支持治療：",
        "- 腎臟處方飲食",
        "- 磷結合劑",
        "- 皮下輸液維持水合",
        "- 促紅血球生成素（若貧血）",
        "腎性骨營養不良管理：",
        "- 磷控制",
        "- 活性維生素D（Calcitriol）慎用"
      ]
    },
    prognosis: "預後差，多數在2歲前進展至終末期腎衰竭。存活時間取決於診斷時腎功能和治療反應。",
    pearls: [
      "幼年犬CKD應高度懷疑腎發育不良",
      "超聲可見小而不規則的腎臟",
      "腎臟活檢是唯一確診方法",
      "繁殖計畫應排除受影響品系",
      "「橡皮頜」是腎性骨營養不良的特徵性表現"
    ],
    monitoring: ["腎功能定期評估", "生長曲線", "鈣磷代謝", "血壓"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "ectopic-ureter": {
    zh: "異位輸尿管",
    en: "Ectopic Ureter",
    definition: "輸尿管開口於膀胱三角區以外的位置（如尿道、陰道、子宮）的先天性異常，導致尿失禁。",
    synonyms: ["EU", "Ureteral Ectopia", "輸尿管異位"],
    epidemiology: {
      species: "犬較貓常見",
      age: "先天性，通常幼年診斷",
      sex: "母犬較公犬更常被診斷（公犬可能症狀較輕）",
      breedPredisposition: ["Siberian Husky", "Labrador Retriever", "Golden Retriever", "Newfoundland", "English Bulldog", "West Highland White Terrier", "Fox Terrier"]
    },
    clinicalPresentation: {
      history: ["出生即有尿失禁（持續滴尿）", "從未完全控制排尿", "會陰區皮膚炎", "反覆泌尿道感染"],
      physicalExam: ["會陰區濕潤或尿灼傷", "可能有外陰發育不全", "膀胱大小可能正常或較小", "可能觸診到擴張的輸尿管"]
    },
    pathophysiology: "胚胎發育期輸尿管芽位置異常 → 輸尿管開口於正常膀胱三角區外 → 尿液繞過尿道括約肌 → 持續性尿失禁。分類：壁內型（沿膀胱壁內延伸開口於遠端）vs 壁外型（完全繞過膀胱）",
    diagnosis: {
      overview: "影像學確診異位開口位置",
      differentials: ["括約肌功能不全", "先天性尿道異常", "下泌尿道感染", "前庭陰道異常"],
      initialDB: ["尿液分析和培養", "腹部超聲（輸尿管擴張、開口位置）", "排泄性靜脈腎盂造影"],
      advanced: ["CT泌尿道造影（首選）", "膀胱鏡和尿道鏡（可同時診斷和治療）", "逆行性尿道造影"]
    },
    treatment: {
      overview: "手術矯正為主，術後可能仍需藥物控制",
      acute: [
        "泌尿道感染治療：抗生素基於培養結果",
        "皮膚護理：保持會陰區清潔乾燥"
      ],
      chronic: [
        "手術選項：",
        "- 膀胱鏡引導雷射消融（壁內型首選）",
        "- 新輸尿管膀胱吻合術（開放手術）",
        "- 腎臟/輸尿管切除（單側，若腎功能差）",
        "術後尿失禁管理（30-50%仍有殘餘尿失禁）：",
        "- Phenylpropanolamine (PPA): 1.5-2 mg/kg PO q8-12h",
        "- 雌激素（絕育母犬）：DES 0.1-1 mg PO q24-72h",
        "術後UTI預防和監測"
      ]
    },
    prognosis: "手術成功率約50-90%。壁內型雷射消融成功率較高。術後仍有尿失禁可能，藥物可改善。",
    pearls: [
      "幼年母犬尿失禁首先考慮異位輸尿管",
      "單側或雙側皆可發生，雙側約50%",
      "CT泌尿道造影是目前最佳診斷方法",
      "膀胱鏡雷射消融創傷小、恢復快",
      "術後殘餘尿失禁常見，可能需要長期藥物控制"
    ],
    monitoring: ["術後尿失禁程度", "尿液培養", "腎功能", "超聲追蹤"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "urethral-obstruction": {
    zh: "尿道阻塞",
    en: "Urethral Obstruction",
    definition: "尿道被物理性阻塞導致無法排尿的緊急狀態，可因結石、栓子、腫瘤或功能性原因引起。",
    synonyms: ["UO", "尿道梗阻", "Blocked Cat", "Urinary Obstruction", "FUO (Feline Urethral Obstruction)"],
    epidemiology: {
      species: "公貓最常見，公犬也可發生",
      age: "貓：1-10歲；犬：任何年齡（結石相關）",
      sex: "公性動物為主（尿道較長較窄）",
      riskFactors: ["公貓（最高風險）", "肥胖", "室內生活", "缺乏運動", "乾糧飲食", "飲水少", "FLUTD病史"]
    },
    clinicalPresentation: {
      history: ["頻繁進出貓砂盆", "排尿姿勢但無尿或少尿", "叫聲痛苦", "嘔吐", "嗜睡", "食慾下降", "最後可能虛脫"],
      physicalExam: ["膀胱極度膨脹且硬（「像網球」）", "腹部疼痛", "心搏過緩（高血鉀）", "低體溫", "脫水", "黏膜蒼白", "陰莖可能外露或有分泌物"]
    },
    pathophysiology: "尿道阻塞 → 膀胱過度膨脹 → 尿液滯留 → 氮質血症 → 高血鉀（危及生命的心律不整）→ 代謝性酸中毒 → 若不治療24-48小時內死亡。膀胱可能破裂（少見）",
    diagnosis: {
      overview: "觸診膨脹膀胱即可診斷，需評估代謝狀態",
      differentials: ["膀胱無張力（神經性）", "尿道痙攣", "尿道腫瘤"],
      initialDB: ["身體觸診（膀胱）", "電解質（K+首要）", "BUN/Creatinine", "血氣分析", "ECG（心律）", "腹部X光（結石位置）"],
      advanced: ["腹部超聲", "尿道造影"]
    },
    treatment: {
      overview: "緊急穩定 → 解除阻塞 → 術後監測和預防復發",
      acute: [
        "代謝穩定（在導尿前）：",
        "- 靜脈通路和輸液：0.9% NaCl 優先（不含K+）",
        "- 嚴重高血鉀處理（K+ >7-8 mEq/L）：",
        "  * 10% Calcium gluconate: 0.5-1 mL/kg IV slow（心臟保護）",
        "  * Regular insulin: 0.25-0.5 U/kg IV + Dextrose",
        "- ECG監測",
        "- 嚴重心搏過緩：Atropine 0.02-0.04 mg/kg IV",
        "解除阻塞：",
        "- 鎮靜/麻醉：Butorphanol + Dexmedetomidine（低劑量若不穩定）",
        "- 逆行沖洗尿道：無菌生理鹽水",
        "- 放置留置導尿管（3.5-5 Fr）",
        "- 若無法導尿：膀胱穿刺暫時減壓",
        "術後輸液：糾正脫水、促進利尿"
      ],
      chronic: [
        "移除導尿管後監測排尿",
        "Prazosin（尿道鬆弛）：0.25-0.5 mg/貓 PO q8-12h × 3-5天",
        "止痛：Buprenorphine 0.01-0.02 mg/kg SL q6-8h",
        "FLUTD長期管理（見相關條目）",
        "反覆阻塞：會陰尿道造口術（PU手術）"
      ]
    },
    prognosis: "及時治療預後良好（>90%存活）。延遲治療可致死。約30-40%會復發。PU手術後阻塞罕見但仍可能UTI。",
    pearls: [
      "公貓尿道阻塞是急診，不能等待",
      "先穩定高血鉀再嘗試導尿",
      "Calcium gluconate保護心臟但不降低血鉀",
      "導尿後24-48小時可能出現「阻塞後利尿」",
      "PU手術改變尿道解剖，不治療潛在病因"
    ],
    monitoring: ["ECG（術中和術後）", "尿量（目標>2 mL/kg/h）", "電解質（q4-8h初期）", "BUN/Creatinine", "移除導尿管後排尿情況"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "bladder-tumor": {
    zh: "膀胱腫瘤",
    en: "Bladder Tumor",
    definition: "膀胱的原發性或轉移性腫瘤，最常見為移行細胞癌(TCC)，好發於犬。",
    synonyms: ["膀胱癌", "Bladder Cancer", "移行細胞癌", "TCC", "Urothelial Carcinoma"],
    epidemiology: {
      species: "犬遠較貓常見",
      age: "老年犬（平均9-11歲）",
      sex: "母犬略多於公犬",
      breedPredisposition: ["Scottish Terrier（風險最高，18-20倍）", "West Highland White Terrier", "Beagle", "Shetland Sheepdog", "Wire Hair Fox Terrier"],
      riskFactors: ["殺蟲劑/除草劑暴露", "環蟲酮暴露（舊式跳蚤藥）", "肥胖", "雌性"]
    },
    clinicalPresentation: {
      history: ["血尿（最常見）", "頻尿", "排尿困難", "反覆「UTI」對抗生素反應差", "排尿不完全", "後期可能有跛行（骨轉移）"],
      physicalExam: ["直腸觸診可能摸到膀胱三角區或尿道腫塊", "膀胱壁增厚", "前列腺受侵犯（公犬）", "副腫瘤骨病變"]
    },
    pathophysiology: "TCC起源於膀胱移行上皮 → 好發於膀胱三角區 → 局部侵犯 → 可能累及尿道和前列腺 → 淋巴結轉移 → 肺轉移。病理特徵：乳頭狀或浸潤性生長",
    diagnosis: {
      overview: "影像學發現病灶，細胞學或組織學確診",
      differentials: ["慢性膀胱炎", "多發性息肉", "其他膀胱腫瘤（少見）"],
      initialDB: ["尿液分析", "腹部超聲（膀胱壁腫塊）", "胸腔X光（轉移篩檢）", "腹部X光（淋巴結腫大）"],
      advanced: ["BRAF突變檢測（尿液PCR，敏感性85%）", "創傷性導尿細胞學", "膀胱鏡活檢", "CT（分期）"]
    },
    staging: {
      T: "T1: 乳頭狀，限於黏膜; T2: 侵犯肌層; T3: 侵犯鄰近器官",
      N: "N0: 無淋巴結轉移; N1: 淋巴結轉移",
      M: "M0: 無遠端轉移; M1: 遠端轉移"
    },
    treatment: {
      overview: "手術切除困難（位置），化療和NSAIDs為主要治療",
      acute: [
        "尿道阻塞處理：",
        "- 支架置放",
        "- 導尿管",
        "- 膀胱造口術（暫時）"
      ],
      chronic: [
        "醫學治療（主要）：",
        "- Piroxicam: 0.3 mg/kg PO q24h（COX抑制劑，抗腫瘤作用）",
        "- 或 Meloxicam: 0.1-0.2 mg/kg PO q24h",
        "化療：",
        "- Mitoxantrone: 5-6 mg/m² IV q3週",
        "- 或 Carboplatin: 300 mg/m² IV q3-4週",
        "- 或 Vinblastine: 2-3 mg/m² IV q1-2週",
        "- 合併NSAID效果更好",
        "手術（選擇性病例）：",
        "- 部分膀胱切除術（非三角區腫瘤）",
        "- 全膀胱切除+尿路改道（少見）",
        "姑息性治療：尿道支架、膀胱造口術"
      ]
    },
    prognosis: "預後謹慎至差。中位生存期：單獨NSAID約6個月，NSAID+化療約10-12個月。尿道阻塞是常見死亡原因。",
    pearls: [
      "TCC好發膀胱三角區，手術切除困難",
      "BRAF V595E突變存在於約85%犬TCC",
      "不建議經腹膀胱穿刺活檢（可能種植轉移）",
      "Piroxicam有直接抗腫瘤作用，不只是止痛",
      "反覆「UTI」治療無效應懷疑膀胱腫瘤"
    ],
    monitoring: ["定期超聲（腫瘤大小）", "尿液分析", "胸腔X光（轉移）", "生活品質評估"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "urinary-incontinence": {
    zh: "尿失禁",
    en: "Urinary Incontinence",
    definition: "不自主排尿的狀態，可因括約肌功能不全、神經性問題或解剖異常引起。",
    synonyms: ["UI", "小便失禁", "Involuntary Urination"],
    epidemiology: {
      species: "犬較貓常見",
      age: "依病因而異（括約肌功能不全多在絕育後數月至數年出現）",
      sex: "絕育母犬最常見（括約肌功能不全）",
      breedPredisposition: ["大型犬", "Boxer", "Doberman", "Old English Sheepdog", "German Shepherd", "Rottweiler", "Irish Setter"],
      riskFactors: ["絕育（母犬）", "肥胖", "尾巴對接", "先天性異常"]
    },
    clinicalPresentation: {
      history: ["休息時滴尿", "床墊濕掉", "會陰區濕潤", "動物本身不自覺", "行為正常"],
      physicalExam: ["會陰區濕潤或尿灼傷", "膀胱大小可能正常", "神經學檢查（若懷疑神經性）", "陰道/外陰檢查"]
    },
    etiology: {
      usmr: "尿道括約肌功能不全(USMI)：絕育母犬最常見",
      neurogenic: "神經性：脊髓疾病、馬尾症候群、椎間盤疾病",
      anatomic: "解剖異常：異位輸尿管、前庭陰道異常",
      overflow: "滿溢性：尿道阻塞、膀胱無張力",
      urgency: "急迫性：膀胱炎、膀胱腫瘤"
    },
    diagnosis: {
      overview: "詳細病史區分真性尿失禁和其他排尿異常，確定病因",
      differentials: ["行為性排尿問題", "多尿", "下泌尿道感染", "異位輸尿管"],
      initialDB: ["尿液分析和培養", "神經學檢查", "腹部超聲", "腹部X光"],
      advanced: ["尿動力學檢查", "CT泌尿道造影", "膀胱鏡", "MRI（脊髓評估）"]
    },
    treatment: {
      overview: "依據病因治療，USMI以藥物為主",
      acute: [
        "感染相關：抗生素治療",
        "阻塞相關：解除阻塞"
      ],
      chronic: [
        "USMI藥物治療：",
        "- Phenylpropanolamine (PPA): 1.5-2 mg/kg PO q8-12h（α促效劑）",
        "- 雌激素（絕育母犬）：",
        "  * Diethylstilbestrol (DES): 0.1-1 mg PO q24h × 5-7天，然後q週",
        "  * 或 Estriol: 2 mg/犬 PO q24h",
        "- 合併PPA和雌激素效果更好",
        "手術選項（藥物無效）：",
        "- 膀胱頸注射填充劑",
        "- 人工尿道括約肌",
        "- 膠原蛋白注射",
        "異位輸尿管：手術矯正",
        "神經性：治療原發病因、間歇性導尿"
      ]
    },
    prognosis: "USMI：藥物控制率約90%。異位輸尿管術後約50-70%改善。神經性：取決於原發病因。",
    pearls: [
      "絕育母犬尿失禁首先考慮USMI",
      "幼年動物尿失禁考慮異位輸尿管",
      "PPA對USMI效果好但有心血管副作用",
      "雌激素需監測骨髓抑制（少見）",
      "真性尿失禁動物不自知，與行為問題不同"
    ],
    monitoring: ["症狀控制程度", "藥物副作用", "定期尿液培養（繼發感染）"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "prostatic-disease": {
    zh: "前列腺疾病",
    en: "Prostatic Disease",
    definition: "影響前列腺的各種疾病統稱，包括良性增生、感染、囊腫和腫瘤，僅見於公犬。",
    synonyms: ["前列腺疾病", "攝護腺疾病", "Prostate Disease"],
    epidemiology: {
      species: "犬（公犬）",
      age: "依疾病類型而異",
      sex: "公犬專有",
      riskFactors: ["未絕育", "年齡（BPH、腫瘤）"]
    },
    diseaseTypes: {
      bph: {
        name: "良性前列腺增生(BPH)",
        age: "中老年未絕育公犬",
        description: "雄激素依賴性前列腺增大",
        symptoms: "可能無症狀、排便困難、血尿、前列腺液滴出"
      },
      prostatitis: {
        name: "前列腺炎",
        age: "任何年齡",
        description: "細菌感染，急性或慢性",
        symptoms: "發燒、疼痛、排尿困難、全身症狀"
      },
      abscess: {
        name: "前列腺膿瘍",
        age: "中老年",
        description: "前列腺炎併發症",
        symptoms: "嚴重全身症狀、發燒、腹痛"
      },
      cyst: {
        name: "前列腺囊腫",
        age: "中老年",
        description: "前列腺內或前列腺旁囊腫",
        symptoms: "大小依賴，可能壓迫周圍結構"
      },
      carcinoma: {
        name: "前列腺癌",
        age: "老年（絕育和未絕育皆可）",
        description: "惡性腫瘤，常見轉移",
        symptoms: "排尿困難、排便困難、後肢跛行（骨轉移）"
      }
    },
    clinicalPresentation: {
      history: ["排便困難（糞便扁平）", "排尿困難", "血尿/尿道分泌物", "後肢僵硬", "發燒（感染）", "嗜睡"],
      physicalExam: ["直腸觸診前列腺：腫大、不對稱、疼痛、硬度改變", "可能觸及腹部腫塊", "睪丸異常（Sertoli cell tumor）", "神經學異常（腫瘤轉移）"]
    },
    diagnosis: {
      overview: "直腸觸診初步評估，影像學和細胞學確診",
      differentials: ["BPH", "前列腺炎/膿瘍", "囊腫", "腫瘤", "前列腺旁囊腫"],
      initialDB: ["直腸觸診", "腹部X光", "腹部超聲", "尿液分析和培養", "前列腺液培養"],
      advanced: ["超聲引導穿刺活檢", "CT（分期）", "前列腺特異性抗原（犬：非特異性）"]
    },
    treatment: {
      overview: "依據病因治療",
      bph: [
        "絕育：最有效治療（4-6週內顯著縮小）",
        "藥物（若不願絕育）：",
        "- Finasteride: 0.1-0.5 mg/kg PO q24h（5α還原酶抑制劑）",
        "- Osaterone acetate（抗雄激素）"
      ],
      prostatitis: [
        "長期抗生素（4-6週以上）：",
        "- Trimethoprim-sulfa: 15-30 mg/kg PO q12h",
        "- 或 Fluoroquinolones: Enrofloxacin 5-10 mg/kg PO q24h",
        "- Chloramphenicol（穿透性佳）",
        "絕育（促進恢復）",
        "止痛"
      ],
      abscess: [
        "手術引流（開放或超聲引導）",
        "部分前列腺切除或去勢",
        "長期抗生素",
        "靜脈輸液支持"
      ],
      carcinoma: [
        "手術切除困難且效果差",
        "化療：Carboplatin、Mitoxantrone",
        "NSAIDs：Piroxicam 0.3 mg/kg PO q24h",
        "放射治療（緩解症狀）",
        "尿道支架（阻塞）",
        "姑息性止痛"
      ]
    },
    prognosis: "BPH：絕育後預後極佳。前列腺炎：治療後預後良好。膿瘍：預後謹慎。前列腺癌：預後差，中位生存期約2-4個月。",
    pearls: [
      "直腸觸診是評估前列腺的基本方法",
      "BPH是未絕育公犬最常見前列腺問題",
      "絕育不預防前列腺癌（可能甚至增加風險）",
      "前列腺液或精液培養比尿液培養更準確",
      "抗生素需能穿透前列腺屏障"
    ],
    monitoring: ["前列腺大小（超聲）", "尿液培養", "臨床症狀", "若腫瘤：定期影像學分期"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "hydronephrosis": {
    zh: "腎水腫",
    en: "Hydronephrosis",
    definition: "因尿路梗阻導致腎盂和腎盞擴張積水，長期可致腎實質萎縮和功能喪失。",
    synonyms: ["腎積水", "水腎", "Renal Pelvis Dilation"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡",
      sex: "無明顯性別傾向",
      riskFactors: ["輸尿管結石", "輸尿管腫瘤", "輸尿管狹窄", "異位輸尿管", "腹腔腫瘤壓迫", "意外輸尿管結紮"]
    },
    clinicalPresentation: {
      history: ["單側可能無症狀", "雙側表現為急性或慢性腎衰竭", "腹部腫脹", "食慾下降", "嘔吐", "若感染可能發燒"],
      physicalExam: ["腹部觸診可能摸到腫大腎臟", "腎區疼痛（急性）", "脫水（若雙側或單腎動物）"]
    },
    pathophysiology: "尿路梗阻 → 尿液回流 → 腎盂壓力升高 → 腎實質缺血 → 腎小管萎縮 → 皮質變薄 → 腎功能喪失。完全梗阻數天內可造成不可逆損傷。部分梗阻可能數週至數月進展。",
    diagnosis: {
      overview: "超聲是診斷首選，需確定梗阻原因和位置",
      differentials: ["腎盂腎炎", "腎周假性囊腫", "多囊腎病", "腎盂擴張（非梗阻性）"],
      initialDB: ["腹部超聲（腎盂擴張、皮質厚度、輸尿管擴張）", "BUN/Creatinine", "尿液分析和培養", "腹部X光（結石？）"],
      advanced: ["CT泌尿道造影", "靜脈腎盂造影", "順行性腎盂造影"]
    },
    treatment: {
      overview: "解除梗阻、保存腎功能、治療感染",
      acute: [
        "緊急減壓（若雙側或單腎）：",
        "- 腎盂穿刺引流",
        "- 輸尿管支架或腎造口術",
        "感染控制：抗生素",
        "輸液支持"
      ],
      chronic: [
        "解除梗阻的手術：",
        "- 輸尿管切開取石",
        "- 輸尿管新植入術",
        "- SUB系統（皮下輸尿管旁路）",
        "- 輸尿管支架",
        "腎切除術（嚴重萎縮無功能且對側腎正常）",
        "感染：長期抗生素"
      ]
    },
    prognosis: "取決於梗阻持續時間、腎皮質厚度和對側腎功能。早期解除梗阻（<1-2週）預後較好。嚴重萎縮（皮質<2-3 mm）功能恢復有限。",
    pearls: [
      "單側腎水腫常因無症狀而延遲診斷",
      "腎皮質厚度是評估腎功能恢復潛力的指標",
      "貓輸尿管結石導致腎水腫越來越常見",
      "SUB系統是貓輸尿管梗阻的有效解決方案",
      "解除梗阻後可能出現阻塞後利尿"
    ],
    monitoring: ["腎功能（若雙側）", "超聲追蹤腎盂大小", "尿液培養", "對側腎評估"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "nephrotoxicity": {
    zh: "腎毒性",
    en: "Nephrotoxicity",
    definition: "外源性物質（藥物、毒物）或內源性物質對腎臟造成的直接損傷，導致急性腎損傷。",
    synonyms: ["腎臟中毒", "藥物性腎損傷", "Toxic Nephropathy", "Drug-induced Nephrotoxicity"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["老年", "已有腎臟疾病", "脫水", "低血壓", "同時使用多種腎毒性藥物"]
    },
    commonNephrotoxins: {
      drugs: [
        "氨基糖苷類抗生素（Gentamicin, Amikacin）",
        "NSAIDs（Carprofen, Meloxicam, Ibuprofen）",
        "ACE抑制劑（過量或脫水時）",
        "Amphotericin B",
        "Cisplatin",
        "Cyclosporine",
        "造影劑"
      ],
      toxins: [
        "乙二醇（防凍劑）",
        "百合植物（貓）",
        "葡萄/葡萄乾（犬）",
        "重金屬（鉛、汞）",
        "蛇毒",
        "蜜蜂/黃蜂毒"
      ],
      endogenous: [
        "肌紅蛋白（橫紋肌溶解）",
        "血紅蛋白（溶血）",
        "高鈣血症",
        "尿酸（腫瘤溶解症候群）"
      ]
    },
    clinicalPresentation: {
      history: ["毒物暴露或可疑藥物使用史", "突然嘔吐", "厭食", "嗜睡", "尿量改變"],
      physicalExam: ["脫水", "腎臟可能腫大且疼痛", "口腔潰瘍（尿毒症）", "可能有特定中毒徵象"]
    },
    pathophysiology: {
      mechanisms: [
        "直接腎小管毒性（氨基糖苷類、重金屬）",
        "腎血流改變（NSAIDs、ACE抑制劑）",
        "結晶沉積（乙二醇→草酸鈣）",
        "急性腎小管壞死",
        "間質性腎炎"
      ],
      etg: "乙二醇 → 乙醇脫氫酶代謝 → 乙醛酸、草酸 → 草酸鈣結晶沉積於腎小管 → 阻塞和毒性 → 急性腎衰竭"
    },
    diagnosis: {
      overview: "病史（暴露史）結合AKI表現",
      differentials: ["其他AKI原因", "腎前性氮質血症", "尿路梗阻"],
      initialDB: ["BUN/Creatinine", "電解質", "尿液分析（結晶、管型）", "血氣", "乙二醇檢測（若懷疑）"],
      advanced: ["藥物血中濃度（氨基糖苷類）", "腎臟活檢", "特定毒物篩檢"]
    },
    treatment: {
      overview: "停止暴露、支持治療、特定解毒劑（若有）",
      acute: [
        "一般措施：",
        "- 停用可疑藥物",
        "- 積極靜脈輸液（促進腎臟灌注和毒物排泄）",
        "- 糾正電解質異常",
        "特定解毒劑：",
        "乙二醇中毒：",
        "- Fomepizole: 犬-首劑20 mg/kg IV，然後15 mg/kg × 3次 q12h；貓-125 mg/kg IV，然後31 mg/kg × 3次 q12h",
        "- 或 Ethanol: 20% 溶液 5-6 mL/kg IV q4-6h（競爭性抑制）",
        "- 黃金治療時間：犬<8-12h，貓<3h",
        "百合中毒（貓）：",
        "- 48-72小時積極輸液利尿",
        "- 無特定解毒劑",
        "葡萄/葡萄乾中毒（犬）：",
        "- 催吐（若剛攝入）",
        "- 活性碳",
        "- 積極輸液48-72小時",
        "支持治療：",
        "- 止吐：Maropitant",
        "- 胃保護：Omeprazole",
        "- 血液透析（嚴重病例）"
      ],
      chronic: ["監測腎功能恢復", "避免再次暴露", "若進展為CKD則長期管理"]
    },
    prognosis: "取決於毒物類型、暴露劑量和治療時機。乙二醇：若在黃金時間內治療預後可好；延遲則預後極差。百合：及時輸液約50-90%存活。氨基糖苷類：停藥後多數可恢復。",
    pearls: [
      "百合對貓極度腎毒性，包括花粉",
      "乙二醇中毒貓的治療窗口極短（<3小時）",
      "NSAIDs在脫水或低血壓動物中腎毒性風險大增",
      "尿液中草酸鈣結晶提示乙二醇中毒",
      "預防勝於治療：避免高風險情況"
    ],
    monitoring: ["尿量", "BUN/Creatinine q12-24h", "電解質", "尿液分析"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; ASPCA Animal Poison Control"
  }
};

// 匯出供整合使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = URINARY_DISEASES;
}

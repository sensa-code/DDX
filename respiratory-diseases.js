// ======= 呼吸系統疾病 DISEASE_INFO =======
// Respiratory System Diseases
// 生成日期: 2026-02-04
// 資料來源：Clinical Veterinary Advisor: Dogs and Cats, 2nd Ed. (Etienne Côté)
// Textbook of Respiratory Disease in Dogs and Cats (Lynelle R. Johnson)
// 包含: 短頭犬呼吸道症候群、喉麻痺、氣管塌陷、犬舍咳、貓氣喘、支氣管炎、
//       肺水腫、胸腔積液、氣胸、膿胸、乳糜胸、肺纖維化、肺葉扭轉、肺血栓栓塞、吸入性肺炎

const RESPIRATORY_DISEASES = {

  // ==================== 上呼吸道疾病 ====================

  "brachycephalic-airway-syndrome": {
    zh: "短頭犬呼吸道症候群",
    en: "Brachycephalic Airway Syndrome (BAS)",
    definition: "短頭犬種因顱顏部結構異常導致的一系列上呼吸道阻塞性問題，包括狹窄鼻孔、軟顎過長、喉囊外翻和氣管發育不全等。",
    synonyms: ["Brachycephalic Obstructive Airway Syndrome", "BOAS", "短頭種氣道症候群", "扁臉犬症候群"],
    epidemiology: {
      species: "犬為主（貓少見：波斯貓、喜馬拉雅貓）",
      age: "先天性，症狀可在任何年齡出現，通常1-4歲明顯",
      sex: "無明顯性別傾向",
      riskFactors: ["短頭犬種（法國鬥牛犬、英國鬥牛犬、巴哥、波士頓梗、北京犬、西施犬）", "肥胖", "高溫高濕環境", "運動", "興奮/緊張"]
    },
    clinicalPresentation: {
      history: ["打鼾（睡眠和清醒時）", "呼吸困難（尤其運動或興奮時）", "運動不耐", "熱不耐", "嘔吐/反胃", "昏厥", "發紺", "睡眠呼吸暫停"],
      physicalExam: ["吸氣性喘鳴(Stridor)", "狹窄鼻孔", "軟顎過長（可視診或需麻醉檢查）", "體型肥胖", "發紺（嚴重時）", "呼吸費力", "張口呼吸"]
    },
    pathophysiology: "原發性異常（狹窄鼻孔、軟顎過長、鼻甲骨肥大、氣管發育不全）→ 氣道阻力增加 → 呼吸努力增加 → 氣道負壓增加 → 繼發性改變（喉囊外翻、喉塌陷、扁桃腺腫大）→ 進一步阻塞 → 惡性循環。慢性缺氧可導致肺動脈高壓和右心衰竭。",
    diagnosis: {
      overview: "臨床表現結合品種特徵，喉鏡和影像學確認具體異常",
      differentials: ["喉麻痺", "氣管塌陷", "喉腫瘤", "異物", "過敏性喉炎", "氣管發育不全"],
      initialDB: ["詳細身體檢查", "頸胸部X光（氣管直徑、肺部）", "輕度鎮靜下喉部檢查（軟顎、喉囊、喉功能）"],
      advanced: ["CT掃描（詳細評估鼻腔和氣道）", "支氣管鏡（評估氣管）", "血氣分析", "心臟超聲（若懷疑右心問題）"]
    },
    treatment: {
      overview: "輕度病例保守管理，中重度需手術矯正",
      acute: [
        "呼吸窘迫緊急處理：",
        "  - 氧氣支持",
        "  - 降溫（若過熱）",
        "  - 鎮靜：Acepromazine 0.01-0.05 mg/kg IV/IM 或 Butorphanol 0.2-0.4 mg/kg",
        "  - 類固醇（減少喉水腫）：Dexamethasone 0.1-0.2 mg/kg IV",
        "  - 必要時緊急氣管切開或插管"
      ],
      chronic: [
        "保守管理：",
        "  - 體重控制（減重對改善症狀至關重要）",
        "  - 避免高溫和劇烈運動",
        "  - 使用胸背帶而非項圈",
        "手術治療（推薦早期進行）：",
        "  - 鼻孔擴大術(Alar fold resection/Wedge resection)",
        "  - 軟顎切除術(Staphylectomy)",
        "  - 喉囊切除術(Laryngeal sacculectomy)",
        "  - 嚴重喉塌陷：永久性氣管切開術"
      ]
    },
    prognosis: "早期手術矯正預後良好（80-90%改善）。年輕、無繼發性改變者預後最佳。嚴重喉塌陷或氣管發育不全預後謹慎。未治療會進行性惡化。",
    pearls: [
      "「早期手術，越年輕越好」- 避免繼發性改變",
      "術後24-48小時是關鍵觀察期，需密切監測呼吸道",
      "肥胖顯著惡化症狀，減重是治療的重要部分",
      "這些犬種麻醉風險高，需特別注意插管和拔管",
      "消化道問題（胃食道逆流、食道裂孔疝）在BAS犬很常見"
    ],
    monitoring: ["呼吸頻率和型態", "運動耐受度", "體重", "睡眠品質", "術後氣道腫脹"],
    reference: "Johnson LR: Textbook of Respiratory Disease in Dogs and Cats. Elsevier, 2020; Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "laryngeal-paralysis": {
    zh: "喉麻痺",
    en: "Laryngeal Paralysis",
    definition: "喉返神經功能障礙導致杓狀軟骨無法正常外展，造成吸氣時喉門狹窄和上呼吸道阻塞。可為先天性或後天性。",
    synonyms: ["Lar Par", "LP", "喉癱瘓", "Geriatric Onset Laryngeal Paralysis Polyneuropathy (GOLPP)"],
    epidemiology: {
      species: "犬為主（貓罕見）",
      age: "先天性：幼犬；後天性：中老年大型犬（9-13歲）",
      sex: "公犬略多",
      riskFactors: ["大型/巨型犬種", "品種傾向（Labrador Retriever、Golden Retriever、St. Bernard、Newfoundland、Irish Setter）", "先天性：Bouvier des Flandres、Bull Terrier、Dalmatian、Husky", "甲狀腺功能低下（有爭議）", "創傷、腫瘤、手術損傷"]
    },
    clinicalPresentation: {
      history: ["進行性吸氣性喘鳴（數月至數年）", "運動不耐", "聲音改變（沙啞）", "咳嗽（尤其進食後）", "熱不耐", "昏厥", "可能有後肢無力（GOLPP）"],
      physicalExam: ["吸氣性喘鳴(Stridor)", "張口呼吸", "呼吸窘迫（嚴重時）", "發紺", "可能有後肢本體感覺異常", "甲狀腺觸診"]
    },
    pathophysiology: "喉返神經病變 → 環杓背側肌麻痺 → 杓狀軟骨無法外展 → 吸氣時喉門狹窄 → 吸氣性阻塞。特發性後天性喉麻痺(GOLPP)現被認為是廣泛性多發性神經病變的一部分，喉部症狀最先出現。",
    diagnosis: {
      overview: "臨床症狀結合喉鏡直視下確認杓狀軟骨運動異常",
      differentials: ["短頭犬呼吸道症候群", "喉腫瘤", "喉塌陷", "氣管塌陷", "異物", "喉創傷"],
      initialDB: ["胸腔X光（吸入性肺炎、巨食道）", "頸部X光", "輕度鎮靜下喉鏡檢查（觀察杓狀軟骨運動）"],
      advanced: ["神經肌肉評估（EMG）", "甲狀腺功能檢測", "透視檢查（吞嚥功能、巨食道）", "CT/MRI（若懷疑腫瘤）", "腦脊液分析"]
    },
    treatment: {
      overview: "輕度症狀可保守管理，中重度需手術治療",
      acute: [
        "呼吸窘迫緊急處理：",
        "  - 氧氣支持",
        "  - 降溫",
        "  - 鎮靜（同BAS）",
        "  - 類固醇（減少喉水腫）",
        "  - 必要時緊急插管或氣管切開"
      ],
      chronic: [
        "保守管理（輕度）：",
        "  - 體重控制",
        "  - 避免高溫和劇烈運動",
        "  - 抬高食碗（若有巨食道）",
        "手術治療：",
        "  - 單側杓狀軟骨外展固定術(Unilateral Arytenoid Lateralization/Tieback)",
        "    最常用，成功率約90%",
        "  - 雙側外展固定（不建議，吸入性肺炎風險高）",
        "  - 部分杓狀軟骨切除術",
        "  - 永久性氣管切開術（末期病例）"
      ]
    },
    prognosis: "單側tieback手術後90%以上改善。主要併發症是吸入性肺炎（10-30%），可能致命。GOLPP犬的神經病變會持續進展。",
    pearls: [
      "「Lar Par的喉鏡檢查需要完美的麻醉深度」- 太深無運動，太淺會假陽性",
      "Doxapram可輔助喉鏡檢查（刺激呼吸）",
      "術後永久改變飲食習慣（小份量、糊狀食物、慢食）以降低吸入性肺炎風險",
      "GOLPP犬同時評估後肢神經功能很重要",
      "術後數週吸氣聲可能仍存在但會改善"
    ],
    monitoring: ["呼吸型態", "進食後咳嗽", "肺炎徵象", "後肢功能（GOLPP）", "體重"],
    reference: "MacPhail CM: Laryngeal disease in dogs and cats. Vet Clin North Am Small Anim Pract 44:19-31, 2014"
  },

  "tracheal-collapse": {
    zh: "氣管塌陷",
    en: "Tracheal Collapse",
    definition: "氣管環軟骨變性導致氣管管腔狹窄的進行性疾病。背側氣管膜可能下垂到管腔內，造成呼吸道阻塞。",
    synonyms: ["Collapsing Trachea", "氣管軟化症", "Tracheomalacia"],
    epidemiology: {
      species: "犬（玩具犬和小型犬為主）",
      age: "中老年犬（6-7歲常見發病）",
      sex: "無明顯性別傾向",
      riskFactors: ["品種傾向（吉娃娃、約克夏、博美、玩具貴賓、馬爾濟斯）", "肥胖", "慢性呼吸道疾病", "心臟病（左心房擴大壓迫主支氣管）"]
    },
    clinicalPresentation: {
      history: ["慢性「鵝叫」樣咳嗽", "咳嗽因興奮、運動、飲水、牽繩拉扯而加重", "運動不耐", "呼吸困難", "發紺（嚴重時）", "昏厥"],
      physicalExam: ["誘發咳嗽（觸診氣管）", "「鵝叫」樣咳嗽", "吸氣性或呼氣性喘鳴（取決於塌陷位置）", "可能有心雜音（同時心臟病）", "可能有肺部異常音（若有支氣管炎）"]
    },
    pathophysiology: "氣管環軟骨基質（糖胺聚糖和軟骨素）減少 → 軟骨變軟 → C形軟骨環變扁平 → 背側氣管膜鬆弛下垂 → 管腔狹窄。頸部氣管塌陷在吸氣時惡化，胸腔內氣管塌陷在呼氣時惡化。分級：Grade I (25%塌陷) 到 Grade IV (>75%塌陷)。",
    diagnosis: {
      overview: "臨床表現結合影像學確認",
      differentials: ["慢性支氣管炎", "心臟病（咳嗽）", "喉麻痺", "氣管腫瘤", "異物", "肺炎"],
      initialDB: ["頸胸部X光（吸氣相+呼氣相，可見氣管直徑變化）", "心臟評估（X光、心臟超聲）"],
      advanced: ["透視檢查（動態評估塌陷程度）", "支氣管鏡（直視下分級、評估下呼吸道）", "CT掃描", "BAL（若懷疑併發感染）"]
    },
    treatment: {
      overview: "多數病例可藥物控制，嚴重或難治性病例考慮手術",
      acute: [
        "急性呼吸窘迫：",
        "  - 氧氣支持",
        "  - 鎮靜：Butorphanol 0.05-0.1 mg/kg IV",
        "  - 類固醇：Dexamethasone 0.1-0.25 mg/kg IV",
        "  - 支氣管擴張劑",
        "  - 降溫（若過熱）"
      ],
      chronic: [
        "藥物治療（多數病例首選）：",
        "  - 止咳藥：Hydrocodone 0.22 mg/kg PO q6-12h",
        "    或 Butorphanol 0.5-1 mg/kg PO q6-12h",
        "  - 支氣管擴張劑：Theophylline 10 mg/kg PO q12h",
        "    或 Terbutaline 1.25-5 mg/dog PO q8-12h",
        "  - 類固醇（短期爆發）：Prednisone 0.5-1 mg/kg PO q12-24h",
        "  - 抗生素（若有繼發感染）",
        "管理：",
        "  - 體重控制（至關重要）",
        "  - 使用胸背帶",
        "  - 避免刺激物（煙霧、灰塵）",
        "  - 控制環境溫度和濕度",
        "手術治療（嚴重或難治）：",
        "  - 氣管內支架置入(Intraluminal Stent)",
        "  - 氣管外環(Extraluminal rings)（頸部氣管）"
      ]
    },
    prognosis: "多數犬隻藥物治療可良好控制。疾病會緩慢進展。支架置入可明顯改善症狀但有併發症風險（支架移位、肉芽組織形成）。",
    pearls: [
      "頸部塌陷 → 吸氣時惡化；胸腔內塌陷 → 呼氣時惡化",
      "X光需吸氣和呼氣相才能完整評估",
      "70%病例同時有下呼吸道疾病（支氣管炎、支氣管軟化）",
      "支架是末線治療，非首選",
      "肥胖犬減重後症狀可能顯著改善"
    ],
    monitoring: ["咳嗽頻率和嚴重度", "呼吸頻率", "運動耐受度", "體重", "藥物副作用"],
    reference: "Johnson LR: Tracheal collapse. Diagnosis and medical and surgical treatment. Vet Clin North Am Small Anim Pract 30:1253-1266, 2000"
  },

  // ==================== 感染性呼吸道疾病 ====================

  "kennel-cough": {
    zh: "犬傳染性呼吸道疾病",
    en: "Kennel Cough (Canine Infectious Respiratory Disease Complex, CIRDC)",
    definition: "多種病原體引起的急性傳染性呼吸道感染綜合症，特徵為急性發作的咳嗽。常見於犬群聚環境。",
    synonyms: ["Kennel Cough", "犬舍咳", "Infectious Tracheobronchitis", "CIRDC", "傳染性氣管支氣管炎"],
    epidemiology: {
      species: "犬",
      age: "任何年齡，幼犬和老年犬症狀較嚴重",
      sex: "無性別傾向",
      riskFactors: ["犬群聚環境（犬舍、寵物店、收容所、狗公園、美容院）", "未接種疫苗", "運輸應激", "免疫抑制", "其他呼吸道疾病"]
    },
    clinicalPresentation: {
      history: ["急性發作的咳嗽（暴露後3-10天）", "「嘎」樣乾咳", "咳嗽後可能有作嘔/吐出黏液", "可能有鼻/眼分泌物", "打噴嚏", "輕度發燒", "通常精神食慾正常"],
      physicalExam: ["誘發咳嗽（氣管觸診）", "通常無明顯異常", "可能有鼻/眼分泌物", "肺部聽診通常正常", "嚴重病例可能發燒、肺部囉音"]
    },
    pathophysiology: "病原體（最常見：Bordetella bronchiseptica、犬副流感病毒、犬腺病毒2型、犬呼吸道冠狀病毒、犬流感病毒、支原體）→ 呼吸道上皮感染 → 纖毛損傷 → 氣道炎症和分泌物增加 → 咳嗽反射。混合感染常見。",
    diagnosis: {
      overview: "通常根據典型病史和臨床表現診斷，多數病例無需進一步檢查",
      differentials: ["氣管塌陷", "心臟病", "慢性支氣管炎", "肺炎", "異物", "寄生蟲（肺蟲、心絲蟲）"],
      initialDB: ["多數單純病例不需要", "胸腔X光（若症狀嚴重或持續>2週）", "心臟評估（排除心臟病）"],
      advanced: ["PCR檢測（多種病原體套組）", "BAL細菌培養和敏感性（若懷疑繼發感染）", "支原體培養"]
    },
    treatment: {
      overview: "多數病例自限性，7-14天可自行恢復。支持治療為主，嚴重或高風險病例使用抗生素",
      acute: [
        "輕度、無併發症病例：",
        "  - 支持治療：休息、避免刺激物",
        "  - 止咳藥（若咳嗽影響休息）：Hydrocodone 0.22 mg/kg PO q6-12h",
        "  - 蒸氣吸入（滋潤氣道）",
        "  - 隔離（防止傳播，至少2週）",
        "中重度或高風險病例（幼犬、老年、免疫抑制）：",
        "  - 抗生素：Doxycycline 5-10 mg/kg PO q12-24h x 10-14天",
        "    或 Azithromycin 5-10 mg/kg PO q24h x 3-5天",
        "  - 支氣管擴張劑（若有支氣管痙攣）",
        "嚴重肺炎：",
        "  - 住院、氧氣支持、靜脈輸液",
        "  - 靜脈抗生素"
      ],
      chronic: [
        "預防：",
        "  - 疫苗接種（Bordetella、副流感、腺病毒）",
        "  - 避免高風險環境（若可能）",
        "  - 寄宿前2週接種疫苗"
      ]
    },
    prognosis: "多數單純病例7-14天自行恢復，預後極佳。幼犬或免疫抑制者可能發展為嚴重肺炎。犬流感病毒株可能較嚴重。",
    pearls: [
      "「典型的犬舍咳聽起來像咳出東西但其實沒有」",
      "即使症狀消失後仍可排毒數週",
      "Bordetella疫苗有口服、鼻內、皮下三種給藥途徑",
      "抗生素不能縮短病毒感染病程，但可預防繼發細菌感染",
      "考慮犬流感病毒，尤其是群聚暴發且症狀較嚴重時"
    ],
    monitoring: ["咳嗽頻率和性質", "精神食慾", "呼吸頻率", "發燒", "分泌物性質"],
    reference: "Reagan KL, Sykes JE: Canine Infectious Respiratory Disease. Vet Clin North Am Small Anim Pract 50:405-418, 2020"
  },

  "aspiration-pneumonia": {
    zh: "吸入性肺炎",
    en: "Aspiration Pneumonia",
    definition: "因吸入胃內容物、食物、液體或其他異物進入下呼吸道而引起的肺部炎症和感染。是小動物常見的急性肺炎類型。",
    synonyms: ["Aspiration Pneumonitis", "誤吸性肺炎", "AP"],
    epidemiology: {
      species: "犬較常見，貓亦可發生",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["嘔吐", "巨食道", "喉麻痺", "口咽功能障礙", "意識障礙（麻醉、癲癇）", "強迫灌食", "氣管插管/拔管", "短頭犬種", "重症肌無力", "神經肌肉疾病"]
    },
    clinicalPresentation: {
      history: ["急性呼吸困難", "咳嗽", "發燒", "已知吸入事件或風險因素", "可能有嘔吐或反胃史"],
      physicalExam: ["發燒", "呼吸急促", "呼吸費力", "肺部濕囉音（尤其右中葉區域）", "發紺（嚴重時）", "可能有脫水"]
    },
    pathophysiology: "吸入異物 → 化學性肺損傷（胃酸pH<2.5特別損傷）+ 機械性阻塞 + 細菌感染 → 急性肺損傷 → 肺泡充滿炎性滲出物 → 低氧血症。右中肺葉最常受累（因支氣管角度）。混合性感染常見（厭氧菌+好氧菌）。",
    diagnosis: {
      overview: "病史、臨床表現和胸腔X光",
      differentials: ["社區性肺炎", "心源性肺水腫", "肺出血", "肺腫瘤", "ARDS", "肺栓塞"],
      initialDB: ["胸腔X光（典型：右中葉或雙側腹側肺浸潤）", "CBC（白血球增多伴左移）", "脈搏血氧儀", "血氣分析"],
      advanced: ["氣管沖洗(TTW)或BAL（細胞學+培養）", "血液培養（若敗血症）", "食道評估（若懷疑巨食道）", "吞嚥功能評估"]
    },
    treatment: {
      overview: "氧氣支持、抗生素治療、支持治療、處理原發病因",
      acute: [
        "氧氣支持（維持SpO2 >94%）",
        "靜脈輸液（謹慎，避免肺水腫）",
        "廣譜抗生素（涵蓋厭氧菌）：",
        "  - Ampicillin-Sulbactam 20-30 mg/kg IV q8h",
        "    + Enrofloxacin 5-10 mg/kg IV q24h",
        "  - 或 Clindamycin 10 mg/kg IV q12h + Fluoroquinolone",
        "支氣管擴張劑（若有支氣管痙攣）",
        "霧化治療（生理鹽水+/-支氣管擴張劑）",
        "翻身和叩擊（促進分泌物排出）",
        "嚴重低氧：考慮機械通氣"
      ],
      chronic: [
        "口服抗生素續療（總療程3-6週或X光改善後2週）",
        "處理原發病因：",
        "  - 巨食道：抬高餵食、改變食物質地",
        "  - 喉麻痺：手術矯正",
        "  - 嘔吐控制",
        "營養支持（若厭食）"
      ]
    },
    prognosis: "整體預後中等至良好（存活率約70-80%）。嚴重低氧血症、敗血症、ARDS預後較差。復發性吸入（如未治療的巨食道）預後謹慎。",
    pearls: [
      "右中葉是「吸入性肺炎葉」",
      "麻醉拔管後監測呼吸很重要",
      "胃酸吸入比食物吸入造成更嚴重損傷",
      "X光改變可能在吸入後12-24小時才出現",
      "尋找並處理原發病因以防止復發"
    ],
    monitoring: ["呼吸頻率和努力程度", "SpO2", "體溫", "食慾", "胸腔X光追蹤（7-10天後）"],
    reference: "Tart KM et al: Outcome of dogs with aspiration pneumonia: 127 cases (1997-2013). J Vet Emerg Crit Care 28:339-347, 2018"
  },

  // ==================== 下呼吸道疾病 ====================

  "feline-asthma": {
    zh: "貓氣喘",
    en: "Feline Asthma",
    definition: "貓的慢性下呼吸道發炎性疾病，特徵為氣道高反應性、可逆性支氣管收縮和嗜酸性球浸潤。可能與過敏原暴露相關。",
    synonyms: ["Feline Allergic Bronchitis", "Feline Bronchial Disease", "貓支氣管氣喘", "貓過敏性支氣管炎"],
    epidemiology: {
      species: "貓",
      age: "年輕至中年成貓（2-8歲常見發病）",
      sex: "母貓略多",
      riskFactors: ["品種傾向（暹羅貓）", "室內環境過敏原", "二手煙暴露", "灰塵、香氛、貓砂粉塵"]
    },
    clinicalPresentation: {
      history: ["陣發性咳嗽", "喘息", "呼吸困難", "張口呼吸", "運動不耐", "症狀可能有季節性", "可能有「蹲姿」咳嗽"],
      physicalExam: ["呼氣性喘息（Wheeze）", "呼氣期延長", "呼吸急促", "腹式呼吸", "發紺（嚴重發作時）", "可能有異常呼吸音"]
    },
    pathophysiology: "過敏原暴露 → Th2免疫反應 → 嗜酸性球和肥大細胞浸潤氣道 → 炎性介質釋放 → 支氣管平滑肌收縮 + 黏液分泌增加 + 氣道壁水腫 → 氣道狹窄和氣流受限。慢性可導致氣道重塑。",
    diagnosis: {
      overview: "臨床表現結合胸腔X光的典型改變，排除其他疾病",
      differentials: ["心絲蟲病(HARD)", "肺蟲感染", "細菌性支氣管肺炎", "肺腫瘤", "胸腔積液", "心臟病"],
      initialDB: ["胸腔X光（典型「甜甜圈」和「軌道」徵象、肺過度充氣、右中葉塌陷）", "糞便檢查（排除肺蟲）", "心絲蟲抗體/抗原測試", "心臟評估"],
      advanced: ["BAL（>17%嗜酸性球支持診斷）", "CT掃描", "過敏原測試（幫助有限）", "支氣管激發試驗"]
    },
    treatment: {
      overview: "急性發作緊急處理，長期以類固醇和支氣管擴張劑控制",
      acute: [
        "氣喘急性發作：",
        "  - 最小化處置應激",
        "  - 氧氣支持",
        "  - 快速作用支氣管擴張劑：",
        "    Terbutaline 0.01 mg/kg SC/IM",
        "    或 Albuterol 吸入（若可配合）",
        "  - 短效類固醇：Dexamethasone SP 0.25-0.5 mg/kg IV/IM",
        "  - 穩定後再進一步處置"
      ],
      chronic: [
        "類固醇治療（首選吸入）：",
        "  - 吸入型：Fluticasone 110-220 μg q12h（經貓專用間隔器）",
        "  - 口服：Prednisolone 1-2 mg/kg PO q12h，漸減至最低有效劑量",
        "支氣管擴張劑（輔助）：",
        "  - 吸入型：Albuterol PRN",
        "  - 口服：Terbutaline 0.1-0.2 mg/kg PO q12h",
        "環境管理：",
        "  - 移除或減少過敏原",
        "  - 使用低粉塵貓砂",
        "  - 避免香氛、香煙、噴霧劑",
        "  - 空氣清淨機",
        "其他治療（難治病例）：",
        "  - Cyclosporine 5 mg/kg PO q24h",
        "  - 過敏原特異性免疫治療"
      ]
    },
    prognosis: "多數貓可良好控制。完全治癒不常見。吸入型類固醇可減少全身副作用。急性嚴重發作可能致命。",
    pearls: [
      "貓張口呼吸是緊急狀況",
      "吸入型類固醇需要耐心訓練，但副作用少",
      "AeroKat是常用的貓吸入器間隔器",
      "典型X光但BAL嗜酸性球不高 → 考慮心絲蟲",
      "減重對肥胖的氣喘貓有幫助"
    ],
    monitoring: ["呼吸頻率（居家監測）", "咳嗽和喘息頻率", "運動耐受度", "藥物副作用（若口服類固醇）", "定期胸腔X光"],
    reference: "Trzil JE: Feline Asthma: Diagnostic and Treatment Update. Vet Clin North Am Small Anim Pract 50:375-391, 2020"
  },

  "bronchitis": {
    zh: "支氣管炎",
    en: "Bronchitis (Chronic Bronchitis)",
    definition: "氣管和支氣管的慢性炎症，定義為連續兩個月以上每天咳嗽，且排除其他心肺疾病。犬最常見的慢性咳嗽原因之一。",
    synonyms: ["Chronic Bronchitis", "慢性支氣管炎", "Chronic Obstructive Pulmonary Disease (COPD)"],
    epidemiology: {
      species: "犬（貓的慢性支氣管病變通常歸類為氣喘）",
      age: "中老年犬（>6歲）",
      sex: "無明顯性別傾向",
      riskFactors: ["小型犬", "肥胖", "環境刺激物暴露（香煙、空污）", "先前呼吸道感染", "牙周病"]
    },
    clinicalPresentation: {
      history: ["慢性咳嗽（>2個月）", "咳嗽可能「濕」或「乾」", "運動後或興奮時咳嗽加重", "可能有作嘔或嘔吐", "運動不耐", "夜間咳嗽"],
      physicalExam: ["氣管敏感（誘發咳嗽）", "呼氣期延長或喘息", "肺部可能有濕囉音或乾囉音", "可能肥胖"]
    },
    pathophysiology: "慢性氣道刺激和/或感染 → 持續性炎症 → 杯狀細胞增生、黏液分泌過多 → 纖毛功能下降 → 黏液清除能力下降 → 氣道重塑 → 不可逆性氣道改變。常與氣管塌陷、支氣管擴張症共存。",
    diagnosis: {
      overview: "排除性診斷：排除心臟病、寄生蟲、感染、腫瘤等其他咳嗽原因",
      differentials: ["心臟病", "氣管塌陷", "肺炎", "肺腫瘤", "心絲蟲病", "肺蟲", "異物", "肺纖維化"],
      initialDB: ["胸腔X光（支氣管紋理增強、「甜甜圈」和「軌道」徵象）", "心臟評估（X光、心臟超聲）", "心絲蟲檢測", "糞便檢查（肺蟲）"],
      advanced: ["BAL（非退化性炎症、排除感染和腫瘤）", "氣管沖洗", "支氣管鏡（觀察氣道、採樣）", "CT掃描"]
    },
    treatment: {
      overview: "無法治癒，目標是控制炎症和症狀，改善生活品質",
      acute: [
        "急性惡化：",
        "  - 氧氣支持（若需要）",
        "  - 短期類固醇衝擊",
        "  - 支氣管擴張劑",
        "  - 抗生素（若有繼發感染）"
      ],
      chronic: [
        "抗炎治療：",
        "  - 口服類固醇：Prednisone 0.5-1 mg/kg PO q12h，漸減至最低有效劑量",
        "  - 吸入型類固醇（減少全身副作用）",
        "支氣管擴張劑：",
        "  - Theophylline 10 mg/kg PO q12h（緩釋劑型）",
        "  - Terbutaline 1.25-5 mg/dog PO q8-12h",
        "止咳藥（謹慎使用，保留生產性咳嗽）：",
        "  - Hydrocodone 0.22 mg/kg PO q6-12h",
        "其他治療：",
        "  - 體重控制",
        "  - 避免環境刺激物",
        "  - 霧化治療",
        "  - 抗生素（若有繼發感染，依據培養結果）"
      ]
    },
    prognosis: "無法治癒但多數可良好控制。疾病會緩慢進展。生活品質通常可維持良好。嚴重或難治病例預後謹慎。",
    pearls: [
      "慢性支氣管炎是排除性診斷",
      "避免長期使用全劑量類固醇 → 副作用",
      "吸入型治療在犬比貓更困難",
      "治療期望是「控制」而非「治癒」",
      "環境管理和減重同藥物治療一樣重要"
    ],
    monitoring: ["咳嗽頻率和嚴重度", "運動耐受度", "體重", "藥物副作用", "定期胸腔X光"],
    reference: "Johnson LR: Chronic bronchitis in dogs. Clin Tech Small Anim Pract 19:19-26, 2004"
  },

  // ==================== 肺實質疾病 ====================

  "pulmonary-edema": {
    zh: "肺水腫",
    en: "Pulmonary Edema",
    definition: "肺間質和/或肺泡內液體異常積聚，導致氣體交換障礙。可為心因性或非心因性。",
    synonyms: ["Lung Edema", "肺積水"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡（心因性多見於中老年）",
      sex: "依原發病因而異",
      riskFactors: ["心臟病（二尖瓣疾病、DCM、HCM）", "輸液過量", "電擊", "溺水", "上呼吸道阻塞", "頭部創傷", "癲癇", "敗血症"]
    },
    clinicalPresentation: {
      history: ["急性呼吸困難", "咳嗽（犬）", "張口呼吸（貓）", "端坐呼吸", "可能有心臟病史", "可能有近期創傷、癲癇、電擊史"],
      physicalExam: ["呼吸急促", "呼吸費力", "肺部濕囉音（爆裂音）", "發紺", "心雜音或奔馬律（心因性）", "泡沫狀鼻分泌物（嚴重時）"]
    },
    pathophysiology: "心因性：左心功能不全 → 肺靜脈壓升高 → 肺微血管靜水壓升高 → 液體濾出超過淋巴引流能力 → 間質水腫 → 肺泡水腫。非心因性：肺毛細血管通透性增加（ARDS、神經性、過敏性等）→ 蛋白質和液體滲漏。",
    diagnosis: {
      overview: "胸腔X光確認，鑑別心因性vs非心因性很重要",
      differentials: ["肺炎", "肺出血", "ARDS", "肺腫瘤", "胸腔積液"],
      initialDB: ["胸腔X光（心因性：肺門周圍或尾背側分布；非心因性：尾背側或彌漫性）", "心臟超聲（評估心臟功能）", "SpO2", "BNP/NT-proBNP（鑑別心因性）"],
      advanced: ["血氣分析", "心電圖", "血壓"]
    },
    treatment: {
      overview: "氧氣支持、利尿劑（心因性）、處理原發病因",
      acute: [
        "心因性肺水腫：",
        "  - 氧氣支持",
        "  - 最小化應激",
        "  - 利尿劑：Furosemide 2-4 mg/kg IV（可重複至效果）",
        "  - 血管擴張劑（若血壓允許）：Nitroprusside CRI",
        "  - 正性肌力藥（若心輸出量低）：Dobutamine CRI",
        "  - 鎮靜（減少氧耗）：Butorphanol 0.2-0.3 mg/kg IM",
        "非心因性肺水腫：",
        "  - 氧氣支持",
        "  - 利尿劑效果有限",
        "  - 支持治療",
        "  - 治療原發病因",
        "  - 機械通氣（若嚴重低氧）"
      ],
      chronic: [
        "心因性：長期心臟藥物管理",
        "  - 利尿劑：Furosemide 1-4 mg/kg PO q8-12h",
        "  - Pimobendan 0.25-0.3 mg/kg PO q12h",
        "  - ACEI：Enalapril 0.5 mg/kg PO q12-24h",
        "限鈉飲食",
        "居家呼吸頻率監測"
      ]
    },
    prognosis: "心因性：取決於原發心臟病嚴重程度和反應。非心因性：取決於原發病因。急性肺水腫是緊急狀況，但多數對治療反應良好。",
    pearls: [
      "心因性肺水腫對Furosemide反應通常很快",
      "犬心因性肺水腫以肺門周圍分布為主",
      "貓心因性肺水腫分布較不典型",
      "「不要對肺水腫的貓做太多事」- 最小化應激",
      "居家呼吸頻率監測（>40次/分）可早期發現"
    ],
    monitoring: ["呼吸頻率和型態", "SpO2", "肺部聽診", "尿量（利尿劑反應）", "胸腔X光追蹤"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "pulmonary-fibrosis": {
    zh: "肺纖維化",
    en: "Pulmonary Fibrosis (Idiopathic Pulmonary Fibrosis, IPF)",
    definition: "肺間質進行性纖維化導致肺順應性下降和氣體交換障礙的慢性疾病。病因不明，尤其在West Highland White Terrier中有品種特異性。",
    synonyms: ["Idiopathic Pulmonary Fibrosis", "IPF", "特發性肺纖維化", "Westie Lung Disease"],
    epidemiology: {
      species: "犬（貓罕見）",
      age: "中老年犬（>9歲）",
      sex: "無明顯性別傾向",
      riskFactors: ["品種傾向（West Highland White Terrier最常見）", "其他梗犬（Staffordshire Bull Terrier、Scottish Terrier）", "慢性肺損傷史"]
    },
    clinicalPresentation: {
      history: ["進行性運動不耐（數月至數年）", "呼吸困難", "咳嗽（可能乾咳）", "發紺（晚期）", "昏厥"],
      physicalExam: ["吸氣期爆裂音（Velcro樣囉音）", "呼吸急促", "呼吸淺快", "發紺", "可能有心雜音（繼發性肺高壓、右心衰）"]
    },
    pathophysiology: "反覆的肺泡上皮損傷 → 異常修復反應 → 肌纖維母細胞增生 → 細胞外基質過度沉積 → 肺間質增厚和纖維化 → 肺順應性下降 → 限制性肺病 → 低氧血症 → 可能發展為肺高壓和右心衰竭。",
    diagnosis: {
      overview: "臨床表現結合HRCT或組織病理學確診",
      differentials: ["慢性支氣管炎", "肺腫瘤", "肺炎", "心臟病", "嗜酸性球性支氣管肺病", "肺高壓"],
      initialDB: ["胸腔X光（彌漫性間質紋理、支氣管周圍浸潤）", "SpO2/血氣（低氧血症）", "心臟超聲（排除心臟病、評估肺高壓）", "BNP"],
      advanced: ["高解析度CT(HRCT)（特徵性蜂窩狀改變）", "BAL（非特異性改變）", "肺活檢（確診但風險高）", "6分鐘步行測試"]
    },
    treatment: {
      overview: "無法治癒或逆轉，目標是減緩進展和緩解症狀",
      acute: [
        "急性惡化：",
        "  - 氧氣支持",
        "  - 支氣管擴張劑（若有支氣管痙攣）",
        "  - 類固醇衝擊（效果有限）"
      ],
      chronic: [
        "藥物治療（效果有限）：",
        "  - 類固醇：Prednisone 1-2 mg/kg PO q24h，漸減",
        "  - 支氣管擴張劑：Theophylline",
        "  - 抗纖維化藥物（研究中）：Pirfenidone、Nintedanib",
        "  - 肺高壓治療：Sildenafil 1-3 mg/kg PO q8-12h",
        "支持治療：",
        "  - 體重控制",
        "  - 避免過熱和劇烈運動",
        "  - 居家氧氣（終末期）",
        "  - 止咳藥（若咳嗽影響生活品質）"
      ]
    },
    prognosis: "預後謹慎至差。疾病會進展，存活時間中位數約1-2年（診斷後）。WHWT預後可能較其他品種差。",
    pearls: [
      "「Velcro囉音」是特徵性聽診發現",
      "Westie的IPF有遺傳成分，不建議繁殖",
      "類固醇效果通常令人失望",
      "Sildenafil可改善運動耐受度（若有肺高壓）",
      "居家氧氣可改善終末期生活品質"
    ],
    monitoring: ["呼吸頻率和努力程度", "SpO2", "運動耐受度", "生活品質評估", "定期胸腔X光或CT"],
    reference: "Heikkilä HP et al: Idiopathic pulmonary fibrosis in West Highland White Terriers. Vet Pathol 48:606-610, 2011"
  },

  "pulmonary-thromboembolism": {
    zh: "肺血栓栓塞",
    en: "Pulmonary Thromboembolism (PTE)",
    definition: "肺動脈或其分支被血栓阻塞，導致肺灌注減少和氣體交換障礙的急性危及生命狀況。",
    synonyms: ["PTE", "Pulmonary Embolism", "PE", "肺栓塞"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡（依原發病因）",
      sex: "無性別傾向",
      riskFactors: ["高凝狀態疾病：IMHA、腫瘤、蛋白質流失性腎病/腸病、庫欣症", "心臟病（尤其HCM貓）", "敗血症", "手術/創傷", "長期不動", "中央靜脈導管"]
    },
    clinicalPresentation: {
      history: ["急性呼吸困難", "突發虛弱或昏厥", "咳血（罕見）", "已知高風險疾病史"],
      physicalExam: ["急性呼吸窘迫", "心搏過速", "低血壓（大面積栓塞）", "發紺", "肺部聽診可能正常或有異常音", "可能有原發疾病的相關發現"]
    },
    pathophysiology: "血栓形成（通常來自深靜脈或右心）→ 栓塞進入肺動脈 → 機械性阻塞 + 血管收縮（血栓釋放介質）→ 肺灌注減少 → V/Q不匹配 → 低氧血症。大面積栓塞可導致急性右心衰竭和心因性休克。",
    diagnosis: {
      overview: "高度懷疑結合支持性檢查。確診困難，需排除其他原因",
      differentials: ["肺炎", "肺水腫", "ARDS", "氣胸", "心臟病", "嚴重貧血"],
      initialDB: ["動脈血氣（低氧血症、P(A-a)O2梯度增加、低碳酸血症）", "胸腔X光（可能正常或有非特異性改變）", "D-dimer（升高但非特異性）", "心臟超聲（右心擴大、肺高壓徵象）", "評估原發疾病"],
      advanced: ["CT血管造影(CTPA)（最佳確診方法）", "肺灌注掃描", "凝血功能（PT、PTT、抗凝血酶III、TEG）"]
    },
    treatment: {
      overview: "抗凝治療、支持治療、處理原發病因",
      acute: [
        "氧氣支持",
        "抗凝治療：",
        "  - Unfractionated Heparin: 150-300 U/kg IV bolus，",
        "    followed by 150-300 U/kg SC q6-8h",
        "  - 或 低分子量肝素(LMWH)：Enoxaparin 1 mg/kg SC q12h（犬）",
        "    或 1-1.5 mg/kg SC q12h（貓）",
        "  - 或 Dalteparin 150 U/kg SC q12h",
        "血流動力學支持（若休克）：",
        "  - 輸液（謹慎）",
        "  - 升壓藥（若需要）",
        "溶栓治療（人類使用，動物少見）：",
        "  - tPA：高風險，通常不建議"
      ],
      chronic: [
        "長期抗凝：",
        "  - 繼續LMWH 或",
        "  - 過渡到口服抗凝藥",
        "    Clopidogrel 1-2 mg/kg PO q24h（尤其貓）",
        "    Rivaroxaban（犬，劑量研究中）",
        "治療原發疾病（至關重要）"
      ]
    },
    prognosis: "預後謹慎至差。死亡率高（約50-80%）。取決於栓塞大小、原發疾病和能否控制高凝狀態。",
    pearls: [
      "「想到PTE比確診更重要」- 高風險患者要保持警覺",
      "胸腔X光正常不能排除PTE",
      "D-dimer陰性有助排除（陰性預測值高）",
      "IMHA是犬最常見的高凝狀態",
      "貓動脈血栓栓塞(ATE)是不同疾病（通常是主動脈末端）"
    ],
    monitoring: ["呼吸頻率和努力程度", "SpO2/血氣", "凝血功能（監測抗凝效果）", "原發疾病狀況"],
    reference: "Goggs R et al: Pulmonary thromboembolism. J Vet Emerg Crit Care 19:30-52, 2009"
  },

  // ==================== 胸腔疾病 ====================

  "pleural-effusion": {
    zh: "胸腔積液",
    en: "Pleural Effusion",
    definition: "胸膜腔內液體異常積聚。根據液體性質可分為漏出液、改良型漏出液、滲出液、乳糜液、血液或腫瘤性積液。",
    synonyms: ["胸水", "Hydrothorax", "胸腔積水"],
    epidemiology: {
      species: "犬貓皆常見",
      age: "任何年齡（依病因而異）",
      sex: "依病因而異",
      riskFactors: ["心臟病", "腫瘤", "感染（膿胸）", "創傷", "低蛋白血症", "淋巴管阻塞/損傷"]
    },
    clinicalPresentation: {
      history: ["漸進性或急性呼吸困難", "運動不耐", "咳嗽（犬）", "張口呼吸（貓）", "厭食", "體重減輕"],
      physicalExam: ["呼吸急促或費力", "限制性呼吸型態（淺快）", "腹側肺音減弱或消失", "心音可能低沉", "可能有發燒（感染性）", "可能有腹水"]
    },
    pathophysiology: "漏出液：靜水壓增加（心衰）或膠體滲透壓降低（低蛋白）。滲出液：胸膜炎症或感染增加血管通透性。乳糜液：胸管損傷或阻塞。血胸：創傷、凝血障礙、腫瘤破裂。腫瘤性：直接浸潤或淋巴回流阻塞。",
    diagnosis: {
      overview: "胸腔穿刺術是診斷和治療的關鍵步驟",
      differentials: ["依液體性質分類（見下）"],
      initialDB: ["胸腔X光（評估積液量和分布）", "TFAST超聲（快速確認積液）", "胸腔穿刺術（診斷性+治療性）", "胸水分析（總蛋白、細胞計數、細胞學、必要時培養）"],
      advanced: ["心臟超聲（排除心臟病）", "胸腔CT", "胸腔鏡檢查", "淋巴管造影"]
    },
    treatment: {
      overview: "胸腔穿刺減壓是首要步驟，同時診斷和治療原發病因",
      acute: [
        "治療性胸腔穿刺：",
        "  - 抽出積液以緩解呼吸窘迫",
        "  - 可重複進行",
        "  - 送液體分析",
        "氧氣支持（穩定後再進行穿刺）",
        "根據積液性質進一步治療：",
        "  - 漏出液/改良型漏出液 → 治療原發病（心臟病、低蛋白）",
        "  - 膿性 → 胸管引流 + 抗生素",
        "  - 乳糜 → 保守或手術治療",
        "  - 血性 → 評估凝血、考慮輸血、找出血來源",
        "  - 腫瘤性 → 腫瘤治療"
      ],
      chronic: [
        "反覆積液：放置胸管",
        "特定治療（見各別疾病）",
        "原發病因治療是關鍵"
      ]
    },
    prognosis: "取決於原發病因。感染性（膿胸）經適當治療預後可良好。腫瘤性預後通常較差。心因性取決於心臟病嚴重程度。",
    pearls: [
      "呼吸窘迫的患者先穿刺減壓再拍X光",
      "胸水分析是確定病因的關鍵",
      "三角蛋白 > 2.5 g/dL 或細胞計數 > 5000/μL 提示滲出液",
      "乳糜液三酸甘油脂 > 血清，膽固醇 < 血清",
      "雙側積液常見於心臟病、FIP、腫瘤"
    ],
    monitoring: ["呼吸頻率和努力程度", "積液再積聚速度", "胸腔X光追蹤", "原發病因治療反應"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "pneumothorax": {
    zh: "氣胸",
    en: "Pneumothorax",
    definition: "胸膜腔內存在空氣，導致肺塌陷和呼吸功能障礙。可為自發性、創傷性或醫源性。",
    synonyms: ["氣胸", "PTX", "Collapsed Lung"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["創傷（最常見）", "肺部疾病（肺大泡、肺腫瘤、肺蟲）", "機械通氣", "胸腔穿刺併發症", "食道破裂"]
    },
    clinicalPresentation: {
      history: ["急性呼吸困難", "可能有創傷史", "突發虛弱"],
      physicalExam: ["呼吸急促", "呼吸淺快", "背側肺音減弱或消失", "叩診過度共鳴", "發紺", "皮下氣腫（若有胸壁損傷）"]
    },
    pathophysiology: "空氣進入胸膜腔（來自肺、氣道、食道或胸壁損傷）→ 胸腔負壓消失 → 肺彈性回縮 → 肺塌陷 → 通氣面積減少 → 低氧血症。張力性氣胸：單向閥效應導致空氣持續積聚 → 縱隔移位 → 靜脈回流受阻 → 心輸出量下降 → 休克。",
    diagnosis: {
      overview: "臨床表現結合胸腔X光確診",
      differentials: ["胸腔積液", "橫膈膜疝氣", "肺腫瘤", "肺大泡"],
      initialDB: ["胸腔X光（肺與胸壁分離、肺塌陷、無肺紋理區域）", "TFAST超聲（快速排除積液、確認滑動徵消失）"],
      advanced: ["胸腔CT（尋找肺大泡、腫瘤）", "支氣管鏡（若懷疑氣道損傷）"]
    },
    treatment: {
      overview: "輕度可保守觀察，中重度需胸腔穿刺或胸管引流",
      acute: [
        "張力性氣胸：立即胸腔穿刺減壓（緊急！）",
        "氧氣支持",
        "胸腔穿刺術（治療性）：",
        "  - 輕度（<25%塌陷）：可觀察，可能自行吸收",
        "  - 中度（25-50%塌陷）：胸腔穿刺，可能需重複",
        "  - 重度（>50%塌陷）或持續漏氣：胸管引流",
        "胸管放置（持續漏氣或反覆氣胸）",
        "止痛（創傷性）"
      ],
      chronic: [
        "尋找和治療原發病因：",
        "  - 肺大泡：手術切除",
        "  - 腫瘤：切除或化療",
        "  - 創傷：支持治療，通常會癒合",
        "自發性復發性氣胸：考慮肺葉切除或胸膜固定術"
      ]
    },
    prognosis: "創傷性氣胸經適當治療預後通常良好。自發性氣胸需評估原發病因。復發性或雙側氣胸預後較謹慎。",
    pearls: [
      "張力性氣胸是臨床診斷，不要等X光！",
      "呼氣相X光可更清楚顯示小量氣胸",
      "持續漏氣（胸管持續有氣泡）提示肺或氣道損傷",
      "犬自發性氣胸常與肺大泡相關",
      "皮下氣腫常與氣胸相關但不一定"
    ],
    monitoring: ["呼吸頻率和努力程度", "SpO2", "胸管引流量", "胸腔X光追蹤", "是否持續漏氣"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "pyothorax": {
    zh: "膿胸",
    en: "Pyothorax",
    definition: "胸膜腔內膿性感染，特徵為化膿性胸腔積液。是嚴重的危及生命感染。",
    synonyms: ["Empyema", "化膿性胸膜炎", "Septic Pleuritis"],
    epidemiology: {
      species: "犬貓皆可發生（貓較常見）",
      age: "年輕至中年動物較常見",
      sex: "公貓略多（可能與打架外傷相關）",
      riskFactors: ["穿刺傷（貓咬傷）", "異物吸入（草芒）", "食道穿孔", "肺炎擴散", "胸腔手術後感染"]
    },
    clinicalPresentation: {
      history: ["漸進性呼吸困難", "發燒", "厭食", "嗜睡", "體重減輕", "可能有外傷史"],
      physicalExam: ["發燒", "呼吸困難", "腹側肺音減弱", "心音低沉", "可能有惡臭口氣（厭氧菌感染）", "脫水", "可能有咬傷痕跡"]
    },
    pathophysiology: "細菌進入胸腔（穿刺傷、吸入、血行播散、鄰近器官擴散）→ 胸膜炎症 → 滲出液積聚 → 細菌增殖 → 化膿性積液 → 可能形成纖維蛋白分隔（loculation）→ 敗血症。混合感染常見（厭氧菌+好氧菌）。",
    diagnosis: {
      overview: "胸腔穿刺術獲取膿性液體是診斷關鍵",
      differentials: ["其他胸腔積液類型", "FIP（貓）", "腫瘤性積液"],
      initialDB: ["胸腔X光（胸腔積液）", "胸腔穿刺術", "胸水分析：混濁或膿性、惡臭（厭氧菌）、高蛋白（>3 g/dL）、高白血球（>50,000/μL）、退化性嗜中性球、可能見細菌", "細菌培養和敏感性（需氧+厭氧）", "CBC（嗜中性球增多伴左移）"],
      advanced: ["胸腔CT（評估分隔、尋找異物或原發病灶）", "支氣管鏡（異物）"]
    },
    treatment: {
      overview: "胸管引流和沖洗是治療核心，結合長期抗生素",
      acute: [
        "胸管放置和引流（雙側若雙側積液）",
        "胸腔沖洗：",
        "  - 溫生理鹽水沖洗（10-20 mL/kg）",
        "  - 每8-12小時沖洗直到液體清澈",
        "靜脈抗生素（廣譜，涵蓋厭氧菌）：",
        "  - Ampicillin-Sulbactam 20-30 mg/kg IV q8h",
        "    + Enrofloxacin 5-10 mg/kg IV q24h",
        "  - 或 Clindamycin 10-15 mg/kg IV q12h + Fluoroquinolone",
        "輸液支持",
        "營養支持",
        "止痛"
      ],
      chronic: [
        "胸管保留直到：",
        "  - 24小時引流量 <2 mL/kg",
        "  - 液體性質改善",
        "  - 臨床改善",
        "口服抗生素續療（總療程4-8週）",
        "尋找和處理原發病因：",
        "  - 異物取出",
        "  - 食道修復",
        "難治病例：開胸探查和清創"
      ]
    },
    prognosis: "經積極治療存活率約70-90%。預後因素：早期診斷、適當引流、Actinomyces感染較難治（需更長療程）。",
    pearls: [
      "貓膿胸常與咬傷相關，但常無明顯外傷史",
      "草芒吸入是犬常見原因",
      "惡臭液體強烈提示厭氧菌感染",
      "務必同時做需氧和厭氧培養",
      "胸腔沖洗是治療成功的關鍵"
    ],
    monitoring: ["體溫", "呼吸狀況", "引流液量和性質", "白血球計數", "胸腔X光追蹤"],
    reference: "Barrs VR, Beatty JA: Feline pyothorax - new insights into an old problem. Vet J 179:163-170, 2009"
  },

  "chylothorax": {
    zh: "乳糜胸",
    en: "Chylothorax",
    definition: "胸膜腔內積聚乳糜液（含有乳糜微粒的淋巴液）。可為特發性或繼發於胸管損傷/阻塞。",
    synonyms: ["Chylous Effusion", "乳糜性胸腔積液"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡（貓可能年輕成年較多）",
      sex: "無明顯性別傾向",
      riskFactors: ["品種傾向（犬：Afghan Hound、Shiba Inu；貓：Siamese、Himalayan）", "心臟病（尤其右心衰竭）", "前縱隔腫瘤", "胸管損傷（創傷、手術）", "心絲蟲病"]
    },
    clinicalPresentation: {
      history: ["漸進性呼吸困難", "運動不耐", "咳嗽", "厭食", "體重減輕"],
      physicalExam: ["呼吸困難", "呼吸淺快", "腹側肺音減弱", "可能有心雜音或心律不整", "可能消瘦"]
    },
    pathophysiology: "胸管（收集下半身和腸道淋巴液）損傷或阻塞 → 乳糜液滲漏入胸腔。特發性可能與胸管先天異常或淋巴管擴張相關。繼發性原因包括：右心衰竭（胸管回流受阻）、前縱隔腫瘤、心絲蟲、創傷。慢性乳糜胸可導致纖維化胸膜炎。",
    diagnosis: {
      overview: "胸水分析確認乳糜液性質",
      differentials: ["其他胸腔積液", "假性乳糜（高膽固醇積液）"],
      initialDB: ["胸腔穿刺術", "胸水分析：乳白色或粉紅色、三酸甘油脂>血清（診斷標準）、膽固醇<血清", "胸腔X光", "心臟超聲（排除心臟病）", "心絲蟲檢測"],
      advanced: ["胸腔CT（評估縱隔腫瘤、淋巴管）", "淋巴管造影（術前評估）", "前縱隔探查"]
    },
    treatment: {
      overview: "先嘗試保守治療，失敗則考慮手術",
      acute: [
        "治療性胸腔穿刺（緩解症狀）",
        "治療原發病因（若可識別）：",
        "  - 心臟病：心臟藥物",
        "  - 腫瘤：手術/化療",
        "  - 心絲蟲：驅蟲治療"
      ],
      chronic: [
        "保守治療（嘗試2-4週）：",
        "  - 低脂飲食或MCT飲食",
        "    （減少乳糜微粒形成）",
        "  - Rutin 50 mg/kg PO q8h（刺激淋巴巨噬細胞吞噬）",
        "  - Octreotide（減少淋巴流量，效果不一）",
        "  - 反覆胸腔穿刺",
        "手術治療（保守治療失敗）：",
        "  - 胸管結紮(Thoracic Duct Ligation)",
        "  - 心包膜切除術(Pericardiectomy)",
        "  - 胸膜固定術(Pleurodesis)",
        "  - 大網膜引流術",
        "  - 被動胸膜-腹膜分流管（終末期）"
      ]
    },
    prognosis: "保守治療成功率約25-50%。手術治療成功率約50-80%。特發性預後較繼發性好。慢性乳糜胸可導致限制性胸膜炎，預後較差。",
    pearls: [
      "三酸甘油脂>血清是診斷乳糜的關鍵",
      "禁食後抽取的乳糜液可能不呈乳白色",
      "慢性乳糜胸導致免疫抑制（淋巴細胞和蛋白質流失）",
      "手術前建議淋巴管造影評估胸管解剖",
      "合併胸管結紮+心包膜切除效果較單一手術好"
    ],
    monitoring: ["呼吸狀況", "積液再積聚速度", "體重和營養狀況", "淋巴細胞計數", "血清總蛋白"],
    reference: "Singh A et al: Chylothorax in dogs and cats. J Am Anim Hosp Assoc 48:17-23, 2012"
  },

  "lung-lobe-torsion": {
    zh: "肺葉扭轉",
    en: "Lung Lobe Torsion",
    definition: "肺葉沿其長軸旋轉導致支氣管和血管扭結，造成肺葉充血、壞死和胸腔積液的急性危及生命狀況。",
    synonyms: ["Pulmonary Lobe Torsion", "肺扭轉"],
    epidemiology: {
      species: "犬為主（貓罕見）",
      age: "任何年齡，中年犬較常見",
      sex: "無明顯性別傾向",
      riskFactors: ["大型深胸犬種（Afghan Hound、Borzoi、Great Dane）", "小型犬（Pug最常見）", "先前胸腔手術或疾病", "胸腔積液", "肺葉塌陷後再擴張"]
    },
    clinicalPresentation: {
      history: ["急性呼吸困難", "咳嗽（可能咳血）", "厭食", "嗜睡", "可能有先前胸腔疾病史"],
      physicalExam: ["呼吸困難", "發燒", "肺部聽診異常（局部肺音減弱或消失）", "心搏過速", "蒼白或發紺"]
    },
    pathophysiology: "肺葉旋轉（通常180度或更多）→ 支氣管扭結（阻塞氣流）+ 肺靜脈阻塞（阻塞血液回流）而肺動脈相對通暢 → 肺葉充血、水腫 → 壞死 → 胸腔滲血性積液。右中葉（犬）和左前葉/右中葉（貓）最常受累。",
    diagnosis: {
      overview: "胸腔X光和CT可診斷，手術確認",
      differentials: ["肺炎", "肺腫瘤", "肺膿瘍", "胸腔積液其他原因", "肺葉塌陷"],
      initialDB: ["胸腔X光（特徵：受累肺葉呈均質緻密影、位置異常、支氣管走向異常、胸腔積液）", "胸腔穿刺（通常為血性或膿血性滲出液）"],
      advanced: ["胸腔CT（支氣管截斷徵、肺葉位置異常）", "支氣管鏡（可見支氣管扭結）"]
    },
    treatment: {
      overview: "手術切除受累肺葉是唯一根治方法",
      acute: [
        "術前穩定：",
        "  - 氧氣支持",
        "  - 胸腔穿刺（減壓）",
        "  - 輸液支持",
        "  - 抗生素（預防性）",
        "緊急開胸手術：",
        "  - 受累肺葉切除術",
        "  - 術中不要嘗試解開扭轉（可能釋放毒素和血栓）",
        "  - 檢查其他肺葉"
      ],
      chronic: [
        "術後監測：",
        "  - 呼吸功能",
        "  - 感染徵象",
        "  - 胸腔引流",
        "尋找原發病因（若有）"
      ]
    },
    prognosis: "手術治療存活率約70-80%。預後因素：手術時間、是否有敗血症、是否有其他肺葉受累。延遲診斷和治療預後較差。",
    pearls: [
      "「不要解開扭轉」- 直接切除以避免再灌注損傷",
      "右中葉是犬最常扭轉的肺葉",
      "Pug雖為小型犬但肺葉扭轉風險高",
      "支氣管走向異常是重要X光徵象",
      "胸腔積液後再擴張的肺葉有扭轉風險"
    ],
    monitoring: ["呼吸功能", "胸腔引流量", "發燒", "X光追蹤"],
    reference: "Murphy KA, Brisson BA: Evaluation of lung lobe torsion in Pugs: 7 cases (1991-2004). J Am Vet Med Assoc 228:86-90, 2006"
  }

};

// 疾病別名映射（用於搜尋）
const RESPIRATORY_DISEASE_ALIASES = {
  // 上呼吸道疾病
  "短頭犬呼吸道症候群": "brachycephalic-airway-syndrome",
  "短頭犬症候群": "brachycephalic-airway-syndrome",
  "BOAS": "brachycephalic-airway-syndrome",
  "BAS": "brachycephalic-airway-syndrome",
  "扁臉犬": "brachycephalic-airway-syndrome",
  "brachycephalic": "brachycephalic-airway-syndrome",

  "喉麻痺": "laryngeal-paralysis",
  "喉癱瘓": "laryngeal-paralysis",
  "lar par": "laryngeal-paralysis",
  "GOLPP": "laryngeal-paralysis",
  "laryngeal paralysis": "laryngeal-paralysis",

  "氣管塌陷": "tracheal-collapse",
  "氣管軟化": "tracheal-collapse",
  "collapsing trachea": "tracheal-collapse",
  "鵝叫": "tracheal-collapse",

  // 感染性疾病
  "犬舍咳": "kennel-cough",
  "犬傳染性呼吸道疾病": "kennel-cough",
  "CIRDC": "kennel-cough",
  "傳染性氣管支氣管炎": "kennel-cough",
  "kennel cough": "kennel-cough",

  "吸入性肺炎": "aspiration-pneumonia",
  "誤吸性肺炎": "aspiration-pneumonia",
  "aspiration pneumonia": "aspiration-pneumonia",

  // 下呼吸道疾病
  "貓氣喘": "feline-asthma",
  "貓哮喘": "feline-asthma",
  "貓支氣管氣喘": "feline-asthma",
  "feline asthma": "feline-asthma",
  "貓過敏性支氣管炎": "feline-asthma",

  "支氣管炎": "bronchitis",
  "慢性支氣管炎": "bronchitis",
  "chronic bronchitis": "bronchitis",
  "COPD": "bronchitis",

  // 肺實質疾病
  "肺水腫": "pulmonary-edema",
  "肺積水": "pulmonary-edema",
  "pulmonary edema": "pulmonary-edema",

  "肺纖維化": "pulmonary-fibrosis",
  "特發性肺纖維化": "pulmonary-fibrosis",
  "IPF": "pulmonary-fibrosis",
  "Westie lung": "pulmonary-fibrosis",

  "肺血栓栓塞": "pulmonary-thromboembolism",
  "肺栓塞": "pulmonary-thromboembolism",
  "PTE": "pulmonary-thromboembolism",
  "PE": "pulmonary-thromboembolism",
  "pulmonary embolism": "pulmonary-thromboembolism",

  // 胸腔疾病
  "胸腔積液": "pleural-effusion",
  "胸水": "pleural-effusion",
  "pleural effusion": "pleural-effusion",

  "氣胸": "pneumothorax",
  "PTX": "pneumothorax",
  "pneumothorax": "pneumothorax",

  "膿胸": "pyothorax",
  "化膿性胸膜炎": "pyothorax",
  "empyema": "pyothorax",
  "pyothorax": "pyothorax",

  "乳糜胸": "chylothorax",
  "乳糜性胸腔積液": "chylothorax",
  "chylothorax": "chylothorax",

  "肺葉扭轉": "lung-lobe-torsion",
  "肺扭轉": "lung-lobe-torsion",
  "lung torsion": "lung-lobe-torsion"
};

// 導出（若在模組環境中使用）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RESPIRATORY_DISEASES, RESPIRATORY_DISEASE_ALIASES };
}

console.log("Respiratory Diseases Info loaded:", Object.keys(RESPIRATORY_DISEASES).length, "diseases");

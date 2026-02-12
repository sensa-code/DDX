// ======= 血液學疾病 DISEASE_INFO =======
// Hematological Diseases
// 資料來源：Clinical Veterinary Advisor: Dogs and Cats, 2nd Ed. (Etienne Côté)
// Schalm's Veterinary Hematology, 6th Ed.

const HEMATOLOGICAL_DISEASES = {
  "immune-mediated-thrombocytopenia": {
    zh: "免疫介導性血小板減少",
    en: "Immune-Mediated Thrombocytopenia (ITP)",
    definition: "免疫系統產生針對自身血小板的抗體，導致血小板過早破壞和血小板計數嚴重下降的自體免疫疾病。",
    synonyms: ["ITP", "IMT", "Idiopathic Thrombocytopenic Purpura", "自發性血小板減少性紫癜", "免疫性血小板減少症"],
    epidemiology: {
      species: "犬常見，貓罕見",
      age: "中年犬（平均5-6歲）",
      sex: "母犬發病率略高",
      riskFactors: ["可卡犬", "古代牧羊犬", "貴賓犬", "德國牧羊犬", "近期疫苗接種", "近期感染", "藥物反應", "腫瘤"]
    },
    clinicalPresentation: {
      history: ["瘀斑或瘀點", "牙齦出血", "鼻出血", "血尿或黑便", "嗜睡", "食慾下降"],
      physicalExam: ["瘀點（針尖狀出血點）", "瘀斑（皮膚大片出血）", "黏膜出血", "視網膜出血", "黏膜蒼白（若有顯著失血）", "脾腫大（部分病例）"]
    },
    pathophysiology: "抗血小板抗體（主要IgG）→ 結合血小板表面 → 網狀內皮系統（主要脾臟）吞噬 → 血小板壽命縮短 → 嚴重血小板減少 → 一次止血功能障礙 → 自發性出血",
    diagnosis: {
      overview: "排除性診斷：嚴重血小板減少（通常<30,000/μL）伴正常或增生骨髓巨核細胞",
      differentials: ["感染性血小板減少（埃利希體、巴貝西蟲）", "DIC", "藥物誘導", "骨髓疾病", "脾臟隔離"],
      initialDB: ["CBC（血小板計數、血塗片檢查）", "網織紅血球計數", "凝血功能（PT、PTT正常）", "血塗片（排除假性血小板減少）", "Coombs試驗（排除Evans Syndrome）"],
      advanced: ["骨髓穿刺（巨核細胞正常或增生）", "抗血小板抗體檢測", "PCR/血清學（埃利希體、巴貝西蟲）", "腹部超聲", "ANA"]
    },
    treatment: {
      overview: "免疫抑制治療為主，嚴重出血需輸血支持",
      acute: [
        "免疫抑制治療：",
        "- Prednisone/Prednisolone: 2 mg/kg PO q12h",
        "- 或 Dexamethasone: 0.3-0.5 mg/kg IV q24h（急性）",
        "聯合免疫抑制（嚴重或難治）：",
        "- Azathioprine: 2 mg/kg PO q24h x 5-7天，後q48h（僅犬）",
        "- 或 Cyclosporine: 5-10 mg/kg PO q12h",
        "- 或 Mycophenolate: 10-20 mg/kg PO q12h",
        "人免疫球蛋白（危及生命出血）：",
        "- Human IV Immunoglobulin (hIVIG): 0.5-1 g/kg IV over 6-12h",
        "- Vincristine: 0.02 mg/kg IV（刺激血小板釋放）",
        "輸血支持（活動性出血）：",
        "- 全血或血小板濃縮液（效果短暫）",
        "- 新鮮冷凍血漿（若有凝血因子消耗）",
        "胃腸道保護：Omeprazole 1 mg/kg PO q24h"
      ],
      chronic: [
        "類固醇緩慢減量（4-6個月）",
        "監測復發（約50%會復發）",
        "長期低劑量免疫抑制（難治病例）",
        "脾臟切除術（反覆復發、藥物無效）"
      ]
    },
    prognosis: "整體預後良好，約70-90%對治療有反應。死亡率5-10%，主要死於嚴重顱內或胃腸道出血。約50%會復發。",
    pearls: [
      "血小板<30,000/μL才會有自發性出血",
      "瘀點是血小板疾病的特徵性表現",
      "血塗片檢查：排除血小板凝集（假性血小板減少）",
      "先排除傳染病（埃利希體），再開始免疫抑制",
      "輸注血小板效果短暫（數小時內被破壞）"
    ],
    monitoring: ["血小板計數q2-3天（急性期）", "CBC週監測（穩定後）", "出血徵象", "類固醇副作用"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; Schalm's Veterinary Hematology, 6th Ed."
  },

  "von-willebrand-disease": {
    zh: "乏乏因氏病",
    en: "von Willebrand Disease (vWD)",
    definition: "最常見的遺傳性出血疾病，因von Willebrand因子（vWF）量或功能缺陷導致血小板黏附功能障礙。",
    synonyms: ["vWD", "馮乏布蘭氏病", "馮威里布蘭德氏病", "血管性血友病"],
    epidemiology: {
      species: "犬常見（已報導超過50品種），貓罕見",
      age: "先天性，通常年輕時發現",
      sex: "男女皆可，體染色體遺傳",
      riskFactors: ["杜賓犬（Type 1，最常見70%攜帶者）", "德國短毛指示犬（Type 2）", "蘇格蘭梗（Type 3）", "雪特蘭牧羊犬", "切薩皮克灣獵犬", "金毛獵犬"]
    },
    clinicalPresentation: {
      history: ["輕微創傷後過度出血", "手術後持續出血", "拔牙或換牙時出血", "發情期過度出血", "自發性黏膜出血"],
      physicalExam: ["黏膜表面出血（牙齦、鼻腔）", "瘀斑", "血腫", "關節出血罕見（與血友病不同）", "嚴重病例可見蒼白黏膜"]
    },
    pathophysiology: "vWF缺乏或功能異常 → 血小板無法黏附到損傷血管內皮 → 一次止血障礙 → 黏膜表面出血。Type 1：vWF量減少；Type 2：vWF多聚體異常；Type 3：vWF完全缺乏（最嚴重）",
    diagnosis: {
      overview: "臨床表現結合vWF活性檢測確診",
      differentials: ["ITP", "血小板功能障礙", "血友病", "其他凝血因子缺乏"],
      initialDB: ["血小板計數（正常）", "PT/PTT（通常正常，Type 3可能PTT延長）", "頰黏膜出血時間（BMBT延長）"],
      advanced: ["vWF抗原濃度（vWF:Ag）", "vWF活性（vWF:Act或vWF:RCo）", "多聚體分析", "基因檢測"]
    },
    treatment: {
      overview: "預防性管理為主，出血時補充vWF",
      acute: [
        "控制出血：",
        "- 局部壓迫止血",
        "- 輸注冷沉澱物（Cryoprecipitate）：含高濃度vWF",
        "- 新鮮冷凍血漿（FFP）：10-20 mL/kg",
        "- 全血（若有貧血）",
        "Desmopressin (DDAVP)：",
        "- 1 μg/kg SQ/IV（Type 1有效）",
        "- 術前30-60分鐘給予",
        "- 可使vWF濃度暫時升高2-3倍",
        "- Type 2和3效果差",
        "抗纖溶劑：",
        "- Tranexamic acid: 10-15 mg/kg PO/IV q8h",
        "- Aminocaproic acid: 50-100 mg/kg PO q8h"
      ],
      chronic: [
        "避免手術和創傷",
        "手術前輸注冷沉澱物或FFP",
        "避免使用影響血小板功能的藥物（NSAID、阿斯匹靈）",
        "不建議繁殖"
      ]
    },
    prognosis: "Type 1：預後良好，適當管理下可正常生活。Type 2：預後中等。Type 3：預後謹慎，嚴重出血風險高。",
    pearls: [
      "vWD是犬最常見的遺傳性出血疾病",
      "杜賓犬是最常見受影響品種",
      "BMBT是簡單的篩選測試",
      "DDAVP僅對Type 1有效",
      "甲狀腺功能低下可加重vWD症狀"
    ],
    monitoring: ["出血徵象", "術前vWF評估", "家族史調查"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; Schalm's Veterinary Hematology, 6th Ed."
  },

  "hemophilia-a": {
    zh: "A型血友病",
    en: "Hemophilia A",
    definition: "X染色體連鎖遺傳性出血疾病，因凝血因子VIII缺乏導致二次止血功能障礙。",
    synonyms: ["Factor VIII Deficiency", "第八因子缺乏症", "經典血友病", "Classic Hemophilia"],
    epidemiology: {
      species: "犬貓皆可發生，犬較常見",
      age: "先天性，通常幼年時發現",
      sex: "主要影響雄性（X連鎖隱性遺傳），雌性為攜帶者",
      riskFactors: ["德國牧羊犬", "金毛獵犬", "愛爾蘭雪達犬", "聖伯納犬", "迷你雪納瑞", "薩摩耶犬"]
    },
    clinicalPresentation: {
      history: ["關節血腫", "肌肉深部血腫", "手術或創傷後延遲出血", "臍帶斷端出血", "換牙時持續出血"],
      physicalExam: ["關節腫脹（血關節病）", "深部肌肉血腫", "跛行", "蒼白黏膜（嚴重出血）", "黏膜出血較少見（與vWD不同）"]
    },
    pathophysiology: "因子VIII缺乏 → 內源性凝血途徑受損 → 無法有效產生凝血酶 → 纖維蛋白形成不足 → 二次止血障礙 → 延遲性深部組織出血",
    diagnosis: {
      overview: "臨床表現結合PTT延長和因子VIII活性檢測",
      differentials: ["血友病B", "vWD（Type 3可合併因子VIII下降）", "其他凝血因子缺乏", "抗凝血劑中毒"],
      initialDB: ["血小板計數（正常）", "PT（正常）", "PTT/APTT（延長）", "BMBT（正常）"],
      advanced: ["因子VIII活性測定（<25%為輕度，<5%為中度，<1%為重度）", "vWF檢測（排除Type 3 vWD）", "基因檢測"]
    },
    treatment: {
      overview: "急性出血時補充因子VIII，預防性管理避免出血",
      acute: [
        "新鮮冷凍血漿（FFP）：",
        "- 10-20 mL/kg IV",
        "- 可重複q8-12h（因子VIII半衰期約6-12小時）",
        "冷沉澱物（Cryoprecipitate）：",
        "- 含高濃度因子VIII",
        "- 1 unit/10 kg",
        "重組因子VIII（若可獲得）：",
        "- 50-100 IU/kg IV",
        "- 昂貴但效果確定",
        "全血輸注（若有貧血）",
        "抗纖溶劑：",
        "- Tranexamic acid: 10-15 mg/kg PO/IV q8h"
      ],
      chronic: [
        "避免創傷和高風險活動",
        "手術前預防性輸注FFP或冷沉澱物",
        "不建議繁殖",
        "避免肌肉注射",
        "基因諮詢"
      ]
    },
    prognosis: "重度血友病預後謹慎，反覆關節出血可致永久性關節損傷。輕度血友病適當管理下可有良好生活品質。",
    pearls: [
      "PTT延長 + PT正常 = 內源性途徑問題",
      "關節出血是血友病的特徵（vWD較少見）",
      "雌性可為攜帶者（PTT可能輕度延長）",
      "因子VIII半衰期短，需頻繁輸注",
      "Type 3 vWD因子VIII也會下降，需鑑別"
    ],
    monitoring: ["PTT", "出血徵象", "關節狀態", "輸血反應"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; Schalm's Veterinary Hematology, 6th Ed."
  },

  "hemophilia-b": {
    zh: "B型血友病",
    en: "Hemophilia B",
    definition: "X染色體連鎖遺傳性出血疾病，因凝血因子IX缺乏導致二次止血功能障礙。",
    synonyms: ["Factor IX Deficiency", "第九因子缺乏症", "Christmas Disease", "聖誕節病"],
    epidemiology: {
      species: "犬貓皆可發生，較血友病A罕見",
      age: "先天性，通常幼年時發現",
      sex: "主要影響雄性（X連鎖隱性遺傳）",
      riskFactors: ["英國史賓格獵犬", "凱恩梗", "聖伯納犬", "愛爾達獵犬", "拉布拉多獵犬", "貓（英國短毛貓）"]
    },
    clinicalPresentation: {
      history: ["與血友病A相似", "關節和肌肉出血", "手術後延遲出血", "臍帶出血", "換牙出血"],
      physicalExam: ["關節血腫", "深部肌肉血腫", "跛行", "蒼白黏膜", "皮下血腫"]
    },
    pathophysiology: "因子IX缺乏 → 內源性凝血途徑受損 → tenase複合物無法正常形成 → 因子X活化不足 → 凝血酶生成減少 → 纖維蛋白形成不足 → 二次止血障礙",
    diagnosis: {
      overview: "臨床與血友病A相似，需特異性因子檢測區分",
      differentials: ["血友病A", "vWD", "其他凝血因子缺乏", "抗凝血劑中毒"],
      initialDB: ["血小板計數（正常）", "PT（正常）", "PTT/APTT（延長）", "BMBT（正常）"],
      advanced: ["因子IX活性測定", "因子VIII活性（正常，排除血友病A）", "基因檢測"]
    },
    treatment: {
      overview: "與血友病A治療原則相似，補充因子IX",
      acute: [
        "新鮮冷凍血漿（FFP）：",
        "- 10-20 mL/kg IV",
        "- 因子IX半衰期較長（約14-24小時），可q12-24h給予",
        "重組因子IX（若可獲得）",
        "全血輸注（若有貧血）",
        "注意：冷沉澱物不含因子IX，對血友病B無效",
        "抗纖溶劑：",
        "- Tranexamic acid: 10-15 mg/kg PO/IV q8h"
      ],
      chronic: [
        "避免創傷",
        "手術前預防性輸注FFP",
        "不建議繁殖",
        "基因諮詢"
      ]
    },
    prognosis: "與血友病A相似，取決於嚴重程度。適當管理下可有合理的生活品質。",
    pearls: [
      "血友病B比血友病A罕見約5-10倍",
      "臨床表現與血友病A無法區分，需實驗室檢測",
      "因子IX半衰期較長，輸注頻率可較低",
      "冷沉澱物對血友病B無效（不含因子IX）",
      "貓的血友病B比血友病A相對常見"
    ],
    monitoring: ["PTT", "出血徵象", "關節狀態", "輸血反應"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; Schalm's Veterinary Hematology, 6th Ed."
  },

  "disseminated-intravascular-coagulation": {
    zh: "彌散性血管內凝血",
    en: "Disseminated Intravascular Coagulation (DIC)",
    definition: "繼發於嚴重系統性疾病的複雜凝血病理狀態，特徵為全身性凝血活化導致微血栓形成，繼而消耗凝血因子和血小板引起出血。",
    synonyms: ["DIC", "消耗性凝血病", "Consumptive Coagulopathy", "去纖維蛋白綜合症"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["敗血症", "嚴重創傷", "熱射病", "蛇毒咬傷", "免疫介導性溶血性貧血（IMHA）", "胰臟炎", "腫瘤（血管肉瘤）", "嚴重肝病", "產科急症"]
    },
    clinicalPresentation: {
      history: ["原發疾病症狀", "多處出血", "瘀斑", "血尿或黑便"],
      physicalExam: ["瘀點和瘀斑", "多處出血（靜脈穿刺點、牙齦）", "器官功能障礙徵象", "黏膜蒼白", "休克徵象", "可能有血栓徵象（呼吸窘迫、肢體冷涼）"]
    },
    pathophysiology: "觸發因素（敗血症、創傷等）→ 組織因子釋放 → 系統性凝血活化 → 廣泛微血栓形成 → 凝血因子和血小板消耗 → 同時繼發性纖溶 → 出血傾向。結果：矛盾的血栓形成和出血並存",
    diagnosis: {
      overview: "DIC是臨床綜合診斷，需結合原發疾病和多項凝血異常",
      differentials: ["原發性纖溶", "肝衰竭相關凝血病", "維生素K缺乏", "嚴重血小板減少其他原因"],
      initialDB: [
        "血小板計數（減少）",
        "PT（延長）",
        "PTT（延長）",
        "纖維蛋白原（早期升高，晚期下降）",
        "D-dimer（升高）",
        "抗凝血酶III（AT III）（下降）",
        "血塗片（破碎紅血球/schistocytes）"
      ],
      advanced: ["TEG/ROTEM", "纖維蛋白降解產物（FDP）", "原發病因評估"]
    },
    treatment: {
      overview: "治療原發病因是關鍵，同時支持凝血功能",
      acute: [
        "治療原發病因（最重要！）：",
        "- 敗血症：抗生素、感染源控制",
        "- 創傷：手術止血",
        "- IMHA：免疫抑制",
        "補充凝血成分：",
        "- 新鮮冷凍血漿（FFP）: 10-20 mL/kg IV",
        "- 含凝血因子、抗凝血酶III、纖維蛋白原",
        "- 冷沉澱物（纖維蛋白原、因子VIII）",
        "- 血小板輸注（若嚴重血小板減少且出血）",
        "- 濃縮紅血球（若貧血）",
        "抗凝治療（爭議，血栓傾向為主時）：",
        "- 低分子肝素（LMWH）: 100-200 IU/kg SQ q8-12h",
        "- Unfractionated heparin: 50-100 IU/kg SQ q6-8h",
        "抗纖溶劑（一般避免使用）"
      ],
      chronic: ["持續治療原發病因", "監測凝血功能恢復"]
    },
    prognosis: "預後謹慎至差，死亡率高達50-70%。預後主要取決於原發病因是否可控制。早期識別和積極治療原發病因可改善預後。",
    pearls: [
      "DIC是症候群，不是診斷 - 必須找出並治療原因",
      "「DIC = Death Is Coming」反映其高死亡率",
      "血栓和出血可同時存在",
      "血小板、PT、PTT、纖維蛋白原至少3項異常支持診斷",
      "治療原發病因比補充凝血成分更重要",
      "抗凝治療在犬的DIC中角色仍有爭議"
    ],
    monitoring: ["血小板計數q6-12h", "PT/PTT", "纖維蛋白原", "D-dimer", "AT III", "出血和血栓徵象"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; Schalm's Veterinary Hematology, 6th Ed."
  },

  "rodenticide-toxicity": {
    zh: "滅鼠劑中毒",
    en: "Rodenticide Toxicity (Anticoagulant)",
    definition: "攝入抗凝血滅鼠劑導致維生素K依賴性凝血因子合成障礙，引起嚴重出血傾向的中毒。",
    synonyms: ["Anticoagulant Rodenticide Poisoning", "Warfarin Toxicity", "香豆素中毒", "老鼠藥中毒"],
    epidemiology: {
      species: "犬常見，貓較少見",
      age: "任何年齡，幼犬因好奇心較常見",
      sex: "無性別傾向",
      riskFactors: ["戶外活動", "居家有使用滅鼠劑", "鄉村環境", "好奇或貪吃的狗"]
    },
    clinicalPresentation: {
      history: ["已知或懷疑攝入滅鼠劑", "攝入後2-5天出現症狀", "虛弱", "呼吸困難", "跛行", "腹部膨脹"],
      physicalExam: ["黏膜蒼白", "瘀斑和瘀點", "血胸", "心包積血", "腹腔出血", "關節出血", "皮下血腫", "呼吸窘迫"]
    },
    pathophysiology: "抗凝血滅鼠劑抑制維生素K環氧化物還原酶 → 維生素K無法再生 → 維生素K依賴性凝血因子（II、VII、IX、X）合成障礙 → 凝血因子耗竭（攝入後2-5天）→ 嚴重二次止血障礙 → 自發性出血",
    diagnosis: {
      overview: "可疑暴露史 + PT顯著延長（早期）+ 凝血因子下降",
      differentials: ["其他凝血因子缺乏", "DIC", "肝功能衰竭", "血友病", "vWD"],
      initialDB: [
        "PT（顯著延長，通常>正常值2-3倍）",
        "PTT（隨後延長）",
        "血小板計數（正常）",
        "PCV/TS",
        "PIVKA（維生素K拮抗劑誘導蛋白）"
      ],
      advanced: ["凝血因子活性（II、VII、IX、X下降）", "滅鼠劑篩檢（胃內容物、肝臟、血液）", "腹部超聲/X光（腔體出血）"]
    },
    treatment: {
      overview: "維生素K1是解毒劑，嚴重出血需輸血支持",
      acute: [
        "近期攝入（<2-4小時）：",
        "- 催吐（若無禁忌）",
        "- 活性碳：1-2 g/kg PO",
        "維生素K1（Phytonadione）：",
        "- 負荷劑量：2.5-5 mg/kg PO/SQ（分多點注射）",
        "- 口服吸收需脂肪（與食物同服）",
        "- 注意：IV給藥可致過敏反應",
        "嚴重出血（活動性出血或PCV下降）：",
        "- 新鮮冷凍血漿（FFP）: 10-20 mL/kg IV",
        "- 提供即時凝血因子",
        "- 全血（若嚴重貧血）",
        "氧氣支持（若呼吸窘迫/血胸）"
      ],
      chronic: [
        "維生素K1維持治療：",
        "- 第一代抗凝血劑（Warfarin）: 1-2.5 mg/kg PO q12h x 2-4週",
        "- 第二代抗凝血劑（Brodifacoum、Bromadiolone）: 2.5-5 mg/kg PO q12h x 4-6週",
        "停藥後48-72小時複查PT",
        "若PT仍延長，繼續治療2週後再測"
      ]
    },
    prognosis: "及時診斷和治療預後良好。未治療或嚴重腔體出血預後謹慎。關鍵是維生素K1治療足夠時間（第二代滅鼠劑需4-6週）。",
    pearls: [
      "症狀出現在攝入後2-5天（凝血因子耗竭時間）",
      "PT是最先延長的凝血指標（因子VII半衰期最短）",
      "維生素K1口服需與脂肪同服以增加吸收",
      "第二代滅鼠劑半衰期長，需要更長治療時間",
      "停藥後必須複查PT確認",
      "維生素K3（Menadione）對此中毒無效"
    ],
    monitoring: ["PT q24-48h（急性期）", "PCV", "出血徵象", "停藥後48-72h PT"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; ASPCA Poison Control Guidelines"
  },

  "evans-syndrome": {
    zh: "乏乏氏症候群",
    en: "Evans Syndrome",
    definition: "免疫介導性溶血性貧血（IMHA）和免疫介導性血小板減少症（ITP）同時或相繼發生的嚴重自體免疫疾病。",
    synonyms: ["Evans Syndrome", "Combined IMHA and ITP", "聯合免疫介導性血液破壞"],
    epidemiology: {
      species: "犬為主，貓罕見",
      age: "中年犬（平均5-7歲）",
      sex: "母犬略多",
      riskFactors: ["可卡犬", "英國史賓格獵犬", "愛爾蘭雪達犬", "貴賓犬", "古代牧羊犬", "先前有IMHA或ITP病史"]
    },
    clinicalPresentation: {
      history: ["虛弱", "嗜睡", "食慾下降", "運動不耐", "瘀斑", "血尿或黑便", "嘔吐"],
      physicalExam: ["嚴重蒼白黏膜", "黃疸", "瘀點和瘀斑", "心搏過速", "脾腫大", "發燒", "黏膜出血"]
    },
    pathophysiology: "同時產生抗紅血球和抗血小板抗體 → 紅血球在脾臟/肝臟被吞噬破壞（血管外溶血）或補體介導血管內溶血 + 血小板被網狀內皮系統破壞 → 嚴重貧血合併血小板減少 → 組織缺氧 + 出血傾向",
    diagnosis: {
      overview: "同時滿足IMHA和ITP的診斷標準",
      differentials: ["單獨IMHA或ITP", "DIC", "骨髓疾病", "傳染病（巴貝西蟲、埃利希體）", "藥物反應"],
      initialDB: [
        "CBC：貧血（通常PCV<20%）+ 血小板減少（<50,000/μL）",
        "網織紅血球計數（增生性貧血）",
        "血塗片：球形紅血球、自體凝集、血小板減少",
        "直接Coombs試驗（陽性）",
        "膽紅素（升高）",
        "PT/PTT（排除DIC）"
      ],
      advanced: ["骨髓穿刺", "腹部超聲", "PCR（排除傳染病）", "ANA"]
    },
    treatment: {
      overview: "積極免疫抑制治療 + 輸血支持，比單獨IMHA或ITP更具挑戰性",
      acute: [
        "免疫抑制治療（立即開始）：",
        "- Prednisone/Prednisolone: 2 mg/kg PO q12h",
        "- 或 Dexamethasone: 0.3-0.5 mg/kg IV q24h",
        "聯合免疫抑制（通常需要）：",
        "- Azathioprine: 2 mg/kg PO q24h x 5-7天，後q48h（僅犬）",
        "- 或 Cyclosporine: 5-10 mg/kg PO q12h",
        "- 或 Mycophenolate: 10-20 mg/kg PO q12h",
        "危及生命時：",
        "- hIVIG: 0.5-1 g/kg IV over 6-12h",
        "輸血支持：",
        "- 濃縮紅血球：10-20 mL/kg（嚴重貧血）",
        "- 血小板輸注效果短暫但活動性出血時可用",
        "- 交叉配血！",
        "血栓預防（IMHA高風險）：",
        "- 低分子肝素或Clopidogrel",
        "胃腸道保護"
      ],
      chronic: [
        "緩慢減量類固醇（數月）",
        "長期聯合免疫抑制（許多需要）",
        "監測復發",
        "脾臟切除術（難治病例）"
      ]
    },
    prognosis: "預後謹慎至不良。比單獨IMHA或ITP預後差。死亡率可達30-50%。復發常見。需要積極和長期的免疫抑制治療。",
    pearls: [
      "Evans Syndrome比單獨IMHA或ITP更難治療",
      "通常需要聯合免疫抑制劑",
      "輸血可能加速免疫破壞，但嚴重貧血時仍需要",
      "IMHA的血栓風險仍存在，需要預防",
      "復發率高，需要長期追蹤",
      "可能是系統性自體免疫疾病（如SLE）的表現"
    ],
    monitoring: ["CBC q1-2天（急性期）", "網織紅血球", "血塗片", "膽紅素", "出血和血栓徵象"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; Schalm's Veterinary Hematology, 6th Ed."
  },

  "aplastic-anemia": {
    zh: "再生不良性貧血",
    en: "Aplastic Anemia",
    definition: "骨髓造血功能衰竭導致全血球減少（紅血球、白血球、血小板皆減少）的嚴重血液疾病。",
    synonyms: ["Bone Marrow Failure", "Pancytopenia", "骨髓衰竭", "全血球減少症", "骨髓發育不全"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["藥物（雌激素、氯黴素、化療藥）", "毒素", "傳染病（貓泛白細胞減少症、埃利希體）", "免疫介導", "輻射暴露", "特發性"]
    },
    clinicalPresentation: {
      history: ["進行性虛弱", "嗜睡", "反覆感染", "出血傾向", "體重下降", "已知藥物或毒素暴露"],
      physicalExam: ["蒼白黏膜", "發燒（感染）", "瘀點和瘀斑", "心搏過速", "呼吸急促", "淋巴結和脾臟不腫大（骨髓源性）"]
    },
    pathophysiology: "骨髓造血幹細胞受損或減少 → 紅血球、粒細胞、血小板生成均減少 → 貧血（組織缺氧）+ 嗜中性球減少（感染風險）+ 血小板減少（出血傾向）",
    diagnosis: {
      overview: "全血球減少 + 非再生性貧血 + 骨髓活檢顯示造血組織減少",
      differentials: ["骨髓腫瘤浸潤（白血病、淋巴瘤）", "骨髓纖維化", "傳染病（埃利希體、巴維西蟲）", "藥物誘導骨髓抑制", "免疫介導性骨髓疾病"],
      initialDB: ["CBC（全血球減少）", "網織紅血球計數（極低或缺乏 = 非再生性）", "血塗片", "血液生化"],
      advanced: ["骨髓穿刺和活檢（造血細胞減少、脂肪增加）", "傳染病篩檢", "藥物和毒素暴露史", "鐵儲存評估"]
    },
    treatment: {
      overview: "移除病因、支持治療、可能需要免疫抑制或骨髓移植",
      acute: [
        "移除可能病因：",
        "- 停用可疑藥物",
        "- 治療潛在傳染病",
        "支持治療：",
        "- 輸血：濃縮紅血球或全血（PCV<15-20%）",
        "- 血小板輸注（活動性出血）",
        "- 廣譜抗生素（嗜中性球減少伴發燒）",
        "免疫抑制治療（免疫介導或特發性）：",
        "- Prednisone: 2 mg/kg PO q12h",
        "- Cyclosporine: 5-10 mg/kg PO q12h",
        "刺激造血：",
        "- 促紅血球生成素（Epoetin）: 100-150 IU/kg SQ 3x/週",
        "- G-CSF（僅短期，有抗體風險）"
      ],
      chronic: [
        "長期免疫抑制（若有反應）",
        "定期監測CBC",
        "造血幹細胞移植（理論上可行但罕見執行）"
      ]
    },
    prognosis: "預後謹慎至差。藥物相關若停藥可能恢復，但需數週至數月。特發性或免疫介導預後較差。死亡通常因感染或出血。",
    pearls: [
      "全血球減少 + 非再生性 = 骨髓問題",
      "骨髓活檢是確診關鍵",
      "雌激素（Sertoli細胞瘤產生）是犬常見原因",
      "貓泛白細胞減少症（貓瘟）可致暫時性骨髓抑制",
      "恢復需要時間，造血恢復可能需數週",
      "嗜中性球<1000/μL時感染風險極高"
    ],
    monitoring: ["CBC q2-3天（急性期）", "發燒和感染徵象", "出血徵象", "網織紅血球"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; Schalm's Veterinary Hematology, 6th Ed."
  },

  "iron-deficiency-anemia": {
    zh: "缺鐵性貧血",
    en: "Iron Deficiency Anemia",
    definition: "因鐵缺乏導致血紅蛋白合成不足，產生小球性低色素性貧血的疾病。",
    synonyms: ["Iron Deficiency", "Microcytic Anemia", "Hypochromic Anemia", "低色素小球性貧血"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "幼犬貓（營養性）或任何年齡（慢性失血）",
      sex: "無性別傾向",
      riskFactors: ["慢性胃腸道出血（腫瘤、潰瘍）", "嚴重跳蚤/蜱感染", "凝血障礙", "慢性泌尿道出血", "幼犬貓營養不良", "鉤蟲感染"]
    },
    clinicalPresentation: {
      history: ["進行性虛弱", "運動不耐", "嗜睡", "食慾下降", "可能有異食癖", "黑便或血便"],
      physicalExam: ["蒼白黏膜", "心搏過速", "心雜音（貧血性）", "毛髮乾燥無光澤", "可能有原發疾病徵象（腫塊、跳蚤）"]
    },
    pathophysiology: "鐵流失（慢性出血）或攝取不足 → 體內鐵儲存耗竭 → 血紅蛋白合成不足 → 紅血球體積變小（小球性）且血紅蛋白含量降低（低色素性）→ 組織氧氣輸送減少",
    diagnosis: {
      overview: "小球性低色素性貧血 + 低血清鐵/鐵蛋白 + 找出失血原因",
      differentials: ["慢性疾病性貧血（ACD）", "先天性血紅蛋白病", "鉛中毒", "門脈系統分流"],
      initialDB: [
        "CBC：MCV下降（<60 fL犬，<40 fL貓）、MCHC下降",
        "血塗片：小紅血球、低色素、靶形細胞",
        "網織紅血球計數（可高或低）",
        "糞便潛血測試"
      ],
      advanced: [
        "血清鐵（下降）",
        "總鐵結合力（TIBC）（升高）",
        "血清鐵蛋白（下降）",
        "骨髓鐵染色（儲存鐵缺乏）",
        "腹部影像（尋找出血源）",
        "內視鏡（胃腸道出血）"
      ]
    },
    treatment: {
      overview: "找出並治療失血原因 + 鐵補充",
      acute: [
        "治療原發病因：",
        "- 胃腸道腫瘤：手術切除",
        "- 胃潰瘍：制酸劑",
        "- 跳蚤/蜱：驅蟲",
        "- 鉤蟲：驅蟲劑",
        "鐵補充：",
        "- 口服鐵劑（首選）：",
        "  Ferrous sulfate: 100-300 mg/犬 PO q24h",
        "  或 5-10 mg/kg elemental iron PO q24h",
        "- 注射鐵劑（口服不耐或吸收障礙）：",
        "  Iron dextran: 10-20 mg/kg IM（單次，需謹慎）",
        "輸血（嚴重貧血PCV<12-15%）"
      ],
      chronic: [
        "口服鐵補充至少3-6個月",
        "PCV正常後繼續1-2個月以補充儲存鐵",
        "預防復發（治療慢性失血原因）"
      ]
    },
    prognosis: "若能找出並治療失血原因，預後良好。鐵補充後數週內應見網織紅血球反應，數月內PCV恢復正常。",
    pearls: [
      "成年動物缺鐵性貧血幾乎總是因為慢性失血",
      "幼犬貓可因營養不足或寄生蟲感染",
      "小球性+低色素性是缺鐵性貧血特徵",
      "鐵蛋白是最敏感的早期指標",
      "口服鐵劑可能造成胃腸道不適",
      "治療原因比補鐵更重要"
    ],
    monitoring: ["PCV/網織紅血球q1-2週", "血清鐵", "糞便潛血", "原發疾病狀態"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; Schalm's Veterinary Hematology, 6th Ed."
  },

  "polycythemia-vera": {
    zh: "真性紅血球增多症",
    en: "Polycythemia Vera",
    definition: "骨髓造血幹細胞克隆性增生導致紅血球過度生產的骨髓增生性腫瘤，不依賴促紅血球生成素。",
    synonyms: ["Primary Polycythemia", "Primary Erythrocytosis", "原發性紅血球增多症", "真性紅血球增多"],
    epidemiology: {
      species: "犬貓皆可發生，均罕見",
      age: "中老年（犬平均8歲，貓平均10歲）",
      sex: "無明顯性別傾向",
      riskFactors: ["無已知品種傾向"]
    },
    clinicalPresentation: {
      history: ["嗜睡", "虛弱", "運動不耐", "多飲多尿", "癲癇或行為改變", "視力問題"],
      physicalExam: ["黏膜充血或磚紅色", "脾腫大", "神經學異常", "視網膜血管擴張或出血", "高血壓"]
    },
    pathophysiology: "造血幹細胞突變 → 紅血球系不受控增生（不依賴EPO）→ 紅血球數量過多 → 血液黏度增加 → 微循環障礙 → 組織缺氧、血栓形成、器官功能障礙",
    diagnosis: {
      overview: "排除繼發性紅血球增多症後診斷",
      differentials: ["繼發性紅血球增多症（心肺疾病、腎臟腫瘤）", "相對性紅血球增多症（脫水）", "應激性紅血球增多"],
      initialDB: [
        "CBC：PCV明顯升高（犬>65%，貓>55%）",
        "確認非脫水（血漿蛋白正常）",
        "動脈血氣（排除低氧血症）"
      ],
      advanced: [
        "血清促紅血球生成素（EPO）：正常或低（真性）vs 高（繼發性）",
        "腹部超聲（腎臟腫瘤、脾腫大）",
        "心臟超聲（排除先天性心臟病）",
        "胸腔X光",
        "骨髓檢查（紅血球系增生）"
      ]
    },
    treatment: {
      overview: "降低紅血球數量、控制血液黏度、骨髓抑制治療",
      acute: [
        "放血療法（Phlebotomy）：",
        "- 移除10-20 mL/kg血液",
        "- 同時給予等量晶體液",
        "- 目標PCV: 55-60%（犬）、45-50%（貓）",
        "- 可每2-3天重複直到目標",
        "水化治療"
      ],
      chronic: [
        "骨髓抑制藥物：",
        "- Hydroxyurea: 30 mg/kg PO q24h x 7-10天，後15 mg/kg q24h維持",
        "- 監測骨髓抑制",
        "定期放血（若需要）",
        "低劑量阿斯匹靈（預防血栓）：0.5-1 mg/kg q24h"
      ]
    },
    prognosis: "長期預後謹慎但可管理。中位生存時間犬約2-4年。主要併發症為血栓和出血。需要終身治療和監測。",
    pearls: [
      "必須排除繼發性原因（低氧血症、EPO分泌腫瘤）",
      "EPO水平是鑑別真性和繼發性的關鍵",
      "脫水可造成假性紅血球增多（相對性）",
      "放血療法效果快但需反覆進行",
      "Hydroxyurea是長期控制的主要藥物",
      "高黏度血症可致神經和視力症狀"
    ],
    monitoring: ["PCV定期監測", "神經學狀態", "視網膜檢查", "血栓徵象", "Hydroxyurea骨髓毒性（CBC）"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; Schalm's Veterinary Hematology, 6th Ed."
  },

  "neutropenia": {
    zh: "嗜中性球減少",
    en: "Neutropenia",
    definition: "循環血液中嗜中性球絕對數量低於正常範圍（犬<3,000/μL，貓<2,500/μL），增加感染風險的病理狀態。",
    synonyms: ["Agranulocytosis", "粒細胞減少症", "白血球減少"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["化療", "輻射", "骨髓疾病", "嚴重感染", "藥物（化療藥、氯黴素、磺胺類）", "免疫介導"]
    },
    clinicalPresentation: {
      history: ["發燒", "嗜睡", "食慾下降", "反覆或難治感染", "化療或藥物使用史"],
      physicalExam: ["發燒", "黏膜異常", "局部感染徵象（口腔潰瘍、肺炎、蜂窩組織炎）", "敗血症徵象（嚴重時）"]
    },
    pathophysiology: "嗜中性球減少機制：1)生成減少（骨髓抑制）、2)破壞增加（免疫介導或感染消耗）、3)分佈改變（邊緣池移動或脾臟隔離）。結果：抵抗細菌和真菌感染能力下降 → 感染風險增加",
    diagnosis: {
      overview: "CBC確認 + 評估原因",
      differentials: ["藥物誘導", "感染性（貓泛白細胞減少症、細小病毒、埃利希體）", "免疫介導", "骨髓疾病", "先天性（週期性造血）"],
      initialDB: ["CBC（嗜中性球絕對計數）", "血塗片（左轉、毒性變化）", "傳染病篩檢"],
      advanced: ["骨髓穿刺", "抗嗜中性球抗體", "藥物史回顧", "腹部超聲"]
    },
    treatment: {
      overview: "治療原發病因 + 支持治療 + 預防感染",
      acute: [
        "移除可能病因（停用可疑藥物）",
        "發燒性嗜中性球減少症（急診！）：",
        "- 立即血液培養",
        "- 經驗性廣譜抗生素：",
        "  Enrofloxacin: 10-20 mg/kg IV q24h",
        "  + Ampicillin-sulbactam: 20-30 mg/kg IV q8h",
        "  或 Amoxicillin-clavulanate: 12.5-25 mg/kg PO q12h",
        "嚴重嗜中性球減少（<500/μL）：",
        "- 預防性抗生素（即使未發燒）",
        "- 隔離減少感染暴露",
        "G-CSF（粒細胞集落刺激因子）：",
        "- Filgrastim: 5 μg/kg SQ q24h",
        "- 僅短期使用（可產生抗體）",
        "輸液支持"
      ],
      chronic: [
        "治療原發疾病",
        "免疫介導：免疫抑制治療",
        "監測恢復"
      ]
    },
    prognosis: "取決於原因和嚴重程度。藥物誘導停藥後通常恢復（數天至數週）。感染性嗜中性球減少預後依病原體。免疫介導可能需要長期治療。嗜中性球<500/μL時感染風險極高。",
    pearls: [
      "嗜中性球<500/μL是醫療急症",
      "發燒+嗜中性球減少 = 假設敗血症直到證明並非",
      "化療後嗜中性球低谷通常在7-14天",
      "左轉（帶狀嗜中性球增加）提示骨髓正在反應",
      "G-CSF可加速恢復但有抗體風險"
    ],
    monitoring: ["CBC q1-2天（急性期）", "體溫q4-6h", "感染徵象", "血液培養（若發燒）"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; Schalm's Veterinary Hematology, 6th Ed."
  },

  "cyclic-hematopoiesis": {
    zh: "週期性造血",
    en: "Cyclic Hematopoiesis",
    definition: "罕見的先天性造血障礙，特徵為血球計數呈週期性波動，尤其是嗜中性球約每11-14天出現一次嚴重減少。",
    synonyms: ["Grey Collie Syndrome", "Cyclic Neutropenia", "灰色柯利症候群", "週期性嗜中性球減少"],
    epidemiology: {
      species: "犬（主要是柯利犬），貓極罕見",
      age: "先天性，幼犬即可發現",
      sex: "體染色體隱性遺傳，男女皆可",
      riskFactors: ["柯利犬（灰色被毛 = 病態基因純合子）"]
    },
    clinicalPresentation: {
      history: ["灰色或銀灰色被毛", "反覆感染（每10-14天週期性發作）", "生長遲緩", "虛弱", "發燒週期"],
      physicalExam: ["灰色/銀灰色被毛（色素稀釋）", "發育不良", "發燒（感染期）", "口腔潰瘍", "關節腫脹（感染）", "淋巴結腫大"]
    },
    pathophysiology: "AP3B1基因突變 → 造血幹細胞功能障礙 → 嗜中性球生成呈週期性波動（約11-14天週期）→ 週期性嚴重嗜中性球減少 → 反覆細菌感染。同一基因突變也影響黑色素生成 → 灰色被毛",
    diagnosis: {
      overview: "臨床特徵（灰色柯利犬+週期性感染）+ 連續CBC監測",
      differentials: ["其他嗜中性球減少原因", "免疫缺陷", "骨髓疾病"],
      initialDB: ["連續CBC（每2-3天 x 4-6週，記錄週期性變化）", "血塗片"],
      advanced: ["基因檢測（AP3B1突變）", "骨髓穿刺"]
    },
    treatment: {
      overview: "主要為支持治療，無根治方法",
      acute: [
        "感染期治療：",
        "- 廣譜抗生素",
        "- 支持治療",
        "G-CSF可減少週期振幅：",
        "- Filgrastim: 5 μg/kg SQ q24h",
        "- 長期使用有抗體風險",
        "犬類G-CSF（若可獲得）較佳"
      ],
      chronic: [
        "終身管理反覆感染",
        "預防性抗生素（嗜中性球低谷期）",
        "骨髓移植（理論上可治癒但罕見執行）",
        "生活品質評估",
        "不建議繁殖"
      ]
    },
    prognosis: "預後不良。大多數受影響犬在幼年死於感染併發症。少數可存活至成年但生活品質受影響。平均壽命2-3年。",
    pearls: [
      "灰色柯利犬 + 反覆感染 = 高度懷疑週期性造血",
      "連續CBC監測可見約11-14天的嗜中性球週期",
      "血小板和紅血球也有週期性變化但較不顯著",
      "是體染色體隱性遺傳，攜帶者外觀正常",
      "可通過基因檢測篩選攜帶者避免繁殖"
    ],
    monitoring: ["連續CBC追蹤週期", "體溫和感染徵象", "生長發育"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; Schalm's Veterinary Hematology, 6th Ed."
  },

  "thrombocytosis": {
    zh: "血小板增多症",
    en: "Thrombocytosis",
    definition: "血小板計數超過正常上限（犬>500,000/μL，貓>600,000/μL）的病理狀態，可為反應性或原發性。",
    synonyms: ["Thrombocythemia", "血小板過多症", "血小板增生"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡（反應性），中老年（原發性）",
      sex: "無性別傾向",
      riskFactors: ["反應性：慢性炎症、感染、腫瘤、缺鐵、脾臟切除後、糖皮質激素", "原發性：骨髓增生性腫瘤"]
    },
    clinicalPresentation: {
      history: ["常因原發疾病就診", "反應性通常無症狀", "原發性可能有血栓或出血症狀"],
      physicalExam: ["原發疾病的徵象", "脾腫大（原發性）", "血栓栓塞徵象（罕見）"]
    },
    pathophysiology: "反應性：炎症細胞因子（IL-6、TPO）→ 刺激巨核細胞增生 → 血小板生成增加。原發性：巨核細胞克隆性增生 → 不受控的血小板生成。極度增多時可能出現血栓或矛盾性出血（功能異常血小板）",
    diagnosis: {
      overview: "確認血小板增多後，區分反應性（常見）和原發性（罕見）",
      differentials: ["反應性血小板增多（最常見）：感染、腫瘤、缺鐵、脾切除後、類固醇", "原發性血小板增多症（罕見）：骨髓增生性腫瘤"],
      initialDB: ["CBC（確認血小板計數，排除凝集假象）", "血塗片", "鐵指標", "炎症指標"],
      advanced: ["骨髓穿刺（巨核細胞增生）", "JAK2突變檢測（若可用）", "腹部影像（腫瘤、脾臟）", "排除潛在疾病"]
    },
    treatment: {
      overview: "反應性：治療原發疾病；原發性：骨髓抑制",
      acute: [
        "反應性血小板增多：",
        "- 治療原發疾病（感染、腫瘤、缺鐵）",
        "- 通常不需特殊治療血小板",
        "- 血小板隨原發疾病控制而下降",
        "原發性血小板增多症：",
        "- Hydroxyurea: 30 mg/kg PO q24h，調整以維持正常血小板",
        "- 血栓預防：低劑量阿斯匹靈 0.5-1 mg/kg q24h"
      ],
      chronic: [
        "反應性：持續治療原發疾病",
        "原發性：終身骨髓抑制治療",
        "定期監測血小板計數"
      ]
    },
    prognosis: "反應性血小板增多：預後取決於原發疾病。原發性血小板增多症：預後謹慎，需終身治療，有血栓和出血風險。",
    pearls: [
      "反應性血小板增多遠比原發性常見",
      "反應性通常<1,000,000/μL，原發性可能更高",
      "極度血小板增多（>2,000,000/μL）可能出現出血（功能異常）",
      "脾切除後血小板可暫時性顯著升高",
      "鐵缺乏性貧血常合併反應性血小板增多"
    ],
    monitoring: ["定期CBC", "血栓和出血徵象", "原發疾病狀態"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; Schalm's Veterinary Hematology, 6th Ed."
  },

  "hypereosinophilic-syndrome": {
    zh: "嗜酸性球增多症候群",
    en: "Hypereosinophilic Syndrome (HES)",
    definition: "持續性嗜酸性球顯著增多（>1,500/μL）伴隨器官浸潤和損傷的罕見疾病，排除其他嗜酸性球增多原因後診斷。",
    synonyms: ["HES", "Idiopathic Hypereosinophilia", "特發性嗜酸性球增多症"],
    epidemiology: {
      species: "貓較犬常見",
      age: "中老年（貓平均8-9歲）",
      sex: "無明顯性別傾向",
      riskFactors: ["未知，可能為免疫失調或隱匿性腫瘤"]
    },
    clinicalPresentation: {
      history: ["嘔吐", "腹瀉", "體重下降", "嗜睡", "食慾下降", "皮膚病變"],
      physicalExam: ["腸道增厚（可觸及）", "肝脾腫大", "淋巴結腫大", "皮膚病變（潰瘍、結節）", "呼吸異常（肺浸潤）"]
    },
    pathophysiology: "嗜酸性球失控增生或存活延長 → 組織浸潤（胃腸道、肝臟、脾臟、皮膚、肺等）→ 嗜酸性球釋放毒性顆粒蛋白（MBP、ECP）→ 組織損傷和纖維化 → 器官功能障礙",
    diagnosis: {
      overview: "排除性診斷：持續嗜酸性球增多 + 器官浸潤 + 排除其他原因",
      differentials: ["寄生蟲感染", "過敏性疾病", "嗜酸性球性腸炎", "肥大細胞瘤", "淋巴瘤", "嗜酸性球性白血病"],
      initialDB: ["CBC（嗜酸性球>1,500/μL，常>10,000/μL）", "血塗片", "糞便檢查（排除寄生蟲）", "生化（器官功能）"],
      advanced: ["骨髓穿刺（嗜酸性球增生，排除白血病）", "腹部超聲", "受影響器官活檢", "FeLV/FIV（貓）", "心臟超聲"]
    },
    treatment: {
      overview: "免疫抑制治療為主",
      acute: [
        "糖皮質激素（首選）：",
        "- Prednisone/Prednisolone: 2-4 mg/kg PO q24h",
        "- 逐漸減量至最低有效劑量",
        "難治病例添加：",
        "- Chlorambucil: 2 mg/貓 PO q48-72h",
        "- 或 Hydroxyurea",
        "支持治療：",
        "- 營養支持",
        "- 止吐藥（若嘔吐）"
      ],
      chronic: [
        "長期低劑量類固醇維持",
        "可能需要終身治療",
        "監測器官功能"
      ]
    },
    prognosis: "預後謹慎至差。部分病例對類固醇反應良好可長期控制。難治病例預後不良。貓的HES可能是淋巴瘤前期表現。",
    pearls: [
      "必須徹底排除寄生蟲和其他反應性原因",
      "貓的HES可能進展為淋巴瘤",
      "胃腸道是最常受影響的器官",
      "心臟浸潤可致心肌病（人類常見，獸醫少報導）",
      "嗜酸性球>100,000/μL考慮嗜酸性球性白血病"
    ],
    monitoring: ["定期CBC", "器官功能", "臨床症狀", "類固醇副作用"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; Schalm's Veterinary Hematology, 6th Ed."
  },

  "feline-cytauxzoonosis": {
    zh: "貓泰勒蟲病",
    en: "Feline Cytauxzoonosis",
    definition: "由泰勒蟲（Cytauxzoon felis）引起的貓急性致命性血液寄生蟲病，經蜱傳播，導致嚴重血管內增殖和溶血。",
    synonyms: ["Cytauxzoon felis infection", "貓血巴東蟲病", "Bobcat Fever"],
    epidemiology: {
      species: "僅貓科動物",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["戶外活動", "蜱暴露區域", "美國中南部和東南部", "野貓接觸", "春夏季（蜱活躍期）"]
    },
    clinicalPresentation: {
      history: ["急性發病", "高燒", "食慾廢絕", "嗜睡", "呼吸困難", "黃疸", "蜱暴露史"],
      physicalExam: ["高燒（40-41°C）", "黃疸", "蒼白黏膜", "脾腫大", "肝腫大", "呼吸窘迫", "低血壓", "休克", "DIC徵象"]
    },
    pathophysiology: "蜱叮咬傳播 → 原蟲在巨噬細胞內增殖（裂殖體期）→ 感染的巨噬細胞阻塞血管 → 多器官血管阻塞和缺血 → 裂殖子釋放進入紅血球 → 血管內溶血 → SIRS、DIC、多器官衰竭",
    diagnosis: {
      overview: "臨床表現結合血塗片或PCR確診",
      differentials: ["貓傳染性貧血（Mycoplasma haemofelis）", "免疫介導性溶血性貧血", "FIP", "FeLV相關疾病", "敗血症"],
      initialDB: [
        "CBC（貧血、血小板減少、白血球變化）",
        "血塗片：紅血球內可見piroplasm（嗜伊紅色環形或逗點狀）",
        "生化（肝酶升高、膽紅素升高、低蛋白血症）",
        "凝血功能（DIC）"
      ],
      advanced: ["PCR（最敏感）", "肝脾細針抽吸（裂殖體可見）", "組織病理（血管內裂殖體）"]
    },
    treatment: {
      overview: "積極支持治療 + 抗原蟲藥物，即使治療死亡率仍高",
      acute: [
        "抗原蟲治療：",
        "- Atovaquone: 15 mg/kg PO q8h（與脂肪同服）",
        "- + Azithromycin: 10 mg/kg PO q24h",
        "- 治療10天或直到臨床改善",
        "替代方案：",
        "- Imidocarb dipropionate: 2-5 mg/kg IM（效果較差）",
        "積極支持治療（關鍵！）：",
        "- 靜脈輸液",
        "- 輸血（若嚴重貧血）",
        "- 氧氣支持",
        "- 抗凝治療（若DIC）：低分子肝素",
        "- 營養支持（鼻飼管）",
        "退燒（若需要）",
        "監測和治療併發症"
      ],
      chronic: [
        "存活貓可成為帶原者",
        "預防蜱叮咬",
        "監測復發"
      ]
    },
    prognosis: "預後極差，未治療幾乎100%死亡。積極治療（atovaquone+azithromycin+支持療法）存活率約60%。存活貓可能成為終身帶原者。",
    pearls: [
      "「Bobcat Fever」因山貓（bobcat）是天然宿主",
      "裂殖體期是致死關鍵，紅血球內piroplasm期較晚",
      "血塗片陰性不能排除（早期裂殖體期）",
      "Atovaquone+Azithromycin是目前最佳治療方案",
      "蜱預防是唯一有效預防措施",
      "存活貓可作為傳染源（帶原者）"
    ],
    monitoring: ["體溫q4-6h", "PCV", "血小板", "凝血功能", "器官功能", "呼吸狀態"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011; Greene CE: Infectious Diseases of the Dog and Cat, 4th Ed."
  }
};

// 匯出供整合使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = HEMATOLOGICAL_DISEASES;
}

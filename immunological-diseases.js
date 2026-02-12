// ======= 免疫系統疾病 DISEASE_INFO =======
// 生成日期: 2026-02-04
// 包含: 系統性紅斑性狼瘡、免疫介導性多發性關節炎、咀嚼肌炎、眼外肌肌炎、過敏性休克、
//       異位性皮膚炎、疫苗反應、藥物過敏、接觸性皮膚炎、免疫介導性腦膜炎、
//       原發性免疫缺陷、血管炎、幼犬蜂窩組織炎、嗜酸性肉芽腫複合症、冷凝集素病

const IMMUNOLOGICAL_DISEASE_INFO = {

  // ==================== 全身性自體免疫疾病 ====================

  "systemic-lupus-erythematosus": {
    zh: "系統性紅斑性狼瘡",
    en: "Systemic Lupus Erythematosus (SLE)",
    definition: "一種多系統自體免疫疾病，特徵為產生多種自體抗體（尤其是抗核抗體ANA），導致免疫複合物沉積於多個器官系統，引起廣泛的組織損傷和發炎反應。",
    synonyms: ["SLE", "Lupus", "狼瘡", "紅斑狼瘡"],
    epidemiology: {
      species: "犬較常見，貓罕見",
      age: "年輕至中年犬（平均5歲）",
      sex: "無明顯性別傾向，部分研究顯示母犬略多",
      riskFactors: ["品種傾向（German Shepherd、Shetland Sheepdog、Collie、Beagle、Poodle、Irish Setter）", "遺傳因素", "紫外線暴露", "某些藥物可能誘發"]
    },
    clinicalPresentation: {
      history: ["週期性發燒", "多關節疼痛和跛行", "皮膚病變", "虛弱和嗜睡", "食慾下降和體重減輕", "症狀常呈週期性惡化和緩解"],
      physicalExam: ["發燒", "多關節腫脹和疼痛（非侵蝕性多發性關節炎）", "皮膚病變（紅斑、脫毛、潰瘍、光敏感）", "淋巴結腫大", "脾腫大", "黏膜蒼白（若有溶血性貧血）", "肌肉萎縮", "腎臟觸診可能正常"]
    },
    pathophysiology: "遺傳易感性 + 環境因素（紫外線、感染、藥物）→ 免疫耐受性喪失 → 產生多種自體抗體（抗核抗體、抗dsDNA抗體、抗紅血球/血小板抗體）→ 形成免疫複合物 → 沉積於腎絲球、關節、皮膚、血管等 → 補體活化和發炎 → 多器官損傷。主要受影響系統包括：關節、皮膚、腎臟、血液系統。",
    diagnosis: {
      overview: "需符合多項臨床和實驗室標準，無單一確診測試",
      differentials: ["感染性多發性關節炎", "類風濕性關節炎", "其他自體免疫疾病（IMHA、ITP）", "腫瘤相關症候群", "萊姆病", "多發性肌炎"],
      initialDB: ["CBC（貧血、血小板減少、白血球減少）", "生化全套（BUN/Creatinine升高提示腎損傷）", "尿液分析（蛋白尿）", "尿蛋白/肌酐比值", "關節穿刺和滑液分析", "Coombs試驗"],
      advanced: ["抗核抗體(ANA)測試 - 高效價陽性為特徵", "抗dsDNA抗體", "LE細胞試驗（現較少用）", "皮膚活檢（免疫螢光）", "腎臟活檢", "胸腹X光和超音波"]
    },
    treatment: {
      overview: "免疫抑制治療是基石，需長期維持並監測併發症",
      acute: [
        "Prednisolone/Prednisone: 2-4 mg/kg/day PO 分次給予",
        "嚴重病例可使用 Dexamethasone: 0.3-0.5 mg/kg IV",
        "支持治療：輸液、輸血（若有嚴重貧血）",
        "治療繼發感染"
      ],
      chronic: [
        "免疫抑制維持治療：",
        "  - Prednisolone: 逐漸減量至最低有效劑量（0.5-1 mg/kg q48h）",
        "  - 添加其他免疫抑制劑以減少類固醇用量：",
        "    - Azathioprine (犬): 2 mg/kg PO q24h，穩定後q48h",
        "    - Cyclosporine: 5 mg/kg PO q12h",
        "    - Mycophenolate mofetil: 10-20 mg/kg PO q12h",
        "    - Leflunomide: 2-4 mg/kg PO q24h",
        "腎臟保護（若有蛋白尿）：",
        "  - ACE抑制劑或ARB",
        "  - 低蛋白飲食",
        "避免紫外線暴露",
        "定期監測血液學和腎功能"
      ]
    },
    prognosis: "謹慎至不良。SLE是慢性疾病，需終身治療。腎臟受累是主要預後不良因素。1年存活率約50-60%。緩解期可持續數月，但復發常見。",
    pearls: [
      "ANA陽性不等於SLE - 需結合臨床症狀",
      "SLE診斷需排除感染性原因",
      "皮膚和關節症狀通常對治療反應較好",
      "腎臟和血液學異常決定預後",
      "避免使用可能誘發狼瘡的藥物（如hydralazine、procainamide）"
    ],
    monitoring: ["CBC（每2-4週初期，穩定後每1-3月）", "生化和尿液分析（監測腎功能）", "尿蛋白/肌酐比", "臨床症狀追蹤", "ANA效價（判斷活動度）"],
    reference: "Day MJ: Clinical Immunology of the Dog and Cat, 2nd Ed. Manson Publishing, 2012"
  },

  "immune-mediated-polyarthritis": {
    zh: "免疫介導性多發性關節炎",
    en: "Immune-Mediated Polyarthritis (IMPA)",
    definition: "免疫系統攻擊關節滑膜導致的非感染性關節發炎，可為原發性（特發性）或繼發於其他疾病。是犬最常見的多發性關節炎原因。",
    synonyms: ["IMPA", "Idiopathic Polyarthritis", "Type I IMPA", "免疫性關節炎"],
    epidemiology: {
      species: "犬為主，貓較少見",
      age: "中年犬最常見（4-6歲平均），但任何年齡可發生",
      sex: "無明顯性別傾向",
      riskFactors: ["品種傾向（Akita、Weimaraner、German Shepherd、Doberman、Retriever、Spaniel）", "慢性感染病灶", "腫瘤", "藥物反應", "疫苗接種後（罕見）"]
    },
    clinicalPresentation: {
      history: ["多關節僵硬和疼痛", "不願行走或運動", "週期性跛行", "發燒", "食慾下降", "嗜睡"],
      physicalExam: ["多關節腫脹和疼痛（腕、跗、膝、肘最常見）", "關節活動受限", "發燒", "淋巴結腫大", "脊椎疼痛（部分病例）", "肌肉萎縮（慢性病例）"]
    },
    pathophysiology: "分為四種類型：Type I（特發性，最常見50-65%）：無明確病因。Type II（繼發於感染）：遠端感染刺激免疫反應。Type III（繼發於腸道疾病）：腸道發炎導致抗原進入引發關節反應。Type IV（繼發於腫瘤）：腫瘤抗原刺激。免疫複合物沉積於滑膜 → 補體活化 → 嗜中性球浸潤 → 關節損傷。",
    diagnosis: {
      overview: "關節穿刺滑液分析是診斷關鍵，需排除感染",
      differentials: ["感染性關節炎（細菌、萊姆病、黴菌）", "類風濕性關節炎", "SLE", "退化性關節疾病", "骨關節炎", "關節腫瘤"],
      initialDB: ["多關節穿刺和滑液分析（嗜中性球增多但無菌培養）", "滑液細菌培養（排除感染）", "CBC、生化、尿液分析", "關節X光", "胸腹X光（尋找原發病灶）"],
      advanced: ["ANA測試", "類風濕因子", "萊姆病血清學", "滑液PCR", "腹部超音波", "骨髓檢查（若懷疑腫瘤）"]
    },
    treatment: {
      overview: "免疫抑制治療為主，需尋找並治療繼發原因",
      acute: [
        "Prednisolone: 2 mg/kg/day PO 分次給予",
        "疼痛管理：在免疫抑制生效前可短期使用",
        "關節保護：限制活動"
      ],
      chronic: [
        "免疫抑制維持：",
        "  - Prednisolone: 逐漸減至最低有效劑量",
        "  - 頑固病例添加第二線藥物：",
        "    - Azathioprine: 2 mg/kg PO q24-48h",
        "    - Leflunomide: 2-4 mg/kg PO q24h",
        "    - Cyclosporine: 5 mg/kg PO q12h",
        "治療原發病（若為繼發性）：",
        "  - 感染病灶清除",
        "  - 腫瘤治療",
        "  - 腸道疾病治療",
        "物理治療和體重管理",
        "關節保護補充品（葡萄糖胺、軟骨素、omega-3）"
      ]
    },
    prognosis: "Type I 預後良好，多數可達緩解，但復發率約25-30%。繼發性IMPA預後取決於原發病治療效果。早期治療預後較好。",
    pearls: [
      "滑液WBC >5000/μL且嗜中性球>10-20%高度提示",
      "必須排除感染性原因再開始免疫抑制",
      "需檢查多個關節，單一關節可能誤導",
      "類固醇停藥前需確認緩解且維持數月",
      "復發時重新評估是否有新發原發病"
    ],
    monitoring: ["臨床症狀（跛行、發燒）", "關節檢查", "滑液分析（判斷緩解）", "CBC（藥物副作用）", "肝腎功能"],
    reference: "Webb AA et al: Immune-mediated polyarthritis in dogs. Compend Contin Educ Vet 24:144-159, 2002"
  },

  // ==================== 免疫介導性肌肉疾病 ====================

  "masticatory-muscle-myositis": {
    zh: "咀嚼肌炎",
    en: "Masticatory Muscle Myositis (MMM)",
    definition: "一種侷限於咀嚼肌群（顳肌、咬肌、翼狀肌、二腹肌）的自體免疫性肌炎，由針對咀嚼肌特有的2M肌纖維的自體抗體引起。",
    synonyms: ["MMM", "Eosinophilic Myositis", "Atrophic Myositis", "咬肌炎", "顳肌炎"],
    epidemiology: {
      species: "犬，貓非常罕見",
      age: "年輕至中年犬（平均3歲）",
      sex: "無明顯性別傾向",
      riskFactors: ["大型犬品種（German Shepherd、Labrador、Golden Retriever、Cavalier King Charles Spaniel、Rottweiler、Doberman）", "可能有遺傳傾向"]
    },
    clinicalPresentation: {
      history: ["張嘴困難或無法張嘴", "咀嚼疼痛", "拒絕進食或飲水", "流涎", "頭部觸碰敏感", "急性期可能發燒", "慢性期顳肌和咬肌萎縮"],
      physicalExam: ["急性期：咀嚼肌腫脹和疼痛", "慢性期：嚴重顳肌和咬肌萎縮", "張嘴受限（可能<1-2cm）", "眼球外凸或眼球內陷（因肌肉腫脹或萎縮）", "可能有眼瞼和結膜水腫", "無四肢肌肉受累"]
    },
    pathophysiology: "咀嚼肌含有獨特的2M型肌纖維（四肢肌肉沒有）→ 免疫系統產生針對2M纖維的自體抗體 → 抗體介導的肌肉損傷 → 急性期發炎和腫脹 → 慢性期肌肉萎縮和纖維化。若不治療，嚴重纖維化導致永久性張嘴受限。",
    diagnosis: {
      overview: "2M抗體檢測是確診標準",
      differentials: ["三叉神經炎", "破傷風", "眼外肌肌炎", "顳下頜關節疾病", "逆行性肌病", "感染性肌炎", "咀嚼肌腫瘤"],
      initialDB: ["2M肌纖維抗體檢測（免疫組織化學或ELISA）- 特異性和敏感性高", "CK可能升高（急性期）", "CBC（可能有輕度嗜酸球增多）"],
      advanced: ["咀嚼肌活檢（若抗體陰性但高度懷疑）", "肌電圖", "顳下頜關節X光或CT（排除關節問題）"]
    },
    treatment: {
      overview: "早期積極免疫抑制治療可防止永久性纖維化",
      acute: [
        "Prednisolone: 2 mg/kg/day PO（高劑量開始）",
        "維持高劑量直到症狀明顯改善（通常2-4週）",
        "疼痛管理",
        "軟食或流質餵食（若張嘴困難）"
      ],
      chronic: [
        "Prednisolone: 逐漸減量至最低有效劑量",
        "  - 每2-4週減量25%",
        "  - 最終目標：0.5-1 mg/kg q48h 或停藥",
        "  - 總療程通常6-12個月",
        "頑固病例添加：",
        "  - Azathioprine: 2 mg/kg PO q24-48h",
        "  - Cyclosporine: 5 mg/kg PO q12h",
        "物理治療：被動張嘴運動（在麻醉下）",
        "營養支持（必要時管灌餵食）"
      ]
    },
    prognosis: "早期治療預後良好，多數可完全恢復功能。慢性病例已有纖維化者功能恢復有限。復發率約15-35%。",
    pearls: [
      "急性期治療最重要 - 避免纖維化",
      "2M抗體在類固醇治療後可能轉陰",
      "慢性期CK可能正常",
      "不要在麻醉前測試張嘴程度（可能造成下頜骨折）",
      "逐漸減藥，太快減量易復發"
    ],
    monitoring: ["張嘴程度", "咀嚼肌大小（照片記錄）", "CK", "2M抗體（判斷復發風險）", "藥物副作用"],
    reference: "Evans J et al: Canine inflammatory myopathies: a clinicopathologic review of 200 cases. J Vet Intern Med 18:679-691, 2004"
  },

  "extraocular-myositis": {
    zh: "眼外肌肌炎",
    en: "Extraocular Myositis",
    definition: "一種罕見的自體免疫性肌炎，專門影響眼外肌（控制眼球運動的肌肉），導致雙側眼球突出和眼球運動受限。",
    synonyms: ["EOM", "Extraocular Polymyositis", "眼球突出肌炎"],
    epidemiology: {
      species: "犬，貓非常罕見",
      age: "年輕成年犬最常見（<2歲）",
      sex: "無明顯性別傾向",
      riskFactors: ["Golden Retriever品種傾向明顯", "可能有遺傳因素"]
    },
    clinicalPresentation: {
      history: ["急性雙側眼球突出", "眼睛外觀異常", "可能有輕微視力變化", "通常無全身症狀"],
      physicalExam: ["雙側對稱性眼球突出（exophthalmos）", "眼球運動受限", "結膜充血和水腫", "第三眼瞼突出", "角膜可能因暴露而乾燥或潰瘍", "眼壓通常正常", "視力通常保留", "無咀嚼肌受累"]
    },
    pathophysiology: "眼外肌含有獨特的肌纖維類型 → 免疫系統產生針對這些纖維的自體抗體 → 肌肉發炎和腫脹 → 眼球被向前推出。急性期主要為發炎和水腫，慢性反覆發作可能導致纖維化和肌肉限制性改變。",
    diagnosis: {
      overview: "臨床表現結合影像學診斷",
      differentials: ["眼眶腫瘤", "眼眶蜂窩組織炎", "眼眶膿瘍", "青光眼", "眼眶出血", "咀嚼肌炎波及眼眶"],
      initialDB: ["眼科檢查（眼壓、眼底、視力）", "眼眶超音波（顯示眼外肌腫脹）", "CK（可能正常或輕度升高）"],
      advanced: ["眼眶MRI或CT（金標準，顯示眼外肌選擇性腫脹）", "眼外肌活檢（罕需要）", "排除全身性肌炎的檢查"]
    },
    treatment: {
      overview: "免疫抑制治療，保護角膜",
      acute: [
        "Prednisolone: 2 mg/kg/day PO",
        "角膜保護：",
        "  - 人工淚液頻繁使用",
        "  - 若有角膜潰瘍需適當治療",
        "  - 考慮暫時性眼瞼縫合（嚴重突出）"
      ],
      chronic: [
        "Prednisolone: 緩慢減量",
        "  - 總療程通常3-6個月",
        "頑固或復發病例：",
        "  - Azathioprine: 2 mg/kg PO q24-48h",
        "  - Cyclosporine: 5 mg/kg PO q12h",
        "定期眼科追蹤"
      ]
    },
    prognosis: "單次發作治療預後良好。部分病例可能復發。慢性反覆發作可能導致永久性眼球運動受限。視力預後通常良好。",
    pearls: [
      "Golden Retriever突然雙側眼突要高度懷疑此病",
      "與咀嚼肌炎不同，眼外肌肌炎不影響咀嚼",
      "MRI顯示眼外肌「紡錘形」腫脹很特徵",
      "角膜暴露是主要併發症風險",
      "需與眼眶腫瘤鑑別（通常單側）"
    ],
    monitoring: ["眼球位置", "眼球運動範圍", "角膜健康", "眼壓", "視力"],
    reference: "Carpenter JL et al: Canine bilateral extraocular polymyositis. Vet Pathol 26:510-512, 1989"
  },

  // ==================== 過敏和過敏反應 ====================

  "anaphylaxis": {
    zh: "過敏性休克",
    en: "Anaphylaxis",
    definition: "一種嚴重的、可能致命的全身性速發型超敏反應（I型過敏反應），在接觸過敏原後數分鐘至數小時內發生，主要影響心血管、呼吸和消化系統。",
    synonyms: ["Anaphylactic Shock", "Anaphylactic Reaction", "嚴重過敏反應", "過敏性反應"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["先前過敏史", "昆蟲叮咬（蜜蜂、黃蜂、火蟻）", "藥物過敏史", "疫苗反應史", "食物過敏", "輸血反應"]
    },
    clinicalPresentation: {
      history: ["近期接觸已知或潛在過敏原", "藥物或疫苗注射後", "昆蟲叮咬後", "進食某種食物後", "症狀在數分鐘至1小時內急速發展"],
      physicalExam: ["犬主要表現（肝臟為休克器官）：", "  - 急性嘔吐和腹瀉（常帶血）", "  - 虛脫", "  - 低血壓和休克", "  - 蒼白黏膜", "  - 心搏過速", "貓主要表現（肺和腸道為休克器官）：", "  - 呼吸窘迫（支氣管痙攣）", "  - 喘鳴", "  - 嘔吐", "  - 搔癢（頭部）", "  - 流涎", "共同表現：顏面/耳朵水腫、蕁麻疹、躁動"]
    },
    pathophysiology: "先前致敏 → IgE抗體附著於肥大細胞 → 再次接觸過敏原 → 過敏原橋接IgE → 肥大細胞脫顆粒 → 大量釋放組織胺、白三烯、前列腺素等介質 → 血管擴張、血管通透性增加、平滑肌收縮 → 低血壓、水腫、支氣管痙攣。犬的肝靜脈收縮導致肝鬱血和門脈高壓。",
    diagnosis: {
      overview: "主要依據臨床表現和病史，為臨床診斷",
      differentials: ["其他休克原因（敗血症、心因性、出血性）", "急性胃腸疾病", "急性呼吸窘迫", "熱射病", "中毒"],
      initialDB: ["快速臨床評估（ABC）", "血壓", "PCV/TS", "血氣分析", "血糖"],
      advanced: ["過敏原檢測（穩定後）", "組織胺/tryptase測量（研究用途）"]
    },
    treatment: {
      overview: "緊急處理！快速給予腎上腺素和支持治療",
      acute: [
        "立即處理（這是緊急情況！）：",
        "Epinephrine (Adrenaline) - 一線藥物：",
        "  - 1:1000 (1 mg/mL): 0.01 mg/kg IM 或 0.01-0.02 mg/kg IV（緩慢）",
        "  - 可每5-15分鐘重複",
        "建立靜脈通路：",
        "  - 晶體液快速bolus：犬 20-30 mL/kg，貓 10-15 mL/kg",
        "  - 可重複直到血壓穩定",
        "氧氣支持",
        "Diphenhydramine (H1 blocker): 1-2 mg/kg IM/IV",
        "Famotidine (H2 blocker): 0.5-1 mg/kg IV",
        "Dexamethasone: 0.1-0.2 mg/kg IV（預防二次反應）",
        "支氣管痙攣（尤其貓）：",
        "  - Terbutaline: 0.01 mg/kg SC/IM",
        "  - 嚴重時考慮氣管插管"
      ],
      chronic: [
        "監測二次反應（可能在4-12小時後發生）",
        "至少觀察12-24小時",
        "出院時：",
        "  - 處方腎上腺素自動注射器（主人教育使用）",
        "  - 抗組織胺備用",
        "  - 識別並避免過敏原",
        "  - 過敏測試和考慮減敏治療"
      ]
    },
    prognosis: "及時治療預後良好，未治療可能致命。過敏性休克可在數分鐘內致死。二次反應可能發生。",
    pearls: [
      "Epinephrine是唯一能救命的一線藥物 - 不要延遲給予",
      "犬的過敏性休克主要是消化道症狀（肝臟休克器官）",
      "貓的過敏性休克主要是呼吸道症狀",
      "類固醇不能逆轉急性反應，但可預防二次反應",
      "疫苗後建議觀察15-30分鐘"
    ],
    monitoring: ["生命徵象（每5-15分鐘初期）", "血壓", "呼吸狀態", "尿量", "觀察二次反應"],
    reference: "Shmuel DL, Cortes Y: Anaphylaxis in dogs and cats. J Vet Emerg Crit Care 23:377-394, 2013"
  },

  "atopy": {
    zh: "異位性皮膚炎",
    en: "Atopy (Atopic Dermatitis)",
    definition: "一種遺傳傾向的發炎性皮膚病，對環境過敏原（如塵蟎、花粉、黴菌）產生IgE介導的過敏反應，導致慢性搔癢性皮膚炎。是犬第二常見的過敏性皮膚病。",
    synonyms: ["Atopic Dermatitis", "CAD", "Canine Atopic Dermatitis", "Environmental Allergy", "異位性皮炎"],
    epidemiology: {
      species: "犬常見，貓較少見（但存在）",
      age: "通常1-3歲發病，6月齡前和7歲後發病較少",
      sex: "無明顯性別傾向",
      riskFactors: ["品種傾向（West Highland White Terrier、Labrador、Golden Retriever、German Shepherd、Boxer、French Bulldog、English Bulldog、Shar Pei）", "遺傳因素", "城市環境", "室內飼養"]
    },
    clinicalPresentation: {
      history: ["慢性反覆搔癢", "症狀可能有季節性（初期）或全年性（後期）", "搔抓臉部、腳掌、腋下、腹股溝", "舔腳", "外耳炎反覆發作", "症狀隨年齡可能加重"],
      physicalExam: ["典型分布：臉部、耳朵、腋下、腹部、腹股溝、肛周、趾間", "紅斑、丘疹", "脫毛（舔/抓導致）", "苔蘚化（慢性）", "色素沉著（慢性）", "外耳炎", "繼發感染（細菌、酵母菌）常見"]
    },
    pathophysiology: "皮膚屏障功能缺陷（絲聚蛋白等異常）→ 過敏原經皮膚進入 → 樹突細胞呈遞抗原 → Th2免疫反應 → B細胞產生IgE → IgE結合肥大細胞 → 再次接觸過敏原 → 肥大細胞脫顆粒 → 組織胺等介質釋放 → 搔癢和發炎。慢性發炎導致皮膚屏障進一步受損，形成惡性循環。",
    diagnosis: {
      overview: "臨床診斷為主，需排除其他搔癢原因",
      differentials: ["跳蚤過敏性皮膚炎", "食物過敏", "疥癬", "蠕形蟎", "接觸性皮膚炎", "細菌或酵母菌感染"],
      initialDB: ["詳細病史（發病年齡、季節性、分布）", "完整皮膚檢查", "皮膚刮搔（排除寄生蟲）", "皮膚細胞學（評估感染）", "嚴格跳蚤控制試驗（8週）", "食物排除試驗（8-12週）"],
      advanced: ["過敏原特異性IgE血清學檢測", "皮內過敏原測試（金標準，用於免疫治療規劃）", "皮膚活檢（非典型病例）"]
    },
    treatment: {
      overview: "多模式治療：減少過敏原暴露、控制感染、止癢、免疫調節",
      acute: [
        "急性發作止癢：",
        "  - Oclacitinib (Apoquel): 0.4-0.6 mg/kg PO q12h x 14天，然後q24h",
        "  - Prednisolone: 0.5-1 mg/kg PO q24h 短期使用",
        "  - Lokivetmab (Cytopoint): 2 mg/kg SC（效果持續4-8週）",
        "治療繼發感染：",
        "  - 抗生素（細菌感染）",
        "  - 抗黴菌藥（酵母菌感染）",
        "  - 藥浴",
        "外耳炎治療"
      ],
      chronic: [
        "長期管理策略：",
        "1. 過敏原避免（減少暴露）",
        "2. 皮膚屏障修復：",
        "   - 必需脂肪酸補充（omega-3/6）",
        "   - 保濕噴霧/乳液",
        "   - 頻繁洗澡（適當洗劑）",
        "3. 藥物控制搔癢：",
        "   - Oclacitinib: 0.4-0.6 mg/kg PO q24h",
        "   - Lokivetmab: 2 mg/kg SC q4-8週",
        "   - Cyclosporine: 5 mg/kg PO q24h（效果需4-6週）",
        "4. 過敏原特異性免疫治療(ASIT)：",
        "   - 皮下注射或舌下含服",
        "   - 60-70%犬隻有改善",
        "   - 需6-12個月見效",
        "5. 預防繼發感染"
      ]
    },
    prognosis: "終身疾病，無法治癒但可良好控制。早期診斷和多模式治療可提供良好生活品質。",
    pearls: [
      "異位性皮膚炎是排除性診斷",
      "跳蚤控制和食物排除試驗是診斷過程必需步驟",
      "Apoquel和Cytopoint是目前最有效的止癢選擇",
      "免疫治療是唯一可能改變疾病進程的治療",
      "繼發感染是搔癢加重的常見原因"
    ],
    monitoring: ["搔癢評分", "皮膚病變範圍和嚴重度", "繼發感染", "藥物副作用", "生活品質"],
    reference: "Hensel P et al: Canine atopic dermatitis: detailed guidelines for diagnosis and allergen identification. BMC Vet Res 11:196, 2015"
  },

  "vaccine-reaction": {
    zh: "疫苗反應",
    en: "Vaccine Reaction",
    definition: "接種疫苗後發生的不良反應，範圍從輕微局部反應到嚴重全身性過敏反應。大多數反應輕微且自限，但嚴重反應可能危及生命。",
    synonyms: ["Vaccine Adverse Event", "Post-vaccination Reaction", "Vaccinosis", "疫苗副作用", "疫苗不良反應"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡，幼年動物首次接種和老年動物可能風險稍高",
      sex: "小型犬和絕育動物風險可能較高",
      riskFactors: ["先前疫苗反應史", "小型犬品種", "同時接種多種疫苗", "疫苗類型（活病毒疫苗風險可能較高）", "品種傾向（Dachshund、Pug、Boston Terrier等小型犬）"]
    },
    clinicalPresentation: {
      history: ["疫苗接種後數分鐘至數天發生", "常見反應通常在24-48小時內", "過敏反應通常在數分鐘至數小時內"],
      physicalExam: ["輕微反應（常見）：", "  - 注射部位腫脹或疼痛", "  - 輕度發燒", "  - 食慾下降", "  - 嗜睡", "中度反應：", "  - 蕁麻疹（犬面部腫脹常見）", "  - 嘔吐", "  - 腹瀉", "嚴重反應（罕見）：", "  - 過敏性休克（見anaphylaxis）", "  - 虛脫", "  - 呼吸困難", "延遲反應（貓）：", "  - 注射部位肉瘤（罕見但嚴重）"]
    },
    pathophysiology: "可能機制包括：1) Type I超敏反應（IgE介導，對疫苗成分過敏）。2) Type III超敏反應（免疫複合物）。3) 直接毒性（某些疫苗成分）。4) 活病毒疫苗感染（免疫功能低下動物）。貓注射部位肉瘤可能與疫苗佐劑引起的慢性發炎有關。",
    diagnosis: {
      overview: "根據疫苗接種時間和臨床表現診斷",
      differentials: ["與疫苗無關的疾病", "感染", "其他過敏反應", "注射部位感染"],
      initialDB: ["詳細病史（疫苗類型、接種時間）", "完整身體檢查", "嚴重反應：CBC、生化、血壓"],
      advanced: ["注射部位腫塊：細針抽吸或活檢", "免疫功能評估（若懷疑免疫缺陷）"]
    },
    treatment: {
      overview: "根據反應嚴重程度處理",
      acute: [
        "輕微反應（觀察為主）：",
        "  - 休息",
        "  - 冷敷注射部位（若腫脹）",
        "  - 通常24-48小時自行緩解",
        "中度反應（蕁麻疹、面部腫脹）：",
        "  - Diphenhydramine: 1-2 mg/kg IM/PO",
        "  - Dexamethasone: 0.1-0.2 mg/kg IV/IM（一次劑量）",
        "嚴重反應（過敏性休克）：",
        "  - 見過敏性休克處理",
        "  - Epinephrine: 0.01 mg/kg IM",
        "  - 靜脈輸液",
        "  - 氧氣支持"
      ],
      chronic: [
        "記錄反應並通報（疫苗不良反應監測系統）",
        "未來疫苗接種建議：",
        "  - 與獸醫討論風險效益",
        "  - 考慮分開接種（不同次就診）",
        "  - 預先給予抗組織胺",
        "  - 疫苗接種後觀察30分鐘",
        "  - 考慮效價檢測替代常規加強",
        "  - 避免已知引起反應的特定疫苗",
        "貓：考慮使用非佐劑疫苗"
      ]
    },
    prognosis: "輕中度反應預後極好。嚴重過敏反應若及時治療預後良好。",
    pearls: [
      "小型犬比大型犬更易發生反應",
      "同時接種多種疫苗增加風險",
      "貓注射部位腫塊持續>3個月或>2cm需活檢",
      "疫苗接種後建議觀察15-30分鐘",
      "有反應史者可預先給予抗組織胺"
    ],
    monitoring: ["接種後觀察15-30分鐘", "告知主人注意事項", "追蹤任何注射部位腫塊（尤其貓）"],
    reference: "Moore GE et al: Adverse events diagnosed within three days of vaccine administration in dogs. JAVMA 227:1102-1108, 2005"
  },

  "drug-hypersensitivity": {
    zh: "藥物過敏",
    en: "Drug Hypersensitivity",
    definition: "藥物或其代謝物引起的免疫介導不良反應。可為IgE介導的速發型反應或細胞介導的延遲型反應，範圍從皮疹到致命的全身反應。",
    synonyms: ["Drug Allergy", "Drug Reaction", "Adverse Drug Reaction", "藥物不良反應", "藥物過敏反應"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡",
      sex: "無明顯性別傾向",
      riskFactors: ["先前藥物反應史", "同時使用多種藥物", "肝腎功能不全（影響藥物代謝）", "免疫系統疾病", "品種傾向（某些藥物）"]
    },
    clinicalPresentation: {
      history: ["近期開始使用新藥物", "既往對該藥或相關藥物有反應", "症狀在用藥後數分鐘到數週出現"],
      physicalExam: ["皮膚反應（最常見）：", "  - 紅斑、丘疹", "  - 蕁麻疹", "  - 面部水腫", "  - 搔癢", "  - 嚴重：表皮壞死溶解(TEN)、多形性紅斑", "全身反應：", "  - 發燒", "  - 淋巴結腫大", "  - 器官損傷（肝、腎、血液）", "過敏性休克（見該條目）"]
    },
    pathophysiology: "Type I（IgE介導）：速發型，分鐘至小時內，蕁麻疹、過敏性休克。Type II（細胞毒性）：抗體攻擊藥物結合的細胞，如藥物性IMHA/ITP。Type III（免疫複合物）：血清病樣反應，數天至週。Type IV（細胞介導）：延遲型，數天至週，接觸性皮膚炎。",
    diagnosis: {
      overview: "主要依據病史和時間關係",
      differentials: ["非免疫性藥物不良反應", "其他過敏（環境、食物）", "感染性皮膚病", "自體免疫疾病", "腫瘤"],
      initialDB: ["詳細用藥史（包括OTC和補充品）", "症狀和用藥的時間關係", "CBC、生化（評估器官損傷）", "尿液分析", "皮膚檢查"],
      advanced: ["皮膚活檢", "淋巴球轉化試驗（研究性）", "藥物激發試驗（有風險，罕用）"]
    },
    treatment: {
      overview: "停止致敏藥物是最重要步驟",
      acute: [
        "立即停止可疑藥物",
        "輕中度反應：",
        "  - 抗組織胺：Diphenhydramine 1-2 mg/kg",
        "  - 皮質類固醇：Prednisolone 0.5-1 mg/kg",
        "嚴重反應/過敏性休克：",
        "  - 見過敏性休克處理",
        "支持治療：",
        "  - 輸液（維持血壓和腎灌流）",
        "  - 皮膚護理（若有皮膚反應）"
      ],
      chronic: [
        "記錄過敏藥物於病歷",
        "告知主人避免該藥物和同類藥物",
        "若需使用同類藥物：",
        "  - 權衡風險效益",
        "  - 在可監測環境下使用",
        "  - 預先給予抗組織胺",
        "脫敏（極少數情況，如無替代藥物時）"
      ]
    },
    prognosis: "停藥後多數預後良好。嚴重反應如TEN、過敏性休克預後謹慎。",
    pearls: [
      "常見引起過敏的藥物：抗生素（青黴素類、磺胺類）、NSAIDs、某些疫苗",
      "犬對磺胺類藥物反應可能很嚴重（Type III）",
      "停藥後反應可能需數天至數週才完全消退",
      "交叉反應：對青黴素過敏可能對頭孢類也過敏",
      "藥物相關血液病（IMHA/ITP）停藥後仍可能需要免疫抑制治療"
    ],
    monitoring: ["臨床症狀消退", "血液學（若有影響）", "肝腎功能", "完全停藥後追蹤"],
    reference: "Noli C et al: Cutaneous drug reactions in dogs: a retrospective study of 45 cases. Vet Dermatol 6:13-20, 1995"
  },

  "contact-dermatitis": {
    zh: "接觸性皮膚炎",
    en: "Contact Dermatitis",
    definition: "皮膚直接接觸刺激物或過敏原後發生的發炎反應。可分為刺激性接觸性皮膚炎（非免疫性）和過敏性接觸性皮膚炎（免疫介導，Type IV過敏反應）。",
    synonyms: ["Contact Allergy", "Allergic Contact Dermatitis", "Irritant Contact Dermatitis", "接觸性過敏"],
    epidemiology: {
      species: "犬較常見，貓罕見",
      age: "任何年齡，過敏性需先前致敏（通常>6月齡）",
      sex: "無明顯性別傾向",
      riskFactors: ["短毛或無毛品種（皮膚暴露較多）", "接觸植物、地毯、清潔劑", "過敏體質（異位性皮膚炎者更易）"]
    },
    clinicalPresentation: {
      history: ["搔癢或疼痛", "與特定環境或物質接觸後發生", "症狀局限於接觸區域", "可能季節性（植物相關）"],
      physicalExam: ["病變分布於毛髮稀疏/接觸區域：", "  - 腹部、腋下、腹股溝", "  - 趾間、腳掌墊", "  - 耳廓、口周", "  - 陰囊", "刺激性：紅斑、水腫、可能水泡或糜爛", "過敏性：紅斑、丘疹、搔癢、慢性可苔蘚化"]
    },
    pathophysiology: "刺激性接觸性皮膚炎：直接皮膚損傷，不需致敏，任何動物都可發生。過敏性接觸性皮膚炎：Type IV遲發型超敏反應 → 接觸過敏原 → 表皮細胞呈遞抗原 → T細胞致敏 → 再次接觸 → T細胞介導發炎反應（24-48小時後）。",
    diagnosis: {
      overview: "病史和病變分布是關鍵，貼布試驗可確認",
      differentials: ["異位性皮膚炎", "食物過敏", "細菌或酵母菌感染", "蠕形蟎", "疥癬", "藥物反應"],
      initialDB: ["詳細環境史", "皮膚檢查和病變分布", "皮膚刮搔（排除寄生蟲）", "細胞學（排除感染）"],
      advanced: ["限制試驗（移除懷疑物質觀察改善）", "貼布試驗（patch test）- 確診過敏性接觸性皮膚炎", "皮膚活檢"]
    },
    treatment: {
      overview: "避免接觸是根本，對症治療緩解症狀",
      acute: [
        "識別並避免接觸原：",
        "  - 常見原因：植物（wandering jew、草）、地毯染料、清潔劑、藥物外用劑、金屬（鎳）",
        "清潔皮膚：溫水沖洗去除殘留",
        "止癢：",
        "  - 局部皮質類固醇（短期）",
        "  - Prednisolone: 0.5-1 mg/kg PO短期",
        "  - 抗組織胺（效果有限）",
        "治療繼發感染"
      ],
      chronic: [
        "完全避免接觸原（最重要）",
        "環境修改：",
        "  - 更換清潔劑",
        "  - 移除有問題的植物",
        "  - 穿保護衣物/鞋套",
        "皮膚屏障保護（局部保濕劑）",
        "若無法完全避免：",
        "  - 間歇性止癢治療",
        "  - 脫敏療法（研究中，不常用）"
      ]
    },
    prognosis: "若能識別並避免接觸原，預後極好。無法避免者需長期管理。",
    pearls: [
      "接觸性皮膚炎在犬比想像中少見",
      "病變分布在毛髮稀疏區域是重要線索",
      "Wandering Jew（吊竹梅）是犬常見的植物過敏原",
      "貼布試驗需在獸醫皮膚專科進行",
      "過敏性接觸性皮膚炎需要先前致敏期"
    ],
    monitoring: ["皮膚病變改善", "避免接觸的執行", "復發"],
    reference: "Miller WH et al: Muller & Kirk's Small Animal Dermatology, 7th Ed. Elsevier, 2013"
  },

  // ==================== 神經系統免疫疾病 ====================

  "immune-mediated-meningitis": {
    zh: "免疫介導性腦膜炎",
    en: "Immune-Mediated Meningitis (Steroid-Responsive Meningitis-Arteritis)",
    definition: "一種免疫介導的軟腦膜和脊髓膜發炎，常伴隨全身性壞死性動脈炎。是犬最常見的腦膜炎類型，對皮質類固醇反應良好。",
    synonyms: ["SRMA", "Steroid-Responsive Meningitis-Arteritis", "Juvenile Polyarteritis Syndrome", "Beagle Pain Syndrome", "類固醇反應性腦膜炎"],
    epidemiology: {
      species: "犬，貓非常罕見",
      age: "年輕犬（6-18月齡最常見）",
      sex: "無明顯性別傾向",
      riskFactors: ["品種傾向（Beagle、Bernese Mountain Dog、Boxer、German Short-haired Pointer、Weimaraner、Nova Scotia Duck Tolling Retriever）"]
    },
    clinicalPresentation: {
      history: ["急性頸部疼痛和僵硬", "發燒", "不願移動", "拒絕低頭進食/飲水", "嗜睡", "步態僵硬"],
      physicalExam: ["頸部劇烈疼痛（操作時可能嚎叫）", "頸部僵硬（難以彎曲）", "發燒（>39.5°C）", "脊椎疼痛", "抑鬱、嗜睡", "通常無神經功能缺損（急性期）", "慢性期可能有輕度共濟失調"]
    },
    pathophysiology: "推測為免疫複合物介導的血管炎，主要影響腦膜和脊髓膜的軟腦膜血管。IgA在腦脊液中顯著升高是特徵。遺傳易感性 + 未知觸發因素 → 免疫系統異常活化 → 血管壁免疫複合物沉積 → 血管炎和腦膜炎 → 疼痛和發炎反應。",
    diagnosis: {
      overview: "腦脊液分析顯示特徵性嗜中性球增多",
      differentials: ["感染性腦膜炎（細菌、真菌、原蟲）", "椎間盤疾病", "腦膜瘤", "肉芽腫性腦膜腦炎(GME)", "壞死性腦炎"],
      initialDB: ["CBC（白血球增多、中性球增多）", "生化（可能正常）", "腦脊液分析：", "  - 蛋白升高", "  - 細胞數顯著升高（常>100/μL）", "  - 嗜中性球為主（急性期>70-80%）"],
      advanced: ["腦脊液IgA測定（特徵性升高）", "腦脊液培養（排除感染）", "MRI（腦膜強化）", "急性期蛋白（CRP、Haptoglobin升高）"]
    },
    treatment: {
      overview: "高劑量免疫抑制性皮質類固醇是治療基石",
      acute: [
        "Prednisolone: 2-4 mg/kg/day PO 分次給予",
        "疼痛管理：",
        "  - Gabapentin: 5-10 mg/kg PO q8-12h",
        "休息和支持照護"
      ],
      chronic: [
        "Prednisolone長期療程：",
        "  - 高劑量維持4-6週",
        "  - 緩慢減量（每2-4週減25%）",
        "  - 總療程通常6-12個月",
        "  - 部分需更長或終身治療",
        "復發或頑固病例加用：",
        "  - Azathioprine: 2 mg/kg PO q24-48h",
        "  - Cyclosporine: 5 mg/kg PO q12h",
        "監測腦脊液（評估緩解）"
      ]
    },
    prognosis: "早期積極治療預後良好，多數可達完全緩解。復發率約20-30%。太早或太快減藥會增加復發風險。慢性病例可能有永久神經損傷。",
    pearls: [
      "年輕大型犬頸部劇痛+發燒高度懷疑SRMA",
      "急性期腦脊液嗜中性球>70%是特徵",
      "類固醇反應通常在24-48小時內明顯",
      "減藥太快是復發的主要原因",
      "腦脊液IgA是疾病活動度的良好指標"
    ],
    monitoring: ["臨床症狀（疼痛、發燒）", "腦脊液分析（減藥前和停藥後）", "急性期蛋白", "藥物副作用"],
    reference: "Lowrie M et al: Steroid responsive meningitis-arteritis: a prospective study of potential disease markers. J Small Anim Pract 50:79-89, 2009"
  },

  // ==================== 免疫缺陷疾病 ====================

  "primary-immunodeficiency": {
    zh: "原發性免疫缺陷",
    en: "Primary Immunodeficiency",
    definition: "遺傳性免疫系統發育或功能缺陷，導致對感染的易感性增加。包括多種不同的疾病，影響不同的免疫成分（B細胞、T細胞、吞噬細胞或補體）。",
    synonyms: ["PID", "Congenital Immunodeficiency", "先天性免疫缺陷", "遺傳性免疫缺陷"],
    epidemiology: {
      species: "犬貓皆可發生，犬較多報導",
      age: "通常在幼年期發現（母源抗體消退後）",
      sex: "部分疾病為X連鎖（影響公犬為主）",
      riskFactors: ["品種傾向（依疾病類型）：", "  - IgA缺乏：German Shepherd、Shar Pei、Beagle", "  - SCID：Basset Hound、Welsh Corgi、Jack Russell Terrier", "  - 吞噬功能缺陷：Irish Setter、Weimaraner", "近親繁殖"]
    },
    clinicalPresentation: {
      history: ["反覆感染（呼吸道、皮膚、腸道）", "感染難以根除或頻繁復發", "對常規抗生素反應差", "生長發育遲緩", "同窩幼犬可能有類似問題"],
      physicalExam: ["營養不良、生長遲緩", "反覆性皮膚感染", "慢性呼吸道感染跡象", "淋巴結可能萎縮（B/T細胞缺陷）或腫大（慢性感染）", "脾臟萎縮（部分病例）"]
    },
    pathophysiology: "各類型機制不同：1) B細胞/抗體缺陷（最常見）：無法產生足夠抗體，易受細菌感染。2) T細胞缺陷：細胞免疫缺陷，易受病毒、真菌、原蟲感染。3) 重症複合免疫缺陷(SCID)：B和T細胞都缺陷，最嚴重。4) 吞噬功能缺陷：嗜中性球功能異常，易受細菌和真菌感染。5) 補體缺陷：罕見。",
    diagnosis: {
      overview: "懷疑需進行免疫功能評估",
      differentials: ["繼發性免疫缺陷（病毒感染、藥物、營養）", "解剖異常（如支氣管擴張）", "慢性隱蔽感染源", "糖尿病", "庫欣症"],
      initialDB: ["CBC（可能白血球減少或正常）", "血清蛋白電泳（低γ球蛋白血症？）", "血清IgG、IgM、IgA定量", "感染病原培養和鑑定"],
      advanced: ["淋巴球亞群分析（流式細胞儀）", "淋巴球功能試驗", "嗜中性球功能試驗", "基因檢測（已知突變）", "骨髓檢查"]
    },
    treatment: {
      overview: "支持治療為主，預防和積極治療感染",
      acute: [
        "積極治療現有感染：",
        "  - 根據培養結果選擇抗生素",
        "  - 療程通常需延長",
        "支持照護"
      ],
      chronic: [
        "感染預防：",
        "  - 預防性抗生素（爭議性）",
        "  - 避免暴露於感染源",
        "  - 良好營養",
        "免疫球蛋白缺乏：",
        "  - 血漿輸注（暫時性改善）",
        "  - 人或犬免疫球蛋白注射（若可取得）",
        "嚴重病例（SCID）：",
        "  - 骨髓移植（理論上可行，實際困難）",
        "  - 基因治療（研究中）",
        "不建議繁殖"
      ]
    },
    prognosis: "取決於缺陷類型和嚴重程度。IgA缺乏可能無症狀或僅輕微問題。SCID預後極差，多數在幼年期死亡。部分疾病可透過支持治療維持一定生活品質。",
    pearls: [
      "反覆感染的幼犬應懷疑免疫缺陷",
      "IgA缺乏是最常見的免疫球蛋白缺乏",
      "SCID犬隻在母源抗體消退後（8-12週齡）開始出現問題",
      "某些品種有已知的遺傳缺陷，可進行基因篩檢",
      "繁殖前應篩檢，不建議帶因者繁殖"
    ],
    monitoring: ["感染頻率和嚴重度", "生長發育", "免疫指標", "生活品質"],
    reference: "Felsburg PJ: Overview of immune system development in the dog. Vet Immunol Immunopathol 87:121-127, 2002"
  },

  // ==================== 血管炎 ====================

  "vasculitis": {
    zh: "血管炎",
    en: "Vasculitis",
    definition: "血管壁的發炎，可為免疫介導性或感染性。皮膚血管炎是最常見的表現，但也可影響內臟血管。",
    synonyms: ["血管發炎", "Cutaneous Vasculitis", "Immune-Mediated Vasculitis", "皮膚血管炎"],
    epidemiology: {
      species: "犬較常見，貓罕見",
      age: "任何年齡",
      sex: "無明顯性別傾向",
      riskFactors: ["品種傾向（Jack Russell Terrier、Greyhound、German Shepherd、Rottweiler、Dachshund）", "藥物暴露", "感染", "疫苗接種", "自體免疫疾病", "腫瘤"]
    },
    clinicalPresentation: {
      history: ["皮膚病變（潰瘍、壞死）", "跛行（若關節或肌肉血管受累）", "發燒", "食慾下降", "近期藥物使用或疫苗接種"],
      physicalExam: ["皮膚血管炎（最常見）：", "  - 點狀出血、紫斑", "  - 皮膚壞死和潰瘍", "  - 耳翼、尾尖、腳墊、口腔黏膜最常受累", "  - 四肢遠端水腫", "狂犬病疫苗部位局部血管炎（犬）", "Greyhound的特發性血管炎", "全身性血管炎：", "  - 發燒", "  - 多器官症狀"]
    },
    pathophysiology: "可能機制：1) Type III超敏反應：免疫複合物沉積於血管壁 → 補體活化 → 嗜中性球浸潤 → 血管損傷。2) Type II（ANCA相關，犬罕見）。3) 直接感染血管內皮。4) 藥物直接毒性。結果：血管通透性增加、出血、血栓形成、組織缺血和壞死。",
    diagnosis: {
      overview: "皮膚活檢是確診關鍵，同時尋找潛在原因",
      differentials: ["感染性皮膚病", "凝血障礙", "血管腫瘤", "冷凝球蛋白血症", "DIC", "SLE"],
      initialDB: ["完整皮膚檢查", "CBC（血小板、貧血）", "凝血功能", "尿液分析", "血清蛋白", "ANA（排除SLE）"],
      advanced: ["皮膚活檢（含深層真皮和皮下組織）", "免疫組織化學", "傳染病篩檢（萊姆病、立克次體等）", "腫瘤篩檢", "冷凝球蛋白檢測"]
    },
    treatment: {
      overview: "移除潛在原因，免疫抑制治療",
      acute: [
        "識別並移除潛在原因：",
        "  - 停止可疑藥物",
        "  - 治療感染",
        "支持照護：",
        "  - 傷口照護",
        "  - 保護受影響部位"
      ],
      chronic: [
        "免疫抑制治療（若為免疫介導）：",
        "  - Prednisolone: 1-2 mg/kg PO q12-24h",
        "  - 緩慢減量",
        "頑固病例添加：",
        "  - Pentoxifylline: 10-15 mg/kg PO q8-12h（改善血流）",
        "  - Azathioprine: 2 mg/kg PO q24-48h",
        "  - Dapsone: 1 mg/kg PO q8h（慎用，監測副作用）",
        "  - Niacinamide + Tetracycline組合",
        "局部治療：傷口敷料、感染控制",
        "若有腫瘤需治療原發病"
      ]
    },
    prognosis: "取決於潛在原因和嚴重程度。藥物相關血管炎停藥後預後良好。特發性血管炎可能需長期治療。全身性血管炎預後較差。",
    pearls: [
      "活檢應取病變邊緣，包含深層組織",
      "狂犬病疫苗相關血管炎是已知實體",
      "Pentoxifylline對某些病例有益",
      "尋找潛在原因很重要（藥物、感染、腫瘤）",
      "部分病例可能永遠找不到原因（特發性）"
    ],
    monitoring: ["皮膚病變癒合", "新病變出現", "全身症狀", "藥物副作用"],
    reference: "Nichols PR et al: Cutaneous vasculitis in dogs: a retrospective study of 72 cases. Vet Dermatol 12:281-292, 2001"
  },

  // ==================== 幼犬特殊疾病 ====================

  "juvenile-cellulitis": {
    zh: "幼犬蜂窩組織炎",
    en: "Juvenile Cellulitis (Puppy Strangles)",
    definition: "幼犬的急性肉芽腫性和膿性皮膚淋巴結炎，病因不明但推測為免疫介導，與細菌感染無直接關係。以顏面腫脹和下頜淋巴結腫大為特徵。",
    synonyms: ["Puppy Strangles", "Juvenile Sterile Granulomatous Dermatitis and Lymphadenitis", "幼犬膿皮症"],
    epidemiology: {
      species: "犬",
      age: "幼犬（3週-6月齡，最常見3-16週齡）",
      sex: "無明顯性別傾向",
      riskFactors: ["品種傾向（Golden Retriever、Dachshund、Gordon Setter、Labrador、Beagle、Pointer）", "可能有遺傳因素", "同窩多隻發病常見"]
    },
    clinicalPresentation: {
      history: ["急性顏面腫脹", "耳朵腫脹和分泌物", "下頜腫塊", "發燒", "食慾下降", "精神沉鬱", "可能有跛行（關節炎）"],
      physicalExam: ["顏面腫脹（眼瞼、嘴唇、口鼻部）", "耳廓內側丘疹、膿皰和結痂", "下頜淋巴結顯著腫大（可能破潰流膿）", "耳道膿性分泌物", "肛周可能有病變", "可能有關節腫脹（無菌性關節炎）", "發燒"]
    },
    pathophysiology: "確切病因不明，推測為免疫系統異常反應。可能與皮膚毛囊或皮脂腺抗原的自體免疫反應有關。病灶培養通常為無菌（除非繼發感染）。肉芽腫性發炎和化膿是組織學特徵。",
    diagnosis: {
      overview: "典型年齡和臨床表現通常足以診斷",
      differentials: ["蠕形蟎感染", "細菌性毛囊炎", "皮癬菌感染", "天疱瘡", "藥物反應"],
      initialDB: ["皮膚刮搔（排除蠕形蟎）", "細胞學（化膿性肉芽腫性發炎）", "細菌培養（通常無菌）"],
      advanced: ["皮膚活檢（肉芽腫性脂肪腺炎）", "關節穿刺（若有關節炎）"]
    },
    treatment: {
      overview: "高劑量免疫抑制性皮質類固醇是治療基石",
      acute: [
        "Prednisolone: 2 mg/kg/day PO（高劑量）",
        "  - 維持高劑量直到病變明顯改善",
        "局部治療：",
        "  - 溫熱敷軟化結痂",
        "  - 輕柔清潔",
        "繼發感染治療：",
        "  - 抗生素（若有繼發細菌感染）",
        "疼痛管理"
      ],
      chronic: [
        "Prednisolone緩慢減量：",
        "  - 每1-2週減25%",
        "  - 總療程通常4-8週",
        "  - 太早停藥會復發",
        "頑固病例可加用Cyclosporine",
        "支持照護（營養、保溫）"
      ]
    },
    prognosis: "早期治療預後良好，多數完全康復。延遲治療可能留下永久疤痕。復發罕見。嚴重病例可能有致命風險（若不治療）。",
    pearls: [
      "這不是細菌感染！不要只用抗生素",
      "早期使用類固醇是關鍵，可防止疤痕",
      "同窩幼犬應密切觀察",
      "類固醇可能需使用4-8週",
      "沒有對類固醇反應要重新評估診斷"
    ],
    monitoring: ["病變改善", "淋巴結大小", "體重和生長", "藥物副作用（免疫抑制下的感染風險）"],
    reference: "Scott DW et al: Juvenile cellulitis in dogs: a retrospective study of 18 cases. J Am Anim Hosp Assoc 31:211-217, 1995"
  },

  // ==================== 貓特殊免疫疾病 ====================

  "eosinophilic-granuloma-complex": {
    zh: "嗜酸性肉芽腫複合症",
    en: "Eosinophilic Granuloma Complex (EGC)",
    definition: "貓的一組皮膚黏膜發炎性疾病，特徵為嗜酸性球浸潤。包括三種主要表現：無痛性潰瘍、嗜酸性斑塊和嗜酸性肉芽腫。通常與過敏反應有關。",
    synonyms: ["EGC", "Feline Eosinophilic Granuloma", "Rodent Ulcer", "Indolent Ulcer", "貓嗜酸性肉芽腫"],
    epidemiology: {
      species: "貓（犬罕見）",
      age: "任何年齡，年輕至中年貓較常見",
      sex: "嗜酸性肉芽腫在母貓可能較常見",
      riskFactors: ["過敏體質（跳蚤過敏、食物過敏、環境過敏）", "遺傳傾向", "免疫系統異常"]
    },
    clinicalPresentation: {
      history: ["口唇潰瘍（無痛性潰瘍）", "腹部或大腿內側紅斑斑塊", "嘴唇或下巴腫脹", "舔舐或搔癢（嗜酸性斑塊）", "可能無搔癢（無痛性潰瘍、肉芽腫）"],
      physicalExam: ["無痛性潰瘍(Indolent Ulcer)：", "  - 上唇紅棕色邊緣清楚的潰瘍", "  - 通常無痛", "  - 可單側或雙側", "嗜酸性斑塊(Eosinophilic Plaque)：", "  - 腹部、大腿內側", "  - 紅色、隆起、濕潤、可能潰瘍", "  - 通常很癢", "嗜酸性肉芽腫(Eosinophilic Granuloma)：", "  - 線形肉芽腫：大腿後側黃粉色線形病變", "  - 下巴/嘴唇：無痛腫脹", "  - 口腔：舌頭或軟齶結節", "  - 腳墊腫脹"]
    },
    pathophysiology: "推測為對各種過敏原的異常免疫反應，導致嗜酸性球和肥大細胞活化、組織浸潤和發炎介質釋放。過敏原可能包括：跳蚤唾液、食物成分、環境過敏原、蚊蟲叮咬。部分病例可能有遺傳性傾向，對抗原反應異常。",
    diagnosis: {
      overview: "臨床表現特徵性，但需尋找潛在過敏原因",
      differentials: ["鱗狀細胞癌（無痛性潰瘍）", "其他腫瘤", "感染（細菌、真菌、病毒）", "自體免疫疾病", "外傷"],
      initialDB: ["完整皮膚檢查", "細胞學（大量嗜酸性球）", "皮膚刮搔（排除蠕形蟎）", "跳蚤梳檢", "CBC（可能嗜酸性球增多）"],
      advanced: ["皮膚活檢（確診，尤其排除腫瘤）", "食物排除試驗（8-12週）", "過敏原檢測", "FeLV/FIV檢測"]
    },
    treatment: {
      overview: "處理潛在過敏原因 + 控制發炎",
      acute: [
        "嚴格跳蚤控制（所有貓+環境）",
        "止癢/消炎治療：",
        "  - Prednisolone: 1-2 mg/kg PO q24h x 2-4週，然後減量",
        "  - Methylprednisolone acetate: 4 mg/kg SC（效果持續2-4週）",
        "繼發感染治療"
      ],
      chronic: [
        "長期過敏管理：",
        "1. 持續跳蚤預防",
        "2. 食物排除試驗（水解蛋白或新蛋白質飲食）",
        "3. 環境過敏考慮免疫治療",
        "頑固病例藥物選擇：",
        "  - Cyclosporine (Atopica): 7 mg/kg PO q24h（需4-6週見效）",
        "  - Chlorambucil: 0.1-0.2 mg/kg PO q24-48h",
        "  - Methylprednisolone pulse therapy",
        "新型治療：",
        "  - 干細胞治療（研究中）",
        "避免長期類固醇（糖尿病風險）"
      ]
    },
    prognosis: "若能控制潛在過敏原，預後良好。特發性病例可能需長期管理。部分病例會復發。口腔病變可能影響進食。",
    pearls: [
      "EGC是過敏的表現，不是單一疾病",
      "跳蚤過敏是最常見原因，即使未發現跳蚤",
      "無痛性潰瘍需與口唇鱗狀細胞癌鑑別",
      "長期類固醇使用在貓有糖尿病風險",
      "治療需找出並控制潛在過敏原"
    ],
    monitoring: ["病變大小和外觀", "搔癢程度", "體重和血糖（若使用類固醇）", "復發"],
    reference: "Bloom PB: Canine and feline eosinophilic skin diseases. Vet Clin North Am Small Anim Pract 36:141-160, 2006"
  },

  // ==================== 血液免疫疾病 ====================

  "cold-agglutinin-disease": {
    zh: "冷凝集素病",
    en: "Cold Agglutinin Disease",
    definition: "一種少見的自體免疫性溶血性貧血亞型，特徵為在低溫下，IgM抗體（冷凝集素）與紅血球結合導致紅血球凝集和補體介導的溶血。通常影響暴露於低溫的末梢部位。",
    synonyms: ["Cold Hemagglutinin Disease", "CAD", "Cold Autoimmune Hemolytic Anemia", "冷型自體免疫性溶血性貧血"],
    epidemiology: {
      species: "犬貓皆罕見",
      age: "任何年齡",
      sex: "無明顯性別傾向",
      riskFactors: ["淋巴系統腫瘤", "慢性感染", "自體免疫疾病", "寒冷環境暴露"]
    },
    clinicalPresentation: {
      history: ["暴露於寒冷後症狀加重", "耳尖、尾尖、腳趾發紫或壞死", "虛弱", "運動不耐", "尿液變色（血紅素尿）"],
      physicalExam: ["末梢部位紫紺、壞死（耳尖、尾尖、腳趾、鼻尖、陰囊）", "黏膜蒼白", "黃疸（溶血）", "脾腫大", "心搏過速", "發燒（若有繼發感染）"]
    },
    pathophysiology: "IgM冷凝集素在低溫（<30°C）下與紅血球表面抗原結合 → 紅血球凝集（末梢低溫部位）→ 微血管阻塞 → 缺血和壞死。同時 IgM 固定補體 → 補體介導的血管內溶血（當血液回到溫暖的中心部位）。可為原發性或繼發於其他疾病（淋巴瘤、感染）。",
    diagnosis: {
      overview: "血液樣本在低溫下凝集是診斷關鍵",
      differentials: ["其他IMHA類型（溫型）", "感染性貧血", "凝血障礙", "血管炎", "冷凍傷"],
      initialDB: ["CBC（貧血、可能自動凝集）", "血液抹片（紅血球凝集，復溫後消失）", "生化（膽紅素升高）", "尿液分析（血紅素尿）", "Direct Coombs試驗（可能陽性）"],
      advanced: ["冷凝集素效價測定", "骨髓檢查（排除淋巴瘤）", "傳染病篩檢（Mycoplasma等）", "影像學檢查（尋找潛在腫瘤）"]
    },
    treatment: {
      overview: "避免寒冷暴露 + 治療潛在疾病 + 免疫抑制",
      acute: [
        "避免寒冷暴露（最重要）：",
        "  - 保持溫暖環境",
        "  - 保護末梢部位",
        "嚴重貧血：",
        "  - 輸血（血液需加溫至37°C）",
        "  - 氧氣支持",
        "壞死組織處理"
      ],
      chronic: [
        "免疫抑制治療（若為原發性）：",
        "  - Prednisolone: 2 mg/kg PO q12h（效果可能不如溫型IMHA好）",
        "  - Chlorambucil: 0.1-0.2 mg/kg PO q24-48h（因為IgM）",
        "  - Mycophenolate: 10 mg/kg PO q12h",
        "治療繼發原因（若有）：",
        "  - 淋巴瘤化療",
        "  - 感染治療",
        "長期寒冷避免"
      ]
    },
    prognosis: "原發性病例若能避免寒冷，預後可接受。繼發於腫瘤者預後取決於腫瘤治療效果。可能留下永久性末梢組織損傷。",
    pearls: [
      "血液樣本在室溫下放置可能看到凝集",
      "溫型IMHA遠比冷型常見",
      "冷凝集素效價需在37°C和4°C下比較",
      "輸血時血液必須加溫",
      "類固醇對冷型IMHA效果不如溫型好"
    ],
    monitoring: ["PCV/貧血程度", "網織紅血球（骨髓反應）", "末梢循環狀態", "潛在疾病進展"],
    reference: "Swann JW, Skelly BJ: Systematic review of evidence relating to the treatment of immune-mediated hemolytic anemia in dogs. J Vet Intern Med 27:1-9, 2013"
  }

};

// 疾病別名映射（用於搜尋）
const IMMUNOLOGICAL_DISEASE_ALIASES = {
  // 系統性紅斑性狼瘡
  "系統性紅斑性狼瘡": "systemic-lupus-erythematosus",
  "紅斑狼瘡": "systemic-lupus-erythematosus",
  "狼瘡": "systemic-lupus-erythematosus",
  "SLE": "systemic-lupus-erythematosus",
  "lupus": "systemic-lupus-erythematosus",

  // 免疫介導性多發性關節炎
  "免疫介導性多發性關節炎": "immune-mediated-polyarthritis",
  "免疫性關節炎": "immune-mediated-polyarthritis",
  "多發性關節炎": "immune-mediated-polyarthritis",
  "IMPA": "immune-mediated-polyarthritis",
  "polyarthritis": "immune-mediated-polyarthritis",

  // 咀嚼肌炎
  "咀嚼肌炎": "masticatory-muscle-myositis",
  "咬肌炎": "masticatory-muscle-myositis",
  "顳肌炎": "masticatory-muscle-myositis",
  "MMM": "masticatory-muscle-myositis",
  "masticatory myositis": "masticatory-muscle-myositis",

  // 眼外肌肌炎
  "眼外肌肌炎": "extraocular-myositis",
  "眼球突出肌炎": "extraocular-myositis",
  "EOM": "extraocular-myositis",
  "extraocular myositis": "extraocular-myositis",

  // 過敏性休克
  "過敏性休克": "anaphylaxis",
  "嚴重過敏反應": "anaphylaxis",
  "過敏性反應": "anaphylaxis",
  "anaphylactic shock": "anaphylaxis",

  // 異位性皮膚炎
  "異位性皮膚炎": "atopy",
  "異位性皮炎": "atopy",
  "環境過敏": "atopy",
  "atopic dermatitis": "atopy",
  "CAD": "atopy",

  // 疫苗反應
  "疫苗反應": "vaccine-reaction",
  "疫苗副作用": "vaccine-reaction",
  "疫苗不良反應": "vaccine-reaction",
  "vaccine adverse event": "vaccine-reaction",

  // 藥物過敏
  "藥物過敏": "drug-hypersensitivity",
  "藥物不良反應": "drug-hypersensitivity",
  "藥物過敏反應": "drug-hypersensitivity",
  "drug allergy": "drug-hypersensitivity",

  // 接觸性皮膚炎
  "接觸性皮膚炎": "contact-dermatitis",
  "接觸性過敏": "contact-dermatitis",
  "contact allergy": "contact-dermatitis",

  // 免疫介導性腦膜炎
  "免疫介導性腦膜炎": "immune-mediated-meningitis",
  "類固醇反應性腦膜炎": "immune-mediated-meningitis",
  "SRMA": "immune-mediated-meningitis",
  "steroid responsive meningitis": "immune-mediated-meningitis",

  // 原發性免疫缺陷
  "原發性免疫缺陷": "primary-immunodeficiency",
  "先天性免疫缺陷": "primary-immunodeficiency",
  "遺傳性免疫缺陷": "primary-immunodeficiency",
  "PID": "primary-immunodeficiency",
  "immunodeficiency": "primary-immunodeficiency",

  // 血管炎
  "血管炎": "vasculitis",
  "血管發炎": "vasculitis",
  "皮膚血管炎": "vasculitis",
  "cutaneous vasculitis": "vasculitis",

  // 幼犬蜂窩組織炎
  "幼犬蜂窩組織炎": "juvenile-cellulitis",
  "幼犬膿皮症": "juvenile-cellulitis",
  "puppy strangles": "juvenile-cellulitis",

  // 嗜酸性肉芽腫複合症
  "嗜酸性肉芽腫複合症": "eosinophilic-granuloma-complex",
  "嗜酸性肉芽腫": "eosinophilic-granuloma-complex",
  "貓嗜酸性肉芽腫": "eosinophilic-granuloma-complex",
  "EGC": "eosinophilic-granuloma-complex",
  "rodent ulcer": "eosinophilic-granuloma-complex",
  "無痛性潰瘍": "eosinophilic-granuloma-complex",

  // 冷凝集素病
  "冷凝集素病": "cold-agglutinin-disease",
  "冷型自體免疫性溶血性貧血": "cold-agglutinin-disease",
  "cold hemagglutinin disease": "cold-agglutinin-disease"
};

// 導出（若在模組環境中使用）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { IMMUNOLOGICAL_DISEASE_INFO, IMMUNOLOGICAL_DISEASE_ALIASES };
}

console.log("Immunological Disease Info loaded:", Object.keys(IMMUNOLOGICAL_DISEASE_INFO).length, "diseases");

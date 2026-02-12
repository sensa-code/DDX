// ======= 急診與危重症疾病 DISEASE_INFO =======
// Emergency and Critical Care Diseases
// 資料來源：Clinical Veterinary Advisor: Dogs and Cats, 2nd Ed. (Etienne Côté)
// Veterinary Emergency and Critical Care Manual, RECOVER Guidelines

const EMERGENCY_CRITICAL_CARE_DISEASES = {
  "cardiopulmonary-arrest": {
    zh: "心肺驟停",
    en: "Cardiopulmonary Arrest (CPA)",
    definition: "心臟和呼吸功能突然停止，導致組織灌注和氧氣輸送完全中斷的危及生命緊急狀況。",
    synonyms: ["CPA", "Cardiac Arrest", "心跳停止", "Cardiorespiratory Arrest"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡，老年或重症動物風險較高",
      sex: "無性別傾向",
      riskFactors: ["麻醉期間", "嚴重創傷", "休克", "呼吸衰竭", "嚴重心律不整", "電解質失衡（高血鉀）", "敗血症", "重度低體溫"]
    },
    clinicalPresentation: {
      history: ["突然倒下", "失去意識", "可能有前驅症狀（呼吸困難、心律不整）"],
      physicalExam: ["無意識", "無呼吸或瀕死呼吸", "無可觸及脈搏", "瞳孔散大", "黏膜蒼白或發紺", "無角膜反射"]
    },
    pathophysiology: "心臟停止泵血 → 腦部和重要器官缺氧 → 4-6分鐘內開始不可逆腦損傷 → 細胞死亡 → 多器官衰竭",
    diagnosis: {
      overview: "臨床診斷：無意識、無呼吸、無脈搏。確認後立即開始CPR",
      differentials: ["深度麻醉", "嚴重休克", "癲癇發作後狀態"],
      initialDB: ["ECG（心搏停止、心室纖維顫動、無脈性電氣活動）", "ETCO2監測（評估CPR品質）"],
      advanced: ["血氣分析", "電解質（尤其鉀離子）", "乳酸"]
    },
    treatment: {
      overview: "遵循RECOVER指南進行心肺復甦術（CPR）：基礎生命支持(BLS)和高級生命支持(ALS)",
      acute: [
        "基礎生命支持(BLS)：",
        "- 胸外按壓：100-120次/分鐘，深度為胸腔寬度的1/3-1/2",
        "- 每2分鐘換人避免疲勞",
        "- 犬側臥或仰臥，貓側臥",
        "- 通氣：氣管插管，10次/分鐘，避免過度通氣",
        "高級生命支持(ALS)：",
        "- Epinephrine（低劑量）: 0.01 mg/kg IV q3-5min",
        "- Epinephrine（高劑量）: 0.1 mg/kg IV（長時間CPR）",
        "- Atropine: 0.04 mg/kg IV（迷走神經介導的心搏停止）",
        "- Vasopressin: 0.8 U/kg IV（替代或輔助Epinephrine）",
        "- 電擊除顫：VF/pulseless VT: 2-4 J/kg 外部, 0.5-1 J/kg 內部",
        "- 糾正可逆原因（4H's和4T's）"
      ],
      chronic: ["復甦後護理", "神經功能評估", "針對原發病因治療"]
    },
    prognosis: "整體存活至出院率約6%（犬）和5%（貓）。院內心搏停止比院外好。早期識別和高品質CPR是關鍵。",
    pearls: [
      "「時間就是大腦」- 每延遲1分鐘存活率下降7-10%",
      "高品質胸外按壓是最重要的：足夠深度、充分回彈、最少中斷",
      "ETCO2 > 15 mmHg 提示有效CPR",
      "記住4H's：Hypoxia、Hypovolemia、Hypothermia、Hypo/Hyperkalemia",
      "記住4T's：Tension pneumothorax、Tamponade、Toxins、Thromboembolism"
    ],
    monitoring: ["ECG", "ETCO2", "動脈血壓", "瞳孔大小和反射", "神經功能"],
    reference: "RECOVER Guidelines 2012; Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "respiratory-distress": {
    zh: "呼吸窘迫",
    en: "Respiratory Distress",
    definition: "呼吸系統無法維持正常氣體交換，導致低氧血症和/或高碳酸血症的危急狀態。",
    synonyms: ["呼吸困難", "Dyspnea", "Respiratory Failure", "呼吸衰竭"],
    epidemiology: {
      species: "犬貓皆常見",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["短頭犬種", "心臟病", "肺部疾病", "氣道阻塞", "胸腔疾病", "神經肌肉疾病"]
    },
    clinicalPresentation: {
      history: ["呼吸急促或費力", "運動不耐", "咳嗽", "發紺", "姿勢異常（端坐呼吸）", "張口呼吸（貓）"],
      physicalExam: ["呼吸急促或緩慢", "呼吸費力（吸氣性/呼氣性/混合性）", "發紺", "異常呼吸音", "頸部伸展", "腹式呼吸", "矛盾呼吸"]
    },
    pathophysiology: "根據病因不同：上呼吸道阻塞 → 吸氣性困難；下呼吸道疾病 → 呼氣性困難；肺實質疾病 → 限制性呼吸；胸腔疾病 → 淺快呼吸。共同結果：低氧血症、呼吸疲勞、呼吸衰竭",
    diagnosis: {
      overview: "快速評估呼吸型態定位問題所在，穩定後進一步檢查",
      differentials: ["上呼吸道阻塞", "下呼吸道疾病（氣喘、支氣管炎）", "肺實質疾病（肺炎、肺水腫）", "胸腔積液/氣胸", "心臟疾病", "橫膈膜疝氣"],
      initialDB: ["脈搏血氧儀(SpO2)", "胸腔聽診", "快速穩定後胸腔X光", "TFAST/AFAST超聲"],
      advanced: ["血氣分析", "CT", "支氣管鏡", "心臟超聲"]
    },
    treatment: {
      overview: "「先穩定再診斷」：氧氣支持、減少應激、針對病因治療",
      acute: [
        "氧氣支持：流量氧氣、氧氣籠、鼻導管（50-100 mL/kg/min）",
        "最小化應激和處置",
        "鎮靜（若焦躁）：Butorphanol 0.2-0.4 mg/kg IM/IV",
        "上呼吸道阻塞：考慮緊急氣管切開術",
        "氣胸：緊急胸腔穿刺減壓",
        "胸腔積液：治療性胸腔穿刺",
        "肺水腫：Furosemide 2-4 mg/kg IV",
        "嚴重時：氣管插管和機械通氣"
      ],
      chronic: ["針對原發病因治療", "長期氧氣治療（若需要）"]
    },
    prognosis: "取決於病因和嚴重程度。早期識別和氧氣支持可顯著改善預後。",
    pearls: [
      "貓張口呼吸是嚴重呼吸窘迫的徵兆",
      "呼吸型態可幫助定位問題：吸氣性=上呼吸道；呼氣性=下呼吸道",
      "應激可快速使呼吸窘迫動物失代償",
      "穩定前避免過多處置",
      "TFAST可快速排除胸腔積液和氣胸"
    ],
    monitoring: ["呼吸頻率和型態", "SpO2", "黏膜顏色", "精神狀態", "血氣"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "status-epilepticus": {
    zh: "癲癇持續狀態",
    en: "Status Epilepticus",
    definition: "持續超過5分鐘的癲癇發作，或兩次以上發作之間未完全恢復意識的危及生命緊急狀況。",
    synonyms: ["SE", "持續性癲癇", "Continuous Seizure Activity"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["特發性癲癇", "腦部結構性病變", "代謝性疾病", "中毒", "感染性腦炎", "先前癲癇控制不佳"]
    },
    clinicalPresentation: {
      history: ["癲癇發作史", "近期藥物改變或漏服", "可能暴露毒物", "近期疾病"],
      physicalExam: ["持續或反覆的全身性或局部性癲癇發作", "發作間期意識未恢復", "自主神經症狀（流涎、排尿排便）", "高體溫", "心搏過速"]
    },
    pathophysiology: "持續的神經元過度放電 → 興奮性神經傳導物質（谷氨酸）釋放 → GABA抑制機制耗竭 → 神經元損傷 → 腦水腫 → 繼發性腦損傷",
    diagnosis: {
      overview: "臨床診斷明確，需同時排除和治療可逆原因",
      differentials: ["特發性癲癇", "症狀性癲癇（腦腫瘤、腦炎）", "代謝性（低血糖、肝腦病、尿毒症）", "中毒"],
      initialDB: ["血糖（立即）", "體溫", "電解質（Ca、Na）", "BUN/Crea", "肝功能", "血氣"],
      advanced: ["腦脊液分析", "MRI", "毒物篩檢", "抗癲癇藥物濃度"]
    },
    treatment: {
      overview: "快速終止癲癇發作、防止復發、治療可逆原因、預防繼發性損傷",
      acute: [
        "ABC：確保呼吸道通暢，給予氧氣",
        "建立靜脈通路",
        "低血糖：Dextrose 0.5-1 g/kg IV（稀釋至25%）",
        "第一線抗癲癇藥：",
        "- Diazepam: 0.5-1 mg/kg IV（可重複至3次）",
        "- 或 Midazolam: 0.2-0.5 mg/kg IV/IM/IN",
        "第二線（若Benzodiazepines無效）：",
        "- Levetiracetam: 60 mg/kg IV over 5min",
        "- 或 Phenobarbital: 4-6 mg/kg IV slow（可重複至16-24 mg/kg總量）",
        "難治性SE：",
        "- Propofol: 1-4 mg/kg IV bolus, then 0.1-0.6 mg/kg/min CRI",
        "- 或 Ketamine: 5 mg/kg IV bolus, then 5-20 μg/kg/min CRI",
        "降溫措施（若高體溫）",
        "治療腦水腫：Mannitol 0.5-1 g/kg IV over 20min"
      ],
      chronic: ["長期抗癲癇藥物", "治療潛在病因", "定期監測藥物濃度"]
    },
    prognosis: "及時治療預後可良好。持續時間越長，預後越差且神經損傷風險越高。死亡率約25-30%。",
    pearls: [
      "「時間就是大腦」- 癲癇超過30分鐘可導致永久性腦損傷",
      "快速血糖檢測是第一步",
      "Diazepam直腸給藥是院外急救選項",
      "高體溫是常見併發症，需積極降溫",
      "即使發作停止，仍需密切監測復發"
    ],
    monitoring: ["癲癇活動", "體溫", "血糖", "呼吸功能", "神經功能", "抗癲癇藥物濃度"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "acute-abdomen": {
    zh: "急性腹症",
    en: "Acute Abdomen",
    definition: "突發性嚴重腹痛伴隨全身症狀的臨床綜合症，常需要緊急外科或內科介入。",
    synonyms: ["急腹症", "Surgical Abdomen", "Abdominal Emergency"],
    epidemiology: {
      species: "犬貓皆常見",
      age: "任何年齡",
      sex: "依病因而異",
      riskFactors: ["異物攝入史", "未絕育", "特定品種（深胸犬GDV）", "腫瘤", "外傷"]
    },
    clinicalPresentation: {
      history: ["突發腹痛", "嘔吐", "腹部膨大", "虛弱", "不願移動", "食慾下降"],
      physicalExam: ["腹部緊張或疼痛", "腹部膨脹", "「祈禱姿勢」", "發燒或低體溫", "休克徵象", "黏膜顏色異常", "腸音改變"]
    },
    pathophysiology: "多種病因可導致：器官扭轉/阻塞 → 缺血壞死；器官破裂 → 腹膜炎；感染/炎症 → SIRS/敗血症。共同結果：劇烈腹痛、全身炎症反應、休克",
    diagnosis: {
      overview: "快速分類：需要緊急手術 vs 可內科治療。穩定後進一步檢查",
      differentials: ["GDV", "腸阻塞/套疊", "脾扭轉", "子宮蓄膿/子宮扭轉", "腹腔出血", "膀胱破裂", "膽囊破裂", "腸系膜扭轉", "急性胰臟炎", "腹膜炎"],
      initialDB: ["腹部X光（正側位）", "AFAST超聲", "PCV/TS", "乳酸", "電解質", "血糖"],
      advanced: ["腹部超聲", "腹腔穿刺", "CT", "診斷性腹腔灌洗"]
    },
    treatment: {
      overview: "穩定、止痛、針對病因治療（手術或內科）",
      acute: [
        "靜脈通路和積極輸液復甦",
        "止痛：Opioids（Methadone 0.2-0.5 mg/kg IV）",
        "廣譜抗生素（若懷疑感染/穿孔）",
        "根據診斷決定手術或內科治療",
        "GDV：胃減壓 + 緊急手術",
        "腹腔出血：輸血 + 可能手術探查",
        "膀胱破裂：穩定 + 手術修復"
      ],
      chronic: ["術後護理", "針對原發病因長期管理"]
    },
    prognosis: "取決於病因和及時診斷治療。早期識別和外科介入可顯著改善預後。",
    pearls: [
      "急性腹症是臨床綜合症，不是診斷",
      "AFAST是快速評估腹腔積液的有力工具",
      "乳酸升高提示組織灌注不足",
      "不要因為等待診斷而延遲穩定和止痛",
      "某些情況下探查性開腹術是診斷和治療"
    ],
    monitoring: ["腹部疼痛程度", "生命體徵", "乳酸", "PCV/TS", "尿量"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "hemorrhagic-shock": {
    zh: "失血性休克",
    en: "Hemorrhagic Shock",
    definition: "因大量血液流失導致組織灌注不足的低血容量性休克。",
    synonyms: ["出血性休克", "Hypovolemic Shock (Hemorrhagic)", "低血容量休克"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["創傷", "腹腔腫瘤破裂（血管肉瘤）", "凝血障礙", "手術併發症", "抗凝血劑中毒"]
    },
    clinicalPresentation: {
      history: ["創傷史", "腫瘤病史", "虛弱/倒地", "腹部膨大", "蒼白"],
      physicalExam: ["心搏過速", "脈搏弱或無法觸及", "黏膜蒼白", "CRT延長", "低血壓", "精神抑鬱", "低體溫", "呼吸急促"]
    },
    pathophysiology: "血液流失（>20-30%血容量）→ 心臟前負荷下降 → 心輸出量減少 → 代償性心搏過速和血管收縮 → 組織灌注不足 → 無氧代謝和乳酸堆積 → 細胞損傷 → 器官衰竭",
    diagnosis: {
      overview: "臨床表現結合PCV/TS下降（急性出血早期可能正常）",
      differentials: ["其他類型休克", "心臟疾病", "敗血症"],
      initialDB: ["PCV/TS（序列監測）", "乳酸", "血壓", "AFAST超聲", "凝血功能（PT/PTT）", "血型"],
      advanced: ["CT（尋找出血來源）", "TEG/ROTEM"]
    },
    treatment: {
      overview: "控制出血、恢復血容量、維持組織灌注",
      acute: [
        "直接壓迫止血（外傷）",
        "靜脈輸液復甦：",
        "- 晶體液：10-20 mL/kg IV bolus（犬）；5-10 mL/kg（貓）",
        "- 膠體液：5-10 mL/kg IV",
        "- 高滲鹽水：4 mL/kg IV over 5-10min",
        "輸血指征（PCV<20-25%或急性大量出血）：",
        "- 濃縮紅血球：10-20 mL/kg",
        "- 全血：20-25 mL/kg",
        "- 新鮮冷凍血漿（若凝血障礙）",
        "避免過度稀釋（允許性低血壓直到止血）",
        "手術控制出血（若內出血持續）",
        "Tranexamic acid: 10-15 mg/kg IV（抗纖溶）"
      ],
      chronic: ["監測復發出血", "治療潛在病因", "鐵補充"]
    },
    prognosis: "取決於出血原因和能否控制。創傷性出血若及時控制預後可良好。腫瘤破裂預後較差。",
    pearls: [
      "急性出血早期PCV可能正常（血液濃縮）",
      "序列PCV監測比單次更有意義",
      "AFAST可快速評估腹腔積血",
      "允許性低血壓（MAP 60-80 mmHg）直到手術止血",
      "注意「死亡三聯症」：低體溫、酸中毒、凝血病"
    ],
    monitoring: ["PCV/TS q30-60min", "血壓", "乳酸", "尿量", "凝血功能", "AFAST追蹤"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "distributive-shock": {
    zh: "分佈性休克",
    en: "Distributive Shock",
    definition: "血管阻力異常降低導致血液分佈異常、組織灌注不足的休克類型，包括敗血性休克和過敏性休克。",
    synonyms: ["Vasodilatory Shock", "血管擴張性休克", "Septic Shock", "Anaphylactic Shock"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["感染（敗血症）", "過敏原暴露", "SIRS", "嚴重胰臟炎", "燒傷"]
    },
    clinicalPresentation: {
      history: ["感染病灶", "過敏原暴露", "近期手術或創傷", "發燒或低體溫"],
      physicalExam: ["高動力相（早期，犬）：心搏過速、脈搏洪大、黏膜充血、CRT縮短",
                   "低動力相（晚期或貓）：心搏過緩、脈搏弱、黏膜蒼白、CRT延長、低體溫"]
    },
    pathophysiology: "敗血性：感染 → 全身炎症反應 → 血管擴張、毛細血管通透性增加 → 有效循環血量減少。過敏性：過敏原 → IgE介導的肥大細胞脫顆粒 → 組織胺釋放 → 血管擴張、支氣管痙攣",
    diagnosis: {
      overview: "臨床表現結合感染或過敏原暴露史",
      differentials: ["其他類型休克", "心臟疾病"],
      initialDB: ["乳酸", "血糖", "電解質", "血壓", "CBC", "生化", "凝血功能", "血氣"],
      advanced: ["血液培養", "感染源檢查", "前降鈣素原"]
    },
    treatment: {
      overview: "液體復甦、血管升壓藥、控制感染源（敗血性）或過敏反應",
      acute: [
        "敗血性休克：",
        "- 積極輸液：晶體液20-30 mL/kg IV bolus（犬）",
        "- 若對輸液無反應：Norepinephrine 0.1-2 μg/kg/min CRI",
        "- 或 Dopamine 5-15 μg/kg/min CRI",
        "- 廣譜抗生素（1小時內給予）",
        "- 控制感染源（引流、手術）",
        "過敏性休克：",
        "- Epinephrine: 0.01-0.02 mg/kg IV/IM（首選）",
        "- 輸液支持",
        "- Diphenhydramine: 2 mg/kg IM/IV",
        "- Dexamethasone: 0.5-1 mg/kg IV（預防遲發反應）",
        "- 支氣管痙攣：Albuterol 或 Aminophylline"
      ],
      chronic: ["治療原發感染", "避免過敏原", "器官功能支持"]
    },
    prognosis: "敗血性休克死亡率約40-60%。過敏性休克若及時治療預後較好。早期識別和積極治療是關鍵。",
    pearls: [
      "犬敗血性休克常見高動力相（與人類相似）",
      "貓通常表現為低動力相和低體溫",
      "乳酸是組織灌注和預後的重要指標",
      "敗血症「黃金一小時」：早期輸液和抗生素改善存活",
      "過敏性休克Epinephrine是第一線藥物"
    ],
    monitoring: ["血壓", "乳酸", "尿量", "精神狀態", "體溫", "CVP"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "cardiogenic-shock": {
    zh: "心源性休克",
    en: "Cardiogenic Shock",
    definition: "因心臟泵功能嚴重衰竭導致心輸出量不足、組織灌注不良的休克類型。",
    synonyms: ["心因性休克", "Pump Failure Shock"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "心臟病好發年齡",
      sex: "依心臟病類型而異",
      riskFactors: ["擴張性心肌病(DCM)", "肥厚性心肌病(HCM)", "嚴重心律不整", "瓣膜疾病", "心臟壓塞", "心肌炎"]
    },
    clinicalPresentation: {
      history: ["已知心臟病史", "運動不耐", "昏厥", "呼吸困難", "咳嗽"],
      physicalExam: ["心搏過速或過緩", "心律不整", "脈搏弱", "黏膜蒼白或發紺", "CRT延長", "肺部濕囉音", "頸靜脈怒張", "肝腫大", "腹水"]
    },
    pathophysiology: "心肌收縮力下降或結構異常 → 心輸出量減少 → 代償性神經內分泌活化 → 鈉水滯留、血管收縮 → 後負荷增加 → 進一步惡化心功能 → 組織缺氧",
    diagnosis: {
      overview: "臨床表現結合心臟病證據，心臟超聲確認",
      differentials: ["其他類型休克", "肺部疾病"],
      initialDB: ["心臟超聲（TFAST/完整）", "ECG", "胸腔X光", "血壓", "乳酸", "心肌標記物（cTnI）"],
      advanced: ["NT-proBNP", "連續心臟超聲監測"]
    },
    treatment: {
      overview: "改善心臟功能、減輕心臟負擔、支持灌注",
      acute: [
        "謹慎輸液（避免加重肺水腫）",
        "正性肌力藥物：",
        "- Dobutamine: 2.5-10 μg/kg/min CRI（首選）",
        "- 或 Pimobendan: 0.25-0.3 mg/kg PO q12h",
        "利尿劑（若有肺水腫）：Furosemide 2-4 mg/kg IV",
        "血管擴張劑（謹慎）：Nitroprusside CRI",
        "心律不整治療",
        "氧氣支持",
        "心臟壓塞：緊急心包穿刺"
      ],
      chronic: ["長期心臟藥物（ACEI、Pimobendan、利尿劑）", "限鈉飲食", "活動限制"]
    },
    prognosis: "取決於潛在心臟病類型和嚴重程度。急性失代償預後謹慎至差。",
    pearls: [
      "與其他休克不同，大量輸液可能有害",
      "Dobutamine可增加心輸出量而不明顯增加後負荷",
      "心臟壓塞需要緊急心包穿刺",
      "貓的心源性休克常與動脈血栓栓塞(ATE)相關",
      "ECG監測心律不整很重要"
    ],
    monitoring: ["ECG", "血壓", "呼吸頻率", "SpO2", "尿量", "乳酸", "連續心臟超聲"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "obstructive-shock": {
    zh: "梗阻性休克",
    en: "Obstructive Shock",
    definition: "因心臟充盈或射血受到機械性阻礙導致心輸出量下降的休克類型。",
    synonyms: ["阻塞性休克", "Mechanical Obstruction Shock"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "依病因而異",
      sex: "無性別傾向",
      riskFactors: ["心包疾病", "縱隔腫瘤", "肺栓塞", "張力性氣胸", "嚴重腹脹（GDV）"]
    },
    clinicalPresentation: {
      history: ["呼吸困難", "虛弱", "昏厥", "已知心包疾病或腫瘤"],
      physicalExam: ["頸靜脈怒張", "心音低沉（心包積液）", "奇脈", "脈搏弱", "低血壓", "CRT延長", "腹部膨脹（GDV）"]
    },
    pathophysiology: "心臟壓塞：心包積液壓迫心臟 → 舒張充盈受限；張力性氣胸：胸腔壓力升高 → 靜脈回流受阻；肺栓塞：肺動脈阻塞 → 右心後負荷急性增加。共同結果：心輸出量急劇下降",
    diagnosis: {
      overview: "高度懷疑結合快速超聲和影像學確認",
      differentials: ["心源性休克", "其他類型休克"],
      initialDB: ["TFAST超聲（心包積液）", "胸腔X光（氣胸、腫瘤）", "ECG（電交替）", "血壓"],
      advanced: ["完整心臟超聲", "CT血管造影（肺栓塞）"]
    },
    treatment: {
      overview: "解除機械性梗阻是關鍵",
      acute: [
        "心臟壓塞：緊急心包穿刺",
        "張力性氣胸：緊急胸腔穿刺減壓",
        "GDV：胃減壓 + 緊急手術",
        "肺栓塞：抗凝治療 + 支持治療",
        "輸液支持（謹慎，可能加重某些情況）",
        "氧氣支持"
      ],
      chronic: ["治療潛在病因", "心包切除術（反覆心包積液）", "長期抗凝（肺栓塞）"]
    },
    prognosis: "取決於能否及時解除梗阻和潛在病因。心包穿刺後通常立即改善。",
    pearls: [
      "心包積液的Beck三徵：低血壓、頸靜脈怒張、心音低沉",
      "TFAST可快速診斷心包積液",
      "張力性氣胸是臨床診斷，不要等X光",
      "解除梗阻後通常戲劇性改善",
      "輸液可能暫時改善但需解除根本原因"
    ],
    monitoring: ["血壓", "頸靜脈壓", "心臟超聲", "呼吸功能", "尿量"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "tension-pneumothorax": {
    zh: "張力性氣胸",
    en: "Tension Pneumothorax",
    definition: "胸腔內空氣持續單向積聚，形成正壓導致肺塌陷、縱隔移位和心血管功能障礙的危及生命緊急狀況。",
    synonyms: ["張力氣胸", "Tension PTX", "壓力性氣胸"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["胸部穿刺傷", "肋骨骨折", "機械通氣併發症", "肺部疾病", "食道破裂", "氣管損傷"]
    },
    clinicalPresentation: {
      history: ["創傷", "急性呼吸窘迫", "突然惡化"],
      physicalExam: ["嚴重呼吸困難", "發紺", "頸靜脈怒張", "氣管偏移（對側）", "患側叩診過度共鳴", "患側呼吸音消失", "休克徵象", "皮下氣腫"]
    },
    pathophysiology: "肺或胸壁損傷形成單向閥 → 吸氣時空氣進入胸腔，呼氣時無法排出 → 胸腔壓力進行性升高 → 患側肺完全塌陷 → 縱隔向對側移位 → 對側肺受壓 → 大血管扭折 → 靜脈回流受阻 → 心輸出量驟降 → 休克",
    diagnosis: {
      overview: "這是臨床診斷，不要等待影像學確認！",
      differentials: ["單純氣胸", "大量胸腔積液", "橫膈膜疝氣"],
      initialDB: ["臨床表現即可診斷", "TFAST超聲（快速確認）", "治療後X光確認"],
      advanced: ["穩定後完整胸腔X光"]
    },
    treatment: {
      overview: "立即胸腔減壓是救命措施",
      acute: [
        "立即胸腔穿刺減壓：",
        "- 7-8肋間，背部1/3處",
        "- 使用大口徑針頭或導管",
        "- 三向活栓連接抽吸",
        "胸腔引流管放置（持續漏氣）",
        "氧氣支持",
        "輸液支持",
        "止痛",
        "穩定後尋找和修復漏氣來源"
      ],
      chronic: ["胸腔引流直到漏氣停止", "手術修復（持續漏氣）", "監測復發"]
    },
    prognosis: "及時減壓預後良好。延遲治療可導致心跳停止和死亡。",
    pearls: [
      "這是臨床診斷 - 不要等X光！",
      "「穿刺減壓是診斷也是治療」",
      "機械通氣患者特別要警惕",
      "皮下氣腫是重要線索",
      "減壓後通常戲劇性改善"
    ],
    monitoring: ["呼吸功能", "SpO2", "血壓", "胸腔引流量", "是否持續漏氣"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "cardiac-tamponade": {
    zh: "心臟壓塞",
    en: "Cardiac Tamponade",
    definition: "心包腔內液體或氣體快速積聚壓迫心臟，導致心室舒張充盈受限和心輸出量下降的危急狀態。",
    synonyms: ["心包填塞", "Pericardial Tamponade", "心包壓塞"],
    epidemiology: {
      species: "犬較常見，貓罕見",
      age: "中老年犬（腫瘤相關）",
      sex: "公犬略多（血管肉瘤）",
      riskFactors: ["心臟腫瘤（血管肉瘤、心臟基底腫瘤）", "特發性心包積液", "凝血障礙", "創傷", "心臟破裂"]
    },
    clinicalPresentation: {
      history: ["運動不耐", "虛弱", "昏厥", "腹部膨大", "呼吸困難"],
      physicalExam: ["Beck三徵：低血壓、頸靜脈怒張、心音低沉", "奇脈（吸氣時脈搏減弱）", "心搏過速", "黏膜蒼白", "CRT延長", "腹水"]
    },
    pathophysiology: "心包積液快速積聚 → 心包壓力升高 → 心室舒張受限 → 心臟充盈減少 → 心輸出量下降 → 代償性心搏過速和血管收縮 → 組織灌注不足 → 休克",
    diagnosis: {
      overview: "高度懷疑結合心臟超聲確診",
      differentials: ["充血性心衰竭", "限制性心肌病", "腹腔積液其他原因"],
      initialDB: ["TFAST超聲（心包積液、右心房/心室塌陷）", "胸腔X光（球形心影）", "ECG（低電壓、電交替）", "血壓"],
      advanced: ["完整心臟超聲", "心包液分析", "細胞學"]
    },
    treatment: {
      overview: "心包穿刺是救命措施",
      acute: [
        "心包穿刺術：",
        "- 右側臥位，4-6肋間心尖區",
        "- 超聲引導更安全",
        "- 使用大口徑導管",
        "- 引流直到負壓或臨床改善",
        "輸液支持（穿刺前後）",
        "監測心律不整（穿刺中）",
        "心包液送檢（細胞學、培養）"
      ],
      chronic: [
        "特發性：可能需反覆穿刺或心包切除術",
        "腫瘤相關：化療（血管肉瘤）、手術（心臟基底腫瘤）",
        "心包切除術（經常復發或結紮性心包炎）"
      ]
    },
    prognosis: "特發性心包積液：預後較好，尤其心包切除術後。腫瘤相關：預後差，血管肉瘤中位生存期約1-4個月。",
    pearls: [
      "積液量和速度決定臨床表現 - 慢性積聚可耐受更大量",
      "「拿走一點就改善很多」- 小量引流可顯著改善",
      "右心房塌陷是超聲診斷的敏感指標",
      "穿刺後立即改善具有診斷價值",
      "心包液顏色和細胞學幫助判斷病因"
    ],
    monitoring: ["血壓", "心率", "超聲追蹤心包積液", "尿量", "再積聚跡象"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "acute-respiratory-distress-syndrome": {
    zh: "急性呼吸窘迫綜合症",
    en: "Acute Respiratory Distress Syndrome (ARDS)",
    definition: "各種原因導致的急性、彌漫性肺部炎症反應，特徵為肺水腫、低氧血症和肺順應性下降。",
    synonyms: ["ARDS", "急性肺損傷", "ALI", "Acute Lung Injury"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["敗血症（最常見）", "吸入性肺炎", "重度創傷", "胰臟炎", "輸血反應", "溺水", "煙霧吸入"]
    },
    clinicalPresentation: {
      history: ["誘發因素後24-72小時出現", "進行性呼吸困難", "對氧氣治療反應差"],
      physicalExam: ["呼吸急促", "費力呼吸", "發紺", "雙側肺部濕囉音", "低氧血症（對氧氣反應差）", "可能合併休克"]
    },
    pathophysiology: "觸發因素 → 全身或肺部炎症反應 → 肺泡-毛細血管屏障損傷 → 通透性增加 → 富含蛋白質的肺水腫 → 肺泡塌陷和分流 → 難治性低氧血症 → 肺纖維化（晚期）",
    diagnosis: {
      overview: "基於急性起病、雙側肺浸潤、低氧血症、排除心源性肺水腫",
      differentials: ["心源性肺水腫", "肺炎", "肺出血", "肺腫瘤"],
      initialDB: ["胸腔X光（雙側彌漫性浸潤）", "血氣分析（PaO2/FiO2 <300為ALI，<200為ARDS）", "心臟超聲（排除心源性）", "SpO2"],
      advanced: ["CT", "支氣管肺泡灌洗", "肺活檢"]
    },
    treatment: {
      overview: "治療原發病因、肺保護性通氣策略、支持治療",
      acute: [
        "治療原發病因（敗血症：抗生素、感染源控制）",
        "氧氣支持（高流量、氧氣籠）",
        "機械通氣（嚴重時）：",
        "- 低潮氣量（6-8 mL/kg）",
        "- 適當PEEP",
        "- 允許性高碳酸血症",
        "保守輸液策略（避免加重肺水腫）",
        "利尿劑（謹慎使用）",
        "俯臥位通氣（可能有益）"
      ],
      chronic: ["逐漸脫機", "肺復健", "監測肺纖維化"]
    },
    prognosis: "預後謹慎至差。獸醫文獻報告死亡率50-100%。早期識別和積極治療可能改善預後。",
    pearls: [
      "ARDS是症候群，不是診斷 - 必須尋找和治療原因",
      "PaO2/FiO2比值是診斷和嚴重度指標",
      "心源性肺水腫對利尿劑反應好，ARDS反應差",
      "肺保護性通氣策略在人類已證實降低死亡率",
      "獸醫ARDS診斷標準仍在發展中"
    ],
    monitoring: ["SpO2", "血氣", "呼吸功能", "胸腔X光", "器官功能"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "transfusion-reaction": {
    zh: "輸血反應",
    en: "Transfusion Reaction",
    definition: "輸血過程中或之後發生的不良反應，範圍從輕微發燒到危及生命的溶血反應或過敏反應。",
    synonyms: ["輸血不良反應", "Blood Transfusion Reaction"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["先前輸血史", "血型不合", "交叉配血不合", "血液製品污染", "貓（DEA 1.1陰性犬首次輸血風險低）"]
    },
    clinicalPresentation: {
      history: ["輸血過程中或之後出現症狀", "先前輸血史"],
      physicalExam: [
        "急性溶血反應：發燒、寒顫、嘔吐、低血壓、血紅蛋白尿、休克",
        "非溶血性發燒反應：發燒、寒顫（無溶血證據）",
        "過敏反應：蕁麻疹、臉部腫脹、呼吸困難、休克",
        "輸血相關循環超負荷(TACO)：呼吸困難、咳嗽、肺水腫",
        "輸血相關急性肺損傷(TRALI)：急性呼吸窘迫、低氧血症"
      ]
    },
    pathophysiology: "急性溶血：血型不合 → 抗體介導的紅血球破壞 → 血管內溶血 → 血紅蛋白血症/尿 → 腎損傷、DIC。過敏：供血者血漿蛋白引發IgE介導反應。TRALI：供血者抗白血球抗體攻擊受血者白血球 → 肺毛細血管損傷",
    diagnosis: {
      overview: "臨床表現結合時間關係（輸血期間或之後）",
      differentials: ["敗血症", "原發疾病惡化", "藥物反應"],
      initialDB: ["血漿顏色（溶血呈粉紅/紅）", "尿液顏色（血紅蛋白尿）", "直接Coombs試驗", "PCV/TS", "血塗片"],
      advanced: ["血型和交叉配血複查", "血液培養", "凝血功能", "膽紅素"]
    },
    treatment: {
      overview: "立即停止輸血、對症支持治療",
      acute: [
        "立即停止輸血（保留血袋送檢）",
        "維持靜脈通路（新輸液套）",
        "急性溶血反應：",
        "- 積極輸液維持腎灌注",
        "- 監測尿量",
        "- 利尿劑若尿量減少",
        "過敏反應：",
        "- Diphenhydramine: 2 mg/kg IM/IV",
        "- 嚴重時：Epinephrine 0.01 mg/kg IM/IV",
        "- Dexamethasone: 0.5-1 mg/kg IV",
        "非溶血性發燒反應：",
        "- 退燒藥（非類固醇）",
        "- 可考慮減速繼續（輕微反應）",
        "TACO：利尿劑、氧氣",
        "TRALI：氧氣支持、機械通氣（若需要）"
      ],
      chronic: ["記錄反應類型供未來輸血參考", "未來使用洗滌紅血球或白血球過濾"]
    },
    prognosis: "非溶血性發燒反應：通常預後良好。急性溶血反應：取決於嚴重程度，可能致命。TRALI：支持治療下多數可恢復。",
    pearls: [
      "貓必須在首次輸血前進行血型鑑定",
      "犬首次輸血急性溶血反應罕見（無預形成抗體）",
      "發燒可能是溶血或非溶血性，需鑑別",
      "疑似反應時先停輸血再評估",
      "輸血速度：前15-30分鐘慢（0.5-1 mL/kg/h），監測反應"
    ],
    monitoring: ["體溫", "心率", "呼吸率", "血壓", "尿液顏色", "黏膜顏色"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "cerebral-edema": {
    zh: "腦水腫",
    en: "Cerebral Edema",
    definition: "腦組織內水分異常積聚導致顱內壓升高的危急狀態，可導致腦疝和死亡。",
    synonyms: ["腦腫脹", "Brain Edema", "Intracranial Edema", "顱內高壓"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["頭部創傷", "腦腫瘤", "腦炎", "缺氧", "代謝異常（低血糖、DKA）", "肝腦病", "中毒"]
    },
    clinicalPresentation: {
      history: ["頭部創傷", "癲癇", "已知腦部疾病", "代謝疾病", "意識改變"],
      physicalExam: ["意識改變（嗜睡→昏迷）", "瞳孔異常（散大、不等大、對光反射消失）", "姿勢異常（去腦強直、去皮質強直）", "Cushing反射（高血壓+心搏過緩）", "呼吸異常", "乳突狀病灶"]
    },
    pathophysiology: "血管源性水腫：血腦屏障破壞 → 血漿滲漏至白質。細胞毒性水腫：細胞能量衰竭 → 離子泵失效 → 細胞內水分積聚。間質性水腫：腦脊液迴流受阻。結果：顱內壓升高 → 腦灌注壓下降 → 缺血 → 腦疝",
    diagnosis: {
      overview: "臨床神經學評估，影像學確認",
      differentials: ["腦腫瘤", "腦炎", "顱內出血", "代謝性腦病"],
      initialDB: ["神經學檢查（改良Glasgow昏迷量表）", "血糖", "電解質", "血氣", "眼底檢查"],
      advanced: ["MRI（首選）", "CT", "腦脊液分析（若無腦疝風險）"]
    },
    treatment: {
      overview: "降低顱內壓、維持腦灌注、治療原發病因",
      acute: [
        "一般措施：",
        "- 頭部抬高15-30度",
        "- 避免頸部壓迫（影響靜脈回流）",
        "- 維持正常血壓（MAP >80 mmHg）",
        "- 避免高熱",
        "- 控制癲癇",
        "高滲療法：",
        "- Mannitol: 0.5-1.5 g/kg IV over 15-20min（可重複q4-6h）",
        "- 高滲鹽水(7.5%): 4 mL/kg IV over 5-10min",
        "過度通氣（短期）：目標PaCO2 30-35 mmHg",
        "類固醇（血管源性水腫/腫瘤）：",
        "- Dexamethasone: 0.5-1 mg/kg IV",
        "治療原發病因"
      ],
      chronic: ["監測神經功能", "復健", "長期治療原發病因"]
    },
    prognosis: "取決於病因和嚴重程度。創傷性腦損傷：輕度預後良好，重度預後差。腦腫瘤相關：取決於腫瘤類型。",
    pearls: [
      "改良Glasgow昏迷量表可追蹤進展",
      "Cushing反射（高血壓+心搏過緩）是腦疝的晚期徵兆",
      "Mannitol需要完整的血腦屏障才能發揮最佳效果",
      "過度通氣效果短暫且可能反彈",
      "維持正常血糖和體溫很重要"
    ],
    monitoring: ["神經學狀態（q1-2h）", "瞳孔大小和反射", "血壓", "血糖", "電解質", "PaCO2"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "coagulopathy": {
    zh: "凝血病",
    en: "Coagulopathy",
    definition: "凝血功能障礙導致出血傾向或異常血栓形成的病理狀態。",
    synonyms: ["凝血障礙", "Bleeding Disorder", "Clotting Disorder", "DIC"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡（先天性年輕、後天性任何年齡）",
      sex: "先天性某些為X連鎖（公犬）",
      riskFactors: ["抗凝血劑中毒", "敗血症", "嚴重創傷", "肝病", "腫瘤", "IMHA", "先天性凝血因子缺乏"]
    },
    clinicalPresentation: {
      history: ["自發性出血", "輕微創傷後過度出血", "手術後出血不止", "血尿/血便", "瘀青"],
      physicalExam: ["瘀斑", "瘀點", "血腫", "黏膜出血", "腔體出血（胸腔、腹腔、關節）", "蒼白（若嚴重出血）"]
    },
    pathophysiology: "一次止血障礙（血小板問題）：瘀點、黏膜出血。二次止血障礙（凝血因子問題）：深部血腫、關節出血、延遲出血。DIC：觸發因素 → 系統性凝血活化 → 微血栓形成 → 凝血因子和血小板消耗 → 出血",
    diagnosis: {
      overview: "臨床表現結合凝血檢測",
      differentials: ["血小板減少症", "血小板功能障礙", "凝血因子缺乏", "維生素K缺乏/中毒", "DIC", "肝功能衰竭"],
      initialDB: ["血小板計數", "PT（外源性途徑）", "PTT/APTT（內源性途徑）", "纖維蛋白原", "D-dimer", "血塗片"],
      advanced: ["TEG/ROTEM", "特異性凝血因子測定", "von Willebrand因子", "抗Xa活性", "PIVKA"]
    },
    treatment: {
      overview: "控制出血、補充缺乏成分、治療原發病因",
      acute: [
        "抗凝血劑中毒：",
        "- Vitamin K1: 2.5-5 mg/kg PO/SQ q12h x 4-6週",
        "- 急性出血：新鮮冷凍血漿(FFP) 10-20 mL/kg",
        "DIC：",
        "- 治療原發病因",
        "- FFP補充凝血因子",
        "- 抗凝治療（某些情況）：低分子肝素",
        "血小板減少/功能障礙：",
        "- 血小板輸注",
        "- 治療原發病因（免疫抑制若IMTP）",
        "先天性凝血因子缺乏：",
        "- FFP或冷沉澱物（含因子VIII、vWF）",
        "- Desmopressin（輕度vWD）"
      ],
      chronic: ["長期維生素K（某些中毒）", "避免創傷/手術", "遺傳諮詢"]
    },
    prognosis: "取決於病因。抗凝血劑中毒：及時治療預後良好。DIC：預後謹慎至差，取決於原發病因。先天性：可管理但需終身注意。",
    pearls: [
      "瘀點提示血小板問題，血腫提示凝血因子問題",
      "PT延長：維生素K缺乏、肝病、華法林中毒",
      "PTT延長：肝素效應、因子VIII/IX/XI缺乏",
      "DIC是「消耗性凝血病」",
      "維生素K1口服吸收需要脂肪"
    ],
    monitoring: ["PT/PTT", "血小板計數", "纖維蛋白原", "D-dimer", "臨床出血徵象"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "hypoxemia": {
    zh: "低氧血症",
    en: "Hypoxemia",
    definition: "動脈血氧分壓(PaO2)低於正常範圍（<80 mmHg室內空氣）的病理狀態，導致組織氧氣供應不足。",
    synonyms: ["低血氧", "Arterial Hypoxemia", "缺氧"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["呼吸系統疾病", "心臟病", "神經肌肉疾病", "麻醉", "高海拔"]
    },
    clinicalPresentation: {
      history: ["呼吸困難", "運動不耐", "發紺", "虛弱", "昏厥"],
      physicalExam: ["呼吸急促或異常", "發紺（PaO2<50 mmHg才明顯）", "心搏過速", "精神異常", "端坐呼吸"]
    },
    pathophysiology: "五種機制：1)通氣不足 → CO2升高，O2下降；2)擴散障礙 → 氣體交換受損；3)V/Q不匹配 → 灌注區無通氣；4)分流 → 血液繞過肺泡；5)低吸入氧分壓。結果：組織缺氧 → 無氧代謝 → 乳酸堆積 → 器官功能障礙",
    diagnosis: {
      overview: "動脈血氣分析確診，評估機制指導治療",
      differentials: ["肺實質疾病", "胸腔疾病", "心臟疾病", "上呼吸道阻塞", "神經肌肉疾病"],
      initialDB: ["動脈血氣（PaO2、PaCO2）", "SpO2（脈搏血氧儀）", "P(A-a)O2梯度", "胸腔X光"],
      advanced: ["CT", "心臟超聲", "肺功能測試", "支氣管鏡"]
    },
    treatment: {
      overview: "提供氧氣、治療原發病因",
      acute: [
        "氧氣支持：",
        "- 流量氧氣（Flow-by）：FiO2 25-40%",
        "- 氧氣籠：可達40-60%",
        "- 鼻導管：50-100 mL/kg/min（FiO2 30-50%）",
        "- 面罩：短期高濃度",
        "- 機械通氣：嚴重低氧血症",
        "針對機制治療：",
        "- 通氣不足：改善通氣、機械輔助",
        "- V/Q不匹配：氧氣通常有效",
        "- 分流：高FiO2效果有限，需PEEP",
        "- 擴散障礙：氧氣有效",
        "治療原發病因"
      ],
      chronic: ["長期氧氣治療（若需要）", "治療潛在疾病"]
    },
    prognosis: "取決於病因和嚴重程度。可逆原因治療後預後良好。慢性肺病可能需要長期管理。",
    pearls: [
      "SpO2 90%約等於PaO2 60 mmHg（氧解離曲線）",
      "發紺需要至少5 g/dL脫氧血紅蛋白，嚴重貧血可能不發紺",
      "P(A-a)O2梯度正常提示通氣不足；增大提示肺實質問題",
      "對氧氣反應好提示V/Q不匹配；反應差提示分流",
      "高流量氧氣長時間使用需注意氧毒性"
    ],
    monitoring: ["SpO2", "動脈血氣", "呼吸頻率和型態", "精神狀態", "乳酸"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  }
};

// 匯出供整合使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = EMERGENCY_CRITICAL_CARE_DISEASES;
}

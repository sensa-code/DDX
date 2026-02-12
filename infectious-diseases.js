// ======= 傳染病 DISEASE_INFO =======
// Infectious Diseases
// 生成日期: 2026-02-04
// 包含: 犬瘟熱、犬傳染性肝炎、貓瘟、貓白血病病毒、貓愛滋病毒、貓傳染性腹膜炎、
//       貓杯狀病毒、貓皰疹病毒、巴東氏菌病、萊姆病、芽生菌病、組織漿菌病、
//       隱球菌病、球孢子菌病、麴菌病

const INFECTIOUS_DISEASES = {

  // ==================== 病毒性傳染病 ====================

  "canine-distemper": {
    zh: "犬瘟熱",
    en: "Canine Distemper",
    definition: "由犬瘟熱病毒(CDV)引起的高度傳染性、多系統性疾病，主要影響呼吸系統、消化系統和神經系統。是犬最嚴重的傳染病之一。",
    synonyms: ["Distemper", "CDV感染", "犬瘟", "Canine Distemper Virus Infection", "Hardpad Disease"],
    epidemiology: {
      species: "犬、狐狸、貂、浣熊及其他食肉目動物",
      age: "幼犬(3-6月齡)最易感，未接種疫苗的任何年齡犬皆可感染",
      sex: "無性別傾向",
      riskFactors: ["未接種疫苗", "母源抗體下降期", "收容所或寵物店環境", "接觸野生動物", "免疫抑制狀態", "幼犬斷奶後"]
    },
    clinicalPresentation: {
      history: ["發燒（雙相熱）", "眼鼻分泌物", "咳嗽", "嘔吐腹瀉", "食慾下降", "精神沉鬱", "後期可能出現神經症狀", "癲癇發作", "肌陣攣"],
      physicalExam: ["黏液膿性眼鼻分泌物", "結膜炎", "角膜炎", "肺部異常呼吸音", "脫水", "腹部觸診疼痛", "神經症狀（共濟失調、癲癇、肌陣攣、咀嚼肌抽搐）", "足墊角化過度(Hardpad)", "牙釉質發育不全"]
    },
    pathophysiology: "CDV經飛沫傳播 → 感染上呼吸道和扁桃腺 → 病毒血症 → 擴散至淋巴組織、呼吸道上皮、腸道上皮、皮膚 → 免疫抑制和器官損傷 → 神經系統入侵（經血腦屏障或嗅神經）→ 脫髓鞘和神經元壞死",
    diagnosis: {
      overview: "結合臨床表現、病史和實驗室檢測。幼犬呼吸道+消化道+神經系統症狀高度提示",
      differentials: ["犬傳染性肝炎", "犬小病毒腸炎", "犬副流感", "犬腺病毒", "鉤端螺旋體病", "弓蟲症", "狂犬病", "中毒"],
      initialDB: ["CBC（淋巴球減少症）", "血清生化", "胸腔X光", "結膜或足墊刮片免疫螢光(IFA)", "PCR檢測（結膜、血液、尿液、CSF）"],
      advanced: ["CSF分析（若有神經症狀）", "血清學配對（急性期和恢復期）", "腦部MRI", "病理組織學（包涵體）"]
    },
    treatment: {
      overview: "無特異性抗病毒藥物，以支持治療為主",
      acute: [
        "輸液治療：糾正脫水和電解質失衡",
        "營養支持：管灌餵食（若厭食）",
        "抗生素治療（預防繼發感染）：",
        "  - Amoxicillin-clavulanate: 12.5-25 mg/kg PO q12h",
        "  - 或 Ampicillin: 22 mg/kg IV q8h",
        "止吐：Maropitant 1 mg/kg SC/IV q24h",
        "止瀉：支持治療為主",
        "眼部護理：人工淚液、抗生素眼藥"
      ],
      chronic: [
        "神經症狀管理：",
        "  - 癲癇控制：Phenobarbital 2-3 mg/kg PO q12h",
        "  - 或 Levetiracetam: 20-60 mg/kg PO q8h",
        "  - 肌陣攣：通常難以控制",
        "物理治療（若有運動障礙）",
        "長期護理評估"
      ]
    },
    prognosis: "整體預後謹慎至差。輕度呼吸道/消化道症狀者：謹慎但可能康復。出現神經症狀者：預後差，多數建議安樂死。存活者可能有永久性神經後遺症。",
    pearls: [
      "「雙相熱」是特徵：初次發燒後退燒，數天後再發燒伴隨系統症狀",
      "神經症狀可在急性期後數週至數月才出現",
      "肌陣攣（尤其咀嚼肌）幾乎是病理性特徵",
      "足墊角化過度(Hardpad)是晚期特徵",
      "疫苗是最有效的預防措施，核心疫苗"
    ],
    monitoring: ["體溫", "神經學狀態", "呼吸功能", "水合狀態", "食慾和體重"],
    reference: "Greene CE: Infectious Diseases of the Dog and Cat, 4th Ed. Elsevier, 2012"
  },

  "canine-infectious-hepatitis": {
    zh: "犬傳染性肝炎",
    en: "Canine Infectious Hepatitis",
    definition: "由犬腺病毒1型(CAV-1)引起的急性傳染病，主要影響肝臟、腎臟、眼睛和血管內皮，可導致急性肝衰竭。",
    synonyms: ["ICH", "Infectious Canine Hepatitis", "CAV-1感染", "Rubarth's Disease", "藍眼病"],
    epidemiology: {
      species: "犬、狐狸、狼、熊及其他犬科動物",
      age: "未接種疫苗的幼犬最易感，尤其1歲以下",
      sex: "無性別傾向",
      riskFactors: ["未接種疫苗", "收容所環境", "接觸野生犬科動物", "免疫抑制"]
    },
    clinicalPresentation: {
      history: ["急性發燒", "嘔吐", "腹痛", "食慾下降", "嗜睡", "腹瀉（可能帶血）", "出血傾向", "可能突然死亡（超急性型）"],
      physicalExam: ["發燒", "扁桃腺腫大", "頸部淋巴結腫大", "肝腫大、觸痛", "腹部疼痛", "黃疸", "瘀斑或瘀點", "「藍眼」（角膜水腫，恢復期）", "腹水", "皮下水腫"]
    },
    pathophysiology: "CAV-1經口鼻感染 → 扁桃腺和局部淋巴結複製 → 病毒血症 → 肝細胞和血管內皮感染 → 肝臟壞死和凝血因子缺乏 → DIC和出血 → 腎臟損傷 → 恢復期免疫複合物沉積於眼睛和腎臟",
    diagnosis: {
      overview: "根據臨床表現、肝臟指數異常和病毒學檢測診斷",
      differentials: ["犬瘟熱", "鉤端螺旋體病", "中毒性肝炎", "膽管炎", "犬小病毒腸炎", "敗血症"],
      initialDB: ["CBC（白血球減少、血小板減少）", "血清生化（ALT↑↑、ALP↑、膽紅素↑、低白蛋白血症）", "凝血功能（PT/PTT延長）", "尿液分析（蛋白尿）", "腹部超音波"],
      advanced: ["PCR（血液、尿液、肝組織）", "血清學", "肝臟細針抽吸或活檢", "病理組織學（核內包涵體）"]
    },
    treatment: {
      overview: "支持治療為主，無特異性抗病毒藥物",
      acute: [
        "積極輸液治療：維持灌注和電解質平衡",
        "血漿輸注：補充凝血因子和白蛋白",
        "輸血（若嚴重出血）",
        "止吐：Maropitant 1 mg/kg SC/IV q24h",
        "肝臟保護：",
        "  - SAMe: 20 mg/kg PO q24h",
        "  - Ursodiol: 10-15 mg/kg PO q24h",
        "抗生素（預防繼發感染）",
        "維生素K1: 1-2.5 mg/kg SC q12h（若凝血異常）",
        "低蛋白飲食（若有肝腦病徵象）"
      ],
      chronic: [
        "恢復期角膜水腫(藍眼)治療：",
        "  - 通常自限性，2-3週消退",
        "  - 避免類固醇眼藥（可能惡化）",
        "  - NSAIDs眼藥（減輕炎症）",
        "腎功能監測"
      ]
    },
    prognosis: "輕度感染預後良好。超急性型和嚴重肝衰竭預後差。存活者通常完全康復。「藍眼」通常自行消退。因疫苗普及，現臨床上罕見。",
    pearls: [
      "現今因疫苗普及已罕見",
      "CAV-2疫苗可交叉保護CAV-1",
      "「藍眼」是恢復期特徵，由免疫複合物引起",
      "病毒可經尿液排出長達6-9個月",
      "與犬瘟熱的鑑別：ICH更急性、更多出血傾向、肝臟指數更高"
    ],
    monitoring: ["肝功能指數", "凝血功能", "眼睛檢查", "腎功能", "精神狀態"],
    reference: "Greene CE: Infectious Diseases of the Dog and Cat, 4th Ed. Elsevier, 2012"
  },

  "feline-panleukopenia": {
    zh: "貓瘟/貓小病毒",
    en: "Feline Panleukopenia",
    definition: "由貓小病毒(FPV)引起的高度傳染性、常致命的疾病，特徵為嚴重的白血球減少症和腸道壞死。",
    synonyms: ["FPV", "Feline Parvovirus", "貓瘟", "貓泛白血球減少症", "Feline Distemper", "Feline Infectious Enteritis"],
    epidemiology: {
      species: "貓、浣熊、貂",
      age: "幼貓(2-6月齡)最易感且死亡率最高",
      sex: "無性別傾向",
      riskFactors: ["未接種疫苗", "母源抗體下降期", "收容所或多貓環境", "應激", "併發感染（FeLV、FIV）"]
    },
    clinicalPresentation: {
      history: ["急性發燒", "嚴重嘔吐", "腹瀉（常帶血）", "食慾完全喪失", "嚴重嗜睡", "快速脫水", "可能突然死亡"],
      physicalExam: ["發燒（晚期可能低體溫）", "嚴重脫水", "腹部疼痛", "腸管觸診如「繩索」感", "虛弱", "可能有神經症狀（小腦發育不全幼貓）"]
    },
    pathophysiology: "FPV經口鼻感染 → 咽淋巴組織複製 → 病毒血症 → 攻擊快速分裂細胞（骨髓、腸隱窩、淋巴組織）→ 嚴重白血球減少 → 腸絨毛萎縮和壞死 → 細菌移位和敗血症。子宮內或新生兒感染 → 小腦發育不全",
    diagnosis: {
      overview: "嚴重白血球減少配合臨床表現高度提示",
      differentials: ["FeLV感染", "敗血症", "沙門氏菌病", "其他腸道感染", "中毒", "腸套疊", "異物阻塞"],
      initialDB: ["CBC（嚴重白血球減少<2000/μL、淋巴球減少）", "血清生化（低白蛋白、低血鉀）", "糞便抗原檢測（快篩）", "糞便PCR"],
      advanced: ["血清學", "骨髓抽吸", "腹部超音波", "病理組織學"]
    },
    treatment: {
      overview: "積極支持治療是關鍵，死亡率高但存活者可完全康復",
      acute: [
        "積極輸液治療：",
        "  - 等張晶體液（LRS）糾正脫水",
        "  - 補充鉀離子（20-40 mEq/L）",
        "  - 膠體液（若低白蛋白）",
        "廣譜抗生素（預防敗血症）：",
        "  - Ampicillin: 22 mg/kg IV q8h",
        "  - 加 Enrofloxacin: 5 mg/kg IV q24h（成貓）",
        "  - 或 Metronidazole: 10-15 mg/kg IV q12h",
        "止吐：",
        "  - Maropitant: 1 mg/kg SC/IV q24h",
        "  - Ondansetron: 0.5 mg/kg IV q8-12h（頑固性嘔吐）",
        "營養支持：鼻飼管或食道餵管",
        "輸血（若嚴重貧血或低白蛋白）",
        "干擾素（效果有限）：Feline Interferon-omega"
      ],
      chronic: [
        "恢復期逐漸恢復飲食",
        "小腦發育不全幼貓：",
        "  - 無法治療但可適應",
        "  - 避免高處避免跌落"
      ]
    },
    prognosis: "未治療死亡率高達90%。積極治療存活率約50-70%。存活超過5天者預後改善。小腦發育不全不會進展但為永久性。",
    pearls: [
      "白血球<2000/μL是嚴重預後指標",
      "糞便快篩可能假陽性（近期接種活疫苗）",
      "病毒在環境中非常穩定，可存活超過1年",
      "隔離和消毒極其重要",
      "接種疫苗是最佳預防，核心疫苗",
      "CPV快篩可用於FPV檢測（交叉反應）"
    ],
    monitoring: ["CBC（尤其白血球）", "電解質", "血糖", "體重", "嘔吐/腹瀉頻率", "體溫"],
    reference: "Greene CE: Infectious Diseases of the Dog and Cat, 4th Ed. Elsevier, 2012"
  },

  "feline-leukemia-virus": {
    zh: "貓白血病病毒",
    en: "Feline Leukemia Virus (FeLV)",
    definition: "反轉錄病毒感染，可導致免疫抑制、貧血、淋巴瘤及其他腫瘤。是貓最重要的傳染性疾病之一。",
    synonyms: ["FeLV", "貓白血病", "Feline Leukemia"],
    epidemiology: {
      species: "貓",
      age: "幼貓較成貓更易發展持續性感染",
      sex: "公貓可能風險較高（打架傳播）",
      riskFactors: ["戶外活動", "多貓環境", "與感染貓密切接觸", "打架", "母貓傳子代", "共用食碗/貓砂盆"]
    },
    clinicalPresentation: {
      history: ["反覆感染", "體重減輕", "食慾下降", "慢性口炎", "淋巴結腫大", "貧血症狀", "呼吸困難（縱隔淋巴瘤）"],
      physicalExam: ["蒼白黏膜（貧血）", "淋巴結腫大", "發燒", "脾腫大", "可觸及腹部腫塊", "口炎/齒齦炎", "黃疸（免疫介導性溶血）", "神經症狀（脊髓淋巴瘤）"]
    },
    pathophysiology: "FeLV經唾液/鼻分泌物傳播 → 口咽淋巴組織複製 → 病毒血症 → 骨髓感染。結果依宿主免疫力：1)清除感染；2)潛伏感染；3)持續性病毒血症 → 免疫抑制、腫瘤、骨髓抑制",
    diagnosis: {
      overview: "建議所有貓進行FeLV篩檢，尤其新收養貓",
      differentials: ["FIV", "其他慢性感染", "淋巴瘤（其他原因）", "免疫介導性疾病"],
      initialDB: ["FeLV抗原檢測（快篩ELISA）", "CBC（貧血、白血球異常）", "血清生化", "胸腹X光"],
      advanced: ["IFA確認（骨髓或血塗片）", "PCR", "骨髓抽吸/活檢", "淋巴結細針抽吸", "腹部超音波"]
    },
    treatment: {
      overview: "無法治癒病毒感染，以支持治療和管理併發症為主",
      acute: [
        "繼發感染治療：根據感染類型給予適當抗生素/抗真菌藥",
        "貧血處理：",
        "  - 輸血（嚴重貧血）",
        "  - 免疫抑制（若免疫介導性）：Prednisolone 2 mg/kg PO q12h",
        "  - EPO（非再生性）：100 U/kg SC 3次/週",
        "淋巴瘤化療：CHOP協議或單藥Prednisolone"
      ],
      chronic: [
        "支持治療：",
        "  - 高品質飲食",
        "  - 室內飼養",
        "  - 定期健康檢查（每6個月）",
        "  - 即時治療任何疾病",
        "免疫調節劑（效果有限）：",
        "  - Interferon-alpha",
        "  - LTCI (Lymphocyte T-Cell Immunomodulator)",
        "口炎管理：牙齒清潔/拔牙、類固醇、止痛"
      ]
    },
    prognosis: "持續性病毒血症貓：中位生存期約2.5年。進展至淋巴瘤或嚴重貧血者預後差。一些貓可存活多年。",
    pearls: [
      "「隔離-檢測-再檢測」：暴露後需等待30天再檢測",
      "幼貓<16週抵抗力較差，更易發展持續感染",
      "FeLV相關淋巴瘤以縱隔型最常見",
      "骨髓抑制是常見死因",
      "疫苗可預防但非100%有效，室內飼養最佳",
      "FeLV陽性貓應與陰性貓分開飼養"
    ],
    monitoring: ["定期CBC", "體重", "淋巴結檢查", "口腔檢查", "繼發感染徵象"],
    reference: "Greene CE: Infectious Diseases of the Dog and Cat, 4th Ed. Elsevier, 2012"
  },

  "feline-immunodeficiency-virus": {
    zh: "貓愛滋病毒",
    en: "Feline Immunodeficiency Virus (FIV)",
    definition: "反轉錄病毒（慢病毒）感染，導致漸進性免疫缺陷，類似人類HIV。感染貓可能多年無症狀。",
    synonyms: ["FIV", "貓愛滋", "Feline AIDS"],
    epidemiology: {
      species: "貓",
      age: "成年貓較常見（打架傳播）",
      sex: "公貓顯著較多（未絕育公貓打架）",
      riskFactors: ["未絕育公貓", "戶外活動", "打架", "流浪貓"]
    },
    clinicalPresentation: {
      history: ["可能多年無症狀", "反覆感染", "慢性口炎", "慢性上呼吸道感染", "體重減輕", "腹瀉", "神經症狀"],
      physicalExam: ["口炎/齒齦炎（最常見）", "淋巴結腫大（初期）", "發燒", "慢性鼻炎", "皮膚感染", "消瘦", "神經異常（後期）"]
    },
    pathophysiology: "FIV主要經咬傷傳播（唾液中病毒）→ 感染CD4+ T淋巴球 → 急性期：發燒、淋巴結腫大 → 潛伏期（數年）→ 漸進性CD4+ T細胞減少 → 免疫缺陷 → 機會性感染和腫瘤",
    diagnosis: {
      overview: "建議所有貓進行FIV篩檢",
      differentials: ["FeLV", "其他慢性感染", "腫瘤", "免疫介導性疾病"],
      initialDB: ["FIV抗體檢測（快篩ELISA）", "CBC", "血清生化", "尿液分析"],
      advanced: ["Western Blot確認", "PCR（區分疫苗抗體和自然感染）", "CD4:CD8比值"]
    },
    treatment: {
      overview: "無法治癒，以支持治療和管理併發症為主",
      acute: [
        "繼發感染治療：",
        "  - 根據感染類型選擇抗生素",
        "  - 可能需要較長療程",
        "口炎治療：",
        "  - 全口拔牙（最有效）",
        "  - Prednisolone: 1-2 mg/kg PO q24h",
        "  - Cyclosporine: 5-7 mg/kg PO q24h",
        "  - 止痛：Buprenorphine 0.02 mg/kg 口腔黏膜"
      ],
      chronic: [
        "支持治療：",
        "  - 室內飼養（保護貓和防止傳播）",
        "  - 高品質飲食",
        "  - 減少應激",
        "  - 定期健康檢查（每6-12個月）",
        "抗反轉錄病毒藥物（效果有限）：",
        "  - AZT (Zidovudine): 5-10 mg/kg PO q12h",
        "  - 需監測骨髓抑制",
        "干擾素（輔助）"
      ]
    },
    prognosis: "比FeLV預後好。許多FIV陽性貓可正常存活多年。中位生存期：診斷後約5年。最終免疫功能衰竭導致死亡。",
    pearls: [
      "FIV不像FeLV那樣容易傳播",
      "日常接觸（舔毛、共用食碗）傳播風險極低",
      "絕育可大幅降低傳播風險（減少打架）",
      "母傳子代傳播可能，但不常見",
      "FIV疫苗曾上市但已停產",
      "FIV陽性貓可與陰性貓共同生活（若無打架）"
    ],
    monitoring: ["體重", "口腔健康", "CBC", "繼發感染徵象", "生活品質"],
    reference: "Greene CE: Infectious Diseases of the Dog and Cat, 4th Ed. Elsevier, 2012"
  },

  "feline-infectious-peritonitis": {
    zh: "貓傳染性腹膜炎",
    en: "Feline Infectious Peritonitis (FIP)",
    definition: "由貓冠狀病毒突變株引起的致命性免疫介導性疾病，可表現為滲出型（濕型）或非滲出型（乾型）。",
    synonyms: ["FIP", "傳腹", "貓傳腹", "Feline Corona Virus Mutation"],
    epidemiology: {
      species: "貓",
      age: "幼貓(<2歲)和老年貓(>10歲)風險較高",
      sex: "公貓可能略多",
      riskFactors: ["多貓環境", "收容所", "繁殖場", "應激", "免疫抑制（FeLV/FIV）", "純種貓"]
    },
    clinicalPresentation: {
      history: ["漸進性體重減輕", "頑固性發燒", "食慾下降", "嗜睡", "腹部膨大（濕型）", "眼睛問題", "神經症狀（乾型）"],
      physicalExam: [
        "濕型：腹水、胸水、呼吸困難、波動感腹部",
        "乾型：肉芽腫性病變（腎臟、肝臟、眼睛、CNS）",
        "共同：發燒、黃疸、淋巴結腫大、葡萄膜炎、神經異常"
      ]
    },
    pathophysiology: "腸道冠狀病毒(FECV)感染 → 部分貓體內病毒突變 → 獲得巨噬細胞趨向性 → 病毒血症 → 免疫介導性血管炎 → 肉芽腫形成和/或滲出液產生。細胞免疫弱、體液免疫強 → 濕型；細胞免疫較強 → 乾型",
    diagnosis: {
      overview: "沒有單一確診測試。綜合臨床表現、血液學、滲出液分析和組織病理",
      differentials: ["心臟病", "腫瘤（淋巴瘤）", "肝病", "細菌性腹膜炎", "弓蟲症", "真菌感染"],
      initialDB: [
        "CBC（非再生性貧血、淋巴球減少、嗜中性球增多）",
        "血清生化（高球蛋白血症、低A/G比值<0.4）",
        "滲出液分析：",
        "  - 蛋白質>3.5 g/dL",
        "  - 細胞數低（<5000/μL）",
        "  - 黏稠、黃色、可拉絲",
        "Rivalta試驗陽性"
      ],
      advanced: [
        "滲出液或組織免疫染色",
        "RT-PCR（靈敏度高但需謹慎解釋）",
        "眼睛檢查（葡萄膜炎）",
        "腹部超音波",
        "組織活檢和組織病理"
      ]
    },
    treatment: {
      overview: "傳統認為無法治療，但近年抗病毒藥物帶來希望",
      acute: [
        "支持治療：",
        "  - 營養支持",
        "  - 輸液治療",
        "  - 抽取大量滲出液（緩解呼吸）",
        "抗病毒藥物（近年突破）：",
        "  - GS-441524: 4-6 mg/kg SC q24h × 12週（濕型）",
        "  - GS-441524: 6-8 mg/kg SC q24h × 12週（乾型/眼/神經型）",
        "  - GC376: 15 mg/kg SC q12h",
        "  - Molnupiravir: 研究中"
      ],
      chronic: [
        "姑息治療（若無法獲得抗病毒藥）：",
        "  - Prednisolone: 2-4 mg/kg PO q24h（可能短暫改善）",
        "  - 免疫調節劑（效果有限）",
        "抗病毒治療後：",
        "  - 監測復發",
        "  - 完成完整療程"
      ]
    },
    prognosis: "傳統：幾乎100%致命。GS-441524等抗病毒藥物：緩解率約80-90%，乾型和神經型較難治療。完成治療後可達到長期緩解。",
    pearls: [
      "冠狀病毒抗體陽性不等於FIP",
      "A/G比值<0.4高度提示FIP",
      "滲出液Rivalta試驗是簡單有用的床邊檢測",
      "GS-441524改變了FIP的預後",
      "多貓家庭中FIP貓不需要隔離（病毒突變是個體事件）",
      "減少應激可能降低發病風險"
    ],
    monitoring: ["體重", "食慾", "球蛋白水平", "滲出液量", "神經和眼睛症狀"],
    reference: "Pedersen NC et al: Efficacy and safety of GS-441524. J Feline Med Surg 21:271-281, 2019"
  },

  "feline-calicivirus": {
    zh: "貓杯狀病毒",
    en: "Feline Calicivirus",
    definition: "高度傳染性病毒感染，主要引起上呼吸道疾病和口腔潰瘍，偶爾引起病毒性全身性疾病(VSD)。",
    synonyms: ["FCV", "貓卡里西病毒", "Calicivirus"],
    epidemiology: {
      species: "貓",
      age: "任何年齡，幼貓症狀較重",
      sex: "無性別傾向",
      riskFactors: ["多貓環境", "收容所", "未接種疫苗", "應激", "帶原貓接觸"]
    },
    clinicalPresentation: {
      history: ["打噴嚏", "流鼻涕", "流口水", "口腔疼痛", "不願進食", "跛行（病毒性多發性關節炎）"],
      physicalExam: [
        "口腔潰瘍（舌頭、硬腭、嘴唇邊緣）",
        "結膜炎（較輕）",
        "鼻分泌物",
        "發燒",
        "關節腫脹和疼痛（幼貓）",
        "VSD（毒力強株）：全身水腫、皮膚潰瘍、黃疸、多器官衰竭"
      ]
    },
    pathophysiology: "FCV經口鼻飛沫傳播 → 感染口咽上皮 → 複製導致上皮壞死 → 口腔潰瘍。部分病毒血症 → 關節滑膜炎（跛行）。VSD株：全身血管內皮感染 → DIC、多器官衰竭",
    diagnosis: {
      overview: "通常根據臨床表現診斷，口腔潰瘍是特徵",
      differentials: ["貓皰疹病毒", "貓披衣菌", "貓黴漿菌", "口腔異物", "腎衰竭（口腔潰瘍）"],
      initialDB: ["臨床診斷", "口咽拭子PCR或病毒分離", "CBC", "血清生化"],
      advanced: ["病毒分離和定序（VSD疑似）"]
    },
    treatment: {
      overview: "主要支持治療，大多數可自行康復",
      acute: [
        "支持治療：",
        "  - 輸液維持水合",
        "  - 營養支持（軟食、加溫增加適口性）",
        "  - 鼻飼管（嚴重厭食）",
        "止痛（口腔潰瘍）：",
        "  - Buprenorphine: 0.02 mg/kg 口腔黏膜 q8-12h",
        "抗生素（繼發感染）：",
        "  - Doxycycline: 5 mg/kg PO q12h",
        "  - 或 Amoxicillin-clavulanate: 12.5-25 mg/kg PO q12h",
        "蒸氣治療（緩解鼻塞）",
        "清潔眼鼻分泌物"
      ],
      chronic: [
        "慢性帶原貓口炎治療：",
        "  - 全口或部分拔牙",
        "  - 免疫調節（參見FIV口炎治療）",
        "VSD爆發：",
        "  - 積極支持治療",
        "  - 隔離和消毒",
        "  - 血漿輸注（高免疫血清）"
      ]
    },
    prognosis: "一般FCV感染：預後良好，大多1-2週康復。VSD：死亡率高達50%以上。部分貓成為慢性帶原者。",
    pearls: [
      "口腔潰瘍是FCV的特徵（FHV較少見）",
      "帶原貓可終身排毒",
      "疫苗可減輕症狀但不能防止感染",
      "VSD是致命性全身性感染，需緊急處理",
      "FCV有多種血清型，交叉保護有限",
      "與FHV常混合感染"
    ],
    monitoring: ["進食狀況", "口腔潰瘍癒合", "水合狀態", "體溫"],
    reference: "Greene CE: Infectious Diseases of the Dog and Cat, 4th Ed. Elsevier, 2012"
  },

  "feline-herpesvirus": {
    zh: "貓皰疹病毒",
    en: "Feline Herpesvirus",
    definition: "由貓皰疹病毒1型(FHV-1)引起的上呼吸道和眼睛疾病，感染後終身潛伏，應激時可再活化。",
    synonyms: ["FHV-1", "Feline Viral Rhinotracheitis", "FVR", "貓鼻氣管炎病毒"],
    epidemiology: {
      species: "貓",
      age: "任何年齡，幼貓症狀較重",
      sex: "無性別傾向",
      riskFactors: ["多貓環境", "收容所", "未接種疫苗", "應激（再活化）", "免疫抑制"]
    },
    clinicalPresentation: {
      history: ["劇烈打噴嚏", "大量眼鼻分泌物", "食慾下降", "發燒", "眼睛問題（結膜炎、角膜潰瘍）", "應激後反覆發作"],
      physicalExam: [
        "黏液膿性眼鼻分泌物",
        "結膜炎、結膜水腫",
        "角膜潰瘍（樹枝狀）",
        "鼻塞",
        "發燒",
        "嗜睡",
        "幼貓可能有肺炎"
      ]
    },
    pathophysiology: "FHV-1經飛沫傳播 → 感染結膜和呼吸道上皮 → 細胞壞死 → 分泌物和炎症 → 急性期後病毒潛伏於三叉神經節 → 應激、免疫抑制或皮質類固醇 → 再活化和排毒",
    diagnosis: {
      overview: "臨床診斷為主，PCR可確認",
      differentials: ["貓杯狀病毒", "貓披衣菌", "貓黴漿菌", "細菌性結膜炎"],
      initialDB: ["臨床表現", "結膜/咽拭子PCR", "螢光素染色（角膜潰瘍）"],
      advanced: ["病毒分離", "眼科檢查（裂隙燈）"]
    },
    treatment: {
      overview: "支持治療和抗病毒藥物（尤其眼睛受累）",
      acute: [
        "支持治療：",
        "  - 輸液維持水合",
        "  - 營養支持（軟食、加溫）",
        "  - 蒸氣治療和輕柔清潔分泌物",
        "  - 鼻飼管（嚴重厭食）",
        "抗病毒藥物：",
        "全身：",
        "  - Famciclovir: 90 mg/kg PO q8h（最有效）",
        "  - 或 40 mg/kg PO q12h（較常用）",
        "眼部：",
        "  - Cidofovir 0.5% 眼藥水 q12h",
        "  - 或 Idoxuridine 0.1% 眼藥水 q4-6h",
        "  - 或 Trifluridine 1% 眼藥水 q4-6h",
        "抗生素（繼發感染）：",
        "  - Doxycycline: 5 mg/kg PO q12h"
      ],
      chronic: [
        "L-Lysine補充：500 mg/貓 PO q24h（效果有爭議）",
        "應激管理",
        "避免皮質類固醇（可能再活化病毒）",
        "慢性角膜後遺症：",
        "  - 角膜黏連分離",
        "  - 人工淚液",
        "  - 可能需要眼科手術"
      ]
    },
    prognosis: "急性感染：預後良好，1-3週康復。病毒終身潛伏，約80%貓成為帶原者。慢性或復發性眼病可能導致永久性損傷。",
    pearls: [
      "樹枝狀角膜潰瘍是FHV的特徵",
      "應激是再活化的主要觸發因素",
      "Famciclovir是目前最有效的全身抗病毒藥",
      "避免眼部使用類固醇（除非確定無活躍感染）",
      "L-Lysine的效果近年研究存疑",
      "幼貓嚴重感染可導致鼻甲骨壞死和慢性鼻炎"
    ],
    monitoring: ["眼睛狀況（螢光素染色）", "呼吸道症狀", "食慾", "體溫"],
    reference: "Greene CE: Infectious Diseases of the Dog and Cat, 4th Ed. Elsevier, 2012"
  },

  // ==================== 細菌性傳染病 ====================

  "bartonellosis": {
    zh: "巴東氏菌病",
    en: "Bartonellosis",
    definition: "由巴東氏菌屬(Bartonella spp.)引起的人畜共通傳染病。貓是主要宿主和保毒者，可傳染給人（貓抓病）。",
    synonyms: ["Cat Scratch Disease", "CSD", "貓抓病", "貓抓熱", "Bartonella Infection"],
    epidemiology: {
      species: "貓（主要宿主）、犬（較少）",
      age: "幼貓較常帶菌",
      sex: "無明顯性別傾向",
      riskFactors: ["跳蚤感染", "戶外活動", "多貓環境", "收容所", "免疫抑制（FIV/FeLV）"]
    },
    clinicalPresentation: {
      history: ["貓：通常無症狀帶菌", "可能有間歇性發燒", "淋巴結腫大", "眼部問題", "人類：抓咬傷後局部淋巴結腫大"],
      physicalExam: [
        "貓：多數體檢正常",
        "可能發現：淋巴結腫大、發燒、葡萄膜炎、心內膜炎（罕見）、神經症狀（罕見）",
        "犬：較多臨床症狀，包括心內膜炎、關節炎"
      ]
    },
    pathophysiology: "跳蚤吸血時排出含菌糞便 → 抓搔時細菌進入傷口 → 血流感染紅血球內 → 菌血症（可持續數月至數年）→ 偶爾引起器官損傷（葡萄膜炎、心內膜炎）",
    diagnosis: {
      overview: "帶菌者檢測或臨床疾病診斷",
      differentials: ["FIV", "FeLV", "淋巴瘤", "其他感染性疾病", "心內膜炎其他原因"],
      initialDB: ["血液培養（需特殊條件）", "PCR（血液）", "血清學（IFA）"],
      advanced: ["眼科檢查", "心臟超音波（心內膜炎）", "組織PCR"]
    },
    treatment: {
      overview: "無症狀帶菌者是否需要治療有爭議。有臨床症狀或人類暴露風險時應治療",
      acute: [
        "一線治療：",
        "  - Doxycycline: 5-10 mg/kg PO q12h × 4-6週",
        "  - 或 Azithromycin: 10 mg/kg PO q24h × 7天，之後 q72h × 9週",
        "替代方案：",
        "  - Enrofloxacin: 5 mg/kg PO q24h（避免幼貓）",
        "  - Rifampin: 10-15 mg/kg PO q24h（併用）"
      ],
      chronic: [
        "跳蚤控制（關鍵預防措施）：",
        "  - 全年跳蚤預防",
        "  - 環境除蚤",
        "預防人類感染：",
        "  - 修剪貓指甲",
        "  - 避免粗暴遊戲",
        "  - 抓咬傷後立即清洗",
        "  - 免疫低下者應特別小心"
      ]
    },
    prognosis: "貓：大多無臨床問題。治療可能無法完全清除感染。犬心內膜炎預後謹慎。人類貓抓病通常自限性。",
    pearls: [
      "貓是Bartonella henselae的主要儲主",
      "跳蚤是主要傳播媒介",
      "無症狀帶菌者是否治療取決於人類暴露風險",
      "免疫低下者（HIV、化療）感染風險高且症狀重",
      "貓抓病經典三徵：抓傷史+局部淋巴結腫大+發燒"
    ],
    monitoring: ["治療後PCR追蹤", "跳蚤控制效果"],
    reference: "Greene CE: Infectious Diseases of the Dog and Cat, 4th Ed. Elsevier, 2012"
  },

  "borreliosis": {
    zh: "萊姆病",
    en: "Borreliosis (Lyme Disease)",
    definition: "由伯氏疏螺旋體(Borrelia burgdorferi)引起、經硬蜱傳播的多系統感染性疾病。是北半球最常見的蜱傳疾病。",
    synonyms: ["Lyme Disease", "Lyme Borreliosis", "萊姆氏症"],
    epidemiology: {
      species: "犬（貓感染罕見且通常無症狀）",
      age: "任何年齡，常見於成年犬",
      sex: "無性別傾向",
      riskFactors: ["蜱蟲高發地區（美國東北部、中西部、西海岸；歐洲；亞洲溫帶）", "戶外活動", "未使用蜱蟲預防"]
    },
    clinicalPresentation: {
      history: ["間歇性跛行（移行性多關節炎）", "發燒", "食慾下降", "嗜睡", "淋巴結腫大", "可能有蜱蟲暴露史"],
      physicalExam: ["發燒", "關節腫脹和疼痛（尤其肘關節、腕關節）", "淋巴結腫大", "可能發現蜱蟲", "較少：心臟傳導異常、腎病(Lyme nephritis)"]
    },
    pathophysiology: "受感染硬蜱（主要為肩突硬蜱）叮咬 → 螺旋體傳播（需24-48小時附著）→ 局部複製 → 經血液擴散至關節、心臟、腎臟 → 免疫介導性炎症反應 → 關節炎、心臟炎、腎小球腎炎",
    diagnosis: {
      overview: "流行區加臨床表現配合血清學檢測",
      differentials: ["免疫介導性多關節炎", "其他蜱傳疾病（Anaplasma、Ehrlichia）", "敗血性關節炎", "類風濕性關節炎"],
      initialDB: [
        "血清學（C6抗體SNAP檢測）",
        "CBC（可能正常）",
        "血清生化",
        "尿液分析（尿蛋白）",
        "UPC（蛋白尿評估）"
      ],
      advanced: ["關節液分析（非化膿性）", "Borrelia PCR（關節液）", "腎活檢（Lyme nephritis）", "西方墨點法確認"]
    },
    treatment: {
      overview: "抗生素治療有效，早期治療預後好",
      acute: [
        "一線治療：",
        "  - Doxycycline: 5-10 mg/kg PO q12h × 4週（首選）",
        "替代方案：",
        "  - Amoxicillin: 20 mg/kg PO q8h × 4週",
        "  - 或 Azithromycin: 25 mg/kg PO q24h × 7天",
        "止痛（若關節炎嚴重）：",
        "  - Carprofen: 2.2 mg/kg PO q12h",
        "  - 或 Meloxicam: 0.1 mg/kg PO q24h"
      ],
      chronic: [
        "Lyme腎炎（預後差）：",
        "  - ACE抑制劑：Enalapril 0.5 mg/kg PO q12-24h",
        "  - 低蛋白飲食",
        "  - 支持治療",
        "預防：",
        "  - 蜱蟲預防（Fipronil、Permethrin、Isoxazolines）",
        "  - 疫苗（流行區）",
        "  - 戶外活動後檢查蜱蟲"
      ]
    },
    prognosis: "關節炎型：抗生素治療後預後良好，多數24-48小時改善。Lyme腎炎：預後差，可能進展至腎衰竭。",
    pearls: [
      "蜱蟲需附著24-48小時才能傳播",
      "犬抗體陽性率高但臨床疾病發生率低（<5%）",
      "移行性跛行是典型特徵",
      "Lyme腎炎主要見於Labrador和Golden Retriever",
      "C6抗體可區分疫苗抗體和自然感染",
      "人類的典型紅疹（遊走性紅斑）在犬很少見"
    ],
    monitoring: ["症狀改善", "尿蛋白追蹤", "C6抗體水平"],
    reference: "Greene CE: Infectious Diseases of the Dog and Cat, 4th Ed. Elsevier, 2012"
  },

  // ==================== 真菌性傳染病 ====================

  "blastomycosis": {
    zh: "芽生菌病",
    en: "Blastomycosis",
    definition: "由皮炎芽生菌(Blastomyces dermatitidis)引起的系統性真菌感染，主要影響肺部並可擴散至皮膚、骨骼、眼睛和其他器官。",
    synonyms: ["Blastomyces Infection", "芽生黴菌病", "North American Blastomycosis"],
    epidemiology: {
      species: "犬（最常見）、貓（較少）、人類",
      age: "年輕至中年犬（1-5歲）較常見",
      sex: "公犬較多（戶外活動較多）",
      riskFactors: ["流行區居住（北美五大湖區、密西西比河和俄亥俄河流域）", "靠近水域活動", "獵犬或運動犬", "土壤接觸"]
    },
    clinicalPresentation: {
      history: ["咳嗽", "呼吸困難", "運動不耐", "體重減輕", "皮膚病變", "跛行", "眼睛問題", "發燒"],
      physicalExam: [
        "肺部異常呼吸音",
        "皮膚結節或潰瘍（排膿）",
        "淋巴結腫大",
        "眼部病變（葡萄膜炎、視網膜剝離、失明）",
        "骨骼病變（跛行、腫脹）",
        "發燒、消瘦"
      ]
    },
    pathophysiology: "吸入土壤中的分生孢子 → 轉化為酵母型 → 肺部感染 → 經血液/淋巴擴散至皮膚、骨骼、眼睛、CNS、泌尿生殖系統 → 肉芽腫性炎症",
    diagnosis: {
      overview: "細胞學發現特徵性酵母菌是診斷金標準",
      differentials: ["細菌性肺炎", "肺腫瘤", "其他系統性真菌感染", "結核", "諾卡氏菌"],
      initialDB: [
        "細胞學/組織學（特徵性寬基出芽酵母菌）：",
        "  - 肺灌洗液、淋巴結抽吸、皮膚壓片",
        "胸腔X光（瀰漫性間質至結節性肺浸潤）",
        "尿液抗原檢測（高敏感性）",
        "血清學（交叉反應多，特異性低）"
      ],
      advanced: ["培養（需生物安全措施）", "骨骼X光", "眼科檢查", "腹部超音波"]
    },
    treatment: {
      overview: "長期抗真菌治療，通常需4-6個月以上",
      acute: [
        "一線治療：",
        "  - Itraconazole: 5 mg/kg PO q12h（首選）",
        "  - 或 Fluconazole: 5-10 mg/kg PO q12h（CNS/眼部較佳滲透）",
        "嚴重肺部疾病：",
        "  - 可加 Amphotericin B: 0.5 mg/kg IV q48h（監測腎功能）",
        "眼部病變：",
        "  - Fluconazole + 局部治療",
        "  - 抗炎治療（避免全身類固醇）"
      ],
      chronic: [
        "治療持續時間：",
        "  - 至少4-6個月",
        "  - 停藥標準：臨床緩解後再治療1個月",
        "監測：",
        "  - 尿抗原追蹤",
        "  - 定期X光",
        "  - 肝功能（Itraconazole）"
      ]
    },
    prognosis: "整體存活率約70-75%。肺部病變：預後較好。CNS/嚴重肺部受累：預後較差。眼部病變可能導致永久失明。",
    pearls: [
      "大型厚壁、寬基出芽(broad-based budding)酵母菌是特徵",
      "尿抗原檢測是良好的診斷和監測工具",
      "與組織漿菌病不同，芽生菌病少見免疫正常宿主中的自限感染",
      "Itraconazole需與食物服用增加吸收",
      "治療過程中可能出現Jarisch-Herxheimer樣反應",
      "人畜共通但人傳人或動物傳人罕見"
    ],
    monitoring: ["臨床症狀", "尿抗原", "胸腔X光", "肝功能", "眼科檢查"],
    reference: "Greene CE: Infectious Diseases of the Dog and Cat, 4th Ed. Elsevier, 2012"
  },

  "histoplasmosis": {
    zh: "組織漿菌病",
    en: "Histoplasmosis",
    definition: "由莢膜組織漿菌(Histoplasma capsulatum)引起的系統性真菌感染，主要影響肺部和網狀內皮系統。",
    synonyms: ["Histoplasma Infection", "組織胞漿菌病", "Ohio Valley Disease", "Darling's Disease"],
    epidemiology: {
      species: "犬、貓、人類",
      age: "幼年動物較常見嚴重疾病",
      sex: "無明顯性別傾向",
      riskFactors: ["流行區（美國中部和東部、密西西比和俄亥俄河流域）", "接觸鳥糞或蝙蝠糞污染土壤", "挖掘活動", "免疫抑制"]
    },
    clinicalPresentation: {
      history: ["咳嗽", "呼吸困難", "體重減輕", "腹瀉（貓常見）", "發燒", "嗜睡"],
      physicalExam: [
        "犬：肺部異常呼吸音、肝脾腫大、淋巴結腫大、腸道增厚",
        "貓：呼吸困難、皮膚結節/潰瘍、骨骼病變、眼部病變",
        "共同：消瘦、發燒、蒼白黏膜"
      ]
    },
    pathophysiology: "吸入土壤中的小分生孢子 → 肺泡巨噬細胞吞噬 → 酵母型菌在細胞內複製 → 經網狀內皮系統擴散（肝、脾、淋巴結、骨髓）→ 肉芽腫或彌漫性巨噬細胞浸潤",
    diagnosis: {
      overview: "細胞學或組織學發現細胞內酵母菌是診斷依據",
      differentials: ["其他系統性真菌感染", "淋巴瘤", "IBD", "結核", "其他肉芽腫性疾病"],
      initialDB: [
        "細胞學/組織學（細胞內小酵母菌2-4μm）：",
        "  - 骨髓、淋巴結、肝脾抽吸",
        "  - 肺灌洗液、直腸刮片",
        "胸腔X光（結節性或彌漫性間質浸潤）",
        "CBC（非再生性貧血、血小板減少）",
        "尿液抗原檢測"
      ],
      advanced: ["培養（生物安全措施）", "血清學", "腸道超音波/內視鏡"]
    },
    treatment: {
      overview: "長期抗真菌治療",
      acute: [
        "一線治療：",
        "  - Itraconazole: 犬 5 mg/kg PO q12h；貓 10 mg/kg PO q12h",
        "嚴重病例：",
        "  - Amphotericin B: 0.25-0.5 mg/kg IV q48h（誘導）",
        "  - 脂質體Amphotericin B較安全",
        "支持治療：",
        "  - 營養支持",
        "  - 輸血（若嚴重貧血）"
      ],
      chronic: [
        "治療持續時間：",
        "  - 4-6個月或更長",
        "  - 停藥標準：臨床緩解+尿抗原陰性後1個月",
        "貓可能需要更長療程"
      ]
    },
    prognosis: "犬存活率約70-90%。貓預後較謹慎，尤其肺部受累嚴重者。腸道型：預後較好。",
    pearls: [
      "比芽生菌更小（2-4μm vs 8-15μm）",
      "細胞內寄生是特徵",
      "貓比犬更常見皮膚和骨骼病變",
      "腸道受累在犬較常見，可能導致蛋白質流失性腸病",
      "免疫正常宿主可能自限感染",
      "鳥籠、雞舍、洞穴是高風險環境"
    ],
    monitoring: ["臨床症狀", "尿抗原", "CBC", "肝功能", "胸腔X光"],
    reference: "Greene CE: Infectious Diseases of the Dog and Cat, 4th Ed. Elsevier, 2012"
  },

  "cryptococcosis": {
    zh: "隱球菌病",
    en: "Cryptococcosis",
    definition: "由隱球菌(Cryptococcus neoformans/gattii)引起的系統性真菌感染，主要影響鼻腔、中樞神經系統和皮膚。",
    synonyms: ["Cryptococcus Infection", "新型隱球菌病"],
    epidemiology: {
      species: "貓（最常見）、犬、人類",
      age: "任何年齡，成年動物較常見",
      sex: "無明顯性別傾向",
      riskFactors: ["鴿糞或桉樹接觸", "免疫抑制（FeLV/FIV）", "全球分布（C. neoformans）或熱帶亞熱帶（C. gattii）"]
    },
    clinicalPresentation: {
      history: ["慢性鼻分泌物", "打噴嚏", "鼻樑腫脹", "神經症狀", "皮膚病變", "眼睛問題"],
      physicalExam: [
        "貓：鼻部腫塊、慢性鼻炎、皮膚結節/潰瘍、CNS症狀、眼部病變",
        "犬：CNS症狀較常見、眼部病變、鼻部病變",
        "共同：發燒（不常見）、淋巴結腫大"
      ]
    },
    pathophysiology: "吸入鴿糞或環境中的酵母菌/孢子 → 鼻腔定植和感染 → 經篩板侵入CNS或經血液擴散 → 皮膚、眼睛、肺部等受累。莢膜多醣是主要毒力因子，抑制吞噬作用",
    diagnosis: {
      overview: "莢膜抗原檢測是高度敏感特異的診斷方法",
      differentials: ["鼻腔腫瘤", "其他真菌感染", "細菌性鼻炎", "腦腫瘤", "腦炎"],
      initialDB: [
        "乳膠凝集試驗(LCAT)或側流層析(LFA)（莢膜抗原檢測）：",
        "  - 血清或CSF",
        "  - 敏感性>90%",
        "細胞學（墨汁染色顯示莢膜）",
        "鼻部影像（CT優於X光）"
      ],
      advanced: ["MRI（CNS病變）", "培養", "CSF分析（CNS受累）", "組織病理"]
    },
    treatment: {
      overview: "長期抗真菌治療，CNS病例需選擇CNS滲透好的藥物",
      acute: [
        "一線治療：",
        "貓/犬鼻腔或皮膚病變：",
        "  - Fluconazole: 50 mg/貓 或 5-10 mg/kg PO q12-24h",
        "  - 或 Itraconazole: 50 mg/貓 或 5 mg/kg PO q12h",
        "CNS病變：",
        "  - Fluconazole（首選，CNS滲透佳）",
        "  - 嚴重時：Amphotericin B + Flucytosine（5-Fluorocytosine）",
        "眼部病變：",
        "  - Fluconazole + 局部抗炎治療"
      ],
      chronic: [
        "治療持續時間：",
        "  - 鼻腔型：2-4個月",
        "  - CNS型：6-12個月或更長",
        "  - 停藥標準：臨床緩解+抗原效價陰性或穩定低",
        "抗原效價監測：每4-8週"
      ]
    },
    prognosis: "鼻腔型：預後良好（>80%治癒）。CNS型：預後謹慎（約50-60%）。眼部受累可能導致永久視力損害。",
    pearls: [
      "貓是最常見受感染的家養動物",
      "抗原檢測是最有用的診斷工具",
      "鼻樑腫脹(\"Clown nose\")是貓的典型表現",
      "Fluconazole是CNS病變首選（滲透性佳）",
      "抗原效價可用於監測治療反應",
      "FIV/FeLV陽性貓感染風險增加但治療反應可良好"
    ],
    monitoring: ["抗原效價（每4-8週）", "臨床症狀", "神經學檢查", "眼科檢查"],
    reference: "Greene CE: Infectious Diseases of the Dog and Cat, 4th Ed. Elsevier, 2012"
  },

  "coccidioidomycosis": {
    zh: "球孢子菌病",
    en: "Coccidioidomycosis",
    definition: "由粗球孢子菌(Coccidioides immitis/posadasii)引起的系統性真菌感染，主要影響肺部並可擴散至骨骼、皮膚和其他器官。",
    synonyms: ["Valley Fever", "San Joaquin Valley Fever", "山谷熱", "沙漠風濕症"],
    epidemiology: {
      species: "犬（最常見）、貓（罕見）、人類",
      age: "幼犬和年輕成犬較常見",
      sex: "無明顯性別傾向",
      riskFactors: ["流行區居住（美國西南部、墨西哥北部、中南美洲乾旱地區）", "沙塵暴後", "土壤挖掘活動", "某些品種（Boxer、Pointer、Australian Shepherd、Beagle、Scottish Terrier）"]
    },
    clinicalPresentation: {
      history: ["慢性咳嗽", "呼吸困難", "發燒", "體重減輕", "跛行", "皮膚病變"],
      physicalExam: [
        "肺部異常呼吸音",
        "骨骼病變（長骨、椎體）：腫脹、疼痛",
        "皮膚結節或引流瘻管",
        "淋巴結腫大",
        "眼部病變（葡萄膜炎）",
        "心臟病變（心包炎）"
      ]
    },
    pathophysiology: "吸入土壤中的關節孢子 → 肺泡內轉化為球狀體 → 球狀體破裂釋放內孢子 → 局部複製或經血液/淋巴擴散 → 骨骼、皮膚、眼睛、CNS、心臟受累 → 肉芽腫形成",
    diagnosis: {
      overview: "血清學配合臨床表現和影像學",
      differentials: ["其他系統性真菌感染", "細菌性骨髓炎", "骨腫瘤", "肺腫瘤", "結核"],
      initialDB: [
        "血清學（最常用）：",
        "  - AGID（瓊脂凝膠免疫擴散）",
        "  - EIA（酵素免疫分析）",
        "胸腔X光（支氣管周圍浸潤、肺門淋巴結腫大）",
        "骨骼X光（溶骨性病變）"
      ],
      advanced: [
        "細胞學/組織學（大球狀體含內孢子）",
        "培養（生物安全措施，高度危險）",
        "尿抗原檢測",
        "MRI/CT（骨骼或CNS病變）"
      ]
    },
    treatment: {
      overview: "長期抗真菌治療，常需終身維持",
      acute: [
        "一線治療：",
        "  - Fluconazole: 5-10 mg/kg PO q12h（首選）",
        "  - 或 Itraconazole: 5 mg/kg PO q12h",
        "嚴重或CNS病例：",
        "  - Amphotericin B誘導治療",
        "骨骼病變：",
        "  - 可能需手術清創",
        "  - 延長療程（6-12個月以上）"
      ],
      chronic: [
        "治療持續時間：",
        "  - 肺部型：6-12個月",
        "  - 播散性：12個月以上，常需終身維持",
        "  - 骨骼型：至少12個月",
        "停藥標準：臨床緩解+血清學陰性或穩定低後2-3個月"
      ]
    },
    prognosis: "肺部型：預後良好（約90%可控制）。播散性（尤其骨骼）：預後謹慎，常需終身治療。某些品種（Boxer等）預後較差。",
    pearls: [
      "「山谷熱」因在美國加州聖乔金谷發現而得名",
      "球狀體（spherules）含內孢子是診斷特徵",
      "血清學檢測是最實用的診斷方法",
      "骨骼受累是犬最常見的播散部位",
      "復發常見，可能需要終身維持治療",
      "培養物高度危險，需BSL-3實驗室",
      "雨季後、建築工地等塵土飛揚環境風險增加"
    ],
    monitoring: ["臨床症狀", "血清學效價", "骨骼X光（骨骼型）", "肝功能"],
    reference: "Greene CE: Infectious Diseases of the Dog and Cat, 4th Ed. Elsevier, 2012"
  },

  "aspergillosis": {
    zh: "麴菌病",
    en: "Aspergillosis",
    definition: "由麴菌屬(Aspergillus spp.，主要為A. fumigatus)引起的真菌感染，可表現為鼻部、播散性或其他局部形式。",
    synonyms: ["Aspergillus Infection", "麴黴病"],
    epidemiology: {
      species: "犬、貓",
      age: "鼻部型：年輕至中年犬；播散型：任何年齡",
      sex: "無明顯性別傾向",
      riskFactors: ["鼻部型：中長頭犬種（German Shepherd、Retriever、Rottweiler）", "播散型：免疫抑制、German Shepherd（可能遺傳性免疫缺陷）", "貓：免疫抑制（FeLV/FIV）或長期抗生素/類固醇使用"]
    },
    clinicalPresentation: {
      history: [
        "鼻部型：慢性單側或雙側鼻分泌物（膿血性）、打噴嚏、鼻痛、鼻樑脫色/潰瘍",
        "播散型：嗜睡、厭食、發燒、椎間盤炎/骨髓炎症狀、眼部症狀"
      ],
      physicalExam: [
        "鼻部型：膿血性鼻分泌物、鼻孔周圍潰瘍、鼻痛、鼻樑脫色",
        "播散型：椎體疼痛、後肢無力、葡萄膜炎、視網膜病變、淋巴結腫大"
      ]
    },
    pathophysiology: "吸入普遍存在於環境中的孢子 → 鼻腔定植（正常免疫力宿主）或播散（免疫缺陷）。鼻部型：真菌破壞鼻甲骨。播散型：經血液擴散至椎體、腎臟、眼睛等",
    diagnosis: {
      overview: "鼻部型：影像學+內視鏡+細胞學/培養；播散型：影像學+血清學+組織學",
      differentials: ["鼻部型：鼻腔腫瘤、異物、牙根膿瘍、隱球菌", "播散型：椎間盤炎其他原因、腫瘤"],
      initialDB: [
        "鼻部型：",
        "  - CT或MRI（鼻甲骨破壞、額竇充填）",
        "  - 鼻腔內視鏡（真菌斑塊）",
        "  - 細胞學/組織學（分隔菌絲）",
        "  - 培養",
        "播散型：",
        "  - 脊椎X光或MRI（椎間盤炎）",
        "  - 血清學（Galactomannan抗原）",
        "  - 尿液抗原"
      ],
      advanced: ["組織活檢", "培養和藥敏"]
    },
    treatment: {
      overview: "鼻部型以局部治療為主；播散型需要長期全身抗真菌治療",
      acute: [
        "鼻部型：",
        "  - 局部Clotrimazole灌注（首選）：",
        "    1%溶液，麻醉下經鼻孔或鑽孔灌入，作用1小時",
        "    成功率約70-90%，可能需重複",
        "  - 或局部Enilconazole灌洗（bid × 7-14天）",
        "  - 口服Itraconazole（輔助或無法局部治療時）：5 mg/kg PO q12h",
        "播散型：",
        "  - Itraconazole: 5 mg/kg PO q12h",
        "  - 或 Voriconazole: 4-6 mg/kg PO q12h（較佳但較貴）",
        "  - Amphotericin B（嚴重病例誘導）"
      ],
      chronic: [
        "播散型：",
        "  - 長期治療（6-12個月以上）",
        "  - 預後謹慎",
        "鼻部型：",
        "  - 可能需要重複局部治療",
        "  - 慢性病例預後較差"
      ]
    },
    prognosis: "鼻部型：局部治療成功率70-90%，可能復發。播散型：預後差，尤其German Shepherd（可能有潛在免疫缺陷）。",
    pearls: [
      "鼻部麴菌病是犬最常見的鼻腔真菌感染",
      "CT顯示鼻甲骨破壞是特徵",
      "局部Clotrimazole灌注是鼻部型首選治療",
      "German Shepherd有播散型的品種傾向",
      "播散型常見椎間盤炎表現",
      "Aspergillus是機會性病原，正常動物也有暴露但不發病"
    ],
    monitoring: ["鼻部型：臨床症狀、影像學追蹤", "播散型：神經學檢查、眼科檢查、血清學"],
    reference: "Greene CE: Infectious Diseases of the Dog and Cat, 4th Ed. Elsevier, 2012"
  }

};

// 疾病別名映射（用於搜尋）
const INFECTIOUS_DISEASE_ALIASES = {
  // 病毒性疾病
  "犬瘟熱": "canine-distemper",
  "犬瘟": "canine-distemper",
  "CDV": "canine-distemper",
  "distemper": "canine-distemper",
  "hardpad": "canine-distemper",

  "犬傳染性肝炎": "canine-infectious-hepatitis",
  "ICH": "canine-infectious-hepatitis",
  "CAV-1": "canine-infectious-hepatitis",
  "藍眼病": "canine-infectious-hepatitis",
  "infectious hepatitis": "canine-infectious-hepatitis",

  "貓瘟": "feline-panleukopenia",
  "貓小病毒": "feline-panleukopenia",
  "FPV": "feline-panleukopenia",
  "貓泛白血球減少症": "feline-panleukopenia",
  "panleukopenia": "feline-panleukopenia",
  "feline parvovirus": "feline-panleukopenia",

  "貓白血病病毒": "feline-leukemia-virus",
  "貓白血病": "feline-leukemia-virus",
  "FeLV": "feline-leukemia-virus",
  "feline leukemia": "feline-leukemia-virus",

  "貓愛滋病毒": "feline-immunodeficiency-virus",
  "貓愛滋": "feline-immunodeficiency-virus",
  "FIV": "feline-immunodeficiency-virus",
  "feline aids": "feline-immunodeficiency-virus",

  "貓傳染性腹膜炎": "feline-infectious-peritonitis",
  "貓傳腹": "feline-infectious-peritonitis",
  "傳腹": "feline-infectious-peritonitis",
  "FIP": "feline-infectious-peritonitis",
  "feline infectious peritonitis": "feline-infectious-peritonitis",

  "貓杯狀病毒": "feline-calicivirus",
  "FCV": "feline-calicivirus",
  "calicivirus": "feline-calicivirus",
  "貓卡里西病毒": "feline-calicivirus",

  "貓皰疹病毒": "feline-herpesvirus",
  "FHV": "feline-herpesvirus",
  "FHV-1": "feline-herpesvirus",
  "貓鼻氣管炎": "feline-herpesvirus",
  "FVR": "feline-herpesvirus",
  "feline viral rhinotracheitis": "feline-herpesvirus",

  // 細菌性疾病
  "巴東氏菌病": "bartonellosis",
  "貓抓病": "bartonellosis",
  "貓抓熱": "bartonellosis",
  "cat scratch disease": "bartonellosis",
  "CSD": "bartonellosis",
  "bartonella": "bartonellosis",

  "萊姆病": "borreliosis",
  "萊姆氏症": "borreliosis",
  "lyme disease": "borreliosis",
  "lyme": "borreliosis",
  "borrelia": "borreliosis",

  // 真菌性疾病
  "芽生菌病": "blastomycosis",
  "芽生黴菌病": "blastomycosis",
  "blastomyces": "blastomycosis",

  "組織漿菌病": "histoplasmosis",
  "組織胞漿菌病": "histoplasmosis",
  "histoplasma": "histoplasmosis",
  "ohio valley disease": "histoplasmosis",

  "隱球菌病": "cryptococcosis",
  "新型隱球菌病": "cryptococcosis",
  "cryptococcus": "cryptococcosis",

  "球孢子菌病": "coccidioidomycosis",
  "山谷熱": "coccidioidomycosis",
  "valley fever": "coccidioidomycosis",
  "coccidioides": "coccidioidomycosis",

  "麴菌病": "aspergillosis",
  "麴黴病": "aspergillosis",
  "aspergillus": "aspergillosis"
};

// 導出（若在模組環境中使用）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { INFECTIOUS_DISEASES, INFECTIOUS_DISEASE_ALIASES };
}

console.log("Infectious Diseases Info loaded:", Object.keys(INFECTIOUS_DISEASES).length, "diseases");

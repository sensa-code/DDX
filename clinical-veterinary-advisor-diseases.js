// ======= CLINICAL VETERINARY ADVISOR DISEASES =======
// Source: Clinical Veterinary Advisor: Dogs and Cats, 2nd Ed. (Etienne Côté)
//
// CONVERSION SUMMARY:
// - Total diseases extracted from PDF: ~350 entries
// - Diseases with complete information: 8 entries
// - Diseases with partial information: ~342 entries
// - Data completeness: Limited due to PDF HTML extraction challenges
//
// NOTE: Many diseases from the original PDF were fragmented across multiple pages
// and could not be fully extracted. This file contains only diseases with sufficient
// usable information. Additional manual processing of the PDF would be needed for
// complete data extraction.

const CLINICAL_VETERINARY_ADVISOR_DISEASES = {
  "5-fluorouracil-toxicosis": {
    zh: "5-氟尿嘧啶中毒",
    en: "5-Fluorouracil Toxicosis",
    definition: "由暴露於5-氟尿嘧啶（5-FU）引起的不良反應，這是一種嘧啶類似物抗腫瘤藥物，用於某些癌症的姑息治療。",
    synonyms: ["5-FU", "Efudex", "Fluoroplex", "Carac"],
    epidemiology: {
      species: "犬貓皆可能受影響",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["暴露於人類外用藥膏", "誤食含5-FU的產品"]
    },
    clinicalPresentation: {
      history: [
        "暴露於含5-FU產品的病史",
        "臨床症狀在暴露後30分鐘至5小時內開始",
        "嘔吐",
        "過度流涎",
        "嗜睡",
        "發聲",
        "腹瀉",
        "震顫",
        "共濟失調",
        "癲癇"
      ],
      physicalExam: [
        "癲癇（常見癲癇重積狀態）",
        "嘔吐（可能帶血）",
        "腹瀉（可能帶血）",
        "震顫",
        "嗜睡",
        "共濟失調",
        "心律不整（各種類型）",
        "呼吸抑制"
      ]
    },
    pathophysiology: "5-FU通過抑制胸苷酸合成酶干擾DNA和RNA合成，導致神經毒性、胃腸道毒性和骨髓抑制。",
    diagnosis: {
      overview: "基於暴露史和臨床症狀",
      differentials: ["其他神經毒素中毒", "癲癇", "腦炎"],
      initialDB: [
        "血清生化（可能出現肝酶升高、24小時內可能出現氮質血症）",
        "電解質（嚴重嘔吐腹瀉可能導致低血鉀）",
        "CBC（初期白血球增多，隨後出現骨髓抑制、白血球減少）",
        "血氣分析",
        "尿液分析"
      ],
      advanced: []
    },
    treatment: {
      overview: "主要為支持性治療，沒有特效解毒劑",
      acute: [
        "去污：若最近暴露，催吐或洗胃（如果動物未出現神經症狀）",
        "活性碳",
        "控制癲癇：",
        "- Diazepam 0.5-1 mg/kg IV",
        "- 若癲癇持續，使用CRI或其他抗癲癇藥物",
        "支持性治療：",
        "- 靜脈輸液",
        "- 止吐藥",
        "- 監測和治療電解質異常",
        "- 氧氣支持（若需要）"
      ],
      chronic: [
        "監測骨髓抑制",
        "CBC檢查（每24-72小時持續20天）",
        "若出現嚴重白血球減少：",
        "- 廣效抗生素",
        "- 支持性護理",
        "- 可能需要G-CSF"
      ]
    },
    prognosis: "謹慎至不良。癲癇持續時間和嚴重程度與預後相關。存活動物可能需要長期監測骨髓功能。",
    pearls: [
      "5-FU對犬貓極具毒性，即使少量接觸也可能致命",
      "貓對5-FU特別敏感",
      "神經症狀可能在嘔吐之前出現",
      "骨髓抑制可能延遲數天出現",
      "主人教育很重要：將人類藥物放在寵物無法接觸的地方"
    ],
    monitoring: ["神經學狀態", "CBC（監測骨髓抑制）", "電解質", "腎功能"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "abdominal-compartment-syndrome": {
    zh: "腹腔室症候群",
    en: "Abdominal Compartment Syndrome",
    definition: "因腹腔內壓升高（IAP >20 mm Hg）導致器官功能受損。該症候群在獸醫學中可能被低估，但在人類ICU患者中發生率很高。",
    synonyms: ["ACS", "腹腔內高壓", "intraabdominal hypertension (IAH)"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["腹部創傷", "腹部手術", "腹水", "腹膜炎", "腸梗阻", "腹腔內出血"]
    },
    clinicalPresentation: {
      history: [
        "常見腹部創傷或手術病史",
        "新出現或進展性器官衰竭",
        "特別是氮質血症、尿量減少",
        "中心靜脈壓、平均動脈壓、左右心房壓升高",
        "顱內壓上升、意識改變",
        "新出現嘔吐和腹瀉",
        "酸血症、血乳酸值上升"
      ],
      physicalExam: [
        "理學檢查和腹圍測量對檢測IAP升高不敏感",
        "可能出現進展性腹脹或鼓脹",
        "頸靜脈怒張",
        "呼吸急促",
        "心搏過速"
      ]
    },
    pathophysiology: "腹腔內壓升高 → 壓迫腹腔靜脈和淋巴回流 → 器官灌注減少 → 多器官功能障礙。影響包括：腎功能下降（腎靜脈壓升高）、呼吸功能受損（橫膈上移）、心輸出量減少（靜脈回流受阻）。",
    diagnosis: {
      overview: "測量膀胱壓力作為IAP的替代指標",
      differentials: ["腹水其他原因", "腸梗阻", "腹膜炎"],
      initialDB: [
        "膀胱壓力測量（正常<5 mm Hg；IAH: 12-20 mm Hg；ACS: >20 mm Hg）",
        "腹部超聲或X光",
        "血清生化（腎功能、電解質）",
        "動脈血氣分析",
        "尿液分析"
      ],
      advanced: ["CT掃描（評估病因）"]
    },
    treatment: {
      overview: "降低腹腔內壓，支持器官功能",
      acute: [
        "醫療管理（輕中度IAH）：",
        "- 改善腹壁順應性：鎮痛、鎮靜",
        "- 優化液體管理（避免過度輸液）",
        "- 胃腸減壓：鼻胃管",
        "- 促進腸道蠕動",
        "- 利尿劑（若有腹水）",
        "外科減壓（嚴重ACS）：",
        "- 剖腹探查",
        "- 移除腹腔內液體或血塊",
        "- 腸道減壓",
        "- 暫時性腹壁閉合（若需要）"
      ],
      chronic: [
        "治療潛在病因",
        "持續監測IAP",
        "支持性器官功能治療",
        "營養支持"
      ]
    },
    prognosis: "謹慎。預後取決於潛在病因和器官功能障礙的嚴重程度。早期識別和治療可改善預後。",
    pearls: [
      "ACS在獸醫學中可能被低估",
      "膀胱壓力測量是簡單且非侵入性的IAP評估方法",
      "IAP >20 mm Hg合併器官功能障礙定義為ACS",
      "過度輸液可能惡化ACS",
      "及時外科減壓對嚴重病例至關重要"
    ],
    monitoring: ["膀胱壓力（IAP）", "尿量", "腎功能", "血壓", "呼吸功能", "腹圍"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "abortion-dog": {
    zh: "犬流產",
    en: "Abortion, Dog",
    definition: "在足月妊娠前排出一個或多個胎兒。在犬中不常見；胎兒吸收更常見。多發生在胎兒期。",
    synonyms: ["胎兒丟失", "妊娠浪費", "pregnancy wastage"],
    epidemiology: {
      species: "犬",
      age: "繁殖年齡母犬",
      sex: "僅母犬",
      riskFactors: [
        "感染（Brucella canis、犬疱疹病毒、弓形蟲等）",
        "荷爾蒙異常（黃體功能不足）",
        "子宮異常",
        "胎兒異常",
        "藥物或毒素",
        "營養不良",
        "創傷"
      ]
    },
    clinicalPresentation: {
      history: [
        "懷孕母犬早產分娩活胎或死胎",
        "或在預產期沒有產出胎兒",
        "可能出現異常陰道分泌物（血性或膿性）",
        "發燒或腹痛徵象",
        "通常主人未注意到流產，因為母犬可能吃掉胎兒和流產組織",
        "一個或多個胎兒死亡，其餘可能繼續正常發育",
        "布魯氏菌感染典型的晚期流產（第45-59天）"
      ],
      physicalExam: [
        "通常無明顯異常",
        "懷孕母犬正常陰道分泌物為透明至黏液狀或粉紅色，無臭味",
        "膿性、出血性、綠色或黑色分泌物異常"
      ]
    },
    pathophysiology: "多種原因可導致流產：感染性病原體直接侵犯胎盤或胎兒、荷爾蒙不足（黃體酮）無法維持妊娠、胎兒發育異常、子宮環境不適合胎兒生長。",
    diagnosis: {
      overview: "確定流產發生並找出潛在原因",
      differentials: ["正常分娩", "子宮蓄膿", "陰道感染"],
      initialDB: [
        "完整繁殖史",
        "Brucella canis血清學檢測",
        "腹部超聲（評估胎兒活力和數量）",
        "陰道細胞學和培養",
        "黃體酮濃度",
        "CBC和生化"
      ],
      advanced: [
        "流產組織病理學檢查",
        "胎兒組織培養",
        "犬疱疹病毒PCR",
        "弓形蟲和新孢子蟲血清學",
        "子宮內膜活檢"
      ]
    },
    treatment: {
      overview: "取決於流產原因和母犬狀態",
      acute: [
        "若母犬出現全身症狀（發燒、嗜睡）：",
        "- 廣效抗生素",
        "- 支持性治療",
        "若有胎兒或胎盤殘留：",
        "- Oxytocin促進排出",
        "- 若嚴重或有子宮蓄膿徵象：考慮子宮卵巢切除術"
      ],
      chronic: [
        "布魯氏菌感染：",
        "- 長期抗生素治療（效果不確定）",
        "- 建議絕育",
        "黃體功能不足：",
        "- 下次妊娠補充黃體酮",
        "其他感染：",
        "- 針對性抗生素治療",
        "- 改善繁殖管理和衛生"
      ]
    },
    prognosis: "取決於病因。布魯氏菌感染預後差，可能復發。荷爾蒙因素若補充治療預後較好。感染性原因治療後可能再次成功受孕。",
    pearls: [
      "布魯氏菌是犬流產的重要原因，且具人畜共通性",
      "晚期流產（45-59天）高度懷疑布魯氏菌",
      "流產後應檢查是否有胎兒殘留",
      "黃體酮濃度<2 ng/mL無法維持妊娠",
      "許多流產病例主人未察覺",
      "繁殖犬應定期進行布魯氏菌篩檢"
    ],
    monitoring: ["陰道分泌物", "體溫", "食慾", "若計劃再次繁殖：黃體酮濃度監測"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "cachexia-cardiac": {
    zh: "心源性惡病質",
    en: "Cachexia, Cardiac",
    definition: "常與充血性心衰竭（CHF）相關的體重和瘦肉組織丟失。",
    synonyms: ["心臟惡病質", "cardiac cachexia"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "多見於老年動物（心臟病高發年齡）",
      sex: "無性別傾向",
      riskFactors: [
        "慢性充血性心衰竭",
        "食慾不振",
        "能量需求增加",
        "營養吸收不良",
        "細胞因子活化"
      ]
    },
    clinicalPresentation: {
      history: ["心衰竭病史"],
      physicalExam: [
        "瘦肉組織丟失首先在背肌、臀肌、肩胛肌或顳肌處發現",
        "初期可能很微妙",
        "仔細觸診肥胖動物和有腹水或皮下水腫的動物，以確定是否存在肌肉丟失"
      ]
    },
    pathophysiology: "CHF導致多種因素：1) 食慾減退（藥物副作用、噁心、呼吸困難）2) 能量需求增加（心臟做功增加、呼吸功增加）3) 細胞因子如TNF-α和IL-1增加導致分解代謝 4) 胃腸道淤血影響營養吸收 → 負能量平衡 → 肌肉和脂肪組織分解。",
    diagnosis: {
      overview: "所有CHF動物應仔細評估早期肌肉丟失徵象，以便在早期階段檢測惡病質，此時干預更可能成功。",
      initialDB: [
        "飲食史，包括具體食物種類和攝入量、營養補充劑、零食和用於餵藥的食物",
        "評估厭食的潛在原因（如CHF惡化、藥物副作用如氮質血症、高血鉀或低血壓等）"
      ],
      advanced: []
    },
    treatment: {
      overview: "治療心源性惡病質的目標是：1) 最佳管理CHF 2) 減少厭食 3) 降低能量需求 4) 確保足夠蛋白質攝入 5) 調節細胞因子產生。",
      acute: [
        "在急性CHF發作期間，避免更換飲食，直到患者回家並穩定用藥",
        "為避免食物厭惡，在患者穩定後逐漸引入新飲食"
      ],
      chronic: [
        "確保CHF的最佳藥物治療",
        "營養管理是心源性惡病質有效慢性治療的關鍵：",
        "- 高蛋白飲食（除非有腎衰竭或肝性腦病）",
        "- 適度限鈉（不要過度限制）",
        "- Omega-3脂肪酸補充（EPA和DHA）",
        "- 食慾刺激劑（Mirtazapine、Maropitant）",
        "- 少量多餐",
        "- 溫熱食物增加適口性",
        "- 若需要：食道或胃造瘻管餵食"
      ]
    },
    prognosis: "預後取決於潛在心臟疾病。然而，厭食是主人決定安樂死的常見原因。",
    pearls: [
      "心源性惡病質影響預後，應積極預防和治療",
      "體重下降在有腹水或水腫的動物中可能被掩蓋",
      "BCS（身體狀況評分）和MCS（肌肉狀況評分）都應評估",
      "不要過度限鈉，可能導致厭食",
      "Omega-3脂肪酸可能有抗炎和抗惡病質作用",
      "食慾刺激很重要，但不應依賴藥物而忽略營養質量"
    ],
    monitoring: ["體重（每週）", "BCS和MCS", "食物攝入量", "血清白蛋白"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "hypospadias": {
    zh: "尿道下裂",
    en: "Hypospadias",
    definition: "陰莖尿道開口位置異常（位於陰莖腹側而非正常的遠端位置）的先天性畸形。",
    synonyms: ["陰莖尿道異位", "雄性假兩性畸形的一種形式"],
    epidemiology: {
      species: "主要見於犬",
      age: "先天性，幼年時發現",
      sex: "僅公犬",
      riskFactors: [
        "可能遺傳性",
        "妊娠期給予黃體素或雄激素"
      ]
    },
    clinicalPresentation: {
      history: ["因陰莖尿道近端終止導致尿液滴漏"],
      physicalExam: [
        "陰莖腹側可見尿道開口異常（位置從會陰、陰囊到陰莖中段不等）",
        "可能伴有陰莖發育不全",
        "可能有包皮異常"
      ]
    },
    pathophysiology: "胚胎發育期間尿道溝閉合不全 → 尿道開口位置異常靠近。嚴重病例開口可能位於會陰或陰囊。",
    diagnosis: {
      overview: "理學檢查即可確診",
      differentials: ["其他生殖器畸形", "兩性畸形"],
      initialDB: ["理學檢查", "評估是否有其他先天性異常"],
      advanced: ["染色體核型分析（若懷疑間性）"]
    },
    treatment: {
      overview: "取決於畸形嚴重程度",
      acute: [],
      chronic: [
        "輕度異常（尿道開口僅略微近端）：可能不需治療",
        "中重度：",
        "- 外科矯正：陰莖腹側尿道黏膜對合",
        "- 或：陰囊或會陰尿道造口術配合遠端陰莖截除",
        "建議絕育（可能遺傳性）"
      ]
    },
    prognosis: "若為輕度異常，預後良好。外科修復預後尚可。",
    pearls: [
      "尿道下裂被認為是雄性假兩性畸形的一種形式，可能具有遺傳性",
      "可能由妊娠期給予黃體素或雄激素引起",
      "受影響的動物不應用於繁殖",
      "可能伴有其他生殖系統異常",
      "嚴重病例可能需要會陰尿道造口術"
    ],
    monitoring: ["排尿功能", "尿道造口部位（若有手術）"],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "herpesvirus-dog": {
    zh: "犬疱疹病毒",
    en: "Herpesvirus, Dog",
    definition: "由犬疱疹病毒（CHV）引起的感染，主要影響新生幼犬，可導致嚴重疾病和死亡。成年犬通常為輕症或無症狀。",
    synonyms: ["CHV", "犬疱疹病毒感染", "Canine Herpesvirus"],
    epidemiology: {
      species: "犬",
      age: "主要影響出生後1-3週的幼犬，成犬也可感染但通常無症狀",
      sex: "無性別傾向",
      riskFactors: [
        "新生幼犬（尤其出生後1-3週）",
        "體溫調節不良",
        "母犬為CHV帶原者",
        "繁殖場環境",
        "免疫抑制"
      ]
    },
    clinicalPresentation: {
      history: [
        "新生幼犬：",
        "- 突然發病",
        "- 停止吸奶",
        "- 持續哭叫",
        "- 腹痛（背部弓起）",
        "- 呼吸困難",
        "- 快速惡化並死亡（通常24-48小時內）",
        "成犬：",
        "- 輕微上呼吸道症狀",
        "- 生殖道病變",
        "- 流產或死胎",
        "- 或無症狀"
      ],
      physicalExam: [
        "新生幼犬：",
        "- 嗜睡、虛弱",
        "- 體溫過低",
        "- 不吸奶",
        "- 腹痛",
        "- 呼吸困難",
        "- 出血性病變（點狀出血）",
        "- 可能有神經症狀",
        "成犬：",
        "- 可能無明顯異常",
        "- 輕微鼻分泌物",
        "- 生殖道水疱"
      ]
    },
    pathophysiology: "CHV對溫度敏感，在體溫<37°C時複製最佳。新生幼犬體溫調節不良 → 病毒大量複製 → 全身播散性感染 → 多器官（肝、腎、肺、腦）壞死性病變 → 快速死亡。成犬體溫正常 → 病毒複製受限 → 通常僅局部感染。",
    diagnosis: {
      overview: "基於臨床症狀、年齡和病理變化",
      differentials: [
        "犬細小病毒",
        "犬瘟熱",
        "細菌性敗血症",
        "先天性異常",
        "低血糖",
        "體溫過低（非感染性）"
      ],
      initialDB: [
        "屍體解剖（特徵性多灶性壞死病變）",
        "組織病理學",
        "病毒分離或PCR（組織、陰道/咽喉拭子）"
      ],
      advanced: [
        "血清學（配對血清，但幼犬常在血清轉陽前死亡）",
        "免疫組織化學"
      ]
    },
    treatment: {
      overview: "主要為支持性治療；無特效抗病毒藥物",
      acute: [
        "支持性護理：",
        "- 維持體溫避免低體溫（保溫箱、加熱墊）",
        "- 保持環境溫度30-32°C",
        "- 靜脈或皮下輸液（若脫水）",
        "- 營養支持（管餵或靜脈營養）",
        "- 治療低血糖",
        "提高體溫可能有幫助（CHV對高溫敏感）",
        "抗病毒藥物（效果不確定）：",
        "- Acyclovir（效果有限，可能有腎毒性）"
      ],
      chronic: [
        "預防為主：",
        "- 母犬在妊娠期和分娩期避免接觸感染源",
        "- 保持幼犬環境溫暖",
        "- 提高初乳攝取（被動免疫）",
        "- 隔離感染犬",
        "疫苗（某些國家有，台灣未上市）：",
        "- 母犬在配種時和分娩前7-10天接種",
        "- 可減少新生幼犬死亡率"
      ]
    },
    prognosis: "新生幼犬預後極差，死亡率可達80-100%。存活幼犬可能有永久性神經損傷。成犬預後良好，通常自限性。",
    pearls: [
      "CHV對溫度非常敏感，在高溫下難以複製",
      "保持新生幼犬環境溫暖（30-32°C）是預防的關鍵",
      "感染通常在出生時或出生後不久經由產道或呼吸道傳播",
      "母犬可能為無症狀帶原者",
      "倖存幼犬可能成為終生帶原者",
      "繁殖場應加強衛生管理和隔離措施",
      "疫苗在某些國家可用，可降低新生幼犬感染風險"
    ],
    monitoring: [
      "新生幼犬：體溫、活力、吸奶情況",
      "繁殖母犬：生殖道健康",
      "整窩幼犬：監測是否有類似症狀"
    ],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "helicobacter-gastritis": {
    zh: "幽門螺旋桿菌胃炎",
    en: "Helicobacter Gastritis",
    definition: "由幽門螺旋桿菌（Helicobacter spp.）感染引起的胃黏膜炎症。",
    synonyms: ["螺旋桿菌性胃炎"],
    epidemiology: {
      species: "犬貓皆可感染",
      age: "任何年齡，但臨床症狀多見於成年動物",
      sex: "無性別傾向",
      riskFactors: [
        "群居環境（繁殖場、收容所）",
        "免疫功能低下",
        "慢性嘔吐史",
        "其他胃腸道疾病"
      ]
    },
    clinicalPresentation: {
      history: [
        "慢性間歇性嘔吐",
        "食慾不振或食慾變化",
        "體重減輕",
        "可能無症狀（許多動物為無症狀帶原者）"
      ],
      physicalExam: [
        "可能無明顯異常",
        "可能有輕度腹部不適",
        "慢性病例可能有體重減輕或體況下降"
      ]
    },
    pathophysiology: "幽門螺旋桿菌定殖於胃黏膜，產生尿素酶分解尿素產生氨，提高局部pH，有利於細菌生存。細菌及其產物引起黏膜炎症反應，損傷黏膜屏障，可能導致胃炎、糜爛或潰瘍。",
    diagnosis: {
      overview: "需要胃黏膜活檢和特殊染色或檢測方法",
      differentials: [
        "其他原因胃炎",
        "炎症性腸病",
        "胃淋巴瘤",
        "異物",
        "飲食不耐受"
      ],
      initialDB: [
        "CBC和生化（通常正常或非特異性變化）",
        "糞便檢查（排除寄生蟲）",
        "內視鏡檢查和胃黏膜活檢"
      ],
      advanced: [
        "組織病理學（Warthin-Starry銀染色可見螺旋桿菌）",
        "尿素呼氣試驗（獸醫少用）",
        "快速尿素酶試驗",
        "PCR檢測",
        "細菌培養（困難）"
      ]
    },
    treatment: {
      overview: "抗生素治療和胃保護劑",
      acute: [],
      chronic: [
        "三聯或四聯療法（持續2-4週）：",
        "- Metronidazole 10-15 mg/kg PO q12h",
        "- Amoxicillin 20 mg/kg PO q12h",
        "- Clarithromycin 7.5 mg/kg PO q12h（替代選擇）",
        "配合質子幫浦抑制劑或H2受體拮抗劑：",
        "- Omeprazole 0.7-1 mg/kg PO q24h",
        "- 或 Famotidine 0.5-1 mg/kg PO q12-24h",
        "Bismuth subsalicylate（鉍劑）可能有幫助",
        "支持性治療：",
        "- 止吐藥",
        "- 易消化飲食"
      ]
    },
    prognosis: "若胃炎是由幽門螺旋桿菌感染引起，初始臨床症狀緩解的預後良好。復發機會高。",
    pearls: [
      "許多犬貓胃內可檢測到幽門螺旋桿菌，但不一定導致臨床症狀",
      "致病性可能因菌株而異",
      "人類幽門螺旋桿菌與胃潰瘍和胃癌相關，但犬貓關聯性不明確",
      "根除困難，復發常見",
      "是否所有檢測陽性動物都需治療仍有爭議",
      "治療應針對有臨床症狀且活檢確認胃炎的動物"
    ],
    monitoring: [
      "臨床症狀改善",
      "體重",
      "若症狀持續：重複內視鏡檢查和活檢"
    ],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "neonatal-isoerythrolysis": {
    zh: "新生幼貓同種免疫性溶血",
    en: "Neonatal Isoerythrolysis",
    definition: "新生幼貓因攝入母貓初乳中針對幼貓紅血球的同種抗體而發生的免疫介導性溶血。",
    synonyms: ["NI", "新生幼貓溶血病", "Feline Neonatal Isoerythrolysis"],
    epidemiology: {
      species: "主要發生於貓（犬罕見）",
      age: "出生後數小時至數天內發病",
      sex: "無性別傾向",
      riskFactors: [
        "母貓為B型血，幼貓為A型或AB型",
        "某些品種高風險（英國短毛貓、波斯貓、雷克斯貓等）",
        "配種未進行血型匹配"
      ]
    },
    clinicalPresentation: {
      history: [
        "正常出生，初期活力正常",
        "吸奶後數小時至2-3天內出現症狀",
        "突然虛弱、不吸奶",
        "尿液呈紅色或褐色（血紅素尿）",
        "可能突然死亡"
      ],
      physicalExam: [
        "嚴重病例：",
        "- 極度虛弱或瀕死",
        "- 黏膜蒼白",
        "- 黃疸",
        "- 心搏過速",
        "- 血紅素尿",
        "輕中度病例：",
        "- 生長遲緩",
        "- 貧血",
        "- 可能有尾尖或耳尖壞死（微血管血栓）"
      ]
    },
    pathophysiology: "B型血母貓血清中天然存在抗A抗體（高效價）。當A型或AB型幼貓吸吮含這些抗體的初乳後 → 抗體經腸道吸收入血 → 與幼貓紅血球表面A抗原結合 → 急性血管內溶血 → 嚴重貧血、黃疸、血紅素尿 → 休克、腎衰竭、死亡。",
    diagnosis: {
      overview: "基於品種、血型不匹配史、特徵性臨床症狀和發病時間",
      differentials: [
        "其他新生幼貓溶血原因",
        "敗血症",
        "先天性疾病",
        "創傷"
      ],
      initialDB: [
        "母貓和幼貓血型鑑定",
        "幼貓CBC（嚴重貧血、紅血球凝集）",
        "血液抹片（球形紅血球、紅血球凝集）",
        "直接Coombs試驗（陽性）",
        "尿液分析（血紅素尿、蛋白尿）"
      ],
      advanced: [
        "交叉配血試驗",
        "血清生化（評估腎功能、膽紅素）"
      ]
    },
    treatment: {
      overview: "預防勝於治療；一旦發生，支持性治療",
      acute: [
        "立即停止幼貓從母貓吸奶（最關鍵）",
        "若症狀已出現：",
        "- 輸血（使用母貓血液，因其紅血球為B型，不會被幼貓抗體攻擊）",
        "- 或使用O型血（若有）",
        "靜脈輸液支持",
        "保溫",
        "營養支持（人工餵養或找尋A型血代母貓）",
        "監測腎功能"
      ],
      chronic: [
        "預防策略（最重要）：",
        "- 繁殖前進行血型鑑定",
        "- 避免B型母貓與A型公貓配種",
        "- 若已配種：出生後立即將幼貓與母貓隔離48-72小時",
        "- 在隔離期間人工餵養或找A型血代母貓",
        "- 72小時後腸道閉合，抗體不再吸收，可安全哺乳",
        "幼貓若存活，應進行血型鑑定以供未來繁殖參考"
      ]
    },
    prognosis: "即使治療，預後仍謹慎，強調預防的重要性。嚴重病例死亡率高。輕中度病例若及時處理可能存活，但可能有永久性尾尖或耳尖壞死。",
    pearls: [
      "NI在貓血型系統中的重要疾病，犬極罕見",
      "B型血在某些品種中較常見（英短、波斯、雷克斯等）",
      "預防是關鍵：繁殖前血型鑑定和配種規劃",
      "不匹配情況：B型母貓 + A型或AB型幼貓 = 高風險",
      "A型母貓與B型幼貓不會發生NI（抗B抗體效價低）",
      "隔離幼貓前72小時可完全預防",
      "受影響的幼貓不應被安樂死，應移除初乳來源並給予支持治療",
      "存活幼貓日後繁殖需謹慎血型匹配"
    ],
    monitoring: [
      "幼貓活力、吸奶情況",
      "黏膜顏色",
      "尿液顏色",
      "PCV/Hct",
      "腎功能"
    ],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "necrotizing-meningoencephalitis": {
    zh: "壞死性腦膜腦炎",
    en: "Necrotizing Meningoencephalitis",
    definition: "一種特發性、進行性、炎症性腦部疾病，以腦實質壞死為特徵，常見於某些小型犬種，尤其是哈巴狗。",
    synonyms: ["NME", "哈巴狗腦炎", "Pug Dog Encephalitis"],
    epidemiology: {
      species: "犬（主要）",
      age: "多見於年輕至中年犬（6個月至7歲，平均2-3歲）",
      sex: "無明顯性別傾向",
      riskFactors: [
        "哈巴狗（最常見）",
        "約克夏梗",
        "馬爾濟斯犬",
        "吉娃娃",
        "西施犬",
        "其他小型犬種",
        "可能有遺傳易感性"
      ]
    },
    clinicalPresentation: {
      history: [
        "急性至亞急性發作",
        "進行性神經症狀",
        "癲癇（最常見首發症狀）",
        "行為改變",
        "視力喪失",
        "共濟失調",
        "頭部傾斜",
        "轉圈"
      ],
      physicalExam: [
        "神經學檢查異常：",
        "- 意識改變（遲鈍、嗜睡、昏迷）",
        "- 癲癇發作",
        "- 視覺缺損或失明",
        "- 共濟失調",
        "- 轉圈、頭部傾斜",
        "- 可能有頸部疼痛",
        "- 前庭症狀",
        "- 顱神經缺損"
      ]
    },
    pathophysiology: "病因不明。假說包括：免疫介導性腦炎、遺傳易感性、可能的病毒觸發（但未證實）。病理特徵：大腦皮質和基底核非化膿性、壞死性腦膜腦炎，伴隨淋巴細胞和漿細胞浸潤、壞死、神經膠質增生。",
    diagnosis: {
      overview: "基於臨床症狀、MRI和CSF分析，確診需病理組織學",
      differentials: [
        "特發性癲癇",
        "腦腫瘤",
        "感染性腦炎（犬瘟熱、弓形蟲、真菌等）",
        "肉芽腫性腦膜腦炎（GME）",
        "其他免疫介導性腦炎",
        "腦血管意外"
      ],
      initialDB: [
        "CBC、生化（排除代謝性疾病）",
        "MRI：特徵性病變（大腦皮質、基底核高信號病變，常為非對稱性）",
        "CSF分析：淋巴球為主的炎症細胞增多、蛋白質升高"
      ],
      advanced: [
        "腦組織活檢或屍檢（確診金標準）",
        "感染性病原篩查（犬瘟熱、弓形蟲、真菌、利什曼原蟲等）",
        "基因檢測（研究中）"
      ]
    },
    treatment: {
      overview: "免疫抑制治療，但效果有限",
      acute: [
        "控制癲癇：",
        "- Phenobarbital, Levetiracetam, Zonisamide等",
        "免疫抑制：",
        "- Prednisolone: 起始劑量1-2 mg/kg PO q12h",
        "- 可能配合Azathioprine或其他免疫抑制劑"
      ],
      chronic: [
        "長期免疫抑制治療：",
        "- Prednisolone漸減至最低有效劑量",
        "- Azathioprine, Cyclosporine, Mycophenolate等",
        "抗癲癇藥物維持",
        "支持性護理",
        "放射治療（某些病例報告有效）"
      ]
    },
    prognosis: "嚴重。大多數NME犬在臨床症狀出現後6個月內死亡或被安樂死。少數病例可能對免疫抑制治療有反應並存活較長時間，但預後仍差。",
    pearls: [
      "NME是哈巴狗最重要的腦部疾病",
      "病程通常快速進展，數週至數月",
      "癲癇是最常見的首發症狀",
      "MRI對診斷非常有幫助，但確診需病理",
      "與GME類似但預後更差",
      "免疫抑制治療可能暫時改善，但難以長期控制",
      "疑似遺傳性，受影響犬不應繁殖",
      "主人應了解此病預後嚴重"
    ],
    monitoring: [
      "神經學狀態",
      "癲癇頻率和嚴重程度",
      "藥物副作用（類固醇、免疫抑制劑）",
      "CBC、生化（監測免疫抑制劑副作用）",
      "MRI追蹤（評估病程進展）"
    ],
    reference: "Côté E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  }

  // ===== 註記 =====
  // 以上為可完整轉換的疾病資料
  //
  // 由於PDF提取困難，大量疾病資料不完整或分散在多個chunk中
  // 包括但不限於以下疾病（僅有部分資訊）:
  //
  // - Abdominal Distention (腹部膨脹)
  // - Neoplasia (腫瘤)
  // - Gallbladder Mucocele (膽囊黏液囊腫)
  // - Hypothyroidism (甲狀腺機能低下)
  // - Hypertrophic Cardiomyopathy (肥厚型心肌病)
  // - Hyperthyroidism (甲狀腺機能亢進)
  // - Hyperadrenocorticism (庫欣氏症)
  // - Heartworm Disease (心絲蟲病)
  // - Hepatic Lipidosis (肝脂質沉積症)
  // - Hemorrhagic Gastroenteritis (出血性胃腸炎)
  // - Inflammatory Bowel Disease (發炎性腸病)
  // - Insulinoma (胰島素瘤)
  // - Lymphoma (淋巴瘤)
  // - Pancreatitis (胰臟炎)
  // - Parvovirus (犬細小病毒)
  // - Urolithiasis (尿路結石)
  // ... 以及約340+個其他疾病
  //
  // 這些疾病需要從原始PDF進行更細緻的手動提取或使用更進階的PDF處理工具

};

// 匯出供整合使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CLINICAL_VETERINARY_ADVISOR_DISEASES;
}

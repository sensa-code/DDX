// ======= 口腔牙科疾病 DISEASE_INFO =======
// Dental and Oral Diseases
// 資料來源：Clinical Veterinary Advisor: Dogs and Cats, 2nd Ed. (Etienne Cote)
// Veterinary Dentistry: A Team Approach, 3rd Ed. (Steven E. Holmstrom)

const DENTAL_DISEASES = {
  "periodontal-disease": {
    zh: "牙周病",
    en: "Periodontal Disease",
    definition: "影響牙齒支持結構(牙齦、牙周韌帶、齒槽骨、牙骨質)的慢性進行性炎症疾病，是小動物最常見的口腔疾病。",
    synonyms: ["牙周炎", "Periodontitis", "Gum Disease", "牙齦炎（早期）", "Gingivitis"],
    epidemiology: {
      species: "犬貓皆非常常見",
      age: "隨年齡增加，3歲以上超過80%有不同程度牙周病",
      sex: "無性別傾向",
      breed: "小型犬種（玩具犬、吉娃娃、約克夏）風險較高",
      riskFactors: ["口腔衛生不佳", "牙齒擁擠/咬合不正", "軟食飲食", "免疫抑制", "糖尿病", "乾燥症"]
    },
    clinicalPresentation: {
      history: ["口臭", "進食困難或疼痛", "流涎", "抓撓臉部", "拒絕硬食", "牙齒鬆動或脫落"],
      physicalExam: ["牙齦紅腫", "牙齦出血（探針觸碰或自發性）", "牙結石堆積", "牙齦萎縮", "牙根暴露", "牙齒鬆動", "膿性分泌物", "口腔瘻管"]
    },
    pathophysiology: "牙菌斑累積 → 細菌毒素和宿主免疫反應 → 牙齦炎(可逆) → 持續發炎 → 牙周韌帶破壞 → 齒槽骨吸收 → 牙周炎(不可逆) → 牙齒鬆動和脫落。細菌可能進入血流影響心臟、肝臟、腎臟",
    diagnosis: {
      overview: "視診結合全身麻醉下口腔檢查和牙科X光",
      differentials: ["齒齦口腔炎", "口腔腫瘤", "牙齒吸收(貓)", "牙根膿瘍"],
      initialDB: ["清醒時口腔視診", "全身麻醉下完整口腔檢查", "牙周探針檢查（測量牙周囊袋深度）"],
      advanced: ["全口牙科X光", "細菌培養（頑固病例）", "組織病理學（排除腫瘤）"]
    },
    staging: {
      stage1: "牙齦炎：牙齦發炎但無附著喪失，可逆",
      stage2: "早期牙周炎：<25%附著喪失",
      stage3: "中度牙周炎：25-50%附著喪失",
      stage4: "重度牙周炎：>50%附著喪失"
    },
    treatment: {
      overview: "專業牙科治療（洗牙和牙周治療）結合居家護理",
      acute: [
        "全身麻醉下專業牙科治療：",
        "- 超音波洗牙去除牙結石",
        "- 牙齦下刮治和根面整平",
        "- 牙根拋光",
        "- 牙周囊袋沖洗",
        "嚴重病例考慮拔牙",
        "疼痛管理：Meloxicam 0.1 mg/kg PO q24h（犬）或單次（貓）",
        "抗生素（嚴重感染）：Amoxicillin-Clavulanate 12.5-25 mg/kg PO q12h"
      ],
      chronic: [
        "居家口腔護理：",
        "- 每日刷牙（最有效）",
        "- 牙科咀嚼物/潔牙骨",
        "- 口腔沖洗液/凝膠",
        "- 處方牙科飲食",
        "定期專業牙科檢查和治療（每6-12個月）"
      ]
    },
    prognosis: "早期牙齦炎可完全逆轉。牙周炎破壞不可逆但可控制進展。居家護理配合良好者預後較佳。",
    pearls: [
      "牙周病是最常見但最被忽視的寵物疾病",
      "口臭不正常！是牙周病的警訊",
      "小型犬牙齦萎縮更快，需更積極治療",
      "僅靠洗牙不夠，需配合居家護理",
      "嚴重牙周病可能與全身性疾病（心臟、腎臟）相關"
    ],
    monitoring: ["定期口腔檢查", "牙周囊袋深度追蹤", "X光評估骨流失進展"],
    reference: "Holmstrom SE: Veterinary Dentistry: A Team Approach, 3rd Ed. Saunders, 2019; Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "tooth-resorption": {
    zh: "牙齒吸收",
    en: "Tooth Resorption (FORL)",
    definition: "牙齒硬組織（牙本質、牙骨質、牙釉質）被破牙細胞進行性吸收破壞的疾病，貓最常見的口腔疾病之一。",
    synonyms: ["FORL", "Feline Odontoclastic Resorptive Lesion", "貓齒吸收性病變", "TR", "頸部病變", "Neck Lesion"],
    epidemiology: {
      species: "貓極為常見（50-70%的成年貓），犬少見",
      age: "隨年齡增加，中老年貓好發",
      sex: "無明確性別傾向",
      breed: "暹羅貓、阿比西尼亞貓可能風險較高",
      riskFactors: ["年齡增長", "牙周病", "確切病因不明"]
    },
    clinicalPresentation: {
      history: ["可能無症狀（早期）", "進食時疼痛反應（頭偏斜、食物掉落）", "流涎", "拒絕進食", "偏好軟食", "下顎顫抖"],
      physicalExam: ["牙齦增生覆蓋病變", "牙冠缺損或「粉紅點」", "牙齦線處牙齒凹陷", "牙齒斷裂", "探針觸碰極度疼痛", "下顎顫抖（jaw chattering）"]
    },
    pathophysiology: "破牙細胞（類似破骨細胞）活化 → 牙骨質和牙本質吸收 → 病變通常始於牙頸部（牙齦線）→ 進展至牙冠和牙根 → 牙根可能與齒槽骨融合（置換性吸收）→ 牙冠斷裂",
    diagnosis: {
      overview: "麻醉下口腔檢查結合牙科X光確診",
      differentials: ["蛀牙（貓罕見）", "牙齒斷裂", "牙周病"],
      initialDB: ["麻醉下口腔檢查", "牙科探針檢查", "全口牙科X光（必要！）"],
      advanced: ["組織病理學（少需要）"]
    },
    classification: {
      type1: "Type 1：牙根結構完整可見，牙周韌帶可辨識 → 需完整拔牙",
      type2: "Type 2：牙根與齒槽骨融合（置換性吸收），牙周韌帶消失 → 可行牙冠截除術",
      type3: "Type 3：同一顆牙同時有Type 1和Type 2特徵"
    },
    treatment: {
      overview: "拔牙或牙冠截除術是唯一有效治療",
      acute: [
        "Type 1病變：完整拔牙",
        "Type 2病變：牙冠截除術（保留融合的牙根）",
        "Type 3病變：根據各牙根情況決定",
        "術前/術後疼痛管理：",
        "- Buprenorphine 0.02 mg/kg SL/IV q6-8h",
        "- Meloxicam 0.1 mg/kg PO 單次或短期",
        "- 局部神經阻斷"
      ],
      chronic: [
        "定期口腔檢查和X光追蹤其他牙齒",
        "無有效預防方法"
      ]
    },
    prognosis: "拔牙後預後良好，疼痛緩解。但其他牙齒可能陸續發生病變，需定期追蹤。",
    pearls: [
      "貓齒吸收是貓最痛苦的口腔疾病之一",
      "牙科X光是診斷必需 - 60%病變在X光才能發現",
      "「粉紅點」是牙齦組織長入吸收腔",
      "Type 2病變不需（也無法）完整拔牙",
      "沒有任何治療能阻止或逆轉病變進展"
    ],
    monitoring: ["定期全口X光（每6-12個月）", "監測其他牙齒", "觀察進食行為"],
    reference: "Reiter AM, Soltero-Rivera MM: Applied Feline Oral Anatomy and Tooth Resorption. J Feline Med Surg 2014; Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "gingivostomatitis": {
    zh: "齒齦口腔炎",
    en: "Gingivostomatitis",
    definition: "口腔黏膜和牙齦的嚴重慢性炎症，特徵為疼痛劇烈且對傳統治療反應差，主要見於貓。",
    synonyms: ["FCGS", "Feline Chronic Gingivostomatitis", "貓慢性齒齦口腔炎", "Caudal Stomatitis", "尾側口腔炎", "Lymphocytic-Plasmacytic Stomatitis"],
    epidemiology: {
      species: "貓為主，犬罕見",
      age: "任何年齡，成年貓多見",
      sex: "無性別傾向",
      riskFactors: ["FIV/FeLV感染", "杯狀病毒感染", "免疫介導因素", "牙菌斑不耐受"]
    },
    clinicalPresentation: {
      history: ["嚴重口腔疼痛", "流涎（可能帶血）", "拒絕進食或進食困難", "體重減輕", "毛髮凌亂（無法理毛）", "躲藏", "觸碰頭部時退縮"],
      physicalExam: ["牙齦嚴重紅腫增生", "口腔黏膜潰瘍", "尾側口腔（顎舌弓）增生性炎症", "舌炎", "唇炎", "極度疼痛", "口臭", "消瘦"]
    },
    pathophysiology: "確切機制不明。推測為對口腔細菌/牙菌斑的異常免疫反應。病毒感染（杯狀病毒）可能在某些病例扮演角色。組織學顯示淋巴細胞-漿細胞浸潤",
    diagnosis: {
      overview: "臨床表現典型，組織病理學確認",
      differentials: ["牙周病", "口腔腫瘤（鱗狀細胞癌）", "嗜酸性肉芽腫複合症", "慢性腎病繼發口腔潰瘍", "感染性口腔炎"],
      initialDB: ["完整口腔檢查（需麻醉）", "全口牙科X光", "FIV/FeLV檢測", "基礎血檢"],
      advanced: ["組織病理學（淋巴細胞-漿細胞浸潤）", "病毒PCR（杯狀病毒）", "細菌培養"]
    },
    treatment: {
      overview: "全口或近全口拔牙是最有效治療，配合疼痛管理和免疫調節",
      acute: [
        "第一線治療 - 全口拔牙或近全口拔牙：",
        "- 移除所有臼齒和前臼齒",
        "- 嚴重病例可能需拔除犬齒和門齒",
        "- 約60-80%病例顯著改善或治癒",
        "疼痛管理：",
        "- Buprenorphine 0.02-0.03 mg/kg SL/IV q6-8h",
        "- Gabapentin 5-10 mg/kg PO q8-12h",
        "- NSAIDs（短期，注意腎功能）"
      ],
      chronic: [
        "拔牙後仍有症狀的病例：",
        "- 免疫調節：Cyclosporine 7.5 mg/kg PO q24h",
        "- 類固醇：Prednisolone 1-2 mg/kg PO q24h（逐漸減量）",
        "- Interferon omega",
        "- 幹細胞治療（實驗性）",
        "長期疼痛管理",
        "營養支持（可能需要食道餵管）"
      ]
    },
    prognosis: "全口拔牙後60-80%顯著改善或治癒。20-30%需要額外免疫調節治療。少數病例頑固難治。FIV陽性病例預後較差。",
    pearls: [
      "「沒有牙齒總比疼痛的牙齒好」- 貓沒有牙齒仍能正常進食",
      "尾側口腔炎（顎舌弓處）是本病特徵",
      "單純洗牙和藥物治療效果通常不持久",
      "完整拔除所有牙根很重要 - 殘留牙根會導致復發",
      "即使拔牙後，部分貓需要長期免疫抑制治療"
    ],
    monitoring: ["口腔炎症程度", "體重", "進食能力", "疼痛評估", "藥物副作用"],
    reference: "Jennings MW, et al: Feline Chronic Gingivostomatitis. Vet Clin North Am Small Anim Pract 2015; Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "tooth-fracture": {
    zh: "牙齒斷裂",
    en: "Tooth Fracture",
    definition: "牙齒硬組織（牙釉質、牙本質、牙髓腔）的創傷性斷裂，可能導致牙髓暴露和感染。",
    synonyms: ["斷牙", "Broken Tooth", "Fractured Tooth", "牙齒外傷"],
    epidemiology: {
      species: "犬較常見（咀嚼硬物），貓也可見",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["咀嚼硬物（骨頭、蹄、冰塊、籠子）", "創傷", "玩耍時撞擊", "車禍"]
    },
    clinicalPresentation: {
      history: ["咀嚼硬物後", "創傷後", "可能無症狀", "進食時疼痛", "臉部腫脹（若有膿瘍）"],
      physicalExam: ["牙冠缺損或斷裂", "牙髓暴露（粉紅或黑點）", "牙齒變色（灰/粉/紫色）", "牙齦瘻管", "臉部腫脹", "觸診疼痛"]
    },
    pathophysiology: "牙齒斷裂 → 若牙髓暴露：細菌入侵 → 牙髓炎 → 牙髓壞死 → 根尖周圍炎 → 牙根膿瘍。牙髓未暴露：牙本質小管可能導致細菌滲透（較慢）。牙齒變色提示牙髓出血或壞死",
    diagnosis: {
      overview: "視診結合牙科X光評估牙髓和牙根狀態",
      differentials: ["牙齒磨耗", "牙齒吸收", "發育異常"],
      initialDB: ["口腔檢查", "牙科探針", "牙科X光"],
      advanced: ["牙髓活力測試", "CT（複雜病例）"]
    },
    classification: {
      uncomplicated: "非複雜性骨折：僅牙釉質或牙釉質+牙本質，牙髓未暴露",
      complicated: "複雜性骨折：牙髓暴露",
      crownFracture: "牙冠骨折：僅影響牙冠",
      rootFracture: "牙根骨折：影響牙根",
      crownRootFracture: "牙冠-牙根骨折：兩者皆影響"
    },
    treatment: {
      overview: "根據骨折類型和牙髓狀態決定治療",
      acute: [
        "非複雜性骨折（牙髓未暴露）：",
        "- 牙本質封閉劑保護暴露的牙本質",
        "- 定期X光追蹤",
        "複雜性骨折（牙髓暴露）：",
        "- 急性（<48小時）：活髓治療可能可行",
        "- 慢性或感染：根管治療或拔牙",
        "根管治療（保留牙齒功能）",
        "拔牙（若根管治療不可行或飼主選擇）",
        "疼痛管理"
      ],
      chronic: [
        "根管治療後定期X光追蹤",
        "牙冠修復（重要功能牙）"
      ]
    },
    prognosis: "非複雜性骨折：預後良好。複雜性骨折及時根管治療：成功率85-95%。延遲治療：可能發展為牙根膿瘍。",
    pearls: [
      "「任何比牙齒硬的東西都不應該給狗咬」",
      "犬齒和上顎第四前臼齒最常斷裂",
      "牙齒變色=牙髓受損，需要評估和可能治療",
      "牙髓暴露48小時內治療成功率較高",
      "無症狀不代表沒問題 - 牙髓可能已壞死"
    ],
    monitoring: ["定期X光追蹤（6-12個月）", "牙根周圍病變", "牙齒變色變化"],
    reference: "Holmstrom SE: Veterinary Dentistry: A Team Approach, 3rd Ed. Saunders, 2019; Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "tooth-root-abscess": {
    zh: "牙根膿瘍",
    en: "Tooth Root Abscess",
    definition: "牙根尖端周圍組織的細菌感染，形成膿瘍，常由牙周病或牙髓疾病進展而來。",
    synonyms: ["Periapical Abscess", "根尖周圍膿瘍", "Dental Abscess", "牙齒膿瘍", "Apical Abscess"],
    epidemiology: {
      species: "犬貓皆常見",
      age: "任何年齡，成年動物多見",
      sex: "無性別傾向",
      riskFactors: ["牙齒斷裂", "嚴重牙周病", "牙髓壞死", "牙齒磨耗"]
    },
    clinicalPresentation: {
      history: ["臉部腫脹", "眼下腫脹或流膿（上顎裂齒）", "鼻腔分泌物", "進食困難", "流涎", "抓撓臉部"],
      physicalExam: ["臉部腫脹", "皮膚瘻管流膿（眼下、下顎）", "口腔瘻管", "口鼻瘻管", "受影響牙齒鬆動", "牙齦腫脹", "淋巴結腫大"]
    },
    pathophysiology: "牙髓感染（經斷裂、蛀牙或牙周病進入）→ 牙髓壞死 → 細菌經根尖擴散 → 根尖周圍炎 → 膿瘍形成 → 可能穿透骨骼和皮膚形成瘻管",
    diagnosis: {
      overview: "臨床表現結合牙科X光",
      differentials: ["臉部腫瘤", "外傷性腫脹", "唾液腺疾病", "鼻竇炎", "眼眶蜂窩織炎"],
      initialDB: ["口腔檢查", "牙科X光（根尖周圍透亮區）", "牙科探針"],
      advanced: ["CT（評估骨破壞範圍）", "細菌培養和藥敏"]
    },
    treatment: {
      overview: "拔牙是標準治療，根管治療是替代選項",
      acute: [
        "手術拔牙（首選）：",
        "- 完整移除病牙和牙根",
        "- 清創感染組織",
        "- 瘻管通常會自行癒合",
        "根管治療（保留重要牙齒）：",
        "- 需要專業牙科設備",
        "- 成功率約85-90%",
        "抗生素：",
        "- Amoxicillin-Clavulanate 12.5-25 mg/kg PO q12h x 7-14天",
        "- 或 Clindamycin 5.5-11 mg/kg PO q12h",
        "疼痛管理：NSAID + 鴉片類"
      ],
      chronic: [
        "瘻管護理直到癒合",
        "術後X光確認完整拔除"
      ]
    },
    prognosis: "拔牙後預後良好，瘻管通常1-2週內癒合。根管治療成功率高但需追蹤。",
    pearls: [
      "眼下腫脹/瘻管 → 首先考慮上顎第四前臼齒或第一臼齒膿瘍",
      "「carnassial tooth abscess」是上顎裂齒膿瘍的經典表現",
      "單純抗生素無法治癒 - 必須移除感染源",
      "瘻管會反覆癒合又破裂，直到牙齒處理",
      "術前抗生素可減少菌血症風險"
    ],
    monitoring: ["瘻管癒合", "腫脹消退", "術後X光", "復發跡象"],
    reference: "Holmstrom SE: Veterinary Dentistry: A Team Approach, 3rd Ed. Saunders, 2019; Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "malocclusion": {
    zh: "咬合不正",
    en: "Malocclusion",
    definition: "上下顎牙齒或顎骨的異常對齊關係，可能導致功能障礙、疼痛或組織損傷。",
    synonyms: ["咬合異常", "錯咬合", "Abnormal Bite", "Bad Bite", "牙齒錯位"],
    epidemiology: {
      species: "犬較常見（品種繁殖），貓也可見",
      age: "幼年時發現，可能持續終生",
      sex: "無性別傾向",
      breed: "短頭犬種（下顎前突）、長頭犬種（上顎前突）、小型犬（牙齒擁擠）",
      riskFactors: ["遺傳", "乳齒殘留", "創傷", "發育異常"]
    },
    clinicalPresentation: {
      history: ["咀嚼困難", "抓食而非咬食", "可能無症狀", "牙齒刺傷軟組織"],
      physicalExam: [
        "Class I（齒性錯咬合）：顎骨關係正常，個別牙齒錯位",
        "Class II（下顎後縮）：下顎相對過短",
        "Class III（下顎前突）：下顎相對過長",
        "犬齒錯位：下顎犬齒刺傷硬顎",
        "前牙錯咬合：門齒對齊異常",
        "軟組織創傷/潰瘍"
      ]
    },
    pathophysiology: "遺傳因素（顎骨生長不協調）或局部因素（乳齒殘留、創傷）→ 牙齒或顎骨錯位 → 咬合干擾 → 可能導致牙齒撞擊軟組織 → 疼痛和組織損傷",
    diagnosis: {
      overview: "臨床檢查評估咬合關係和組織損傷",
      differentials: ["正常變異（品種特徵）", "創傷性錯位"],
      initialDB: ["完整口腔檢查", "咬合關係評估", "軟組織損傷檢查"],
      advanced: ["頭顱X光", "牙科X光", "CT（複雜病例）", "咬合模型"]
    },
    treatment: {
      overview: "根據是否造成疼痛或損傷決定治療。治療目標是舒適的咬合，非美觀",
      acute: [
        "造成軟組織損傷的牙齒：",
        "- 牙冠縮短和活髓治療",
        "- 拔牙",
        "- 牙齒移動（矯正）",
        "乳齒殘留造成的錯咬合：",
        "- 及早拔除乳齒",
        "矯正治療（選擇性病例）：",
        "- 傾斜板（incline plane）",
        "- 活動式或固定式矯正器"
      ],
      chronic: [
        "定期監測避免組織損傷",
        "不繁殖有遺傳性咬合不正的動物"
      ]
    },
    prognosis: "治療後可達到舒適功能性咬合。遺傳性咬合不正建議絕育不繁殖。",
    pearls: [
      "「舒適的咬合比完美的咬合更重要」",
      "下顎犬齒刺傷硬顎是最需要治療的情況",
      "乳齒8-12週還沒脫落就要考慮拔除",
      "短頭犬種的Class III咬合是「品種特徵」但仍可能有問題",
      "遺傳性咬合不正不應繁殖，會傳給後代"
    ],
    monitoring: ["軟組織損傷", "牙齒移動", "矯正器適應", "定期複查"],
    reference: "Holmstrom SE: Veterinary Dentistry: A Team Approach, 3rd Ed. Saunders, 2019; Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "retained-deciduous-teeth": {
    zh: "殘留乳齒",
    en: "Retained Deciduous Teeth",
    definition: "乳齒在恆齒萌出後未能正常脫落而持續存在的情況，可導致咬合不正和牙周問題。",
    synonyms: ["滯留乳齒", "Persistent Deciduous Teeth", "Persistent Primary Teeth", "乳齒未脫"],
    epidemiology: {
      species: "犬較常見（尤其小型犬），貓較少見",
      age: "4-6月齡以上（正常換牙期）",
      sex: "無性別傾向",
      breed: "小型犬種（約克夏、玩具貴賓、吉娃娃、博美）",
      riskFactors: ["小型犬品種", "遺傳傾向"]
    },
    clinicalPresentation: {
      history: ["飼主注意到「雙排牙」", "可能無症狀", "口臭"],
      physicalExam: ["乳齒和恆齒同時存在（同一位置）", "最常見於犬齒", "牙齒擁擠", "恆齒錯位", "牙齒間食物殘渣堆積", "早期牙周病徵象"]
    },
    pathophysiology: "正常情況：恆齒萌出 → 乳齒牙根吸收 → 乳齒脫落。異常：乳齒牙根未完全吸收 → 乳齒持續存在 → 恆齒被迫在異常位置萌出 → 咬合不正、牙齒擁擠、食物堆積 → 牙周病",
    diagnosis: {
      overview: "臨床檢查即可診斷，X光確認牙根狀態",
      differentials: ["額外牙（多生牙）", "正常換牙過程中"],
      initialDB: ["口腔檢查", "牙科X光（確認乳齒牙根存在）"],
      advanced: ["不需要進階檢查"]
    },
    treatment: {
      overview: "及早拔除殘留乳齒是治療原則",
      acute: [
        "手術拔除殘留乳齒：",
        "- 必須完整移除整個乳齒牙根",
        "- 避免損傷鄰近恆齒牙根",
        "- 小心操作，乳齒牙根細長易斷",
        "最佳時機：發現即拔除，最好在絕育手術時一併處理",
        "「7-7-7規則」：",
        "- 7月齡以上同位置乳齒恆齒並存超過7天就該拔"
      ],
      chronic: [
        "若已造成恆齒錯位：可能需矯正",
        "已有牙周病：同時治療牙周病"
      ]
    },
    prognosis: "及早拔除預後極佳，恆齒通常會移動到正確位置。延遲治療可能導致永久性咬合不正和牙周病。",
    pearls: [
      "「同一位置不該有兩顆牙」",
      "小型犬絕育術前一定要檢查是否有殘留乳齒",
      "乳齒犬齒最常殘留",
      "完整拔除牙根很重要 - 殘留牙根會導致問題",
      "早拔比晚拔好 - 越早拔恆齒位置越正常"
    ],
    monitoring: ["恆齒位置", "咬合發育", "牙周健康"],
    reference: "Holmstrom SE: Veterinary Dentistry: A Team Approach, 3rd Ed. Saunders, 2019; Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "enamel-hypoplasia": {
    zh: "牙釉質發育不全",
    en: "Enamel Hypoplasia",
    definition: "牙釉質在發育期間形成不完全或異常，導致牙齒表面缺陷、變色和敏感。",
    synonyms: ["牙釉質發育不良", "Enamel Defects", "Enamel Dysplasia", "牙釉質缺損"],
    epidemiology: {
      species: "犬貓皆可見",
      age: "幼年發育期受影響，終生可見",
      sex: "無性別傾向",
      riskFactors: ["幼年時高燒（犬瘟熱）", "營養不良", "創傷（發育期牙胚）", "某些藥物（四環素）", "遺傳因素"]
    },
    clinicalPresentation: {
      history: ["牙齒表面粗糙或凹陷", "牙齒變色（棕/黃）", "可能有幼年疾病史", "牙齒敏感", "容易堆積牙菌斑"],
      physicalExam: ["牙齒表面凹陷、坑洞或缺損", "牙釉質變薄或缺失", "牙齒變色", "暴露的牙本質", "多顆牙齒對稱受影響（全身性原因）", "單顆牙齒受影響（局部創傷）"]
    },
    pathophysiology: "牙釉質形成（成釉細胞功能）在發育期間受干擾 → 牙釉質厚度減少、結構異常或完全缺失 → 暴露的牙本質 → 敏感、容易磨耗、容易蛀牙和感染",
    diagnosis: {
      overview: "臨床檢查評估牙釉質缺陷範圍和程度",
      differentials: ["牙齒磨耗", "牙齒斷裂", "牙齒吸收", "蛀牙"],
      initialDB: ["口腔檢查", "牙科X光（評估牙髓狀態）"],
      advanced: ["組織病理學（少需要）"]
    },
    treatment: {
      overview: "保護暴露的牙本質，預防併發症",
      acute: [
        "輕度病例：",
        "- 牙本質封閉劑/黏著劑保護",
        "- 氟化物應用",
        "- 加強口腔衛生",
        "中度病例：",
        "- 樹脂修復覆蓋缺陷",
        "- 牙冠（重要功能牙）",
        "嚴重病例伴牙髓暴露或感染：",
        "- 根管治療",
        "- 拔牙"
      ],
      chronic: [
        "定期口腔檢查和專業清潔",
        "居家口腔護理（刷牙、抗菌漱口水）",
        "避免硬食和咀嚼硬物"
      ]
    },
    prognosis: "輕度病例良好管理下預後好。嚴重病例可能需要多次治療或拔牙。",
    pearls: [
      "犬瘟熱是犬牙釉質發育不全的經典原因（「distemper teeth」）",
      "受影響牙齒的發育時間可回推疾病發生時間",
      "對稱性多顆牙受影響提示全身性原因",
      "單顆牙受影響提示局部創傷",
      "這些牙齒需要更積極的預防性護理"
    ],
    monitoring: ["牙齒敏感度", "繼發感染", "修復物完整性", "牙髓狀態"],
    reference: "Holmstrom SE: Veterinary Dentistry: A Team Approach, 3rd Ed. Saunders, 2019; Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "oral-tumor": {
    zh: "口腔腫瘤",
    en: "Oral Tumor",
    definition: "發生於口腔組織（牙齦、舌頭、硬顎、軟顎、扁桃腺）的腫瘤性病變，包括良性和惡性腫瘤。",
    synonyms: ["口腔癌", "Oral Cancer", "Oral Neoplasia", "口腔新生物"],
    epidemiology: {
      species: "犬貓皆可見，犬更常見",
      age: "中老年動物多見",
      sex: "公犬某些腫瘤較多",
      breed: "大型犬、深色皮膚品種（黑色素瘤）、可卡犬（乳突瘤）",
      commonTypes: {
        dog: ["惡性黑色素瘤", "鱗狀細胞癌", "纖維肉瘤", "棘皮瘤", "齒齦瘤(Epulis)"],
        cat: ["鱗狀細胞癌（最常見）", "纖維肉瘤"]
      }
    },
    clinicalPresentation: {
      history: ["口腔腫塊", "口臭加重", "流涎（可能帶血）", "進食困難", "體重減輕", "臉部腫脹或不對稱", "牙齒鬆動"],
      physicalExam: ["口腔可見腫塊", "潰瘍性或增生性病變", "出血", "牙齒鬆動或移位", "骨骼破壞", "淋巴結腫大", "臉部不對稱"]
    },
    pathophysiology: "取決於腫瘤類型。惡性腫瘤特徵為局部侵襲性（骨骼破壞）和可能的遠處轉移（黑色素瘤高度轉移性）",
    diagnosis: {
      overview: "組織病理學確診，影像學評估範圍和轉移",
      differentials: ["齒齦瘤(良性)", "牙齦增生", "嗜酸性肉芽腫", "感染性肉芽腫", "牙根膿瘍"],
      initialDB: ["口腔檢查", "組織切片/細針抽吸細胞學", "區域淋巴結評估"],
      advanced: ["頭顱X光或CT（評估骨骼侵犯）", "胸腔X光（轉移篩檢）", "腹部超聲", "全身CT"]
    },
    treatment: {
      overview: "根據腫瘤類型和分期決定，常需要多模式治療",
      acute: [
        "手術切除（首選）：",
        "- 需要寬邊界切除（1-2 cm）",
        "- 可能需要部分顎骨切除術",
        "- 邊界乾淨是預後關鍵",
        "放射治療：",
        "- 輔助治療或姑息治療",
        "- 對鱗狀細胞癌和黑色素瘤有效",
        "化學治療：",
        "- 某些腫瘤類型有效",
        "- Carboplatin, Doxorubicin等",
        "黑色素瘤疫苗（犬）：Oncept"
      ],
      chronic: [
        "疼痛管理",
        "營養支持（可能需要餵管）",
        "定期追蹤復發和轉移"
      ]
    },
    prognosis: {
      melanoma: "惡性黑色素瘤：高度惡性，易轉移。手術+放療+疫苗中位生存期可達12-18個月",
      scc_dog: "犬鱗狀細胞癌：局部侵襲性強但轉移率較低。完整切除預後較好",
      scc_cat: "貓鱗狀細胞癌：預後差，中位生存期2-4個月。常位於舌下難以完整切除",
      fibrosarcoma: "纖維肉瘤：局部侵襲性強，需積極寬邊界切除",
      epulis: "齒齦瘤：多為良性，完整切除預後極佳"
    },
    pearls: [
      "口腔腫塊一定要切片！視診無法區分良惡性",
      "貓口腔腫瘤幾乎都是惡性",
      "犬惡性黑色素瘤是口腔最常見的惡性腫瘤",
      "CT比X光更能評估骨骼侵犯範圍",
      "早期發現和寬邊界切除是最佳治療策略"
    ],
    monitoring: ["定期口腔檢查", "區域淋巴結", "胸腔X光（轉移）", "局部復發徵象"],
    reference: "Withrow SJ, Vail DM: Withrow and MacEwen's Small Animal Clinical Oncology, 5th Ed. Saunders, 2013; Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "epulis": {
    zh: "齒齦瘤",
    en: "Epulis",
    definition: "起源於牙周韌帶的牙齦腫塊，大多為良性，是犬最常見的口腔腫塊。",
    synonyms: ["牙齦瘤", "Gingival Epulis", "Peripheral Odontogenic Fibroma", "周邊牙源性纖維瘤"],
    epidemiology: {
      species: "犬常見，貓罕見",
      age: "中老年犬多見",
      sex: "無明確性別傾向",
      breed: "拳師犬、牛頭犬較常見",
      riskFactors: ["品種傾向"]
    },
    clinicalPresentation: {
      history: ["牙齦腫塊", "可能無症狀", "出血（若有創傷）", "進食困難（若腫塊大）"],
      physicalExam: ["牙齦上光滑、堅實的腫塊", "顏色與正常牙齦相近", "通常無潰瘍", "可能導致牙齒移位", "通常單發"]
    },
    pathophysiology: "起源於牙周韌帶的細胞。傳統分類：纖維性(fibromatous)、骨性(ossifying)、棘皮性(acanthomatous)。新分類將棘皮性齒齦瘤歸類為「棘皮瘤性成釉細胞瘤」",
    diagnosis: {
      overview: "臨床懷疑需組織病理學確診和分類",
      differentials: ["惡性口腔腫瘤（黑色素瘤、鱗狀細胞癌、纖維肉瘤）", "牙齦增生", "肉芽腫"],
      initialDB: ["口腔檢查", "組織切片"],
      advanced: ["牙科X光或CT（評估骨骼侵犯，尤其棘皮性）"]
    },
    types: {
      peripheral_odontogenic_fibroma: "周邊牙源性纖維瘤（纖維性/骨性）：良性，局部切除通常足夠",
      acanthomatous_ameloblastoma: "棘皮瘤性成釉細胞瘤：局部侵襲性強，可破壞骨骼，需寬邊界切除"
    },
    treatment: {
      overview: "手術切除，切除範圍取決於類型",
      acute: [
        "周邊牙源性纖維瘤：",
        "- 局部切除含受影響牙齒",
        "- 邊界通常足夠",
        "- 復發率低",
        "棘皮瘤性成釉細胞瘤：",
        "- 需要寬邊界切除（至少1 cm）",
        "- 常需部分顎骨切除術",
        "- 邊界不足易復發",
        "- 放射治療可作為輔助或替代"
      ],
      chronic: [
        "定期追蹤復發",
        "棘皮瘤性需更密切監測"
      ]
    },
    prognosis: "周邊牙源性纖維瘤：完整切除後預後極佳，很少復發。棘皮瘤性成釉細胞瘤：寬邊界切除預後好，邊界不足復發率高。不轉移。",
    pearls: [
      "雖然稱為「良性」，棘皮瘤性會破壞骨骼，必須積極治療",
      "切片很重要 - 外觀無法區分類型",
      "X光/CT可顯示棘皮瘤性的骨破壞",
      "拳師犬特別容易長齒齦瘤",
      "與惡性腫瘤不同，齒齦瘤不會轉移"
    ],
    monitoring: ["局部復發", "鄰近牙齒狀態", "骨骼變化"],
    reference: "Holmstrom SE: Veterinary Dentistry: A Team Approach, 3rd Ed. Saunders, 2019; Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "oral-papilloma": {
    zh: "口腔乳突瘤",
    en: "Oral Papilloma",
    definition: "由犬乳突瘤病毒(CPV)引起的良性口腔腫瘤，特徵為多發性菜花狀增生，常見於幼犬。",
    synonyms: ["口腔疣", "Oral Warts", "Canine Oral Papillomatosis", "犬口腔乳突瘤病", "Viral Papilloma"],
    epidemiology: {
      species: "犬為主（病毒種特異性），貓非常罕見",
      age: "幼犬和年輕犬（<2歲）最常見",
      sex: "無性別傾向",
      riskFactors: ["免疫系統未成熟", "免疫抑制", "與感染犬接觸"]
    },
    clinicalPresentation: {
      history: ["口腔內多發腫塊", "突然出現", "可能快速增生", "通常無症狀", "偶有進食困難或流涎"],
      physicalExam: ["多發性菜花狀/疣狀腫塊", "白色到粉紅色", "表面粗糙", "常見於唇、牙齦、舌頭", "偶見於咽喉、食道", "一般無疼痛"]
    },
    pathophysiology: "犬乳突瘤病毒(CPV)感染 → 口腔黏膜上皮細胞增生 → 典型菜花狀乳突瘤形成 → 免疫系統產生反應 → 通常1-5個月內自發消退",
    diagnosis: {
      overview: "典型臨床表現通常足以診斷",
      differentials: ["鱗狀細胞癌（老年動物）", "纖維瘤", "齒齦瘤"],
      initialDB: ["臨床檢查（特徵性外觀）"],
      advanced: ["組織病理學（非典型病例）", "免疫組織化學", "PCR（確認病毒）"]
    },
    treatment: {
      overview: "大多數病例會自發消退，不需治療",
      acute: [
        "觀察等待（首選）：",
        "- 大多數1-5個月內自發消退",
        "- 免疫系統產生保護性抗體",
        "干預指征（嚴重病例）：",
        "- 數量極多影響進食",
        "- 持續超過3-4個月不消退",
        "- 免疫抑制動物",
        "治療選項：",
        "- 手術切除（可能刺激免疫反應）",
        "- 冷凍治療",
        "- 電灼",
        "- 自體疫苗（爭議）",
        "- Interferon（免疫抑制病例）",
        "- Imiquimod（局部免疫調節）"
      ],
      chronic: [
        "消退後通常產生終生免疫"
      ]
    },
    prognosis: "免疫正常動物預後極佳，幾乎100%會自發消退。免疫抑制動物可能持續或惡變（罕見）。",
    pearls: [
      "「看起來可怕但通常會自己好」",
      "具傳染性 - 建議與其他幼犬隔離",
      "潛伏期1-2個月",
      "切除一個病灶有時會加速其他病灶消退",
      "老年犬的單發口腔乳突瘤要小心 - 可能是鱗狀細胞癌",
      "消退後具終生免疫"
    ],
    monitoring: ["腫塊消退進展", "進食能力", "是否有新病灶"],
    reference: "Holmstrom SE: Veterinary Dentistry: A Team Approach, 3rd Ed. Saunders, 2019; Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "cleft-palate": {
    zh: "顎裂",
    en: "Cleft Palate",
    definition: "先天性顎部發育缺陷，硬顎和/或軟顎中線未能完全閉合，導致口腔與鼻腔相通。",
    synonyms: ["裂顎", "Palatoschisis", "原發性顎裂", "繼發性顎裂", "唇裂（Cleft Lip）"],
    epidemiology: {
      species: "犬貓皆可見",
      age: "先天性，出生即可見",
      sex: "無性別傾向",
      breed: "短頭犬種（鬥牛犬、波士頓梗、拳師犬）、貴賓犬、臘腸犬、暹羅貓",
      riskFactors: ["遺傳因素", "懷孕期間營養缺乏（葉酸）", "藥物暴露（類固醇、某些抗癲癇藥）", "病毒感染"]
    },
    clinicalPresentation: {
      history: ["新生兒吸吮困難", "奶從鼻孔流出", "反覆吸入性肺炎", "生長遲緩", "咳嗽、打噴嚏（進食時）"],
      physicalExam: ["硬顎和/或軟顎可見裂隙", "唇裂（可能伴隨）", "鼻腔分泌物", "肺炎徵象", "發育不良"]
    },
    pathophysiology: "胚胎發育第25-28天顎板未能融合 → 口腔與鼻腔相通 → 吸吮時奶/食物進入鼻腔 → 吸入性肺炎風險 → 營養不良和感染",
    diagnosis: {
      overview: "出生後視診即可診斷",
      differentials: ["後天性口鼻瘻管（創傷、腫瘤、牙周病）", "其他先天性缺陷"],
      initialDB: ["口腔檢查", "胸腔X光（吸入性肺炎）"],
      advanced: ["CT（評估缺陷範圍）", "評估其他先天性異常"]
    },
    treatment: {
      overview: "手術修復是唯一根治方法，但需等待至足夠大",
      acute: [
        "支持性照護（幼年期）：",
        "- 管餵（胃管或食道餵管）避免吸入",
        "- 治療吸入性肺炎",
        "- 營養支持促進生長",
        "手術修復：",
        "- 等待至8-12週齡以上（組織夠大）",
        "- 黏膜皮瓣修復術",
        "- 可能需要多次手術",
        "- 軟顎裂較硬顎裂難修復"
      ],
      chronic: [
        "術後追蹤檢查癒合",
        "營養管理",
        "不建議繁殖"
      ]
    },
    prognosis: "輕度缺陷手術修復後預後良好。嚴重缺陷或多次手術失敗預後謹慎。吸入性肺炎是主要死因。有些嚴重病例選擇安樂死。",
    pearls: [
      "所有新生兒都應檢查有無顎裂",
      "「奶從鼻子出來」是經典警訊",
      "管餵是手術前的生命線",
      "太早手術組織太薄易失敗",
      "這是遺傳性疾病 - 絕對不繁殖",
      "手術成功需要良好的組織處理和無張力縫合"
    ],
    monitoring: ["體重增長", "呼吸狀態", "手術傷口癒合", "復發（裂開）"],
    reference: "Holmstrom SE: Veterinary Dentistry: A Team Approach, 3rd Ed. Saunders, 2019; Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "jaw-fracture": {
    zh: "顎骨骨折",
    en: "Jaw Fracture",
    definition: "下顎骨或上顎骨的骨折，常由創傷引起，也可能是病理性骨折（腫瘤、牙周病）。",
    synonyms: ["下顎骨折", "Mandibular Fracture", "上顎骨折", "Maxillary Fracture", "顎骨斷裂"],
    epidemiology: {
      species: "犬貓皆可見",
      age: "任何年齡，年輕動物多創傷性，老年動物需考慮病理性",
      sex: "無性別傾向（創傷較常見於公動物）",
      riskFactors: ["創傷（車禍、墜落、打架）", "嚴重牙周病（病理性骨折）", "口腔腫瘤", "骨質疏鬆"]
    },
    clinicalPresentation: {
      history: ["創傷史", "無法閉合嘴巴", "流涎", "拒絕進食", "臉部腫脹或不對稱", "出血"],
      physicalExam: ["臉部腫脹/不對稱", "咬合不正", "異常活動度", "骨摩擦感", "口腔出血", "牙齒鬆動或移位", "疼痛", "可能有其他創傷"]
    },
    pathophysiology: "外力超過骨骼強度 → 骨折。創傷性：直接撞擊或間接力傳導。病理性：骨骼已被疾病（腫瘤、嚴重牙周病）弱化 → 輕微外力即可骨折",
    diagnosis: {
      overview: "影像學確診骨折類型和位置",
      differentials: ["顳顎關節脫位", "軟組織損傷", "其他頭部創傷"],
      initialDB: ["口腔檢查（小心處理）", "頭顱X光（多角度）", "牙科X光"],
      advanced: ["CT（複雜骨折）", "評估潛在病理性原因"]
    },
    treatment: {
      overview: "穩定骨折、恢復咬合功能。方法取決於骨折類型和位置",
      acute: [
        "初步穩定和疼痛管理",
        "非手術治療（穩定、簡單骨折）：",
        "- 膠帶嘴套（tape muzzle）",
        "- 跨弓連接（interdental wiring）",
        "手術固定（不穩定、複雜骨折）：",
        "- 鋼絲固定",
        "- 骨板和螺絲",
        "- 外固定架",
        "- 丙烯酸夾板",
        "下顎聯合分離：環扎鋼絲（cerclage）",
        "抗生素（開放性骨折）",
        "疼痛管理：Opioids + NSAIDs"
      ],
      chronic: [
        "軟食飲食4-6週",
        "口腔衛生維護",
        "定期X光追蹤癒合"
      ]
    },
    prognosis: "簡單骨折良好固定後預後良好。病理性骨折取決於潛在疾病。嚴重粉碎性骨折或感染預後謹慎。",
    pearls: [
      "「恢復咬合比完美解剖復位更重要」",
      "貓下顎聯合常見分離而非真正骨折",
      "老年小型犬的病理性骨折常因嚴重牙周病",
      "開放性骨折（口腔內）需要抗生素",
      "過多的內固定物可能損害血供"
    ],
    monitoring: ["癒合進度（X光）", "咬合功能", "感染徵象", "進食能力"],
    reference: "Holmstrom SE: Veterinary Dentistry: A Team Approach, 3rd Ed. Saunders, 2019; Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "temporomandibular-joint-disorder": {
    zh: "顳顎關節疾病",
    en: "Temporomandibular Joint Disorder (TMJ)",
    definition: "影響顳顎關節（連接下顎與顱骨的關節）的疾病，包括脫位、骨折、關節炎、發育異常等。",
    synonyms: ["TMJ Disorder", "TMJ Disease", "顳下顎關節疾病", "TMD", "下顎關節問題"],
    epidemiology: {
      species: "犬貓皆可見",
      age: "依病因而異",
      sex: "無性別傾向",
      breed: "愛爾蘭雪達犬、巴吉度獵犬（發育異常）",
      riskFactors: ["創傷", "關節炎", "發育異常", "腫瘤", "感染"]
    },
    clinicalPresentation: {
      history: ["張嘴困難", "閉嘴困難", "進食時疼痛", "頭部傾斜", "咀嚼單側", "「喀喀」聲"],
      physicalExam: [
        "脫位：下顎偏移、無法閉合或張開",
        "骨折：疼痛、腫脹、異常活動度",
        "關節炎：張嘴受限、疼痛、骨摩擦感",
        "發育異常：開口受限、關節不對稱",
        "腫瘤：腫塊、變形"
      ]
    },
    pathophysiology: "創傷性脫位：關節囊撕裂，關節頭移位。骨關節炎：軟骨退化、骨刺形成。發育異常（如關節發育不全）：關節結構異常影響功能。顳顎關節強直：關節融合導致無法張嘴",
    diagnosis: {
      overview: "臨床檢查結合影像學",
      differentials: ["咀嚼肌炎", "三叉神經炎", "口腔腫瘤", "牙科疾病"],
      initialDB: ["神經學和口腔檢查", "麻醉下關節觸診和活動度評估", "頭顱X光"],
      advanced: ["CT（首選，細節評估）", "MRI（軟組織病變）", "關節液分析"]
    },
    treatment: {
      overview: "根據具體病因治療",
      acute: [
        "TMJ脫位（急性）：",
        "- 麻醉下閉合復位",
        "- 放置物體（如注射筒）於臼齒區輔助復位",
        "- 復位後可能需暫時限制張嘴（膠帶嘴套）",
        "TMJ骨折：",
        "- 保守治療或手術固定",
        "- 取決於骨折類型和移位程度",
        "疼痛管理：NSAIDs、Gabapentin"
      ],
      chronic: [
        "骨關節炎：",
        "- NSAIDs長期使用",
        "- 關節保護劑（Glucosamine、Chondroitin）",
        "- 軟食",
        "關節強直：",
        "- 手術切除關節（condylectomy）",
        "- 下顎聯合切開術（增加張口範圍）",
        "腫瘤：根據類型手術或放療"
      ]
    },
    prognosis: "急性脫位復位後預後良好。骨關節炎可管理但通常進展性。關節強直手術後可改善功能但可能復發。",
    pearls: [
      "貓TMJ脫位常是創傷後「下巴掉下來」",
      "無法張嘴（鎖顎）vs 無法閉嘴 - 鑑別診斷不同",
      "CT比X光更能評估TMJ結構",
      "慢性脫位可能無法完全復位",
      "雙側關節強直導致完全無法張嘴 - 需緊急處理"
    ],
    monitoring: ["關節活動度", "疼痛程度", "進食能力", "復發"],
    reference: "Holmstrom SE: Veterinary Dentistry: A Team Approach, 3rd Ed. Saunders, 2019; Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  },

  "masticatory-muscle-myositis": {
    zh: "咀嚼肌炎",
    en: "Masticatory Muscle Myositis (MMM)",
    definition: "咀嚼肌群（顳肌、咬肌）的免疫介導性炎症疾病，特徵為急性腫脹或慢性萎縮，導致張嘴困難。",
    synonyms: ["MMM", "咬肌炎", "Eosinophilic Myositis", "Atrophic Myositis", "顳肌炎"],
    epidemiology: {
      species: "犬為主，貓非常罕見",
      age: "年輕至中年犬（3歲平均）",
      sex: "無性別傾向",
      breed: "大型犬種（德國牧羊犬、黃金獵犬、拉不拉多、羅威納、杜賓犬）、騎士查理王小獵犬",
      riskFactors: ["遺傳傾向", "免疫因素"]
    },
    clinicalPresentation: {
      history: [
        "急性期：臉部腫脹、疼痛、無法張嘴、拒食",
        "慢性期：顳肌萎縮、張嘴受限",
        "可能反覆急性發作和緩解"
      ],
      physicalExam: [
        "急性：顳肌和咬肌腫脹、疼痛、眼球突出（肌肉腫脹壓迫）、發燒、淋巴結腫大",
        "慢性：顳肌嚴重萎縮（「骷髏頭」外觀）、張嘴受限（可能<1-2 cm）、咬合正常（與TMJ疾病鑑別）"
      ]
    },
    pathophysiology: "免疫系統針對咀嚼肌特有的2M肌纖維（type 2M myofibers）產生自身抗體 → 補體介導的肌肉炎症和壞死 → 急性腫脹和疼痛 → 反覆發作 → 肌肉纖維化和萎縮 → 永久性張嘴受限",
    diagnosis: {
      overview: "臨床表現結合2M抗體檢測確診",
      differentials: ["顳顎關節疾病", "多發性肌炎", "外傷性肌炎", "三叉神經病變", "咀嚼肌腫瘤", "破傷風"],
      initialDB: ["CK（急性期升高）", "2M抗體檢測（特異性診斷）", "CBC（可能有嗜酸性球增多）"],
      advanced: ["肌肉活檢（確診）", "MRI（評估肌肉病變）", "EMG"]
    },
    treatment: {
      overview: "免疫抑制治療，早期治療預防不可逆萎縮",
      acute: [
        "免疫抑制劑量類固醇：",
        "- Prednisolone/Prednisone: 1-2 mg/kg PO q12h",
        "- 維持4-6週後逐漸減量",
        "- 總療程通常需要4-6個月或更長",
        "嚴重病例可考慮：",
        "- Azathioprine 1-2 mg/kg PO q24-48h（與類固醇合用）",
        "- Mycophenolate",
        "營養支持（若無法進食）",
        "疼痛管理"
      ],
      chronic: [
        "長期低劑量類固醇維持（很多需要）",
        "最低有效劑量維持",
        "物理治療增加張嘴範圍（纖維化後效果有限）",
        "軟食飲食"
      ]
    },
    prognosis: "早期治療（肌肉萎縮前）預後良好，可完全恢復。延遲治療或已有纖維化：永久性張嘴受限。需長期免疫抑制治療。復發常見（約50%）。",
    pearls: [
      "「只影響咀嚼肌」- 四肢肌肉不受影響",
      "2M抗體檢測是診斷金標準",
      "急性腫脹期是治療黃金時期 - 延遲會導致纖維化",
      "張嘴受限但咬合正常 - 與TMJ疾病區別",
      "類固醇不能太早停 - 容易復發",
      "治療前做CK和2M抗體（類固醇會影響結果）"
    ],
    monitoring: ["張嘴範圍", "肌肉萎縮程度", "2M抗體效價", "類固醇副作用", "復發徵象"],
    reference: "Melmed C, et al: Masticatory Muscle Myositis: Retrospective Study. J Vet Intern Med 2004; Cote E: Clinical Veterinary Advisor, 2nd Ed. Mosby, 2011"
  }
};

// 匯出供整合使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DENTAL_DISEASES;
}

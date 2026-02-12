// ======= 腫瘤疾病 DISEASE_INFO =======
// Oncological Diseases
// 資料來源：Withrow and MacEwen's Small Animal Clinical Oncology, 6th Ed.
// Clinical Veterinary Advisor: Dogs and Cats, 2nd Ed. (Etienne Côté)

const ONCOLOGICAL_DISEASES = {
  "mast-cell-tumor": {
    zh: "肥大細胞瘤",
    en: "Mast Cell Tumor (MCT)",
    definition: "源自肥大細胞的惡性腫瘤，是犬最常見的皮膚腫瘤，貓則以內臟型和皮膚型較常見。腫瘤細胞含有組織胺、肝素等生物活性物質，可導致局部和全身性併發症。",
    synonyms: ["MCT", "Mastocytoma", "肥大細胞腫瘤", "組織胺肉瘤"],
    epidemiology: {
      species: "犬最常見，貓也可發生",
      age: "犬：平均8-9歲；貓：平均10歲",
      sex: "無明顯性別傾向",
      breed: "高風險犬種：拳師犬、波士頓梗、拉布拉多、黃金獵犬、巴哥、比格犬、雪納瑞",
      riskFactors: ["品種傾向", "慢性皮膚炎症", "c-KIT基因突變"]
    },
    clinicalPresentation: {
      history: ["皮膚腫塊（可能存在數月至數年）", "腫塊大小變化（Darier徵象）", "胃腸道症狀（嘔吐、黑便）", "全身性症狀（嗜睡、食慾下降）"],
      physicalExam: ["單一或多發皮膚/皮下腫塊", "外觀多變（從小結節到大腫塊）", "可能有紅腫或潰瘍", "周圍組織水腫", "區域淋巴結腫大", "脾腫大或肝腫大（轉移時）"]
    },
    pathophysiology: "肥大細胞增生失控 → 釋放生物活性介質（組織胺、肝素、前列腺素、細胞激素）→ 局部效應：紅腫、潰瘍、Darier徵象；全身效應：胃酸過多、胃潰瘍、凝血異常、低血壓、過敏樣反應",
    diagnosis: {
      overview: "細針穿刺細胞學常可確診，組織病理學提供分級資訊",
      differentials: ["其他皮膚腫瘤", "脂肪瘤", "組織球瘤", "皮膚感染"],
      initialDB: ["細針穿刺細胞學（高度診斷性）", "腫塊切除生檢", "區域淋巴結穿刺", "腹部超聲（肝脾）"],
      advanced: ["組織病理學分級（Patnaik或Kiupel系統）", "c-KIT突變檢測", "Ki-67增殖指數", "AgNOR計數", "骨髓穿刺（高風險病例）"],
      staging: [
        "第一期：單一腫瘤，限於皮膚，無區域淋巴結轉移",
        "第二期：單一腫瘤，限於皮膚，有區域淋巴結轉移",
        "第三期：多發皮膚腫瘤或大型浸潤性腫瘤，有或無淋巴結轉移",
        "第四期：遠處轉移或全身性肥大細胞增生症"
      ]
    },
    treatment: {
      overview: "治療取決於分級、分期和位置。低分級腫瘤手術切除可能治癒，高分級需多模式治療",
      surgical: [
        "首選治療（低/中分級）",
        "寬邊緣切除：側邊2-3公分，深層一個筋膜面",
        "完整切除邊緣清晰者預後良好",
        "不完整切除考慮再切除或輔助治療"
      ],
      medical: [
        "H1受體拮抗劑：Diphenhydramine 2-4 mg/kg PO q8-12h",
        "H2受體拮抗劑：Famotidine 0.5-1 mg/kg PO q12-24h",
        "胃黏膜保護：Sucralfate 0.5-1 g PO q8h（犬）",
        "化療（高分級或轉移）：",
        "- Vinblastine: 2 mg/m² IV 每週或隔週",
        "- Lomustine (CCNU): 60-90 mg/m² PO q3週",
        "- Prednisone: 1-2 mg/kg PO q24h（輔助或緩和）",
        "標靶治療（c-KIT突變陽性）：",
        "- Toceranib (Palladia): 2.5-2.75 mg/kg PO 隔日",
        "- Masitinib: 12.5 mg/kg PO q24h"
      ],
      radiation: ["術後輔助放療（邊緣不清或不完整切除）", "緩和性放療（不可手術病例）"]
    },
    prognosis: "低分級（Kiupel）/第I級（Patnaik）：手術切除後預後良好，中位生存>2年。高分級/第III級：預後謹慎至差，中位生存4-6個月。c-KIT突變陽性者對標靶治療反應較好。",
    pearls: [
      "「肥大細胞瘤是偉大的模仿者」- 外觀變化多端",
      "Darier徵象：觸摸或操作腫塊後紅腫（組織胺釋放）",
      "手術前後給予H1/H2拮抗劑減少組織胺效應",
      "細針穿刺時要溫柔，避免大量脫顆粒",
      "貓的皮膚型MCT通常行為較良性"
    ],
    monitoring: ["定期身體檢查", "區域淋巴結評估", "腹部超聲（肝脾）", "若化療：CBC每2-3週"],
    reference: "Withrow SW: Small Animal Clinical Oncology, 6th Ed. 2020; Côté E: Clinical Veterinary Advisor, 2nd Ed. 2011"
  },

  "hemangiosarcoma": {
    zh: "血管肉瘤",
    en: "Hemangiosarcoma (HSA)",
    definition: "源自血管內皮細胞的高度惡性腫瘤，具有極高的轉移率。最常見於脾臟、右心房和皮下組織。",
    synonyms: ["HSA", "Angiosarcoma", "血管內皮肉瘤", "惡性血管內皮瘤"],
    epidemiology: {
      species: "犬常見，貓罕見",
      age: "犬：平均9-11歲",
      sex: "公犬略多",
      breed: "高風險：德國牧羊犬、黃金獵犬、拉布拉多、扁臉犬種",
      riskFactors: ["品種傾向", "年齡", "日曬（皮膚型）"]
    },
    clinicalPresentation: {
      history: ["急性虛弱或倒地（脾臟破裂）", "腹部膨大", "運動不耐", "呼吸困難（心臟型）", "皮膚腫塊（皮膚型）", "間歇性症狀"],
      physicalExam: ["黏膜蒼白", "心搏過速", "脈搏弱", "腹部膨脹或疼痛", "可觸及腹部腫塊", "心音低沉（心包積液）", "皮膚或皮下腫塊"]
    },
    pathophysiology: "腫瘤源自血管內皮 → 形成異常血管腔 → 血管脆弱易破裂 → 急性出血（脾臟型最常見）。高度轉移性：確診時85%以上已有微轉移，常見轉移部位：肝、肺、心臟、大網膜、腦",
    diagnosis: {
      overview: "影像學結合細胞學/組織學確診，但出血風險需謹慎",
      differentials: ["脾臟血腫", "脾臟結節性增生", "其他脾臟腫瘤", "心臟腫瘤", "皮膚血管瘤"],
      initialDB: ["CBC（可能貧血、血小板減少）", "生化", "凝血功能", "腹部超聲", "AFAST", "胸腔X光"],
      advanced: ["心臟超聲", "腹部CT", "細胞學（謹慎，出血風險）", "組織病理學確診", "免疫組織化學（CD31、Factor VIII）"]
    },
    treatment: {
      overview: "手術切除原發腫瘤後輔以化療，但預後仍謹慎",
      surgical: [
        "脾臟切除術（脾臟型）",
        "右心房腫瘤切除（心臟型，技術要求高）",
        "皮膚腫瘤廣泛切除",
        "術中控制出血是關鍵"
      ],
      medical: [
        "術前穩定：輸液、必要時輸血",
        "輔助化療：",
        "- DOX方案：Doxorubicin 30 mg/m² IV q3週（5-6次）",
        "- VAC方案：Vincristine + Doxorubicin + Cyclophosphamide",
        "節拍化療：",
        "- 低劑量Cyclophosphamide 10-15 mg/m² PO q24h",
        "- Piroxicam 0.3 mg/kg PO q48h",
        "I'm-Yunity (PSP蘑菇多醣): 100 mg/kg PO q24h（可能延長生存）"
      ],
      supportive: ["心包穿刺（心包積液）", "輸血（急性出血）", "疼痛管理"]
    },
    prognosis: "整體預後差。脾臟型單獨手術：中位生存19-86天。手術+化療：中位生存約140-180天，1年存活率約10%。皮膚型（真皮層）預後較好。心臟型預後最差。",
    pearls: [
      "「2/3法則」：2/3的脾臟腫塊是惡性，其中2/3是血管肉瘤",
      "急性腹腔出血+脾臟腫塊=高度懷疑HSA",
      "確診時絕大多數已有微轉移",
      "心包積液+心臟腫塊=首先考慮HSA或心臟基底腫瘤",
      "皮膚型需區分真皮層（較良性）和皮下/肌肉層（惡性）"
    ],
    monitoring: ["定期胸腔X光和腹部超聲", "心臟超聲（心臟型）", "CBC監測貧血和血小板"],
    reference: "Withrow SW: Small Animal Clinical Oncology, 6th Ed. 2020"
  },

  "soft-tissue-sarcoma": {
    zh: "軟組織肉瘤",
    en: "Soft Tissue Sarcoma (STS)",
    definition: "源自間葉組織（結締組織、肌肉、脂肪、血管、神經鞘等）的惡性腫瘤統稱。包括纖維肉瘤、神經鞘瘤、脂肪肉瘤、平滑肌肉瘤等多種類型。",
    synonyms: ["STS", "間葉腫瘤", "Mesenchymal Tumor", "纖維肉瘤", "Fibrosarcoma"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "犬：平均9-10歲；貓：8-12歲",
      sex: "無明顯性別傾向",
      breed: "犬：大型犬較常見",
      riskFactors: ["注射部位（貓）", "創傷或異物", "放射線暴露"]
    },
    clinicalPresentation: {
      history: ["緩慢生長的皮下腫塊", "可能存在數月至數年", "近期快速增大"],
      physicalExam: ["皮下腫塊，通常堅實", "邊界可觸摸但實際延伸更廣", "可能與深層組織粘連", "表面可能潰瘍", "區域淋巴結通常正常"]
    },
    pathophysiology: "間葉細胞惡性轉化 → 局部浸潤性生長（沿筋膜面延伸）→ 假包膜形成（但腫瘤細胞可能超出）→ 遠處轉移率相對較低（15-40%）但高分級例外",
    diagnosis: {
      overview: "需要組織病理學確診和分級",
      differentials: ["脂肪瘤", "其他皮下腫瘤", "膿腫", "血清腫"],
      initialDB: ["細針穿刺細胞學（診斷率較低）", "楔形或切除生檢", "胸腔X光"],
      advanced: [
        "組織病理學分級（三級系統）：",
        "- 第I級：分化良好，低有絲分裂率，無壞死",
        "- 第II級：中分化",
        "- 第III級：分化差，高有絲分裂率，有壞死",
        "CT/MRI評估腫瘤範圍",
        "區域淋巴結穿刺"
      ]
    },
    treatment: {
      overview: "廣泛手術切除是關鍵，分級決定預後和輔助治療需求",
      surgical: [
        "廣泛切除：側邊3公分，深層至少一個筋膜面",
        "術前CT/MRI規劃手術範圍",
        "第一次手術是最佳治癒機會",
        "復發腫瘤切除更困難"
      ],
      medical: [
        "化療（高分級或轉移）：",
        "- Doxorubicin: 30 mg/m² IV q3週",
        "- Carboplatin: 300 mg/m² IV q3週",
        "- 節拍化療作為輔助選項"
      ],
      radiation: ["術後輔助放療（邊緣不清）", "術前放療（縮小腫瘤）", "緩和性放療"]
    },
    prognosis: "完整切除的低分級腫瘤：預後良好，局部復發率<10%。不完整切除：局部復發率高達50-70%。遠處轉移：與分級相關，第III級轉移率可達40%。",
    pearls: [
      "「你觸摸到的邊界不是真正的邊界」- 腫瘤沿筋膜面延伸",
      "第一次手術切除完整是最重要的預後因素",
      "細針穿刺常無法確診，需要組織生檢",
      "術前影像學評估腫瘤範圍很重要",
      "低分級腫瘤單獨廣泛手術可能治癒"
    ],
    monitoring: ["定期身體檢查（局部復發）", "胸腔X光（轉移）", "術後3、6、12個月評估"],
    reference: "Withrow SW: Small Animal Clinical Oncology, 6th Ed. 2020"
  },

  "squamous-cell-carcinoma": {
    zh: "鱗狀上皮細胞癌",
    en: "Squamous Cell Carcinoma (SCC)",
    definition: "源自鱗狀上皮的惡性腫瘤，可發生於皮膚、口腔、鼻腔、甲床、肺等多處。局部侵襲性強，轉移率因部位而異。",
    synonyms: ["SCC", "鱗癌", "表皮癌", "Epidermoid Carcinoma"],
    epidemiology: {
      species: "犬貓皆常見",
      age: "犬：平均9歲；貓：平均12歲",
      sex: "無明顯性別傾向",
      breed: "白毛或淺色犬貓（皮膚型）；大型犬和黑色犬（趾甲床型）",
      riskFactors: ["紫外線暴露", "缺乏色素沉著", "慢性炎症", "乳突狀瘤病毒感染（某些）"]
    },
    clinicalPresentation: {
      history: ["皮膚：長期不癒合的潰瘍", "口腔：流涎、進食困難、口臭", "鼻腔：鼻出血、打噴嚏、面部腫脹", "趾甲床：跛行、趾腫脹"],
      physicalExam: [
        "皮膚型：紅斑、潰瘍、結痂、菜花狀腫塊",
        "口腔型：牙齦或舌頭腫塊、牙齒鬆動、骨溶解",
        "鼻腔型：面部不對稱、鼻出血、鼻分泌物",
        "趾甲床型：趾腫脹、跛行、指甲脫落"
      ]
    },
    pathophysiology: "鱗狀上皮細胞惡性轉化 → 局部浸潤性生長 → 可能破壞周圍骨骼 → 區域淋巴結轉移（口腔型較常見）→ 遠處轉移（皮膚型較少，口腔和趾甲床型較多）",
    diagnosis: {
      overview: "組織病理學確診，影像學評估範圍和轉移",
      differentials: ["其他皮膚腫瘤", "口腔炎症性疾病", "骨肉瘤", "黑色素瘤"],
      initialDB: ["細胞學", "組織生檢", "區域淋巴結穿刺", "胸腔X光"],
      advanced: ["CT/MRI（評估骨侵蝕和腫瘤範圍）", "趾骨X光"]
    },
    treatment: {
      overview: "治療方式取決於部位和範圍，手術和放療是主要方法",
      surgical: [
        "皮膚型：廣泛切除（邊緣1-2公分）",
        "趾甲床型：截趾術",
        "口腔型：下頜骨切除或上頜骨切除",
        "鼻腔型：手術減積（非治癒性）"
      ],
      medical: [
        "化療效果有限：",
        "- Carboplatin: 300 mg/m² IV q3週",
        "- Piroxicam: 0.3 mg/kg PO q24-48h（可能有抗腫瘤活性）",
        "光動力療法（表淺病變）",
        "電化學療法（小型病變）"
      ],
      radiation: ["口腔SCC放療反應較好", "鼻腔SCC的主要治療", "術後輔助放療"]
    },
    prognosis: "皮膚型（非侵蝕性）：廣泛切除後預後良好。趾甲床型：截趾後1年存活率約50%，常有肺轉移。口腔型（犬）：中位生存約1年（手術+放療）。貓口腔SCC：預後差，中位生存2-4個月。",
    pearls: [
      "白貓耳朵和鼻子是皮膚SCC的好發部位",
      "貓口腔SCC是最常見的貓口腔腫瘤，預後很差",
      "趾甲床SCC：黑色犬種更常見，有肺轉移傾向",
      "慢性不癒合的皮膚潰瘍要考慮SCC",
      "早期發現和治療是關鍵"
    ],
    monitoring: ["定期身體檢查", "區域淋巴結評估", "胸腔X光（轉移監測）"],
    reference: "Withrow SW: Small Animal Clinical Oncology, 6th Ed. 2020"
  },

  "melanoma": {
    zh: "黑色素瘤",
    en: "Melanoma",
    definition: "源自黑色素細胞的腫瘤，可為良性（皮膚黑色素細胞瘤）或惡性（黑色素瘤）。口腔和甲床黑色素瘤在犬通常為高度惡性。",
    synonyms: ["Malignant Melanoma", "Melanocytoma（良性）", "惡性黑色素瘤"],
    epidemiology: {
      species: "犬常見，貓罕見",
      age: "犬：平均9-12歲",
      sex: "公犬略多（口腔型）",
      breed: "口腔型：可卡、貴賓、小型臘腸、迷你雪納瑞、黃金獵犬",
      riskFactors: ["口腔色素沉著區域", "品種傾向"]
    },
    clinicalPresentation: {
      history: ["口腔型：流涎、口臭、進食困難、面部腫脹", "趾甲床型：跛行、趾腫脹", "皮膚型：色素性或非色素性皮膚腫塊"],
      physicalExam: [
        "口腔型：牙齦或頰黏膜腫塊，常為深色但可無色素",
        "趾甲床型：趾腫脹，可能有指甲脫落",
        "皮膚型：通常色素沉著的隆起腫塊",
        "區域淋巴結腫大（轉移時）"
      ]
    },
    pathophysiology: "黑色素細胞惡性轉化 → 快速局部生長 → 高度轉移傾向（口腔和甲床型）→ 常見轉移部位：區域淋巴結、肺、肝、腎、腦",
    diagnosis: {
      overview: "組織病理學確診，分期對預後評估很重要",
      differentials: ["其他口腔腫瘤（SCC、纖維肉瘤）", "其他皮膚腫瘤", "肉芽腫"],
      initialDB: ["細胞學（可能見黑色素顆粒）", "組織生檢", "區域淋巴結穿刺", "胸腔X光"],
      advanced: ["CT（頭頸部和胸腔）", "腹部超聲", "免疫組織化學（Melan-A、S100）"]
    },
    treatment: {
      overview: "口腔和甲床型需積極多模式治療，皮膚型手術可能治癒",
      surgical: [
        "口腔型：下頜骨/上頜骨切除，追求清晰邊緣",
        "趾甲床型：截趾術或截肢",
        "皮膚型：廣泛切除（邊緣1-2公分）"
      ],
      medical: [
        "傳統化療效果有限：",
        "- Carboplatin: 300 mg/m² IV q3週",
        "犬黑色素瘤疫苗（Oncept®）：",
        "- 術後免疫治療",
        "- 0.4 mL 經皮注射，q2週 x 4次，之後q6個月加強"
      ],
      radiation: ["口腔黑色素瘤對放療有一定反應", "術後輔助或緩和性放療"]
    },
    prognosis: "口腔型：單獨手術中位生存5-7個月，多模式治療可延長。第I期（<2cm）預後較好。甲床型：截趾後中位生存約12個月，50%有肺轉移。皮膚型：良性多於惡性，手術切除後預後良好。",
    pearls: [
      "口腔黑色素瘤是犬最常見的口腔惡性腫瘤",
      "約1/3的口腔黑色素瘤缺乏色素（無色素型）",
      "腫瘤大小是重要預後因子：<2cm較好",
      "黑色素瘤疫苗是第一個獲FDA批准的犬腫瘤疫苗",
      "皮膚黑色素瘤在犬多為良性，但口腔和甲床型幾乎都是惡性"
    ],
    monitoring: ["每2-3個月身體檢查", "區域淋巴結評估", "胸腔X光", "腹部超聲"],
    reference: "Withrow SW: Small Animal Clinical Oncology, 6th Ed. 2020"
  },

  "mammary-tumor": {
    zh: "乳腺腫瘤",
    en: "Mammary Tumor",
    definition: "源自乳腺組織的腫瘤，是未絕育母犬最常見的腫瘤，貓的乳腺腫瘤則多為惡性。",
    synonyms: ["Mammary Gland Tumor", "乳腺癌", "Mammary Carcinoma", "乳房腫瘤"],
    epidemiology: {
      species: "母犬和母貓，偶見公犬貓",
      age: "犬：平均10-11歲；貓：平均10-12歲",
      sex: "未絕育母畜為主，絕育大幅降低風險",
      breed: "犬：貴賓、可卡、德國牧羊犬、馬爾濟斯；貓：暹羅貓風險較高",
      riskFactors: ["未絕育", "晚期絕育", "外源性荷爾蒙暴露", "肥胖", "假懷孕"]
    },
    clinicalPresentation: {
      history: ["乳腺區腫塊", "乳頭分泌物", "潰瘍或發炎", "快速增大", "多發腫塊"],
      physicalExam: ["乳腺鏈上單一或多發腫塊", "腫塊大小不等", "可能與皮膚或深層組織粘連", "區域淋巴結（腋下、腹股溝）腫大", "炎症性乳癌：紅腫、疼痛、水腫"]
    },
    pathophysiology: "荷爾蒙（雌激素、黃體素）刺激乳腺增生 → 基因突變累積 → 良性腫瘤或惡性轉化。犬約50%為良性；貓85-90%為惡性。惡性腫瘤可轉移至區域淋巴結和肺。",
    diagnosis: {
      overview: "組織病理學確診和分類，分期決定預後",
      differentials: ["乳腺增生", "乳腺炎", "其他皮下腫瘤"],
      initialDB: ["細針穿刺細胞學", "胸腔X光（3視圖）", "腹部超聲", "區域淋巴結穿刺"],
      advanced: ["組織病理學（確診和分類）", "荷爾蒙受體檢測", "HER2狀態", "CT分期"]
    },
    treatment: {
      overview: "手術切除是主要治療，化療用於惡性和轉移病例",
      surgical: [
        "乳房切除術選項：",
        "- 腫塊切除術（<0.5cm良性）",
        "- 單側乳腺切除術（同側多發腫塊）",
        "- 區域乳腺切除術",
        "- 雙側乳腺切除術（雙側多發）",
        "同時絕育（若未絕育）",
        "淋巴結切除（若可觸及或轉移）"
      ],
      medical: [
        "化療（惡性、淋巴結轉移或分化差）：",
        "- Doxorubicin: 30 mg/m² IV q3週",
        "- Carboplatin: 300 mg/m² IV q3週",
        "- 5-FU: 150 mg/m² IV 每週（禁用於貓）",
        "抗雌激素藥物效果不確定"
      ],
      radiation: ["局部復發的緩和性放療", "炎症性乳癌（預後仍差）"]
    },
    prognosis: "犬：良性腫瘤手術後治癒；惡性腫瘤2年存活率約25-50%。腫瘤大小是重要預後因子：<3cm較好。貓：預後較差，中位生存約1年（<2cm）至6個月（>3cm）。炎症性乳癌：預後極差。",
    pearls: [
      "絕育時機影響風險：初次發情前絕育風險降低99.5%",
      "犬乳腺腫瘤約50%良性，貓約90%惡性",
      "腫瘤大小是犬最重要的預後因子",
      "炎症性乳癌預後極差，需與乳腺炎鑑別",
      "檢查時要評估整個乳腺鏈和兩側淋巴結"
    ],
    monitoring: ["每2-3個月身體檢查", "胸腔X光", "新腫塊評估"],
    reference: "Withrow SW: Small Animal Clinical Oncology, 6th Ed. 2020"
  },

  "hepatocellular-carcinoma": {
    zh: "肝細胞癌",
    en: "Hepatocellular Carcinoma (HCC)",
    definition: "源自肝細胞的原發性惡性肝臟腫瘤，是犬最常見的原發性肝臟惡性腫瘤。可呈巨大型、結節型或彌漫型。",
    synonyms: ["HCC", "肝癌", "Hepatoma", "原發性肝癌"],
    epidemiology: {
      species: "犬較貓常見",
      age: "犬：平均10-11歲",
      sex: "公犬略多",
      breed: "無明顯品種傾向",
      riskFactors: ["年齡", "某些毒素暴露", "慢性肝病（人類，犬少見相關性）"]
    },
    clinicalPresentation: {
      history: ["食慾下降", "體重減輕", "嗜睡", "嘔吐", "多飲多尿", "腹部膨大", "可能無症狀"],
      physicalExam: ["肝腫大或可觸及腫塊", "腹部膨脹（腫塊或腹水）", "黏膜黃染（少見）", "體重減輕", "可能無異常發現（早期）"]
    },
    pathophysiology: "肝細胞惡性轉化 → 三種生長模式：巨大型（單一大腫塊，最常見且預後較好）、結節型（多發結節）、彌漫型（廣泛浸潤，預後最差）。轉移率相對較低（巨大型約0-37%），常見轉移部位：肝內、區域淋巴結、肺。",
    diagnosis: {
      overview: "影像學結合組織病理學確診",
      differentials: ["其他肝臟腫瘤", "結節性增生", "肝臟膿腫", "轉移性肝腫瘤"],
      initialDB: ["CBC", "生化（肝酵素、膽紅素）", "凝血功能", "腹部超聲", "胸腔X光"],
      advanced: ["腹部CT", "超聲引導生檢", "組織病理學確診", "AFP（甲胎蛋白，犬價值有限）"]
    },
    treatment: {
      overview: "巨大型肝葉切除是首選治療，結節型和彌漫型選項有限",
      surgical: [
        "巨大型HCC：肝葉切除術",
        "犬可切除70-80%肝臟",
        "術前評估凝血功能",
        "術中出血控制是關鍵"
      ],
      medical: [
        "傳統化療效果有限",
        "標靶治療（研究中）：",
        "- Toceranib（某些病例可能有效）",
        "支持治療：護肝、止吐、營養支持"
      ],
      radiation: ["立體定向放射治療（SBRT）可能是選項"]
    },
    prognosis: "巨大型HCC手術切除：預後良好，中位生存>3年，甚至治癒。結節型：中位生存約1年。彌漫型：預後差，中位生存<6個月。",
    pearls: [
      "巨大型HCC預後良好，不要因為腫瘤大而放棄手術",
      "肝臟有強大的再生能力",
      "術前需評估凝血功能",
      "與轉移性肝腫瘤鑑別很重要",
      "AFP在犬不是可靠的標記物"
    ],
    monitoring: ["術後定期超聲", "肝功能檢測", "胸腔X光"],
    reference: "Withrow SW: Small Animal Clinical Oncology, 6th Ed. 2020"
  },

  "transitional-cell-carcinoma": {
    zh: "移行上皮細胞癌",
    en: "Transitional Cell Carcinoma (TCC)",
    definition: "源自尿路移行上皮的惡性腫瘤，最常見於膀胱三角區。是犬最常見的膀胱腫瘤。",
    synonyms: ["TCC", "膀胱癌", "Urothelial Carcinoma", "泌尿上皮癌"],
    epidemiology: {
      species: "犬常見，貓罕見",
      age: "犬：平均11歲",
      sex: "母犬風險較高（約2:1）",
      breed: "高風險：蘇格蘭梗（風險高20倍）、西高地白梗、比格、雪特蘭牧羊犬",
      riskFactors: ["品種傾向", "肥胖", "環境殺蟲劑暴露", "Cyclophosphamide使用"]
    },
    clinicalPresentation: {
      history: ["血尿", "頻尿", "排尿困難", "尿淋漓", "反覆「尿道感染」", "尿液異味"],
      physicalExam: ["膀胱觸診可能觸及腫塊", "前列腺或尿道腫大", "腎臟腫大（若有輸尿管阻塞）", "骨骼疼痛（若有骨轉移）"]
    },
    pathophysiology: "移行上皮惡性轉化 → 好發於膀胱三角區（靠近輸尿管開口和尿道）→ 可導致輸尿管阻塞 → 腎後性腎衰竭。轉移至區域淋巴結、肺、脊椎骨常見。",
    diagnosis: {
      overview: "影像學結合細胞學/組織學確診",
      differentials: ["膀胱炎", "膀胱息肉", "其他膀胱腫瘤", "前列腺疾病"],
      initialDB: ["尿液分析和培養", "腹部超聲（膀胱和腎臟）", "胸腔X光", "脊椎X光"],
      advanced: ["膀胱鏡和生檢", "BRAF突變檢測（85%犬TCC陽性）", "CADET BRAF尿液檢測", "CT（分期）", "創傷性導管細胞學"]
    },
    treatment: {
      overview: "手術常受限於腫瘤位置，醫療管理是主要治療方式",
      surgical: [
        "完全切除通常不可行（三角區位置）",
        "部分膀胱切除（特定病例）",
        "輸尿管支架或腎造廔（阻塞時）",
        "尿道支架（尿道阻塞時）"
      ],
      medical: [
        "COX抑制劑（Piroxicam或Meloxicam）是基礎治療：",
        "- Piroxicam: 0.3 mg/kg PO q24h",
        "- Meloxicam: 0.1 mg/kg PO q24h",
        "化療方案：",
        "- Mitoxantrone: 5 mg/m² IV q3週 + Piroxicam",
        "- Carboplatin: 300 mg/m² IV q3週",
        "- Vinblastine: 2.5 mg/m² IV 每週或隔週",
        "標靶治療（BRAF突變陽性）：",
        "- Vemurafenib（研究中）"
      ],
      radiation: ["術中放療", "外部放療（膀胱耐受性有限）"]
    },
    prognosis: "中位生存約4-6個月（單獨NSAIDs）至約1年（NSAIDs+化療）。腫瘤位置和是否阻塞影響預後。轉移發生率約50%於確診後。",
    pearls: [
      "「反覆尿道感染」不見好轉要考慮TCC",
      "CADET BRAF尿液檢測是有用的非侵入性篩檢",
      "不建議經膀胱穿刺取細胞學（腫瘤播種風險）",
      "輸尿管支架可緩解阻塞，改善生活品質",
      "Piroxicam不僅止痛，還有抗腫瘤活性"
    ],
    monitoring: ["腹部超聲q2-3個月", "腎功能", "尿液分析", "胸腔X光"],
    reference: "Withrow SW: Small Animal Clinical Oncology, 6th Ed. 2020"
  },

  "nasal-tumor": {
    zh: "鼻腔腫瘤",
    en: "Nasal Tumor",
    definition: "發生於鼻腔或副鼻竇的腫瘤，犬以腺癌和鱗狀上皮細胞癌最常見，貓以淋巴瘤最常見。局部侵襲性強，可侵犯顱腔。",
    synonyms: ["Sinonasal Tumor", "鼻竇腫瘤", "Nasal Carcinoma", "Nasal Adenocarcinoma"],
    epidemiology: {
      species: "犬較貓常見",
      age: "犬：平均9-10歲",
      sex: "公犬略多",
      breed: "長鼻犬種風險較高：可麗牧羊犬、牧羊犬、巴吉度獵犬",
      riskFactors: ["品種（長鼻型）", "城市環境（空氣污染）", "二手煙暴露"]
    },
    clinicalPresentation: {
      history: ["單側鼻分泌物（可能變雙側）", "鼻出血", "打噴嚏", "鼻塞/呼吸音", "面部腫脹或變形", "眼球突出", "神經症狀（侵犯顱腔）"],
      physicalExam: ["單側或雙側鼻分泌物", "面部不對稱", "鼻樑腫脹", "口腔頂部腫塊", "眼球突出", "神經學異常（晚期）"]
    },
    pathophysiology: "鼻腔上皮惡性轉化 → 局部浸潤性生長 → 破壞鼻甲骨和周圍結構 → 可能侵入眼眶或顱腔。遠處轉移率相對較低（<15%於確診時），但局部控制是主要挑戰。",
    diagnosis: {
      overview: "影像學評估範圍，組織病理學確診",
      differentials: ["鼻腔異物", "真菌性鼻炎", "慢性鼻炎", "牙根膿腫"],
      initialDB: ["頭部X光", "胸腔X光", "口腔檢查"],
      advanced: ["CT或MRI（首選，評估範圍和顱腔侵犯）", "鼻腔鏡和生檢", "組織病理學"]
    },
    treatment: {
      overview: "放射治療是主要治療，手術常用於減積或診斷",
      surgical: [
        "鼻甲切除術（減積或診斷）",
        "根治性手術切除通常不可行",
        "手術單獨效果不佳"
      ],
      medical: [
        "化療通常作為輔助：",
        "- Carboplatin: 300 mg/m² IV q3週",
        "- 效果不如放療",
        "貓鼻腔淋巴瘤：化療是主要治療"
      ],
      radiation: [
        "確定性放療：16-20次，總劑量42-57 Gy",
        "中位生存約12-18個月（犬）",
        "緩和性放療：較少次數，用於無法負擔完整療程者",
        "副作用：口腔炎、皮膚反應、晚期可能角膜炎或白內障"
      ]
    },
    prognosis: "犬：單獨手術中位生存3-5個月。放療後中位生存12-18個月，1年存活率約50%。腫瘤侵犯篩板或顱腔預後較差。貓鼻腔淋巴瘤：放療或化療後預後較好，中位生存>1年。",
    pearls: [
      "單側鼻分泌物（尤其帶血）應高度懷疑腫瘤",
      "CT比X光更能評估腫瘤範圍",
      "放療是犬鼻腔腫瘤的標準治療",
      "貓鼻腔腫瘤最常見是淋巴瘤（治療和預後不同）",
      "面部變形通常表示晚期疾病"
    ],
    monitoring: ["定期身體檢查", "症狀監測", "必要時CT追蹤"],
    reference: "Withrow SW: Small Animal Clinical Oncology, 6th Ed. 2020"
  },

  "brain-tumor": {
    zh: "腦腫瘤",
    en: "Brain Tumor",
    definition: "發生於腦實質或腦膜的腫瘤，包括原發性（腦膜瘤、膠質瘤、脈絡叢腫瘤等）和轉移性腫瘤。",
    synonyms: ["Intracranial Tumor", "顱內腫瘤", "Meningioma", "Glioma"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "犬：平均9-10歲；貓：平均11-12歲",
      sex: "無明顯性別傾向",
      breed: "犬：拳師犬、黃金獵犬、杜賓犬、法國鬥牛犬（膠質瘤）；短頭犬種（腦膜瘤）",
      riskFactors: ["品種傾向", "年齡"]
    },
    clinicalPresentation: {
      history: ["行為改變", "癲癇發作（新發）", "視力改變", "步態異常", "旋轉或歪頭", "漸進性神經功能下降"],
      physicalExam: ["神經學檢查異常", "意識改變", "腦神經缺陷", "姿勢反應異常", "步態異常", "瞳孔異常", "乳突狀水腫"]
    },
    pathophysiology: "腫瘤生長 → 佔位效應和周圍水腫 → 顱內壓升高 → 腦灌注下降和神經功能障礙。犬最常見：腦膜瘤（額葉區）、膠質瘤（星形細胞瘤、少突膠質細胞瘤）、脈絡叢腫瘤。貓最常見：腦膜瘤（高度可手術切除）。",
    diagnosis: {
      overview: "MRI是金標準診斷工具，某些情況需組織確診",
      differentials: ["腦炎（感染性或免疫媒介性）", "腦血管意外", "腦外傷", "代謝性腦病"],
      initialDB: ["完整神經學檢查", "CBC和生化", "胸腔X光（轉移評估）"],
      advanced: ["MRI（首選）", "CT（MRI無法使用時）", "腦脊液分析（若安全）", "立體定向生檢"]
    },
    treatment: {
      overview: "治療取決於腫瘤類型、位置和可切除性",
      surgical: [
        "顱骨切開術和腫瘤切除",
        "腦膜瘤：可切除性高，尤其貓",
        "膠質瘤：邊界不清，完全切除困難",
        "脈絡叢腫瘤：可能切除但技術挑戰高"
      ],
      medical: [
        "症狀治療：",
        "- 抗癲癇藥物（Phenobarbital、Levetiracetam）",
        "- 類固醇減少水腫：Prednisone 0.5-1 mg/kg PO q12-24h 或 Dexamethasone",
        "化療效果有限",
        "Hydroxyurea（腦膜瘤）：50 mg/kg PO q48-72h"
      ],
      radiation: [
        "確定性放療：腦膜瘤和膠質瘤標準治療",
        "立體定向放射手術（SRS）：單次或少次高劑量",
        "中位生存可達1-2年或更長"
      ]
    },
    prognosis: "犬腦膜瘤：手術+放療中位生存約2年。貓腦膜瘤：手術切除預後良好，中位生存>2年。膠質瘤：預後較差，放療後中位生存約8-14個月。單獨症狀治療：中位生存約2-4個月。",
    pearls: [
      "老年犬新發癲癇應高度懷疑腦腫瘤",
      "貓腦膜瘤通常手術可切除且預後良好",
      "MRI是診斷的金標準",
      "類固醇可快速改善症狀（減少水腫）",
      "腫瘤類型和位置決定治療選項和預後"
    ],
    monitoring: ["神經學狀態", "癲癇頻率", "定期MRI追蹤", "抗癲癇藥物濃度"],
    reference: "Withrow SW: Small Animal Clinical Oncology, 6th Ed. 2020"
  },

  "splenic-tumor": {
    zh: "脾臟腫瘤",
    en: "Splenic Tumor",
    definition: "發生於脾臟的腫瘤，包括血管肉瘤（最常見的惡性）、纖維肉瘤、血管瘤、結節性增生等。犬脾臟腫塊約2/3為惡性。",
    synonyms: ["Splenic Mass", "脾臟腫塊", "Splenic Neoplasia"],
    epidemiology: {
      species: "犬較貓常見",
      age: "犬：平均9-11歲",
      sex: "血管肉瘤公犬略多",
      breed: "血管肉瘤：德國牧羊犬、黃金獵犬、拉布拉多",
      riskFactors: ["品種傾向", "年齡"]
    },
    clinicalPresentation: {
      history: ["急性虛弱或倒地", "蒼白", "腹部膨大", "食慾下降", "體重減輕", "間歇性嗜睡"],
      physicalExam: ["黏膜蒼白", "心搏過速", "脈搏弱", "腹部膨脹", "可觸及脾臟腫塊", "腹腔積液（出血）", "低體溫（休克時）"]
    },
    pathophysiology: "脾臟腫瘤類型：惡性（血管肉瘤最常見，其次為纖維肉瘤、平滑肌肉瘤）；良性（血管瘤、結節性增生、血腫）。血管肉瘤容易破裂導致急性腹腔出血。2/3法則：2/3脾臟腫塊是惡性，其中2/3是血管肉瘤。",
    diagnosis: {
      overview: "影像學發現腫塊，組織病理學確診類型",
      differentials: ["血管肉瘤", "血管瘤", "結節性增生", "血腫", "其他肉瘤", "肥大細胞瘤"],
      initialDB: ["CBC（貧血、血小板減少）", "生化", "凝血功能", "腹部超聲", "AFAST", "胸腔X光"],
      advanced: ["腹部CT", "心臟超聲（右心房腫瘤）", "組織病理學（脾臟切除後）"]
    },
    treatment: {
      overview: "脾臟切除術是診斷和治療的關鍵步驟",
      surgical: [
        "脾臟切除術",
        "術前穩定（輸液、必要時輸血）",
        "術中控制出血",
        "完整脾臟送組織病理學"
      ],
      medical: [
        "術前穩定：晶體液、膠體液、必要時輸血",
        "血管肉瘤輔助化療：",
        "- Doxorubicin: 30 mg/m² IV q3週 x 5-6次",
        "- VAC方案",
        "- 節拍化療：低劑量Cyclophosphamide",
        "其他惡性腫瘤依類型而定"
      ],
      supportive: ["輸血支持", "疼痛管理", "營養支持"]
    },
    prognosis: "血管肉瘤：見血管肉瘤條目。其他肉瘤：取決於類型和分級。血管瘤/結節性增生/血腫：脾臟切除後預後良好，可治癒。術前無法確定良惡性，需術後組織病理學。",
    pearls: [
      "「2/3法則」：2/3脾臟腫塊惡性，其中2/3是血管肉瘤",
      "急性腹腔出血+脾臟腫塊=高度懷疑血管肉瘤",
      "術前穿刺細胞學價值有限且有出血風險",
      "脾臟切除是安全的，犬貓可無脾臟生活",
      "術後等待病理報告再決定是否需化療"
    ],
    monitoring: ["術後：傷口和貧血", "血管肉瘤：定期胸腔X光和腹部超聲", "心臟超聲（右心房轉移）"],
    reference: "Withrow SW: Small Animal Clinical Oncology, 6th Ed. 2020"
  },

  "histiocytic-sarcoma": {
    zh: "組織球肉瘤",
    en: "Histiocytic Sarcoma",
    definition: "源自樹突細胞或巨噬細胞的惡性腫瘤，包括局部型和播散型（惡性組織球增生症）。是一種高度侵襲性的腫瘤。",
    synonyms: ["HS", "Malignant Histiocytosis", "惡性組織球增生症", "播散型組織球肉瘤"],
    epidemiology: {
      species: "犬為主，貓罕見",
      age: "犬：平均6-9歲",
      sex: "無明顯性別傾向",
      breed: "高風險：伯恩山犬（遺傳傾向）、平毛尋回犬、羅威那、黃金獵犬",
      riskFactors: ["品種傾向（強烈遺傳因素）"]
    },
    clinicalPresentation: {
      history: ["局部型：肢體腫塊、跛行", "播散型：嗜睡、食慾下降、體重減輕、呼吸困難"],
      physicalExam: [
        "局部型：通常在關節周圍或皮下的腫塊",
        "播散型：多器官受累（脾腫大、肝腫大、淋巴結腫大）",
        "肺部受累：呼吸困難、肺音異常",
        "貧血、血小板減少"
      ]
    },
    pathophysiology: "樹突細胞或巨噬細胞系惡性轉化 → 局部型：單一部位腫塊；播散型：多器官快速浸潤（脾、肝、肺、淋巴結、骨髓）。伯恩山犬有遺傳傾向（可能與HLA相關基因有關）。",
    diagnosis: {
      overview: "組織病理學和免疫組織化學確診",
      differentials: ["淋巴瘤", "其他肉瘤", "轉移性腫瘤", "免疫媒介性疾病"],
      initialDB: ["CBC（可能貧血、血小板減少）", "生化", "腹部超聲", "胸腔X光"],
      advanced: ["組織生檢", "免疫組織化學（CD18、CD11c、CD11d）", "骨髓穿刺", "CT分期"]
    },
    treatment: {
      overview: "局部型可能受益於手術和化療，播散型預後差",
      surgical: [
        "局部型：廣泛手術切除",
        "肢體腫瘤可能需截肢",
        "播散型：手術不是主要治療"
      ],
      medical: [
        "化療方案：",
        "- CCNU (Lomustine): 60-90 mg/m² PO q3週",
        "- Doxorubicin: 30 mg/m² IV q3週",
        "- CCNU + Doxorubicin 交替",
        "標靶治療（研究中）：",
        "- Toceranib可能有一定活性"
      ],
      radiation: ["局部型術後輔助放療"]
    },
    prognosis: "局部型（手術+化療）：中位生存約6-12個月。播散型：預後差，中位生存約3-6個月。伯恩山犬：品種相關，預後特別謹慎。",
    pearls: [
      "伯恩山犬有強烈的品種傾向",
      "需與淋巴瘤鑑別（治療和預後不同）",
      "免疫組織化學對確診很重要",
      "播散型常累及多個器官",
      "某些病例對CCNU有反應"
    ],
    monitoring: ["定期CBC（CCNU骨髓抑制）", "肝功能（CCNU肝毒性）", "影像學追蹤"],
    reference: "Withrow SW: Small Animal Clinical Oncology, 6th Ed. 2020"
  },

  "multiple-myeloma": {
    zh: "多發性骨髓瘤",
    en: "Multiple Myeloma",
    definition: "源自骨髓中漿細胞的惡性腫瘤，特徵為單株免疫球蛋白過度分泌，可導致骨病變、腎功能不全和免疫缺陷。",
    synonyms: ["MM", "Plasma Cell Myeloma", "漿細胞骨髓瘤", "骨髓瘤"],
    epidemiology: {
      species: "犬較貓常見",
      age: "犬：平均8-9歲",
      sex: "無明顯性別傾向",
      breed: "德國牧羊犬可能略多",
      riskFactors: ["年齡", "可能的品種傾向"]
    },
    clinicalPresentation: {
      history: ["虛弱", "跛行或骨痛", "出血傾向", "多飲多尿", "視力改變", "反覆感染"],
      physicalExam: ["跛行或骨痛", "黏膜蒼白", "出血徵象（瘀斑、瘀點）", "視網膜病變", "脾腫大或肝腫大", "病理性骨折"]
    },
    pathophysiology: "骨髓漿細胞克隆性增生 → 分泌單株免疫球蛋白（M蛋白）→ 高黏滯血症（視網膜、神經、腎臟病變）；正常免疫球蛋白減少 → 免疫缺陷；骨溶解 → 骨痛、病理性骨折、高血鈣；Bence-Jones蛋白 → 腎損傷",
    diagnosis: {
      overview: "經典診斷標準需滿足：骨髓漿細胞增多、M蛋白血症、溶骨性病變或Bence-Jones蛋白尿",
      differentials: ["淋巴瘤", "慢性感染（反應性漿細胞增多）", "其他骨腫瘤", "Ehrlichia感染"],
      initialDB: ["CBC（可能貧血）", "生化（高蛋白血症、腎指數、高血鈣）", "尿液分析（Bence-Jones蛋白）", "骨骼X光"],
      advanced: ["血清蛋白電泳（M蛋白）", "免疫固定電泳", "骨髓穿刺和生檢", "全身骨骼X光或CT"]
    },
    treatment: {
      overview: "化療是主要治療，支持治療處理併發症",
      medical: [
        "化療方案：",
        "- Melphalan: 0.1 mg/kg PO q24h x 10天，之後隔日",
        "- + Prednisone: 0.5 mg/kg PO q24h",
        "- 或 Melphalan pulse: 7 mg/m² PO q24h x 5天，q3週",
        "- Cyclophosphamide替代方案",
        "高黏滯血症：血漿分離術（緊急）",
        "高血鈣：輸液、Furosemide、Bisphosphonates"
      ],
      supportive: [
        "疼痛管理",
        "輸血（若嚴重貧血）",
        "感染治療",
        "病理性骨折處理"
      ],
      radiation: ["局部骨病變的緩和性放療"]
    },
    prognosis: "中位生存約18-24個月（治療後）。預後不良因素：高血鈣、Bence-Jones蛋白尿、廣泛骨溶解、IgA型。對治療反應率約90%。",
    pearls: [
      "高球蛋白血症+骨溶解=高度懷疑多發性骨髓瘤",
      "血清蛋白電泳可見典型「M峰」",
      "要排除Ehrlichia感染（可導致高球蛋白血症）",
      "Melphalan+Prednisone是經典治療方案",
      "定期監測M蛋白濃度評估治療反應"
    ],
    monitoring: ["血清蛋白電泳（M蛋白）", "CBC", "腎功能", "尿蛋白", "骨骼X光"],
    reference: "Withrow SW: Small Animal Clinical Oncology, 6th Ed. 2020"
  },

  "leukemia": {
    zh: "白血病",
    en: "Leukemia",
    definition: "源自骨髓造血細胞的惡性腫瘤，導致異常白血球在骨髓和周邊血液中大量增生。分為急性和慢性，以及淋巴性和髓性類型。",
    synonyms: ["血癌", "Lymphocytic Leukemia", "Myeloid Leukemia", "淋巴性白血病", "髓性白血病"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "急性：中老年；慢性淋巴性白血病：平均10-12歲",
      sex: "無明顯性別傾向",
      breed: "無明顯品種傾向",
      riskFactors: ["貓白血病病毒（FeLV）-貓", "年齡", "化療或放療暴露"]
    },
    clinicalPresentation: {
      history: ["虛弱", "食慾下降", "體重減輕", "發燒", "出血傾向", "反覆感染"],
      physicalExam: [
        "急性白血病：黏膜蒼白、發燒、瘀斑/瘀點、淋巴結腫大、脾腫大/肝腫大",
        "慢性淋巴性白血病：可能無症狀或輕微症狀、淋巴結腫大、脾腫大"
      ]
    },
    pathophysiology: "骨髓造血細胞惡性轉化 → 異常細胞克隆性增生 → 正常造血功能受抑制（貧血、血小板減少、中性粒細胞減少）→ 異常細胞釋放至周邊血液 → 可能浸潤器官（肝、脾、淋巴結）",
    diagnosis: {
      overview: "周邊血液塗片結合骨髓檢查確診",
      differentials: ["淋巴瘤第V期", "感染性疾病", "免疫媒介性疾病", "骨髓發育不良"],
      initialDB: ["CBC和血液塗片", "生化", "FeLV/FIV檢測（貓）", "胸腔X光", "腹部超聲"],
      advanced: ["骨髓穿刺和生檢", "免疫表型分析（流式細胞儀）", "細胞遺傳學", "PARR（淋巴性）"]
    },
    treatment: {
      overview: "治療取決於白血病類型",
      medical: [
        "急性淋巴性白血病（ALL）：",
        "- 類似淋巴瘤的多藥化療方案",
        "- CHOP方案或類似",
        "急性髓性白血病（AML）：",
        "- 預後很差，治療選項有限",
        "- Cytarabine基礎方案",
        "慢性淋巴性白血病（CLL）：",
        "- 可能不需立即治療（觀察等待）",
        "- Chlorambucil: 2-6 mg/m² PO q24-48h",
        "- + Prednisone: 0.5-1 mg/kg PO q24h",
        "- 或單獨Chlorambucil"
      ],
      supportive: ["輸血", "抗生素（感染）", "輸液支持"]
    },
    prognosis: "ALL：預後謹慎至差，中位生存約數週至數月。AML：預後差，中位生存通常<2週。CLL：預後較好，許多犬可存活1-3年或更長。",
    pearls: [
      "急性白血病是急症，需要快速診斷和治療",
      "CLL進展緩慢，可能僅需觀察",
      "血液塗片是第一步診斷工具",
      "骨髓檢查對確診和分類很重要",
      "FeLV陽性貓有較高白血病風險"
    ],
    monitoring: ["CBC定期監測", "骨髓評估（治療反應）", "感染監測"],
    reference: "Withrow SW: Small Animal Clinical Oncology, 6th Ed. 2020"
  },

  "feline-injection-site-sarcoma": {
    zh: "貓注射部位肉瘤",
    en: "Feline Injection Site Sarcoma (FISS)",
    definition: "發生於貓注射部位的惡性軟組織腫瘤，與疫苗或其他注射藥物相關的慢性炎症反應有關。高度局部侵襲性，需要積極治療。",
    synonyms: ["FISS", "Vaccine-Associated Sarcoma", "疫苗相關肉瘤", "VAS", "注射部位纖維肉瘤"],
    epidemiology: {
      species: "貓特有",
      age: "平均8-11歲（但任何年齡可發生）",
      sex: "無性別傾向",
      breed: "無品種傾向",
      riskFactors: ["疫苗注射（尤其FeLV、狂犬病）", "其他注射藥物", "微晶片植入", "慢性炎症"]
    },
    clinicalPresentation: {
      history: ["注射部位（肩胛間、後肢）的腫塊", "腫塊快速增大", "可能在注射後數月至數年出現"],
      physicalExam: ["皮下或肌肉內腫塊", "通常堅實、邊界不清", "可能與深層組織粘連", "常見部位：肩胛間、後肢、腹側"]
    },
    pathophysiology: "注射/異物 → 慢性炎症反應 → 成纖維細胞增生 → 基因突變累積（p53等）→ 惡性轉化 → 高度局部侵襲性肉瘤。發生率約1/1000-1/10000次注射。建議注射部位選擇便於日後廣泛切除或截肢的位置。",
    diagnosis: {
      overview: "3-2-1原則：>3個月仍存在、>2公分、注射後1個月仍增大，需進一步檢查",
      differentials: ["注射後肉芽腫", "其他軟組織腫瘤", "膿腫"],
      initialDB: ["細針穿刺細胞學", "胸腔X光（3視圖）"],
      advanced: ["CT或MRI（術前規劃，評估腫瘤範圍）", "楔形或切除生檢", "組織病理學"]
    },
    treatment: {
      overview: "積極的多模式治療：廣泛手術+放療+/-化療",
      surgical: [
        "極廣泛切除（側邊5公分，深層兩個筋膜面）",
        "術前CT/MRI規劃很重要",
        "位於肢體：截肢可能是最佳選項",
        "肩胛間：可能需切除棘突或肩胛骨部分",
        "第一次手術是最佳治癒機會"
      ],
      medical: [
        "輔助化療：",
        "- Doxorubicin: 25 mg/m² IV q3週",
        "- Carboplatin: 200-240 mg/m² IV q3週",
        "- 或兩者交替使用"
      ],
      radiation: [
        "術前放療：可能改善邊緣",
        "術後放療：推薦用於不完整切除",
        "確定性放療：不可手術病例"
      ]
    },
    prognosis: "單獨手術：局部復發率30-70%，中位生存約6-12個月。廣泛手術+放療：中位生存約2-3年，局部復發率降低。轉移率約10-25%，肺最常見。",
    pearls: [
      "「3-2-1原則」：持續>3月、>2cm、注射後1月仍增大需檢查",
      "建議疫苗注射於遠端肢體（便於日後截肢）",
      "避免肩胛間注射",
      "第一次手術的邊緣決定預後",
      "這是醫源性腫瘤，預防很重要"
    ],
    monitoring: ["每2-3個月身體檢查", "胸腔X光", "注射部位監測"],
    prevention: [
      "避免不必要的注射",
      "疫苗注射於遠端肢體（右後肢：狂犬病；左後肢：FeLV；右前肢：其他）",
      "使用非佐劑疫苗",
      "記錄注射部位和疫苗批號",
      "注射部位腫塊監測"
    ],
    reference: "Withrow SW: Small Animal Clinical Oncology, 6th Ed. 2020; AAFP Vaccine Guidelines"
  }
};

// 匯出供整合使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ONCOLOGICAL_DISEASES;
}

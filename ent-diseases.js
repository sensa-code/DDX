// ======= 耳鼻喉疾病 DISEASE_INFO =======
// 生成日期: 2026-02-04
// 包含: 外耳炎、中/內耳炎、耳血腫、耳息肉、聾、鼻炎、鼻腔異物、鼻出血、
//       鼻咽息肉、口鼻瘻管、咽炎、扁桃腺炎、唾液腺炎、唾液囊腫、顴骨黏液囊腫

const ENT_DISEASES = {

  // ==================== 耳部疾病 ====================

  "otitis-externa": {
    zh: "外耳炎",
    en: "Otitis Externa",
    definition: "外耳道的炎症反應，是小動物最常見的耳部疾病。涉及外耳道皮膚和軟骨結構，常伴有繼發性細菌或酵母菌感染。",
    synonyms: ["Ear Infection", "External Ear Canal Inflammation", "外耳道炎", "耳道炎"],
    epidemiology: {
      species: "犬最常見，貓較少見",
      age: "任何年齡，但慢性病例多見於成年犬",
      sex: "無明顯性別傾向",
      riskFactors: ["垂耳犬種（Cocker Spaniel、Basset Hound、Labrador）", "耳道狹窄品種（Shar-Pei）", "多毛耳道（Poodle）", "游泳習慣", "過敏性皮膚炎", "內分泌疾病（甲狀腺功能低下）", "耳道異物", "濕度高的環境"]
    },
    clinicalPresentation: {
      history: ["搖頭", "抓耳", "耳臭味", "耳分泌物", "觸摸耳朵時疼痛或退縮", "頭部傾斜（若伴中耳炎）", "聽力下降"],
      physicalExam: ["耳廓紅腫", "耳道水腫和增厚", "耳分泌物（蠟樣、膿性或乾燥碎屑）", "耳道狹窄（慢性病例）", "觸診耳根部疼痛", "可能有耳血腫並發"]
    },
    pathophysiology: "原發因素（過敏、異物、寄生蟲等）→ 耳道微環境改變 → 正常菌群失衡 → 繼發感染（Malassezia、Staphylococcus、Pseudomonas）→ 炎症反應 → 耳道增厚和狹窄 → 惡性循環。慢性病例可能導致耳道鈣化和永久性結構改變。",
    diagnosis: {
      overview: "耳鏡檢查和細胞學是基本診斷工具，需識別原發病因",
      differentials: ["過敏性皮膚炎（最常見原發因素）", "耳疥蟲（Otodectes cynotis）", "異物", "耳息肉或腫瘤", "中耳炎併發", "自體免疫疾病"],
      initialDB: ["耳鏡檢查（評估耳道和鼓膜）", "耳分泌物細胞學（細菌、酵母菌、炎症細胞）", "耳疥蟲檢查", "皮膚檢查（尋找過敏徵象）"],
      advanced: ["細菌培養和藥敏試驗（慢性或難治病例）", "耳道X光或CT（懷疑中耳炎）", "過敏原測試", "甲狀腺功能檢測", "皮膚活檢（懷疑自體免疫）"]
    },
    treatment: {
      overview: "清潔耳道、控制感染和炎症、治療原發病因",
      acute: [
        "耳道清潔：",
        "  - 溫和清潔液沖洗（若鼓膜完整）",
        "  - 嚴重病例可能需要鎮靜下深層清潔",
        "  - 避免使用刺激性清潔劑",
        "局部用藥（依細胞學結果選擇）：",
        "  - 複合製劑：抗生素+抗真菌+類固醇（如Otomax、Mometamax）",
        "  - Malassezia為主：Miconazole、Clotrimazole",
        "  - 細菌為主：Fluoroquinolone（Marbofloxacin）、Polymyxin B",
        "止痛/抗發炎：短期口服類固醇（嚴重病例）"
      ],
      chronic: [
        "識別並控制原發因素：",
        "  - 過敏管理（食物試驗、環境控制、免疫治療）",
        "  - 內分泌疾病治療",
        "維持治療：",
        "  - 定期清潔（每1-2週）",
        "  - 預防性局部用藥",
        "難治性Pseudomonas感染：",
        "  - 全身性抗生素（Fluoroquinolone）",
        "  - Tris-EDTA清潔增強抗生素效果",
        "嚴重慢性病例：",
        "  - 手術（垂直耳道切除術或全耳道切除術）"
      ]
    },
    prognosis: "急性病例經適當治療預後良好。慢性病例需要長期管理，預後取決於能否控制原發因素。嚴重慢性增生性改變可能需要手術。",
    pearls: [
      "80%犬外耳炎與潛在過敏性疾病相關",
      "鼓膜必須在使用耳藥前評估完整性",
      "棒狀桿菌（Pseudomonas）感染預後較差，需積極治療",
      "單側外耳炎應考慮異物或腫瘤",
      "治療後應追蹤細胞學確認感染清除"
    ],
    monitoring: ["治療7-14天後複檢", "耳鏡和細胞學追蹤", "慢性病例每1-3個月追蹤", "監測原發疾病控制狀況"],
    reference: "Rosser EJ: Causes of otitis externa. Vet Clin North Am Small Anim Pract 34:459-468, 2004"
  },

  "otitis-media-interna": {
    zh: "中/內耳炎",
    en: "Otitis Media/Interna",
    definition: "中耳（鼓室）和/或內耳（迷路）的炎症和感染。多為外耳炎的延伸，也可經由咽鼓管或血行感染。可導致嚴重的神經學症狀。",
    synonyms: ["Middle Ear Infection", "Inner Ear Infection", "中耳炎", "內耳炎", "Labyrinthitis"],
    epidemiology: {
      species: "犬較常見，貓也可發生（常與鼻咽息肉相關）",
      age: "任何年齡",
      sex: "無明顯性別傾向",
      riskFactors: ["慢性外耳炎", "鼓膜破裂", "垂耳犬種", "上呼吸道感染", "鼻咽息肉（貓）", "外傷"]
    },
    clinicalPresentation: {
      history: ["慢性外耳炎病史", "頭部傾斜（患側低）", "眼球震顫", "步態不穩/共濟失調", "面神經麻痺（眼瞼下垂、唇下垂）", "Horner氏症候群", "聽力下降", "疼痛表現"],
      physicalExam: ["鼓膜混濁、膨出或破裂", "耳道分泌物", "頭部傾斜", "水平或旋轉性眼球震顫", "位置性斜視", "面神經麻痺徵象", "Horner氏症候群（縮瞳、眼瞼下垂、眼球內陷、第三眼瞼突出）", "前庭性共濟失調"]
    },
    pathophysiology: "感染途徑：(1)外耳炎經鼓膜蔓延（最常見）、(2)咽鼓管上行感染、(3)血行感染。中耳感染 → 炎症和膿液積聚 → 若未控制則侵犯內耳 → 前庭和耳蝸損傷 → 平衡和聽力障礙。鄰近神經（面神經、交感神經）也可能受累。",
    diagnosis: {
      overview: "結合臨床神經學檢查、耳鏡檢查和影像學診斷",
      differentials: ["周邊前庭疾病（特發性前庭症候群）", "中樞前庭疾病", "耳毒性藥物", "甲狀腺功能低下相關前庭病變", "顱內腫瘤", "鼻咽息肉（貓）"],
      initialDB: ["完整神經學檢查", "耳鏡檢查（評估鼓膜）", "耳分泌物細胞學和培養", "顱骨X光（鼓室混濁）"],
      advanced: ["CT或MRI（金標準）", "腦脊液分析（若懷疑中樞問題）", "電診斷測試（BAER聽力測試）", "肌電圖（評估面神經功能）"]
    },
    treatment: {
      overview: "長期全身性抗生素治療，必要時手術引流",
      acute: [
        "全身性抗生素治療（4-8週或更長）：",
        "  - 經驗性選擇：Amoxicillin-Clavulanate、Fluoroquinolone",
        "  - 依培養結果調整",
        "  - Pseudomonas感染：Enrofloxacin 或併用療法",
        "疼痛控制：NSAIDs或Gabapentin",
        "抗發炎：短期類固醇（減輕水腫）",
        "前庭症狀支持治療：",
        "  - 止吐藥（Maropitant）",
        "  - 防跌倒保護",
        "面神經麻痺：人工淚液（防止角膜乾燥）"
      ],
      chronic: [
        "若藥物治療無效：",
        "  - 鼓室骨泡切開術（Bulla Osteotomy）",
        "  - 垂直耳道切除術合併鼓室骨泡切開術",
        "  - 全耳道切除術合併鼓室骨泡切開術（TECA-LBO）",
        "術後持續抗生素2-4週",
        "長期監測復發"
      ]
    },
    prognosis: "早期治療預後較好。前庭症狀多數可改善，但部分可能遺留永久性頭部傾斜。面神經麻痺恢復較慢。聽力損失可能永久。貓的鼻咽息肉相關中耳炎手術後預後良好。",
    pearls: [
      "鼓膜完整不能排除中耳炎",
      "CT/MRI是診斷中耳炎的金標準",
      "老年犬急性發作需區分中耳炎和特發性前庭症候群",
      "貓中耳炎常與鼻咽息肉相關，需評估鼻咽部",
      "抗生素療程不足是治療失敗的常見原因"
    ],
    monitoring: ["神經學症狀改善", "影像追蹤（治療4-6週後）", "聽力評估", "面神經功能恢復"],
    reference: "Gotthelf LN: Diagnosis and treatment of otitis media in dogs and cats. Vet Clin North Am Small Anim Pract 34:469-487, 2004"
  },

  "aural-hematoma": {
    zh: "耳血腫",
    en: "Aural Hematoma",
    definition: "耳廓軟骨與皮膚之間的血液積聚，形成波動性腫脹。通常因搖頭或抓耳導致血管破裂，與潛在耳部問題相關。",
    synonyms: ["Ear Hematoma", "Auricular Hematoma", "耳殼血腫", "耳翼血腫"],
    epidemiology: {
      species: "犬較常見，貓較少",
      age: "任何年齡",
      sex: "無明顯性別傾向",
      riskFactors: ["垂耳犬種", "外耳炎", "耳疥蟲", "過敏性疾病", "凝血障礙", "頻繁搖頭的任何原因"]
    },
    clinicalPresentation: {
      history: ["耳廓突然腫脹", "頻繁搖頭或抓耳", "外耳炎症狀", "可能有近期外傷"],
      physicalExam: ["耳廓內側波動性腫脹", "通常位於耳廓凹面", "可能整個耳廓腫脹", "耳廓發熱", "觸診液體感", "同時檢查外耳道（尋找原發問題）"]
    },
    pathophysiology: "搖頭或抓耳 → 耳廓軟骨和皮膚之間剪切力 → 血管破裂 → 血液積聚形成血腫。若不治療，血腫會機化形成纖維組織 → 耳廓變形（「花椰菜耳」）。免疫介導機制也可能參與。",
    diagnosis: {
      overview: "臨床診斷為主，需尋找潛在原因",
      differentials: ["膿腫", "腫瘤", "蜂窩組織炎", "異物反應"],
      initialDB: ["耳廓觸診（確認波動性腫脹）", "細針抽吸（排除膿腫、確認血液）", "耳鏡檢查（尋找外耳炎）", "耳分泌物細胞學"],
      advanced: ["凝血功能檢測（若反覆發生或雙側）", "過敏原測試（若懷疑過敏）"]
    },
    treatment: {
      overview: "排出血腫內容物並防止復發，同時治療原發病因",
      acute: [
        "保守治療（小型血腫或無法手術）：",
        "  - 細針抽吸（高復發率）",
        "  - 抽吸後注射類固醇",
        "手術治療（推薦）：",
        "  - 切開引流+縫合固定（多處縫合消除死腔）",
        "  - 放置引流管",
        "  - 術後包紮固定",
        "同時治療原發病因（外耳炎等）",
        "使用伊莉莎白項圈防止搖頭和抓耳"
      ],
      chronic: [
        "治療潛在耳部疾病（過敏、感染）",
        "若已纖維化變形，美容手術可選擇性進行",
        "預防復發的耳部保健"
      ]
    },
    prognosis: "及時手術治療預後良好，耳廓外觀可保持。未治療或延遲治療會導致永久性耳廓變形。復發率與潛在病因控制相關。",
    pearls: [
      "耳血腫本身是症狀，必須尋找並治療原發病因",
      "單純抽吸復發率高達80%",
      "手術後適當包紮固定很重要",
      "預防搖頭是術後護理的關鍵",
      "雙側或反覆發生應檢查凝血功能"
    ],
    monitoring: ["術後24-48小時檢查", "7-10天拆線", "持續監測外耳炎控制", "追蹤耳廓外觀"],
    reference: "Joyce JA: Aural hematoma surgery. Clin Tech Small Anim Pract 19:15-19, 2004"
  },

  "ear-polyp": {
    zh: "耳息肉",
    en: "Ear Polyp",
    definition: "外耳道或中耳的良性炎症性增生組織。貓較常見，稱為炎症性息肉或鼻咽息肉。可阻塞耳道或經咽鼓管生長至鼻咽部。",
    synonyms: ["Inflammatory Polyp", "Nasopharyngeal Polyp", "Aural Inflammatory Polyp", "炎症性息肉", "鼻咽息肉"],
    epidemiology: {
      species: "貓最常見，犬罕見",
      age: "年輕貓（<5歲）最常見",
      sex: "無明顯性別傾向",
      riskFactors: ["幼貓上呼吸道感染史", "可能與Calicivirus或Herpesvirus感染相關", "先天性異常（懷疑）"]
    },
    clinicalPresentation: {
      history: ["單側耳道分泌物", "搖頭", "外耳炎症狀", "呼吸有聲音（鼾聲）-若息肉在鼻咽部", "吞嚥困難", "聲音改變", "前庭症狀（若累及中耳）"],
      physicalExam: ["耳鏡可見耳道內粉紅色或紅色腫塊", "鼓膜後方可見腫塊（若在中耳）", "開口檢查可見鼻咽部腫塊（軟顎後方）", "可能伴有頭部傾斜、Horner氏症候群"]
    },
    pathophysiology: "病因不完全清楚，可能與上呼吸道感染後的慢性炎症反應相關。息肉起源於中耳或咽鼓管上皮，可向外生長進入外耳道，或向內生長進入鼻咽部。組織學上為纖維血管性結締組織，覆蓋呼吸道上皮。",
    diagnosis: {
      overview: "耳鏡和口腔/鼻咽檢查，影像學評估中耳",
      differentials: ["外耳道腫瘤（鱗狀細胞癌、耵聹腺癌）", "肉芽腫", "膽脂瘤", "異物反應"],
      initialDB: ["耳鏡檢查（鎮靜下）", "口腔和鼻咽檢查（鉤拉軟顎觀察）", "顱骨X光", "細胞學（若可取樣）"],
      advanced: ["CT或MRI（評估中耳和息肉範圍）", "組織病理學確診", "BAER聽力測試"]
    },
    treatment: {
      overview: "手術切除是主要治療方式",
      acute: [
        "耳道息肉：",
        "  - 牽引摘除（Traction avulsion）",
        "  - 術後可能需要短期類固醇減少炎症",
        "鼻咽息肉：",
        "  - 經口牽引摘除",
        "  - 可能需要軟顎切開以利摘除",
        "術後抗生素（預防感染）",
        "術後類固醇（減少復發）"
      ],
      chronic: [
        "若復發或累及中耳：",
        "  - 腹側鼓室骨泡切開術（VBO）",
        "  - 徹底清除中耳內息肉組織",
        "術後神經學監測（面神經、Horner氏症候群）"
      ]
    },
    prognosis: "單純牽引摘除復發率約30-50%。合併VBO復發率大幅降低（<10%）。術後Horner氏症候群常見但多為暫時性。聽力預後取決於中耳損傷程度。",
    pearls: [
      "貓的耳息肉常與鼻咽息肉相連，需同時評估",
      "牽引摘除要確保完整摘除基部",
      "術後類固醇可能減少復發率",
      "Horner氏症候群是VBO常見併發症",
      "年輕貓單側外耳炎/中耳炎應考慮息肉"
    ],
    monitoring: ["術後神經學監測", "耳鏡追蹤（1、3、6個月）", "症狀復發監測"],
    reference: "Anderson DM et al: Management of inflammatory polyps in 37 cats. Vet Rec 147:684-687, 2000"
  },

  "deafness": {
    zh: "聾",
    en: "Deafness",
    definition: "部分或完全喪失聽覺能力。可為先天性或後天性，單側或雙側，傳導性或感覺神經性。",
    synonyms: ["Hearing Loss", "Hearing Impairment", "聽力喪失", "耳聾", "失聰"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "先天性聾出生即有，後天性可任何年齡",
      sex: "無明顯性別傾向",
      riskFactors: ["白色被毛/藍眼（與Piebald或Merle基因相關）", "品種傾向（Dalmatian、Bull Terrier、Australian Cattle Dog、白貓）", "老年（退化性）", "慢性外/中耳炎", "耳毒性藥物", "噪音暴露", "頭部外傷"]
    },
    clinicalPresentation: {
      history: ["對聲音無反應或反應降低", "叫喚不理睬", "容易受驚", "睡覺時難以喚醒", "吠叫過大聲（自我聽覺回饋喪失）", "訓練困難", "幼犬時期未對聲音定向"],
      physicalExam: ["聲音測試反應（鈴聲、拍手）", "耳道和鼓膜檢查", "神經學檢查（排除其他神經問題）", "眼部檢查（尋找與聾相關的眼睛異常）"]
    },
    pathophysiology: "傳導性聾：外耳或中耳問題阻止聲音傳導（如耳道阻塞、鼓膜破裂、滲出性中耳炎）。感覺神經性聾：內耳（柯蒂氏器）或聽神經損傷。先天性聾常與色素細胞發育異常相關（缺乏黑色素細胞導致血管紋發育不良）。老年性聾為漸進性柯蒂氏器退化。",
    diagnosis: {
      overview: "需區分傳導性和感覺神經性聾，BAER是金標準",
      differentials: ["傳導性聾：外耳炎、中耳炎、耳道腫瘤、鼓膜穿孔", "感覺神經性聾：先天性、老年退化、耳毒性、噪音損傷、感染", "中樞性聾（罕見）：腦幹病變"],
      initialDB: ["聲音反應測試（不精確但有篩檢價值）", "耳鏡檢查", "鼓室評估", "神經學檢查"],
      advanced: ["BAER（腦幹聽覺誘發電位）-金標準", "CT/MRI（評估中耳和腦幹）", "鼓室壓力圖"]
    },
    treatment: {
      overview: "治療可治療的原因，先天性感覺神經性聾無法治癒",
      acute: [
        "傳導性聾：",
        "  - 治療外耳炎",
        "  - 清除耳道阻塞物",
        "  - 手術治療中耳炎",
        "停用耳毒性藥物（若為藥物引起）"
      ],
      chronic: [
        "先天性感覺神經性聾：",
        "  - 無法治癒",
        "  - 手語/視覺信號訓練",
        "  - 環境管理（安全的圍欄區域）",
        "  - 震動項圈用於召回",
        "老年性聾：",
        "  - 無特效治療",
        "  - 適應性訓練",
        "助聽器（有限成功）"
      ]
    },
    prognosis: "傳導性聾若病因可治療，預後良好。先天性感覺神經性聾為永久性。老年性聾為漸進性。聾的動物經適當訓練可有良好生活品質。",
    pearls: [
      "Dalmatian的先天性聾發生率約30%（單側或雙側）",
      "單側聾的動物適應良好，常被忽視",
      "BAER是診斷幼犬先天性聾的金標準",
      "白色被毛和藍眼與聾的相關性因品種而異",
      "繁殖選擇應排除雙側聾的個體"
    ],
    monitoring: ["治療性聾的聽力追蹤", "行為適應評估", "安全環境維護"],
    reference: "Strain GM: Deafness in Dogs and Cats. CABI Publishing, 2011"
  },

  // ==================== 鼻部疾病 ====================

  "rhinitis": {
    zh: "鼻炎",
    en: "Rhinitis",
    definition: "鼻腔黏膜的炎症。可為急性或慢性，感染性或非感染性。是小動物常見的上呼吸道問題。",
    synonyms: ["Nasal Inflammation", "鼻腔炎症", "Nasal Cavity Inflammation"],
    epidemiology: {
      species: "犬貓皆常見",
      age: "任何年齡，幼年動物感染性原因較多，老年動物腫瘤較多",
      sex: "無明顯性別傾向",
      riskFactors: ["短頭種（解剖特徵）", "未接種疫苗（病毒性）", "戶外活動（真菌、異物）", "免疫抑制", "牙科疾病"]
    },
    clinicalPresentation: {
      history: ["打噴嚏", "鼻分泌物（漿液性、黏液性、膿性或血性）", "鼻塞聲", "反向打噴嚏", "鼻出血", "嗅覺下降", "面部變形（慢性/腫瘤）", "食慾下降"],
      physicalExam: ["鼻分泌物", "呼吸音異常", "面部對稱性評估", "口腔檢查（牙齒、硬顎）", "眼部檢查（眼分泌物、眼球突出）", "淋巴結觸診", "氣流測試（鏡子或棉花）"]
    },
    pathophysiology: "感染性：病毒（犬瘟熱、副流感、貓皰疹病毒、貓杯狀病毒）→ 黏膜損傷 → 繼發細菌感染。真菌（Aspergillus、Cryptococcus）→ 組織侵犯和破壞。非感染性：過敏、異物、腫瘤、牙根膿瘍、口鼻瘻管。慢性炎症可導致淋巴漿細胞性鼻炎（尤其貓）。",
    diagnosis: {
      overview: "需區分感染性/非感染性，良性/惡性，以及識別潛在原因",
      differentials: ["感染性：病毒、細菌、真菌（Aspergillus-犬、Cryptococcus-貓）", "腫瘤（鼻腔腺癌、淋巴瘤、鱗狀細胞癌）", "異物", "牙科疾病/口鼻瘻管", "淋巴漿細胞性鼻炎", "過敏性鼻炎"],
      initialDB: ["詳細病史和身體檢查", "鼻分泌物細胞學", "顱骨X光或CT", "口腔檢查（鎮靜下）", "真菌血清學（Aspergillus、Cryptococcus）"],
      advanced: ["鼻鏡檢查和活檢", "CT（首選影像）", "MRI（評估顱內侵犯）", "真菌培養", "PCR檢測（病毒、真菌）"]
    },
    treatment: {
      overview: "針對病因治療",
      acute: [
        "細菌性鼻炎：",
        "  - 廣效抗生素（Amoxicillin-Clavulanate、Doxycycline）",
        "  - 療程2-4週",
        "病毒性鼻炎（貓）：",
        "  - 支持治療",
        "  - 抗病毒藥物（Famciclovir for FHV）",
        "  - L-lysine補充（證據有限）",
        "支持治療：",
        "  - 蒸氣吸入（鬆解分泌物）",
        "  - 鼻腔沖洗（生理鹽水）",
        "  - 確保進食（嗅覺下降影響食慾）"
      ],
      chronic: [
        "真菌性鼻炎：",
        "  - Aspergillus：局部Clotrimazole灌注或全身Itraconazole",
        "  - Cryptococcus：Fluconazole或Itraconazole長期治療",
        "淋巴漿細胞性鼻炎：",
        "  - 類固醇（Prednisolone）",
        "  - 可能需要免疫抑制治療",
        "腫瘤：放射治療、化療或姑息治療",
        "異物：鼻鏡取出"
      ]
    },
    prognosis: "感染性鼻炎經適當治療預後良好。慢性淋巴漿細胞性鼻炎需長期管理。真菌性鼻炎治療時間長但可治癒。鼻腔腫瘤預後較差。",
    pearls: [
      "單側症狀提示異物、牙科問題或腫瘤",
      "貓慢性鼻炎常為多因子",
      "CT比X光更能評估鼻腔病變範圍",
      "Aspergillus鼻炎的犬常有鼻平面色素脫失",
      "任何慢性鼻炎應排除腫瘤"
    ],
    monitoring: ["症狀改善追蹤", "真菌治療需定期血清學或影像追蹤", "腫瘤需定期分期評估"],
    reference: "Plickert HD et al: Rhinitis and sinusitis in dogs and cats. Vet Clin North Am Small Anim Pract 44:75-89, 2014"
  },

  "nasal-foreign-body": {
    zh: "鼻腔異物",
    en: "Nasal Foreign Body",
    definition: "外來物質滯留於鼻腔內，引起局部刺激、炎症和感染。常見於戶外活動的犬。",
    synonyms: ["Nasal Obstruction", "Intranasal Foreign Body", "鼻內異物"],
    epidemiology: {
      species: "犬較常見，貓少見",
      age: "任何年齡，年輕活潑犬較多",
      sex: "無明顯性別傾向",
      riskFactors: ["戶外活動", "在草叢中奔跑嗅聞", "獵犬", "狗公園活動"]
    },
    clinicalPresentation: {
      history: ["突發性打噴嚏（通常很劇烈）", "單側鼻分泌物", "用爪子扒鼻子", "可能有戶外活動後突發症狀", "鼻出血", "症狀可能在數天後減輕但不完全消失"],
      physicalExam: ["單側鼻分泌物（漿液性→黏液膿性）", "間歇性打噴嚏", "可能可見異物（前鼻孔）", "面部無變形", "氣流單側減少"]
    },
    pathophysiology: "異物（植物材料如草芒最常見）經由吸入或從口腔進入鼻腔 → 黏膜刺激和損傷 → 局部炎症反應 → 繼發細菌感染 → 可能形成肉芽腫包圍異物。若不移除，可能導致慢性化膿性鼻炎或鼻腔骨質溶解。",
    diagnosis: {
      overview: "鼻鏡檢查是診斷和治療的主要方法",
      differentials: ["鼻炎（感染性、過敏性）", "鼻腔腫瘤", "真菌性鼻炎", "牙科疾病", "口鼻瘻管"],
      initialDB: ["詳細病史（特別是症狀突發性）", "鼻腔視診", "顱骨X光"],
      advanced: ["鼻鏡檢查（前視鏡和後視鏡）", "CT（若鼻鏡無法識別）", "逆行沖洗"]
    },
    treatment: {
      overview: "鼻鏡下取出異物",
      acute: [
        "全身麻醉下鼻鏡檢查和取出：",
        "  - 前視鏡直接觀察和取出",
        "  - 後視鏡經口腔觀察鼻咽部",
        "  - 使用抓取鉗、沖洗或吸引",
        "術後可能需要：",
        "  - 短期抗生素（若有繼發感染）",
        "  - 抗發炎藥物",
        "逆行沖洗（若鏡下無法取出）"
      ],
      chronic: [
        "若異物已形成肉芽腫包圍：",
        "  - 可能需要手術切開取出",
        "移除後的感染控制：",
        "  - 抗生素療程",
        "  - 後續鼻鏡追蹤"
      ]
    },
    prognosis: "異物完整移除後預後極好。多數動物症狀迅速緩解。延遲治療可能導致慢性鼻炎或局部骨質破壞。",
    pearls: [
      "草芒（foxtail）是最常見的鼻腔異物",
      "突發劇烈打噴嚏是典型症狀",
      "鼻鏡檢查需仔細探查所有鼻道",
      "後視鏡檢查不可遺漏",
      "異物可能碎裂，需確保完整移除"
    ],
    monitoring: ["術後24-48小時症狀應明顯改善", "若症狀持續需重新評估", "完整移除後通常不需長期追蹤"],
    reference: "Tasker S et al: Aetiology and diagnosis of persistent nasal disease in the dog: a retrospective study of 42 cases. J Small Anim Pract 40:473-478, 1999"
  },

  "epistaxis": {
    zh: "鼻出血",
    en: "Epistaxis",
    definition: "鼻腔出血。可為單側或雙側，急性或慢性，可能是局部或全身性疾病的徵象。",
    synonyms: ["Nosebleed", "Nasal Hemorrhage", "流鼻血"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡，但不同年齡層病因有差異",
      sex: "無明顯性別傾向",
      riskFactors: ["鼻腔腫瘤（老年犬）", "凝血障礙", "外傷", "真菌感染", "高血壓（貓）", "滅鼠藥中毒"]
    },
    clinicalPresentation: {
      history: ["鼻孔流血", "打噴嚏帶血", "吞嚥血液後嘔吐", "可能有已知凝血問題", "可能有滅鼠藥接觸史", "可能伴隨其他出血徵象"],
      physicalExam: ["鼻孔血跡", "面部是否變形", "結膜出血（若全身性凝血問題）", "皮膚瘀斑", "牙齦出血", "心臟雜音（若高血壓或心臟病）", "眼底檢查（高血壓視網膜病變）"]
    },
    pathophysiology: "局部原因：鼻腔腫瘤侵犯血管、真菌感染破壞組織、異物創傷、炎症性損傷。全身原因：血小板減少（免疫介導、骨髓問題）、凝血因子缺乏（滅鼠藥中毒、肝病、遺傳性）、血管異常（血管炎）、高血壓（尤其貓）。",
    diagnosis: {
      overview: "需區分局部和全身原因，緊急控制出血",
      differentials: ["局部：鼻腔腫瘤、真菌感染、異物、外傷、炎症", "全身：凝血障礙（滅鼠藥、免疫介導血小板減少、vWD）、高血壓、血管炎、蜱傳疾病"],
      initialDB: ["病史（外傷、毒物接觸）", "完整身體檢查", "CBC（血小板計數）", "凝血功能（PT、aPTT）", "血壓測量"],
      advanced: ["頰黏膜出血時間（BMBT）", "von Willebrand因子測定", "鼻腔影像（CT首選）", "鼻鏡檢查和活檢", "骨髓檢查", "蜱傳疾病PCR", "腹部超音波（肝臟評估）"]
    },
    treatment: {
      overview: "控制出血、治療根本原因",
      acute: [
        "緊急止血：",
        "  - 保持冷靜（減少血壓升高）",
        "  - 冰敷鼻樑",
        "  - 輕度鎮靜（若動物焦慮）",
        "  - 腎上腺素浸濕棉球局部壓迫",
        "  - 嚴重時可能需要鼻腔填塞",
        "若為凝血障礙：",
        "  - 新鮮冷凍血漿（FFP）",
        "  - 維生素K1（滅鼠藥中毒）：2.5-5 mg/kg PO/SC q12h",
        "  - 血小板輸注（嚴重血小板減少）",
        "輸血（若貧血嚴重）"
      ],
      chronic: [
        "針對病因治療：",
        "  - 腫瘤：放射治療、化療或姑息治療",
        "  - 真菌感染：抗真菌治療",
        "  - 高血壓：降壓藥（Amlodipine）",
        "  - 免疫介導血小板減少：免疫抑制",
        "滅鼠藥中毒：維生素K1療程4-6週"
      ]
    },
    prognosis: "取決於根本原因。單純外傷預後好。凝血障礙若可糾正預後良好。鼻腔腫瘤預後謹慎至不良。高血壓控制後可減少復發。",
    pearls: [
      "雙側鼻出血更提示全身性問題",
      "單側鼻出血加面部變形高度懷疑腫瘤",
      "滅鼠藥中毒出血可能在暴露後數天才出現",
      "貓鼻出血應常規測量血壓",
      "凝血檢測應在輸血前完成"
    ],
    monitoring: ["出血量和頻率", "PCV追蹤", "凝血功能（若為凝血障礙）", "血壓監測（若高血壓）"],
    reference: "Bissett SA et al: Epistaxis in dogs: a retrospective study of 200 cases (1998-2001). J Am Vet Med Assoc 230:1040-1044, 2007"
  },

  "nasopharyngeal-polyp": {
    zh: "鼻咽息肉",
    en: "Nasopharyngeal Polyp",
    definition: "起源於中耳或咽鼓管的良性炎症性增生組織，向鼻咽部生長。是年輕貓常見的上呼吸道阻塞原因。",
    synonyms: ["Inflammatory Polyp", "Feline Nasopharyngeal Polyp", "鼻咽炎症性息肉", "貓鼻咽息肉"],
    epidemiology: {
      species: "貓（犬罕見）",
      age: "年輕貓最常見（1-5歲），但可發生於任何年齡",
      sex: "無明顯性別傾向",
      riskFactors: ["幼貓時期上呼吸道感染史", "可能與病毒感染（Calicivirus、Herpesvirus）相關"]
    },
    clinicalPresentation: {
      history: ["漸進性呼吸有聲音（鼾聲、喘鳴）", "打噴嚏", "鼻分泌物", "吞嚥困難", "聲音改變", "張口呼吸", "可能有中耳炎相關症狀（頭傾斜、前庭症狀）"],
      physicalExam: ["吸氣或呼氣時鼾聲", "開口檢查軟顎後方可見粉紅色腫塊", "可能有耳道分泌物", "可能有前庭症狀或Horner氏症候群"]
    },
    pathophysiology: "病因不完全清楚，可能與中耳或咽鼓管的慢性炎症反應相關。組織學上為血管化的纖維結締組織，覆蓋呼吸道上皮或鱗狀上皮。息肉可從中耳經咽鼓管生長至鼻咽部，或同時向外耳道方向生長。",
    diagnosis: {
      overview: "口腔檢查、耳鏡和影像學",
      differentials: ["鼻咽腫瘤（淋巴瘤、鱗狀細胞癌）", "肉芽腫", "異物", "膿腫", "鼻後孔狹窄"],
      initialDB: ["口腔檢查（鉤拉軟顎觀察鼻咽）", "耳鏡檢查", "顱骨X光"],
      advanced: ["CT（評估息肉範圍和中耳狀況）", "組織病理學（確診）", "BAER聽力測試"]
    },
    treatment: {
      overview: "手術摘除",
      acute: [
        "經口牽引摘除：",
        "  - 鎮靜或全身麻醉",
        "  - 鉤拉軟顎暴露息肉",
        "  - 使用止血鉗夾住息肉基部",
        "  - 輕柔持續牽引直到完整摘除",
        "術後類固醇：",
        "  - 可能減少復發率",
        "  - Prednisolone 1-2 mg/kg PO逐漸減量"
      ],
      chronic: [
        "若復發或有中耳累及：",
        "  - 腹側鼓室骨泡切開術（VBO）",
        "  - 徹底清除中耳內息肉組織",
        "  - 合併經口摘除鼻咽部息肉",
        "術後監測：",
        "  - Horner氏症候群（常見，多為暫時性）",
        "  - 聽力評估"
      ]
    },
    prognosis: "單純牽引摘除復發率約30-50%。合併VBO大幅降低復發率。術後Horner氏症候群常見但多於數週至數月內恢復。整體預後良好。",
    pearls: [
      "年輕貓有上呼吸道症狀應考慮息肉",
      "息肉常與中耳相連，即使耳道外觀正常",
      "CT可評估中耳是否累及，幫助決定手術方式",
      "術後類固醇使用有爭議但可能有益",
      "Horner氏症候群是VBO的預期併發症"
    ],
    monitoring: ["術後定期口腔和耳部檢查", "呼吸症狀監測", "神經學狀態（若有VBO）"],
    reference: "Veir JK et al: Feline inflammatory polyps: historical, clinical, and PCR findings for feline calicivirus and feline herpes virus-1 in 28 cases. J Feline Med Surg 4:195-199, 2002"
  },

  "oronasal-fistula": {
    zh: "口鼻瘻管",
    en: "Oronasal Fistula",
    definition: "口腔與鼻腔之間的異常通道。最常見於上頷犬齒拔除後或牙周病導致的骨質破壞。導致口腔內容物進入鼻腔。",
    synonyms: ["Oronasal Communication", "口鼻廔管", "Palatal Fistula"],
    epidemiology: {
      species: "犬較常見（尤其小型犬），貓較少",
      age: "中老年動物多見",
      sex: "無明顯性別傾向",
      riskFactors: ["嚴重牙周病", "上頷犬齒拔除（不當技術）", "小型犬種（Dachshund、Poodle、Yorkshire Terrier）", "口腔腫瘤切除後", "外傷", "先天性腭裂"]
    },
    clinicalPresentation: {
      history: ["進食時打噴嚏", "單側鼻分泌物（常含食物殘渣）", "慢性鼻炎", "拔牙後症狀", "口臭"],
      physicalExam: ["口腔檢查可見瘻管開口（通常在上頷犬齒區）", "可能用探針確認通道", "鼻分泌物", "牙周病或缺牙徵象"]
    },
    pathophysiology: "牙周病：上頷犬齒周圍骨質破壞 → 齒槽骨和硬顎吸收 → 口腔與鼻腔相通。拔牙後：不當拔牙技術損傷鼻腔底部 → 癒合不良形成瘻管。口腔內容物（食物、液體、細菌）進入鼻腔 → 慢性鼻炎和感染。",
    diagnosis: {
      overview: "口腔檢查和探查確診",
      differentials: ["原發性鼻炎", "鼻腔異物", "鼻腔腫瘤", "真菌性鼻炎"],
      initialDB: ["詳細口腔檢查（鎮靜下）", "牙周探針探查", "牙科X光或CT"],
      advanced: ["顱骨CT（評估瘻管範圍和鼻腔狀況）", "鼻鏡檢查", "鼻分泌物細胞學和培養"]
    },
    treatment: {
      overview: "手術修補瘻管",
      acute: [
        "瘻管修補術：",
        "  - 全身麻醉、適當定位",
        "  - 清創瘻管邊緣",
        "  - 黏膜瓣技術閉合（單層或雙層）",
        "  - 無張力縫合很重要",
        "  - 常用技術：旋轉瓣、推進瓣",
        "術前/術後抗生素",
        "止痛藥"
      ],
      chronic: [
        "術後護理：",
        "  - 軟食2-3週",
        "  - 避免咀嚼玩具",
        "  - 伊莉莎白項圈防止舔舐",
        "  - 抗生素療程7-14天",
        "若初次修補失敗：",
        "  - 等待4-6週再次手術",
        "  - 考慮不同瓣技術或補綴材料",
        "預防：",
        "  - 正確的拔牙技術",
        "  - 牙周病早期治療"
      ]
    },
    prognosis: "手術修補成功率約75-85%。小型瘻管預後較好。需要第二次手術的約15-25%。癒合後鼻炎症狀應改善。",
    pearls: [
      "上頷犬齒拔除後應常規檢查是否有口鼻通道",
      "若拔牙時發現口鼻通道，應立即修補",
      "無張力縫合是成功的關鍵",
      "雙層閉合比單層更可靠",
      "小型犬因骨質薄更易發生"
    ],
    monitoring: ["術後10-14天複檢", "縫線拆除", "長期追蹤症狀是否復發"],
    reference: "Marretta SM: Maxillofacial surgery. Vet Clin North Am Small Anim Pract 28:1285-1296, 1998"
  },

  // ==================== 咽喉及唾液腺疾病 ====================

  "pharyngitis": {
    zh: "咽炎",
    en: "Pharyngitis",
    definition: "咽部（包括口咽和鼻咽）的炎症。可為原發性或繼發於全身性疾病。常伴隨扁桃腺炎。",
    synonyms: ["Sore Throat", "Throat Inflammation", "喉嚨發炎"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡",
      sex: "無明顯性別傾向",
      riskFactors: ["上呼吸道感染", "反覆嘔吐", "異物", "口腔疾病", "免疫抑制", "群居環境（犬舍）"]
    },
    clinicalPresentation: {
      history: ["吞嚥困難或疼痛", "乾咳或作嘔", "拒食或厭食", "流涎", "聲音改變", "發燒", "頸部觸診敏感"],
      physicalExam: ["咽部黏膜紅腫", "扁桃腺腫大（若有扁桃腺炎）", "可能有黏液或膿性分泌物", "頸部淋巴結腫大", "發燒", "脫水（若進食困難）"]
    },
    pathophysiology: "感染性：病毒（犬瘟熱、犬副流感、貓皰疹病毒）→ 黏膜損傷 → 繼發細菌感染。非感染性：胃酸反流、異物刺激、化學物質刺激、免疫介導。炎症導致咽部水腫和疼痛 → 吞嚥困難。",
    diagnosis: {
      overview: "臨床檢查和排除其他咽部疾病",
      differentials: ["扁桃腺炎", "咽部異物", "咽部腫瘤", "軟顎過長", "狂犬病（鑑別診斷）", "重症肌無力（若有巨食道）"],
      initialDB: ["詳細病史", "口腔和咽部檢查（鎮靜下）", "頸部觸診", "體溫測量"],
      advanced: ["頸部X光", "內視鏡檢查", "培養和藥敏試驗", "活檢（若懷疑腫瘤）"]
    },
    treatment: {
      overview: "支持治療和針對病因治療",
      acute: [
        "感染性咽炎：",
        "  - 抗生素（Amoxicillin-Clavulanate）7-14天",
        "  - 止痛/抗發炎（NSAIDs或短期類固醇）",
        "支持治療：",
        "  - 軟食或流質食物",
        "  - 確保水分攝取",
        "  - 必要時靜脈輸液",
        "異物：鎮靜下取出"
      ],
      chronic: [
        "反覆發作：",
        "  - 尋找潛在原因（免疫問題、反流）",
        "  - 管理胃食道反流",
        "  - 考慮扁桃腺切除（若反覆扁桃腺炎）",
        "腫瘤性：適當的腫瘤治療"
      ]
    },
    prognosis: "單純感染性咽炎預後良好。異物移除後恢復快。慢性或反覆發作需要找出根本原因。",
    pearls: [
      "吞嚥困難伴神經學症狀應考慮狂犬病",
      "慢性嘔吐的動物常有繼發性咽炎",
      "短頭種更容易有咽部問題",
      "群居環境中可能有傳染性病原",
      "鎮靜下完整的口咽檢查很重要"
    ],
    monitoring: ["症狀改善", "進食和飲水恢復", "體重維持", "若反覆發作需進一步檢查"],
    reference: "Hawkins EC: Disorders of the pharynx. In: Nelson RW, Couto CG (eds): Small Animal Internal Medicine, 5th Ed. Elsevier, 2014"
  },

  "tonsillitis": {
    zh: "扁桃腺炎",
    en: "Tonsillitis",
    definition: "扁桃腺（位於咽部的淋巴組織）的炎症和腫大。犬較常見，可為原發性或繼發於其他疾病。",
    synonyms: ["Tonsillar Inflammation", "扁桃體炎", "Tonsillar Enlargement"],
    epidemiology: {
      species: "犬較常見，貓少見",
      age: "年輕犬較多（<3歲）",
      sex: "無明顯性別傾向",
      riskFactors: ["小型犬", "慢性嘔吐", "慢性咳嗽", "口腔感染", "免疫抑制"]
    },
    clinicalPresentation: {
      history: ["乾咳或作嘔", "吞嚥困難", "拒食", "流涎", "口臭", "發燒", "頸部淋巴結腫大"],
      physicalExam: ["扁桃腺從扁桃腺窩突出", "扁桃腺紅腫", "可能有膿點或膿性分泌物", "口腔其他部位可能正常", "頸部淋巴結腫大"]
    },
    pathophysiology: "原發性：細菌感染（Streptococcus、Staphylococcus、E. coli）導致扁桃腺發炎。繼發性（更常見）：慢性嘔吐的胃酸刺激、慢性咳嗽的呼吸道分泌物刺激、牙周病細菌擴散、全身性感染的局部表現。扁桃腺腫大可能導致上呼吸道部分阻塞。",
    diagnosis: {
      overview: "口腔檢查即可診斷，需尋找潛在原因",
      differentials: ["扁桃腺腫瘤（淋巴瘤、鱗狀細胞癌）", "反應性增生", "全身性淋巴瘤累及"],
      initialDB: ["口腔檢查", "扁桃腺外觀評估", "全身檢查（尋找原發病）", "CBC"],
      advanced: ["扁桃腺培養和藥敏", "細針抽吸細胞學", "活檢（若懷疑腫瘤）", "胸腔X光（若慢性咳嗽）"]
    },
    treatment: {
      overview: "抗生素治療原發性扁桃腺炎，治療潛在原因",
      acute: [
        "抗生素治療：",
        "  - Amoxicillin-Clavulanate 12.5-25 mg/kg PO q12h",
        "  - 療程10-14天",
        "止痛/抗發炎：",
        "  - NSAIDs短期使用",
        "支持治療：",
        "  - 軟食",
        "  - 確保水分攝取"
      ],
      chronic: [
        "尋找並治療潛在原因：",
        "  - 胃食道反流管理",
        "  - 牙周病治療",
        "  - 慢性咳嗽原因診治",
        "扁桃腺切除術（適應症）：",
        "  - 反覆扁桃腺炎（>2-3次/年）",
        "  - 扁桃腺腫大導致呼吸困難",
        "  - 疑似腫瘤"
      ]
    },
    prognosis: "原發性扁桃腺炎對抗生素反應良好。繼發性扁桃腺炎預後取決於原發病。扁桃腺腫瘤預後依腫瘤類型而異。",
    pearls: [
      "扁桃腺炎常為繼發性，需尋找原因",
      "單側扁桃腺腫大應高度懷疑腫瘤",
      "小型犬的扁桃腺問題較常見",
      "慢性嘔吐是常見的潛在原因",
      "扁桃腺切除很少需要，除非有明確適應症"
    ],
    monitoring: ["症狀改善", "扁桃腺大小追蹤", "潛在原因控制"],
    reference: "Hawkins EC: Disorders of the pharynx. In: Nelson RW, Couto CG (eds): Small Animal Internal Medicine, 5th Ed. Elsevier, 2014"
  },

  "sialadenitis": {
    zh: "唾液腺炎",
    en: "Sialadenitis",
    definition: "唾液腺（主要為腮腺、下頷腺、舌下腺或顴腺）的炎症。可為感染性或免疫介導性。犬較常見。",
    synonyms: ["Salivary Gland Inflammation", "唾腺炎"],
    epidemiology: {
      species: "犬較常見，貓少見",
      age: "任何年齡",
      sex: "無明顯性別傾向",
      riskFactors: ["唾液腺管阻塞", "外傷", "鄰近組織感染", "免疫介導疾病"]
    },
    clinicalPresentation: {
      history: ["唾液腺區域腫脹", "疼痛（尤其進食時）", "拒食", "流涎（可能帶血）", "發燒", "可能有眼部症狀（顴腺炎累及眼窩）"],
      physicalExam: ["唾液腺區域腫脹、發熱、疼痛", "下頷腺：下頷角後方", "腮腺：耳根下方", "顴腺：眼眶下方/顴弓區", "舌下腺：舌下區域", "可能有膿性分泌物從唾液管排出"]
    },
    pathophysiology: "感染性：細菌經由唾液管逆行感染或血行感染。阻塞性：唾液管結石或狹窄導致唾液滯留和繼發感染。免疫介導性：壞死性唾液腺化生（Necrotizing Sialometaplasia）-可能與免疫介導機制相關。炎症導致腺體腫脹和疼痛，可能形成膿瘍。",
    diagnosis: {
      overview: "臨床檢查、影像學和細胞學/組織學",
      differentials: ["唾液囊腫（Sialocele）", "唾液腺腫瘤", "淋巴結腫大", "膿瘍", "顴腺黏液囊腫"],
      initialDB: ["詳細體格檢查", "細針抽吸細胞學", "頭部X光或超音波"],
      advanced: ["CT或MRI", "唾液管造影", "活檢", "培養和藥敏"]
    },
    treatment: {
      overview: "抗生素治療感染，必要時手術引流或切除",
      acute: [
        "抗生素治療：",
        "  - 廣效抗生素（Amoxicillin-Clavulanate、Clindamycin）",
        "  - 療程2-4週",
        "止痛/抗發炎：",
        "  - NSAIDs",
        "熱敷（促進引流）",
        "若有膿瘍形成：",
        "  - 切開引流",
        "  - 沖洗"
      ],
      chronic: [
        "若對藥物治療無反應或反覆發作：",
        "  - 唾液腺切除術",
        "壞死性唾液腺化生：",
        "  - 可能需要類固醇或免疫抑制",
        "  - 可能自行緩解",
        "若有結石阻塞：",
        "  - 結石移除或腺體切除"
      ]
    },
    prognosis: "感染性唾液腺炎對抗生素治療反應良好。反覆發作可能需要手術。壞死性唾液腺化生預後通常良好。腫瘤需根據類型評估。",
    pearls: [
      "顴腺炎可能被誤診為眶周蜂窩組織炎",
      "進食時疼痛加劇是特徵性表現",
      "細針抽吸可區分炎症和腫瘤",
      "壞死性唾液腺化生可能模擬腫瘤",
      "Terrier犬種更易發生唾液腺問題"
    ],
    monitoring: ["症狀改善", "腫脹消退", "進食恢復正常", "若手術則追蹤癒合"],
    reference: "Spangler WL, Culbertson MR: Salivary gland disease in dogs and cats: 245 cases (1985-1988). J Am Vet Med Assoc 198:465-469, 1991"
  },

  "sialocele": {
    zh: "唾液囊腫",
    en: "Sialocele",
    definition: "唾液在組織中積聚形成的假性囊腫（無上皮內襯）。最常見於下頷腺-舌下腺複合體。是犬最常見的唾液腺疾病。",
    synonyms: ["Salivary Mucocele", "Ranula（舌下型）", "唾液黏液囊腫", "蝦蟆腫（舌下型）"],
    epidemiology: {
      species: "犬較常見，貓少見",
      age: "2-4歲多見",
      sex: "無明顯性別傾向，部分研究顯示公犬較多",
      riskFactors: ["外傷", "唾液管阻塞", "品種傾向（German Shepherd、Poodle、Dachshund）"]
    },
    clinicalPresentation: {
      history: ["漸進性無痛腫脹", "可能有進食困難（舌下型）", "呼吸困難（咽部型）", "頸部腫塊（頸部型）"],
      physicalExam: ["軟性、波動性、無痛腫脹", "頸部型：下頷或上頸部腫脹", "舌下型（Ranula）：舌下單側或雙側藍紫色腫脹", "咽部型：咽部腫脹（可能危及呼吸道）", "顴腺型：眼周或眶後腫脹"]
    },
    pathophysiology: "唾液腺或唾液管損傷（外傷或阻塞）→ 唾液滲漏至周圍組織 → 炎症反應形成肉芽組織包圍 → 唾液持續積聚形成假性囊腫。下頷腺-舌下腺複合體最常累及。囊腫可向頸部（最常見）、舌下或咽部方向發展。",
    diagnosis: {
      overview: "臨床表現和抽吸細胞學",
      differentials: ["膿瘍", "血腫", "淋巴結腫大", "腫瘤", "甲狀腺囊腫", "鰓裂囊腫"],
      initialDB: ["觸診特徵", "細針抽吸：透明至淡黃色黏稠液體，細胞學見唾液（黏蛋白、少量細胞）", "位置評估判斷類型"],
      advanced: ["頸部超音波", "唾液管造影", "CT（評估範圍和相關結構）"]
    },
    treatment: {
      overview: "手術切除受累唾液腺是根治方法",
      acute: [
        "緊急情況（咽部型危及呼吸）：",
        "  - 抽吸減壓",
        "  - 必要時氣管切開",
        "  - 計畫性手術",
        "單純抽吸（暫時性措施）：",
        "  - 抽出唾液減輕症狀",
        "  - 通常會復發"
      ],
      chronic: [
        "根治性手術：",
        "  - 下頷腺-舌下腺複合體切除（最常用）",
        "  - 囊腫壁不需完全切除",
        "  - 需識別並切除受累側腺體",
        "舌下型（Ranula）：",
        "  - 囊腫造袋術（Marsupialization）或",
        "  - 合併唾液腺切除",
        "顴腺囊腫：",
        "  - 顴腺切除（需眶下入路）"
      ]
    },
    prognosis: "唾液腺切除後預後極好，復發率低（<5%）。單純抽吸復發率高。咽部型若及時處理預後良好。",
    pearls: [
      "囊腫可能在對側形成（雙側需評估）",
      "術中識別正確側別很重要",
      "抽吸液的黏稠特性有助於診斷",
      "舌下型可能影響進食和呼吸",
      "造袋術復發率較腺體切除高"
    ],
    monitoring: ["術後腫脹消退", "進食和吞嚥功能", "對側是否發生"],
    reference: "Bellenger CR, Simpson DJ: Canine sialadenitis: 60 clinical cases. J Small Anim Pract 33:376-380, 1992"
  },

  "zygomatic-mucocele": {
    zh: "顴骨黏液囊腫",
    en: "Zygomatic Mucocele",
    definition: "顴腺（Zygomatic Gland）唾液滲漏形成的假性囊腫。顴腺位於眼眶下方，囊腫常導致眼周或眶後腫脹。相對少見但需與眼眶疾病鑑別。",
    synonyms: ["Zygomatic Sialocele", "Zygomatic Salivary Mucocele", "顴腺囊腫", "顴腺黏液囊腫"],
    epidemiology: {
      species: "犬較常見，貓罕見",
      age: "中年犬較多",
      sex: "無明顯性別傾向",
      riskFactors: ["外傷", "腺體或管道阻塞", "原因常不明"]
    },
    clinicalPresentation: {
      history: ["眼周漸進性腫脹", "眼球突出", "可能有眼部不適", "開口困難（若範圍大）", "通常無疼痛"],
      physicalExam: ["眼眶下方或眶後波動性腫脹", "眼球偏位或突出", "第三眼瞼突出", "開口時可能加重腫脹", "口腔檢查可能見上頷後區腫脹"]
    },
    pathophysiology: "顴腺位於眼眶腹側，唾液管開口於上頷第一臼齒對側口腔黏膜。腺體或管道損傷 → 唾液滲漏 → 在眶周組織積聚形成假性囊腫 → 可能向眶後或頰部擴展。由於位置關係，常模擬眼眶腫瘤或膿瘍。",
    diagnosis: {
      overview: "需與眼眶疾病鑑別，影像學和抽吸細胞學有幫助",
      differentials: ["眶後膿瘍", "眼眶腫瘤", "顴腺腫瘤", "顴腺炎", "外傷性血腫", "蜂窩組織炎"],
      initialDB: ["眼科檢查", "口腔檢查（評估口腔內腫脹）", "細針抽吸：透明黏稠唾液樣液體", "眼壓測量"],
      advanced: ["CT或MRI（最有價值）", "超音波", "唾液管造影"]
    },
    treatment: {
      overview: "顴腺切除是根治方法",
      acute: [
        "暫時減壓（若有急性眼球壓迫）：",
        "  - 細針抽吸",
        "  - 計畫性手術"
      ],
      chronic: [
        "顴腺切除術：",
        "  - 通常經由口腔入路",
        "  - 或結合眶下入路",
        "  - 需識別並結紮唾液管",
        "  - 保護眼眶內結構",
        "術後管理：",
        "  - 抗生素預防感染",
        "  - 止痛藥",
        "  - 軟食數天"
      ]
    },
    prognosis: "手術切除後預後良好。眼球功能通常可保留。復發罕見。",
    pearls: [
      "顴骨黏液囊腫常被誤診為眶後膿瘍或腫瘤",
      "抽吸液的黏稠特性是關鍵診斷線索",
      "CT可清楚顯示囊腫範圍和與眼眶關係",
      "眶後膿瘍通常有疼痛，囊腫通常無痛",
      "口腔入路是最常用的手術途徑"
    ],
    monitoring: ["眼球位置恢復", "視力保持", "腫脹消退", "術後感染監測"],
    reference: "Cannon MS et al: Clinical and diagnostic imaging findings in dogs with zygomatic sialadenitis: 11 cases (1990-2009). J Am Vet Med Assoc 239:1211-1218, 2011"
  }

};

// 疾病別名映射（用於搜尋）
const ENT_DISEASE_ALIASES = {
  // 耳部疾病
  "外耳炎": "otitis-externa",
  "耳道炎": "otitis-externa",
  "耳朵感染": "otitis-externa",
  "ear infection": "otitis-externa",
  "外耳道炎": "otitis-externa",

  "中耳炎": "otitis-media-interna",
  "內耳炎": "otitis-media-interna",
  "中內耳炎": "otitis-media-interna",
  "middle ear infection": "otitis-media-interna",
  "inner ear infection": "otitis-media-interna",

  "耳血腫": "aural-hematoma",
  "耳殼血腫": "aural-hematoma",
  "耳翼血腫": "aural-hematoma",
  "ear hematoma": "aural-hematoma",

  "耳息肉": "ear-polyp",
  "炎症性息肉": "ear-polyp",
  "inflammatory polyp": "ear-polyp",

  "聾": "deafness",
  "耳聾": "deafness",
  "失聰": "deafness",
  "聽力喪失": "deafness",
  "hearing loss": "deafness",

  // 鼻部疾病
  "鼻炎": "rhinitis",
  "鼻腔炎": "rhinitis",
  "流鼻涕": "rhinitis",
  "nasal inflammation": "rhinitis",

  "鼻腔異物": "nasal-foreign-body",
  "鼻內異物": "nasal-foreign-body",
  "nasal foreign body": "nasal-foreign-body",

  "鼻出血": "epistaxis",
  "流鼻血": "epistaxis",
  "鼻血": "epistaxis",
  "nosebleed": "epistaxis",

  "鼻咽息肉": "nasopharyngeal-polyp",
  "鼻咽炎症性息肉": "nasopharyngeal-polyp",
  "貓鼻咽息肉": "nasopharyngeal-polyp",
  "nasopharyngeal polyp": "nasopharyngeal-polyp",

  "口鼻瘻管": "oronasal-fistula",
  "口鼻廔管": "oronasal-fistula",
  "oronasal fistula": "oronasal-fistula",

  // 咽喉及唾液腺疾病
  "咽炎": "pharyngitis",
  "喉嚨發炎": "pharyngitis",
  "sore throat": "pharyngitis",

  "扁桃腺炎": "tonsillitis",
  "扁桃體炎": "tonsillitis",
  "tonsil infection": "tonsillitis",

  "唾液腺炎": "sialadenitis",
  "唾腺炎": "sialadenitis",
  "salivary gland inflammation": "sialadenitis",

  "唾液囊腫": "sialocele",
  "唾液黏液囊腫": "sialocele",
  "蝦蟆腫": "sialocele",
  "ranula": "sialocele",
  "salivary mucocele": "sialocele",

  "顴骨黏液囊腫": "zygomatic-mucocele",
  "顴腺囊腫": "zygomatic-mucocele",
  "顴腺黏液囊腫": "zygomatic-mucocele",
  "zygomatic sialocele": "zygomatic-mucocele"
};

// 導出（若在模組環境中使用）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ENT_DISEASES, ENT_DISEASE_ALIASES };
}

console.log("ENT Disease Info loaded:", Object.keys(ENT_DISEASES).length, "diseases");

// Batch A-2: ENT/耳鼻 — 10 diseases structured data
// Sources: MSD Veterinary Manual, PubMed, VCA, Cornell, ACVS, dvm360

module.exports = {
  "otitis-interna": {
    zh: "內耳炎",
    en: "Otitis Interna",
    definition: "內耳（迷路）的炎症性疾病，通常由中耳炎向內蔓延引起，影響前庭器官和耳蝸結構，導致平衡障礙和聽力損失。是周邊前庭症候群的重要鑑別診斷之一。",
    synonyms: ["內耳感染", "迷路炎", "Labyrinthitis", "Inner Ear Infection"],
    epidemiology: {
      species: "犬貓均可發生，犬較常見（因外耳炎→中耳炎→內耳炎的進展路徑）",
      age: "任何年齡，慢性外耳炎患犬風險增加",
      sex: "無明顯性別傾向",
      riskFactors: ["慢性外耳炎病史", "長耳品種（Cocker Spaniel、Basset Hound）", "鼓膜穿孔", "中耳炎未治療", "鼻咽息肉（貓）"]
    },
    clinicalPresentation: {
      history: ["頭部傾斜（患側）", "行走不穩/轉圈", "嘔吐（前庭刺激）", "聽力下降", "耳部疼痛或搔抓", "食慾下降"],
      physicalExam: ["頭部傾斜向患側", "水平或旋轉性眼球震顫（快相朝向健側）", "共濟失調（前庭性）", "霍納氏症候群（交感神經損傷）", "面神經麻痺（同側）", "耳道分泌物或異味", "觸診鼓室泡疼痛"]
    },
    pathophysiology: "感染（細菌最常見，以Pseudomonas、Staphylococcus為主）經由穿孔鼓膜從中耳蔓延至內耳迷路。炎症直接破壞前庭感覺上皮（半規管、橢圓囊和球囊）導致平衡障礙，並損傷耳蝸毛細胞導致感音神經性聽力損失。膿性滲出物壓迫顏面神經（CN VII）和交感神經幹，分別引起面神經麻痺和霍納氏症候群。嚴重時感染可穿破岩骨蔓延至腦幹引起腦膜腦炎。",
    diagnosis: {
      overview: "基於前庭症狀+耳部疾病證據。CT/MRI是評估鼓室泡和內耳結構的金標準",
      differentials: ["中耳炎（無前庭症狀）", "特發性前庭症候群", "中樞性前庭疾病（腦幹病變）", "鼻咽息肉（貓）", "耳毒性藥物"],
      initialDB: ["耳鏡檢查（鼓膜完整性、外耳道分泌物）", "神經學檢查（區分周邊vs中樞前庭）", "鼓室泡X光（鼓室泡硬化或溶解）", "耳道分泌物細菌培養及藥敏試驗"],
      advanced: ["CT（鼓室泡骨變化的最佳評估）", "MRI（內耳軟組織和腦幹評估）", "肌電圖（面神經功能）", "BAER（聽力評估）"]
    },
    treatment: {
      overview: "長期全身性抗生素（4-6週以上）為基石，嚴重病例需手術引流鼓室泡",
      acute: [
        "全身性抗生素：依據培養藥敏選擇（經驗性首選Fluoroquinolone或Cephalosporin）",
        "療程至少4-6週（骨和內耳穿透性考量）",
        "Pseudomonas感染：Enrofloxacin 5-20 mg/kg PO q24h或Marbofloxacin",
        "抗發炎：Prednisolone 0.5-1 mg/kg PO q24h漸減",
        "止吐：Maropitant 1 mg/kg SC/PO q24h（前庭症狀嚴重時）",
        "耳道沖洗（鼓膜穿孔時需使用生理鹽水）"
      ],
      chronic: [
        "嚴重/難治病例：鼓室泡截骨術（Ventral Bulla Osteotomy, VBO）引流",
        "全耳道切除+鼓室泡截骨術（TECA-LBO，終末期耳病）",
        "持續耳道維護和清潔",
        "治療潛在原因（過敏、外耳炎）"
      ]
    },
    prognosis: "82%的犬中耳/內耳炎可用藥物和耳道沖洗成功控制。前庭症狀通常在2-4週內明顯改善，但可能遺留永久性頭部傾斜或輕度平衡障礙。聽力損失可能為永久性。面神經麻痺多數可恢復但需數週至數月。併發腦膜腦炎者預後較差。",
    pearls: [
      "內耳炎的眼球震顫為水平或旋轉性，快相朝向健側——與中樞前庭疾病的方向多變性不同",
      "霍納氏症候群（瞳孔縮小、眼瞼下垂、第三眼瞼脫出）常伴隨內耳炎/中耳炎",
      "CT比X光更敏感於偵測鼓室泡病變",
      "貓的中耳炎/內耳炎應排除鼻咽息肉",
      "耳毒性藥物（Gentamicin耳滴劑）在鼓膜穿孔時禁用——可加重內耳損傷"
    ],
    diagnosticAlgorithm: {
      title: "內耳炎 診斷流程",
      steps: [
        { step: 1, action: "前庭症狀評估", details: "神經學檢查區分周邊vs中樞前庭疾病", findings: ["頭部傾斜方向", "眼球震顫類型和方向", "姿態反應（周邊正常/中樞異常）", "意識狀態（周邊正常/中樞可能異常）"] },
        { step: 2, action: "耳部檢查", details: "耳鏡檢查+鼓膜評估+培養", findings: ["鼓膜完整性", "外耳道分泌物性質", "細菌培養及藥敏", "面神經功能和霍納氏症候群"] },
        { step: 3, action: "影像學評估", details: "CT/MRI評估鼓室泡和內耳", findings: ["CT：鼓室泡骨溶解或硬化", "鼓室泡內軟組織密度增加", "MRI：內耳訊號改變", "排除中樞前庭病變"] },
        { step: 4, action: "治療計畫", details: "依嚴重程度選擇藥物或手術", findings: ["培養導向抗生素4-6週", "抗發炎+止吐", "嚴重→手術（VBO或TECA-LBO）", "追蹤前庭症狀和聽力"] }
      ]
    },
    monitoring: ["前庭症狀改善程度", "面神經功能恢復", "聽力評估（BAER）", "耳道分泌物培養追蹤", "影像學追蹤（鼓室泡癒合）"],
    reference: "MSD Veterinary Manual: Otitis Media and Interna 2023; MSPCA-Angell: Otitis Media/Interna and Neurologic Deficits"
  },

  "nasopharyngeal-polyp": {
    zh: "鼻咽息肉",
    en: "Nasopharyngeal Polyp",
    definition: "源自中耳或耳咽管黏膜的良性炎性組織腫塊，可向鼻咽部或外耳道延伸生長，造成上呼吸道阻塞和/或中耳疾病。主要發生於幼貓，為貓上呼吸道阻塞的重要鑑別診斷。",
    synonyms: ["鼻咽部息肉", "耳咽息肉", "Inflammatory Polyp", "Aural Polyp"],
    epidemiology: {
      species: "幾乎僅見於貓（犬極罕見）",
      age: "幼貓和青年貓最常見（多數<2歲）",
      sex: "無明顯性別傾向",
      riskFactors: ["幼齡（<1歲最常見）", "上呼吸道感染史（可能為觸發因素）", "中耳慢性炎症", "先天性因素（耳咽管上皮異常）"]
    },
    clinicalPresentation: {
      history: ["漸進性呼吸雜音（打鼾聲/鼻鼾）", "慢性鼻分泌物（單側或雙側）", "吞嚥困難", "耳部搔抓或頭部搖晃", "聽力下降", "打噴嚏"],
      physicalExam: ["吸氣性鼻鼾（stertor）", "口咽部可見粉紅色腫塊（軟腭後方）", "外耳道可見腫塊（耳道型）", "鼓膜膨出", "頭部傾斜（中耳受累時）", "霍納氏症候群（罕見）"]
    },
    pathophysiology: "息肉起源於中耳黏膜或耳咽管上皮的慢性炎症反應，確切病因不明，可能與上呼吸道病毒感染（如FHV-1、FCV）後的慢性炎症有關。組織學為高度血管化的纖維結締組織被覆上皮。息肉可沿耳咽管向鼻咽部延伸（鼻咽型），或經鼓膜向外耳道延伸（耳道型），或同時雙向生長。鼻咽型造成鼻咽部機械性阻塞。",
    diagnosis: {
      overview: "口腔檢查+耳鏡+影像學。軟腭後方或外耳道可視化腫塊高度提示，CT/MRI評估範圍，組織病理確診",
      differentials: ["鼻咽腫瘤", "鼻咽狹窄", "異物", "慢性鼻炎", "鼻咽部膿腫"],
      initialDB: ["口腔檢查（輕翻軟腭觀察鼻咽部）", "耳鏡檢查（外耳道型息肉）", "鼓室泡X光", "鎮靜下鼻咽鏡檢查"],
      advanced: ["CT（金標準：評估鼓室泡受累和息肉範圍）", "MRI（軟組織詳細評估）", "組織病理學確診", "細菌培養（二次感染）"]
    },
    treatment: {
      overview: "手術切除為標準治療。牽拉法簡單但復發率較高，鼓室泡截骨術復發率最低",
      acute: [
        "牽拉法切除（Traction-avulsion）：鎮靜下經口或經耳道牽拉息肉至基底部斷裂",
        "術後Prednisolone 1-2 mg/kg PO q24h漸減2-3週（降低復發率）",
        "鼓室泡截骨術（Ventral Bulla Osteotomy, VBO）：適用於鼓室泡受累病例",
        "術後抗生素：Amoxicillin-clavulanate 12.5-25 mg/kg PO q12h × 2-4週"
      ],
      chronic: [
        "追蹤監測復發（牽拉法復發率15-50%）",
        "復發病例考慮VBO",
        "治療併發中耳炎",
        "長期呼吸功能監測"
      ]
    },
    prognosis: "牽拉法切除後復發率15-50%，加用類固醇可降低復發率。鼓室泡截骨術復發率最低（<5%）。大多數貓經適當手術治療後可完全治癒。術後可能出現暫時性霍納氏症候群或面神經麻痺（通常數週恢復）。早期診斷和治療預後更佳。",
    pearls: [
      "鼻咽息肉幾乎是貓的專屬疾病——幼貓慢性鼻鼾聲首先考慮",
      "牽拉法+術後類固醇是侵入性最小的治療，但復發率15-50%",
      "VBO復發率最低但手術較大",
      "組織病理學是確診和排除腫瘤的關鍵",
      "術後暫時性霍納氏症候群常見且通常會恢復"
    ],
    diagnosticAlgorithm: {
      title: "鼻咽息肉 診斷流程",
      steps: [
        { step: 1, action: "臨床懷疑", details: "幼貓+慢性上呼吸道阻塞+吸氣性鼻鼾", findings: ["年齡<2歲", "吸氣性鼻鼾（stertor）", "慢性鼻分泌物", "耳部症狀（搔抓、頭搖）"] },
        { step: 2, action: "直接觀察", details: "鎮靜下口腔和耳道檢查", findings: ["軟腭後方可見粉紅色腫塊", "外耳道可見腫塊", "鼓膜異常（膨出/穿孔）", "觸診鼓室泡"] },
        { step: 3, action: "影像學評估", details: "CT評估鼓室泡和息肉範圍", findings: ["鼓室泡充填軟組織密度", "息肉延伸方向和範圍", "雙側vs單側", "排除腫瘤性病變"] },
        { step: 4, action: "手術切除與確診", details: "牽拉法或VBO切除+組織病理", findings: ["組織病理：炎性纖維結締組織", "排除腫瘤", "術後類固醇預防復發", "追蹤監測復發"] }
      ]
    },
    monitoring: ["術後呼吸功能", "復發監測（尤其牽拉法後3-6個月）", "耳道和中耳狀態", "面神經功能", "霍納氏症候群恢復"],
    reference: "Cornell Feline Health Center: Nasopharyngeal Polyps; ACVS: Nasopharyngeal Polyps; Vet Surg 2016"
  },

  "chronic-rhinitis": {
    zh: "慢性鼻炎",
    en: "Chronic Rhinitis (Lymphoplasmacytic Rhinitis)",
    definition: "鼻腔黏膜的慢性炎症，以淋巴漿細胞浸潤為主要組織學特徵。犬的慢性特發性淋巴漿細胞性鼻炎（LPR）是排除腫瘤和真菌後最常見的慢性鼻病。病因通常不明（特發性），可能涉及免疫介導或過敏機制。",
    synonyms: ["淋巴漿細胞性鼻炎", "特發性慢性鼻炎", "LPR", "Idiopathic Rhinitis"],
    epidemiology: {
      species: "犬較常見，貓亦可發生但較少見",
      age: "中年至老年犬為主",
      sex: "無明顯性別傾向",
      riskFactors: ["長頭品種（Dolichocephalic breeds）", "過敏體質", "環境空氣過敏原暴露", "慢性牙齒疾病（口鼻瘻管）", "先前鼻腔疾病史"]
    },
    clinicalPresentation: {
      history: ["慢性鼻分泌物（黏液性到黏液膿性）", "持續打噴嚏", "反向打噴嚏（reverse sneezing）", "鼻出血（偶見）", "鼻塞導致張口呼吸", "病程數月至數年，對抗生素反應差"],
      physicalExam: ["鼻分泌物（單側或雙側）", "鼻腔氣流減少", "打噴嚏", "鼻孔周圍色素脫失或潰瘍（嚴重分泌物刺激）", "面部無變形（與腫瘤鑑別）", "淋巴結通常不腫大"]
    },
    pathophysiology: "確切病因不明。組織學以淋巴細胞和漿細胞浸潤鼻黏膜為特徵，伴有黏膜上皮增生、杯狀細胞增多和黏膜下腺體增生。可能涉及的機制包括：(1)環境過敏原引發的持續免疫反應，(2)先前感染後的免疫失調，(3)黏膜免疫球蛋白（尤其IgA）表達降低導致黏膜屏障功能不全。慢性炎症導致鼻甲骨破壞和鼻腔結構改變，進一步損害黏膜纖毛清除功能，形成惡性循環。",
    diagnosis: {
      overview: "排除性診斷：必須先排除腫瘤、真菌感染和異物。組織病理學確認淋巴漿細胞浸潤",
      differentials: ["鼻腔腫瘤（腺癌、淋巴瘤）", "真菌性鼻炎（Aspergillosis）", "鼻腔異物", "口鼻瘻管", "牙齒疾病"],
      initialDB: ["鼻腔X光", "鼻分泌物細胞學和培養", "牙科檢查（排除口鼻瘻管）", "血清Aspergillus抗體"],
      advanced: ["CT（鼻腔結構詳細評估，排除腫瘤和真菌斑塊）", "鼻腔鏡檢查+活檢（金標準）", "組織病理學（確認LPR，排除腫瘤）", "鼻腔沖洗細胞學"]
    },
    treatment: {
      overview: "治療困難且反應不一。抗發炎藥物為主，但療效有限，多數需長期管理而非治癒",
      acute: [
        "口服類固醇：Prednisolone 1-2 mg/kg PO q12h × 2-4週，然後漸減至最低有效劑量",
        "Piroxicam 0.3 mg/kg PO q24h（非類固醇選擇）",
        "吸入性類固醇：Fluticasone MDI via spacer（減少全身副作用）",
        "抗生素：二次細菌感染時使用（Amoxicillin-clavulanate或Doxycycline）",
        "鼻腔沖洗（生理鹽水，緩解症狀）"
      ],
      chronic: [
        "長期低劑量類固醇維持（隔日給藥）",
        "環境過敏原管理（空氣清淨器、減少灰塵）",
        "定期鼻腔沖洗",
        "抗組織胺（Cetirizine 1 mg/kg PO q12-24h，療效有限）"
      ]
    },
    prognosis: "特發性LPR是慢性進行性疾病，通常無法治癒但可管理症狀。對抗生素反應差，對類固醇反應中等但常需長期使用。生活品質通常可接受但症狀反覆發作。鼻出血反覆發作者需定期排除腫瘤發展。不影響壽命但影響生活品質。",
    pearls: [
      "慢性鼻炎是排除性診斷——必須先排除腫瘤和真菌！",
      "CT+鼻腔鏡+活檢是鑑別診斷三聯檢查",
      "對抗生素反應差是LPR的特徵之一",
      "面部變形強烈提示腫瘤而非LPR",
      "吸入性類固醇可減少全身副作用，但犬的配合度是挑戰"
    ],
    diagnosticAlgorithm: {
      title: "慢性鼻炎 診斷流程",
      steps: [
        { step: 1, action: "臨床評估", details: "慢性鼻分泌物病史和特徵", findings: ["分泌物性質（黏液/膿/血）", "單側vs雙側", "面部是否變形", "牙齒和口腔檢查"] },
        { step: 2, action: "排除常見病因", details: "影像學和血清學排除腫瘤和真菌", findings: ["CT：鼻甲骨變化模式", "Aspergillus血清學", "牙科X光（口鼻瘻管）", "面部變形→高度懷疑腫瘤"] },
        { step: 3, action: "鼻腔鏡+活檢", details: "直接觀察+組織取樣", findings: ["黏膜增生和充血", "排除腫塊病變", "多點活檢", "沖洗細胞學"] },
        { step: 4, action: "組織病理確認", details: "確認LPR並排除其他病因", findings: ["淋巴漿細胞浸潤為主", "排除腫瘤和真菌", "制定長期管理計畫", "定期追蹤（排除腫瘤發展）"] }
      ]
    },
    monitoring: ["症狀嚴重程度評分", "鼻分泌物性質變化", "定期影像追蹤（排除腫瘤發展）", "類固醇副作用監測", "生活品質評估"],
    reference: "Plickert HD, et al. Canine chronic inflammatory rhinitis. Vet Clin North Am Small Anim Pract 2006;36(4):799-820; Irish Vet J 2018"
  },

  "ear-mites": {
    zh: "耳疥蟲感染",
    en: "Ear Mites (Otodectes cynotis)",
    definition: "由耳疥蟲（Otodectes cynotis）寄生於外耳道引起的高度傳染性外寄生蟲病。是貓外耳炎最常見的原因（佔50-85%），犬亦常見。蟲體生活在耳道表面，以組織液和碎屑為食，引發強烈搔癢和炎症。",
    synonyms: ["耳蟎", "耳蟲", "Otodectic Mange", "Otoacariasis"],
    epidemiology: {
      species: "貓比犬更常見；亦可感染雪貂",
      age: "幼年動物最常見（幼貓幼犬），但任何年齡均可感染",
      sex: "無明顯性別傾向",
      riskFactors: ["幼齡動物", "多貓/多犬家庭（高度傳染性）", "收容所或繁殖場", "流浪/半戶外貓", "與感染動物直接接觸"]
    },
    clinicalPresentation: {
      history: ["劇烈耳部搔癢", "頻繁搖頭", "耳部搔抓", "深色耳道分泌物", "耳部異味", "同居動物有類似症狀"],
      physicalExam: ["外耳道深褐色至黑色蠟狀或咖啡渣樣分泌物", "耳道紅腫", "搔癢反射（搓揉耳根時後腿蹬踢）", "耳殼內側抓傷或結痂", "耳血腫（繼發性）", "耳鏡下可見白色移動蟲體"]
    },
    pathophysiology: "O. cynotis為非穿入性表面蟲，生活週期約3週（卵→幼蟲→前若蟲→若蟲→成蟲），全部在宿主耳道完成。蟲體以表皮碎屑和組織液為食，其分泌物和排泄物引發宿主的過敏性和炎症反應。嚴重搔癢導致自我創傷。蟲體偶可轉移至皮膚其他部位引起異位性皮膚炎。繼發細菌和/或酵母菌感染常見。長期感染可導致慢性外耳道增生和中耳炎。",
    diagnosis: {
      overview: "耳鏡直接觀察蟲體或耳道分泌物顯微鏡檢查可確診。深褐色咖啡渣樣分泌物+劇烈搔癢高度提示",
      differentials: ["細菌性外耳炎", "酵母菌性外耳炎（Malassezia）", "過敏性外耳炎", "耳道異物"],
      initialDB: ["耳鏡檢查（直接觀察白色蟲體移動）", "耳道分泌物顯微鏡檢查（礦物油塗片，觀察蟲體和蟲卵）", "耳道分泌物細胞學（排除繼發感染）"],
      advanced: ["皮膚搔刮檢查（異位性感染時）", "細菌培養（繼發感染時）", "鼓膜完整性評估（排除中耳炎）"]
    },
    treatment: {
      overview: "殺蟲治療+耳道清潔+治療繼發感染。所有同居動物必須同時治療",
      acute: [
        "Selamectin（Revolution）6-12 mg/kg局部spot-on，每月一次×2-3個月",
        "Fluralaner（Bravecto）局部或口服（單次即可有效）",
        "Sarolaner（Simparica）或Afoxolaner（NexGard）口服月劑",
        "Ivermectin 0.2-0.4 mg/kg SC/PO（注意：Collie品種禁用）",
        "耳道清潔：先用耳道清潔液軟化移除分泌物",
        "局部耳滴劑含殺蟲成分（如含Thiabendazole/Pyrethrins）"
      ],
      chronic: [
        "所有同居犬貓雪貂必須同時治療（高度傳染性）",
        "環境清潔（蟲體可在環境存活數天）",
        "治療繼發細菌/酵母菌感染",
        "3週後複查確認清除（完整生活週期）"
      ]
    },
    prognosis: "使用現代殺蟲藥物預後極佳。系統性isoxazoline類藥物（Fluralaner、Sarolaner）單次即可有效清除。關鍵是所有同居動物同時治療以防止再感染。未治療可導致慢性外耳道增生和繼發性中耳炎。",
    pearls: [
      "深褐色咖啡渣樣耳道分泌物+劇烈搔癢=首先考慮耳疥蟲",
      "所有同居動物必須同時治療——這是治療失敗最常見原因",
      "現代isoxazoline類藥物（Bravecto等）單次即有效，已取代傳統多次治療",
      "Ivermectin對Collie和相關品種可能有致命毒性（MDR1基因突變）",
      "耳血腫常是未治療耳疥蟲搔癢的繼發結果"
    ],
    diagnosticAlgorithm: {
      title: "耳疥蟲感染 診斷流程",
      steps: [
        { step: 1, action: "臨床懷疑", details: "耳部搔癢+深色耳道分泌物+同居動物症狀", findings: ["劇烈耳部搔癢", "深褐色咖啡渣樣分泌物", "同居動物類似症狀", "搔癢反射陽性"] },
        { step: 2, action: "耳鏡檢查", details: "直接觀察耳道中白色移動蟲體", findings: ["白色蟲體在分泌物中移動", "耳道紅腫", "分泌物量多", "鼓膜完整性評估"] },
        { step: 3, action: "顯微鏡確認", details: "耳道分泌物礦物油塗片檢查", findings: ["成蟲（8隻腳）", "若蟲", "蟲卵", "排除其他蟎蟲"] },
        { step: 4, action: "治療與追蹤", details: "殺蟲治療+同居動物同治", findings: ["選擇系統性殺蟲藥", "耳道清潔", "所有同居動物治療", "3週後複查"] }
      ]
    },
    monitoring: ["治療後3週複查耳道（完整生活週期後）", "耳道分泌物追蹤", "搔癢症狀改善", "同居動物症狀", "繼發感染控制"],
    reference: "CAPC: Otodectic Mite Guidelines; Today's Veterinary Practice: Ear Mites 2023; VCA Animal Hospitals"
  },

  "aural-hematoma": {
    zh: "耳血腫",
    en: "Aural Hematoma (Auricular Hematoma)",
    definition: "耳翼（耳殼）軟骨與皮膚之間的血液積聚，形成柔軟波動感腫脹。通常因劇烈搖頭或搔耳導致耳翼血管破裂。不是獨立診斷，而是潛在耳部疾病（外耳炎、耳疥蟲等）引起搔癢的繼發結果。",
    synonyms: ["耳翼血腫", "耳瓣血腫", "Ear Flap Hematoma"],
    epidemiology: {
      species: "犬遠較貓常見，垂耳犬種風險最高",
      age: "任何年齡，但中老年犬較常見（慢性外耳炎病史）",
      sex: "無明顯性別傾向",
      riskFactors: ["垂耳品種（Cocker Spaniel、Basset Hound、Labrador）", "外耳炎（最常見潛在原因）", "耳疥蟲感染", "過敏性皮膚病", "凝血功能障礙（罕見）"]
    },
    clinicalPresentation: {
      history: ["耳翼突然腫脹", "搖頭或搔耳", "耳部搔癢或不適", "外耳炎病史", "一側或雙側"],
      physicalExam: ["耳翼內側柔軟波動感腫脹（如水球）", "耳翼溫熱、觸痛", "耳翼增厚", "同側外耳道可能有發炎或分泌物", "嚴重時耳翼變形"]
    },
    pathophysiology: "劇烈搖頭或搔耳造成耳翼軟骨板與皮膚之間的小血管斷裂，血液積聚於軟骨和耳翼凹面皮膚之間的潛在空間。機制可能包括：(1)直接創傷（搖頭撞擊硬物），(2)搔抓導致血管撕裂，(3)可能涉及免疫介導機制（部分病例無明確創傷史）。未治療的血腫會機化形成纖維組織，導致永久性耳翼皺縮變形（「菜花耳」）。貓的耳翼較薄，癒合後變形更明顯。",
    diagnosis: {
      overview: "臨床診斷直接明確（耳翼波動感腫脹）。重點在找出潛在原因（外耳炎、寄生蟲、過敏）",
      differentials: ["耳翼腫瘤", "耳翼蜂窩性組織炎", "膿腫", "血清腫"],
      initialDB: ["視診和觸診（波動感腫脹）", "耳鏡檢查（查找潛在外耳炎）", "耳道分泌物檢查（細胞學、蟎蟲）"],
      advanced: ["穿刺液分析（血液→血腫，膿液→膿腫）", "凝血功能（反覆或無創傷史時）", "皮膚過敏原檢測（反覆發作時）"]
    },
    treatment: {
      overview: "血腫引流+防止復發+治療潛在原因。方法從保守到手術多種選擇",
      acute: [
        "穿刺抽吸+類固醇注入：針穿抽除血液後注入Triamcinolone 1-2 mg/耳",
        "手術引流+縫合固定：切開耳翼凹面引流，放置多處穿透性褥式縫合（防止再積血）",
        "引流管放置：Penrose drain或Teat cannula留置7-14天",
        "Prednisolone 1 mg/kg PO q24h × 7-14天（部分方案）",
        "耳翼繃帶固定（減少搖頭創傷）"
      ],
      chronic: [
        "治療潛在原因（外耳炎、耳疥蟲、過敏）——最重要！",
        "耳道清潔和維護",
        "過敏管理（若為潛在因素）",
        "監測對側耳（風險增加）"
      ]
    },
    prognosis: "治療後功能性預後良好。美觀性預後取決於治療方法和時機：早期手術縫合固定美觀效果最佳，保守治療或延遲治療可能導致永久性耳翼皺縮。關鍵在治療潛在原因以防復發。未治療血腫不會危及生命但必然導致耳翼變形。",
    pearls: [
      "耳血腫不是診斷——是搔癢/搖頭的後果，必須找出並治療潛在原因",
      "治療潛在外耳炎比處理血腫本身更重要",
      "穿刺抽吸後不做任何處理→幾乎100%復發",
      "未治療的血腫會機化→永久性「菜花耳」",
      "貓的耳翼薄而癒合變形更嚴重"
    ],
    diagnosticAlgorithm: {
      title: "耳血腫 診斷流程",
      steps: [
        { step: 1, action: "確認血腫", details: "耳翼波動感腫脹的臨床診斷", findings: ["耳翼凹面柔軟波動感腫脹", "溫熱、觸痛", "穿刺抽出血液（確認非膿腫）"] },
        { step: 2, action: "查找潛在原因", details: "耳鏡+耳道分泌物檢查", findings: ["外耳炎（最常見原因）", "耳疥蟲", "過敏性皮膚病", "耳道異物"] },
        { step: 3, action: "選擇治療方案", details: "依據血腫大小和飼主期望", findings: ["小型/早期→穿刺+類固醇注入", "大型/反覆→手術縫合固定", "引流管放置7-14天", "耳翼繃帶保護"] },
        { step: 4, action: "治療潛在病因", details: "預防復發的關鍵", findings: ["外耳炎治療", "殺蟲治療（耳疥蟲）", "過敏管理", "定期耳道維護"] }
      ]
    },
    monitoring: ["術後傷口癒合", "血腫復發監測", "潛在外耳炎控制", "耳翼外觀變化", "對側耳狀態"],
    reference: "ACVS: Aural Hematoma; Cornell Feline Health Center; Merck Veterinary Manual: Auricular Hematomas 2023"
  },

  "congenital-deafness": {
    zh: "先天性耳聾",
    en: "Congenital Deafness",
    definition: "出生時即存在或出生後數週內發生的永久性聽力喪失，多數為遺傳性感音神經性耳聾，與色素基因（piebald、merle、白色基因）相關。影響超過100個犬品種。BAER（腦幹聽覺誘發反應）檢測是確診金標準。",
    synonyms: ["遺傳性耳聾", "色素相關耳聾", "Hereditary Sensorineural Deafness"],
    epidemiology: {
      species: "犬超過100個品種受影響；白色貓（尤其藍眼）亦常見",
      age: "出生即有或出生後3-4週發展（耳蝸血供退化時期）",
      sex: "部分品種有性別傾向（如Dalmatian公犬略高）",
      riskFactors: ["Piebald基因品種（Dalmatian最高約30%、Bull Terrier、English Setter、Australian Cattle Dog）", "Merle基因品種（Collie、Shetland Sheepdog、Dachshund）", "白色貓（尤其藍眼白貓，聾率可達65-85%）", "雙merle配種後代", "藍眼（與耳聾風險相關）"]
    },
    clinicalPresentation: {
      history: ["對聲音無反應（飼主報告）", "難以喚醒", "服從訓練困難", "容易受驚（被意外觸碰時）", "與同窩幼犬比較反應遲鈍", "單側聾可能不被察覺"],
      physicalExam: ["手拍測試無反應（但需排除視覺或氣流察覺）", "瞳孔對強光聲音無間接反應", "白色被毛或斑塊", "藍色虹膜（一側或雙側）", "其他方面健康正常", "神經學檢查正常（非腦部病變）"]
    },
    pathophysiology: "遺傳性感音神經性耳聾與黑色素細胞發育缺陷有關。正常情況下，耳蝸血管紋（stria vascularis）需要黑色素細胞維持內淋巴液的離子平衡（高鉀環境）。piebald或merle等白色基因抑制黑色素細胞遷移至內耳。出生後3-4週，缺乏黑色素細胞的血管紋退化→內淋巴鉀離子濃度無法維持→耳蝸毛細胞死亡→永久性感音神經性耳聾。可為單側或雙側。與中枢神經系統無關。",
    diagnosis: {
      overview: "BAER（腦幹聽覺誘發反應）檢測是唯一客觀確診方法，可區分單側vs雙側聾",
      differentials: ["獲得性耳聾（老年性、耳毒性藥物）", "傳導性聽力損失（中耳炎、耵聹栓塞）", "中樞性聽覺處理障礙"],
      initialDB: ["BAER檢測（5-6週齡即可執行）", "耳鏡檢查（排除外耳道和鼓膜異常）", "一般理學檢查", "家族史調查"],
      advanced: ["遺傳基因檢測（部分品種可用：Rottweiler-LOXHD1、Doberman-PTPRQ）", "CT（排除中耳結構異常）", "完整眼科檢查（藍眼與耳聾相關性）"]
    },
    treatment: {
      overview: "先天性感音神經性耳聾目前無法治療或逆轉。管理重點在行為適應和安全措施",
      acute: [
        "確認診斷後與飼主充分溝通（單側聾vs雙側聾的影響差異）",
        "建議BAER檢測所有繁殖候選犬",
        "聾犬不建議用於繁殖"
      ],
      chronic: [
        "視覺手勢訓練取代聲音指令",
        "振動項圈輔助溝通（非電擊項圈）",
        "安全環境管理（避免交通危險、從視線內接近）",
        "聾貓建議室內飼養"
      ]
    },
    prognosis: "先天性感音神經性耳聾為永久性，目前無治療方法。單側聾動物通常適應良好，生活品質接近正常。雙側聾動物需要特殊照護但可以有良好的生活品質。不影響壽命。通過選擇性繁殖（BAER篩選）可降低品種內發生率。",
    pearls: [
      "BAER是唯一能客觀區分單側vs雙側聾的方法——單側聾飼主常不察覺",
      "犬最早5-6週齡即可做BAER檢測",
      "白色被毛+藍眼=耳聾風險顯著增加",
      "雙merle（homozygous merle）後代聾率極高——應避免此配種",
      "聾犬可以用視覺手勢和振動訓練得很好——不需要安樂死"
    ],
    diagnosticAlgorithm: {
      title: "先天性耳聾 診斷流程",
      steps: [
        { step: 1, action: "臨床懷疑", details: "高風險品種+對聲音反應異常", findings: ["品種風險評估（Dalmatian、白色貓等）", "飼主報告對聲音無反應", "服從訓練困難", "與同窩比較反應遲鈍"] },
        { step: 2, action: "排除其他聽力障礙", details: "耳鏡+理學檢查排除傳導性問題", findings: ["耳道通暢", "鼓膜完整", "無中耳炎證據", "神經學檢查正常"] },
        { step: 3, action: "BAER確診", details: "腦幹聽覺誘發反應檢測", findings: ["雙側聾：雙耳無波形", "單側聾：一耳無波形", "正常聽力：I-V波正常", "5-6週齡即可檢測"] },
        { step: 4, action: "管理計畫", details: "繁殖建議+飼主教育", findings: ["聾犬不繁殖", "視覺訓練方案", "安全環境管理", "品種繁殖者BAER篩選建議"] }
      ]
    },
    monitoring: ["定期行為評估", "安全環境維護", "繁殖群BAER篩選計畫", "基因檢測（可用品種）"],
    reference: "Strain GM. Deafness in Dogs and Cats. CABI 2011; Merck Veterinary Manual: Deafness in Animals 2023; LSU Deafness in Dogs & Cats"
  },

  "laryngeal-paralysis": {
    zh: "喉麻痺",
    en: "Laryngeal Paralysis (GOLPP)",
    definition: "控制喉部杓狀軟骨開閉的喉返神經功能障礙，導致吸氣時杓狀軟骨無法正常外展張開，造成上呼吸道阻塞。多數為後天性，近年研究發現老年犬的喉麻痺通常是全身性多發性神經病變的一部分（GOLPP：老年性喉麻痺多發性神經病變）。",
    synonyms: ["喉部麻痺", "GOLPP", "Geriatric Onset Laryngeal Paralysis Polyneuropathy", "Lar Par"],
    epidemiology: {
      species: "犬遠較貓常見",
      age: "後天性：中老年大型犬（平均10歲以上），先天性：<1歲",
      sex: "公犬略多於母犬",
      riskFactors: ["大型和巨型品種（Labrador Retriever最常見、Golden Retriever、St. Bernard、Irish Setter）", "老年（>9歲）", "甲狀腺功能低下（有爭議的關聯性）", "先天性：Bouvier des Flandres、Dalmatian幼犬"]
    },
    clinicalPresentation: {
      history: ["漸進性吸氣性喘鳴（stridor）", "叫聲改變（沙啞或消失）", "運動不耐加重", "炎熱天氣或興奮時呼吸困難加劇", "後肢無力（GOLPP的早期神經徵象）", "進食時偶爾咳嗽或嗆咳"],
      physicalExam: ["吸氣性喘鳴（高音調stridor）", "吸氣努力增加", "黏膜可能發紺（嚴重時）", "後肢本體感覺輕微異常（GOLPP）", "肌肉萎縮（晚期）", "聲音沙啞", "高溫或興奮時症狀明顯惡化"]
    },
    pathophysiology: "GOLPP理論：大多數老年犬喉麻痺為全身性神經退行性疾病的表現，最長的神經最先受影響。喉返神經（全身最長的迷走神經分支，尤其左側繞主動脈弓）最早退化→杓狀軟骨外展肌（背側環杓肌）失去神經支配→吸氣時杓狀軟骨被動內收阻塞聲門→上呼吸道阻塞。隨病程進展，其他長神經也受影響→食道功能障礙（吞嚥困難、巨食道症）和後肢運動神經病變（後肢無力）。上呼吸道阻塞→吸氣負壓增加→喉部水腫和發炎→惡性循環。",
    diagnosis: {
      overview: "鎮靜下直接喉部觀察是確診方法——觀察杓狀軟骨在吸氣時是否正常外展",
      differentials: ["氣管塌陷", "短頭犬呼吸道症候群", "喉部腫塊/腫瘤", "會厭逆翻", "氣管異物"],
      initialDB: ["頸胸X光（排除腫塊、巨食道、肺炎）", "鎮靜下喉部檢查（金標準：觀察杓狀軟骨運動）", "神經學檢查（GOLPP相關：後肢本體感覺）"],
      advanced: ["胸腔X光（排除吸入性肺炎和巨食道症）", "甲狀腺功能檢測（排除甲低）", "肌電圖/神經傳導（GOLPP確認）", "食道造影或內視鏡（吞嚥功能評估）"]
    },
    treatment: {
      overview: "輕症保守管理，中重度手術（單側杓狀軟骨側向固定術tie-back）。手術改善呼吸但增加吸入性肺炎風險",
      acute: [
        "急性呼吸危象：鎮靜（Acepromazine 0.02-0.05 mg/kg IM）+氧氣+降溫",
        "Dexamethasone 0.1-0.2 mg/kg IV（減輕喉部水腫）",
        "氣管插管（嚴重阻塞時緊急處理）",
        "手術：單側杓狀軟骨側向固定術（Unilateral Arytenoid Lateralization, Tie-back）",
        "術後：抬高食碗、軟食、限制活動2-4週"
      ],
      chronic: [
        "輕症保守管理：避免高溫、限制劇烈運動、使用胸背帶（非頸圈）",
        "體重管理（減輕呼吸負荷）",
        "術後長期：注意吸入性肺炎風險（約25%術後發生）",
        "GOLPP進展監測（後肢功能、吞嚥功能）"
      ]
    },
    prognosis: "Tie-back手術後呼吸功能顯著改善，90%以上飼主滿意。主要風險為術後吸入性肺炎（約25%在術後某個時間點發生）。GOLPP為進行性疾病，後肢功能和食道功能可能隨時間惡化。手術後中位存活約2年（多數因GOLPP進展而非喉麻痺本身）。保守管理適用於輕症但不能逆轉病程。",
    pearls: [
      "GOLPP：大多數老年犬的喉麻痺是全身性神經退行性疾病的冰山一角",
      "鎮靜深度影響喉部檢查結果——過深的鎮靜會抑制正常杓狀軟骨運動→假陽性",
      "Tie-back手術後吸入性肺炎風險終身約25%——術前必須與飼主充分溝通",
      "急性喉部危象時Acepromazine鎮靜常比插管更有效",
      "後肢無力可能比喉部症狀更早出現（GOLPP）——需同時評估神經功能"
    ],
    diagnosticAlgorithm: {
      title: "喉麻痺 診斷流程",
      steps: [
        { step: 1, action: "臨床懷疑", details: "老年大型犬+漸進性吸氣喘鳴+叫聲改變", findings: ["吸氣性stridor", "叫聲沙啞", "運動不耐", "高溫/興奮時惡化"] },
        { step: 2, action: "排除其他上呼吸道阻塞", details: "頸胸X光+神經學檢查", findings: ["X光排除腫塊和巨食道", "神經學：後肢本體感覺評估", "排除氣管塌陷", "甲狀腺功能檢測"] },
        { step: 3, action: "喉部檢查確診", details: "適度鎮靜下直接觀察杓狀軟骨運動", findings: ["杓狀軟骨吸氣時不外展=確診", "注意鎮靜深度不要過深", "評估雙側vs單側", "排除喉部腫塊"] },
        { step: 4, action: "治療決策", details: "依嚴重程度選擇保守vs手術", findings: ["輕症→保守管理+環境控制", "中重度→Tie-back手術", "術前胸腔X光排除肺炎", "術後吸入性肺炎風險教育"] }
      ]
    },
    monitoring: ["呼吸功能評估", "術後吸入性肺炎監測（長期）", "後肢功能（GOLPP進展）", "吞嚥功能", "體重管理"],
    reference: "Stanley BJ, et al. GOLPP. J Vet Intern Med 2020; ACVS: Laryngeal Paralysis; VCA Animal Hospitals"
  },

  "nasopharyngeal-stenosis": {
    zh: "鼻咽狹窄",
    en: "Nasopharyngeal Stenosis",
    definition: "鼻咽部（後鼻孔至軟腭後方區域）的病理性狹窄，可為先天性（鼻咽閉鎖）或後天性（炎症後疤痕形成），導致嚴重鼻塞和上呼吸道阻塞。後天性多因慢性上呼吸道炎症、手術或嘔吐引起的黏膜損傷後疤痕攣縮。",
    synonyms: ["鼻咽部狹窄", "後鼻孔狹窄", "Choanal Stenosis", "Imperforate Nasopharynx"],
    epidemiology: {
      species: "犬貓均可發生，貓的報告較多",
      age: "先天性：幼齡動物；後天性：任何年齡",
      sex: "無明顯性別傾向",
      riskFactors: ["慢性上呼吸道感染（貓尤其FHV-1）", "先前鼻咽部手術", "慢性嘔吐", "鼻咽息肉切除後", "先天性鼻咽閉鎖"]
    },
    clinicalPresentation: {
      history: ["慢性嚴重鼻塞", "吸氣性鼻鼾聲（stertor）", "張口呼吸", "運動不耐", "進食困難（嚴重阻塞時）", "慢性鼻分泌物"],
      physicalExam: ["明顯吸氣性鼻鼾", "鼻腔氣流顯著減少", "張口呼吸", "鼻分泌物", "口腔檢查軟腭後方無法直接觀察（需鏡檢）"]
    },
    pathophysiology: "後天性NPS：鼻咽黏膜損傷（感染、嘔吐酸、手術創傷）→黏膜潰瘍→纖維母細胞增生和膠原沉積→疤痕組織形成→環狀或膜狀狹窄。狹窄處形成緻密纖維組織帶（web），可幾乎完全阻塞鼻咽通道。先天性NPS（鼻咽閉鎖）：胚胎發育期間鼻咽管腔化不完全，殘留骨性或膜性阻塞。兩種型態均導致嚴重鼻腔氣流限制和呼吸困難。",
    diagnosis: {
      overview: "CT和鼻咽鏡檢查是診斷金標準。CT評估狹窄範圍和骨性結構，鏡檢直接觀察狹窄程度",
      differentials: ["鼻咽息肉", "鼻咽腫瘤", "鼻腔異物", "軟腭過長", "嚴重慢性鼻炎"],
      initialDB: ["口腔檢查（軟腭後方）", "X光側位片（鼻咽氣柱中斷）", "鎮靜下鼻咽鏡檢查"],
      advanced: ["CT（金標準：評估狹窄位置、範圍和骨性結構）", "MRI（軟組織評估）", "螢光透視（吞嚥和氣流評估）", "組織活檢（排除腫瘤）"]
    },
    treatment: {
      overview: "介入性治療為主：球囊擴張、支架植入或手術切除。單純球囊擴張復發率高，支架植入效果較持久",
      acute: [
        "球囊擴張術（Balloon Dilation）：經鼻或經口導入球囊導管擴張狹窄處",
        "膜狀切除術+球囊擴張（組合技術）",
        "球囊擴張後局部Mitomycin C塗抹（抑制疤痕再形成）",
        "金屬支架植入（最持久效果）：balloon-expandable metallic stent",
        "手術切除疤痕組織+黏膜瓣修復（嚴重病例）"
      ],
      chronic: [
        "球囊擴張可能需要多次重複（復發率高）",
        "支架植入後監測：組織增生、感染、支架斷裂",
        "長期呼吸功能評估",
        "抗發炎藥物（減少再狹窄）"
      ]
    },
    prognosis: "整體成功率約78%（46例研究，中位追蹤24個月）。球囊擴張單獨使用失敗率較高，支架植入效果最持久但有組織增生、慢性感染和支架斷裂等併發症。Mitomycin C輔助球囊擴張可降低復發率。先天性鼻咽閉鎖的治療通常較後天性狹窄效果好。",
    pearls: [
      "後天性NPS最常見原因是慢性上呼吸道炎症後的疤痕形成",
      "球囊擴張簡單但復發率高——常需多次重複",
      "支架植入提供最持久效果但有長期併發症",
      "Mitomycin C（抑制纖維母細胞增生）是減少再狹窄的新輔助策略",
      "CT是評估狹窄範圍的金標準——比X光敏感得多"
    ],
    diagnosticAlgorithm: {
      title: "鼻咽狹窄 診斷流程",
      steps: [
        { step: 1, action: "臨床懷疑", details: "慢性嚴重鼻塞+吸氣性鼻鼾不對抗生素治療反應", findings: ["嚴重吸氣性鼻鼾", "鼻腔氣流極度減少", "張口呼吸", "慢性上呼吸道炎症或手術史"] },
        { step: 2, action: "影像學評估", details: "CT評估狹窄位置和範圍", findings: ["CT：鼻咽部軟組織密度增加", "狹窄位置和長度", "骨性vs膜性狹窄", "排除腫瘤性病變"] },
        { step: 3, action: "鼻咽鏡確認", details: "鎮靜下直接觀察狹窄程度", findings: ["環狀或膜狀狹窄", "狹窄程度（>70%=嚴重）", "組織活檢排除腫瘤", "評估介入治療可行性"] },
        { step: 4, action: "介入性治療", details: "球囊擴張±支架±Mitomycin C", findings: ["球囊擴張+Mitomycin C", "嚴重/反覆→支架植入", "術後呼吸改善評估", "定期追蹤再狹窄"] }
      ]
    },
    monitoring: ["呼吸功能（鼻腔氣流改善）", "鼻鼾聲減輕程度", "定期鼻咽鏡追蹤（再狹窄）", "支架併發症監測（組織增生、感染、斷裂）"],
    reference: "Berent AC, et al. Interventional treatment of benign NPS in dogs and cats: 46 cases. JAVMA 2018;253(10):1300-1311"
  },

  "otitis-externa-chronic": {
    zh: "慢性外耳炎",
    en: "Chronic Otitis Externa",
    definition: "外耳道的長期反覆發作性炎症，伴隨進行性耳道結構改變（上皮增生、腺體增生、纖維化和鈣化）。是犬最常見的皮膚病之一，通常有潛在主要原因（過敏最常見）驅動反覆感染。終末期可導致不可逆耳道狹窄需全耳道切除。",
    synonyms: ["慢性反覆性外耳炎", "End-stage Ear Disease", "Recurrent Otitis Externa"],
    epidemiology: {
      species: "犬遠較貓常見，佔犬皮膚科門診的10-20%",
      age: "任何年齡，但隨年齡增加而更常見",
      sex: "無明顯性別傾向",
      riskFactors: ["異位性皮膚炎（犬慢性外耳炎最常見主因43%）", "食物過敏", "垂耳品種（Cocker Spaniel、Basset Hound）", "多毛耳道品種（Poodle）", "耳道結構狹窄（Shar-Pei）", "游泳頻繁（耳道潮濕）"]
    },
    clinicalPresentation: {
      history: ["反覆發作的耳部搔癢", "耳道分泌物反覆出現", "頻繁搖頭", "對多次抗生素治療僅短暫改善", "病程數月至數年", "進行性惡化"],
      physicalExam: ["耳道紅腫和增厚", "耳道分泌物（黃褐色蠟狀→膿性）", "耳道狹窄（增生性改變）", "耳道觸診疼痛", "鼓膜可能穿孔", "耳殼內側苔癬化（慢性搔抓）", "耳道鈣化（觸診堅硬）"]
    },
    pathophysiology: "慢性外耳炎的PSPP模型：Primary(主因)+Secondary(繼發)+Predisposing(易感)+Perpetuating(持續)因子。主因（過敏、內分泌病）改變耳道微環境→繼發細菌（Staphylococcus、Pseudomonas）和/或酵母菌（Malassezia）過度增生→炎症循環加劇。持續因子使治療失敗：中耳炎作為持續感染庫、耳道不可逆結構改變（上皮增生→腺體增生→纖維化→鈣化）。Pseudomonas生物膜形成使抗生素治療更加困難。終末期耳道完全鈣化阻塞，藥物治療無效。",
    diagnosis: {
      overview: "臨床診斷直接，重點在找出主要原因（尤其過敏）和評估耳道結構改變程度以決定治療方向",
      differentials: ["急性外耳炎（首次發作）", "中耳炎", "耳道腫瘤", "耳道異物", "耳疥蟲"],
      initialDB: ["耳鏡檢查（耳道狀態、鼓膜、分泌物性質）", "耳道分泌物細胞學（細菌球菌vs桿菌、酵母菌、中性球）", "細菌培養+藥敏（尤其Pseudomonas疑慮時）", "皮膚病評估（過敏徵象）"],
      advanced: ["CT（評估中耳和耳道鈣化程度）", "皮膚過敏原檢測（intradermal或血清IgE）", "食物排除試驗（排除食物過敏）", "組織病理學（排除腫瘤）"]
    },
    treatment: {
      overview: "三管齊下：(1)治療主因（過敏），(2)控制繼發感染，(3)評估是否需手術。終末期耳道需TECA-LBO",
      acute: [
        "耳道清潔：鎮靜下深度沖洗（生理鹽水或專用清潔液）",
        "局部抗菌：依細胞學選擇（球菌→Fusidic acid; 桿菌→Gentamicin/Polymyxin; 酵母→Clotrimazole）",
        "全身性抗生素：Pseudomonas→Fluoroquinolone（Enrofloxacin 5-20 mg/kg PO q24h）",
        "局部類固醇（Dexamethasone或Betamethasone耳滴劑）",
        "全身性類固醇（短期衝擊：Prednisolone 1 mg/kg PO q24h × 7-14天）"
      ],
      chronic: [
        "治療潛在過敏（Oclacitinib、Lokivetmab、飲食管理）",
        "長期耳道維護清潔（飼主居家執行，頻率從每日→每週遞減）",
        "終末期耳道：全耳道切除+鼓室泡截骨術（TECA-LBO）",
        "Ablative CO2雷射（替代手術選擇）"
      ]
    },
    prognosis: "取決於耳道結構改變程度和主因控制。早期介入+過敏控制預後良好。耳道鈣化/終末期需TECA-LBO，手術預後通常良好（解決疼痛和感染）但犧牲聽力。Pseudomonas生物膜感染治療困難。關鍵在識別和管理主因（過敏），否則即使手術也可能對側耳繼續發作。",
    pearls: [
      "慢性外耳炎=有主因驅動——找不到主因就無法控制",
      "過敏是犬慢性外耳炎最常見主因（>40%）——耳炎可能是唯一的過敏表現",
      "細胞學比培養更重要——培養陽性不代表感染，細胞學看到吞噬細菌才是",
      "Pseudomonas+桿菌+耳道潰瘍=最具挑戰的組合",
      "耳道鈣化+觸診堅硬=終末期→藥物無效，需TECA-LBO"
    ],
    diagnosticAlgorithm: {
      title: "慢性外耳炎 診斷流程",
      steps: [
        { step: 1, action: "耳道評估", details: "耳鏡+細胞學+培養", findings: ["耳道增生/狹窄程度", "分泌物細胞學（球菌/桿菌/酵母菌）", "鼓膜完整性", "耳道觸感（軟→硬鈣化）"] },
        { step: 2, action: "主因調查", details: "尋找驅動因素（過敏為首）", findings: ["過敏史（季節性?全年?）", "皮膚其他病灶", "食物排除試驗", "內分泌評估（甲低）"] },
        { step: 3, action: "結構評估", details: "CT評估中耳和耳道變化", findings: ["耳道鈣化程度", "中耳受累?", "耳道殘餘管腔", "決定藥物vs手術"] },
        { step: 4, action: "治療策略", details: "感染控制+主因管理+手術評估", findings: ["急性感染控制（局部+全身）", "主因管理（過敏治療）", "終末期→TECA-LBO", "維護清潔計畫"] }
      ]
    },
    monitoring: ["耳道細胞學追蹤（治療反應）", "培養追蹤（Pseudomonas）", "過敏控制效果", "耳道結構變化", "飼主居家清潔頻率調整", "對側耳監測"],
    reference: "Today's Veterinary Practice: Chronic Otitis in Dogs 2023; MSD Veterinary Manual: Otitis Externa 2023; JAVMA 2023"
  },

  "middle-ear-effusion": {
    zh: "中耳積液",
    en: "Middle Ear Effusion (PSOM)",
    definition: "中耳腔（鼓室泡）內異常液體（黏液或漿液）積聚，導致鼓膜膨出和聽力障礙。包括原發性分泌性中耳炎（PSOM，幾乎專見於Cavalier King Charles Spaniel）和繼發於感染或外耳炎的中耳積液。PSOM的黏液極為黏稠（「膠耳」）。",
    synonyms: ["中耳積液", "膠耳", "原發性分泌性中耳炎", "PSOM", "Glue Ear", "Secretory Otitis Media"],
    epidemiology: {
      species: "犬為主，PSOM幾乎僅見於Cavalier King Charles Spaniel",
      age: "PSOM：任何年齡的Cavalier；繼發性：與外耳炎年齡分佈相同",
      sex: "無明顯性別傾向",
      riskFactors: ["Cavalier King Charles Spaniel（PSOM最高風險，可達50%）", "慢性外耳炎（繼發性中耳積液）", "短頭品種（耳咽管功能不良）", "上呼吸道感染", "其他偶報品種：Boxer、Dachshund、Shih Tzu"]
    },
    clinicalPresentation: {
      history: ["頭頸部疼痛/觸摸頸部敏感", "耳部搔抓", "搖頭", "聽力下降", "叫聲改變", "面部搔癢"],
      physicalExam: ["鼓膜膨出（耳鏡下可見）", "頸部觸診疼痛", "頭部傾斜（嚴重時）", "面神經麻痺（罕見）", "霍納氏症候群（罕見）", "外耳道可能看似正常（PSOM特徵——無外耳炎）"]
    },
    pathophysiology: "PSOM：鼓室泡內黏膜分泌細胞過度增生和活化，產生高度黏稠的黏液（「膠」），填充中耳腔。確切病因不明，可能與耳咽管功能不良（短頭構造影響引流）和品種遺傳易感性有關。黏液積聚→鼓膜膨出→鼓膜壓力→頭頸疼痛。黏液壓迫聽小骨→傳導性聽力損失。可壓迫顏面神經或交感神經→面神經麻痺或霍納氏症候群。繼發性中耳積液：外耳炎或上呼吸道感染經鼓膜穿孔或耳咽管逆行蔓延。",
    diagnosis: {
      overview: "耳鏡下鼓膜膨出+CT/MRI確認鼓室泡內容物。PSOM的鼓膜膨出但外耳道無炎症是特徵性表現",
      differentials: ["化膿性中耳炎（感染性）", "膽脂瘤", "中耳腫瘤", "鼓室泡骨折"],
      initialDB: ["耳鏡檢查（鼓膜膨出、外觀完整）", "鼓室泡X光", "神經學檢查（面神經、霍納氏）"],
      advanced: ["MRI（最可靠的診斷方式：鼓室泡內訊號改變）", "CT（鼓室泡骨變化）", "鼓膜穿刺抽吸（診斷+治療）", "抽吸液細胞學和培養"]
    },
    treatment: {
      overview: "鼓膜切開引流（myringotomy）+鼓室泡沖洗為主要治療。PSOM常需重複處理",
      acute: [
        "鼓膜切開術（Myringotomy）：經鼓膜尾腹側象限切開引流",
        "鼓室泡沖洗：生理鹽水反覆沖洗移除黏稠黏液",
        "視訊耳鏡輔助（更精確的手術和沖洗）",
        "局部Betamethasone（85%病例使用）",
        "全身性Prednisolone 0.5-1 mg/kg PO q24h漸減"
      ],
      chronic: [
        "全身性抗生素（92%病例使用，依培養選擇）",
        "黏液溶解劑（N-acetylcysteine，57%病例使用）",
        "PSOM常需多次重複myringotomy",
        "定期耳鏡追蹤鼓膜狀態"
      ]
    },
    prognosis: "PSOM為慢性反覆性疾病，多數需定期重複治療。單次引流後復發率高。長期管理以維護類固醇和定期監測為主。生活品質通常可維持但需持續獸醫照護。繼發性中耳積液如能控制原發外耳炎預後較好。面神經麻痺和霍納氏症候群治療後多數可恢復。",
    pearls: [
      "Cavalier King Charles Spaniel有頭頸疼痛或抓耳→務必考慮PSOM",
      "PSOM特徵：鼓膜膨出但外耳道看似正常——不像一般中耳炎有外耳炎",
      "MRI是偵測PSOM最可靠的影像學方法",
      "PSOM的黏液極為黏稠——需要反覆沖洗才能清除",
      "頭頸疼痛可能被誤診為頸椎病——CKCS務必排除PSOM"
    ],
    diagnosticAlgorithm: {
      title: "中耳積液/PSOM 診斷流程",
      steps: [
        { step: 1, action: "臨床懷疑", details: "品種+頭頸疼痛+耳部症狀", findings: ["Cavalier品種", "頸部觸診疼痛", "耳部搔抓/搖頭", "聽力下降"] },
        { step: 2, action: "耳鏡檢查", details: "評估鼓膜和外耳道", findings: ["鼓膜膨出（光滑完整但凸出）", "外耳道可能無炎症（PSOM特徵）", "鼓膜顏色改變", "神經學異常?"] },
        { step: 3, action: "影像確認", details: "MRI或CT評估鼓室泡", findings: ["MRI：鼓室泡高訊號", "CT：鼓室泡軟組織密度", "雙側vs單側", "排除腫瘤和膽脂瘤"] },
        { step: 4, action: "治療性引流", details: "Myringotomy+沖洗+培養", findings: ["鼓膜穿刺引流", "黏稠黏液（PSOM特徵）", "生理鹽水反覆沖洗", "培養+類固醇+抗生素"] }
      ]
    },
    monitoring: ["頭頸疼痛改善", "鼓膜狀態（定期耳鏡追蹤）", "聽力評估", "神經功能（面神經、霍納氏）", "PSOM復發監測"],
    reference: "Stern-Bertholtz W, et al. Primary secretory otitis media in CKCS. JVIM 2003; MSPCA-Angell: PSOM; Vet Dermatol 2012"
  }
};

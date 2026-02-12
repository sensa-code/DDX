const fs = require('fs');

const data = {
  "hepatocellular-carcinoma": {
    zh: "肝細胞癌",
    en: "Hepatocellular Carcinoma",
    definition: "肝細胞癌是源自肝臟實質細胞的惡性腫瘤，為犬貓最常見的原發性肝臟惡性腫瘤。可分為巨塊型（massive）、結節型（nodular）和瀰漫型（diffuse），其中巨塊型預後最佳。",
    synonyms: ["肝癌", "原發性肝細胞癌", "HCC"],
    epidemiology: { species: "犬多於貓，犬佔原發性肝腫瘤約50%", breed: "無明顯品種好發傾向", age: "好發於10歲以上老年犬貓", sex: "雄性犬略多", prevalence: "佔犬所有腫瘤約1-1.5%" },
    clinicalPresentation: { symptoms: ["厭食", "體重減輕", "嗜睡", "多飲多尿", "腹部膨脹", "嘔吐", "腹瀉", "黃疸", "腹水", "急性腹腔內出血（腫瘤破裂）"], physicalExam: ["肝腫大（觸診可及前腹部腫塊）", "腹部膨脹", "黏膜蒼白或黃染", "腹水波動感", "體況評分下降"] },
    pathophysiology: "肝細胞經歷多步驟致癌過程，包括慢性肝損傷、再生結節形成、不典型增生，最終轉化為惡性腫瘤。腫瘤細胞失去正常肝小葉結構，形成小梁狀、腺管狀或實心片狀排列。巨塊型通常為單一大腫塊，轉移率較低；瀰漫型侵犯多個肝葉，預後極差。",
    diagnosis: { primary: ["腹部超音波（評估腫塊型態及肝臟結構）", "CT/MRI（手術前分期）", "細針抽吸細胞學（FNA）", "組織病理學（確診金標準）"], differential: ["肝結節性增生", "膽管細胞癌", "肝轉移性腫瘤", "肝血管肉瘤", "肝臟淋巴瘤", "肝膿瘍"], labFindings: ["ALT/AST升高", "ALP顯著升高", "低白蛋白血症", "凝血時間延長", "貧血（腫瘤破裂出血時）"] },
    treatment: { acute: "腫瘤破裂出血時需輸血及穩定血流動力學", chronic: "巨塊型可行肝葉切除術；結節型和瀰漫型治療選擇有限", medications: ["Toceranib（犬）", "Doxorubicin（輔助化療）", "止痛藥（Tramadol、Gabapentin）", "保肝藥（SAMe、Silymarin）"], surgery: "巨塊型：肝葉切除術為首選，切除率高且預後良好；結節型/瀰漫型通常不適合手術" },
    prognosis: "巨塊型肝葉切除後中位存活時間超過1460天（>4年），預後良好。結節型中位存活約270-428天。瀰漫型預後極差，中位存活不足6個月。",
    pearls: ["巨塊型HCC手術切除後預後極佳，即使腫塊巨大也應積極評估手術可能性", "犬的肝結節性增生非常常見，細胞學有時難以與高分化HCC區分，建議組織病理確診", "ALP持續顯著升高而無明顯膽道阻塞原因時應懷疑HCC", "瀰漫型HCC常被誤診為慢性肝炎"],
    monitoring: ["術後每3個月腹部超音波追蹤", "肝指數（ALT、ALP）每月監測", "胸腔X光評估肺轉移", "凝血功能監測"],
    reference: "Blackwell's Five-Minute Veterinary Consult"
  },
  "intestinal-adenocarcinoma": {
    zh: "腸腺癌",
    en: "Intestinal Adenocarcinoma",
    definition: "腸腺癌是源自腸道腺體上皮細胞的惡性腫瘤，為犬貓最常見的腸道惡性腫瘤之一。貓以小腸好發，犬則小腸和大腸均可發生。腫瘤具有局部侵犯性強且易發生區域淋巴結轉移的特性。",
    synonyms: ["腸道腺癌", "腸癌", "消化道腺癌"],
    epidemiology: { species: "犬貓均可發生，貓略多", breed: "犬：德國牧羊犬、可卡犬、拳師犬；貓：暹羅貓好發", age: "犬平均9歲，貓平均10-12歲", sex: "雄性犬略多", prevalence: "佔犬腸道腫瘤約20-30%，貓腸道腫瘤中僅次於淋巴瘤" },
    clinicalPresentation: { symptoms: ["慢性嘔吐", "體重減輕", "厭食", "腹瀉（可為血便）", "排便困難（大腸型）", "裡急後重", "腹痛", "腸梗阻症狀", "漸進性消瘦", "脫水"], physicalExam: ["腹部觸診可及腫塊", "腸管增厚", "腸繫膜淋巴結腫大", "體況評分下降", "直腸指檢可觸及腫塊（大腸型）", "脫水徵象"] },
    pathophysiology: "腺癌起源於腸黏膜腺體上皮，呈環狀狹窄（annular stenosing）生長模式為主，導致腸腔漸進性狹窄和阻塞。腫瘤細胞穿透腸壁各層，侵犯漿膜面後可能導致腹膜播種（carcinomatosis）。區域淋巴結轉移發生率高達50-70%。",
    diagnosis: { primary: ["腹部超音波（腸壁增厚、失去分層結構）", "內視鏡及活檢（十二指腸/結腸型）", "剖腹探查及全層活檢", "腹部CT（分期評估）"], differential: ["腸道淋巴瘤", "發炎性腸病（IBD）", "腸道平滑肌肉瘤", "腸道GIST", "腸套疊", "異物阻塞"], labFindings: ["低白蛋白血症", "貧血（慢性失血）", "低血糖（偶見）", "電解質失衡", "糞便潛血陽性"] },
    treatment: { acute: "腸阻塞時需緊急手術減壓、輸液矯正電解質失衡", chronic: "手術切除為主要治療，輔助化療效果不一", medications: ["Carboplatin（輔助化療）", "Cyclophosphamide", "Piroxicam（COX-2抑制）", "止吐藥（Maropitant）", "營養支持"], surgery: "腸段切除吻合術為首選；需確保足夠手術邊界（>5cm）；同時切除區域淋巴結" },
    prognosis: "犬腸腺癌手術切除後中位存活時間約10-15個月。有淋巴結轉移者預後較差（約6個月）。貓小腸腺癌手術後中位存活約5-15個月。大腸型比小腸型預後略好。",
    pearls: ["貓小腸腺癌與淋巴瘤的鑑別極為重要，治療方式完全不同", "環狀狹窄型生長是腸腺癌的典型影像特徵，有助於與淋巴瘤區分", "術中應仔細評估腸繫膜淋巴結，轉移率很高", "暹羅貓是腸腺癌的高危品種，慢性消化道症狀應高度警覺"],
    monitoring: ["術後每2-3個月腹部超音波", "體重及營養狀態追蹤", "白蛋白及血球計數監測", "胸腔X光（轉移評估）"],
    reference: "Veterinary Surgical Oncology"
  },
  "apocrine-gland-adenocarcinoma": {
    zh: "頂漿腺癌（肛囊腺癌）",
    en: "Apocrine Gland Adenocarcinoma of the Anal Sac",
    definition: "肛囊頂漿腺癌是源自肛囊壁頂漿腺（apocrine gland）的高度惡性腫瘤，為犬最常見的肛囊惡性腫瘤。約25-50%病例會產生副腫瘤性高鈣血症（paraneoplastic hypercalcemia），且診斷時常已有區域淋巴結轉移。",
    synonyms: ["肛囊腺癌", "AGASACA", "肛囊頂漿腺癌", "肛門囊腺癌"],
    epidemiology: { species: "主要見於犬，貓極少見", breed: "英國可卡犬、德國牧羊犬、黃金獵犬好發", age: "中老年犬（中位數9-11歲）", sex: "無明顯性別差異（早期報告雌性多但近年研究無顯著差異）", prevalence: "佔犬肛周腫瘤約17%，為第二常見肛周腫瘤" },
    clinicalPresentation: { symptoms: ["肛門旁腫塊", "排便困難", "裡急後重", "糞便帶狀變形", "多飲多尿（高鈣血症）", "厭食", "嗜睡", "體重減輕", "肛門區舔舐", "後肢無力（嚴重高鈣血症）"], physicalExam: ["直腸指檢觸及肛囊硬實腫塊", "腹股下淋巴結腫大", "脫水", "心律不整（高鈣血症）", "肌肉無力"] },
    pathophysiology: "腫瘤起源於肛囊壁的頂漿腺上皮，呈侵犯性生長。約25-50%的AGASACA會分泌PTHrP（副甲狀腺素相關蛋白），導致副腫瘤性高鈣血症，引起腎臟損傷、多飲多尿、心律不整等全身性症狀。腫瘤早期即傾向經淋巴管轉移至髂內/髂下淋巴結。",
    diagnosis: { primary: ["直腸指檢（基本篩檢）", "細針抽吸細胞學", "腹部超音波（評估髂下淋巴結）", "胸腹部CT（完整分期）"], differential: ["肛周腺瘤", "肛周腺癌", "肛門囊炎/膿腫", "直腸息肉", "肛門周圍肥大細胞瘤"], labFindings: ["高鈣血症（total Ca >12 mg/dL）", "低磷血症", "PTHrP升高", "氮血症（高鈣致腎損傷）", "PTH抑制（低正常或低）"] },
    treatment: { acute: "高鈣血症危象：靜脈輸液生理食鹽水、Furosemide利尿、Bisphosphonate", chronic: "手術切除原發腫瘤+輔助化療控制轉移", medications: ["Carboplatin（每3週一次）", "Mitoxantrone", "Toceranib（TKI）", "Zoledronic acid（控制高鈣血症）", "Pamidronate"], surgery: "肛囊切除術為首選；腫大的髂下淋巴結可行手術摘除以緩解阻塞症狀" },
    prognosis: "手術切除後中位存活時間約12-18個月。手術結合化療可延長至約18-24個月。有高鈣血症者預後較無高鈣血症者差。早期發現（腫瘤<2.5cm）預後顯著較好。",
    pearls: ["每次例行理學檢查都應進行直腸指檢，AGASACA早期發現可顯著改善預後", "不明原因高鈣血症的犬必須進行直腸指檢排除AGASACA", "即使有淋巴結轉移，手術切除原發腫瘤+淋巴結摘除仍可提供良好的姑息效果", "腹部超音波應評估髂下淋巴結大小，轉移率非常高"],
    monitoring: ["術後每2-3個月血鈣監測", "腹部超音波追蹤髂下淋巴結", "直腸指檢評估局部復發", "腎功能（BUN/Creatinine）監測"],
    reference: "Blackwell's Five-Minute Veterinary Consult"
  },
  "basal-cell-tumor": {
    zh: "基底細胞瘤",
    en: "Basal Cell Tumor",
    definition: "基底細胞瘤是源自表皮基底層或毛囊外根鞘細胞的皮膚腫瘤。在犬多為良性（基底細胞瘤），少數為惡性（基底細胞癌）；在貓中是最常見的皮膚腫瘤之一，大多為良性，手術切除後預後極佳。",
    synonyms: ["基底細胞上皮瘤", "毛母質瘤", "Basaloid tumor"],
    epidemiology: { species: "犬貓均常見，貓尤其多", breed: "犬：可卡犬、貴賓犬；貓：暹羅貓、波斯貓、喜馬拉雅貓好發", age: "中老年（犬平均7-10歲，貓6-13歲）", sex: "無明顯性別差異", prevalence: "貓第二常見皮膚腫瘤（僅次於肥大細胞瘤），犬皮膚腫瘤約4-6%" },
    clinicalPresentation: { symptoms: ["皮膚圓形隆起腫塊", "緩慢生長", "通常無痛", "腫塊表面可能潰瘍", "頭頸部好發", "腫塊質地堅實", "色素沉著（黑色）常見", "偶有多發性"], physicalExam: ["圓形、界限清楚的真皮或皮下腫塊", "質地堅實", "表面光滑或輕度潰瘍", "常見於頭部、頸部、肩部", "通常<3cm", "可能含有黑色素沉著"] },
    pathophysiology: "基底細胞瘤起源於表皮基底層的多潛能幹細胞或毛囊外根鞘細胞。良性型呈膨脹性生長，細胞排列整齊呈柵欄狀（palisading pattern）。惡性型（基底細胞癌）較少見，具有局部侵犯性但遠端轉移極罕見。貓的基底細胞瘤常含有大量黑色素，故又稱黑色素性基底細胞瘤。",
    diagnosis: { primary: ["細針抽吸細胞學（典型基底樣細胞群）", "組織病理學（確診及分級）", "切除活檢"], differential: ["肥大細胞瘤", "毛囊瘤", "皮脂腺腫瘤", "惡性黑色素瘤", "鱗狀上皮細胞癌", "纖維肉瘤"], labFindings: ["細胞學：小型均一基底樣細胞成群", "低核分裂指數（良性型）", "通常血液學無異常"] },
    treatment: { acute: "通常不需緊急處理", chronic: "手術切除為標準治療，治癒率極高", medications: ["術後止痛（Meloxicam短期使用）", "抗生素（若有感染）", "Imiquimod外用（犬基底細胞癌文獻報導）"], surgery: "手術切除（邊界1cm），良性型通常治癒性切除即可；惡性型需較寬邊界" },
    prognosis: "良性基底細胞瘤手術切除後預後極佳，治癒率接近100%。基底細胞癌局部復發率低，遠端轉移極罕見。貓的基底細胞瘤預後優於犬。",
    pearls: ["貓頭頸部的黑色皮膚腫塊最常見的診斷是基底細胞瘤，而非黑色素瘤", "細針抽吸通常即可獲得高度懷疑的診斷", "多發性基底細胞瘤在貓偶爾可見，每個腫塊應獨立評估", "犬的基底細胞癌雖名為『癌』但生物行為溫和，不應過度治療"],
    monitoring: ["術後2-4週傷口癒合追蹤", "每6個月全身皮膚檢查（多發性傾向）", "惡性型術後每3個月觸診局部"],
    reference: "Cancer Management in Small Animal Practice"
  },
  "ceruminous-gland-adenocarcinoma": {
    zh: "耵聹腺腺癌",
    en: "Ceruminous Gland Adenocarcinoma",
    definition: "耵聹腺腺癌是源自外耳道耵聹腺（ceruminous gland，一種特化的頂漿汗腺）的惡性腫瘤。為貓最常見的外耳道腫瘤，犬較少見。腫瘤具有局部侵犯性強的特性，可侵犯鼓泡和中耳。",
    synonyms: ["耳道腺癌", "外耳道腺癌", "耳垢腺腺癌"],
    epidemiology: { species: "貓多於犬", breed: "無明顯品種好發傾向", age: "老年動物（貓平均11-12歲，犬平均9-10歲）", sex: "無明顯性別差異", prevalence: "貓外耳道腫瘤中最常見的惡性類型" },
    clinicalPresentation: { symptoms: ["單側耳道分泌物增加", "耳道出血", "惡臭耳分泌物", "搖頭", "抓耳", "慢性外耳炎反覆發作", "聽力下降", "面神經麻痺（侵犯中耳）", "Horner氏症候群", "頭部歪斜"], physicalExam: ["耳鏡檢查見耳道內腫塊", "外耳道狹窄或阻塞", "耳道分泌物（血性或膿性）", "耳根部腫脹", "面神經功能異常（眼瞼下垂、唇下垂）"] },
    pathophysiology: "耵聹腺腺癌可能與慢性外耳炎的長期發炎刺激有關，尤其在貓。腫瘤起源於外耳道的耵聹腺上皮，呈侵犯性生長，可穿透軟骨侵犯周圍組織、鼓泡及中耳結構。局部淋巴結轉移率約10-15%，遠端轉移率約10%（主要至肺）。",
    diagnosis: { primary: ["耳鏡檢查及活檢", "CT掃描（評估骨骼侵犯及鼓泡累及程度）", "細針抽吸細胞學", "組織病理學"], differential: ["耵聹腺腺瘤", "發炎性息肉", "鱗狀上皮細胞癌", "耳道良性腫瘤", "慢性增生性外耳炎"], labFindings: ["通常血液學無特異性變化", "細胞學可見惡性上皮細胞特徵", "CT顯示鼓泡溶骨性破壞（晚期）"] },
    treatment: { acute: "繼發感染時先控制感染（局部及全身性抗生素）", chronic: "手術切除為主要治療，放射線治療可作為輔助", medications: ["全身性抗生素（Enrofloxacin等，基於培養結果）", "局部耳藥（術前感染控制）", "止痛藥（Meloxicam、Gabapentin）", "Toceranib（少數報告）"], surgery: "全耳道切除術（TECA）合併側鼓泡截骨術（LBO）為標準治療；侵犯範圍廣時可能需擴大切除" },
    prognosis: "貓TECA-LBO術後中位存活時間約11-17個月。完全切除者預後較佳。犬的預後與貓相似或略差。有鼓泡侵犯者預後較差，中位存活時間約6個月。",
    pearls: ["慢性反覆發作的單側外耳炎，尤其在老年貓，應高度懷疑耵聹腺腺癌", "CT是術前評估的關鍵，可判斷鼓泡是否受侵犯以決定手術範圍", "即使腫瘤已侵犯鼓泡，TECA-LBO仍可提供合理的存活時間", "術後面神經麻痺是常見併發症，術前應告知飼主"],
    monitoring: ["術後每3個月CT或局部檢查", "觀察面神經功能恢復", "胸腔X光評估肺轉移（每3-6個月）", "對側耳道定期檢查"],
    reference: "Withrow & MacEwen's Small Animal Clinical Oncology"
  },
  "thyroid-adenoma": {
    zh: "甲狀腺腺瘤",
    en: "Thyroid Adenoma",
    definition: "甲狀腺腺瘤是甲狀腺濾泡上皮細胞的良性腫瘤。在貓極為常見，是貓甲狀腺功能亢進症的最主要原因（約98%）。犬的甲狀腺腫瘤則多為惡性（甲狀腺癌），腺瘤相對少見。",
    synonyms: ["甲狀腺良性腫瘤", "甲狀腺濾泡腺瘤", "Thyroid follicular adenoma"],
    epidemiology: { species: "貓極為常見；犬少見（犬甲狀腺腫瘤70-75%為惡性）", breed: "貓無明顯品種好發（暹羅貓可能風險略低）；犬：拳師犬、米格魯", age: "貓平均12-13歲；犬平均9-11歲", sex: "貓無明顯性別差異", prevalence: "貓甲狀腺功能亢進發生率約10%（>10歲貓），幾乎全為腺瘤" },
    clinicalPresentation: { symptoms: ["體重減輕（食慾正常或增加）", "多食", "多飲多尿", "嘔吐", "腹瀉", "過動/躁動", "毛髮品質變差", "呼吸急促", "心跳加速", "行為改變（攻擊性增加）"], physicalExam: ["頸部觸診可及甲狀腺結節", "心搏過速（>240 bpm）", "心雜音（收縮期雜音）", "體況評分低", "被毛粗糙/脫毛", "高血壓相關視網膜病變"] },
    pathophysiology: "貓甲狀腺腺瘤為功能性腫瘤，自主性分泌過量甲狀腺素（T4），不受TSH負回饋調控。腫瘤通常為雙側性（約70%兩側均受影響）。過量的T4導致代謝率全面增加，影響心血管、消化、神經等多系統。長期甲亢可導致甲亢性心肌病和繼發性高血壓。",
    diagnosis: { primary: ["血清總T4（tT4）升高", "游離T4（fT4）升高", "頸部觸診", "甲狀腺核醫掃描（Tc-99m pertechnetate）"], differential: ["甲狀腺癌（犬為主）", "甲狀腺囊腫", "甲狀腺增生", "其他頸部腫塊（淋巴結、唾液腺）", "隱匿性甲亢（tT4正常但fT4升高）"], labFindings: ["tT4升高（>4.0 ug/dL）", "fT4升高", "ALT/ALP輕度升高", "BUN/Creatinine正常或輕度升高", "紅血球增多症（PCV升高）"] },
    treatment: { acute: "甲亢危象（thyroid storm）：靜脈輸液、Beta-blocker控制心率", chronic: "口服抗甲狀腺藥物、放射性碘治療、手術或處方飲食", medications: ["Methimazole（首選口服藥物，起始2.5mg BID）", "Carbimazole（前驅藥物）", "Atenolol（控制心率）", "Amlodipine（控制高血壓）", "Hill's y/d（碘限制飲食）"], surgery: "甲狀腺切除術：單側或雙側；術前需Methimazole穩定2-4週；注意保留副甲狀腺" },
    prognosis: "貓甲狀腺腺瘤預後良好。放射性碘治療治癒率>95%。Methimazole可長期良好控制。手術治癒率高但有低血鈣風險。治療後需監測腎功能，部分貓會顯露隱藏的慢性腎病。",
    pearls: ["開始治療甲亢前務必評估腎功能——甲亢可掩蓋潛在的CKD", "建議先用Methimazole試驗性治療2-4週，監測腎功能後再決定永久性治療", "觸診陰性不代表無甲亢——異位甲狀腺組織可位於胸腔入口", "雙側甲狀腺切除術後最危險的併發症是低血鈣（副甲狀腺損傷）"],
    monitoring: ["tT4每4-6週監測（調藥期）；穩定後每6個月", "腎功能（BUN/Creatinine/SDMA）", "血壓監測", "心臟超音波評估甲亢性心肌病恢復"],
    reference: "Withrow & MacEwen's Small Animal Clinical Oncology"
  },
  "chemodectoma": {
    zh: "化學感受器瘤",
    en: "Chemodectoma (Aortic/Carotid Body Tumor)",
    definition: "化學感受器瘤是源自主動脈體（aortic body）或頸動脈體（carotid body）化學感受器細胞的腫瘤。主動脈體瘤更為常見，位於心臟基底部。腫瘤通常生長緩慢，但可造成心包積液和心臟壓塞。",
    synonyms: ["主動脈體瘤", "頸動脈體瘤", "副神經節瘤", "Heart base tumor", "Paraganglioma"],
    epidemiology: { species: "主要見於犬，貓極罕見", breed: "短頭犬種（brachycephalic）高度好發：英國鬥牛犬、拳師犬、波士頓梗", age: "中老年犬（平均7-15歲）", sex: "雄性犬為雌性的2-3倍", prevalence: "佔犬心臟腫瘤的第二常見（僅次於血管肉瘤）" },
    clinicalPresentation: { symptoms: ["運動不耐", "呼吸困難", "咳嗽", "暈厥", "腹水", "嗜睡", "厭食", "突然虛脫", "頸部腫塊（頸動脈體型）", "體重減輕"], physicalExam: ["心音減弱（心包積液）", "頸靜脈怒張", "腹水", "肝腫大（右心衰竭）", "脈搏減弱", "黏膜蒼白或發紺"] },
    pathophysiology: "化學感受器瘤源自副神經節的化學感受器主細胞（chief cells）。短頭犬種因慢性缺氧刺激化學感受器增生，被認為是好發的原因。主動脈體瘤位於主動脈根部和肺動脈之間，可壓迫大血管或侵犯心包膜導致心包積液。腫瘤通常生長緩慢，轉移率約20-30%。",
    diagnosis: { primary: ["胸腔X光（心臟基底部腫塊、心影擴大）", "心臟超音波（心包積液、心基底部腫塊）", "CT（精確定位和分期）", "心包積液細胞學"], differential: ["血管肉瘤（右心房）", "甲狀腺癌（異位或轉移）", "淋巴瘤", "心包膜間皮瘤", "特發性心包積液"], labFindings: ["心包積液通常為血性", "細胞學常為非診斷性（反應性間皮細胞為主）", "心肌肌鈣蛋白可能升高", "ECG可能顯示低電壓或電交替"] },
    treatment: { acute: "心臟壓塞：緊急心包穿刺引流", chronic: "心包切除術可長期控制症狀；腫瘤完全切除通常不可行", medications: ["Furosemide（控制充血性心衰竭）", "Pimobendan", "Toceranib（有限報告）", "止痛藥"], surgery: "次全心包切除術（subtotal pericardiectomy）為主要姑息治療；腫瘤根治性切除極少可行因與大血管緊密粘連" },
    prognosis: "化學感受器瘤生長緩慢，心包切除術後中位存活時間約660-730天。未治療者因反覆心臟壓塞預後差。轉移發生緩慢，多數犬死於局部疾病進展而非遠端轉移。",
    pearls: ["短頭犬種出現心包積液，化學感受器瘤應列為首要鑑別診斷", "心包積液細胞學通常無法區分化學感受器瘤和血管肉瘤", "心包切除術雖為姑息性，但可提供長期的良好生活品質", "與血管肉瘤不同，化學感受器瘤生長緩慢，不應因診斷而立即放棄治療"],
    monitoring: ["心臟超音波每3個月追蹤腫瘤大小", "評估心衰竭徵象", "胸腔X光監測肺轉移", "生活品質評估"],
    reference: "Clinical Veterinary Advisor: Dogs and Cats"
  },
  "mesothelioma": {
    zh: "間皮瘤",
    en: "Mesothelioma",
    definition: "間皮瘤是源自體腔漿膜（胸膜、腹膜、心包膜）間皮細胞的罕見惡性腫瘤。在犬貓中均為罕見腫瘤，以胸膜型最常見。腫瘤呈瀰漫性漿膜面生長，導致大量體腔積液。",
    synonyms: ["間皮細胞瘤", "漿膜腫瘤", "Malignant mesothelioma"],
    epidemiology: { species: "犬多於貓，均為罕見", breed: "無明顯品種好發傾向；愛爾蘭雪達犬有個案報告", age: "中老年犬（平均7-14歲）", sex: "雄性犬可能略多", prevalence: "極罕見，犬腫瘤中<0.5%" },
    clinicalPresentation: { symptoms: ["呼吸困難（胸膜型）", "腹部膨脹（腹膜型）", "運動不耐", "厭食", "體重減輕", "嗜睡", "咳嗽", "嘔吐（腹膜型）", "暈厥", "心音減弱（心包型）"], physicalExam: ["胸腔聽診減弱（積液）", "腹部波動感（腹水）", "呼吸窘迫", "黏膜蒼白", "頸靜脈怒張（心包型）", "體況評分下降"] },
    pathophysiology: "間皮瘤起源於體腔漿膜面的間皮細胞，呈瀰漫性片狀或結節狀沿漿膜表面生長。與人類不同，犬貓間皮瘤與石棉暴露的關聯性尚未確立。腫瘤可分為上皮型、肉瘤型和混合型。腫瘤廣泛播種於漿膜面，導致大量漿液性或改良型漏出液積聚。遠端轉移較少見，但局部進展迅速。",
    diagnosis: { primary: ["體腔積液細胞學", "CT（評估漿膜增厚和結節）", "胸腔鏡/腹腔鏡活檢", "組織病理學合併免疫組織化學"], differential: ["惡性積液（轉移性腺癌）", "心衰竭性積液", "特發性乳糜胸", "膿胸", "腹膜轉移性腫瘤（carcinomatosis）", "FIP（貓）"], labFindings: ["體腔積液：改良型漏出液或滲出液", "細胞學：反應性間皮細胞vs.惡性間皮細胞（鑑別困難）", "免疫組織化學：Cytokeratin(+)、Vimentin(+)", "低白蛋白血症"] },
    treatment: { acute: "胸腔/腹腔穿刺引流緩解呼吸窘迫", chronic: "腔內化療為主要姑息治療方式", medications: ["Intracavitary Cisplatin（腔內注射）", "Intracavitary Carboplatin", "Doxorubicin（全身性）", "止痛藥", "Piroxicam"], surgery: "瀰漫性生長通常不適合根治性手術；心包切除術可用於心包型" },
    prognosis: "預後謹慎至不良。中位存活時間約3-6個月。腔內Cisplatin化療可能延長存活至6-12個月。完全緩解罕見，治療以控制積液和維持生活品質為目標。",
    pearls: ["反覆引流不乾淨的體腔積液，細胞學呈現異常間皮細胞時要高度懷疑間皮瘤", "間皮細胞學上區分反應性增生和惡性極為困難，常需組織活檢合併免疫組化", "腔內化療（尤其Cisplatin）對控制積液有較好效果", "犬貓間皮瘤不像人類與石棉有明確關聯"],
    monitoring: ["體腔積液量和引流頻率", "呼吸頻率和努力程度", "體重和食慾追蹤", "生活品質評估"],
    reference: "Geriatrics & Gerontology of the Dog and Cat"
  },
  "hemangioma": {
    zh: "血管瘤",
    en: "Hemangioma",
    definition: "血管瘤是源自血管內皮細胞的良性腫瘤，可發生於皮膚、皮下組織或內臟器官。與其惡性對應物血管肉瘤（hemangiosarcoma）不同，血管瘤為良性且手術切除後預後極佳。需注意與血管肉瘤的鑑別。",
    synonyms: ["良性血管瘤", "海綿狀血管瘤", "毛細血管瘤", "Cavernous hemangioma"],
    epidemiology: { species: "犬多於貓", breed: "犬無明顯品種好發；部分報告指出短毛犬如惠比特犬、義大利灰獵犬皮膚型較常見", age: "中老年犬（平均8-10歲）", sex: "無明顯性別差異", prevalence: "佔犬皮膚腫瘤約0.5-1%；內臟型更為少見" },
    clinicalPresentation: { symptoms: ["皮膚紅色或暗紫色腫塊", "緩慢生長", "通常無痛", "偶有出血（表面潰瘍時）", "日光暴露部位好發（皮膚型）", "腹部器官型可能無症狀", "偶因創傷出血發現", "單發為主"], physicalExam: ["皮膚型：紅色至暗紫色、柔軟、界限清楚的腫塊", "壓迫後可能暫時褪色", "好發於腹側皮膚、耳廓", "通常<2cm", "表面偶有潰瘍和痂皮"] },
    pathophysiology: "血管瘤由分化良好的血管內皮細胞構成，形成充滿血液的血管腔隙。根據血管腔大小可分為毛細血管型（小血管腔）和海綿狀型（大血管腔）。皮膚型可能與紫外線暴露有關（日光性血管瘤），尤其在淺色或無毛皮膚。與血管肉瘤不同，血管瘤的內皮細胞無異型性，核分裂少見。",
    diagnosis: { primary: ["組織病理學（確診金標準）", "切除活檢", "細針抽吸（通常僅得到血液）", "超音波（內臟型）"], differential: ["血管肉瘤（最重要的鑑別）", "血腫", "日光性角化症", "黑色素瘤", "脾臟結節性增生", "肥大細胞瘤（皮膚紅色腫塊）"], labFindings: ["FNA通常為非診斷性（大量血液稀釋）", "組織學：分化良好的血管結構，無異型性", "血液學通常正常", "內臟型超音波顯示均質高回音結節"] },
    treatment: { acute: "出血時壓迫止血", chronic: "手術切除為標準且通常為治癒性治療", medications: ["術後止痛（Meloxicam）", "抗生素（若有感染）"], surgery: "手術切除（邊界0.5-1cm）通常即可治癒；皮膚型手術簡單且效果優異" },
    prognosis: "手術切除後預後極佳，復發罕見。關鍵在於與血管肉瘤的準確鑑別——一旦確認為血管瘤，飼主可大幅放心。",
    pearls: ["FNA通常無法區分血管瘤和血管肉瘤——組織病理學是唯一可靠的鑑別方法", "淺色皮膚犬腹側的紅色小腫塊常為日光性血管瘤", "脾臟結節並非全部為血管肉瘤——約50%為良性（血管瘤或結節性增生）", "內臟型血管瘤超音波外觀可能與血管肉瘤相似，手術切除後需病理確認"],
    monitoring: ["術後2週傷口追蹤", "皮膚型：建議減少日光暴露", "內臟型：術後超音波追蹤確認無復發"],
    reference: "Withrow & MacEwen's Small Animal Clinical Oncology"
  },
  "histiocytic-ulcerative-colitis": {
    zh: "組織球性潰瘍性結腸炎",
    en: "Histiocytic Ulcerative Colitis",
    definition: "組織球性潰瘍性結腸炎（又稱肉芽腫性結腸炎）是一種好發於拳師犬和法國鬥牛犬的特殊型大腸炎症，以結腸黏膜固有層大量PAS陽性組織球浸潤、潰瘍形成和黏膜增厚為特徵。近年研究已確認其病因與黏附侵入性大腸桿菌（AIEC）感染密切相關。",
    synonyms: ["肉芽腫性結腸炎", "拳師犬結腸炎", "GC", "Granulomatous colitis", "Boxer colitis"],
    epidemiology: { species: "犬（貓極罕見）", breed: "拳師犬高度好發；法國鬥牛犬、英國鬥牛犬也有報告", age: "年輕犬好發（通常<4歲發病）", sex: "無明顯性別差異", prevalence: "拳師犬中為最重要的大腸疾病之一" },
    clinicalPresentation: { symptoms: ["大腸性腹瀉（頻繁、少量）", "血便（鮮血附著於糞便表面）", "黏液便", "裡急後重", "排便困難", "體重減輕", "厭食", "嘔吐（偶見）", "漸進性惡化", "脫水"], physicalExam: ["體況評分下降", "脫水徵象", "腹部觸診可能有大腸增厚", "直腸指檢可觸及增厚黏膜", "肛周可能有糞便沾附", "黏膜蒼白（慢性失血）"] },
    pathophysiology: "組織球性潰瘍性結腸炎的病因已確認為黏附侵入性大腸桿菌（adherent and invasive E. coli, AIEC）感染。這些細菌侵入結腸黏膜固有層的巨噬細胞內，引發PAS陽性組織球大量浸潤和肉芽腫性炎症反應。拳師犬可能因先天免疫缺陷（如NCF1基因突變影響嗜中性球氧化殺菌功能）而易感。持續的炎症導致黏膜潰瘍、增厚和纖維化。",
    diagnosis: { primary: ["結腸鏡檢查及深部活檢", "組織病理學（PAS染色見大量陽性巨噬細胞）", "FISH（螢光原位雜交法偵測黏膜內E. coli）", "糞便培養"], differential: ["發炎性腸病（IBD/淋巴球漿細胞性結腸炎）", "腸道淋巴瘤", "腸道組織球肉瘤", "鞭蟲感染", "結腸腺癌", "梭菌感染"], labFindings: ["組織病理：黏膜固有層大量PAS陽性巨噬細胞", "FISH：組織內可見E. coli", "低白蛋白血症（嚴重時）", "貧血（慢性失血）", "糞便培養可分離侵入性E. coli"] },
    treatment: { acute: "脫水和電解質失衡矯正、止血", chronic: "Fluoroquinolone抗生素為主要治療——效果通常顯著", medications: ["Enrofloxacin（5 mg/kg PO SID，療程6-8週或更長）", "Sulfasalazine（輔助）", "Metronidazole（輔助）", "益生菌", "飲食管理（高消化性或新型蛋白飲食）"], surgery: "通常不需要手術治療" },
    prognosis: "使用Fluoroquinolone治療後預後良好至極佳，多數犬可達到臨床緩解。早期診斷和治療的反應率高。未治療或延誤治療的病例可能出現嚴重的蛋白質流失性腸病。少數病例對抗生素反應不佳。",
    pearls: ["年輕拳師犬出現慢性大腸性腹瀉，首先考慮組織球性潰瘍性結腸炎", "PAS染色是診斷關鍵——可見黏膜固有層大量PAS陽性巨噬細胞", "Fluoroquinolone是特效治療，對此病的反應通常比一般IBD更為戲劇性", "法國鬥牛犬近年報告增多，不再僅限於拳師犬"],
    monitoring: ["臨床症狀改善追蹤（糞便性狀、排便頻率）", "體重和白蛋白監測", "抗生素療程完成後觀察復發", "必要時追蹤結腸鏡確認黏膜癒合"],
    reference: "Clinical Veterinary Advisor: Dogs and Cats"
  },
  "salmonellosis": {
    zh: "沙門氏菌感染",
    en: "Salmonellosis",
    definition: "沙門氏菌感染是由沙門氏菌屬（Salmonella spp.，主要為S. enterica亞種）引起的細菌性感染。犬貓可為無症狀帶原者或出現急性胃腸炎，嚴重者可發展為敗血症。此為重要的人畜共通傳染病（zoonosis）。",
    synonyms: ["沙門桿菌病", "沙門菌症", "Salmonella infection"],
    epidemiology: { species: "犬貓均可感染", breed: "無明顯品種好發", age: "幼年、老年或免疫抑制動物症狀較嚴重", sex: "無性別差異", prevalence: "犬無症狀帶原率約1-36%（視族群和檢測方法）；生食飲食犬帶原率更高" },
    clinicalPresentation: { symptoms: ["急性水樣腹瀉", "血便", "嘔吐", "發燒", "厭食", "腹痛", "脫水", "嗜睡", "黏液便", "慢性間歇性腹瀉（帶原者偶發）"], physicalExam: ["發燒（39.5-41°C）", "脫水徵象", "腹部觸診疼痛", "腸蠕動音增加", "黏膜乾燥", "心搏過速（脫水/敗血症）"] },
    pathophysiology: "沙門氏菌經口攝入後，侵入小腸和大腸黏膜上皮細胞，利用第三型分泌系統（T3SS）注入效應蛋白觸發細胞內吞。細菌在巨噬細胞內存活並增殖，引發急性炎症反應，導致腸黏膜水腫、潰瘍和分泌性腹瀉。嚴重時細菌穿越腸黏膜屏障進入血流，引起菌血症和敗血症，可能導致多器官感染。",
    diagnosis: { primary: ["糞便細菌培養（金標準）", "血液培養（敗血症時）", "PCR檢測", "糞便直接抹片"], differential: ["曲狀桿菌感染", "梭菌感染（C. perfringens/C. difficile）", "犬細小病毒", "犬瘟熱", "寄生蟲性腸炎", "出血性胃腸炎（HGE）"], labFindings: ["糞便培養陽性（特殊培養基：XLD、SS agar）", "白血球增多或減少（敗血症時左移）", "電解質失衡", "低白蛋白血症", "代謝性酸中毒"] },
    treatment: { acute: "靜脈輸液矯正脫水和電解質失衡；敗血症時需全身性抗生素", chronic: "無症狀帶原者通常不建議抗生素治療（可能延長排菌時間）", medications: ["Enrofloxacin（敗血症時）", "Ampicillin（敗血症時）", "Metronidazole（輔助）", "Maropitant（止吐）", "靜脈輸液和電解質補充"], surgery: "通常不需手術" },
    prognosis: "免疫力正常的成年犬貓預後良好，多數自限性。幼年動物、免疫抑制或發展為敗血症者預後謹慎。無症狀帶原者可持續排菌數週至數月。",
    pearls: ["餵食生肉飲食（raw diet）的犬排菌風險顯著增加——飼主諮詢時應告知人畜共通風險", "無併發症的沙門氏菌腸炎不建議使用抗生素，以免延長帶原時間和促進抗藥性", "免疫抑制犬（化療、使用免疫抑制劑）感染沙門氏菌風險更高", "糞便培養陽性的犬貓飼主應加強手部衛生——重要的公共衛生議題"],
    monitoring: ["脫水狀態和電解質", "糞便培養追蹤（是否持續排菌）", "抗藥性檢測（選擇適當抗生素）", "家中免疫低下成員的健康狀況"],
    reference: "Pathologic Basis of Veterinary Disease"
  },
  "campylobacteriosis": {
    zh: "曲狀桿菌感染",
    en: "Campylobacteriosis",
    definition: "曲狀桿菌感染是由曲狀桿菌屬（Campylobacter spp.，主要為C. jejuni和C. coli）引起的細菌性腸道感染。犬貓可為無症狀帶原者或出現水樣至黏液血性腹瀉。為重要的人畜共通傳染病。",
    synonyms: ["彎曲桿菌感染", "彎曲菌症", "Campylobacter enteritis"],
    epidemiology: { species: "犬貓均常見", breed: "無品種好發", age: "幼犬幼貓和年輕犬貓（<6個月）症狀較明顯", sex: "無性別差異", prevalence: "犬帶原率約5-45%（幼犬和收容所犬較高）；貓帶原率約10-25%" },
    clinicalPresentation: { symptoms: ["水樣腹瀉", "黏液血便", "裡急後重", "腹痛", "發燒（輕度）", "嘔吐", "厭食", "脫水", "腹部絞痛", "自限性（多數5-15天）"], physicalExam: ["輕度脫水", "腹部觸診輕度疼痛", "肛周糞便沾附", "體溫正常或輕度升高", "腸蠕動音活躍"] },
    pathophysiology: "Campylobacter經糞口途徑傳播，定殖於小腸和大腸黏膜。細菌產生細胞致死膨脹毒素（CDT）和其他毒力因子，破壞腸上皮細胞間的緊密連接，導致發炎性和分泌性腹瀉。幼年動物因腸道免疫尚未成熟而症狀較嚴重。成年免疫正常動物常為無症狀帶原。",
    diagnosis: { primary: ["糞便細菌培養（需特殊微需氧培養條件，42°C）", "糞便PCR", "糞便暗視野顯微鏡（典型海鷗翅膀形態）", "抗原快篩試劑"], differential: ["沙門氏菌感染", "梭菌感染", "犬細小病毒", "鉤蟲感染", "鞭蟲感染", "食物不耐受性腹瀉"], labFindings: ["培養：微需氧環境42°C生長", "暗視野：細長S形或海鷗翅形革蘭氏陰性菌", "血液學通常正常或輕度白血球增多", "電解質可能因腹瀉失衡"] },
    treatment: { acute: "輕症以支持療法和輸液為主", chronic: "持續症狀或幼年動物可考慮抗生素", medications: ["Erythromycin（25-50 mg/kg/day，分3次，7-10天）", "Azithromycin（替代選擇）", "Metronidazole（輔助）", "Maropitant（止吐）", "口服或靜脈輸液"], surgery: "不需手術" },
    prognosis: "免疫正常成年犬貓預後極佳，多為自限性。幼年動物適當治療後預後良好。嚴重脫水或敗血症者預後謹慎。",
    pearls: ["幼犬腹瀉不要只想到Parvo——Campylobacter在收容所幼犬中非常常見", "糞便培養需特殊條件（微需氧、42°C），一般培養可能漏診", "治療前應考慮是否真正致病還是僅為帶原——成年免疫正常犬帶原不一定需要治療", "重要人畜共通傳染病——幼兒和免疫低下飼主需特別注意衛生"],
    monitoring: ["腹瀉症狀和脫水狀態", "幼年動物體重追蹤", "糞便品質改善評估", "家中成員健康狀況（人畜共通風險）"],
    reference: "Clinical Veterinary Advisor: Dogs and Cats"
  },
  "hemotropic-mycoplasma": {
    zh: "嗜血性黴漿菌感染",
    en: "Hemotropic Mycoplasma Infection (Hemoplasma)",
    definition: "嗜血性黴漿菌（hemoplasma）感染是由附著於紅血球表面的黴漿菌引起的溶血性疾病。貓的主要病原為M. haemofelis（貓血巴東體）和'Candidatus M. haemominutum'；犬為M. haemocanis。感染可導致嚴重的免疫介導性溶血性貧血。",
    synonyms: ["血巴東體感染", "貓血巴東體症", "Feline hemoplasma", "Haemobartonellosis", "貓傳染性貧血"],
    epidemiology: { species: "貓多於犬（犬多為免疫抑制後發病）", breed: "無明顯品種好發", age: "任何年齡，但年輕公貓（戶外活動）較多", sex: "雄性略多（與打架傳播有關）", prevalence: "貓帶原率因地區和族群而異，約5-30%（PCR檢測）" },
    clinicalPresentation: { symptoms: ["貧血（蒼白黏膜）", "嗜睡", "厭食", "體重減輕", "發燒", "脾腫大", "黃疸", "呼吸急促", "運動不耐", "脫水", "間歇性發病"], physicalExam: ["黏膜蒼白", "黃疸（黏膜和皮膚）", "心搏過速", "收縮期心雜音（貧血性）", "脾腫大", "發燒（39.5-41°C）"] },
    pathophysiology: "嗜血性黴漿菌經跳蚤叮咬或直接血液接觸（打架、輸血）傳播。病原體附著於紅血球表面，導致紅血球膜損傷。受損的紅血球被脾臟巨噬細胞辨識並清除（血管外溶血），同時可誘發繼發性免疫介導性溶血。貓若同時感染FeLV或FIV，疾病嚴重度顯著增加。病原體呈周期性菌血症，血抹片陽性率波動大。",
    diagnosis: { primary: ["PCR檢測（金標準，靈敏度最高）", "血液抹片（紅血球表面可見小體，但敏感度低）", "CBC（再生性貧血）", "FeLV/FIV篩檢（排除共感染）"], differential: ["免疫介導性溶血性貧血（IMHA）", "FeLV相關貧血", "Babesia感染", "Cytauxzoon felis感染", "洋蔥/大蒜中毒", "Heinz body貧血"], labFindings: ["再生性貧血（網織紅血球增多）", "球形紅血球增多（繼發性IMHA）", "膽紅素升高", "Coombs test可能陽性", "血液抹片可見紅血球表面附著的小球形至環形微生物"] },
    treatment: { acute: "嚴重貧血（PCV<15%）需輸血；同時開始抗生素治療", chronic: "Doxycycline療程至少28天", medications: ["Doxycycline（10 mg/kg PO SID，28天）", "Prednisolone（若繼發IMHA，2 mg/kg/day漸減）", "Marbofloxacin（替代選擇）", "跳蚤預防（Fipronil等）"], surgery: "不需手術（脾臟切除會加重感染，禁忌）" },
    prognosis: "M. haemofelis感染適當治療後預後良好，但可能成為慢性帶原者。'Ca. M. haemominutum'致病力較低，單獨感染通常亞臨床。FeLV/FIV共感染者預後較差。犬的M. haemocanis主要在脾臟切除或免疫抑制犬發病。",
    pearls: ["貧血貓一定要做FeLV/FIV篩檢和血液抹片——hemoplasma常與反轉錄病毒共感染", "血液抹片敏感度僅約20-50%，陰性不能排除——PCR是確診首選", "Doxycycline可降低菌量但通常無法完全清除感染——多數貓成為慢性帶原者", "脾臟切除犬出現貧血應考慮M. haemocanis重新活化"],
    monitoring: ["PCV/網織紅血球每週追蹤直至穩定", "治療後PCR追蹤（評估帶原狀態）", "FeLV/FIV狀態追蹤", "跳蚤防治確認"],
    reference: "BSAVA Manual of Canine and Feline Haematology and Transfusion Medicine"
  },
  "yersiniosis": {
    zh: "耶爾森菌感染",
    en: "Yersiniosis",
    definition: "耶爾森菌感染是由耶爾森菌屬（Yersinia spp.，主要為Y. enterocolitica和Y. pseudotuberculosis）引起的細菌性感染。在犬貓中為相對少見的消化道病原，可導致急性腸炎和腸繫膜淋巴結炎，為人畜共通傳染病。",
    synonyms: ["假結核耶爾森菌感染", "小腸結腸炎耶爾森菌感染", "Yersinia infection"],
    epidemiology: { species: "犬貓均可感染，臨床病例少見", breed: "無品種好發", age: "幼年和免疫抑制動物較易發病", sex: "無性別差異", prevalence: "不常見；流行病學資料有限，推估帶原率低(<5%)" },
    clinicalPresentation: { symptoms: ["急性腹瀉", "水樣便或黏液便", "腹痛", "發燒", "厭食", "嘔吐", "脫水", "淋巴結腫大（腸繫膜）", "慢性消化不良（少見）", "體重減輕"], physicalExam: ["腹部觸診疼痛", "腸繫膜淋巴結可能腫大（超音波）", "輕度脫水", "發燒", "腸蠕動增加"] },
    pathophysiology: "Y. enterocolitica和Y. pseudotuberculosis經糞口途徑傳播，主要透過受污染的水源或食物（豬肉為重要來源）。細菌在小腸和近端結腸定殖，穿越M細胞侵入Peyer's patches和腸繫膜淋巴結。細菌利用第三型分泌系統注入Yop蛋白，抑制宿主吞噬作用和發炎反應。可導致腸壁肉芽腫性炎症和淋巴結膿瘍形成。",
    diagnosis: { primary: ["糞便細菌培養（需冷增菌法提高陽性率）", "PCR檢測", "腹部超音波（腸繫膜淋巴結腫大）", "血液培養（敗血症時）"], differential: ["沙門氏菌感染", "曲狀桿菌感染", "腸道淋巴瘤", "腸結核", "發炎性腸病", "鞭蟲感染"], labFindings: ["糞便培養：冷增菌（4°C培養2-3週）可提高陽性率", "白血球增多伴左移", "CRP升高", "超音波見腸繫膜淋巴結腫大"] },
    treatment: { acute: "輸液矯正脫水、抗生素治療", chronic: "療程通常7-14天", medications: ["Trimethoprim-Sulfonamide（15 mg/kg BID）", "Enrofloxacin", "Doxycycline", "Gentamicin（嚴重敗血症時）", "輸液和電解質補充"], surgery: "通常不需手術；罕見情況下腸繫膜淋巴結膿瘍可能需要引流" },
    prognosis: "免疫正常動物適當治療後預後良好。嚴重敗血症或免疫抑制動物預後謹慎。多數犬貓可完全恢復。",
    pearls: ["Yersiniosis在犬貓中常被低估——常規糞便培養條件下可能漏診", "冷增菌法（4°C長期培養）是提高培養陽性率的關鍵技術", "腸繫膜淋巴結明顯腫大伴腹瀉時要考慮Yersinia（類似人類的『假性闌尾炎』表現）", "人畜共通風險——提醒飼主避免餵食生豬肉"],
    monitoring: ["腹瀉症狀改善追蹤", "體溫監測", "脫水矯正評估", "人畜共通風險衛教"],
    reference: "Clinical Veterinary Advisor: Dogs and Cats"
  },
  "streptococcal-infection": {
    zh: "鏈球菌感染",
    en: "Streptococcal Infection",
    definition: "鏈球菌感染是由鏈球菌屬（Streptococcus spp.）引起的細菌性感染。犬貓常見的致病種包括S. canis（最常見）、S. equi subsp. zooepidemicus和GBS。可引起多種臨床表現，從皮膚感染到敗血症和壞死性筋膜炎。",
    synonyms: ["鏈球菌症", "鏈球菌病", "Strep infection"],
    epidemiology: { species: "犬貓均可感染", breed: "無明顯品種好發；收容所犬群聚感染較多", age: "幼年動物和老年免疫抑制動物風險較高", sex: "無性別差異", prevalence: "S. canis為犬貓正常口腔和皮膚菌群的一部分，伺機性感染" },
    clinicalPresentation: { symptoms: ["皮膚膿瘍", "蜂窩性組織炎", "發燒", "嗜睡", "厭食", "關節腫痛（化膿性關節炎）", "呼吸困難（肺炎時）", "子宮蓄膿", "泌尿道感染", "新生兒敗血症", "壞死性筋膜炎（S. equi zooepidemicus）"], physicalExam: ["發燒（39.5-41°C）", "局部紅腫熱痛（皮膚感染）", "關節腫脹和疼痛", "淋巴結腫大", "心雜音（心內膜炎時）", "漿液性或膿性分泌物"] },
    pathophysiology: "鏈球菌透過皮膚傷口、呼吸道或黏膜侵入。S. canis產生多種毒力因子，包括M蛋白（抗吞噬）、溶血素（streptolysin）、透明質酸酶和鏈激酶。這些因子幫助細菌逃避免疫系統、破壞組織屏障和促進擴散。嚴重感染可導致毒性休克樣症候群（Streptococcal Toxic Shock Syndrome）。S. equi subsp. zooepidemicus在犬可引起出血性肺炎和壞死性筋膜炎的爆發。",
    diagnosis: { primary: ["細菌培養和藥敏試驗", "血液培養（敗血症時）", "感染部位抹片革蘭氏染色", "PCR（菌種鑑定）"], differential: ["葡萄球菌感染", "巴氏桿菌感染", "大腸桿菌感染", "厭氧菌感染", "黴菌感染", "免疫介導性多發性關節炎（化膿性關節炎的鑑別）"], labFindings: ["培養：beta溶血性、Lancefield分群", "革蘭氏染色：鏈狀排列的革蘭氏陽性球菌", "白血球增多伴左移", "CRP顯著升高", "敗血症時血液培養陽性"] },
    treatment: { acute: "敗血症或壞死性筋膜炎需積極靜脈抗生素和支持療法", chronic: "根據培養結果選擇適當抗生素，療程依感染部位而定", medications: ["Amoxicillin-Clavulanate（首選）", "Ampicillin（靜脈注射，重症）", "Cephalexin", "Clindamycin（骨骼或深部感染）", "Penicillin G（靜脈注射）"], surgery: "膿瘍引流；壞死性筋膜炎需積極清創；化膿性關節炎需關節灌洗" },
    prognosis: "局限性皮膚感染預後良好。化膿性關節炎適當治療後預後中等。壞死性筋膜炎和敗血症預後謹慎至不良。新生兒敗血症死亡率高。",
    pearls: ["S. canis對Penicillin類抗生素通常高度敏感——是治療首選", "S. equi subsp. zooepidemicus在收容所犬群可引起爆發性出血性肺炎，致死率高", "犬的化膿性關節炎最常見病原之一即為鏈球菌——關節液需送培養", "新生犬敗血症中鏈球菌是重要病原——母犬產道感染可垂直傳播"],
    monitoring: ["感染指標（WBC、CRP）追蹤", "抗生素療程足夠（通常至少14-21天）", "化膿性關節炎需追蹤關節液改善", "收容所爆發需隔離和環境消毒"],
    reference: "Canine and Feline Infectious Diseases"
  },
  "helicobacter-infection": {
    zh: "螺旋桿菌感染",
    en: "Helicobacter Infection",
    definition: "螺旋桿菌感染是由螺旋桿菌屬（Helicobacter spp.）引起的胃部感染。犬貓胃中常見多種Helicobacter species（如H. felis、H. bizzozeronii、H. heilmannii），與人類的H. pylori不同。其在犬貓的致病角色仍有爭議，因為健康動物帶原率也很高。",
    synonyms: ["幽門螺旋桿菌感染", "胃螺旋菌感染", "Gastric Helicobacter infection"],
    epidemiology: { species: "犬貓均非常常見", breed: "無品種好發", age: "任何年齡；帶原率隨年齡增加", sex: "無性別差異", prevalence: "犬貓胃黏膜Helicobacter spp.帶原率極高（67-100%），但臨床意義尚有爭議" },
    clinicalPresentation: { symptoms: ["慢性間歇性嘔吐", "食慾不振", "噯氣", "流涎", "腹部不適", "體重減輕（慢性時）", "嘔吐物可含膽汁或鮮血", "草食行為增加", "多數犬貓無症狀帶原"], physicalExam: ["通常無特異性發現", "輕度脫水（頻繁嘔吐時）", "腹部觸診可能有輕度不適", "體況正常或輕度下降"] },
    pathophysiology: "犬貓的胃Helicobacter spp.定殖於胃黏膜表面和胃腺深處。這些細菌產生尿素酶，分解尿素產生氨以中和局部胃酸，創造有利的微環境。細菌可能引起淋巴球漿細胞性胃炎和淋巴濾泡增生。然而，與人類H. pylori不同，犬貓Helicobacter的致病角色尚未完全確立——大量健康動物也有感染。可能在某些易感個體中作為胃炎和消化性疾病的共同因子。",
    diagnosis: { primary: ["胃鏡檢查及活檢（Warthin-Starry銀染色或H&E）", "快速尿素酶試驗（胃活檢組織）", "胃活檢組織PCR", "胃活檢壓片細胞學"], differential: ["食物不耐受/食物過敏", "發炎性腸病（IBD）", "胃異物", "慢性胰臟炎", "腎臟疾病", "胃腫瘤（淋巴瘤、腺癌）"], labFindings: ["胃活檢：黏膜固有層淋巴球漿細胞浸潤和淋巴濾泡增生", "銀染色或Giemsa染色見大型螺旋狀細菌", "快速尿素酶試驗陽性", "血液學通常正常"] },
    treatment: { acute: "對症止吐和保護胃黏膜", chronic: "三聯療法（Triple therapy）用於臨床上懷疑Helicobacter致病的病例", medications: ["Amoxicillin（20 mg/kg BID）", "Metronidazole（15 mg/kg BID）", "Omeprazole（1 mg/kg SID）", "Clarithromycin（替代Metronidazole）", "Bismuth subsalicylate（輔助）"], surgery: "不需手術" },
    prognosis: "治療後根除率約50-90%，但高復發/再感染率。部分動物治療後臨床症狀改善，但也有動物根除後症狀無變化。預後取決於Helicobacter是否為症狀的真正原因。",
    pearls: ["犬貓Helicobacter帶原率極高，陽性結果不等於致病原因——需排除其他嘔吐原因後再歸因", "治療前應完善胃鏡評估，因為胃淋巴瘤等嚴重疾病可能表現類似", "三聯療法療程通常14天，需飼主良好配合", "Helicobacter spp.具有人畜共通潛力——免疫低下飼主應注意"],
    monitoring: ["嘔吐頻率和症狀改善追蹤", "治療4-8週後可考慮追蹤胃鏡評估", "體重和食慾監測", "長期復發率評估"],
    reference: "Blackwell's Five-Minute Veterinary Consult"
  },
  "encephalitozoonosis": {
    zh: "腦炎微孢子蟲感染",
    en: "Encephalitozoonosis",
    definition: "腦炎微孢子蟲感染是由Encephalitozoon cuniculi引起的微孢子蟲感染症。E. cuniculi為專性細胞內寄生蟲，主要宿主為兔，但可感染犬貓等多種哺乳動物。感染主要影響腎臟、腦和眼睛，尤其在免疫抑制動物中可造成嚴重的肉芽腫性腦炎和腎炎。",
    synonyms: ["兔腦炎微孢子蟲症", "E. cuniculi感染", "Microsporidiosis"],
    epidemiology: { species: "兔為主要宿主；犬（尤其幼犬）可感染；貓少見", breed: "犬無明顯品種好發", age: "幼犬（<3個月）和免疫抑制犬較易發病", sex: "無性別差異", prevalence: "兔帶原率可達50%以上；犬的臨床感染罕見" },
    clinicalPresentation: { symptoms: ["神經症狀（共濟失調、頭歪、眼球震顫）", "腎衰竭（多飲多尿）", "白內障（水晶體破裂性葡萄膜炎）", "後肢無力或癱瘓", "行為改變", "癲癇發作", "厭食", "體重減輕", "眼內炎", "嗜睡"], physicalExam: ["前庭症狀（頭歪、眼球震顫）", "共濟失調", "後肢本體感覺缺失", "白內障（兔常見）", "腎臟觸診可能腫大並不規則", "體況評分下降"] },
    pathophysiology: "E. cuniculi孢子經口或吸入感染後，在腸道被吸收進入血流，播散至腎臟、腦和眼等靶器官。孢子在靶器官細胞內增殖，形成特徵性肉芽腫性炎症反應。腎臟內形成慢性間質性腎炎和纖維化；腦部以肉芽腫性腦炎為主，影響腦幹和小腦導致前庭症狀；眼部侵犯水晶體導致晶狀體誘發性葡萄膜炎。免疫抑制時病原體大量增殖導致嚴重臨床病。",
    diagnosis: { primary: ["血清抗體檢測（IFA或ELISA）", "尿液PCR（孢子排出）", "腦脊液分析", "MRI（腦部病變評估）"], differential: ["犬瘟熱（腦炎）", "弓形蟲感染", "隱球菌感染", "前庭疾病（中耳炎）", "腦膜腦炎（GME/NME）", "腎臟疾病其他原因"], labFindings: ["血清IgG抗體陽性（高效價提示活躍感染）", "尿PCR可偵測孢子排出", "CSF：輕度蛋白質升高和單核細胞增多", "BUN/Creatinine升高（腎臟受累）", "組織病理：肉芽腫性炎症伴微孢子蟲"] },
    treatment: { acute: "支持療法：靜脈輸液、抗癲癇藥（若有癲癇）", chronic: "長期抗微孢子蟲藥物治療", medications: ["Fenbendazole（20 mg/kg PO SID，28天或更長）", "Albendazole（替代選擇，注意骨髓抑制風險）", "Dexamethasone（減少腦部炎症）", "抗癲癇藥（Levetiracetam）", "輸液（腎功能支持）"], surgery: "白內障：水晶體摘除術（phacoemulsification）可用於兔的眼部病變" },
    prognosis: "預後取決於感染的器官系統和免疫狀態。輕度腎臟受累者治療後可穩定。嚴重神經症狀者預後謹慎至不良。免疫抑制動物預後差。兔適當治療後預後中等。",
    pearls: ["與兔共養的犬貓出現神經症狀時應考慮E. cuniculi感染", "血清抗體陽性不等於臨床疾病——很多動物為無症狀帶原", "Fenbendazole是目前最被接受的治療選擇，療程需足夠長（至少28天）", "此為人畜共通傳染病，免疫抑制人群（HIV患者等）需特別注意"],
    monitoring: ["神經症狀改善評估", "腎功能追蹤", "尿PCR追蹤孢子排出", "抗體效價變化"],
    reference: "Fowler's Zoo and Wild Animal Medicine"
  },
  "canine-herpesvirus": {
    zh: "犬疱疹病毒感染",
    en: "Canine Herpesvirus Infection (CHV-1)",
    definition: "犬疱疹病毒感染是由犬疱疹病毒第一型（Canine Herpesvirus-1, CHV-1）引起的感染症。對新生幼犬（<3週齡）可導致致命性的全身性出血壞死性疾病，是新生幼犬死亡的重要原因之一（fading puppy syndrome）。成犬感染通常為亞臨床或輕度呼吸道症狀。",
    synonyms: ["犬疱疹病毒病", "CHV-1感染", "幼犬衰弱症候群", "Fading puppy syndrome"],
    epidemiology: { species: "犬", breed: "所有品種均可感染", age: "新生幼犬（<3週齡）最嚴重；成犬多為亞臨床", sex: "無性別差異", prevalence: "犬族群血清陽性率約20-80%（因地區而異）；為重要的繁殖場疾病" },
    clinicalPresentation: { symptoms: ["新生幼犬：突然厭食", "虛弱哀嚎", "腹部疼痛", "糞便黃綠色或出血", "鼻腔漿液性分泌物", "呼吸困難", "低體溫", "急速惡化死亡（24-48小時內）", "成犬：輕度鼻炎、陰道/包皮水泡", "母犬：流產或死產"], physicalExam: ["新生幼犬：低體溫（<36°C）", "腹部膨脹和疼痛", "黏膜出血點", "呼吸窘迫", "全身無力", "成犬：陰道/包皮黏膜小水泡", "鼻腔輕度充血"] },
    pathophysiology: "CHV-1是Alpha-herpesvirus，對溫度敏感——在39°C增殖受抑制而在35-36°C增殖良好。這解釋了新生幼犬（體溫調節能力差，體溫較低）為何特別易感。病毒經鼻口或陰道接觸傳播，也可經胎盤垂直傳播。在新生幼犬體內，病毒在低體溫的環境下大量複製，造成腎臟、肝臟、肺臟、腎上腺的瀰漫性壞死和出血。成犬感染後病毒潛伏於三叉神經節和腰薦神經節，可在緊迫時重新活化。",
    diagnosis: { primary: ["屍檢和組織病理學（特徵性多器官出血壞死）", "PCR檢測（組織或拭子）", "病毒分離培養", "血清學（配對血清）"], differential: ["犬細小病毒（新生幼犬）", "細菌性敗血症", "弓形蟲感染", "犬瘟熱", "新生兒溶血", "犬布魯氏菌感染（流產）"], labFindings: ["屍檢：腎臟特徵性多焦點出血壞死斑（pathognomonic）", "組織病理：嗜酸性核內包涵體", "PCR陽性（組織、口鼻拭子）", "肝酶升高", "血小板減少（DIC）"] },
    treatment: { acute: "新生幼犬：支持療法為主——維持體溫（保溫至37-39°C是關鍵）、補液", chronic: "成犬通常不需特殊治療", medications: ["維持體溫為最重要治療（保溫箱38-39°C）", "皮下或靜脈輸液", "抗病毒藥物效果有限（Acyclovir嘗試性使用）", "廣效抗生素（預防繼發感染）", "母犬繁殖管理"], surgery: "不適用" },
    prognosis: "新生幼犬（<3週齡）感染後死亡率極高（>80%）。存活幼犬可能有永久性腎臟和神經損傷。>3週齡幼犬感染後多可存活。成犬預後極佳。母犬經歷一次CHV-1相關流產後，後續繁殖通常正常（已有免疫力）。",
    pearls: ["新生幼犬突然死亡首先要考慮CHV-1——腎臟的多焦點出血壞死斑是特徵性病變", "保溫是最重要的治療和預防措施——維持環境溫度在38-39°C可抑制病毒複製", "歐洲有CHV-1疫苗（Eurican Herpes 205），建議繁殖母犬於配種時和分娩前注射", "一窩幼犬中若有一隻發病，其他幼犬可能已感染——立即加強保溫措施"],
    monitoring: ["新生幼犬體溫每2小時監測", "同窩幼犬密切觀察", "母犬後續繁殖追蹤", "繁殖場血清學篩檢"],
    reference: "Drug Therapy for Infectious Diseases of the Dog and Cat"
  },
  "feline-coronavirus-enteric": {
    zh: "貓腸道冠狀病毒感染",
    en: "Feline Enteric Coronavirus Infection (FECV)",
    definition: "貓腸道冠狀病毒（FECV）感染是由貓冠狀病毒（Feline Coronavirus, FCoV）的低致病力生物型引起的腸道感染。大多數感染為亞臨床或輕度腹瀉，但FECV可在宿主體內突變為高致病力的貓傳染性腹膜炎病毒（FIPV），導致致命性的FIP。",
    synonyms: ["貓冠狀病毒腸炎", "FECV感染", "FCoV感染"],
    epidemiology: { species: "貓", breed: "純種貓群（多貓環境）感染率較高；緬甸貓、孟加拉貓、阿比西尼亞貓FIP風險可能較高", age: "幼貓（<2歲）感染率和FIP發展風險最高", sex: "無性別差異（但公貓FIP風險可能略高）", prevalence: "多貓家庭FCoV血清陽性率可達80-90%；單貓家庭約10-50%" },
    clinicalPresentation: { symptoms: ["多數無症狀", "輕度自限性腹瀉", "軟便", "偶有嘔吐", "幼貓可能有短暫厭食", "通常1-2週自行緩解", "慢性帶原（持續排毒）", "少數發展為FIP時出現嚴重全身症狀"], physicalExam: ["多數理學檢查正常", "輕度腹瀉時可能有輕度脫水", "腸蠕動音可能活躍", "體況通常良好"] },
    pathophysiology: "FCoV為Alpha-coronavirus，經糞口途徑傳播，在貓小腸上皮細胞（腸道絨毛頂端）複製。FECV生物型主要局限於腸道上皮複製，引起輕微的絨毛萎縮和輕度炎症。約5-10%感染FECV的貓體內，病毒發生關鍵突變（尤其在S基因和ORF3c區域），獲得巨噬細胞趨向性，轉變為FIPV生物型，導致全身性免疫介導性血管炎（FIP）。大多數感染貓會持續排毒數月至數年，成為環境中的持續感染源。",
    diagnosis: { primary: ["糞便RT-PCR（偵測FCoV排毒）", "血清抗體測定（FCoV抗體效價）", "臨床症狀評估", "排除其他腹瀉原因"], differential: ["寄生蟲性腸炎（球蟲、梨形鞭毛蟲）", "細菌性腸炎", "貓泛白血球減少症", "飲食不當/食物不耐受", "發炎性腸病", "腸道淋巴瘤"], labFindings: ["糞便RT-PCR陽性（注意：陽性僅表示排毒，不代表會發展為FIP）", "FCoV抗體效價升高", "血液學通常正常（單純FECV感染）", "高球蛋白血症和低A/G比（發展為FIP時）"] },
    treatment: { acute: "輕度腹瀉：支持療法和飲食管理", chronic: "無特異性抗病毒治療用於單純FECV腸炎", medications: ["輸液療法（脫水時）", "益生菌", "飲食管理（高消化性飲食）", "Maropitant（止吐，必要時）", "GS-441524或Molnupiravir（僅用於FIP，非單純FECV）"], surgery: "不適用" },
    prognosis: "單純FECV腸道感染預後極佳，大多數貓為亞臨床或輕度自限性腹瀉。約5-10%感染貓會發展為FIP，此時若未治療預後極差（近年GS-441524等抗病毒藥物已大幅改善FIP預後）。",
    pearls: ["FCoV抗體陽性不等於FIP——大多數抗體陽性貓永遠不會發展為FIP", "多貓環境中減少貓密度和增加貓砂盆數量可降低傳播", "幼貓（<2歲）和緊迫（手術、搬家、收容所）是FECV突變為FIPV的風險因子", "糞便PCR陽性僅代表排毒，對FIP診斷無直接意義"],
    monitoring: ["多貓環境定期糞便PCR追蹤排毒狀態", "抗體效價變化追蹤（升高不一定代表FIP）", "觀察FIP早期症狀（持續發燒、體重下降、腹水）", "新進貓隔離2-4週並檢測"],
    reference: "Clinical Veterinary Advisor: Dogs and Cats"
  },
  "coccidiosis": {
    zh: "球蟲症",
    en: "Coccidiosis",
    definition: "球蟲症是由球蟲屬原蟲（主要為Isospora/Cystoisospora spp.）引起的腸道寄生蟲感染。犬主要感染C. canis和C. ohioensis；貓主要感染C. felis和C. rivolta。幼年動物和免疫抑制動物較易出現臨床症狀，成年免疫正常動物多為自限性。",
    synonyms: ["球蟲感染", "等孢球蟲症", "Isosporiasis", "Cystoisospora感染"],
    epidemiology: { species: "犬貓均常見", breed: "無品種好發", age: "幼犬幼貓（<6個月）最常發病", sex: "無性別差異", prevalence: "收容所和繁殖場幼犬幼貓感染率可高達20-50%以上" },
    clinicalPresentation: { symptoms: ["水樣腹瀉", "血便（小腸或大腸型）", "黏液便", "腹痛", "裡急後重", "脫水", "體重減輕", "生長遲緩", "厭食", "嘔吐（偶見）", "嚴重時直腸脫出"], physicalExam: ["脫水徵象", "腹部觸診可能有腸管脹氣", "肛周糞便沾附", "體況評分差", "幼年動物發育不良", "直腸脫出（嚴重裡急後重時）"] },
    pathophysiology: "球蟲卵囊（oocyst）經口攝入後在腸道釋出孢子體（sporozoite），侵入小腸上皮細胞進行無性和有性生殖。裂殖體（schizont）在上皮細胞內大量複製後破壞細胞釋出裂殖子（merozoite），造成腸上皮細胞大面積破壞。黏膜損傷導致吸收不良、分泌增加和出血。幼年動物因腸道免疫尚未成熟，無法有效控制寄生蟲增殖，故症狀較嚴重。環境汙染的卵囊需1-2天sporulation才具感染力。",
    diagnosis: { primary: ["糞便浮游法（偵測卵囊）", "糞便直接塗片", "糞便PCR（敏感度更高）", "臨床症狀結合環境因素"], differential: ["梨形鞭毛蟲感染", "鉤蟲感染", "鞭蟲感染", "犬細小病毒", "曲狀桿菌/沙門氏菌感染", "食物不耐受", "隱孢子蟲感染"], labFindings: ["糞便浮游法見典型卵囊（橢圓形、雙層壁）", "卵囊大小因種而異（C. canis最大，約38x30um）", "血液學可能正常或輕度嗜酸性球增多", "低白蛋白血症（嚴重時）"] },
    treatment: { acute: "嚴重脫水需輸液和電解質補充", chronic: "抗球蟲藥物治療和環境衛生管理", medications: ["Sulfadimethoxine（50-60 mg/kg首日，之後25 mg/kg SID，10-14天）", "Trimethoprim-Sulfonamide（15-30 mg/kg BID，10-14天）", "Ponazuril（50 mg/kg SID，犬3-5天；貓20 mg/kg SID，3-5天）", "Toltrazuril（10-20 mg/kg 單次或連續3天）", "輸液和營養支持"], surgery: "直腸脫出時可能需手術復位和暫時性荷包縫合" },
    prognosis: "適當治療後預後良好。幼年動物嚴重脫水未及時治療可能致死。成年免疫正常動物多為自限性。環境控制是預防復發的關鍵。",
    pearls: ["糞便中偵測到少量球蟲卵囊不一定需要治療——成年健康動物可為自限性", "Ponazuril和Toltrazuril為新一代首選藥物，療程短且效果優於傳統磺胺類", "環境消毒是控制球蟲的關鍵——卵囊對大多數消毒劑有抗性，高溫蒸氣和10%氨水有效", "收容所新進幼犬幼貓應預防性篩檢和治療球蟲"],
    monitoring: ["治療後7-14天追蹤糞便浮游法", "體重和生長發育追蹤", "環境衛生管理評估", "同窩/同群動物篩檢"],
    reference: "Clinical Veterinary Advisor: Dogs and Cats"
  }
};

// Validate JSON
try {
  const jsonStr = JSON.stringify(data, null, 2);
  JSON.parse(jsonStr); // validate round-trip
  fs.writeFileSync('E:\\CLAUDE CODE\\BOOK\\batch22-onco-infect.json', jsonStr, 'utf8');
  console.log('SUCCESS: batch22-onco-infect.json written');
  console.log('Disease count:', Object.keys(data).length);

  // Validate each disease has all required fields
  const requiredFields = ['zh','en','definition','synonyms','epidemiology','clinicalPresentation','pathophysiology','diagnosis','treatment','prognosis','pearls','monitoring','reference'];
  let allValid = true;
  for (const [id, disease] of Object.entries(data)) {
    for (const field of requiredFields) {
      if (!(field in disease)) {
        console.log(`MISSING: ${id} lacks ${field}`);
        allValid = false;
      }
    }
  }
  if (allValid) console.log('All 20 diseases have all required fields');
} catch(e) {
  console.error('JSON ERROR:', e.message);
}

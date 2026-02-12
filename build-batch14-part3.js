// Build batch14 JSON - Part 3: Infectious diseases + parasites
const fs = require('fs');

const diseases = {};

diseases["canine-influenza"] = {
  zh: "犬流感",
  en: "Canine Influenza",
  definition: "由犬流感病毒（CIV，H3N8或H3N2亞型）引起的高度傳染性呼吸道感染。",
  synonyms: ["犬流行性感冒", "CIV感染"],
  epidemiology: {
    species: "犬為主，H3N2亞型可感染貓",
    age: "任何年齡",
    sex: "無性別傾向",
    riskFactors: ["收容所、寄宿設施、狗公園等群體環境", "未接種疫苗", "免疫功能低下", "密切接觸感染犬"]
  },
  clinicalPresentation: {
    history: ["咳嗽（持續10-21天）", "鼻腔分泌物", "發燒", "厭食", "嗜睡", "群體中多隻動物同時發病"],
    physicalExam: ["鼻腔漿液性至膿性分泌物", "發燒（39.5-41°C）", "濕性咳嗽", "肺部囉音（繼發肺炎時）", "結膜充血", "輕度至重度呼吸困難（重症）"]
  },
  pathophysiology: "犬流感病毒經飛沫和接觸傳播，感染呼吸道上皮細胞。病毒在上皮細胞內複製導致細胞壞死和脫落，引發炎症反應。約80%感染犬出現臨床症狀（輕度型），約20%無症狀但仍可傳播病毒。少數發展為重度型（出血性肺炎）。排毒期約7-10天。",
  diagnosis: {
    overview: "結合流行病學背景和實驗室檢查確診",
    differentials: ["犬傳染性氣管支氣管炎（犬舍咳）", "犬瘟熱", "細菌性肺炎", "心絲蟲病", "真菌性肺炎"],
    initialDB: ["鼻腔或咽喉拭子PCR檢測", "胸部X光（重症時）", "全血球計數"],
    advanced: ["病毒分離", "血清學配對檢測（急性期和恢復期抗體效價4倍上升）", "氣管灌洗液細胞學和培養"]
  },
  treatment: {
    overview: "支持療法為主，預防繼發細菌感染",
    acute: ["輕度型：休息、營養支持、保暖", "繼發細菌感染：廣譜抗生素", "重症：住院靜脈輸液、氧氣治療", "止咳藥（非生產性咳嗽）", "退燒（NSAIDs）"],
    chronic: ["隔離患犬至少21天", "環境消毒", "疫苗接種預防（H3N8和H3N2二價疫苗）", "高風險群體接種"]
  },
  prognosis: "大多數犬為輕度自限性感染，存活率>95%。重度出血性肺炎型死亡率較高（約5-8%）。無併發症者1-3週內恢復。",
  pearls: ["約20%感染犬為無症狀帶原者但仍具傳染性", "H3N2亞型比H3N8更具致病力", "犬舍、收容所爆發時應立即隔離和消毒", "病毒在環境中存活約48小時，一般消毒劑即可殺滅", "流感疫苗不能完全預防感染但可減輕症狀"],
  monitoring: ["呼吸症狀改善", "體溫", "食慾和活力", "群體中新病例出現", "胸部X光追蹤（重症）"],
  reference: "Côté E: Clinical Veterinary Advisor, 4th Ed. Elsevier, 2020"
};

diseases["feline-chlamydiosis"] = {
  zh: "貓衣原體感染",
  en: "Feline Chlamydiosis",
  definition: "由貓衣原體（Chlamydia felis）引起的上呼吸道和結膜感染，以慢性結膜炎為主要表現。",
  synonyms: ["貓衣原體結膜炎", "貓衣原體肺炎", "Feline Chlamydophilosis"],
  epidemiology: {
    species: "貓",
    age: "幼貓（5週至9月齡）最常見，成貓也可感染",
    sex: "無性別傾向",
    riskFactors: ["多貓家庭", "收容所環境", "未接種疫苗", "免疫功能低下", "與感染貓密切接觸", "應激因素"]
  },
  clinicalPresentation: {
    history: ["單側結膜炎（後轉為雙側）", "漿液性至膿性眼分泌物", "眨眼和流淚", "輕度鼻腔分泌物", "打噴嚏", "食慾可能正常或輕度下降"],
    physicalExam: ["結膜充血和水腫（化學性結膜炎）", "漿液性至黏膿性眼分泌物", "瞬膜突出", "眼瞼痙攣", "角膜通常不受影響", "輕度鼻腔分泌物", "罕見發燒"]
  },
  pathophysiology: "貓衣原體為專性細胞內寄生菌，主要感染結膜上皮細胞。病原體在細胞內形成包含體進行增殖，引發局部炎症反應。感染通常始於一側眼睛，5-7天後擴散至另一側。慢性感染可能與生殖道定殖有關。",
  diagnosis: {
    overview: "結膜拭子PCR為最敏感的確診方法",
    differentials: ["貓疱疹病毒感染", "貓杯狀病毒感染", "黴漿菌感染", "細菌性結膜炎", "過敏性結膜炎"],
    initialDB: ["結膜拭子PCR", "結膜細胞學（上皮細胞內包含體，敏感度低）", "眼部螢光素染色（排除角膜潰瘍）"],
    advanced: ["結膜拭子培養", "血清學檢查（IgG/IgM）", "FeLV/FIV檢測", "上呼吸道病原體多重PCR"]
  },
  treatment: {
    overview: "全身性和局部抗生素治療為主",
    acute: ["Doxycycline 10 mg/kg PO SID（首選），療程至少4週", "四環素眼藥膏 TID-QID", "眼部清潔（溫生理食鹽水）", "多貓家庭全部貓同時治療"],
    chronic: ["延長Doxycycline療程（症狀消失後再續2週）", "環境消毒", "疫苗接種預防", "減少應激因素"]
  },
  prognosis: "適當抗生素治療預後良好，大多數貓在2-3週內改善。不治療可能慢性化持續數月。慢性帶原狀態可能存在。",
  pearls: ["單側起始的結膜炎高度提示衣原體感染（疱疹病毒也可能）", "Doxycycline是首選，Azithromycin為替代", "治療不完全是復發的主要原因", "低人畜共通傳染風險（免疫抑制人群需注意）", "多貓環境中需同時治療所有貓以避免交叉感染"],
  monitoring: ["眼部症狀改善", "治療完成後PCR追蹤", "同居貓的症狀", "疫苗接種時程"],
  reference: "Côté E: Clinical Veterinary Advisor, 4th Ed. Elsevier, 2020"
};

diseases["canine-brucellosis"] = {
  zh: "犬布魯氏菌病",
  en: "Canine Brucellosis",
  definition: "由犬布魯氏菌（Brucella canis）引起的慢性全身性感染，主要影響生殖系統，為重要的人畜共通傳染病。",
  synonyms: ["犬布氏桿菌感染", "Brucella canis Infection"],
  epidemiology: {
    species: "犬",
    age: "任何年齡，繁殖犬較常見",
    sex: "兩性皆感染，繁殖犬風險最高",
    riskFactors: ["繁殖犬舍", "未檢疫的繁殖犬", "接觸流產物質", "交配感染", "收容所環境"]
  },
  clinicalPresentation: {
    history: ["母犬：流產（懷孕後期）、不孕", "公犬：睪丸腫大後萎縮、不孕", "淋巴結腫大", "脊椎疼痛", "嗜睡", "部分犬無明顯症狀"],
    physicalExam: ["全身淋巴結腫大", "公犬：附睪腫大、睪丸萎縮", "母犬：陰道分泌物", "椎間盤脊椎炎（腰椎疼痛）", "眼前房積膿（葡萄膜炎）", "體況可能正常"]
  },
  pathophysiology: "犬布魯氏菌經口、鼻、結膜或生殖道黏膜入侵，被巨噬細胞攝入後在細胞內增殖。菌血症持續數月至數年，細菌定殖於生殖器官、脾臟、肝臟和淋巴結。在胎盤滋養層細胞中大量增殖導致流產。公犬中細菌定殖於附睪和前列腺。",
  diagnosis: {
    overview: "血清學篩檢結合血液培養確診",
    differentials: ["其他流產原因（疱疹病毒、弓蟲）", "睪丸腫瘤", "前列腺疾病", "椎間盤脊椎炎其他原因", "系統性黴菌感染"],
    initialDB: ["快速玻片凝集試驗（RSAT，篩檢用）", "試管凝集試驗（TAT）", "全血球計數", "血液培養"],
    advanced: ["瓊脂凝膠免疫擴散試驗（AGID，確認試驗）", "血液PCR", "精液培養", "脊椎X光（椎間盤脊椎炎）"]
  },
  treatment: {
    overview: "抗生素聯合治療，但難以完全清除感染，建議絕育",
    acute: ["Doxycycline 12.5 mg/kg PO BID + Streptomycin 20 mg/kg IM（4週）", "替代方案：Doxycycline + Enrofloxacin", "絕育手術（公犬去勢、母犬卵巢子宮切除）"],
    chronic: ["長期抗生素（至少8-12週）", "定期血清學追蹤", "隔離感染犬", "繁殖犬退出繁殖計畫"]
  },
  prognosis: "抗生素治療可控制臨床症狀但難以完全清除細菌，復發常見。感染犬應視為終身帶原者。對繁殖犬舍可造成嚴重經濟損失。",
  pearls: ["為重要的人畜共通傳染病，處理感染犬應戴手套", "血清學假陽性可能發生，需確認試驗", "繁殖犬配種前應常規檢測", "治療後血清學轉陰不代表完全清除", "流產物質含大量細菌，傳染性極高", "部分國家要求通報"],
  monitoring: ["血清學每月追蹤至轉陰", "血液培養確認", "繁殖功能", "同群犬隻的篩檢", "人員暴露風險評估"],
  reference: "Côté E: Clinical Veterinary Advisor, 4th Ed. Elsevier, 2020"
};

diseases["tapeworm"] = {
  zh: "絛蟲感染",
  en: "Tapeworm Infection",
  definition: "犬貓腸道內絛蟲（條蟲）寄生，最常見為犬複孔絛蟲（Dipylidium caninum）和包蟲屬絛蟲（Taenia/Echinococcus）。",
  synonyms: ["條蟲感染", "Cestodiasis"],
  epidemiology: {
    species: "犬貓皆常見",
    age: "任何年齡",
    sex: "無性別傾向",
    riskFactors: ["跳蚤感染（Dipylidium）", "捕食中間宿主（齧齒類、兔子）", "餵食生肉或內臟", "戶外放養", "多寵物家庭"]
  },
  clinicalPresentation: {
    history: ["肛門周圍可見白色節片（似米粒或芝麻）", "肛門搔癢（蹭地）", "偶有嘔吐", "輕度腹瀉", "多數無明顯症狀", "大量感染時體重減輕"],
    physicalExam: ["通常理學檢查無異常", "肛門周圍或糞便中可見蟲體節片", "嚴重感染可能消瘦", "毛髮失去光澤", "腹部膨大（幼犬大量感染）"]
  },
  pathophysiology: "絛蟲需要中間宿主完成生活史。犬複孔絛蟲的中間宿主為跳蚤，犬貓吞食含囊尾幼蟲的跳蚤而感染。Taenia屬的中間宿主為齧齒類或兔子。成蟲以頭節附著於小腸壁，吸收宿主營養。孕節（含蟲卵）脫落後從肛門排出或隨糞便排出。",
  diagnosis: {
    overview: "糞便或肛門周圍發現蟲體節片即可診斷",
    differentials: ["蛔蟲感染", "鉤蟲感染", "鞭蟲感染", "腸道原蟲感染", "其他腸道寄生蟲"],
    initialDB: ["肉眼觀察糞便或肛門周圍節片", "糞便浮游法（蟲卵包，但檢出率低）", "節片鏡檢鑑定蟲種"],
    advanced: ["糞便PCR（蟲種鑑定）", "腹部X光或超音波（大量蟲體）"]
  },
  treatment: {
    overview: "驅蟲藥物治療，同時控制中間宿主",
    acute: ["Praziquantel 5 mg/kg PO 或 SC 單次（首選）", "Epsiprantel 5.5 mg/kg PO（犬）或 2.75 mg/kg PO（貓）", "Fenbendazole 50 mg/kg PO SID x 3天（Taenia屬）"],
    chronic: ["控制跳蚤（Dipylidium的關鍵）", "限制捕食齧齒類和兔子", "定期驅蟲（每3-6個月）", "環境衛生管理"]
  },
  prognosis: "驅蟲治療效果極佳，但若中間宿主未控制易再感染。對動物健康影響通常輕微。Echinococcus屬具重要人畜共通傳染風險。",
  pearls: ["糞便浮游法對絛蟲的檢出率低（約僅5-10%），肉眼觀察節片更可靠", "見到白色米粒狀物在肛門周圍移動幾乎可確診Dipylidium", "控制跳蚤是預防Dipylidium再感染的關鍵", "Echinococcus granulosus和E. multilocularis有重要人畜共通傳染意義", "驅蟲後可能在24-48小時內排出大量蟲體"],
  monitoring: ["驅蟲後糞便觀察", "跳蚤控制效果", "再感染跡象", "定期糞便檢查"],
  reference: "Côté E: Clinical Veterinary Advisor, 4th Ed. Elsevier, 2020"
};

diseases["whipworm"] = {
  zh: "鞭蟲感染",
  en: "Whipworm Infection",
  definition: "由犬鞭蟲（Trichuris vulpis）寄生於盲腸和結腸引起的腸道寄生蟲感染。",
  synonyms: ["毛首線蟲感染", "Trichuriasis"],
  epidemiology: {
    species: "犬較常見，貓罕見",
    age: "任何年齡，成犬也常見",
    sex: "無性別傾向",
    riskFactors: ["戶外環境接觸污染土壤", "群體犬舍", "溫暖潮濕環境", "蟲卵在土壤中可存活數年"]
  },
  clinicalPresentation: {
    history: ["大腸性腹瀉（含黏液和/或鮮血）", "排便頻繁但量少", "裏急後重", "慢性間歇性腹瀉", "體重減輕", "部分犬無明顯症狀"],
    physicalExam: ["通常理學檢查無異常", "嚴重感染可能消瘦和脫水", "腹部觸診可能無異常", "糞便帶血和黏液"]
  },
  pathophysiology: "犬經口攝入含感染性幼蟲的鞭蟲卵。幼蟲在小腸孵化後遷移至盲腸和結腸，成蟲前端細如鞭子般鑽入黏膜吸食血液和組織液。蟲體對腸道黏膜造成機械性損傷和炎症反應，導致出血性或黏液性結腸炎。大量感染可造成顯著失血和電解質失衡（假性Addison病樣低鈉高鉀）。",
  diagnosis: {
    overview: "糞便浮游法檢出特徵性蟲卵即可診斷",
    differentials: ["結腸炎", "鉤蟲感染", "梨形鞭毛蟲", "發炎性腸病", "結腸腫瘤", "腎上腺功能低下（因電解質異常）"],
    initialDB: ["糞便浮游法（特徵性檸檬形帶栓蟲卵）", "需多次檢查（間歇性排卵）", "全血球計數（可見貧血）", "生化檢查（低鈉高鉀）"],
    advanced: ["糞便PCR", "結腸鏡檢查（可見蟲體附著）", "ACTH刺激試驗（排除Addison病）"]
  },
  treatment: {
    overview: "驅蟲藥物治療，需注意環境控制防止再感染",
    acute: ["Fenbendazole 50 mg/kg PO SID x 3天（首選）", "Febantel-Pyrantel-Praziquantel複合驅蟲藥", "嚴重貧血需支持療法和輸血", "電解質矯正"],
    chronic: ["每月驅蟲3個月以清除再感染", "定期預防性驅蟲", "環境消毒（蟲卵抗性強，需徹底清理）", "限制接觸污染區域"]
  },
  prognosis: "驅蟲治療反應良好，但環境中蟲卵可存活數年導致反覆感染。控制環境污染是長期管理關鍵。",
  pearls: ["鞭蟲感染可導致低鈉高鉀，臨床上模擬Addison病（假性Addison）", "糞便單次檢查陰性不能排除感染（間歇性排卵）", "蟲卵在土壤中可存活5-7年，環境控制困難", "某些每月心絲蟲預防藥（含Milbemycin或Moxidectin）可同時預防鞭蟲", "大腸性腹瀉在犬應考慮鞭蟲感染"],
  monitoring: ["糞便檢查追蹤", "腹瀉改善", "電解質正常化", "體重恢復", "環境管理效果"],
  reference: "Côté E: Clinical Veterinary Advisor, 4th Ed. Elsevier, 2020"
};

diseases["flea-infestation"] = {
  zh: "跳蚤感染",
  en: "Flea Infestation",
  definition: "由貓蚤（Ctenocephalides felis）或犬蚤（C. canis）寄生引起的外寄生蟲感染，可導致搔癢、過敏性皮膚炎和絛蟲傳播。",
  synonyms: ["蚤患", "跳蚤寄生"],
  epidemiology: {
    species: "犬貓皆極為常見",
    age: "任何年齡",
    sex: "無性別傾向",
    riskFactors: ["戶外活動", "未使用預防藥物", "溫暖潮濕季節", "多寵物家庭", "野生動物接觸", "地毯和軟墊家具環境"]
  },
  clinicalPresentation: {
    history: ["搔癢（可能劇烈）", "掉毛", "皮膚紅疹", "在寵物身上或環境中發現跳蚤或蚤糞", "過敏犬可能極度不適", "幼犬幼貓可能出現貧血"],
    physicalExam: ["跳蚤成蟲（快速移動的棕色小蟲）", "蚤糞（黑色逗點狀，水上溶解呈紅色）", "背部、尾根部、腹股溝區搔抓痕和脫毛", "丘疹性皮膚炎", "跳蚤過敏性皮膚炎：腰薦部嚴重脫毛和結痂", "幼年動物可能黏膜蒼白（跳蚤性貧血）"]
  },
  pathophysiology: "跳蚤刺咬吸血時注入唾液，唾液中的蛋白質（過敏原）可誘發第I型和第IV型超敏反應（跳蚤過敏性皮膚炎，FAD）。單次叮咬即可在致敏動物引發持續數日的劇烈搔癢。大量跳蚤寄生可造成顯著失血。跳蚤為犬複孔絛蟲和血巴東體的傳播媒介。",
  diagnosis: {
    overview: "臨床檢查發現跳蚤或蚤糞即可確診",
    differentials: ["異位性皮膚炎", "食物過敏", "疥蟎感染", "蝨感染", "膿皮症"],
    initialDB: ["仔細檢查皮毛尋找跳蚤和蚤糞", "蚤糞試驗（蚤糞放在濕白紙上呈紅色暈開）", "梳理試驗（密齒蚤梳）", "皮膚刮片（排除其他寄生蟲）"],
    advanced: ["皮內過敏原試驗（FAD確認）", "血清IgE檢測", "全血球計數（排除貧血）", "糞便檢查（絛蟲）"]
  },
  treatment: {
    overview: "殺滅跳蚤和環境控制並重",
    acute: ["速效成蟲殺滅劑（Nitenpyram口服、Capstar）", "全身性殺蚤藥（Fluralaner/Bravecto、Sarolaner/Simparica、Afoxolaner/NexGard）", "搔癢控制：短期Prednisolone或Oclacitinib", "嚴重FAD：抗生素治療繼發感染"],
    chronic: ["全年每月預防用藥（Isoxazoline類或Selamectin等）", "環境控制：吸塵、清洗寢具、環境殺蟲劑（IGR）", "所有同居寵物同時治療", "跳蚤過敏犬需長期預防"]
  },
  prognosis: "使用現代殺蚤藥物控制效果極佳。跳蚤過敏性皮膚炎需嚴格預防以避免復發。環境中的蟲卵和蛹可存活數月，需持續預防。",
  pearls: ["看不到跳蚤不代表沒有跳蚤感染（過敏犬可能已將跳蚤梳除）", "蚤糞試驗是簡單但非常有效的診斷工具", "環境中95%的跳蚤族群為卵、幼蟲和蛹，成蟲僅佔5%", "Isoxazoline類藥物是目前最有效的殺蚤藥物", "跳蚤過敏犬一個跳蚤叮咬就可引發嚴重反應", "環境處理需至少3個月才能打破跳蚤生活史"],
  monitoring: ["跳蚤數量減少", "搔癢改善", "皮膚病變癒合", "預防藥物依從性", "環境控制效果"],
  reference: "Côté E: Clinical Veterinary Advisor, 4th Ed. Elsevier, 2020"
};

fs.writeFileSync('E:/CLAUDE CODE/BOOK/batch14-part3.json', JSON.stringify(diseases, null, 2), 'utf8');
console.log('Part 3 written: ' + Object.keys(diseases).length + ' diseases');

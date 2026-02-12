// batch-A9-data.js — 內分泌/泌尿/眼科 10種疾病結構化資料
module.exports = {
  "idiopathic-cystitis": {
    zh: "貓自發性膀胱炎",
    en: "Feline Idiopathic Cystitis (FIC)",
    definition: "貓最常見的下泌尿道疾病，佔貓下泌尿道症狀（FLUTD）病例的55-69%。特徵為無菌性膀胱壁發炎，病因不明但與神經內分泌系統失調和環境壓力密切相關。屬排除性診斷，需先排除感染、結石和腫瘤等已知病因。",
    synonyms: ["貓自發性膀胱炎", "FIC", "貓間質性膀胱炎", "Feline Interstitial Cystitis", "Pandora Syndrome"],
    epidemiology: {
      species: "貓（極少見於犬）",
      age: "1-10歲，好發2-6歲中年貓",
      sex: "公貓母貓發生率相當，但公貓因尿道較窄更易出現尿道阻塞",
      riskFactors: ["室內飼養且缺乏環境豐富化", "肥胖/體重過重", "多貓家庭或環境壓力", "乾飼料為主食（飲水量不足）", "緊張型性格", "缺乏運動"]
    },
    clinicalPresentation: {
      history: ["頻尿（頻繁進出貓砂盆）", "血尿（尿液帶粉紅色至紅色）", "排尿困難或排尿姿勢異常", "不在貓砂盆外排尿", "過度舔舐生殖區域", "症狀反覆發作，常與壓力事件相關"],
      physicalExam: ["膀胱觸診敏感或增厚", "公貓可能出現尿道阻塞（膀胱脹大、堅硬）", "會陰部可見尿液汙染", "體態評分常偏高", "其餘理學檢查多無特異性發現"]
    },
    pathophysiology: "FIC的病理生理涉及膀胱黏膜防禦機制缺損、神經內分泌系統失調和環境壓力三者的複雜交互作用。膀胱上皮的糖胺多醣（GAG）保護層缺損使尿液中刺激性物質滲透至黏膜下層，激活C纖維感覺神經釋放P物質，引發神經源性發炎。同時，患貓的下視丘-垂體-腎上腺軸（HPA axis）反應異常，交感神經系統持續亢進，導致兒茶酚胺濃度升高。這些變化形成膀胱局部發炎和全身性壓力反應的惡性循環。",
    diagnosis: {
      overview: "FIC為排除性診斷，需系統性排除其他FLUTD病因後方可確診",
      differentials: ["泌尿道感染（UTI）", "膀胱結石/尿道結石", "膀胱腫瘤（移行上皮細胞癌）", "尿道栓子", "行為性排尿異常"],
      initialDB: ["完整尿液分析（無菌採集）", "尿液培養與藥敏試驗", "腹部X光（排除結石）", "CBC/血液生化（評估全身狀態）"],
      advanced: ["腹部超音波（評估膀胱壁厚度、排除腫瘤）", "膀胱鏡檢（見黏膜下出血點—肎皮球體）", "尿液GAG濃度測定", "對比攝影排除解剖異常"]
    },
    treatment: {
      overview: "治療以多模式環境修正（MEMO）為核心，輔以飲食管理和壓力緩解",
      acute: ["阻塞型：緊急導尿解除阻塞+靜脈輸液矯正電解質", "疼痛管理：Buprenorphine 0.01-0.03 mg/kg SL q6-8h", "短期抗痙攣藥：Prazosin 0.25-0.5 mg/cat PO q12h（公貓）"],
      chronic: ["環境豐富化：增加貓砂盆數量（N+1原則）、垂直空間、藏匿處", "飲食轉換為濕食為主（增加飲水量）", "費洛蒙擴散器（Feliway®）減壓", "嚴重復發型：Amitriptyline 2.5-12.5 mg/cat PO q24h"]
    },
    prognosis: "多數急性發作在5-7天內自行緩解，但約50%的貓在6-12個月內復發。透過完善的環境修正（MEMO），復發率可降低70-80%。少數貓發展為慢性持續型，需長期管理。公貓尿道阻塞未及時處理可致命。",
    pearls: ["FIC是排除診斷——年輕貓（<10歲）的FLUTD先排除結石和阻塞，老年貓要先排除UTI和腫瘤", "環境修正（MEMO）的效果遠優於任何藥物治療，是最重要的長期管理策略", "公貓尿道阻塞是急診，48小時未處理可因高血鉀導致心律不整死亡"],
    diagnosticAlgorithm: {
      title: "貓自發性膀胱炎 診斷流程",
      steps: [
        { step: 1, action: "病史與臨床評估", details: "確認FLUTD症狀（頻尿、血尿、排尿困難），評估環境壓力因子", findings: ["頻尿/血尿/排尿困難", "室內飼養+環境壓力"] },
        { step: 2, action: "尿液分析與培養", details: "無菌採集尿液進行完整分析和細菌培養", findings: ["血尿但培養陰性", "結晶可能存在但非主因"] },
        { step: 3, action: "影像學檢查", details: "X光和/或超音波排除結石和腫瘤", findings: ["無結石或腫塊", "膀胱壁可能增厚"] },
        { step: 4, action: "排除性確診", details: "排除感染、結石、腫瘤和解剖異常後確診FIC", findings: ["所有已知病因被排除", "確診FIC並制定MEMO計畫"] }
      ]
    },
    monitoring: ["症狀日記（排尿頻率、血尿程度、壓力事件記錄）", "體重管理（維持理想體態BCS 4-5/9）", "飲水量監測（目標增加至少50%）", "定期尿液分析（q3-6個月，監測復發）"],
    reference: "Buffington CAT (2011) Idiopathic Cystitis in Domestic Cats. Vet Clin North Am Small Anim Pract; PMC Review (2022) Frontiers Vet Sci 9:900847; VCA Hospitals - Feline Idiopathic Cystitis"
  },

  "uroabdomen": {
    zh: "尿液腹",
    en: "Uroabdomen",
    definition: "因泌尿道任何部位（腎臟至骨盆尿道）完整性喪失，導致尿液滲漏至腹腔或後腹膜腔的急症。最常見原因為鈍性外傷（車禍），犬以膀胱破裂為主（>50%），貓以輸尿管損傷較常見。未及時處理將導致嚴重電解質失衡和氮質血症。",
    synonyms: ["尿液腹", "泌尿道破裂", "Uroperitoneum", "Urinary Tract Rupture"],
    epidemiology: {
      species: "犬貓皆可",
      age: "任何年齡，幼年動物腹壁較薄更易受傷",
      sex: "公犬風險較高（尿道長而窄，膀胱內壓急升時更易破裂）",
      riskFactors: ["車禍或鈍性腹部外傷", "尿道阻塞後膀胱過度膨脹", "粗暴徒手排尿或導尿操作", "腹部手術後（術後滲漏）", "泌尿道腫瘤"]
    },
    clinicalPresentation: {
      history: ["近期外傷史或泌尿道手術", "尿量減少或無尿", "漸進性精神萎靡和厭食", "腹部膨脹", "嘔吐"],
      physicalExam: ["腹部膨脹和波動感", "觸診腹部疼痛", "膀胱可能無法觸及或異常小", "黏膜蒼白或充血", "心搏過緩（高血鉀所致）", "脫水"]
    },
    pathophysiology: "泌尿道破裂後尿液滲漏至腹腔，尿素氮和肌酸酐經腹膜吸收導致嚴重的腎後性氮質血症。尿液中的鉀離子被重吸收導致危及生命的高血鉀症（可致心搏過緩和心律不整）。同時鈉和氯經腹膜稀釋效應而降低。腹腔內尿液引起化學性腹膜炎，腹膜血管擴張導致體液第三空間分佈和低血容量性休克。慢性滲漏還可能導致後腹膜纖維化和輸尿管狹窄。",
    diagnosis: {
      overview: "結合腹水分析（肌酸酐比值）和影像學確認滲漏部位",
      differentials: ["其他原因腹水（心衰、肝病、腹膜炎）", "腎後性阻塞（結石/腫瘤）", "急性腎損傷", "腹腔內出血"],
      initialDB: ["CBC/血液生化（BUN、肌酸酐、電解質）", "腹部超音波（確認腹水）", "腹水分析：腹水/血清肌酸酐比 ≥2:1確診", "腹水/血清鉀比 >1.4:1 支持診斷"],
      advanced: ["陽性對比膀胱尿道攝影（定位下泌尿道破裂）", "排泄性尿路攝影（定位腎臟/輸尿管損傷）", "CT尿路攝影（高敏感度定位）"]
    },
    treatment: {
      overview: "先穩定再手術——糾正電解質失衡後再進行手術修補",
      acute: ["積極靜脈輸液（0.9% NaCl，糾正脫水和稀釋鉀離子）", "高血鉀處理：Regular Insulin 0.25-0.5 U/kg IV + Dextrose + Calcium gluconate 10% 0.5-1.5 ml/kg IV", "腹腔引流管放置（持續引流尿液減少毒素吸收）", "留置導尿管引流"],
      chronic: ["手術修補泌尿道破裂部位", "術後持續監測尿量和腎功能", "抗生素預防感染（Ampicillin-Sulbactam或Enrofloxacin）", "長期追蹤腎功能和輸尿管通暢性"]
    },
    prognosis: "犬的死亡率約21%，貓約41%。早期診斷和積極穩定治療可顯著改善預後。膀胱破裂的手術修補成功率高，但腎臟或輸尿管損傷的預後較差。合併嚴重腹膜炎或多器官損傷者預後不良。",
    pearls: ["腹水肌酸酐/血清肌酸酐比 ≥2:1 是確診的金標準——急診中簡單快速且準確", "Uroabdomen是內科急症而非外科急症——先穩定電解質再開刀", "高血鉀是最致命的併發症，心電圖監測（尋找帳篷狀T波和心搏過緩）至關重要"],
    diagnosticAlgorithm: {
      title: "尿液腹 診斷流程",
      steps: [
        { step: 1, action: "臨床懷疑", details: "外傷後或術後出現少尿、腹脹、氮質血症", findings: ["腹部膨脹+波動感", "高BUN/肌酸酐+高血鉀"] },
        { step: 2, action: "腹水採樣分析", details: "腹腔穿刺取腹水，比較腹水與血清肌酸酐", findings: ["腹水/血清肌酸酐比 ≥2:1", "腹水/血清鉀比 >1.4:1"] },
        { step: 3, action: "穩定患者", details: "靜脈輸液、處理高血鉀、放置引流管", findings: ["電解質逐步改善", "血流動力學穩定"] },
        { step: 4, action: "影像定位+手術", details: "對比攝影定位破裂部位，穩定後手術修補", findings: ["確認破裂部位", "手術修補+術後監測"] }
      ]
    },
    monitoring: ["每2-4小時監測電解質（特別是鉀離子）", "精確尿量測量（目標 >1-2 ml/kg/hr）", "腹水量監測（引流管產出量）", "術後追蹤腎功能（BUN/Cr q24-48h）"],
    reference: "Stafford & Bartges (2013) JVECC 23:28-43; Today's Vet Practice - Uroabdomen Approach & Management; Merck Vet Manual - Uroabdomen"
  },

  "hypophosphatemia": {
    zh: "低磷血症",
    en: "Hypophosphatemia",
    definition: "血清磷濃度低於正常範圍（犬 <2.5 mg/dL，貓 <3.0 mg/dL）的代謝異常。嚴重低磷血症（<1.5 mg/dL）可導致溶血性貧血、神經症狀和心肌病變等危及生命的併發症。最常見於糖尿病酮酸中毒治療後、再餵食症候群和副甲狀腺功能亢進。",
    synonyms: ["低磷血症", "磷缺乏症", "Phosphorus Deficiency"],
    epidemiology: {
      species: "犬貓皆可",
      age: "任何年齡，重症住院患者更常見",
      sex: "無性別傾向",
      riskFactors: ["糖尿病酮酸中毒（DKA）胰島素治療後", "長期厭食後再餵食（再餵食症候群）", "原發性或繼發性副甲狀腺功能亢進", "庫欣氏症（腎臟磷排泄增加）", "貓肝脂肪沉積症", "長期制酸劑使用"]
    },
    clinicalPresentation: {
      history: ["正在治療DKA或長期厭食後開始進食", "漸進性虛弱和嗜睡", "食慾下降", "呼吸急促"],
      physicalExam: ["全身性肌肉無力", "黏膜蒼白（溶血性貧血）", "心音減弱或心律不整", "神經症狀：運動失調、癲癇、昏迷", "呼吸淺快"]
    },
    pathophysiology: "磷是ATP合成、2,3-DPG生成和細胞膜完整性的必需元素。低磷血症的機制包括：(1)跨細胞轉移——胰島素和葡萄糖促使磷進入細胞內（DKA治療後最常見）；(2)腎臟排泄增加——副甲狀腺素抑制近端腎小管磷重吸收；(3)腸道吸收減少——厭食、嘔吐或制酸劑結合磷。嚴重缺磷導致紅血球內ATP和2,3-DPG耗竭，紅血球變形能力下降而溶血；骨骼肌和膈肌無力；心肌收縮力下降；以及中樞神經系統能量代謝障礙。",
    diagnosis: {
      overview: "血清磷濃度測定結合臨床背景判斷嚴重程度和病因",
      differentials: ["糖尿病酮酸中毒治療併發症", "再餵食症候群", "副甲狀腺功能亢進", "庫欣氏症", "腎小管疾病（Fanconi症候群）"],
      initialDB: ["血液生化全套（磷、鈣、鎂、鉀、血糖）", "CBC（評估溶血——網織紅血球、紅血球型態）", "離子鈣測定", "尿液分析（評估腎臟磷排泄）"],
      advanced: ["副甲狀腺素（iPTH）測定", "維生素D代謝物測定", "分段式磷排泄率（FEP）計算", "血氣分析（評估酸鹼狀態）"]
    },
    treatment: {
      overview: "根據嚴重程度選擇口服或靜脈補充磷，同時治療原發病因",
      acute: ["嚴重低磷（<1.5 mg/dL）：Potassium phosphate 0.01-0.06 mmol/kg/hr IV CRI", "靜脈補充期間每6小時監測血磷、鈣和鉀", "伴隨溶血者需輸血支持"],
      chronic: ["輕至中度：口服磷酸鈉或磷酸鉀補充", "DKA患者：在胰島素治療開始時即預防性監測和補充", "矯正原發病因（如副甲狀腺手術、停用制酸劑）"]
    },
    prognosis: "輕至中度低磷血症經適當補充預後良好。嚴重低磷血症（<1.0 mg/dL）伴溶血性貧血和神經症狀者死亡率較高，需積極ICU管理。DKA相關低磷血症在適當監測下通常可預防和及時矯正。",
    pearls: ["DKA治療開始胰島素後4-24小時是低磷血症的高風險窗口——必須預防性監測", "嚴重低磷血症的三大紅旗：溶血性貧血+肌肉無力+神經症狀", "靜脈補磷時需同時監測鈣（磷鈣沉積風險）和鉀（使用磷酸鉀時）"],
    diagnosticAlgorithm: {
      title: "低磷血症 診斷流程",
      steps: [
        { step: 1, action: "確認低磷", details: "血清磷測定，犬 <2.5、貓 <3.0 mg/dL", findings: ["血磷偏低", "評估臨床嚴重程度"] },
        { step: 2, action: "評估臨床背景", details: "確認是否有DKA治療、長期厭食、副甲狀腺異常等背景", findings: ["DKA胰島素治療後", "再餵食症候群風險"] },
        { step: 3, action: "併發症評估", details: "CBC評估溶血、心電圖、神經學檢查", findings: ["溶血性貧血（嚴重時）", "肌肉無力/神經症狀"] },
        { step: 4, action: "補充與監測", details: "根據嚴重程度口服或靜脈補磷，定期監測", findings: ["磷濃度逐步回升", "併發症改善"] }
      ]
    },
    monitoring: ["血清磷濃度（急性補充期間q4-6h，穩定後q12-24h）", "CBC和網織紅血球計數（監測溶血）", "血清鈣和鉀（防止補磷併發症）", "臨床神經學狀態評估"],
    reference: "Merck Vet Manual - Hypophosphatemia in Animals; eClinpath - Phosphate; DVM (1989) JVIM 3:160-171"
  },

  "hyperosmolar-syndrome": {
    zh: "高滲透壓高血糖症候群",
    en: "Hyperosmolar Hyperglycemic State (HHS)",
    definition: "糖尿病的嚴重急性併發症，特徵為極度高血糖（>600 mg/dL）、血清滲透壓顯著升高（犬>325 mOsm/kg，貓>350 mOsm/kg）、嚴重脫水和中樞神經系統抑制，但無或僅有輕微酮症和代謝性酸中毒。死亡率高於糖尿病酮酸中毒（DKA）。",
    synonyms: ["高滲透壓症候群", "HHS", "高血糖高滲透壓狀態", "Diabetic Hyperosmolar Syndrome", "Nonketotic Hyperosmolar Syndrome"],
    epidemiology: {
      species: "犬貓皆可",
      age: "中老年（多為已知或新診斷糖尿病患者）",
      sex: "無明顯性別傾向",
      riskFactors: ["未控制或新診斷的糖尿病", "併發感染或其他疾病（觸發因子）", "飲水受限或慢性脫水", "使用糖皮質素或利尿劑", "腎功能不全"]
    },
    clinicalPresentation: {
      history: ["多飲多尿病史（數週至數月）", "漸進性精神沉鬱至昏迷", "食慾廢絕", "體重減輕", "嘔吐"],
      physicalExam: ["嚴重脫水（皮膚帳篷延遲、黏膜乾燥、CRT延長）", "精神極度沉鬱或昏迷", "心搏過速", "低血壓", "Kussmaul呼吸不明顯（與DKA不同）", "可能有瞳孔異常或神經缺損"]
    },
    pathophysiology: "HHS發生在殘存的胰島素分泌足以抑制脂肪分解和酮體生成，但不足以控制血糖的情況。持續高血糖超過腎臟葡萄糖閾值導致滲透性利尿，造成大量水分和電解質丟失。嚴重脫水使腎絲球濾過率下降，進一步減少葡萄糖排泄，形成高血糖-脫水-高血糖的惡性循環。血漿滲透壓升高導致腦細胞脫水和中樞神經系統功能障礙。與DKA不同的是，HHS患者有足夠的胰島素抑制酮體生成，因此缺乏酮酸中毒的典型表現。",
    diagnosis: {
      overview: "依據血糖>600 mg/dL + 血清滲透壓升高 + 無明顯酮症確診",
      differentials: ["糖尿病酮酸中毒（DKA）", "急性腎損傷", "中樞神經系統疾病", "中毒（乙二醇等）"],
      initialDB: ["血糖測定（>600 mg/dL / >33 mmol/L）", "血清電解質（Na+常升高、K+可能正常或偏低）", "血清滲透壓測定或計算（2×Na + Glucose/18 + BUN/2.8）", "靜脈血氣分析（pH通常>7.3）", "尿酮體測試（陰性或微量）"],
      advanced: ["全血液生化（評估腎功能和肝功能）", "CBC（白血球升高提示感染觸發因子）", "胸腹部影像學（尋找感染源）", "尿液培養"]
    },
    treatment: {
      overview: "積極補液為首要治療，延遲使用胰島素（4-6小時後），緩慢矯正血糖和滲透壓避免腦水腫",
      acute: ["靜脈輸液：0.9% NaCl初始bolus犬10-20 ml/kg、貓5-10 ml/kg", "電解質補充：重點補鉀（KCl依血鉀濃度調整）", "延遲胰島素：待補液4-6小時後開始Regular Insulin 0.05-0.1 U/kg/hr CRI", "血糖下降速度控制在每小時不超過50-75 mg/dL"],
      chronic: ["血糖穩定後轉為皮下長效胰島素", "尋找並治療觸發因子（感染最常見）", "飲食管理和體重控制", "定期血糖曲線和果糖胺監測"]
    },
    prognosis: "HHS死亡率明顯高於DKA，犬貓報告的死亡率可達30-50%以上。預後取決於就診時的脫水程度、神經症狀嚴重度和併發疾病。早期積極補液和緩慢矯正滲透壓是改善預後的關鍵。存活的動物在穩定後需終身胰島素治療和糖尿病管理。",
    pearls: ["HHS vs DKA的關鍵鑑別：HHS血糖更高（>600 vs >250）、無明顯酮症、滲透壓更高、神經症狀更突出", "治療的首要步驟是補液而非胰島素——過早給胰島素會造成滲透壓急劇下降引發腦水腫", "血糖和鈉濃度必須緩慢矯正——每小時血糖下降不超過50-75 mg/dL"],
    diagnosticAlgorithm: {
      title: "高滲透壓高血糖症候群 診斷流程",
      steps: [
        { step: 1, action: "血糖與酮體", details: "測定血糖和尿酮體", findings: ["血糖 >600 mg/dL", "酮體陰性或微量陽性"] },
        { step: 2, action: "滲透壓評估", details: "測定或計算血清滲透壓", findings: ["犬>325或貓>350 mOsm/kg", "嚴重脫水"] },
        { step: 3, action: "電解質和酸鹼", details: "血氣分析和全面電解質評估", findings: ["pH >7.3（無明顯酸中毒）", "Na+常偏高、K+需密切監測"] },
        { step: 4, action: "補液穩定+尋找觸發因子", details: "積極補液，同時尋找併發感染等觸發因子", findings: ["感染是最常見的觸發因子", "穩定後開始胰島素治療"] }
      ]
    },
    monitoring: ["血糖（q1-2h直至穩定）", "血清電解質（q2-4h，特別是鈉和鉀）", "血清滲透壓（q4-6h，確保緩慢下降）", "神經學狀態評估（q2-4h，警惕腦水腫）"],
    reference: "VETEMCRIT - HHS Protocol; Today's Vet Nurse - Hyperglycemic Hyperosmolar Syndrome; PubMed (2023) 33:e12859"
  },

  "insulinoma-cat": {
    zh: "貓胰島素瘤",
    en: "Feline Insulinoma",
    definition: "貓胰臟β細胞的功能性腫瘤，自主性分泌過量胰島素導致反覆性低血糖。在貓中極為罕見（遠較犬少見），但臨床表現可能嚴重且危及生命。多數為惡性，確診時約50%已有轉移。",
    synonyms: ["胰島素瘤（貓）", "β細胞腫瘤", "Insulin-Secreting Tumor", "Islet Cell Tumor"],
    epidemiology: {
      species: "貓（極罕見，犬較常見）",
      age: "中老年（平均12-15歲）",
      sex: "無明顯性別傾向",
      riskFactors: ["老年貓", "無已知品種傾向"]
    },
    clinicalPresentation: {
      history: ["間歇性虛弱或癱瘓", "發作性癲癇或肌肉抽搐", "精神沉鬱和嗜睡", "後肢無力", "進食後或運動後症狀改善", "症狀呈發作性、反覆出現"],
      physicalExam: ["神經學檢查可能正常（發作間期）", "發作時：運動失調、震顫、癲癇", "可能觸及腹部腫塊（少見）", "一般體態良好或偏胖"]
    },
    pathophysiology: "胰島素瘤源自胰臟蘭氏小島β細胞的腫瘤性增生，不受正常血糖反饋機制調控地持續分泌胰島素。過量胰島素促使葡萄糖進入細胞並抑制肝醣分解和糖質新生，導致血糖降至危險水平（<60 mg/dL）。低血糖觸發兒茶酚胺釋放（代償性升糖反應），引起震顫和心搏過速。持續性低血糖超過腦部代償能力時，導致神經糖缺乏而出現癲癇、昏迷甚至死亡。貓的胰島素瘤約60-70%為惡性，常見轉移至區域淋巴結和肝臟。",
    diagnosis: {
      overview: "低血糖伴隨不適當升高的血清胰島素濃度為診斷基礎",
      differentials: ["肝衰竭相關低血糖", "敗血症", "副腫瘤症候群（其他腫瘤分泌類胰島素因子）", "腎上腺功能不全", "糖原貯積症"],
      initialDB: ["血糖測定（低血糖時採血）", "血清胰島素濃度（低血糖時同步測定——不適當正常或升高即為異常）", "CBC/血液生化全套", "果糖胺（評估慢性低血糖程度）"],
      advanced: ["腹部超音波（胰臟腫塊、肝臟轉移）", "腹部CT（提高小腫瘤偵測率）", "對比增強超音波", "術中探查和組織病理確診"]
    },
    treatment: {
      overview: "手術切除為首選，醫療管理用於無法手術或術後復發的病例",
      acute: ["低血糖急救：50% Dextrose 0.5-1 ml/kg IV稀釋後緩慢推注", "持續靜脈輸液含2.5-5% Dextrose", "禁忌大量推注高濃度葡萄糖（會刺激更多胰島素分泌）"],
      chronic: ["手術切除腫瘤（部分胰臟切除）", "醫療管理：Diazoxide 5-30 mg/kg PO q12h（抑制胰島素釋放）", "頻繁少量餵食（高蛋白低碳水化合物飲食）", "Prednisolone 1-2 mg/kg PO q12h（促進糖質新生）"]
    },
    prognosis: "貓胰島素瘤經手術治療的1年存活率約75%，2年約51%，3年約10%。未手術僅用醫療管理的中位存活時間較短。轉移性疾病預後較差但部分貓即使有轉移仍可透過Diazoxide和飲食管理維持數月良好生活品質。",
    pearls: ["低血糖時的胰島素濃度測定是關鍵——即使在正常範圍內，低血糖時胰島素不應該正常，因此'不適當正常'等於異常", "禁忌快速推注高濃度葡萄糖（50%）——會刺激腫瘤釋放更多胰島素造成反彈性低血糖", "貓胰島素瘤極罕見，但不能因為'貓不常見'就忽略——老年貓反覆低血糖應列入鑑別"],
    diagnosticAlgorithm: {
      title: "貓胰島素瘤 診斷流程",
      steps: [
        { step: 1, action: "確認低血糖", details: "測定血糖<60 mg/dL且排除人為因素", findings: ["反覆性低血糖", "進食後暫時改善"] },
        { step: 2, action: "同步胰島素測定", details: "低血糖發作時同步測定血清胰島素", findings: ["胰島素不適當正常或升高", "胰島素/血糖比值異常"] },
        { step: 3, action: "影像學定位", details: "腹部超音波和/或CT掃描胰臟和肝臟", findings: ["胰臟腫塊", "肝臟或淋巴結轉移灶"] },
        { step: 4, action: "手術探查+病理", details: "手術探查、腫瘤切除和組織病理確診", findings: ["β細胞腫瘤確認", "分期和轉移評估"] }
      ]
    },
    monitoring: ["血糖（居家監測q12h或出現症狀時）", "血清果糖胺（q1-3月評估血糖控制）", "腹部超音波（q3-6月監測復發或轉移）", "臨床症狀記錄（虛弱、癲癇發作頻率和嚴重度）"],
    reference: "Veytsman et al (2023) Vet Surg 52:442-450; ACVS - Insulinoma; Merck Vet Manual - Islet Cell Tumors"
  },

  "aldosteronoma": {
    zh: "醛固酮瘤（原發性高醛固酮症）",
    en: "Primary Hyperaldosteronism (Aldosteronoma)",
    definition: "腎上腺皮質腫瘤自主性分泌過量醛固酮，導致低血鉀和全身性高血壓的內分泌疾病。是貓最常見的腎上腺皮質疾病，多為單側腎上腺腺瘤或腺癌。因初始症狀不特異，常被延遲診斷。",
    synonyms: ["原發性高醛固酮症", "Conn氏症候群", "Primary Hyperaldosteronism", "Conn Syndrome"],
    epidemiology: {
      species: "貓為主（犬罕見）",
      age: "中老年貓（平均13歲）",
      sex: "無明顯性別傾向",
      riskFactors: ["老年貓", "腎上腺腫瘤家族史不明"]
    },
    clinicalPresentation: {
      history: ["漸進性後肢無力或不願跳躍", "頸部腹屈（cervical ventroflexion）", "突發失明", "精神沉鬱和嗜睡", "多飲多尿"],
      physicalExam: ["低鉀性肌病：後肢無力、蹠行姿勢、頸部腹屈", "全身性高血壓（收縮壓 >160 mmHg）", "視網膜剝離或眼底出血（高血壓性視網膜病變）", "腹部觸診偶可觸及腎上腺腫塊"]
    },
    pathophysiology: "腎上腺皮質球狀帶腫瘤（腺瘤或腺癌）不受腎素-血管張力素系統調控地自主分泌醛固酮。過量醛固酮作用於遠端腎小管和集合管，促進鈉重吸收和鉀排泄，導致低血鉀症和代謝性鹼中毒。鈉滯留引起血管容積擴張和全身性高血壓。嚴重低血鉀（<3.0 mEq/L）導致骨骼肌細胞膜過度極化而無法正常興奮，表現為瀰漫性肌肉無力。持續性高血壓損傷靶器官，特別是眼底（視網膜剝離）和腎臟（腎硬化）。",
    diagnosis: {
      overview: "低血鉀+高血壓+腎上腺腫塊的三聯徵高度提示本病",
      differentials: ["腎臟疾病相關低鉀", "甲狀腺功能亢進", "嗜鉻細胞瘤", "庫欣氏症", "其他低血鉀原因（飲食、嘔吐、利尿劑）"],
      initialDB: ["血液生化（血鉀 <3.5 mEq/L、可能伴肌酸酐升高）", "血壓測量（收縮壓 >160 mmHg）", "眼底檢查（視網膜病變）", "電解質全套"],
      advanced: ["血清醛固酮濃度（顯著升高）", "血漿腎素活性（受抑制，醛固酮/腎素比升高）", "腹部超音波或CT（腎上腺腫塊，多為單側）", "腎上腺CT三期增強掃描"]
    },
    treatment: {
      overview: "手術切除受影響的腎上腺為治療首選，醫療管理用於手術前穩定或無法手術的病例",
      acute: ["補鉀：KCl添加至靜脈輸液中（不超過0.5 mEq/kg/hr）", "降壓：Amlodipine 0.125-0.25 mg/kg PO q24h", "醛固酮拮抗劑：Spironolactone 1-2 mg/kg PO q12h"],
      chronic: ["單側腎上腺切除術（adrenalectomy）", "術後大多數貓不需長期用藥", "內科管理：Spironolactone + Amlodipine + 口服補鉀", "定期監測血壓和電解質"]
    },
    prognosis: "手術切除腺瘤的預後良好，多數貓術後低血鉀和高血壓可完全緩解且不需長期用藥。腺癌的預後較差但術後仍可能獲得數月至數年的良好生活品質。未治療的持續性高血壓將導致不可逆的靶器官損傷（失明、腎衰竭）。內科管理可有效控制但需終身用藥。",
    pearls: ["老年貓出現低血鉀+高血壓+肌肉無力的三聯徵——首先考慮原發性高醛固酮症", "突發失明（視網膜剝離）可能是本病的首發症狀，不要忽略測血壓", "本病在貓中被嚴重低估——任何不明原因低血鉀的老年貓都應測醛固酮濃度"],
    diagnosticAlgorithm: {
      title: "原發性高醛固酮症 診斷流程",
      steps: [
        { step: 1, action: "臨床懷疑", details: "老年貓出現低血鉀、高血壓或肌肉無力", findings: ["血鉀 <3.5 mEq/L", "收縮壓 >160 mmHg"] },
        { step: 2, action: "醛固酮測定", details: "測定血清醛固酮濃度和腎素活性", findings: ["醛固酮顯著升高", "腎素活性受抑制"] },
        { step: 3, action: "影像定位", details: "腹部超音波或CT掃描腎上腺", findings: ["單側腎上腺腫塊", "評估對側腎上腺和轉移"] },
        { step: 4, action: "術前穩定+手術", details: "補鉀降壓穩定後行腎上腺切除術", findings: ["術後低血鉀和高血壓緩解", "病理確認腺瘤或腺癌"] }
      ]
    },
    monitoring: ["血清鉀濃度（術前q24-48h，術後q1-3月）", "血壓測量（q1-3月）", "眼底檢查（q3-6月監測視網膜病變）", "腹部超音波（q6月監測復發，腺癌患者）"],
    reference: "AAHA (2023) Selected Endocrinopathies Guidelines - Feline Hyperaldosteronism; Merck Vet Manual; Javadi et al (2005) JVIM 19:834-839"
  },

  "acromegaly": {
    zh: "肢端肥大症",
    en: "Acromegaly (Hypersomatotropism)",
    definition: "因垂體腺瘤過度分泌生長激素（GH）所致的慢性內分泌疾病，主要影響貓。過量GH導致胰島素阻抗性糖尿病、軟組織和骨骼過度生長、心肌肥大和腎臟肥大。是貓難以控制的糖尿病的重要鑑別診斷。",
    synonyms: ["肢端肥大症", "高生長激素症", "Hypersomatotropism", "GH-Secreting Pituitary Adenoma"],
    epidemiology: {
      species: "貓為主（犬極罕見，犬的肢端肥大症多與孕酮相關）",
      age: "中老年貓（平均10-11歲）",
      sex: "公貓略多",
      riskFactors: ["公貓", "已知糖尿病且對胰島素反應差", "垂體腺瘤"]
    },
    clinicalPresentation: {
      history: ["糖尿病症狀：多飲多尿、多食", "胰島素需求持續增加（>6-8 U/次仍控制不佳）", "體重增加（非肥胖，為軟組織增生）", "頭部或四肢變大", "呼吸困難或打鼾加重"],
      physicalExam: ["體型壯碩、體重增加", "下顎前突（prognathia inferior）", "頭部寬大、爪子增厚", "心雜音或心音增強（心肌肥大）", "腎臟觸診增大", "關節僵硬"]
    },
    pathophysiology: "垂體前葉的GH分泌型腺瘤不受下視丘抑制因子調控地持續分泌過量生長激素。GH直接作用和通過刺激肝臟產生類胰島素生長因子-1（IGF-1）間接作用，導致多系統病變。GH的抗胰島素效應引起嚴重的胰島素阻抗性——高劑量胰島素仍無法有效降低血糖。持續的GH和IGF-1刺激導致軟組織增生（下顎、爪墊、內臟增大）、骨骼改變和心肌向心性肥大。腎臟增大和腎絲球高濾過最終可發展為慢性腎病。垂體腫瘤本身可壓迫視交叉和下視丘。",
    diagnosis: {
      overview: "糖尿病貓胰島素需求異常高時應懷疑本病，IGF-1和垂體影像為確診依據",
      differentials: ["單純糖尿病", "腎上腺功能亢進（庫欣氏症）", "甲狀腺功能亢進", "胰島素抗體形成"],
      initialDB: ["血清IGF-1濃度（>1000 ng/mL高度提示）", "血液生化（高血糖、可能有氮質血症）", "果糖胺（持續升高）", "尿液分析（糖尿）"],
      advanced: ["垂體MRI或CT（確認腺瘤大小和位置）", "心臟超音波（評估心肌肥大程度）", "腎臟超音波（評估腎臟大小）", "GH濃度測定（需專門實驗室）"]
    },
    treatment: {
      overview: "治療目標為控制GH過量分泌和管理糖尿病及其他併發症",
      acute: ["高劑量胰島素控制血糖（可能需10-20 U/次）", "補液和電解質矯正（如有DKA）"],
      chronic: ["放射治療：垂體腫瘤照射（最常用，成功率高但效果緩慢需>3年）", "蝶鞍經路垂體切除術（Transsphenoidal hypophysectomy，可達完全緩解但需專業神經外科）", "藥物治療：Pasireotide（體抑素類似物，費用高）", "持續高劑量胰島素管理糖尿病"]
    },
    prognosis: "長期預後不佳，多數貓最終死於充血性心衰竭、慢性腎衰竭或垂體腫瘤擴大。但透過積極治療（特別是放射治療或手術），許多貓可維持1-3年的良好生活品質。部分貓在治療後GH降低足以使糖尿病緩解。早期診斷和治療可顯著改善預後。",
    pearls: ["糖尿病貓每次胰島素需求>6 U/次仍控制不佳——必須排除肢端肥大症", "體重增加但非肥胖的糖尿病貓是典型線索——GH促進瘦體重增加", "IGF-1 >1000 ng/mL加上垂體CT/MRI可見腺瘤即可確診"],
    diagnosticAlgorithm: {
      title: "肢端肥大症 診斷流程",
      steps: [
        { step: 1, action: "臨床懷疑", details: "糖尿病貓胰島素需求持續升高，體態壯碩", findings: ["胰島素需求 >6 U/次", "體重增加、下顎增大"] },
        { step: 2, action: "IGF-1篩檢", details: "測定血清IGF-1濃度", findings: ["IGF-1 >1000 ng/mL高度提示", "排除其他胰島素阻抗原因"] },
        { step: 3, action: "垂體影像", details: "CT或MRI掃描垂體區域", findings: ["垂體腺瘤", "評估腫瘤大小和周圍結構"] },
        { step: 4, action: "併發症評估+治療", details: "心臟和腎臟功能評估，選擇治療方案", findings: ["心肌肥大程度", "腎臟大小和功能"] }
      ]
    },
    monitoring: ["血糖和果糖胺（q2-4週調整胰島素）", "血清IGF-1（q3-6月評估治療反應）", "心臟超音波（q6-12月監測心肌肥大）", "腎功能（BUN/Cr q3-6月）"],
    reference: "Merck Vet Manual - Acromegaly in Cats; PMC (2024) Animals 14:310; MSPCA-Angell - Feline Hypersomatotropism"
  },

  "lens-luxation": {
    zh: "水晶體脫位",
    en: "Lens Luxation",
    definition: "眼球水晶體因懸韌帶（zonules）斷裂而從正常位置移位的眼科急症。依移位方向分為前脫位（進入前房）和後脫位（落入玻璃體腔）。前脫位為眼科急症，可在數小時內引發急性青光眼而導致不可逆失明。",
    synonyms: ["水晶體脫位", "晶狀體脫位", "Lens Displacement", "Ectopia Lentis"],
    epidemiology: {
      species: "犬貓皆可",
      age: "犬原發性：3-8歲（品種相關）；貓繼發性：任何年齡",
      sex: "無性別傾向",
      riskFactors: ["犬原發性：梗犬類（Jack Russell、Fox Terrier、Shar-Pei）——ADAMTS17基因突變", "貓：慢性前葡萄膜炎（最常見原因）", "慢性青光眼（眼球腫大拉伸懸韌帶）", "外傷", "老年性懸韌帶退化"]
    },
    clinicalPresentation: {
      history: ["急性疼痛和畏光（前脫位）", "突發眼睛外觀改變", "流淚增加", "眨眼頻繁或閉眼", "可能雙眼先後發病"],
      physicalExam: ["前脫位：前房內可見水晶體、瞳孔不規則、角膜水腫", "後脫位：前房加深、虹膜震顫（iridodonesis）", "眼壓升高（前脫位常>40 mmHg）", "眼睛充血和疼痛", "視力喪失"]
    },
    pathophysiology: "水晶體由環形懸韌帶（zonular fibers）懸掛在睫狀體上。原發性水晶體脫位（犬）因ADAMTS17基因突變導致懸韌帶結構性缺陷和進行性降解，通常先出現半脫位再完全脫位。繼發性脫位（貓最常見）因慢性前葡萄膜炎的發炎介質破壞懸韌帶。前脫位時水晶體進入前房，阻塞虹膜-角膜角的房水排出通路，導致急性眼壓飆升（青光眼）。高眼壓壓迫視網膜和視神經血管，數小時內即可造成不可逆的視網膜和視神經損傷。後脫位通常較溫和，但仍有玻璃體脫出和繼發青光眼的風險。",
    diagnosis: {
      overview: "裂隙燈檢查和眼壓測量為基本診斷工具",
      differentials: ["青光眼（原發性）", "前葡萄膜炎", "角膜水腫其他原因", "眼內腫瘤"],
      initialDB: ["裂隙燈檢查（直接可視化水晶體位置）", "眼壓測量（Tonometry，前脫位常升高）", "直接和間接眼底鏡檢查", "瞳孔對光反射評估"],
      advanced: ["眼部超音波（確認水晶體位置和玻璃體狀態）", "前房角鏡檢查（gonioscopy）", "ADAMTS17基因檢測（品種犬）", "全身檢查排除葡萄膜炎病因"]
    },
    treatment: {
      overview: "前脫位為急症需緊急處理；後脫位可保守管理或擇期手術",
      acute: ["前脫位急救：降眼壓——Mannitol 1-2 g/kg IV + Dorzolamide/Timolol眼藥水", "縮瞳劑（後脫位）：Demecarium bromide 0.25% q12h防止前移", "止痛：全身性NSAIDs或Opioids"],
      chronic: ["前脫位手術：水晶體摘除術（Intracapsular Lens Extraction, ICLE）", "無法保眼時：眼球摘除或義眼置入", "後脫位保守：縮瞳劑+定期監測眼壓", "梗犬品種：預防性監測對側眼"]
    },
    prognosis: "前脫位若在24-48小時內手術，保留視力的機率約40-50%；延遲處理預後差。後脫位保守管理預後較好但需長期監測。合併青光眼且視力已喪失者預後不良，多需眼球摘除。原發性雙眼脫位犬對側眼日後脫位機率極高。",
    pearls: ["前脫位是眼科急症——每延遲1小時，視力保留機率下降；目標24小時內手術", "梗犬品種（JRT、Fox Terrier）有ADAMTS17基因突變，一眼脫位後對側眼需密切監測", "貓的水晶體脫位多為慢性葡萄膜炎繼發——治療脫位的同時要找潛在病因（FIP、淋巴瘤、弓蟲症）"],
    diagnosticAlgorithm: {
      title: "水晶體脫位 診斷流程",
      steps: [
        { step: 1, action: "裂隙燈檢查", details: "確認水晶體位置（前脫位/後脫位/半脫位）", findings: ["前房內水晶體（前脫位）", "前房加深+虹膜震顫（後脫位）"] },
        { step: 2, action: "眼壓測量", details: "立即測量雙眼眼壓", findings: ["前脫位常>40 mmHg", "後脫位眼壓可能正常"] },
        { step: 3, action: "視力評估", details: "評估威脅反射、瞳孔對光反射和障礙物迴避", findings: ["視力狀態決定治療急迫性", "PLR消失提示預後不良"] },
        { step: 4, action: "病因鑑別+處理", details: "犬評估品種遺傳史；貓排查葡萄膜炎病因", findings: ["犬：ADAMTS17基因相關", "貓：慢性葡萄膜炎（FIP、淋巴瘤等）"] }
      ]
    },
    monitoring: ["眼壓（術後daily×1週，之後weekly×1月，之後monthly）", "對側眼定期裂隙燈檢查（原發性者q3-6月）", "視力評估（威脅反射、障礙物迴避）", "眼底檢查（監測視網膜剝離和視神經損傷）"],
    reference: "Merck Vet Manual - Dislocation of the Lens; Cornell Canine Health Center - Primary Lens Luxation; VCA Hospitals - Lens Luxation in Dogs"
  },

  "nuclear-sclerosis": {
    zh: "水晶體核硬化症",
    en: "Nuclear Sclerosis (Lenticular Sclerosis)",
    definition: "犬貓的正常老化性水晶體變化，因水晶體纖維終生持續增生壓迫核心導致核部緻密硬化，外觀呈藍灰色霧狀。不影響視力（除極嚴重者影響近距深度知覺），無需治療。常被飼主誤認為白內障。",
    synonyms: ["核硬化", "水晶體硬化", "Lenticular Sclerosis", "Lens Nuclear Sclerosis"],
    epidemiology: {
      species: "犬貓皆有",
      age: "犬>7歲、貓>8-10歲開始出現，隨年齡逐漸加重",
      sex: "無性別傾向",
      riskFactors: ["年齡（不可避免的老化變化）", "日曬暴露可能加速硬化"]
    },
    clinicalPresentation: {
      history: ["飼主注意到眼睛變「混濁」或「灰白色」", "視力通常無明顯影響", "雙眼對稱出現", "漸進性變化"],
      physicalExam: ["雙眼對稱性藍灰色核部混濁", "散瞳後可見混濁僅限核部，皮質和周邊仍透明", "眼底反射（tapetal reflection）正常可見", "視力正常（威脅反射陽性、障礙物迴避正常）", "眼壓正常"]
    },
    pathophysiology: "水晶體纖維由水晶體赤道部的上皮細胞終生持續產生，新纖維在外層累加，將舊纖維向核心壓迫。隨年齡增長，核部纖維因持續壓縮而失去水分、蛋白質密度增加並氧化交聯，導致折射率改變而呈現特徵性的藍灰色外觀。與白內障不同的是，核硬化僅改變水晶體的光學密度和硬度，但不會造成蛋白質沉澱或不透明化，因此光線仍可正常通過。這是完全正常的生理性老化過程，所有老年犬貓都會發生，只是程度不同。",
    diagnosis: {
      overview: "裂隙燈檢查即可區分核硬化與白內障",
      differentials: ["白內障（最重要的鑑別）", "水晶體前囊混濁", "玻璃體混濁"],
      initialDB: ["裂隙燈檢查（光學切面可見核部密度增加但皮質清澈）", "直接眼底鏡——核硬化時眼底反射正常可見（白內障則不行）", "威脅反射和障礙物迴避測試"],
      advanced: ["散瞳後詳細水晶體檢查（排除早期皮質白內障）", "眼部超音波（排除後段病變）"]
    },
    treatment: {
      overview: "核硬化為正常老化變化，無需治療",
      acute: ["不需要任何急性治療"],
      chronic: ["無需藥物或手術治療", "定期眼科追蹤（排除併發白內障）", "向飼主解釋此為正常老化非疾病"]
    },
    prognosis: "核硬化為良性老化變化，終身預後極好。不會導致失明，不會進展為白內障。唯一需注意的是部分老年犬可能同時發展真正的白內障，需定期鑑別。",
    pearls: ["核硬化 vs 白內障最快速的鑑別法：用直接眼底鏡——核硬化可看到眼底反射（tapetal reflection），白內障看不到", "所有>7歲的犬和>10歲的貓都有不同程度的核硬化——向飼主解釋這是正常老化，不是白內障", "散瞳後在裂隙燈下可清楚看到核硬化僅限核部，皮質仍完全透明"],
    diagnosticAlgorithm: {
      title: "水晶體核硬化症 診斷流程",
      steps: [
        { step: 1, action: "飼主主訴評估", details: "飼主注意到老年犬貓眼睛變灰白色", findings: ["雙眼對稱性藍灰色改變", "視力行為無明顯變化"] },
        { step: 2, action: "眼底反射測試", details: "用直接眼底鏡觀察眼底反射", findings: ["核硬化：眼底反射正常可見", "白內障：眼底反射減弱或消失"] },
        { step: 3, action: "裂隙燈檢查", details: "散瞳後裂隙燈檢查水晶體各層", findings: ["核部密度增加呈藍灰色", "皮質清澈透明"] },
        { step: 4, action: "確認診斷+衛教", details: "排除白內障後向飼主說明正常老化", findings: ["確認為核硬化非白內障", "不需治療，定期追蹤"] }
      ]
    },
    monitoring: ["年度眼科檢查（排除併發白內障）", "視力行為觀察（飼主居家評估）", "眼壓測量（老年犬貓常規篩檢）", "眼底檢查（排除其他老年性眼病）"],
    reference: "ACVO - Cataracts vs Nuclear Sclerosis; Merck Vet Manual - The Lens in Animals; dvm360 - Cataracts: How to Uncover the Imposter"
  },

  "keratitis": {
    zh: "角膜炎",
    en: "Keratitis",
    definition: "角膜的發炎性疾病，依是否有上皮缺損分為潰瘍性角膜炎和非潰瘍性角膜炎。犬最常見的原因為乾眼症（KCS）和外傷；貓則以皰疹病毒感染為首要原因。未及時治療可導致角膜穿孔和永久性視力喪失。",
    synonyms: ["角膜炎", "角膜發炎", "Corneal Inflammation", "Corneal Keratitis"],
    epidemiology: {
      species: "犬貓皆常見",
      age: "任何年齡",
      sex: "無性別傾向",
      riskFactors: ["犬：乾眼症（KCS）、短頭犬種（眼球突出、瞬目不完全）、外傷", "貓：皰疹病毒第一型（FHV-1，超過90%貓攜帶）", "眼瞼異常（內翻、外翻、睫毛異位）", "角膜暴露（面神經麻痺、眼球突出）"]
    },
    clinicalPresentation: {
      history: ["眨眼頻繁或閉眼（疼痛）", "流淚或黏液膿性分泌物", "眼睛發紅", "角膜外觀混濁或有白斑", "光敏感"],
      physicalExam: ["角膜混濁（水腫或瘢痕）", "角膜新生血管（表淺或深層）", "螢光素染色陽性（潰瘍性）或陰性（非潰瘍性）", "結膜充血", "眼分泌物（漿液性至膿性）", "Schirmer淚液試驗可能偏低（KCS相關）"]
    },
    pathophysiology: "角膜炎的發病機制因病因而異。潰瘍性角膜炎：角膜上皮和基質的物理性或感染性破壞，暴露的基質膠原吸引嗜中性球和基質金屬蛋白酶，可導致溶解性角膜潰瘍（melting ulcer）快速穿孔。非潰瘍性角膜炎：多為免疫介導機制——免疫細胞浸潤角膜基質引起慢性發炎、色素沉著和新生血管。犬KCS相關角膜炎因淚液不足使角膜失去營養、潤滑和免疫防禦。貓FHV-1感染直接破壞角膜上皮細胞並誘發免疫性基質角膜炎。",
    diagnosis: {
      overview: "螢光素染色區分潰瘍性與非潰瘍性，Schirmer試驗評估淚液量",
      differentials: ["乾眼症（KCS）", "角膜潰瘍（外傷、感染）", "角膜異物", "青光眼", "前葡萄膜炎", "免疫性角膜炎（色素性、結節性）"],
      initialDB: ["螢光素染色（Fluorescein staining）", "Schirmer淚液試驗（STT，正常犬 >15 mm/min）", "裂隙燈檢查（評估角膜各層）", "眼壓測量（排除青光眼）"],
      advanced: ["角膜細胞學刮片（感染性角膜炎）", "細菌/真菌培養和藥敏試驗", "FHV-1 PCR（貓）", "角膜共聚焦顯微鏡"]
    },
    treatment: {
      overview: "治療取決於類型：潰瘍性以抗菌和促癒合為主，非潰瘍性以免疫調節為主",
      acute: ["潰瘍性：廣譜抗生素眼藥水（Tobramycin或Ofloxacin q4-6h）", "止痛：Atropine 1% 眼藥水（睫狀體鬆弛、止痛）", "溶解性潰瘍：自體血清眼藥水（抑制MMP）+ 緊急角膜移植", "貓FHV-1：Famciclovir 40-90 mg/kg PO q8-12h"],
      chronic: ["KCS：Cyclosporine 0.2% 或 Tacrolimus 0.02% 眼藥水q12h（終身）", "免疫性角膜炎：Cyclosporine + 短期類固醇（確認無潰瘍後）", "人工淚液補充（KCS）", "矯正眼瞼異常（手術）"]
    },
    prognosis: "表淺性潰瘍在適當治療下通常5-7天癒合，預後良好。深層或溶解性潰瘍需積極治療，可能導致角膜穿孔和眼球喪失。KCS需終身管理但控制良好時視力可維持。貓FHV-1角膜炎容易復發（壓力誘發），但多數發作可控制。免疫性角膜炎需長期治療但預後合理。",
    pearls: ["角膜有螢光素著色=潰瘍——禁用類固醇眼藥水（會抑制癒合並促進感染和穿孔）", "貓的角膜炎——假設是疱疹病毒（FHV-1）直到證明不是，因為>90%的貓攜帶此病毒", "Schirmer試驗<15 mm/min（犬）= KCS——這是犬角膜炎最常見的潛在原因"],
    diagnosticAlgorithm: {
      title: "角膜炎 診斷流程",
      steps: [
        { step: 1, action: "螢光素染色", details: "評估角膜上皮完整性，區分潰瘍性vs非潰瘍性", findings: ["染色陽性=潰瘍性", "染色陰性=非潰瘍性"] },
        { step: 2, action: "淚液試驗", details: "Schirmer試驗測量淚液產量", findings: ["<15 mm/min=KCS", "正常>15 mm/min"] },
        { step: 3, action: "裂隙燈+眼壓", details: "評估角膜深度、新生血管類型，測量眼壓", findings: ["新生血管型態提示急性vs慢性", "眼壓排除青光眼"] },
        { step: 4, action: "病因鑑別", details: "根據種別、染色結果和STT確定治療方案", findings: ["犬KCS→免疫調節治療", "貓FHV-1→抗病毒治療"] }
      ]
    },
    monitoring: ["螢光素複染（潰瘍：q3-5天直至癒合）", "Schirmer試驗（KCS：q1-3月評估治療反應）", "裂隙燈追蹤（角膜透明度和新生血管變化）", "眼壓定期測量（特別是前葡萄膜炎繼發者）"],
    reference: "Merck Vet Manual - The Cornea in Animals; Today's Vet Nurse - Nonulcerative Keratitis; dvm360 - Canine Keratitis"
  }
};

// batch-A8-data.js — 毒物/皮膚 10種疾病完整結構化資料
module.exports = {
  "zinc-toxicosis": {
    zh: "鋅中毒",
    en: "Zinc Toxicosis",
    definition: "犬貓因攝食含鋅物質（1982年後的美國硬幣含97.5%鋅、鋅螺帽螺栓、氧化鋅藥膏等）導致的金屬中毒，主要引起血管內溶血性貧血、胃腸道損傷和多器官衰竭。攝入1-2枚硬幣即可導致中毒，每枚硬幣含約2440mg元素鋅。",
    synonyms: ["鋅毒性", "硬幣中毒", "Zinc Poisoning", "Penny Toxicosis"],
    epidemiology: {
      species: "犬較常見（幼犬尤其）",
      age: "幼犬最常見（異食傾向）",
      sex: "無明顯性別傾向",
      riskFactors: ["幼犬異食行為", "家中可接觸到硬幣", "鋅含量高的螺帽螺栓", "氧化鋅藥膏攝入"]
    },
    clinicalPresentation: {
      history: ["嘔吐（可能為首發症狀）", "腹瀉", "嗜睡和食慾下降", "尿液顏色變深（血紅素尿）", "可能有攝食硬幣或金屬物的目擊史"],
      physicalExam: ["黃疸", "黏膜蒼白", "心搏過速", "血紅素尿（深紅色尿液）", "腹部觸診可能觸及異物", "可聽到心臟雜音（貧血相關）"]
    },
    pathophysiology: "攝入的鋅在胃酸環境中溶解釋放鋅離子。鋅離子直接損傷胃腸道黏膜引起嘔吐和腹瀉（第一階段）。吸收進入血液後，鋅離子與紅血球膜結合，導致氧化損傷、Heinz body形成和球狀紅血球產生，引發血管內溶血（第二階段，可在攝入後數小時至數天發生）。大量溶血釋放的血紅蛋白導致血紅素尿，並可損傷腎小管引起急性腎衰竭。鋅還直接損傷肝臟和胰臟組織。嚴重病例可進展為DIC和多器官衰竭。",
    diagnosis: {
      overview: "腹部放射線發現金屬異物+溶血性貧血為高度提示",
      differentials: ["免疫介導性溶血性貧血", "洋蔥中毒", "銅中毒", "磷化鋅中毒", "Heinz body貧血"],
      initialDB: ["腹部放射線（金屬異物）", "CBC（再生性貧血、球狀紅血球、Heinz bodies）", "生化（肝指數、腎指數、膽紅素升高）", "尿液分析（血紅素尿）"],
      advanced: ["血清鋅濃度", "凝血功能（DIC篩檢）", "腹部超音波", "網織紅血球計數"]
    },
    treatment: {
      overview: "立即移除鋅來源+支持性治療+輸血（嚴重貧血）",
      acute: ["內視鏡或手術移除金屬異物（最優先）", "靜脈輸液（LRS 90ml/kg/day）糾正脫水和酸血症", "PCV<10%或嚴重臨床症狀時輸血", "胃腸道保護劑（sucralfate 0.5-1g PO q8h）"],
      chronic: ["持續監測PCV和網織紅血球計數", "移除異物後鋅濃度通常迅速下降", "螯合治療爭議大，通常不推薦", "腎臟和肝臟功能支持"]
    },
    prognosis: "及時移除鋅來源並給予支持治療後預後良好。延遲診斷或治療可導致嚴重溶血性貧血、急性腎衰竭和DIC，預後變差。攝入量大或就診延遲超過48小時者死亡率顯著增加。移除異物後，血鋅濃度通常在24-48小時內明顯下降。",
    pearls: ["1982年後美國硬幣含97.5%鋅，幼犬吞食硬幣是最常見的鋅中毒原因", "腹部X光見到金屬異物+溶血性貧血=高度懷疑鋅中毒", "移除鋅來源是最重要的治療，螯合劑在鋅中毒中效果有限"],
    diagnosticAlgorithm: {
      title: "鋅中毒 診斷流程",
      steps: [
        { step: 1, action: "急診評估", details: "評估黏膜顏色、PCV和異物攝入史", findings: ["蒼白黏膜", "黃疸", "血紅素尿"] },
        { step: 2, action: "影像學檢查", details: "腹部X光確認金屬異物", findings: ["金屬異物可見", "胃內硬幣", "腸道異物"] },
        { step: 3, action: "血液學確認", details: "CBC、生化、凝血功能評估溶血和器官損傷", findings: ["溶血性貧血", "肝腎指數升高", "DIC徵象"] },
        { step: 4, action: "緊急治療", details: "移除異物+輸血+支持治療", findings: ["內視鏡移除", "手術移除", "需輸血"] }
      ]
    },
    monitoring: ["PCV每4-6小時監測直到穩定", "網織紅血球計數追蹤再生反應", "腎功能和尿液輸出量監測", "異物移除後確認血鋅濃度下降"],
    reference: "Merck Veterinary Manual: Zinc Toxicosis in Animals; Breitschwerdt EB et al. JAVMA. 1986;188(12):1426-1430; VCA: Zinc Poisoning in Pets."
  },

  "lead-toxicosis": {
    zh: "鉛中毒",
    en: "Lead Toxicosis",
    definition: "犬貓因攝食含鉛物質（老舊油漆碎片、鉛管焊料、釣魚鉛墜、彈藥等）導致的重金屬中毒，主要影響消化系統和中樞神經系統。幼犬和幼貓最易受影響，低劑量慢性暴露可引起長期神經行為異常，急性暴露可導致嚴重癲癇和死亡。",
    synonyms: ["鉛毒性", "鉛金屬中毒", "Lead Poisoning", "Plumbism"],
    epidemiology: {
      species: "犬較常見，貓亦可見",
      age: "幼犬最常見（6月齡-2歲，探索和啃咬行為）",
      sex: "無明顯性別傾向",
      riskFactors: ["居住於老舊房屋（鉛漆）", "房屋翻修期間", "接觸鉛管或焊料", "釣魚鉛墜或彈藥攝入", "都市環境"]
    },
    clinicalPresentation: {
      history: ["嘔吐", "腹瀉或便秘", "食慾下降", "癲癇發作（急性）", "行為改變（慢性）"],
      physicalExam: ["消化道症狀（嘔吐、腹痛）", "神經症狀（癲癇、震顫、失明、行為異常）", "血液塗片見有核紅血球和嗜鹼性點彩紅血球", "幼犬多表現神經症狀", "貓以食慾不振、嘔吐和癲癇為主"]
    },
    pathophysiology: "鉛經消化道吸收後分布全身，主要影響三個系統：(1)血液系統——鉛抑制δ-aminolevulinic acid dehydratase (ALAD)和ferrochelatase等血紅素合成酶，導致不成熟紅血球提前釋放（有核紅血球和嗜鹼性點彩紅血球出現於週邊血液）；(2)消化系統——直接刺激胃腸道黏膜引起嘔吐、腹痛和腸蠕動異常；(3)神經系統——鉛穿過血腦屏障（幼年動物屏障不成熟更易穿過），引起腦水腫、神經元脫髓鞘和壞死。幼犬因腸道吸收率高和血腦屏障不成熟，比成犬更易表現嚴重神經症狀。",
    diagnosis: {
      overview: "血鉛濃度>2.9μmol/L結合臨床症狀為確診標準",
      differentials: ["癲癇（特發性或其他原因）", "腦炎", "其他金屬中毒", "有機磷中毒", "犬瘟熱"],
      initialDB: ["血液塗片（有核紅血球、嗜鹼性點彩紅血球）", "全血鉛濃度", "腹部放射線（金屬異物）", "CBC/生化"],
      advanced: ["尿液δ-aminolevulinic acid", "骨骼放射線（慢性鉛線）", "腦脊液分析（排除腦炎）"]
    },
    treatment: {
      overview: "移除鉛來源+螯合治療+控制癲癇",
      acute: ["癲癇控制（diazepam 0.5-1mg/kg IV）", "移除消化道內鉛異物（內視鏡/手術/灌腸）", "腦水腫管理（mannitol 0.5-1g/kg IV）"],
      chronic: ["Succimer (DMSA) 10mg/kg PO q8h共10天（首選螯合劑）", "Ca-EDTA 25mg/kg SC q6h共5天（替代螯合劑）", "Thiamine 2mg/kg IM q24h（配合Ca-EDTA使用）", "移除環境中所有鉛來源"]
    },
    prognosis: "及時診斷和螯合治療後預後良好，通常24-48小時內可見改善。嚴重神經症狀（持續癲癇）預後較差，可能有永久性神經損傷。慢性低劑量暴露可導致持久的行為和認知異常。環境中鉛來源未移除會導致再暴露和復發。",
    pearls: ["血液塗片見有核紅血球和嗜鹼性點彩紅血球是鉛中毒的重要線索", "必須在開始螯合治療前先移除消化道內的鉛異物（Ca-EDTA會增加腸道鉛吸收）", "Succimer (DMSA)是目前推薦的首選螯合劑，副作用比Ca-EDTA少"],
    diagnosticAlgorithm: {
      title: "鉛中毒 診斷流程",
      steps: [
        { step: 1, action: "臨床懷疑", details: "GI症狀+神經症狀+環境暴露史", findings: ["嘔吐+癲癇", "老屋翻修", "金屬異物攝入"] },
        { step: 2, action: "血液學初篩", details: "血液塗片和腹部X光", findings: ["有核紅血球", "嗜鹼性點彩", "金屬異物"] },
        { step: 3, action: "確認檢查", details: "全血鉛濃度測定", findings: ["血鉛>2.9μmol/L確診", "血鉛臨界值需追蹤"] },
        { step: 4, action: "治療", details: "移除鉛源+螯合治療+控制症狀", findings: ["螯合治療反應良好", "癲癇需控制", "環境源需移除"] }
      ]
    },
    monitoring: ["螯合治療後7天追蹤血鉛濃度", "可能需要第二療程螯合治療", "CBC監測貧血改善", "神經功能持續評估"],
    reference: "Merck Veterinary Manual: Lead Poisoning in Animals; Gwaltney-Brant SM. Lead. In: Small Animal Toxicology 3rd ed. Elsevier 2013."
  },

  "metaldehyde-toxicosis": {
    zh: "滅蝸靈中毒",
    en: "Metaldehyde Toxicosis",
    definition: "犬因攝食含滅蝸靈的蝸牛蛞蝓誘餌導致的急性中毒，滅蝸靈在體內代謝為乙醛，引起嚴重的中樞神經興奮、肌肉震顫和癲癇。臨床表現被稱為「搖擺與烘烤」(shake and bake)——劇烈震顫/癲癇伴隨危險性高體溫，致死量犬為100-300mg/kg。",
    synonyms: ["蝸牛餌中毒", "蛞蝓餌中毒", "Snail Bait Poisoning", "Slug Bait Toxicosis"],
    epidemiology: {
      species: "犬為主（貓偶見）",
      age: "任何年齡",
      sex: "無明顯性別傾向",
      riskFactors: ["庭院使用蝸牛蛞蝓誘餌", "誘餌存放不當被犬接觸", "戶外散步接觸", "誘餌外觀和氣味對犬有吸引力"]
    },
    clinicalPresentation: {
      history: ["已知或懷疑接觸蝸牛蛞蝓誘餌", "急性發作震顫或癲癇", "症狀在攝入後數分鐘至3小時內出現", "嘔吐"],
      physicalExam: ["劇烈肌肉震顫", "癲癇發作", "危險性高體溫（>41°C）", "過度流涎", "心搏過速", "瞳孔散大", "角弓反張", "意識狀態異常"]
    },
    pathophysiology: "滅蝸靈攝入後在胃中被代謝為乙醛（acetaldehyde），此代謝物具有直接神經毒性。乙醛降低中樞神經系統中γ-氨基丁酸（GABA）的濃度——GABA是主要的抑制性神經遞質，其減少導致神經元過度興奮。同時降低血清素和去甲腎上腺素濃度，進一步降低癲癇閾值。失去抑制性神經控制導致持續的肌肉震顫和癲癇發作，大量的肌肉活動產生過多熱能，引起危及生命的高體溫。代謝性酸中毒繼發於持續的肌肉活動和乳酸堆積。嚴重的高體溫可導致肝壞死和DIC。",
    diagnosis: {
      overview: "根據暴露史和典型「搖擺與烘烤」臨床表現做臨床診斷",
      differentials: ["有機磷或氨基甲酸酯中毒", "氟乙酸鈉（1080）中毒", "番木鱉鹼中毒", "特發性癲癇", "巧克力中毒", "腦炎"],
      initialDB: ["暴露史調查", "體溫監測", "血液學和生化（代謝性酸中毒、乳酸升高）", "尿液/嘔吐物毒物分析"],
      advanced: ["胃內容物或嘔吐物滅蝸靈定量", "血氣分析", "肝功能監測（24-48h後）"]
    },
    treatment: {
      overview: "控制癲癇+降低體溫+支持治療",
      acute: ["Diazepam 0.5-2mg/kg IV控制癲癇", "Methocarbamol 55-220mg/kg IV（肌肉鬆弛）", "靜脈輸液含乳酸鈉或碳酸氫鈉矯正酸中毒", "主動降溫（冷水浴、風扇、冷靜脈輸液）"],
      chronic: ["難治性癲癇：propofol或pentobarbital CRI", "肝臟保護（IV葡萄糖、S-adenosylmethionine）", "監測48-72小時（遲發性肝損傷）", "嘔吐引起者若尚在攝入1小時內可洗胃"]
    },
    prognosis: "及早治療者預後良好，多數犬在24-48小時內恢復。未治療者可因持續癲癇、高體溫和代謝性酸中毒死亡，死亡可在攝入後數小時內發生。預後取決於攝入量和治療開始時間。遲發性肝衰竭可在72小時後出現。高體溫控制不佳者預後差。",
    pearls: ["「搖擺與烘烤」(shake and bake)——肌肉震顫/癲癇+高體溫是滅蝸靈中毒的典型特徵", "沒有特異性解毒劑，治療以支持療法為主", "Methocarbamol是控制肌肉震顫的重要藥物"],
    diagnosticAlgorithm: {
      title: "滅蝸靈中毒 診斷流程",
      steps: [
        { step: 1, action: "急診評估", details: "評估暴露史、神經症狀和體溫", findings: ["震顫/癲癇", "高體溫", "蝸牛餌接觸史"] },
        { step: 2, action: "穩定患者", details: "立即控制癲癇和降溫", findings: ["diazepam有效", "需methocarbamol", "需propofol"] },
        { step: 3, action: "實驗室評估", details: "血氣、乳酸、肝腎功能", findings: ["代謝性酸中毒", "乳酸升高", "肝指數升高"] },
        { step: 4, action: "持續監測", details: "48-72小時ICU監護", findings: ["神經症狀改善", "遲發性肝損傷", "完全恢復"] }
      ]
    },
    monitoring: ["體溫每30分鐘監測直到正常", "神經狀態持續評估", "肝功能48-72小時後追蹤", "酸鹼平衡和乳酸監測"],
    reference: "Merck Veterinary Manual: Metaldehyde Poisoning in Animals; VCA: Metaldehyde Toxicity (Slug Bait Poisoning); Puschner B. Metaldehyde. In: Small Animal Toxicology 3rd ed."
  },

  "blue-green-algae-toxicosis": {
    zh: "藍綠藻中毒",
    en: "Blue-Green Algae Toxicosis",
    definition: "犬因飲用或游泳於受藍綠藻（藍菌門）污染的水體而導致的急性中毒。藍菌產生的毒素分為肝毒素（microcystin）和神經毒素（anatoxin），分別導致急性肝衰竭或急性神經肌肉麻痺。此中毒無特異性解毒劑，嚴重暴露死亡率極高。",
    synonyms: ["藍菌中毒", "藻類中毒", "Cyanobacteria Toxicosis", "Cyanotoxin Poisoning"],
    epidemiology: {
      species: "犬為主（戶外活動和飲水行為）",
      age: "任何年齡",
      sex: "無明顯性別傾向",
      riskFactors: ["在湖泊、池塘或河流中游泳或飲水", "溫暖季節（夏末秋初藻華盛期）", "靜水體和富營養化水域", "犬的舔毛行為（游泳後舔除毛上的藻類）"]
    },
    clinicalPresentation: {
      history: ["近期在池塘/湖泊游泳或飲水", "急性發病", "嘔吐、腹瀉", "突然虛弱或倒下"],
      physicalExam: ["神經毒素型：肌肉僵硬、癲癇、震顫、麻痺、過度流涎", "肝毒素型：嘔吐（可能帶血）、黑便、黃疸、低血糖", "呼吸困難", "虛脫和休克", "皮膚接觸部位刺激性紅疹"]
    },
    pathophysiology: "藍菌（藍綠藻）在適宜條件下（溫暖、富營養化水體）大量繁殖形成藻華，產生兩類主要毒素：(1)神經毒素（anatoxin-a/s）——結合在神經肌肉接合處的乙醯膽鹼受體或抑制乙醯膽鹼酯酶，導致持續的神經肌肉刺激，引起肌肉僵硬、震顫、癲癇和呼吸肌麻痺，發病在暴露後60分鐘內，進展極快；(2)肝毒素（microcystin/nodularin）——被肝細胞主動攝取後抑制蛋白磷酸酶1和2A，導致細胞骨架崩潰和肝細胞大量壞死，引起急性肝衰竭、凝血障礙和內出血，發病在暴露後4小時內。",
    diagnosis: {
      overview: "臨床診斷為主——暴露史+急性多器官衰竭，水樣檢測可確認",
      differentials: ["有機磷中毒（神經毒素型）", "黃曲毒素中毒（肝毒素型）", "毒蘑菇中毒", "Sago palm中毒", "鉤端螺旋體病"],
      initialDB: ["暴露史（近期水域接觸）", "CBC/生化/凝血功能", "血糖和白蛋白（肝毒素型降低）", "尿液分析"],
      advanced: ["水樣藍菌毒素檢測", "胃內容物毒素分析", "肝臟超音波", "ELISA法microcystin檢測"]
    },
    treatment: {
      overview: "無特異性解毒劑，治療為積極的支持療法",
      acute: ["神經毒素型：diazepam控制癲癇+atropine（若anticholinesterase型）+機械通氣（呼吸衰竭）", "肝毒素型：靜脈輸液+肝臟保護+新鮮冷凍血漿（凝血障礙）", "活性碳（攝入1小時內）", "洗胃（早期且未癲癇時）"],
      chronic: ["肝臟保護劑（SAMe、milk thistle）", "Vitamin K1（凝血障礙）", "ICU密集監護至少48-72小時", "皮膚暴露者徹底沖洗"]
    },
    prognosis: "高劑量暴露預後極差，死亡率極高，死亡可在數小時內發生。神經毒素型進展最快，呼吸衰竭是主要死因。肝毒素型若度過急性期可能存活但可能有永久性肝損傷。低劑量暴露或僅皮膚接觸者經支持治療可能恢復。預防是最重要的策略——避免犬隻接觸有藻華的水體。",
    pearls: ["無特異性解毒劑，高劑量暴露死亡率極高，預防勝於治療", "游泳後犬的舔毛行為可額外攝入大量毒素，暴露後應立即沖洗", "夏末秋初溫暖水體的綠色/藍綠色薄膜是藻華的警示信號"],
    diagnosticAlgorithm: {
      title: "藍綠藻中毒 診斷流程",
      steps: [
        { step: 1, action: "暴露評估", details: "確認近期水域接觸史和水體狀況", findings: ["水域游泳/飲水史", "水體有可見藻華", "多隻動物同時發病"] },
        { step: 2, action: "症狀分類", details: "區分神經毒素型和肝毒素型", findings: ["急性神經症狀（<1h）", "肝臟症狀（2-4h）", "混合型"] },
        { step: 3, action: "實驗室評估", details: "血液學和肝功能評估損傷程度", findings: ["肝酶劇升", "凝血障礙", "低血糖低白蛋白"] },
        { step: 4, action: "積極支持治療", details: "ICU監護+對症處理+水樣送檢", findings: ["穩定可能存活", "多器官衰竭", "需機械通氣"] }
      ]
    },
    monitoring: ["神經功能持續評估", "肝功能和凝血功能每6-12小時監測", "尿量和腎功能監測", "48-72小時後評估肝臟恢復"],
    reference: "Merck Veterinary Manual: Algal Poisoning of Animals; Cornell CVM: Blue-green Algae Poisoning; VCA: Cyanobacteria Poisoning."
  },

  "perianal-adenoma": {
    zh: "肛周腺瘤",
    en: "Perianal Adenoma",
    definition: "犬肛周皮脂腺（肝樣腺）的良性腫瘤，是犬第三常見的皮膚腫瘤。具有明確的雄性激素（睪固酮）依賴性，幾乎僅見於未絕育公犬。腫瘤通常發生在肛門周圍，但肝樣腺分布的任何位置（尾根、包皮、後肢內側）皆可發生。",
    synonyms: ["肛門周圍腺瘤", "肝樣腺瘤", "Hepatoid Gland Adenoma", "Circumanal Gland Tumor"],
    epidemiology: {
      species: "犬",
      age: "中老年犬（平均10歲）",
      sex: "95%為未絕育公犬",
      riskFactors: ["未絕育公犬（雄性激素依賴）", "中老年", "西伯利亞哈士奇、可卡犬、英國鬥牛犬可能較多"]
    },
    clinicalPresentation: {
      history: ["肛門周圍腫塊", "排便時可能出血", "過度舔舐肛門區域", "通常無全身症狀"],
      physicalExam: ["肛門周圍1個或多個圓形、堅硬、皮下腫塊", "表面可能潰瘍和出血", "多為無痛性", "腫瘤生長緩慢", "可能在尾根、包皮、後肢內側發現"]
    },
    pathophysiology: "肛周腺（又稱肝樣腺，因細胞形態類似肝細胞而得名）分布於肛門周圍皮膚，受雄性激素促進生長和雌性激素抑制生長。未絕育公犬的睪固酮持續刺激肝樣腺細胞增殖，導致良性腺瘤形成。這解釋了為何95%發生於未絕育公犬，絕育後因雄性激素急劇降低，腫瘤可明顯縮小甚至消退。約10%的肛周腺腫瘤為惡性（肛周腺癌），不具雄性激素依賴性，可發生於任何性別且預後較差。鑑別良惡性需要組織病理學。",
    diagnosis: {
      overview: "臨床特徵高度提示，FNA和組織學確認良惡性",
      differentials: ["肛周腺癌（惡性）", "肛囊腺癌", "肥大細胞瘤", "皮脂腺瘤", "黑色素瘤"],
      initialDB: ["體格檢查和直腸指診", "FNA細胞學", "完整血液學和生化"],
      advanced: ["切除式組織活檢和病理組織學", "腹部超音波（惡性轉移排除）", "腰下淋巴結評估", "睪丸超音波（排除睪丸腫瘤）"]
    },
    treatment: {
      overview: "絕育是良性肛周腺瘤的首選和最有效治療",
      acute: ["絕育手術（可使腫瘤縮小50-95%）", "大型或潰瘍性腫瘤同時手術切除", "術後止痛和傷口照護"],
      chronic: ["單純絕育後追蹤腫瘤縮小情形", "殘留腫瘤可考慮冷凍手術或放射治療", "惡性肛周腺癌：廣泛切除+化療", "定期肛門區域觸診追蹤"]
    },
    prognosis: "良性肛周腺瘤絕育後預後極佳，大多數在數週至數月內顯著縮小。術後復發率低。惡性肛周腺癌預後較差，局部復發率高且可轉移至腰下淋巴結和內臟器官。組織學確認良惡性是決定預後的關鍵。",
    pearls: ["95%發生於未絕育公犬——絕育是最有效的治療和預防方式", "絕育後良性腫瘤通常在數週內開始縮小", "母犬或已絕育公犬出現的肛周腫塊應高度懷疑惡性腺癌"],
    diagnosticAlgorithm: {
      title: "肛周腺瘤 診斷流程",
      steps: [
        { step: 1, action: "臨床評估", details: "確認腫塊位置、大小和患犬絕育狀態", findings: ["未絕育公犬（典型）", "已絕育犬（懷疑惡性）", "母犬（懷疑惡性）"] },
        { step: 2, action: "細胞學評估", details: "FNA區分腺瘤和其他腫瘤", findings: ["肝樣腺細胞（良性特徵）", "異型性增加（懷疑惡性）", "其他腫瘤類型"] },
        { step: 3, action: "分期檢查", details: "懷疑惡性時進行分期", findings: ["局部腫瘤", "淋巴結轉移", "遠端轉移"] },
        { step: 4, action: "治療決策", details: "良性→絕育；惡性→廣泛切除", findings: ["絕育+觀察", "手術切除", "多模式治療"] }
      ]
    },
    monitoring: ["絕育後每月評估腫瘤大小變化", "3-6個月後確認腫瘤完全消退", "定期肛門區域觸診追蹤復發", "惡性病例每3個月影像學追蹤"],
    reference: "Withrow SJ, Vail DM. Small Animal Clinical Oncology 6th ed. Elsevier 2020; Turek MM, Withrow SJ. Perianal tumors. In: Withrow & MacEwen's."
  },

  "transmissible-venereal-tumor": {
    zh: "傳染性性病腫瘤",
    en: "Transmissible Venereal Tumor",
    definition: "犬的獨特傳染性腫瘤，透過交配或直接接觸（舔舐、嗅聞）傳播活腫瘤細胞。TVT的腫瘤細胞本身即為傳染原，具有異常的染色體核型（59條而非正常犬78條），是已知最古老的無性繁殖細胞系之一，估計已存在超過6000年。主要影響生殖器官但可轉移至皮膚和黏膜。",
    synonyms: ["TVT", "Sticker腫瘤", "Sticker Sarcoma", "Venereal Granuloma"],
    epidemiology: {
      species: "犬",
      age: "性活躍年齡（1-8歲）",
      sex: "公母犬皆可",
      riskFactors: ["未絕育且自由漫遊的犬", "流浪犬群體", "熱帶和亞熱帶地區", "多犬共處環境"]
    },
    clinicalPresentation: {
      history: ["生殖器腫塊", "血性陰道分泌物（母犬）或包皮分泌物（公犬）", "過度舔舐生殖器", "腫塊可能在鼻腔或口腔（經舔舐傳播）"],
      physicalExam: ["陰莖、陰道或外陰表面的分葉狀菜花樣腫塊", "腫塊表面易出血", "質地脆、紅色至灰紅色", "偶見鼻腔、口腔或皮膚轉移", "局部淋巴結可能腫大"]
    },
    pathophysiology: "TVT是一種自然傳播的同種異體移植物，腫瘤細胞本身即為傳染性實體。傳播機制為交配或黏膜接觸時，活的腫瘤細胞經由破損的上皮植入受體犬的黏膜。TVT細胞的MHC-I表達被下調，使其能逃避宿主免疫監視。在免疫健全的犬中，TVT通常經過生長期（P期）→穩定期（S期）→消退期（R期）的自然病程，但免疫功能不全者可能持續生長和轉移。TVT對vincristine化療有極佳的反應率（>90%完全緩解），使其成為少數可靠化療治癒的腫瘤之一。",
    diagnosis: {
      overview: "臨床表現高度提示，FNA或活檢確診",
      differentials: ["其他生殖道腫瘤（平滑肌瘤、肥大細胞瘤）", "生殖器肉芽腫", "尿道脫出", "陰道增生"],
      initialDB: ["體格檢查（生殖器視診）", "FNA細胞學（見特徵性圓形細胞含清晰細胞質空泡）", "CBC/生化"],
      advanced: ["組織活檢和免疫組織化學", "影像學（排除遠端轉移）", "胸腔X光"]
    },
    treatment: {
      overview: "Vincristine化療是首選治療，反應率極高",
      acute: ["Vincristine 0.5-0.7mg/m² IV每週1次", "通常需要4-6次治療", "首次治療後即可見腫瘤縮小"],
      chronic: ["治療至腫瘤完全消失後再多給1-2次", "殘留腫瘤：手術切除+繼續vincristine", "多重抗藥病例：doxorubicin替代", "絕育預防再暴露"]
    },
    prognosis: "Vincristine治療預後極佳，完全緩解率>90%。復發率極低。少數多重抗藥病例可用doxorubicin替代。遠端轉移罕見（<5%），多見於免疫功能不全的犬。未治療者在免疫健全犬中可能自行消退，但通常需要數月，期間持續傳播。",
    pearls: ["TVT對vincristine的反應率>90%，是少數可靠化療治癒的腫瘤", "TVT的腫瘤細胞有59條染色體（正常犬78條），是存在超過6000年的異體移植物", "未絕育的流浪犬群體是TVT最重要的傳播庫"],
    diagnosticAlgorithm: {
      title: "傳染性性病腫瘤 診斷流程",
      steps: [
        { step: 1, action: "臨床評估", details: "檢查生殖器腫塊的形態和分泌物", findings: ["菜花樣腫塊", "易出血", "血性分泌物"] },
        { step: 2, action: "細胞學確診", details: "FNA見特徵性圓形細胞", findings: ["TVT特徵細胞（確診）", "其他腫瘤類型", "需活檢確認"] },
        { step: 3, action: "分期檢查", details: "排除遠端轉移", findings: ["局部腫瘤", "鼻腔/口腔轉移", "遠端轉移"] },
        { step: 4, action: "Vincristine治療", details: "每週一次化療直到完全緩解", findings: ["完全緩解", "部分緩解需繼續", "抗藥需換藥"] }
      ]
    },
    monitoring: ["每週化療前評估腫瘤大小", "每週CBC（vincristine骨髓抑制）", "治療結束後1個月確認無復發", "建議絕育預防再暴露"],
    reference: "Strakova A, Murchison EP. The cancer which survived: insights from the genome of an 11000-year-old cancer. Curr Opin Genet Dev. 2015;30:49-55; Withrow SJ. Small Animal Clinical Oncology 6th ed."
  },

  "plasmacytoma": {
    zh: "漿細胞瘤",
    en: "Plasmacytoma",
    definition: "犬的骨髓外漿細胞（extramedullary plasmacytoma）良性腫瘤，是犬皮膚最常見的圓形細胞腫瘤之一。與惡性多發性骨髓瘤不同，骨髓外漿細胞瘤通常為單一良性病灶，好發於皮膚、口腔黏膜和消化道。皮膚型幾乎全部為良性，手術切除即可治癒。",
    synonyms: ["骨髓外漿細胞瘤", "皮膚漿細胞瘤", "Extramedullary Plasmacytoma", "Cutaneous Plasmacytoma"],
    epidemiology: {
      species: "犬（貓罕見）",
      age: "中老年犬（平均9-10歲）",
      sex: "無明顯性別傾向",
      riskFactors: ["老年犬", "可卡犬可能較多", "無明確環境風險因子"]
    },
    clinicalPresentation: {
      history: ["皮膚或黏膜腫塊", "通常單一病灶", "緩慢生長", "通常無全身症狀"],
      physicalExam: ["隆起的圓形皮膚結節", "多為無毛、紅色至粉紅色", "質地堅韌", "好發部位：四肢、軀幹、耳朵、口腔", "通常<2cm", "表面可能潰瘍"]
    },
    pathophysiology: "骨髓外漿細胞瘤起源於B淋巴球終末分化的漿細胞在骨髓以外的組織異常增殖。與多發性骨髓瘤（骨髓內漿細胞惡性增殖）不同，骨髓外漿細胞瘤通常為單一克隆性良性增殖，不伴隨全身性免疫球蛋白異常或骨髓浸潤。皮膚型漿細胞瘤幾乎全部為良性。口腔和消化道型的局部侵犯性和復發率略高。免疫組織化學顯示腫瘤細胞表達CD79a和MUM-1，但不表達CD3。極少數可能轉化為全身性漿細胞疾病。",
    diagnosis: {
      overview: "FNA或活檢確診，需排除多發性骨髓瘤",
      differentials: ["肥大細胞瘤", "組織球瘤", "淋巴瘤", "黑色素瘤", "多發性骨髓瘤"],
      initialDB: ["FNA細胞學（見成熟漿細胞）", "CBC/生化（排除高球蛋白血症）", "尿液分析（排除Bence-Jones蛋白尿）"],
      advanced: ["組織活檢和免疫組織化學", "血清蛋白電泳", "骨髓穿刺（排除多發性骨髓瘤）", "全身放射線（排除骨溶解病灶）"]
    },
    treatment: {
      overview: "手術完整切除為皮膚型的首選和治癒性治療",
      acute: ["手術切除（1cm邊界即可）", "口腔型可能需要更廣泛切除"],
      chronic: ["不完全切除：追加手術或放射治療", "多發或復發型：考慮低劑量化療（melphalan+prednisolone）", "消化道型：手術+化療"]
    },
    prognosis: "皮膚型漿細胞瘤手術切除後預後極佳，治癒率接近100%。口腔型局部復發率較高（約20%）但通常可再次切除控制。消化道型預後較差。極少數（<2%）進展為全身性漿細胞疾病。皮膚型是犬最常見且預後最好的皮膚圓形細胞腫瘤之一。",
    pearls: ["皮膚漿細胞瘤幾乎全部為良性，手術切除即可治癒", "需與多發性骨髓瘤鑑別——檢查血清蛋白電泳和尿液Bence-Jones蛋白", "FNA見典型的漿細胞（偏心核、核周透明區）即可初步診斷"],
    diagnosticAlgorithm: {
      title: "漿細胞瘤 診斷流程",
      steps: [
        { step: 1, action: "細胞學評估", details: "FNA確認漿細胞腫瘤", findings: ["典型漿細胞", "不典型細胞（需活檢）", "其他腫瘤類型"] },
        { step: 2, action: "排除骨髓瘤", details: "血清蛋白電泳、尿液和CBC", findings: ["無全身性異常", "高球蛋白血症", "Bence-Jones蛋白陽性"] },
        { step: 3, action: "手術切除", details: "完整切除並送組織病理學", findings: ["完整切除", "邊界不乾淨", "惡性特徵"] },
        { step: 4, action: "術後評估", details: "確認切除完整並計畫追蹤", findings: ["治癒", "需追加治療", "需全身分期"] }
      ]
    },
    monitoring: ["術後2週評估傷口癒合", "3個月和6個月後局部觸診追蹤", "年度血清蛋白電泳（排除全身進展）", "口腔型每3個月口腔檢查"],
    reference: "Rakich PM et al. Mucocutaneous plasmacytomas in dogs. JAVMA. 1989;194(6):803-806; Withrow SJ. Small Animal Clinical Oncology 6th ed."
  },

  "hepatocutaneous-syndrome": {
    zh: "肝皮膚症候群",
    en: "Hepatocutaneous Syndrome",
    definition: "犬的罕見代謝性皮膚病，正式名稱為表淺壞死性皮膚炎（superficial necrolytic dermatitis），與特徵性肝病變相關。超音波下肝臟呈「瑞士起司」樣外觀。臨床表現為足墊和黏膜皮膚交界處的嚴重結痂、潰瘍和紅斑，因全身性胺基酸缺乏導致表皮壞死。",
    synonyms: ["表淺壞死性皮膚炎", "壞死性遊走性紅斑", "Superficial Necrolytic Dermatitis", "Necrolytic Migratory Erythema", "SND"],
    epidemiology: {
      species: "犬（貓極罕見）",
      age: "中老年犬（平均10歲以上）",
      sex: "無明顯性別傾向",
      riskFactors: ["慢性肝病", "升糖素瘤（罕見）", "長期苯巴比妥治療", "糖尿病"]
    },
    clinicalPresentation: {
      history: ["足墊腫脹疼痛和皸裂", "面部和生殖器區域結痂和潰瘍", "跛行（足墊疼痛）", "嗜睡和食慾下降"],
      physicalExam: ["足墊嚴重角化過度、皸裂和潰瘍", "眼周、口周、鼻周和生殖器周圍結痂紅斑", "壓力點皮膚病變", "皮膚組織學見「紅白藍」三層特徵", "可能合併糖尿病症狀"]
    },
    pathophysiology: "肝皮膚症候群的核心機制為嚴重的全身性胺基酸缺乏，導致表皮角質形成細胞營養不足而壞死。肝臟嚴重受損後（原因可為特發性肝空泡化病變、苯巴比妥毒性、升糖素瘤等），肝臟正常的胺基酸代謝功能喪失，加上可能的升糖素異常升高（升糖素分解代謝胺基酸），導致血漿胺基酸濃度嚴重降低。表皮角質形成細胞因胺基酸不足無法正常合成蛋白質，發生細胞內水腫和壞死。組織學上表現為病理性「紅白藍」三層模式：過度角化（紅）、表層角質形成細胞空泡變性（白）和基底層增生（藍）。超音波下肝臟呈特徵性的「瑞士起司」樣多發低回聲結節。",
    diagnosis: {
      overview: "皮膚活檢見「紅白藍」模式+腹部超音波見「瑞士起司」肝為高度診斷性",
      differentials: ["鋅缺乏性皮膚炎", "皮肌炎", "落葉型天疱瘡", "全身性紅斑性狼瘡", "藥物反應"],
      initialDB: ["皮膚活檢（見特徵性三層模式）", "腹部超音波（肝臟瑞士起司樣）", "CBC/生化（低白蛋白、低胺基酸、高肝酶）", "血糖（常合併糖尿病）"],
      advanced: ["血漿胺基酸濃度分析", "血清升糖素濃度", "肝臟活檢（確認肝病類型）", "胰臟影像學（排除升糖素瘤）"]
    },
    treatment: {
      overview: "補充胺基酸為核心治療，合併皮膚護理和基礎疾病管理",
      acute: ["靜脈胺基酸輸注（經頸靜脈中心導管）", "高蛋白飲食和口服胺基酸補充", "足墊護理（柔軟劑、防水繃帶）", "繼發感染抗生素治療"],
      chronic: ["定期靜脈胺基酸輸注（每1-2週）", "口服SAMe、精胺酸、穀胱甘肽等補充", "自製高蛋白均衡飲食", "管理合併的糖尿病", "升糖素瘤：手術切除（罕見可治癒病因）"]
    },
    prognosis: "傳統上被認為預後極差（中位生存期約6個月），但近年研究顯示積極的胺基酸補充和營養管理可顯著延長生存期，部分犬可維持良好生活品質超過1年。升糖素瘤引起者若能手術切除為唯一可能的治癒途徑。苯巴比妥相關者停藥後可能改善。",
    pearls: ["腹部超音波見「瑞士起司」樣肝+足墊病變=高度懷疑肝皮膚症候群", "皮膚活檢的「紅白藍」三層模式是病理學確診的關鍵", "靜脈胺基酸輸注是最有效的治療，可在數天內改善皮膚病變"],
    diagnosticAlgorithm: {
      title: "肝皮膚症候群 診斷流程",
      steps: [
        { step: 1, action: "臨床評估", details: "足墊病變+黏膜皮膚交界處結痂+全身症狀", findings: ["足墊角化潰瘍", "面部結痂", "跛行"] },
        { step: 2, action: "皮膚活檢", details: "確認「紅白藍」組織學模式", findings: ["典型SND模式", "非典型需鑑別", "排除其他皮膚病"] },
        { step: 3, action: "腹部超音波", details: "評估肝臟形態和胰臟", findings: ["瑞士起司樣肝", "升糖素瘤", "正常（非典型）"] },
        { step: 4, action: "營養支持治療", details: "開始胺基酸輸注和營養管理", findings: ["皮膚改善", "需持續輸注", "合併糖尿病管理"] }
      ]
    },
    monitoring: ["皮膚病變嚴重度追蹤（足墊和面部）", "血漿白蛋白和胺基酸濃度", "血糖監測（糖尿病管理）", "肝功能定期追蹤"],
    reference: "Merck Veterinary Manual: Hepatocutaneous Syndrome in Small Animals; Loftus JP et al. Treatment and outcomes of dogs with HCS. JVIM. 2022;36(1):106-115."
  },

  "calcinosis-cutis": {
    zh: "皮膚鈣質沉著症",
    en: "Calcinosis Cutis",
    definition: "犬皮膚和皮下組織中發生不可溶性鈣鹽（磷酸鈣和碳酸鈣）異常沉積的疾病。最常見的原因為內源性或外源性糖皮質素過量（庫欣氏症或醫源性），其次為腎衰竭相關的高磷血症。沉積的鈣鹽引起嚴重的皮膚發炎反應和繼發感染。",
    synonyms: ["鈣質沉著", "皮膚鈣化症", "Cutaneous Calcinosis", "Metastatic Calcification"],
    epidemiology: {
      species: "犬（貓極罕見）",
      age: "中老年犬（與庫欣氏症年齡分布一致）",
      sex: "無明顯性別傾向（與基礎疾病相關）",
      riskFactors: ["庫欣氏症（自發性或醫源性）", "長期糖皮質素治療", "慢性腎病（高磷血症）", "維生素D中毒"]
    },
    clinicalPresentation: {
      history: ["皮膚堅硬的白色丘疹或斑塊", "皮膚搔癢和發炎", "長期使用類固醇病史或庫欣氏症症狀", "皮膚脆弱易碎"],
      physicalExam: ["皮膚堅硬的白色/黃白色丘疹、結節或斑塊", "好發部位：背側頸部、腹股溝、腋下", "皮膚觸感粗糙似砂紙", "繼發性皮膚感染", "可能有庫欣氏症其他症狀（PU/PD、腹部膨脹、對稱性脫毛）"]
    },
    pathophysiology: "皮膚鈣質沉著症依機制分為：(1)轉移性鈣化——血鈣或血磷升高導致鈣磷乘積超過閾值（>70 mg²/dL²），鈣鹽在組織中沉積。常見於腎衰竭（高磷血症）、維生素D中毒和原發性副甲狀腺功能亢進。(2)營養不良性鈣化——局部組織損傷後鈣鹽沉積於壞死或變性組織。(3)醫源性/庫欣氏症相關——糖皮質素過量透過多種機制促進皮膚鈣化：增加鈣磷乘積、損傷膠原纖維彈性纖維結構、改變皮膚基質成分使其更易沉積鈣鹽。沉積的鈣鹽結晶引起異物反應性肉芽腫性發炎，並破壞周圍組織。",
    diagnosis: {
      overview: "皮膚活檢確認鈣質沉積+尋找基礎病因（庫欣氏症最常見）",
      differentials: ["毛囊炎", "皮膚黴菌感染", "皮膚異物反應", "皮膚腫瘤"],
      initialDB: ["皮膚活檢（von Kossa染色確認鈣沉積）", "CBC/生化（鈣、磷）", "ACTH刺激試驗或LDDS試驗（排除庫欣氏症）", "尿液分析"],
      advanced: ["腹部超音波（腎上腺評估）", "離子鈣", "PTH和維生素D代謝物", "高劑量地塞米松抑制試驗"]
    },
    treatment: {
      overview: "治療基礎病因為根本，鈣化病灶可能在控制病因後逐漸消退",
      acute: ["皮膚繼發感染的抗生素治療", "局部護理（軟化劑、預防外傷）", "如為外源性類固醇所致，逐步減量停藥"],
      chronic: ["庫欣氏症治療（mitotane或trilostane）", "慢性腎病管理（控制高磷血症）", "DMSO局部塗抹（可能促進鈣沉積消退）", "大型或有症狀的病灶手術切除"]
    },
    prognosis: "預後與基礎疾病的控制密切相關。外源性糖皮質素停藥後鈣化病灶通常在數週至數月內逐漸消退。庫欣氏症有效控制後亦可見改善。研究顯示伴有非典型性激素型庫欣氏症和鈣質沉著的犬對mitotane反應優於trilostane。慢性腎病相關者預後取決於腎病管理。",
    pearls: ["庫欣氏症犬出現皮膚白色硬結即應懷疑鈣質沉著症", "控制基礎病因（停藥/治療庫欣氏症）是最重要的治療", "鈣質沉著可為庫欣氏症的首發或唯一皮膚表現"],
    diagnosticAlgorithm: {
      title: "皮膚鈣質沉著症 診斷流程",
      steps: [
        { step: 1, action: "臨床評估", details: "皮膚病灶形態和基礎疾病病史", findings: ["白色硬結斑塊", "庫欣氏症症狀", "類固醇使用史"] },
        { step: 2, action: "皮膚活檢", details: "確認鈣質沉積和發炎反應", findings: ["von Kossa陽性", "肉芽腫性發炎", "排除其他病因"] },
        { step: 3, action: "基礎病因調查", details: "ACTH刺激試驗、鈣磷和腎功能", findings: ["庫欣氏症", "醫源性", "腎病", "維生素D中毒"] },
        { step: 4, action: "治療基礎病因", details: "控制庫欣氏症或停藥+局部護理", findings: ["病因控制後消退", "需手術切除大病灶", "持續管理"] }
      ]
    },
    monitoring: ["基礎疾病控制指標（ACTH刺激試驗、鈣磷）", "皮膚病灶大小和數量追蹤", "繼發感染監測", "鈣質沉著消退進度評估"],
    reference: "VCA: Calcinosis Circumscripta and Cutis; Miller WH et al. Muller & Kirk's Small Animal Dermatology 7th ed. Saunders 2013."
  },

  "facial-fold-dermatitis": {
    zh: "面部皺褶皮膚炎",
    en: "Facial Fold Dermatitis",
    definition: "犬面部皮膚皺褶（特別是短頭種犬的鼻面部皺褶和部分品種的唇部皺褶）因持續摩擦、潮濕和通氣不良導致的細菌和/或酵母菌繼發感染。屬於皮膚皺褶膿皮症（skin fold pyoderma）的面部型。嚴重的皺褶可導致慢性刺激性角膜炎。",
    synonyms: ["皺褶性皮膚炎", "面部皮膚摺皮膚炎", "Skin Fold Dermatitis", "Facial Fold Pyoderma"],
    epidemiology: {
      species: "犬",
      age: "任何年齡",
      sex: "無明顯性別傾向",
      riskFactors: ["短頭種犬（巴哥、英國鬥牛犬、法國鬥牛犬、波士頓梗）", "沙皮犬", "可卡犬（唇褶）", "過度肥胖加劇皺褶深度"]
    },
    clinicalPresentation: {
      history: ["面部搔癢和摩擦", "面部異味", "面部分泌物或結痂", "眼睛不適（皺褶刺激角膜時）"],
      physicalExam: ["面部皺褶內紅腫、濕潤", "皺褶深處可見黃色至綠色分泌物", "惡臭", "皮膚糜爛或潰瘍", "周圍毛髮染色（淚漬）", "可能合併刺激性角膜炎"]
    },
    pathophysiology: "面部皺褶的解剖結構創造了一個潮濕、溫暖和缺乏通氣的微環境，非常適合細菌（主要為Staphylococcus pseudintermedius）和酵母菌（Malassezia pachydermatis）的過度生長。皺褶內兩側皮膚持續摩擦導致慢性機械性刺激和上皮損傷，破壞皮膚屏障功能。淚液或唾液的持續浸潤進一步增加濕度。感染和發炎互相加劇，形成惡性循環。短頭種犬的鼻面部皺褶是構造性問題，由品種繁殖選擇導致的顏面骨骼短縮使面部皮膚相對過多而形成深褶。嚴重的鼻部皺褶可向下壓迫角膜，造成慢性刺激性角膜病變。",
    diagnosis: {
      overview: "臨床診斷為主，細胞學確認感染類型",
      differentials: ["蠕形蟎感染", "皮膚黴菌感染", "特應性皮炎", "天疱瘡", "盤狀紅斑性狼瘡"],
      initialDB: ["皺褶處壓片細胞學（確認細菌和/或酵母菌）", "完整皮膚檢查", "眼科檢查（排除角膜病變）"],
      advanced: ["細菌培養和藥敏試驗（反覆感染時）", "皮膚刮片（排除蠕形蟎）", "皮膚活檢（排除自體免疫疾病）"]
    },
    treatment: {
      overview: "局部清潔+抗菌治療為急性管理，手術矯正為根治方法",
      acute: ["每日皺褶清潔（chlorhexidine溶液或清潔濕紙巾）", "局部抗菌藥膏（mupirocin或miconazole）", "保持皺褶乾燥", "口服抗生素（嚴重感染時：cephalexin 22mg/kg PO q12h）"],
      chronic: ["面部皺褶切除術（cheiloplasty或面部整形）——根治方法", "長期每日清潔維護（不手術時）", "控制體重減少皺褶深度", "角膜病變處理（潤滑劑或手術）"]
    },
    prognosis: "保守治療（清潔+抗菌）可控制症狀但需終身維護，停止護理後必然復發。手術切除皺褶（面部整形術）為根治方法，術後預後極佳。合併角膜病變者手術矯正更為重要。飼主教育和長期護理配合是非手術管理成功的關鍵。",
    pearls: ["皮膚皺褶切除術是唯一的根治方法，保守治療需要終身維護", "面部皺褶可造成刺激性角膜炎，嚴重者需同時進行眼科評估", "每日用含chlorhexidine的濕紙巾清潔皺褶是簡單有效的日常護理"],
    diagnosticAlgorithm: {
      title: "面部皺褶皮膚炎 診斷流程",
      steps: [
        { step: 1, action: "臨床評估", details: "評估皺褶深度、感染程度和角膜狀態", findings: ["輕度紅腫", "感染性分泌物", "角膜刺激"] },
        { step: 2, action: "細胞學確認", details: "壓片檢查確認感染微生物", findings: ["細菌（球菌）", "酵母菌", "混合感染"] },
        { step: 3, action: "排除其他病因", details: "皮膚刮片排除蠕形蟎，必要時活檢", findings: ["單純皺褶感染", "合併蟎蟲", "自體免疫疾病"] },
        { step: 4, action: "治療決策", details: "保守管理或手術矯正", findings: ["保守管理足夠", "建議手術矯正", "角膜需同時處理"] }
      ]
    },
    monitoring: ["保守治療每2-4週追蹤感染控制", "術後2週評估傷口癒合", "角膜狀態定期追蹤", "飼主護理技巧教育和遵從度評估"],
    reference: "Miller WH et al. Muller & Kirk's Small Animal Dermatology 7th ed. Saunders 2013; Fossum TW. Small Animal Surgery 5th ed. Elsevier 2019."
  }
};

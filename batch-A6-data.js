// batch-A6-data.js — 口腔/牙科 10種疾病完整結構化資料
module.exports = {
  "tooth-fracture": {
    zh: "牙齒骨折",
    en: "Tooth Fracture",
    definition: "牙齒因外力創傷或咀嚼硬物導致的牙冠或牙根結構斷裂，依據美國獸醫牙科學院（AVDC）分類分為琺瑯質裂隙、琺瑯質骨折、非複雜性牙冠骨折、複雜性牙冠骨折（露髓）及牙根骨折五類，是小動物最常見的口腔創傷之一。",
    synonyms: ["斷齒", "碎齒", "Fractured Tooth", "Dental Fracture"],
    epidemiology: {
      species: "犬貓皆可，犬較常見",
      age: "任何年齡，青壯年犬因活動量大較常見",
      sex: "無明顯性別傾向",
      riskFactors: ["咀嚼硬物（骨頭、鹿角、蹄）", "外傷（車禍、摔落、打鬥）", "大型犬種（上顎犬齒及第四前臼齒最常骨折）", "貓以上下顎犬齒最常見"]
    },
    clinicalPresentation: {
      history: ["咀嚼時疼痛或不願咀嚼", "單側咀嚼", "口腔出血", "飼主發現齒冠缺損"],
      physicalExam: ["齒冠可見斷裂面", "露髓點呈粉紅色或暗色", "齒齦紅腫或瘻管", "叩診疼痛", "相關淋巴結腫大"]
    },
    pathophysiology: "外力超過牙齒結構強度時造成琺瑯質、齒質或齒髓腔的斷裂。非複雜性骨折未暴露齒髓，但齒質小管暴露可導致細菌入侵引起繼發性牙髓炎。複雜性骨折直接暴露齒髓，細菌經髓腔進入導致牙髓壞死、根尖周炎，繼而形成根尖膿瘍或瘻管。未治療的骨折可導致慢性疼痛、骨溶解及鄰近組織感染。",
    diagnosis: {
      overview: "口腔檢查結合牙科放射線學確認骨折類型及根尖狀態",
      differentials: ["牙齒磨耗", "牙齒吸收（貓）", "琺瑯質發育不全", "齲齒"],
      initialDB: ["全口腔檢查（需全身麻醉）", "牙科探針檢查齒髓暴露", "牙科放射線攝影", "齒齦探診評估牙周狀態"],
      advanced: ["根尖周圍放射線評估", "活齒檢測（electric/thermal pulp test）", "CBCT（錐狀束電腦斷層）"]
    },
    treatment: {
      overview: "依骨折類型選擇保守治療、活髓治療、根管治療或拔牙",
      acute: ["止痛（NSAIDs 如 meloxicam 0.1mg/kg PO q24h）", "複雜性骨折急性期（<48h）可考慮活髓治療（vital pulp therapy）", "嚴重感染時抗生素治療（amoxicillin-clavulanate 12.5-25mg/kg PO q12h）"],
      chronic: ["非複雜性骨折：密封劑修復或定期監測", "複雜性骨折：根管治療（成功率約95%）或拔牙", "根尖膿瘍：拔牙為首選"]
    },
    prognosis: "非複雜性骨折經適當密封修復預後良好。複雜性骨折若及時進行活髓治療（暴露<48小時）成功率高；根管治療失敗率僅約5%。未治療的複雜性骨折將導致牙髓壞死和慢性疼痛，最終需要拔牙。",
    pearls: ["犬最常骨折的牙齒為上顎犬齒和上顎第四前臼齒（裂齒）", "齒髓暴露點隨時間由粉紅變暗棕，暗色不代表無感染需放射線確認", "任何牙齒變色（粉紅、紫色、灰色）都應進行牙科放射線檢查評估齒髓活力"],
    diagnosticAlgorithm: {
      title: "牙齒骨折 診斷流程",
      steps: [
        { step: 1, action: "口腔檢查", details: "全身麻醉下進行全口檢查，確認骨折位置與類型", findings: ["齒冠可見斷裂", "齒髓暴露或未暴露", "牙齒變色"] },
        { step: 2, action: "牙科放射線", details: "每顆骨折齒至少拍攝一張根尖片", findings: ["根尖透明區（膿瘍）", "牙根骨折", "牙周韌帶增寬"] },
        { step: 3, action: "分類與評估", details: "依AVDC分類確認骨折嚴重度與治療方案", findings: ["非複雜性vs複雜性", "急性vs慢性", "根尖健康vs病變"] },
        { step: 4, action: "制定治療計畫", details: "根據骨折類型、暴露時間及根尖狀態選擇治療方式", findings: ["監測", "修復", "根管治療", "拔牙"] }
      ]
    },
    monitoring: ["術後2週回診確認傷口癒合", "根管治療後6-12個月放射線追蹤", "活髓治療後6個月確認齒髓活力", "定期口腔檢查預防再發"],
    reference: "AVDC Nomenclature 2024; Niemiec BA. Veterinary Periodontology. Wiley 2013; Reiter AM, Gracis M. BSAVA Manual of Canine and Feline Dentistry 4th ed."
  },

  "retained-deciduous-teeth": {
    zh: "乳齒滯留",
    en: "Retained Deciduous Teeth",
    definition: "乳齒在永久齒萌出後未正常脫落而滯留於口腔中的狀態。正常犬有28顆乳齒（42顆永久齒），貓有26顆乳齒（30顆永久齒），乳齒應在永久齒萌出時因齒根吸收而自然脫落，滯留乳齒可導致齒列不正、牙周病及咬合異常。",
    synonyms: ["殘存乳齒", "持續性乳齒", "Persistent Deciduous Teeth", "Retained Baby Teeth"],
    epidemiology: {
      species: "犬較常見，貓偶見",
      age: "4-7月齡（換牙期）",
      sex: "無明顯性別傾向",
      riskFactors: ["玩具犬及小型犬種（約克夏、馬爾濟斯、博美、吉娃娃）", "遺傳傾向", "短頭種", "口腔創傷影響換牙"]
    },
    clinicalPresentation: {
      history: ["口臭", "飼主注意到雙排牙齒", "咀嚼困難", "口腔不適"],
      physicalExam: ["乳齒與永久齒並排（雙排齒）", "永久齒偏位萌出", "齒間食物殘渣堆積", "齒齦紅腫", "犬齒最常滯留，其次為切齒和前臼齒"]
    },
    pathophysiology: "正常換牙過程中，永久齒齒胚發育產生的壓力刺激乳齒齒根吸收（破齒細胞活化），使乳齒鬆動脫落。滯留發生於乳齒齒根吸收機制異常，可能因永久齒萌出路徑偏離、遺傳因素或局部損傷導致。滯留乳齒佔據永久齒正常位置，迫使永久齒偏位萌出，造成異常咬合。兩齒間狹窄空間極易堆積牙菌斑，加速牙周病發展。",
    diagnosis: {
      overview: "口腔檢查確認乳齒滯留，放射線評估乳齒齒根狀態及永久齒位置",
      differentials: ["多生齒（supernumerary teeth）", "永久齒缺失（乳齒正常保留）", "齒列擁擠"],
      initialDB: ["口腔視診確認雙排齒", "牙科放射線攝影確認永久齒存在", "咬合評估"],
      advanced: ["全口牙科放射線（評估所有乳齒狀態）", "頭部CT（複雜病例）"]
    },
    treatment: {
      overview: "確認永久齒已萌出後應儘早拔除滯留乳齒",
      acute: ["手術拔除滯留乳齒（需完整拔出齒根）", "可與絕育手術同時進行", "術後止痛（meloxicam 0.1mg/kg PO q24h共3天）"],
      chronic: ["咬合矯正（永久齒已偏位時）", "定期牙科清潔預防牙周病", "複雜病例轉診獸醫牙科專科"]
    },
    prognosis: "及早拔除（永久齒剛萌出時）預後極佳，永久齒多能自行移動至正常位置。延遲處理可導致永久性咬合異常，需要矯正治療。拔除時需注意完整移除乳齒齒根，避免損傷鄰近永久齒齒胚。",
    pearls: ["規則：永久齒一旦萌出且乳齒未脫落，即應拔除乳齒", "拔除乳齒時必須確認齒根完整拔出，殘留齒根可導致持續問題", "犬齒滯留最常見，且最容易導致咬合異常"],
    diagnosticAlgorithm: {
      title: "乳齒滯留 診斷流程",
      steps: [
        { step: 1, action: "口腔視診", details: "檢查是否有乳齒與永久齒並存", findings: ["雙排犬齒", "雙排切齒", "永久齒偏位"] },
        { step: 2, action: "牙科放射線", details: "確認永久齒齒胚存在且乳齒齒根未吸收", findings: ["永久齒已萌出", "乳齒齒根完整未吸收", "永久齒缺失（需保留乳齒）"] },
        { step: 3, action: "咬合評估", details: "評估咬合關係及永久齒偏位程度", findings: ["正常咬合", "輕度偏位", "嚴重咬合異常"] },
        { step: 4, action: "治療決策", details: "根據永久齒存在與否及咬合狀態決定拔除時機", findings: ["立即拔除", "擇期拔除", "保留乳齒（無永久齒時）"] }
      ]
    },
    monitoring: ["拔除後1-2週回診確認傷口癒合", "追蹤永久齒是否移動至正常位置", "4-6週後評估咬合改善情形", "定期口腔檢查預防牙周病"],
    reference: "Niemiec BA. Small Animal Dental, Oral and Maxillofacial Disease. CRC Press 2022; Gorrel C. Veterinary Dentistry for the General Practitioner 2nd ed. Saunders 2013."
  },

  "oronasal-fistula": {
    zh: "口鼻瘻管",
    en: "Oronasal Fistula",
    definition: "口腔與鼻腔之間形成異常通道的病理狀態，最常因嚴重牙周病導致上顎犬齒區域齒槽骨破壞而形成，也可因拔牙併發症、外傷、腫瘤或先天性腭裂引起。食物和液體可經瘻管進入鼻腔，導致慢性鼻炎和鼻竇感染。",
    synonyms: ["口鼻廔管", "Oroantral Fistula", "Palatal Fistula"],
    epidemiology: {
      species: "犬較常見，貓偶見",
      age: "中老年犬（牙周病繼發），任何年齡（外傷性）",
      sex: "無明顯性別傾向",
      riskFactors: ["嚴重牙周病", "上顎犬齒拔除併發症", "小型犬及短頭種（齒列擁擠）", "口腔腫瘤", "顏面外傷"]
    },
    clinicalPresentation: {
      history: ["慢性單側鼻分泌物（黏液膿性）", "進食或飲水時打噴嚏", "鼻腔反覆感染", "口臭"],
      physicalExam: ["上顎齒齦或硬腭可見瘻管開口", "探針可從口腔通過至鼻腔", "牙周探診深度異常", "鼻分泌物（單側為主）", "相關牙齒鬆動或缺失"]
    },
    pathophysiology: "牙周病進展過程中，牙菌斑細菌引起牙周韌帶和齒槽骨的慢性發炎與破壞。上顎犬齒的齒根與鼻腔底部僅有薄層骨板分隔，當牙周破壞延伸至此區域，骨板被溶解後形成口腔至鼻腔的異常通道。拔牙後若齒槽窩癒合不良或術中穿孔鼻腔底部亦可形成瘻管。口腔內的食物、細菌和液體經瘻管進入鼻腔，引起持續性鼻炎和繼發性細菌感染。",
    diagnosis: {
      overview: "全身麻醉下口腔檢查結合牙科放射線確認瘻管位置和大小",
      differentials: ["原發性鼻炎", "鼻腔腫瘤", "鼻腔異物", "先天性腭裂", "黴菌性鼻炎"],
      initialDB: ["全身麻醉下口腔探診", "牙周探針探查瘻管", "牙科放射線攝影", "鼻腔分泌物細胞學"],
      advanced: ["頭部CT評估瘻管範圍及鼻竇狀態", "鼻鏡檢查", "細菌培養及藥敏試驗"]
    },
    treatment: {
      overview: "手術修復為唯一有效治療，使用齒齦黏膜瓣重建口鼻分隔",
      acute: ["拔除相關病齒", "清創瘻管周圍壞死組織", "齒齦黏膜瓣覆蓋修復（需無張力縫合）", "術後抗生素（amoxicillin-clavulanate 12.5-25mg/kg PO q12h共10-14天）"],
      chronic: ["術後軟食2-3週", "避免咀嚼硬物至少4週", "複發性瘻管可能需要雙層黏膜瓣修復", "嚴重病例需轉診口腔外科"]
    },
    prognosis: "初次手術修復成功率約70-80%。失敗的主要原因為黏膜瓣張力過大或血供不良。複發病例可進行二次修復，大多數最終可成功關閉。早期發現和治療可避免慢性鼻竇感染等併發症。",
    pearls: ["上顎犬齒區域是口鼻瘻管最常見的發生位置", "修復的關鍵是無張力的黏膜瓣閉合和良好的血液供應", "術前處理鼻腔感染可提高手術成功率"],
    diagnosticAlgorithm: {
      title: "口鼻瘻管 診斷流程",
      steps: [
        { step: 1, action: "臨床評估", details: "評估鼻分泌物、打噴嚏史及口臭", findings: ["慢性單側鼻分泌物", "進食時打噴嚏", "口臭"] },
        { step: 2, action: "麻醉下口腔檢查", details: "牙周探針探查上顎齒齦區域", findings: ["瘻管開口可見", "探針可通過至鼻腔", "牙齒鬆動"] },
        { step: 3, action: "影像學檢查", details: "牙科放射線及/或CT評估", findings: ["齒槽骨缺損", "鼻腔內液體", "鼻竇受累"] },
        { step: 4, action: "手術修復", details: "清創後以黏膜瓣無張力修復", findings: ["瘻管成功關閉", "需二次手術", "需轉診"] }
      ]
    },
    monitoring: ["術後48-72小時評估黏膜瓣存活", "2週後拆線並評估癒合", "1個月後確認瘻管完全關閉", "持續監測鼻分泌物是否改善"],
    reference: "Reiter AM, Gracis M. BSAVA Manual of Canine and Feline Dentistry 4th ed. 2018; Smith MM. Oronasal fistula repair. Clin Tech Small Anim Pract. 2000;15(2):86-90."
  },

  "masticatory-myositis": {
    zh: "咀嚼肌炎",
    en: "Masticatory Muscle Myositis",
    definition: "犬的咀嚼肌群（顳肌、咬肌、翼肌）發生免疫介導性發炎的自體免疫疾病，因免疫系統攻擊咀嚼肌特有的2M型肌纖維而引起。急性期表現為咀嚼肌腫脹疼痛，慢性期因肌肉纖維化導致嚴重萎縮和開口困難。",
    synonyms: ["咬肌炎", "MMM", "Masticatory Myositis", "Eosinophilic Myositis"],
    epidemiology: {
      species: "犬（貓極罕見）",
      age: "任何年齡，中大型犬較常見",
      sex: "無明顯性別傾向",
      riskFactors: ["大型犬種", "德國牧羊犬、騎士查理王獵犬、拉布拉多", "中年犬", "遺傳易感性"]
    },
    clinicalPresentation: {
      history: ["無法張口或不願張口", "進食困難或拒食", "口腔疼痛", "頭部腫脹（急性期）或萎縮（慢性期）"],
      physicalExam: ["急性期：咀嚼肌雙側對稱性腫脹、觸診疼痛", "慢性期：嚴重雙側顳肌和咬肌萎縮", "開口受限（牙關緊閉）", "眼球凹陷（顳肌萎縮）", "體溫正常或輕度升高"]
    },
    pathophysiology: "咀嚼肌含有獨特的2M型肌纖維，此纖維蛋白僅存在於咀嚼肌群中，不存在於四肢或其他骨骼肌。免疫系統對2M纖維產生自體抗體和CD8+ T細胞介導的攻擊，導致肌纖維壞死和發炎細胞浸潤。急性期以淋巴球和漿細胞浸潤為主，若未治療則進入慢性期，肌纖維被纖維結締組織取代，導致不可逆的肌肉萎縮和纖維化，嚴重限制開口運動。",
    diagnosis: {
      overview: "血清2M抗體檢測為首選確診方法，敏感度80-90%、特異度100%",
      differentials: ["多發性肌炎", "三叉神經炎", "顳顎關節疾病", "牙周膿瘍", "破傷風", "異物"],
      initialDB: ["血清2M抗體免疫螢光檢測", "CBC（可見嗜酸性球增多）", "CK（肌酸激酶，急性期升高）", "開口角度測量"],
      advanced: ["咀嚼肌活體組織檢查（免疫組織化學染色）", "MRI評估肌肉狀態", "肌電圖（EMG）"]
    },
    treatment: {
      overview: "免疫抑制劑量的糖皮質素為首選治療，需長期維持治療",
      acute: ["Prednisone 1-2mg/kg PO q12h共3-4週", "急性疼痛劇烈時可先靜脈注射dexamethasone", "軟食或灌食支持"],
      chronic: ["Prednisone逐步減量至最低有效劑量（0.5mg/kg q48h）", "總療程通常6-12個月", "復發時增加劑量重新控制", "Azathioprine可作為steroid-sparing agent（1-2mg/kg PO q24-48h）"]
    },
    prognosis: "早期診斷和治療預後良好，約73%的犬恢復正常咀嚼功能。約27%可能復發但通常對再次治療有反應。慢性纖維化期開始治療預後較差，肌肉萎縮和開口限制可能為永久性。未治療將進展為嚴重肌肉纖維化和永久性牙關緊閉。",
    pearls: ["2M抗體檢測特異度100%，陽性即可確診", "開始免疫抑制治療前應先採血檢測，類固醇可能造成假陰性", "治療目標是抑制免疫反應並在纖維化發生前恢復肌肉功能"],
    diagnosticAlgorithm: {
      title: "咀嚼肌炎 診斷流程",
      steps: [
        { step: 1, action: "臨床評估", details: "評估開口程度、咀嚼肌體積和對稱性", findings: ["開口受限", "肌肉腫脹或萎縮", "觸診疼痛"] },
        { step: 2, action: "2M抗體檢測", details: "血清送檢2M纖維抗體免疫螢光試驗", findings: ["陽性（確診）", "陰性（考慮其他鑑別診斷或已用類固醇）"] },
        { step: 3, action: "輔助檢查", details: "CBC、CK、必要時肌肉活檢", findings: ["CK升高", "嗜酸性球增多", "活檢見肌纖維壞死和炎症浸潤"] },
        { step: 4, action: "免疫抑制治療", details: "開始免疫抑制劑量prednisone並追蹤反應", findings: ["4週內改善", "無改善需重新評估診斷"] }
      ]
    },
    monitoring: ["每2-4週評估開口角度改善", "定期CK監測（反映肌肉損傷程度）", "類固醇副作用監測（PU/PD、肝指數）", "減藥期間密切觀察復發徵象"],
    reference: "Melmed C et al. MMM: Pathogenesis, diagnosis, and treatment. Compend Contin Educ Vet. 2004;26(8):590; Pitcher GDC, Hahn CN. J Vet Intern Med. 2007;21(4):776."
  },

  "jaw-fracture": {
    zh: "頜骨骨折",
    en: "Jaw Fracture",
    definition: "下頜骨或上頜骨因外傷、嚴重牙周病或腫瘤侵蝕導致的骨骼斷裂，犬發生率約3%、貓約15%。下頜骨骨折較上頜骨常見，車禍是最主要的病因，小型犬因嚴重牙周病導致的病理性骨折亦不少見。",
    synonyms: ["顎骨骨折", "Mandibular Fracture", "Maxillary Fracture"],
    epidemiology: {
      species: "犬貓皆可，貓發生率更高（15% vs 3%）",
      age: "任何年齡；外傷性多見於年輕動物，病理性多見於老年小型犬",
      sex: "無明顯性別傾向",
      riskFactors: ["車禍或高處墜落", "嚴重牙周病（小型犬、老年犬）", "口腔腫瘤骨質侵蝕", "醫源性（拔牙併發症）", "貓的高樓症候群"]
    },
    clinicalPresentation: {
      history: ["外傷史", "無法進食或飲水", "口腔出血", "流涎", "頜部變形"],
      physicalExam: ["下頜或面部腫脹不對稱", "咬合不正", "觸診骨折線有異常活動度和捻髮音", "口腔黏膜撕裂", "牙齒鬆動或移位", "顏面神經損傷徵象"]
    },
    pathophysiology: "外傷性骨折因超過骨骼承受力的外力直接或間接作用於頜骨而發生。車禍是最常見原因，高處墜落和動物打鬥次之。病理性骨折發生於骨質已被牙周病、腫瘤或代謝性骨病削弱的情況下，正常咀嚼力或輕微外力即可造成骨折。小型犬下頜骨相對薄弱，嚴重牙周病導致齒槽骨大量流失後，下頜體區域極易發生病理性骨折。骨折導致疼痛、咬合異常和進食障礙。",
    diagnosis: {
      overview: "體格檢查結合放射線學或CT確認骨折位置、類型和移位程度",
      differentials: ["顳顎關節脫臼", "顳顎關節炎", "軟組織損傷", "牙齒骨折"],
      initialDB: ["口腔和顏面觸診", "口腔內放射線攝影", "標準頭部放射線（DV和lateral）", "全身狀態評估（外傷患者）"],
      advanced: ["CT掃描（評估複雜骨折和骨折碎片）", "牙科放射線（評估齒根與骨折線關係）", "術前血液學檢查"]
    },
    treatment: {
      overview: "依骨折類型選擇保守或手術治療，目標為恢復正常咬合",
      acute: ["穩定患者（外傷急救優先）", "止痛（buprenorphine 0.01-0.02mg/kg IV/IM q6-8h）", "口套或繃帶暫時固定", "軟食或管灌餵食"],
      chronic: ["齒間固定術（wire/acrylic splint）", "外固定器", "骨板和骨釘固定", "上顎骨折通常較穩定可保守治療", "病理性骨折需同時處理原發病因"]
    },
    prognosis: "上顎骨折預後通常良好至極佳。下頜骨骨折預後視骨折類型、位置和病因而定：外傷性簡單骨折手術修復後預後良好；老年小型犬牙周病導致的病理性骨折預後較差（骨癒合能力差）。最常見的併發症為咬合不正和骨髓炎。",
    pearls: ["貓頜骨骨折發生率（15%）遠高於犬（3%），多與高處墜落相關", "下頜聯合（mandibular symphysis）分離在貓極為常見，用鋼絲固定效果良好", "小型犬牙周病相關骨折的骨癒合較差，可能需要長期軟食"],
    diagnosticAlgorithm: {
      title: "頜骨骨折 診斷流程",
      steps: [
        { step: 1, action: "初步評估", details: "外傷患者先穩定生命徵象，評估多重創傷", findings: ["生命徵象穩定", "多重創傷", "呼吸道阻塞"] },
        { step: 2, action: "口腔觸診", details: "評估咬合、骨折活動度和軟組織損傷", findings: ["咬合不正", "異常活動度", "捻髮音"] },
        { step: 3, action: "影像學檢查", details: "放射線或CT確認骨折位置和類型", findings: ["骨折位置和移位", "骨折線與齒根關係", "多發骨折"] },
        { step: 4, action: "治療計畫", details: "根據骨折穩定度和咬合評估選擇固定方式", findings: ["保守治療", "齒間固定", "手術固定"] }
      ]
    },
    monitoring: ["術後2週評估咬合和固定穩定度", "4-6週放射線追蹤骨癒合", "8-12週移除固定裝置", "定期口腔檢查監測咬合和牙周狀態"],
    reference: "ACVS Surgical Summary: Mandibular Fractures 2024; Verstraete FJM, Lommer MJ. Oral and Maxillofacial Surgery in Dogs and Cats 2nd ed. Elsevier 2020."
  },

  "tongue-tumor": {
    zh: "舌腫瘤",
    en: "Tongue Tumor",
    definition: "發生於舌部的腫瘤性病變，犬最常見的為鱗狀細胞癌（SCC）和惡性黑色素瘤，貓則以鱗狀細胞癌為主（最常發生於舌根腹側）。口腔腫瘤是犬第四常見的腫瘤類型，具有局部侵犯性強的特點，常呈冰山效應（深層浸潤範圍遠大於表面所見）。",
    synonyms: ["舌部腫瘤", "口腔舌腫瘤", "Lingual Neoplasia", "Oral Tongue Mass"],
    epidemiology: {
      species: "犬貓皆可",
      age: "中老年（犬平均10歲，貓平均12歲）",
      sex: "無明顯性別傾向",
      riskFactors: ["老年動物", "口腔色素沉著犬種（黑色素瘤）", "貓慢性口炎可能增加SCC風險", "環境致癌物質暴露（二手煙）"]
    },
    clinicalPresentation: {
      history: ["進食困難", "流涎增加（可能帶血）", "口臭", "體重減輕", "舌部腫塊"],
      physicalExam: ["舌部可見腫塊（可為潰瘍型或增生型）", "腫塊易出血", "下頜淋巴結腫大", "舌運動受限", "惡臭口腔分泌物"]
    },
    pathophysiology: "口腔鱗狀細胞癌起源於口腔黏膜上皮細胞的惡性轉化，通常具有強烈的局部侵犯性，可侵蝕深層肌肉和骨骼組織。貓的口腔SCC特別好發於舌根腹側，可能與舔毛行為導致環境致癌物質（如二手煙殘留物）在該區域濃縮有關。惡性黑色素瘤起源於黑色素細胞，是犬最常見的口腔惡性腫瘤，轉移率高（肺和局部淋巴結）。腫瘤外觀常呈冰山效應，深層組織浸潤範圍遠大於表面可見範圍。",
    diagnosis: {
      overview: "組織活檢和病理組織學為確診依據，影像學評估腫瘤範圍和轉移",
      differentials: ["嗜酸性肉芽腫", "口腔乳突狀瘤", "纖維瘤", "口腔炎性息肉", "異物肉芽腫"],
      initialDB: ["口腔檢查（需全身麻醉）", "細針抽吸細胞學", "頭頸部放射線", "胸腔放射線（3 views評估肺轉移）"],
      advanced: ["切開或切除式組織活檢", "頭部CT/MRI評估腫瘤範圍", "淋巴結細針抽吸", "腹部超音波（分期）"]
    },
    treatment: {
      overview: "手術切除為首選，視腫瘤類型可合併放療或化療",
      acute: ["手術廣泛切除（需2cm安全邊界）", "部分舌切除術（glossectomy）", "術後止痛和營養支持（食道餵食管）"],
      chronic: ["惡性黑色素瘤：黑色素瘤疫苗（Oncept®）", "SCC：放射治療（非手術候選者）", "化療（carboplatin、piroxicam等）", "貓SCC治療選擇有限，預後差"]
    },
    prognosis: "犬下頜前端SCC手術切除後中位生存期19-43個月，預後相對較好。舌根或扁桃體SCC預後較差，轉移率高。犬口腔黑色素瘤轉移率高，手術+疫苗中位生存期約12-18個月。貓口腔SCC預後極差，確診後中位生存期僅2-4個月，一年存活率不到10%。",
    pearls: ["貓口腔SCC最常發生在舌根腹側，早期不易發現", "口腔腫瘤具冰山效應，深層浸潤範圍通常遠大於表面所見", "任何口腔腫塊持續超過2週應進行活檢"],
    diagnosticAlgorithm: {
      title: "舌腫瘤 診斷流程",
      steps: [
        { step: 1, action: "臨床評估", details: "全身麻醉下詳細口腔檢查和腫塊評估", findings: ["腫塊大小和位置", "潰瘍或出血", "淋巴結狀態"] },
        { step: 2, action: "細胞學/組織學", details: "FNA或切開式活檢取得病理診斷", findings: ["SCC", "惡性黑色素瘤", "良性腫瘤"] },
        { step: 3, action: "分期檢查", details: "胸腔X光、淋巴結FNA、CT評估腫瘤範圍", findings: ["局部腫瘤", "淋巴結轉移", "遠端轉移"] },
        { step: 4, action: "制定治療計畫", details: "根據腫瘤類型和分期選擇手術、放療或化療", findings: ["手術可切除", "需多模式治療", "姑息治療"] }
      ]
    },
    monitoring: ["術後2週評估傷口癒合", "每2-3個月胸腔X光檢查轉移", "每月口腔和淋巴結觸診", "體重和食慾持續追蹤"],
    reference: "Liptak JM, Withrow SJ. Oral Tumors. In: Withrow & MacEwen's Small Animal Clinical Oncology 6th ed. Elsevier 2020; Merck Veterinary Manual: Oral Tumors in Small Animals."
  },

  "feline-orofacial-pain-syndrome": {
    zh: "貓口面疼痛症候群",
    en: "Feline Orofacial Pain Syndrome",
    definition: "貓的神經性疼痛疾病，以發作性口腔不適、過度舔舐咀嚼動作及自我傷害行為（舌頭和唇部自咬）為特徵。被認為是三叉神經痛的貓科對應疾病，緬甸貓有遺傳易感性，暗示涉及中樞或三叉神經節的感覺訊號處理異常。",
    synonyms: ["FOPS", "貓顏面疼痛症候群", "Feline Trigeminal Neuropathy"],
    epidemiology: {
      species: "貓（犬極罕見）",
      age: "任何年齡，中位數約5歲，幼貓換牙期可首發",
      sex: "無明顯性別傾向",
      riskFactors: ["緬甸貓（品種遺傳傾向）", "牙科疾病（牙周病、齒吸收）", "環境壓力（多貓家庭衝突）", "換牙期"]
    },
    clinicalPresentation: {
      history: ["發作性過度舔舐或咀嚼動作", "爪抓臉部或嘴巴", "進食時突然後退", "自咬舌頭或嘴唇", "壓力環境下症狀加劇"],
      physicalExam: ["舌頭或口唇自傷性潰瘍（通常單側）", "過度流涎", "發作間期檢查可能正常", "可能合併牙科疾病", "觸碰口周可誘發疼痛反應"]
    },
    pathophysiology: "FOPS被認為是三叉神經系統的神經性疼痛疾病，類似人類的三叉神經痛。三叉神經末梢受損或致敏（如牙科疾病、換牙過程）後，中樞或三叉神經節對痛覺訊號的處理發生異常，產生自發性疼痛和異常疼痛（allodynia）。研究顯示63%的病例合併口腔病變（牙周病、口腔潰瘍、永久齒萌出等），提示周邊神經損傷是重要的觸發因子。緬甸貓的品種傾向暗示遺傳性的神經處理缺陷。壓力因素（如多貓環境衝突）可加劇症狀發作。",
    diagnosis: {
      overview: "排除性診斷，需排除口腔疾病後根據典型行為模式確診",
      differentials: ["牙周病", "齒吸收（FORL）", "口腔腫瘤", "口腔異物", "強迫行為障礙", "狂犬病"],
      initialDB: ["全身麻醉下完整口腔檢查", "全口牙科放射線", "基礎血液學和生化", "神經學檢查"],
      advanced: ["頭部MRI（排除腦部病變）", "病灶組織活檢（排除腫瘤）", "試驗性止痛治療反應評估"]
    },
    treatment: {
      overview: "多模式治療：處理口腔觸發因子、神經性疼痛藥物、環境管理",
      acute: ["伊莉莎白圈防止自傷", "軟爪套（Soft Claws®）減少抓傷", "處理任何牙科疾病（拔除病齒）", "止痛（buprenorphine 0.01-0.03mg/kg 口腔黏膜 q6-8h）"],
      chronic: ["Gabapentin 5-10mg/kg PO q8-12h（一線神經痛藥物）", "Phenobarbital 1-2mg/kg PO q12h（替代選擇）", "環境壓力管理（減少多貓衝突）", "長期可能需要持續藥物控制"]
    },
    prognosis: "預後視觸發因子和治療反應而異。能識別並處理口腔觸發因子（如拔除病齒）的病例預後較好，部分可完全緩解。需要長期神經性疼痛藥物管理的病例可維持良好生活品質但難以完全治癒。未治療將持續自傷導致嚴重口腔損傷。",
    pearls: ["FOPS是排除性診斷，必須先徹底排除所有口腔疾病", "即使只有輕微齒齦炎也應積極治療，因為是重要的神經致敏因子", "環境壓力（特別是多貓家庭衝突）是常被忽略的重要觸發因子"],
    diagnosticAlgorithm: {
      title: "貓口面疼痛症候群 診斷流程",
      steps: [
        { step: 1, action: "行為評估", details: "詳細問診發作模式、自傷行為和環境壓力", findings: ["發作性口腔不適", "單側自傷", "壓力相關加劇"] },
        { step: 2, action: "口腔檢查", details: "全身麻醉下完整口腔和牙科放射線檢查", findings: ["牙科疾病（可為觸發因子）", "自傷性潰瘍", "口腔正常"] },
        { step: 3, action: "排除其他疾病", details: "血液學、神經學檢查排除系統性疾病", findings: ["血液學正常", "神經學正常", "需MRI進一步排除"] },
        { step: 4, action: "試驗性治療", details: "處理觸發因子並開始gabapentin試驗", findings: ["症狀改善（支持診斷）", "無改善（重新評估）"] }
      ]
    },
    monitoring: ["用藥後2-4週評估症狀頻率和嚴重度", "定期口腔檢查監測自傷程度", "gabapentin劑量調整依臨床反應", "環境管理效果持續評估"],
    reference: "Rusbridge C et al. Feline orofacial pain syndrome (FOPS): a retrospective study of 113 cases. JFMS. 2010;12(6):498-508; Ertelt J et al. Successful treatment of FOPS. Vet Rec Case Rep. 2024."
  },

  "eosinophilic-stomatitis": {
    zh: "嗜酸性口炎",
    en: "Eosinophilic Stomatitis",
    definition: "貓的口腔嗜酸性肉芽腫複合症的口腔表現，以嗜酸性球為主的發炎細胞浸潤口腔黏膜導致潰瘍和肉芽腫性病變。被認為是過敏性或免疫異常反應的一部分，可影響舌、硬腭、軟腭及唇部，屬於貓嗜酸性肉芽腫複合症（EGC）的口腔形式。",
    synonyms: ["貓嗜酸性口腔病", "Feline Eosinophilic Oral Disease", "Oral Eosinophilic Granuloma"],
    epidemiology: {
      species: "貓（犬罕見）",
      age: "任何年齡，年輕至中年貓較常見",
      sex: "無明顯性別傾向（部分文獻報告母貓略多）",
      riskFactors: ["過敏體質", "環境或食物過敏", "跳蚤過敏", "遺傳易感性", "免疫功能異常"]
    },
    clinicalPresentation: {
      history: ["進食困難或食慾下降", "流涎", "口臭", "體重減輕", "口腔不適表現（爪抓嘴巴）"],
      physicalExam: ["舌部和硬腭凸起的粉色/黃色肉芽腫性病變", "口腔潰瘍", "上唇無痛性潰瘍（rodent ulcer）", "下唇腫脹", "齒齦紅腫", "約2/3病例有多處病灶"]
    },
    pathophysiology: "嗜酸性肉芽腫複合症被認為是過敏性或免疫介導性反應的結果，但確切觸發因子通常難以確認。嗜酸性球在過敏反應中釋放多種化學介質（主要堿性蛋白、嗜酸性球陽離子蛋白等），導致組織腫脹、潰瘍和肉芽腫形成。口腔形式可能與吸入性過敏原、食物過敏、跳蚤叮咬過敏或特發性免疫異常有關。約半數病例顯示口腔不適和進食困難，潰瘍性病變常見且可多處同時受影響。",
    diagnosis: {
      overview: "組織學活檢確診，需同時排除感染性和腫瘤性病因",
      differentials: ["口腔鱗狀細胞癌", "貓慢性齒齦口炎", "口腔異物反應", "黴菌感染", "貓口面疼痛症候群"],
      initialDB: ["細針抽吸細胞學（可見嗜酸性球浸潤）", "CBC（常見嗜酸性球增多）", "基本生化", "FeLV/FIV檢測"],
      advanced: ["切開式組織活檢和病理組織學", "食物過敏排除試驗（8-12週）", "皮膚科過敏檢測", "細菌培養及藥敏試驗"]
    },
    treatment: {
      overview: "控制過敏觸發因子為基礎，免疫抑制治療控制發炎反應",
      acute: ["Prednisolone 1-2mg/kg PO q24h共2-4週後逐步減量", "積極跳蚤控制（全環境）", "合併細菌感染時加用抗生素（amoxicillin-clavulanate 12.5mg/kg PO q12h）"],
      chronic: ["Cyclosporine（Atopica®）7mg/kg PO q24h（類固醇替代選擇）", "食物過敏排除飲食", "Triamcinolone acetonide 局部注射（頑固病灶）", "長期維持最低有效劑量免疫抑制"]
    },
    prognosis: "預後視觸發因子可否識別而定。能識別並去除過敏原（如跳蚤控制、食物排除）的病例預後良好，可能完全緩解。特發性病例可能需要長期免疫抑制治療維持，但大多數可達到臨床控制。早期多模式治療（抗菌+免疫抑制+過敏原控制）效果最佳。",
    pearls: ["EGC口腔形式的非典型表現可能被誤診為腫瘤，活檢是關鍵", "積極跳蚤控制應作為所有病例的第一線治療嘗試", "食物排除試驗需要至少8週才能看到效果"],
    diagnosticAlgorithm: {
      title: "嗜酸性口炎 診斷流程",
      steps: [
        { step: 1, action: "臨床評估", details: "口腔檢查評估病灶形態、分布和數量", findings: ["典型肉芽腫/潰瘍病灶", "多處受影響", "嘴唇病變"] },
        { step: 2, action: "細胞學和血液學", details: "FNA和CBC確認嗜酸性球浸潤", findings: ["嗜酸性球增多", "FeLV/FIV陰性", "嗜酸性球浸潤"] },
        { step: 3, action: "組織活檢", details: "切開式活檢排除腫瘤並確認EGC", findings: ["嗜酸性肉芽腫", "排除SCC", "排除感染"] },
        { step: 4, action: "尋找觸發因子", details: "跳蚤控制試驗、食物排除飲食", findings: ["跳蚤過敏確認", "食物過敏確認", "特發性"] }
      ]
    },
    monitoring: ["治療後2-4週評估病灶大小和數量", "CBC追蹤嗜酸性球變化", "類固醇或cyclosporine副作用監測", "長期追蹤復發情形"],
    reference: "Buckley L, Nuttall T. Feline eosinophilic granuloma complex. JFMS. 2012;14(7):471-481; Cornell Feline Health Center: Eosinophilic Granuloma Complex."
  },

  "dry-socket-alveolar-osteitis": {
    zh: "乾性齒槽炎",
    en: "Dry Socket (Alveolar Osteitis)",
    definition: "拔牙術後齒槽窩內血塊溶解或未形成導致的併發症，暴露的齒槽骨因缺乏血塊保護而發炎壞死，引起劇烈疼痛和癒合延遲。在獸醫臨床中較人醫少見但確有記載，與拔牙技術、術後護理和局部因素有關。",
    synonyms: ["齒槽骨炎", "拔牙後乾窩症", "Alveolar Osteitis", "Fibrinolytic Alveolitis"],
    epidemiology: {
      species: "犬貓皆可",
      age: "任何年齡，與拔牙術相關",
      sex: "無明顯性別傾向",
      riskFactors: ["困難拔牙（手術時間長）", "術中過度創傷", "術後過早咀嚼硬物", "嚴重牙周病拔牙", "免疫抑制狀態"]
    },
    clinicalPresentation: {
      history: ["拔牙數天後口腔疼痛加劇", "止痛藥無效", "食慾下降", "口臭"],
      physicalExam: ["拔牙窩內無血塊或肉芽組織", "齒槽窩內惡臭液體", "齒槽骨暴露可見", "周圍軟組織紅腫", "觸診拔牙區域劇痛"]
    },
    pathophysiology: "正常拔牙後齒槽窩內應形成血塊，作為癒合的支架和骨面的保護層。乾性齒槽炎發生於血塊因局部纖溶酶原活化增加而溶解（纖溶性齒槽炎），或因手術創傷、感染等原因未能正常形成。血塊喪失後齒槽骨表面直接暴露於口腔環境，細菌侵入導致骨表面發炎和壞死，產生劇烈疼痛。在獸醫中較人醫罕見，可能因為動物拔牙技術較少使用局部血管收縮劑。",
    diagnosis: {
      overview: "根據拔牙病史和典型臨床表現即可診斷",
      differentials: ["正常拔牙後疼痛", "拔牙窩感染", "殘留齒根", "齒槽骨骨折", "口鼻瘻管"],
      initialDB: ["口腔視診（拔牙窩空洞、無血塊）", "牙科放射線（排除殘留齒根和骨折）", "觸診評估疼痛"],
      advanced: ["細菌培養（頑固感染）", "CT（懷疑擴散性骨髓炎）"]
    },
    treatment: {
      overview: "清創、沖洗和局部藥物填塞促進二次癒合",
      acute: ["輕柔刮除齒槽窩壞死組織", "生理食鹽水或chlorhexidine溶液沖洗", "齒槽窩填塞含碘仿紗條或gelatin sponge", "全身性止痛（NSAIDs + tramadol）"],
      chronic: ["抗生素治療（cefalexin 22mg/kg PO q12h共7-10天）", "每日或隔日換藥直到肉芽組織生長", "軟食2-3週", "嚴重病例可能需要黏膜瓣覆蓋"]
    },
    prognosis: "經適當清創和局部治療後，大多數病例在1-2週內形成健康肉芽組織，預後良好。齒槽窩癒合時間較正常拔牙延長2-3週。極少數可進展為擴散性骨髓炎，需要更積極的治療。",
    pearls: ["獸醫臨床中乾性齒槽炎比人醫少見，但拔牙後持續疼痛加劇應高度懷疑", "預防重於治療：微創拔牙技術和良好的術後止血是關鍵", "拔牙後建議軟食至少1週以保護血塊"],
    diagnosticAlgorithm: {
      title: "乾性齒槽炎 診斷流程",
      steps: [
        { step: 1, action: "病史評估", details: "確認拔牙時間和術後疼痛加劇模式", findings: ["拔牙後2-5天疼痛加劇", "止痛藥效果差", "口臭"] },
        { step: 2, action: "口腔檢查", details: "視診拔牙窩血塊狀態", findings: ["血塊缺失", "齒槽骨暴露", "惡臭液體"] },
        { step: 3, action: "放射線檢查", details: "排除殘留齒根和骨折", findings: ["無殘留齒根", "齒槽骨完整", "骨折或碎片"] },
        { step: 4, action: "治療性清創", details: "刮除壞死組織、沖洗、填塞", findings: ["健康出血面", "肉芽組織開始生長"] }
      ]
    },
    monitoring: ["每1-2天換藥評估肉芽組織生長", "1週後評估疼痛改善程度", "2-3週後確認齒槽窩癒合進展", "注意骨髓炎徵象（持續腫脹、瘻管）"],
    reference: "Wyels SVC. Alveolar osteitis (dry socket) in a dog: a case report. J Vet Dent. 1998;15(2):97-98; VCA: Feline Alveolar Osteitis."
  },

  "gingival-hyperplasia": {
    zh: "齒齦增生",
    en: "Gingival Hyperplasia",
    definition: "齒齦組織因細胞增殖導致的異常增生肥大，是犬常見的口腔良性病變。可為特發性（品種相關）或藥物誘發性（cyclosporine、phenytoin等）。增生的齒齦組織形成假性牙周囊袋，容易堆積食物殘渣和細菌，增加牙周病風險。",
    synonyms: ["牙齦增生", "齒齦肥大", "Gingival Overgrowth", "Gingival Enlargement"],
    epidemiology: {
      species: "犬為主（貓罕見）",
      age: "中年至老年犬",
      sex: "無明顯性別傾向",
      riskFactors: ["品種傾向（拳師犬、鬥牛犬、可卡犬、大丹犬、柯利犬）", "Cyclosporine使用（42%發生率）", "Amlodipine使用", "慢性齒齦炎"]
    },
    clinicalPresentation: {
      history: ["齒齦腫大被飼主發現", "口臭", "進食時出血", "通常無明顯疼痛"],
      physicalExam: ["齒齦組織瀰漫性增生", "增生組織覆蓋部分齒冠", "假性牙周囊袋形成", "齒齦表面光滑或呈結節狀", "觸診質地堅韌", "可能合併牙周病"]
    },
    pathophysiology: "特發性齒齦增生是齒齦結締組織中成纖維細胞增殖和膠原蛋白過度沉積的結果，具有明確的品種遺傳傾向。藥物誘發性齒齦增生（特別是cyclosporine）的機制涉及藥物抑制鈣離子通道，影響齒齦成纖維細胞的代謝，促進細胞增殖和細胞外基質（主要為膠原蛋白）的過度產生。對照研究顯示42%使用免疫抑制劑量cyclosporine的犬在20-24週內出現齒齦增生，發生率和嚴重度與血藥濃度正相關。增生組織形成的假性囊袋成為細菌堆積的溫床，加速繼發性牙周病。",
    diagnosis: {
      overview: "臨床診斷為主，活檢用於排除腫瘤性病變",
      differentials: ["齒齦瘤（epulis）", "口腔纖維瘤", "口腔鱗狀細胞癌", "齒齦炎", "漿細胞瘤"],
      initialDB: ["口腔檢查評估增生範圍", "用藥史調查（cyclosporine、amlodipine等）", "牙科放射線（評估齒槽骨狀態）"],
      advanced: ["組織活檢和病理組織學（排除腫瘤）", "全口牙科放射線", "血藥濃度監測（藥物誘發病例）"]
    },
    treatment: {
      overview: "手術切除增生組織並處理誘發因子",
      acute: ["齒齦成形術（gingivoplasty）全身麻醉下進行", "同時進行牙科清潔和牙周治療", "術後止痛（meloxicam 0.1mg/kg PO q24h共3-5天）"],
      chronic: ["藥物誘發：考慮替換藥物或減量", "Cyclosporine誘發：azithromycin 6.6-10.8mg/kg PO q24h共4-14週（可使增生消退）", "定期牙科清潔預防復發", "日常口腔護理（刷牙、潔牙骨）"]
    },
    prognosis: "特發性齒齦增生經手術切除後常復發，需要定期維護。藥物誘發性齒齦增生若能停藥或替換藥物，增生通常可消退或明顯改善。Azithromycin治療cyclosporine誘發的齒齦增生效果良好，大多數病例增生完全消退且繼續使用cyclosporine也不復發。定期口腔護理和牙科清潔可減緩復發速度。",
    pearls: ["任何局灶性、不對稱、結節狀或潰瘍性的齒齦增生都應活檢排除腫瘤", "Azithromycin是cyclosporine誘發齒齦增生的有效非手術治療選擇", "拳師犬是最好發的品種，常需反覆手術治療"],
    diagnosticAlgorithm: {
      title: "齒齦增生 診斷流程",
      steps: [
        { step: 1, action: "臨床評估", details: "評估增生分布（瀰漫性vs局灶性）和用藥史", findings: ["瀰漫性增生", "局灶性腫塊", "用藥相關"] },
        { step: 2, action: "鑑別腫瘤", details: "活檢排除惡性腫瘤（特別是局灶性或非典型病灶）", findings: ["良性增生", "epulis", "惡性腫瘤"] },
        { step: 3, action: "牙科評估", details: "放射線檢查齒槽骨和繼發性牙周病", findings: ["假性囊袋", "繼發牙周病", "齒槽骨正常"] },
        { step: 4, action: "治療決策", details: "根據病因選擇手術或藥物治療", findings: ["手術齒齦成形", "azithromycin藥物治療", "停藥/換藥"] }
      ]
    },
    monitoring: ["術後2週評估傷口癒合", "每3-6個月口腔檢查評估復發", "藥物誘發病例監測血藥濃度", "定期牙科清潔維護口腔衛生"],
    reference: "Nishikawa S et al. Cyclosporine-induced gingival overgrowth in dogs. J Vet Dent. 2010; VCA: Gingival Hyperplasia; Niemiec BA. Veterinary Periodontology. Wiley 2013."
  }
};

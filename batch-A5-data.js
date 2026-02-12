// batch-A5-data.js — 生殖/泌乳疾病 10種 structured data
module.exports = {
  "dystocia": {
    zh: "難產",
    en: "Dystocia",
    definition: "難產是指分娩過程中因母體或胎兒因素導致的異常分娩，無法自然娩出胎兒。母體因素包括子宮收縮無力（子宮遲緩）和產道狹窄；胎兒因素包括胎位不正、胎兒過大或畸形。子宮遲緩（uterine inertia）是最常見的母體性難產原因。",
    synonyms: ["難產", "分娩困難", "Obstructed Labor"],
    epidemiology: {
      species: "犬貓皆可，犬較常見",
      age: "繁殖年齡母犬貓",
      sex: "僅母犬貓",
      riskFactors: ["短頭種犬（鬥牛犬、波士頓梗）", "小型犬種", "初產或高齡母犬", "單胎妊娠（胎兒過大）", "多胎妊娠（子宮過度擴張致遲緩）", "肥胖", "骨盆骨折史"]
    },
    clinicalPresentation: {
      history: ["強烈陣痛超過30分鐘無胎兒產出", "綠色分泌物超過2小時無胎兒", "胎兒間隔超過2-4小時", "妊娠超過70-72天", "虛弱、嘔吐、精神沉鬱"],
      physicalExam: ["腹部觸診可感受胎兒", "陰道檢查可能觸及胎兒", "體溫先降後升", "脫水徵象", "腹部緊繃或疼痛"]
    },
    pathophysiology: "難產分為母體性和胎兒性。母體性難產中，原發性子宮遲緩（primary uterine inertia）為子宮肌層無法產生足夠有效收縮，可能因低血鈣、子宮過度擴張、年齡或品種因素。繼發性子宮遲緩因長時間阻塞性難產導致子宮肌疲勞。產道阻塞型難產可因骨盆狹窄、陰道狹窄、軟組織腫塊或先前骨折所致。胎兒性難產因胎位異常（橫位、頭部偏斜、後肢屈曲）或胎兒絕對過大（單胎妊娠）、胎兒畸形（水腦症）所致。胎兒窘迫時心率降至<160 bpm提示需緊急介入。",
    diagnosis: {
      overview: "病史和理學檢查為主，影像學評估胎兒大小、數量和位置",
      differentials: ["正常分娩延遲", "假性懷孕", "子宮扭轉", "子宮破裂"],
      initialDB: ["陰道指診（評估產道和胎兒位置）", "腹部X光（胎兒數量、大小、位置）", "腹部超音波（胎兒心率評估）"],
      advanced: ["血液生化（Ca²⁺、血糖、電解質）", "陰道細胞學（確認預產期）", "超音波胎兒心率持續監測"]
    },
    treatment: {
      overview: "醫療管理適用於非阻塞性難產；手術（剖腹產）適用於醫療失敗或阻塞性難產",
      acute: ["醫療催產：Oxytocin 0.5-2 IU IM/IV（非阻塞型）", "10% Calcium gluconate 1 mL/kg IV緩慢給予", "葡萄糖補充（低血糖時）", "剖腹產（C-section）：阻塞性難產或醫療失敗時"],
      chronic: ["術後抗生素", "哺乳支持", "新生兒照護"]
    },
    prognosis: "醫療管理催產成功率僅20-40%。及時剖腹產母犬存活率高，胎兒存活率取決於手術時機。延誤處理可導致子宮破裂、敗血症或母犬死亡。短頭種犬（如鬥牛犬）通常需計畫性剖腹產。",
    pearls: ["子宮遲緩是最常見的難產原因，不是胎位不正", "胎兒心率<160 bpm提示窘迫，需緊急介入", "阻塞性難產禁用Oxytocin（可致子宮破裂）", "綠色陰道分泌物代表胎盤分離，限時娩出"],
    diagnosticAlgorithm: {
      title: "難產 診斷流程",
      steps: [
        { step: 1, action: "病史和理學檢查", details: "評估分娩進程和母體狀態", findings: ["陣痛持續時間", "胎兒間隔", "陰道分泌物性質"] },
        { step: 2, action: "陰道指診", details: "評估產道和胎兒位置", findings: ["子宮頸開放度", "胎兒呈示部", "產道阻塞"] },
        { step: 3, action: "影像學檢查", details: "X光和超音波評估", findings: ["胎兒數量和大小", "胎兒心率", "骨盆產道比例"] },
        { step: 4, action: "治療決策", details: "醫療催產 vs 剖腹產", findings: ["非阻塞→嘗試醫療催產", "阻塞或胎兒窘迫→剖腹產"] }
      ]
    },
    monitoring: ["分娩進程", "胎兒心率", "母體生命徵象", "術後恢復和泌乳"],
    reference: "Merck Veterinary Manual — Dystocia in Small Animals; Cornell CVM; dvm360 — Managing Dystocia; Clinician's Brief"
  },

  "eclampsia": {
    zh: "產褥癇",
    en: "Eclampsia",
    definition: "產褥癇（又稱產後低血鈣症或泌乳搐搦）是哺乳期母犬貓因血鈣急性降低（<7 mg/dL）導致的危及生命的代謝急症。通常發生在產後1-4週泌乳高峰期，小型犬最常見。表現為肌肉震顫、僵硬、抽搐，可進展為高熱和死亡。",
    synonyms: ["產後低血鈣症", "泌乳搐搦", "Puerperal Tetany", "Milk Fever"],
    epidemiology: {
      species: "犬較常見，貓少見",
      age: "繁殖年齡哺乳中母犬",
      sex: "僅哺乳期母犬貓",
      riskFactors: ["小型犬種（吉娃娃、博美、玩具貴賓、迷你品犬）", "初產母犬", "窩仔數多", "營養不良", "妊娠期不當鈣補充", "產後1-4週"]
    },
    clinicalPresentation: {
      history: ["正在哺乳中的母犬", "初期：躁動不安、氣喘", "進行性肌肉震顫和僵硬", "步態不穩", "抽搐發作"],
      physicalExam: ["肌肉震顫和抽搐", "全身肌肉僵硬（角弓反張）", "體溫升高（>40.5°C，因肌肉活動）", "心搏過速", "瞳孔散大", "黏膜蒼白"]
    },
    pathophysiology: "產褥癇的根本原因為泌乳期鈣質大量流入乳汁，超過腸道吸收和骨骼動員的代償能力。小型犬體內鈣儲備相對較少，大窩仔泌乳需求更高。妊娠期過度補鈣反而抑制副甲狀腺激素（PTH）分泌和維生素D活化，降低泌乳期的鈣動員能力。當血清鈣<7 mg/dL時，神經肌肉興奮性異常增加：細胞外鈣降低使鈉通道閾值降低，神經和肌肉細胞更容易去極化，導致自發性肌肉收縮（搐搦）和震顫。持續性肌肉活動產生大量熱能，導致危及生命的高熱（>41°C）。",
    diagnosis: {
      overview: "臨床症狀+哺乳史即可高度懷疑，血清鈣確認",
      differentials: ["癲癇", "中毒（甲基黃嘌呤、有機磷）", "低血糖", "腦炎"],
      initialDB: ["血清總鈣和離子鈣（<7 mg/dL確診）", "血糖（排除低血糖）", "體溫監測"],
      advanced: ["電解質全套", "心電圖（低鈣相關心律不整）", "甲狀旁腺激素"]
    },
    treatment: {
      overview: "靜脈緩慢注射鈣劑為急救核心，同時降溫和止痙",
      acute: ["10% Calcium gluconate 0.5-1.5 mL/kg IV緩慢給予（10-20分鐘）", "心電圖監測（鈣給予期間）", "體溫>40°C：積極降溫", "Diazepam 0.5 mg/kg IV（抽搐控制）"],
      chronic: ["幼仔立即離乳或補充人工奶", "口服鈣補充：Calcium carbonate 25-50 mg/kg/day", "維生素D補充促進鈣吸收", "24-72小時內可逐漸恢復部分哺乳（監測下）"]
    },
    prognosis: "及時靜脈補鈣後15-20分鐘內即可見明顯改善。預後極佳如果及早治療。延遲治療可因高熱（>41.5°C）導致腦損傷或死亡。復發率高，需持續口服鈣補充至離乳。妊娠期避免過量補鈣可降低風險。",
    pearls: ["產後1-4週哺乳小型犬出現震顫→高度懷疑產褥癇", "妊娠期過度補鈣反而增加產褥癇風險", "IV鈣劑必須緩慢給予並監測心電圖", "嚴重者需立即離乳，後續可逐漸恢復部分哺乳"],
    diagnosticAlgorithm: {
      title: "產褥癇 診斷流程",
      steps: [
        { step: 1, action: "臨床識別", details: "哺乳母犬出現震顫/抽搐", findings: ["哺乳期1-4週", "小型犬", "肌肉震顫→抽搐"] },
        { step: 2, action: "急診血液檢查", details: "確認低血鈣", findings: ["總鈣<7 mg/dL", "離子鈣降低", "血糖正常或低"] },
        { step: 3, action: "緊急治療", details: "IV鈣劑+心電圖監測", findings: ["治療性診斷：IV鈣後快速改善", "體溫監測"] },
        { step: 4, action: "後續管理", details: "離乳+口服鈣補充", findings: ["幼仔管理", "口服鈣劑量調整", "復發預防"] }
      ]
    },
    monitoring: ["血清鈣濃度追蹤", "體溫監測", "幼仔營養狀況", "母犬神經肌肉狀態"],
    reference: "Merck Veterinary Manual — Eclampsia; VCA Animal Hospitals; Veterinary Partner — VIN; CriticalCareDVM"
  },

  "metritis": {
    zh: "子宮炎",
    en: "Metritis",
    definition: "子宮炎是子宮內膜和肌層的急性細菌感染，通常發生在分娩後1-7天內。常見誘因包括難產、助產操作污染、胎兒或胎盤滯留。主要致病菌為E. coli。如不及時治療可進展為敗血症和毒血症，危及生命。",
    synonyms: ["產後子宮炎", "Postpartum Metritis"],
    epidemiology: {
      species: "犬貓皆可",
      age: "繁殖年齡產後母犬貓",
      sex: "僅產後母犬貓",
      riskFactors: ["難產或助產操作", "胎兒或胎盤滯留", "剖腹產", "陰道撕裂傷", "免疫力低下"]
    },
    clinicalPresentation: {
      history: ["產後1-7天出現症狀", "惡臭陰道分泌物", "發燒", "食慾下降", "母性行為減弱", "泌乳量減少"],
      physicalExam: ["惡臭的血膿性或出血性陰道分泌物", "發燒（>39.5°C）", "脫水", "腹部觸診子宮增大和疼痛", "黏膜充血或蒼白", "心搏過速"]
    },
    pathophysiology: "產後子宮頸開放，加上分娩創傷和殘留的惡露提供細菌生長基質。E. coli是最常見致病菌，其他包括鏈球菌、葡萄球菌和厭氧菌。細菌在子宮壁和腔內繁殖，釋放內毒素（LPS）導致全身性發炎反應。子宮內膜和肌層的感染導致局部化膿和壞死，同時細菌和毒素經由開放的子宮血管和淋巴管進入全身循環，引起毒血症和敗血症。嗜中性球趨化至子宮造成大量膿性分泌物。如合併胎兒或胎盤滯留，壞死組織提供更豐富的細菌培養基。",
    diagnosis: {
      overview: "臨床症狀+產後病史+陰道分泌物特徵即可初步診斷",
      differentials: ["正常產後惡露", "子宮蓄膿", "陰道炎", "子宮破裂"],
      initialDB: ["陰道分泌物細胞學和培養", "CBC（嗜中性球增多伴左移）", "生化（脫水和器官功能）", "腹部超音波（子宮增大、液體積聚）"],
      advanced: ["腹部X光（排除滯留胎兒）", "凝血功能（排除DIC）", "血液培養（懷疑敗血症時）"]
    },
    treatment: {
      overview: "廣效抗生素+子宮排空為治療核心，嚴重者需OHE",
      acute: ["廣效抗生素（Amoxicillin-clavulanate或頭孢菌素類）", "靜脈輸液抗休克", "PGF2α 0.25 mg/kg SC SID×5天（促進子宮排空）", "嚴重者或不留種者：緊急OHE"],
      chronic: ["根據培養藥敏調整抗生素", "營養支持", "幼仔管理（分泌物有毒性時可能需離乳）"]
    },
    prognosis: "及時抗生素和支持治療下多數母犬貓反應良好。延誤治療可進展為敗血症，預後下降。OHE是最確定的治療方法（不留種者）。保守治療成功者，未來繁殖能力可能受損。",
    pearls: ["產後1-7天的惡臭陰道分泌物=高度懷疑子宮炎", "區分正常惡露（紅棕色、量少、無臭）和子宮炎分泌物（膿性、惡臭）", "必須排除滯留胎兒或胎盤（X光或超音波）", "PGF2α可促進子宮排空但有副作用（嘔吐、腹瀉、流涎）"],
    diagnosticAlgorithm: {
      title: "子宮炎 診斷流程",
      steps: [
        { step: 1, action: "病史評估", details: "產後時間和分娩過程", findings: ["產後1-7天", "難產或助產史", "惡臭陰道分泌物"] },
        { step: 2, action: "理學+實驗室", details: "全身評估和感染指標", findings: ["發燒", "嗜中性球增多", "子宮觸診腫大疼痛"] },
        { step: 3, action: "影像學", details: "超音波和X光", findings: ["子宮液體積聚", "排除滯留胎兒", "子宮壁增厚"] },
        { step: 4, action: "培養+治療", details: "分泌物培養+經驗性抗生素", findings: ["E. coli最常見", "培養藥敏指導用藥"] }
      ]
    },
    monitoring: ["體溫追蹤", "陰道分泌物量和性質", "CBC追蹤（感染控制）", "幼仔健康和營養"],
    reference: "Merck Veterinary Manual — Metritis in Small Animals; VetsCraft; wagwalking.com"
  },

  "vaginitis": {
    zh: "陰道炎",
    en: "Vaginitis",
    definition: "陰道炎是陰道或前庭的炎症反應，分為幼年型（前青春期）和成犬型。幼年型陰道炎多於第一次發情後自行緩解，為良性過程。成犬型陰道炎通常有潛在誘因如解剖異常、尿失禁、異物或腫瘤。犬較常見，貓少見。",
    synonyms: ["Vaginitis", "陰道前庭炎"],
    epidemiology: {
      species: "犬為主，貓少見",
      age: "幼年型：<1歲未發情前；成犬型：任何年齡",
      sex: "僅母犬貓",
      riskFactors: ["未絕育幼犬（幼年型）", "已絕育母犬（成犬型較常見）", "陰門內陷（recessed vulva）", "尿失禁", "陰道狹窄或中隔", "異物"]
    },
    clinicalPresentation: {
      history: ["陰道分泌物（黏液性至黏液膿性）", "頻繁舔舐外陰部", "頻尿或排尿困難", "幼年型通常症狀輕微"],
      physicalExam: ["陰門周圍黏液性或膿性分泌物", "陰門或前庭黏膜充血", "陰門內陷（肥胖犬常見）", "無全身症狀（一般無發燒）"]
    },
    pathophysiology: "幼年型陰道炎發生於低雌激素環境中（未發情前），陰道上皮薄且缺乏角化保護，局部免疫防禦不足，正常陰道菌叢失衡導致輕度炎症。第一次發情時雌激素使陰道上皮增厚和角化，恢復局部防禦機制，多數可自行緩解。成犬型陰道炎通常有結構或功能異常作為誘因：陰門內陷導致尿液和糞便污染陰道；陰道狹窄或中隔阻礙分泌物排出；尿失禁持續刺激陰道黏膜；腫瘤或異物引起局部炎症。細菌培養常見混合菌叢，為繼發性而非原因。",
    diagnosis: {
      overview: "理學檢查+分泌物細胞學為基礎，需排除潛在解剖異常",
      differentials: ["子宮蓄膿（未絕育犬）", "子宮炎", "泌尿道感染", "陰道腫瘤", "發情期正常分泌物"],
      initialDB: ["陰道分泌物細胞學", "尿液分析和培養", "陰道指診（排除狹窄、腫塊、異物）"],
      advanced: ["陰道鏡檢查", "陰道培養和藥敏", "腹部超音波（排除子宮疾病）", "陰道對比攝影（排除解剖異常）"]
    },
    treatment: {
      overview: "幼年型多自行緩解；成犬型需治療潛在病因",
      acute: ["局部清潔（溫水沖洗）", "有症狀的細菌性陰道炎：Amoxicillin-clavulanate口服2-3週"],
      chronic: ["幼年型：等待第一次發情後評估（多數自行緩解）", "陰門內陷：外陰成形術（episioplasty）", "陰道狹窄：手術矯正", "尿失禁：藥物治療（phenylpropanolamine）"]
    },
    prognosis: "幼年型陰道炎預後極佳，多數在第一次發情後自行緩解。成犬型陰道炎預後取決於潛在病因的可治療性。抗生素治療2-3週通常可緩解症狀。需注意幼年犬不宜在陰道炎未緩解前絕育。",
    pearls: ["幼年型陰道炎不需治療，等待第一次發情", "術前檢查發現陰道炎→推遲絕育至緩解或發情後", "陰門內陷是成犬型陰道炎的常見潛在原因", "Amoxicillin-clavulanate對91-100%常見致病菌有效"],
    diagnosticAlgorithm: {
      title: "陰道炎 診斷流程",
      steps: [
        { step: 1, action: "年齡和病史分型", details: "區分幼年型和成犬型", findings: ["<1歲未發情→幼年型", ">1歲或已絕育→成犬型"] },
        { step: 2, action: "分泌物評估", details: "細胞學和培養", findings: ["嗜中性球浸潤", "混合菌叢", "排除腫瘤細胞"] },
        { step: 3, action: "解剖學評估", details: "指診+陰道鏡", findings: ["陰門內陷", "陰道狹窄", "異物或腫塊"] },
        { step: 4, action: "排除其他疾病", details: "尿液分析+超音波", findings: ["排除UTI", "排除子宮蓄膿", "排除腫瘤"] }
      ]
    },
    monitoring: ["分泌物量和性質", "發情週期（幼年型）", "潛在病因治療反應", "尿液分析追蹤"],
    reference: "VCA Animal Hospitals — Vaginitis in Dogs; Merck Veterinary Manual; dvm360; PetMD"
  },

  "paraphimosis": {
    zh: "包皮嵌頓",
    en: "Paraphimosis",
    definition: "包皮嵌頓是陰莖無法縮回包皮鞘內的緊急狀態。暴露的陰莖黏膜迅速乾燥、腫脹，進一步壓迫阻礙靜脈回流和淋巴引流，形成惡性循環。若30-60分鐘內未復位，可導致組織缺血壞死，嚴重者需陰莖截除。",
    synonyms: ["陰莖嵌頓", "Penile Entrapment"],
    epidemiology: {
      species: "犬為主，貓極罕見",
      age: "任何年齡公犬",
      sex: "僅公犬",
      riskFactors: ["交配後", "包皮開口過小", "包皮周圍毛髮纏繞", "陰莖腫瘤或異物", "神經系統疾病影響陰莖回縮", "外傷"]
    },
    clinicalPresentation: {
      history: ["陰莖持續外露無法縮回", "交配後或興奮後發生", "頻繁舔舐陰莖", "排尿困難"],
      physicalExam: ["陰莖外露腫脹充血", "陰莖黏膜乾燥或發紺", "觸診疼痛", "包皮環緊縮", "嚴重者陰莖組織壞死變色"]
    },
    pathophysiology: "正常射精或興奮後陰莖海綿體充血，使陰莖從包皮中突出。正常情況下海綿體血液排空後陰莖縮回包皮鞘。包皮嵌頓時，包皮開口（或環繞的毛髮、狹窄環）作為縮窄帶阻止陰莖回縮。暴露的陰莖黏膜迅速失去濕潤（正常由包皮液保護），組織腫脹增加。靜脈和淋巴回流受阻使腫脹進一步加劇，動脈血流雖可進入但無法回流，形成組織充血水腫的惡性循環。持續>2小時可導致組織缺血，>24小時可發生不可逆壞死。尿道腫脹可阻塞排尿。",
    diagnosis: {
      overview: "視診即可確診，需評估組織活力和尋找誘因",
      differentials: ["陰莖異常勃起（priapism）", "陰莖骨折", "陰莖腫瘤", "包皮炎"],
      initialDB: ["陰莖和包皮視診", "評估組織顏色和活力", "檢查環繞毛髮或異物"],
      advanced: ["超音波（排除陰莖腫瘤）", "尿道造影（排除尿道阻塞）"]
    },
    treatment: {
      overview: "緊急復位為首要目標，嚴重組織壞死需截除",
      acute: ["清潔和潤滑暴露的陰莖", "冷敷減少腫脹", "先推包皮近端再引導陰莖回縮", "Acepromazine 0.005-0.03 mg/kg（鎮靜+輕度降壓助於復位）", "嚴重腫脹：高張糖液紗布包裹消腫"],
      chronic: ["復發者：包皮開口擴大術", "環繞毛髮：定期修剪包皮周圍毛髮", "壞死組織：部分或全部陰莖截除", "腫瘤誘發：腫瘤切除"]
    },
    prognosis: "快速復位（<30-60分鐘）預後極佳。組織損傷輕微者完全恢復。嚴重壞死需陰莖截除但犬仍可正常排尿（保留尿道造口術）。復發性包皮嵌頓需手術矯正潛在原因。",
    pearls: [">30-60分鐘未復位即為急診", "Acepromazine是首選鎮靜劑（α-阻斷降壓有利復位）", "復位前先潤滑和消腫，不要強行推回", "復發者需檢查包皮開口是否過小"],
    diagnosticAlgorithm: {
      title: "包皮嵌頓 診斷流程",
      steps: [
        { step: 1, action: "視診確認", details: "陰莖外露無法縮回", findings: ["陰莖腫脹充血", "黏膜乾燥", "包皮環緊縮"] },
        { step: 2, action: "組織活力評估", details: "評估缺血程度", findings: ["粉紅色→活力佳", "發紺→缺血", "黑色→壞死"] },
        { step: 3, action: "誘因搜尋", details: "檢查毛髮纏繞、異物、腫塊", findings: ["環繞毛髮", "包皮狹窄", "腫瘤"] },
        { step: 4, action: "緊急復位", details: "潤滑+消腫+復位", findings: ["成功復位", "需手術介入"] }
      ]
    },
    monitoring: ["復位後陰莖組織恢復", "排尿功能", "復發監測", "包皮周圍衛生"],
    reference: "Merck Veterinary Manual — Paraphimosis; PetMD; MSPCA-Angell; Veterinary Partner — VIN"
  },

  "orchitis-epididymitis": {
    zh: "睪丸副睪炎",
    en: "Orchitis-Epididymitis",
    definition: "睪丸炎（orchitis）和副睪炎（epididymitis）為睪丸和副睪的炎症，常同時發生。多為細菌感染所致，也可由布氏桿菌（Brucella canis）、真菌、病毒或免疫媒介機制引起。急性型表現為局部疼痛腫脹和全身症狀；慢性型可導致不可逆的生殖功能喪失。",
    synonyms: ["睪丸炎", "副睪炎", "Epididymo-orchitis"],
    epidemiology: {
      species: "犬為主，貓罕見",
      age: "成年未絕育公犬",
      sex: "僅公犬",
      riskFactors: ["未絕育", "接觸受感染的母犬（布氏桿菌）", "泌尿道感染", "攝護腺炎", "外傷（咬傷、穿刺傷）", "免疫低下"]
    },
    clinicalPresentation: {
      history: ["陰囊腫脹疼痛", "跛行或行走不願（疼痛）", "發燒", "食慾下降", "舔舐陰囊", "不孕"],
      physicalExam: ["單側或雙側陰囊腫脹", "觸診疼痛明顯", "陰囊皮膚紅腫發熱", "發燒", "慢性型：睪丸萎縮硬化", "可能有陰囊皮膚潰瘍或廔管"]
    },
    pathophysiology: "感染性睪丸副睪炎中，細菌可經由血行、尿道逆行或直接穿透（外傷）到達睪丸和副睪。E. coli、Brucella canis、葡萄球菌和鏈球菌為常見致病菌。感染引起急性炎症反應，睪丸間質水腫、嗜中性球浸潤、曲細精管損傷。睪丸溫度因炎症升高（正常應低於體溫2-3°C），熱損傷（thermal insult）破壞生精上皮。受損的精原細胞可暴露血睪屏障（blood-testis barrier）內的抗原，觸發免疫媒介性睪丸炎，即使感染控制後仍持續自體免疫攻擊。慢性期纖維化和曲細精管退化導致不可逆不孕。",
    diagnosis: {
      overview: "觸診和超音波評估，布氏桿菌篩檢為必須",
      differentials: ["陰囊疝氣", "睪丸腫瘤", "睪丸扭轉", "陰囊水腫"],
      initialDB: ["陰囊和睪丸觸診", "陰囊超音波", "布氏桿菌血清學（RSAT或ME-RSAT）", "CBC（感染指標）"],
      advanced: ["細針穿刺細胞學", "精液分析和培養", "組織活檢（排除腫瘤）", "布氏桿菌PCR或血液培養"]
    },
    treatment: {
      overview: "不留種者以去勢為首選；留種者抗生素治療但生殖功能恢復預後謹慎",
      acute: ["廣效抗生素（根據培養調整）", "NSAIDs止痛消炎", "冷敷減腫", "布氏桿菌陽性：Doxycycline+Enrofloxacin長期療程"],
      chronic: ["去勢術（castration）— 首選治療", "布氏桿菌陽性犬：視為終身感染者，繁殖犬應退役", "抗生素療程完成後追蹤培養"]
    },
    prognosis: "去勢術後預後良好。保守治療的生殖功能恢復預後謹慎，即使感染控制後熱損傷和免疫媒介性損傷可導致永久不孕。布氏桿菌性睪丸炎預後較差，為人畜共通傳染病需通報。慢性型睪丸萎縮為不可逆。",
    pearls: ["所有睪丸副睪炎犬必須做布氏桿菌篩檢", "布氏桿菌為人畜共通傳染病，陽性犬需隔離", "即使感染治癒，免疫媒介性持續損傷仍可導致不孕", "不留種者直接去勢是最佳治療"],
    diagnosticAlgorithm: {
      title: "睪丸副睪炎 診斷流程",
      steps: [
        { step: 1, action: "理學檢查", details: "陰囊觸診和全身評估", findings: ["陰囊腫脹疼痛", "發燒", "單側或雙側"] },
        { step: 2, action: "影像和實驗室", details: "超音波+CBC+布氏桿菌", findings: ["超音波：睪丸/副睪腫脹", "WBC升高", "布氏桿菌血清學"] },
        { step: 3, action: "病原學確認", details: "培養和藥敏", findings: ["精液或穿刺液培養", "布氏桿菌PCR"] },
        { step: 4, action: "治療決策", details: "去勢 vs 保守治療", findings: ["不留種→去勢", "留種→抗生素+追蹤"] }
      ]
    },
    monitoring: ["布氏桿菌追蹤血清學", "精液品質評估（留種者）", "對側睪丸狀態", "疼痛和腫脹消退"],
    reference: "Merck Veterinary Manual — Orchitis and Epididymitis; PMC — Brucella canis; wagwalking.com"
  },

  "uterine-torsion": {
    zh: "子宮扭轉",
    en: "Uterine Torsion",
    definition: "子宮扭轉是子宮沿其長軸旋轉的罕見但嚴重的生殖急症。多發生於妊娠晚期或合併子宮蓄膿時。扭轉阻斷子宮血供，導致組織缺血壞死，可迅速進展為休克和敗血症。犬貓均罕見，但一旦發生需緊急手術。",
    synonyms: ["子宮旋轉", "Uterine Rotation"],
    epidemiology: {
      species: "犬貓皆罕見",
      age: "妊娠中後期或中老年（合併子宮病變時）",
      sex: "僅母犬貓",
      riskFactors: ["妊娠（特別是晚期）", "子宮蓄膿", "子宮積液", "子宮腫瘤", "腹腔空間大（大型犬）"]
    },
    clinicalPresentation: {
      history: ["急性腹痛", "嘔吐", "不安和躁動", "食慾廢絕", "陰道出血或異常分泌物", "妊娠犬突然停止分娩進程"],
      physicalExam: ["腹部觸診疼痛", "腹部膨脹", "脫水", "心搏過速", "黏膜蒼白或充血", "體溫升高或降低（休克）"]
    },
    pathophysiology: "子宮扭轉發生時子宮體或子宮角沿長軸旋轉，扭轉程度從90度到360度以上不等。扭轉首先阻斷靜脈回流（因靜脈壁薄、壓力低），導致子宮充血腫脹。隨扭轉程度加重，動脈供應亦被阻斷，子宮組織缺血壞死。妊娠子宮因重量和活動度增加，較易發生扭轉。子宮蓄膿的膨大子宮同樣增加扭轉風險。壞死的子宮壁通透性增加，細菌和毒素進入腹腔引起腹膜炎，進入血循環引起敗血症和休克。",
    diagnosis: {
      overview: "臨床症狀提示急腹症，確診通常需手術探查",
      differentials: ["難產", "子宮破裂", "卵巢扭轉", "胃擴張扭轉", "腸梗阻"],
      initialDB: ["腹部超音波（子宮異常腫大、血流異常）", "腹部X光", "CBC和生化（炎症和器官功能）"],
      advanced: ["都卜勒超音波（評估子宮血流）", "腹腔穿刺（排除腹膜炎）", "凝血功能（排除DIC）"]
    },
    treatment: {
      overview: "緊急手術為唯一治療方法",
      acute: ["休克矯正：大量IV輸液", "止痛", "緊急開腹探查", "妊娠犬：剖腹產+OHE", "非妊娠犬：OHE"],
      chronic: ["術後抗生素", "術後止痛和營養支持", "腹膜炎者需腹腔灌洗"]
    },
    prognosis: "及時手術糾正休克後預後良好。延誤手術導致子宮壞死、腹膜炎和DIC時預後差。妊娠犬的胎兒存活率取決於缺血時間。術後多建議OHE以防復發。",
    pearls: ["子宮扭轉是罕見但致命的急症", "妊娠晚期急性腹痛+分娩停滯→考慮子宮扭轉", "確診通常需手術探查", "及時手術是改善預後的關鍵"],
    diagnosticAlgorithm: {
      title: "子宮扭轉 診斷流程",
      steps: [
        { step: 1, action: "急性腹痛評估", details: "理學檢查和病史", findings: ["急性腹痛", "妊娠或子宮病變史", "休克徵象"] },
        { step: 2, action: "影像學", details: "超音波和X光", findings: ["子宮異常腫大", "子宮血流異常", "腹腔液體"] },
        { step: 3, action: "穩定和準備手術", details: "休克矯正+手術準備", findings: ["IV輸液抗休克", "血液檢查", "凝血功能"] },
        { step: 4, action: "手術探查", details: "開腹確診+治療", findings: ["子宮扭轉確認", "組織活力評估", "OHE±剖腹產"] }
      ]
    },
    monitoring: ["術後生命徵象", "腹膜炎徵象", "傷口癒合", "DIC監測"],
    reference: "Cornell CVM; Merck Veterinary Manual — Dystocia; Frontiers in Vet Science — Uterine Torsion"
  },

  "mammary-gland-hyperplasia": {
    zh: "乳腺增生",
    en: "Mammary Gland Hyperplasia",
    definition: "乳腺纖維腺瘤樣增生（FAH）是一種非腫瘤性、黃體素誘發的乳腺快速增殖性疾病，以乳腺間質和管上皮的異常增生為特徵。主要見於年輕未絕育母貓（第一次發情週期後）或接受外源性黃體素的貓。佔貓乳腺腫塊的13-20%。",
    synonyms: ["貓乳腺纖維腺瘤樣增生", "FAH", "Feline Fibroadenomatous Change"],
    epidemiology: {
      species: "貓為主，犬極罕見",
      age: "年輕貓（第一次發情週期後）",
      sex: "母貓為主；使用外源性黃體素的公貓或絕育貓亦可發生",
      riskFactors: ["未絕育年輕母貓", "第一次發情週期", "假懷孕", "妊娠", "外源性黃體素治療（megestrol acetate）"]
    },
    clinicalPresentation: {
      history: ["一個或多個乳腺快速腫大", "最近的發情或妊娠", "使用黃體素類藥物史", "皮膚可能潰瘍"],
      physicalExam: ["一個或多個乳腺顯著腫大（可達數公分）", "質地堅實但非硬性", "可能對稱性多腺體受累", "覆蓋皮膚緊繃、可能潰瘍", "無疼痛（通常）", "無全身症狀"]
    },
    pathophysiology: "FAH是乳腺對內源性或外源性黃體素的過度反應。正常黃體期黃體素刺激乳腺發育，但FAH中此反應被異常放大。組織學上表現為乳腺小葉內管上皮增殖和小葉間間質大量增生，形成纖維腺瘤樣腫塊。FAH組織同時表達黃體素受體和雌激素受體，提示兩種激素均參與發病。年輕母貓第一次黃體期黃體素急劇上升為常見觸發因素。假懷孕和妊娠同樣提供持續高黃體素環境。外源性黃體素（如megestrol acetate用於行為控制或皮膚病）也可誘發FAH。重要的是FAH為非腫瘤性增生，需與乳腺癌鑑別。",
    diagnosis: {
      overview: "組織病理學確認非腫瘤性質，需與乳腺癌鑑別",
      differentials: ["乳腺腫瘤（腺癌）", "乳腺炎", "乳腺囊腫", "淋巴結腫大"],
      initialDB: ["理學檢查（多腺體對稱性腫大提示FAH）", "細針穿刺細胞學", "胸部X光（排除乳腺癌轉移）"],
      advanced: ["組織切片活檢（確診：纖維上皮增生，無異型性）", "黃體素受體免疫組織化學染色"]
    },
    treatment: {
      overview: "抗黃體素藥物（aglepristone）為首選，或OHE移除激素來源",
      acute: ["Aglepristone（抗黃體素）10 mg/kg SC Day 1, 2, 7", "首次注射後6天即可見腫塊縮小", "完全緩解通常4週內"],
      chronic: ["OHE（未絕育者）移除內源性黃體素來源", "停用外源性黃體素", "嚴重皮膚潰瘍：傷口護理", "乳腺切除術（僅在壞死或aglepristone無效時）"]
    },
    prognosis: "FAH預後極佳。Aglepristone治療後多數在4週內完全緩解。OHE可根治性預防復發。停用外源性黃體素後亦可自行消退。重要的是須與乳腺癌鑑別，後者預後截然不同。",
    pearls: ["年輕母貓多腺體快速對稱腫大→高度懷疑FAH而非腫瘤", "Aglepristone是特異性治療，6天內即見效", "必須做組織學排除乳腺癌", "外源性黃體素（megestrol acetate）可在公貓引起FAH"],
    diagnosticAlgorithm: {
      title: "乳腺增生 診斷流程",
      steps: [
        { step: 1, action: "臨床評估", details: "年齡、性別、激素暴露史", findings: ["年輕未絕育母貓", "多腺體快速腫大", "近期發情或黃體素用藥"] },
        { step: 2, action: "細胞學篩檢", details: "細針穿刺", findings: ["纖維上皮增生", "無異型細胞", "排除腫瘤"] },
        { step: 3, action: "影像排除轉移", details: "胸部X光", findings: ["無肺轉移→支持良性診斷", "有轉移→重新考慮惡性腫瘤"] },
        { step: 4, action: "組織學確診", details: "切片活檢", findings: ["纖維腺瘤樣增生確認", "無惡性特徵"] }
      ]
    },
    monitoring: ["腫塊大小追蹤（治療後）", "皮膚完整性", "復發監測", "黃體素暴露避免"],
    reference: "UC Davis — Feline Mammary Hyperplasia; PMC — Aglepristone treatment; Texas A&M TVMDL; JVIM"
  },

  "galactostasis": {
    zh: "乳汁鬱積",
    en: "Galactostasis",
    definition: "乳汁鬱積是乳汁在乳腺內滯留導致的非感染性乳腺炎。常見於假懷孕動物或突然斷奶時。乳腺因殘留乳汁充脹而腫脹、疼痛，但無細菌感染。若不處理可能繼發為感染性乳腺炎。",
    synonyms: ["乳汁滯留", "非感染性乳腺炎", "Milk Stasis"],
    epidemiology: {
      species: "犬較常見，貓偶見",
      age: "繁殖年齡或假懷孕母犬",
      sex: "僅母犬貓",
      riskFactors: ["假懷孕", "突然斷奶（非漸進式）", "乳腺排空不足", "窩仔數少（部分乳腺未被吸吮）"]
    },
    clinicalPresentation: {
      history: ["乳腺腫脹硬實", "近期斷奶或假懷孕", "不適或疼痛表現", "舔舐乳腺"],
      physicalExam: ["一個或多個乳腺腫脹充盈", "觸診溫暖但無明顯發熱", "輕度至中度疼痛", "乳汁可被擠出（正常外觀）", "無全身症狀（不發燒）"]
    },
    pathophysiology: "乳汁鬱積發生在乳汁持續產生但未被有效排出的情況下。假懷孕時泌乳素升高刺激泌乳，但無幼仔吸吮。突然斷奶時乳汁仍在產生但排出停止。滯留的乳汁使乳腺腺泡和乳管膨脹，壓力增加導致局部組織水腫和輕度炎症反應（非感染性炎症）。乳汁中的脂肪和蛋白質分解可進一步刺激炎症。若乳頭有微小創傷或細菌逆行感染，非感染性乳汁鬱積可進展為感染性（化膿性）乳腺炎，此時需要抗生素治療。",
    diagnosis: {
      overview: "臨床病史和理學檢查即可診斷，需排除感染性乳腺炎",
      differentials: ["感染性乳腺炎", "乳腺腫瘤", "乳腺增生（FAH）", "乳腺膿瘍"],
      initialDB: ["乳腺觸診和乳汁外觀評估", "乳汁細胞學（排除感染：無大量嗜中性球）", "體溫監測"],
      advanced: ["乳汁培養（排除細菌感染）", "乳腺超音波（排除膿瘍或腫塊）"]
    },
    treatment: {
      overview: "減少泌乳刺激+物理療法為主，無需抗生素",
      acute: ["冷敷或溫敷乳腺（減輕不適）", "適度擠出滯留乳汁（不要完全排空以免刺激再泌乳）", "止痛：NSAID（如meloxicam）"],
      chronic: ["漸進式斷奶（減少餵食次數和量）", "減少母犬食物和水的攝取量（降低泌乳）", "假懷孕者：Cabergoline 5 μg/kg/day口服（抑制泌乳素）", "伊麗莎白圈（防止自我吸吮刺激泌乳）"]
    },
    prognosis: "乳汁鬱積預後極佳。多數在減少泌乳刺激後數天至1-2週緩解。預防重點在漸進式斷奶。假懷孕引起者可用Cabergoline有效控制。需監測是否繼發感染。",
    pearls: ["乳汁鬱積 vs 感染性乳腺炎：前者不發燒、乳汁正常外觀、無全身症狀", "不要完全排空乳腺（會反射性增加泌乳）", "漸進式斷奶是最佳預防方法", "假懷孕是未絕育母犬乳汁鬱積的常見原因"],
    diagnosticAlgorithm: {
      title: "乳汁鬱積 診斷流程",
      steps: [
        { step: 1, action: "病史確認", details: "斷奶時間或假懷孕狀態", findings: ["近期斷奶", "假懷孕", "未哺乳但泌乳"] },
        { step: 2, action: "理學檢查", details: "乳腺評估和全身狀態", findings: ["乳腺充脹", "無發燒", "乳汁外觀正常"] },
        { step: 3, action: "排除感染", details: "乳汁細胞學和培養", findings: ["無大量嗜中性球→非感染性", "有嗜中性球/細菌→感染性乳腺炎"] },
        { step: 4, action: "治療和監測", details: "物理療法+泌乳控制", findings: ["冷/溫敷", "減少飲食量", "Cabergoline（假懷孕）"] }
      ]
    },
    monitoring: ["乳腺腫脹程度", "體溫（排除繼發感染）", "乳汁性狀", "食慾和精神狀態"],
    reference: "Merck Veterinary Manual — Mastitis in Small Animals; MSD Veterinary Manual — Periparturient Problems; VetsCraft"
  },

  "ovarian-remnant-syndrome": {
    zh: "卵巢殘留症候群",
    en: "Ovarian Remnant Syndrome",
    definition: "卵巢殘留症候群（ORS）是已進行卵巢子宮切除術（OHE）的母犬貓因殘留功能性卵巢組織而重新出現發情行為的疾病。原因包括手術未完全摘除卵巢、異位卵巢組織或卵巢組織自體移植。殘留組織持續分泌生殖激素，引起發情症狀和潛在的蓄膿風險。",
    synonyms: ["ORS", "卵巢殘餘症候群", "絕育後發情"],
    epidemiology: {
      species: "犬貓皆可，貓可能更常見（解剖因素）",
      age: "任何已絕育母犬貓",
      sex: "僅已絕育母犬貓",
      riskFactors: ["OHE手術不完全", "肥胖（手術視野受限）", "貓的卵巢韌帶較難分離", "異位卵巢組織（罕見）", "卵巢組織術中脫落自體移植"]
    },
    clinicalPresentation: {
      history: ["絕育後重新出現發情行為", "外陰腫脹和分泌物", "吸引公犬/公貓", "行為改變（躁動、親人、提臀姿勢）", "週期性出現"],
      physicalExam: ["外陰腫脹充血", "陰道分泌物", "乳腺發育", "行為表現符合發情", "無子宮可觸及（已切除）"]
    },
    pathophysiology: "ORS的根本原因為體內殘留具有功能的卵巢組織。最常見原因為OHE手術時未完全切除卵巢（特別是左側卵巢，因解剖位置較深）。貓的卵巢韌帶（proper ligament）較厚實，外科醫師有時無法完全將卵巢外翻暴露和分離。少數情況下存在異位卵巢組織（accessory ovarian tissue），或手術中卵巢碎片脫落後在腹腔內自體移植並恢復功能。殘留卵巢組織形成功能性卵泡，分泌雌激素引起發情表現。若排卵後形成黃體則分泌黃體素。長期雌激素暴露增加子宮殘端蓄膿（stump pyometra）和乳腺腫瘤風險。",
    diagnosis: {
      overview: "發情期陰道細胞學+血清黃體素或AMH確認功能性卵巢組織",
      differentials: ["外源性雌激素暴露", "腎上腺疾病", "正常的絕育後行為問題", "從未實際絕育"],
      initialDB: ["陰道細胞學（發情期角化細胞>90%確認雌激素影響）", "血清黃體素（排卵後升高）", "抗穆勒管激素（AMH）— 陽性=有卵巢組織"],
      advanced: ["腹部超音波（搜尋殘留卵巢組織）", "LH濃度（絕育犬正常升高，有卵巢者較低）", "GnRH刺激試驗"]
    },
    treatment: {
      overview: "手術探查和切除殘留卵巢組織為唯一根治方法",
      acute: ["排卵誘導後3-6週手術探查（黃體使殘留組織較易辨識）"],
      chronic: ["開腹或腹腔鏡探查雙側卵巢蒂", "切除所有殘留卵巢組織", "組織送病理確認", "術後追蹤AMH或LH確認完全切除"]
    },
    prognosis: "手術切除殘留卵巢組織後預後極佳，發情症狀完全消失。排卵誘導後3-6週手術可提高殘留組織辨識率。未治療的ORS長期有子宮殘端蓄膿和乳腺腫瘤風險。",
    pearls: ["AMH是診斷ORS最可靠的單一檢測", "排卵誘導後3-6週手術探查效果最佳（黃體可見）", "左側卵巢蒂為最常見殘留部位", "未治療ORS有蓄膿和乳腺腫瘤風險"],
    diagnosticAlgorithm: {
      title: "卵巢殘留症候群 診斷流程",
      steps: [
        { step: 1, action: "臨床懷疑", details: "絕育母犬貓重現發情", findings: ["外陰腫脹", "發情行為", "吸引公犬"] },
        { step: 2, action: "激素確認", details: "AMH和/或黃體素檢測", findings: ["AMH陽性=有卵巢組織", "黃體素升高=有黃體", "陰道細胞學=雌激素效應"] },
        { step: 3, action: "影像定位", details: "超音波搜尋殘留組織", findings: ["卵巢蒂區域腫塊", "卵泡或黃體結構"] },
        { step: 4, action: "手術切除", details: "排卵後3-6週探查", findings: ["殘留卵巢組織切除", "病理確認", "術後AMH追蹤"] }
      ]
    },
    monitoring: ["術後AMH（應轉為陰性）", "發情行為消失確認", "乳腺檢查", "子宮殘端評估"],
    reference: "Merck Veterinary Manual — ORS; Cornell CVM; PubMed — 21 cases study; UC Davis CVM"
  }
};

// batch-A4-data.js — 免疫/血液疾病 8種 structured data
module.exports = {
  "systemic-lupus-erythematosus": {
    zh: "全身性紅斑狼瘡",
    en: "Systemic Lupus Erythematosus",
    definition: "全身性紅斑狼瘡（SLE）是一種多系統自體免疫疾病，免疫系統產生針對自身細胞核成分（包括雙股DNA、RNA和蛋白質抗原）的自體抗體，形成免疫複合物沉積於多個器官，導致廣泛性組織損傷。可影響皮膚、關節、腎臟、血液系統等多個器官系統。",
    synonyms: ["SLE", "紅斑性狼瘡", "系統性紅斑狼瘡"],
    epidemiology: {
      species: "犬較常見，貓罕見",
      age: "中年犬（平均5歲），範圍廣",
      sex: "母犬略好發",
      riskFactors: ["德國牧羊犬", "喜樂蒂牧羊犬", "貴賓犬", "米格魯犬", "阿富汗獵犬", "遺傳傾向", "紫外線暴露可能觸發"]
    },
    clinicalPresentation: {
      history: ["間歇性跛行（多發性關節炎）", "皮膚病變（面部、耳朵）", "發燒反覆不退", "食慾下降體重減輕", "多飲多尿（腎臟受損時）"],
      physicalExam: ["多關節腫脹疼痛（非侵蝕性）", "皮膚潰瘍或紅斑（鼻部、耳廓、四肢）", "發燒", "淋巴結腫大", "黏膜蒼白（溶血性貧血時）", "脾臟腫大"]
    },
    pathophysiology: "SLE的病理機制涉及免疫耐受性喪失，B細胞和T細胞對自身抗原產生反應。抗核抗體（ANA）與細胞核成分結合形成免疫複合物，沉積於腎絲球基底膜、關節滑膜、血管壁和皮膚真皮-表皮交界處，活化補體系統引起第III型過敏反應。腎臟免疫複合物沉積導致膜增殖性腎絲球腎炎，是最嚴重的併發症。免疫複合物也可直接攻擊紅血球和血小板，導致免疫媒介性溶血性貧血（IMHA）和血小板減少症（ITP）。",
    diagnosis: {
      overview: "需符合多項診斷標準，ANA檢測為核心篩檢工具",
      differentials: ["圓盤狀紅斑狼瘡（DLE）", "免疫媒介性多發性關節炎", "類風濕性關節炎", "感染性多發性關節炎", "藥物反應"],
      initialDB: ["ANA檢測（敏感度97-100%）", "CBC（貧血、血小板減少）", "生化（BUN/Cr升高、白蛋白下降）", "尿液分析（蛋白尿）"],
      advanced: ["Coombs試驗（IMHA確認）", "關節液分析", "腎臟活檢（腎絲球腎炎分型）", "皮膚活檢（免疫螢光染色）", "抗dsDNA抗體"]
    },
    treatment: {
      overview: "免疫抑制治療為主，需長期管理",
      acute: ["Prednisolone 2-4 mg/kg/day（誘導劑量）", "嚴重溶血或血小板減少：輸血支持", "腎衰竭：IV輸液+支持治療"],
      chronic: ["逐漸減量Prednisolone至最低有效劑量", "Azathioprine 2 mg/kg/day（犬）或Cyclosporine 5 mg/kg q12h", "Mycophenolate mofetil（難治病例）", "避免紫外線暴露", "腎臟保護（ACE抑制劑、低蛋白飲食）"]
    },
    prognosis: "長期預後謹慎至不良。多數犬在診斷後1年內因器官損傷或治療併發症死亡。腎臟受累是最主要的預後不良因素。早期診斷和積極免疫抑制可改善預後。需終身治療和監測。",
    pearls: ["ANA陰性幾乎可排除SLE（陰性預測值>99%）", "SLE必須累及兩個以上器官系統才能確診", "腎絲球腎炎是最嚴重的併發症和主要死因", "與DLE不同，SLE累及全身多系統"],
    diagnosticAlgorithm: {
      title: "全身性紅斑狼瘡 診斷流程",
      steps: [
        { step: 1, action: "臨床懷疑", details: "多系統症狀（關節+皮膚+血液+腎臟）", findings: ["多關節炎", "皮膚病變", "發燒", "蛋白尿"] },
        { step: 2, action: "ANA篩檢", details: "抗核抗體檢測", findings: ["ANA陽性（高敏感度）", "ANA陰性→幾乎排除SLE"] },
        { step: 3, action: "器官評估", details: "評估各器官受累程度", findings: ["CBC（血液系統）", "尿液分析（腎臟）", "關節液（關節）", "皮膚活檢"] },
        { step: 4, action: "確診標準", details: "需符合≥2個器官系統受累+ANA陽性", findings: ["多系統受累確認", "排除其他自體免疫疾病"] }
      ]
    },
    monitoring: ["CBC和血小板計數（每2-4週）", "腎功能和尿蛋白定量", "免疫抑制劑藥物副作用", "ANA效價追蹤"],
    reference: "VCA Animal Hospitals — SLE in Dogs; Veterinary Partner — VIN; PubMed — 75 cases study; PMC — ACVIM consensus"
  },

  "discoid-lupus-erythematosus": {
    zh: "圓盤狀紅斑狼瘡",
    en: "Discoid Lupus Erythematosus",
    definition: "圓盤狀紅斑狼瘡（DLE）是一種僅限於皮膚的自體免疫疾病，主要影響鼻鏡（nasal planum），造成鼻部色素脫失、結痂、潰瘍。與全身性紅斑狼瘡不同，DLE不累及內臟器官，預後顯著較好。為犬最常見的自體免疫性皮膚病之一。",
    synonyms: ["DLE", "鼻部狼瘡", "皮膚型紅斑狼瘡"],
    epidemiology: {
      species: "幾乎僅見於犬，貓極罕見",
      age: "中年犬",
      sex: "無明顯性別傾向",
      riskFactors: ["德國牧羊犬", "哈士奇", "阿拉斯加雪橇犬", "喜樂蒂牧羊犬", "英國鬥牛犬", "紫外線暴露加重"]
    },
    clinicalPresentation: {
      history: ["鼻部顏色變淡或脫色", "鼻部結痂或出血", "陽光暴露後症狀加重", "夏季惡化冬季改善"],
      physicalExam: ["鼻鏡色素脫失（黑→藍灰→粉紅）", "鼻鏡正常鵝卵石紋路消失", "鼻鏡結痂、糜爛或潰瘍", "可能延伸至鼻樑、耳朵", "無全身症狀"]
    },
    pathophysiology: "DLE的發病機制與SLE類似但僅限於皮膚。自體抗體和免疫複合物沉積於表皮-真皮交界處（基底膜帶），活化補體導致基底層角質細胞損傷和液化性變性。免疫螢光染色可見基底膜帶免疫球蛋白和補體沉積（lupus band test陽性）。紫外線暴露可促進角質細胞凋亡並暴露核抗原，加重自體免疫反應。鼻鏡因缺乏被毛保護且UV暴露量大，故為最常受累部位。",
    diagnosis: {
      overview: "皮膚活檢為確診方法，需排除SLE和其他鼻部疾病",
      differentials: ["黏膜皮膚膿皮症", "天疱瘡（尋常型或落葉型）", "皮膚淋巴瘤", "鼻部鱗狀細胞癌", "自發性色素脫失（雪鼻）"],
      initialDB: ["鼻部皮膚活檢（組織病理學）", "CBC和生化（排除全身性疾病）", "ANA檢測（排除SLE）"],
      advanced: ["免疫螢光染色（lupus band test）", "尿液分析（排除腎臟受累）", "真菌培養（排除皮黴菌）"]
    },
    treatment: {
      overview: "局部治療為首選，避免紫外線暴露，嚴重者需全身免疫抑制",
      acute: ["Tacrolimus 0.1%軟膏外用BID", "或強效外用類固醇（betamethasone）"],
      chronic: ["持續外用Tacrolimus維持治療", "避免陽光暴露（特別是上午10點到下午4點）", "嚴重者：Doxycycline + Niacinamide口服", "頑固病例：低劑量Prednisolone或Hydroxychloroquine"]
    },
    prognosis: "DLE預後良好，多數犬對治療反應佳。需持續治療和避免UV暴露。本病不會轉變為全身性紅斑狼瘡。鼻部潰瘍長期未控制有極低風險轉變為鱗狀細胞癌。",
    pearls: ["DLE與SLE的關鍵區別：DLE僅累及皮膚，無全身症狀", "鼻鏡色素脫失+鵝卵石紋路消失是早期徵象", "需先做1個月抗生素療程排除黏膜皮膚膿皮症", "紫外線防護是治療成功的關鍵"],
    diagnosticAlgorithm: {
      title: "圓盤狀紅斑狼瘡 診斷流程",
      steps: [
        { step: 1, action: "臨床觀察", details: "鼻鏡病變評估", findings: ["色素脫失", "結痂或潰瘍", "夏季加重"] },
        { step: 2, action: "排除感染", details: "先做抗生素試驗排除膿皮症", findings: ["1個月抗生素無反應→非膿皮症", "有反應→黏膜皮膚膿皮症"] },
        { step: 3, action: "皮膚活檢", details: "組織病理學確認", findings: ["基底膜帶淋巴細胞浸潤", "基底層液化變性", "色素失禁"] },
        { step: 4, action: "排除SLE", details: "ANA+全身檢查", findings: ["ANA陰性", "無關節/腎臟/血液受累→確認DLE"] }
      ]
    },
    monitoring: ["鼻部病變改善程度", "紫外線防護依從性", "外用藥物副作用", "季節性變化追蹤"],
    reference: "Veterinary Partner — VIN — DLE; Veterinary Practice — Cutaneous LE; Mar Vista Animal Medical Center"
  },

  "evan-syndrome": {
    zh: "乙凡氏症候群",
    en: "Evans Syndrome",
    definition: "乙凡氏症候群是免疫媒介性溶血性貧血（IMHA）和免疫媒介性血小板減少症（ITP）同時或序貫發生的自體免疫疾病。約60%的IMHA犬會同時出現ITP。同時攻擊紅血球和血小板使病情更加嚴重，治療更具挑戰性。",
    synonyms: ["Evans Syndrome", "IMHA合併ITP"],
    epidemiology: {
      species: "犬為主，貓偶見",
      age: "中年犬（2-8歲）",
      sex: "母犬（特別是已絕育母犬）好發",
      riskFactors: ["可卡犬", "英國跳獵犬", "迷你雪納瑞", "古代牧羊犬", "貴賓犬", "近期疫苗接種或感染可能觸發"]
    },
    clinicalPresentation: {
      history: ["突然虛弱無力", "運動不耐", "食慾下降", "尿液變深色", "鼻出血或牙齦出血", "皮下瘀斑"],
      physicalExam: ["黏膜蒼白且可能黃疸", "心搏過速", "脾臟腫大", "皮膚瘀斑或紫斑", "發燒", "呼吸急促"]
    },
    pathophysiology: "乙凡氏症候群中，免疫系統同時產生抗紅血球和抗血小板的自體抗體。IMHA部分：抗體結合紅血球表面抗原，抗體包覆的紅血球被脾臟和肝臟巨噬細胞吞噬（血管外溶血），產生球形紅血球和脾腫大。嚴重時補體媒介的血管內溶血在循環中直接破壞紅血球，導致血紅素血症、血紅素尿和可能的急性腎損傷。ITP部分：抗血小板抗體導致血小板被加速破壞，骨髓代償性增加巨核細胞但無法追上破壞速度。兩者合併使患者同時面臨嚴重貧血和出血風險。",
    diagnosis: {
      overview: "CBC顯示同時貧血和血小板減少，Coombs試驗確認免疫性溶血",
      differentials: ["單獨IMHA", "單獨ITP", "DIC（瀰漫性血管內凝血）", "骨髓疾病", "藥物引起的血球減少"],
      initialDB: ["CBC（貧血+血小板減少+網狀紅血球增加）", "血液抹片（球形紅血球、自凝集）", "生化（膽紅素升高）", "尿液分析（血紅素尿、膽紅素尿）"],
      advanced: ["直接Coombs試驗", "生理食鹽水凝集試驗", "凝血功能檢查（PT/aPTT排除DIC）", "骨髓檢查（排除骨髓疾病）", "腹部超音波（脾臟評估）"]
    },
    treatment: {
      overview: "高劑量免疫抑制+支持性輸血，雙重免疫攻擊需更積極治療",
      acute: ["Prednisolone 2-4 mg/kg/day", "危及生命的貧血：輸注紅血球濃厚液", "嚴重血小板減少伴出血：人類靜脈免疫球蛋白（hIVIG）", "靜脈輸液+氧氣支持"],
      chronic: ["第二線免疫抑制劑：Cyclosporine或Mycophenolate mofetil", "Azathioprine 2 mg/kg/day（犬）", "逐漸減量類固醇（數月過程）", "抗血栓預防：低劑量Aspirin或Clopidogrel"]
    },
    prognosis: "乙凡氏症候群預後較單獨IMHA或ITP更差。死亡率約40-60%。血栓栓塞是主要死亡原因之一。對初始免疫抑制治療有反應者預後較佳。復發率高，需長期免疫抑制治療。",
    pearls: ["約60%的IMHA犬同時有ITP→應常規監測血小板計數", "自凝集試驗陽性可省略Coombs試驗", "血栓栓塞預防至關重要（肺栓塞是主要死因）", "比單獨IMHA需要更積極的免疫抑制治療"],
    diagnosticAlgorithm: {
      title: "乙凡氏症候群 診斷流程",
      steps: [
        { step: 1, action: "急性評估", details: "評估貧血和出血嚴重度", findings: ["蒼白+黃疸", "皮膚瘀斑", "心搏過速"] },
        { step: 2, action: "CBC+血液抹片", details: "確認同時貧血和血小板減少", findings: ["PCV下降+網狀紅血球增加", "血小板計數<50,000/μL", "球形紅血球"] },
        { step: 3, action: "免疫媒介確認", details: "凝集試驗和Coombs試驗", findings: ["自凝集陽性或Coombs陽性", "排除DIC（PT/aPTT正常）"] },
        { step: 4, action: "病因調查", details: "排除繼發性原因", findings: ["感染篩檢（心絲蟲、壁蝨媒介）", "腹部影像（腫瘤排除）", "藥物史評估"] }
      ]
    },
    monitoring: ["每日PCV/TS和血小板估計（住院期）", "每週CBC（穩定後）", "凝血功能監測", "免疫抑制劑副作用", "血栓徵象監測"],
    reference: "VCA Animal Hospitals — Evans Syndrome; PMC — IMHA with thrombocytopenia; Today's Veterinary Practice — IMHA"
  },

  "cold-agglutinin-disease": {
    zh: "冷凝集素病",
    en: "Cold Agglutinin Disease",
    definition: "冷凝集素病是一種罕見的自體免疫性溶血性貧血，由低溫活化型自體抗體（通常為IgM型）引起。這些冷反應性抗體在低於體溫的環境中與紅血球表面抗原結合，導致紅血球凝集和補體媒介溶血。末梢循環因溫度較低而最先受影響。",
    synonyms: ["CAD", "冷型自體免疫性溶血性貧血"],
    epidemiology: {
      species: "犬貓皆極罕見",
      age: "無特定年齡好發",
      sex: "無明顯性別傾向",
      riskFactors: ["淋巴瘤或其他腫瘤", "慢性感染（如Mycoplasma）", "免疫系統疾病"]
    },
    clinicalPresentation: {
      history: ["寒冷環境暴露後症狀加重", "末梢（耳尖、尾尖、趾端）發紺或壞死", "虛弱無力", "尿液變色"],
      physicalExam: ["黏膜蒼白", "耳尖、尾尖或趾端發紺/壞死", "黃疸（溶血時）", "脾臟腫大", "末梢組織冰冷"]
    },
    pathophysiology: "冷凝集素為IgM型自體抗體，在低溫（<37°C，通常<30°C）下與紅血球表面多醣抗原（通常為I/i抗原）結合，造成紅血球凝集。IgM五聚體高效活化補體經典途徑，C3b沉積於紅血球表面。當血液回流至溫暖的中心循環時，IgM抗體解離，但C3b仍留在紅血球表面，被肝臟庫佛氏細胞辨識並吞噬（血管外溶血）。嚴重時完整補體級聯被活化至C5-C9膜攻擊複合物，導致血管內溶血。末梢循環溫度最低，故耳尖、鼻端、尾尖和趾端最先出現紅血球凝集和缺血壞死。",
    diagnosis: {
      overview: "室溫血液自凝集+加溫至37°C後凝集消失為特徵性診斷",
      differentials: ["暖型IMHA", "DIC", "冷球蛋白血症", "末梢血管疾病"],
      initialDB: ["CBC（貧血+可能自凝集干擾自動計數）", "血液抹片（紅血球凝集）", "室溫凝集試驗+37°C加溫試驗", "生化（膽紅素升高）"],
      advanced: ["冷凝集素效價測定（4°C）", "直接Coombs試驗（特異性）", "流式細胞儀（補體C3沉積）", "腫瘤篩檢（排除繼發性）"]
    },
    treatment: {
      overview: "保持溫暖環境為首要措施，免疫抑制治療控制抗體產生",
      acute: ["將動物置於溫暖環境", "溫熱IV輸液", "嚴重貧血：輸注加溫紅血球", "氧氣支持"],
      chronic: ["免疫抑制劑：Prednisolone+Chlorambucil", "持續避免寒冷暴露", "繼發性病例：治療原發病（腫瘤、感染）", "Mycophenolate mofetil（難治病例）"]
    },
    prognosis: "原發性冷凝集素病在適當管理（保暖+免疫抑制）下可長期控制。繼發於腫瘤的病例預後取決於原發腫瘤治療效果。末梢組織壞死為不可逆損傷。避免寒冷環境暴露對預防復發至關重要。",
    pearls: ["室溫凝集+加溫消失是冷凝集素病的特徵性診斷", "保暖是最基本也最重要的治療措施", "末梢壞死（耳尖、尾尖）提示冷型IMHA", "應排除淋巴瘤等繼發性原因"],
    diagnosticAlgorithm: {
      title: "冷凝集素病 診斷流程",
      steps: [
        { step: 1, action: "臨床懷疑", details: "貧血+末梢壞死+寒冷加重", findings: ["末梢發紺/壞死", "黏膜蒼白", "寒冷暴露後惡化"] },
        { step: 2, action: "凝集試驗", details: "室溫vs 37°C對照", findings: ["室溫血液凝集", "加溫至37°C凝集消失", "確認冷反應性抗體"] },
        { step: 3, action: "溶血評估", details: "評估溶血嚴重度", findings: ["PCV下降", "膽紅素升高", "血紅素尿"] },
        { step: 4, action: "病因調查", details: "排除繼發性原因", findings: ["淋巴瘤篩檢", "Mycoplasma PCR", "腹部超音波"] }
      ]
    },
    monitoring: ["環境溫度管理", "PCV追蹤", "末梢組織狀態", "冷凝集素效價"],
    reference: "PubMed — Cold hemagglutinin disease in a dog; PetMD — Cold Agglutinin Disease in Cats; PMC — ACVIM consensus IMHA"
  },

  "disseminated-intravascular-coagulation": {
    zh: "瀰漫性血管內凝血",
    en: "Disseminated Intravascular Coagulation",
    definition: "瀰漫性血管內凝血（DIC）是一種危及生命的凝血功能異常，其特徵為凝血系統被過度活化，在微血管中形成廣泛微血栓，同時消耗凝血因子和血小板，最終導致同時出現微血管血栓和出血傾向。DIC永遠是繼發於其他嚴重原發疾病。",
    synonyms: ["DIC", "消耗性凝血病變"],
    epidemiology: {
      species: "犬較常見，貓少見",
      age: "任何年齡（取決於原發疾病）",
      sex: "無明顯性別傾向",
      riskFactors: ["嚴重敗血症/SIRS", "胃擴張扭轉（GDV）", "熱衰竭", "IMHA", "惡性腫瘤（血管肉瘤）", "蛇咬傷", "急性胰臟炎", "嚴重外傷"]
    },
    clinicalPresentation: {
      history: ["已存在嚴重疾病", "突然出現異常出血", "皮下瘀斑", "黏膜出血", "尿液或糞便帶血"],
      physicalExam: ["多部位自發性出血（牙齦、鼻腔、注射部位）", "皮膚瘀斑或紫斑", "黏膜蒼白", "心搏過速", "低血壓", "穿刺部位持續滲血"]
    },
    pathophysiology: "DIC的核心機制為過量凝血酶（thrombin）生成。原發疾病釋放組織因子（tissue factor）或活化內皮細胞，啟動凝血級聯反應，產生大量凝血酶。過量凝血酶使纖維蛋白原轉化為纖維蛋白，在微血管中形成廣泛微血栓，導致器官微循環障礙和缺血損傷（腎、肺、肝最常受累）。隨著凝血因子和血小板被大量消耗（消耗性凝血病變），凝血功能反而降低，出現矛盾性出血。同時纖溶系統被活化產生纖維蛋白降解產物（FDPs/D-dimer），這些降解產物本身也抑制凝血和血小板功能，進一步加重出血。",
    diagnosis: {
      overview: "血小板減少+PT/aPTT延長+D-dimer升高為典型三聯徵",
      differentials: ["嚴重肝病凝血障礙", "維生素K缺乏", "抗凝血劑中毒", "骨髓衰竭", "免疫媒介性血小板減少"],
      initialDB: ["CBC（血小板減少、碎裂紅血球）", "凝血功能：PT和aPTT（延長）", "纖維蛋白原（早期升高、晚期降低）", "D-dimer（升高）"],
      advanced: ["抗凝血酶III活性（降低）", "FDPs（升高）", "血栓彈力圖（TEG/ROTEM）", "器官損傷評估（腎功能、肝功能）"]
    },
    treatment: {
      overview: "治療原發疾病為根本，同時補充凝血因子和控制凝血活化",
      acute: ["積極治療原發疾病", "新鮮冷凍血漿（補充凝血因子+抗凝血酶）", "血小板輸注（嚴重血小板減少伴活動性出血）", "Heparin（低劑量75-150 IU/kg SC q8h，仍有爭議）"],
      chronic: ["持續治療和監測原發疾病", "維持組織灌注（IV輸液、血管活性藥物）", "紅血球輸注（嚴重貧血時）", "營養支持"]
    },
    prognosis: "DIC預後嚴重至極差。出血型DIC犬存活率約40%。預後主要取決於原發疾病能否有效控制。DIC的出現代表原發疾病已嚴重進展。早期辨識和積極治療原發疾病是改善預後的唯一途徑。",
    pearls: ["DIC永遠是繼發性的，必須找出並治療原發疾病", "血小板計數是最靈敏的DIC早期指標", "出血不一定代表DIC已進入消耗期，早期DIC以高凝狀態為主", "新鮮冷凍血漿是補充凝血因子的首選"],
    diagnosticAlgorithm: {
      title: "瀰漫性血管內凝血 診斷流程",
      steps: [
        { step: 1, action: "臨床警覺", details: "嚴重疾病患者出現異常出血", findings: ["原有嚴重疾病", "自發性出血", "穿刺部位持續滲血"] },
        { step: 2, action: "凝血篩檢", details: "CBC+凝血功能+D-dimer", findings: ["血小板下降", "PT/aPTT延長", "D-dimer升高"] },
        { step: 3, action: "嚴重度評估", details: "評估器官損傷和出血程度", findings: ["纖維蛋白原水平", "抗凝血酶III活性", "碎裂紅血球（微血管病）"] },
        { step: 4, action: "原發病因調查", details: "找出觸發DIC的原發疾病", findings: ["敗血症來源", "腫瘤篩檢", "組織壞死評估"] }
      ]
    },
    monitoring: ["連續血小板計數（每4-8小時）", "凝血功能追蹤", "出血量和部位", "原發疾病控制情況", "器官功能監測"],
    reference: "eClinpath — DIC; Veterinary Partner — VIN; dvm360 — DIC Diagnosis and Treatment; PubMed — Update on DIC"
  },

  "pure-red-cell-aplasia": {
    zh: "純紅血球再生不良",
    en: "Pure Red Cell Aplasia",
    definition: "純紅血球再生不良（PRCA）是一種罕見的骨髓疾病，特徵為骨髓中紅血球前驅細胞選擇性缺失或極度減少，而顆粒球和巨核細胞生成正常。導致嚴重的非再生性貧血，網狀紅血球計數極低。多數為免疫媒介性，少數與感染或腫瘤相關。",
    synonyms: ["PRCA", "紅血球生成不良"],
    epidemiology: {
      species: "犬貓皆可",
      age: "犬中位年齡6.5歲；貓8月齡-3歲",
      sex: "犬：已絕育母犬顯著好發",
      riskFactors: ["拉布拉多犬", "貓白血病病毒（FeLV）感染（貓）", "免疫系統失調", "近期藥物暴露或感染"]
    },
    clinicalPresentation: {
      history: ["進行性虛弱無力", "運動不耐", "食慾下降", "嗜睡", "黏膜逐漸蒼白"],
      physicalExam: ["黏膜極度蒼白", "心搏過速", "心臟收縮期雜音（貧血性）", "無黃疸（非溶血性）", "無脾臟腫大（通常）", "無出血傾向（血小板正常）"]
    },
    pathophysiology: "PRCA的主要機制為免疫系統選擇性攻擊骨髓中的紅血球前驅細胞（特別是紅血球母細胞和前紅血球母細胞）。可能的免疫機制包括：(1)抗紅血球前驅細胞抗體直接破壞前驅細胞；(2)細胞激素異常抑制紅血球生成；(3)抗紅血球生成素（EPO）抗體中和EPO活性；(4)感染引起的交叉反應抗體攻擊紅血球前驅細胞。骨髓中紅血球系列（E系列）嚴重缺乏，而髓系（M系列）和巨核細胞正常，M:E比值顯著升高。周邊血液表現為嚴重非再生性正球性正色性貧血，網狀紅血球計數極低。",
    diagnosis: {
      overview: "骨髓檢查確認紅血球前驅細胞缺失是確診關鍵",
      differentials: ["慢性腎病引起的非再生性貧血", "骨髓發育不良症候群", "再生不良性貧血", "鐵缺乏性貧血", "慢性疾病貧血"],
      initialDB: ["CBC（嚴重貧血、網狀紅血球極低、WBC和血小板正常）", "網狀紅血球計數（<1%或絕對值極低）", "生化+尿液分析（排除腎病）", "FeLV/FIV檢測（貓）"],
      advanced: ["骨髓穿刺+活檢（紅血球系列缺失，M:E比值升高）", "直接Coombs試驗", "EPO濃度測量", "感染篩檢（細小病毒、Ehrlichia）"]
    },
    treatment: {
      overview: "免疫抑制治療為主，嚴重貧血需輸血支持",
      acute: ["嚴重貧血（PCV<10-12%）：紅血球輸注", "Prednisolone 2-4 mg/kg/day起始", "氧氣支持"],
      chronic: ["Prednisolone逐漸減量至維持劑量", "反應不佳者加用：Cyclosporine 5 mg/kg q12h", "Cyclophosphamide（難治病例）", "人類重組紅血球生成素（rHuEPO，部分病例有效）", "長期監測和劑量調整"]
    },
    prognosis: "犬對免疫抑制治療反應：完全緩解55%、部分緩解18%、反應不佳27%。貓需長期積極免疫抑制治療。FeLV相關PRCA預後較差。及時診斷和治療可顯著改善預後。部分病例需終身低劑量免疫抑制維持。",
    pearls: ["PRCA的關鍵特徵：嚴重貧血但WBC和血小板正常", "無黃疸（非溶血性機制）可與IMHA區分", "骨髓檢查是確診必須", "犬以已絕育母犬和拉布拉多好發"],
    diagnosticAlgorithm: {
      title: "純紅血球再生不良 診斷流程",
      steps: [
        { step: 1, action: "識別非再生性貧血", details: "嚴重貧血但網狀紅血球極低", findings: ["PCV極低（中位11%）", "網狀紅血球<1%", "WBC和血小板正常"] },
        { step: 2, action: "排除常見原因", details: "腎病、鐵缺乏、慢性疾病", findings: ["腎功能正常", "鐵代謝正常", "FeLV/FIV陰性（或陽性→注意）"] },
        { step: 3, action: "骨髓檢查", details: "穿刺+活檢確認紅血球前驅缺失", findings: ["紅血球系列缺失", "M:E比值顯著升高", "髓系和巨核細胞正常"] },
        { step: 4, action: "免疫媒介確認", details: "Coombs試驗和治療反應", findings: ["Coombs陽性（57%犬）", "免疫抑制治療反應"] }
      ]
    },
    monitoring: ["PCV和網狀紅血球計數（每1-2週）", "骨髓追蹤（治療反應評估）", "免疫抑制劑副作用", "FeLV狀態（貓）"],
    reference: "PubMed — PRCA in dogs 43 cases; PubMed — Primary PRCA 13 cases; PubMed — PRCA in cats 9 cases; PMC 2021"
  },

  "immune-mediated-polyarthritis-non-erosive": {
    zh: "非侵蝕性免疫媒介性多發關節炎",
    en: "Non-erosive Immune-Mediated Polyarthritis",
    definition: "非侵蝕性免疫媒介性多發關節炎（IMPA）是犬最常見的免疫媒介性關節疾病，特徵為兩個或以上關節滑膜的無菌性炎症反應。與侵蝕性類風濕關節炎不同，非侵蝕性IMPA不造成關節軟骨和骨骼的永久性破壞。分為原發性（特發性）和繼發性兩型。",
    synonyms: ["IMPA", "免疫媒介性多關節炎", "特發性多關節炎"],
    epidemiology: {
      species: "犬為主，貓少見",
      age: "中年犬（平均4-6歲）",
      sex: "大型犬種好發，無明顯性別傾向",
      riskFactors: ["大型犬種", "德國牧羊犬", "杜賓犬", "拳師犬", "潛在感染灶（牙周病、UTI）", "腫瘤", "炎性腸病", "近期疫苗接種"]
    },
    clinicalPresentation: {
      history: ["間歇性跛行或僵硬步態", "不願走動或上下樓梯", "多關節受累（可能輪替）", "發燒", "食慾下降"],
      physicalExam: ["多關節腫脹和疼痛（特別是腕關節和跗關節）", "僵硬步態（如同踩蛋殼般行走）", "發燒（38.9-40.5°C）", "關節觸診疼痛反應", "可能的淋巴結腫大"]
    },
    pathophysiology: "非侵蝕性IMPA的病理機制主要為免疫複合物沉積於關節滑膜。原發性IMPA中，確切的抗原觸發不明，可能與分子模擬或免疫調節異常有關。繼發性IMPA中，遠端感染灶、腫瘤或藥物產生的免疫複合物經血行沉積於關節滑膜，活化補體和嗜中性球趨化。滑膜液中大量嗜中性球浸潤（無菌性化膿性關節炎），釋放蛋白酶和活性氧物種導致滑膜炎。但因無直接針對軟骨或骨骼的自體免疫攻擊，故X光通常不見侵蝕性病變。",
    diagnosis: {
      overview: "關節液分析顯示無菌性嗜中性球增多為診斷基礎",
      differentials: ["感染性多關節炎（細菌、真菌、Lyme disease）", "侵蝕性IMPA（類風濕關節炎）", "全身性紅斑狼瘡", "退化性關節病", "多發性骨髓瘤"],
      initialDB: ["多關節關節液穿刺+分析（嗜中性球>5-12%、培養陰性）", "CBC和生化", "尿液培養（排除UTI）", "胸腹X光（排除腫瘤）"],
      advanced: ["關節液培養（排除感染）", "關節X光（排除侵蝕性病變）", "ANA檢測（排除SLE）", "Lyme disease和Ehrlichia血清學", "腹部超音波"]
    },
    treatment: {
      overview: "免疫抑制治療為主，繼發性IMPA需同時治療原發疾病",
      acute: ["Prednisolone 1-2 mg/kg/day", "疼痛管理：Gabapentin", "關節補充劑", "必要時靜脈輸液"],
      chronic: ["Prednisolone逐漸減量（6-8個月療程）", "反應不佳或復發：加用Leflunomide或Cyclosporine", "Mycophenolate mofetil（替代選擇）", "繼發性：控制原發疾病（牙科治療、抗生素等）", "物理治療促進關節功能"]
    },
    prognosis: "原發性IMPA對免疫抑制治療反應通常良好。繼發性IMPA在原發疾病控制後預後佳。復發率不低，需密切監測。部分病例在停藥後復發。多數犬在適當治療下可維持良好生活品質。",
    pearls: ["關節液分析是診斷IMPA的金標準（嗜中性球增多+培養陰性）", "至少採集4個關節的關節液", "繼發性IMPA佔30-50%，務必尋找潛在病因", "僵硬步態如同踩蛋殼般行走是典型表現"],
    diagnosticAlgorithm: {
      title: "非侵蝕性免疫媒介性多發關節炎 診斷流程",
      steps: [
        { step: 1, action: "臨床懷疑", details: "多關節腫脹疼痛+發燒", findings: ["僵硬步態", "多關節疼痛", "發燒"] },
        { step: 2, action: "關節液分析", details: "至少4關節穿刺", findings: ["嗜中性球增多（>5-12%）", "細菌培養陰性", "非侵蝕性"] },
        { step: 3, action: "排除感染和SLE", details: "血清學+ANA+影像", findings: ["壁蝨媒介感染陰性", "ANA陰性", "關節X光無侵蝕"] },
        { step: 4, action: "繼發病因搜尋", details: "尋找遠端感染灶或腫瘤", findings: ["口腔檢查（牙周病）", "尿液培養", "胸腹影像（腫瘤篩檢）"] }
      ]
    },
    monitoring: ["關節腫脹和疼痛評估", "發燒監測", "免疫抑制劑副作用", "定期CBC和生化", "復發徵象"],
    reference: "Today's Veterinary Practice — Canine IMPA; PMC — 84 UK cases review; dvm360; Veterinary Partner — VIN"
  },

  "myelodysplastic-syndrome": {
    zh: "骨髓發育不良症候群",
    en: "Myelodysplastic Syndrome",
    definition: "骨髓發育不良症候群（MDS）是一組骨髓造血幹細胞的克隆性腫瘤疾病，特徵為骨髓造血功能異常（dysplasia）和周邊血液一系或多系血球減少。MDS可視為白血病的前期狀態，有一定比例會進展為急性骨髓性白血病。貓的MDS多與貓白血病病毒（FeLV）感染相關。",
    synonyms: ["MDS", "骨髓增生異常症候群", "前白血病狀態"],
    epidemiology: {
      species: "貓較犬常見（與FeLV相關）",
      age: "貓：年輕至中年（FeLV相關）；犬：中老年",
      sex: "無明顯性別傾向",
      riskFactors: ["貓白血病病毒（FeLV）感染（貓的主要原因）", "化學治療藥物暴露", "游離輻射暴露", "環境毒素", "苯接觸"]
    },
    clinicalPresentation: {
      history: ["慢性進行性虛弱", "食慾下降", "反覆感染", "異常出血", "嗜睡"],
      physicalExam: ["黏膜蒼白（貧血）", "發燒（感染）", "皮膚瘀斑或紫斑（血小板減少）", "脾臟腫大", "淋巴結腫大", "牙齦出血"]
    },
    pathophysiology: "MDS起源於造血幹細胞的克隆性異常增殖。異常幹細胞在骨髓中分化為形態異常的血球前驅細胞（dysplasia），表現為巨母紅血球、多核或分葉異常的嗜中性球、微小巨核細胞等。這些異常細胞的成熟和功能受損，大量在骨髓內凋亡（無效造血，ineffective hematopoiesis），導致骨髓富含細胞但周邊血液卻出現血球減少（矛盾現象）。在貓中，FeLV插入宿主基因組可導致原癌基因活化和抑癌基因失活，直接引起造血幹細胞的克隆性異常。MDS有一定比例（犬約20-30%、貓更高）進展為急性骨髓性白血病（AML），預後更差。",
    diagnosis: {
      overview: "骨髓檢查為確診必須，需評估異常形態學特徵",
      differentials: ["營養性缺乏（B12、葉酸、鐵）", "慢性腎病", "再生不良性貧血", "急性白血病", "骨髓纖維化"],
      initialDB: ["CBC（一系或多系血球減少）", "血液抹片（血球形態異常：巨大紅血球、低分葉嗜中性球）", "網狀紅血球計數（通常低）", "FeLV/FIV檢測（貓）"],
      advanced: ["骨髓穿刺+活檢（確診：異常形態+芽細胞百分比）", "骨髓芽細胞計數（<20% = MDS, ≥20% = AML）", "細胞化學染色", "流式細胞儀免疫表型分析"]
    },
    treatment: {
      overview: "無根治方法（除骨髓移植外），以支持治療為主",
      acute: ["嚴重貧血：紅血球輸注", "嚴重感染：廣效抗生素", "出血：血小板輸注（效果短暫）"],
      chronic: ["人類重組紅血球生成素（rHuEPO）改善貧血", "低劑量Prednisolone", "FeLV陽性貓：抗病毒治療（干擾素）", "營養支持", "骨髓移植（實驗階段）"]
    },
    prognosis: "MDS整體預後不良。FeLV相關MDS貓平均存活2-3年。犬的存活時間依進展速度而異。進展為AML後預後極差。多數動物最終因敗血症、出血或嚴重貧血死亡或安樂死。及時支持治療可改善生活品質但難以延長生存期。",
    pearls: ["骨髓富含細胞但周邊血球減少是MDS的矛盾特徵", "貓的MDS幾乎都與FeLV相關", "芽細胞<20%為MDS，≥20%為AML", "MDS是白血病前期，需定期骨髓監測進展"],
    diagnosticAlgorithm: {
      title: "骨髓發育不良症候群 診斷流程",
      steps: [
        { step: 1, action: "識別血球減少", details: "不明原因的一系或多系血球減少", findings: ["非再生性貧血", "嗜中性球減少", "血小板減少"] },
        { step: 2, action: "血液抹片形態學", details: "評估血球形態異常", findings: ["巨大紅血球", "低分葉嗜中性球", "巨大血小板"] },
        { step: 3, action: "骨髓檢查", details: "穿刺+活檢確認異常造血", findings: ["骨髓富含細胞", "多系異常形態（dysplasia）", "芽細胞百分比"] },
        { step: 4, action: "分類和分期", details: "WHO/FAB分類", findings: ["芽細胞<20%→MDS", "芽細胞≥20%→AML", "FeLV狀態（貓）"] }
      ]
    },
    monitoring: ["定期CBC追蹤血球變化", "骨髓芽細胞比例監測（是否進展為AML）", "感染防治", "FeLV病毒量（貓）"],
    reference: "Veteriankey — Myelodysplastic Syndromes; Merck Veterinary Manual; PubMed — MDS in cats with FeLV; National Canine Cancer Foundation"
  }
};

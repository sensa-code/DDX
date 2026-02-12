// 整合新疾病資料到 HTML 文件的腳本
const fs = require('fs');

// 讀取 HTML 文件
let html = fs.readFileSync('vet-differential-diagnosis-v2.html', 'utf8');

// 備份原始文件
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
fs.writeFileSync(`vet-differential-diagnosis-v2.html.backup-expand-${timestamp}`, html, 'utf8');
console.log(`備份已創建: vet-differential-diagnosis-v2.html.backup-expand-${timestamp}`);

// 找到 DISEASE_INFO 結尾的位置
const endMarker = '\n};';
const diseaseInfoStart = html.indexOf('const DISEASE_INFO = {');
const diseaseInfoEnd = html.indexOf(endMarker, diseaseInfoStart);

if (diseaseInfoStart === -1 || diseaseInfoEnd === -1) {
    console.error('無法找到 DISEASE_INFO 結構');
    process.exit(1);
}

// 新增的疾病資料（直接在這裡定義）
const newDiseases = {
    // === 免疫系統疾病 ===
    "immune-mediated-arthritis": {
        "zh": "免疫介導性關節炎",
        "en": "Immune-Mediated Arthritis",
        "definition": "一種由免疫系統異常攻擊關節組織引起的非感染性多發性關節炎",
        "synonyms": ["免疫性關節炎", "IMPA"],
        "epidemiology": {
            "prevalence": "少見",
            "riskFactors": ["遺傳易感性", "慢性感染", "腫瘤"],
            "animalGroups": ["中大型犬", "德國牧羊犬"]
        },
        "clinicalPresentation": {
            "symptoms": ["多關節腫脹", "跛行", "發熱"],
            "signs": ["關節積液", "關節觸診疼痛"],
            "complications": ["關節軟骨損傷", "肌肉萎縮"]
        },
        "pathophysiology": "免疫複合物沉積於滑膜引發發炎反應",
        "diagnosis": {
            "primary": ["關節液分析", "血液學檢查"],
            "supportive": ["X光檢查", "抗核抗體檢測"],
            "differential": ["感染性關節炎", "骨關節炎"]
        },
        "treatment": {
            "medical": ["Prednisolone", "Azathioprine"],
            "surgical": ["關節沖洗（特殊情況）"],
            "supportive": ["體重管理", "物理治療"]
        },
        "prognosis": "非侵蝕性IMPA預後較佳，需長期用藥",
        "pearls": ["關節液分析是診斷關鍵", "需排除感染性原因"],
        "monitoring": ["關節液分析追蹤", "CBC監測"],
        "reference": "Small Animal Internal Medicine"
    },
    "anaphylaxis": {
        "zh": "過敏性休克",
        "en": "Anaphylaxis",
        "definition": "嚴重的急性全身性過敏反應，由IgE介導",
        "synonyms": ["全身性過敏反應", "急性過敏性休克"],
        "epidemiology": {
            "prevalence": "少見",
            "riskFactors": ["先前過敏史", "疫苗接種", "昆蟲叮咬"],
            "animalGroups": ["犬", "貓"]
        },
        "clinicalPresentation": {
            "symptoms": ["突發虛脫", "嘔吐", "呼吸困難"],
            "signs": ["低血壓", "心搏過速", "蒼白黏膜"],
            "complications": ["休克", "DIC", "死亡"]
        },
        "pathophysiology": "過敏原與IgE結合導致肥大細胞脫顆粒",
        "diagnosis": {
            "primary": ["臨床病史", "過敏原暴露史"],
            "supportive": ["血壓監測", "血液氣體分析"],
            "differential": ["心因性休克", "敗血性休克"]
        },
        "treatment": {
            "medical": ["Epinephrine", "Diphenhydramine", "Dexamethasone"],
            "surgical": ["氣管切開術（嚴重喉頭水腫）"],
            "supportive": ["靜脈輸液", "氧氣治療"]
        },
        "prognosis": "及時治療預後良好",
        "pearls": ["Epinephrine是第一線急救藥物", "犬主要表現為腸胃道症狀"],
        "monitoring": ["血壓持續監測", "心電圖"],
        "reference": "Veterinary Emergency Medicine"
    },
    "vasculitis": {
        "zh": "血管炎",
        "en": "Vasculitis",
        "definition": "血管壁的發炎性疾病",
        "synonyms": ["脈管炎", "免疫介導性血管炎"],
        "epidemiology": {
            "prevalence": "罕見",
            "riskFactors": ["感染性疾病", "藥物反應", "腫瘤"],
            "animalGroups": ["犬", "傑克羅素梗"]
        },
        "clinicalPresentation": {
            "symptoms": ["皮膚潰瘍", "發熱", "跛行"],
            "signs": ["耳緣壞死", "肉球潰瘍", "紫斑"],
            "complications": ["組織壞死", "腎衰竭"]
        },
        "pathophysiology": "免疫複合物沉積於血管壁",
        "diagnosis": {
            "primary": ["皮膚活檢", "組織病理學"],
            "supportive": ["CBC", "感染性疾病篩查"],
            "differential": ["DIC", "血小板減少症", "凍傷"]
        },
        "treatment": {
            "medical": ["Prednisolone", "Pentoxifylline"],
            "surgical": ["壞死組織清創"],
            "supportive": ["傷口護理", "保溫"]
        },
        "prognosis": "取決於病因和受累器官",
        "pearls": ["皮膚活檢是診斷金標準", "耳緣和肉球病變是典型表現"],
        "monitoring": ["皮膚病變監測", "腎功能"],
        "reference": "Muller and Kirk's Small Animal Dermatology"
    },
    // === 急診重症疾病 ===
    "sepsis": {
        "zh": "敗血症",
        "en": "Sepsis",
        "definition": "因感染引起的全身性發炎反應症候群",
        "synonyms": ["全身性感染", "膿毒症"],
        "epidemiology": {
            "prevalence": "常見",
            "riskFactors": ["免疫功能低下", "糖尿病", "惡性腫瘤"],
            "animalGroups": ["免疫功能低下動物", "老年動物"]
        },
        "clinicalPresentation": {
            "symptoms": ["發燒或體溫過低", "精神沉鬱", "食慾廢絕"],
            "signs": ["心搏過速", "呼吸急促", "黏膜異常"],
            "complications": ["敗血性休克", "多重器官功能障礙", "DIC"]
        },
        "pathophysiology": "病原體引發細胞因子風暴導致全身性發炎",
        "diagnosis": {
            "primary": ["血液培養", "全血球計數"],
            "supportive": ["乳酸濃度", "凝血功能檢查"],
            "differential": ["非感染性SIRS", "胰臟炎"]
        },
        "treatment": {
            "medical": ["廣效性抗生素", "靜脈輸液", "血管升壓劑"],
            "surgical": ["感染源控制"],
            "supportive": ["氧氣治療", "營養支持"]
        },
        "prognosis": "早期治療存活率約50-70%",
        "pearls": ["抗生素應在診斷後1小時內給予", "乳酸是組織灌注的重要指標"],
        "monitoring": ["血壓與心率", "乳酸濃度", "尿量"],
        "reference": "Small Animal Critical Care Medicine"
    },
    "hypovolemic-shock": {
        "zh": "低血容積性休克",
        "en": "Hypovolemic Shock",
        "definition": "有效循環血量嚴重不足導致的休克",
        "synonyms": ["出血性休克", "失血性休克"],
        "epidemiology": {
            "prevalence": "常見",
            "riskFactors": ["創傷", "手術", "胃腸道出血"],
            "animalGroups": ["創傷動物", "手術後動物"]
        },
        "clinicalPresentation": {
            "symptoms": ["虛弱", "精神沉鬱", "口渴"],
            "signs": ["心搏過速", "脈搏微弱", "黏膜蒼白"],
            "complications": ["多重器官衰竭", "急性腎損傷"]
        },
        "pathophysiology": "血容量減少導致心輸出量下降",
        "diagnosis": {
            "primary": ["臨床休克徵象評估", "血壓測量"],
            "supportive": ["血球容積比", "乳酸濃度"],
            "differential": ["其他類型休克", "Addison危象"]
        },
        "treatment": {
            "medical": ["快速靜脈輸液", "血管升壓劑"],
            "surgical": ["出血控制手術"],
            "supportive": ["輸血", "氧氣治療"]
        },
        "prognosis": "早期治療預後較好",
        "pearls": ["犬休克輸液劑量：60-90 mL/kg/hr", "出血控制與輸液同等重要"],
        "monitoring": ["心率與脈搏", "血壓", "尿量"],
        "reference": "Veterinary Emergency Medicine"
    },
    "septic-shock": {
        "zh": "敗血性休克",
        "en": "Septic Shock",
        "definition": "敗血症的最嚴重形式，需要血管升壓劑維持血壓",
        "synonyms": ["感染性休克", "膿毒性休克"],
        "epidemiology": {
            "prevalence": "少見",
            "riskFactors": ["敗血症", "免疫功能低下"],
            "animalGroups": ["敗血症患者", "老年動物"]
        },
        "clinicalPresentation": {
            "symptoms": ["極度虛弱", "完全不進食"],
            "signs": ["低血壓", "心搏過速", "發燒或低體溫"],
            "complications": ["多重器官衰竭", "DIC", "死亡"]
        },
        "pathophysiology": "細胞因子風暴導致全身性血管擴張",
        "diagnosis": {
            "primary": ["敗血症診斷標準", "持續低血壓"],
            "supportive": ["血液培養", "乳酸濃度"],
            "differential": ["其他類型休克", "心因性休克"]
        },
        "treatment": {
            "medical": ["積極輸液", "Norepinephrine", "廣效性抗生素"],
            "surgical": ["感染源控制"],
            "supportive": ["氧氣治療", "機械通氣"]
        },
        "prognosis": "死亡率約50-80%",
        "pearls": ["Norepinephrine是血管升壓劑首選", "感染源控制是關鍵"],
        "monitoring": ["平均動脈壓", "乳酸濃度", "尿量"],
        "reference": "Surviving Sepsis Campaign Guidelines"
    },
    "heat-stroke-severe": {
        "zh": "嚴重熱中暑",
        "en": "Severe Heat Stroke",
        "definition": "體溫過高導致的多器官功能障礙",
        "synonyms": ["熱衰竭", "中暑"],
        "epidemiology": {
            "prevalence": "季節性常見",
            "riskFactors": ["高溫環境", "劇烈運動", "短頭犬種"],
            "animalGroups": ["短頭犬種", "肥胖動物", "老年動物"]
        },
        "clinicalPresentation": {
            "symptoms": ["喘氣", "虛脫", "嘔吐"],
            "signs": ["體溫>41°C", "黏膜磚紅色", "意識改變"],
            "complications": ["DIC", "急性腎損傷", "腦水腫"]
        },
        "pathophysiology": "高體溫導致細胞損傷和全身性發炎",
        "diagnosis": {
            "primary": ["體溫測量", "臨床症狀"],
            "supportive": ["凝血功能", "肝腎功能"],
            "differential": ["感染性發燒", "惡性高熱"]
        },
        "treatment": {
            "medical": ["積極降溫", "靜脈輸液"],
            "surgical": ["無"],
            "supportive": ["氧氣治療", "電解質監測"]
        },
        "prognosis": "取決於體溫峰值和持續時間",
        "pearls": ["目標體溫39.5°C時停止主動降溫", "避免冰水以防血管收縮"],
        "monitoring": ["體溫", "凝血功能", "神經狀態"],
        "reference": "Veterinary Emergency Medicine"
    },
    "cardiopulmonary-arrest": {
        "zh": "心肺停止",
        "en": "Cardiopulmonary Arrest",
        "definition": "心臟機械性活動停止導致全身循環中斷",
        "synonyms": ["心跳停止", "CPA"],
        "epidemiology": {
            "prevalence": "少見",
            "riskFactors": ["嚴重心臟病", "電解質異常", "麻醉期間"],
            "animalGroups": ["老年動物", "心臟病患者"]
        },
        "clinicalPresentation": {
            "symptoms": ["突然倒下", "失去意識"],
            "signs": ["無脈搏", "無心音", "無自主呼吸"],
            "complications": ["腦缺氧損傷", "死亡"]
        },
        "pathophysiology": "心臟停止導致全身組織氧氣供應中斷",
        "diagnosis": {
            "primary": ["無脈搏", "無心音", "心電圖"],
            "supportive": ["潮氣末二氧化碳監測"],
            "differential": ["嚴重低血壓", "深度昏迷"]
        },
        "treatment": {
            "medical": ["腎上腺素", "Atropine", "Amiodarone"],
            "surgical": ["開胸心臟按摩（特定情況）"],
            "supportive": ["胸外按壓", "人工通氣", "電擊去顫"]
        },
        "prognosis": "出院存活率約6-10%",
        "pearls": ["高質量胸外按壓是關鍵", "腎上腺素每3-5分鐘給予一次"],
        "monitoring": ["心電圖", "潮氣末二氧化碳", "脈搏"],
        "reference": "RECOVER Clinical Guidelines"
    },
    // === 耳鼻喉疾病 ===
    "nasal-foreign-body": {
        "zh": "鼻腔異物",
        "en": "Nasal Foreign Body",
        "definition": "異物進入並滯留於鼻腔內",
        "synonyms": ["鼻內異物", "鼻道異物"],
        "epidemiology": {
            "prevalence": "常見",
            "riskFactors": ["戶外活動頻繁", "嗅聞行為活躍"],
            "animalGroups": ["中大型犬", "獵犬"]
        },
        "clinicalPresentation": {
            "symptoms": ["突發性劇烈打噴嚏", "單側鼻分泌物"],
            "signs": ["單側漿液性或黏液膿性鼻分泌物", "鼻出血"],
            "complications": ["慢性鼻炎", "鼻竇炎"]
        },
        "pathophysiology": "異物造成黏膜機械性損傷",
        "diagnosis": {
            "primary": ["鼻腔內視鏡", "鼻腔X光"],
            "supportive": ["CT掃描", "鼻分泌物細胞學"],
            "differential": ["鼻腔腫瘤", "黴菌性鼻炎"]
        },
        "treatment": {
            "medical": ["抗生素", "消炎藥物"],
            "surgical": ["內視鏡異物取出"],
            "supportive": ["環境清潔"]
        },
        "prognosis": "及時移除預後良好",
        "pearls": ["單側鼻分泌物高度提示異物或腫瘤", "草芒最常見"],
        "monitoring": ["鼻分泌物性質變化", "打噴嚏頻率"],
        "reference": "Small Animal Internal Medicine"
    },
    "laryngitis-acute": {
        "zh": "急性喉炎",
        "en": "Acute Laryngitis",
        "definition": "喉部黏膜及聲帶的急性發炎",
        "synonyms": ["喉頭炎", "聲帶炎"],
        "epidemiology": {
            "prevalence": "常見",
            "riskFactors": ["呼吸道感染", "過度吠叫", "氣管插管"],
            "animalGroups": ["各年齡犬貓", "小型犬"]
        },
        "clinicalPresentation": {
            "symptoms": ["聲音嘶啞", "乾咳", "吞嚥困難"],
            "signs": ["喉部觸診敏感", "咳嗽反射增強"],
            "complications": ["喉水腫", "呼吸窘迫"]
        },
        "pathophysiology": "感染或刺激導致喉部黏膜充血水腫",
        "diagnosis": {
            "primary": ["喉鏡檢查", "病史及臨床檢查"],
            "supportive": ["頸部X光", "血液學檢查"],
            "differential": ["喉麻痺", "喉腫瘤"]
        },
        "treatment": {
            "medical": ["抗生素", "類固醇", "止咳藥"],
            "surgical": ["氣管切開術（緊急時）"],
            "supportive": ["聲音休息", "環境加濕"]
        },
        "prognosis": "急性喉炎通常預後良好",
        "pearls": ["急性喉水腫是緊急情況", "避免使用頸圈"],
        "monitoring": ["呼吸型態", "聲音品質"],
        "reference": "Textbook of Respiratory Disease"
    },
    "otitis-media-severe": {
        "zh": "嚴重中耳炎",
        "en": "Severe Otitis Media",
        "definition": "中耳腔的嚴重感染和發炎",
        "synonyms": ["中耳感染", "鼓室炎"],
        "epidemiology": {
            "prevalence": "少見",
            "riskFactors": ["慢性外耳炎", "鼓膜穿孔"],
            "animalGroups": ["慢性外耳炎患畜", "垂耳犬種"]
        },
        "clinicalPresentation": {
            "symptoms": ["甩頭", "頭部傾斜", "疼痛"],
            "signs": ["面神經麻痺", "霍納氏症候群", "鼓膜異常"],
            "complications": ["內耳炎", "腦膜炎"]
        },
        "pathophysiology": "細菌從外耳經鼓膜擴散至中耳",
        "diagnosis": {
            "primary": ["耳鏡檢查", "頭部X光"],
            "supportive": ["CT掃描", "中耳沖洗液培養"],
            "differential": ["外耳炎", "內耳炎", "腫瘤"]
        },
        "treatment": {
            "medical": ["全身性抗生素（4-6週）", "止痛藥"],
            "surgical": ["鼓室泡骨切開術"],
            "supportive": ["耳道清潔"]
        },
        "prognosis": "及時治療預後良好",
        "pearls": ["慢性外耳炎應評估中耳", "CT比X光更準確"],
        "monitoring": ["神經症狀", "聽力"],
        "reference": "Small Animal Internal Medicine"
    },
    // === 先天性疾病 ===
    "congenital-megaesophagus": {
        "zh": "先天性巨食道症",
        "en": "Congenital Megaesophagus",
        "definition": "食道先天性全段性擴張及運動功能障礙",
        "synonyms": ["先天性食道擴張", "原發性巨食道症"],
        "epidemiology": {
            "prevalence": "少見",
            "riskFactors": ["品種遺傳"],
            "animalGroups": ["德國牧羊犬", "大丹犬", "愛爾蘭雪達犬"]
        },
        "clinicalPresentation": {
            "symptoms": ["斷奶後反胃", "體重不增", "咳嗽"],
            "signs": ["反胃", "發育遲緩", "肺部囉音"],
            "complications": ["吸入性肺炎", "營養不良"]
        },
        "pathophysiology": "食道神經叢發育異常導致蠕動功能喪失",
        "diagnosis": {
            "primary": ["胸腔X光", "鋇劑食道攝影"],
            "supportive": ["食道內視鏡", "甲狀腺功能"],
            "differential": ["血管環異常", "食道異物"]
        },
        "treatment": {
            "medical": ["直立餵食", "高熱量泥狀食物"],
            "surgical": ["胃造口術（嚴重病例）"],
            "supportive": ["Bailey椅餵食", "少量多餐"]
        },
        "prognosis": "預後謹慎至不良",
        "pearls": ["反胃與嘔吐需鑑別", "直立餵食是治療基石"],
        "monitoring": ["體重增長", "反胃頻率", "呼吸狀態"],
        "reference": "Canine and Feline Gastroenterology"
    },
    "cleft-palate": {
        "zh": "腭裂",
        "en": "Cleft Palate",
        "definition": "先天性上顎發育缺陷，口腔與鼻腔間存在異常通道",
        "synonyms": ["顎裂", "口蓋裂"],
        "epidemiology": {
            "prevalence": "少見",
            "riskFactors": ["遺傳因素", "妊娠期藥物暴露"],
            "animalGroups": ["短頭犬種", "英國鬥牛犬"]
        },
        "clinicalPresentation": {
            "symptoms": ["哺乳困難", "乳汁從鼻孔流出", "打噴嚏"],
            "signs": ["口腔檢查可見顎部缺損", "鼻分泌物"],
            "complications": ["吸入性肺炎", "營養不良", "死亡"]
        },
        "pathophysiology": "胚胎發育時顎突未能正常融合",
        "diagnosis": {
            "primary": ["口腔視診", "新生兒常規檢查"],
            "supportive": ["胸部X光"],
            "differential": ["後天性腭穿孔", "口鼻瘻管"]
        },
        "treatment": {
            "medical": ["管飼餵養", "抗生素"],
            "surgical": ["腭裂修補術（8-12週齡後）"],
            "supportive": ["特殊餵養技術"]
        },
        "prognosis": "輕微病例手術預後良好",
        "pearls": ["所有新生幼犬貓應常規檢查口腔", "具遺傳性"],
        "monitoring": ["體重增長", "呼吸狀態"],
        "reference": "Oral and Maxillofacial Surgery"
    },
    "umbilical-hernia": {
        "zh": "臍疝",
        "en": "Umbilical Hernia",
        "definition": "腹腔內容物經由臍環缺損突出至皮下",
        "synonyms": ["臍疝氣", "臍部疝"],
        "epidemiology": {
            "prevalence": "常見",
            "riskFactors": ["遺傳因素", "品種傾向"],
            "animalGroups": ["艾乃戴爾梗", "北京犬", "貴賓犬"]
        },
        "clinicalPresentation": {
            "symptoms": ["臍部腫塊", "通常無症狀"],
            "signs": ["臍部可觸及軟性腫塊", "可還納"],
            "complications": ["腸管嵌頓", "絞窄"]
        },
        "pathophysiology": "臍環閉合不完全",
        "diagnosis": {
            "primary": ["身體檢查", "臍部觸診"],
            "supportive": ["腹部超音波"],
            "differential": ["膿瘍", "腫瘤"]
        },
        "treatment": {
            "medical": ["小型疝氣可觀察"],
            "surgical": ["臍疝修補術"],
            "supportive": ["術後限制活動"]
        },
        "prognosis": "手術修補後預後極佳",
        "pearls": ["直徑<1公分可能自發閉合", "建議與絕育同時修補"],
        "monitoring": ["疝氣大小變化", "嵌頓跡象"],
        "reference": "Small Animal Surgery"
    },
    // === 生殖系統疾病 ===
    "pseudopregnancy": {
        "zh": "假孕",
        "en": "Pseudopregnancy",
        "definition": "未懷孕母犬出現類似懷孕的生理及行為變化",
        "synonyms": ["假懷孕", "偽孕"],
        "epidemiology": {
            "prevalence": "常見",
            "riskFactors": ["未絕育母犬", "不規則發情週期"],
            "animalGroups": ["未絕育母犬"]
        },
        "clinicalPresentation": {
            "symptoms": ["築巢行為", "收集玩具", "食慾變化"],
            "signs": ["乳腺腫大", "泌乳", "腹部膨大"],
            "complications": ["乳腺炎", "行為問題"]
        },
        "pathophysiology": "黃體素下降後泌乳素升高",
        "diagnosis": {
            "primary": ["病史及臨床症狀", "腹部超音波排除真正懷孕"],
            "supportive": ["血液黃體素測定"],
            "differential": ["真正懷孕", "子宮蓄膿"]
        },
        "treatment": {
            "medical": ["Cabergoline", "避免刺激乳腺"],
            "surgical": ["卵巢子宮摘除術"],
            "supportive": ["移除築巢材料", "增加運動"]
        },
        "prognosis": "通常2-3週內自行緩解",
        "pearls": ["避免刺激乳腺以免延長泌乳", "是正常生理反應的誇大"],
        "monitoring": ["乳腺狀態", "行為變化"],
        "reference": "Canine and Feline Theriogenology"
    },
    "mastitis": {
        "zh": "乳腺炎",
        "en": "Mastitis",
        "definition": "乳腺的細菌性感染及發炎",
        "synonyms": ["乳房炎", "泌乳期乳腺感染"],
        "epidemiology": {
            "prevalence": "少見",
            "riskFactors": ["泌乳期", "乳頭外傷", "假孕"],
            "animalGroups": ["泌乳期母犬", "假孕母犬"]
        },
        "clinicalPresentation": {
            "symptoms": ["拒絕哺乳", "發燒", "食慾不振"],
            "signs": ["乳腺腫脹發硬", "乳腺發熱疼痛", "乳汁異常"],
            "complications": ["乳腺膿瘍", "壞疽性乳腺炎", "敗血症"]
        },
        "pathophysiology": "細菌經乳頭管逆行感染乳腺組織",
        "diagnosis": {
            "primary": ["身體檢查", "乳汁細胞學"],
            "supportive": ["乳汁培養", "超音波"],
            "differential": ["乳腺腫瘤", "乳腺增生"]
        },
        "treatment": {
            "medical": ["廣效性抗生素", "消炎止痛藥"],
            "surgical": ["膿瘍引流", "乳腺切除術"],
            "supportive": ["溫敷", "幼崽可能需人工餵養"]
        },
        "prognosis": "早期治療預後良好",
        "pearls": ["壞疽性乳腺炎是急症", "需評估幼崽健康狀態"],
        "monitoring": ["乳腺外觀", "乳汁性質", "體溫"],
        "reference": "Canine and Feline Theriogenology"
    },
    "testicular-tumor-general": {
        "zh": "睪丸腫瘤",
        "en": "Testicular Tumor",
        "definition": "起源於睪丸組織的腫瘤",
        "synonyms": ["睪丸癌", "睪丸贅生物"],
        "epidemiology": {
            "prevalence": "常見（老年公犬）",
            "riskFactors": ["隱睪症", "老年", "未絕育"],
            "animalGroups": ["老年公犬", "隱睪犬"]
        },
        "clinicalPresentation": {
            "symptoms": ["睪丸腫大或不對稱", "雌性化表現"],
            "signs": ["睪丸腫塊", "腹腔腫塊（隱睪）", "乳腺發育"],
            "complications": ["雌激素過多症候群", "骨髓抑制", "轉移"]
        },
        "pathophysiology": "精原細胞、間質細胞或支持細胞的腫瘤性增生",
        "diagnosis": {
            "primary": ["睪丸觸診", "腹部超音波"],
            "supportive": ["荷爾蒙測定", "胸腔X光"],
            "differential": ["睪丸炎", "附睪炎"]
        },
        "treatment": {
            "medical": ["化療（轉移時）"],
            "surgical": ["雙側去勢術"],
            "supportive": ["輸血（骨髓抑制時）"]
        },
        "prognosis": "去勢後大多數預後良好",
        "pearls": ["隱睪犬風險高13倍", "三種腫瘤可能同時存在"],
        "monitoring": ["荷爾蒙正常化", "骨髓恢復"],
        "reference": "Small Animal Clinical Oncology"
    },
    // === 牙科口腔疾病 ===
    "dental-abscess": {
        "zh": "牙齒膿瘍",
        "en": "Dental Abscess",
        "definition": "牙齒或周圍組織的局部化膿性病變",
        "synonyms": ["根尖膿瘍", "牙根膿瘍"],
        "epidemiology": {
            "prevalence": "常見",
            "riskFactors": ["牙周病", "牙齒外傷", "齲齒"],
            "animalGroups": ["中老年犬貓", "小型犬"]
        },
        "clinicalPresentation": {
            "symptoms": ["口臭", "流涎", "採食困難", "面部腫脹"],
            "signs": ["齒齦紅腫", "牙齒鬆動", "眶下腫脹"],
            "complications": ["骨髓炎", "口鼻瘻管"]
        },
        "pathophysiology": "細菌通過牙周囊袋或暴露的牙髓進入根尖區域",
        "diagnosis": {
            "primary": ["口腔檢查", "牙科X光"],
            "supportive": ["探針檢查", "細菌培養"],
            "differential": ["腫瘤", "異物", "顏面骨折"]
        },
        "treatment": {
            "medical": ["廣效性抗生素", "止痛藥"],
            "surgical": ["拔牙", "根管治療", "膿瘍引流"],
            "supportive": ["軟食", "口腔衛生維護"]
        },
        "prognosis": "及時治療預後良好",
        "pearls": ["上顎第四前臼齒膿瘍常表現為眶下腫脹", "牙科X光是確診關鍵"],
        "monitoring": ["術後感染控制", "骨骼癒合"],
        "reference": "Veterinary Dentistry"
    },
    "salivary-mucocele": {
        "zh": "唾液腺囊腫",
        "en": "Salivary Mucocele",
        "definition": "唾液腺或其導管破損後唾液外滲形成的囊腫",
        "synonyms": ["唾液黏液囊腫", "唾液囊腫"],
        "epidemiology": {
            "prevalence": "少見",
            "riskFactors": ["外傷", "異物"],
            "animalGroups": ["德國牧羊犬", "貴賓犬"]
        },
        "clinicalPresentation": {
            "symptoms": ["頸部漸進性腫脹", "吞嚥困難"],
            "signs": ["波動性軟性腫塊", "舌下腫脹"],
            "complications": ["呼吸道阻塞", "繼發感染"]
        },
        "pathophysiology": "唾液外滲至周圍組織形成假性囊腫",
        "diagnosis": {
            "primary": ["細針抽吸（黏稠透明液體）"],
            "supportive": ["唾液腺造影", "超音波"],
            "differential": ["膿瘍", "血腫", "腫瘤"]
        },
        "treatment": {
            "medical": ["單純引流效果差"],
            "surgical": ["受影響唾液腺摘除"],
            "supportive": ["術後軟食"]
        },
        "prognosis": "手術摘除後預後極佳",
        "pearls": ["抽出液體呈透明黏稠狀", "需同時摘除下顎腺和舌下腺"],
        "monitoring": ["術後腫脹消退", "復發跡象"],
        "reference": "Textbook of Small Animal Surgery"
    },
    // === 行為學疾病 ===
    "cognitive-dysfunction": {
        "zh": "認知功能障礙",
        "en": "Cognitive Dysfunction Syndrome",
        "definition": "老年犬貓因大腦退化導致的認知功能下降",
        "synonyms": ["老年癡呆", "CDS"],
        "epidemiology": {
            "prevalence": "常見",
            "riskFactors": ["高齡", "缺乏心智刺激"],
            "animalGroups": ["11歲以上犬隻", "15歲以上貓隻"]
        },
        "clinicalPresentation": {
            "symptoms": ["迷路", "不認得主人", "睡眠週期改變"],
            "signs": ["凝視空間", "繞圈行為", "忘記指令"],
            "complications": ["夜間嚎叫", "攻擊行為"]
        },
        "pathophysiology": "腦部β-澱粉樣蛋白沉積和神經傳導物質減少",
        "diagnosis": {
            "primary": ["行為問卷評估", "排除其他疾病"],
            "supportive": ["血液檢查", "MRI"],
            "differential": ["腦腫瘤", "甲狀腺功能異常"]
        },
        "treatment": {
            "medical": ["Selegiline", "抗氧化劑"],
            "surgical": ["無"],
            "supportive": ["環境豐富化", "維持規律作息"]
        },
        "prognosis": "進行性退化，無法治癒",
        "pearls": ["DISHAA評估量表", "需先排除可治療的問題"],
        "monitoring": ["定期行為評估", "症狀進展"],
        "reference": "Canine and Feline Behavior"
    },
    "separation-anxiety-severe": {
        "zh": "嚴重分離焦慮",
        "en": "Severe Separation Anxiety",
        "definition": "與主人分離時表現出的嚴重焦慮行為",
        "synonyms": ["分離焦慮症"],
        "epidemiology": {
            "prevalence": "常見",
            "riskFactors": ["早期分離", "創傷經歷", "過度依賴"],
            "animalGroups": ["收容所領養犬", "幼年分離犬"]
        },
        "clinicalPresentation": {
            "symptoms": ["持續吠叫", "破壞行為", "排泄不當"],
            "signs": ["主人離開時焦躁", "過度流涎", "自殘行為"],
            "complications": ["自我傷害", "鄰居投訴"]
        },
        "pathophysiology": "依附關係異常和焦慮調節障礙",
        "diagnosis": {
            "primary": ["行為史採集", "視頻監控"],
            "supportive": ["排除醫學問題"],
            "differential": ["無聊", "恐懼", "認知功能障礙"]
        },
        "treatment": {
            "medical": ["Fluoxetine", "Clomipramine", "Trazodone"],
            "surgical": ["無"],
            "supportive": ["行為修正", "減敏訓練", "環境豐富化"]
        },
        "prognosis": "長期管理可顯著改善",
        "pearls": ["處罰會惡化症狀", "藥物需配合行為治療"],
        "monitoring": ["行為改善", "藥物副作用"],
        "reference": "Clinical Behavioral Medicine"
    },
    // === 腫瘤科疾病 ===
    "hepatocellular-carcinoma": {
        "zh": "肝細胞癌",
        "en": "Hepatocellular Carcinoma",
        "definition": "起源於肝細胞的原發性惡性腫瘤",
        "synonyms": ["肝癌", "HCC"],
        "epidemiology": {
            "prevalence": "少見",
            "riskFactors": ["高齡", "慢性肝病"],
            "animalGroups": ["老年犬", "大型犬"]
        },
        "clinicalPresentation": {
            "symptoms": ["厭食", "體重減輕", "嘔吐", "腹部膨大"],
            "signs": ["肝腫大", "腹部腫塊", "腹水"],
            "complications": ["腫瘤破裂出血", "低血糖"]
        },
        "pathophysiology": "肝細胞惡性轉化形成不受控增生",
        "diagnosis": {
            "primary": ["腹部超音波", "肝臟生化指標"],
            "supportive": ["超音波導引切片", "CT掃描"],
            "differential": ["肝臟轉移性腫瘤", "膽管細胞癌"]
        },
        "treatment": {
            "medical": ["化療效果有限", "支持療法"],
            "surgical": ["肝葉切除術"],
            "supportive": ["營養支持", "保肝治療"]
        },
        "prognosis": "巨塊型手術切除後存活時間>3年",
        "pearls": ["巨塊型手術預後最好", "術前CT評估很重要"],
        "monitoring": ["肝功能指標", "超音波追蹤"],
        "reference": "Small Animal Clinical Oncology"
    },
    "appendicular-osteosarcoma": {
        "zh": "四肢骨肉瘤",
        "en": "Appendicular Osteosarcoma",
        "definition": "發生於四肢骨骼的原發性惡性骨腫瘤",
        "synonyms": ["肢體骨肉瘤"],
        "epidemiology": {
            "prevalence": "常見（大型犬）",
            "riskFactors": ["大型至巨型品種", "中老年"],
            "animalGroups": ["大丹犬", "聖伯納", "愛爾蘭獵狼犬"]
        },
        "clinicalPresentation": {
            "symptoms": ["漸進性跛行", "患肢腫脹", "疼痛"],
            "signs": ["骨骼腫脹", "病理性骨折", "肌肉萎縮"],
            "complications": ["病理性骨折", "肺轉移"]
        },
        "pathophysiology": "惡性成骨細胞不受控增生",
        "diagnosis": {
            "primary": ["X光檢查", "胸腔X光"],
            "supportive": ["骨切片病理", "鹼性磷酸酶"],
            "differential": ["其他骨腫瘤", "骨髓炎"]
        },
        "treatment": {
            "medical": ["化療（Carboplatin）", "止痛藥"],
            "surgical": ["截肢", "保肢手術"],
            "supportive": ["放射治療", "疼痛管理"]
        },
        "prognosis": "截肢合併化療中位存活時間約10-12個月",
        "pearls": ["前肢遠端、後肢近端是好發位置", "早期積極疼痛控制很重要"],
        "monitoring": ["胸腔X光", "疼痛評估"],
        "reference": "Small Animal Clinical Oncology"
    },
    "mast-cell-tumor-high-grade": {
        "zh": "高惡性度肥大細胞瘤",
        "en": "High-Grade Mast Cell Tumor",
        "definition": "皮膚肥大細胞的高度惡性腫瘤",
        "synonyms": ["高級別肥大細胞腫瘤", "MCT III級"],
        "epidemiology": {
            "prevalence": "常見",
            "riskFactors": ["品種傾向", "特定基因突變"],
            "animalGroups": ["拳師犬", "拉布拉多", "波士頓梗"]
        },
        "clinicalPresentation": {
            "symptoms": ["快速生長的皮膚腫塊", "潰瘍"],
            "signs": ["腫塊大小變化（Darier徵象）", "淋巴結腫大"],
            "complications": ["全身性肥大細胞增生症", "胃腸道潰瘍"]
        },
        "pathophysiology": "肥大細胞惡性增生並釋放組織胺等介質",
        "diagnosis": {
            "primary": ["細針抽吸細胞學", "組織切片病理分級"],
            "supportive": ["淋巴結抽吸", "腹部超音波"],
            "differential": ["其他皮膚腫瘤", "脂肪瘤"]
        },
        "treatment": {
            "medical": ["化療（Vinblastine）", "標靶藥物（Toceranib）", "抗組織胺"],
            "surgical": ["廣泛切除", "淋巴結切除"],
            "supportive": ["胃保護劑"]
        },
        "prognosis": "高惡性度預後較差，中位存活時間數月",
        "pearls": ["c-kit突變檢測對標靶治療有指導意義", "術前給予抗組織胺"],
        "monitoring": ["局部復發", "淋巴結和內臟轉移"],
        "reference": "Small Animal Clinical Oncology"
    }
};

// 將新疾病資料轉換為格式化的 JSON 字串
function formatDiseaseEntry(key, data) {
    return `
    "${key}": ${JSON.stringify(data, null, 4).split('\n').map((line, i) => i === 0 ? line : '    ' + line).join('\n')}`;
}

// 組合所有新疾病
let newDiseasesStr = '';
for (const [key, value] of Object.entries(newDiseases)) {
    newDiseasesStr += ',' + formatDiseaseEntry(key, value);
}

// 找到最後一個疾病條目的結尾位置（在 }; 之前）
const lastBracePos = html.lastIndexOf('}', diseaseInfoEnd - 1);

// 插入新疾病
const before = html.substring(0, lastBracePos + 1);
const after = html.substring(lastBracePos + 1);

const newHtml = before + newDiseasesStr + after;

// 寫入更新後的文件
fs.writeFileSync('vet-differential-diagnosis-v2.html', newHtml, 'utf8');

console.log(`成功新增 ${Object.keys(newDiseases).length} 個疾病`);
console.log('新增的疾病列表:');
Object.keys(newDiseases).forEach((key, i) => {
    console.log(`  ${i + 1}. ${key} - ${newDiseases[key].zh}`);
});

// 心血管系統疾病資料庫
// Cardiovascular System Diseases Database
// 基於 MSD Veterinary Manual, VCA Hospitals, ACVIM Guidelines 等權威來源

const CARDIOVASCULAR_DISEASES = {
    // ============================================
    // 1. 犬心絲蟲性心臟病
    // ============================================
    "heartworm_heart_disease": {
        name: {
            zh: "犬心絲蟲性心臟病",
            en: "Heartworm-associated Heart Disease"
        },
        definition: "由犬心絲蟲（Dirofilaria immitis）成蟲寄生於肺動脈及右心室引起的心血管疾病。成蟲可存活5-7年，導致肺動脈內膜炎、肺高壓、右心衰竭及腔靜脈症候群等嚴重併發症。",
        synonyms: ["心絲蟲病", "犬惡絲蟲病", "Dirofilariasis", "Canine Heartworm Disease", "HWD"],
        epidemiology: {
            species: ["犬（主要宿主）", "貓（非典型宿主）", "雪貂"],
            age: "任何年齡，但通常需1年以上才出現臨床症狀；戶外犬感染風險更高",
            sex: "無明顯性別差異",
            riskFactors: [
                "居住於蚊蟲流行地區（熱帶/亞熱帶）",
                "未使用心絲蟲預防藥物",
                "戶外活動頻繁",
                "台灣全島皆為流行區，尤其夏季",
                "年齡越大、暴露時間越長風險越高"
            ]
        },
        clinicalPresentation: {
            history: [
                "早期可無症狀",
                "運動不耐受、易疲勞",
                "慢性咳嗽（尤其運動後）",
                "呼吸困難、氣喘",
                "體重減輕、食慾下降",
                "晚期：腹水、暈厥、咯血"
            ],
            physicalExam: [
                "心雜音（三尖瓣區收縮期雜音）",
                "第二心音分裂或增強",
                "頸靜脈怒張或搏動",
                "肝脾腫大",
                "腹水",
                "黏膜蒼白或發紺",
                "惡病質（晚期）",
                "腔靜脈症候群：血紅蛋白尿、黃疸、休克"
            ]
        },
        pathophysiology: "蚊蟲叮咬傳播L3幼蟲 → 組織內發育為L5 → 進入血流至肺動脈 → 成蟲寄生 → 內皮損傷、絨毛增生 → 肺動脈炎、血栓形成 → 肺高壓 → 右心負荷增加 → 右心肥大、擴張 → 三尖瓣關閉不全 → 右心衰竭。嚴重感染或急性成蟲死亡可導致肺栓塞、DIC。",
        diagnosis: {
            overview: "結合抗原檢測、微絲蟲檢查、影像學及臨床表現綜合診斷",
            differentials: [
                "擴張型心肌病",
                "肺原發性高壓",
                "肺栓塞（其他原因）",
                "慢性支氣管炎",
                "肺腫瘤",
                "三尖瓣發育不全"
            ],
            initialDB: [
                "心絲蟲抗原檢測（ELISA/免疫層析）- 檢測成蟲抗原，敏感度高",
                "微絲蟲檢查（Knott's test或濾膜法）",
                "CBC：嗜酸性球增多、再生性貧血",
                "血液生化：肝腎功能評估",
                "尿液分析：血紅蛋白尿（腔靜脈症候群）",
                "胸腔X光：右心擴大、肺動脈擴張、肺實質病變"
            ],
            advanced: [
                "心臟超音波：可見成蟲影像、右心擴大、肺高壓指標（三尖瓣逆流速度）",
                "心電圖：右心擴大pattern（深S波、右軸偏移）",
                "NT-proBNP：評估心臟負荷",
                "D-dimer：評估血栓風險"
            ]
        },
        treatment: {
            overview: "依感染嚴重程度分級治療，包括成蟲殺滅、穩定心血管功能、預防併發症",
            acute: [
                "腔靜脈症候群：緊急手術取蟲（經頸靜脈）",
                "心衰竭穩定：",
                "  - 氧氣治療",
                "  - Furosemide 2-4 mg/kg IV/IM/PO q8-12h",
                "  - 絕對限制運動",
                "  - Pimobendan 0.25-0.3 mg/kg PO q12h（改善心輸出）",
                "血栓栓塞處理：支持療法、抗凝血",
                "類固醇：Prednisolone 1-2 mg/kg/day（減少肺炎反應）"
            ],
            chronic: [
                "AHS（美國心絲蟲學會）成蟲殺滅療程：",
                "  - 預處理：Doxycycline 10 mg/kg PO q12h × 4週（殺Wolbachia）",
                "  - 微絲蟲清除：開始預防藥（Ivermectin類）",
                "  - Melarsomine（Immiticide）：",
                "    * 標準三劑療程：第1劑 → 休息1月 → 第2、3劑間隔24h",
                "    * 劑量：2.5 mg/kg IM 深層肌肉注射",
                "嚴格限制運動6-8週",
                "心衰竭持續管理：利尿劑、ACE抑制劑、Pimobendan",
                "終身心絲蟲預防"
            ]
        },
        prognosis: "取決於感染程度和心臟損傷程度。Class 1-2（輕中度）：預後良好，成蟲清除後可完全恢復。Class 3（重度心衰）：預後謹慎，可能有永久性心臟損傷。腔靜脈症候群：若未緊急手術，死亡率極高。",
        pearls: [
            "抗原檢測可能在感染後6個月才呈陽性（需成熟雌蟲）",
            "單性感染（僅雄蟲）可能抗原陰性",
            "貓的診斷更困難：抗原敏感度低、常無微絲蟲血症",
            "成蟲殺滅後4-6週是肺栓塞高風險期，必須嚴格限制運動",
            "Melarsomine注射部位疼痛，需妥善疼痛管理",
            "預防勝於治療：每月預防藥是最佳策略"
        ],
        monitoring: [
            "成蟲殺滅後：每週監測肺栓塞症狀",
            "治療完成後6個月複查抗原",
            "心臟超音波追蹤肺高壓改善情況",
            "胸腔X光評估肺部病變消退",
            "終身每年心絲蟲篩檢"
        ],
        references: [
            "American Heartworm Society Guidelines 2024",
            "Nelson CT, et al. Current Canine Guidelines for the Prevention, Diagnosis, and Management of Heartworm Infection in Dogs",
            "MSD Veterinary Manual - Heartworm Disease",
            "ACVIM Consensus Statement on Heartworm Disease"
        ]
    },

    // ============================================
    // 2. 心內膜炎
    // ============================================
    "endocarditis": {
        name: {
            zh: "感染性心內膜炎",
            en: "Infective Endocarditis"
        },
        definition: "心臟瓣膜或心內膜的細菌性感染，形成贅生物（vegetations），導致瓣膜功能障礙、栓塞及全身性感染。犬以主動脈瓣最常受累，貓罕見。",
        synonyms: ["細菌性心內膜炎", "Bacterial Endocarditis", "Valvular Endocarditis", "IE"],
        epidemiology: {
            species: ["犬（較常見）", "貓（罕見）"],
            age: "中老年犬（平均5-7歲），大型犬更常見",
            sex: "雄性略多（約2:1）",
            riskFactors: [
                "先天性心臟病（主動脈瓣下狹窄）",
                "主動脈瓣或二尖瓣疾病",
                "免疫抑制狀態",
                "慢性感染灶（牙周病、泌尿道感染、皮膚感染、前列腺炎）",
                "近期侵入性手術或導管置放",
                "大型犬品種：德國牧羊犬、金毛、拉布拉多"
            ]
        },
        clinicalPresentation: {
            history: [
                "不明原因發燒（間歇性或持續性）",
                "精神沉鬱、食慾下降",
                "體重減輕",
                "跛行（栓塞性關節炎）",
                "呼吸困難、咳嗽",
                "虛弱、運動不耐",
                "症狀可能慢性波動"
            ],
            physicalExam: [
                "新出現的心雜音或雜音性質改變",
                "發燒（可能間歇性）",
                "心律不整",
                "脈搏品質異常（水衝脈於主動脈瓣逆流）",
                "跛行（多發性關節炎）",
                "脾腫大",
                "眼底檢查：視網膜出血、Roth斑",
                "皮膚栓塞病灶",
                "心衰竭表現（晚期）"
            ]
        },
        pathophysiology: "菌血症 → 細菌附著於受損或異常瓣膜內皮 → 血小板-纖維素沉積形成贅生物 → 贅生物內細菌受保護、難以清除 → 瓣膜破壞、逆流 → 贅生物碎片脫落 → 全身性栓塞（腎、脾、腦、關節、心肌）→ 持續菌血症 → 免疫複合體沉積 → 腎絲球腎炎、多發性關節炎",
        diagnosis: {
            overview: "基於Modified Duke Criteria：血液培養陽性 + 心臟超音波贅生物 + 臨床表現",
            differentials: [
                "退化性瓣膜疾病",
                "先天性瓣膜異常",
                "免疫介導性多發性關節炎",
                "播散性腫瘤",
                "全身性紅斑狼瘡",
                "原發性菌血症/敗血症"
            ],
            initialDB: [
                "血液培養：至少3組、間隔30分鐘採集、抗生素使用前",
                "CBC：嗜中性球增多（可能左移）、貧血（慢性病）、血小板減少或增多",
                "血液生化：低白蛋白、高球蛋白、氮血症",
                "尿液分析：蛋白尿、血尿、膿尿",
                "急性期蛋白：CRP、SAA升高"
            ],
            advanced: [
                "心臟超音波（確診關鍵）：",
                "  - 瓣膜上可動性贅生物",
                "  - 瓣膜逆流（彩色都卜勒）",
                "  - 瓣膜破壞、穿孔",
                "  - 最常累及：主動脈瓣 > 二尖瓣",
                "心電圖：傳導異常（贅生物侵犯傳導系統）",
                "關節液分析：菌血症時",
                "腹部超音波：脾腎梗塞"
            ]
        },
        treatment: {
            overview: "長期靜脈抗生素治療為主，支持心臟功能，必要時手術",
            acute: [
                "經驗性抗生素（血培養結果前）：",
                "  - Ampicillin 22 mg/kg IV q6-8h + Enrofloxacin 5-10 mg/kg IV q24h",
                "  - 或 Ampicillin-sulbactam + Aminoglycoside",
                "心衰竭處理：",
                "  - Furosemide 利尿",
                "  - Pimobendan 強心",
                "  - ACE抑制劑",
                "支持療法：輸液、營養支持"
            ],
            chronic: [
                "依血培養藥敏結果調整抗生素",
                "抗生素療程：靜脈至少2週 → 口服總計6-8週",
                "常見致病菌與抗生素選擇：",
                "  - Staphylococcus：Cephalosporin或Amoxicillin-clavulanate",
                "  - Streptococcus：Ampicillin或Penicillin",
                "  - Escherichia coli：Fluoroquinolone",
                "  - Bartonella：Azithromycin + Fluoroquinolone",
                "心臟藥物持續管理",
                "牙周病等感染源處理（穩定後）"
            ]
        },
        prognosis: "總體預後謹慎至不良。主動脈瓣IE：急性心衰竭風險高，預後較差（中位存活約1個月）。二尖瓣IE：預後稍好。影響因素：致病菌種類、贅生物大小、併發症、治療反應。栓塞併發症可造成永久器官損傷。",
        pearls: [
            "主動脈瓣下狹窄犬IE風險特別高",
            "血培養陰性不能排除IE（可能已用抗生素、難培養菌）",
            "Bartonella是犬IE重要病原，需特殊培養或PCR",
            "新出現舒張期雜音高度懷疑主動脈瓣IE",
            "多發性關節炎+心雜音+發燒=高度懷疑IE",
            "治療前務必完成血培養採集"
        ],
        monitoring: [
            "體溫每日監測",
            "CRP/SAA每週監測治療反應",
            "心臟超音波每2-4週：評估贅生物變化",
            "重複血培養確認轉陰",
            "腎功能監測（抗生素腎毒性+腎栓塞）",
            "心電圖追蹤傳導異常"
        ],
        references: [
            "Sykes JE, et al. Infective Endocarditis in Dogs. JVIM 2006",
            "ACVIM Consensus Statement on Infective Endocarditis",
            "MacDonald KA. Infective Endocarditis. In: Textbook of Veterinary Internal Medicine",
            "MSD Veterinary Manual - Endocarditis"
        ]
    },

    // ============================================
    // 3. 心肌炎
    // ============================================
    "myocarditis": {
        name: {
            zh: "心肌炎",
            en: "Myocarditis"
        },
        definition: "心肌的炎症性疾病，可由感染性或非感染性原因引起，導致心肌細胞損傷、心臟功能障礙及心律不整。可為急性、亞急性或慢性表現。",
        synonyms: ["心肌發炎", "Inflammatory Cardiomyopathy", "Infectious Myocarditis"],
        epidemiology: {
            species: ["犬", "貓"],
            age: "任何年齡；病毒性心肌炎多見於幼犬（Parvovirus）；Chagas病見於特定地區成犬",
            sex: "無明顯性別差異",
            riskFactors: [
                "病毒感染：Parvovirus（幼犬）、貓瘟、犬瘟熱",
                "原蟲感染：Trypanosoma cruzi（Chagas病）、弓形蟲",
                "細菌性心內膜炎延伸",
                "藥物毒性：Doxorubicin",
                "免疫介導性疾病",
                "全身性感染/敗血症"
            ]
        },
        clinicalPresentation: {
            history: [
                "急性：突發虛弱、倒塌、猝死",
                "漸進性運動不耐",
                "呼吸困難、咳嗽",
                "食慾減退、精神沉鬱",
                "嘔吐、腹瀉（如同時有腸道感染）",
                "幼犬Parvovirus：常在腸道症狀恢復後突然死亡"
            ],
            physicalExam: [
                "心律不整（心室性早期收縮最常見）",
                "心搏過速或過緩",
                "脈搏微弱或脈搏落差",
                "奔馬律（S3 gallop）",
                "心雜音（可能無）",
                "肺部濕囉音（心衰竭）",
                "腹水",
                "發燒（感染性）",
                "低體溫（休克）"
            ]
        },
        pathophysiology: "病原體或毒素直接損傷心肌細胞 → 心肌細胞壞死 → 炎症細胞浸潤（淋巴球、巨噬細胞、漿細胞）→ 纖維化 → 收縮功能障礙 → 心輸出量下降。同時：心肌細胞損傷 → 異位節律點形成 → 心律不整（常為心室來源）→ 可致猝死。慢性期：可能進展為擴張型心肌病。",
        diagnosis: {
            overview: "結合臨床表現、心臟生物標記升高、影像學異常及排除其他心臟病；確診需心肌切片但臨床少執行",
            differentials: [
                "擴張型心肌病（DCM）",
                "心律不整性右心室心肌病（ARVC）",
                "藥物性心肌毒性",
                "甲狀腺功能低下性心肌病",
                "牛磺酸缺乏（貓、某些犬種）",
                "感染性心內膜炎"
            ],
            initialDB: [
                "CBC：可能白血球增多或減少",
                "血液生化：基礎評估",
                "心肌損傷標記：cTnI顯著升高（>1 ng/mL有意義）",
                "心電圖：",
                "  - 心室性早期收縮（VPCs）",
                "  - 心室性心搏過速",
                "  - 房室傳導阻滯",
                "  - ST-T波異常",
                "胸腔X光：心臟擴大、肺水腫"
            ],
            advanced: [
                "心臟超音波：",
                "  - 左心室收縮功能下降（FS < 25%）",
                "  - 心室擴大",
                "  - 局部壁運動異常",
                "  - 可能有心包積液",
                "24小時Holter監測：評估心律不整負擔",
                "病原學檢查：PCR（Parvovirus、T. cruzi等）",
                "心肌切片（確診但臨床少用）"
            ]
        },
        treatment: {
            overview: "針對病因治療、控制心律不整、支持心臟功能",
            acute: [
                "心室性心搏過速控制：",
                "  - Lidocaine 2 mg/kg IV bolus，然後 40-80 mcg/kg/min CRI",
                "  - 或 Procainamide 2-8 mg/kg IV",
                "心衰竭處理：",
                "  - Furosemide 2-4 mg/kg IV",
                "  - 氧氣支持",
                "  - Dobutamine 5-15 mcg/kg/min（低輸出量）",
                "休克處理：謹慎輸液、血管升壓劑",
                "針對原發病因治療"
            ],
            chronic: [
                "心律不整口服管理：",
                "  - Sotalol 1-2 mg/kg PO q12h",
                "  - 或 Mexiletine 5-8 mg/kg PO q8h",
                "心衰竭管理：",
                "  - Pimobendan 0.25-0.3 mg/kg PO q12h",
                "  - ACE抑制劑：Enalapril 0.5 mg/kg PO q12-24h",
                "  - Furosemide 依需要調整",
                "Chagas病：Benznidazole（效果有限）",
                "免疫介導性：免疫抑制治療（爭議）"
            ]
        },
        prognosis: "變異極大，取決於病因和嚴重程度。病毒性心肌炎：急性期危險，若存活可能完全恢復或進展為DCM。Chagas病心肌炎：預後差，通常進展為終末期心衰竭。幼犬Parvovirus心肌炎：急性期死亡率高。輕度心肌炎：支持治療下可能完全恢復。",
        pearls: [
            "cTnI升高是心肌損傷敏感指標，但非特異性",
            "幼犬腹瀉後猝死應懷疑Parvovirus心肌炎",
            "Chagas病心肌炎常表現為ARVC樣病變",
            "心律不整是心肌炎主要死亡原因",
            "DCM可能是既往心肌炎的後果",
            "某些抗心律不整藥物有負性肌力作用，需謹慎使用"
        ],
        monitoring: [
            "連續心電圖監測（住院期間）",
            "cTnI趨勢追蹤",
            "24小時Holter每2-4週（評估心律不整控制）",
            "心臟超音波每月（評估功能恢復或惡化）",
            "電解質監測（尤其鉀）"
        ],
        references: [
            "Meurs KM. Myocarditis in Dogs and Cats. In: Kirk's Current Veterinary Therapy",
            "Trehiou-Sechi E, et al. Comparative Echocardiographic Features of Myocarditis",
            "MSD Veterinary Manual - Myocarditis",
            "Barr SC. Canine Chagas Disease (American Trypanosomiasis)"
        ]
    },

    // ============================================
    // 4. 限制性心肌病（貓）
    // ============================================
    "restrictive_cardiomyopathy": {
        name: {
            zh: "限制性心肌病",
            en: "Restrictive Cardiomyopathy (RCM)"
        },
        definition: "以心室舒張功能障礙為特徵的心肌病，心室壁僵硬、順應性下降，導致心室充盈受限而收縮功能相對保留。常見於貓，犬罕見。心內膜或心肌纖維化是主要病理特徵。",
        synonyms: ["限制型心肌病", "心肌限制症", "Feline RCM", "Endomyocardial Fibrosis"],
        epidemiology: {
            species: ["貓（主要）", "犬（罕見）"],
            age: "中老年貓（平均8-10歲），範圍1-16歲",
            sex: "雄性稍多",
            riskFactors: [
                "既往心肌炎或心肌損傷",
                "嗜酸性球性心內膜炎（可能病因）",
                "心肌梗塞後",
                "特發性（原因不明，最常見）",
                "品種：無明確品種傾向，但某些家族可能有遺傳性"
            ]
        },
        clinicalPresentation: {
            history: [
                "急性呼吸困難（肺水腫或胸水）",
                "運動不耐",
                "食慾減退、精神沉鬱",
                "體重減輕",
                "後肢急性癱瘓、疼痛（主動脈血栓栓塞）",
                "暈厥（少見）",
                "可能無明顯先兆即出現心衰竭"
            ],
            physicalExam: [
                "奔馬律（S3和/或S4 gallop）",
                "心搏過速",
                "心雜音（收縮期，二尖瓣或三尖瓣逆流）",
                "心律不整",
                "呼吸音減弱（胸水）或濕囉音（肺水腫）",
                "呼吸急促、張口呼吸",
                "後肢癱瘓、脈搏消失、肉墊發紺（ATE）",
                "體溫可能降低"
            ]
        },
        pathophysiology: "心內膜或心肌纖維化 → 心室壁僵硬 → 舒張期心室擴張受限 → 心室充盈壓升高 → 心房壓力升高 → 左心房擴大 → 肺靜脈壓升高 → 肺水腫/胸水。左心房擴大 → 血流淤滯 → 血栓形成 → 主動脈血栓栓塞（ATE）（約50%患貓發生）。收縮功能可能正常或輕度受損。",
        diagnosis: {
            overview: "主要依賴心臟超音波，表現為舒張功能障礙、心房擴大、心室內膜或心肌異常",
            differentials: [
                "肥厚型心肌病（HCM）",
                "擴張型心肌病（DCM）",
                "未分類心肌病（UCM）",
                "心包疾病",
                "甲狀腺功能亢進性心臟病"
            ],
            initialDB: [
                "胸腔X光：",
                "  - 心臟輪廓異常（valentine shape或整體擴大）",
                "  - 左心房擴大",
                "  - 肺水腫或胸水",
                "CBC、生化：排除全身性疾病",
                "T4：排除甲亢",
                "NT-proBNP：通常顯著升高",
                "cTnI：可能升高"
            ],
            advanced: [
                "心臟超音波（確診關鍵）：",
                "  - 左心房明顯擴大（LA/Ao > 2.0）",
                "  - 左心室壁厚度正常或輕度增厚",
                "  - 心室內膜增厚、回音增強",
                "  - 舒張功能異常（限制性充盈模式）",
                "  - 二尖瓣E/A比值 > 2",
                "  - 左心房內自發性回音或血栓",
                "  - 收縮功能正常或輕度下降",
                "心電圖：心房顫動、心室性心律不整、傳導異常"
            ]
        },
        treatment: {
            overview: "無法治癒，目標為控制心衰竭、預防血栓、延緩疾病進展",
            acute: [
                "急性呼吸困難/肺水腫：",
                "  - 氧氣治療（氧氣籠）",
                "  - Furosemide 1-2 mg/kg IV/IM q1-4h直到穩定",
                "  - 最小化處置壓力",
                "  - Butorphanol 0.2 mg/kg IM（鎮靜、減少焦慮）",
                "胸水引流：治療性胸腔穿刺",
                "主動脈血栓栓塞（ATE）：",
                "  - 疼痛控制：Methadone 0.1-0.3 mg/kg IV/IM",
                "  - 抗凝血：Heparin 或 Clopidogrel",
                "  - 支持療法",
                "  - 預後討論（ATE存活率約30-40%）"
            ],
            chronic: [
                "利尿劑：Furosemide 1-2 mg/kg PO q12-24h（調整至最低有效劑量）",
                "Pimobendan 0.25 mg/kg PO q12h（改善舒張功能、預防血栓）",
                "ACE抑制劑：Benazepril 0.5 mg/kg PO q24h",
                "血栓預防（關鍵）：",
                "  - Clopidogrel 18.75 mg/cat PO q24h（首選）",
                "  - 可合併低劑量Aspirin或Rivaroxaban",
                "心律不整控制：",
                "  - Atenolol 6.25-12.5 mg/cat PO q12-24h（心率控制）",
                "  - Diltiazem（若β-blocker禁忌）",
                "低鈉飲食、限制活動"
            ]
        },
        prognosis: "預後謹慎至不良，中位存活時間約3-6個月（範圍數週至2年以上）。影響因素：診斷時心衰竭嚴重程度、是否發生ATE、對治療的反應、心律不整類型。ATE發生後：存活率約30-40%，即使存活也常復發。心房顫動：預後更差。",
        pearls: [
            "RCM和HCM的鑑別有時困難，需經驗豐富的超音波評估",
            "左心房擴大程度是ATE風險的重要預測指標",
            "貓心肌病最常見死因是ATE和頑固性心衰竭",
            "Pimobendan在貓的使用證據持續累積，但需注意監測",
            "胸水在貓比肺水腫更常見（與犬不同）",
            "家貓突發後肢癱瘓首先考慮ATE"
        ],
        monitoring: [
            "呼吸頻率（家庭監測，< 30次/分鐘）",
            "心臟超音波每3-6個月",
            "電解質、腎功能（利尿劑使用）",
            "體重變化",
            "NT-proBNP趨勢",
            "心電圖（若有心律不整）"
        ],
        references: [
            "ACVIM Consensus Statement: Feline Cardiomyopathy",
            "Ferasin L. Feline Myocardial Disease. JFMS 2009",
            "VCA Hospitals - Restrictive Cardiomyopathy in Cats",
            "Smith SA, et al. Classification of Cardiomyopathy in Cats"
        ]
    },

    // ============================================
    // 5. 心房中隔缺損
    // ============================================
    "atrial_septal_defect": {
        name: {
            zh: "心房中隔缺損",
            en: "Atrial Septal Defect (ASD)"
        },
        definition: "心房中隔存在異常開口，導致左右心房間的血流分流。通常為左向右分流（因左心房壓力較高），可造成右心容量負荷過重及肺循環血流增加。",
        synonyms: ["房間隔缺損", "心房間隔缺損", "ASD", "Interatrial Communication"],
        epidemiology: {
            species: ["犬", "貓"],
            age: "先天性；可在任何年齡診斷，但常在幼年發現",
            sex: "無明顯性別差異",
            riskFactors: [
                "遺傳因素",
                "常見品種（犬）：薩摩耶、拳師犬、德國牧羊犬、杜賓犬",
                "常與其他先天性心臟缺陷併存",
                "胚胎發育異常"
            ]
        },
        clinicalPresentation: {
            history: [
                "小缺損可能終生無症狀",
                "運動不耐（中大型缺損）",
                "生長遲緩",
                "呼吸困難、咳嗽",
                "暈厥（晚期或合併肺高壓）",
                "發紺（若發生Eisenmenger syndrome，右向左分流）"
            ],
            physicalExam: [
                "柔和收縮期雜音（三尖瓣區，因相對性狹窄）",
                "第二心音固定分裂",
                "可能無明顯雜音（小缺損）",
                "右心擴大表現：右心搏動增強",
                "大缺損晚期：發紺、頸靜脈怒張"
            ]
        },
        pathophysiology: "心房中隔發育不完全 → 左右心房間存在缺損 → 左心房壓力較高 → 左向右分流 → 右心房血流量增加 → 右心室容量負荷增加 → 右心擴大 → 肺循環血流增加 → 長期可導致肺血管病變 → 肺高壓 → 若肺動脈壓超過左心壓力 → 分流逆轉（Eisenmenger syndrome）→ 發紺、嚴重後果",
        diagnosis: {
            overview: "心臟超音波可直接顯示缺損及分流方向",
            differentials: [
                "動脈導管未閉（PDA）",
                "心室中隔缺損（VSD）",
                "肺動脈狹窄",
                "三尖瓣發育異常",
                "原發性肺高壓"
            ],
            initialDB: [
                "胸腔X光：",
                "  - 右心擴大",
                "  - 肺血管紋路增加",
                "  - 主肺動脈段突出",
                "心電圖：",
                "  - 右心房擴大（P波高尖）",
                "  - 右軸偏移",
                "  - 右心室肥大pattern"
            ],
            advanced: [
                "心臟超音波（確診）：",
                "  - 2D直接顯示心房中隔缺損",
                "  - 彩色都卜勒：跨隔分流血流",
                "  - 右心房、右心室擴大",
                "  - 評估肺高壓程度（三尖瓣逆流速度）",
                "  - 排除其他併存異常",
                "心導管（必要時）：確認分流量及肺血管阻力",
                "對比心臟超音波：氣泡對比確認分流"
            ]
        },
        treatment: {
            overview: "小缺損可保守觀察；大缺損考慮手術或介入封堵",
            acute: [
                "心衰竭處理（若發生）：",
                "  - Furosemide",
                "  - 氧氣",
                "Eisenmenger syndrome：",
                "  - 避免運動",
                "  - 避免脫水",
                "  - 肺高壓治療"
            ],
            chronic: [
                "小缺損、無症狀：定期監測，可能終生不需治療",
                "中大型缺損治療選擇：",
                "  - 經導管封堵（Amplatzer device）：適合某些解剖條件",
                "  - 外科手術：體外循環下修補",
                "心衰竭藥物管理：",
                "  - 利尿劑",
                "  - ACE抑制劑",
                "Eisenmenger syndrome：",
                "  - 不適合手術",
                "  - Sildenafil 肺高壓治療",
                "  - 保守支持"
            ]
        },
        prognosis: "取決於缺損大小。小型ASD：預後良好，可能終生無症狀。中型ASD：可能漸進發展心衰竭，適當管理可存活多年。大型ASD：預後較差，早期可能發展心衰竭或肺高壓。Eisenmenger syndrome：預後不良，一旦發生分流逆轉則不可手術修復。",
        pearls: [
            "ASD在犬貓相對少見，常與其他心臟異常併存",
            "卵圓孔未閉（PFO）是ASD的一種，小型PFO可視為正常變異",
            "繼發孔型（secundum type）最常見",
            "與VSD不同，ASD雜音通常較柔和",
            "Eisenmenger syndrome一旦發生，手術禁忌",
            "早期手術可預防肺高壓發展"
        ],
        monitoring: [
            "定期心臟超音波（每6-12個月）",
            "監測運動耐受性",
            "X光追蹤心臟大小變化",
            "肺高壓指標評估",
            "血氧飽和度（若懷疑右向左分流）"
        ],
        references: [
            "Bonagura JD. Congenital Heart Disease. In: Kirk's Current Veterinary Therapy",
            "MSD Veterinary Manual - Congenital Cardiac Anomalies",
            "Tidholm A. Retrospective Study of Congenital Heart Defects in 151 Dogs. JSAP 1997",
            "ACVIM - Congenital Heart Disease Guidelines"
        ]
    },

    // ============================================
    // 6. 心室中隔缺損
    // ============================================
    "ventricular_septal_defect": {
        name: {
            zh: "心室中隔缺損",
            en: "Ventricular Septal Defect (VSD)"
        },
        definition: "心室中隔存在異常開口，導致左右心室間的血流分流。是犬貓最常見的先天性心臟缺陷之一。通常為左向右分流，可造成左心容量負荷過重及肺循環血流增加。",
        synonyms: ["室間隔缺損", "心室間隔缺損", "VSD", "Interventricular Communication"],
        epidemiology: {
            species: ["犬", "貓"],
            age: "先天性；可在幼年例行檢查發現",
            sex: "無明顯性別差異",
            riskFactors: [
                "遺傳因素",
                "常見品種（犬）：英國鬥牛犬、西高地白梗、拉布拉多",
                "貓無明確品種傾向",
                "常與其他先天性異常併存（Tetralogy of Fallot等）"
            ]
        },
        clinicalPresentation: {
            history: [
                "小缺損：可能終生無症狀",
                "中大型缺損：運動不耐、生長遲緩",
                "呼吸困難、咳嗽",
                "暈厥（嚴重病例）",
                "發紺（若發生Eisenmenger syndrome）"
            ],
            physicalExam: [
                "典型：響亮的全收縮期雜音，右側胸骨旁最強（PMI）",
                "雜音可能伴隨震顫（thrill）",
                "小缺損雜音可能更響（限制性噴射流）",
                "大缺損雜音可能較柔和（低壓力差）",
                "心衰竭表現：奔馬律、肺囉音",
                "Eisenmenger：發紺、差異性發紺"
            ]
        },
        pathophysiology: "心室中隔發育不完全 → 左右心室間存在缺損 → 收縮期左向右分流（限制性：高速噴射流，非限制性：大量分流）→ 右心室血流增加 → 經肺循環 → 左心房、左心室容量負荷增加 → 左心擴大。長期大量分流 → 肺血管病變 → 肺高壓 → 分流逆轉（Eisenmenger）→ 右向左分流 → 發紺",
        diagnosis: {
            overview: "根據典型雜音和心臟超音波確診",
            differentials: [
                "主動脈瓣狹窄/下狹窄",
                "肺動脈狹窄",
                "二尖瓣逆流",
                "法洛四聯症",
                "動脈導管未閉"
            ],
            initialDB: [
                "胸腔X光：",
                "  - 小VSD：可能正常",
                "  - 中大型：左心擴大、肺血管增加",
                "  - 肺高壓：右心擴大、肺動脈突出",
                "心電圖：",
                "  - 左心房/心室擴大（左軸偏移、QRS增寬）",
                "  - 肺高壓：右心室肥大pattern"
            ],
            advanced: [
                "心臟超音波（確診）：",
                "  - 2D直接顯示心室中隔缺損",
                "  - 最常見位置：膜周部（perimembranous）",
                "  - 彩色都卜勒：跨隔分流血流",
                "  - 測量缺損大小、分流速度",
                "  - 評估左心擴大程度",
                "  - 估算肺動脈壓力",
                "  - 排除其他併存異常",
                "心導管：測量分流比（Qp/Qs）、肺血管阻力"
            ]
        },
        treatment: {
            overview: "治療取決於缺損大小及血流動力學影響",
            acute: [
                "心衰竭處理：",
                "  - Furosemide 2-4 mg/kg",
                "  - Pimobendan",
                "  - 氧氣",
                "Eisenmenger syndrome急性惡化：支持療法"
            ],
            chronic: [
                "限制性小VSD、無症狀：",
                "  - 定期監測，通常不需治療",
                "  - 心內膜炎預防（爭議）",
                "中大型VSD、有症狀：",
                "  - 外科手術修補（體外循環）",
                "  - 經導管封堵（技術發展中，適用性有限）",
                "  - 肺動脈環扎術（Pulmonary Artery Banding）：減少肺血流",
                "心衰竭藥物：",
                "  - ACE抑制劑",
                "  - 利尿劑",
                "  - Pimobendan",
                "Eisenmenger syndrome：",
                "  - 手術禁忌",
                "  - Sildenafil",
                "  - 避免劇烈活動"
            ]
        },
        prognosis: "小型限制性VSD：預後優良，許多可終生無症狀或缺損自然縮小。中型VSD：可能漸進發展心衰竭，手術可改善預後。大型非限制性VSD：預後較差，可能發展Eisenmenger syndrome。手術成功率在專業中心可達80-90%。",
        pearls: [
            "VSD雜音強度與缺損大小不成正比（小缺損可能更響）",
            "膜周部VSD部分可自發性縮小或閉合（尤其小型）",
            "與主動脈瓣膜鄰近的VSD需注意主動脈瓣脫垂",
            "大VSD需及早手術以避免肺高壓發展",
            "限制性VSD指壓力差 > 64 mmHg（速度 > 4 m/s）",
            "單純VSD可考慮觀察性管理，複雜VSD需積極介入"
        ],
        monitoring: [
            "定期心臟超音波（每6-12個月）",
            "X光追蹤心臟大小",
            "運動耐受性評估",
            "肺高壓進展監測",
            "雜音特性變化（強度降低可能表示肺高壓發展）"
        ],
        references: [
            "Scansen BA. Interventional Cardiology for Congenital Heart Disease",
            "MSD Veterinary Manual - Ventricular Septal Defect",
            "Tidholm A. Retrospective Study of Congenital Heart Defects in 151 Dogs",
            "ACVIM Consensus Statement on Congenital Heart Disease"
        ]
    },

    // ============================================
    // 7. 肺動脈狹窄
    // ============================================
    "pulmonic_stenosis": {
        name: {
            zh: "肺動脈狹窄",
            en: "Pulmonic Stenosis (PS)"
        },
        definition: "肺動脈瓣或其周圍區域狹窄，導致右心室排血阻力增加。是犬最常見的先天性心臟缺陷之一。可分為瓣膜型（最常見）、瓣下型（漏斗部）及瓣上型。",
        synonyms: ["肺動脈瓣狹窄", "肺動脈出口狹窄", "PS", "Pulmonary Valve Stenosis"],
        epidemiology: {
            species: ["犬（常見）", "貓（少見）"],
            age: "先天性；可在幼犬例行檢查發現",
            sex: "雄性略多",
            riskFactors: [
                "品種遺傳因素",
                "高風險品種：英國鬥牛犬、法國鬥牛犬、波士頓㹴、比格犬、薩摩耶、迷你雪納瑞、可卡犬、拳師犬、紐芬蘭犬",
                "英國鬥牛犬有特殊的冠狀動脈異常（R2A）",
                "常與其他異常併存（三尖瓣發育不全等）"
            ]
        },
        clinicalPresentation: {
            history: [
                "輕度：通常無症狀，體檢發現雜音",
                "中度：運動不耐",
                "重度：暈厥、虛弱、腹水（右心衰竭）",
                "猝死（嚴重未治療病例）"
            ],
            physicalExam: [
                "收縮期射出性雜音（crescendo-decrescendo）",
                "雜音位置：左側心底部（2-4肋間）",
                "可能有震顫（thrill）",
                "雜音強度與狹窄程度相關",
                "右心衰竭表現：頸靜脈怒張、腹水、肝腫大",
                "脈搏通常正常"
            ]
        },
        pathophysiology: "肺動脈瓣狹窄 → 右心室排血阻力增加 → 右心室壓力升高 → 右心室向心性肥厚 → 心肌氧需增加、冠狀血流相對不足 → 心肌缺血 → 心律不整、暈厥風險。嚴重狹窄 → 右心室功能衰竭 → 三尖瓣逆流 → 右心房擴大 → 體靜脈壓升高 → 腹水、水腫",
        diagnosis: {
            overview: "根據典型雜音及心臟超音波確診並評估嚴重程度",
            differentials: [
                "主動脈瓣狹窄",
                "心室中隔缺損",
                "法洛四聯症",
                "心房中隔缺損",
                "三尖瓣發育不全"
            ],
            initialDB: [
                "胸腔X光：",
                "  - 右心擴大",
                "  - 主肺動脈段擴大（狹窄後擴張）",
                "  - 肺血管正常或減少",
                "心電圖：",
                "  - 右心室肥大（深S波於I、II、III、aVF）",
                "  - 右軸偏移",
                "  - 心律不整（嚴重病例）"
            ],
            advanced: [
                "心臟超音波（確診及分級）：",
                "  - 瓣膜增厚、活動度差",
                "  - 瓣葉圓頂狀（doming）",
                "  - 右心室同心性肥厚",
                "  - 狹窄後擴張",
                "  - 都卜勒測量壓力差（PG）：",
                "    * 輕度：< 50 mmHg",
                "    * 中度：50-80 mmHg",
                "    * 重度：> 80 mmHg",
                "  - 確認有無冠狀動脈異常（R2A，尤其短頭犬種）",
                "心導管：需要時確認血流動力學"
            ]
        },
        treatment: {
            overview: "輕度病例可觀察；中重度病例考慮球囊擴張術或手術",
            acute: [
                "右心衰竭處理：",
                "  - Furosemide 1-2 mg/kg",
                "  - 腹水引流（必要時）",
                "暈厥急救：",
                "  - 休息、氧氣",
                "  - β-blocker可能減少暈厥"
            ],
            chronic: [
                "輕度PS（PG < 50 mmHg）：",
                "  - 定期監測",
                "  - 限制劇烈運動",
                "  - 預後良好，通常不需介入",
                "中度PS（PG 50-80 mmHg）：",
                "  - 球囊瓣膜擴張術（valvuloplasty）可考慮",
                "  - β-blocker：Atenolol 0.5-1 mg/kg PO q12-24h（減少心肌氧需）",
                "重度PS（PG > 80 mmHg）或有症狀：",
                "  - 球囊瓣膜擴張術（首選）",
                "  - 手術瓣膜切開（若球囊失敗）",
                "  - 有R2A異常時：手術風險高，需特殊考量",
                "心衰竭管理：利尿劑、ACE抑制劑"
            ]
        },
        prognosis: "輕度PS：預後優良，平均壽命接近正常。中度PS：中等預後，可能發展症狀，治療可改善。重度PS：未治療預後差，可能猝死；球囊擴張後預後改善。球囊擴張成功率約80-90%，可顯著降低壓力差。R2A冠狀動脈異常增加介入風險。",
        pearls: [
            "英國鬥牛犬的PS需排除R2A冠狀動脈異常，因介入時可能損傷冠狀動脈",
            "瓣膜型PS最適合球囊擴張",
            "瓣下型（漏斗部）PS球囊效果較差",
            "狹窄程度可能隨生長而改變",
            "雜音強度大致與狹窄程度相關",
            "繁殖建議：中重度PS患犬不建議繁殖"
        ],
        monitoring: [
            "定期心臟超音波（每6-12個月）",
            "球囊擴張後追蹤壓力差",
            "心電圖監測心律不整",
            "運動耐受性評估",
            "右心功能及三尖瓣逆流程度"
        ],
        references: [
            "Estrada A, et al. Pulmonic Stenosis. In: Textbook of Cardiovascular Medicine",
            "Bussadori C, et al. Balloon Valvuloplasty in Dogs",
            "MSD Veterinary Manual - Pulmonic Stenosis",
            "ACVIM - Congenital Heart Disease Treatment Guidelines"
        ]
    },

    // ============================================
    // 8. 主動脈狹窄
    // ============================================
    "aortic_stenosis": {
        name: {
            zh: "主動脈狹窄",
            en: "Aortic Stenosis (AS)"
        },
        definition: "主動脈瓣或其周圍區域狹窄，導致左心室排血阻力增加。犬以瓣下狹窄（Subaortic Stenosis, SAS）最常見，為左心室流出道纖維環或肌性狹窄。瓣膜型及瓣上型較少見。",
        synonyms: ["主動脈瓣狹窄", "主動脈瓣下狹窄", "AS", "Subaortic Stenosis", "SAS"],
        epidemiology: {
            species: ["犬（常見）", "貓（少見）"],
            age: "先天性，但瓣下狹窄可能在出生後數週至數月逐漸發展",
            sex: "無明顯性別差異",
            riskFactors: [
                "遺傳因素（常染色體顯性遺傳，不完全外顯）",
                "高風險品種：紐芬蘭犬、金毛獵犬、拳師犬、德國牧羊犬、洛威拿犬、英國鬥牛犬",
                "紐芬蘭犬為最高風險品種"
            ]
        },
        clinicalPresentation: {
            history: [
                "輕度：無症狀，體檢發現雜音",
                "中度：運動不耐",
                "重度：暈厥（常與運動或興奮相關）、虛弱",
                "猝死（嚴重病例，首次表現即可能猝死）",
                "呼吸困難（左心衰竭）"
            ],
            physicalExam: [
                "收縮期射出性雜音（crescendo-decrescendo）",
                "雜音位置：左側心底部，可傳導至頸動脈、右側心底",
                "頸動脈搏動弱、遲緩（pulsus parvus et tardus）",
                "可能有震顫",
                "股動脈脈搏減弱",
                "心衰竭：肺囉音、奔馬律"
            ]
        },
        pathophysiology: "主動脈流出道狹窄 → 左心室排血阻力增加 → 左心室壓力升高 → 左心室向心性肥厚 → 心肌氧需增加 → 冠狀血流相對不足 → 心肌缺血 → 心律不整、暈厥、猝死。高速噴射流 → 主動脈瓣及內膜損傷 → 感染性心內膜炎風險增加。嚴重狹窄 → 左心室功能衰竭 → 肺水腫",
        diagnosis: {
            overview: "根據典型雜音及心臟超音波確診",
            differentials: [
                "肺動脈狹窄",
                "心室中隔缺損",
                "二尖瓣逆流",
                "生理性雜音（幼犬）",
                "主動脈瓣心內膜炎"
            ],
            initialDB: [
                "胸腔X光：",
                "  - 左心室擴大",
                "  - 升主動脈狹窄後擴張",
                "  - 肺水腫（心衰竭時）",
                "心電圖：",
                "  - 左心室肥大（R波增高於II、III、aVF）",
                "  - ST段壓低（心肌缺血）",
                "  - 心室性心律不整"
            ],
            advanced: [
                "心臟超音波（確診及分級）：",
                "  - 瓣下狹窄：可見纖維環或肌性突起",
                "  - 左心室向心性肥厚",
                "  - 主動脈瓣可能增厚",
                "  - 狹窄後主動脈擴張",
                "  - 都卜勒測量壓力差（PG）：",
                "    * 輕度：< 50 mmHg",
                "    * 中度：50-80 mmHg",
                "    * 重度：> 80 mmHg",
                "  - 左心室流出道PISA（限流面積）",
                "24小時Holter：評估心律不整負擔",
                "心導管（需要時）"
            ]
        },
        treatment: {
            overview: "輕度病例觀察；中重度病例的治療效果有限，目標減少猝死風險",
            acute: [
                "暈厥急救：",
                "  - 休息",
                "  - 氧氣",
                "  - 避免激動",
                "左心衰竭：",
                "  - Furosemide",
                "  - 氧氣",
                "心律不整處理：依類型選擇抗心律不整藥"
            ],
            chronic: [
                "輕度SAS：",
                "  - 定期監測",
                "  - 避免劇烈運動及過度激動",
                "  - 預後尚可",
                "中重度SAS：",
                "  - β-blocker：Atenolol 0.5-1 mg/kg PO q12-24h（減少心肌氧需、降低心律不整風險）",
                "  - 運動嚴格限制",
                "  - 避免繁殖",
                "介入治療（效果有限）：",
                "  - 球囊擴張：暫時性效果，瓣下狹窄常復發",
                "  - 外科切除：技術要求高，風險大",
                "  - cutting balloon：研究中",
                "心內膜炎預防：考慮侵入性操作前預防性抗生素（爭議）"
            ]
        },
        prognosis: "輕度SAS（PG < 50 mmHg）：預後良好，可能壽命接近正常。中度SAS（PG 50-80 mmHg）：預後中等，猝死風險存在。重度SAS（PG > 80 mmHg）：預後差，猝死風險高，中位存活時間約2-4年。β-blocker可能降低猝死風險但證據有限。心律不整（尤其心室性）是主要死因。",
        pearls: [
            "SAS狹窄程度可能在1歲內持續加重",
            "輕度雜音幼犬需追蹤確認是否為SAS發展",
            "紐芬蘭犬建議繁殖前心臟超音波篩檢",
            "瓣下狹窄對球囊擴張反應不佳，與瓣膜型PS不同",
            "暈厥史或嚴重心律不整是預後不良指標",
            "SAS是心內膜炎高風險，但預防性抗生素效益未確定"
        ],
        monitoring: [
            "定期心臟超音波（每6-12個月）",
            "24小時Holter（評估心律不整）",
            "心電圖追蹤",
            "運動耐受性評估",
            "注意暈厥發作"
        ],
        references: [
            "Kienle RD. Aortic Stenosis. In: Small Animal Cardiovascular Medicine",
            "ACVIM - Subaortic Stenosis Screening Guidelines",
            "Meurs KM, et al. Canine Subaortic Stenosis Breeding Recommendations",
            "MSD Veterinary Manual - Aortic Stenosis"
        ]
    },

    // ============================================
    // 9. 法洛四聯症
    // ============================================
    "tetralogy_of_fallot": {
        name: {
            zh: "法洛四聯症",
            en: "Tetralogy of Fallot (TOF)"
        },
        definition: "複雜的先天性心臟畸形，包含四項異常：(1)肺動脈狹窄、(2)心室中隔缺損（VSD）、(3)主動脈騎跨（overriding aorta）、(4)右心室肥厚。是最常見的發紺型先天性心臟病。",
        synonyms: ["法洛氏四聯症", "TOF", "Fallot四聯症", "發紺型先天性心臟病"],
        epidemiology: {
            species: ["犬", "貓（較少見）"],
            age: "先天性；常在幼年即診斷",
            sex: "無明顯性別差異",
            riskFactors: [
                "遺傳因素",
                "高風險品種（犬）：英國鬥牛犬、吉娃娃、迷你雪納瑞、迷你貴賓犬、西高地白㹴",
                "貓無明確品種傾向"
            ]
        },
        clinicalPresentation: {
            history: [
                "發紺（舌頭、黏膜、皮膚發紫）",
                "運動不耐（活動後加重發紺、虛弱）",
                "生長遲緩",
                "暈厥（缺氧發作）",
                "蹲踞行為（squatting，增加全身血管阻力，改善肺血流）",
                "癲癇樣發作（嚴重缺氧）"
            ],
            physicalExam: [
                "發紺（程度取決於右向左分流量）",
                "黏膜暗紅/發紺",
                "收縮期射出性雜音（肺動脈狹窄）",
                "雜音位置：左側心底",
                "紅血球增多症表現：血液黏稠",
                "可能有杵狀指（趾）",
                "運動後發紺加重"
            ]
        },
        pathophysiology: "肺動脈狹窄 → 右心室排血阻力增加 → 右心室壓力升高 → 經VSD產生右向左分流 → 靜脈血（去氧血）直接進入體循環 → 全身性缺氧 → 發紺。主動脈騎跨 → 直接接收來自兩心室的血液。慢性缺氧 → 紅血球增多症（代償）→ 血液黏稠度增加 → 血栓風險。右心室肥厚為對抗肺動脈狹窄的代償反應。",
        diagnosis: {
            overview: "結合發紺表現及心臟超音波確診",
            differentials: [
                "其他發紺型心臟病：",
                "  - Eisenmenger syndrome（任何大分流）",
                "  - 三尖瓣閉鎖",
                "  - 肺動脈閉鎖",
                "嚴重肺動脈狹窄合併卵圓孔未閉",
                "肺部疾病（呼吸性發紺）"
            ],
            initialDB: [
                "CBC：紅血球增多症（PCV可達60-80%）",
                "血液氣體分析：低氧血症",
                "胸腔X光：",
                "  - 心臟輪廓異常（boot-shaped heart）",
                "  - 右心擴大",
                "  - 肺血管紋路減少",
                "  - 主肺動脈段凹陷",
                "心電圖：右心室肥大、右軸偏移"
            ],
            advanced: [
                "心臟超音波（確診）：",
                "  - 肺動脈狹窄（瓣膜或漏斗部）",
                "  - 心室中隔缺損（通常大型）",
                "  - 主動脈騎跨於VSD上方",
                "  - 右心室肥厚",
                "  - 右向左分流（彩色都卜勒）",
                "  - 測量肺動脈狹窄程度",
                "對比心臟超音波：確認右向左分流",
                "血管攝影/CT（手術前評估）"
            ]
        },
        treatment: {
            overview: "姑息治療或複雜手術；完全修復在小動物困難",
            acute: [
                "缺氧發作急救：",
                "  - 氧氣治療",
                "  - 保持冷靜、安靜環境",
                "  - 屈膝姿勢（squatting position）",
                "  - β-blocker：Propranolol 0.1-0.2 mg/kg IV慢注（減緩心率、減少右向左分流）",
                "  - Phenylephrine（增加全身血管阻力）",
                "嚴重紅血球增多症（PCV > 70%）：",
                "  - 放血（phlebotomy）並補充等容量等張液體"
            ],
            chronic: [
                "藥物保守治療：",
                "  - β-blocker：Atenolol 0.5-1 mg/kg PO q12-24h（減少漏斗部痙攣、控制心率）",
                "  - 避免劇烈運動及應激",
                "  - 適當補充水分",
                "  - 定期放血（若PCV過高）",
                "姑息手術（增加肺血流）：",
                "  - Modified Blalock-Taussig shunt（體肺動脈分流）",
                "  - 球囊擴張肺動脈狹窄（效果有限）",
                "完全矯正手術（根治）：",
                "  - VSD修補 + 肺動脈狹窄解除",
                "  - 需體外循環，風險高，費用高",
                "  - 少數專業中心可執行"
            ]
        },
        prognosis: "保守治療：預後不良至謹慎，許多在2歲前死亡。影響因素：肺動脈狹窄程度、發紺嚴重度、併發症（紅血球增多症相關血栓）。姑息手術：可改善生活品質及存活時間。完全矯正手術：若成功，預後顯著改善，但手術風險高。",
        pearls: [
            "TOF是最常見的發紺型先天性心臟病",
            "發紺程度取決於肺動脈狹窄嚴重度",
            "缺氧發作時β-blocker可減少漏斗部痙攣",
            "紅血球增多是對缺氧的代償，但過度（PCV > 70%）增加血栓風險",
            "蹲踞行為增加全身血管阻力，可改善肺血流",
            "麻醉風險高，需特別注意維持血氧"
        ],
        monitoring: [
            "定期PCV監測（紅血球增多程度）",
            "血氧飽和度",
            "心臟超音波追蹤",
            "運動耐受性評估",
            "缺氧發作頻率記錄",
            "血液黏稠度相關症狀"
        ],
        references: [
            "Bonagura JD. Congenital Heart Disease. In: Kirk's Current Veterinary Therapy",
            "MSD Veterinary Manual - Tetralogy of Fallot",
            "MacDonald KA. Congenital Heart Diseases of Puppies and Kittens. Vet Clin North Am 2006",
            "Orton EC. Cardiac Surgery in Dogs. Vet Clin North Am 1995"
        ]
    },

    // ============================================
    // 10. 心臟腫瘤/血管肉瘤
    // ============================================
    "cardiac_tumors": {
        name: {
            zh: "心臟腫瘤 / 血管肉瘤",
            en: "Cardiac Tumors / Hemangiosarcoma (HSA)"
        },
        definition: "發生於心臟的原發性或轉移性腫瘤。犬最常見的原發性心臟腫瘤是血管肉瘤（Hemangiosarcoma），通常位於右心房或右心耳。貓最常見為淋巴瘤。心臟腫瘤常導致心包積液、心臟填塞或心律不整。",
        synonyms: ["心臟血管肉瘤", "右心房腫瘤", "心包腫瘤", "Cardiac Hemangiosarcoma", "Heart Base Tumor", "Chemodectoma"],
        epidemiology: {
            species: ["犬（血管肉瘤常見）", "貓（淋巴瘤較常見）"],
            age: "中老年犬（平均8-12歲），血管肉瘤罕見於年輕犬",
            sex: "雄性稍多（血管肉瘤）",
            riskFactors: [
                "血管肉瘤高風險品種：德國牧羊犬、金毛獵犬、拉布拉多、扁臉品種",
                "心底腫瘤（Chemodectoma）：短頭犬種（英國鬥牛犬、波士頓㹴、拳師犬）",
                "貓淋巴瘤：FeLV相關",
                "轉移性腫瘤：原發腫瘤類型"
            ]
        },
        clinicalPresentation: {
            history: [
                "急性虛脫、倒塌（心包填塞）",
                "運動不耐",
                "呼吸困難",
                "腹部膨大（腹水）",
                "虛弱、精神沉鬱",
                "食慾減退、體重減輕",
                "暈厥",
                "猝死"
            ],
            physicalExam: [
                "心包積液/填塞表現：",
                "  - 心音減弱（distant heart sounds）",
                "  - 頸靜脈怒張",
                "  - 脈搏微弱、奇脈（paradoxical pulse）",
                "  - 低血壓、休克",
                "心律不整",
                "腹水",
                "黏膜蒼白（貧血、休克）",
                "脾臟腫大（血管肉瘤常併發脾臟腫瘤）"
            ]
        },
        pathophysiology: "血管肉瘤：內皮細胞惡性腫瘤 → 好發於右心房/右心耳 → 腫瘤易破裂出血 → 急性心包積液 → 心包填塞 → 心臟舒張受限 → 心輸出量急劇下降 → 心因性休克。慢性病程：腫瘤侵犯心肌 → 心律不整、心衰竭。血管肉瘤高度惡性，常伴隨脾臟、肝臟轉移或原發。心底腫瘤（副神經節瘤/Chemodectoma）：生長較慢，但也可導致心包積液。",
        diagnosis: {
            overview: "結合臨床表現、心包積液分析、影像學及細胞學/病理學",
            differentials: [
                "特發性心包積液",
                "感染性心包炎",
                "凝血障礙",
                "心衰竭",
                "右心衰竭其他原因",
                "心包間皮瘤"
            ],
            initialDB: [
                "CBC：貧血（出血性、慢性病）、血小板減少（DIC、消耗）",
                "血液生化：基礎評估",
                "凝血功能：PT、APTT、D-dimer",
                "胸腔X光：",
                "  - 心臟輪廓球形擴大（心包積液）",
                "  - 胸水",
                "  - 肺部轉移灶",
                "腹部X光/超音波：脾臟、肝臟腫塊評估"
            ],
            advanced: [
                "心臟超音波（關鍵）：",
                "  - 心包積液（無回音或低回音液體）",
                "  - 右心房/右心耳腫塊",
                "  - 心底腫塊（主動脈根部周圍）",
                "  - 右心室舒張塌陷（填塞徵象）",
                "  - 腫塊大小、位置、侵犯範圍",
                "心包液分析：",
                "  - 血性：高度懷疑血管肉瘤",
                "  - PCV、總蛋白",
                "  - 細胞學（診斷率約25-60%）",
                "  - 腫瘤標記（研究中）",
                "cTnI：心肌侵犯時升高",
                "腹部超音波：脾臟、肝臟腫塊",
                "CT/MRI：術前評估、分期"
            ]
        },
        treatment: {
            overview: "緊急處理心包填塞；長期治療取決於腫瘤類型及分期",
            acute: [
                "心包填塞急救：",
                "  - 心包穿刺引流（pericardiocentesis）：",
                "    * 超音波導引",
                "    * 可迅速緩解症狀",
                "    * 移除心包液改善血流動力學",
                "  - 輸液支持（謹慎）",
                "  - 氧氣",
                "嚴重貧血：輸血",
                "DIC處理：支持療法、新鮮冷凍血漿"
            ],
            chronic: [
                "血管肉瘤治療選擇：",
                "  - 手術切除（右心耳切除）+ 心包切除",
                "  - 手術可短期緩解，但難以根治",
                "  - 化療：Doxorubicin為基礎方案",
                "    * 單獨或合併其他藥物（VAC, AC方案）",
                "    * 可延長存活時間",
                "  - 心包切除術：防止心包填塞復發",
                "心底腫瘤（Chemodectoma）：",
                "  - 生長較慢，心包切除可能足夠",
                "  - 手術切除困難（位置問題）",
                "  - 放射治療（報導有限）",
                "轉移性腫瘤：依原發腫瘤處理",
                "淋巴瘤（貓）：化療為主（CHOP方案）",
                "姑息治療：反覆心包穿刺、疼痛控制"
            ]
        },
        prognosis: "心臟血管肉瘤：預後極差。單獨手術：中位存活約1-3個月。手術+化療：中位存活約4-6個月（少數可達1年）。心底腫瘤：預後較好，若無轉移且心包切除成功，可存活1-2年以上。特發性心包積液：排除腫瘤後預後良好。貓淋巴瘤：化療反應率較高，存活時間較長。",
        pearls: [
            "德國牧羊犬、金毛獵犬血性心包積液高度懷疑血管肉瘤",
            "心包穿刺液PCV接近外周血提示急性出血",
            "細胞學診斷血管肉瘤敏感度低，陰性不能排除",
            "脾臟腫塊+心臟腫塊+心包積液=高度懷疑血管肉瘤",
            "短頭犬種心底腫塊考慮Chemodectoma",
            "心包切除可防止填塞復發但不治療腫瘤本身",
            "血管肉瘤化療延長存活但無法治癒"
        ],
        monitoring: [
            "心包積液復發監測（超音波）",
            "化療期間：CBC、心臟功能（Doxorubicin心毒性）",
            "腹部超音波追蹤轉移",
            "胸腔X光（肺轉移）",
            "生活品質評估",
            "cTnI追蹤（化療心毒性）"
        ],
        references: [
            "Weisse C, et al. Right Atrial Hemangiosarcoma in Dogs. JVIM 2005",
            "Treggiari E, et al. Cardiac Tumors in Dogs and Cats",
            "MSD Veterinary Manual - Cardiac Tumors",
            "Withrow & MacEwen's Small Animal Clinical Oncology - Cardiac Tumors Chapter",
            "Veterinary Society of Surgical Oncology - Hemangiosarcoma Guidelines"
        ]
    }
};

// 導出模組
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CARDIOVASCULAR_DISEASES;
}

// 如果需要合併到主資料庫
// Object.assign(DISEASE_INFO, CARDIOVASCULAR_DISEASES);

console.log("心血管系統疾病資料庫載入完成");
console.log("共收錄 " + Object.keys(CARDIOVASCULAR_DISEASES).length + " 個疾病");

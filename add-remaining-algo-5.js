const fs = require('fs');
const existing = require('./batch-algo-5.json');

const remaining = {
  "status-epilepticus": {
    "diagnosticAlgorithm": {
      "title": "癲癇重積狀態 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "緊急穩定",
          "details": "立即評估生命徵象並建立靜脈通路，同時控制癲癇發作",
          "findings": ["持續性癲癇發作超過5分鐘", "連續發作間無意識恢復", "高體溫", "心搏過速和高血壓"]
        },
        {
          "step": 2,
          "action": "急診實驗室檢查",
          "details": "快速進行基本血液學和生化排除代謝性原因",
          "findings": ["血糖水平（低血糖為常見可逆原因）", "電解質紊亂（鈣、鈉）", "肝腎功能", "毒物暴露史評估"]
        },
        {
          "step": 3,
          "action": "抗癲癇治療與監測",
          "details": "階梯式抗癲癇藥物治療並監測反應",
          "findings": ["Diazepam或midazolam初始治療反應", "需要持續輸注（CRI）提示難治性SE", "Phenobarbital負荷劑量", "Levetiracetam輔助治療"]
        },
        {
          "step": 4,
          "action": "病因學調查",
          "details": "穩定後進行全面病因調查",
          "findings": ["頭顱MRI排除結構性病變", "CSF分析排除腦炎", "抗癲癇藥物血藥濃度", "壁蝨媒介疾病和弓漿蟲篩檢"]
        },
        {
          "step": 5,
          "action": "併發症評估",
          "details": "評估癲癇重積導致的繼發性損傷",
          "findings": ["橫紋肌溶解（CK升高）", "DIC篩檢", "腦水腫評估", "吸入性肺炎風險"]
        }
      ]
    }
  },
  "cerebellar-abiotrophy": {
    "diagnosticAlgorithm": {
      "title": "小腦萎縮症 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "收集品種和年齡資訊，評估小腦功能障礙症狀",
          "findings": ["幼年至青年期發病", "品種易感性（澳洲牧羊犬、Kerry Blue Terrier等）", "進行性共濟失調", "意向性震顫"]
        },
        {
          "step": 2,
          "action": "神經學檢查",
          "details": "進行完整神經學檢查確認小腦病變",
          "findings": ["過度測量步態（hypermetria）", "寬基步態", "頭部震顫", "威脅反應缺失但視力正常"]
        },
        {
          "step": 3,
          "action": "進階影像學",
          "details": "進行MRI評估小腦結構",
          "findings": ["小腦體積縮小", "小腦溝加寬加深", "小腦蚓部萎縮", "排除其他結構性病變"]
        },
        {
          "step": 4,
          "action": "確診",
          "details": "結合品種、年齡、臨床和影像學進行診斷",
          "findings": ["基因檢測（部分品種可用）", "排除其他小腦疾病", "確定性診斷需死後病理學", "組織學見Purkinje細胞退化"]
        }
      ]
    }
  },
  "peripheral-neuropathy": {
    "diagnosticAlgorithm": {
      "title": "周邊神經病變 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估下運動神經元症狀和分布模式",
          "findings": ["漸進性四肢無力", "肌肉萎縮", "反射減退或消失", "感覺異常或疼痛"]
        },
        {
          "step": 2,
          "action": "實驗室檢查",
          "details": "進行基本血液學和生化排除代謝性和內分泌原因",
          "findings": ["甲狀腺功能檢查", "血糖評估（糖尿病性神經病變）", "感染篩檢", "腫瘤標記物"]
        },
        {
          "step": 3,
          "action": "電生理學檢查",
          "details": "進行肌電圖和神經傳導速度檢查",
          "findings": ["神經傳導速度下降（脫髓鞘型）", "複合肌肉動作電位振幅降低（軸索型）", "自發性電位活動", "纖維顫動和正尖波"]
        },
        {
          "step": 4,
          "action": "神經活檢",
          "details": "視情況進行周邊神經活檢確認病理類型",
          "findings": ["脫髓鞘性vs軸索性病變", "炎症性浸潤", "Wallerian退化", "腫瘤性浸潤"]
        }
      ]
    }
  },
  "lysosomal-storage-disease": {
    "diagnosticAlgorithm": {
      "title": "溶酶體儲積症 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估幼齡動物進行性神經症狀和品種背景",
          "findings": ["幼年動物進行性神經退化", "品種易感性", "生長發育遲緩", "視覺障礙或行為異常"]
        },
        {
          "step": 2,
          "action": "血液學與生化檢查",
          "details": "進行血液學和相關酶學檢查",
          "findings": ["白血球內異常顆粒或空泡", "血漿特定酶活性降低", "尿液寡醣或黏多醣排出異常", "肝臟酶可能異常"]
        },
        {
          "step": 3,
          "action": "進階影像學",
          "details": "進行MRI評估腦部結構變化",
          "findings": ["腦白質異常信號", "腦室擴大", "腦萎縮", "小腦萎縮"]
        },
        {
          "step": 4,
          "action": "酶學與基因診斷",
          "details": "進行特定酶活性測定和基因檢測確診",
          "findings": ["白血球或成纖維細胞特定酶活性測定", "基因突變檢測（部分疾病可用）", "組織活檢見特徵性儲積物", "電子顯微鏡見特徵性包涵體"]
        }
      ]
    }
  },
  "spinal-arachnoid-diverticulum": {
    "diagnosticAlgorithm": {
      "title": "脊髓蛛網膜憩室 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估慢性進行性脊髓壓迫症狀",
          "findings": ["漸進性後肢無力和共濟失調", "疼痛反應可能正常或減退", "好發於中大型犬品種", "頸椎或胸腰椎段"]
        },
        {
          "step": 2,
          "action": "神經學定位",
          "details": "進行完整神經學檢查定位病變節段",
          "findings": ["上運動神經元徵象", "本體感覺缺陷", "定位至特定脊髓節段", "膀胱功能評估"]
        },
        {
          "step": 3,
          "action": "進階影像學",
          "details": "進行MRI或脊髓造影確認蛛網膜憩室",
          "findings": ["MRI見脊髓背側或腹側CSF信號擴張", "脊髓受壓和萎縮", "脊髓造影顯示造影劑充填缺損", "CT脊髓造影精確定位"]
        },
        {
          "step": 4,
          "action": "手術規劃",
          "details": "評估手術指征和術式選擇",
          "findings": ["確認憩室位置和範圍", "評估脊髓功能殘存", "排除其他脊髓壓迫原因", "椎板切除減壓術規劃"]
        }
      ]
    }
  },
  "scottie-cramp": {
    "diagnosticAlgorithm": {
      "title": "蘇格蘭㹴痙攣症 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "確認品種和發作特徵",
          "findings": ["蘇格蘭㹴品種", "運動或興奮時誘發", "四肢僵硬和過度屈曲", "休息後症狀緩解"]
        },
        {
          "step": 2,
          "action": "神經學檢查",
          "details": "靜息和運動時的神經學評估",
          "findings": ["靜息時神經學檢查正常", "運動誘發步態異常", "脊柱過度彎曲（弓背）", "無意識喪失"]
        },
        {
          "step": 3,
          "action": "排除性診斷",
          "details": "排除其他運動障礙和代謝性疾病",
          "findings": ["血液學和生化正常", "肌電圖正常", "CK正常", "基因檢測可能可用"]
        }
      ]
    }
  },
  "canine-distal-polyneuropathy": {
    "diagnosticAlgorithm": {
      "title": "犬遠端多發性神經病變 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估遠端為主的對稱性神經病變症狀",
          "findings": ["遠端肢體無力", "指甲過度磨損", "四肢遠端肌肉萎縮", "漸進性病程"]
        },
        {
          "step": 2,
          "action": "神經學檢查",
          "details": "進行完整神經學檢查評估分布模式",
          "findings": ["遠端反射減退", "本體感覺缺陷", "肌張力降低", "對稱性分布"]
        },
        {
          "step": 3,
          "action": "電生理學與病因篩檢",
          "details": "進行肌電圖、神經傳導速度和代謝篩檢",
          "findings": ["遠端神經傳導速度下降", "自發性電位活動", "甲狀腺和血糖檢查", "排除毒物暴露"]
        },
        {
          "step": 4,
          "action": "神經活檢確診",
          "details": "進行周邊神經和肌肉活檢",
          "findings": ["遠端軸索退化", "脫髓鞘變化", "排除炎症性病因", "確認退化性vs免疫介導性"]
        }
      ]
    }
  },
  "tremor-syndrome": {
    "diagnosticAlgorithm": {
      "title": "特發性全身性震顫症候群 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估全身性震顫特徵，曾稱白色搖搖犬症候群",
          "findings": ["全身性細微至粗大震顫", "任何品種和毛色均可發病", "通常1-3歲發病", "休息時震顫減輕，活動時加重"]
        },
        {
          "step": 2,
          "action": "實驗室檢查",
          "details": "排除代謝性和感染性原因",
          "findings": ["全血計數和生化正常", "甲狀腺功能正常", "感染篩檢陰性", "毒物篩檢陰性"]
        },
        {
          "step": 3,
          "action": "進階神經學評估",
          "details": "排除結構性中樞神經系統疾病",
          "findings": ["MRI通常正常", "CSF可能見輕度單核球增多", "排除小腦病變", "排除腦炎"]
        },
        {
          "step": 4,
          "action": "治療性確診",
          "details": "免疫抑制治療反應支持診斷",
          "findings": ["皮質類固醇治療後快速改善", "通常1-3天內震顫明顯減輕", "減藥可能復發", "排除性診斷確認"]
        }
      ]
    }
  },
  "erythema-multiforme": {
    "diagnosticAlgorithm": {
      "title": "多形性紅斑 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估皮膚黏膜病變特徵和藥物/感染暴露史",
          "findings": ["急性發作的多形性皮膚病變", "標靶樣環狀病灶", "口腔黏膜潰瘍", "近期藥物使用或感染病史"]
        },
        {
          "step": 2,
          "action": "實驗室檢查",
          "details": "進行基本實驗室檢查評估全身狀態",
          "findings": ["血液學可見白血球增多", "藥物相關病史回顧", "感染篩檢", "自體免疫標記物"]
        },
        {
          "step": 3,
          "action": "組織病理學確診",
          "details": "進行皮膚活檢確認診斷",
          "findings": ["基底層淋巴球浸潤", "角質細胞個別壞死（凋亡）", "界面性皮膚炎", "與SLE和TEN鑑別"]
        }
      ]
    }
  },
  "toxic-epidermal-necrolysis": {
    "diagnosticAlgorithm": {
      "title": "中毒性表皮壞死溶解症 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "緊急評估皮膚脫落範圍和全身狀態",
          "findings": ["大面積皮膚紅斑和水疱", "表皮剝脫（Nikolsky徵陽性）", "黏膜受累（口腔、結膜等）", "發熱和全身症狀"]
        },
        {
          "step": 2,
          "action": "藥物史回顧",
          "details": "詳細回顧近期所有用藥",
          "findings": ["確認可疑致敏藥物", "發病前1-3週內新使用的藥物", "常見誘因：磺胺類、NSAID、頭孢菌素等", "評估藥物時間關係"]
        },
        {
          "step": 3,
          "action": "組織病理學確診",
          "details": "進行皮膚活檢確認全層表皮壞死",
          "findings": ["全層表皮壞死", "表皮下水疱形成", "稀疏淋巴球浸潤", "與燙傷和天疱瘡鑑別"]
        },
        {
          "step": 4,
          "action": "支持治療與監測",
          "details": "停用可疑藥物，監測敗血症等併發症",
          "findings": ["受累體表面積評估", "感染風險監測", "電解質和蛋白質流失", "血液培養排除敗血症"]
        }
      ]
    }
  },
  "color-dilution-alopecia": {
    "diagnosticAlgorithm": {
      "title": "色素稀釋性脫毛症 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估稀釋色被毛區域的脫毛特徵",
          "findings": ["藍色或淡黃褐色被毛犬", "稀釋色區域漸進性脫毛", "通常6個月至3歲發病", "非稀釋色區域毛髮正常"]
        },
        {
          "step": 2,
          "action": "毛髮檢查",
          "details": "進行毛髮拔取和顯微鏡檢查",
          "findings": ["毛幹內黑色素團塊不規則分布", "毛幹扭曲和斷裂", "色素團塊呈巨大不規則塊狀", "毛囊萎縮"]
        },
        {
          "step": 3,
          "action": "組織病理學確診",
          "details": "進行皮膚活檢確認毛囊病變",
          "findings": ["毛囊內黑色素巨大團塊", "毛囊角化異常", "毛囊周圍輕度炎症", "與其他脫毛症鑑別"]
        }
      ]
    }
  },
  "follicular-dysplasia": {
    "diagnosticAlgorithm": {
      "title": "毛囊發育不良 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估脫毛模式、品種和發病年齡",
          "findings": ["特定品種好發", "對稱性或局部脫毛", "幼年至青年期發病", "皮膚乾燥和鱗屑"]
        },
        {
          "step": 2,
          "action": "皮膚學檢查",
          "details": "進行毛髮拔取檢查和皮膚刮片",
          "findings": ["毛幹形態異常", "排除蠕形蟎感染", "排除皮黴菌感染", "甲狀腺功能檢查排除內分泌脫毛"]
        },
        {
          "step": 3,
          "action": "組織病理學確診",
          "details": "進行皮膚活檢確認毛囊結構異常",
          "findings": ["毛囊結構發育不良", "毛囊角化異常", "毛球變形", "排除內分泌性脫毛"]
        }
      ]
    }
  },
  "cutaneous-vasculitis": {
    "diagnosticAlgorithm": {
      "title": "皮膚血管炎 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估皮膚血管炎典型病變",
          "findings": ["紫癜和瘀點瘀斑", "耳尖、尾尖和肉墊壞死", "皮膚潰瘍", "水腫和出血性水疱"]
        },
        {
          "step": 2,
          "action": "實驗室檢查",
          "details": "進行血液學和免疫學篩檢",
          "findings": ["全血計數評估血小板", "凝血功能檢查", "ANA和類風濕因子", "感染篩檢（壁蝨媒介疾病等）"]
        },
        {
          "step": 3,
          "action": "組織病理學確診",
          "details": "進行早期病灶的皮膚活檢",
          "findings": ["血管壁纖維素樣壞死", "白血球碎裂性血管炎", "血管周圍嗜中性球或淋巴球浸潤", "紅血球外溢"]
        },
        {
          "step": 4,
          "action": "病因學調查",
          "details": "系統性調查可能的觸發因子",
          "findings": ["藥物反應", "感染相關", "疫苗接種史", "自體免疫疾病"]
        }
      ]
    }
  },
  "superficial-necrolytic-dermatitis": {
    "diagnosticAlgorithm": {
      "title": "表淺壞死性皮膚炎 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估特徵性皮膚病變分布",
          "findings": ["肉墊過度角化和龜裂", "口周、眼周糜爛和結痂", "肘部和飛節壓力點病變", "外陰和肛周受累"]
        },
        {
          "step": 2,
          "action": "實驗室檢查",
          "details": "進行肝功能和代謝相關檢查",
          "findings": ["肝酶升高", "低胺基酸血症", "血糖可能升高（糖尿病併發）", "膽汁酸異常"]
        },
        {
          "step": 3,
          "action": "影像學檢查",
          "details": "進行腹部超音波評估肝臟和胰臟",
          "findings": ["肝臟蜂窩狀特徵性超音波表現", "胰臟腫塊（升糖素瘤相關）", "肝實質異質性回音", "腹水"]
        },
        {
          "step": 4,
          "action": "組織病理學確診",
          "details": "進行皮膚活檢確認特徵性組織學模式",
          "findings": ["紅白藍三色徵（Red-White-Blue pattern）", "表皮上層角化不全", "中層水腫和蒼白", "深層角化過度"]
        }
      ]
    }
  },
  "canine-pattern-alopecia": {
    "diagnosticAlgorithm": {
      "title": "犬模式型脫毛症 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估脫毛分布模式和品種",
          "findings": ["對稱性脫毛（耳廓、腹部、腋窩、大腿內側）", "短毛犬品種多見", "毛髮漸進性稀疏", "皮膚無炎症反應"]
        },
        {
          "step": 2,
          "action": "排除性檢查",
          "details": "排除其他脫毛原因",
          "findings": ["甲狀腺功能正常", "皮膚刮片排除寄生蟲", "真菌培養陰性", "無瘙癢"]
        },
        {
          "step": 3,
          "action": "組織病理學確診",
          "details": "進行皮膚活檢確認毛囊微小化",
          "findings": ["毛囊微小化", "毛囊數量正常但體積縮小", "無炎症浸潤", "與其他非炎症性脫毛症鑑別"]
        }
      ]
    }
  },
  "acanthosis-nigricans": {
    "diagnosticAlgorithm": {
      "title": "黑色棘皮症 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估皮膚色素沉著和增厚部位",
          "findings": ["腋窩和腹股溝對稱性色素沉著", "皮膚增厚和苔蘚化", "臘腸犬為原發型好發品種", "繼發型可見於任何品種"]
        },
        {
          "step": 2,
          "action": "基礎疾病篩檢",
          "details": "排除繼發性黑色棘皮症的基礎病因",
          "findings": ["甲狀腺功能低下篩檢", "腎上腺皮質功能亢進篩檢", "過敏性皮膚炎評估", "皮膚感染（細菌、酵母菌）"]
        },
        {
          "step": 3,
          "action": "組織病理學",
          "details": "進行皮膚活檢確認病理變化",
          "findings": ["表皮棘層增厚", "乳頭狀瘤樣增生", "黑色素沉著增加", "可能伴有繼發性感染"]
        }
      ]
    }
  },
  "intertrigo": {
    "diagnosticAlgorithm": {
      "title": "皮膚皺褶性皮膚炎 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "檢查皮膚皺褶區域的炎症和感染",
          "findings": ["面部皺褶炎症（短頭犬）", "唇褶炎症", "尾部皺褶（螺旋尾品種）", "外陰皺褶炎症（肥胖母犬）"]
        },
        {
          "step": 2,
          "action": "皮膚學檢查",
          "details": "進行細胞學和微生物學檢查",
          "findings": ["皺褶間潮濕和紅腫", "異味分泌物", "細胞學見細菌和/或酵母菌", "表面糜爛或潰瘍"]
        },
        {
          "step": 3,
          "action": "嚴重度評估與治療",
          "details": "評估嚴重程度決定治療方案",
          "findings": ["輕度：局部清潔和抗菌治療", "中度：全身性抗菌治療", "重度/反覆：手術切除皺褶", "評估肥胖作為促因"]
        }
      ]
    }
  },
  "corneal-sequestrum": {
    "diagnosticAlgorithm": {
      "title": "角膜壞死斑 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估角膜病變特徵，貓特別常見",
          "findings": ["角膜上棕色至黑色斑塊", "貓（波斯、喜馬拉雅等好發）", "流淚和瞇眼", "慢性角膜刺激史"]
        },
        {
          "step": 2,
          "action": "眼科檢查",
          "details": "進行完整眼科檢查評估嚴重程度",
          "findings": ["裂隙燈檢查評估深度", "螢光素染色評估周圍潰瘍", "角膜血管新生程度", "眼壓測量排除青光眼"]
        },
        {
          "step": 3,
          "action": "病因評估",
          "details": "評估促發因子",
          "findings": ["疱疹病毒PCR（貓）", "眼瞼異常（內翻、異位睫毛）", "乾眼症評估（Schirmer試驗）", "慢性角膜暴露"]
        },
        {
          "step": 4,
          "action": "手術評估",
          "details": "評估手術切除指征",
          "findings": ["壞死斑深度評估", "角膜切除手術規劃", "結膜或角膜移植術需求評估", "術後追蹤計劃"]
        }
      ]
    }
  },
  "corneal-dystrophy": {
    "diagnosticAlgorithm": {
      "title": "角膜營養不良 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估角膜混濁特徵和品種背景",
          "findings": ["雙側對稱性角膜混濁", "品種易感性（騎士查理王獵犬、哈士奇等）", "通常無疼痛症狀", "視力可能正常"]
        },
        {
          "step": 2,
          "action": "眼科檢查",
          "details": "進行裂隙燈和其他眼科檢查",
          "findings": ["角膜基質結晶狀或白色沉積", "病變位置（上皮型、基質型或內皮型）", "螢光素染色通常陰性", "眼壓正常"]
        },
        {
          "step": 3,
          "action": "分類與鑑別",
          "details": "確定角膜營養不良類型並排除其他角膜疾病",
          "findings": ["上皮/前基質型：淺層沉積", "基質型：脂質或膽固醇沉積", "內皮型：角膜水腫", "排除代謝性角膜沉積（高脂血症）"]
        }
      ]
    }
  },
  "optic-neuritis": {
    "diagnosticAlgorithm": {
      "title": "視神經炎 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估急性視力喪失和瞳孔反射異常",
          "findings": ["急性單側或雙側失明", "瞳孔散大且對光反射遲鈍/消失", "直接和間接瞳孔反射異常", "可能伴有眼後疼痛"]
        },
        {
          "step": 2,
          "action": "眼底檢查",
          "details": "進行直接和間接眼底鏡檢查",
          "findings": ["視神經乳頭水腫和充血", "視神經乳頭出血", "視網膜血管炎", "球後視神經炎眼底可能正常"]
        },
        {
          "step": 3,
          "action": "進階影像與實驗室",
          "details": "進行MRI和全面病因學篩檢",
          "findings": ["MRI見視神經增粗和增強", "CSF分析排除腦膜腦炎", "感染篩檢（弓漿蟲、真菌等）", "壁蝨媒介疾病篩檢"]
        },
        {
          "step": 4,
          "action": "病因學確認",
          "details": "確定視神經炎的基礎原因",
          "findings": ["感染性vs免疫介導性", "GME或MUE相關", "腫瘤性病因排除", "特發性（排除性診斷）"]
        }
      ]
    }
  },
  "chorioretinitis": {
    "diagnosticAlgorithm": {
      "title": "脈絡膜視網膜炎 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估視覺障礙和眼底異常",
          "findings": ["視力減退", "可能無症狀（偶然發現）", "單側或雙側受累", "可能伴有前葡萄膜炎"]
        },
        {
          "step": 2,
          "action": "眼底檢查",
          "details": "進行詳細眼底檢查評估病變",
          "findings": ["視網膜下積液或水腫", "灰白色視網膜下浸潤灶", "活動性病灶邊界模糊", "舊病灶呈色素沉著瘢痕"]
        },
        {
          "step": 3,
          "action": "病因學篩檢",
          "details": "進行全面感染和免疫學篩檢",
          "findings": ["弓漿蟲血清學和PCR", "壁蝨媒介疾病篩檢", "真菌感染篩檢", "FeLV/FIV（貓）"]
        },
        {
          "step": 4,
          "action": "確診與分類",
          "details": "確定病因並制定治療計劃",
          "findings": ["感染性vs免疫介導性vs腫瘤性", "全身性疾病評估", "雙側受累提示全身性病因", "視網膜電圖評估功能"]
        }
      ]
    }
  },
  "episcleritis": {
    "diagnosticAlgorithm": {
      "title": "鞏膜外層炎 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估眼球表面炎症特徵",
          "findings": ["結膜和鞏膜外層充血", "局部或瀰漫性紅腫", "通常不影響視力", "可能輕微不適"]
        },
        {
          "step": 2,
          "action": "眼科檢查",
          "details": "進行裂隙燈檢查區分結膜炎和鞏膜炎",
          "findings": ["腎上腺素10%點眼後血管不收縮（區別於結膜炎）", "鞏膜外層結節或增厚", "角膜可能繼發性變化", "眼壓通常正常"]
        },
        {
          "step": 3,
          "action": "病因調查與鑑別",
          "details": "排除全身性疾病並確認診斷",
          "findings": ["免疫介導性最常見", "排除全身性血管炎", "與壞死性鞏膜炎鑑別", "活檢可見肉芽腫性炎症（嚴重病例）"]
        }
      ]
    }
  },
  "endophthalmitis": {
    "diagnosticAlgorithm": {
      "title": "眼內炎 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "緊急評估眼內感染的嚴重程度",
          "findings": ["嚴重眼痛和視力喪失", "結膜充血和水腫", "前房積膿", "角膜水腫"]
        },
        {
          "step": 2,
          "action": "眼科檢查",
          "details": "進行完整眼科評估",
          "findings": ["前房閃輝和纖維素沉積", "前房積膿", "玻璃體混濁（無法觀察眼底）", "眼壓可能升高或降低"]
        },
        {
          "step": 3,
          "action": "病因評估",
          "details": "評估感染來源和病原體",
          "findings": ["外源性（穿透性外傷、手術後）", "內源性（血行播散感染）", "前房穿刺液細胞學和培養", "全身感染篩檢"]
        },
        {
          "step": 4,
          "action": "治療與預後評估",
          "details": "評估視力保存可能性",
          "findings": ["眼球超音波評估玻璃體", "視網膜脫離評估", "評估摘除眼球指征", "全身性和局部抗菌治療計劃"]
        }
      ]
    }
  },
  "anterior-uveitis": {
    "diagnosticAlgorithm": {
      "title": "前葡萄膜炎 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估眼前段炎症徵象",
          "findings": ["眼痛和瞇眼", "流淚", "畏光", "瞳孔縮小"]
        },
        {
          "step": 2,
          "action": "眼科檢查",
          "details": "進行完整裂隙燈和眼底檢查",
          "findings": ["前房閃輝（Tyndall效應）", "角膜後沉澱物（KP）", "虹膜水腫和色素變化", "眼壓通常降低"]
        },
        {
          "step": 3,
          "action": "病因學篩檢",
          "details": "進行全面系統性疾病篩檢",
          "findings": ["壁蝨媒介疾病篩檢", "弓漿蟲和真菌感染", "FeLV/FIV（貓）", "腫瘤性病因（淋巴瘤）"]
        },
        {
          "step": 4,
          "action": "併發症監測",
          "details": "監測和預防前葡萄膜炎的併發症",
          "findings": ["虹膜後黏連", "繼發性青光眼", "白內障形成", "視網膜脫離"]
        }
      ]
    }
  },
  "phthisis-bulbi": {
    "diagnosticAlgorithm": {
      "title": "眼球萎縮 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估眼球縮小和功能喪失",
          "findings": ["眼球明顯縮小", "眼球內陷", "視力完全喪失", "慢性眼病病史"]
        },
        {
          "step": 2,
          "action": "眼科檢查",
          "details": "評估殘餘眼球結構",
          "findings": ["眼球硬度降低", "角膜混濁或帶狀角膜病變", "前房消失或淺化", "晶體鈣化"]
        },
        {
          "step": 3,
          "action": "影像學與評估",
          "details": "進行眼球超音波和評估是否需要摘除",
          "findings": ["眼球超音波顯示內部結構紊亂", "排除眼內腫瘤", "評估義眼植入可行性", "對側眼評估"]
        }
      ]
    }
  },
  "eyelid-agenesis": {
    "diagnosticAlgorithm": {
      "title": "眼瞼缺損 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估先天性眼瞼結構缺損，貓常見",
          "findings": ["上眼瞼外側部分缺損（最常見）", "角膜暴露和慢性刺激", "結膜充血和分泌物", "幼齡貓"]
        },
        {
          "step": 2,
          "action": "眼科檢查",
          "details": "評估角膜和結膜續發性變化",
          "findings": ["角膜血管新生", "角膜色素沉著", "角膜潰瘍", "乾眼症（Schirmer試驗）"]
        },
        {
          "step": 3,
          "action": "手術規劃",
          "details": "評估重建手術選項",
          "findings": ["缺損範圍和程度評估", "皮瓣重建選項", "Roberts-Bistner或Mustardé旋轉皮瓣", "角膜保護評估"]
        }
      ]
    }
  },
  "mastitis": {
    "diagnosticAlgorithm": {
      "title": "乳腺炎 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估哺乳母犬/母貓的乳腺炎症",
          "findings": ["乳腺腫脹、發熱、疼痛", "乳汁異常（血性、膿性）", "發熱和精神沉鬱", "拒絕哺乳幼崽"]
        },
        {
          "step": 2,
          "action": "乳汁檢查",
          "details": "進行乳汁細胞學和培養",
          "findings": ["乳汁顏色和性狀異常", "細胞學見大量嗜中性球和細菌", "乳汁細菌培養和藥敏試驗", "常見菌：E. coli、Staphylococcus、Streptococcus"]
        },
        {
          "step": 3,
          "action": "全身評估",
          "details": "評估全身性感染和併發症",
          "findings": ["全血計數見白血球增多", "生化評估敗血症風險", "超音波排除乳腺膿瘍", "幼崽健康狀態評估"]
        }
      ]
    }
  },
  "vaginal-prolapse": {
    "diagnosticAlgorithm": {
      "title": "陰道脫垂 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估陰道組織脫出的程度和時機",
          "findings": ["陰道口可見粉紅色組織突出", "通常發生於動情前期/動情期", "舔舐會陰部", "排尿困難或困難"]
        },
        {
          "step": 2,
          "action": "臨床分級",
          "details": "評估脫垂嚴重程度",
          "findings": ["第一型：輕度脫出（黏膜外翻）", "第二型：中度脫出", "第三型：完全脫垂（甜甜圈狀）", "組織活力評估（壞死、水腫）"]
        },
        {
          "step": 3,
          "action": "鑑別與評估",
          "details": "排除其他會陰腫塊原因",
          "findings": ["與陰道腫瘤鑑別", "與子宮脫垂鑑別", "荷爾蒙狀態評估", "排除泌尿道阻塞"]
        }
      ]
    }
  },
  "agalactia": {
    "diagnosticAlgorithm": {
      "title": "無乳症 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估產後母體乳汁分泌不足",
          "findings": ["幼崽持續哭叫和體重不增", "乳腺發育不良或無乳汁", "產後母體精神狀態評估", "首次生產或早產"]
        },
        {
          "step": 2,
          "action": "母體評估",
          "details": "評估母體健康和荷爾蒙狀態",
          "findings": ["全身健康狀態評估", "乳腺觸診（發育程度）", "排除乳腺炎", "排除全身性疾病"]
        },
        {
          "step": 3,
          "action": "病因鑑別",
          "details": "確定無乳症的原因",
          "findings": ["原發性：乳腺發育不全", "繼發性：全身性疾病、營養不良", "藥物相關（某些藥物抑制泌乳）", "心理因素（緊迫、排斥幼崽）"]
        }
      ]
    }
  },
  "retained-placenta": {
    "diagnosticAlgorithm": {
      "title": "胎盤滯留 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估產後胎盤排出情況",
          "findings": ["產後持續性陰道分泌物（惡露）", "胎盤數量與幼崽數不符", "發熱和精神沉鬱", "腹部觸診有子宮增大"]
        },
        {
          "step": 2,
          "action": "影像學檢查",
          "details": "進行腹部超音波確認子宮內殘留物",
          "findings": ["子宮內殘留高回音物質", "子宮壁增厚", "子宮內液體積聚", "排除殘留胎兒"]
        },
        {
          "step": 3,
          "action": "全身評估",
          "details": "評估感染和代謝併發症",
          "findings": ["白血球增多伴左移", "發熱", "子宮蓄膿風險", "敗血症指標監測"]
        }
      ]
    }
  },
  "subinvolution-placental-sites": {
    "diagnosticAlgorithm": {
      "title": "胎盤附著部位退化不全 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估產後持續性陰道出血",
          "findings": ["產後超過4-6週仍有陰道出血", "年輕母犬首次生產多見", "全身狀態通常良好", "出血量通常不大"]
        },
        {
          "step": 2,
          "action": "鑑別診斷",
          "details": "排除其他產後出血原因",
          "findings": ["超音波排除子宮蓄膿", "排除胎盤滯留", "排除凝血功能障礙", "排除子宮腫瘤"]
        },
        {
          "step": 3,
          "action": "確診",
          "details": "通常為排除性診斷或組織學確認",
          "findings": ["組織學見胎盤附著處滋養層細胞殘存", "子宮壁血管正常退化不全", "通常自行消退", "持續性出血可能需要卵巢子宮切除術"]
        }
      ]
    }
  },
  "uterine-rupture": {
    "diagnosticAlgorithm": {
      "title": "子宮破裂 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "緊急評估",
          "details": "評估急性腹部危象和休克徵象",
          "findings": ["急性腹痛和腹部膨脹", "休克徵象（蒼白黏膜、心搏過速）", "分娩困難病史", "陰道出血或停止分娩努力"]
        },
        {
          "step": 2,
          "action": "影像學檢查",
          "details": "進行腹部X光和超音波緊急評估",
          "findings": ["腹腔游離液體（血性腹水）", "胎兒位於子宮外", "腹腔內游離氣體", "子宮輪廓異常"]
        },
        {
          "step": 3,
          "action": "實驗室與穩定",
          "details": "進行緊急實驗室檢查並穩定患者",
          "findings": ["PCV/TP評估出血程度", "凝血功能評估", "電解質和酸鹼平衡", "腹腔穿刺液分析"]
        },
        {
          "step": 4,
          "action": "手術確診與治療",
          "details": "緊急探查性剖腹術確診並修復",
          "findings": ["子宮破裂部位確認", "胎兒存活評估", "腹腔汙染程度", "決定修復或切除子宮"]
        }
      ]
    }
  },
  "prostatitis": {
    "diagnosticAlgorithm": {
      "title": "前列腺炎 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估泌尿生殖道和全身症狀",
          "findings": ["排尿困難或血尿", "排便困難", "發熱和精神沉鬱（急性）", "會陰疼痛和步態僵硬"]
        },
        {
          "step": 2,
          "action": "前列腺檢查",
          "details": "進行直腸觸診和影像學評估",
          "findings": ["直腸觸診前列腺腫大和疼痛", "前列腺超音波見實質異常", "可能見前列腺膿瘍", "前列腺不對稱或結節"]
        },
        {
          "step": 3,
          "action": "實驗室檢查",
          "details": "進行尿液和前列腺液分析",
          "findings": ["尿液分析見膿尿和菌尿", "前列腺液培養分離細菌", "全血計數見白血球增多", "C反應蛋白升高"]
        },
        {
          "step": 4,
          "action": "鑑別與治療評估",
          "details": "與其他前列腺疾病鑑別",
          "findings": ["與前列腺增生鑑別", "與前列腺腫瘤鑑別", "去勢狀態評估", "超音波引導穿刺排除膿瘍"]
        }
      ]
    }
  },
  "penile-neoplasia": {
    "diagnosticAlgorithm": {
      "title": "陰莖腫瘤 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估陰莖和包皮異常腫塊",
          "findings": ["陰莖或包皮可見腫塊", "血性或膿性分泌物", "舔舐生殖器", "排尿異常"]
        },
        {
          "step": 2,
          "action": "細胞學檢查",
          "details": "進行腫塊細針抽吸或印片細胞學",
          "findings": ["鱗狀細胞癌（最常見）", "傳染性性病腫瘤（TVT）", "乳頭狀瘤", "黑色素瘤"]
        },
        {
          "step": 3,
          "action": "分期檢查",
          "details": "進行區域和遠端轉移評估",
          "findings": ["腹股溝淋巴結觸診和FNA", "腹部超音波", "胸部X光", "評估手術切除可行性"]
        },
        {
          "step": 4,
          "action": "組織病理學確診",
          "details": "進行切除或活檢確認腫瘤類型",
          "findings": ["組織學確認腫瘤類型和分級", "浸潤深度評估", "手術邊界評估", "TVT免疫組織化學確認"]
        }
      ]
    }
  },
  "aplastic-anemia": {
    "diagnosticAlgorithm": {
      "title": "再生不良性貧血 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估非再生性貧血和骨髓衰竭症狀",
          "findings": ["蒼白黏膜和虛弱", "出血傾向（瘀斑、血尿）", "反覆感染", "漸進性惡化"]
        },
        {
          "step": 2,
          "action": "血液學檢查",
          "details": "確認全血球減少和非再生性貧血",
          "findings": ["嚴重非再生性貧血", "網狀紅血球減少或缺如", "白血球減少", "血小板減少"]
        },
        {
          "step": 3,
          "action": "骨髓穿刺",
          "details": "進行骨髓抽吸和核心活檢確認骨髓衰竭",
          "findings": ["骨髓增生不良", "脂肪組織取代造血組織", "殘餘造血細胞形態正常", "排除骨髓增生異常和白血病"]
        },
        {
          "step": 4,
          "action": "病因調查",
          "details": "系統性調查骨髓衰竭的原因",
          "findings": ["藥物暴露史（氯黴素、化療藥物、雌激素）", "Ehrlichia canis篩檢", "FeLV篩檢（貓）", "免疫介導性骨髓破壞評估"]
        }
      ]
    }
  },
  "heinz-body-anemia": {
    "diagnosticAlgorithm": {
      "title": "乃乃氏小體溶血性貧血 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估溶血性貧血症狀和氧化劑暴露史",
          "findings": ["蒼白或黃疸黏膜", "虛弱和運動不耐", "暗色尿液", "已知接觸氧化性物質（洋蔥、鋅、醋胺酚等）"]
        },
        {
          "step": 2,
          "action": "血液學檢查",
          "details": "進行全血計數和特殊染色血液抹片",
          "findings": ["再生性貧血", "新亞甲藍染色見Heinz bodies", "偏心球形紅血球", "網狀紅血球增加"]
        },
        {
          "step": 3,
          "action": "病因鑑定",
          "details": "確定氧化性損傷的來源",
          "findings": ["蔥屬植物攝入", "鋅中毒（硬幣、螺母攝入）", "醋胺酚中毒（貓特別敏感）", "糖尿病酮酸中毒相關"]
        },
        {
          "step": 4,
          "action": "併發症監測",
          "details": "監測溶血相關併發症",
          "findings": ["連續PCV追蹤", "變性血紅素血症評估", "腎功能監測", "是否需要輸血評估"]
        }
      ]
    }
  },
  "methemoglobinemia": {
    "diagnosticAlgorithm": {
      "title": "變性血紅素血症 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估組織缺氧症狀和特徵性血液顏色",
          "findings": ["黏膜發紺（巧克力棕色）", "呼吸困難", "虛弱和嗜睡", "血液呈巧克力棕色且不因暴露空氣變紅"]
        },
        {
          "step": 2,
          "action": "診斷確認",
          "details": "測定變性血紅素濃度",
          "findings": ["共氧計（co-oximetry）測定MetHb百分比", "MetHb >15%出現臨床症狀", "MetHb >50%可致命", "脈搏血氧計讀數異常低（~85%固定）"]
        },
        {
          "step": 3,
          "action": "病因調查",
          "details": "確定氧化性毒物暴露源",
          "findings": ["醋胺酚攝入（貓最常見原因）", "苯佐卡因或利多卡因局部麻醉劑", "洋蔥/大蒜攝入", "亞硝酸鹽暴露"]
        },
        {
          "step": 4,
          "action": "治療性確認",
          "details": "亞甲藍治療反應支持診斷",
          "findings": ["亞甲藍IV治療後MetHb下降", "黏膜顏色改善", "Heinz bodies同時存在提示氧化損傷", "持續監測至MetHb正常化"]
        }
      ]
    }
  },
  "microangiopathic-hemolytic-anemia": {
    "diagnosticAlgorithm": {
      "title": "微血管病性溶血性貧血 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估溶血性貧血和微血管病變徵象",
          "findings": ["蒼白黏膜和虛弱", "出血傾向", "可能有發熱", "可能與嚴重基礎疾病相關"]
        },
        {
          "step": 2,
          "action": "血液學檢查",
          "details": "進行全血計數和血液抹片評估",
          "findings": ["再生性溶血性貧血", "血液抹片見碎裂紅血球（schistocytes）", "血小板減少", "網狀紅血球增加"]
        },
        {
          "step": 3,
          "action": "凝血功能評估",
          "details": "評估DIC和血栓性微血管病",
          "findings": ["PT/aPTT延長（DIC時）", "纖維蛋白原降低", "D-dimer升高", "抗凝血酶III降低"]
        },
        {
          "step": 4,
          "action": "基礎疾病調查",
          "details": "找出導致微血管損傷的原因",
          "findings": ["血管肉瘤篩檢", "DIC基礎病因", "嚴重感染或敗血症", "免疫介導性血管炎"]
        }
      ]
    }
  },
  "erythrocytosis": {
    "diagnosticAlgorithm": {
      "title": "紅血球增多症 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "確認紅血球增多並排除相對性增多",
          "findings": ["PCV/Hct升高", "紅色黏膜充血", "評估脫水狀態", "排除脾臟收縮（緊迫相關）"]
        },
        {
          "step": 2,
          "action": "分類鑑別",
          "details": "區分相對性、適當性和不適當性紅血球增多",
          "findings": ["補液後PCV仍高排除相對性", "血氧飽和度評估", "EPO水平測定", "排除慢性低氧（心肺疾病）"]
        },
        {
          "step": 3,
          "action": "病因調查",
          "details": "確定紅血球增多的具體原因",
          "findings": ["胸部X光和心臟超音波排除心肺疾病", "腎臟超音波排除腎臟腫瘤", "腹部影像排除其他EPO分泌性腫瘤", "骨髓穿刺排除真性紅血球增多症"]
        },
        {
          "step": 4,
          "action": "確診",
          "details": "根據檢查結果確定病因分類",
          "findings": ["繼發性適當性：心肺疾病致缺氧", "繼發性不適當性：EPO分泌性腫瘤", "原發性：真性紅血球增多症", "EPO水平為關鍵鑑別指標"]
        }
      ]
    }
  },
  "chronic-lymphocytic-leukemia": {
    "diagnosticAlgorithm": {
      "title": "慢性淋巴球性白血病 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估漸進性症狀和血液學異常",
          "findings": ["多數偶然發現（常規血檢）", "漸進性虛弱和體重減輕", "脾臟或肝臟腫大", "淋巴結可能正常或輕度腫大"]
        },
        {
          "step": 2,
          "action": "血液學檢查",
          "details": "進行全血計數和血液抹片評估",
          "findings": ["持續性成熟淋巴球增多（>20,000/μL）", "淋巴球形態成熟", "可能伴貧血或血小板減少", "籃球細胞（basket cells）"]
        },
        {
          "step": 3,
          "action": "免疫分型",
          "details": "進行流式細胞術確認淋巴球類型",
          "findings": ["T細胞型或B細胞型分類", "表面標記分析", "B-CLL CD21+、CD79a+", "T-CLL CD3+、CD5+或CD8+"]
        },
        {
          "step": 4,
          "action": "骨髓與分期",
          "details": "進行骨髓穿刺和全身分期",
          "findings": ["骨髓淋巴球浸潤（>20%）", "腹部超音波評估肝脾", "胸部X光", "區別於第V期淋巴瘤（白血球性）"]
        }
      ]
    }
  },
  "acute-lymphoblastic-leukemia": {
    "diagnosticAlgorithm": {
      "title": "急性淋巴母細胞性白血病 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估急性發病的全身症狀",
          "findings": ["急性虛弱和嗜睡", "發熱", "出血傾向", "食慾廢絕"]
        },
        {
          "step": 2,
          "action": "血液學檢查",
          "details": "進行全血計數和血液抹片評估",
          "findings": ["白血球數可高可低", "血液抹片見大量淋巴母細胞", "貧血和血小板減少", "母細胞高核/質比、核仁明顯"]
        },
        {
          "step": 3,
          "action": "骨髓穿刺",
          "details": "進行骨髓抽吸確認母細胞比例",
          "findings": ["骨髓母細胞 >20%", "正常造血被取代", "免疫分型確認細胞來源", "排除急性骨髓性白血病"]
        },
        {
          "step": 4,
          "action": "免疫分型與分期",
          "details": "進行流式細胞術和全身分期",
          "findings": ["T-ALL或B-ALL分類", "免疫組織化學輔助鑑別", "影像學評估器官浸潤", "與第V期淋巴瘤鑑別"]
        }
      ]
    }
  },
  "septic-arthritis": {
    "diagnosticAlgorithm": {
      "title": "化膿性關節炎 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估急性關節炎症和全身症狀",
          "findings": ["急性單關節或多關節腫脹", "劇烈疼痛和跛行", "發熱和精神沉鬱", "穿透傷或手術史"]
        },
        {
          "step": 2,
          "action": "關節液分析",
          "details": "進行關節穿刺和滑液分析",
          "findings": ["滑液混濁至膿性", "有核細胞顯著增多（>40,000/μL）", "嗜中性球 >90%", "退化性嗜中性球和細菌"]
        },
        {
          "step": 3,
          "action": "微生物學檢查",
          "details": "進行滑液培養和藥敏試驗",
          "findings": ["細菌培養分離病原菌", "常見：Staphylococcus、Streptococcus、E. coli", "抗生素藥敏指導治療", "血液培養排除菌血症"]
        },
        {
          "step": 4,
          "action": "影像學評估",
          "details": "進行X光和進階影像評估關節損傷",
          "findings": ["關節腫脹和軟組織增厚", "關節間隙改變", "骨質侵蝕（晚期）", "排除骨髓炎累及"]
        }
      ]
    }
  },
  "osteomyelitis": {
    "diagnosticAlgorithm": {
      "title": "骨髓炎 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估骨感染症狀和風險因子",
          "findings": ["受累肢體疼痛和腫脹", "跛行（可能嚴重不願負重）", "發熱", "開放性骨折或手術植入物史"]
        },
        {
          "step": 2,
          "action": "影像學檢查",
          "details": "進行X光評估骨骼變化",
          "findings": ["骨溶解和不規則骨破壞", "骨膜反應", "死骨形成", "植入物周圍溶解"]
        },
        {
          "step": 3,
          "action": "細菌培養",
          "details": "進行深層組織或骨培養確認病原",
          "findings": ["骨活檢組織培養", "最常見：Staphylococcus spp.", "厭氧菌培養", "抗生素藥敏試驗"]
        },
        {
          "step": 4,
          "action": "進階評估",
          "details": "評估骨髓炎範圍和手術需求",
          "findings": ["CT評估骨破壞範圍", "排除真菌性骨髓炎", "評估植入物移除需求", "組織病理學排除腫瘤"]
        }
      ]
    }
  },
  "bicipital-tenosynovitis": {
    "diagnosticAlgorithm": {
      "title": "二頭肌腱鞘炎 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估前肢跛行和肩部疼痛",
          "findings": ["前肢跛行（運動後加重）", "肩部疼痛", "二頭肌溝觸診疼痛", "肩關節屈曲時疼痛加重"]
        },
        {
          "step": 2,
          "action": "骨科學檢查",
          "details": "進行特異性肩關節和二頭肌腱評估",
          "findings": ["二頭肌腱直接觸診疼痛", "肩關節屈曲伴前臂旋前誘發疼痛", "肩關節活動範圍可能正常", "肌肉萎縮（慢性）"]
        },
        {
          "step": 3,
          "action": "影像學檢查",
          "details": "進行肩關節X光和超音波評估",
          "findings": ["二頭肌溝骨質增生", "結節間溝鈣化", "超音波見肌腱增厚和積液", "MRI精確評估肌腱病變"]
        },
        {
          "step": 4,
          "action": "關節鏡確診",
          "details": "視情況進行肩關節鏡檢查",
          "findings": ["肌腱纖維化和炎症", "肌腱部分撕裂", "滑膜增生", "合併OCD或其他關節病變"]
        }
      ]
    }
  },
  "fibrotic-myopathy": {
    "diagnosticAlgorithm": {
      "title": "纖維性肌病 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估機械性步態異常",
          "findings": ["特徵性步態（擺動相足部突然向後拉）", "受累肌肉堅硬可觸及", "股薄肌或半腱肌最常受累", "德國牧羊犬好發"]
        },
        {
          "step": 2,
          "action": "觸診與肌肉評估",
          "details": "進行受累肌肉的詳細觸診",
          "findings": ["肌肉內可觸及堅硬纖維化帶", "關節被動活動範圍受限", "肌肉萎縮", "無疼痛反應"]
        },
        {
          "step": 3,
          "action": "影像學檢查",
          "details": "進行超音波評估肌肉結構",
          "findings": ["超音波見肌肉纖維化和瘢痕組織", "肌肉回音性增加", "正常肌肉結構喪失", "MRI精確評估範圍"]
        },
        {
          "step": 4,
          "action": "組織病理學",
          "details": "必要時進行肌肉活檢確認",
          "findings": ["成熟纖維結締組織取代正常肌肉", "肌纖維萎縮和退化", "排除腫瘤性病變", "評估手術治療可行性"]
        }
      ]
    }
  },
  "hypertrophic-osteopathy": {
    "diagnosticAlgorithm": {
      "title": "肥大性骨病 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估四肢遠端腫脹和潛在胸腔病變",
          "findings": ["四肢遠端對稱性腫脹", "觸診堅硬且疼痛", "跛行和步態僵硬", "可能伴有咳嗽或呼吸困難"]
        },
        {
          "step": 2,
          "action": "四肢X光",
          "details": "進行四肢遠端X光確認骨膜增生",
          "findings": ["長骨骨幹骨膜新生骨", "骨膜增生呈柵欄狀或層狀", "掌骨/蹠骨最先受累", "軟組織腫脹"]
        },
        {
          "step": 3,
          "action": "胸腹腔篩檢",
          "details": "進行胸部X光和腹部超音波尋找原發病變",
          "findings": ["肺部腫塊（最常見原因）", "胸腔積液", "腹腔腫塊", "食道病變"]
        },
        {
          "step": 4,
          "action": "原發病因確認",
          "details": "確認原發病變的性質",
          "findings": ["CT精確評估胸腔腫塊", "細針抽吸或活檢確認腫瘤類型", "原發性肺腫瘤最常見", "治療原發病後骨膜變化可消退"]
        }
      ]
    }
  },
  "luxating-shoulder": {
    "diagnosticAlgorithm": {
      "title": "肩關節脫位 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估前肢跛行和肩關節穩定性",
          "findings": ["急性或慢性前肢跛行", "肩關節外形異常", "肩關節活動範圍異常", "外傷史或先天性關節鬆弛"]
        },
        {
          "step": 2,
          "action": "骨科學檢查",
          "details": "進行肩關節穩定性測試",
          "findings": ["肱骨頭可觸及異常位置", "肩關節抽屜試驗異常", "內側或外側脫位", "關節過度鬆弛"]
        },
        {
          "step": 3,
          "action": "影像學確診",
          "details": "進行肩關節X光確認脫位方向",
          "findings": ["肱骨頭與肩胛盂對位異常", "排除骨折", "退行性關節變化（慢性）", "雙側對照"]
        },
        {
          "step": 4,
          "action": "手術規劃",
          "details": "評估復位方式和穩定化手術",
          "findings": ["急性vs慢性脫位", "先天性vs創傷性", "韌帶完整性評估", "手術穩定化方案"]
        }
      ]
    }
  },
  "ununited-anconeal-process": {
    "diagnosticAlgorithm": {
      "title": "肘突未癒合 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估前肢跛行和肘關節症狀",
          "findings": ["生長中大型犬前肢跛行", "肘關節腫脹", "運動後跛行加重", "品種易感（德國牧羊犬、巴吉度等）"]
        },
        {
          "step": 2,
          "action": "骨科學檢查",
          "details": "進行肘關節觸診和活動度評估",
          "findings": ["肘關節伸展時疼痛", "關節積液", "關節活動範圍可能減少", "肘關節可能有捻發音"]
        },
        {
          "step": 3,
          "action": "影像學確診",
          "details": "進行肘關節X光（屈曲側面位最佳）",
          "findings": ["肘突骨化中心與鷹嘴突間透明線", "肘突遊離或半附著", "繼發性退行性關節病變", "CT精確評估遊離碎片"]
        },
        {
          "step": 4,
          "action": "治療規劃",
          "details": "評估手術選項",
          "findings": ["年齡和退行性變化程度", "碎片移除vs固定", "尺骨近端截骨術（動力學矯正）", "雙側評估"]
        }
      ]
    }
  },
  "arrhythmogenic-rvc": {
    "diagnosticAlgorithm": {
      "title": "致心律不整性右心室心肌病 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估心律不整症狀，拳師犬為高風險品種",
          "findings": ["暈厥或運動不耐", "心律不整（可觸及或聽診）", "拳師犬或英國鬥牛犬", "可能有家族史"]
        },
        {
          "step": 2,
          "action": "心電圖檢查",
          "details": "進行12導程心電圖和24小時Holter監測",
          "findings": ["室性早搏（VPCs）", "VPCs呈左束支傳導阻滯形態（右心室起源）", "Holter >300 VPCs/24h有意義", "室性心搏過速"]
        },
        {
          "step": 3,
          "action": "心臟超音波",
          "details": "進行心臟超音波評估心臟結構和功能",
          "findings": ["右心室擴大", "右心室壁運動異常", "部分病例心臟結構正常", "排除其他心臟病"]
        },
        {
          "step": 4,
          "action": "基因檢測與分類",
          "details": "進行基因檢測確認突變",
          "findings": ["striatin基因突變檢測", "依嚴重度分三類：隱匿型、心律不整型、心肌衰竭型", "家族篩檢建議", "基因陽性不等於臨床發病"]
        }
      ]
    }
  },
  "cardiac-tamponade": {
    "diagnosticAlgorithm": {
      "title": "心包填塞 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "緊急評估",
          "details": "識別心包填塞的急性徵象",
          "findings": ["Beck三聯症：低血壓、頸靜脈怒張、心音減弱", "運動不耐或虛脫", "腹部膨大（腹水）", "心搏過速"]
        },
        {
          "step": 2,
          "action": "心臟超音波",
          "details": "緊急進行心臟超音波確認心包積液",
          "findings": ["心包腔大量積液", "心臟擺動（搖擺心）", "右心房或右心室舒張期塌陷", "評估心包積液量"]
        },
        {
          "step": 3,
          "action": "心包穿刺",
          "details": "進行診斷性和治療性心包穿刺引流",
          "findings": ["積液分析（出血性vs滲出性vs漏出性）", "PCV比較（積液vs外周血）", "細胞學評估", "引流後血流動力學改善"]
        },
        {
          "step": 4,
          "action": "病因調查",
          "details": "確定心包積液的基礎原因",
          "findings": ["血管肉瘤（右心耳常見）", "化學感受器瘤", "特發性心包積液", "間皮瘤"]
        }
      ]
    }
  },
  "cor-pulmonale": {
    "diagnosticAlgorithm": {
      "title": "肺心症 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估右心衰竭和肺部疾病症狀",
          "findings": ["運動不耐和呼吸困難", "腹部膨大（腹水）", "頸靜脈怒張", "慢性肺部疾病病史"]
        },
        {
          "step": 2,
          "action": "心肺影像學",
          "details": "進行胸部X光和心臟超音波",
          "findings": ["右心室和右心房擴大", "肺動脈增粗", "肺部原發病變", "胸部X光排除心絲蟲和肺部腫塊"]
        },
        {
          "step": 3,
          "action": "心臟超音波",
          "details": "評估肺高壓和右心功能",
          "findings": ["三尖瓣反流速度升高（>2.8 m/s提示肺高壓）", "右心室肥大或擴大", "室間隔偏位", "肺動脈擴張"]
        },
        {
          "step": 4,
          "action": "病因確認",
          "details": "確定導致肺高壓和右心衰竭的原因",
          "findings": ["慢性支氣管肺疾病", "肺動脈血栓栓塞", "心絲蟲病", "肺纖維化"]
        }
      ]
    }
  },
  "endocardiosis": {
    "diagnosticAlgorithm": {
      "title": "心內膜病/退行性瓣膜病 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估心雜音和心衰竭症狀",
          "findings": ["左側收縮期心雜音", "咳嗽（尤其夜間或運動後）", "運動不耐", "中老年小型犬"]
        },
        {
          "step": 2,
          "action": "影像學檢查",
          "details": "進行胸部X光評估心臟大小和肺水腫",
          "findings": ["左心房和左心室擴大", "肺靜脈擴張", "肺水腫（失代償期）", "主支氣管被擠壓"]
        },
        {
          "step": 3,
          "action": "心臟超音波",
          "details": "進行心臟超音波評估瓣膜病變和心功能",
          "findings": ["二尖瓣增厚和脫垂", "二尖瓣反流（彩色都卜勒）", "LA/Ao比值 >1.6提示顯著擴大", "LVIDdN評估左心室擴大"]
        },
        {
          "step": 4,
          "action": "ACVIM分期",
          "details": "按照ACVIM共識分期指導治療",
          "findings": ["A期：高風險品種無疾病", "B1期：心雜音但無心臟擴大", "B2期：心臟擴大但無症狀", "C/D期：有/難治性心衰竭症狀"]
        }
      ]
    }
  },
  "chronic-enteropathy": {
    "diagnosticAlgorithm": {
      "title": "慢性腸病 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估慢性腸道症狀（>3週）",
          "findings": ["慢性嘔吐和/或腹瀉", "體重減輕", "食慾變化", "腸鳴音增加"]
        },
        {
          "step": 2,
          "action": "基本排除",
          "details": "排除常見非炎症性腸病原因",
          "findings": ["糞便寄生蟲檢查", "基本血液學和生化", "胰臟外分泌功能（TLI）", "排除甲狀腺功能亢進（貓）"]
        },
        {
          "step": 3,
          "action": "飲食試驗",
          "details": "進行排除性飲食試驗（最少2-4週）",
          "findings": ["水解蛋白或新蛋白飲食反應", "食物反應性腸病（最常見類型）", "抗生素反應性腸病評估", "部分反應提示多因子"]
        },
        {
          "step": 4,
          "action": "內視鏡與活檢",
          "details": "飲食和抗生素無反應者進行腸道活檢",
          "findings": ["腸黏膜活檢見炎症浸潤", "淋巴球-漿細胞性最常見", "嗜酸性球性腸炎", "排除腸道淋巴瘤"]
        },
        {
          "step": 5,
          "action": "分類與治療",
          "details": "根據反應分類慢性腸病亞型",
          "findings": ["食物反應性腸病（FRE）", "抗生素反應性腸病（ARE）", "免疫抑制劑反應性腸病（IRE/IBD）", "蛋白流失性腸病（PLE）"]
        }
      ]
    }
  },
  "bilious-vomiting-syndrome": {
    "diagnosticAlgorithm": {
      "title": "膽汁性嘔吐症候群 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估特徵性嘔吐模式",
          "findings": ["清晨空腹時嘔吐膽汁", "嘔吐物為黃色至綠色液體", "進食後通常正常", "全身狀態良好"]
        },
        {
          "step": 2,
          "action": "排除性檢查",
          "details": "排除其他嘔吐原因",
          "findings": ["血液學和生化通常正常", "排除胰臟炎", "排除肝膽疾病", "腹部超音波排除結構異常"]
        },
        {
          "step": 3,
          "action": "治療性確診",
          "details": "透過飲食管理的反應確認診斷",
          "findings": ["睡前加餐後嘔吐改善", "增加餵食頻率有效", "制酸劑可能有輔助效果", "排除性診斷"]
        }
      ]
    }
  },
  "colorectal-neoplasia": {
    "diagnosticAlgorithm": {
      "title": "結直腸腫瘤 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估大腸症狀和直腸腫塊",
          "findings": ["便血和裡急後重", "排便困難", "黏液便", "直腸觸診可能觸及腫塊"]
        },
        {
          "step": 2,
          "action": "直腸檢查與影像學",
          "details": "進行直腸觸診和腹部超音波",
          "findings": ["直腸觸診腫塊位置和大小", "腹部超音波評估結腸壁增厚", "區域淋巴結評估", "排除腹腔轉移"]
        },
        {
          "step": 3,
          "action": "結腸鏡與活檢",
          "details": "進行結腸鏡檢查和活檢確認腫瘤類型",
          "findings": ["息肉狀或潰瘍性腫塊", "犬：腺癌或腺瘤性息肉最常見", "貓：淋巴瘤最常見", "活檢確認組織學類型"]
        },
        {
          "step": 4,
          "action": "分期",
          "details": "進行全身分期評估",
          "findings": ["胸部X光排除肺轉移", "腹部影像評估淋巴結", "CT分期（進階）", "評估手術切除可行性"]
        }
      ]
    }
  },
  "intestinal-lymphangiectasia": {
    "diagnosticAlgorithm": {
      "title": "腸淋巴管擴張症 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估蛋白流失性腸病的臨床徵象",
          "findings": ["慢性腹瀉", "體重減輕", "腹水和外周水腫", "Yorkshire Terrier等品種好發"]
        },
        {
          "step": 2,
          "action": "實驗室檢查",
          "details": "進行血液學和生化評估蛋白流失",
          "findings": ["低白蛋白血症", "低球蛋白血症", "低膽固醇血症", "淋巴球減少（淋巴液流失）"]
        },
        {
          "step": 3,
          "action": "影像學檢查",
          "details": "進行腹部超音波評估腸道和淋巴系統",
          "findings": ["腸黏膜高回音性條紋", "腸壁增厚", "腹水", "腸系膜淋巴結腫大"]
        },
        {
          "step": 4,
          "action": "內視鏡活檢確診",
          "details": "進行腸道活檢確認淋巴管擴張",
          "findings": ["絨毛腫脹和乳白色外觀", "組織學見擴張的淋巴管", "乳糜池擴張", "可能合併炎症性浸潤"]
        }
      ]
    }
  },
  "clostridial-enteritis": {
    "diagnosticAlgorithm": {
      "title": "梭菌性腸炎 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估急性腹瀉症狀和風險因子",
          "findings": ["急性水樣或血性腹瀉", "腹痛和脹氣", "近期飲食變化或抗生素使用", "犬舍或住院環境"]
        },
        {
          "step": 2,
          "action": "糞便檢測",
          "details": "進行糞便毒素和培養檢測",
          "findings": ["C. perfringens腸毒素ELISA檢測", "C. difficile毒素A/B檢測", "糞便厭氧菌培養", "排除其他腸道病原"]
        },
        {
          "step": 3,
          "action": "支持性診斷",
          "details": "進行實驗室檢查評估全身狀態",
          "findings": ["白血球計數變化", "電解質和酸鹼評估", "低白蛋白血症（嚴重病例）", "脫水程度評估"]
        }
      ]
    }
  },
  "gastrointestinal-stromal-tumor": {
    "diagnosticAlgorithm": {
      "title": "胃腸道基質瘤 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估腸道腫塊相關症狀",
          "findings": ["慢性嘔吐或腹瀉", "腹部可觸及腫塊", "體重減輕", "偶見消化道出血"]
        },
        {
          "step": 2,
          "action": "影像學檢查",
          "details": "進行腹部超音波評估腫塊特徵",
          "findings": ["腸壁或胃壁腫塊", "腫塊向漿膜面突出為主", "腫塊內部可能壞死", "區域淋巴結評估"]
        },
        {
          "step": 3,
          "action": "細胞學與活檢",
          "details": "進行細針抽吸或手術活檢",
          "findings": ["梭形細胞腫瘤", "需與平滑肌瘤/肉瘤鑑別", "免疫組織化學c-Kit（CD117）陽性", "DOG1標記陽性"]
        },
        {
          "step": 4,
          "action": "分期與手術規劃",
          "details": "進行全身分期評估手術方案",
          "findings": ["肝臟和腹膜轉移評估", "胸部X光", "手術切除為首選治療", "有絲分裂指數評估預後"]
        }
      ]
    }
  },
  "cecal-inversion": {
    "diagnosticAlgorithm": {
      "title": "盲腸內翻 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估大腸性腹瀉和腹部不適",
          "findings": ["慢性或間歇性血便", "裡急後重", "嘔吐（部分病例）", "體重減輕"]
        },
        {
          "step": 2,
          "action": "影像學檢查",
          "details": "進行腹部超音波評估盲腸結腸區域",
          "findings": ["超音波見盲腸結腸交界處靶心徵", "腸套疊樣表現", "局部腸壁增厚", "腹部X光可能見局部軟組織密度增加"]
        },
        {
          "step": 3,
          "action": "結腸鏡或手術確診",
          "details": "進行結腸鏡或探查性剖腹術確認",
          "findings": ["結腸鏡見盲腸組織突入結腸腔", "手術確認盲腸內翻入結腸", "評估腸壁活力", "盲腸切除術為確定性治療"]
        }
      ]
    }
  },
  "renal-amyloidosis": {
    "diagnosticAlgorithm": {
      "title": "腎澱粉樣變性 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估蛋白尿和腎功能障礙症狀",
          "findings": ["蛋白尿", "外周水腫或腹水", "多飲多尿", "沙皮犬、阿比西尼亞貓為好發品種"]
        },
        {
          "step": 2,
          "action": "實驗室檢查",
          "details": "進行完整腎臟功能和蛋白定量評估",
          "findings": ["尿蛋白/肌酐比值（UPC）升高", "低白蛋白血症", "氮質血症", "高膽固醇血症"]
        },
        {
          "step": 3,
          "action": "影像學檢查",
          "details": "進行腎臟超音波評估",
          "findings": ["腎臟大小正常或縮小", "腎皮質回音性增加", "腎皮質結構改變", "排除其他腎臟疾病"]
        },
        {
          "step": 4,
          "action": "腎臟活檢確診",
          "details": "進行腎臟活檢和特殊染色確認澱粉樣物質",
          "findings": ["剛果紅染色陽性", "偏光顯微鏡下蘋果綠雙折射", "腎小球和/或腎髓質沉積", "與免疫複合體腎病鑑別"]
        }
      ]
    }
  },
  "ureteral-obstruction": {
    "diagnosticAlgorithm": {
      "title": "輸尿管阻塞 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估急性或慢性腎後性阻塞症狀",
          "findings": ["急性腹痛和嘔吐", "少尿或無尿（雙側阻塞）", "食慾不振和嗜睡", "貓的輸尿管結石為最常見原因"]
        },
        {
          "step": 2,
          "action": "實驗室檢查",
          "details": "進行腎功能和電解質評估",
          "findings": ["氮質血症（可能急性惡化）", "高血鉀（雙側阻塞時危及生命）", "代謝性酸中毒", "尿液分析"]
        },
        {
          "step": 3,
          "action": "影像學確診",
          "details": "進行腹部超音波和X光確認阻塞",
          "findings": ["腎盂擴張（水腎）", "輸尿管擴張至阻塞點", "超音波可見輸尿管結石", "腹部X光見不透光結石"]
        },
        {
          "step": 4,
          "action": "手術評估",
          "details": "評估手術介入方式",
          "findings": ["輸尿管支架或SUB裝置", "輸尿管切開取石術", "腎盂到膀胱繞道術", "對側腎功能評估"]
        }
      ]
    }
  },
  "renal-infarction": {
    "diagnosticAlgorithm": {
      "title": "腎梗塞 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估急性腎臟疼痛和潛在栓塞來源",
          "findings": ["急性腹痛或腰痛", "血尿", "發熱", "心臟疾病（栓塞來源）"]
        },
        {
          "step": 2,
          "action": "實驗室檢查",
          "details": "進行腎功能和凝血評估",
          "findings": ["肌酐和BUN可能升高", "LDH升高", "白血球增多", "尿液分析見血尿和蛋白尿"]
        },
        {
          "step": 3,
          "action": "影像學確診",
          "details": "進行腎臟超音波和都卜勒評估",
          "findings": ["腎臟楔形低回音區域", "都卜勒顯示局部血流缺失", "造影CT見楔形灌注缺損", "腎臟大小可能不對稱"]
        },
        {
          "step": 4,
          "action": "栓塞來源調查",
          "details": "調查血栓栓塞的來源",
          "findings": ["心臟超音波排除心臟內血栓", "凝血功能全套評估", "抗凝血酶III測定", "腫瘤相關高凝狀態篩檢"]
        }
      ]
    }
  },
  "primary-immune-deficiency": {
    "diagnosticAlgorithm": {
      "title": "原發性免疫缺乏症 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "評估反覆感染病史和品種背景",
          "findings": ["反覆不同部位感染", "對常規治療反應不佳", "幼年動物發病", "品種易感性"]
        },
        {
          "step": 2,
          "action": "基礎免疫學檢查",
          "details": "進行免疫功能基礎評估",
          "findings": ["全血計數評估各系白血球", "血清免疫球蛋白定量（IgG、IgM、IgA）", "淋巴球亞群分析", "嗜中性球功能試驗"]
        },
        {
          "step": 3,
          "action": "進階免疫功能評估",
          "details": "進行特異性免疫功能檢測",
          "findings": ["淋巴球增生試驗", "補體活性測定", "嗜中性球殺菌功能", "流式細胞術淋巴球分型"]
        },
        {
          "step": 4,
          "action": "基因診斷",
          "details": "進行已知免疫缺陷基因檢測",
          "findings": ["X-linked SCID（Basset Hound）", "IgA缺乏（多品種）", "白血球黏附缺陷（LAD）", "特定品種基因突變篩檢"]
        }
      ]
    }
  },
  "heat-stroke-exertional": {
    "diagnosticAlgorithm": {
      "title": "運動型熱射病 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "緊急評估",
          "details": "立即評估體溫和臟器功能",
          "findings": ["體溫 >41°C（106°F）", "劇烈運動或高溫環境暴露史", "喘息和流涎過度", "共濟失調或虛脫"]
        },
        {
          "step": 2,
          "action": "器官損傷評估",
          "details": "評估多器官損傷程度",
          "findings": ["意識狀態改變", "嘔吐和腹瀉（可能血性）", "DIC表現（瘀斑、出血）", "少尿或無尿"]
        },
        {
          "step": 3,
          "action": "實驗室監測",
          "details": "進行連續實驗室監測",
          "findings": ["凝血功能異常（PT/aPTT延長）", "肝腎功能指標升高", "CK和乳酸升高", "血氣分析見代謝性酸中毒"]
        },
        {
          "step": 4,
          "action": "持續監測",
          "details": "入院後48-72小時持續監測",
          "findings": ["DIC篩檢每6-12小時", "腎功能連續追蹤", "肝功能延遲性升高（24-48h後）", "神經功能恢復評估"]
        }
      ]
    }
  },
  "transfusion-reaction": {
    "diagnosticAlgorithm": {
      "title": "輸血反應 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "急性監測",
          "details": "輸血過程中和輸血後密切監測",
          "findings": ["發熱（體溫上升 >1°C）", "蕁麻疹或面部水腫", "嘔吐和腹瀉", "心搏過速和低血壓"]
        },
        {
          "step": 2,
          "action": "反應分類",
          "details": "區分免疫性和非免疫性輸血反應",
          "findings": ["急性溶血：血紅素尿、黃疸、休克", "遲發性溶血：PCV下降、膽紅素升高", "發熱性非溶血反應：僅發熱", "過敏性反應：蕁麻疹、血管性水腫"]
        },
        {
          "step": 3,
          "action": "實驗室確認",
          "details": "進行輸血反應相關實驗室檢查",
          "findings": ["直接Coombs試驗", "血漿和尿液游離血紅素", "膽紅素變化", "重複交叉配血試驗"]
        }
      ]
    }
  },
  "drug-eruption": {
    "diagnosticAlgorithm": {
      "title": "藥物疹/藥物不良反應 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "初步評估",
          "details": "收集完整用藥史和皮膚病變特徵",
          "findings": ["用藥後1-3週內出現皮疹", "病變形態多樣（斑疹、丘疹、蕁麻疹等）", "對稱性分布", "可能伴有發熱和精神沉鬱"]
        },
        {
          "step": 2,
          "action": "藥物時間關係評估",
          "details": "建立藥物暴露和症狀發生的時間關係",
          "findings": ["確定可疑藥物和開始使用時間", "常見致敏藥：磺胺類、頭孢菌素、NSAID", "停藥後觀察改善", "再暴露可能導致更嚴重反應"]
        },
        {
          "step": 3,
          "action": "組織病理學檢查",
          "details": "進行皮膚活檢排除其他疾病",
          "findings": ["界面性皮膚炎", "角質細胞凋亡", "血管周圍炎症浸潤", "排除自體免疫性皮膚病"]
        }
      ]
    }
  },
  "anaphylaxis-vaccine": {
    "diagnosticAlgorithm": {
      "title": "疫苗過敏反應 診斷流程",
      "steps": [
        {
          "step": 1,
          "action": "緊急評估",
          "details": "疫苗注射後立即或數小時內評估過敏徵象",
          "findings": ["面部水腫和蕁麻疹（最常見）", "嘔吐和腹瀉", "呼吸困難", "血壓下降和休克（嚴重過敏性休克）"]
        },
        {
          "step": 2,
          "action": "嚴重度分級",
          "details": "評估過敏反應嚴重程度",
          "findings": ["輕度：局部腫脹、蕁麻疹", "中度：面部水腫、嘔吐", "重度：呼吸困難、心血管塌陷", "發作時間越短通常越嚴重"]
        },
        {
          "step": 3,
          "action": "穩定與監測",
          "details": "緊急治療並監測恢復",
          "findings": ["腎上腺素為首選急救藥物", "抗組織胺和糖皮質激素輔助", "IV輸液支持血壓", "觀察雙相反應（4-12小時後復發）"]
        },
        {
          "step": 4,
          "action": "記錄與預防",
          "details": "記錄反應並制定未來疫苗接種計劃",
          "findings": ["記錄反應的疫苗品牌和成分", "未來接種前預處理方案", "評估減少抗原數量", "考慮抗體效價檢測替代接種"]
        }
      ]
    }
  }
};

// Merge
const merged = Object.assign({}, existing, remaining);
fs.writeFileSync('./batch-algo-5.json', JSON.stringify(merged, null, 2), 'utf8');
console.log('Total diseases after merge:', Object.keys(merged).length);

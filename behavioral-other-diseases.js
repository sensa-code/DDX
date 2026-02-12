// ======= 行為疾病和其他疾病 DISEASE_INFO =======
// 生成日期: 2026-02-04
// 包含: 分離焦慮、噪音恐懼症、強迫症、攻擊行為、食糞症、異食症、肢端舔皮炎、
//       過度吠叫、貓過敏綜合症、心因性脫毛、肥胖症、生長發育障礙、惡病質、脫水、低體溫症

const BEHAVIORAL_OTHER_DISEASE_INFO = {

  // ==================== 行為疾病 ====================

  "separation-anxiety": {
    zh: "分離焦慮",
    en: "Separation Anxiety",
    definition: "當動物與主人或依附對象分離時產生的過度焦慮反應，表現為破壞行為、過度吠叫、排泄異常等問題行為。",
    synonyms: ["Separation Anxiety Disorder", "分離焦慮症", "Attachment Disorder"],
    epidemiology: {
      species: "犬最常見，貓較少見但可發生",
      age: "任何年齡，收養犬和幼年時期創傷者更常見",
      sex: "無明顯性別傾向",
      riskFactors: ["收容所收養", "早期斷奶", "過度依附", "生活環境突變（搬家、家庭成員變化）", "缺乏社會化訓練", "長期獨處經驗不足", "先前創傷經歷"]
    },
    clinicalPresentation: {
      history: ["主人離開時或離開前出現焦慮行為", "破壞家具或門窗（試圖逃脫）", "不當排泄（僅在獨處時）", "過度吠叫或嚎叫", "過度流涎", "厭食（獨處時）", "主人返家時過度興奮"],
      physicalExam: ["可能因自我傷害導致皮膚損傷", "指甲磨損（抓門）", "牙齒磨損（咬籠子）", "體重減輕（嚴重厭食者）", "一般體檢通常無異常"]
    },
    pathophysiology: "過度依附導致主人離開時產生恐慌反應 → 下視丘-腦下垂體-腎上腺軸活化 → 皮質醇升高 → 焦慮行為表現。可能涉及血清素和多巴胺系統失調。幼年時期不安全依附模式的形成是重要病因。",
    diagnosis: {
      overview: "主要依據行為史和排除其他醫學問題。問題行為必須只在分離時或預期分離時發生",
      differentials: ["不完全的居家訓練", "領地標記", "無聊/運動不足", "噪音恐懼症", "其他焦慮症", "認知功能障礙（老年）", "醫學問題導致的排泄異常"],
      initialDB: ["詳細行為史評估", "影像/錄影紀錄獨處行為", "完整身體檢查", "基本血檢（排除甲狀腺問題）", "尿液分析（排除UTI）"],
      advanced: ["行為專家評估", "甲狀腺功能檢測", "神經學檢查（若懷疑認知問題）"]
    },
    treatment: {
      overview: "結合行為修正、環境管理和必要時藥物治療的綜合方案",
      acute: [
        "環境管理：安全空間設置、活動玩具、開著廣播/電視",
        "漸進式脫敏：練習短時間分離並逐漸延長",
        "反制約化訓練：分離與正向刺激（零食玩具）配對",
        "減少離開和返家時的互動強度",
        "考慮日托或寵物保姆（過渡期）"
      ],
      chronic: [
        "藥物治療：",
        "  - Fluoxetine (Reconcile): 犬 1-2 mg/kg PO q24h",
        "  - Clomipramine (Clomicalm): 犬 1-3 mg/kg PO q12h",
        "  - Trazodone: 2-5 mg/kg PO（情境使用）",
        "持續行為修正訓練",
        "建立固定且可預測的日程",
        "鼓勵獨立性（獨自遊戲、獨自休息）"
      ]
    },
    prognosis: "多數犬隻經適當治療可顯著改善。治療成功需要主人的配合和耐心。嚴重病例可能需要數月治療。藥物通常需持續6-12個月再逐漸減量。",
    pearls: [
      "離開時不要過度道別或返家時過度激動",
      "處罰會加重焦慮，絕對禁止",
      "藥物治療效果通常需4-6週才顯現",
      "影像記錄對診斷和監測進展非常有價值",
      "區分真正的分離焦慮和單純無聊破壞很重要"
    ],
    monitoring: ["行為日誌", "影像記錄進展", "藥物副作用（若使用）", "體重和食慾", "生活品質評估"],
    reference: "Overall KL: Manual of Clinical Behavioral Medicine for Dogs and Cats. Mosby, 2013"
  },

  "noise-phobia": {
    zh: "噪音恐懼症",
    en: "Noise Phobia",
    definition: "對特定聲音（如雷聲、煙火、槍聲）產生的持續性、過度且不合理的恐懼反應，導致逃避行為和生理應激反應。",
    synonyms: ["Noise Aversion", "Noise Anxiety", "Storm Phobia", "Thunder Phobia", "聲音恐懼症"],
    epidemiology: {
      species: "犬最常見，貓亦可發生",
      age: "可任何年齡發生，常隨年齡惡化",
      sex: "無明顯性別傾向，部分研究顯示已絕育母犬較多",
      riskFactors: ["牧羊犬品種（Border Collie、Australian Shepherd）", "Beagle、German Shepherd", "缺乏早期聲音社會化", "先前創傷經歷", "其他焦慮問題共病"]
    },
    clinicalPresentation: {
      history: ["聽到特定聲音時顫抖、躲藏", "試圖逃脫（抓門、跳窗）", "過度喘氣和流涎", "不當排泄", "破壞行為", "黏著主人", "拒絕進食", "提前對暴風雨預兆反應"],
      physicalExam: ["發作時心搏過速", "瞳孔放大", "過度喘氣", "肛門腺自發排空", "顫抖", "可能有自傷痕跡", "平時檢查通常正常"]
    },
    pathophysiology: "聲音刺激 → 杏仁核恐懼反應活化 → 交感神經系統亢奮 → 戰鬥或逃跑反應。持續暴露導致致敏化（越來越敏感）而非習慣化。暴風雨恐懼可能還涉及氣壓變化和靜電感知。",
    diagnosis: {
      overview: "根據病史和對特定聲音的可預測恐懼反應診斷",
      differentials: ["分離焦慮", "廣泛性焦慮", "認知功能障礙", "疼痛相關行為", "聽力問題"],
      initialDB: ["詳細行為史", "觸發因素識別", "嚴重程度評估", "排除醫學問題的體檢", "聽力評估（老年）"],
      advanced: ["行為專家評估", "焦慮評分量表", "甲狀腺功能（若懷疑）"]
    },
    treatment: {
      overview: "結合環境管理、脫敏訓練和藥物的多模式治療",
      acute: [
        "發作時的管理：",
        "  - 提供安全藏身處（窩、浴室、地下室）",
        "  - 白噪音或音樂遮蔽",
        "  - 壓力衣/雷衣(ThunderShirt)",
        "  - 保持鎮定，不過度安撫也不忽視",
        "急性藥物：",
        "  - Sileo (Dexmedetomidine oromucosal gel): 按體重給藥",
        "  - Trazodone: 5-10 mg/kg PO（事件前1-2小時）",
        "  - Alprazolam: 0.02-0.1 mg/kg PO（事件前30-60分鐘）"
      ],
      chronic: [
        "系統性脫敏和反制約化訓練（使用錄音）",
        "長期藥物（嚴重病例）：",
        "  - Fluoxetine: 1-2 mg/kg PO q24h",
        "  - Clomipramine: 1-3 mg/kg PO q12h",
        "信息素產品（Adaptil）",
        "營養補充（L-theanine、alpha-casozepine）"
      ]
    },
    prognosis: "不治療會持續惡化。早期介入預後較好。脫敏訓練需數月。約80%犬隻經適當治療可獲改善。",
    pearls: [
      "暴風雨恐懼往往比單純噪音恐懼更難治療",
      "不要強迫暴露於恐懼刺激",
      "Sileo是FDA核准的犬噪音恐懼專用藥物",
      "藥物治療通常需長期維持",
      "錄音脫敏的音量必須從非常低開始"
    ],
    monitoring: ["恐懼反應嚴重程度評估", "行為改變日誌", "藥物副作用", "生活品質"],
    reference: "Overall KL: Manual of Clinical Behavioral Medicine for Dogs and Cats. Mosby, 2013"
  },

  "compulsive-disorder": {
    zh: "強迫症",
    en: "Compulsive Disorder",
    definition: "重複性、儀式化的行為模式，超出正常範圍且干擾正常功能，動物難以自行停止。相當於人類的強迫症(OCD)。",
    synonyms: ["Canine Compulsive Disorder", "CCD", "Feline Compulsive Disorder", "Stereotypy", "刻板行為"],
    epidemiology: {
      species: "犬貓皆可發生，表現形式不同",
      age: "通常青年期開始（1-3歲）",
      sex: "無明顯性別傾向",
      riskFactors: ["品種傾向（犬：Doberman-追尾巴、Bull Terrier-旋轉、German Shepherd-追尾巴；貓：Siamese/Burmese-羊毛吸吮）", "環境應激", "社會隔離", "運動不足", "早期斷奶"]
    },
    clinicalPresentation: {
      history: ["重複性行為難以打斷", "追尾巴/咬尾巴", "旋轉/繞圈", "吸吮羊毛或布料（貓）", "舔空氣/咬空氣（fly-snapping）", "自我舔舐（肢端舔皮炎）", "凝視（光影追逐）", "固定路線走動"],
      physicalExam: ["自傷導致的皮膚病變", "尾巴損傷", "肢端皮膚增厚或潰瘍", "可能無明顯異常"]
    },
    pathophysiology: "可能涉及基底核和額葉皮質的神經迴路異常，血清素和多巴胺系統失調。最初可能作為應對機制出現，後來脫離原始刺激而持續。遺傳因素和環境因素共同作用。",
    diagnosis: {
      overview: "根據重複行為的特徵和排除醫學原因診斷",
      differentials: ["癲癇（部分發作）", "神經系統疾病", "皮膚疾病", "消化道疾病（fly-snapping）", "視力問題", "疼痛"],
      initialDB: ["詳細行為史和影像記錄", "完整神經學檢查", "皮膚檢查", "基本血檢", "影像記錄行為發作"],
      advanced: ["腦部MRI（排除結構性病變）", "腦電圖（排除癲癇）", "消化道內視鏡（fly-snapping）", "行為專家評估"]
    },
    treatment: {
      overview: "結合環境富化、行為修正和藥物治療",
      acute: [
        "環境管理：增加運動量、心智刺激",
        "移除觸發因素（若可識別）",
        "不要懲罰或強化強迫行為",
        "提供替代行為出口"
      ],
      chronic: [
        "藥物治療（通常必需）：",
        "  - Fluoxetine: 犬 1-2 mg/kg PO q24h；貓 0.5-1 mg/kg PO q24h",
        "  - Clomipramine: 犬 1-3 mg/kg PO q12h；貓 0.25-0.5 mg/kg PO q24h",
        "  - 可加用 Gabapentin 輔助",
        "行為修正：中斷重導向訓練",
        "環境富化：益智玩具、嗅聞遊戲、規律運動",
        "可預測的日常作息"
      ]
    },
    prognosis: "完全治癒罕見，但多數可良好控制。早期治療效果較好。藥物通常需終身使用。部分病例可減量維持。",
    pearls: [
      "行為開始時可能有明確觸發因素，後來變得自發",
      "Doberman的吸吮flank和Bull Terrier的旋轉有強烈遺傳成分",
      "藥物效果通常需6-8週才顯現",
      "單純增加運動量通常不足以控制",
      "需排除癲癇，尤其是fly-snapping行為"
    ],
    monitoring: ["行為頻率和強度記錄", "自傷程度", "藥物副作用", "生活品質評估"],
    reference: "Overall KL: Manual of Clinical Behavioral Medicine for Dogs and Cats. Mosby, 2013"
  },

  "aggression": {
    zh: "攻擊行為",
    en: "Aggression",
    definition: "對人或其他動物表現出威脅或傷害性行為，包括咆哮、露齒、撲咬等。為最常見的犬行為問題，也是最危險的。",
    synonyms: ["Aggressive Behavior", "Canine Aggression", "Feline Aggression"],
    epidemiology: {
      species: "犬貓皆常見，表現形式不同",
      age: "社會成熟期（1-3歲）常見發作",
      sex: "未絕育公犬較常見某些類型攻擊",
      riskFactors: ["缺乏社會化", "遺傳傾向", "過去創傷經歷", "醫學問題（疼痛、神經疾病）", "不當訓練（懲罰式）", "資源競爭環境"]
    },
    clinicalPresentation: {
      history: ["分類攻擊類型：", "- 恐懼相關攻擊（最常見）", "- 資源守護攻擊", "- 領地攻擊", "- 狩獵行為", "- 疼痛誘發攻擊", "- 遊戲攻擊", "- 重導向攻擊", "- 特發性攻擊（罕見）"],
      physicalExam: ["評估疼痛來源", "神經學檢查", "甲狀腺觸診", "完整身體檢查", "觀察與主人互動"]
    },
    pathophysiology: "攻擊是正常行為的一部分，但病態攻擊涉及閾值降低、反應過度或情境不適當。可能涉及杏仁核過度活化、前額葉皮質抑制功能不足、血清素系統異常。甲狀腺功能低下可能與攻擊行為相關。",
    diagnosis: {
      overview: "詳細行為評估以分類攻擊類型並排除醫學原因",
      differentials: ["疼痛相關攻擊", "癲癇（發作後攻擊）", "腦腫瘤", "甲狀腺功能低下", "肝腦病", "狂犬病", "中毒"],
      initialDB: ["完整行為史（觸發因素、目標、預警信號、後果）", "醫學史回顧", "完整身體檢查", "基本血檢和甲狀腺功能", "神經學檢查"],
      advanced: ["行為專家評估", "腦部影像（若懷疑神經問題）", "特定情境觀察"]
    },
    treatment: {
      overview: "以安全為首要考量，結合行為修正和必要時藥物治療",
      acute: [
        "安全管理最優先：",
        "  - 避免觸發情境",
        "  - 適當使用口套（訓練後）",
        "  - 隔離管理（必要時）",
        "  - 兒童和高風險個體保護",
        "治療任何醫學問題"
      ],
      chronic: [
        "行為修正（需專業指導）：",
        "  - 脫敏和反制約化",
        "  - 避免懲罰式訓練",
        "  - 增強替代行為",
        "  - 「無免費午餐」計畫（資源守護）",
        "藥物治療（輔助）：",
        "  - Fluoxetine: 1-2 mg/kg PO q24h",
        "  - Trazodone: 情境使用",
        "  - 考慮絕育（未絕育公犬同種攻擊）"
      ]
    },
    prognosis: "因攻擊類型而異。恐懼相關攻擊經適當訓練預後較好。特發性攻擊預後差。有咬傷史者復發風險高。安樂死可能是某些嚴重病例的必要選項。",
    pearls: [
      "準確分類攻擊類型是成功治療的關鍵",
      "懲罰會加重恐懼相關攻擊",
      "「支配」理論已過時，應避免對抗性訓練",
      "任何突發攻擊行為變化應考慮醫學問題",
      "預後評估需考慮家庭情況和安全風險"
    ],
    monitoring: ["攻擊事件記錄", "觸發因素追蹤", "安全狀況評估", "治療進展評估"],
    reference: "Overall KL: Manual of Clinical Behavioral Medicine for Dogs and Cats. Mosby, 2013"
  },

  "coprophagia": {
    zh: "食糞症",
    en: "Coprophagia",
    definition: "攝食糞便的行為，可食用自己的、其他動物的、或其他物種的糞便。在某些情況下為正常行為，但也可能是行為或醫學問題的表現。",
    synonyms: ["Stool Eating", "Feces Eating", "食糞行為"],
    epidemiology: {
      species: "犬最常見（據估計16-23%的犬有此行為）",
      age: "任何年齡，幼犬更常見",
      sex: "無明顯性別傾向",
      riskFactors: ["多犬家庭", "貪食傾向（Labrador等）", "注意力尋求行為", "食物不足或營養不良史", "限制性環境（如籠養過久）", "與消化問題相關"]
    },
    clinicalPresentation: {
      history: ["吃自己的糞便（autocoprophagia）", "吃同種其他動物糞便（allocoprophagia）", "吃其他物種糞便（如貓砂盆內糞便、草食動物糞便）", "可能伴隨嘔吐或腹瀉", "口臭"],
      physicalExam: ["通常無異常發現", "評估身體狀況和營養狀態", "腹部觸診", "口腔檢查"]
    },
    pathophysiology: "行為性：可能是注意力尋求、無聊、焦慮、模仿行為或習得行為。母犬舔食幼犬糞便是正常母性行為。醫學性：營養吸收不良導致糞便含有未消化營養素，刺激攝食行為。胰外分泌功能不全(EPI)是常見醫學原因。",
    diagnosis: {
      overview: "需區分正常行為、行為問題和醫學問題",
      differentials: ["正常母性行為", "EPI（胰外分泌功能不全）", "腸道吸收不良", "腸道寄生蟲", "飢餓/營養不良", "認知功能障礙（老年）", "焦慮/壓力相關"],
      initialDB: ["詳細飲食史", "糞便檢查（寄生蟲）", "糞便消化評估", "基本血檢", "TLI（排除EPI）"],
      advanced: ["營養評估", "行為評估", "維生素B12/葉酸（若懷疑吸收不良）"]
    },
    treatment: {
      overview: "針對病因治療，結合環境管理和行為修正",
      acute: [
        "環境管理：",
        "  - 立即清理糞便",
        "  - 限制進入貓砂盆區域",
        "  - 遛狗時牽繩控制",
        "  - 不要懲罰（會強化注意力尋求）",
        "治療任何醫學問題（EPI、寄生蟲等）"
      ],
      chronic: [
        "飲食調整：",
        "  - 高品質、易消化飲食",
        "  - 確保足夠的餵食量",
        "  - 添加消化酶（若有吸收問題）",
        "厭惡劑（效果不一）：",
        "  - 糞便添加物（For-Bid, Deter等）",
        "  - 辣椒醬塗抹糞便（需主人先放置）",
        "行為訓練：",
        "  - 「離開」命令訓練",
        "  - 重導向到其他活動",
        "增加運動和心智刺激"
      ]
    },
    prognosis: "若為醫學原因導致，治療原發病後可改善。行為性食糞症管理難度較高，需持續環境控制。多數情況下可透過管理減少行為頻率。",
    pearls: [
      "偶爾食用草食動物糞便可能是正常犬行為",
      "懲罰往往適得其反，犬會學習在主人不在時吃糞便",
      "商業厭惡劑效果研究有限",
      "務必排除EPI，這是可治療的醫學原因",
      "幼犬食糞多為探索行為，常會自行停止"
    ],
    monitoring: ["行為頻率記錄", "糞便品質", "體重和身體狀況", "若有醫學治療需追蹤效果"],
    reference: "Hart BL et al: The paradox of canine conspecific coprophagy. Vet Med Sci 4:106-114, 2018"
  },

  "pica": {
    zh: "異食症",
    en: "Pica",
    definition: "持續性攝食非食物物質的行為，如石頭、布料、塑膠、紙張等。可能導致腸道阻塞或中毒等嚴重併發症。",
    synonyms: ["異物攝食", "異嗜癖", "Non-nutritive Ingestion"],
    epidemiology: {
      species: "犬貓皆可發生，貓常見羊毛/布料吸吮",
      age: "幼年動物較常見，可持續至成年",
      sex: "無明顯性別傾向",
      riskFactors: ["早期斷奶（貓）", "品種傾向（貓：Siamese、Burmese；犬：Labrador）", "環境應激", "無聊/缺乏刺激", "強迫行為傾向", "營養缺乏", "消化道疾病"]
    },
    clinicalPresentation: {
      history: ["攝食石頭、布料、塑膠、金屬等", "吸吮羊毛（貓常見）", "可能有嘔吐、腹瀉、厭食", "便秘或排便困難", "腹痛表現", "可能無症狀直到發生阻塞"],
      physicalExam: ["腹部觸診可能摸到異物", "腹痛", "脫水（若有嘔吐）", "可能因異物導致口腔損傷"]
    },
    pathophysiology: "多因子：行為性（強迫症、焦慮、無聊）、營養性（礦物質缺乏、吸收不良）、神經性（腦部疾病）。貓的羊毛吸吮可能與早期斷奶和遺傳有關。幼犬異食可能是正常探索行為但應逐漸消失。",
    diagnosis: {
      overview: "確認異食行為並排除醫學原因",
      differentials: ["正常幼年探索行為", "強迫症", "營養缺乏", "腸道疾病", "腦部疾病", "焦慮相關行為", "注意力尋求"],
      initialDB: ["詳細病史（攝食物品種類和頻率）", "完整身體檢查", "血液檢查（CBC、生化、微量元素）", "腹部X光（若懷疑異物）", "糞便檢查"],
      advanced: ["腹部超音波", "內視鏡（取出異物/評估）", "行為專家評估", "甲狀腺功能"]
    },
    treatment: {
      overview: "移除危險異物接觸、治療醫學原因、行為修正",
      acute: [
        "若有異物阻塞：內視鏡或手術取出",
        "環境管理：",
        "  - 移除所有可能被攝食的物品",
        "  - 監督活動時間",
        "  - 使用籠子（安全時間）",
        "  - 口套（戶外使用，訓練後）"
      ],
      chronic: [
        "環境富化：增加適當的咀嚼玩具",
        "增加運動和心智刺激",
        "行為修正：「離開」命令訓練",
        "飲食調整：",
        "  - 高纖維飲食可能有幫助",
        "  - 確保營養完整",
        "藥物治療（若為強迫行為）：",
        "  - Fluoxetine: 犬 1-2 mg/kg；貓 0.5-1 mg/kg PO q24h",
        "  - Clomipramine: 犬 1-3 mg/kg；貓 0.25-0.5 mg/kg PO q12-24h"
      ]
    },
    prognosis: "取決於病因。幼年探索行為通常會自然減少。強迫性異食預後較謹慎，需長期管理。異物阻塞是嚴重併發症。",
    pearls: [
      "區分正常幼年探索和病態異食很重要",
      "貓羊毛吸吮常與分離焦慮或強迫症共病",
      "環境管理比藥物更重要",
      "X光可能無法顯示所有異物（布料等）",
      "懲罰可能導致躲藏進食異物"
    ],
    monitoring: ["行為頻率記錄", "腸道健康（嘔吐、排便）", "藥物副作用（若使用）", "環境安全評估"],
    reference: "Overall KL: Manual of Clinical Behavioral Medicine for Dogs and Cats. Mosby, 2013"
  },

  "acral-lick-dermatitis": {
    zh: "肢端舔皮炎",
    en: "Acral Lick Dermatitis",
    definition: "因持續性舔舐而在肢體末端（通常是腕部或跗部）形成的肉芽腫性皮膚病變。常為多因子疾病，涉及心理和皮膚因素。",
    synonyms: ["Acral Lick Granuloma", "Lick Granuloma", "肢端舔肉芽腫", "ALD"],
    epidemiology: {
      species: "犬為主，貓罕見",
      age: "中年犬最常見（>5歲）",
      sex: "公犬可能較多",
      riskFactors: ["大型犬（Doberman、Great Dane、Labrador、Golden Retriever、German Shepherd、Irish Setter）", "無聊/環境刺激不足", "焦慮", "過敏", "關節疾病", "神經病變"]
    },
    clinicalPresentation: {
      history: ["持續舔舐特定部位", "病變逐漸擴大和增厚", "病程常數月至數年", "可能有搔癢或疼痛史", "單側較常見"],
      physicalExam: ["堅硬、隆起、無毛的肉芽腫性斑塊", "常見於腕部背側或跗部", "可能有繼發感染", "病變可能潰瘍", "周圍皮膚可能正常或有舔舐痕跡"]
    },
    pathophysiology: "初始觸發因素（搔癢、疼痛、焦慮）→ 舔舐 → 皮膚損傷 → 癒合過程中搔癢 → 更多舔舐 → 惡性循環。舔舐可能釋放內啡肽，產生自我增強效應。深層細菌感染很常見。可能涉及神經炎症機制。",
    diagnosis: {
      overview: "識別潛在觸發因素是成功治療的關鍵",
      differentials: ["過敏性皮膚炎", "黴菌感染", "寄生蟲", "關節疾病", "骨腫瘤", "神經病變", "異物", "腫瘤"],
      initialDB: ["詳細病史（發作時間、環境變化）", "全面皮膚檢查", "皮膚刮搔", "深層細菌培養", "皮膚細胞學", "病變部位X光（排除骨病變）"],
      advanced: ["皮膚活檢", "過敏原檢測", "神經學評估", "行為評估", "進階影像（關節）"]
    },
    treatment: {
      overview: "多模式治療：處理感染、減少舔舐、治療潛在病因",
      acute: [
        "防止繼續舔舐：",
        "  - 伊莉莎白項圈（E-collar）",
        "  - 繃帶或襪子覆蓋",
        "  - 苦味劑噴霧",
        "感染控制：",
        "  - 長期抗生素（6-8週或更長）",
        "  - 依據培養結果選擇（深層感染常見）",
        "局部治療：類固醇軟膏、Tacrolimus"
      ],
      chronic: [
        "行為/心理治療：",
        "  - 增加運動和環境富化",
        "  - Fluoxetine: 1-2 mg/kg PO q24h",
        "  - Clomipramine: 1-3 mg/kg PO q12h",
        "治療潛在病因：",
        "  - 過敏管理",
        "  - 關節炎疼痛控制",
        "  - 神經病變治療",
        "進階治療（難治病例）：",
        "  - 雷射消融",
        "  - 放射治療",
        "  - 手術切除（高復發率）",
        "  - 針灸"
      ]
    },
    prognosis: "治療困難，復發率高。早期病變預後較好。需要長期管理。徹底痊癒不常見，但可良好控制。",
    pearls: [
      "這是一個複雜的多因子疾病，不是「純行為問題」",
      "深層細菌感染幾乎都存在，需長期抗生素",
      "單純手術切除復發率極高",
      "藥物效果通常需6-8週顯現",
      "必須同時處理心理和皮膚兩方面"
    ],
    monitoring: ["病變大小和外觀記錄（照片）", "舔舐行為頻率", "感染控制效果", "藥物副作用"],
    reference: "Miller WH et al: Muller & Kirk's Small Animal Dermatology, 7th Ed. Elsevier, 2013"
  },

  "excessive-barking": {
    zh: "過度吠叫",
    en: "Excessive Barking",
    definition: "吠叫頻率、持續時間或情境超出正常範圍，影響動物福利或造成社會問題的行為。吠叫本身是正常犬行為，但過度時需要介入。",
    synonyms: ["Problem Barking", "Nuisance Barking", "過度叫"],
    epidemiology: {
      species: "犬",
      age: "任何年齡",
      sex: "無明顯性別傾向",
      riskFactors: ["品種傾向（小型犬、獵犬、牧羊犬）", "缺乏社會化", "焦慮問題", "環境刺激過多", "注意力強化", "無聊"]
    },
    clinicalPresentation: {
      history: ["需識別吠叫類型：", "- 警戒/領地吠叫", "- 焦慮/恐懼吠叫（分離焦慮）", "- 注意力尋求吠叫", "- 興奮吠叫", "- 社交/回應吠叫", "- 強迫性吠叫", "- 疼痛/不適吠叫", "- 認知功能障礙（老年）"],
      physicalExam: ["通常無異常", "評估聽力", "評估疼痛來源", "神經學檢查（老年犬）"]
    },
    pathophysiology: "吠叫是犬的正常溝通方式。過度吠叫可能因環境（觸發因素過多）、學習（被強化）、情緒（焦慮、恐懼）或醫學（疼痛、認知衰退、聽力損失）因素導致。",
    diagnosis: {
      overview: "確定吠叫類型和觸發因素，排除醫學問題",
      differentials: ["正常警戒行為", "分離焦慮", "噪音恐懼", "認知功能障礙", "疼痛", "聽力損失", "強迫行為", "犬腦炎"],
      initialDB: ["詳細行為史（何時、何地、針對誰、持續多久）", "影像/錄音記錄", "完整身體檢查", "聽力評估", "神經學檢查（老年）"],
      advanced: ["甲狀腺功能（若懷疑）", "行為專家評估", "腦部影像（若懷疑神經問題）"]
    },
    treatment: {
      overview: "根據吠叫類型針對性治療",
      acute: [
        "不要大聲喊叫制止（會強化吠叫）",
        "不要懲罰",
        "移除或減少觸發因素（若可能）",
        "治療任何醫學問題"
      ],
      chronic: [
        "警戒/領地吠叫：",
        "  - 脫敏訓練（對觸發刺激）",
        "  - 「安靜」命令訓練",
        "  - 限制視線到觸發區域",
        "分離焦慮吠叫：見分離焦慮治療",
        "注意力尋求吠叫：",
        "  - 完全忽視直到安靜",
        "  - 獎勵安靜行為",
        "一般管理：",
        "  - 增加運動量",
        "  - 環境富化",
        "  - 基礎服從訓練",
        "藥物（輔助，針對焦慮型）：",
        "  - 參見分離焦慮或噪音恐懼用藥"
      ]
    },
    prognosis: "取決於根本原因。注意力尋求型經正確訓練改善快。焦慮相關吠叫需要更長期治療。認知功能障礙相關可能難以改善。",
    pearls: [
      "止吠項圈（電擊或噴霧）可能導致更多行為問題",
      "聲帶切除術是不人道且無效的方法",
      "準確識別吠叫類型是成功治療的關鍵",
      "老年犬突發過度吠叫應考慮認知障礙",
      "一致性訓練比懲罰更有效"
    ],
    monitoring: ["吠叫頻率和情境記錄", "鄰居回饋", "生活品質評估", "訓練進展"],
    reference: "Overall KL: Manual of Clinical Behavioral Medicine for Dogs and Cats. Mosby, 2013"
  },

  "feline-hyperesthesia": {
    zh: "貓過敏綜合症",
    en: "Feline Hyperesthesia Syndrome",
    definition: "貓的神經行為異常，特徵為皮膚敏感過度、背部肌肉抽動、突發性焦躁和自殘行為。病因不明，可能涉及神經、皮膚和行為多重因素。",
    synonyms: ["Feline Hyperesthesia", "Rolling Skin Disease", "Twitchy Cat Syndrome", "Rippling Skin Disorder", "貓過敏症候群"],
    epidemiology: {
      species: "貓",
      age: "年輕成年至中年（1-5歲常見發病）",
      sex: "無明顯性別傾向",
      riskFactors: ["品種傾向（Siamese、Burmese、Abyssinian、Persian）", "焦慮傾向", "環境應激"]
    },
    clinicalPresentation: {
      history: ["發作性皮膚抽動（背部「波浪」）", "突然激動奔跑", "盯著尾巴或背部並攻擊", "尾巴追咬", "過度梳理或自殘", "瞳孔放大", "發聲（嚎叫）", "觸摸背部時誇張反應", "發作可持續數秒到數分鐘"],
      physicalExam: ["發作時：背部肌肉抽動、瞳孔放大、焦躁", "可能有自殘造成的皮膚病變", "發作間期可能完全正常", "皮膚檢查（排除過敏/感染）", "神經學檢查"]
    },
    pathophysiology: "病因不明。可能假說包括：部分癲癇發作、強迫症、皮膚敏感問題、脊髓/神經病變。可能是多重因素的最終共同表現。焦慮和應激是常見觸發因素。",
    diagnosis: {
      overview: "排除性診斷，需排除其他皮膚和神經疾病",
      differentials: ["跳蚤過敏性皮膚炎", "食物過敏", "皮膚感染（黴菌、細菌）", "脊髓疾病", "癲癇", "疼痛（脊椎/肌肉）", "強迫症", "心因性脫毛"],
      initialDB: ["詳細病史和影像記錄發作", "完整皮膚檢查（刮搔、梳檢）", "神經學檢查", "基本血檢", "嚴格跳蚤控制試驗"],
      advanced: ["脊椎X光/MRI", "腦電圖（若懷疑癲癇）", "皮膚活檢", "食物排除試驗", "行為專家評估"]
    },
    treatment: {
      overview: "多模式治療：減少觸發因素、行為修正、藥物控制",
      acute: [
        "發作時不要嘗試安撫或限制（可能被咬傷）",
        "提供安靜環境讓發作結束",
        "記錄發作（時間、持續、觸發因素）"
      ],
      chronic: [
        "環境管理：",
        "  - 減少應激源",
        "  - 建立可預測的日程",
        "  - 環境富化",
        "  - 費洛蒙產品（Feliway）",
        "藥物治療：",
        "  - Gabapentin: 5-10 mg/kg PO q8-12h（首選）",
        "  - Fluoxetine: 0.5-1 mg/kg PO q24h",
        "  - Clomipramine: 0.25-0.5 mg/kg PO q24h",
        "  - Phenobarbital: 若懷疑癲癇成分",
        "徹底跳蚤防治",
        "Omega-3脂肪酸補充"
      ]
    },
    prognosis: "病程波動，可能終身存在。多數貓可透過管理獲得良好生活品質。嚴重自殘病例預後謹慎。",
    pearls: [
      "這是排除性診斷，必須先排除其他原因",
      "影像記錄發作對診斷很有幫助",
      "許多貓同時有多重問題（如跳蚤過敏+焦慮）",
      "Gabapentin現被認為是良好首選藥物",
      "可能需要嘗試多種治療組合"
    ],
    monitoring: ["發作頻率和嚴重度記錄", "自殘程度", "藥物副作用", "生活品質"],
    reference: "Overall KL: Manual of Clinical Behavioral Medicine for Dogs and Cats. Mosby, 2013"
  },

  "psychogenic-alopecia": {
    zh: "心因性脫毛",
    en: "Psychogenic Alopecia",
    definition: "貓因過度梳理導致的脫毛，被認為與心理壓力或焦慮有關。然而，多數過度梳理病例實際上有皮膚疾病根本原因，真正的心因性脫毛較罕見。",
    synonyms: ["Feline Psychogenic Alopecia", "Overgrooming", "過度梳理症", "Barbering"],
    epidemiology: {
      species: "貓",
      age: "任何年齡",
      sex: "無明顯性別傾向",
      riskFactors: ["品種傾向（Siamese、Burmese、Abyssinian、Himalayan）", "環境變化/應激", "多貓家庭衝突", "焦慮傾向"]
    },
    clinicalPresentation: {
      history: ["腹部、內側大腿、側腹脫毛", "可能有舔舐行為被觀察到或隱藏進行", "毛髮斷裂而非脫落", "無搔抓", "近期環境變化（搬家、新寵物、新家庭成員）"],
      physicalExam: ["對稱性或不對稱性脫毛", "毛髮斷裂（非連根脫落）", "皮膚外觀正常（無紅腫、鱗屑）", "脫毛區域毛髮容易被拔起", "可能有輕微皮膚炎"]
    },
    pathophysiology: "真正心因性：應激或焦慮導致過度梳理作為自我安撫或轉移行為。然而，研究顯示>90%過度梳理的貓有潛在皮膚問題（過敏最常見）。梳理本身可以釋放內啡肽。",
    diagnosis: {
      overview: "心因性脫毛是排除性診斷！必須先徹底排除所有皮膚疾病",
      differentials: ["跳蚤過敏性皮膚炎（最常見）", "食物過敏", "環境過敏（異位性皮膚炎）", "皮癬菌感染", "疥癬", "蠕形蟎感染", "膿皮症", "貓過敏綜合症"],
      initialDB: ["詳細病史", "嚴格跳蚤控制試驗（8-12週）", "皮膚刮搔", "真菌培養", "皮膚細胞學", "拔毛檢查（毛球端）"],
      advanced: ["食物排除試驗（8-12週）", "皮內過敏原測試或血清IgE", "皮膚活檢", "環境和行為評估"]
    },
    treatment: {
      overview: "首先治療任何潛在皮膚問題，同時進行環境管理",
      acute: [
        "徹底跳蚤控制（所有貓+環境）",
        "食物排除試驗（水解蛋白或新蛋白質飲食）",
        "治療任何發現的皮膚問題"
      ],
      chronic: [
        "若確定為心因性：",
        "環境修正：",
        "  - 識別並減少應激源",
        "  - 提供更多垂直空間和藏身處",
        "  - 資源充足（貓砂盆、食碗、水碗）",
        "  - 使用費洛蒙（Feliway）",
        "  - 建立可預測的日常作息",
        "藥物治療：",
        "  - Fluoxetine: 0.5-1 mg/kg PO q24h",
        "  - Clomipramine: 0.25-0.5 mg/kg PO q24h",
        "  - Amitriptyline: 0.5-1 mg/kg PO q12-24h",
        "環境富化：互動玩具、抓板、高處棲息"
      ]
    },
    prognosis: "若為真正心因性並能改善環境，預後良好。若潛在皮膚病未被識別，治療將失敗。藥物通常需數週才見效。",
    pearls: [
      "不要輕易診斷「心因性」- 超過90%有皮膚問題",
      "跳蚤過敏是最常見原因，即使未發現跳蚤",
      "毛球端如果是尖的而非斷裂的，不是梳理導致",
      "貓可能只在主人不在時梳理",
      "真正的心因性脫毛相對罕見"
    ],
    monitoring: ["毛髮生長照片記錄", "梳理行為觀察", "藥物副作用", "環境改變反應"],
    reference: "Miller WH et al: Muller & Kirk's Small Animal Dermatology, 7th Ed. Elsevier, 2013"
  },

  // ==================== 其他疾病 ====================

  "obesity": {
    zh: "肥胖症",
    en: "Obesity",
    definition: "體重超過理想體重20%以上或體態評分(BCS)達到過重/肥胖標準。肥胖是小動物最常見的營養問題，與多種健康問題相關。",
    synonyms: ["Overweight", "過重", "體重過重"],
    epidemiology: {
      species: "犬貓皆常見，患病率約25-40%",
      age: "中年動物最常見，風險隨年齡增加",
      sex: "已絕育動物風險較高",
      riskFactors: ["絕育", "年齡增長", "過度餵食", "缺乏運動", "品種傾向（犬：Labrador、Beagle、Cocker Spaniel、Cavalier King Charles）", "自由採食", "高熱量零食"]
    },
    clinicalPresentation: {
      history: ["體重逐漸增加", "運動不耐", "呼吸困難", "行動遲緩", "主人可能不認為是問題"],
      physicalExam: ["體態評分(BCS) 7-9/9 或 4-5/5", "肋骨難以觸及", "無法識別腰線", "腹部下垂", "頸部和四肢脂肪堆積"]
    },
    pathophysiology: "能量攝入 > 能量消耗 → 脂肪組織堆積。脂肪組織是活躍的內分泌器官，產生促炎細胞因子（adipokines）→ 慢性低度發炎 → 胰島素阻抗、關節壓力增加、呼吸功能下降、免疫功能異常。",
    diagnosis: {
      overview: "根據體重和體態評分診斷，評估相關併發症",
      differentials: ["腹水", "器官腫大", "腫瘤", "甲狀腺功能低下（犬）", "庫欣症（犬）", "肢端肥大症（貓）"],
      initialDB: ["精確體重測量", "體態評分(BCS)", "肌肉狀態評分(MCS)", "完整身體檢查", "基本血檢（血糖、肝指數、血脂）"],
      advanced: ["甲狀腺功能（若懷疑）", "空腹胰島素/胰島素阻抗評估", "DEXA掃描（體組成分析）", "關節X光（若有跛行）"]
    },
    treatment: {
      overview: "熱量限制結合增加活動量的長期體重管理計畫",
      acute: [
        "設定目標體重（理想體重或分階段目標）",
        "計算每日熱量需求並減少20-30%",
        "選擇減重處方飲食或減少現有飲食量",
        "消除或限制零食"
      ],
      chronic: [
        "飲食管理：",
        "  - 減重處方飲食（高蛋白、高纖維、低熱量）",
        "  - 精確測量每餐份量",
        "  - 分次餵食（每日2-4次）",
        "  - 避免自由採食",
        "  - 零食熱量<每日總熱量10%",
        "運動計畫：",
        "  - 漸進式增加活動量",
        "  - 犬：散步、游泳、玩耍",
        "  - 貓：互動玩具、雷射筆、爬架",
        "環境管理：",
        "  - 食物球/益智餵食器",
        "  - 分散食物增加活動",
        "目標：每週減重1-2%體重"
      ]
    },
    prognosis: "配合良好可成功減重，但維持是長期挑戰。減重可改善糖尿病、關節炎、壽命等相關問題。",
    pearls: [
      "肥胖使貓糖尿病風險增加4倍",
      "減重速度過快可導致貓肝脂肪沉積",
      "主人教育和配合是成功關鍵",
      "定期回診（2-4週）監測進展很重要",
      "減重後維持需終身飲食管理"
    ],
    monitoring: ["每2-4週體重測量", "BCS追蹤", "調整飲食計畫", "併發症監測"],
    reference: "German AJ: The growing problem of obesity in dogs and cats. J Nutr 136:1940S-1946S, 2006"
  },

  "failure-to-thrive": {
    zh: "生長發育障礙",
    en: "Failure to Thrive",
    definition: "幼年動物無法達到預期的生長速度和發育里程碑，表現為體重增加緩慢或停滯、發育遲緩。通常有潛在醫學或營養原因。",
    synonyms: ["Fading Puppy/Kitten Syndrome", "Neonatal Mortality", "生長遲緩", "發育不良"],
    epidemiology: {
      species: "犬貓幼仔",
      age: "新生兒至幼年期（<6月齡最常見）",
      sex: "無明顯性別傾向",
      riskFactors: ["早產", "低出生體重", "產道感染暴露", "母乳不足", "大窩（競爭餵食）", "先天性缺陷", "環境溫度不當"]
    },
    clinicalPresentation: {
      history: ["體重增加緩慢或停滯", "吸乳無力", "活動力差", "與同窩比較明顯較小", "哭叫（飢餓或不適）", "腹瀉或便秘"],
      physicalExam: ["體重低於同齡正常值", "體態評分過低", "肌肉量不足", "脫水", "低體溫", "可能有先天缺陷（腭裂、心臟缺陷）"]
    },
    pathophysiology: "多因子：感染（病毒、細菌、寄生蟲）、營養不足（母乳不足、吸乳問題）、先天缺陷（心臟、消化道、代謝）、環境因素（溫度、衛生）、同種異體溶血（新生兒溶血）。新生兒的免疫力和體溫調節能力有限。",
    diagnosis: {
      overview: "全面評估以識別潛在原因",
      differentials: ["感染（敗血症、病毒如犬瘟熱/貓瘟）", "寄生蟲", "先天性心臟病", "肝門脈分流", "腎發育不全", "消化道畸形", "代謝疾病", "新生兒同種異體溶血", "母乳不足"],
      initialDB: ["精確體重和生長曲線", "完整身體檢查（包括先天缺陷篩檢）", "糞便檢查（寄生蟲）", "血糖測量", "PCV/TS"],
      advanced: ["CBC和生化檢查", "傳染病篩檢（CPV、FPV、FeLV/FIV）", "尿液分析", "腹部/心臟超音波", "影像學檢查（心臟、骨骼）"]
    },
    treatment: {
      overview: "支持治療同時診斷和處理潛在原因",
      acute: [
        "支持治療：",
        "  - 保溫（維持環境溫度：第一週29-32°C，之後漸減）",
        "  - 輸液（皮下或靜脈，注意劑量）",
        "  - 低血糖處理（口服糖水或靜脈葡萄糖）",
        "  - 營養支持（管灌餵食或奶瓶餵食）",
        "感染控制：",
        "  - 廣效抗生素（若懷疑敗血症）",
        "  - 驅蟲"
      ],
      chronic: [
        "針對病因治療（手術矯正缺陷等）",
        "營養補充：",
        "  - 補充餵食或人工餵養",
        "  - 適當配方奶（犬貓專用）",
        "  - 逐漸過渡到固體食物",
        "環境優化：",
        "  - 適當溫濕度控制",
        "  - 減少應激",
        "  - 確保足夠餵食機會"
      ]
    },
    prognosis: "取決於根本原因。營養性問題經糾正預後良好。先天性缺陷依嚴重程度而異。嚴重敗血症或重大畸形預後差。",
    pearls: [
      "體重是最重要的監測指標，應每日測量",
      "新生兒正常應每日增重5-10%",
      "低體溫比低血糖更緊急處理",
      "先餵奶再刺激排尿排便（模仿母獸）",
      "單獨隔離弱仔可能進一步惡化"
    ],
    monitoring: ["每日體重", "體溫", "進食量", "尿液和糞便", "活動力和行為"],
    reference: "Peterson ME, Kutzler MA: Small Animal Pediatrics. Elsevier, 2011"
  },

  "cachexia": {
    zh: "惡病質",
    en: "Cachexia",
    definition: "與慢性疾病相關的代謝異常狀態，表現為肌肉和脂肪組織的進行性消耗，即使有足夠營養攝入也無法完全逆轉。與單純飢餓不同。",
    synonyms: ["Cancer Cachexia", "Cardiac Cachexia", "消耗症", "惡液質"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "任何年齡，老年動物更常見（因潛在疾病多）",
      sex: "無明顯性別傾向",
      riskFactors: ["惡性腫瘤（最常見原因）", "慢性心衰竭", "慢性腎病", "慢性感染", "嚴重發炎性疾病"]
    },
    clinicalPresentation: {
      history: ["漸進性體重減輕", "肌肉消瘦", "食慾可能正常或下降", "虛弱", "活動力下降", "已知潛在疾病史"],
      physicalExam: ["肌肉萎縮（明顯於顳肌、腰背肌、四肢）", "脂肪減少", "骨骼突出", "可能有腹水（蛋白減少）", "潛在疾病的相關發現"]
    },
    pathophysiology: "與飢餓不同，惡病質主要消耗肌肉而非脂肪。慢性疾病 → 促炎細胞因子（TNF-α、IL-1、IL-6）升高 → 代謝改變（蛋白質分解增加、合成減少）→ 肌肉萎縮 + 脂肪分解。腫瘤還會產生特定惡病質因子。靜息能量消耗通常增加。",
    diagnosis: {
      overview: "診斷惡病質本身並識別潛在疾病",
      differentials: ["單純飢餓/營養不良", "吸收不良", "糖尿病", "甲狀腺功能亢進（貓）", "EPI", "慢性感染", "神經肌肉疾病"],
      initialDB: ["體重和體態評分(BCS)歷史比較", "肌肉狀態評分(MCS)", "CBC和生化全套", "總蛋白/白蛋白", "尿液分析"],
      advanced: ["影像學（胸腹X光、超音波）", "細胞學/組織病理", "腫瘤標記", "心臟評估", "內分泌檢測"]
    },
    treatment: {
      overview: "治療潛在疾病是根本，同時提供營養支持",
      acute: [
        "診斷並治療潛在疾病",
        "營養支持：",
        "  - 高蛋白、高脂肪飲食",
        "  - 適口性優先（讓動物願意吃）",
        "  - 考慮食慾刺激劑",
        "水分和電解質平衡"
      ],
      chronic: [
        "營養管理：",
        "  - 高品質蛋白質來源",
        "  - 增加omega-3脂肪酸（EPA/DHA）",
        "  - 少量多餐",
        "  - 必要時管灌餵食",
        "食慾刺激劑：",
        "  - Mirtazapine: 貓 1.88 mg PO或經皮q48h",
        "  - Capromorelin (Entyce/Elura): 依體重給藥",
        "潛在疾病治療",
        "支持性照護（疼痛管理、抗噁心等）"
      ]
    },
    prognosis: "取決於潛在疾病。惡病質本身是疾病嚴重程度和預後的指標。癌症惡病質預後通常不佳。早期營養介入可能改善生活品質。",
    pearls: [
      "惡病質vs飢餓：惡病質主要消耗肌肉，飢餓主要消耗脂肪",
      "即使食慾正常也可能發生惡病質",
      "肌肉狀態評分(MCS)比體態評分(BCS)更能反映惡病質",
      "Omega-3脂肪酸可能有助於減緩肌肉流失",
      "營養支持不能完全逆轉惡病質，但可改善生活品質"
    ],
    monitoring: ["體重（每1-2週）", "BCS和MCS", "食慾和進食量", "生活品質評估", "潛在疾病進展"],
    reference: "Freeman LM: Cachexia and sarcopenia: emerging syndromes of importance in dogs and cats. J Vet Intern Med 26:3-17, 2012"
  },

  "dehydration": {
    zh: "脫水",
    en: "Dehydration",
    definition: "體液減少導致的水分和電解質不足狀態。可由攝入不足、流失過多或兩者兼有引起。是許多疾病的常見併發症。",
    synonyms: ["Hypovolemia", "Fluid Deficit", "低血容量"],
    epidemiology: {
      species: "犬貓皆常見",
      age: "幼年和老年動物更易發生且更危險",
      sex: "無性別傾向",
      riskFactors: ["嘔吐/腹瀉", "腎臟疾病", "糖尿病", "發燒", "攝水不足", "環境過熱", "出血"]
    },
    clinicalPresentation: {
      history: ["嘔吐和/或腹瀉", "不喝水或無法喝水", "多尿", "發燒", "環境暴露（高溫）"],
      physicalExam: ["皮膚彈性下降（皮膚皺褶延遲回復）", "黏膜乾燥", "眼球凹陷", "微血管充盈時間(CRT)延長", "心搏過速", "脈搏弱", "嗜睡", "尿量減少"]
    },
    pathophysiology: "體液流失或攝入不足 → 細胞外液減少 → 血容量減少 → 組織灌流不足 → 器官功能障礙。脫水程度通常以體重百分比估計（<5%輕度，5-10%中度，>10%重度）。電解質失衡（低鈉、低鉀）和酸鹼異常常伴隨發生。",
    diagnosis: {
      overview: "臨床評估脫水程度並識別原因",
      differentials: ["急性腸胃炎", "腎衰竭", "糖尿病/DKA", "腎上腺皮質功能低下", "敗血症", "出血", "熱衰竭/中暑"],
      initialDB: ["體格檢查（評估脫水程度）", "PCV/TS（總蛋白升高提示血液濃縮）", "BUN（腎前性升高）", "尿比重", "電解質", "血氣分析（酸鹼狀態）"],
      advanced: ["完整生化", "腹部影像", "感染疾病檢測", "內分泌檢測"]
    },
    treatment: {
      overview: "補充液體、糾正電解質失衡、治療原發病",
      acute: [
        "評估脫水程度和計算輸液量：",
        "  - 補充量(mL) = 體重(kg) × 脫水%(小數) × 1000",
        "  - 加上維持量和持續流失量",
        "靜脈輸液（中重度）：",
        "  - 等張晶體液（LRS、0.9% NaCl、Plasmalyte）",
        "  - 休克劑量（必要時）：犬 60-90 mL/kg/h；貓 40-60 mL/kg/h",
        "  - 通常前4-6小時補充脫水量的50%",
        "皮下輸液（輕度，居家）",
        "電解質補充（尤其鉀）"
      ],
      chronic: [
        "治療原發病",
        "口服補液（輕度，可自行飲水）",
        "居家皮下輸液（慢性腎病等）",
        "確保充足飲水機會",
        "濕食促進水分攝取"
      ]
    },
    prognosis: "取決於脫水程度和原發病。單純脫水經適當補液預後良好。嚴重脫水伴休克需緊急處理。",
    pearls: [
      "皮膚彈性測試在老年和消瘦動物不可靠",
      "貓的皮膚彈性測試應在頸部進行",
      "過快補液可能導致肺水腫",
      "監測尿量是評估補液效果的好指標",
      "幼年和老年動物對脫水更敏感"
    ],
    monitoring: ["體重（每日）", "皮膚彈性", "CRT和黏膜濕潤度", "尿量", "PCV/TS", "電解質"],
    reference: "DiBartola SP: Fluid, Electrolyte, and Acid-Base Disorders in Small Animal Practice, 4th Ed. Elsevier, 2012"
  },

  "hypothermia": {
    zh: "低體溫症",
    en: "Hypothermia",
    definition: "核心體溫低於正常範圍（犬<37.5°C/99.5°F；貓<37.2°C/99°F）。可為輕度、中度或重度，嚴重時危及生命。",
    synonyms: ["Low Body Temperature", "體溫過低"],
    epidemiology: {
      species: "犬貓皆可發生",
      age: "新生兒和老年動物風險最高",
      sex: "無性別傾向",
      riskFactors: ["新生兒（體溫調節不全）", "老年動物", "小型犬種", "低體脂", "麻醉/手術", "外傷/休克", "疾病末期", "環境暴露", "濕冷環境"]
    },
    clinicalPresentation: {
      history: ["環境暴露（低溫、濕冷）", "長時間麻醉", "外傷", "重病/衰弱", "新生兒或老年"],
      physicalExam: ["輕度(32-37°C)：顫抖、心搏過速、外周血管收縮", "中度(28-32°C)：顫抖減少或停止、心搏過緩、嗜睡、肌肉僵硬", "重度(<28°C)：昏迷、心律不整、固定瞳孔、呼吸微弱"]
    },
    pathophysiology: "體溫下降 → 代謝率降低 → 心輸出量減少 → 組織氧合降低。復溫過程中可能發生「復溫休克」：外周血管擴張導致冷血回流中心 → 核心體溫進一步下降 + 心律不整風險增加。嚴重低體溫影響凝血功能、藥物代謝和心肌功能。",
    diagnosis: {
      overview: "直接測量核心體溫並評估嚴重程度",
      differentials: ["原發性低體溫（環境）", "繼發性低體溫：休克、敗血症、嚴重創傷、甲狀腺功能低下、腎上腺功能低下、低血糖、神經疾病、麻醉/藥物"],
      initialDB: ["直腸體溫測量", "心電圖（心律不整）", "血糖", "PCV/TS", "血壓", "血氣分析"],
      advanced: ["完整血液檢查", "凝血功能", "內分泌檢測（若懷疑）", "影像學（若有外傷）"]
    },
    treatment: {
      overview: "逐漸復溫同時支持心血管功能",
      acute: [
        "輕度低體溫：",
        "  - 被動外部復溫（毛毯、保暖墊）",
        "  - 避免熱源直接接觸皮膚（燙傷）",
        "中度低體溫：",
        "  - 主動外部復溫（熱水袋包裹、Bair hugger）",
        "  - 溫熱靜脈輸液（37-40°C）",
        "  - 監測心律",
        "重度低體溫：",
        "  - 核心復溫（溫熱靜脈輸液、溫熱灌洗）",
        "  - 緊急心肺監測",
        "  - 治療心律不整（可能需要CPR）",
        "  - 避免過快復溫",
        "目標復溫速度：0.5-1.5°C/小時"
      ],
      chronic: [
        "識別並治療原發病",
        "預防措施（尤其手術中）",
        "環境保護（老年、幼年動物）"
      ]
    },
    prognosis: "輕中度低體溫經適當復溫預後良好。重度低體溫死亡率高。「病人不死直到溫暖且死亡」- 低體溫本身有保護作用。",
    pearls: [
      "標準體溫計可能無法讀取極低溫度",
      "復溫過程中持續監測心律很重要",
      "Osborn波(J波)是低體溫的ECG特徵",
      "新生兒保溫優先於其他處理",
      "手術中預防性保溫很重要"
    ],
    monitoring: ["持續體溫監測", "ECG", "血壓", "血糖", "電解質", "尿量"],
    reference: "Brodeur A et al: Hypothermia and targeted temperature management in cats and dogs. J Vet Emerg Crit Care 27:151-163, 2017"
  }

};

// 疾病別名映射（用於搜尋）
const BEHAVIORAL_OTHER_DISEASE_ALIASES = {
  // 行為疾病
  "分離焦慮": "separation-anxiety",
  "分離焦慮症": "separation-anxiety",
  "separation anxiety": "separation-anxiety",

  "噪音恐懼": "noise-phobia",
  "噪音恐懼症": "noise-phobia",
  "雷聲恐懼": "noise-phobia",
  "暴風雨恐懼": "noise-phobia",
  "煙火恐懼": "noise-phobia",
  "storm phobia": "noise-phobia",
  "thunder phobia": "noise-phobia",

  "強迫症": "compulsive-disorder",
  "強迫行為": "compulsive-disorder",
  "刻板行為": "compulsive-disorder",
  "OCD": "compulsive-disorder",
  "CCD": "compulsive-disorder",
  "追尾巴": "compulsive-disorder",
  "tail chasing": "compulsive-disorder",

  "攻擊行為": "aggression",
  "攻擊": "aggression",
  "咬人": "aggression",
  "aggressive": "aggression",

  "食糞": "coprophagia",
  "食糞症": "coprophagia",
  "吃大便": "coprophagia",
  "coprophagy": "coprophagia",

  "異食": "pica",
  "異食症": "pica",
  "吃異物": "pica",
  "異嗜": "pica",

  "肢端舔皮炎": "acral-lick-dermatitis",
  "舔肉芽腫": "acral-lick-dermatitis",
  "ALD": "acral-lick-dermatitis",
  "lick granuloma": "acral-lick-dermatitis",

  "過度吠叫": "excessive-barking",
  "亂叫": "excessive-barking",
  "一直叫": "excessive-barking",
  "barking": "excessive-barking",

  "貓過敏綜合症": "feline-hyperesthesia",
  "貓過敏症候群": "feline-hyperesthesia",
  "皮膚抽動": "feline-hyperesthesia",
  "hyperesthesia": "feline-hyperesthesia",
  "rolling skin": "feline-hyperesthesia",
  "twitchy cat": "feline-hyperesthesia",

  "心因性脫毛": "psychogenic-alopecia",
  "過度梳理": "psychogenic-alopecia",
  "舔毛": "psychogenic-alopecia",
  "overgrooming": "psychogenic-alopecia",

  // 其他疾病
  "肥胖": "obesity",
  "肥胖症": "obesity",
  "過重": "obesity",
  "過胖": "obesity",
  "overweight": "obesity",

  "生長發育障礙": "failure-to-thrive",
  "生長遲緩": "failure-to-thrive",
  "發育不良": "failure-to-thrive",
  "長不大": "failure-to-thrive",
  "fading puppy": "failure-to-thrive",
  "fading kitten": "failure-to-thrive",

  "惡病質": "cachexia",
  "惡液質": "cachexia",
  "消耗症": "cachexia",
  "癌症惡病質": "cachexia",
  "cancer cachexia": "cachexia",

  "脫水": "dehydration",
  "缺水": "dehydration",
  "dehydrated": "dehydration",

  "低體溫": "hypothermia",
  "低體溫症": "hypothermia",
  "體溫過低": "hypothermia",
  "失溫": "hypothermia"
};

// 導出（若在模組環境中使用）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { BEHAVIORAL_OTHER_DISEASE_INFO, BEHAVIORAL_OTHER_DISEASE_ALIASES };
}

console.log("Behavioral and Other Disease Info loaded:", Object.keys(BEHAVIORAL_OTHER_DISEASE_INFO).length, "diseases");

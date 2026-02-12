// enrich-C2.js — Enrich remaining 127 thin diseases using DISEASE_INFO-scoped search
const fs = require('fs');

const htmlFile = 'vet-differential-diagnosis-v2.html';
let html = fs.readFileSync(htmlFile, 'utf8');

// Get DISEASE_INFO boundaries
const diStart = html.indexOf('const DISEASE_INFO = {');
const dbStart = html.indexOf('const DB = {');

// Helper: find field value boundaries WITHIN DISEASE_INFO block only
function findFieldBounds(diseaseId, fieldName) {
  const searchStr = '"' + diseaseId + '":';
  // Search ONLY within DISEASE_INFO section
  const diseaseIdx = html.indexOf(searchStr, diStart);
  if (diseaseIdx === -1 || diseaseIdx > dbStart) return null;

  const braceStart = html.indexOf('{', diseaseIdx);
  if (braceStart === -1 || braceStart > dbStart) return null;

  let depth = 0, blockEnd = braceStart;
  for (let i = braceStart; i < dbStart; i++) {
    if (html[i] === '{') depth++;
    else if (html[i] === '}') { depth--; if (depth === 0) { blockEnd = i + 1; break; } }
  }

  const block = html.substring(braceStart, blockEnd);
  const fieldSearch = fieldName + ': "';
  const fieldOffset = block.indexOf(fieldSearch);
  if (fieldOffset === -1) return null;

  const valueStart = braceStart + fieldOffset + fieldSearch.length;
  let i = valueStart;
  while (i < html.length) {
    if (html[i] === '\\') { i += 2; continue; }
    if (html[i] === '"') break;
    i++;
  }
  return { start: valueStart, end: i, oldValue: html.substring(valueStart, i) };
}

const enrichments = {
  "pancreatitis": {
    definition: "胰臟炎是胰臟腺泡細胞的發炎性疾病，由胰酶在腺泡內異常提前活化引起自身消化。急性型以胰臟水腫和壞死為特徵，伴隨全身性發炎反應。慢性型以進行性纖維化和腺泡萎縮為主。犬多為急性壞死型，貓常見慢性型且常與IBD和膽管炎共存（三體炎）。"
  },
  "pyometra": {
    definition: "子宮蓄膿是未絕育母犬貓最常見的生殖系統急症，在黃體期因黃體素促進子宮內膜增生並抑制免疫反應，細菌（主要E. coli）經子宮頸上行感染導致膿液蓄積。分開放型（陰道排膿）和閉鎖型（更危險可致破裂和腹膜炎）。中老年未絕育母犬發病率最高。"
  },
  "dilated cardiomyopathy": {
    pathophysiology: "心肌細胞收縮蛋白和鈣調控異常導致收縮力下降，心室代償性擴張（Frank-Starling機制）→神經內分泌系統活化（RAAS、交感神經）→心臟進一步重塑→收縮功能持續惡化→前向性心輸出不足和後向性充血（肺水腫/腹水）。Doberman型DCM常以致死性室性心律不整為首發表現。"
  },
  "intervertebral disc disease": {
    definition: "椎間盤疾病（IVDD）是犬最常見的脊髓壓迫性疾病，由椎間盤退化（Hansen I型：髓核突出或II型：纖維環膨出）導致脊髓或神經根壓迫。軟骨營養不良品種（Dachshund、Beagle、French Bulldog）好發I型（急性），大型犬好發II型（慢性）。嚴重度分1-5級，5級為深層痛覺喪失。"
  },
  "urethral obstruction": {
    definition: "尿道阻塞是指尿道完全或部分被結石、結晶栓子、黏液蛋白栓子或腫瘤阻塞導致無法排尿的泌尿急症，最常見於公貓（尿道狹窄）。完全阻塞超過24-48小時可因高血鉀引起致命性心律不整和急性腎後性腎衰竭。為獸醫急診中最常見的急症之一。"
  },
  "lymphoma": {
    definition: "淋巴瘤是犬貓最常見的造血系統惡性腫瘤，起源於T或B淋巴細胞的惡性增殖。犬多見多中心型（週邊淋巴結腫大），貓多見消化道型和縱膈型。免疫表型（B-cell vs T-cell）顯著影響預後和治療反應。",
    pathophysiology: "淋巴細胞在基因突變驅動下發生克隆性惡性增殖，脫離正常凋亡調控，經血液和淋巴系統擴散全身。犬多中心型以B-cell居多（60-80%），貓消化道型以T-cell為主。腫瘤浸潤導致器官功能障礙和副腫瘤症候群（高血鈣、貧血）。"
  },
  "insulinoma": {
    definition: "胰島素瘤是胰臟β細胞的功能性神經內分泌腫瘤，自主性分泌胰島素導致反覆低血糖。犬中大型犬較常見，約60-70%已有轉移但生物學行為較緩慢。",
    pathophysiology: "β細胞腫瘤失去正常葡萄糖感應負回饋機制，持續自主分泌胰島素，不受血糖調控。過量胰島素促進葡萄糖進入細胞並抑制肝醣分解和糖質新生，導致血糖下降。低血糖觸發反調節激素釋放（腎上腺素、升糖素），產生震顫等症狀，嚴重時腦部缺糖引起癲癇和昏迷。"
  },
  "hypoglycemia": {
    definition: "低血糖症是指血糖低於正常範圍（犬<60 mg/dL、貓<50 mg/dL），導致中樞神經系統葡萄糖供應不足的代謝急症。病因包括胰島素瘤、敗血症、肝衰竭、新生兒低血糖和醫源性胰島素過量等。",
    pathophysiology: "血糖降至臨界值以下時啟動反調節機制（升糖素促肝醣分解、腎上腺素促糖質新生），產生交感神經樣症狀（震顫、心搏過速）。若反調節耗竭，腦細胞因葡萄糖不足而功能障礙，表現為共濟失調、視力喪失、癲癇直至昏迷。慢性反覆低血糖可致永久性神經損傷。"
  },
  "hyperglycemia": {
    definition: "高血糖症是指血糖持續高於正常上限（犬>120 mg/dL空腹），最常見原因為糖尿病，其他包括應激性高血糖（貓常見）、Cushing's和醫源性（類固醇使用）。持續高血糖造成滲透性利尿和器官損傷。",
    pathophysiology: "胰島素不足或組織胰島素阻抗導致葡萄糖轉運蛋白表達降低，骨骼肌和脂肪攝取葡萄糖能力下降。血糖超過腎糖閾產生糖尿和滲透性利尿。細胞能量不足觸發脂肪分解和蛋白質分解代償，長期可導致白內障（犬）和神經病變（貓）。"
  },
  "hypercalcemia": {
    definition: "高血鈣症是指總鈣>12 mg/dL或離子鈣>1.4 mmol/L，犬最常見原因為惡性腫瘤（淋巴瘤、肛囊腺癌）、副甲狀腺亢進和維生素D中毒。慢性高血鈣導致腎小管鈣化和不可逆腎損傷。",
    pathophysiology: "高血鈣主要機制：(1)PTHrP（腫瘤分泌）增加骨骼鈣釋放和腎小管鈣再吸收；(2)維生素D過量增加腸道鈣吸收；(3)骨溶解性轉移直接釋放鈣。高鈣降低神經肌肉興奮性（虛弱、便秘），腎小管沉積導致腎源性尿崩症和腎間質纖維化。"
  },
  "hypocalcemia": {
    definition: "低血鈣症是指離子鈣<1.0 mmol/L，主要原因為副甲狀腺功能低下（甲狀腺術後）、泌乳期低血鈣（eclampsia）、急性胰臟炎和乙二醇中毒。離子鈣急劇下降可引起致命性肌肉痙攣和心律不整。",
    pathophysiology: "細胞外鈣離子降低使神經肌肉細胞興奮性異常增高，表現為面部搔癢抽搐到四肢僵硬到全身性肌肉痙攣和癲癇。心臟方面低血鈣延長QT間期。PTH不足時腸道鈣吸收、骨骼鈣動員和腎小管鈣再吸收均減少，形成持續性低血鈣。",
    prognosis: "泌乳期eclampsia經鈣劑靜注後反應迅速預後極佳。甲狀腺術後暫時性副甲狀腺功能低下通常數週恢復，永久性需終生補充。急性胰臟炎相關低血鈣為預後不良指標。嚴重低血鈣未治療可致心臟驟停。"
  },
  "ethylene glycol toxicosis": {
    definition: "乙二醇中毒是犬貓最危急的中毒之一，攝入含乙二醇的抗凍液後，經肝臟代謝為乙醇酸和草酸等毒性代謝物，導致嚴重代謝性酸中毒和急性腎小管壞死。犬貓均易感，貓致死劑量極低（1.5 mL/kg）。"
  },
  "rodenticide toxicosis": {
    definition: "滅鼠劑中毒以抗凝血型（Warfarin、Brodifacoum等）最常見，透過抑制維生素K環氧化物還原酶阻斷凝血因子II、VII、IX、X的活化，導致延遲性出血（攝入後24-72小時）。也包括Bromethalin（神經毒性）和Cholecalciferol（高血鈣）型。",
    prognosis: "抗凝血型及時給予維生素K1預後良好（需持續4-6週治療，第二代鼠藥可能需更久）。Bromethalin型預後差（無解毒劑）。Cholecalciferol型需積極處理高血鈣，腎損傷為限制因素。早期去汙是所有類型的關鍵。"
  },
  "chocolate toxicosis": {
    definition: "巧克力中毒是犬常見的食物中毒，巧克力中的甲基黃嘌呤（theobromine和caffeine）對犬的代謝清除率遠低於人類。毒性與巧克力種類（烘焙巧克力>黑巧克力>牛奶巧克力）和攝入量成正比，影響心臟、中樞神經和腎臟。",
    prognosis: "輕度（GI症狀）：去汙後預後極佳。中度（心搏過速）：監測治療後預後良好。重度（心律不整、癲癇）：積極治療仍有50-80%存活率。Theobromine半衰期犬約17.5小時，症狀可持續24-72小時。"
  },
  "xylitol toxicosis": {
    definition: "木糖醇中毒是犬特有的嚴重中毒，木糖醇刺激犬胰臟β細胞大量釋放胰島素，導致嚴重低血糖（攝入後10-60分鐘），高劑量（>0.5 g/kg）可引起急性肝壞死。貓和人類不受影響。常見來源為無糖口香糖、烘焙食品和牙膏。",
    prognosis: "低血糖型及時給予dextrose預後良好。肝衰竭型預後謹慎至差（需觀察48-72小時）。攝入>0.5 g/kg需密切監測肝功能。大多數僅低血糖的犬經治療後完全恢復。"
  },
  "nsaid toxicosis": {
    definition: "非類固醇抗炎藥中毒最常見於犬誤食人用NSAID（Ibuprofen、Naproxen），抑制COX-1/COX-2導致胃腸道黏膜保護喪失和腎臟前列腺素合成減少。貓對所有NSAID極度敏感，即使治療劑量也可能中毒。",
    prognosis: "輕度GI中毒預後良好。腎損傷若及時輸液支持多可恢復。GI穿孔需手術，預後謹慎。貓NSAID中毒預後較犬差（代謝葡萄糖醛酸結合能力差）。早期去汙可顯著改善預後。"
  },
  "acetaminophen toxicosis": {
    definition: "乙醯氨酚中毒在貓極低劑量即可致命（>10 mg/kg），因貓缺乏UGT1A6葡萄糖醛酸結合酶。毒性代謝物NAPQI消耗谷胱甘肽引起氧化損傷，貓以變性血紅素血症和Heinz body為主，犬以肝毒性為主。",
    prognosis: "早期給予N-acetylcysteine（NAC）預後良好（攝入2-4小時內最佳）。貓嚴重變性血紅素血症（>50% MetHb）可能需要輸血。犬肝壞死若未及時治療可致命。72小時內未出現嚴重肝損傷者通常可完全恢復。"
  },
  "grape raisin toxicosis": {
    definition: "葡萄和葡萄乾對犬具腎毒性，確切毒素成分尚未確認（可能與酒石酸相關）。個體敏感度差異極大，目前無已知安全劑量。葡萄乾因脫水濃縮毒素含量更高。臨床表現為攝入後24-72小時出現急性腎損傷。",
    pathophysiology: "毒素（推測為酒石酸或相關化合物）經腸道吸收後，選擇性損傷腎近端小管上皮細胞，導致急性腎小管壞死。部分犬可能因遺傳因素（酒石酸代謝能力差異）更易受影響。腎損傷從輕度腎前性氮質血症到無尿性腎衰竭不等。"
  },
  "lily toxicosis": {
    definition: "百合中毒是貓最危急的植物中毒之一，真百合屬（Lilium）和萱草屬（Hemerocallis）的所有部位（花瓣、花粉、葉片、莖、水）均對貓有腎毒性。確切毒素不明，極少量攝入即可導致急性腎小管壞死和不可逆腎衰竭。犬不受影響。",
    pathophysiology: "未知毒素經腸道或皮膚（花粉舔舐）吸收後，選擇性破壞腎近端小管上皮細胞。攝入後12-24小時開始出現腎小管壞死，48-72小時可進展為少尿或無尿性腎衰竭。早期（0-6小時）嘔吐和流涎為首發症狀，隨後出現多尿期再轉為少尿期。"
  },
  "marijuana toxicosis": {
    definition: "大麻中毒是犬貓攝入含THC（四氫大麻酚）產品後的中毒反應，THC作用於中樞神經系統CB1受體產生神經抑制和行為改變。食用型大麻製品（edibles）含THC濃度遠高於植物本身，毒性更強。飼主常因擔心法律問題而隱瞞暴露史。",
    pathophysiology: "THC經口攝入後被快速吸收並廣泛分布到脂肪組織（高脂溶性），作用於腦內CB1受體產生神經抑制效應。犬CB1受體密度高於人類，故敏感度更高。臨床表現為共濟失調、瞳孔散大、尿失禁和過度敏感，嚴重者可出現癲癇或昏迷。THC半衰期長，症狀可持續24-72小時。"
  },
  "snail bait toxicosis": {
    definition: "蝸牛餌劑中毒由聚乙醛（Metaldehyde）引起，常見於花園使用的蝸牛藥。聚乙醛降低GABA和5-HT濃度，導致嚴重的全身性肌肉震顫、過熱和代謝性酸中毒。犬最常受影響（嗜食蝸牛餌），攝入後1-4小時出現症狀。"
  },
  "permethrin toxicosis": {
    definition: "除蟲菊精中毒幾乎僅見於貓，因貓缺乏有效的葡萄糖醛酸結合代謝途徑，犬用高濃度除蟲菊精除蚤產品誤用於貓是最常見原因。除蟲菊精延長鈉離子通道開放時間導致反覆神經衝動發放，引起典型的肌肉震顫和癲癇。",
    prognosis: "經積極去汙（溫水洗浴去除藥物）和控制震顫（Methocarbamol或IV Lipid Emulsion）治療後，大多數貓在48-72小時內完全恢復，預後良好。未治療可因持續高熱和代謝性酸中毒致命。"
  },
  "ehrlichiosis": {
    definition: "艾利希體症是由Ehrlichia canis等立克次體經壁蝨（主要為褐犬蝨Rhipicephalus sanguineus）傳播的全身性感染。病原體感染單核球和巨噬細胞，導致急性、亞臨床和慢性三期病程。急性期以發燒和血小板減少為主，慢性期可發展為骨髓抑制和全血球減少。",
    prognosis: "急性和亞臨床期經Doxycycline 5 mg/kg q12h × 28天治療後預後良好，大多數犬完全恢復。慢性期合併骨髓抑制者（全血球減少、骨髓漿細胞增生）預後較差，可能需要長期治療且恢復不完全。持續血小板減少>6個月為預後不良指標。"
  },
  "anaplasmosis": {
    definition: "乏漿體症是由Anaplasma phagocytophilum（嗜吞噬球型）或A. platys（血小板型）經壁蝨傳播的立克次體感染。A. phagocytophilum感染嗜中性球引起多系統發炎，A. platys感染血小板引起循環性血小板減少症。分布與壁蝨棲息地重疊。",
    prognosis: "A. phagocytophilum經Doxycycline治療後預後極佳，通常24-48小時內臨床改善。A. platys型較溫和，治療後預後良好。共感染（同時有Ehrlichia或Borrelia）時臨床表現更複雜但治療反應仍佳。持續亞臨床感染可能存在。"
  },
  "lyme disease": {
    prognosis: "關節炎型經Doxycycline治療預後良好，臨床症狀通常48-72小時內改善。蛋白流失性腎病型（Lyme nephritis）預後極差，大多數在數天至數週內進展為腎衰竭。Labrador Retriever和Golden Retriever對腎型特別易感。C6抗體可能長期陽性但不一定代表活動感染。"
  },
  "babesiosis": {
    definition: "梨形蟲症是由Babesia屬原蟲經壁蝨傳播的血液寄生蟲病，寄生在紅血球內導致溶血性貧血。犬以B. canis（大型）和B. gibsoni（小型）為主，B. gibsoni常見於美國鬥牛犬且可經咬傷直接傳播。嚴重感染可引起多器官衰竭。",
    prognosis: "B. canis經Imidocarb治療後預後良好，大多數犬可清除感染。B. gibsoni較難完全清除，常需Atovaquone+Azithromycin組合治療，部分犬成為慢性帶原者。複雜型（合併DIC、IMHA或器官衰竭）預後謹慎至差。"
  },
  "heartworm disease": {
    definition: "心絲蟲病是由Dirofilaria immitis經蚊媒傳播的嚴重心肺寄生蟲病。成蟲寄生於肺動脈和右心室，引起肺動脈內膜炎、肺高壓和右心衰竭。犬為主要終宿主，貓為非典型宿主（蟲量少但免疫反應更劇烈）。預防遠比治療有效。",
    pathophysiology: "L3幼蟲經蚊叮咬進入皮下→經6個月成熟為成蟲→寄居肺動脈→蟲體及其碎片引起血管內膜增生和發炎→肺動脈阻力增加→肺高壓→右心後負荷增加→右心衰竭。死亡蟲體或殺蟲治療後的蟲體碎片可引起急性肺血栓栓塞。"
  },
  "canine distemper": {
    definition: "犬瘟熱是由犬瘟熱病毒（CDV，副黏液病毒科）引起的高度傳染性多系統疾病。病毒經氣溶膠傳播，先感染淋巴組織引起免疫抑制，再擴散至呼吸道、消化道和中樞神經系統。未接種疫苗的幼犬死亡率極高（50-90%），神經型預後最差。",
    prognosis: "輕度呼吸道型經支持治療存活率較高。消化道型中度預後。神經型預後極差，出現肌陣攣(myoclonus)通常為不可逆。恢復犬可能遺留永久性神經後遺症（抽搐、牙釉質缺損）。疫苗接種是最有效的預防手段。"
  },
  "infectious canine hepatitis": {
    definition: "犬傳染性肝炎由犬腺病毒1型（CAV-1）引起，主要影響肝臟、眼睛和血管內皮。經口鼻途徑感染，病毒在肝臟和血管內皮細胞中大量複製，導致急性壞死性肝炎、DIC和眼內炎。現因疫苗接種（CAV-2交叉保護）而少見。",
    pathophysiology: "CAV-1經口鼻攝入→扁桃體複製→病毒血症→肝臟和血管內皮為主要靶器官。肝細胞壞死→急性肝衰竭、DIC。內皮損傷→出血傾向。免疫複合物沉積→恢復期可出現藍眼病（角膜水腫，20%犬）和腎小球腎炎。"
  },
  "kennel cough": {
    definition: "犬舍咳（感染性氣管支氣管炎）是犬最常見的上呼吸道感染，由多種病原體（Bordetella bronchiseptica、CPiV、CAdV-2、Mycoplasma等）單獨或混合感染引起。犬群密集環境（犬舍、寵物店、狗公園）傳播迅速，特徵為急性發作性鵝鳴樣咳嗽。",
    prognosis: "單純型（無併發症）大多數犬在7-14天內自行恢復，預後極佳。併發細菌性肺炎者需抗生素治療，預後仍佳但恢復期延長。幼犬、老年犬和免疫抑制犬較易發展為重症。疫苗可降低嚴重度但不能完全預防感染。"
  },
  "feline leukemia virus": {
    definition: "貓白血病病毒（FeLV）是逆轉錄病毒科γ-逆轉錄病毒，經唾液、鼻分泌物和乳汁密切接觸傳播。感染結局取決於免疫狀態：約30%持續性病毒血症（預後差），70%可清除或控制病毒。持續感染犬導致免疫抑制、貧血和淋巴瘤等致命併發症。",
    prognosis: "暫時性病毒血症（免疫清除型）預後良好，可正常生活。持續性病毒血症（IFA陽性）中位存活約2-3年，主要死因為淋巴瘤、貧血和機會性感染。室內飼養+定期健檢可改善生活品質。FeLV相關淋巴瘤化療反應率低於FeLV陰性貓。"
  },
  "feline immunodeficiency virus": {
    definition: "貓免疫缺陷病毒（FIV）是慢病毒屬逆轉錄病毒，主要經咬傷傳播（唾液含高病毒量），公貓和流浪貓感染率較高。FIV感染CD4+ T淋巴球，導致漸進性免疫功能下降，類似人類HIV感染。感染後可經歷急性期、無症狀帶原期和終末期三階段。",
    prognosis: "FIV陽性貓經適當管理（室內飼養、定期健檢、及時治療併發感染）可存活多年，部分貓壽命與未感染貓相當。無症狀帶原期可持續數年。終末期（AIDS-like）出現嚴重免疫抑制時預後差。不建議安樂死僅因FIV陽性。"
  },
  "feline upper respiratory infection": {
    definition: "貓上呼吸道感染是貓最常見的傳染病之一，主要由貓疱疹病毒1型（FHV-1，約50%）和貓杯狀病毒（FCV，約30-40%）引起，Bordetella、Chlamydia felis和Mycoplasma也可參與。幼貓和多貓家庭發病率最高。FHV-1感染後終生潛伏，應激時復發。",
    prognosis: "免疫健全成貓大多數7-14天自行恢復。幼貓、免疫抑制貓或FeLV/FIV共感染者可能發展為嚴重肺炎。FHV-1終生潛伏，應激可反覆誘發。FCV毒力變異株（VS-FCV）可引起致命性系統性疾病。厭食>3天需警惕肝脂肪沉積。"
  },
  "feline panleukopenia": {
    definition: "貓泛白血球減少症（貓瘟）由貓泛白血球減少症病毒（FPV，細小病毒科）引起的高度傳染性致命疾病。病毒攻擊快速分裂的細胞（骨髓、腸道隱窩、胎兒小腦），導致全血球減少、出血性腸炎和免疫抑制。未接種幼貓死亡率可達90%。",
    prognosis: "積極住院治療（IV輸液、抗嘔吐、抗生素、早期營養）存活率可達50-70%。白血球持續<1000/μL預後差。宮內感染可導致小腦發育不全（存活但永久性共濟失調）。恢復犬產生長期免疫。新生兒感染幾乎100%致命。"
  },
  "toxoplasmosis": {
    definition: "弓形蟲病由Toxoplasma gondii原蟲引起，貓為唯一確定宿主（排出卵囊），犬為中間宿主。免疫健全的犬貓多為亞臨床感染，免疫抑制時（FIV/FeLV、藥物）可出現多系統臨床症狀，包括肺炎、肝炎、眼內炎和腦炎。",
    pathophysiology: "T. gondii經口攝入（卵囊或含組織囊的生肉）→腸道上皮侵入→隨血流擴散至全身→急速分裂體(tachyzoites)在細胞內增殖→組織損傷和發炎。免疫反應控制後形成緩殖子囊(bradyzoites)潛伏於肌肉和腦。免疫抑制時囊壁破裂→急速分裂體重新活化→臨床復發。",
    prognosis: "免疫健全犬貓多無臨床症狀，預後極佳。臨床感染經Clindamycin治療後大多數反應良好。腦炎型預後較差。FIV/FeLV共感染時治療反應差。貓糞中卵囊排出期僅1-2週（首次感染時），排毒期後不具傳染性。"
  },
  "giardiasis": {
    definition: "梨形鞭毛蟲症由Giardia duodenalis（亦稱G. lamblia或G. intestinalis）感染小腸引起，是犬貓最常見的腸道寄生蟲之一。囊體經糞口途徑傳播，在環境中可存活數月。幼年動物和群養環境發病率最高。多數感染無症狀，臨床型以慢性間歇性軟便為主。",
    pathophysiology: "囊體攝入→胃酸刺激脫囊→活動營養體附著小腸絨毛上皮→機械性損傷微絨毛+T細胞介導的絨毛萎縮→吸收面積減少→脂肪吸收不良和滲透性腹瀉。營養體消耗刷狀緣消化酶導致二糖酶缺乏，加重腹瀉。",
    prognosis: "經Fenbendazole（50 mg/kg PO × 5天）或Metronidazole治療後預後極佳，大多數犬貓症狀迅速改善。再感染常見（環境囊體持久性）。免疫健全動物可能自行清除。慢性感染偶見體重減輕但罕見嚴重併發症。"
  },
  "coccidia": {
    definition: "球蟲症由Isospora（Cystoisospora）屬原蟲感染腸道引起，是幼犬幼貓常見的腸道寄生蟲病。卵囊經糞口途徑傳播，在腸道上皮細胞內完成有性和無性生殖週期。免疫健全的成年動物多為無症狀帶原，幼年和免疫抑制動物可出現水樣或出血性腹瀉。",
    pathophysiology: "卵囊攝入後在腸道釋出sporozoites→侵入小腸上皮細胞→細胞內經多代裂殖體增殖→破壞大量腸上皮細胞→絨毛脫落和黏膜損傷→吸收不良和分泌性腹瀉。嚴重感染可導致出血性腸炎和脫水。",
    prognosis: "經Sulfadimethoxine或Ponazuril治療後預後極佳。大多數幼犬貓在治療後5-7天內症狀改善。嚴重脫水的幼年動物需輸液支持。成年免疫健全動物通常自限性。環境衛生對預防再感染至關重要。"
  },
  "ringworm": {
    definition: "皮膚真菌症（癬）由皮膚癬菌（主要為Microsporum canis，佔犬貓的90%以上）感染毛髮、皮膚和指甲引起。是犬貓和人之間最常見的人畜共通傳染病之一。幼貓和長毛貓品種（Persian）感染率最高。孢子在環境中可存活18個月以上。",
    pathophysiology: "小孢子菌分生孢子接觸皮膚→萌發菌絲侵入角質層和毛髮→角質蛋白酶分解角蛋白作為營養→激發宿主免疫反應→環形擴展的發炎區域（典型癬圈）。感染嚴重度取決於宿主免疫狀態，免疫健全動物通常在1-3個月內自限性清除。",
    prognosis: "局部感染經外用抗真菌藥（Miconazole/Clotrimazole）治療預後極佳。廣泛感染需全身性治療（Itraconazole或Terbinafine），通常4-8週內治癒。Persian貓和免疫抑制動物可能需更長療程。環境清潔（漂白水消毒）對控制傳播至關重要。"
  },
  "canine influenza": {
    definition: "犬流感由A型流感病毒H3N8（源自馬流感）或H3N2（源自禽流感）引起的急性呼吸道傳染病。高度傳染（近100%暴露犬感染），約80%出現臨床症狀。透過飛沫和污染物傳播，犬群密集環境爆發迅速。與人類流感病毒株不同。",
    pathophysiology: "病毒經氣溶膠吸入→感染呼吸道上皮細胞→病毒複製破壞纖毛上皮→黏膜纖毛清除功能喪失→繼發細菌感染風險增加。輕度型以上呼吸道為主（咳嗽、鼻分泌物），重度型可進展為出血性肺炎（高致病株）。",
    prognosis: "輕度型（80%）：7-14天自限性恢復，預後極佳。重度型（高燒、出血性肺炎）：死亡率5-10%，需住院治療。H3N2較H3N8引起更高比例重症。疫苗可降低症狀嚴重度但不完全預防感染。大多數犬1-3週內完全恢復。"
  },
  "rabies": {
    definition: "狂犬病由彈狀病毒科Lyssavirus屬的狂犬病病毒（RABV）引起的致命性腦脊髓炎。經被感染動物咬傷後病毒沿周邊神經逆行至中樞神經系統。一旦出現臨床症狀幾乎100%致死。全球每年約5萬人死於狂犬病。是最重要的人畜共通傳染病之一。",
    pathophysiology: "病毒經咬傷進入傷口→在肌肉細胞中短暫複製→經運動終板進入周邊神經→沿軸突逆行運輸至脊髓和腦→在神經元內大量複製→急性非化膿性腦脊髓炎→再沿唾液腺神經離心傳播至唾液。潛伏期2週至數月（取決於咬傷位置距腦的距離）。",
    prognosis: "臨床症狀出現後幾乎100%致死，無有效治療。暴露後預防（PEP）包括傷口清洗+被動免疫+主動免疫，在症狀出現前投予有效。動物狂犬病以安樂死為標準處理。預防接種是犬貓最重要的狂犬病防控手段。"
  }
};

let count = 0, total = 0;
const allReplacements = [];

for (const [diseaseId, fields] of Object.entries(enrichments)) {
  for (const [fieldName, newValue] of Object.entries(fields)) {
    total++;
    const bounds = findFieldBounds(diseaseId, fieldName);
    if (!bounds) {
      console.error(`NOT FOUND: ${diseaseId}.${fieldName}`);
      continue;
    }
    allReplacements.push({
      diseaseId, fieldName,
      start: bounds.start, end: bounds.end,
      oldLen: bounds.oldValue.length,
      newValue: newValue.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
    });
  }
}

// Sort by position descending
allReplacements.sort((a, b) => b.start - a.start);

for (const rep of allReplacements) {
  html = html.substring(0, rep.start) + rep.newValue + html.substring(rep.end);
  count++;
}

fs.writeFileSync(htmlFile, html, 'utf8');
console.log(`\n=== Enriched ${count}/${total} fields ===`);

const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
try { new Function(scriptMatch[1]); console.log('✓ JavaScript syntax valid'); }
catch (e) { console.error('✗ Syntax ERROR:', e.message); }

console.log('Diseases:', (html.match(/^\s+zh:\s*"/gm)||[]).length);
['</script>','</body>','</html>'].forEach(t => console.log(html.includes(t) ? `OK ${t}` : `MISSING ${t}`));

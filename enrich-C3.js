// enrich-C3.js — Enrich remaining diseases batch C-3 (GI, urinary, reproductive, cardiac, neuro)
const fs = require('fs');

const htmlFile = 'vet-differential-diagnosis-v2.html';
let html = fs.readFileSync(htmlFile, 'utf8');
const diStart = html.indexOf('const DISEASE_INFO = {');
const dbStart = html.indexOf('const DB = {');

function findFieldBounds(diseaseId, fieldName) {
  const searchStr = '"' + diseaseId + '":';
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
  while (i < html.length) { if (html[i] === '\\') { i += 2; continue; } if (html[i] === '"') break; i++; }
  return { start: valueStart, end: i, oldValue: html.substring(valueStart, i) };
}

const enrichments = {
  // === Toxicosis pathophysiology ===
  "chocolate toxicosis": {
    pathophysiology: "Theobromine和caffeine（甲基黃嘌呤類）是磷酸二酯酶抑制劑和腺苷受體拮抗劑。抑制PDE導致細胞內cAMP升高→心肌收縮力增強和心搏過速。拮抗腺苷受體→CNS興奮和利尿增加。犬代謝theobromine半衰期長（17.5小時），毒性累積效應明顯。高劑量可引起室性心律不整和癲癇。"
  },
  "xylitol toxicosis": {
    pathophysiology: "木糖醇在犬體內強效刺激胰臟β細胞釋放胰島素（人和貓無此反應），30分鐘內可引起嚴重低血糖。高劑量（>0.5 g/kg）另有直接肝毒性機制：引起急性肝細胞壞死，可能與ATP耗竭和氧化應激有關。肝損傷出現在攝入後12-48小時，比低血糖延遲。"
  },
  "nsaid toxicosis": {
    pathophysiology: "NSAID抑制環氧合酶（COX-1/COX-2）→前列腺素合成減少。胃腸道：PGE2保護性黏膜血流和黏液分泌喪失→黏膜損傷→潰瘍穿孔。腎臟：腎臟前列腺素維持腎血流（特別在低灌注時）→腎血管收縮→缺血性腎損傷。貓缺乏glucuronidation代謝途徑，NSAID半衰期顯著延長。"
  },
  "permethrin toxicosis": {
    pathophysiology: "除蟲菊精延長神經元鈉離子通道的開放時間，導致反覆自發性動作電位發放。貓缺乏有效的葡萄糖醛酸結合（UGT）代謝途徑，除蟲菊精在體內蓄積。Type II除蟲菊精（如Permethrin）引起持續性通道開放→肌肉震顫；嚴重者GABA抑制性神經傳導也受影響→癲癇發作。"
  },
  "anaplasmosis": {
    pathophysiology: "A. phagocytophilum經壁蝨唾液注入進入血流→選擇性侵入嗜中性球→在嗜中性球胞漿內形成特徵性morulae包涵體→抑制嗜中性球凋亡和殺菌功能→免疫功能受損。同時引起免疫介導性血小板減少和反應性多關節炎。A. platys直接感染血小板引起循環性血小板減少（3-14天週期性升降）。"
  },
  "babesiosis": {
    pathophysiology: "Babesia merozoites侵入紅血球→在紅血球內二分裂增殖→紅血球破裂釋出merozoites→感染更多紅血球。直接溶血加上免疫介導性紅血球破壞（表面抗原改變誘發自身抗體），導致嚴重溶血性貧血。大型種（B. canis）引起補體介導的血管內溶血，小型種（B. gibsoni）以血管外溶血為主。嚴重病例可引起DIC和多器官衰竭。"
  },
  "canine distemper": {
    pathophysiology: "CDV經氣溶膠吸入→先在扁桃體和支氣管淋巴結中複製→病毒血症第一波（感染淋巴組織造成免疫抑制）→若免疫反應不足→第二波擴散至上皮組織（呼吸道、消化道、皮膚）和中樞神經系統。CNS感染導致脫髓鞘性腦脊髓炎，急性灰質炎（神經元壞死）或慢性白質炎（免疫介導性脫髓鞘）。"
  },
  "kennel cough": {
    pathophysiology: "Bordetella bronchiseptica黏附於呼吸道纖毛上皮→分泌氣管細胞毒素破壞纖毛→黏膜纖毛清除機制喪失→繼發細菌易於定植。病毒共感染（CPiV、CAdV-2）損傷上皮細胞增加Bordetella黏附位點。發炎反應導致氣管和支氣管黏膜水腫和分泌物增加→刺激咳嗽受體→特徵性陣發性咳嗽。"
  },
  "feline leukemia virus": {
    pathophysiology: "FeLV（γ-逆轉錄病毒）經口鼻黏膜進入→感染口咽部淋巴組織→病毒血症→感染骨髓前驅細胞（關鍵步驟）。骨髓感染若未被免疫清除→持續性病毒血症→病毒DNA整合入宿主基因組。致病機制包括：免疫抑制（T細胞功能障礙）、腫瘤轉化（insertional mutagenesis導致淋巴瘤）和骨髓抑制（非再生性貧血）。"
  },
  "feline immunodeficiency virus": {
    pathophysiology: "FIV（慢病毒）主要經咬傷傳播→感染CD4+ T淋巴球（經CXCR4共受體）→急性期病毒血症→免疫反應部分控制→漫長的無症狀帶原期（CD4+細胞漸進性減少）→終末期CD4+嚴重耗竭→機會性感染。與HIV類似，病毒整合入宿主DNA無法被完全清除。CD4/CD8比值反轉為特徵性發現。"
  },
  "feline upper respiratory infection": {
    pathophysiology: "FHV-1經接觸或飛沫傳播→感染結膜和鼻腔上皮→細胞溶解性複製→上皮壞死和潰瘍形成→漿液性到膿性分泌物。FHV-1建立三叉神經節潛伏感染→應激時重新活化。FCV感染口腔上皮→口腔潰瘍（特徵性）；毒力變異株可引起系統性血管炎（VS-FCV），致死率高達60%。"
  },
  "feline panleukopenia": {
    pathophysiology: "FPV（細小病毒）經口攝入→先在口咽淋巴組織複製→病毒血症→選擇性感染快速分裂細胞。骨髓：造血前驅細胞破壞→泛白血球減少（嗜中性球+淋巴球同時下降）。腸道：隱窩上皮細胞破壞→絨毛萎縮塌陷→嚴重出血性腹瀉+細菌移位→敗血症。胎兒/新生兒：小腦外顆粒層感染→小腦發育不全。"
  },

  // === GI diseases ===
  "megaesophagus": {
    definition: "巨食道症是食道運動功能障礙導致食道擴張和食物滯留的疾病，可為先天性或後天性。後天性原因包括重症肌無力（最常見可逆原因）、Addison's disease、鉛中毒和特發性。吸入性肺炎是最主要的致命併發症。",
    pathophysiology: "食道正常蠕動依賴食道肌層（犬主要為橫紋肌）的協調收縮。神經肌肉傳導障礙（如MG的AChR抗體、迷走神經損傷）或肌肉本身疾病導致蠕動喪失→食道被動擴張→食物和液體滯留→反流→吸入性肺炎風險。先天性可能與食道神經叢發育異常有關。"
  },
  "foreign body gi": {
    definition: "消化道異物是犬貓常見的外科急症，指攝入的非食物物品滯留在胃或腸道內無法自然排出。犬常吞食玩具、襪子、骨頭等，貓常見線狀異物（毛線、縫線）。線狀異物特別危險，可導致腸道皺褶切割和多處穿孔。",
    pathophysiology: "胃異物：阻塞幽門出口→胃擴張和反覆嘔吐→脫水和電解質失衡。腸異物：完全阻塞→近端腸管擴張、遠端塌陷→腸壁血液循環受損→缺血壞死和穿孔→腹膜炎。線狀異物：錨定點（通常在舌下或幽門）固定→腸蠕動使腸管沿線摺疊→線切割腸壁→多處穿孔。",
    prognosis: "胃異物經內視鏡取出預後極佳（成功率>90%）。單純腸阻塞手術切除後預後良好（>85%存活）。線狀異物合併多處穿孔預後較差（65-80%存活）。腸壁壞死範圍和腹膜炎程度是主要預後因子。早期手術顯著改善預後。"
  },
  "intussusception": {
    definition: "腸套疊是一段腸管套入相鄰腸管內的急症，以空迴腸套入結腸（迴腸結腸型）最常見。幼犬最好發，常繼發於腸炎（寄生蟲、病毒）、腫瘤或手術後腸蠕動異常。不治療會導致套入段缺血壞死和腸穿孔。",
    pathophysiology: "異常腸蠕動（局部刺激引起的持續性蠕動波）→近端腸段被推入遠端腸腔→套入的腸系膜血管被壓迫→靜脈回流受阻（水腫）→動脈供血中斷→缺血壞死→腸管完全阻塞+出血性腸壁損傷。慢性者可形成局部黏連。",
    prognosis: "手術整復或切除後預後良好（>85%存活），但復發率約15-25%（若未同時進行腸固定術）。腸壁壞死需切除吻合，預後取決於壞死範圍。術後併發症包括吻合處滲漏和再次套疊。幼犬伴隨腸炎需同時治療原發病。"
  },
  "hemorrhagic gastroenteritis": {
    definition: "急性出血性胃腸炎（AHDS/HGE）是犬急性起病的嚴重出血性腹瀉症候群，特徵為果醬樣血便和急速血液濃縮。小型犬好發（Miniature Schnauzer、Toy Poodle、Cavalier King Charles Spaniel），確切病因不明，可能與Clostridium perfringens腸毒素或腸道菌群急性失調有關。",
    prognosis: "經積極IV輸液治療後大多數犬在24-48小時內顯著改善，整體預後良好（存活率>95%）。死亡原因多為DIC或延遲就診導致的腸壁壞死。約10-15%犬會復發。不需常規使用抗生素除非懷疑細菌移位。"
  },
  "exocrine pancreatic insufficiency": {
    definition: "外分泌胰臟功能不全（EPI）是胰臟腺泡萎縮或破壞導致消化酶分泌不足的疾病。犬最常見原因為胰腺腺泡萎縮（PAA，免疫介導性，German Shepherd好發），貓多為慢性胰臟炎後果。失去>90%腺泡功能後才出現臨床症狀。",
    prognosis: "經胰臟酵素替代治療（每餐添加酵素粉）後大多數犬貓體重恢復和臨床改善，長期預後良好。B12缺乏需額外注射補充。少數犬對酵素補充反應不佳，可能合併IBD或SIBO。需終生治療，花費為主要考量。"
  },
  "protein losing enteropathy": {
    definition: "蛋白流失性腸病（PLE）是一組導致蛋白質從腸道過度流失的疾病，包括淋巴管擴張症、IBD和腸道淋巴瘤。特徵為低白蛋白血症（<2.0 g/dL）伴腹水、胸水或週邊水腫。Yorkshire Terrier、Soft Coated Wheaten Terrier有品種傾向。"
  },
  "acute kidney injury": {
    definition: "急性腎損傷（AKI）是腎功能在數小時至數天內急性惡化，導致氮質血症、電解質失衡和尿量異常的臨床症候群。常見原因為腎毒素（NSAID、乙二醇、百合、氨基糖苷）、腎缺血（休克、麻醉低血壓）和感染（Leptospira、Pyelonephritis）。",
    pathophysiology: "腎小管上皮細胞損傷（毒素直接破壞或缺血再灌注損傷）→管腔內壞死碎片和蛋白管型→腎小管阻塞→GFR下降→BUN/Crea急性升高。少尿/無尿期：腎血管收縮+管球回饋→進一步降低GFR。高血鉀（排泄減少）和代謝性酸中毒（H+排泄減少+HCO3再吸收減少）為主要代謝併發症。"
  },
  "feline lower urinary tract disease": {
    definition: "貓下泌尿道疾病（FLUTD）是描述貓膀胱和尿道症狀群的總稱，包括頻尿、血尿、排尿困難和不當排尿。最常見原因為貓自發性膀胱炎（FIC，佔60-70%），其次為結石（15-20%）、尿道栓子、感染和腫瘤。年輕至中年室內貓好發。",
    pathophysiology: "FIC的發病機制涉及膀胱黏膜糖胺聚糖（GAG）保護層缺損→黏膜通透性增加→尿液刺激物接觸感覺神經→膀胱痛覺過敏。同時下丘腦-垂體-腎上腺軸和交感神經系統調節異常（類似人類間質性膀胱炎）。壓力和環境因素為重要促發因子。公貓尿道狹窄（特別是陰莖尿道）易被結晶栓子阻塞。",
    prognosis: "FIC型多為自限性（1-7天內緩解），但復發率高（約50%在12個月內）。多模式環境改善（MEMO）可降低復發。結石型取決於結石種類（Struvite可溶解，CaOx需手術）。尿道阻塞為急症，解除後存活率>90%但30-40%會復發。"
  },
  "urolithiasis": {
    definition: "尿石症是泌尿系統中形成結石（尿路結石）的疾病，犬貓最常見為磷酸鎂銨（Struvite）和草酸鈣（Calcium Oxalate）結石。Struvite犬多與UTI相關，貓多為無菌性。結石位置可在腎臟、輸尿管、膀胱或尿道。",
    pathophysiology: "尿液中礦物質過飽和→結晶核形成→逐漸沉積增大為結石。促進因素包括尿液濃縮（飲水不足）、尿液pH異常（鹼性促進Struvite、酸性促進CaOx）、UTI（尿素酶產菌分解尿素升高pH和NH4+促進Struvite）和遺傳因素（Dalmatian的尿酸結石）。",
    prognosis: "Struvite結石可通過溶石飲食溶解（犬4-6週，貓2-4週），預後極佳。CaOx結石需手術或碎石移除，復發率高（3年內約25-50%需長期飲食預防）。輸尿管結石（貓常見CaOx）可致急性腎後性腎衰竭，需緊急手術或SUB裝置。"
  },
  "glomerulonephritis": {
    definition: "腎絲球腎炎是腎絲球的免疫介導性發炎疾病，免疫複合物沉積於腎絲球基底膜導致蛋白尿和漸進性腎損傷。犬較貓常見，常繼發於慢性感染（Ehrlichia、Leishmania、心絲蟲）、腫瘤或自體免疫疾病。主要表現為蛋白尿和低白蛋白血症。",
    pathophysiology: "循環中的免疫複合物（抗原-抗體）沉積於腎絲球基底膜→活化補體系統和招募發炎細胞→基底膜損傷和通透性增加→蛋白質（主要白蛋白）從血漿濾入尿液→低白蛋白血症→水腫/腹水。慢性發炎導致腎絲球硬化和間質纖維化→GFR漸進下降→CKD。",
    prognosis: "取決於原發病因能否控制和腎功能損傷程度。可逆原因（如感染）治療後蛋白尿可改善。嚴重蛋白尿（UPC>3.5）和氮質血症為預後不良指標。免疫抑制治療（Mycophenolate）+ACE抑制劑（Enalapril/Telmisartan降低腎絲球壓力）+抗血栓治療為標準方案。"
  },

  // === Reproductive/Oncology ===
  "prostatic disease": {
    definition: "前列腺疾病泛指影響犬前列腺的各種病變，以良性前列腺增生（BPH）最常見（未絕育公犬>5歲幾乎都有），其他包括前列腺炎（急性/慢性）、前列腺膿瘍和前列腺癌。貓缺乏功能性前列腺，不發生前列腺疾病。",
    pathophysiology: "BPH：睪固酮和DHT（雙氫睪固酮）持續刺激→腺體增生和肥大→前列腺體積增大→壓迫直腸（排便困難）和尿道（排尿異常）。前列腺炎：細菌（E. coli最常見）經尿道逆行感染→急性化膿性發炎→可能發展為膿瘍。前列腺癌：上皮惡性轉化，去勢不能預防且發病率可能更高。",
    prognosis: "BPH：去勢後2-4週前列腺明顯縮小，預後極佳。前列腺炎：抗生素能穿透前列腺屏障（Enrofloxacin、TMP-SMX），急性型預後良好，慢性型需長期治療。前列腺癌：預後差，中位存活僅數月，手術切除困難且易轉移。"
  },
  "mammary tumor": {
    definition: "乳腺腫瘤是母犬第二常見（未絕育）和母貓第三常見的腫瘤。犬約50%為惡性（最常見為tubular carcinoma），貓>85%為惡性（多為adenocarcinoma）。早期卵巢摘除可大幅降低發病風險（犬第一次發情前絕育降低99.5%風險）。",
    pathophysiology: "長期動情素和黃體素暴露促進乳腺上皮增殖→基因突變累積→良性或惡性轉化。惡性腫瘤經淋巴管（鼠蹊或腋下淋巴結）和血行（肺為最常見轉移部位）擴散。犬腫瘤分為良性混合瘤、惡性混合瘤和carcinoma等多種類型；貓幾乎全為高度惡性carcinoma。"
  },
  "testicular tumor": {
    pathophysiology: "三種主要類型各有不同機制：Sertoli cell tumor產生過量雌激素→骨髓抑制（全血球減少）+雌性化表現（對側睪丸萎縮、乳房發育、包皮下垂）；Seminoma為生殖細胞惡性增殖，多為良性行為；Interstitial cell tumor為間質細胞增生，幾乎全為良性。隱睪犬腫瘤風險增加13倍（腹腔溫度促進惡性轉化）。",
    prognosis: "雙側睪丸切除後大多數預後極佳（>90%治癒性手術）。Sertoli cell tumor合併骨髓抑制者需評估骨髓恢復能力，嚴重再生不良者預後差。Seminoma和Interstitial cell tumor轉移率極低（<10%），切除即治癒。隱睪腫瘤較大時可能已有腹腔播散。"
  },

  // === Cardiac ===
  "mitral valve disease": {
    definition: "二尖瓣疾病（MVD/MMVD）是犬最常見的心臟病（佔所有犬心臟病的75%），由黏液樣退化（myxomatous degeneration）導致瓣膜增厚和關閉不全。小型犬（Cavalier King Charles Spaniel、Chihuahua、Miniature Poodle）好發，隨年齡增加發病率上升。",
    prognosis: "ACVIM B1期（無心臟重塑）：可穩定數年。B2期（心臟重塑但無症狀）：Pimobendan可延緩進展（EPIC study）。C期（心衰竭）：藥物可控制症狀，中位存活9-12個月。D期（難治性心衰）：預後差。整體而言小型犬MVD進展緩慢，許多犬終生不發展為心衰。"
  },
  "congestive heart failure": {
    definition: "充血性心衰竭（CHF）是心臟無法維持足夠的心輸出量以滿足身體代謝需求，導致液體滯留和組織充血的臨床症候群。犬最常見原因為MVD（左心衰，肺水腫）和DCM，貓最常見原因為HCM（左心衰，肺水腫或胸水）。不是單一疾病而是各種心臟病的終末表現。"
  },
  "aortic thromboembolism": {
    definition: "主動脈血栓栓塞（ATE）是貓心臟病最具破壞性的併發症，血栓從擴大的左心房脫落，經主動脈隨血流到達分叉處（骶髂分叉最常見），阻斷後肢血液供應。約90%繼發於HCM或其他心肌病。急性發作時疼痛劇烈，為貓最痛苦的急症之一。"
  },
  "pericardial effusion": {
    definition: "心包積液是心包腔內異常液體蓄積的疾病，犬最常見原因為特發性心包積液和心臟腫瘤（血管肉瘤佔50-70%、心臟基底部腫瘤佔10-15%）。大量積液導致心臟填塞（cardiac tamponade），妨礙心臟舒張期充填，引起急性右心衰竭和低心輸出。",
    pathophysiology: "液體在心包腔蓄積→心包腔內壓力升高→超過右心房充填壓力→右心舒張受限→右心輸出降低→靜脈壓升高（頸靜脈怒張、腹水）→左心回流減少→心輸出量下降→低血壓。急性大量積液比慢性少量積液更危險（心包順應性來不及代償）。"
  },
  "patent ductus arteriosus": {
    definition: "開放性動脈導管（PDA）是犬最常見的先天性心臟病，出生後連接主動脈和肺動脈的胎兒期導管未能正常閉合。血液從高壓主動脈經導管分流到低壓肺動脈（左→右分流），導致肺過度灌流和左心容積超負荷。Maltese、Pomeranian和German Shepherd有品種傾向。",
    pathophysiology: "胎兒期動脈導管維持肺循環旁路→出生後肺擴張、氧分壓升高和前列腺素降低應觸發導管關閉。PDA中平滑肌對這些信號反應不足→導管持續開放。左→右分流→肺動脈流量增加→左心房和左心室容量超負荷→左心擴大→最終左心衰竭。長期肺高壓可導致分流逆轉（Eisenmenger syndrome，右→左分流，發紺）。",
    prognosis: "手術結紮或經導管封堵（ACDO）後預後極佳，大多數犬術後恢復正常壽命。未治療的PDA約70%在1歲前死於心衰。導管直徑越大，心衰發展越快。已發展為Eisenmenger syndrome者預後差（分流逆轉不可逆）。"
  },

  // === Neurology ===
  "idiopathic epilepsy": {
    definition: "特發性（原發性）癲癇是犬最常見的癲癇類型（佔所有犬癲癇的60-70%），排除所有代謝、結構和感染原因後的診斷。多在1-5歲首次發作，發作間期神經學檢查完全正常。多個品種有遺傳傾向（Belgian Shepherd、Labrador、German Shepherd、Beagle）。",
    pathophysiology: "腦中興奮性和抑制性神經傳導物質平衡失調（谷氨酸增加/GABA減少）→異常同步放電→突破正常抑制機制→癲癇發作。全身性發作時異常放電擴散至雙側大腦半球。確切的分子缺陷在大多數品種中未被完全闡明，但涉及離子通道異常（鈉、鉀、鈣通道）和突觸傳遞異常。"
  },
  "vestibular disease": {
    definition: "前庭疾病泛指影響前庭系統（內耳前庭器官和/或腦幹前庭核）的疾病，導致平衡功能障礙。週邊性最常見（特發性前庭症候群佔老年犬的最大比例，中耳/內耳炎次之）。中樞性較少見但更嚴重（腦幹腫瘤、腦炎）。",
    pathophysiology: "前庭系統偵測頭部旋轉和線性加速，協調眼球運動和姿態平衡。週邊前庭損傷→一側輸入消失→大腦收到不對稱信號→表現為頭歪向病側、眼球震顫（快相離病側）、向病側傾倒。中樞前庭損傷（腦幹）→可能有反常性前庭徵象（頭歪和眼震方向不一致）+姿態反應異常+意識改變。"
  },
  "meningitis": {
    definition: "腦膜炎是腦膜和/或脊膜的發炎性疾病。犬最常見為免疫介導性腦膜炎（SRMA為代表），其次為感染性（細菌、真菌、原蟲）和腫瘤性（淋巴瘤腦膜浸潤）。貓以FIP相關的化膿性或非化膿性腦膜腦炎最常見。",
    pathophysiology: "SRMA（類固醇反應性腦膜動脈炎）：自體免疫攻擊腦膜血管→嗜中性球浸潤→蛛網膜下腔發炎→劇烈頸部疼痛和發燒。感染性：病原體經血行或直接擴散（中耳炎延伸）到達腦膜→化膿性或肉芽腫性發炎→顱內壓升高→神經功能障礙。"
  },
  "fibrocartilaginous embolism": {
    definition: "纖維軟骨栓塞（FCE）是一種急性非進行性脊髓血管性疾病，椎間盤纖維軟骨物質進入脊髓血管（動脈和/或靜脈）造成栓塞和脊髓梗塞。通常在劇烈運動中突然發作，大型犬好發（Miniature Schnauzer為小型犬例外）。特徵為急性不對稱性神經功能缺損。",
    pathophysiology: "椎間盤纖維軟骨物質（機制不明，可能在椎間盤退化後經椎體血管進入）→栓塞脊髓動脈或靜脈→相應脊髓節段缺血壞死。栓塞通常不對稱（一側比另一側嚴重）。梗塞區域的範圍決定臨床嚴重度。無法手術治療，但因為是一次性事件，損傷不會進展。"
  },
  "myasthenia gravis": {
    definition: "重症肌無力是神經肌肉接合處的自體免疫或先天性疾病。後天型（最常見）由自身抗體攻擊菸鹼型乙醯膽鹼受體（AChR）導致受體數量減少和功能障礙。局部型以巨食道為主要表現（犬最常見），全身型以運動性肌無力為特徵。可伴隨胸腺瘤（貓較犬常見）。",
    pathophysiology: "後天型：AChR自身抗體（IgG）結合受體→加速受體內吞降解+補體介導損傷→終板AChR密度降低→每個動作電位產生的終板電位幅度不足→傳導衰退（repetitive nerve stimulation顯示衰減反應）→肌肉收縮力隨使用增加而下降（運動性虛弱）。"
  },
  "cranial cruciate ligament rupture": {
    definition: "前十字韌帶（CCL/ACL）斷裂是犬最常見的後肢跛行原因和骨科手術指適應症。犬CCL損傷多為慢性退化性過程（而非單一創傷事件），與韌帶慢性負荷、免疫介導性退化和脛骨平台角度有關。大型犬（Labrador、Rottweiler）好發，肥胖為重要風險因子。",
    pathophysiology: "犬CCL承受持續的剪力（脛骨推力）→韌帶內膠原纖維漸進性退化→部分撕裂→完全斷裂。CCL喪失後脛骨前移（tibial thrust）→關節不穩定→半月板損傷（內側半月板後角好發）→進行性骨關節炎。約40-60%犬在一側CCL斷裂後1-2年內對側也會斷裂。"
  },

  // === Orthopedics ===
  "hip dysplasia": {
    definition: "髖關節發育不良是犬最常見的遺傳性骨科疾病，由髖關節鬆弛（股骨頭與髖臼不吻合）引起漸進性退化性關節病變。大型和巨型犬好發（German Shepherd、Labrador、Golden Retriever），多基因遺傳模式受環境因素（生長速率、體重、營養）調節。",
    pathophysiology: "遺傳性關節鬆弛→股骨頭在髖臼中過度運動→關節軟骨不均勻負荷→軟骨磨損退化→滑膜發炎→關節囊纖維化→骨贅形成（骨關節炎）。幼犬期鬆弛度最高，隨年齡增加關節囊纖維化可能掩蓋鬆弛但OA已不可逆。生長過快和過度營養加速退化過程。",
    prognosis: "取決於嚴重度和治療方式。輕度：體重管理+運動調節+NSAIDs可良好控制多年。手術選項：幼犬JPS/DPO/TPO可改變疾病進程；成犬FHO適合<20kg、THR（全髖關節置換）效果最佳但費用高。大多數犬經適當管理可維持良好生活品質。"
  },
  "patellar luxation": {
    definition: "髕骨脫位是犬第二常見的骨科疾病，髕骨偏離股骨滑車溝的正常位置。小型犬以內側脫位為主（>75%），大型犬可見外側脫位。先天性因素包括股骨滑車溝淺、脛骨嵴偏移和股四頭肌角度異常。分為Grade I-IV四級。",
    pathophysiology: "先天性骨骼排列異常→髕骨正常運動軌跡偏移→髕骨滑出滑車溝（脫位）→關節軟骨磨損（反覆脫位區域和滑車溝邊緣）→漸進性骨關節炎。慢性脫位導致股四頭肌攣縮和纖維化，進一步固定髕骨在脫位位置。兒童期骨骼未成熟時持續脫位可導致骨骼生長畸形。"
  },
  "osteosarcoma": {
    definition: "骨肉瘤是犬最常見的原發性骨腫瘤（佔85%以上），為高度惡性腫瘤，好發於大型和巨型犬的四肢長骨（橈骨遠端、脛骨近端、肱骨近端）。中位發病年齡7-8歲。超過90%在診斷時已有微轉移（主要轉移至肺）。",
    pathophysiology: "惡性成骨細胞異常增殖→產生不規則骨基質（骨樣組織）→破壞正常皮質骨結構→溶骨和成骨混合性病變→骨皮質破壞→病理性骨折（嚴重疼痛）。腫瘤細胞經血行播散→肺轉移（最常見）→骨轉移。轉移通常在診斷時已存在（微轉移），故單純截肢中位存活僅4-6個月。"
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

// enrich-C5.js — Enrich 45 diseases that only need definition expanded (D flag)
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
  while (i < html.length) {
    if (html[i] === '\\') { i += 2; continue; }
    if (html[i] === '"') break;
    i++;
  }
  return { start: valueStart, end: i, oldValue: html.substring(valueStart, i) };
}

const enrichments = {
  "dilated-cardiomyopathy": {
    definition: "擴張型心肌病（DCM）是以心室擴張和收縮功能進行性下降為特徵的原發性心肌疾病，為大型犬最常見的心肌病。Doberman Pinscher、Great Dane、Irish Wolfhound有遺傳傾向。Doberman型DCM以室性心律不整和猝死為特徵，可在心臟擴張之前發生。"
  },
  "mitral-valve-disease": {
    definition: "二尖瓣退行性疾病（MMVD/MVD）是犬最常見的心臟病，佔所有犬心臟病的75%以上。因二尖瓣小葉黏液樣退化（myxomatous degeneration）導致瓣膜增厚、脫垂和關閉不全。Cavalier King Charles Spaniel幾乎100%會發展此病。ACVIM分級B1→B2→C→D指導治療。"
  },
  "tricuspid-valve-dysplasia": {
    definition: "三尖瓣發育不良是指三尖瓣裝置（瓣葉、腱索、乳突肌）的先天性畸形，導致三尖瓣關閉不全和右心衰竭。Labrador Retriever和其他大型犬好發，為先天性心臟病中較常見的類型之一。嚴重者可在幼年期出現右側充血性心衰（腹水、頸靜脈擴張）。"
  },
  "pulmonic-stenosis": {
    definition: "肺動脈狹窄是犬第三常見的先天性心臟病，因肺動脈瓣或瓣下區域發育異常導致右心室射血阻力增加。English Bulldog、Boxer、Beagle好發。依狹窄部位分瓣膜型（最常見）、瓣下型和瓣上型。壓力梯度>80 mmHg為重度，需球囊瓣膜成形術介入。"
  },
  "ventricular-septal-defect": {
    definition: "心室中隔缺損（VSD）是犬貓常見的先天性心臟病，為左右心室之間存在異常通道。小型限制性VSD因高壓差產生特徵性右側心基底部粗糙收縮期雜音，血流動力學影響輕微。大型非限制性VSD導致左向右分流增加、肺血流量增加和左心容量超負荷，最終可能發展Eisenmenger症候群。"
  },
  "atrial-septal-defect": {
    definition: "心房中隔缺損（ASD）是左右心房之間存在異常通道的先天性心臟病。犬較少見，但在某些品種（Boxer、Samoyed）有遺傳傾向。左向右分流導致右心容量超負荷和肺血流增加。小型ASD可能終身無症狀，大型ASD可導致右心衰竭和心房顫動。"
  },
  "pericardial-effusion": {
    definition: "心包積液是指心包腔內液體異常蓄積，導致心臟舒張受限（心包填塞）。犬最常見原因為血管肉瘤（右心房/右心耳）、心基底部腫瘤（chemodectoma）和特發性心包炎。Golden Retriever和German Shepherd好發腫瘤性心包積液。急性心包填塞為心臟急症，需緊急心包穿刺引流。"
  },
  "infective-endocarditis": {
    definition: "感染性心內膜炎是微生物（主要為細菌）感染心臟瓣膜或心內膜形成贅生物（vegetation）的嚴重疾病。犬以主動脈瓣和二尖瓣最常受累，常見致病菌包括Staphylococcus、Streptococcus、E. coli和Bartonella。中大型犬好發，常見感染源為泌尿道、口腔、皮膚和椎間盤感染。"
  },
  "arterial-thromboembolism": {
    definition: "動脈血栓栓塞（ATE）是血栓從心臟脫落隨動脈血流栓塞遠端動脈的急症，貓最常見於腹主動脈分叉處（鞍狀血栓）。約90%與心肌病（主要HCM）相關。表現為急性後肢癱瘓、後肢疼痛、股動脈脈搏消失和肢端發紺。為貓心臟病最嚴重的併發症之一。"
  },
  "systemic-hypertension": {
    definition: "系統性高血壓是犬貓收縮壓持續>160 mmHg的疾病。犬貓多為繼發性，貓最常見原因為慢性腎臟病（CKD）和甲狀腺功能亢進，犬常見於CKD、Cushing病和腎上腺腫瘤。高血壓可導致靶器官損傷（TOD）：眼（視網膜剝離）、腎、腦和心臟。"
  },
  "pulmonary-hypertension": {
    definition: "肺動脈高血壓（PH）是指肺動脈壓力異常升高的疾病，犬經超音波估算三尖瓣反流壓力梯度>50 mmHg為中度以上。依病因分為肺動脈性（原發性、先天左向右分流）、左心疾病相關、呼吸疾病相關（慢性支氣管炎）、血栓栓塞性和心絲蟲相關。Cavalier和West Highland好發。"
  },
  "polymyositis": {
    definition: "多發性肌炎是免疫介導的骨骼肌炎症性疾病，以進行性肌肉無力、肌萎縮和肌酶升高（CK/AST）為特徵。犬可為特發性或副腫瘤性（胸腺瘤相關），大型犬好發。肌肉活檢可見淋巴球和巨噬細胞浸潤。需與重症肌無力、感染性肌炎和多發性神經肌病鑑別。"
  },
  "gastric-ulcer": {
    definition: "胃潰瘍是胃黏膜屏障遭破壞導致黏膜下層甚至肌層組織缺損的疾病。犬最常見原因為NSAID使用（抑制PGE2合成）、肥大細胞瘤（組織胺過度分泌）、肝臟疾病和腎衰竭（尿毒素刺激）。嘔血和黑便為特徵性表現。胃穿孔為致命性併發症需緊急手術。"
  },
  "protein-losing-enteropathy": {
    definition: "蛋白質流失性腸病（PLE）是一組因腸道過度流失蛋白質導致低白蛋白血症的疾病綜合徵。常見病因包括淋巴管擴張症（Yorkshire Terrier好發）、炎症性腸病（IBD）和腸道淋巴瘤。白蛋白<2.0 g/dL時易出現胸腹水和水腫。血栓栓塞是重要併發症。"
  },
  "esophageal-foreign-body": {
    definition: "食道異物是指骨頭、玩具、肉乾或其他物體卡在食道中無法通過的急症。最常見卡住位置為胸腔入口、心基底部和橫膈裂孔。小型犬和梗犬好發。異物壓迫超過24-48小時可導致食道壞死和穿孔，後續縱膈炎和膿胸為致命性併發症。內視鏡取出為首選治療。"
  },
  "exocrine-pancreatic-insufficiency": {
    definition: "胰外分泌功能不全（EPI）是因胰臟腺泡萎縮導致消化酶（脂肪酶、澱粉酶、蛋白酶）分泌嚴重不足的疾病。犬以免疫介導性胰腺腺泡萎縮為主要病因（German Shepherd好發），貓多繼發於慢性胰臟炎。特徵性表現為多食伴體重下降和大量脂肪便。cTLI<2.5 μg/L確診。"
  },
  "rectal-prolapse": {
    definition: "直腸脫出是直腸黏膜或全層經肛門向外翻出的急症，幼犬幼貓較常見。常見誘因包括嚴重腹瀉（寄生蟲、腸炎）、裡急後重（結腸炎、泌尿道阻塞）、會陰疝和直腸腫瘤。需與小腸套疊脫出（探針可沿壁插入為套疊）鑑別。輕度可保守復位，反覆者需結腸固定術。"
  },
  "chronic-kidney-disease": {
    definition: "慢性腎臟病（CKD）是腎臟結構和功能的進行性不可逆損傷，持續超過3個月。IRIS分期依血清肌酐和SDMA分為1-4期，結合蛋白尿亞分期和血壓亞分期指導治療。為老年貓最常見疾病之一（15歲以上貓>30%），犬亦常見。早期無症狀，晚期出現多飲多尿、食慾下降和嘔吐。"
  },
  "feline-lower-urinary-tract-disease": {
    definition: "貓下泌尿道疾病（FLUTD）是影響貓膀胱和尿道的一組臨床症候群總稱，以血尿、頻尿、排尿困難和不適當排尿為特徵。最常見原因為特發性膀胱炎（FIC，佔55-69%），其次為尿路結石（15-21%）、感染（1-8%）和尿道栓子。公貓尿道阻塞為急症。"
  },
  "urinary-tract-infection": {
    definition: "泌尿道感染（UTI）是細菌（最常見E. coli，佔40-50%）侵犯泌尿系統的感染性疾病。犬雌性好發（尿道短），貓UTI較少見（<10歲貓罕見，老年貓和CKD/DM貓增加）。分簡單性UTI（無潛在疾病）和複雜性UTI（伴結構異常或免疫抑制）。尿液培養為診斷金標準。"
  },
  "pyelonephritis": {
    definition: "腎盂腎炎是細菌感染引起的腎盂和腎實質炎症，為泌尿道感染上行擴展至腎臟的嚴重併發症。最常見致病菌為E. coli。危險因子包括尿路結石、尿道導管留置、糖尿病和免疫抑制。急性型以發燒、腎區疼痛和腎腫大為特徵，慢性型可導致腎臟纖維化和CKD。"
  },
  "polycystic-kidney-disease": {
    definition: "多囊性腎病（PKD）是以雙側腎臟多發性囊腫進行性增大為特徵的遺傳性腎臟疾病。波斯貓和相關品種為常染色體顯性遺傳（PKD1基因突變），發病率約36-49%。犬罕見。囊腫隨年齡增大壓迫正常腎組織→腎功能進行性喪失→最終CKD。超音波可在10-16週齡偵測到囊腫。"
  },
  "protein-losing-nephropathy": {
    definition: "蛋白質流失性腎病（PLN）是因腎絲球基底膜損傷導致大量蛋白質經尿液流失的疾病，尿蛋白/肌酐比值UPC>2.0。犬常見原因包括免疫複合物性腎絲球腎炎、腎澱粉樣變性和遺傳性腎病（Soft-Coated Wheaten Terrier、Bernese Mountain Dog）。低白蛋白血症可導致水腫、胸腹水和血栓形成。"
  },
  "renal-dysplasia": {
    definition: "腎發育不良是指腎臟在發育過程中分化異常導致的先天性腎臟疾病。病理特徵為腎臟含有不成熟的腎元（胎兒型腎小球和腎小管）、軟骨化生和纖維化。Lhasa Apso、Shih Tzu、Standard Poodle有遺傳傾向。幼犬和年輕犬出現多飲多尿和發育不良時應懷疑。"
  },
  "urethral-obstruction": {
    definition: "尿道阻塞是指尿道被結石、結晶栓子、黏液蛋白栓子或腫瘤完全或部分堵塞導致無法排尿的泌尿急症。公貓因尿道遠端（陰莖段）極為狹窄而最常受累，為貓急診中最常見的急症之一。完全阻塞24-48小時可因高血鉀致心律不整和急性腎後性腎衰竭而致命。"
  },
  "bladder-tumor": {
    definition: "膀胱腫瘤以移行上皮細胞癌（TCC/尿路上皮癌）為犬最常見的膀胱惡性腫瘤（>95%），Scottish Terrier風險為其他品種的18倍。好發於三角區（trigone），常侵犯輸尿管開口和尿道造成排尿困難。肥胖和除草劑暴露為環境風險因子。COX抑制劑piroxicam有抗腫瘤活性。"
  },
  "urinary-incontinence": {
    definition: "尿失禁是無意識的尿液滲漏，最常見為絕育母犬的尿道括約肌功能不全（USMI/激素反應性尿失禁），佔犬尿失禁的50-80%。大型犬和肥胖犬好發。其他原因包括先天異常（異位輸尿管）、神經性膀胱功能障礙和前列腺疾病。phenylpropanolamine (PPA)為一線治療，反應率約85%。"
  },
  "prostatic-disease": {
    definition: "前列腺疾病是未絕育公犬的常見泌尿生殖系統疾病。良性前列腺增生（BPH）在6歲以上未絕育公犬中>95%，為雄激素依賴性。其他前列腺疾病包括前列腺炎（急性/慢性）、前列腺囊腫（滯留囊腫和旁前列腺囊腫）、前列腺膿瘍和前列腺腺癌（不論絕育與否）。去勢為BPH的根治性治療。"
  },
  "hydronephrosis": {
    definition: "腎水腫是因輸尿管或腎盂出口阻塞導致尿液蓄積造成腎盂和腎盞持續擴張、腎實質萎縮的疾病。常見原因包括輸尿管結石（貓最常見）、輸尿管狹窄、腫瘤壓迫和先天性異常。單側者可長期代償無症狀，雙側者導致腎後性氮血症。超音波可見腎盂擴張和腎實質變薄。"
  },
  "nephrotoxicity": {
    definition: "腎毒性是指藥物、毒素或其他外源性物質對腎臟造成的直接損傷，主要影響腎小管上皮細胞。犬貓常見腎毒性物質包括NSAID、胺基糖苷類抗生素（gentamicin）、百合花（貓）、乙二醇（防凍液）和葡萄/葡萄乾。早期表現為多尿，進展為少尿/無尿型急性腎損傷。及早辨認和停止暴露是關鍵。",
    pathophysiology: "腎毒性物質通過多種機制損傷腎臟：(1)直接腎小管細胞毒性—胺基糖苷類在近端小管溶酶體蓄積→細胞壞死；(2)腎血管收縮—NSAID抑制PGE2→入球小動脈收縮→腎血流降低；(3)結晶沉積—乙二醇代謝物草酸鈣結晶堵塞腎小管；(4)氧化損傷—百合花中未知毒素導致近端小管氧化壞死。腎小管上皮壞死→反流漏出→管腔阻塞→GFR下降→急性腎損傷。"
  },
  "patellar-luxation": {
    definition: "髕骨脫位是指髕骨從股骨滑車溝脫出的骨科疾病，為小型犬最常見的後肢跛行原因之一。分內側脫位（最常見，小型犬佔75-80%）和外側脫位（大型犬較多）。依嚴重度分Grade I-IV：Grade I可手動脫位但自行復位，Grade IV永久脫位無法復位。Grade III-IV建議手術矯正。"
  },
  "hemangiosarcoma": {
    definition: "血管肉瘤（HSA）是起源於血管內皮細胞的高度惡性腫瘤，犬為最常受影響的物種。脾臟、右心房和皮下是三個最常見原發部位。German Shepherd和Golden Retriever好發。脾臟HSA常因腫瘤破裂引起急性腹腔出血和休克就診。全身轉移率極高（>90%），中位生存期僅3-6個月。"
  },
  "keratoconjunctivitis-sicca": {
    definition: "乾性角結膜炎（KCS/乾眼症）是因淚液水層分泌不足導致角膜和結膜慢性發炎的眼科疾病。犬Schirmer淚液試驗（STT）<15 mm/min為可疑，<10 mm/min確診。最常見原因為免疫介導性淚腺炎，West Highland White Terrier、Cavalier King Charles Spaniel、Cocker Spaniel和Pug好發。黏液性分泌物和角膜色素沉著為特徵。"
  },
  "pneumothorax": {
    definition: "氣胸是指空氣異常進入胸膜腔導致肺臟塌陷的呼吸急症。分外傷性（肋骨骨折、穿刺傷、最常見）、自發性（肺泡破裂形成肺大泡，大型深胸犬好發）和張力性（空氣只進不出，快速致命）。臨床表現為呼吸急促、呼吸困難和胸部叩診鼓音。緊急胸腔穿刺排氣為首要處置。"
  },
  "pyothorax": {
    definition: "膿胸是指胸膜腔內膿液蓄積的嚴重感染性疾病。貓最常見（可能與貓間咬傷相關），犬多與異物穿透或食道穿孔有關。致病菌多為混合厭氧菌和需氧菌。臨床表現為發燒、呼吸困難和全身毒血症。治療需胸管引流沖洗配合長期（4-6週）抗生素，內科治癒率約80-90%。"
  },
  "chylothorax": {
    definition: "乳糜胸是指富含乳糜微粒的淋巴液（乳糜）蓄積於胸膜腔的疾病。大多數犬貓為特發性，已知原因包括前縱膈腫瘤（淋巴瘤、胸腺瘤）、右心衰竭、心包疾病和胸導管損傷。Afghan Hound和暹羅貓可能有品種傾向。胸水呈乳白色，三酸甘油酯濃度高於血清為診斷依據。"
  },
  "legg-calve-perthes": {
    definition: "股骨頭無菌性壞死（Legg-Calvé-Perthes病）是幼齡小型犬因股骨頭血液供應中斷導致股骨頭和頸部缺血性壞死的骨科疾病。Yorkshire Terrier、Poodle、West Highland White Terrier等5-8月齡小型犬好發。單側居多（85%）。疼痛性後肢跛行為主要表現。股骨頭切除術（FHO）為標準治療。"
  },
  "panosteitis": {
    definition: "全骨炎是幼齡大型犬長骨骨髓腔的自限性炎症性疾病，以急性起始的遊走性跛行為特徵。German Shepherd 5-18月齡最好發，公犬比母犬多4倍。X光可見骨髓腔內斑片狀骨質密度增加。通常在2歲前自行緩解，每次發作持續2-3週。止痛治療即可，無需手術。"
  },
  "fracture": {
    definition: "骨折是骨骼完整性遭破壞的創傷性或病理性疾病。犬貓最常見原因為交通事故和高處墜落。依骨折類型分橫斷、斜形、螺旋、粉碎和青枝骨折；依開放程度分閉鎖性和開放性（骨折端穿透皮膚）。長骨骨折（股骨、脛骨、肱骨、橈尺骨）最常見。治療以外科固定（接骨板、髓內釘、外固定架）為主。"
  },
  "grape-raisin-toxicosis": {
    definition: "葡萄/葡萄乾中毒是犬攝入葡萄、葡萄乾、醋栗或含葡萄產品後引起的潛在致命性腎毒性。毒性物質疑為酒石酸（tartaric acid），且個體易感性差異極大。中毒劑量無明確閾值。臨床表現從輕度嘔吐到致命性急性腎小管壞死和無尿型腎衰竭。早期催吐和積極靜脈輸液是關鍵。"
  },
  "snake-envenomation": {
    definition: "蛇咬傷中毒是犬貓遭毒蛇咬傷後毒液引起的全身性中毒反應。台灣常見毒蛇包括龜殼花、青竹絲（出血性毒）、眼鏡蛇和雨傘節（神經性毒）。出血性蛇毒以凝血障礙、組織壞死和腫脹為主；神經性蛇毒以神經肌肉麻痺和呼吸衰竭為主。抗蛇毒血清為特異性治療。"
  },
  "myocarditis": {
    definition: "心肌炎是心肌的炎症性疾病，可由感染（Trypanosoma cruzi、Parvovirus、Borrelia）、免疫介導、毒素或特發性因素引起。犬以感染性最常見，貓較罕見。輕度者無症狀，重度者以急性心衰、心律不整或猝死為表現。心肌肌鈣蛋白（cTnI）升高有診斷價值。確定診斷需心肌活檢。"
  },
  "pulmonary-contusion": {
    definition: "肺挫傷是外傷導致肺實質出血和水腫的常見急症，為犬貓胸部創傷最常見的損傷。多見於交通事故、高處墜落和動物攻擊。外傷動能傳遞至肺泡毛細血管→血管破裂→肺泡內出血→氣體交換障礙→低氧血症。影像學改變在受傷後12-24小時最明顯。輕中度多在3-5天自行吸收。"
  },
  "spinal-fracture-luxation": {
    definition: "脊椎骨折脫位是外傷導致脊椎骨折和/或椎體間脫位的急症，以胸腰段交界處（T11-L2）最常見（此處為活動度高/低的轉換區）。嚴重度取決於脊髓損傷程度，從輕度不全癱到深層痛覺喪失的完全癱瘓。犬貓最常見原因為交通事故。三柱理論（three-column theory）指導手術穩定的決策。"
  },
  "otitis-media": {
    definition: "中耳炎是中耳腔（鼓室）的感染或炎症性疾病，超過50%的慢性外耳炎犬合併中耳炎。最常見為外耳炎經鼓膜蔓延而來，致病菌包括Staphylococcus、Pseudomonas和Malassezia。貓的中耳炎可繼發於鼻咽息肉或上呼吸道感染經耳咽管逆行感染。可導致周邊前庭症狀和面神經麻痺（Horner症候群）。"
  }
};

// Apply enrichments from end to start
let changes = [];
for (const [diseaseId, fields] of Object.entries(enrichments)) {
  for (const [fieldName, newValue] of Object.entries(fields)) {
    const bounds = findFieldBounds(diseaseId, fieldName);
    if (bounds) {
      changes.push({ ...bounds, diseaseId, fieldName, newValue });
    } else {
      console.log('WARN: not found: ' + diseaseId + '.' + fieldName);
    }
  }
}

changes.sort((a, b) => b.start - a.start);
for (const c of changes) {
  html = html.substring(0, c.start) + c.newValue + html.substring(c.end);
}

fs.writeFileSync(htmlFile, html, 'utf8');
console.log('=== Enriched ' + changes.length + '/' + Object.values(enrichments).reduce((s, f) => s + Object.keys(f).length, 0) + ' fields ===');

// Validate
const script = html.match(/<script>([\s\S]*?)<\/script>/);
try { new Function(script[1]); console.log('✓ JavaScript syntax valid'); } catch(e) { console.log('✗ SYNTAX ERROR: ' + e.message); }
console.log('Diseases: ' + (html.match(/^\s+zh:\s*"/gm) || []).length);
console.log(html.includes('</script>') ? 'OK </script>' : 'MISSING </script>');
console.log(html.includes('</body>') ? 'OK </body>' : 'MISSING </body>');
console.log(html.includes('</html>') ? 'OK </html>' : 'MISSING </html>');

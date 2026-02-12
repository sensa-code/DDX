// enrich-C4.js — Enrich 15 derm/eye/respiratory diseases (full D+P+R)
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
  "arrhythmia": {
    definition: "心律不整是指心臟電傳導系統異常導致心跳節律、頻率或傳導路徑偏離正常竇性節律的疾病總稱。包括心搏過速（SVT、VT）、心搏過緩（竇房結病變、房室傳導阻滯）和期前收縮（APCs、VPCs）。犬常見DCM相關室性心律不整，貓以HCM相關心房顫動較多。",
    pathophysiology: "心律不整源於三大電生理機制：(1)自動性異常—非竇房結部位產生異位節律；(2)觸發活動—早期或延遲後去極化引發額外動作電位；(3)折返迴路—傳導路徑中存在單向阻滯和緩慢傳導形成環形激動。結構性心臟病（DCM、HCM）、電解質異常（低血鉀、低血鎂）、缺氧、藥物中毒和自主神經失衡均可誘發。嚴重室性心律不整可導致血流動力學障礙甚至猝死。"
  },
  "atopic dermatitis": {
    definition: "異位性皮膚炎是犬貓因遺傳性皮膚屏障功能缺陷和免疫調節異常，對環境過敏原（塵蟎、花粉、黴菌）產生IgE介導的過敏反應所致的慢性瘙癢性皮膚病。為犬第二常見過敏性皮膚病（僅次於跳蚤過敏），通常1-3歲首次發病，具品種易感性。",
    pathophysiology: "皮膚屏障蛋白（如filaggrin）表達缺陷→經皮水分散失增加→環境過敏原穿透受損屏障→抗原呈現細胞（Langerhans cells）攝取後活化Th2免疫反應→IL-4/IL-13促進B細胞分泌特異性IgE→IgE結合肥大細胞表面FcεRI受體→再次接觸過敏原後交聯脫顆粒→釋放組織胺、白三烯、前列腺素→血管擴張、瘙癢、紅斑。慢性期轉為Th1主導的苔蘚化病變。",
    prognosis: "異位性皮膚炎為終身疾病，無法根治但可有效控制。多數犬在多模式治療（過敏原特異性免疫治療ASIT + oclacitinib/lokivetmab + 皮膚屏障修復）下可維持良好生活品質。季節性病例預後較全年性佳。繼發感染和耳炎需同時管理。約60-70%的犬對ASIT有良好反應。"
  },
  "food allergy": {
    definition: "食物過敏是犬貓對飲食中特定蛋白質（牛肉、雞肉、乳製品、小麥、大豆等）產生免疫介導的不良反應，以非季節性瘙癢和/或消化道症狀為特徵。為犬第三常見過敏性皮膚病，約佔所有過敏性皮膚病的10-15%，任何年齡均可發病。",
    pathophysiology: "食物中的完整蛋白分子或大分子肽段通過受損的腸道黏膜屏障→腸相關淋巴組織（GALT）中抗原呈現→致敏T細胞和IgE產生→再次攝入相同蛋白時觸發肥大細胞脫顆粒（即刻型，I型過敏）和/或T細胞介導的遲發型反應（IV型過敏）→皮膚和消化道炎症反應。口腔耐受機制失調是核心病理。",
    prognosis: "食物過敏預後良好，前提是能正確識別並嚴格排除致敏食物。8-12週排除飲食試驗是診斷金標準。成功識別過敏原後，嚴格控制飲食可實現症狀完全緩解。約30%患犬同時患有異位性皮膚炎，需合併管理。水解蛋白飲食或新型蛋白飲食為長期管理選擇。"
  },
  "flea allergy dermatitis": {
    definition: "跳蚤過敏性皮膚炎（FAD）是犬貓因對跳蚤唾液中半抗原蛋白產生過敏反應所致的皮膚病，為全球犬最常見的過敏性皮膚病。僅需少量跳蚤叮咬即可引發劇烈瘙癢，典型病變集中在腰薦部和尾根部。溫暖潮濕氣候區全年發病。",
    pathophysiology: "跳蚤唾液含15種以上過敏原蛋白→叮咬時注入皮膚→致敏動物產生特異性IgE（I型即刻過敏，15分鐘內）和IgG介導的遲發反應（IV型，24-48小時）→肥大細胞脫顆粒釋放組織胺等炎症介質→劇烈瘙癢→自我創傷（抓咬）→繼發性膿皮症和脫毛。慢性者發生苔蘚化和色素沉著。",
    prognosis: "嚴格控制跳蚤後預後極佳。現代長效跳蚤預防藥物（isoxazoline類如fluralaner/sarolaner，月效或三月效）可有效預防。必須對環境和所有接觸動物同時治療。繼發感染需抗菌治療。未控制跳蚤者會反覆發作並漸進惡化。"
  },
  "pyoderma": {
    definition: "膿皮症是犬最常見的細菌性皮膚感染，主要由Staphylococcus pseudintermedius引起。分表淺型（毛囊炎、膿疱疹）和深層型（深層毛囊炎、蜂窩組織炎、癤腫病）。幾乎總是繼發於潛在疾病（過敏、內分泌病、免疫缺陷），單獨治療而不找原發病因易反覆發作。",
    pathophysiology: "皮膚屏障因潛在疾病（過敏、甲狀腺功能低下、Cushing病）受損→正常皮膚菌群S. pseudintermedius伺機增殖→穿透受損表皮→毛囊感染（表淺型）或穿透真皮層（深層型）→嗜中性球浸潤形成膿疱→抓癢自我創傷加速擴散。耐甲氧西林葡萄球菌（MRSP）近年發病率上升，治療更具挑戰性。"
  },
  "otitis externa": {
    definition: "外耳炎是犬貓外耳道的急性或慢性炎症，犬發病率約10-20%。主要誘因包括過敏（異位性皮膚炎為最常見潛因）、耳道異物、內分泌病和耳道解剖特徵（垂耳、毛多、狹窄）。繼發細菌（Staphylococcus spp.、Pseudomonas spp.）和酵母菌（Malassezia pachydermatis）感染加重病情。",
    pathophysiology: "主要誘因（過敏、異物、寄生蟲）破壞耳道上皮→炎症反應導致腺體增生和分泌增加→溫暖潮濕環境利於微生物增殖→繼發感染→進一步炎症和角化異常→耳道壁增厚和狹窄→分泌物積聚加重感染。慢性者耳道骨化和鈣化→不可逆狹窄→可能需要手術（全耳道切除+側鼓泡切開術TECA-LBO）。",
    prognosis: "急性單純性外耳炎在正確治療和控制潛因後預後良好。慢性反覆性外耳炎預後取決於潛在疾病控制程度和耳道結構改變程度。Pseudomonas相關的耳炎治療較困難。嚴重耳道狹窄者可能需TECA-LBO手術，術後生活品質通常改善顯著。"
  },
  "glaucoma": {
    definition: "青光眼是以眼內壓（IOP）異常升高為特徵的視神經退行性疾病，犬正常IOP為10-25 mmHg。分原發性（房水排出通道先天異常，遺傳性，Cocker Spaniel、Basset Hound好發）和續發性（葡萄膜炎、晶體脫位、眼內腫瘤阻塞房水排出）。急性發作為眼科急症。",
    pathophysiology: "房水由睫狀體分泌→流經後房經瞳孔進入前房→從虹膜角膜角的小樑網和葡萄膜鞏膜途徑排出。排出通道阻塞（開角型：小樑網退化；閉角型：虹膜角膜角關閉；續發性：炎症碎屑或腫瘤阻塞）→房水蓄積→IOP升高→視網膜神經節細胞軸突壓迫性損傷→視神經萎縮→不可逆失明。犬急性青光眼IOP可達60-80 mmHg。"
  },
  "cataract": {
    definition: "白內障是晶體蛋白（crystallin）變性混濁導致光線無法正常透過的眼科疾病，為犬最常見的致盲原因。依成因分遺傳性（最常見，Poodle、Cocker Spaniel好發）、糖尿病性（75%糖尿病犬在1年內發展白內障）、外傷性和老年性。依成熟度分初期、未成熟、成熟和過熟期。",
    pathophysiology: "晶體纖維細胞中的水溶性α-crystallin蛋白因氧化損傷、滲透壓改變或遺傳缺陷而凝聚為不溶性蛋白→光散射增加→晶體混濁。糖尿病性白內障：高血糖→晶體內山梨醇累積（醛糖還原酶途徑）→滲透壓升高→水分湧入→晶體纖維腫脹破裂→急速進展。過熟期白內障可誘發晶體源性葡萄膜炎。",
    prognosis: "手術治療（超音波乳化術+人工晶體植入）成功率85-95%，術後視力恢復良好。無手術者最終完全失明但犬適應力佳。糖尿病性白內障術前需良好血糖控制。主要併發症為術後葡萄膜炎和視網膜剝離（2-5%）。"
  },
  "keratoconjunctivitis sicca": {
    definition: "乾眼症是因淚液水層分泌不足（Schirmer淚液試驗<15 mm/min為可疑，<10 mm/min確診）導致角膜和結膜慢性炎症的眼科疾病。犬最常見原因為免疫介導性淚腺炎（佔80%），West Highland White Terrier、Cavalier King Charles Spaniel和Pug好發。",
    pathophysiology: "免疫介導性淚腺炎→CD4+ T細胞浸潤並破壞淚腺腺泡→淚液水層分泌進行性減少→淚膜不穩定→角膜表面乾燥→上皮細胞壞死脫落→角膜糜爛和潰瘍→繼發細菌感染→慢性角膜血管新生和色素沉著→視力下降。黏液性眼分泌物增加是代償性杯狀細胞增生的結果。",
    prognosis: "免疫調節劑（cyclosporine 0.2% BID或tacrolimus 0.02% BID）可使約80%的犬淚液分泌改善，配合人工淚液長期管理預後良好。需終身用藥。藥物無效者可考慮腮腺導管移位術。嚴重色素沉著和角膜瘢痕為不可逆改變。早期診斷和治療對保存視力至關重要。"
  },
  "tracheal collapse": {
    definition: "氣管塌陷是因氣管軟骨環退化軟化導致氣管管腔在呼吸時動態塌陷的慢性進行性呼吸道疾病。中老年小型犬好發（Yorkshire Terrier、Pomeranian、Chihuahua），頸段氣管塌陷在吸氣時加重，胸段在呼氣時加重。特徵性鵝鳴樣咳嗽（goose-honk cough）。",
    pathophysiology: "氣管軟骨環中的糖胺聚醣（glycosaminoglycan）和硫酸軟骨素含量降低→軟骨基質退化→C形軟骨環失去支撐力→氣管背側膜鬆弛下垂→管腔狹窄。吸氣時頸段氣管內負壓增大→頸段塌陷；呼氣時胸腔正壓→胸段塌陷。慢性氣道刺激→黏膜發炎→咳嗽→進一步加重塌陷（惡性循環）。肥胖加重病情。",
    prognosis: "輕中度（Grade I-II）以內科治療為主（止咳、抗發炎、減重），可長期控制症狀。重度（Grade III-IV）者考慮氣管內支架置放，但可能有支架斷裂、肉芽組織增生等併發症。合併下呼吸道塌陷（支氣管軟化）預後較差。終身管理，避免環境刺激物和過度興奮。"
  },
  "brachycephalic airway syndrome": {
    definition: "短頭犬呼吸道症候群是一組因顱顏骨骼短縮導致上呼吸道多處解剖異常的先天性疾病綜合徵。主要病變包括鼻孔狹窄、軟顎過長、喉囊外翻和氣管發育不全。English Bulldog、French Bulldog、Pug最常見。慢性上呼吸道阻力增加可導致繼發性喉塌陷。",
    prognosis: "早期手術矯正（鼻孔擴大術+軟顎切短術，理想在1-2歲）預後良好，約90%的犬臨床症狀顯著改善。延遲手術至繼發性喉塌陷發生後預後變差。術後需嚴格控制體重。極端短頭型（Bulldog）即使術後仍可能有殘餘症狀。中暑為最危險併發症，炎熱環境需特別注意。"
  },
  "laryngeal paralysis": {
    definition: "喉麻痺是因喉返神經功能障礙導致杓狀軟骨和聲帶無法在吸氣時正常外展開啟的上呼吸道阻塞性疾病。老年大型犬最常見（Labrador Retriever 10歲以上），多為特發性（GOLPP，老年犬喉麻痺-多發性神經病變），少數繼發於頸部手術、外傷或腫瘤。",
    pathophysiology: "喉返神經（迷走神經分支）軸突退化→環杓背側肌去神經支配→杓狀軟骨無法在吸氣時外展→聲門裂隙狹窄→吸氣性喘鳴。代償期以增加吸氣努力維持通氣→喉部黏膜水腫和發炎→氣道進一步狹窄。運動、興奮或高溫時呼吸需求增加→失代償→呼吸困難甚至窒息。GOLPP為進行性多發性神經病變，喉麻痺僅為最早表現。",
    prognosis: "單側杓狀軟骨側化術（arytenoid lateralization/tie-back）成功率約90%，術後呼吸改善顯著。主要術後風險為吸入性肺炎（18-32%終身發生率），需終身小心餵食。GOLPP患犬後肢神經功能會進行性退化。未手術的嚴重病例有窒息風險。"
  },
  "pneumonia": {
    definition: "肺炎是肺實質（肺泡和細支氣管）的感染性或非感染性炎症。犬貓最常見為細菌性吸入性肺炎，致病菌包括Pasteurella、Bordetella、E. coli和厭氧菌。吸入性肺炎常繼發於嘔吐、巨食道症、喉麻痺或全身麻醉後。病毒性肺炎（犬流感、犬瘟熱）可繼發細菌感染。",
    pathophysiology: "病原體（細菌、病毒、真菌）或吸入物（胃酸、食物）進入下呼吸道→肺泡巨噬細胞啟動先天免疫→嗜中性球浸潤→炎症介質釋放→肺泡毛細血管通透性增加→滲出液填充肺泡→氣體交換障礙→低氧血症。吸入性肺炎的胃酸直接損傷肺泡上皮（化學性肺炎），繼發細菌感染。嚴重者進展為ARDS。"
  },
  "chronic bronchitis": {
    definition: "慢性支氣管炎定義為犬連續2個月以上大部分時間有咳嗽症狀，且排除其他已知呼吸道疾病。為中老年小型犬常見的慢性下呼吸道疾病，以氣道黏膜持續性發炎、黏液分泌過多和氣道重塑為特徵。類似人類COPD但犬不與吸菸相關。",
    pathophysiology: "不明原因的慢性氣道炎症→黏膜杯狀細胞增生和黏液腺肥大→黏液分泌過多→纖毛清除功能受損→黏液蓄積→咳嗽反射→氣道平滑肌肥厚和基底膜纖維化（氣道重塑）→管腔狹窄→氣流阻力增加→呼氣時動態氣道塌陷。反覆發炎-修復循環導致不可逆結構改變。常合併氣管塌陷。",
    prognosis: "慢性支氣管炎為不可逆疾病，治療目標為控制症狀和減緩進展。口服糖皮質激素（prednisolone）和吸入型支氣管擴張劑為一線治療。減重可顯著改善症狀。多數犬在適當管理下可維持可接受的生活品質數年。急性惡化期需積極治療。"
  },
  "feline asthma": {
    definition: "貓哮喘是貓下呼吸道的慢性嗜酸性球炎症性疾病，以可逆性支氣管收縮、氣道高反應性和黏液過度分泌為特徵。約佔貓呼吸道疾病的1-5%，2-8歲好發。暹羅貓可能有品種傾向。環境過敏原（塵蟎、貓砂粉塵、香菸煙霧、花粉）為主要誘因。",
    pathophysiology: "吸入性過敏原→氣道樹突細胞攝取抗原→活化Th2免疫反應→IL-4/IL-5/IL-13分泌→嗜酸性球募集和浸潤→IgE產生→肥大細胞脫顆粒→支氣管平滑肌收縮（即刻相，數分鐘內）→4-24小時後嗜酸性球介導的遲發相炎症→氣道黏膜水腫和黏液栓形成→氣流阻塞。慢性者氣道重塑（平滑肌肥厚、基底膜增厚）。",
    prognosis: "貓哮喘為慢性可控但不可治癒的疾病。吸入型糖皮質激素（fluticasone MDI with spacer）配合環境過敏原控制為長期管理基礎。急性發作時需注射terbutaline或短效吸入型支氣管擴張劑。多數貓在適當治療下預後良好。嚴重未控制者可發展為不可逆氣道重塑。"
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

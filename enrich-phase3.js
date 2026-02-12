// enrich-phase3.js — Robust field enrichment using position-based replacement
const fs = require('fs');

const htmlFile = 'vet-differential-diagnosis-v2.html';
let html = fs.readFileSync(htmlFile, 'utf8');

// Enrichment data: { diseaseId: { definition: "...", pathophysiology: "...", prognosis: "..." } }
// Only include fields that need enrichment
const enrichments = {
  "imha": {
    definition: "免疫介導性溶血性貧血（IMHA）是犬貓最常見的自體免疫性血液疾病，由自身抗體（IgG、IgM或補體）結合紅血球表面抗原，觸發血管外或血管內溶血，引起急性或慢性貧血。原發性IMHA無可辨識的觸發因子，繼發性可由藥物、感染或腫瘤誘發。犬發病率遠高於貓，中年雌性犬好發。"
  },
  "pancreatitis": {
    definition: "胰臟炎是胰臟腺泡細胞的發炎性疾病，由胰酶在腺泡內異常提前活化引起自身消化。急性型以胰臟水腫和壞死為特徵，伴隨全身性發炎反應，嚴重者可進展為多器官衰竭。慢性型以進行性纖維化和腺泡萎縮為主，可能導致外分泌或內分泌功能不全。犬多為急性壞死型，貓常見慢性型且常與IBD和膽管炎共存（三體炎）。"
  },
  "hypoadrenocorticism": {
    definition: "腎上腺皮質功能低下症（Addison's disease）是由腎上腺皮質被免疫介導性破壞或萎縮導致糖皮質素和鹽皮質素分泌不足的內分泌疾病。典型型同時缺乏皮質醇和醛固酮，非典型型僅缺乏皮質醇。犬以年輕至中年雌犬好發，Nova Scotia Duck Tolling Retriever和Standard Poodle有遺傳傾向。",
    prognosis: "經適當的鹽皮質素（DOCP或Fludrocortisone）和糖皮質素替代治療後，預後極佳，大多數犬可維持正常壽命和生活品質。需終生每月注射DOCP和每日口服Prednisone，定期監測電解質。Addisonian crisis若未及時治療致死率高，但穩定後長期預後良好。"
  },
  "hepatic lipidosis": {
    definition: "貓肝脂肪沉積症是貓最常見的原發性肝臟疾病，特徵為超過80%肝細胞出現嚴重脂肪空泡變性，導致肝功能障礙和膽汁淤積。通常發生在肥胖貓經歷厭食超過3-7天後，因脂肪動員過快超越肝臟代謝能力所致。也可繼發於胰臟炎、IBD或膽管炎。"
  },
  "portosystemic shunt": {
    definition: "肝門脈分流（PSS）是指門脈血液經異常血管通道繞過肝臟直接匯入全身靜脈循環的先天或後天性疾病。先天性以單一肝外分流（小型犬）或肝內分流（大型犬）為主，後天性多為肝硬化引起的多發性分流。門脈血液未經肝臟解毒即進入全身循環，導致肝腦病變、尿酸銨結石及發育遲緩。",
    prognosis: "先天性肝外單一分流經手術（Ameroid constrictor或cellophane banding）治療後長期預後極佳，85-95%的犬術後可停藥並恢復正常生活。肝內分流手術難度較高但介入放射學持續進步。純內科管理僅能控制症狀，中位存活較短。多發性後天分流預後取決於原發肝病。"
  },
  "gastric dilatation-volvulus": {
    definition: "胃擴張扭轉（GDV）是犬最危急的外科急症之一，胃先發生氣體或液體過度擴張，隨後沿食道-幽門軸順時針旋轉，導致胃入口和出口同時阻塞。扭轉壓迫後腔靜脈和門脈引起嚴重低血壓休克、胃壁缺血壞死和脾臟扭轉。大型深胸犬種（Great Dane、German Shepherd）好發。"
  },
  "parvovirus": {
    definition: "犬小病毒腸炎（CPV-2）是犬最具傳染性和致死性的病毒性腸炎，由CPV-2a/2b/2c變異株引起。病毒主要攻擊快速分裂細胞（腸道隱窩上皮和骨髓淋巴前驅細胞），導致嚴重出血性腹瀉、白血球減少和免疫抑制。6週至6月齡未完成疫苗接種的幼犬最易感，病毒在環境中可存活數月。",
    prognosis: "經積極住院治療（IV輸液、抗嘔吐、早期腸道營養、廣效抗生素），存活率可達85-95%。未治療者死亡率>90%。預後不良指標包括嚴重白血球減少（<1000/μL）、低白蛋白血症和併發敗血症。Rottweiler和Doberman品種重症比例較高。恢復後產生長期免疫。"
  },
  "pyometra": {
    definition: "子宮蓄膿是未絕育母犬貓最常見的生殖系統急症，在發情後黃體期（1-3個月）因黃體素促進子宮內膜增生並抑制子宮免疫反應，細菌（主要E. coli）經子宮頸上行感染導致膿液蓄積。分開放型（陰道排膿）和閉鎖型（膿液蓄積子宮內，更危險可致破裂和腹膜炎）。"
  },
  "hyperthyroidism": {
    definition: "甲狀腺功能亢進是中老年貓最常見的內分泌疾病（8歲以上發病率約10%），由甲狀腺功能性腺瘤（>95%良性）引起過量T4分泌。過量甲狀腺素加速全身代謝率，影響心血管、消化、神經肌肉等多系統。雙側甲狀腺受累約佔70%。犬甲亢罕見，多為甲狀腺癌。"
  },
  "hypothyroidism": {
    definition: "甲狀腺功能低下是犬最常見的內分泌疾病之一，95%以上為原發性，由淋巴球性甲狀腺炎（免疫介導性，50%）或特發性甲狀腺萎縮（50%）導致甲狀腺組織漸進性破壞、T4產量不足。好發於中大型犬（Golden Retriever、Doberman），4-10歲發病。貓原發性甲低罕見。",
    prognosis: "經Levothyroxine替代治療（犬0.02 mg/kg PO q12h）後預後極佳，大多數臨床症狀在4-8週內改善，皮膚和毛髮恢復可能需3-6個月。需終生用藥和定期監測T4/TSH濃度。治療後預期壽命正常。神經性甲低（myxedema coma）罕見但若未及時治療可致命。"
  },
  "inflammatory bowel disease": {
    definition: "發炎性腸病（IBD）是犬貓慢性胃腸道疾病的最常見原因之一，特徵為腸道黏膜固有層的慢性發炎細胞浸潤（淋巴球、漿細胞、嗜酸性球或巨噬細胞），病因推測為腸道菌群失調、飲食抗原和遺傳易感性之間的免疫調節異常。確診需組織活檢，且需先排除寄生蟲、食物反應性腸病和感染。",
    prognosis: "大多數犬貓IBD經飲食管理（新型蛋白或水解蛋白飲食）和免疫抑制治療後可獲得良好控制，約60-70%達到臨床緩解。嗜酸性球型反應通常較佳，肉芽腫型較差。低蛋白血症（Alb<2.0 g/dL）為預後不良指標。貓需警惕IBD到小細胞淋巴瘤的轉化風險。"
  },
  "dilated cardiomyopathy": {
    definition: "擴張性心肌病（DCM）是犬最常見的原發性心肌病，特徵為心室進行性擴張和收縮功能下降（縮短分數FS<25%），最終導致充血性心衰竭。大型和巨型犬好發（Doberman、Great Dane、Irish Wolfhound），Doberman有特殊的隱匿期心律不整型DCM。少數與牛磺酸缺乏或穀物飲食相關。"
  },
  "hypertrophic cardiomyopathy": {
    definition: "肥厚性心肌病（HCM）是貓最常見的心臟疾病（盛行率約15%），特徵為左心室壁和/或心室中隔增厚>6mm（排除高血壓和甲亢繼發原因後）。肥厚導致舒張功能障礙、左心房擴大和充填壓力升高，進而引起充血性心衰竭和主動脈血栓栓塞。Maine Coon和Ragdoll有已知的MYBPC3基因突變。"
  },
  "lymphoma": {
    definition: "淋巴瘤是犬貓最常見的造血系統惡性腫瘤，起源於淋巴組織中的T或B淋巴細胞惡性增殖。犬多見多中心型（週邊淋巴結腫大），貓多見消化道型和縱膈型。犬淋巴瘤佔所有犬腫瘤的7-24%，中位發病年齡6-9歲。貓淋巴瘤與FeLV感染相關，消化道型常與IBD鑑別困難。免疫表型（B-cell vs T-cell）顯著影響預後。",
    pathophysiology: "淋巴細胞在基因突變驅動下發生克隆性惡性增殖，脫離正常細胞凋亡調控。惡性淋巴細胞從原發部位經血液和淋巴系統擴散至全身淋巴結、脾臟、肝臟、骨髓及其他器官。犬多中心型以B-cell居多（60-80%），預後較T-cell佳。貓消化道低度惡性小細胞淋巴瘤以T-cell為主。腫瘤浸潤導致器官功能障礙和副腫瘤症候群（高血鈣、貧血）。"
  },
  "diabetes mellitus": {
    definition: "糖尿病是犬貓常見的內分泌疾病，犬以第一型（胰島β細胞免疫介導性破壞，胰島素絕對缺乏）為主，貓以第二型（胰島素阻抗加β細胞功能漸進喪失）為主。持續性高血糖導致滲透性利尿、蛋白質和脂肪分解代償以及長期併發症（白內障、神經病變、酮酸中毒）。"
  },
  "insulinoma": {
    definition: "胰島素瘤是胰臟β細胞的功能性神經內分泌腫瘤，自主性過度分泌胰島素導致反覆低血糖發作。犬較常見（中大型犬、中老年），約60-70%為惡性（已有轉移），但生物學行為通常較緩慢。診斷依據為低血糖時不適當的高胰島素血症。",
    pathophysiology: "胰島β細胞腫瘤細胞失去正常葡萄糖感應負回饋機制，持續自主性分泌胰島素。過量胰島素促進葡萄糖進入細胞、抑制肝醣分解和糖質新生，導致血糖持續下降。低血糖觸發反調節激素（腎上腺素、升糖素、皮質醇）釋放，產生震顫、虛弱等症狀，嚴重時腦部葡萄糖不足引起癲癇和昏迷。"
  },
  "hypoglycemia": {
    definition: "低血糖症是指血糖濃度低於正常範圍（犬<60 mg/dL、貓<50 mg/dL），導致組織特別是中樞神經系統葡萄糖供應不足的代謝急症。病因多樣，包括胰島素瘤、敗血症、肝衰竭、新生兒低血糖、Addison's disease、醫源性胰島素過量等。腦組織幾乎完全依賴葡萄糖，故低血糖可迅速引起神經症狀。",
    pathophysiology: "血糖降至臨界值以下時，反調節機制（升糖素促肝醣分解、腎上腺素促糖質新生和脂肪分解、皮質醇和生長激素拮抗胰島素）被啟動，產生交感神經樣症狀（震顫、心搏過速）。若血糖持續下降或反調節耗竭，腦細胞因葡萄糖不足而功能障礙，表現為共濟失調、視力喪失、癲癇直至昏迷。慢性反覆低血糖可導致永久性神經損傷。"
  },
  "hyperglycemia": {
    definition: "高血糖症是指血糖濃度持續高於正常上限（犬>120 mg/dL、貓>180 mg/dL空腹值），最常見原因為糖尿病，其他包括應激性高血糖（貓特別常見）、腎上腺皮質功能亢進、肢端肥大症及醫源性（類固醇使用）。持續高血糖造成滲透性利尿和長期器官損傷。",
    pathophysiology: "胰島素不足或周邊組織胰島素阻抗導致葡萄糖轉運蛋白表達降低，骨骼肌和脂肪組織攝取葡萄糖能力下降。當血糖超過腎糖閾（犬約180 mg/dL、貓約280 mg/dL），產生糖尿和滲透性利尿。細胞能量不足觸發脂肪分解和蛋白質分解代償，長期可導致白內障（犬）、糖尿病性神經病變（貓）和酮酸中毒。"
  },
  "hypercalcemia": {
    definition: "高血鈣症是指總鈣>12 mg/dL或離子化鈣>1.4 mmol/L，犬最常見原因為惡性腫瘤相關（淋巴瘤、肛囊腺癌）、原發性副甲狀腺功能亢進、腎衰竭和維生素D中毒（Cholecalciferol鼠藥）。慢性高血鈣導致腎小管鈣化和不可逆腎損傷，為需緊急處理的電解質異常。",
    pathophysiology: "高血鈣主要透過三種機制產生：(1)PTHrP（腫瘤分泌）或PTH（副甲狀腺亢進）增加骨骼鈣釋放和腎小管鈣再吸收；(2)維生素D過量增加腸道鈣吸收；(3)骨溶解性轉移直接釋放鈣。高鈣降低神經肌肉興奮性（虛弱、便秘、心搏過緩），在腎小管沉積導致腎源性尿崩症和漸進性腎間質纖維化。"
  },
  "hypocalcemia": {
    definition: "低血鈣症是指離子化鈣<1.0 mmol/L的電解質異常，主要原因為副甲狀腺功能低下（甲狀腺術後醫源性最常見）、泌乳期低血鈣（eclampsia，哺乳期小型犬）、急性胰臟炎和乙二醇中毒。離子化鈣急劇下降可引起致命性肌肉痙攣和心律不整。",
    pathophysiology: "細胞外鈣離子濃度降低使細胞膜鈉離子通道閾值電位降低，神經和肌肉細胞興奮性異常增高。臨床表現為面部搔癢抽搐、四肢僵硬到全身性肌肉痙攣和癲癇樣發作。心臟方面低血鈣延長QT間期，嚴重可導致心律不整。PTH分泌不足時，腸道鈣吸收、骨骼鈣動員和腎小管鈣再吸收均減少，形成持續性低血鈣。",
    prognosis: "泌乳期低血鈣（eclampsia）經鈣劑靜脈注射後反應迅速，預後極佳但需停止哺乳。甲狀腺術後暫時性副甲狀腺功能低下通常數週內恢復，永久性者需終生口服鈣和維生素D。急性胰臟炎相關低血鈣為預後不良指標。嚴重低血鈣若未及時治療可致心臟驟停。"
  },
  "hypokalemia": {
    definition: "低血鉀症是指血清鉀<3.5 mEq/L的電解質異常，最常見於慢性腎病（貓多尿性排鉀增加）、嘔吐腹瀉、利尿劑使用和DKA治療初期（胰島素驅使鉀進入細胞）。鉀是維持細胞膜靜息電位的關鍵離子，低血鉀導致細胞膜超極化，影響骨骼肌、平滑肌和心肌功能。",
    pathophysiology: "細胞外鉀離子濃度降低使細胞膜靜息電位更負（超極化），增加動作電位產生所需的閾值刺激。臨床表現為骨骼肌無力（典型：貓頸部下垂性肌病、犬廣泛性肌無力），心臟方面延長復極化時間（ECG上T波扁平到U波出現），嚴重時可導致呼吸肌麻痺和橫紋肌溶解。腎臟持續低鉀可引起低鉀性腎病。",
    prognosis: "輕中度低血鉀經口服或靜脈補鉀後通常迅速改善。靜脈補鉀速率不可超過0.5 mEq/kg/hr。慢性腎病相關低血鉀需長期口服鉀補充（Potassium gluconate）。嚴重低血鉀合併呼吸肌無力或心律不整需緊急處理，延遲治療可危及生命。"
  },
  "hyperkalemia": {
    definition: "高血鉀症是指血清鉀>5.5 mEq/L的電解質緊急狀態，最常見原因為尿道阻塞（公貓）、急性腎衰竭、腎上腺皮質功能低下（Addison's disease）和DKA。鉀是決定心肌電生理活動的關鍵離子，急性高血鉀可在數分鐘內引起致命性心律不整和心跳停止。",
    pathophysiology: "細胞外鉀濃度升高使靜息膜電位部分去極化，心肌細胞傳導速度減慢且不均勻。ECG依嚴重度漸進變化：T波高尖(>6.5 mEq/L)到P波消失(>7.0)到QRS增寬(>8.0)到正弦波型到心室顫動或停搏。骨骼肌方面嚴重高血鉀導致弛緩性癱瘓（去極化阻斷）。腎臟是排鉀主要器官，尿量減少是最常見病理機制。",
    prognosis: "高血鉀為可逆性急症。處理流程：Calcium gluconate保護心臟（不降鉀），Insulin加Dextrose驅鉀入細胞，解除原因（導尿、輸液恢復尿量）。尿道阻塞解除後預後通常良好。Addison's disease穩定後長期預後佳。急性腎衰竭預後取決於原發病因和腎功能恢復。"
  }
};

// Helper: find field value boundaries in the HTML
function findFieldBounds(html, diseaseId, fieldName) {
  // Find the disease entry
  const searchStr = '"' + diseaseId + '":';
  const diseaseIdx = html.indexOf(searchStr);
  if (diseaseIdx === -1) return null;

  // Find the disease block boundaries
  const braceStart = html.indexOf('{', diseaseIdx);
  let depth = 0, blockEnd = braceStart;
  for (let i = braceStart; i < html.length; i++) {
    if (html[i] === '{') depth++;
    else if (html[i] === '}') { depth--; if (depth === 0) { blockEnd = i + 1; break; } }
  }

  // Find the field within this block
  const block = html.substring(braceStart, blockEnd);
  const fieldSearch = fieldName + ': "';
  const fieldOffset = block.indexOf(fieldSearch);
  if (fieldOffset === -1) return null;

  const valueStart = braceStart + fieldOffset + fieldSearch.length;

  // Find the end of the value (handle escaped quotes)
  let i = valueStart;
  while (i < html.length) {
    if (html[i] === '\\') { i += 2; continue; }
    if (html[i] === '"') break;
    i++;
  }
  const valueEnd = i;

  return { start: valueStart, end: valueEnd, oldValue: html.substring(valueStart, valueEnd) };
}

let count = 0;
let total = 0;

// Process in reverse order of position to avoid offset issues
const allReplacements = [];

for (const [diseaseId, fields] of Object.entries(enrichments)) {
  for (const [fieldName, newValue] of Object.entries(fields)) {
    total++;
    const bounds = findFieldBounds(html, diseaseId, fieldName);
    if (!bounds) {
      console.error(`NOT FOUND: ${diseaseId}.${fieldName}`);
      continue;
    }
    allReplacements.push({
      diseaseId,
      fieldName,
      start: bounds.start,
      end: bounds.end,
      oldLen: bounds.oldValue.length,
      newValue: newValue.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
    });
  }
}

// Sort by position descending (replace from end to start to maintain positions)
allReplacements.sort((a, b) => b.start - a.start);

for (const rep of allReplacements) {
  html = html.substring(0, rep.start) + rep.newValue + html.substring(rep.end);
  count++;
  console.log(`✓ ${rep.diseaseId}.${rep.fieldName}: ${rep.oldLen} → ${rep.newValue.length} chars`);
}

fs.writeFileSync(htmlFile, html, 'utf8');
console.log(`\n=== Enriched ${count}/${total} fields ===`);

// Validate
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
try { new Function(scriptMatch[1]); console.log('✓ JavaScript syntax valid'); }
catch (e) { console.error('✗ Syntax ERROR:', e.message); }

console.log('Diseases:', (html.match(/^\s+zh:\s*"/gm)||[]).length);
['</script>','</body>','</html>'].forEach(t => console.log(html.includes(t) ? `OK ${t}` : `MISSING ${t}`));

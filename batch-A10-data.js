// batch-A10-data.js — 最後9種疾病結構化資料（神經/骨科/腫瘤/其他）
module.exports = {
  "thymic-lymphoma": {
    zh: "胸腺淋巴瘤",
    en: "Thymic (Mediastinal) Lymphoma",
    definition: "起源於胸腺或前縱膈淋巴組織的惡性腫瘤，是貓最常見的縱膈腫塊。貓以T細胞型為主，常見於年輕FeLV陽性貓。犬則較少見。臨床表現以呼吸困難和胸腔積液為主要特徵，化學治療為主要治療方式。",
    synonyms: ["縱膈淋巴瘤", "前縱膈淋巴瘤", "Mediastinal Lymphoma", "Anterior Mediastinal Lymphoma"],
    epidemiology: {
      species: "貓為主（佔貓淋巴瘤10-20%），犬較少見",
      age: "貓：年輕（2-3歲，FeLV相關）或老年（>10歲）雙峰分佈；犬：中老年",
      sex: "無明顯性別傾向",
      riskFactors: ["貓白血病病毒（FeLV）感染", "年輕貓", "暹羅貓和東方短毛品種", "犬：金毛獵犬、拳師犬"]
    },
    clinicalPresentation: {
      history: ["漸進性呼吸困難", "運動不耐受", "食慾下降和體重減輕", "吞嚥困難或反流", "咳嗽"],
      physicalExam: ["呼吸急促和呼吸困難", "胸部聽診心音和肺音減弱（胸腔積液）", "頸部前方胸廓可觸及腫塊", "胸廓前部叩診呈濁音", "可能有頭頸部水腫（前腔靜脈症候群）"]
    },
    pathophysiology: "胸腺淋巴瘤起源於胸腺內T淋巴球（貓）或B淋巴球（犬部分）的惡性轉化。在FeLV感染的貓中，病毒整合入宿主基因組激活原癌基因（特別是c-myc），導致T細胞不受控制增殖。腫瘤在前縱膈快速擴張，壓迫氣管和食道導致呼吸困難和吞嚥障礙。腫瘤刺激胸膜產生大量滲出液（胸腔積液），進一步壓迫肺葉。壓迫前腔靜脈可導致頭頸部靜脈回流受阻（前腔靜脈症候群）。腫瘤細胞可能產生異位副腫瘤激素導致高鈣血症（犬較常見）。",
    diagnosis: {
      overview: "胸腔影像學結合細針穿刺細胞學或胸水分析確診",
      differentials: ["胸腺上皮腫瘤（thymoma）", "異位甲狀腺腫瘤", "心基底腫瘤", "胸腔膿瘍", "縱膈肉芽腫"],
      initialDB: ["胸部X光（前縱膈腫塊+胸腔積液）", "FeLV/FIV檢測（貓）", "CBC/血液生化（可能見高鈣血症）", "胸水分析和細胞學"],
      advanced: ["超音波引導細針穿刺（FNA）細胞學", "流式細胞術（免疫表型分析T/B細胞）", "胸部CT（評估腫瘤範圍和血管侵犯）", "骨髓穿刺（分期）"]
    },
    treatment: {
      overview: "化學治療為主要治療方式，手術僅適用於胸腺上皮腫瘤",
      acute: ["胸腔積液引流（改善呼吸）", "氧氣支持", "高鈣血症處理：生理食鹽水利尿+Furosemide"],
      chronic: ["CHOP方案化療（Cyclophosphamide + Doxorubicin + Vincristine + Prednisolone）", "貓單藥化療：Chlorambucil + Prednisolone（年老或狀態差者）", "放射治療（輔助或化療抵抗型）", "定期追蹤胸部X光和血液檢查"]
    },
    prognosis: "化療反應率高（70-80%），達完全緩解的貓中位存活時間約12-32個月。FeLV陽性貓預後較FeLV陰性者差。犬的縱膈淋巴瘤預後中等，與T/B細胞分型相關。未治療者存活時間僅數週。",
    pearls: ["年輕貓+前縱膈腫塊+胸腔積液=首先排除FeLV相關淋巴瘤", "胸腺淋巴瘤（化療治療）vs 胸腺上皮腫瘤（手術治療）的鑑別至關重要——細胞學或流式細胞術可區分", "化療反應通常非常迅速——呼吸困難可在開始Prednisolone後24-48小時內改善"],
    diagnosticAlgorithm: {
      title: "胸腺淋巴瘤 診斷流程",
      steps: [
        { step: 1, action: "胸部影像", details: "胸部X光確認前縱膈腫塊和胸腔積液", findings: ["前縱膈腫塊", "胸腔積液"] },
        { step: 2, action: "穿刺細胞學", details: "超音波引導FNA或胸水細胞學", findings: ["大量淋巴母細胞", "流式細胞術確認T/B分型"] },
        { step: 3, action: "FeLV/FIV+分期", details: "FeLV/FIV檢測、血液生化、骨髓穿刺", findings: ["FeLV狀態", "高鈣血症（犬較常見）"] },
        { step: 4, action: "開始化療", details: "穩定患者後開始CHOP或改良方案化療", findings: ["化療反應評估", "胸部X光追蹤"] }
      ]
    },
    monitoring: ["胸部X光（化療期間q2-4週評估腫瘤縮小和積液）", "CBC（化療前每次確認白血球足夠）", "血清鈣濃度（犬，監測副腫瘤高鈣血症）", "FeLV病毒載量（貓，評估預後）"],
    reference: "Frontiers Vet Sci (2020) 7:444; Royal Canin Academy - Feline Mediastinal Lymphoma; VSSO - Thoracic Tumors"
  },

  "splenic-torsion": {
    zh: "脾臟扭轉",
    en: "Splenic Torsion",
    definition: "脾臟沿其血管蒂軸旋轉導致血流受阻的急性腹部急症。可為原發性（單獨發生）或繼發於胃擴張-扭轉（GDV）。大型深胸犬最易發生，症狀包括急性腹痛、脾臟腫大和可能的血液動力學不穩定。脾臟切除為治療首選。",
    synonyms: ["脾扭轉", "脾臟扭轉症", "Splenic Torsion", "Torsion of the Spleen"],
    epidemiology: {
      species: "犬（貓極罕見）",
      age: "中年至老年大型犬",
      sex: "無明顯性別傾向",
      riskFactors: ["大型深胸犬（大丹犬、德國牧羊犬、聖伯納犬）", "胃擴張-扭轉（GDV）病史", "脾臟腫大（脾臟腫瘤、脾臟血腫）", "既往脾臟切除後對側扭轉（罕見）"]
    },
    clinicalPresentation: {
      history: ["急性腹部疼痛和不安", "食慾廢絕和嘔吐", "精神沉鬱", "腹部膨脹", "慢性型可表現為間歇性厭食和嗜睡"],
      physicalExam: ["腹部觸診疼痛", "脾臟明顯腫大（可觸及）", "黏膜蒼白（貧血或休克）", "心搏過速", "腹部膨脹", "可能有腹水"]
    },
    pathophysiology: "脾臟沿其血管蒂（脾動脈和脾靜脈）旋轉，首先壓迫低壓的靜脈回流，導致脾臟鬱血性腫脹。持續扭轉後動脈供血也受阻，引起脾臟缺血和壞死。大量血液滯留在腫脹的脾臟中（可達體循環血量的30%），導致有效循環血量下降和低血容量性休克。脾臟壞死釋放的血栓素和發炎介質可引發瀰漫性血管內凝血（DIC）。慢性部分扭轉可導致脾臟被動鬱血和血腫形成。脾臟切除後脾韌帶鬆弛可增加日後胃扭轉的風險。",
    diagnosis: {
      overview: "腹部超音波和X光結合臨床表現進行診斷",
      differentials: ["脾臟腫瘤（血管肉瘤）", "脾臟血腫", "胃擴張-扭轉（GDV）", "腸繫膜扭轉", "腹腔內出血其他原因"],
      initialDB: ["腹部X光（脾臟腫大、異位）", "腹部超音波（脾臟腫大、回聲改變、脾門血流異常）", "CBC（貧血、血小板減少）", "血液生化和凝血功能"],
      advanced: ["超音波都卜勒（脾臟血管血流評估——減少或消失）", "腹部CT（精確評估扭轉程度和血管狀態）", "腹腔穿刺（排除腹腔內出血）"]
    },
    treatment: {
      overview: "脾臟切除為確定性治療，術前需穩定患者",
      acute: ["積極靜脈輸液穩定血流動力學", "輸血（PCV <20% 或進行性貧血）", "止痛：Opioids（Methadone 0.1-0.3 mg/kg IV）", "糾正凝血異常"],
      chronic: ["緊急脾臟切除術（splenectomy）——不要嘗試復位", "術中評估胃的位置和韌帶鬆弛度", "考慮同時進行預防性胃固定術（gastropexy）", "脾臟送病理檢查（排除潛在腫瘤）"]
    },
    prognosis: "單純脾臟扭轉經手術切除後預後良好，多數犬可完全恢復。合併GDV者預後較差（GDV整體死亡率約20%）。術後需監測脾臟切除後可能的日後GDV風險。若脾臟扭轉為脾臟腫瘤（特別是血管肉瘤）繼發，則預後取決於腫瘤性質。",
    pearls: ["脾臟扭轉後日後GDV風險增加——手術時應考慮同時做預防性胃固定術", "超音波都卜勒見脾臟血管血流消失是確診的關鍵發現", "扭轉的脾臟不要嘗試復位——直接切除，因為再灌注損傷和壞死組織釋放毒素可能致命"],
    diagnosticAlgorithm: {
      title: "脾臟扭轉 診斷流程",
      steps: [
        { step: 1, action: "臨床懷疑", details: "大型犬急性腹痛、脾臟腫大", findings: ["腹部觸診疼痛+脾腫大", "心搏過速+黏膜蒼白"] },
        { step: 2, action: "影像學", details: "腹部超音波評估脾臟位置和血流", findings: ["脾臟異位+回聲改變", "都卜勒：脾門血流減少或消失"] },
        { step: 3, action: "穩定患者", details: "輸液、輸血、止痛", findings: ["血流動力學穩定", "凝血功能評估"] },
        { step: 4, action: "緊急脾臟切除", details: "手術切除脾臟，考慮同時胃固定術", findings: ["切除脾臟送病理", "評估是否需要胃固定術"] }
      ]
    },
    monitoring: ["術後PCV/TP q4-6h×24h", "心電圖監測（脾臟切除後48h內心律不整風險）", "凝血功能（DIC風險）", "長期追蹤GDV風險（大型犬）"],
    reference: "Vet Med Illinois - Splenic Torsion; dvm360 - Primary Splenic Torsion in Dogs; Today's Vet Practice - Canine Abdominal Organ Torsions"
  },

  "benign-prostatic-hyperplasia": {
    zh: "良性前列腺增生",
    en: "Benign Prostatic Hyperplasia (BPH)",
    definition: "未結紮公犬最常見的前列腺疾病，因雄性激素（特別是雙氫睪固酮DHT）長期刺激導致前列腺組織非腫瘤性增生和腫大。發生率隨年齡增長急遽上升，6歲以上未結紮公犬80%以上有BPH，多數無臨床症狀。結紮為最有效治療。",
    synonyms: ["前列腺肥大", "BPH", "良性前列腺肥大", "Prostatic Hyperplasia"],
    epidemiology: {
      species: "犬（僅未結紮公犬），貓極罕見",
      age: ">6歲發生率80%，>9歲95%",
      sex: "僅未結紮公犬",
      riskFactors: ["未結紮（最關鍵因素）", "年齡增長", "雄性激素/雌激素比例改變"]
    },
    clinicalPresentation: {
      history: ["多數無臨床症狀（偶然發現）", "包皮滴血或血性分泌物", "血精", "排便困難（扁平狀糞便）", "偶有排尿困難"],
      physicalExam: ["直腸觸診：前列腺對稱性腫大、無痛、表面光滑", "包皮口可見血性或漿液性分泌物", "大便可能呈扁帶狀（前列腺壓迫直腸）", "排尿通常正常"]
    },
    pathophysiology: "未結紮公犬的睪丸持續分泌睪固酮，進入前列腺上皮細胞後被5-α還原酶轉化為生物活性更強的雙氫睪固酮（DHT）。DHT與細胞核內雄性激素受體結合，促進前列腺上皮細胞和基質細胞增殖。隨年齡增長，睪固酮和雌激素的比例改變（睪固酮相對下降、雌激素相對上升），雌激素增加前列腺對DHT的敏感性，進一步促進增生。前列腺呈對稱性、離心性增大，向背側壓迫直腸（排便困難）而非壓迫尿道（與人類不同）。增生的腺體可出現囊性變化和自發性出血。",
    diagnosis: {
      overview: "直腸觸診+影像學+排除其他前列腺疾病",
      differentials: ["前列腺炎（急性/慢性）", "前列腺腺癌", "前列腺囊腫", "前列腺膿瘍"],
      initialDB: ["直腸觸診（對稱性腫大、無痛）", "腹部X光（前列腺陰影增大）", "腹部超音波（對稱性增大、均勻回聲或散在囊性變化）", "尿液分析和培養（排除感染）"],
      advanced: ["前列腺超音波引導FNA或切片（排除腫瘤）", "精液分析（血精評估）", "前列腺沖洗液細胞學和培養", "CPSE（犬前列腺特異性酯酶）血清標記物"]
    },
    treatment: {
      overview: "結紮是最有效的治療，非結紮犬可用藥物管理",
      acute: ["併發前列腺炎時：抗生素（選擇能穿透前列腺的藥物如Enrofloxacin或TMP-SMX）"],
      chronic: ["結紮術（castration）——前列腺在結紮後數週內明顯縮小（50-70%）", "種公犬藥物管理：Finasteride 0.1-0.5 mg/kg PO q24h（5-α還原酶抑制劑）", "Osaterone acetate 0.25-0.5 mg/kg PO q24h × 7天（歐洲核准）", "Deslorelin implant（GnRH激動劑，化學去勢效果）"]
    },
    prognosis: "結紮後BPH幾乎100%可緩解，前列腺在2-3個月內縮回正常大小。藥物治療有效但停藥後復發。BPH本身為良性，不會轉化為前列腺癌。未治療的嚴重BPH可能併發前列腺炎或前列腺囊腫。",
    pearls: ["未結紮老年公犬+對稱性無痛前列腺腫大=BPH——不要急著做切片，先結紮觀察3個月", "犬BPH壓迫的是直腸（排便困難）而非尿道（排尿困難）——這與人類BPH不同", "已結紮犬出現前列腺腫大=不是BPH，要高度懷疑前列腺癌"],
    diagnosticAlgorithm: {
      title: "良性前列腺增生 診斷流程",
      steps: [
        { step: 1, action: "直腸觸診", details: "確認前列腺大小、對稱性和疼痛度", findings: ["對稱性腫大", "無痛、表面光滑"] },
        { step: 2, action: "影像學", details: "X光和超音波評估前列腺", findings: ["均勻性增大", "可能散在囊性變化"] },
        { step: 3, action: "排除感染和腫瘤", details: "尿液培養、可能需要FNA", findings: ["尿液培養陰性", "細胞學：增生上皮無異型"] },
        { step: 4, action: "治療", details: "結紮或藥物管理", findings: ["結紮後前列腺縮小50-70%", "定期觸診追蹤"] }
      ]
    },
    monitoring: ["結紮後直腸觸診（1個月和3個月確認縮小）", "藥物治療者q3-6月前列腺超音波", "尿液分析（監測繼發感染）", "精液分析（種公犬評估精液品質）"],
    reference: "Merck Vet Manual - Benign Prostatic Hyperplasia in Dogs; PMC (2025) New Approaches to BPH; VCA Hospitals - Prostatic Disease in Dogs"
  },

  "testicular-tumor": {
    zh: "睪丸腫瘤",
    en: "Testicular Tumor",
    definition: "犬第二常見的腫瘤類型，包括三種主要類型：間質細胞瘤（Leydig cell tumor，最常見~50%）、精上皮瘤（Seminoma，~42%）和支持細胞瘤（Sertoli cell tumor，~8%）。多為良性或低度惡性，結紮（雙側睪丸切除）通常可治癒。隱睪犬罹患精上皮瘤和支持細胞瘤的風險顯著增加。",
    synonyms: ["睾丸腫瘤", "精巢腫瘤", "Testicular Neoplasia", "Testicular Cancer"],
    epidemiology: {
      species: "犬（貓極罕見）",
      age: "中老年未結紮公犬（平均10歲）",
      sex: "僅未結紮公犬",
      riskFactors: ["未結紮", "隱睪症（精上皮瘤和支持細胞瘤風險增加10-14倍）", "品種：拳師犬、德國牧羊犬、阿富汗獵犬、威瑪犬、喜樂蒂牧羊犬"]
    },
    clinicalPresentation: {
      history: ["單側睪丸腫大（或觸不到隱睪側睪丸）", "對側睪丸萎縮", "支持細胞瘤雌性化症狀：對稱性脫毛、乳腺腫大、包皮下垂", "多數間質細胞瘤無臨床症狀（偶然發現）"],
      physicalExam: ["單側睪丸腫大或結節", "對側睪丸萎縮（雌激素抑制效應）", "雌性化徵兆（支持細胞瘤）：對稱性非搔癢性脫毛、色素沉著", "乳腺增生", "隱睪犬腹腔內可觸及腫塊"]
    },
    pathophysiology: "三種腫瘤的發病機制各異：(1)間質細胞瘤（Leydig cell）：睪丸間質內產生睪固酮的細胞良性增殖，多數功能性但臨床影響小，幾乎不轉移；(2)精上皮瘤（Seminoma）：精原細胞的腫瘤性增殖，類似人類精上皮瘤，隱睪是重要風險因子，轉移率<15%；(3)支持細胞瘤（Sertoli cell）：支持精子發育的支持細胞增殖，約20-30%為功能性（分泌雌激素），高雌激素可導致骨髓抑制（再生不良性貧血，為最嚴重併發症）。隱睪使睪丸長期處於較高的腹腔溫度環境，增加腫瘤性轉化風險。",
    diagnosis: {
      overview: "觸診+超音波+必要時活檢確診，分期評估轉移",
      differentials: ["睪丸炎/副睪炎", "睪丸扭轉", "精索腫瘤", "腹股溝疝氣（隱睪犬）"],
      initialDB: ["雙側睪丸觸診和比較", "睪丸超音波（腫塊特徵、血流）", "CBC（支持細胞瘤可見貧血、白血球減少、血小板減少）", "血液生化"],
      advanced: ["胸部X光（肺轉移篩檢）", "腹部超音波（淋巴結轉移、隱睪定位）", "雌激素濃度測定（支持細胞瘤）", "術後組織病理確定腫瘤類型"]
    },
    treatment: {
      overview: "雙側睪丸切除（結紮）為標準治療，對多數病例具治癒性",
      acute: ["嚴重骨髓抑制（支持細胞瘤雌激素中毒）：輸血+支持性治療", "隱睪犬腹腔內腫瘤扭轉：緊急手術"],
      chronic: ["雙側睪丸切除術（orchidectomy/castration）", "腹腔內隱睪需剖腹探查取出", "轉移性腫瘤：化學治療（Cisplatin或Carboplatin）", "術後監測雌性化症狀改善和骨髓恢復"]
    },
    prognosis: "間質細胞瘤和無轉移的精上皮瘤、支持細胞瘤在結紮後預後極佳（治癒率>95%）。已轉移者（<15%）預後較差但仍可嘗試化療。支持細胞瘤合併嚴重骨髓抑制（再生不良性貧血）預後不良，即使手術去除腫瘤，骨髓恢復仍需數週至數月，部分犬不可逆。",
    pearls: ["隱睪犬的睪丸腫瘤風險增加10-14倍——隱睪犬即使無症狀也建議結紮", "支持細胞瘤的'雌性化'三徵：對稱性脫毛+乳腺增生+對側睪丸萎縮——高度提示此診斷", "支持細胞瘤最危險的併發症不是轉移，而是雌激素導致的骨髓抑制——CBC是必做檢查"],
    diagnosticAlgorithm: {
      title: "睪丸腫瘤 診斷流程",
      steps: [
        { step: 1, action: "觸診+超音波", details: "雙側睪丸觸診比較，超音波評估腫塊", findings: ["單側腫大+對側萎縮", "超音波見實質性或囊性腫塊"] },
        { step: 2, action: "CBC+雌激素", details: "血液檢查評估骨髓功能和雌激素影響", findings: ["骨髓抑制（支持細胞瘤）", "雌性化徵兆"] },
        { step: 3, action: "分期檢查", details: "胸部X光和腹部超音波評估轉移", findings: ["淋巴結轉移", "肺轉移（罕見）"] },
        { step: 4, action: "手術+病理", details: "雙側睪丸切除，術後病理確定腫瘤類型", findings: ["組織病理分型", "切緣評估"] }
      ]
    },
    monitoring: ["CBC（術後q2-4週監測骨髓恢復，支持細胞瘤）", "雌性化症狀追蹤（脫毛應在術後2-4個月改善）", "腹部和胸部影像（q3-6月×1年，監測轉移）", "體格檢查（包皮下垂和乳腺增生消退）"],
    reference: "VCA Hospitals - Testicular Tumors; VSSO - Testicular Tumors; BluePearl - Testicular Tumors in Dogs"
  },

  "anal-furunculosis": {
    zh: "肛周瘻管",
    en: "Perianal Fistula (Anal Furunculosis)",
    definition: "肛門周圍組織形成慢性、深層、引流性瘻管和潰瘍的免疫介導性疾病。以德國牧羊犬最為好發（佔病例80%以上），被認為與腸道免疫失調（類似人類克隆氏病）有關。環孢素為一線治療藥物，手術為難治性病例的備選方案。",
    synonyms: ["肛門瘻管", "肛瘻", "Perianal Fistula", "Perianal Sinus"],
    epidemiology: {
      species: "犬（貓極罕見）",
      age: "中年至老年（平均5-8歲）",
      sex: "公犬略多於母犬",
      riskFactors: ["德國牧羊犬（>80%病例）", "愛爾蘭雪達犬", "低尾位品種（尾根位置低使肛周通風不良）", "免疫系統異常"]
    },
    clinicalPresentation: {
      history: ["排便困難或排便時哭叫", "肛門周圍惡臭膿性分泌物", "頻繁舔舐肛門區域", "血便或黏液便", "體重減輕", "坐下困難"],
      physicalExam: ["肛門周圍多發性引流性瘻管和潰瘍", "肛周皮膚紅腫、糜爛和結痂", "嚴重時瘻管可環繞整個肛門", "觸診極度疼痛（可能需鎮靜檢查）", "可能伴有肛門括約肌張力下降"]
    },
    pathophysiology: "肛周瘻管被認為是免疫介導性疾病，與犬炎症性腸病（IBD）有共同的免疫病理機制。遺傳易感性（特別是德國牧羊犬的MHC II類基因型）使免疫系統對肛門腺和周圍組織的正常菌群產生異常免疫反應。T細胞和巨噬細胞浸潤肛周組織，釋放促炎細胞因子（TNF-α、IL-1β）導致組織破壞和瘻管形成。低尾位品種肛周區域通風不良和濕熱環境促進細菌繁殖，加重發炎。瘻管深入肛周組織甚至侵犯肛門括約肌，持續引流膿性分泌物。約50%以上的患犬同時有結腸炎或IBD的組織學證據。",
    diagnosis: {
      overview: "典型病變的視覺識別即可初步診斷，但需排除腫瘤",
      differentials: ["肛門囊腺癌", "肛門囊膿瘍", "肛周腫瘤", "肛門囊炎", "直腸瘻管"],
      initialDB: ["鎮靜下完整肛周視覺檢查和觸診", "直腸指檢（評估括約肌張力和直腸黏膜）", "CBC/血液生化（基線評估）", "糞便檢查"],
      advanced: ["病變活檢（排除腫瘤，特別是不典型病例）", "結腸鏡+活檢（評估併發IBD）", "肛門超音波或MRI（評估瘻管深度和範圍）", "免疫學檢查"]
    },
    treatment: {
      overview: "環孢素免疫調節為一線治療，手術保留給難治性病例",
      acute: ["止痛：Tramadol 2-5 mg/kg PO q8-12h 或 Gabapentin", "局部清潔和溫水浸泡"],
      chronic: ["Cyclosporine 5-10 mg/kg PO q12-24h（治療8-12週至病變癒合）", "可合併Ketoconazole 2.5-10 mg/kg PO q24h（抑制CsA代謝，降低用藥成本）", "病變癒合後緩慢減量（每4-6週減25%）至最低有效劑量", "難治性：Tacrolimus 0.1% 局部外用q12h", "手術（最後手段）：病灶切除、冷凍手術或肛門囊切除"]
    },
    prognosis: "環孢素治療的完全緩解率約85%。但停藥後復發率高，約50-75%的犬需長期低劑量維持治療。早期治療反應較好，嚴重環形瘻管預後較差。手術可改善難治性病例但併發症包括肛門失禁。合併IBD者需同時管理腸道疾病。",
    pearls: ["德國牧羊犬+肛周潰瘍和瘻管=肛周瘻管是首要診斷——但必須活檢排除肛門囊腺癌", "環孢素治療初期可合併Ketoconazole降低成本（Ketoconazole抑制CsA代謝使血藥濃度升高）", "約50%以上的肛周瘻管犬同時有IBD——考慮結腸鏡檢查和飲食管理"],
    diagnosticAlgorithm: {
      title: "肛周瘻管 診斷流程",
      steps: [
        { step: 1, action: "視覺檢查", details: "鎮靜下仔細檢查肛門周圍", findings: ["多發性引流性瘻管", "肛周組織紅腫潰瘍"] },
        { step: 2, action: "活檢排除腫瘤", details: "不典型病變或單發性病變需活檢", findings: ["確認為發炎性瘻管", "排除肛門囊腺癌"] },
        { step: 3, action: "評估合併症", details: "直腸指檢+考慮結腸鏡評估IBD", findings: ["括約肌張力評估", "結腸炎組織學證據"] },
        { step: 4, action: "開始免疫調節治療", details: "環孢素+/- Ketoconazole，定期追蹤", findings: ["4-8週評估治療反應", "完全緩解後開始減量"] }
      ]
    },
    monitoring: ["肛周病變視覺評估（q2-4週×治療期間）", "環孢素血藥濃度（合併Ketoconazole時）", "腎功能和肝功能（環孢素長期使用）", "體重和糞便品質（IBD共病管理）"],
    reference: "Merck Vet Manual - Perianal Fistula in Dogs; Today's Vet Practice - Perianal Fistulas; JAVMA (1997) 211:1249-1253"
  },

  "steroid-responsive-meningitis-arteritis": {
    zh: "類固醇反應性腦膜炎動脈炎",
    en: "Steroid-Responsive Meningitis-Arteritis (SRMA)",
    definition: "犬最常見的非感染性腦膜炎，為免疫介導性疾病，主要侵犯軟腦膜和相關動脈壁。好發於6-18月齡的年輕犬，以嚴重頸部疼痛和發燒為特徵。對高劑量糖皮質素治療反應極佳，80-100%的犬可達臨床緩解。",
    synonyms: ["SRMA", "無菌性腦膜炎", "免疫介導性腦膜炎", "犬疼痛症候群", "Beagle Pain Syndrome"],
    epidemiology: {
      species: "犬（貓極罕見）",
      age: "6-18月齡最常見（範圍12週至6歲以上）",
      sex: "無明顯性別傾向",
      riskFactors: ["品種：拳師犬、米格魯、伯恩山犬、威瑪犬、新斯科舍鴨誘獵犬", "年輕犬", "疫苗接種後偶有報告（時間相關但未證實因果）"]
    },
    clinicalPresentation: {
      history: ["急性嚴重頸部疼痛（不願低頭、轉頭或上下樓梯）", "發燒（>39.5°C）", "精神沉鬱和食慾下降", "步態僵硬", "被觸摸時哭叫"],
      physicalExam: ["頸部僵硬和觸診劇痛", "被動屈曲頸部引發疼痛反射", "發燒（39.5-41°C）", "脊椎其他區域也可能疼痛", "神經學檢查通常正常（急性期）", "慢性型可出現共濟失調"]
    },
    pathophysiology: "SRMA的確切觸發因子不明，被認為是遺傳易感個體在環境因子（可能為感染或疫苗抗原）刺激下發生的免疫介導性疾病。異常的Th2型免疫反應導致IgA過度生產（血清和腦脊液中IgA顯著升高為特徵性發現）。IgA免疫複合物沉積在軟腦膜血管壁引起壞死性動脈炎，嗜中性球大量浸潤腦膜（腦脊液呈嗜中性球性炎症）。動脈壁損傷導致腦膜血管通透性增加、蛋白質滲出和發炎介質釋放，引起嚴重疼痛。急性期主要為嗜中性球浸潤，慢性型或治療不足的病例可轉為淋巴球-漿細胞性浸潤伴肉芽腫形成。",
    diagnosis: {
      overview: "腦脊液分析（嗜中性球增多+IgA升高）結合臨床特徵確診",
      differentials: ["細菌性腦膜炎", "肉芽腫性腦膜腦炎（GME）", "椎間盤疾病", "免疫介導性多發性關節炎", "脊椎骨髓炎"],
      initialDB: ["CBC（白血球升高，以嗜中性球為主）", "CRP（C反應蛋白顯著升高——良好的監測指標）", "血清IgA測定", "基本血液生化"],
      advanced: ["腦脊液分析（嗜中性球顯著增多、蛋白質升高、培養陰性）", "腦脊液IgA測定（顯著升高）", "MRI（排除其他結構性原因，SRMA可見腦膜增強）", "血液培養（排除菌血症）"]
    },
    treatment: {
      overview: "高劑量糖皮質素為治療基石，緩慢減量持續6-12個月",
      acute: ["Prednisolone 2-4 mg/kg/day PO（起始劑量，分1-2次）", "通常24-48小時內疼痛和發燒顯著改善", "嚴重疼痛輔助：Opioids（短期）"],
      chronic: ["Prednisolone維持2週後開始緩慢減量", "每4-6週減量25%，總療程6-12個月", "以CRP監測指導減量速度", "復發時：回到上一個有效劑量", "類固醇抵抗型：加用Azathioprine 2 mg/kg PO q24h或Mycophenolate"]
    },
    prognosis: "整體預後良好至極佳。80-100%的犬對初始類固醇治療反應良好。但約1/3的犬在治療過程中或停藥後復發。復發通常在停藥後8-28天發生，多數對重新開始治療仍有反應。慢性型或反覆復發型預後稍差，可能需要長期低劑量維持治療或加用免疫抑制劑。",
    pearls: ["年輕犬（<2歲）+嚴重頸痛+發燒+白血球升高=SRMA是首要鑑別——腦脊液嗜中性球增多但培養陰性即可確診", "CRP是監測治療反應和預測復發的最佳指標——每次減量前測CRP", "減量太快是復發的最常見原因——必須緩慢減量，總療程至少6個月"],
    diagnosticAlgorithm: {
      title: "類固醇反應性腦膜炎動脈炎 診斷流程",
      steps: [
        { step: 1, action: "臨床懷疑", details: "年輕犬急性頸痛+發燒+白血球升高", findings: ["頸部僵硬劇痛", "發燒 >39.5°C"] },
        { step: 2, action: "CRP和IgA", details: "測定CRP（顯著升高）和血清IgA", findings: ["CRP顯著升高", "IgA可能升高"] },
        { step: 3, action: "腦脊液分析", details: "全身麻醉下腦脊液穿刺", findings: ["嗜中性球顯著增多", "蛋白質升高、培養陰性"] },
        { step: 4, action: "開始類固醇治療", details: "高劑量Prednisolone，24-48小時評估反應", findings: ["快速臨床改善", "CRP下降"] }
      ]
    },
    monitoring: ["CRP（每次減量前和減量後2週測定）", "CBC（白血球計數追蹤）", "臨床疼痛評估（每次回診）", "類固醇副作用監測（多飲多尿、體重、肝酵素）"],
    reference: "MSPCA-Angell - SRMA; Fitzpatrick Referrals - SRMA; PMC (2023) Narrative Review"
  },

  "discospondylitis": {
    zh: "椎間盤脊椎炎",
    en: "Discospondylitis",
    definition: "椎間盤和相鄰椎體端板的細菌或真菌感染性疾病，主要影響犬。感染途徑以血行性播散最常見（泌尿道、心內膜炎、皮膚感染等來源），最常見的致病菌為金黃色葡萄球菌。臨床表現為脊柱疼痛，嚴重時可導致脊髓壓迫和神經功能缺損。",
    synonyms: ["椎間盤炎", "脊椎骨髓炎", "Diskospondylitis", "Vertebral Osteomyelitis", "Spondylodiscitis"],
    epidemiology: {
      species: "犬為主（貓罕見）",
      age: "中年至老年大型犬（平均3-9歲）",
      sex: "公犬多於母犬（2:1）",
      riskFactors: ["大型犬品種（德國牧羊犬、大丹犬）", "免疫抑制", "慢性泌尿道感染", "感染性心內膜炎", "植入物或手術史", "Brucella canis感染"]
    },
    clinicalPresentation: {
      history: ["脊柱疼痛（不願運動、上下樓梯困難）", "發燒", "食慾下降和體重減輕", "步態僵硬", "嚴重時後肢無力或癱瘓"],
      physicalExam: ["脊柱觸診定點壓痛（最常見L7-S1和胸腰椎交界處）", "脊柱活動受限", "發燒", "肌肉萎縮（慢性）", "神經學缺損（嚴重時：後肢無力、本體感覺缺損）"]
    },
    pathophysiology: "致病微生物（最常見金黃色葡萄球菌Staphylococcus pseudintermedius）經血行途徑到達椎體端板的血管豐富區域，在此定植和增殖。感染從椎體端板擴散至椎間盤（缺乏血供的無血管組織），導致椎間盤壞死和椎體端板溶骨性破壞。發炎反應產生肉芽組織和膿瘍，可向椎管方向擴展壓迫脊髓或馬尾神經根。反應性新骨形成（骨贅）是慢性病變的特徵。真菌性椎間盤脊椎炎（Aspergillus spp.）預後較差，常見於免疫抑制犬或德國牧羊犬。Brucella canis感染需特殊關注因為有人畜共通傳染的風險。",
    diagnosis: {
      overview: "脊椎X光典型改變結合培養確認致病菌",
      differentials: ["椎間盤突出", "脊椎腫瘤", "脊椎骨折", "椎間盤脊椎病（退化性）", "多發性骨髓瘤"],
      initialDB: ["脊椎X光（椎體端板溶解、椎間隙狹窄或塌陷、反應性新骨形成）", "CBC/血液生化（白血球升高、CRP升高）", "尿液分析和培養（尋找感染來源）", "血液培養"],
      advanced: ["Brucella canis血清學（公犬必做）", "CT或MRI（早期偵測、評估椎管壓迫）", "椎間盤FNA培養（影像引導下）", "骨核掃描（多發性病灶偵測）"]
    },
    treatment: {
      overview: "長期抗生素治療（6-12個月）為基石，嚴重神經壓迫需手術減壓",
      acute: ["經驗性抗生素：Cephalexin 22-30 mg/kg PO q8h 或 Amoxicillin-Clavulanate", "止痛：NSAIDs（Meloxicam 0.1 mg/kg q24h）+/- Gabapentin", "嚴格籠內休息（限制活動減少脊柱負荷）"],
      chronic: ["依據培養結果調整抗生素，療程最少6-8週（通常需6-12個月）", "真菌性：Itraconazole或Fluconazole長期治療", "Brucella：多藥聯合（Doxycycline + Aminoglycoside），建議結紮", "手術指徵：進行性神經惡化、椎管膿瘍壓迫、椎體不穩定"]
    },
    prognosis: "細菌性椎間盤脊椎炎在適當抗生素治療下預後良好，但療程長（6-12個月），過早停藥復發率高。真菌性預後保守至中等，可能需終身治療。Brucella感染需人畜共通傳染預防。伴隨嚴重脊髓壓迫和神經功能缺損者預後較差。",
    pearls: ["脊椎X光改變在發病後3-6週才出現——早期病例X光可能正常，需用MRI或骨掃描", "公犬必須做Brucella canis血清學——這是人畜共通傳染病", "抗生素療程至少6個月——過早停藥是復發的最常見原因"],
    diagnosticAlgorithm: {
      title: "椎間盤脊椎炎 診斷流程",
      steps: [
        { step: 1, action: "臨床評估", details: "脊柱定點壓痛+發燒+血液發炎指標升高", findings: ["脊柱壓痛", "WBC和CRP升高"] },
        { step: 2, action: "脊椎影像", details: "X光（端板溶解）或MRI（早期偵測）", findings: ["椎體端板破壞", "椎間隙改變"] },
        { step: 3, action: "病原學確認", details: "血液培養+尿液培養+Brucella血清學", findings: ["致病菌鑑定", "Brucella排除"] },
        { step: 4, action: "長期抗生素+追蹤", details: "依培養結果選藥，6-12個月療程", findings: ["影像學改善", "臨床疼痛緩解"] }
      ]
    },
    monitoring: ["脊椎X光（q4-8週評估骨骼癒合）", "CRP（q2-4週評估發炎改善）", "神經學檢查（q2-4週評估功能恢復）", "血液和尿液培養（停藥前確認感染清除）"],
    reference: "VCA Hospitals - Discospondylitis; Today's Vet Nurse - Discospondylitis; PMC (2023) JAVMA Multi-institutional Study"
  },

  "atlantoaxial-instability": {
    zh: "寰樞椎不穩定",
    en: "Atlantoaxial Instability",
    definition: "第一頸椎（寰椎C1）和第二頸椎（樞椎C2）之間異常活動度增加的先天性神經外科疾病。主要因樞椎齒突（dens）發育不全或缺失和橫韌帶缺陷所致。好發於玩具犬品種幼犬，異常活動導致脊髓壓迫，輕則頸痛，重則四肢癱瘓甚至呼吸衰竭死亡。",
    synonyms: ["寰樞關節脫位", "寰樞椎半脫位", "AA不穩定", "Atlantoaxial Subluxation", "AA Luxation"],
    epidemiology: {
      species: "犬（貓極罕見）",
      age: "幼年至年輕（多在2歲前診斷）",
      sex: "無明顯性別傾向",
      riskFactors: ["玩具犬品種：約克夏犬、吉娃娃、貴賓犬（玩具型）、博美犬", "先天性齒突發育不全或缺失", "橫韌帶發育不良", "外傷（加重先天缺陷）"]
    },
    clinicalPresentation: {
      history: ["頸部疼痛（哭叫、不願被抱起）", "步態異常或運動失調", "突發四肢無力或癱瘓", "頭部保持僵直位置", "輕微外傷後症狀突然惡化"],
      physicalExam: ["頸部觸診疼痛和抗拒被動屈曲", "四肢共濟失調（UMN四肢本體感覺缺損）", "四肢輕癱至四肢癱瘓", "頸部活動受限", "嚴重時呼吸異常（膈神經受損）"]
    },
    pathophysiology: "正常情況下，寰椎與樞椎之間的穩定性由齒突（dens/odontoid process）及其周圍韌帶（橫韌帶、翼韌帶和頂韌帶）維持。先天性寰樞椎不穩定的病因包括：(1)齒突發育不全（hypoplasia）、缺失（aplasia）或未融合（non-union）；(2)橫韌帶先天性缺陷或鬆弛。這些結構異常允許C1相對於C2的異常背側移位，導致樞椎椎體向脊髓腹側壓迫。頸部屈曲時壓迫加重。脊髓壓迫可從輕微（僅頸痛）到嚴重（四肢癱瘓、呼吸衰竭）。急性外傷或不當頸部操作可導致突然惡化甚至死亡。",
    diagnosis: {
      overview: "頸部X光顯示C1-C2異常間隙，MRI評估脊髓壓迫程度",
      differentials: ["椎間盤突出（頸椎）", "其他先天性脊椎畸形", "脊髓空洞症（Chiari-like malformation）", "骨折/脫位", "腫瘤"],
      initialDB: ["頸部側位X光（C1-C2間隙增寬——正常<2mm，不穩定者常>4mm）", "避免屈曲位拍攝（風險極高，可加重壓迫）", "神經學定位（C1-C5 UMN四肢病變）"],
      advanced: ["MRI（評估脊髓壓迫程度、水腫和脊髓空洞症）", "CT（骨骼結構3D重建，術前計畫）", "透視動態檢查（在全身麻醉和呼吸支持下進行）"]
    },
    treatment: {
      overview: "手術固定成功率約90%，保守治療成功率約50%",
      acute: ["頸部制動（頸圈或夾板）", "糖皮質素：Dexamethasone 0.1-0.2 mg/kg IV（脊髓水腫）", "嚴格限制活動", "止痛"],
      chronic: ["手術固定（首選——成功率~90%）：腹側或背側穩定術", "腹側技術：螺絲/鋼釘固定C1-C2", "背側技術：鋼絲環扎或AATB（Kishigami）技術", "保守治療（較輕微病例）：頸圈/頸部夾板+限制活動6-8週——成功率~50%"]
    },
    prognosis: "手術治療的成功率約90%，年輕犬（<2歲）和症狀持續<10個月者預後最好。保守治療成功率約50%，復發率高。嚴重四肢癱瘓和呼吸困難者預後較差。術後併發症包括植入物鬆脫和失敗。體重輕的玩具犬手術技術要求高。",
    pearls: ["玩具犬幼犬+頸痛+四肢共濟失調=必須排除寰樞椎不穩定——禁止在未排除前做頸部屈曲操作", "頸部X光拍攝時絕對不要屈曲頸部——可能加重脊髓壓迫導致呼吸停止", "手術成功率（90%）遠高於保守治療（50%）——對於有神經症狀的病例應積極建議手術"],
    diagnosticAlgorithm: {
      title: "寰樞椎不穩定 診斷流程",
      steps: [
        { step: 1, action: "臨床懷疑", details: "玩具犬幼犬頸痛和四肢共濟失調", findings: ["C1-C5 UMN病變定位", "品種和年齡符合"] },
        { step: 2, action: "頸部X光", details: "中立位頸部側位X光（禁止屈曲位）", findings: ["C1-C2間隙增寬", "齒突異常"] },
        { step: 3, action: "MRI/CT", details: "評估脊髓壓迫程度和骨骼結構", findings: ["脊髓壓迫和水腫", "齒突形態和韌帶狀態"] },
        { step: 4, action: "治療決策", details: "依症狀嚴重度選擇手術或保守治療", findings: ["手術固定（神經症狀者）", "保守管理（僅頸痛者）"] }
      ]
    },
    monitoring: ["神經學評估（術後q1-2週×1月，之後q1-3月）", "頸部X光（術後1、3、6月評估固定穩定性）", "活動限制（術後8-12週嚴格限制）", "長期神經功能追蹤"],
    reference: "ACVS - Atlantoaxial Instability; Cornell - Craniocervical Junction; PubMed (2018) Vet Radiol Ultrasound"
  },

  "lumbosacral-disease": {
    zh: "腰薦椎疾病",
    en: "Lumbosacral Disease (Degenerative Lumbosacral Stenosis)",
    definition: "L7-S1（第七腰椎至第一薦椎）交界處的退化性狹窄導致馬尾神經根壓迫的疾病，是犬最常見的腰薦椎神經疾病。以大型犬（特別是德國牧羊犬和工作犬）最為好發，臨床表現為腰部疼痛、後肢跛行和尾部功能異常。類似人類的馬尾症候群。",
    synonyms: ["退化性腰薦椎狹窄", "馬尾症候群", "Cauda Equina Syndrome", "Degenerative Lumbosacral Stenosis", "DLSS"],
    epidemiology: {
      species: "犬（貓罕見）",
      age: "中老年大型犬（5-10歲）",
      sex: "公犬略多",
      riskFactors: ["大型犬品種（德國牧羊犬最好發）", "工作犬和運動犬", "肥胖", "高強度活動", "先天性腰薦椎畸形"]
    },
    clinicalPresentation: {
      history: ["後肢活動力下降", "起立困難", "不願跳躍或上下樓梯", "尾巴下垂或不搖尾", "排尿或排便困難（嚴重時）", "後肢拖行"],
      physicalExam: ["腰薦椎交界處觸診壓痛", "後肢伸展時（lordosis test）疼痛加劇", "後肢肌肉萎縮", "尾巴張力下降", "後肢本體感覺可能缺損", "肛門反射可能減弱", "坐骨神經痛（後肢跛行）"]
    },
    pathophysiology: "腰薦椎疾病的病理生理涉及多因素性椎管狹窄。L7-S1椎間盤退化（脫水、突出）是核心病因，導致椎間隙狹窄和椎間盤物質突入椎管壓迫馬尾神經根。伴隨的椎間關節骨關節炎造成骨贅增生，黃韌帶肥厚和椎板增厚進一步縮窄椎管。腰薦椎的活動度大和承重使退化變化加速。馬尾包含L7、S1-S3和尾椎的脊神經根，壓迫導致坐骨神經痛（後肢疼痛和跛行）、陰部神經功能障礙（排尿排便異常）和尾神經功能喪失（尾巴下垂）。脊柱過伸（lordosis）加重椎管狹窄，解釋了為何活動後症狀加劇。",
    diagnosis: {
      overview: "臨床症狀+進階影像學（CT/MRI）確認壓迫部位和程度",
      differentials: ["髖關節發育不良", "十字韌帶斷裂", "椎間盤脊椎炎（L7-S1）", "脊椎腫瘤", "退化性脊髓病"],
      initialDB: ["神經學檢查（LMN後肢病變定位、lordosis test）", "腰薦椎X光（椎間隙狹窄、骨贅、終板硬化）", "骨盆X光（同時排除髖關節問題）"],
      advanced: ["MRI（首選——軟組織對比最佳，可見椎間盤突出和神經根壓迫）", "CT（骨骼結構詳細評估）", "CT脊髓攝影（CT + 對比劑注射）", "肌電圖（EMG，確認去神經支配）"]
    },
    treatment: {
      overview: "保守治療為初始選擇，手術適用於保守治療失敗或進行性神經惡化的病例",
      acute: ["止痛：NSAIDs（Meloxicam 0.1 mg/kg q24h）+ Gabapentin 5-10 mg/kg q8-12h", "嚴格限制活動（4-6週）", "體重管理"],
      chronic: ["保守治療：物理治療（水療、核心肌群強化）+ 體重控制 + 活動調整", "手術減壓：背側椎板切除術（dorsal laminectomy）——移除壓迫結構", "手術固定融合：L7-S1椎間融合術（嚴重不穩定時）", "術後物理復健"]
    },
    prognosis: "保守治療可使50-60%的犬臨床改善。手術減壓的成功率約70-80%，工作犬恢復工作能力的比例約60%。預後取決於術前神經功能缺損程度——輕微疼痛者預後最好，排尿排便失禁者預後較差。肥胖和持續高強度活動是復發的危險因子。",
    pearls: ["Lordosis test（腰薦椎過伸壓迫試驗）是最重要的理學檢查——過伸加壓L7-S1時引發疼痛高度提示本病", "德國牧羊犬腰薦椎疾病和髖關節發育不良常同時存在——兩者都要評估", "X光可能低估病變——腰薦椎X光正常不能排除本病，MRI是確診的金標準"],
    diagnosticAlgorithm: {
      title: "腰薦椎疾病 診斷流程",
      steps: [
        { step: 1, action: "臨床定位", details: "後肢跛行+腰薦壓痛+lordosis test陽性", findings: ["腰薦椎定點壓痛", "lordosis test引發疼痛"] },
        { step: 2, action: "基礎影像", details: "腰薦椎和骨盆X光", findings: ["椎間隙狹窄和骨贅", "同時評估髖關節"] },
        { step: 3, action: "進階影像", details: "MRI或CT確認壓迫部位和程度", findings: ["椎間盤突出", "馬尾神經根壓迫"] },
        { step: 4, action: "治療選擇", details: "依症狀嚴重度選擇保守或手術", findings: ["輕度：保守+物理治療", "重度/進行性：手術減壓"] }
      ]
    },
    monitoring: ["臨床疼痛評估和步態分析（q2-4週×治療初期）", "體重管理（肥胖加重症狀）", "神經學功能評估（排尿排便功能、後肢力量）", "活動量調整（避免高衝擊活動如跳躍）"],
    reference: "PMC (2019) Vet Sci 6:99; dvm360 - Degenerative Lumbosacral Stenosis; AAHA (2021) Lumbosacral Conditions"
  }
};

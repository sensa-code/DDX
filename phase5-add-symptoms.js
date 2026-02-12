// phase5-add-symptoms.js — Add 6 new symptom entries to DB.symptoms + update RELATED_SYMPTOMS
const fs = require('fs');

const htmlFile = 'vet-differential-diagnosis-v2.html';
let html = fs.readFileSync(htmlFile, 'utf8');

// ========================================
// STEP 1: Add 6 new symptom entries to DB.symptoms
// ========================================

const dbStart = html.indexOf('const DB = { symptoms:');
const sectionsIdx = html.indexOf('sections:', dbStart);

// Find the "]," that closes the symptoms array
let arrCloseIdx = sectionsIdx;
while (arrCloseIdx > dbStart && html[arrCloseIdx] !== ']') arrCloseIdx--;
// arrCloseIdx now points to the "]" of "],"

// Find the last "]}" (end of last symptom entry) before that
const lastSymEnd = html.lastIndexOf(']}', arrCloseIdx);
// lastSymEnd points to the "]" of "]}" of the last symptom

// Insert point: right after "]}" of last symptom, add comma + new entries
const insertPoint = lastSymEnd + 2; // after "]}"

// New symptom entries - compact format
const newEntries = [
  '{id:"dehydration",zhName:"脫水",enName:"Dehydration",section:"1.1",sectionName:"全身性／系統性／代謝",description:"體液不足的臨床徵象，包含皮膚帳篷試驗延長、黏膜乾燥、眼窩凹陷、心搏過速、CRT延長等。",differentials:[]}',
  '{id:"hepatomegaly",zhName:"肝臟腫大",enName:"Hepatomegaly",section:"1.2",sectionName:"消化道／腹腔",description:"肝臟體積增大，可經腹部觸診或影像學檢查發現。可能原因包含鬱血性心衰、肝臟腫瘤、脂肪肝、代謝性肝病、感染性肝炎等。",differentials:[]}',
  '{id:"splenomegaly",zhName:"脾臟腫大",enName:"Splenomegaly",section:"1.2",sectionName:"消化道／腹腔",description:"脾臟體積增大，可經腹部觸診或影像學檢查發現。常見原因包含反應性增生、充血、浸潤性病變等。",differentials:[]}',
  '{id:"behaviour-change",zhName:"行為改變",enName:"Behaviour Change",section:"1.5",sectionName:"神經系統",description:"精神狀態或行為模式的異常改變，包含攻擊性增加、嗜睡、迷惘、恐懼、壓頭行為、漫無目的遊走等。",differentials:[]}',
  '{id:"mydriasis",zhName:"瞳孔散大",enName:"Mydriasis",section:"1.6",sectionName:"眼科",description:"單側或雙側瞳孔異常擴大且對光反射減弱或消失。可能原因包含視網膜疾病、視神經病變、中毒、顱內壓升高等。",differentials:[]}',
  '{id:"hypothermia-sign",zhName:"低體溫",enName:"Hypothermia",section:"1.1",sectionName:"全身性／系統性／代謝",description:"核心體溫低於正常範圍。可能原因包含環境暴露、休克、嚴重敗血症、內分泌低下、中毒等。",differentials:[]}'
];

// Build insertion string: comma after last entry, then new entries
const insertStr = ',\r\n' + newEntries.map(e => '    ' + e).join(',\r\n');

html = html.substring(0, insertPoint) + insertStr + html.substring(insertPoint);

console.log('Step 1: Added 6 new symptoms to DB.symptoms');

// ========================================
// STEP 2: Update RELATED_SYMPTOMS
// ========================================

const oldRelEnd = '"polyarthritis":["lameness","hyperthermia","weakness"]';
const newRelEntries = '"polyarthritis":["lameness","hyperthermia","weakness"],\r\n  "dehydration":["weakness","vomiting","diarrhoea","anorexia","hyperthermia"],\r\n  "hepatomegaly":["jaundice","ascites","abdominal-distension","weight-loss"],\r\n  "splenomegaly":["weakness","pallor-cyanosis","lymphadenopathy","abdominal-distension"],\r\n  "behaviour-change":["seizures","coma-stupor","weakness","blindness"],\r\n  "mydriasis":["blindness","seizures","coma-stupor","red-eye"],\r\n  "hypothermia-sign":["weakness","coma-stupor","tachycardia-bradycardia"]';

if (html.includes(oldRelEnd)) {
  html = html.replace(oldRelEnd, newRelEntries);
  console.log('Step 2: Updated RELATED_SYMPTOMS');
} else {
  console.log('WARN: Could not find RELATED_SYMPTOMS entry to update');
}

// Step 3: Section 1.6 already exists in the file, skipping

// ========================================
// SAVE + VALIDATE
// ========================================
fs.writeFileSync(htmlFile, html, 'utf8');

console.log('\n=== Validation ===');
const script = html.match(/<script>([\s\S]*?)<\/script>/);
try {
  new Function(script[1]);
  console.log('OK: JavaScript syntax valid');
} catch(e) {
  console.log('FAIL: SYNTAX ERROR: ' + e.message);
}

const zhCount = (html.match(/^\s+zh:\s*"/gm) || []).length;
console.log('Disease count: ' + zhCount + ' (expected: 558)');

try {
  const newDbStart = html.indexOf('const DB = { symptoms:');
  const newAgeStart = html.indexOf('const AGE_BIAS');
  const dbSection = html.substring(newDbStart, newAgeStart);
  const DB = (new Function(dbSection + '\nreturn DB;'))();
  console.log('Symptom count: ' + DB.symptoms.length + ' (expected: 69)');

  const expectedNew = ['dehydration','hepatomegaly','splenomegaly','behaviour-change','mydriasis','hypothermia-sign'];
  const existingIds = DB.symptoms.map(s => s.id);
  expectedNew.forEach(id => {
    console.log('  ' + id + ': ' + (existingIds.includes(id) ? 'PRESENT' : 'MISSING'));
  });
} catch(e) {
  console.log('FAIL: Could not parse DB: ' + e.message);
}

console.log(html.includes('</script>') ? 'OK </script>' : 'MISSING </script>');
console.log(html.includes('</body>') ? 'OK </body>' : 'MISSING </body>');
console.log(html.includes('</html>') ? 'OK </html>' : 'MISSING </html>');

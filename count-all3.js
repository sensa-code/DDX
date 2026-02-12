// count-all3.js — Accurate count of symptoms, diseases, lab indicators
const fs = require('fs');
const html = fs.readFileSync('vet-differential-diagnosis-v2.html', 'utf8');

// 1. DB.symptoms — clinical symptoms (each has id, zhName, etc.)
const dbStart = html.indexOf('const DB = { symptoms: [');
// Count symptom objects by their id field
const dbSection = html.substring(dbStart);
const dbEnd = dbSection.indexOf(']}');  // end of symptoms array
const dbSymptoms = html.substring(dbStart, dbStart + dbEnd);
const symptomIds = dbSymptoms.match(/^\s+id:\s*"/gm) || [];
console.log('=== DB.symptoms (臨床症狀) ===');
console.log('症狀數:', symptomIds.length);

// List all symptom categories
const categories = new Set();
const catMatches = dbSymptoms.match(/category:\s*"([^"]+)"/g) || [];
catMatches.forEach(c => {
  const m = c.match(/"([^"]+)"/);
  if (m) categories.add(m[1]);
});
console.log('症狀類別:', categories.size);
console.log('類別列表:', [...categories].join(', '));

// 2. LAB_DB.abnormalities — lab indicators
const labStart = html.indexOf('const LAB_DB = { abnormalities: [');
const labSection = html.substring(labStart);
const labEnd = labSection.indexOf(']}');
const labBlock = html.substring(labStart, labStart + labEnd);
const labIds = labBlock.match(/^\s+\{\s*id:"/gm) || [];
// Try another pattern
const labIds2 = labBlock.match(/id:"[^"]+"/g) || [];
const uniqueLabIds = new Set(labIds2.map(m => m.match(/"([^"]+)"/)[1]));
console.log('\n=== LAB_DB.abnormalities (實驗室指標) ===');
console.log('指標數:', uniqueLabIds.size);

const labCategories = new Set();
const labCatMatches = labBlock.match(/category:"([^"]+)"/g) || [];
labCatMatches.forEach(c => {
  const m = c.match(/"([^"]+)"/);
  if (m) labCategories.add(m[1]);
});
console.log('指標類別:', labCategories.size);
console.log('類別列表:', [...labCategories].join(', '));

// 3. DISEASE_INFO — diseases
const diStart = html.indexOf('const DISEASE_INFO = {');
const diseaseCount = (html.match(/^\s+zh:\s*"/gm) || []).length;
console.log('\n=== DISEASE_INFO (鑑別診斷疾病) ===');
console.log('疾病數:', diseaseCount);

// 4. Count differentials within DB.symptoms
let totalDiffs = 0;
const diffMatches = dbSymptoms.match(/differentials:\s*\[/g) || [];
console.log('\n=== 症狀中的鑑別診斷連結 ===');
// Count each disease listed in differentials
const diffDiseases = dbSymptoms.match(/\{zh:"/g) || [];
console.log('鑑別診斷條目 (含重複):', diffDiseases.length);

// Count unique disease IDs referenced in DB.symptoms differentials
const diseaseRefs = new Set();
const refMatches = dbSymptoms.match(/en:"([^"]+)"/g) || [];
refMatches.forEach(r => {
  const m = r.match(/"([^"]+)"/);
  if (m) diseaseRefs.add(m[1]);
});
console.log('被引用的不重複疾病數:', diseaseRefs.size);

// 5. Count differentials within LAB_DB
const labDiffDiseases = labBlock.match(/\{zh:"/g) || [];
console.log('\n=== 實驗室指標中的鑑別診斷連結 ===');
console.log('鑑別診斷條目 (含重複):', labDiffDiseases.length);

// phase5-generate-links.js — Generate differential entries for all missing symptom-disease links
// This script reads the gap report and DISEASE_INFO to create complete differential objects,
// then inserts them into DB.symptoms in the HTML file.

const fs = require('fs');

const htmlFile = 'vet-differential-diagnosis-v2.html';
let html = fs.readFileSync(htmlFile, 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];

// Extract data sections
const diStart = script.indexOf('const DISEASE_INFO = {');
const relSympStart = script.indexOf('const RELATED_SYMPTOMS = {');
const labDbStart = script.indexOf('const LAB_DB = { abnormalities:');
const dbStart = script.indexOf('const DB = { symptoms:');
const ageBiasStart = script.indexOf('const AGE_BIAS = {');
const symptomLabStart = script.indexOf('const SYMPTOM_LAB_LINKS');

const DISEASE_INFO = (new Function(script.substring(diStart, relSympStart) + '\nreturn DISEASE_INFO;'))();
const DB = (new Function(script.substring(dbStart, ageBiasStart) + '\nreturn DB;'))();

// Read gap report
const gapReport = JSON.parse(fs.readFileSync('gap-report.json', 'utf8'));

// ========================================
// Helper: derive differential fields from DISEASE_INFO
// ========================================

function speciesFromEpi(info) {
  if (!info.epidemiology) return "both";
  const sp = (info.epidemiology.species || "").toLowerCase();
  if (sp.includes("犬貓") || sp.includes("both") || sp.includes("犬和貓")) return "both";
  if (sp.includes("貓") && !sp.includes("犬")) return "cat";
  if (sp.includes("犬") && !sp.includes("貓")) return "dog";
  return "both";
}

function freqFromEpi(info) {
  if (!info.epidemiology) return "uncommon";
  const text = JSON.stringify(info.epidemiology).toLowerCase();
  if (text.includes("常見") || text.includes("common") || text.includes("普遍")) return "common";
  if (text.includes("罕見") || text.includes("rare") || text.includes("少見")) return "rare";
  return "uncommon";
}

function categoryFromInfo(info) {
  // Try to infer category from definition/pathophysiology
  const text = (info.definition || "") + (info.en || "");
  const lower = text.toLowerCase();

  if (lower.includes("toxic") || lower.includes("中毒") || lower.includes("poisoning")) return "中毒";
  if (lower.includes("tumor") || lower.includes("carcinoma") || lower.includes("腫瘤") || lower.includes("sarcoma") || lower.includes("lymphoma") || lower.includes("neoplasia") || lower.includes("cancer")) return "腫瘤";
  if (lower.includes("infection") || lower.includes("virus") || lower.includes("bacterial") || lower.includes("fungal") || lower.includes("感染")) return "感染";
  if (lower.includes("immune") || lower.includes("autoimmune") || lower.includes("免疫")) return "免疫";
  if (lower.includes("heart") || lower.includes("cardiac") || lower.includes("cardio") || lower.includes("心")) return "心血管";
  if (lower.includes("kidney") || lower.includes("renal") || lower.includes("腎")) return "泌尿";
  if (lower.includes("liver") || lower.includes("hepat") || lower.includes("肝")) return "肝膽";
  if (lower.includes("endocrin") || lower.includes("hormone") || lower.includes("thyroid") || lower.includes("adrenal") || lower.includes("內分泌")) return "內分泌";
  if (lower.includes("nerve") || lower.includes("neuro") || lower.includes("brain") || lower.includes("spinal") || lower.includes("神經")) return "神經";
  if (lower.includes("skin") || lower.includes("derma") || lower.includes("皮膚")) return "皮膚";
  if (lower.includes("lung") || lower.includes("pulmon") || lower.includes("respir") || lower.includes("肺") || lower.includes("呼吸")) return "呼吸";
  if (lower.includes("gi") || lower.includes("gastro") || lower.includes("intestin") || lower.includes("腸") || lower.includes("胃") || lower.includes("消化")) return "消化";
  if (lower.includes("bone") || lower.includes("joint") || lower.includes("ortho") || lower.includes("骨") || lower.includes("關節")) return "骨科";
  if (lower.includes("eye") || lower.includes("ocular") || lower.includes("ophthalm") || lower.includes("眼")) return "眼科";
  if (lower.includes("ear") || lower.includes("otic") || lower.includes("耳")) return "耳鼻喉";
  if (lower.includes("blood") || lower.includes("anemia") || lower.includes("anaemia") || lower.includes("hemato") || lower.includes("貧血") || lower.includes("血液")) return "血液";
  if (lower.includes("congenital") || lower.includes("先天")) return "先天";
  if (lower.includes("behavior") || lower.includes("behaviour") || lower.includes("行為")) return "行為";
  if (lower.includes("reproduct") || lower.includes("uterus") || lower.includes("生殖")) return "生殖";

  return "其他";
}

function urgencyFromInfo(info) {
  const text = JSON.stringify(info.treatment || {}).toLowerCase() + (info.definition || "").toLowerCase();
  if (text.includes("emergency") || text.includes("緊急") || text.includes("急救") || text.includes("致命") || text.includes("shock") || text.includes("休克")) return "emergency";
  if (text.includes("urgent") || text.includes("急性") || text.includes("acute")) return "urgent";
  if (text.includes("chronic") || text.includes("慢性")) return "non-urgent";
  return "semi-urgent";
}

function detailFromInfo(info, symptomId) {
  // Create a brief detail connecting the disease to the symptom
  const def = info.definition || "";
  // Use first sentence of definition, max 60 chars
  let detail = def.split("。")[0];
  if (detail.length > 60) detail = detail.substring(0, 57) + "...";
  if (!detail) detail = info.zh || info.en || "";
  return detail;
}

function workupFromInfo(info) {
  if (info.diagnosis && info.diagnosis.initialDB) {
    return info.diagnosis.initialDB.slice(0, 4);
  }
  return ["基本血液檢查", "生化", "影像學"];
}

// ========================================
// Build all differential entries
// ========================================

const linksBySymptom = {}; // symptomId -> array of differential objects

for (const [symptomId, data] of Object.entries(gapReport.bySymptom)) {
  if (!data.shouldAdd || data.shouldAdd.length === 0) continue;

  linksBySymptom[symptomId] = [];

  for (const diseaseId of data.shouldAdd) {
    const info = DISEASE_INFO[diseaseId];
    if (!info) continue;

    const diff = {
      zh: info.zh,
      en: info.en,
      species: speciesFromEpi(info),
      freq: freqFromEpi(info),
      category: categoryFromInfo(info),
      urgency: urgencyFromInfo(info),
      detail: detailFromInfo(info, symptomId),
      workup: workupFromInfo(info)
    };

    linksBySymptom[symptomId].push(diff);
  }
}

// ========================================
// Insert into HTML: for each symptom, append new differentials
// ========================================

// Strategy: find each symptom's differentials array in DB.symptoms section
// and insert the new entries before the closing "]}"

// We need to work within DB section only
const htmlDbStart = html.indexOf('const DB = { symptoms:');
const htmlAgeBias = html.indexOf('const AGE_BIAS = {');

let totalInserted = 0;
let symptomsUpdated = 0;

// Process symptoms in reverse order of their position in the file
// to preserve earlier positions when inserting
const symptomPositions = [];

for (const symptomId of Object.keys(linksBySymptom)) {
  // Find this symptom's entry in the DB.symptoms section
  // Original symptoms use: id: "polyuria-polydipsia" (with spaces)
  // Newer symptoms use: id:"polyuria-polydipsia" (compact)
  const searchId1 = 'id: "' + symptomId + '"';
  const searchId2 = 'id:"' + symptomId + '"';
  let idx = html.indexOf(searchId1, htmlDbStart);
  if (idx === -1 || idx > htmlAgeBias) {
    idx = html.indexOf(searchId2, htmlDbStart);
  }
  if (idx === -1 || idx > htmlAgeBias) {
    console.log('WARN: symptom "' + symptomId + '" not found in DB section');
    continue;
  }

  // Find the differentials array for this symptom
  const diffStart = html.indexOf('differentials:[', idx);
  if (diffStart === -1 || diffStart > htmlAgeBias) {
    console.log('WARN: differentials not found for "' + symptomId + '"');
    continue;
  }

  // Find the closing "]}" of this symptom (the "]" closes differentials, "}" closes symptom)
  // Need to find matching "]" for "differentials:["
  let bracketDepth = 0;
  let diffArrEnd = -1;
  const arrStart = html.indexOf('[', diffStart);
  for (let i = arrStart; i < htmlAgeBias; i++) {
    if (html[i] === '[') bracketDepth++;
    else if (html[i] === ']') {
      bracketDepth--;
      if (bracketDepth === 0) {
        diffArrEnd = i; // position of the "]" closing differentials
        break;
      }
    }
  }

  if (diffArrEnd === -1) {
    console.log('WARN: could not find end of differentials for "' + symptomId + '"');
    continue;
  }

  symptomPositions.push({
    symptomId,
    diffArrEnd,
    entries: linksBySymptom[symptomId],
    isEmpty: html.substring(arrStart + 1, diffArrEnd).trim().length === 0
  });
}

// Sort by descending position (edit from end to start)
symptomPositions.sort((a, b) => b.diffArrEnd - a.diffArrEnd);

for (const sp of symptomPositions) {
  const entries = sp.entries;
  if (entries.length === 0) continue;

  // Format entries as compact single-line objects
  const formatted = entries.map(d => {
    const workupStr = d.workup.map(w => '"' + w.replace(/"/g, '\\"') + '"').join(',');
    return '{zh:"' + d.zh + '",en:"' + d.en + '",species:"' + d.species + '",freq:"' + d.freq + '",category:"' + d.category + '",urgency:"' + d.urgency + '",detail:"' + d.detail.replace(/"/g, '\\"') + '",workup:[' + workupStr + ']}';
  });

  // If differentials is empty [], insert directly
  // If it has content, prepend a comma
  let insertStr;
  if (sp.isEmpty) {
    insertStr = formatted.join(',');
  } else {
    insertStr = ',' + formatted.join(',');
  }

  html = html.substring(0, sp.diffArrEnd) + insertStr + html.substring(sp.diffArrEnd);
  totalInserted += entries.length;
  symptomsUpdated++;
}

console.log('Inserted ' + totalInserted + ' differential entries into ' + symptomsUpdated + ' symptoms');

// ========================================
// SAVE + VALIDATE
// ========================================
fs.writeFileSync(htmlFile, html, 'utf8');

console.log('\n=== Validation ===');
const newScript = html.match(/<script>([\s\S]*?)<\/script>/);
try {
  new Function(newScript[1]);
  console.log('OK: JavaScript syntax valid');
} catch(e) {
  console.log('FAIL: SYNTAX ERROR: ' + e.message);
}

const zhCount = (html.match(/^\s+zh:\s*"/gm) || []).length;
console.log('Disease count: ' + zhCount + ' (expected: 558)');

try {
  const newDbStart2 = html.indexOf('const DB = { symptoms:');
  const newAgeStart2 = html.indexOf('const AGE_BIAS');
  const dbSection = html.substring(newDbStart2, newAgeStart2);
  const DB2 = (new Function(dbSection + '\nreturn DB;'))();
  console.log('Symptom count: ' + DB2.symptoms.length + ' (expected: 69)');

  let totalDiffs = 0;
  DB2.symptoms.forEach(s => { totalDiffs += (s.differentials || []).length; });
  console.log('Total differential entries: ' + totalDiffs);
} catch(e) {
  console.log('FAIL: Could not parse DB: ' + e.message);
}

console.log(html.includes('</script>') ? 'OK </script>' : 'MISSING </script>');
console.log(html.includes('</body>') ? 'OK </body>' : 'MISSING </body>');
console.log(html.includes('</html>') ? 'OK </html>' : 'MISSING </html>');

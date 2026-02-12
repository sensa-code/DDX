// count-all.js — Count symptoms, diseases, and lab indicators
const fs = require('fs');
const html = fs.readFileSync('vet-differential-diagnosis-v2.html', 'utf8');

// 1. Disease count
const diseaseCount = (html.match(/^\s+zh:\s*"/gm) || []).length;
console.log('疾病 (DISEASE_INFO):', diseaseCount);

// 2. Find all const declarations to understand data structures
const constMatches = html.match(/const\s+[A-Z_]+\s*=/g) || [];
console.log('\n=== All const declarations ===');
constMatches.forEach(c => console.log(' ', c));

// 3. Count symptoms
const sympStart = html.indexOf('const SYMPTOMS =');
if (sympStart !== -1) {
  // Find the end of SYMPTOMS object
  let depth = 0, started = false;
  let sympEnd = sympStart;
  for (let i = sympStart; i < html.length; i++) {
    if (html[i] === '{') { depth++; started = true; }
    else if (html[i] === '}') { depth--; if (started && depth === 0) { sympEnd = i + 1; break; } }
  }
  const sympBlock = html.substring(sympStart, sympEnd);

  // Count top-level category keys (these are symptom categories like "消化系統", "呼吸系統")
  const catMatches = sympBlock.match(/^\s+"[^"]+"\s*:\s*\{/gm) || [];
  console.log('\n症狀類別數:', catMatches.length);

  // Count individual symptoms (nested keys with arrays)
  const symptomMatches = sympBlock.match(/^\s+"[^"]+"\s*:\s*\[/gm) || [];
  console.log('個別症狀數:', symptomMatches.length);
} else {
  console.log('\nSYMPTOMS const not found');
}

// 4. Count lab indicators
const labStart = html.indexOf('const LAB_INDICATORS =');
if (labStart !== -1) {
  let depth = 0, started = false;
  let labEnd = labStart;
  for (let i = labStart; i < html.length; i++) {
    if (html[i] === '{') { depth++; started = true; }
    else if (html[i] === '}') { depth--; if (started && depth === 0) { labEnd = i + 1; break; } }
  }
  const labBlock = html.substring(labStart, labEnd);

  const labCatMatches = labBlock.match(/^\s+"[^"]+"\s*:\s*\{/gm) || [];
  console.log('\n實驗室指標類別數:', labCatMatches.length);

  const labItemMatches = labBlock.match(/^\s+"[^"]+"\s*:\s*\[/gm) || [];
  console.log('個別實驗室指標數:', labItemMatches.length);
} else {
  console.log('\nLAB_INDICATORS const not found');
}

// 5. Count DB aliases
const dbStart = html.indexOf('const DB = {');
if (dbStart !== -1) {
  let depth = 0, started = false;
  let dbEnd = dbStart;
  for (let i = dbStart; i < html.length; i++) {
    if (html[i] === '{') { depth++; started = true; }
    else if (html[i] === '}') { depth--; if (started && depth === 0) { dbEnd = i + 1; break; } }
  }
  const dbBlock = html.substring(dbStart, dbEnd);
  const dbEntries = dbBlock.match(/^\s+"[^"]+"\s*:/gm) || [];
  console.log('\nDB alias entries:', dbEntries.length);
}

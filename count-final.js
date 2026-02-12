// count-final.js — Precise count using script evaluation
const fs = require('fs');
const html = fs.readFileSync('vet-differential-diagnosis-v2.html', 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];

// Execute the script in a sandboxed context to get the actual objects
const vm = require('vm');
const ctx = { console, window: {}, document: { addEventListener: ()=>{}, getElementById: ()=>({}) } };
// We need to mock just enough for the script to define the data constants

// Instead of running the full script, extract just the data constants
// Find boundaries
const diseaseInfoStart = script.indexOf('const DISEASE_INFO = {');
const relatedSympStart = script.indexOf('const RELATED_SYMPTOMS = {');
const labDbStart = script.indexOf('const LAB_DB = { abnormalities:');
const dbStart = script.indexOf('const DB = { symptoms:');
const ageBiasStart = script.indexOf('const AGE_BIAS = {');

// Extract and eval each data section individually
// 1. DB.symptoms count
const dbSection = script.substring(dbStart, ageBiasStart);
const dbFunc = new Function(dbSection + '\nreturn DB;');
const DB = dbFunc();
console.log('=== DB.symptoms (臨床症狀) ===');
console.log('總症狀數:', DB.symptoms.length);

// Count by section
const sections = {};
DB.symptoms.forEach(s => {
  const key = s.section + ' ' + s.sectionName;
  if (!sections[key]) sections[key] = 0;
  sections[key]++;
});
console.log('\n按分類:');
Object.entries(sections).forEach(([k, v]) => console.log('  ' + k + ': ' + v + ' 症狀'));

// Count total differentials across all symptoms
let totalDiffs = 0;
let uniqueDiffs = new Set();
DB.symptoms.forEach(s => {
  if (s.differentials) {
    totalDiffs += s.differentials.length;
    s.differentials.forEach(d => uniqueDiffs.add(d.en));
  }
});
console.log('\n鑑別診斷條目總數 (含重複):', totalDiffs);
console.log('不重複鑑別診斷數:', uniqueDiffs.size);

// 2. LAB_DB count
const labSection = script.substring(labDbStart, script.indexOf('const SYMPTOM_LAB_LINKS'));
const labFunc = new Function(labSection + '\nreturn LAB_DB;');
const LAB_DB = labFunc();
console.log('\n=== LAB_DB (實驗室指標) ===');
console.log('總指標數:', LAB_DB.abnormalities.length);

const labCategories = {};
LAB_DB.abnormalities.forEach(a => {
  if (!labCategories[a.category]) labCategories[a.category] = 0;
  labCategories[a.category]++;
});
console.log('\n按類別:');
Object.entries(labCategories).forEach(([k, v]) => console.log('  ' + k + ': ' + v + ' 指標'));

// 3. DISEASE_INFO count
const diseaseInfoSection = script.substring(diseaseInfoStart, relatedSympStart);
const diFunc = new Function(diseaseInfoSection + '\nreturn Object.keys(DISEASE_INFO).length;');
const diseaseCount = diFunc();
console.log('\n=== DISEASE_INFO (疾病詳細資料) ===');
console.log('疾病數:', diseaseCount);

console.log('\n========== 總結 ==========');
console.log('臨床症狀:', DB.symptoms.length);
console.log('鑑別診斷疾病:', diseaseCount);
console.log('實驗室指標:', LAB_DB.abnormalities.length);

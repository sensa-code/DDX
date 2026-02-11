const fs = require('fs');
const html = fs.readFileSync('vet-differential-diagnosis-v2.html', 'utf8');

// Count symptom entries (each has id: "...")
const symptomIds = html.match(/id:\s*"[^"]+",\s*\n\s*zhName:/g) || [];
console.log('症狀條目數:', symptomIds.length);

// Count differentials (each has { zh: "...", en: "..." })
const diffEntries = html.match(/\{\s*zh:\s*"[^"]+",\s*en:\s*"[^"]+",\s*species:/g) || [];
console.log('鑑別診斷連結總數:', diffEntries.length);

if (symptomIds.length > 0) {
    console.log('平均每症狀鑑別數:', (diffEntries.length / symptomIds.length).toFixed(1));
}

// Extract symptom names and their differential counts
const dbStart = html.indexOf('const DB');
const dbEnd = html.indexOf('\n// ====', dbStart + 100);
const dbSection = html.substring(dbStart, dbEnd > 0 ? dbEnd : dbStart + 500000);

const symptomRegex = /id:\s*"([^"]+)",\s*\n\s*zhName:\s*"([^"]+)"/g;
const symptoms = [];
let m;
while (m = symptomRegex.exec(dbSection)) {
    symptoms.push({ id: m[1], zh: m[2] });
}

// Count differentials per symptom by finding blocks between symptom IDs
console.log('\n━━━ 症狀鑑別診斷詳細統計 ━━━');
console.log(`\n共 ${symptoms.length} 個症狀條目\n`);

// Count sections
const sections = new Set();
const sectionRegex = /sectionName:\s*"([^"]+)"/g;
while (m = sectionRegex.exec(dbSection)) {
    sections.add(m[1]);
}
console.log('系統分區數:', sections.size);
sections.forEach(s => console.log('  •', s));

// For each symptom, count differentials by finding the range in text
let totalDiffs = 0;
const symptomStats = [];

for (let i = 0; i < symptoms.length; i++) {
    const startPos = dbSection.indexOf(`id: "${symptoms[i].id}"`);
    const endPos = i < symptoms.length - 1
        ? dbSection.indexOf(`id: "${symptoms[i+1].id}"`)
        : dbSection.length;

    const block = dbSection.substring(startPos, endPos);
    const diffs = (block.match(/\{\s*zh:\s*"[^"]+",\s*en:\s*"[^"]+",\s*species:/g) || []).length;
    totalDiffs += diffs;
    symptomStats.push({ id: symptoms[i].id, zh: symptoms[i].zh, differentials: diffs });
}

console.log('\n總鑑別診斷連結數:', totalDiffs);
console.log('平均每症狀:', (totalDiffs / symptoms.length).toFixed(1));

// Top 20 by differential count
symptomStats.sort((a, b) => b.differentials - a.differentials);
console.log('\nTop 20 症狀 (按鑑別數量):');
symptomStats.slice(0, 20).forEach((s, i) => {
    console.log(`  ${(i+1).toString().padStart(2)}. ${s.zh.padEnd(20)} (${s.id}): ${s.differentials} 個鑑別`);
});

// Bottom 5 (least differentials)
console.log('\nBottom 5 (最少鑑別):');
symptomStats.slice(-5).reverse().forEach((s, i) => {
    console.log(`  ${s.zh} (${s.id}): ${s.differentials} 個鑑別`);
});

// Distribution
const dist = {};
symptomStats.forEach(s => {
    const bucket = Math.floor(s.differentials / 5) * 5;
    const label = `${bucket}-${bucket+4}`;
    dist[label] = (dist[label] || 0) + 1;
});
console.log('\n鑑別數量分佈:');
Object.entries(dist).sort((a,b) => parseInt(a[0]) - parseInt(b[0])).forEach(([range, count]) => {
    console.log(`  ${range.padEnd(8)} 個鑑別: ${count} 個症狀 ${'█'.repeat(count)}`);
});

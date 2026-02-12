// find-duplicate-ids.js — Find space vs hyphen duplicate disease IDs
const fs = require('fs');
const html = fs.readFileSync('vet-differential-diagnosis-v2.html', 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];

// Extract DISEASE_INFO
const diStart = script.indexOf('const DISEASE_INFO = {');
const relSympStart = script.indexOf('const RELATED_SYMPTOMS = {');
const diSection = script.substring(diStart, relSympStart);
const DISEASE_INFO = (new Function(diSection + '\nreturn DISEASE_INFO;'))();

const allIds = Object.keys(DISEASE_INFO);
console.log('Total disease IDs:', allIds.length);

// Separate space-IDs and hyphen-IDs
const spaceIds = allIds.filter(id => id.includes(' '));
const hyphenIds = allIds.filter(id => id.includes('-') && !id.includes(' '));
const otherIds = allIds.filter(id => !id.includes(' ') && !id.includes('-'));

console.log('Space-separated IDs:', spaceIds.length);
console.log('Hyphen-separated IDs:', hyphenIds.length);
console.log('Other (single word):', otherIds.length);

// Find duplicates: space version and hyphen version both exist
const duplicates = [];
for (const spId of spaceIds) {
  const hypId = spId.replace(/ /g, '-');
  if (DISEASE_INFO[hypId]) {
    // Both exist — compare completeness
    const spInfo = DISEASE_INFO[spId];
    const hypInfo = DISEASE_INFO[hypId];

    // Count non-empty fields
    function fieldScore(obj) {
      let score = 0;
      for (const [key, val] of Object.entries(obj)) {
        if (val === null || val === undefined || val === '') continue;
        if (typeof val === 'string' && val.length > 10) score += val.length;
        else if (Array.isArray(val)) score += val.length * 10;
        else if (typeof val === 'object') score += JSON.stringify(val).length;
        else score += 1;
      }
      return score;
    }

    const spScore = fieldScore(spInfo);
    const hypScore = fieldScore(hypInfo);

    duplicates.push({
      spaceId: spId,
      hyphenId: hypId,
      spaceScore: spScore,
      hyphenScore: hypScore,
      keep: hypScore >= spScore ? 'hyphen' : 'space',
      spaceZh: spInfo.zh,
      hyphenZh: hypInfo.zh
    });
  }
}

// Space IDs with no hyphen counterpart
const spaceOnly = spaceIds.filter(id => !DISEASE_INFO[id.replace(/ /g, '-')]);

console.log('\n=== DUPLICATES (both space and hyphen exist) ===');
console.log('Count:', duplicates.length);
duplicates.forEach((d, i) => {
  console.log('\n' + (i+1) + '. "' + d.spaceId + '" vs "' + d.hyphenId + '"');
  console.log('   Space score:', d.spaceScore, '(' + d.spaceZh + ')');
  console.log('   Hyphen score:', d.hyphenScore, '(' + d.hyphenZh + ')');
  console.log('   → Keep:', d.keep);
});

console.log('\n=== SPACE-ONLY IDs (no hyphen counterpart) ===');
console.log('Count:', spaceOnly.length);
spaceOnly.forEach((id, i) => {
  console.log('  ' + (i+1) + '. "' + id + '" (' + DISEASE_INFO[id].zh + ')');
});

// Output JSON for normalize script
const result = {
  duplicates: duplicates.map(d => ({
    remove: d.keep === 'hyphen' ? d.spaceId : d.hyphenId,
    keep: d.keep === 'hyphen' ? d.hyphenId : d.spaceId,
    zh: d.keep === 'hyphen' ? d.hyphenZh : d.spaceZh
  })),
  renameToHyphen: spaceOnly.map(id => ({
    from: id,
    to: id.replace(/ /g, '-'),
    zh: DISEASE_INFO[id].zh
  }))
};

fs.writeFileSync('duplicate-ids.json', JSON.stringify(result, null, 2), 'utf8');
console.log('\nWrote duplicate-ids.json');

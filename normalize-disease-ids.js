// normalize-disease-ids.js — Remove 54 space-ID duplicates + rename 10 space-only IDs
const fs = require('fs');

const htmlFile = 'vet-differential-diagnosis-v2.html';
let html = fs.readFileSync(htmlFile, 'utf8');
const dupData = JSON.parse(fs.readFileSync('duplicate-ids.json', 'utf8'));

const diStart = html.indexOf('const DISEASE_INFO = {');
const dbStart = html.indexOf('const DB = { symptoms:');

// Helper: find disease block boundaries within DISEASE_INFO
function findDiseaseBlock(diseaseId) {
  const searchStr = '"' + diseaseId + '":';
  let idx = html.indexOf(searchStr, diStart);
  if (idx === -1 || idx > dbStart) return null;

  // Find opening brace
  const braceStart = html.indexOf('{', idx);
  if (braceStart === -1 || braceStart > dbStart) return null;

  // Brace-count to find closing
  let depth = 0, blockEnd = braceStart;
  for (let i = braceStart; i < dbStart; i++) {
    if (html[i] === '{') depth++;
    else if (html[i] === '}') {
      depth--;
      if (depth === 0) { blockEnd = i + 1; break; }
    }
  }

  // Extend to include the key line and trailing comma
  // Look backward for the start of the key line
  let lineStart = idx;
  while (lineStart > diStart && html[lineStart - 1] !== '\n') lineStart--;

  // Look forward for trailing comma and newline
  let lineEnd = blockEnd;
  while (lineEnd < dbStart && html[lineEnd] !== '\n') lineEnd++;
  lineEnd++; // include the newline

  return { start: lineStart, end: lineEnd, id: diseaseId };
}

// Phase 1: Remove 54 duplicate space-IDs (keep hyphen version)
const toRemove = dupData.duplicates.map(d => d.remove);
console.log('=== Removing', toRemove.length, 'duplicate space-ID entries ===');

let removals = [];
for (const id of toRemove) {
  const block = findDiseaseBlock(id);
  if (block) {
    removals.push(block);
  } else {
    console.log('WARN: could not find block for "' + id + '"');
  }
}

// Sort by descending position and remove
removals.sort((a, b) => b.start - a.start);
for (const r of removals) {
  console.log('  Removing "' + r.id + '" at pos ' + r.start + '-' + r.end + ' (' + (r.end - r.start) + ' chars)');
  html = html.substring(0, r.start) + html.substring(r.end);
}

console.log('\nRemoved', removals.length, 'entries');

// Phase 2: Rename 10 space-only IDs to hyphen format
console.log('\n=== Renaming', dupData.renameToHyphen.length, 'space-only IDs ===');
for (const rename of dupData.renameToHyphen) {
  const oldKey = '"' + rename.from + '":';
  const newKey = '"' + rename.to + '":';
  // Must only replace within DISEASE_INFO section
  const currentDiStart = html.indexOf('const DISEASE_INFO = {');
  const currentDbStart = html.indexOf('const DB = { symptoms:');
  const idx = html.indexOf(oldKey, currentDiStart);
  if (idx === -1 || idx > currentDbStart) {
    console.log('  WARN: "' + rename.from + '" not found');
    continue;
  }
  html = html.substring(0, idx) + newKey + html.substring(idx + oldKey.length);
  console.log('  Renamed "' + rename.from + '" → "' + rename.to + '"');
}

// Phase 3: Update DISEASE_ALIASES that point to space-IDs
console.log('\n=== Updating DISEASE_ALIASES ===');
const aliasStart = html.indexOf('const DISEASE_ALIASES = {');
const aliasEnd = html.indexOf('const DISEASE_INFO = {');
let aliasSection = html.substring(aliasStart, aliasEnd);

let aliasUpdates = 0;
// For removed duplicates: alias targets should point to hyphen version
for (const d of dupData.duplicates) {
  const oldTarget = '"' + d.remove + '"';
  const newTarget = '"' + d.keep + '"';
  if (aliasSection.includes(oldTarget)) {
    aliasSection = aliasSection.split(oldTarget).join(newTarget);
    aliasUpdates++;
  }
}
// For renamed IDs
for (const r of dupData.renameToHyphen) {
  const oldTarget = '"' + r.from + '"';
  const newTarget = '"' + r.to + '"';
  if (aliasSection.includes(oldTarget)) {
    aliasSection = aliasSection.split(oldTarget).join(newTarget);
    aliasUpdates++;
  }
}
html = html.substring(0, aliasStart) + aliasSection + html.substring(aliasEnd);
console.log('Updated', aliasUpdates, 'alias targets');

// Save
fs.writeFileSync(htmlFile, html, 'utf8');

// Validate
console.log('\n=== Validation ===');
const script = html.match(/<script>([\s\S]*?)<\/script>/);
try {
  new Function(script[1]);
  console.log('✓ JavaScript syntax valid');
} catch(e) {
  console.log('✗ SYNTAX ERROR: ' + e.message);
}

const diseaseCount = (html.match(/^\s+zh:\s*"/gm) || []).length;
console.log('Diseases:', diseaseCount, '(expected: ' + (612 - removals.length) + ')');
console.log(html.includes('</script>') ? 'OK </script>' : 'MISSING </script>');
console.log(html.includes('</body>') ? 'OK </body>' : 'MISSING </body>');
console.log(html.includes('</html>') ? 'OK </html>' : 'MISSING </html>');

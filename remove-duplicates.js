const fs = require('fs');

console.log('=== 移除重複疾病 ID ===\n');

let html = fs.readFileSync('vet-differential-diagnosis-v2.html', 'utf8');
const originalSize = html.length;

// Find and track all disease entries with their positions
const script = html.match(/<script>([\s\S]*?)<\/script>/);
if (!script) { console.log('ERROR: No script tag'); process.exit(1); }

const scriptContent = script[1];
const scriptStart = html.indexOf(script[1]);

// Find DISEASE_INFO block
const diStart = scriptContent.indexOf('const DISEASE_INFO = {');
if (diStart === -1) { console.log('ERROR: No DISEASE_INFO'); process.exit(1); }

// Parse disease entries to find duplicates
// Strategy: find all "disease-id": { entries and their positions
const entryPattern = /  "([a-z][a-z0-9-]+)": \{/g;
let match;
const entries = [];
while ((match = entryPattern.exec(scriptContent)) !== null) {
    // Only consider entries inside DISEASE_INFO
    if (match.index > diStart) {
        entries.push({ id: match[1], pos: match.index });
    }
}

// Group by ID
const byId = {};
for (const entry of entries) {
    if (!byId[entry.id]) byId[entry.id] = [];
    byId[entry.id].push(entry.pos);
}

// Find duplicates
const duplicates = {};
for (const [id, positions] of Object.entries(byId)) {
    if (positions.length > 1) {
        duplicates[id] = positions;
    }
}

console.log('Found duplicates:', Object.keys(duplicates));

if (Object.keys(duplicates).length === 0) {
    console.log('No duplicates to remove');
    process.exit(0);
}

// For each duplicate, keep the FIRST occurrence and remove subsequent ones
// We need to find the boundaries of each duplicate entry to remove
let removals = [];

for (const [id, positions] of Object.entries(duplicates)) {
    // Keep first, remove rest
    for (let i = 1; i < positions.length; i++) {
        const entryStart = positions[i];
        // Find the start of the entry including the preceding comma
        // Look backwards for the comma before this entry
        let commaPos = entryStart;
        while (commaPos > 0 && scriptContent[commaPos - 1] !== ',') {
            commaPos--;
        }
        if (scriptContent[commaPos - 1] === ',') {
            commaPos--; // include the comma
        }

        // Find the end of this entry - need to match braces
        let braceCount = 0;
        let endPos = scriptContent.indexOf('{', entryStart);
        for (let j = endPos; j < scriptContent.length; j++) {
            if (scriptContent[j] === '{') braceCount++;
            if (scriptContent[j] === '}') {
                braceCount--;
                if (braceCount === 0) {
                    endPos = j + 1;
                    break;
                }
            }
        }

        removals.push({ id, from: commaPos, to: endPos });
        console.log(`  Will remove duplicate "${id}" at position ${commaPos}-${endPos}`);
    }
}

// Sort removals by position (descending) to remove from end first
removals.sort((a, b) => b.from - a.from);

// Apply removals to script content
let newScript = scriptContent;
for (const removal of removals) {
    newScript = newScript.substring(0, removal.from) + newScript.substring(removal.to);
}

// Reconstruct HTML
const newHtml = html.substring(0, scriptStart) + newScript + html.substring(scriptStart + scriptContent.length);

// Validate
const newScriptMatch = newHtml.match(/<script>([\s\S]*?)<\/script>/);
try {
    new Function(newScriptMatch[1]);
    console.log('\nJavaScript syntax: OK');
} catch (e) {
    console.log('\nJavaScript syntax ERROR:', e.message);
    console.log('NOT saving - fix manually');
    process.exit(1);
}

// Verify structure
if (!newHtml.includes('</script>') || !newHtml.includes('</body>') || !newHtml.includes('</html>')) {
    console.log('ERROR: Structure incomplete');
    process.exit(1);
}

const newCount = (newHtml.match(/^\s+zh:\s*"/gm) || []).length;
console.log('Disease count after dedup:', newCount);
console.log('Removed:', (html.match(/^\s+zh:\s*"/gm) || []).length - newCount, 'duplicates');

fs.writeFileSync('vet-differential-diagnosis-v2.html', newHtml, 'utf8');
console.log('\nSaved successfully');

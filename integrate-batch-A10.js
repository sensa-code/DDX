// integrate-batch-A10.js — Replace last 9 simplified disease blocks
const fs = require('fs');
const data = require('./batch-A10-data.js');

const htmlFile = 'vet-differential-diagnosis-v2.html';
let html = fs.readFileSync(htmlFile, 'utf8');

function toUnquotedJS(obj, indent = 4) {
  const pad = ' '.repeat(indent);
  const pad2 = ' '.repeat(indent + 2);
  const pad3 = ' '.repeat(indent + 4);

  let lines = [];
  for (const [key, val] of Object.entries(obj)) {
    if (typeof val === 'string') {
      const escaped = val.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      lines.push(`${pad}${key}: "${escaped}"`);
    } else if (Array.isArray(val)) {
      if (val.length === 0) {
        lines.push(`${pad}${key}: []`);
      } else if (typeof val[0] === 'string') {
        const items = val.map(v => `"${v.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`);
        if (items.join(', ').length < 80) {
          lines.push(`${pad}${key}: [${items.join(', ')}]`);
        } else {
          lines.push(`${pad}${key}: [${items.map(i => `\n${pad2}${i}`).join(',')}
${pad}]`);
        }
      } else if (typeof val[0] === 'object') {
        let stepLines = val.map(step => {
          let parts = [];
          for (const [sk, sv] of Object.entries(step)) {
            if (typeof sv === 'number') parts.push(`${sk}: ${sv}`);
            else if (typeof sv === 'string') parts.push(`${sk}: "${sv.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`);
            else if (Array.isArray(sv)) {
              const arrItems = sv.map(a => `"${a.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`);
              parts.push(`${sk}: [${arrItems.join(', ')}]`);
            }
          }
          return `${pad3}{ ${parts.join(', ')} }`;
        });
        lines.push(`${pad}${key}: [\n${stepLines.join(',\n')}\n${pad}]`);
      }
    } else if (typeof val === 'object' && val !== null) {
      let innerLines = [];
      for (const [ik, iv] of Object.entries(val)) {
        if (typeof iv === 'string') {
          innerLines.push(`${pad2}${ik}: "${iv.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`);
        } else if (Array.isArray(iv)) {
          if (typeof iv[0] === 'string') {
            const items = iv.map(v => `"${v.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`);
            if (items.join(', ').length < 80) {
              innerLines.push(`${pad2}${ik}: [${items.join(', ')}]`);
            } else {
              innerLines.push(`${pad2}${ik}: [\n${items.map(i => `${pad3}${i}`).join(',\n')}\n${pad2}]`);
            }
          } else if (typeof iv[0] === 'object') {
            let stepLines = iv.map(step => {
              let parts = [];
              for (const [sk, sv] of Object.entries(step)) {
                if (typeof sv === 'number') parts.push(`${sk}: ${sv}`);
                else if (typeof sv === 'string') parts.push(`${sk}: "${sv.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`);
                else if (Array.isArray(sv)) {
                  const arrItems = sv.map(a => `"${a.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`);
                  parts.push(`${sk}: [${arrItems.join(', ')}]`);
                }
              }
              return `${pad3}{ ${parts.join(', ')} }`;
            });
            innerLines.push(`${pad2}${ik}: [\n${stepLines.join(',\n')}\n${pad2}]`);
          }
        }
      }
      lines.push(`${pad}${key}: {\n${innerLines.join(',\n')}\n${pad}}`);
    }
  }
  return lines.join(',\n');
}

let replacedCount = 0;

for (const [diseaseId, diseaseData] of Object.entries(data)) {
  const searchStr = `"${diseaseId}":`;
  const startIdx = html.indexOf(searchStr);

  if (startIdx === -1) {
    console.error(`ERROR: Disease "${diseaseId}" not found in HTML!`);
    continue;
  }

  const braceStart = html.indexOf('{', startIdx);
  let braceCount = 0;
  let endIdx = braceStart;

  for (let i = braceStart; i < html.length; i++) {
    if (html[i] === '{') braceCount++;
    else if (html[i] === '}') {
      braceCount--;
      if (braceCount === 0) { endIdx = i + 1; break; }
    }
  }

  const newBlock = `"${diseaseId}": {\n${toUnquotedJS(diseaseData)}\n    }`;
  html = html.substring(0, startIdx) + newBlock + html.substring(endIdx);

  replacedCount++;
  console.log(`✓ Replaced ${diseaseId}`);
}

fs.writeFileSync(htmlFile, html, 'utf8');
console.log(`\n=== Replaced ${replacedCount}/${Object.keys(data).length} diseases ===`);

const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
try {
  new Function(scriptMatch[1]);
  console.log('✓ JavaScript syntax valid');
} catch (e) {
  console.error('✗ JavaScript syntax ERROR:', e.message);
}

const zhCount = (html.match(/^\s+zh:\s*\"/gm) || []).length;
console.log(`Disease count: ${zhCount}`);

['</script>', '</body>', '</html>'].forEach(tag => {
  console.log(html.includes(tag) ? `✓ ${tag}` : `✗ MISSING ${tag}`);
});

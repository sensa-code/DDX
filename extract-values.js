// extract-values.js — Extract actual definition/pathophysiology/prognosis values
const fs = require('fs');

const html = fs.readFileSync('vet-differential-diagnosis-v2.html', 'utf8');
const diStart = html.indexOf('const DISEASE_INFO = {');
const dbStart = html.indexOf('const DB = {');
const diBlock = html.substring(diStart, dbStart);

const ids = ['pancreatitis', 'hypoadrenocorticism', 'lymphoma', 'hypoglycemia', 'hyperkalemia',
             'hepatic lipidosis', 'portosystemic shunt', 'gastric dilatation-volvulus',
             'parvovirus', 'pyometra', 'hyperthyroidism', 'hypothyroidism',
             'inflammatory bowel disease', 'dilated cardiomyopathy', 'hypertrophic cardiomyopathy',
             'diabetes mellitus', 'insulinoma', 'hyperglycemia', 'hypercalcemia', 'hypocalcemia',
             'hypokalemia'];

for (const id of ids) {
  const searchStr = '"' + id + '":';
  const idx = diBlock.indexOf(searchStr);
  if (idx === -1) { console.log(id + ': NOT FOUND'); continue; }

  // Extract the block for this disease (find next disease or end)
  const blockStart = idx;
  const braceStart = diBlock.indexOf('{', idx);
  let depth = 0, blockEnd = braceStart;
  for (let i = braceStart; i < diBlock.length; i++) {
    if (diBlock[i] === '{') depth++;
    else if (diBlock[i] === '}') { depth--; if (depth === 0) { blockEnd = i + 1; break; } }
  }
  const block = diBlock.substring(blockStart, blockEnd);

  // Use indexOf to find field values more reliably
  function extractField(block, fieldName) {
    const fieldIdx = block.indexOf(fieldName + ': "');
    if (fieldIdx === -1) return null;
    const valueStart = fieldIdx + fieldName.length + 3; // skip ': "'
    // Find the closing quote (handle escaped quotes)
    let i = valueStart;
    while (i < block.length) {
      if (block[i] === '\\') { i += 2; continue; }
      if (block[i] === '"') break;
      i++;
    }
    return block.substring(valueStart, i);
  }

  const def = extractField(block, 'definition');
  const patho = extractField(block, 'pathophysiology');
  const prog = extractField(block, 'prognosis');

  console.log('=== ' + id + ' ===');
  console.log('DEF(' + (def?.length||0) + '): ' + def?.substring(0, 80));
  console.log('PATHO(' + (patho?.length||0) + '): ' + patho?.substring(0, 80));
  console.log('PROG(' + (prog?.length||0) + '): ' + prog?.substring(0, 80));
  console.log();
}

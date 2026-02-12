const d = JSON.parse(require('fs').readFileSync('E:\\CLAUDE CODE\\BOOK\\batch-algo-1.json','utf8'));
const keys = Object.keys(d);
let ok = true;
for (const k of keys) {
  const a = d[k].diagnosticAlgorithm;
  if (!a.title || !a.steps) { ok = false; console.log('Missing title/steps:', k); continue; }
  for (const s of a.steps) {
    if (!s.step || !s.action || !s.details || !s.findings || !Array.isArray(s.findings)) {
      ok = false; console.log('Bad step in', k, s);
    }
    if (s.findings.length < 2 || s.findings.length > 4) {
      console.log(`Findings count ${s.findings.length} in ${k} step ${s.step}`);
    }
  }
}
console.log('All valid:', ok);
console.log('First 5 keys:', keys.slice(0, 5));
console.log('Last 5 keys:', keys.slice(-5));

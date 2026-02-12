/**
 * Extract disease names from collected CVA chunks in rag-query-progress.json
 * Uses multiple heuristics to find disease entry names.
 */
const fs = require('fs');
const path = require('path');

const PROGRESS_FILE = path.join(__dirname, 'rag-query-progress.json');
const OUTPUT_FILE = path.join(__dirname, 'rag-disease-list.json');

const progress = JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8'));
console.log('Total chunks loaded:', progress.chunks.length);

const diseases = new Map(); // name -> { name, chunkNum, source, ... }

for (const chunk of progress.chunks) {
  if (!chunk.content) continue;

  const content = chunk.content;
  const lines = content.split('\n').map(l => l.trim()).filter(Boolean);

  // Extract chunk number
  const chunkMatch = chunk.title ? chunk.title.match(/片段 (\d+)/) : null;
  const chunkNum = chunkMatch ? parseInt(chunkMatch[1]) : null;

  // -------------------------------------------------------
  // Heuristic 1: After "EDITOR:" line -> next disease name
  // -------------------------------------------------------
  for (let idx = 0; idx < lines.length - 1; idx++) {
    if (lines[idx].startsWith('EDITOR:')) {
      // Skip URL and date lines, find the actual disease name
      for (let j = idx + 1; j < Math.min(idx + 5, lines.length); j++) {
        const candidate = lines[j];
        if (!candidate) continue;
        if (candidate.startsWith('http')) continue;
        if (candidate.match(/^\d+ de \d+/)) continue;      // "3 de 3" page markers
        if (candidate.match(/^\d{2}-\d{2}-\d{4}/)) continue; // dates
        if (candidate.startsWith('EDITOR:')) continue;
        if (candidate.startsWith('AUTHOR:')) continue;
        if (candidate.startsWith('1ST EDITION')) continue;
        if (candidate.length <= 3 || candidate.length >= 150) continue;

        // This should be the disease name
        if (!diseases.has(candidate)) {
          diseases.set(candidate, { name: candidate, chunkNum, source: 'after_editor' });
        }
        break;
      }
    }
  }

  // -------------------------------------------------------
  // Heuristic 2: Line immediately before "BASIC INFORMATION"
  // -------------------------------------------------------
  const basicIdx = lines.findIndex(l => l === 'BASIC INFORMATION' || l === 'BASIC INFORMATION ');
  if (basicIdx > 0) {
    // Work backwards to find the disease name
    for (let j = basicIdx - 1; j >= Math.max(0, basicIdx - 5); j--) {
      const candidate = lines[j];
      if (!candidate) continue;
      if (candidate.startsWith('http')) continue;
      if (candidate.match(/^\d+ de \d+/)) continue;
      if (candidate.match(/^\d{2}-\d{2}-\d{4}/)) continue;
      if (candidate.startsWith('EDITOR:')) continue;
      if (candidate.startsWith('AUTHOR:')) continue;
      if (candidate.startsWith('1ST EDITION')) continue;
      if (candidate.length <= 3 || candidate.length >= 150) continue;

      if (!diseases.has(candidate)) {
        diseases.set(candidate, { name: candidate, chunkNum, source: 'before_basic_info' });
      }
      break;
    }
  }

  // -------------------------------------------------------
  // Heuristic 3: "EDITOR: NAME\nDisease Name" in raw content
  // -------------------------------------------------------
  const editorPattern = /EDITOR:\s*[A-Z][A-Z\s.,]+\n([A-Z][A-Za-z\s,\-:()\/]+?)(?:\n|$)/g;
  let match;
  while ((match = editorPattern.exec(content)) !== null) {
    const candidate = match[1].trim();
    if (candidate.length > 3 && candidate.length < 150) {
      if (!candidate.startsWith('http') && !candidate.match(/^\d/)) {
        if (!diseases.has(candidate)) {
          diseases.set(candidate, { name: candidate, chunkNum, source: 'regex_after_editor' });
        }
      }
    }
  }

  // -------------------------------------------------------
  // Heuristic 4: "1ST EDITION AUTHOR:" -> next disease name
  // -------------------------------------------------------
  for (let idx = 0; idx < lines.length - 1; idx++) {
    if (lines[idx].startsWith('1ST EDITION AUTHOR:') || lines[idx].startsWith('1ST EDITION AUTHORS:')) {
      for (let j = idx + 1; j < Math.min(idx + 5, lines.length); j++) {
        const candidate = lines[j];
        if (!candidate) continue;
        if (candidate.startsWith('http')) continue;
        if (candidate.match(/^\d+ de \d+/)) continue;
        if (candidate.match(/^\d{2}-\d{2}-\d{4}/)) continue;
        if (candidate.startsWith('EDITOR:')) continue;
        if (candidate.startsWith('AUTHOR:')) continue;
        if (candidate.startsWith('1ST EDITION')) continue;
        if (candidate.length <= 3 || candidate.length >= 150) continue;

        if (!diseases.has(candidate)) {
          diseases.set(candidate, { name: candidate, chunkNum, source: 'after_1st_edition' });
        }
        break;
      }
    }
  }
}

// -------------------------------------------------------
// Clean and deduplicate
// -------------------------------------------------------
const cleaned = [];
for (const [key, d] of diseases) {
  let name = d.name.trim();

  // Remove leading/trailing junk characters
  name = name.replace(/^[\s\-–—:;,]+/, '').replace(/[\s\-–—:;,]+$/, '');

  // Skip if contains URL fragments
  if (name.includes('http') || name.includes('.com') || name.includes('.php')) continue;

  // Skip page numbers
  if (name.match(/^\d+$/)) continue;

  // Skip "X de Y" patterns
  if (name.match(/^\d+ de \d+$/)) continue;

  // Skip date patterns
  if (name.match(/^\d{2}-\d{2}-\d{4}/)) continue;

  // Skip lines starting with lowercase (sentence fragments)
  if (name.match(/^[a-z]/)) continue;

  // Skip very short or containing only numbers
  if (name.length < 4) continue;

  // Skip common non-disease headers and non-disease entries
  const skipPatterns = ['TREATMENT', 'DIAGNOSIS', 'PROGNOSIS', 'CLINICAL',
    'ETIOLOGY', 'SUGGESTED', 'PEARLS', 'COMMENTS', 'PREVENTION',
    'BASIC INFORMATION', 'DEFINITION', 'EPIDEMIOLOGY',
    'RECOMMENDED', 'MISCELLANEOUS', 'DRUG', 'CONTRAINDICATIONS',
    'PRECAUTIONS', 'INTERACTION', 'SYNONYMS',
    'ADVANCED OR CONFIRMATORY', 'INITIAL DATABASE',
    'ASSOCIATED CONDITIONS', 'Pricing Information',
    'Copyright', 'Table of Contents', 'Index', 'Appendix'];
  if (skipPatterns.some(p => name.startsWith(p))) continue;

  // Clean up "1 21:24" type prefixes
  name = name.replace(/^\d+\s+\d{2}:\d{2}\s*/, '');

  // Fix broken parentheses (e.g., "Vitamin B1) Deficiency" -> "Vitamin B1 Deficiency")
  name = name.replace(/(\w)\)\s/g, '$1 ');

  if (name.length >= 4 && name.length < 150) {
    cleaned.push({ ...d, name });
  }
}

// Deduplicate by normalized name
const deduped = new Map();
for (const d of cleaned) {
  const key = d.name.toLowerCase().replace(/\s+/g, ' ');
  if (!deduped.has(key)) {
    deduped.set(key, d);
  }
}

const diseaseList = Array.from(deduped.values()).sort((a, b) => a.name.localeCompare(b.name));

console.log('\n========================================');
console.log(`Diseases extracted: ${diseaseList.length}`);
console.log('========================================\n');

diseaseList.forEach((d, i) => {
  console.log(`  ${i + 1}. ${d.name} [chunk ${d.chunkNum || '?'}, ${d.source}]`);
});

// Save output
const output = {
  metadata: {
    source: 'Clinical Veterinary Advisor (Cote)',
    queryTimestamp: new Date().toISOString(),
    supabaseUrl: 'https://iizotzzzfhqswjmcotil.supabase.co',
    cvaBookId: '4fb2382b-eb2b-48e8-8bd6-0a611bde1af1',
    totalCvaChunks: 12248,
    chunksRetrieved: progress.chunks.length,
    coveragePercent: (progress.chunks.length / 12248 * 100).toFixed(1),
    diseasesExtracted: diseaseList.length,
    method: 'rag_match_documents with random vector sampling + multi-heuristic extraction',
    note: 'rag_hybrid_search has a DB bug (real vs double precision). Used vector sampling instead. Only ~5% of chunks were retrievable due to the 40-result limit per query.',
  },
  diseases: diseaseList.map(d => ({
    name: d.name,
    chunkNumber: d.chunkNum,
    source: d.source,
  })),
  allChunkNumbers: progress.chunks
    .map(c => {
      const m = c.title ? c.title.match(/片段 (\d+)/) : null;
      return m ? parseInt(m[1]) : null;
    })
    .filter(Boolean)
    .sort((a, b) => a - b),
};

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2), 'utf8');
console.log(`\nResults saved to: ${OUTPUT_FILE}`);

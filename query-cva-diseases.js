/**
 * Query Supabase RAG database for Clinical Veterinary Advisor disease entries.
 *
 * Strategy: Since rag_hybrid_search has a DB bug, and rag_match_documents
 * returns limited results per query, we'll use many diverse random vectors
 * to sample the entire embedding space and collect as many CVA chunks as possible.
 *
 * Then we'll parse the content to extract disease names.
 */

const https = require('https');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const SUPABASE_URL = 'https://iizotzzzfhqswjmcotil.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlpem90enp6Zmhxc3dqbWNvdGlsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDIyMzUzNCwiZXhwIjoyMDg1Nzk5NTM0fQ.tNpM0fWimEGNux7cs3dZGgCVAuh4W83kGqdxujh5x0A';
const OUTPUT_FILE = path.join(__dirname, 'rag-disease-list.json');
const PROGRESS_FILE = path.join(__dirname, 'rag-query-progress.json');

const CVA_BOOK_ID = '4fb2382b-eb2b-48e8-8bd6-0a611bde1af1';
const EMBEDDING_DIM = 1536;

// ============================================================
// HTTP helper
// ============================================================
function request(method, urlPath, body = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(urlPath, SUPABASE_URL);
    const options = {
      hostname: url.hostname,
      port: 443,
      path: url.pathname + url.search,
      method,
      headers: {
        'apikey': SERVICE_ROLE_KEY,
        'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation',
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        resolve({ status: res.statusCode, headers: res.headers, body: data });
      });
    });

    req.on('error', (err) => reject(err));
    req.setTimeout(60000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });

    if (body) {
      req.write(typeof body === 'string' ? body : JSON.stringify(body));
    }
    req.end();
  });
}

async function rpc(fnName, params = {}) {
  const res = await request('POST', `/rest/v1/rpc/${fnName}`, params);
  if (res.status === 200) {
    return JSON.parse(res.body);
  }
  throw new Error(`RPC ${fnName} failed (${res.status}): ${res.body.substring(0, 300)}`);
}

// ============================================================
// Generate normalized random vectors using deterministic seeding
// ============================================================
function generateRandomVector(seed) {
  // Use the seed to create deterministic but diverse vectors
  const hash = crypto.createHash('sha256').update(String(seed)).digest();
  const v = new Array(EMBEDDING_DIM);

  // Generate pseudo-random values from hash bytes
  let hashIdx = 0;
  for (let i = 0; i < EMBEDDING_DIM; i++) {
    // Extend the hash if needed
    if (hashIdx >= hash.length) {
      const newHash = crypto.createHash('sha256').update(hash).update(Buffer.from([i & 0xff])).digest();
      hashIdx = 0;
    }

    // Convert hash bytes to float in range [-1, 1]
    const byte1 = hash[(hashIdx++) % hash.length];
    const byte2 = hash[(hashIdx++) % hash.length];
    v[i] = ((byte1 * 256 + byte2) / 65535) * 2 - 1;
  }

  // Normalize the vector
  let norm = 0;
  for (let i = 0; i < EMBEDDING_DIM; i++) norm += v[i] * v[i];
  norm = Math.sqrt(norm);
  for (let i = 0; i < EMBEDDING_DIM; i++) v[i] /= norm;

  return v;
}

// Use simpler approach - generate truly random vectors
function generateTrulyRandomVector() {
  const v = new Array(EMBEDDING_DIM);
  for (let i = 0; i < EMBEDDING_DIM; i++) {
    v[i] = (Math.random() * 2 - 1);
  }
  // Normalize
  let norm = 0;
  for (let i = 0; i < EMBEDDING_DIM; i++) norm += v[i] * v[i];
  norm = Math.sqrt(norm);
  for (let i = 0; i < EMBEDDING_DIM; i++) v[i] /= norm;
  return v;
}

// ============================================================
// Main sampling loop
// ============================================================
async function main() {
  console.log('============================================');
  console.log('Clinical Veterinary Advisor - RAG Disease Query');
  console.log(`Timestamp: ${new Date().toISOString()}`);
  console.log('============================================\n');

  // Load previous progress if exists
  let allChunks = new Map();
  if (fs.existsSync(PROGRESS_FILE)) {
    try {
      const progress = JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8'));
      if (progress.chunks) {
        for (const c of progress.chunks) {
          allChunks.set(c.id, c);
        }
        console.log(`Loaded ${allChunks.size} chunks from previous progress\n`);
      }
    } catch (e) {
      console.log('Could not load progress file, starting fresh\n');
    }
  }

  const totalCvaChunks = 12248;
  const totalVectors = 300;  // Number of random vectors to try
  let noNewChunksCount = 0;
  const maxNoNew = 30;  // Stop after 30 vectors with no new results

  console.log(`Target: ${totalCvaChunks} CVA chunks`);
  console.log(`Strategy: ${totalVectors} random vectors, match_count=50`);
  console.log(`Will stop after ${maxNoNew} consecutive vectors with no new CVA chunks\n`);

  for (let i = 0; i < totalVectors; i++) {
    const vector = generateTrulyRandomVector();

    try {
      const data = await rpc('rag_match_documents', {
        query_embedding: vector,
        match_threshold: -1.0,  // Accept all similarities
        match_count: 100,       // Try to get more
      });

      let newCva = 0;
      for (const d of data) {
        if (d.title && d.title.includes('Etienne Cote')) {
          if (!allChunks.has(d.id)) {
            allChunks.set(d.id, d);
            newCva++;
          }
        }
      }

      if (newCva > 0) {
        noNewChunksCount = 0;
      } else {
        noNewChunksCount++;
      }

      if ((i + 1) % 10 === 0 || newCva > 0) {
        console.log(`  Vector ${i + 1}/${totalVectors}: ${data.length} results, ${newCva} new CVA chunks (total: ${allChunks.size}, ${(allChunks.size / totalCvaChunks * 100).toFixed(1)}%)`);
      }

      // Save progress every 50 vectors
      if ((i + 1) % 50 === 0) {
        saveProgress(allChunks);
      }

      // Stop if we're not finding new chunks
      if (noNewChunksCount >= maxNoNew) {
        console.log(`\nStopping: ${maxNoNew} vectors with no new CVA chunks`);
        break;
      }

    } catch (err) {
      console.log(`  Vector ${i + 1}: Error - ${err.message}`);
    }
  }

  console.log(`\nTotal unique CVA chunks collected: ${allChunks.size} / ${totalCvaChunks}`);

  // Save progress
  saveProgress(allChunks);

  // Extract disease names
  const cvaChunks = Array.from(allChunks.values());
  const diseases = extractDiseases(cvaChunks);

  // Save final results
  const output = {
    metadata: {
      source: 'Clinical Veterinary Advisor (Cote)',
      queryTimestamp: new Date().toISOString(),
      supabaseUrl: SUPABASE_URL,
      cvaBookId: CVA_BOOK_ID,
      totalCvaChunks,
      chunksRetrieved: cvaChunks.length,
      coveragePercent: (cvaChunks.length / totalCvaChunks * 100).toFixed(1),
      diseasesExtracted: diseases.length,
      method: 'rag_match_documents with random vector sampling',
    },
    diseases: diseases.map(d => ({
      name: d.name,
      chunkNumber: d.chunkNum,
    })),
    allChunkNumbers: cvaChunks
      .map(c => {
        const m = c.title ? c.title.match(/片段 (\d+)/) : null;
        return m ? parseInt(m[1]) : null;
      })
      .filter(Boolean)
      .sort((a, b) => a - b),
  };

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2), 'utf8');
  console.log(`\n============================================`);
  console.log(`Results saved to: ${OUTPUT_FILE}`);
  console.log(`CVA chunks: ${cvaChunks.length} / ${totalCvaChunks}`);
  console.log(`Diseases: ${diseases.length}`);
  console.log('============================================');
}

function saveProgress(allChunks) {
  const chunks = Array.from(allChunks.values()).map(c => ({
    id: c.id,
    title: c.title,
    content: (c.content || '').substring(0, 1000),
    category: c.category,
    species: c.species,
  }));
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify({ chunks, timestamp: new Date().toISOString() }), 'utf8');
  console.log(`  Progress saved: ${chunks.length} chunks`);
}

function extractDiseases(chunks) {
  console.log('\n=== Extracting disease names ===\n');

  const diseases = new Map();

  for (const chunk of chunks) {
    const content = chunk.content || '';
    const lines = content.split('\n').map(l => l.trim()).filter(Boolean);

    // Extract chunk number
    const chunkMatch = chunk.title ? chunk.title.match(/片段 (\d+)/) : null;
    const chunkNum = chunkMatch ? parseInt(chunkMatch[1]) : null;

    // Strategy A: Find "BASIC INFORMATION" marker
    const basicIdx = lines.findIndex(l => l === 'BASIC INFORMATION' || l.startsWith('BASIC INFORMATION'));
    if (basicIdx > 0) {
      const nameLines = lines.slice(0, basicIdx)
        .filter(l => l.length > 2 && l.length < 200)
        .filter(l => {
          const headers = ['TREATMENT', 'DIAGNOSIS', 'PROGNOSIS', 'CLINICAL',
            'ETIOLOGY', 'SUGGESTED', 'PEARLS', 'COMMENTS', 'PREVENTION',
            'POSSIBLE', 'RECOMMENDED', 'SYNONYMS', 'EPIDEMIOLOGY',
            'ASSOCIATED', 'INITIAL', 'ADVANCED', 'DRUG', 'CONTRAINDICATIONS',
            'PRECAUTIONS', 'INTERACTION', 'MISCELLANEOUS', 'AUTHOR', 'EDITOR'];
          return !headers.some(h => l.startsWith(h));
        });

      if (nameLines.length > 0) {
        const name = nameLines.join(' ').trim();
        if (name.length > 2 && name.length < 150 && !diseases.has(name)) {
          diseases.set(name, { name, chunkNum, source: 'before_basic_info' });
        }
      }
    }

    // Strategy B: Extract from URLs in content
    const urlPattern = /clinicalvetadvisor2\.com\/html\/bc\/([^".\s]+)/g;
    let match;
    while ((match = urlPattern.exec(content)) !== null) {
      // URL segments after the chapter code might indicate the section
      // But disease names are typically in the text before the URL
    }

    // Strategy C: Look for disease names that appear after "AUTHOR:" and "EDITOR:" lines
    // which mark the end of one disease entry
    const authorIdx = lines.findIndex((l, idx) => idx > 0 && l.startsWith('AUTHOR:'));
    const editorIdx = lines.findIndex((l, idx) => idx > authorIdx && l.startsWith('EDITOR:'));

    if (editorIdx > 0 && editorIdx < lines.length - 2) {
      // After EDITOR line, there might be the next disease name
      const nextLines = lines.slice(editorIdx + 1)
        .filter(l => l.length > 2 && l.length < 200);

      if (nextLines.length > 0) {
        const name = nextLines[0].trim();
        const headers = ['TREATMENT', 'DIAGNOSIS', 'PROGNOSIS', 'CLINICAL',
          'ETIOLOGY', 'SUGGESTED', 'PEARLS', 'COMMENTS', 'PREVENTION',
          'BASIC INFORMATION', 'DEFINITION', 'http'];
        const isHeader = headers.some(h => name.startsWith(h));

        if (!isHeader && name.length > 3 && name.length < 150 && !diseases.has(name)) {
          diseases.set(name, { name, chunkNum, source: 'after_editor' });
        }
      }
    }

    // Strategy D: Look for the disease name at chunk boundaries
    // Pattern: "... EDITOR: NAME Disease Name\nBASIC INFORMATION"
    const editorDisease = content.match(/EDITOR:\s*[A-Z][A-Z\s.]+\n([A-Z][A-Za-z\s,\-()]+)\n/g);
    if (editorDisease) {
      for (const ed of editorDisease) {
        const parts = ed.split('\n').filter(Boolean);
        if (parts.length >= 2) {
          const name = parts[parts.length - 1].trim();
          if (name.length > 3 && name.length < 150 && !diseases.has(name)) {
            diseases.set(name, { name, chunkNum, source: 'editor_pattern' });
          }
        }
      }
    }
  }

  // Clean up disease names
  const cleanedDiseases = [];
  for (const [key, d] of diseases) {
    let name = d.name;

    // Remove leading/trailing junk
    name = name.replace(/^[\s\-–—]+/, '').replace(/[\s\-–—]+$/, '');
    // Remove URL fragments
    if (name.includes('http') || name.includes('.com') || name.includes('.php')) continue;
    // Remove very short or very long
    if (name.length < 3 || name.length > 150) continue;
    // Remove lines that are clearly not disease names
    if (name.match(/^\d+\s*(de|of)\s*\d+/)) continue;
    if (name.match(/^\d{2}-\d{2}-\d{4}/)) continue;
    // Remove lines starting with lowercase (likely sentence fragments)
    if (name.match(/^[a-z]/)) continue;

    cleanedDiseases.push({ ...d, name });
  }

  // Sort by chunk number
  cleanedDiseases.sort((a, b) => {
    if (a.chunkNum && b.chunkNum) return a.chunkNum - b.chunkNum;
    return a.name.localeCompare(b.name);
  });

  console.log(`Extracted ${cleanedDiseases.length} disease names`);
  cleanedDiseases.forEach((d, i) => {
    console.log(`  ${i + 1}. [chunk ${d.chunkNum || '?'}] ${d.name} (${d.source})`);
  });

  return cleanedDiseases;
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});

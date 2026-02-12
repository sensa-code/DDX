const https = require('https');
const fs = require('fs');

const SUPABASE_URL = 'https://iizotzzzfhqswjmcotil.supabase.co';
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlpem90enp6Zmhxc3dqbWNvdGlsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDIyMzUzNCwiZXhwIjoyMDg1Nzk5NTM0fQ.tNpM0fWimEGNux7cs3dZGgCVAuh4W83kGqdxujh5x0A';

function rpc(funcName, params = {}) {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify(params);
        const url = new URL(`${SUPABASE_URL}/rest/v1/rpc/${funcName}`);
        const options = {
            method: 'POST',
            headers: {
                'apikey': SERVICE_KEY,
                'Authorization': `Bearer ${SERVICE_KEY}`,
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(data)
            }
        };
        const req = https.request(url, options, (res) => {
            let body = '';
            res.on('data', chunk => body += chunk);
            res.on('end', () => {
                try { resolve(JSON.parse(body)); }
                catch (e) { resolve(body); }
            });
        });
        req.on('error', reject);
        req.write(data);
        req.end();
    });
}

async function main() {
    // First, let's try the hybrid search with a zero vector (array format, not string)
    const zeroEmbedding = new Array(1536).fill(0);

    // Test with a simple disease term
    console.log('Testing hybrid search with zero vector...\n');

    const testTerms = [
        'blastomycosis',
        'histoplasmosis',
        'cryptococcosis',
        'aspergillosis nasal',
        'cerebellar hypoplasia',
        'feline hyperesthesia',
        'papillomatosis',
        'cutaneous lymphoma',
        'multiple myeloma',
        'polycythemia vera',
        'thymoma',
        'amyloidosis',
        'Fanconi syndrome',
        'dermatomyositis',
        'vasculitis',
        'panniculitis',
        'neonatal isoerythrolysis',
        'acral lick dermatitis',
        'sebaceous adenitis',
        'uveodermatologic syndrome',
        'pannus chronic superficial keratitis',
        'canine chronic bronchitis',
        'eosinophilic bronchopneumopathy',
        'pulmonary fibrosis',
        'pyruvate kinase deficiency',
        'methemoglobinemia',
        'sporotrichosis',
        'nocardiosis',
        'actinomycosis',
        'pythiosis',
        'chondrosarcoma',
        'synovial cell sarcoma',
        'peripheral nerve sheath tumor',
        'hyperaldosteronism cat',
        'pituitary dependent hyperadrenocorticism',
        'thyroid storm',
        'primary hyperparathyroidism',
        'hypervitaminosis A',
        'hypervitaminosis D',
        'copper deficiency',
        'taurine deficiency dilated cardiomyopathy',
        'fading puppy kitten syndrome',
        'swimmer puppy syndrome',
        'distal renal tubular acidosis',
        'cyclic neutropenia',
        'canine leproid granuloma',
        'coccidioidomycosis',
        'megacolon feline idiopathic',
        'gallbladder mucocele dog',
        'supraventricular tachycardia',
        'ventricular tachycardia dog',
        'third degree AV block',
        'sick sinus syndrome'
    ];

    let found = [];
    let errors = 0;

    for (const term of testTerms) {
        try {
            const results = await rpc('rag_hybrid_search', {
                query_text: term,
                query_embedding: zeroEmbedding,
                match_count: 2,
                keyword_weight: 1.0,
                semantic_weight: 0.0
            });

            if (results && results.code) {
                if (errors === 0) {
                    console.log('RPC Error:', JSON.stringify(results).substring(0, 300));
                }
                errors++;
                if (errors > 3) {
                    console.log('\nToo many errors. Stopping.');
                    break;
                }
                continue;
            }

            if (Array.isArray(results) && results.length > 0) {
                const r = results[0];
                const score = r.combined_score || r.keyword_score || 0;
                if (score > 0.0001) {
                    found.push({
                        searchTerm: term,
                        score: score,
                        title: (r.title || '').substring(0, 80),
                        content: (r.content || '').substring(0, 400)
                    });
                    console.log(`[FOUND] ${term} (score: ${score.toFixed(4)})`);
                    console.log(`  Title: ${(r.title || '').substring(0, 80)}`);
                    console.log(`  Content: ${(r.content || '').substring(0, 200).replace(/\n/g, ' ')}`);
                    console.log('');
                } else {
                    console.log(`[LOW SCORE] ${term} (score: ${score.toFixed(6)})`);
                }
            } else {
                console.log(`[NO RESULTS] ${term}`);
            }
        } catch (e) {
            console.log(`[ERROR] ${term}: ${e.message}`);
            errors++;
        }
    }

    console.log(`\n=== Summary: Found ${found.length}/${testTerms.length} diseases in RAG ===`);

    // Save results
    fs.writeFileSync('rag-search-results.json', JSON.stringify(found, null, 2), 'utf8');
    console.log('Results saved to rag-search-results.json');
}

main().catch(console.error);

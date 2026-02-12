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

function restQuery(table, queryParams = '', schema = 'public') {
    return new Promise((resolve, reject) => {
        const url = new URL(`${SUPABASE_URL}/rest/v1/${table}?${queryParams}`);
        const options = {
            method: 'GET',
            headers: {
                'apikey': SERVICE_KEY,
                'Authorization': `Bearer ${SERVICE_KEY}`,
                'Accept-Profile': schema
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
        req.end();
    });
}

async function main() {
    const action = process.argv[2] || 'search';

    if (action === 'search') {
        // Use text search to find disease-related chunks
        // Search for specific disease names that might be missing
        const searchTerms = [
            'peritoneopericardial diaphragmatic hernia',
            'myxomatous mitral valve disease',
            'acquired myasthenia gravis',
            'feline hyperesthesia syndrome',
            'lissencephaly',
            'cerebellar hypoplasia',
            'Chiari malformation',
            'portosystemic shunt acquired',
            'gastrointestinal foreign body',
            'nasal aspergillosis',
            'blastomycosis',
            'coccidioidomycosis',
            'histoplasmosis',
            'cryptococcosis',
            'feline sporotrichosis',
            'canine papillomatosis',
            'anal gland carcinoma',
            'cutaneous lymphoma',
            'multiple myeloma',
            'chronic myeloid leukemia',
            'polycythemia vera',
            'immune mediated neutropenia',
            'hyperviscosity syndrome',
            'thymoma',
            'feline fibrosarcoma',
            'apocrine gland adenocarcinoma',
            'chondrosarcoma',
            'synovial cell sarcoma',
            'megacolon idiopathic',
            'biliary tract disease',
            'amyloidosis',
            'familial renal disease',
            'Fanconi syndrome',
            'protein losing enteropathy lymphangiectasia',
            'antibiotic responsive diarrhea',
            'exocrine pancreatic neoplasia',
            'adrenal insufficiency',
            'pituitary dwarfism',
            'canine juvenile cellulitis',
            'vasculitis',
            'sterile nodular panniculitis',
            'zinc responsive dermatosis',
            'Ehlers-Danlos syndrome',
            'dermatomyositis',
            'acquired hypothyroidism cat',
            'hyperaldosteronism feline',
            'ectopic ACTH syndrome',
            'aortic thromboembolism',
            'supraventricular tachycardia',
            'ventricular tachycardia',
            'third degree AV block',
            'canine chronic bronchitis',
            'eosinophilic bronchopneumopathy',
            'pulmonary fibrosis',
            'diaphragmatic hernia traumatic',
            'laryngeal neoplasia',
            'tracheal foreign body',
            'nasopharyngeal mass',
            'retrobulbar abscess',
            'pannus',
            'iris melanoma',
            'feline diffuse iris melanosis',
            'orbital tumor',
            'nystagmus',
            'peripheral nerve sheath tumor',
            'fibrosarcoma oral',
            'thyroid storm',
            'hypervitaminosis A cat',
            'hypervitaminosis D',
            'copper deficiency',
            'taurine deficiency',
            'neonatal isoerythrolysis',
            'fading puppy kitten syndrome',
            'swimmer puppy syndrome'
        ];

        console.log('Searching RAG for potential missing diseases...\n');

        for (const term of searchTerms) {
            try {
                const results = await rpc('rag_hybrid_search', {
                    query_text: term,
                    match_count: 3,
                    keyword_weight: 0.5,
                    semantic_weight: 0.5
                });

                if (Array.isArray(results) && results.length > 0) {
                    const topResult = results[0];
                    const score = topResult.combined_score || topResult.similarity || 0;
                    if (score > 0.01) {
                        console.log(`[FOUND] ${term}`);
                        console.log(`  Score: ${score.toFixed(4)} | Title: ${(topResult.title || '').substring(0, 80)}`);
                        console.log(`  Content preview: ${(topResult.content || '').substring(0, 150).replace(/\n/g, ' ')}`);
                        console.log('');
                    }
                }
            } catch (e) {
                // Query needs embedding, try without
            }
        }
    }

    if (action === 'titles') {
        // Get unique document titles from the Differential Diagnosis book
        const results = await rpc('rag_hybrid_search', {
            query_text: 'differential diagnosis canine feline disease clinical signs etiology treatment prognosis',
            match_count: 50,
            keyword_weight: 0.6,
            semantic_weight: 0.4
        });

        if (Array.isArray(results)) {
            console.log(`Found ${results.length} results:\n`);
            results.forEach((r, i) => {
                console.log(`${i+1}. [${(r.combined_score || 0).toFixed(4)}] ${(r.title || '').substring(0, 80)}`);
                console.log(`   ${(r.content || '').substring(0, 200).replace(/\n/g, ' ')}`);
                console.log('');
            });
        } else {
            console.log('Response:', JSON.stringify(results).substring(0, 500));
        }
    }

    if (action === 'ddx-book') {
        // Specifically search the Differential Diagnosis book content
        const searchTerms = [
            'weight loss differential diagnosis',
            'vomiting differential diagnosis',
            'diarrhea differential diagnosis',
            'cough differential diagnosis',
            'seizure differential diagnosis',
            'lameness differential diagnosis',
            'skin mass differential diagnosis',
            'alopecia differential diagnosis',
            'jaundice differential diagnosis',
            'ascites differential diagnosis',
            'anemia differential diagnosis',
            'fever differential diagnosis',
            'lymphadenopathy differential diagnosis',
            'splenomegaly differential diagnosis',
            'hepatomegaly differential diagnosis',
            'dyspnea differential diagnosis',
            'hematuria differential diagnosis',
            'proteinuria differential diagnosis',
            'polyuria polydipsia differential diagnosis',
            'regurgitation differential diagnosis',
            'sneezing nasal discharge differential diagnosis',
            'epistaxis differential diagnosis',
            'peripheral edema differential',
            'pruritus differential diagnosis',
            'otitis differential diagnosis',
            'stomatitis differential diagnosis',
            'bradycardia differential diagnosis',
            'tachycardia differential diagnosis',
            'heart murmur differential diagnosis',
            'abdominal mass differential diagnosis'
        ];

        console.log('=== Searching DDx-relevant content in RAG ===\n');

        for (const term of searchTerms) {
            try {
                const results = await rpc('rag_hybrid_search', {
                    query_text: term,
                    match_count: 5,
                    keyword_weight: 0.6,
                    semantic_weight: 0.4
                });

                if (Array.isArray(results) && results.length > 0) {
                    console.log(`\n--- ${term.toUpperCase()} ---`);
                    results.slice(0, 3).forEach((r) => {
                        const content = (r.content || '').substring(0, 300).replace(/\n/g, ' ');
                        console.log(`  [${(r.combined_score || 0).toFixed(3)}] ${(r.title || '').substring(0, 60)}`);
                        console.log(`  ${content}`);
                        console.log('');
                    });
                }
            } catch (e) {
                console.log(`Error searching "${term}":`, e.message);
            }
        }
    }
}

main().catch(console.error);

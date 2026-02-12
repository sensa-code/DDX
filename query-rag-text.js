const https = require('https');
const fs = require('fs');

const SUPABASE_URL = 'https://iizotzzzfhqswjmcotil.supabase.co';
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlpem90enp6Zmhxc3dqbWNvdGlsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDIyMzUzNCwiZXhwIjoyMDg1Nzk5NTM0fQ.tNpM0fWimEGNux7cs3dZGgCVAuh4W83kGqdxujh5x0A';

function restGet(path) {
    return new Promise((resolve, reject) => {
        const url = new URL(`${SUPABASE_URL}${path}`);
        const options = {
            method: 'GET',
            headers: {
                'apikey': SERVICE_KEY,
                'Authorization': `Bearer ${SERVICE_KEY}`,
                'Content-Type': 'application/json'
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
    const action = process.argv[2] || 'explore';

    if (action === 'explore') {
        // Try to use full-text search via PostgREST textSearch
        // First, let's check what functions are available
        console.log('=== Exploring RAG Schema Functions ===\n');

        // Try listing all available RPC functions by querying a few known ones
        const knownFunctions = [
            'rag_get_stats',
            'rag_list_books',
            'rag_category_stats',
            'rag_match_documents',
            'rag_hybrid_search',
            'match_medical_images',
            'search_all_knowledge',
            'rag_insert_document',
            'rag_text_search'
        ];

        for (const fn of knownFunctions) {
            try {
                const result = await rpc(fn, {});
                console.log(`${fn}: EXISTS (response type: ${typeof result}, length: ${Array.isArray(result) ? result.length : 'N/A'})`);
            } catch (e) {
                console.log(`${fn}: ERROR - ${e.message}`);
            }
        }
    }

    if (action === 'sql') {
        // Use Supabase SQL execution endpoint
        // Try querying the rag.documents table directly via SQL
        console.log('=== Direct SQL Query via Supabase ===\n');

        // Query to find disease-related content from the Differential Diagnosis book
        const sqlQuery = `
            SELECT title, substring(content, 1, 500) as content_preview
            FROM rag.documents
            WHERE metadata->>'book_title' ILIKE '%Differential Diagnosis%'
            ORDER BY title
            LIMIT 50
        `;

        // Try via the pg endpoint
        const result = await restGet('/rest/v1/rpc/rag_get_stats');
        console.log('Stats:', JSON.stringify(result));
    }

    if (action === 'search-ddx') {
        // Search specifically in the Differential Diagnosis book
        // Try using PostgREST full-text search on exposed tables
        console.log('=== Searching for DDx Book Content ===\n');

        // Search for specific disease terms in document titles
        const diseaseSearches = [
            'blastomycosis',
            'histoplasmosis',
            'coccidioidomycosis',
            'cryptococcosis',
            'aspergillosis',
            'cerebellar',
            'myxomatous',
            'hyperesthesia',
            'papillomatosis',
            'cutaneous lymphoma',
            'multiple myeloma',
            'polycythemia',
            'thymoma',
            'amyloidosis',
            'Fanconi',
            'dermatomyositis',
            'vasculitis',
            'panniculitis',
            'taurine deficiency',
            'neonatal isoerythrolysis',
            'swimmer puppy',
            'megacolon',
            'biliary',
            'gallbladder mucocele',
            'chondrosarcoma',
            'fibrosarcoma',
            'schwannoma',
            'peripheral nerve sheath',
            'pheochromocytoma',
            'acral lick dermatitis',
            'calcinosis cutis',
            'zinc responsive dermatosis',
            'sebaceous adenitis',
            'uveodermatologic',
            'Vogt-Koyanagi-Harada',
            'chronic superficial keratitis',
            'pannus',
            'iris melanoma',
            'retrobulbar',
            'canine chronic bronchitis',
            'eosinophilic bronchopneumopathy',
            'pulmonary fibrosis',
            'primary immune deficiency',
            'selective IgA deficiency',
            'complement deficiency',
            'cyclic hematopoiesis',
            'pelger huet anomaly',
            'pyruvate kinase deficiency',
            'phosphofructokinase deficiency',
            'methemoglobinemia',
            'hereditary elliptocytosis',
            'canine leproid granuloma',
            'sporotrichosis',
            'nocardiosis',
            'actinomycosis',
            'pythiosis',
            'protothecosis'
        ];

        // We'll search using the hybrid search but with a dummy embedding
        // Since we can't generate embeddings, let's try text-only search
        // by calling the function with a zero vector
        const zeroEmbedding = new Array(1536).fill(0);

        for (const term of diseaseSearches) {
            try {
                const results = await rpc('rag_hybrid_search', {
                    query_text: term,
                    query_embedding: JSON.stringify(zeroEmbedding),
                    match_count: 3,
                    keyword_weight: 1.0,
                    semantic_weight: 0.0
                });

                if (Array.isArray(results) && results.length > 0 && results[0].combined_score > 0.001) {
                    const r = results[0];
                    console.log(`[FOUND] ${term}`);
                    console.log(`  Score: ${r.combined_score.toFixed(4)} | Title: ${(r.title || '').substring(0, 80)}`);
                    console.log(`  Preview: ${(r.content || '').substring(0, 200).replace(/\n/g, ' ')}`);
                    console.log('');
                }
            } catch (e) {
                // Skip errors
            }
        }
    }

    if (action === 'ddx-content') {
        // Get actual content from the DDx book to find disease lists
        console.log('=== Extracting Disease Lists from DDx Book ===\n');

        const zeroEmbedding = new Array(1536).fill(0);

        // Search for chapter-like content that lists diseases
        const searches = [
            'Chapter 1 clinical signs differential diagnosis list',
            'index of diseases canine feline',
            'disease classification system categories',
            'weight loss causes differential',
            'vomiting causes differential',
            'diarrhea causes differential',
            'cough differential diagnosis list',
            'seizure differential diagnosis causes',
            'lameness differential diagnosis causes',
            'skin lesion differential diagnosis',
            'alopecia causes differential',
            'jaundice icterus differential',
            'ascites peritoneal effusion differential',
            'anemia differential diagnosis',
            'pyrexia fever differential diagnosis',
            'lymphadenopathy differential',
            'splenomegaly differential',
            'hepatomegaly differential',
            'dyspnea respiratory distress differential',
            'hematuria differential',
            'polyuria polydipsia differential',
            'regurgitation differential',
            'nasal discharge epistaxis differential',
            'edema differential diagnosis',
            'pruritus differential diagnosis',
            'abdominal distension differential',
            'cardiac murmur differential',
            'weakness collapse differential',
            'ataxia differential diagnosis',
            'urinary incontinence differential'
        ];

        for (const term of searches) {
            try {
                const results = await rpc('rag_hybrid_search', {
                    query_text: term,
                    query_embedding: JSON.stringify(zeroEmbedding),
                    match_count: 2,
                    keyword_weight: 1.0,
                    semantic_weight: 0.0
                });

                if (Array.isArray(results) && results.length > 0) {
                    const r = results[0];
                    if (r.combined_score > 0.001) {
                        console.log(`\n--- ${term} ---`);
                        console.log(`Score: ${r.combined_score.toFixed(4)} | Book: ${(r.title || '').substring(0, 60)}`);
                        console.log(`Content:\n${(r.content || '').substring(0, 600)}`);
                        console.log('');
                    }
                }
            } catch (e) {
                // Skip
            }
        }
    }
}

main().catch(console.error);

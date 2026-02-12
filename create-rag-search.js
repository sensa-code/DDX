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
                'Content-Length': Buffer.byteLength(data),
                'Prefer': 'return=representation'
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

function sqlExec(sql) {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify({ query: sql });
        // Use the Supabase SQL API endpoint
        const url = new URL(`${SUPABASE_URL}/rest/v1/rpc/exec_sql`);
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
    console.log('=== Step 1: Create temporary search function ===\n');

    // First, try creating a function that searches rag.documents
    const createFuncSQL = `
CREATE OR REPLACE FUNCTION public.temp_rag_search(search_text text, max_results int DEFAULT 20)
RETURNS TABLE(doc_id uuid, doc_title text, doc_content text, doc_metadata jsonb)
LANGUAGE sql SECURITY DEFINER STABLE
AS $$
  SELECT id, title, substring(content, 1, 800), metadata
  FROM rag.documents
  WHERE to_tsvector('english', coalesce(title,'') || ' ' || coalesce(content,'')) @@ plainto_tsquery('english', search_text)
  LIMIT max_results;
$$;
`;

    // Try creating via RPC
    const createResult = await rpc('temp_rag_search', { search_text: 'test', max_results: 1 });
    console.log('Existing function test:', JSON.stringify(createResult).substring(0, 200));

    // If function doesn't exist, we need to create it
    // Use the management API or try alternative approaches
    if (createResult && createResult.code) {
        console.log('Function does not exist. Attempting to create via SQL...');

        // Try using Supabase Management API to run SQL
        const mgmtUrl = `https://api.supabase.com/v1/projects/iizotzzzfhqswjmcotil/database/query`;

        const mgmtResult = await new Promise((resolve, reject) => {
            const data = JSON.stringify({ query: createFuncSQL });
            const url = new URL(mgmtUrl);
            const options = {
                method: 'POST',
                headers: {
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

        console.log('Management API result:', JSON.stringify(mgmtResult).substring(0, 300));

        // If management API doesn't work, try a different approach:
        // Use rag_insert_document function signature to understand what's available
        console.log('\nTrying alternative: check if rag_insert_document works (might reveal schema access)...');
        const insertCheck = await rpc('rag_insert_document', {});
        console.log('rag_insert_document:', JSON.stringify(insertCheck).substring(0, 300));
    }

    // Step 2: If function creation worked, search for diseases
    console.log('\n=== Step 2: Search for disease content ===\n');

    const diseaseTerms = [
        'blastomycosis canine',
        'histoplasmosis',
        'cryptococcosis feline',
        'nasal aspergillosis',
        'cerebellar hypoplasia',
        'feline hyperesthesia',
        'polycythemia vera',
        'multiple myeloma canine',
        'cutaneous lymphoma',
        'thymoma',
        'amyloidosis renal',
        'dermatomyositis',
        'sebaceous adenitis',
        'uveodermatologic syndrome',
        'chronic superficial keratitis pannus',
        'eosinophilic granuloma complex',
        'atrial fibrillation',
        'ventricular tachycardia',
        'supraventricular tachycardia',
        'third degree heart block'
    ];

    for (const term of diseaseTerms) {
        const result = await rpc('temp_rag_search', { search_text: term, max_results: 3 });
        if (Array.isArray(result) && result.length > 0) {
            console.log(`[FOUND] ${term}`);
            result.forEach(r => {
                console.log(`  Title: ${(r.doc_title || '').substring(0, 80)}`);
                console.log(`  Content: ${(r.doc_content || '').substring(0, 200).replace(/\n/g, ' ')}`);
            });
            console.log('');
        } else {
            console.log(`[NOT FOUND/ERROR] ${term}: ${JSON.stringify(result).substring(0, 100)}`);
        }
    }
}

main().catch(console.error);

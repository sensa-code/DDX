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

async function searchByKeyword(keyword) {
    // Use a custom SQL query via rpc
    // First try: use full-text search via PostgREST fts
    return rpc('rag_text_search', { search_query: keyword, result_limit: 5 });
}

async function main() {
    // Step 1: Try to find if there's a simpler text search function
    console.log('=== Testing available search methods ===\n');

    // Method 1: Try rag_text_search
    let r1 = await rpc('rag_text_search', { search_query: 'blastomycosis', result_limit: 5 });
    console.log('rag_text_search:', typeof r1 === 'object' && r1.code ? `ERROR: ${r1.message}` : `OK (${Array.isArray(r1) ? r1.length : 0} results)`);

    // Method 2: Try without embedding parameter
    let r2 = await rpc('rag_match_documents', { match_count: 5, match_threshold: 0.1 });
    console.log('rag_match_documents (no embedding):', typeof r2 === 'object' && r2.code ? `ERROR: ${r2.message}` : `OK`);

    // Method 3: Try a simpler full text search function if it exists
    let r3 = await rpc('search_documents', { query: 'blastomycosis' });
    console.log('search_documents:', typeof r3 === 'object' && r3.code ? `ERROR: ${r3.message}` : `OK`);

    // Method 4: Try executing raw SQL via pg_net or similar
    let r4 = await rpc('exec_sql', { query: "SELECT title, substring(content, 1, 200) FROM rag.documents WHERE content ILIKE '%blastomycosis%' LIMIT 5" });
    console.log('exec_sql:', typeof r4 === 'object' && r4.code ? `ERROR: ${r4.message}` : `OK`);

    // Method 5: Try calling a function that queries rag schema
    let r5 = await rpc('rag_search_text', { search_text: 'blastomycosis', max_results: 5 });
    console.log('rag_search_text:', typeof r5 === 'object' && r5.code ? `ERROR: ${r5.message}` : `OK`);

    // Show the detailed DDx book content if we found results from any method
    if (Array.isArray(r1) && r1.length > 0) {
        console.log('\n=== DDx Content Found via rag_text_search ===');
        r1.forEach((doc, i) => {
            console.log(`\n${i+1}. ${doc.title || 'No title'}`);
            console.log(`Content: ${(doc.content || '').substring(0, 300)}`);
        });
    }

    // Let's also check if we can access the DDx book chunks directly
    // via the books table
    console.log('\n\n=== Fetching DDx Book Details ===');
    const books = await rpc('rag_list_books', {});
    if (Array.isArray(books)) {
        const ddxBooks = books.filter(b =>
            b.title && (
                b.title.toLowerCase().includes('differential diagnosis') ||
                b.title.toLowerCase().includes('five-minute') ||
                b.title.toLowerCase().includes('clinical veterinary advisor') ||
                b.title.toLowerCase().includes('medical differenti')
            )
        );
        console.log('\nRelevant books:');
        ddxBooks.forEach(b => {
            console.log(`  [${b.status}] ${b.title} - ${b.chunk_count} chunks (ID: ${b.id})`);
        });
    }
}

main().catch(console.error);

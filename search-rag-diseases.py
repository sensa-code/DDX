#!/usr/bin/env python3
"""Search RAG knowledge base for veterinary diseases not yet in the DDx system."""

import sys
import os
import json

# Add RAG client path
sys.path.append("E:/CLAUDE CODE/RAS/plumbform-rag-integration/plumbform-rag-integration/api")

# Set OpenAI API key from environment or settings file
if not os.environ.get("OPENAI_API_KEY"):
    settings_path = "E:/CLAUDE CODE/RAS/.claude/settings.local.json"
    if os.path.exists(settings_path):
        with open(settings_path) as f:
            settings = json.load(f)
            os.environ["OPENAI_API_KEY"] = settings.get("env", {}).get("OPENAI_API_KEY", "")

from rag_client import RAGClient

client = RAGClient()

# Search queries for diseases that might be missing
search_queries = [
    # Infectious diseases
    "canine parvoviral enteritis treatment prognosis",
    "feline infectious peritonitis FIP GS-441524",
    "systemic fungal infections canine feline",
    "vector borne diseases tick flea",

    # Dermatology - specific conditions
    "pemphigus vulgaris autoimmune skin disease",
    "juvenile cellulitis puppy strangles",
    "pattern alopecia endocrine skin disease",
    "skin tumor fibrosarcoma treatment",
    "ear polyp middle ear",

    # Ophthalmology
    "anterior lens luxation emergency",
    "pannus chronic superficial keratitis German Shepherd",
    "iris melanoma feline diffuse",

    # Cardiology specific
    "atrial fibrillation treatment digoxin",
    "ventricular premature complexes VPC treatment",
    "complete heart block pacemaker",
    "myocardial contusion trauma",

    # Oncology
    "multiple myeloma hyperglobulinemia",
    "cutaneous epitheliotropic lymphoma",
    "oral fibrosarcoma canine",
    "nasal carcinoma radiation therapy",

    # Hematology
    "polycythemia vera erythrocytosis",
    "thrombocytosis reactive neoplastic",
    "pancytopenia bone marrow failure",

    # Neurology
    "cerebellar hypoplasia feline panleukopenia in utero",
    "feline hyperesthesia syndrome",
    "narcolepsy cataplexy canine",
    "meningitis encephalitis unknown etiology MUE",

    # Respiratory
    "canine chronic bronchitis COPD",
    "eosinophilic bronchopneumopathy pulmonary infiltrate",
    "pulmonary fibrosis West Highland White Terrier",
    "lung lobe torsion",

    # Metabolic/Endocrine
    "Fanconi syndrome renal tubular",
    "hyperaldosteronism feline Conn syndrome",
    "phenobarbital hepatotoxicity",

    # GI/Hepatic
    "protein losing enteropathy lymphangiectasia Yorkshire Terrier",
    "chronic small intestinal diarrhea SIBO antibiotic responsive",
    "gallbladder rupture bile peritonitis",
    "hepatic abscess liver",

    # Miscellaneous
    "neonatal isoerythrolysis blood type incompatibility kitten",
    "congenital heart defect Ebstein anomaly",
    "systemic inflammatory response syndrome SIRS criteria",
    "immune complex disease type III hypersensitivity"
]

print("=== RAG Knowledge Base Disease Search ===\n")
print(f"Using RAGClient with {len(search_queries)} queries...\n")

all_results = []

for i, query in enumerate(search_queries):
    try:
        results = client.search(query, top_k=3, threshold=0.3)
        if results:
            top = results[0]
            print(f"[{i+1}/{len(search_queries)}] Query: {query[:60]}...")
            print(f"  Score: {top.get('similarity', 0):.4f}")
            print(f"  Title: {top.get('title', 'N/A')[:80]}")
            content_preview = top.get('content', '')[:250].replace('\n', ' ')
            print(f"  Content: {content_preview}")
            print()

            all_results.append({
                'query': query,
                'results': [{
                    'title': r.get('title', ''),
                    'content': r.get('content', '')[:500],
                    'similarity': r.get('similarity', 0),
                    'metadata': r.get('metadata', {})
                } for r in results[:3]]
            })
        else:
            print(f"[{i+1}/{len(search_queries)}] No results for: {query[:60]}")
    except Exception as e:
        print(f"[{i+1}/{len(search_queries)}] Error for '{query[:40]}': {e}")

# Save results
with open('rag-search-results-full.json', 'w', encoding='utf-8') as f:
    json.dump(all_results, f, ensure_ascii=False, indent=2)

print(f"\n=== Done! {len(all_results)} queries returned results ===")
print("Results saved to rag-search-results-full.json")

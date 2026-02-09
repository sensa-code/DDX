#!/usr/bin/env python3
"""Search RAG for diseases not yet in the 492-disease system."""

import sys
import os
import json

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

# Diseases to search for that are NOT yet in the 492-disease system
# These are additional conditions found during gap analysis
candidate_diseases = [
    # Conditions identified in DDx book but not yet added
    ("narcolepsy-cataplexy", "narcolepsy cataplexy canine sleep disorder"),
    ("lung-lobe-torsion", "lung lobe torsion spontaneous dog"),
    ("bile-peritonitis", "bile peritonitis gallbladder rupture dog"),
    ("hepatic-abscess", "hepatic abscess liver infection dog cat"),
    ("myocardial-contusion", "myocardial contusion traumatic cardiac arrhythmia"),
    ("pemphigus-vulgaris", "pemphigus vulgaris autoimmune erosive mucocutaneous"),
    ("bullous-pemphigoid", "bullous pemphigoid subepidermal blistering dog"),
    ("oral-fibrosarcoma", "oral fibrosarcoma canine gingival mass"),
    ("nasal-adenocarcinoma", "nasal adenocarcinoma carcinoma dog epistaxis"),
    ("lymphangiectasia", "intestinal lymphangiectasia protein losing enteropathy"),
    ("antibiotic-responsive-diarrhea", "antibiotic responsive diarrhea small intestinal bacterial overgrowth"),
    ("exocrine-pancreatic-neoplasia", "pancreatic adenocarcinoma exocrine tumor"),
    ("tracheal-foreign-body", "tracheal foreign body aspiration cough"),
    ("pericardioperitoneal-diaphragmatic-hernia", "peritoneopericardial diaphragmatic hernia congenital"),
    ("immune-complex-disease", "immune complex disease type III hypersensitivity vasculitis"),
    ("canine-leproid-granuloma", "canine leproid granuloma mycobacterial skin nodule"),
    ("phaeohyphomycosis", "phaeohyphomycosis dematiaceous fungal infection"),
    ("idiopathic-vestibular-disease-feline", "feline idiopathic vestibular disease old cat head tilt"),
    ("pancytopenia", "pancytopenia bone marrow failure aplastic anemia"),
    ("reactive-thrombocytosis", "thrombocytosis elevated platelet count reactive"),
    ("hypereosinophilic-syndrome", "hypereosinophilic syndrome eosinophilia organ infiltration"),
    ("meningitis-encephalitis-unknown-etiology", "meningoencephalitis of unknown etiology MUE inflammatory CNS"),
    ("hepatic-nodular-hyperplasia", "hepatic nodular hyperplasia benign liver mass older dog"),
    ("copper-associated-hepatitis", "copper associated chronic hepatitis Bedlington Terrier"),
    ("megaesophagus-acquired", "acquired megaesophagus myasthenia gravis hypothyroidism"),
]

print("=== Searching RAG for additional missing diseases ===\n")

confirmed_diseases = []
for disease_id, query in candidate_diseases:
    try:
        results = client.search(query, top_k=2, threshold=0.4)
        if results:
            top = results[0]
            score = top.get('similarity', 0)
            if score > 0.5:
                content = top.get('content', '')[:300].replace('\n', ' ')
                title = top.get('title', '')[:80]
                print(f"[CONFIRMED] {disease_id} (score: {score:.4f})")
                print(f"  Source: {title}")
                print(f"  Content: {content[:150]}")
                confirmed_diseases.append({
                    'id': disease_id,
                    'query': query,
                    'score': score,
                    'source': title,
                    'content_preview': content
                })
                print()
    except Exception as e:
        pass

print(f"\n=== {len(confirmed_diseases)} diseases confirmed in RAG knowledge base ===")

# Save confirmed list
with open('rag-confirmed-diseases.json', 'w', encoding='utf-8') as f:
    json.dump(confirmed_diseases, f, ensure_ascii=False, indent=2)

print("\nConfirmed disease IDs:")
for d in confirmed_diseases:
    print(f"  - {d['id']}")

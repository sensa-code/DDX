#!/usr/bin/env python3
"""Systematically discover missing diseases via RAG vector knowledge base."""

import sys
import os
import json
import time

# Load API key from .env (NEVER hardcode)
from dotenv import load_dotenv
load_dotenv("E:/CLAUDE CODE/RAS/plumbform-rag-integration/plumbform-rag-integration/.env")

# Add RAG client path
sys.path.append("E:/CLAUDE CODE/RAS/plumbform-rag-integration/plumbform-rag-integration/api")
from rag_client import RAGClient

client = RAGClient()

# Load existing disease IDs
with open("current-disease-ids.txt", "r") as f:
    existing_ids = set(line.strip() for line in f if line.strip())
print(f"Existing diseases: {len(existing_ids)}")

# Candidate diseases to search - organized by category
# These are clinically important diseases NOT in the current 451
candidates = {
    # Oncology
    "hepatocellular-carcinoma": "hepatocellular carcinoma liver tumor dog",
    "intestinal-adenocarcinoma": "intestinal adenocarcinoma small bowel tumor dog cat",
    "apocrine-gland-adenocarcinoma": "apocrine gland anal sac adenocarcinoma dog",
    "basal-cell-tumor": "basal cell tumor skin neoplasia dog cat",
    "ceruminous-gland-adenocarcinoma": "ceruminous gland ear canal tumor cat",
    "thyroid-adenoma": "thyroid adenoma benign thyroid tumor cat",
    "chemodectoma": "chemodectoma aortic body tumor heart base dog",
    "mesothelioma": "mesothelioma pleural peritoneal neoplasia dog",
    "hemangioma": "hemangioma benign vascular tumor skin dog",
    "histiocytic-ulcerative-colitis": "histiocytic ulcerative colitis boxer dog",

    # Infectious
    "salmonellosis": "salmonellosis salmonella infection dog cat",
    "campylobacteriosis": "campylobacteriosis campylobacter diarrhea dog",
    "hemotropic-mycoplasma": "hemotropic mycoplasma haemobartonella feline",
    "yersiniosis": "yersiniosis yersinia infection dog cat",
    "streptococcal-infection": "streptococcal toxic shock syndrome necrotizing fasciitis dog",
    "helicobacter-infection": "helicobacter gastritis dog cat",
    "encephalitozoonosis": "encephalitozoon cuniculi rabbit cat dog",
    "canine-herpesvirus": "canine herpesvirus neonatal puppy CHV",
    "feline-coronavirus-enteric": "feline enteric coronavirus diarrhea",
    "coccidiosis": "coccidiosis isospora eimeria intestinal protozoa puppy kitten",

    # Toxicology
    "bromethalin-toxicosis": "bromethalin rodenticide neurotoxin cerebral edema",
    "mushroom-toxicosis": "mushroom toxicosis amanita hepatotoxic dog",
    "macadamia-nut-toxicosis": "macadamia nut toxicosis dog weakness tremor",
    "onion-garlic-toxicosis": "onion garlic allium toxicosis Heinz body hemolysis",
    "ssri-toxicosis": "SSRI serotonin syndrome toxicosis dog",
    "amphetamine-toxicosis": "amphetamine ADHD medication toxicosis dog",
    "salt-toxicosis": "salt sodium toxicosis hypernatremia brain edema",
    "iron-toxicosis": "iron toxicosis GI hemorrhage hepatotoxicity",
    "strychnine-toxicosis": "strychnine toxicosis seizure tetanic convulsion",
    "permethrin-toxicosis": "permethrin pyrethroid toxicosis cat tremor",

    # Neurology
    "status-epilepticus": "status epilepticus prolonged seizure emergency treatment",
    "cerebellar-abiotrophy": "cerebellar abiotrophy cortical degeneration ataxia",
    "peripheral-neuropathy": "peripheral neuropathy polyneuropathy weakness",
    "lysosomal-storage-disease": "lysosomal storage disease neuronal ceroid lipofuscinosis",
    "spinal-arachnoid-diverticulum": "spinal arachnoid cyst diverticulum myelopathy",
    "scottie-cramp": "scottie cramp hyperkinetic movement disorder",
    "canine-distal-polyneuropathy": "distal polyneuropathy sensorimotor neuropathy",
    "tremor-syndrome": "idiopathic generalized tremor syndrome white shaker dog",

    # Dermatology
    "erythema-multiforme": "erythema multiforme drug reaction skin target lesion",
    "toxic-epidermal-necrolysis": "toxic epidermal necrolysis Stevens-Johnson TEN skin",
    "color-dilution-alopecia": "color dilution alopecia blue fawn follicular dysplasia",
    "follicular-dysplasia": "follicular dysplasia cyclic alopecia",
    "cutaneous-vasculitis": "cutaneous vasculitis skin hemorrhage necrosis dog",
    "superficial-necrolytic-dermatitis": "superficial necrolytic dermatitis hepatocutaneous erythema migrans",
    "canine-pattern-alopecia": "canine pattern alopecia ear pinnae ventral",
    "acanthosis-nigricans": "acanthosis nigricans axillary hyperpigmentation dachshund",
    "intertrigo": "intertrigo skin fold dermatitis pyoderma",

    # Ophthalmology
    "corneal-sequestrum": "corneal sequestrum corneal nigrum feline",
    "corneal-dystrophy": "corneal dystrophy crystalline stromal lipid dog",
    "optic-neuritis": "optic neuritis sudden blindness pupil dilation",
    "chorioretinitis": "chorioretinitis posterior uveitis retinal inflammation",
    "episcleritis": "episcleritis nodular granulomatous scleritis dog",
    "endophthalmitis": "endophthalmitis intraocular infection panophthalmitis",
    "anterior-uveitis": "anterior uveitis iridocyclitis aqueous flare dog cat",
    "phthisis-bulbi": "phthisis bulbi end stage eye atrophy",
    "eyelid-agenesis": "eyelid agenesis coloboma congenital cat",

    # Reproductive
    "mastitis": "mastitis mammary gland infection lactating dog cat",
    "vaginal-prolapse": "vaginal prolapse hyperplasia estrogen dog",
    "agalactia": "agalactia lack milk production lactation failure",
    "retained-placenta": "retained placenta fetal membrane postpartum",
    "subinvolution-placental-sites": "subinvolution placental sites postpartum hemorrhage dog",
    "uterine-rupture": "uterine rupture perforation dystocia",
    "prostatitis": "prostatitis bacterial prostatic infection dog",
    "penile-neoplasia": "transmissible venereal tumor penile mass",

    # Hematology
    "aplastic-anemia": "aplastic anemia pancytopenia bone marrow failure",
    "heinz-body-anemia": "Heinz body hemolytic anemia oxidative damage",
    "methemoglobinemia": "methemoglobinemia brown blood cyanosis",
    "microangiopathic-hemolytic-anemia": "microangiopathic hemolytic anemia schistocyte fragmentation",
    "erythrocytosis": "erythrocytosis polycythemia secondary primary absolute",
    "chronic-lymphocytic-leukemia": "chronic lymphocytic leukemia CLL mature lymphocytes",
    "acute-lymphoblastic-leukemia": "acute lymphoblastic leukemia ALL blast cells",

    # Musculoskeletal
    "septic-arthritis": "septic arthritis infectious joint bacterial dog",
    "osteomyelitis": "osteomyelitis bone infection bacterial fungal",
    "bicipital-tenosynovitis": "bicipital tenosynovitis shoulder lameness dog",
    "fibrotic-myopathy": "fibrotic myopathy contracture infraspinatus gracilis",
    "hypertrophic-osteopathy": "hypertrophic osteopathy periosteal proliferation pulmonary",
    "luxating-shoulder": "medial shoulder luxation instability toy breed",
    "ununited-anconeal-process": "ununited anconeal process elbow dysplasia UAP",

    # Cardiovascular
    "arrhythmogenic-rvc": "arrhythmogenic right ventricular cardiomyopathy ARVC boxer dog",
    "cardiac-tamponade": "cardiac tamponade pericardial effusion compression",
    "cor-pulmonale": "cor pulmonale right heart failure pulmonary hypertension",
    "endocardiosis": "endocardiosis degenerative valve disease mitral",

    # GI / Hepatobiliary
    "chronic-enteropathy": "chronic enteropathy inflammatory dietary responsive",
    "bilious-vomiting-syndrome": "bilious vomiting syndrome morning bile reflux dog",
    "colorectal-neoplasia": "colorectal adenocarcinoma polyp neoplasia dog",
    "intestinal-lymphangiectasia": "intestinal lymphangiectasia protein loss PLE",
    "clostridial-enteritis": "clostridial enteritis clostridioides difficile perfringens",
    "gastrointestinal-stromal-tumor": "gastrointestinal stromal tumor GIST leiomyosarcoma",
    "cecal-inversion": "cecal inversion intussusception dog",

    # Urinary
    "renal-amyloidosis": "renal amyloidosis glomerular Shar Pei Abyssinian",
    "ureteral-obstruction": "ureteral obstruction ureterolithiasis SUB stent",
    "renal-infarction": "renal infarction thromboembolism kidney",

    # Miscellaneous
    "primary-immune-deficiency": "primary immunodeficiency congenital immune disorder dog",
    "heat-stroke-exertional": "exertional heat stroke working dog exercise hyperthermia",
    "transfusion-reaction": "transfusion reaction acute hemolytic blood typing",
    "drug-eruption": "drug eruption adverse cutaneous reaction medication",
    "anaphylaxis-vaccine": "vaccine anaphylaxis adverse reaction hypersensitivity",
}

# Filter out diseases that already exist
new_candidates = {}
for disease_id, query in candidates.items():
    if disease_id not in existing_ids:
        new_candidates[disease_id] = query
    else:
        print(f"  SKIP (already exists): {disease_id}")

print(f"\nNew candidates to search: {len(new_candidates)}")

# Search RAG for each candidate
results = []
confirmed = []
failed = []

for i, (disease_id, query) in enumerate(new_candidates.items()):
    try:
        search_results = client.search(query, top_k=5, threshold=0.3)
        best_score = max((r.get("similarity", 0) for r in search_results), default=0)
        best_source = ""
        best_content = ""
        if search_results:
            best = max(search_results, key=lambda r: r.get("similarity", 0))
            best_source = best.get("title", "")[:80]
            best_content = best.get("content", "")[:200]

        entry = {
            "id": disease_id,
            "query": query,
            "best_score": round(best_score, 4),
            "source": best_source,
            "content_preview": best_content,
            "result_count": len(search_results),
            "confirmed": best_score >= 0.4
        }
        results.append(entry)

        if best_score >= 0.4:
            confirmed.append(disease_id)
            status = "CONFIRMED"
        else:
            failed.append(disease_id)
            status = "LOW SCORE"

        print(f"  [{i+1}/{len(new_candidates)}] {disease_id}: {status} (score={best_score:.4f}, source={best_source[:50]})")

        # Rate limit to avoid API throttling
        time.sleep(0.5)

    except Exception as e:
        print(f"  [{i+1}/{len(new_candidates)}] {disease_id}: ERROR - {str(e)[:80]}")
        failed.append(disease_id)
        time.sleep(1)

# Save results
output = {
    "total_candidates": len(new_candidates),
    "confirmed_count": len(confirmed),
    "failed_count": len(failed),
    "confirmed_ids": sorted(confirmed),
    "failed_ids": sorted(failed),
    "details": results
}

with open("rag-discovery-results.json", "w", encoding="utf-8") as f:
    json.dump(output, f, ensure_ascii=False, indent=2)

print(f"\n=== RAG Discovery Complete ===")
print(f"Total candidates: {len(new_candidates)}")
print(f"RAG confirmed (score >= 0.4): {len(confirmed)}")
print(f"Low confidence: {len(failed)}")
print(f"Results saved to rag-discovery-results.json")
print(f"\nConfirmed diseases:")
for d in sorted(confirmed):
    print(f"  + {d}")

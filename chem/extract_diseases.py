#!/usr/bin/env python3
"""
Extract disease information from Clinical Veterinary Advisor chunks
"""

import json
import re
import glob
from pathlib import Path

def extract_basic_info_section(text, start_pos):
    """Extract BASIC INFORMATION section"""
    basic_info = {}

    # Look for DEFINITION
    def_match = re.search(r'\*\*DEFINITION\*\*\s+(.*?)(?=\*\*[A-Z]|\n\n\n)', text[start_pos:], re.DOTALL)
    if def_match:
        basic_info['definition'] = def_match.group(1).strip().replace('`�`', '•')

    # Look for SYNONYMS
    syn_match = re.search(r'\*\*SYNONYM[S]?\*\*\s+(.*?)(?=\*\*[A-Z]|\n\n\n)', text[start_pos:], re.DOTALL)
    if syn_match:
        synonyms_text = syn_match.group(1).strip()
        basic_info['synonyms'] = [s.strip() for s in re.split(r'[,;]', synonyms_text) if s.strip()]

    return basic_info

def extract_clinical_presentation(text, start_pos):
    """Extract CLINICAL PRESENTATION section"""
    clinical = {}

    # Look for HISTORY, CHIEF COMPLAINT
    hist_match = re.search(r'\*\*HISTORY, CHIEF COMPLAINT\*\*\s+(.*?)(?=\*\*[A-Z]|\n\n\n)', text[start_pos:], re.DOTALL)
    if hist_match:
        hist_text = hist_match.group(1).strip()
        # Extract bullet points
        signs = re.findall(r'`�`\s+(.*?)(?=\n|$)', hist_text)
        if signs:
            clinical['history_chief_complaint'] = [s.strip() for s in signs]
        else:
            clinical['history_chief_complaint'] = hist_text.split('\n\n')

    # Look for PHYSICAL EXAM FINDINGS
    phys_match = re.search(r'\*\*PHYSICAL EXAM FINDINGS\*\*\s+(.*?)(?=\*\*[A-Z]|\n\n\n)', text[start_pos:], re.DOTALL)
    if phys_match:
        phys_text = phys_match.group(1).strip()
        signs = re.findall(r'`�`\s+(.*?)(?=\n|$)', phys_text)
        if signs:
            clinical['physical_exam'] = [s.strip() for s in signs]
        else:
            clinical['physical_exam'] = phys_text.split('\n\n')

    return clinical

def extract_diagnosis_section(text, start_pos):
    """Extract DIAGNOSIS section"""
    diagnosis = {}

    # Look for DIAGNOSTIC OVERVIEW
    diag_match = re.search(r'\*\*DIAGNOSTIC OVERVIEW\*\*\s+(.*?)(?=\*\*[A-Z]|\n\n\n)', text[start_pos:], re.DOTALL)
    if diag_match:
        diagnosis['overview'] = diag_match.group(1).strip()

    # Look for DIFFERENTIAL DIAGNOSIS
    diff_match = re.search(r'\*\*DIFFERENTIAL DIAGNOSIS\*\*\s+(.*?)(?=\*\*[A-Z]|\n\n\n)', text[start_pos:], re.DOTALL)
    if diff_match:
        diff_text = diff_match.group(1).strip()
        items = re.findall(r'`�`\s+(.*?)(?=\n|$)', diff_text)
        if items:
            diagnosis['differential'] = [i.strip() for i in items]

    # Look for INITIAL DATABASE
    init_match = re.search(r'\*\*INITIAL DATABASE\*\*\s+(.*?)(?=\*\*[A-Z]|\n\n\n)', text[start_pos:], re.DOTALL)
    if init_match:
        init_text = init_match.group(1).strip()
        items = re.findall(r'`�`\s+(.*?)(?=\n|$)', init_text)
        if items:
            diagnosis['initial_database'] = [i.strip() for i in items]

    return diagnosis

def extract_treatment_section(text, start_pos):
    """Extract TREATMENT section"""
    treatment = {}

    # Look for TREATMENT OVERVIEW
    treat_match = re.search(r'\*\*TREATMENT OVERVIEW\*\*\s+(.*?)(?=\*\*[A-Z]|\n\n\n)', text[start_pos:], re.DOTALL)
    if treat_match:
        treatment['overview'] = treat_match.group(1).strip()

    # Look for ACUTE GENERAL TREATMENT
    acute_match = re.search(r'\*\*ACUTE GENERAL TREATMENT\*\*\s+(.*?)(?=\*\*[A-Z]|\n\n\n)', text[start_pos:], re.DOTALL)
    if acute_match:
        acute_text = acute_match.group(1).strip()
        items = re.findall(r'`�`\s+(.*?)(?=\n|$)', acute_text)
        if items:
            treatment['acute'] = [i.strip() for i in items]
        else:
            treatment['acute'] = acute_text

    # Look for CHRONIC TREATMENT
    chronic_match = re.search(r'\*\*CHRONIC TREATMENT\*\*\s+(.*?)(?=\*\*[A-Z]|\n\n\n)', text[start_pos:], re.DOTALL)
    if chronic_match:
        treatment['chronic'] = chronic_match.group(1).strip()

    return treatment

def extract_disease_from_text(disease_name, text, chunk_num):
    """Extract a single disease entry"""
    disease = {
        "name_en": disease_name,
        "source_chunk": f"chunk_{chunk_num:03d}"
    }

    # Find the disease section
    disease_pattern = rf'\*\*{re.escape(disease_name)}\*\*'
    match = re.search(disease_pattern, text)
    if not match:
        return None

    start_pos = match.end()

    # Extract BASIC INFORMATION
    if '**BASIC INFORMATION**' in text[start_pos:start_pos+500]:
        basic_info = extract_basic_info_section(text, start_pos)
        disease.update(basic_info)

    # Extract CLINICAL PRESENTATION
    if '**CLINICAL PRESENTATION**' in text[start_pos:start_pos+2000]:
        clinical = extract_clinical_presentation(text, start_pos)
        if clinical:
            disease['clinical_presentation'] = clinical

    # Extract DIAGNOSIS
    if '**DIAGNOSIS**' in text[start_pos:start_pos+3000]:
        diagnosis = extract_diagnosis_section(text, start_pos)
        if diagnosis:
            disease['diagnosis'] = diagnosis

    # Extract TREATMENT
    if '**TREATMENT**' in text[start_pos:start_pos+3000]:
        treatment = extract_treatment_section(text, start_pos)
        if treatment:
            disease['treatment'] = treatment

    # Extract PROGNOSIS
    prog_match = re.search(r'\*\*PROGNOSIS AND OUTCOME\*\*\s+(.*?)(?=\*\*[A-Z]|\n\n\n)', text[start_pos:start_pos+5000], re.DOTALL)
    if prog_match:
        disease['prognosis'] = prog_match.group(1).strip()

    return disease

def find_diseases_in_chunk(chunk_path):
    """Find all diseases in a chunk file"""
    with open(chunk_path, 'r', encoding='utf-8') as f:
        text = f.read()

    # Extract chunk number
    chunk_match = re.search(r'chunk_(\d+)', str(chunk_path))
    chunk_num = int(chunk_match.group(1)) if chunk_match else 0

    diseases = []

    # Pattern 1: Disease titles with BASIC INFORMATION
    pattern1 = r'Página \d+ de \d+\s+\*\*([\w\s,/:\-()]+?)\*\*\s+\*\*BASIC INFORMATION\*\*'
    matches1 = re.finditer(pattern1, text)

    for match in matches1:
        disease_name = match.group(1).strip()
        print(f"  Found (Full): {disease_name}")
        disease_data = extract_disease_from_text(disease_name, text, chunk_num)
        if disease_data and 'definition' in disease_data:
            diseases.append(disease_data)

    # Pattern 2: Disease titles without full content (for listing)
    # Look for disease names in URLs or headers
    pattern2 = r'([\w\-\s]+(?:osis|itis|emia|oma|pathy|trophy|plasia|ism|disease|syndrome|infection|toxicosis))\s+http://www\.clinicalvetadvisor'
    matches2 = re.finditer(pattern2, text, re.IGNORECASE)

    for match in matches2:
        disease_name = match.group(1).strip()
        # Clean up the name
        disease_name = re.sub(r'\s+', ' ', disease_name)
        # Skip if already found
        if not any(d['name_en'] == disease_name for d in diseases):
            # Create minimal entry
            minimal_disease = {
                "name_en": disease_name,
                "source_chunk": f"chunk_{chunk_num:03d}",
                "note": "Partial entry - disease mentioned but full information not extracted from HTML format"
            }
            diseases.append(minimal_disease)
            print(f"  Found (Partial): {disease_name}")

    return diseases

def main():
    # Path to chunk files
    chunks_dir = Path(r'E:\CLAUDE CODE\BOOK\advisor\Clinical Veterinary Advisor_ Do - Etienne Cote')

    all_diseases = []

    # Process chunks 001 to 014
    for i in range(1, 15):
        chunk_file = chunks_dir / f'Clinical Veterinary Advisor_ Do - Etienne Cote_chunk_{i:03d}.md'
        if chunk_file.exists():
            print(f"\nProcessing {chunk_file.name}...")
            diseases = find_diseases_in_chunk(chunk_file)
            all_diseases.extend(diseases)
            print(f"  Extracted {len(diseases)} diseases")

    # Save to JSON
    output_file = Path(r'E:\CLAUDE CODE\BOOK\chem\extracted_diseases_chunk_001-014.json')
    output_data = {
        "source": "Clinical Veterinary Advisor: Dogs and Cats, 2nd Edition by Etienne Côté",
        "chunks_processed": "001-014",
        "total_diseases": len(all_diseases),
        "diseases": all_diseases
    }

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(output_data, f, indent=2, ensure_ascii=False)

    print(f"\n{'='*60}")
    print(f"Total diseases extracted: {len(all_diseases)}")
    print(f"Saved to: {output_file}")
    print(f"{'='*60}")

if __name__ == '__main__':
    main()

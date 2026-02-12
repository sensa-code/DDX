#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# remove_all_aliases.py - Remove all unused ALIASES definitions

import re
import sys

# Fix Windows console encoding
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

file_path = r'E:\CLAUDE CODE\BOOK\vet-differential-diagnosis-v2.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

print('=== Removing unused ALIASES definitions ===\n')

# ALIASES to remove (keep DISEASE_ALIASES as it's being used)
aliases_to_remove = [
    'GASTROINTESTINAL_DISEASE_ALIASES',
    'ENDOCRINE_DISEASE_ALIASES',
    'DERMATOLOGICAL_DISEASE_ALIASES',
    'RESPIRATORY_DISEASE_ALIASES',
    'INFECTIOUS_DISEASE_ALIASES',
    'MUSCULOSKELETAL_DISEASE_ALIASES',
    'IMMUNOLOGICAL_DISEASE_ALIASES',
    'ENT_DISEASE_ALIASES',
    'BEHAVIORAL_OTHER_DISEASE_ALIASES',
    'EMERGENCY_CRITICAL_CARE_ALIASES'
]

total_removed = 0

for alias_name in aliases_to_remove:
    # Match: const ALIAS_NAME = { ... };
    # Use non-greedy matching until standalone };
    pattern = rf'const {alias_name} = \{{[^}}]*(?:\}}[^;][^}}]*)*\}};?\n'

    matches = re.findall(pattern, content, re.DOTALL)

    if matches:
        for match in matches:
            lines = match.count('\n')
            chars = len(match)
            print(f'[OK] Found {alias_name}: {lines} lines, {chars} chars')
            total_removed += lines

        content = re.sub(pattern, '', content, flags=re.DOTALL)
        print(f'     Removed\n')
    else:
        print(f'[WARN] Not found: {alias_name}\n')

print(f'Total removed: ~{total_removed} lines\n')

# Write back
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('[OK] File updated\n')

# Simple validation
script_match = re.search(r'<script>(.*?)</script>', content, re.DOTALL)
if script_match:
    script = script_match.group(1)
    print(f'[OK] Script length: {len(script)} chars')
    print('     Please use Node.js for full syntax validation')
else:
    print('[ERROR] Cannot find script tag')

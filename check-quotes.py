#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import re

content = open('vet-differential-diagnosis-v2.html', 'r', encoding='utf-8').read()

# 檢查中文引號
left_double = content.count('\u201c')  # 左雙引號 "
right_double = content.count('\u201d')  # 右雙引號 "
left_single = content.count('\u2018')  # 左單引號 '
right_single = content.count('\u2019')  # 右單引號 '

total = left_double + right_double + left_single + right_single

print('=== 中文引號檢查 ===')
print('總共: {} 個'.format(total))
print('左雙引號 U+201C: {}'.format(left_double))
print('右雙引號 U+201D: {}'.format(right_double))
print('左單引號 U+2018: {}'.format(left_single))
print('右單引號 U+2019: {}'.format(right_single))

if total > 0:
    print('\n這些中文引號在JavaScript中會導致語法錯誤，需要全部替換為英文引號。')

    # 找出前10個位置
    lines = content.split('\n')
    found = 0
    print('\n前10個位置:')
    for i, line in enumerate(lines):
        if re.search(r'[\u201c\u201d\u2018\u2019]', line) and found < 10:
            print('  行 {}: {}'.format(i+1, line.strip()[:80]))
            found += 1
else:
    print('\n✓ 未發現中文引號，檔案正常！')

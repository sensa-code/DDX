// segment-test.js - 精確分段語法檢查工具
const fs = require('fs');

console.log('=== JavaScript 語法分段檢查工具 ===\n');

const html = fs.readFileSync('E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2.html', 'utf8');
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);

if (!scriptMatch) {
  console.log('❌ 找不到 <script> 標籤');
  process.exit(1);
}

const script = scriptMatch[1];
console.log(`✓ 成功讀取 script 內容 (${script.length} 字元)\n`);

// 定義要測試的段落
const segments = [
  { name: 'SYNONYMS', pattern: /const SYNONYMS = \{[\s\S]*?\n\};/ },
  { name: 'DISEASE_INFO', pattern: /const DISEASE_INFO = \{[\s\S]*?\n\};/ },
  { name: 'symptoms', pattern: /const symptoms = \[[\s\S]*?\n\];/ },
  { name: 'labFindings', pattern: /const labFindings = \[[\s\S]*?\n\];/ },
  { name: 'functions', pattern: /\/\/ 搜尋功能[\s\S]*$/ }
];

let hasError = false;

segments.forEach((seg, idx) => {
  console.log(`[${idx + 1}/${segments.length}] 檢查 ${seg.name}...`);

  const match = script.match(seg.pattern);
  if (!match) {
    console.log(`   ⚠️  找不到此段落定義\n`);
    return;
  }

  const code = match[0];
  const lineCount = code.split('\n').length;
  console.log(`   找到定義 (${lineCount} 行, ${code.length} 字元)`);

  try {
    new Function(code);
    console.log(`   ✅ 語法正確\n`);
  } catch (e) {
    hasError = true;
    console.log(`   ❌ 語法錯誤: ${e.message}`);

    // 嘗試找出具體錯誤位置
    const lines = code.split('\n');
    const errorMatch = e.message.match(/position (\d+)/);

    if (errorMatch) {
      const pos = parseInt(errorMatch[1]);
      let currentPos = 0;
      let errorLine = 0;

      for (let i = 0; i < lines.length; i++) {
        currentPos += lines[i].length + 1; // +1 for newline
        if (currentPos >= pos) {
          errorLine = i;
          break;
        }
      }

      console.log(`   錯誤在相對第 ${errorLine + 1} 行:\n`);
      for (let i = Math.max(0, errorLine - 2); i < Math.min(lines.length, errorLine + 3); i++) {
        const marker = i === errorLine ? '   >>> ' : '       ';
        console.log(`${marker}${i + 1}: ${lines[i].substring(0, 100)}`);
      }
    }
    console.log('');
  }
});

if (!hasError) {
  console.log('🎉 所有段落語法檢查通過！');
} else {
  console.log('⚠️  發現語法錯誤，請檢查上述輸出');
  process.exit(1);
}

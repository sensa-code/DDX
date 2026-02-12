const fs = require('fs');

console.log('=== 自動修復缺失的逗號 ===\n');

// 讀取檔案
const html = fs.readFileSync('E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2-FINAL.html', 'utf8');
const lines = html.split('\n');

let scriptStart = -1;
let scriptEnd = -1;

// 找到script區域
for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim() === '<script>') {
    scriptStart = i;
  }
  if (lines[i].trim() === '</script>') {
    scriptEnd = i;
    break;
  }
}

console.log(`Script區域: 第${scriptStart + 1}行 到 第${scriptEnd + 1}行`);

// 修復策略：
// 在疾病定義之間缺少逗號的地方添加逗號
// 模式：
//   }          <- 疾病結束
//   空行（可選）
//   "disease-id": {   <- 下一個疾病開始，但上面的}後面沒有逗號

let fixes = 0;
const newLines = [...lines];

for (let i = scriptStart + 1; i < scriptEnd - 1; i++) {
  const currentLine = newLines[i].trim();
  const nextNonEmptyLine = findNextNonEmptyLine(newLines, i + 1, scriptEnd);

  // 檢查當前行是否是 } 或 },
  if (currentLine === '}' || currentLine === '},') {
    // 檢查下一個非空行是否是疾病定義開始
    if (nextNonEmptyLine && nextNonEmptyLine.line.trim().match(/^"[a-z0-9-]+": \{/)) {
      // 檢查當前行是否已經有逗號
      if (currentLine === '}') {
        // 需要添加逗號
        newLines[i] = newLines[i].replace(/}\s*$/, '},');
        console.log(`第${i + 1}行: 添加逗號 \`}\` -> \`},\``);
        fixes++;
      }
    }
  }
}

function findNextNonEmptyLine(lines, start, end) {
  for (let i = start; i < end; i++) {
    const trimmed = lines[i].trim();
    if (trimmed && !trimmed.startsWith('//')) {
      return { index: i, line: lines[i] };
    }
  }
  return null;
}

console.log(`\n總共修復: ${fixes} 個缺失的逗號`);

// 生成新檔案
const fixedHtml = newLines.join('\n');
const outputPath = 'E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2-COMMA-FIXED.html';
fs.writeFileSync(outputPath, fixedHtml);

console.log(`✅ 已儲存到: ${outputPath}`);

// 驗證
console.log('\n=== 驗證JavaScript語法 ===');
const scriptContent = newLines.slice(scriptStart + 1, scriptEnd).join('\n');

try {
  new Function(scriptContent);
  console.log('✅ JavaScript語法驗證通過！');
} catch (e) {
  console.error('❌ 仍有語法錯誤:');
  console.error(`   錯誤訊息: ${e.message}`);

  // 儲存除錯用的腳本
  fs.writeFileSync('E:/CLAUDE CODE/BOOK/test3.js', scriptContent);
  console.error(`   已儲存到 test3.js 用於除錯`);
}

const fs = require('fs');

console.log('=== 全面修復：處理所有結構問題 ===\n');

// 讀取檔案
const html = fs.readFileSync('E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2-COMMA-FIXED.html', 'utf8');
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

// 策略：處理所有ALIASES對象後面緊接著疾病定義的情況
// 這些ALIASES對象應該被關閉，然後疾病定義應該回到DISEASE_INFO

const newLines = [...lines];
let fixes = 0;

for (let i = scriptStart + 1; i < scriptEnd - 1; i++) {
  const currentLine = newLines[i].trim();

  // 檢查是否是ALIASES值（不是疾病定義）後面跟著註釋，然後是疾病定義
  // 模式：
  //   "xxx": "yyy"
  //   // ===== From xxx-diseases.js =====
  //   疾病定義開始

  if (currentLine.match(/^"[^"]+": "[^"]+"\s*$/)) {
    // 這是一個ALIASES項目，沒有逗號
    // 檢查後續幾行
    let nextLineIndex = i + 1;
    let foundComment = false;
    let foundDisease = false;

    // 跳過空行和註釋
    while (nextLineIndex < scriptEnd && nextLineIndex < i + 5) {
      const nextLine = newLines[nextLineIndex].trim();

      if (nextLine.startsWith('// =====')) {
        foundComment = true;
        nextLineIndex++;
        continue;
      }

      if (nextLine === '' || nextLine.startsWith('//')) {
        nextLineIndex++;
        continue;
      }

      // 檢查是否是疾病定義開始
      if (nextLine.match(/^"[a-z0-9-]+": \{/)) {
        foundDisease = true;
        break;
      }

      // 如果是其他內容，停止檢查
      break;
    }

    if (foundDisease) {
      // 需要：
      // 1. 在當前行添加逗號（如果沒有）
      // 2. 添加 }; 關閉ALIASES對象
      // 3. 添加代碼將後續疾病合併回DISEASE_INFO

      // 檢查當前行是否已有逗號
      if (!currentLine.endsWith(',')) {
        newLines[i] = newLines[i].replace(/"\s*$/, '",');
        console.log(`第${i + 1}行: 添加逗號到ALIASES項目`);
        fixes++;
      }

      // 在註釋之前插入 };
      let insertIndex = i + 1;
      while (insertIndex < nextLineIndex && newLines[insertIndex].trim() === '') {
        insertIndex++;
      }

      // 檢查是否已經有 };
      if (!newLines[insertIndex].trim().startsWith('};')) {
        newLines.splice(insertIndex, 0, '};');
        console.log(`第${insertIndex + 1}行: 插入 \`};\` 關閉ALIASES對象`);

        // 插入Object.assign來將後續疾病添加回DISEASE_INFO
        newLines.splice(insertIndex + 1, 0, 'Object.assign(DISEASE_INFO, {');
        console.log(`第${insertIndex + 2}行: 插入 \`Object.assign(DISEASE_INFO, {\``);

        fixes++;
        scriptEnd += 2; // 調整script結束行號
      }
    }
  }
}

console.log(`\n總共修復: ${fixes} 處結構問題`);

// 現在需要關閉所有的Object.assign
// 在DISEASE_INFO真正結束的地方（BEHAVIORAL_OTHER_DISEASE_ALIASES之前）添加});

let aliasesLine = -1;
for (let i = scriptStart; i < scriptEnd; i++) {
  if (newLines[i].includes('const BEHAVIORAL_OTHER_DISEASE_ALIASES = {')) {
    aliasesLine = i;
    break;
  }
}

if (aliasesLine !== -1) {
  // 在此之前應該有DISEASE_INFO的結束
  // 檢查前面幾行
  for (let i = aliasesLine - 1; i > aliasesLine - 10 && i > 0; i--) {
    const line = newLines[i].trim();
    if (line === '};') {
      // 這應該是DISEASE_INFO的結束
      // 在這之後需要關閉所有Object.assign
      // 計算有多少個Object.assign
      let assignCount = 0;
      for (let j = scriptStart; j < i; j++) {
        if (newLines[j].includes('Object.assign(DISEASE_INFO, {')) {
          assignCount++;
        }
      }

      if (assignCount > 0) {
        // 在 }; 之後添加 assignCount 個 });
        for (let k = 0; k < assignCount; k++) {
          newLines.splice(i + 1, 0, '});');
          console.log(`第${i + 2}行: 添加 \`});\` 關閉Object.assign (${k + 1}/${assignCount})`);
        }
        scriptEnd += assignCount;
      }

      break;
    }
  }
}

// 生成新檔案
const fixedHtml = newLines.join('\n');
const outputPath = 'E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2-COMPREHENSIVE.html';
fs.writeFileSync(outputPath, fixedHtml);

console.log(`\n✅ 已儲存到: ${outputPath}`);

// 驗證
console.log('\n=== 驗證JavaScript語法 ===');

let scriptStart2 = -1;
let scriptEnd2 = -1;
for (let i = 0; i < newLines.length; i++) {
  if (newLines[i].trim() === '<script>') scriptStart2 = i;
  if (newLines[i].trim() === '</script>') { scriptEnd2 = i; break; }
}

const scriptContent = newLines.slice(scriptStart2 + 1, scriptEnd2).join('\n');

try {
  new Function(scriptContent);
  console.log('✅ JavaScript語法驗證通過！');
  console.log('\n🎉 修復成功！可以替換原檔案了。');
} catch (e) {
  console.error('❌ 仍有語法錯誤:');
  console.error(`   錯誤訊息: ${e.message}`);
  fs.writeFileSync('E:/CLAUDE CODE/BOOK/test4.js', scriptContent);
  console.error(`   已儲存到 test4.js 用於除錯`);
}

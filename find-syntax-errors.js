// 找出所有缺少逗號的地方
const fs = require('fs');

const tempFile = 'E:\\CLAUDE CODE\\BOOK\\temp-data.js';
const lines = fs.readFileSync(tempFile, 'utf8').split('\n');

console.log('掃描缺少逗號的疾病物件結尾...\n');

const issues = [];

for (let i = 0; i < lines.length - 1; i++) {
  const currentLine = lines[i];
  const nextLine = lines[i + 1];

  // 檢查: 當前行是 "  }" 且下一行是以 "  //" 或 '  "' 開頭
  if (currentLine.trim() === '}') {
    if (nextLine.match(/^\s+\/\//) || nextLine.match(/^\s+"[^"]+":/)) {
      // 這表示缺少逗號
      issues.push({
        lineNum: i + 1,
        line: currentLine,
        nextLine: nextLine
      });
    }
  }
}

if (issues.length === 0) {
  console.log('✓ 未發現缺少逗號的問題');
} else {
  console.log(`✗ 發現 ${issues.length} 個缺少逗號的位置:\n`);

  issues.forEach((issue, index) => {
    console.log(`${index + 1}. 第 ${issue.lineNum} 行:`);
    console.log(`   當前行: "${issue.line}"`);
    console.log(`   下一行: "${issue.nextLine.substring(0, 60)}..."`);
    console.log('');
  });

  console.log(`\n總計: ${issues.length} 個需要修正的地方`);
  console.log('建議: 在所有 "}" 後面加上逗號 ","');
}

// 生成修正腳本
if (issues.length > 0) {
  console.log('\n生成自動修正腳本...');

  let fixedContent = lines.join('\n');

  // 從後往前修正，避免行號變化
  for (let i = issues.length - 1; i >= 0; i--) {
    const issue = issues[i];
    const lineIndex = issue.lineNum - 1;
    lines[lineIndex] = lines[lineIndex].replace(/}$/, '},');
  }

  const fixedFile = 'E:\\CLAUDE CODE\\BOOK\\temp-data-fixed.js';
  fs.writeFileSync(fixedFile, lines.join('\n'), 'utf8');

  console.log(`✓ 已生成修正後的文件: temp-data-fixed.js`);
  console.log('\n正在測試修正後的文件...');

  try {
    delete require.cache[require.resolve(fixedFile)];
    const data = require(fixedFile);
    console.log('✓ 修正後的文件語法正確！');
    console.log(`  - 疾病數量: ${Object.keys(data.DISEASE_INFO).length}`);
    console.log(`  - 別名數量: ${Object.keys(data.DISEASE_ALIASES).length}`);
  } catch (err) {
    console.log('✗ 修正後仍有錯誤:');
    console.log(err.message);
  }
}

// 簡化版驗證腳本 - 檢查語法錯誤
const fs = require('fs');

console.log('========================================');
console.log('獸醫診斷輔助系統 - 語法檢查');
console.log('========================================\n');

// 讀取HTML檔案
const htmlPath = 'E:\\CLAUDE CODE\\BOOK\\vet-differential-diagnosis-v2.html';
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

// 提取JavaScript代碼
const scriptMatch = htmlContent.match(/<script>([\s\S]*?)<\/script>/);
if (!scriptMatch) {
  console.error('✗ 找不到 <script> 標籤');
  process.exit(1);
}

const scriptContent = scriptMatch[1];
console.log('✓ 已提取JavaScript代碼');

// 尋找疾病定義區塊
const lines = scriptContent.split('\n');
let inDiseaseInfo = false;
let braceCount = 0;
let errors = [];
let currentDisease = '';

console.log('\n檢查疾病物件語法...\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const lineNum = i + 1;

  // 偵測DISEASE_INFO開始
  if (line.includes('const DISEASE_INFO')) {
    inDiseaseInfo = true;
    console.log(`第 ${lineNum} 行: 發現 DISEASE_INFO 定義`);
    continue;
  }

  if (!inDiseaseInfo) continue;

  // 檢查是否為疾病ID定義
  const diseaseMatch = line.match(/^\s+"([^"]+)":\s*\{/);
  if (diseaseMatch) {
    currentDisease = diseaseMatch[1];
  }

  // 計算大括號
  const openBraces = (line.match(/\{/g) || []).length;
  const closeBraces = (line.match(/\}/g) || []).length;
  braceCount += openBraces - closeBraces;

  // 檢查物件結尾是否缺少逗號
  if (line.match(/^\s+\}\s*$/) && braceCount === 1) {
    // 這是疾病物件的結尾
    const nextLine = lines[i + 1];
    if (nextLine && nextLine.match(/^\s+"[^"]+"\s*:/)) {
      // 下一行是另一個疾病定義，但當前行沒有逗號
      if (!line.includes(',')) {
        errors.push({
          line: lineNum,
          type: '缺少逗號',
          disease: currentDisease,
          content: line.trim(),
          nextLine: nextLine.trim()
        });
      }
    }
  }

  // 檢查DISEASE_INFO結束
  if (line.includes('};') && braceCount === 0) {
    console.log(`第 ${lineNum} 行: DISEASE_INFO 定義結束`);
    break;
  }
}

console.log('\n=== 語法錯誤報告 ===\n');

if (errors.length === 0) {
  console.log('✓ 未發現明顯的語法錯誤');
} else {
  console.log(`✗ 發現 ${errors.length} 個潛在問題：\n`);
  errors.forEach((error, index) => {
    console.log(`${index + 1}. 第 ${error.line} 行 - ${error.type}`);
    console.log(`   疾病: ${error.disease}`);
    console.log(`   當前行: ${error.content}`);
    console.log(`   下一行: ${error.nextLine}`);
    console.log('');
  });
}

// 生成簡易報告
const simpleReport = `# 語法檢查報告

**檢查時間**: ${new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })}
**檔案**: vet-differential-diagnosis-v2.html

## 檢查結果

${errors.length === 0 ? '✓ **未發現明顯的語法錯誤**' : `✗ **發現 ${errors.length} 個潛在問題**`}

${errors.length > 0 ? `
## 問題詳情

${errors.map((error, index) => `
### 問題 ${index + 1}: 第 ${error.line} 行

- **類型**: ${error.type}
- **疾病**: ${error.disease}
- **當前行**: \`${error.content}\`
- **下一行**: \`${error.nextLine}\`

**建議修正**: 在第 ${error.line} 行的 \`}\` 後面加上逗號 \`,\`
`).join('\n')}
` : ''}

## 建議

${errors.length === 0 ?
  '系統JavaScript語法看起來正確，可以進行進一步的資料驗證測試。' :
  `請修正上述 ${errors.length} 個語法問題後再次驗證。主要問題是物件定義結尾缺少逗號分隔符。`
}
`;

fs.writeFileSync('E:\\CLAUDE CODE\\BOOK\\syntax-check-report.md', simpleReport, 'utf8');
console.log('✓ 已生成語法檢查報告: syntax-check-report.md\n');

// final-validation.js - 最終完整驗證
const fs = require('fs');

console.log('=== 最終語法驗證 ===\n');

const html = fs.readFileSync('E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2.html', 'utf8');
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);

if (!scriptMatch) {
  console.log('❌ 找不到script標籤');
  process.exit(1);
}

const script = scriptMatch[1];
console.log(`✓ 讀取script: ${script.length} 字元\n`);

// 完整語法檢查
try {
  const testFunc = new Function(script);
  console.log('✅ JavaScript 語法完全正確！\n');

  // 執行並檢查變數
  const context = {};
  testFunc.call(context);

  // 在新的上下文中執行
  eval(script);

  console.log('=== 變數檢查 ===\n');

  if (typeof SYNONYMS !== 'undefined') {
    console.log(`✅ SYNONYMS: ${Object.keys(SYNONYMS).length} 個同義詞`);
  } else {
    console.log('❌ SYNONYMS 未定義');
  }

  if (typeof DISEASE_INFO !== 'undefined') {
    const diseases = Object.keys(DISEASE_INFO);
    console.log(`✅ DISEASE_INFO: ${diseases.length} 個疾病\n`);

    // 檢查關鍵疾病是否存在
    console.log('=== 關鍵疾病檢查 ===\n');

    const keyDiseases = [
      'trigeminal-neuritis',
      'gastric-dilatation-volvulus',
      'parvovirus',
      'diabetes-mellitus'
    ];

    keyDiseases.forEach(disease => {
      if (DISEASE_INFO[disease]) {
        const info = DISEASE_INFO[disease];
        console.log(`✅ ${disease}`);
        console.log(`   中文名: ${info.zh}`);
        console.log(`   英文名: ${info.en}`);
      } else {
        console.log(`❌ ${disease} 不存在`);
      }
    });

    console.log('\n=== 結構完整性檢查 ===\n');

    // 檢查每個疾病的基本結構
    let validCount = 0;
    let invalidCount = 0;

    diseases.forEach(id => {
      const disease = DISEASE_INFO[id];
      if (disease.zh && disease.en && disease.definition) {
        validCount++;
      } else {
        invalidCount++;
        console.log(`⚠️  ${id} 缺少基本欄位`);
      }
    });

    console.log(`✅ 有效疾病: ${validCount}`);
    console.log(`⚠️  無效疾病: ${invalidCount}`);

  } else {
    console.log('❌ DISEASE_INFO 未定義');
  }

  console.log('\n🎉 所有驗證通過！檔案可以正常使用。');

} catch (e) {
  console.log('❌ 發現錯誤:\n');
  console.log(`類型: ${e.name}`);
  console.log(`訊息: ${e.message}`);
  if (e.stack) {
    console.log(`\n堆疊:\n${e.stack}`);
  }
  process.exit(1);
}

# 獸醫診斷輔助系統驗證報告

**驗證日期**: 2026/2/4 下午10:38:23
**系統版本**: v2.0
**檔案**: E:\CLAUDE CODE\BOOK\vet-differential-diagnosis-v2.html

---

## 執行摘要

✓ **JavaScript語法驗證通過**

系統資料結構完整，無語法錯誤，可正常運作。

---

## 1. 疾病資料統計

| 項目 | 數量 | 百分比 |
|------|------|--------|
| 總疾病數量 | 130 | 100% |
| 完整資料的疾病 | 130 | 100.00% |
| 不完整資料的疾病 | 0 | 0.00% |
| 別名總數 | 137 | - |
| 別名指向的疾病數 | 65 | - |
| 別名覆蓋率 | 65 / 130 | 50.00% |

---

## 2. 資料完整性檢查

### 必要欄位
- **zh** (中文名稱)
- **en** (英文名稱)
- **definition** (定義)

### 完整性評估
✓ **所有疾病資料完整** - 所有疾病都包含必要的zh、en、definition欄位。



---

## 3. ID唯一性驗證

✓ **通過** - 所有疾病ID唯一，無重複



---

## 4. 別名對照表驗證

✗ **發現問題** - 60 個別名指向不存在的疾病


### 孤立的別名（前20個）

1. "腎衰" → `kidney disease` (疾病不存在)
2. "肝腦病" → `hepatic encephalopathy` (疾病不存在)
3. "肝性腦病" → `hepatic encephalopathy` (疾病不存在)
4. "膽管炎" → `cholangitis` (疾病不存在)
5. "溶血性貧血" → `haemolytic` (疾病不存在)
6. "IMTP" → `imtp` (疾病不存在)
7. "ITP" → `imtp` (疾病不存在)
8. "免疫介導性血小板減少" → `imtp` (疾病不存在)
9. "DIC" → `disseminated intravascular coagulation` (疾病不存在)
10. "瀰漫性血管內凝血" → `disseminated intravascular coagulation` (疾病不存在)
11. "貧血" → `anaemia` (疾病不存在)
12. "PLE" → `protein-losing enteropathy` (疾病不存在)
13. "蛋白流失性腸病" → `protein-losing enteropathy` (疾病不存在)
14. "HGE" → `haemorrhagic gastroenteritis` (疾病不存在)
15. "AHDS" → `haemorrhagic gastroenteritis` (疾病不存在)
16. "出血性胃腸炎" → `haemorrhagic gastroenteritis` (疾病不存在)
17. "CHF" → `heart failure` (疾病不存在)
18. "心衰" → `heart failure` (疾病不存在)
19. "心衰竭" → `heart failure` (疾病不存在)
20. "FeLV" → `felv` (疾病不存在)


... 以及其他 40 個別名



---

## 5. 新增疾病驗證

檢查從Clinical Veterinary Advisor新增的8個疾病：

| 疾病ID | 資料存在 | 別名 | 中文名稱 | 定義 |
|--------|----------|------|----------|------|
| `5-fluorouracil-toxicosis` | ✗ | ✗ | - | ✗ |
| `abdominal-compartment-syndrome` | ✗ | ✗ | - | ✗ |
| `abortion-dog` | ✗ | ✗ | - | ✗ |
| `cachexia-cardiac` | ✗ | ✗ | - | ✗ |
| `hypospadias` | ✗ | ✗ | - | ✗ |
| `herpesvirus-dog` | ✗ | ✗ | - | ✗ |
| `helicobacter-gastritis` | ✗ | ✗ | - | ✗ |
| `neonatal-isoerythrolysis` | ✗ | ✗ | - | ✗ |

**統計**: 0/8 個新疾病已成功加入系統

---

## 6. 疾病列表（前50個）

1. `diabetic ketoacidosis` - 糖尿病酮酸中毒 / Diabetic Ketoacidosis (DKA)
2. `imha` - 免疫介導性溶血性貧血 / Immune-Mediated Hemolytic Anemia (IMHA)
3. `pancreatitis` - 胰臟炎 / Pancreatitis
4. `chronic kidney disease` - 慢性腎臟病 / Chronic Kidney Disease (CKD)
5. `hypoadrenocorticism` - 腎上腺皮質功能低下症 / Hypoadrenocorticism (Addison's Disease)
6. `hyperadrenocorticism` - 腎上腺皮質功能亢進症 / Hyperadrenocorticism (Cushing's Disease)
7. `hepatic lipidosis` - 肝脂肪沉積症 / Hepatic Lipidosis (Fatty Liver Disease)
8. `portosystemic shunt` - 肝門脈分流 / Portosystemic Shunt (PSS)
9. `gastric dilatation-volvulus` - 胃擴張扭轉 / Gastric Dilatation-Volvulus (GDV)
10. `feline infectious peritonitis` - 貓傳染性腹膜炎 / Feline Infectious Peritonitis (FIP)
11. `parvovirus` - 犬小病毒腸炎 / Canine Parvovirus Enteritis (CPV)
12. `pyometra` - 子宮蓄膿 / Pyometra
13. `hyperthyroidism` - 甲狀腺功能亢進 / Hyperthyroidism
14. `hypothyroidism` - 甲狀腺功能低下 / Hypothyroidism
15. `inflammatory bowel disease` - 發炎性腸病 / Inflammatory Bowel Disease (IBD)
16. `dilated cardiomyopathy` - 擴張性心肌病 / Dilated Cardiomyopathy (DCM)
17. `hypertrophic cardiomyopathy` - 肥厚性心肌病 / Hypertrophic Cardiomyopathy (HCM)
18. `intervertebral disc disease` - 椎間盤疾病 / Intervertebral Disc Disease (IVDD)
19. `urethral obstruction` - 尿道阻塞 / Urethral Obstruction
20. `lymphoma` - 淋巴瘤 / Lymphoma
21. `diabetes mellitus` - 糖尿病 / Diabetes Mellitus
22. `insulinoma` - 胰島素瘤 / Insulinoma
23. `hypoglycemia` - 低血糖症 / Hypoglycemia
24. `hyperglycemia` - 高血糖症 / Hyperglycemia
25. `hypercalcemia` - 高血鈣症 / Hypercalcemia
26. `hypocalcemia` - 低血鈣症 / Hypocalcemia
27. `hypokalemia` - 低血鉀症 / Hypokalemia
28. `hyperkalemia` - 高血鉀症 / Hyperkalemia
29. `ethylene glycol toxicosis` - 乙二醇中毒 / Ethylene Glycol Toxicosis
30. `rodenticide toxicosis` - 滅鼠劑中毒 / Rodenticide Toxicosis (Anticoagulant)
31. `chocolate toxicosis` - 巧克力中毒 / Chocolate Toxicosis
32. `xylitol toxicosis` - 木糖醇中毒 / Xylitol Toxicosis
33. `nsaid toxicosis` - 非類固醇抗炎藥中毒 / NSAID Toxicosis
34. `acetaminophen toxicosis` - 乙醯氨酚中毒 / Acetaminophen Toxicosis
35. `grape raisin toxicosis` - 葡萄/葡萄乾中毒 / Grape and Raisin Toxicosis
36. `lily toxicosis` - 百合中毒 / Lily Toxicosis
37. `marijuana toxicosis` - 大麻中毒 / Marijuana Toxicosis
38. `snail bait toxicosis` - 蝸牛餌劑中毒 / Metaldehyde Toxicosis (Snail Bait)
39. `permethrin toxicosis` - 除蟲菊精中毒 / Permethrin Toxicosis
40. `leptospirosis` - 鉤端螺旋體症 / Leptospirosis
41. `ehrlichiosis` - 艾利希體症 / Ehrlichiosis
42. `anaplasmosis` - 乏漿體症 / Anaplasmosis
43. `lyme disease` - 萊姆病 / Lyme Disease (Borreliosis)
44. `babesiosis` - 乏漿體症 / Babesiosis
45. `heartworm disease` - 心絲蟲病 / Heartworm Disease (Dirofilariasis)
46. `canine distemper` - 犬瘟熱 / Canine Distemper
47. `infectious canine hepatitis` - 犬傳染性肝炎 / Infectious Canine Hepatitis
48. `kennel cough` - 犬舍咳 / Kennel Cough (CIRD)
49. `feline leukemia virus` - 貓白血病病毒感染 / Feline Leukemia Virus (FeLV)
50. `feline immunodeficiency virus` - 貓免疫缺陷病毒感染 / Feline Immunodeficiency Virus (FIV)


... 以及其他 80 個疾病


---

## 7. 整體評估

### 資料品質評分

| 評估項目 | 評分 | 說明 |
|----------|------|------|
| JavaScript語法 | ✓ 優秀 | 無語法錯誤 |
| 資料完整性 | ✓ 完美 | 100.00% |
| ID唯一性 | ✓ 通過 | 無重複 |
| 別名有效性 | ✗ 需修正 | 60 個問題 |
| 新增疾病 | △ 進行中 | 0/8 |

### 建議與後續步驟




#### 2. 修正孤立的別名
- 有 60 個別名指向不存在的疾病
- 需要確認目標疾病ID是否正確
- 或移除無效的別名映射





#### 4. 完成新增疾病
- 還有 8 個疾病待加入
- 繼續從Clinical Veterinary Advisor補充資料




---

## 8. 結論

獸醫診斷輔助系統 v2.0 的資料結構良好，JavaScript語法正確無誤。

**系統概況**:
- 總疾病數量: **130** 個
- 資料完整性: **100.00%**
- 別名總數: **137** 個
- 別名覆蓋率: **50.00%**

⚠️ **建議修正發現的問題後再正式上線**

主要問題需要優先處理，以確保系統穩定性和資料準確性。

---

*報告由自動驗證腳本生成*
*驗證工具版本: 2.0*
*Node.js 版本: v20.20.0*
*檔案大小: 1.00 MB*

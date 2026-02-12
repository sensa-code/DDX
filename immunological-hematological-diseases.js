// 免疫系統和血液系統疾病 - Immunological and Hematological Diseases
// 可直接加入 DISEASE_INFO 物件中

const IMMUNOLOGICAL_HEMATOLOGICAL_DISEASES = {

    // ==================== 1. 免疫介導性血小板減少症 ====================
    "immune_mediated_thrombocytopenia": {
        zh: "免疫介導性血小板減少症",
        en: "Immune-Mediated Thrombocytopenia (IMTP/ITP)",
        definition: "一種自體免疫性疾病，免疫系統產生針對自身血小板的抗體，導致血小板在脾臟和肝臟被加速破壞，造成嚴重的血小板減少和出血傾向。",
        synonyms: [
            "ITP (Idiopathic Thrombocytopenic Purpura)",
            "IMT (Immune-Mediated Thrombocytopenia)",
            "自發性血小板減少性紫斑症",
            "免疫性血小板減少症",
            "Primary Immune Thrombocytopenia"
        ],
        epidemiology: {
            species: "犬最常見，貓較少見",
            breed_predisposition: [
                "可卡犬 (Cocker Spaniel)",
                "古代英國牧羊犬 (Old English Sheepdog)",
                "德國牧羊犬 (German Shepherd)",
                "貴賓犬 (Poodle)",
                "蘇格蘭㹴 (Scottish Terrier)"
            ],
            age: "中年犬最常見（5-7歲），但任何年齡都可發生",
            sex: "母犬發病率較公犬高（約2:1）",
            incidence: "犬最常見的血小板減少原因之一"
        },
        clinicalPresentation: {
            acute_signs: [
                "皮膚瘀斑 (Ecchymoses)",
                "點狀出血 (Petechiae) - 皮膚、牙齦、結膜",
                "黏膜蒼白",
                "鼻出血 (Epistaxis)",
                "牙齦出血",
                "血尿 (Hematuria)",
                "黑便 (Melena)",
                "血便 (Hematochezia)"
            ],
            systemic_signs: [
                "嗜睡、虛弱",
                "食慾下降",
                "發燒（部分病例）",
                "運動不耐"
            ],
            severe_complications: [
                "眼前房出血 (Hyphema)",
                "視網膜出血",
                "腦出血（罕見但致命）",
                "腹腔內出血"
            ]
        },
        pathophysiology: {
            mechanism: "自體抗體（主要為IgG）結合血小板表面抗原，被覆抗體的血小板被脾臟和肝臟的巨噬細胞識別並吞噬破壞",
            primary_vs_secondary: {
                primary: "原發性：無明確潛在病因，真正的自體免疫反應",
                secondary: "繼發性：由感染、腫瘤、藥物或其他疾病誘發"
            },
            secondary_causes: [
                "感染性疾病（艾利希體症、巴貝斯蟲症、蜱媒疾病）",
                "腫瘤（淋巴瘤、血管肉瘤）",
                "藥物反應（磺胺類、頭孢菌素類）",
                "疫苗接種後（罕見）",
                "其他自體免疫疾病（SLE）"
            ]
        },
        diagnosis: {
            cbc_findings: [
                "血小板嚴重減少（通常 <30,000/μL，常 <10,000/μL）",
                "可能同時有貧血（若合併IMHA則為Evans syndrome）",
                "骨髓巨核細胞增生（代償性反應）",
                "MPV（平均血小板體積）可能增加"
            ],
            coagulation_tests: [
                "PT/PTT 通常正常",
                "出血時間延長",
                "FDPs/D-dimer 通常正常（除非有DIC）"
            ],
            additional_tests: [
                "血小板結合抗體檢測（PBIgG）- 敏感度高但特異度低",
                "骨髓穿刺 - 顯示巨核細胞增生",
                "排除繼發性原因的檢查",
                "蜱媒疾病血清學檢測",
                "腹部超音波（排除腫瘤）",
                "胸腔X光"
            ],
            diagnostic_criteria: "排除其他血小板減少原因後的臨床診斷"
        },
        treatment: {
            immunosuppressive_therapy: {
                first_line: [
                    "Prednisolone/Prednisone: 2-4 mg/kg/day PO 分次給予",
                    "Dexamethasone: 0.3-0.5 mg/kg IV（急性期）"
                ],
                second_line: [
                    "Azathioprine: 2 mg/kg PO q24h（犬），起效需2-4週",
                    "Mycophenolate mofetil: 10-20 mg/kg PO q12h",
                    "Cyclosporine: 5-10 mg/kg PO q12h",
                    "Leflunomide: 2-4 mg/kg PO q24h"
                ],
                refractory_cases: [
                    "Human IV immunoglobulin (hIVIG): 0.5-1.5 g/kg IV over 6-12h",
                    "Vincristine: 0.02 mg/kg IV（可促進血小板釋放）",
                    "Romiplostim（血小板生成素受體激動劑）"
                ]
            },
            supportive_care: [
                "輸血：全血或濃縮血小板（效果短暫）",
                "嚴格限制活動，避免外傷",
                "胃腸道保護劑（Omeprazole, Sucralfate）",
                "避免使用影響血小板功能的藥物（NSAIDs）"
            ],
            splenectomy: "頑固性病例可考慮脾臟切除，但僅作為最後手段"
        },
        prognosis: {
            overall: "整體預後良好至謹慎",
            favorable_factors: [
                "原發性IMTP預後較繼發性好",
                "對初始治療反應良好",
                "無嚴重出血併發症"
            ],
            unfavorable_factors: [
                "合併IMHA（Evans syndrome）",
                "嚴重出血（腦出血、消化道大出血）",
                "需要多種免疫抑制劑",
                "頻繁復發"
            ],
            survival_rate: "初始治療反應率約80-90%，長期存活率約70-80%",
            relapse_rate: "約20-30%的病例會復發"
        },
        monitoring: {
            initial: "每24-48小時監測血小板計數直到穩定",
            stabilization: "每週CBC直到血小板正常",
            maintenance: "每2-4週CBC，逐漸減藥期間密切監測",
            long_term: "減藥完成後每3-6個月追蹤",
            warning_signs: "血小板再次下降、出血症狀復發"
        },
        pearls: [
            "血小板輸注在IMTP中效果短暫（數小時內被破壞），主要用於危及生命的出血",
            "Vincristine可促使骨髓釋放血小板，24-48小時內可見效果",
            "治療前必須排除蜱媒疾病，這些疾病用抗生素治療即可",
            "減藥速度不宜過快，通常需要數月時間",
            "母犬較公犬更常見，可能與賀爾蒙有關",
            "避免使用影響血小板功能的藥物如Aspirin、NSAIDs"
        ],
        references: [
            "Textbook of Veterinary Internal Medicine, 8th Edition",
            "Schalm's Veterinary Hematology, 7th Edition",
            "ACVIM Consensus Statement on IMTP",
            "Journal of Veterinary Internal Medicine - IMTP studies"
        ]
    },

    // ==================== 2. 免疫介導性多發性關節炎 ====================
    "immune_mediated_polyarthritis": {
        zh: "免疫介導性多發性關節炎",
        en: "Immune-Mediated Polyarthritis (IMPA)",
        definition: "一種免疫介導性疾病，特徵為多個關節的非感染性、非侵蝕性滑膜炎，導致關節腫脹、疼痛和跛行。",
        synonyms: [
            "IMPA",
            "Idiopathic Polyarthritis",
            "Non-erosive Polyarthritis",
            "免疫性多關節炎",
            "特發性多發性關節炎"
        ],
        epidemiology: {
            species: "犬較常見，貓罕見",
            breed_predisposition: [
                "阿基塔犬 (Akita) - 特別是Type I",
                "德國牧羊犬 (German Shepherd)",
                "杜賓犬 (Doberman Pinscher)",
                "拉布拉多 (Labrador Retriever)",
                "波音達獵犬 (Pointer)",
                "西班牙獵犬品種"
            ],
            age: "年輕至中年犬（2-6歲最常見）",
            sex: "無明顯性別偏好，部分研究顯示公犬略多"
        },
        clinicalPresentation: {
            joint_signs: [
                "多關節腫脹（通常≥2個關節）",
                "關節疼痛和僵硬",
                "跛行（可能是移行性）",
                "不願行走或運動",
                "關節活動範圍減少"
            ],
            systemic_signs: [
                "發燒（間歇性或持續性）",
                "嗜睡、精神沉鬱",
                "食慾下降",
                "淋巴結腫大",
                "肌肉萎縮（慢性病例）"
            ],
            commonly_affected_joints: [
                "腕關節 (Carpus)",
                "跗關節 (Tarsus)",
                "膝關節 (Stifle)",
                "肘關節 (Elbow)"
            ]
        },
        pathophysiology: {
            classification: {
                type_I: "特發性（最常見，約50%）- 無可識別的潛在原因",
                type_II: "反應性 - 與遠處感染有關（如泌尿道感染、牙周病）",
                type_III: "與胃腸道疾病相關（IBD、肝病）",
                type_IV: "與腫瘤相關（副腫瘤症候群）"
            },
            mechanism: "免疫複合物沉積於滑膜，引發補體活化和發炎反應；滑膜細胞增生和白血球浸潤"
        },
        diagnosis: {
            joint_fluid_analysis: {
                findings: [
                    "外觀：混濁、稀薄",
                    "有核細胞數增加（>3,000-5,000/μL，常>10,000/μL）",
                    "主要為非退化性嗜中性球（>10-20%）",
                    "無細菌（培養陰性）",
                    "黏稠度降低"
                ],
                key_criteria: "多個關節（至少2個）顯示類似變化"
            },
            imaging: [
                "X光：早期可能正常，後期見軟組織腫脹",
                "非侵蝕性（無骨侵蝕，與類風濕性關節炎區別）",
                "關節積液"
            ],
            laboratory_tests: [
                "CBC：可能見嗜中性球增多、輕度貧血",
                "生化：通常正常，可能有輕度低白蛋白",
                "ANA檢測（排除SLE）",
                "類風濕因子（排除類風濕性關節炎）",
                "尿液分析和培養",
                "腹部超音波/胸腔X光（排除Type II-IV原因）"
            ],
            differential_diagnosis: [
                "感染性關節炎",
                "類風濕性關節炎（侵蝕性）",
                "系統性紅斑性狼瘡",
                "萊姆病關節炎",
                "退化性關節病"
            ]
        },
        treatment: {
            immunosuppressive_therapy: {
                first_line: [
                    "Prednisolone: 1-2 mg/kg PO q12h，逐漸減量",
                    "Dexamethasone: 0.1-0.2 mg/kg IV/PO（急性期）"
                ],
                second_line: [
                    "Azathioprine: 2 mg/kg PO q24h（與類固醇併用）",
                    "Leflunomide: 2-4 mg/kg PO q24h",
                    "Cyclosporine: 5 mg/kg PO q12h",
                    "Mycophenolate: 10 mg/kg PO q12h"
                ]
            },
            address_underlying_cause: [
                "Type II：治療感染源（抗生素、牙科處理）",
                "Type III：治療胃腸道疾病",
                "Type IV：治療腫瘤"
            ],
            supportive_care: [
                "適度運動限制",
                "物理治療",
                "體重管理",
                "關節保健品（Glucosamine, Omega-3）"
            ]
        },
        prognosis: {
            type_I: "預後良好，但可能需要長期治療",
            type_II_III: "治療潛在原因後預後良好",
            type_IV: "預後取決於腫瘤類型和分期",
            relapse: "約30-50%會復發，可能需要維持治療"
        },
        monitoring: {
            initial: "每2週評估臨床症狀和關節液",
            maintenance: "每4-8週臨床評估",
            drug_monitoring: "定期CBC、生化（監測藥物副作用）",
            long_term: "關節液分析確認緩解"
        },
        pearls: [
            "必須進行多關節關節液分析以確診",
            "Type I診斷前必須排除其他類型的潛在原因",
            "關節液培養很重要，以排除感染性關節炎",
            "發燒+多關節腫脹是典型表現",
            "與侵蝕性關節炎（如類風濕性關節炎）不同，X光通常無骨侵蝕",
            "治療反應通常在1-2週內可見改善"
        ],
        references: [
            "Textbook of Veterinary Internal Medicine, 8th Edition",
            "BSAVA Manual of Canine and Feline Musculoskeletal Disorders",
            "Journal of Veterinary Internal Medicine - IMPA classification"
        ]
    },

    // ==================== 3. 伊文氏症候群 ====================
    "evans_syndrome": {
        zh: "伊文氏症候群",
        en: "Evans Syndrome",
        definition: "同時或相繼發生的免疫介導性溶血性貧血（IMHA）和免疫介導性血小板減少症（IMTP）的組合，是一種嚴重的自體免疫性疾病。",
        synonyms: [
            "Combined IMHA and IMTP",
            "IMHA-IMTP Syndrome",
            "免疫介導性血球減少症候群",
            "Combined Autoimmune Cytopenia"
        ],
        epidemiology: {
            species: "主要見於犬，貓罕見",
            breed_predisposition: [
                "可卡犬 (Cocker Spaniel)",
                "英國史賓格犬 (English Springer Spaniel)",
                "古代英國牧羊犬 (Old English Sheepdog)",
                "愛爾蘭雪達犬 (Irish Setter)",
                "拉布拉多 (Labrador Retriever)"
            ],
            age: "中年犬（4-8歲）",
            sex: "母犬較公犬常見",
            prevalence: "約10-20%的IMHA病例會同時發展為IMTP"
        },
        clinicalPresentation: {
            imha_signs: [
                "黏膜蒼白或黃疸",
                "虛弱、運動不耐",
                "呼吸急促、心跳加快",
                "深色尿液（血紅素尿）",
                "脾腫大"
            ],
            imtp_signs: [
                "點狀出血 (Petechiae)",
                "瘀斑 (Ecchymoses)",
                "黏膜出血",
                "鼻出血",
                "血尿、黑便"
            ],
            combined_presentation: [
                "嚴重貧血合併出血",
                "高死亡風險",
                "多器官功能障礙",
                "DIC風險增加"
            ]
        },
        pathophysiology: {
            mechanism: "同時產生針對紅血球和血小板的自體抗體",
            shared_antigens: "可能存在紅血球和血小板表面的共同抗原",
            immune_dysregulation: "嚴重的免疫系統調節異常，T調節細胞功能缺陷",
            complications: [
                "血栓栓塞（IMHA的主要死因）",
                "DIC（出血和血栓同時發生）",
                "多器官衰竭"
            ]
        },
        diagnosis: {
            cbc_findings: [
                "再生性貧血（網織紅血球增加）",
                "球形紅血球 (Spherocytes)",
                "紅血球凝集 (Autoagglutination)",
                "嚴重血小板減少（<50,000/μL）"
            ],
            confirmatory_tests: [
                "Coombs test（直接抗球蛋白試驗）陽性",
                "血小板結合抗體（PBIgG）陽性",
                "網織紅血球計數增加",
                "膽紅素升高（溶血性）"
            ],
            additional_workup: [
                "凝血功能（PT、PTT、FDPs/D-dimer）",
                "排除繼發性原因",
                "蜱媒疾病檢測",
                "腹部超音波、胸腔X光",
                "骨髓檢查（嚴重病例）"
            ]
        },
        treatment: {
            aggressive_immunosuppression: {
                glucocorticoids: "Prednisolone 2-4 mg/kg/day PO 或 Dexamethasone 0.3-0.5 mg/kg IV",
                combination_therapy: [
                    "Azathioprine: 2 mg/kg PO q24h",
                    "Mycophenolate: 10-20 mg/kg PO q12h",
                    "Cyclosporine: 5-10 mg/kg PO q12h"
                ],
                rescue_therapy: [
                    "Human IV immunoglobulin (hIVIG): 0.5-1 g/kg IV",
                    "Vincristine: 0.02 mg/kg IV"
                ]
            },
            supportive_care: [
                "輸血（濃縮紅血球優先）",
                "血小板輸注（效果有限）",
                "抗血栓治療（低分子量肝素、Clopidogrel）",
                "胃腸道保護",
                "氧氣支持"
            ],
            thromboprophylaxis: "極為重要 - Clopidogrel 2-4 mg/kg/day 或 低分子量肝素"
        },
        prognosis: {
            overall: "預後謹慎至不良",
            mortality_rate: "死亡率約30-50%，高於單純IMHA或IMTP",
            negative_factors: [
                "需要多次輸血",
                "發生血栓栓塞",
                "DIC發展",
                "對治療反應差"
            ],
            survivors: "存活者可能需要長期免疫抑制治療"
        },
        monitoring: {
            intensive: "住院期間每6-12小時監測PCV和血小板",
            stabilization: "每日CBC直到穩定",
            outpatient: "每週CBC，逐漸延長間隔",
            thrombosis_watch: "監測呼吸狀態、神經症狀（肺栓塞、腦栓塞徵兆）"
        },
        pearls: [
            "Evans syndrome 比單純 IMHA 或 IMTP 預後更差",
            "血栓栓塞是主要死因，抗血栓治療非常重要",
            "可能同時發生或先後發生（相隔數週至數月）",
            "治療需要更積極的免疫抑制",
            "輸血時優先選擇濃縮紅血球，血小板輸注效果短暫",
            "密切監測DIC徵兆"
        ],
        references: [
            "Journal of Veterinary Internal Medicine - Evans Syndrome studies",
            "Schalm's Veterinary Hematology",
            "ACVIM Consensus on IMHA management"
        ]
    },

    // ==================== 4. 系統性紅斑性狼瘡 ====================
    "systemic_lupus_erythematosus": {
        zh: "系統性紅斑性狼瘡",
        en: "Systemic Lupus Erythematosus (SLE)",
        definition: "一種多系統自體免疫性疾病，特徵為產生多種自體抗體（尤其是抗核抗體），導致多器官系統的免疫介導性損傷。",
        synonyms: [
            "SLE",
            "Lupus",
            "全身性紅斑狼瘡",
            "系統性狼瘡"
        ],
        epidemiology: {
            species: "犬較常見，貓非常罕見",
            breed_predisposition: [
                "德國牧羊犬 (German Shepherd) - 最常見",
                "喜樂蒂牧羊犬 (Shetland Sheepdog)",
                "可麗牧羊犬 (Collie)",
                "阿富汗獵犬 (Afghan Hound)",
                "愛爾蘭雪達犬 (Irish Setter)",
                "貴賓犬 (Poodle)"
            ],
            age: "年輕至中年（2-8歲），平均5歲",
            sex: "母犬發病率較高",
            trigger_factors: "紫外線暴露、感染、藥物、賀爾蒙"
        },
        clinicalPresentation: {
            multisystem_involvement: "必須有≥2個器官系統受累",
            musculoskeletal: [
                "非侵蝕性多發性關節炎（最常見，約90%）",
                "肌炎、肌肉疼痛",
                "跛行"
            ],
            dermatological: [
                "皮膚潰瘍和結痂",
                "鼻樑、耳朵的紅斑病變",
                "光敏感性皮膚病變",
                "脫毛",
                "足墊病變"
            ],
            hematological: [
                "IMHA（溶血性貧血）",
                "IMTP（血小板減少）",
                "白血球減少"
            ],
            renal: [
                "蛋白尿",
                "腎小球腎炎",
                "進行性腎病"
            ],
            other_systems: [
                "發燒（不明原因）",
                "淋巴結腫大",
                "心肌炎、心包炎",
                "神經系統症狀（罕見）"
            ]
        },
        pathophysiology: {
            mechanism: "免疫耐受性喪失，產生針對自身細胞核成分的抗體",
            autoantibodies: [
                "抗核抗體 (ANA)",
                "抗dsDNA抗體",
                "抗組蛋白抗體",
                "抗紅血球抗體",
                "抗血小板抗體"
            ],
            tissue_damage: "免疫複合物沉積於血管壁和組織，引發補體活化和發炎反應（Type III過敏反應）"
        },
        diagnosis: {
            diagnostic_criteria: "需要多系統受累 + ANA陽性 + 排除其他疾病",
            ana_testing: {
                method: "間接免疫螢光法（IFA）",
                significance: "陽性是診斷必要條件但非充分條件",
                patterns: "均質型或斑點型最常見",
                titer: "≥1:80 通常有臨床意義"
            },
            additional_tests: [
                "Coombs test（IMHA）",
                "血小板計數",
                "尿液分析（蛋白尿）",
                "關節液分析",
                "皮膚切片（免疫螢光）",
                "腎臟切片（嚴重腎病病例）"
            ],
            le_cell_test: "LE細胞試驗（已較少使用，特異性高但敏感度低）"
        },
        treatment: {
            immunosuppressive_therapy: {
                mild_cases: "Prednisolone 1-2 mg/kg/day",
                moderate_severe: [
                    "Prednisolone 2-4 mg/kg/day",
                    "加上 Azathioprine 2 mg/kg/day",
                    "或 Mycophenolate 10-20 mg/kg q12h",
                    "或 Cyclosporine 5 mg/kg q12h"
                ],
                renal_involvement: "可能需要更積極治療，考慮 Cyclophosphamide"
            },
            supportive_measures: [
                "避免陽光暴露（紫外線可加重病情）",
                "定期監測腎功能",
                "胃腸道保護",
                "適當運動"
            ]
        },
        prognosis: {
            variable: "取決於受累器官和嚴重程度",
            favorable: "僅關節和皮膚受累，預後較好",
            guarded: "腎臟受累預後較差",
            poor: "嚴重腎小球腎炎、多器官衰竭",
            long_term: "需要終生管理和監測"
        },
        monitoring: {
            regular: "每2-4週CBC、生化、尿液分析",
            ana_titers: "ANA效價可能不與疾病活動度相關",
            urine_protein: "定期監測尿蛋白/肌酐比值（UPC）",
            organ_function: "監測所有受累器官系統"
        },
        pearls: [
            "SLE是排除性診斷，需排除感染、腫瘤等",
            "ANA陽性不等於SLE，需要臨床症狀配合",
            "德國牧羊犬有遺傳易感性",
            "避免陽光暴露可減少發作",
            "腎臟受累是預後的重要決定因素",
            "可能與其他自體免疫疾病重疊"
        ],
        references: [
            "Textbook of Veterinary Internal Medicine",
            "BSAVA Manual of Canine and Feline Dermatology",
            "Journal of Veterinary Internal Medicine - SLE studies"
        ]
    },

    // ==================== 5. 類風濕性關節炎 ====================
    "rheumatoid_arthritis": {
        zh: "類風濕性關節炎",
        en: "Rheumatoid Arthritis",
        definition: "一種侵蝕性、免疫介導性多關節炎，特徵為滑膜增生和進行性關節軟骨與骨骼破壞，導致不可逆的關節損傷和畸形。",
        synonyms: [
            "RA",
            "Erosive Polyarthritis",
            "Erosive Immune-Mediated Polyarthritis",
            "侵蝕性多發性關節炎",
            "風濕性關節炎"
        ],
        epidemiology: {
            species: "犬（罕見），貓極罕見",
            breed_predisposition: [
                "小型犬和玩具犬較常見",
                "灰狗 (Greyhound)",
                "喜樂蒂牧羊犬 (Shetland Sheepdog)"
            ],
            age: "中年至老年（4歲以上）",
            sex: "無明確性別偏好",
            prevalence: "犬類關節炎中相對罕見"
        },
        clinicalPresentation: {
            joint_involvement: [
                "對稱性多關節腫脹",
                "主要影響遠端關節（腕、跗、指/趾關節）",
                "關節疼痛和僵硬",
                "移行性跛行",
                "晨僵（休息後更嚴重）"
            ],
            progressive_changes: [
                "關節畸形和變形",
                "關節不穩定",
                "關節活動範圍減少",
                "肌肉萎縮"
            ],
            systemic_signs: [
                "間歇性發燒",
                "淋巴結腫大",
                "精神沉鬱",
                "食慾下降"
            ]
        },
        pathophysiology: {
            mechanism: "滑膜層增生形成血管翳（pannus），侵蝕軟骨和軟骨下骨",
            autoantibodies: "類風濕因子（RF）- 針對IgG Fc段的自體抗體",
            inflammation: "滑膜慢性發炎，細胞激素（IL-1, TNF-α）介導破壞",
            joint_destruction: "不可逆的骨侵蝕、軟骨破壞、關節僵直"
        },
        diagnosis: {
            radiographic_findings: [
                "軟組織腫脹",
                "關節周圍骨質減少",
                "軟骨下骨侵蝕（特徵性）",
                "關節間隙狹窄",
                "關節半脫位或脫位",
                "嚴重者可見骨融合"
            ],
            joint_fluid: [
                "炎症性關節液",
                "白血球增加（主要嗜中性球）",
                "黏稠度降低",
                "培養陰性"
            ],
            rheumatoid_factor: {
                test: "RF檢測（Rose-Waaler test, ELISA）",
                sensitivity: "約70%的犬類RA陽性",
                specificity: "其他疾病也可能陽性"
            },
            diagnostic_criteria: [
                "對稱性多關節炎",
                "X光顯示侵蝕性變化",
                "類風濕因子陽性",
                "排除感染性和其他原因"
            ]
        },
        treatment: {
            immunosuppression: {
                first_line: [
                    "Prednisolone: 1-2 mg/kg/day",
                    "逐漸減量至最低有效劑量"
                ],
                dmards: [
                    "Leflunomide: 2-4 mg/kg/day（首選）",
                    "Azathioprine: 2 mg/kg/day",
                    "Cyclosporine: 5 mg/kg q12h",
                    "Methotrexate（較少使用於犬）"
                ]
            },
            pain_management: [
                "NSAIDs（不與類固醇併用）",
                "Gabapentin",
                "Tramadol"
            ],
            supportive: [
                "物理治療和復健",
                "體重管理",
                "關節保護",
                "適度運動"
            ],
            surgery: "嚴重關節破壞可考慮關節融合術或關節置換"
        },
        prognosis: {
            overall: "預後謹慎至不良",
            progression: "進行性且不可逆的關節破壞",
            quality_of_life: "早期診斷和治療可延緩進展",
            complications: "嚴重畸形、活動能力喪失"
        },
        monitoring: {
            clinical: "每4-8週關節評估",
            radiographic: "每6-12個月X光追蹤關節變化",
            laboratory: "定期CBC、生化監測藥物副作用"
        },
        pearls: [
            "與非侵蝕性IMPA不同，RA會造成永久性骨侵蝕",
            "X光侵蝕性變化是確診關鍵",
            "早期診斷和積極治療可延緩進展",
            "RF陰性不能排除RA（約30%患者RF陰性）",
            "小型犬更常見",
            "一旦發生骨侵蝕，損傷不可逆"
        ],
        references: [
            "BSAVA Manual of Canine and Feline Musculoskeletal Disorders",
            "Textbook of Veterinary Internal Medicine",
            "Journal of Small Animal Practice - Canine RA"
        ]
    },

    // ==================== 6. 全血球減少症 ====================
    "pancytopenia": {
        zh: "全血球減少症",
        en: "Pancytopenia",
        definition: "同時出現所有三種主要血球系列減少的血液學異常：貧血（紅血球減少）、白血球減少和血小板減少，通常反映骨髓功能障礙或周邊血球破壞增加。",
        synonyms: [
            "三系血球減少",
            "泛血球減少症",
            "Trilineage Cytopenia",
            "骨髓衰竭綜合症（部分病例）"
        ],
        epidemiology: {
            species: "犬和貓都可發生",
            breed_predisposition: "無特定品種，取決於潛在病因",
            age: "任何年齡，取決於病因",
            common_causes_dogs: "艾利希體症、腫瘤、藥物毒性、骨髓疾病",
            common_causes_cats: "FeLV、FIV、骨髓疾病、藥物"
        },
        clinicalPresentation: {
            anemia_signs: [
                "黏膜蒼白",
                "虛弱、嗜睡",
                "運動不耐",
                "心跳加快、呼吸急促"
            ],
            leukopenia_signs: [
                "易受感染",
                "發燒",
                "敗血症風險增加",
                "傷口癒合不良"
            ],
            thrombocytopenia_signs: [
                "點狀出血、瘀斑",
                "黏膜出血",
                "血尿、黑便",
                "鼻出血"
            ]
        },
        pathophysiology: {
            central_causes: {
                description: "骨髓生產減少",
                examples: [
                    "骨髓抑制（藥物、毒素）",
                    "骨髓浸潤（腫瘤、纖維化）",
                    "骨髓發育不良",
                    "再生不良性貧血",
                    "FeLV感染"
                ]
            },
            peripheral_causes: {
                description: "周邊破壞或消耗增加",
                examples: [
                    "免疫介導性（Evans syndrome plus）",
                    "脾功能亢進",
                    "DIC",
                    "嚴重感染（消耗性）"
                ]
            },
            combined: "骨髓問題 + 周邊因素"
        },
        diagnosis: {
            cbc_findings: [
                "紅血球減少（PCV/HCT下降）",
                "白血球減少（WBC <4,000-5,000/μL）",
                "血小板減少（<150,000/μL）",
                "評估再生能力（網織紅血球）"
            ],
            bone_marrow_evaluation: {
                indication: "幾乎所有全血球減少症都需要骨髓檢查",
                findings: [
                    "骨髓增生減退（hypoplasia）",
                    "骨髓增生（反應性或腫瘤浸潤）",
                    "纖維化",
                    "腫瘤細胞浸潤"
                ]
            },
            additional_workup: [
                "蜱媒疾病檢測（艾利希體、巴貝斯蟲）",
                "FeLV/FIV檢測（貓）",
                "腹部超音波（脾臟、肝臟、淋巴結）",
                "詳細用藥史",
                "凝血功能檢查"
            ]
        },
        treatment: {
            treat_underlying_cause: [
                "艾利希體症：Doxycycline 5-10 mg/kg q12h",
                "FeLV：支持治療",
                "藥物誘發：停用可疑藥物",
                "腫瘤：化療或其他腫瘤治療"
            ],
            supportive_care: [
                "輸血（濃縮紅血球、全血）",
                "血小板輸注（嚴重出血時）",
                "廣效抗生素（嗜中性球減少性發燒）",
                "無菌環境護理"
            ],
            bone_marrow_stimulation: [
                "Erythropoietin（貧血）",
                "G-CSF/GM-CSF（白血球減少）- 有限使用",
                "營養支持（B12, 葉酸, 鐵）"
            ],
            immunosuppression: "若為免疫介導性原因"
        },
        prognosis: {
            variable: "高度取決於潛在病因",
            good_prognosis: [
                "蜱媒疾病（治療後反應良好）",
                "藥物誘發（停藥後恢復）"
            ],
            poor_prognosis: [
                "骨髓腫瘤浸潤",
                "再生不良性貧血",
                "FeLV相關骨髓疾病",
                "嚴重骨髓纖維化"
            ]
        },
        monitoring: {
            acute: "每日或隔日CBC",
            recovering: "每週CBC直到穩定",
            long_term: "根據病因定期追蹤"
        },
        pearls: [
            "全血球減少症是症狀而非診斷，必須找出潛在原因",
            "骨髓檢查是診斷的關鍵步驟",
            "艾利希體症是犬全血球減少症最常見且可治療的原因之一",
            "嗜中性球<1,000/μL時感染風險極高",
            "用藥史非常重要 - 多種藥物可能導致骨髓抑制",
            "FeLV是貓最重要的原因之一"
        ],
        references: [
            "Schalm's Veterinary Hematology",
            "Textbook of Veterinary Internal Medicine",
            "Journal of Veterinary Internal Medicine - Pancytopenia studies"
        ]
    },

    // ==================== 7. 紅血球增多症 ====================
    "polycythemia": {
        zh: "紅血球增多症",
        en: "Polycythemia",
        definition: "紅血球數量異常增加，導致血比容（PCV/HCT）升高的狀態。可分為相對性（脫水）、適當性/繼發性（缺氧代償）和絕對性/原發性（真性紅血球增多症）。",
        synonyms: [
            "Erythrocytosis",
            "紅血球增生症",
            "高紅血球症",
            "Polycythemia Vera（原發性）",
            "真性紅血球增多症（原發性）"
        ],
        epidemiology: {
            species: "犬和貓都可發生",
            polycythemia_vera: {
                species: "犬較貓常見",
                age: "中年至老年",
                sex: "無明顯性別偏好"
            },
            secondary: "任何年齡，取決於潛在原因"
        },
        clinicalPresentation: {
            hyperviscosity_signs: [
                "黏膜暗紅色（磚紅色）",
                "充血的鞏膜血管",
                "嗜睡、虛弱",
                "運動不耐",
                "呼吸困難"
            ],
            neurological_signs: [
                "癲癇",
                "共濟失調",
                "行為改變",
                "失明（視網膜出血）"
            ],
            thrombotic_complications: [
                "血栓形成風險增加",
                "心血管併發症"
            ],
            bleeding: "矛盾性出血（高黏稠度影響凝血）"
        },
        pathophysiology: {
            classification: {
                relative: {
                    description: "血漿量減少，紅血球濃度相對升高",
                    causes: ["脫水", "休克", "脾臟收縮（緊張）"]
                },
                absolute_secondary: {
                    description: "適當的紅血球生成素（EPO）升高反應",
                    appropriate: ["慢性缺氧", "心臟病", "呼吸系統疾病", "高海拔"],
                    inappropriate: ["腎臟腫瘤", "其他EPO分泌腫瘤"]
                },
                absolute_primary: {
                    description: "骨髓增殖性疾病，EPO水平正常或降低",
                    polycythemia_vera: "紅血球系前驅細胞自主增生"
                }
            }
        },
        diagnosis: {
            initial_assessment: [
                "PCV/HCT顯著升高（犬>55-60%，貓>45-50%）",
                "紅血球數量和血紅素升高",
                "評估水合狀態"
            ],
            differentiation: {
                hydration_status: "排除相對性（脫水）",
                oxygen_saturation: "動脈血氣分析，排除缺氧",
                epo_level: {
                    high: "繼發性（適當或不適當）",
                    normal_low: "原發性（真性紅血球增多症）"
                }
            },
            additional_workup: [
                "腹部超音波（腎臟腫瘤）",
                "胸腔X光（心肺疾病）",
                "心臟超音波",
                "骨髓檢查（原發性）",
                "EPO測定"
            ]
        },
        treatment: {
            relative: "補液治療即可",
            secondary: {
                treat_underlying: "治療潛在缺氧原因或腫瘤",
                phlebotomy: "若PCV過高可暫時放血"
            },
            primary_polycythemia_vera: {
                phlebotomy: {
                    procedure: "定期放血降低PCV",
                    target: "維持PCV在45-55%",
                    volume: "每次10-20 ml/kg",
                    replacement: "等量生理食鹽水"
                },
                myelosuppression: [
                    "Hydroxyurea: 30-50 mg/kg/day PO（首選）",
                    "定期監測CBC調整劑量"
                ]
            },
            supportive: "低劑量Aspirin（抗血栓）"
        },
        prognosis: {
            relative: "糾正脫水後預後良好",
            secondary: "取決於潛在病因",
            primary: {
                with_treatment: "控制得當可存活數年",
                without_treatment: "血栓併發症風險高",
                progression: "可能轉化為骨髓纖維化或急性白血病（罕見）"
            }
        },
        monitoring: {
            phlebotomy: "根據PCV決定放血頻率",
            hydroxyurea: "每2-4週CBC，監測骨髓抑制",
            long_term: "定期PCV監測，調整治療"
        },
        pearls: [
            "必須區分相對性、繼發性和原發性紅血球增多症",
            "EPO測定是區分原發性和繼發性的關鍵",
            "黏膜暗紅色是典型臨床徵象",
            "高黏稠度可導致神經症狀和血栓",
            "放血是快速降低PCV的有效方法",
            "Hydroxyurea治療需要定期CBC監測"
        ],
        references: [
            "Schalm's Veterinary Hematology",
            "Textbook of Veterinary Internal Medicine",
            "BSAVA Manual of Canine and Feline Haematology and Transfusion Medicine"
        ]
    },

    // ==================== 8. 白血病 ====================
    "leukemia": {
        zh: "白血病",
        en: "Leukemia",
        definition: "起源於骨髓的白血球惡性腫瘤，特徵為異常白血球（白血病細胞）在骨髓中不受控制地增生，並釋放至周邊血液中。依據細胞類型和病程可分為急性和慢性、淋巴性和髓性。",
        synonyms: [
            "Blood Cancer",
            "白血球癌",
            "血癌",
            "造血系統惡性腫瘤"
        ],
        epidemiology: {
            species: "犬和貓都可發生",
            dogs: {
                acute_lymphoblastic: "中大型犬，中年",
                chronic_lymphocytic: "老年犬，中小型犬",
                acute_myeloid: "較少見"
            },
            cats: {
                association: "與FeLV高度相關",
                lymphoid: "淋巴性白血病最常見",
                age: "FeLV陽性貓較年輕"
            }
        },
        clinicalPresentation: {
            acute_leukemia: [
                "急性發病",
                "嚴重嗜睡、虛弱",
                "發燒",
                "出血傾向（血小板減少）",
                "蒼白（貧血）",
                "淋巴結腫大",
                "肝脾腫大",
                "感染（嗜中性球減少或功能異常）"
            ],
            chronic_leukemia: [
                "進展緩慢，可能無症狀",
                "輕度嗜睡",
                "體重減輕",
                "淋巴結腫大（慢性淋巴性）",
                "脾腫大",
                "可能偶然發現於例行血檢"
            ]
        },
        pathophysiology: {
            classification: {
                by_cell_type: {
                    lymphoid: "淋巴性白血病（ALL, CLL）",
                    myeloid: "髓性白血病（AML, CML）"
                },
                by_course: {
                    acute: "急性 - 未成熟母細胞增生，進展快速",
                    chronic: "慢性 - 成熟細胞增生，進展緩慢"
                }
            },
            common_types: {
                dogs: [
                    "急性淋巴母細胞白血病 (ALL)",
                    "慢性淋巴性白血病 (CLL) - 最常見",
                    "急性髓性白血病 (AML)"
                ],
                cats: [
                    "淋巴性白血病（與FeLV相關）",
                    "大顆粒淋巴球白血病"
                ]
            }
        },
        diagnosis: {
            cbc_findings: {
                leukocytosis: "白血球顯著增加（可達>100,000/μL）",
                abnormal_cells: "周邊血液中出現異常/未成熟白血球",
                cytopenia: "其他血球系列減少（貧血、血小板減少）",
                leukemic_hiatus: "急性白血病可見成熟和幼稚細胞間的空隙"
            },
            bone_marrow: {
                indication: "確診和分類必需",
                findings: "白血病細胞浸潤，正常造血受抑制",
                blast_percentage: "急性白血病：>20% 母細胞"
            },
            immunophenotyping: {
                purpose: "確定白血病細胞類型",
                markers: {
                    lymphoid: "CD3 (T細胞), CD79a/CD20 (B細胞)",
                    myeloid: "CD11b, CD14, CD18"
                }
            },
            additional_tests: [
                "FeLV/FIV檢測（貓）",
                "腹部超音波（肝脾浸潤）",
                "流式細胞儀"
            ]
        },
        treatment: {
            acute_leukemia: {
                chemotherapy: [
                    "ALL犬：CHOP-based protocol",
                    "Vincristine, Cyclophosphamide, Doxorubicin, Prednisone",
                    "L-asparaginase（誘導期）"
                ],
                supportive: [
                    "輸血",
                    "廣效抗生素",
                    "營養支持"
                ],
                prognosis: "預後不良，緩解率低"
            },
            chronic_lymphocytic_leukemia: {
                watchful_waiting: "無症狀者可觀察",
                treatment_indication: "症狀出現或血球減少時開始治療",
                options: [
                    "Chlorambucil: 2-6 mg/m² PO q24-48h",
                    "Prednisone: 1-2 mg/kg/day",
                    "Cyclophosphamide（替代）"
                ],
                prognosis: "預後較好，可存活1-3年以上"
            }
        },
        prognosis: {
            acute: {
                all: "犬ALL中位存活<6個月",
                aml: "預後極差，存活數週至數月"
            },
            chronic: {
                cll: "中位存活1-3年，部分可更長",
                factors: "分期、對治療反應、併發症"
            }
        },
        monitoring: {
            treatment: "每週至每兩週CBC",
            remission: "每4-8週追蹤",
            watch_for: "復發、感染、藥物毒性"
        },
        pearls: [
            "慢性淋巴性白血病（CLL）是犬最常見的白血病，預後相對較好",
            "急性白血病預後差，需要積極治療",
            "貓白血病高度與FeLV相關，必須檢測",
            "周邊血液中出現母細胞是急性白血病的特徵",
            "骨髓檢查對確診和分類至關重要",
            "無症狀CLL可能不需要立即治療"
        ],
        references: [
            "Withrow and MacEwen's Small Animal Clinical Oncology",
            "Schalm's Veterinary Hematology",
            "Journal of Veterinary Internal Medicine - Leukemia studies"
        ]
    },

    // ==================== 9. 多發性骨髓瘤 ====================
    "multiple_myeloma": {
        zh: "多發性骨髓瘤",
        en: "Multiple Myeloma",
        definition: "漿細胞的惡性腫瘤，特徵為單株漿細胞在骨髓中增生，產生大量單株免疫球蛋白（M蛋白），導致骨骼破壞、腎臟損傷和高黏稠度症候群。",
        synonyms: [
            "Plasma Cell Myeloma",
            "漿細胞瘤",
            "Myelomatosis",
            "骨髓瘤",
            "Plasma Cell Neoplasia"
        ],
        epidemiology: {
            species: "犬較貓常見",
            breed_predisposition: [
                "德國牧羊犬 (German Shepherd)",
                "黃金獵犬 (Golden Retriever)",
                "拉布拉多 (Labrador Retriever)"
            ],
            age: "老年犬（8-10歲以上）",
            sex: "無明顯性別偏好",
            incidence: "犬所有腫瘤的<1%，但為骨髓漿細胞腫瘤最常見類型"
        },
        clinicalPresentation: {
            bone_involvement: [
                "溶骨性病變（最常見）",
                "病理性骨折",
                "骨痛、跛行",
                "脊椎病變可導致神經症狀"
            ],
            hyperviscosity_syndrome: [
                "出血傾向（黏膜出血、視網膜出血）",
                "神經症狀（嗜睡、共濟失調、癲癇）",
                "心衰竭徵象"
            ],
            renal_disease: [
                "蛋白尿",
                "腎衰竭（輕鏈沉積）",
                "多飲多尿"
            ],
            other_signs: [
                "貧血（黏膜蒼白）",
                "反覆感染（免疫抑制）",
                "高鈣血症（嗜睡、厭食、多尿）"
            ]
        },
        pathophysiology: {
            m_protein: {
                description: "單株免疫球蛋白過量產生",
                types: "IgG最常見，其次為IgA",
                effects: "高黏稠度、腎臟損傷"
            },
            bone_destruction: "骨髓瘤細胞分泌破骨細胞活化因子",
            immunosuppression: "正常免疫球蛋白產生減少",
            bence_jones_protein: "游離輕鏈從尿液排出"
        },
        diagnosis: {
            diagnostic_criteria: "至少滿足以下2項：",
            criteria_list: [
                "骨髓中漿細胞>10%（或漿細胞瘤活檢）",
                "溶骨性病變",
                "血清或尿液中單株免疫球蛋白（M蛋白）",
                "Bence Jones蛋白尿"
            ],
            laboratory_findings: [
                "高球蛋白血症",
                "血清蛋白電泳顯示單株峰",
                "貧血（正色素正球性）",
                "血小板減少（部分病例）",
                "高鈣血症（約15-20%）",
                "氮血症"
            ],
            imaging: [
                "X光：溶骨性病變（穿孔狀或溶解性）",
                "常見部位：脊椎、骨盆、肋骨、長骨"
            ],
            bone_marrow: "漿細胞浸潤（>10%，通常>30%）",
            urine: "Bence Jones蛋白電泳"
        },
        treatment: {
            chemotherapy: {
                standard_protocol: [
                    "Melphalan: 0.1 mg/kg PO q24h × 10天，每3週重複",
                    "Prednisone: 0.5-1 mg/kg PO q24h",
                    "持續治療直到緩解"
                ],
                alternatives: [
                    "Cyclophosphamide（替代Melphalan）",
                    "Chlorambucil",
                    "CHOP-based protocol（難治病例）"
                ]
            },
            supportive_care: [
                "補液治療（腎臟保護）",
                "雙磷酸鹽（Pamidronate）治療高鈣血症和骨病變",
                "止痛藥",
                "輸血（貧血）"
            ],
            hyperviscosity: "血漿置換術（緊急降低黏稠度）",
            localized_plasmacytoma: "手術切除 ± 放射治療"
        },
        prognosis: {
            with_treatment: "中位存活時間約18-24個月",
            favorable_factors: [
                "M蛋白為IgA（較IgG好）",
                "無高鈣血症",
                "無腎衰竭",
                "化療反應良好"
            ],
            unfavorable_factors: [
                "高鈣血症",
                "廣泛溶骨性病變",
                "腎衰竭",
                "嚴重貧血"
            ]
        },
        monitoring: {
            response: "血清蛋白電泳監測M蛋白下降",
            regular: "每4-6週CBC、生化、尿液分析",
            imaging: "定期X光評估骨病變",
            complete_remission: "M蛋白消失，骨髓正常"
        },
        pearls: [
            "經典四聯徵：骨病變、M蛋白、骨髓漿細胞增生、Bence Jones蛋白尿",
            "高黏稠度症候群可導致出血和神經症狀",
            "高鈣血症需要緊急處理（補液、利尿劑、雙磷酸鹽）",
            "Melphalan + Prednisone是標準一線治療",
            "孤立性漿細胞瘤預後較全身性骨髓瘤好",
            "需要長期監測M蛋白水平評估治療反應"
        ],
        references: [
            "Withrow and MacEwen's Small Animal Clinical Oncology",
            "Schalm's Veterinary Hematology",
            "Journal of Veterinary Internal Medicine - Multiple Myeloma"
        ]
    },

    // ==================== 10. 瀰漫性血管內凝血 ====================
    "disseminated_intravascular_coagulation": {
        zh: "瀰漫性血管內凝血",
        en: "Disseminated Intravascular Coagulation (DIC)",
        definition: "一種危及生命的凝血系統異常，特徵為全身性凝血活化導致微血管血栓形成，同時消耗凝血因子和血小板，最終導致出血和多器官衰竭。DIC永遠是繼發於其他嚴重疾病。",
        synonyms: [
            "DIC",
            "Consumptive Coagulopathy",
            "消耗性凝血病",
            "播散性血管內凝血",
            "Defibrination Syndrome"
        ],
        epidemiology: {
            species: "犬和貓都可發生",
            predisposing_conditions: [
                "敗血症/嚴重感染",
                "腫瘤（血管肉瘤最常見）",
                "免疫介導性溶血性貧血 (IMHA)",
                "嚴重創傷",
                "胰臟炎",
                "熱衰竭/中暑",
                "毒蛇咬傷",
                "胃扭轉/腸梗塞"
            ],
            mortality: "高死亡率（50-80%）"
        },
        clinicalPresentation: {
            bleeding_manifestations: [
                "多處出血（傷口、靜脈穿刺處）",
                "點狀出血、瘀斑",
                "黏膜出血",
                "胃腸道出血（黑便、血便）",
                "血尿",
                "體腔積血"
            ],
            thrombotic_manifestations: [
                "微血管血栓導致器官功能障礙",
                "急性腎損傷",
                "呼吸窘迫（肺微血栓）",
                "神經症狀",
                "皮膚壞死"
            ],
            underlying_disease_signs: "原發疾病的症狀"
        },
        pathophysiology: {
            trigger: "組織因子釋放或內皮損傷啟動凝血級聯",
            coagulation_activation: "全身性凝血活化，微血管內纖維蛋白沉積",
            consumption: "凝血因子和血小板消耗殆盡",
            fibrinolysis: "繼發性纖維蛋白溶解產生FDPs/D-dimer",
            result: "矛盾的同時發生血栓和出血",
            stages: {
                early: "高凝狀態（血栓風險）",
                late: "低凝狀態（出血風險）"
            }
        },
        diagnosis: {
            clinical_suspicion: "適當臨床情境下的出血+血栓徵象",
            coagulation_tests: {
                pt_ptt: "PT和PTT延長",
                platelet: "血小板減少",
                fibrinogen: "纖維蛋白原降低（消耗）或正常/升高（急性期反應）",
                fdp_ddimer: "FDPs和D-dimer顯著升高",
                antithrombin: "Antithrombin III降低"
            },
            blood_smear: "紅血球碎片（裂殖紅血球/Schistocytes）",
            isth_criteria: "綜合評分系統（人醫DIC評分可參考）",
            serial_testing: "連續監測比單次檢測更有價值"
        },
        treatment: {
            treat_underlying_cause: "最關鍵 - 去除觸發因素",
            supportive_care: {
                fluid_therapy: "積極補液維持灌流",
                blood_products: [
                    "新鮮冷凍血漿 (FFP)：補充凝血因子",
                    "濃縮紅血球：糾正貧血",
                    "血小板：嚴重血小板減少出血時"
                ],
                oxygen: "氧氣支持"
            },
            anticoagulation: {
                indication: "爭議性，主要用於血栓為主的早期DIC",
                options: [
                    "低分子量肝素 (LMWH)",
                    "普通肝素（小心使用）"
                ],
                caution: "出血期避免使用"
            },
            experimental: "重組Antithrombin III、蛋白C"
        },
        prognosis: {
            overall: "預後不良至極差",
            mortality: "死亡率50-80%",
            favorable: "早期診斷、可逆轉的原發疾病",
            unfavorable: "嚴重敗血症、惡性腫瘤、多器官衰竭"
        },
        monitoring: {
            continuous: "持續監測生命徵象",
            coagulation: "每6-12小時凝血功能",
            organ_function: "腎功能、肝功能、呼吸狀態",
            response: "監測治療反應和原發疾病控制"
        },
        pearls: [
            "DIC永遠是繼發性的 - 必須找出並治療原發疾病",
            "治療原發疾病比直接治療DIC更重要",
            "D-dimer和FDPs升高是特徵性發現",
            "連續監測凝血功能比單次檢測更有診斷價值",
            "輸血製品是支持性治療的關鍵",
            "抗凝治療時機和適應症仍有爭議",
            "高死亡率，需要積極的重症監護"
        ],
        references: [
            "Textbook of Veterinary Internal Medicine",
            "Schalm's Veterinary Hematology",
            "Journal of Veterinary Emergency and Critical Care - DIC guidelines",
            "ACVIM Consensus Statement"
        ]
    }

};

// 導出為可直接使用的格式
if (typeof module !== 'undefined' && module.exports) {
    module.exports = IMMUNOLOGICAL_HEMATOLOGICAL_DISEASES;
}

// 如果在瀏覽器環境中，將其附加到 window 對象
if (typeof window !== 'undefined') {
    window.IMMUNOLOGICAL_HEMATOLOGICAL_DISEASES = IMMUNOLOGICAL_HEMATOLOGICAL_DISEASES;
}

console.log("免疫系統和血液系統疾病資料已載入，共 " + Object.keys(IMMUNOLOGICAL_HEMATOLOGICAL_DISEASES).length + " 個疾病");

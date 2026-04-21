const systemsOrder = [
  "Cardiovascular",
  "Respiratory",
  "Abdominal",
  "Cranial nerves",
  "Peripheral neurological - upper limb",
  "Peripheral neurological - lower limb",
  "Hip",
  "Shoulder",
  "Knee",
  "Elbow",
  "Hand",
  "Foot",
  "Spine",
  "GALS",
  "Peripheral arterial",
  "Peripheral venous",
  "Thyroid",
  "Pituitary / endocrine appearance",
  "Cross-cutting viva",
];

const tabs = [
  { id: "signs", label: "Signs" },
  { id: "differentials", label: "Differentials" },
  { id: "investigations", label: "Investigations" },
  { id: "management", label: "Management" },
  { id: "prognosis", label: "Prognosis" },
  { id: "pathophysiology", label: "Pathophysiology" },
  { id: "viva", label: "Viva Questions" },
  { id: "pitfalls", label: "Pitfalls" },
];

const rawConditions = [
  {
    id: "aortic-stenosis",
    name: "Aortic stenosis",
    systems: ["Cardiovascular"],
    frequency: ["common", "classic"],
    clueTypes: [],
    labels: ["Very common", "Classic examiner favourite", "Must know"],
    summary: "Slow-rising pulse, harsh ejection systolic murmur to the carotids, elderly calcific valve or bicuspid valve history.",
    signs: [
      "Narrow pulse pressure and slow-rising low-volume pulse.",
      "Heaving apex if there is pressure-loaded LV hypertrophy.",
      "Harsh ejection systolic murmur loudest at the right upper sternal edge, radiating to carotids.",
      "Soft or absent second heart sound in severe disease.",
      "Look for sternotomy scar, valve replacement click, or signs of heart failure.",
    ],
    differentials: [
      "Sclerosis without significant stenosis in an older patient.",
      "Hypertrophic obstructive cardiomyopathy if murmur varies with manoeuvres.",
      "Pulmonary stenosis if radiation is to the left shoulder rather than neck.",
      "Flow murmur in anaemia or high-output states.",
    ],
    investigations: [
      "Echocardiography is the key test: valve area, gradient, LV function.",
      "ECG for LVH, AF, or conduction disease.",
      "CXR for cardiomegaly or post-surgical clues.",
      "Bloods: FBC, U&E, BNP if heart failure suspected.",
      "Coronary imaging before valve intervention in appropriate patients.",
    ],
    management: {
      initial: [
        "Assess for red-flag symptoms: exertional chest pain, syncope, breathlessness.",
        "Treat decompensated heart failure carefully; avoid sudden preload reduction.",
      ],
      definitive: [
        "Aortic valve replacement if severe symptomatic disease.",
        "TAVI is common in older or higher-risk patients.",
      ],
      longTerm: [
        "Serial echo in asymptomatic disease.",
        "Risk-factor optimisation and follow-up for symptoms progression.",
      ],
      mdt: [
        "Cardiology and valve MDT.",
        "Cardiothoracic surgery or structural heart team.",
      ],
    },
    prognosis: [
      "Prognosis is good before symptoms, but worsens sharply once angina, syncope, or heart failure develop.",
      "Valve replacement markedly improves symptoms and survival in severe symptomatic disease.",
    ],
    pathophysiology: [
      "Fixed outflow obstruction causes pressure overload and concentric LV hypertrophy.",
      "Reduced cardiac output on exertion explains syncope and exertional breathlessness.",
    ],
    vivaQuestions: [
      "Which examination features would make you think the stenosis is severe?",
      "What are the classic symptoms and why are they important prognostically?",
      "How would you distinguish aortic stenosis from HOCM at the bedside?",
      "What are the treatment options for severe aortic stenosis?",
    ],
    pitfalls: [
      "Do not call every ejection systolic murmur aortic stenosis; check radiation and pulse character.",
      "A normal apex beat does not exclude severe disease.",
      "Remember bicuspid valve disease in younger adults.",
    ],
  },
  {
    id: "aortic-regurgitation",
    name: "Aortic regurgitation",
    systems: ["Cardiovascular"],
    frequency: ["common", "classic"],
    clueTypes: [],
    labels: ["Must know", "Classic examiner favourite"],
    summary: "Collapsing pulse, wide pulse pressure, early diastolic murmur along the left sternal edge, sometimes with root disease clues.",
    signs: [
      "Collapsing pulse and wide pulse pressure.",
      "Displaced thrusting apex from volume-loaded LV.",
      "High-pitched early diastolic murmur at the left sternal edge, best heard sitting forward in expiration.",
      "May hear an ejection systolic flow murmur or Austin Flint murmur.",
      "Look for root disease clues: Marfanoid habitus, sternotomy scar, endocarditis stigmata.",
    ],
    differentials: [
      "Pulmonary regurgitation if there is pulmonary hypertension or left upper sternal edge emphasis.",
      "Flow murmur plus wide pulse pressure in anaemia or thyrotoxicosis.",
      "Mixed aortic valve disease.",
    ],
    investigations: [
      "Echo for regurgitant severity, LV size, and aortic root assessment.",
      "ECG for LVH.",
      "CXR for cardiomegaly or aortic root enlargement.",
      "CT or MRI aorta if root pathology suspected.",
      "Blood cultures if infective endocarditis is a possibility.",
    ],
    management: {
      initial: [
        "Assess for heart failure symptoms and any acute severe regurgitation features.",
        "Control blood pressure if hypertensive.",
      ],
      definitive: [
        "Valve surgery for symptomatic severe AR or LV dysfunction/dilatation.",
        "Address aortic root pathology when present.",
      ],
      longTerm: [
        "Serial echo surveillance in chronic disease.",
        "Exercise advice and follow-up based on severity and LV dimensions.",
      ],
      mdt: [
        "Cardiology.",
        "Cardiothoracic surgery if valve or root intervention is likely.",
      ],
    },
    prognosis: [
      "Chronic compensated disease can remain stable for years.",
      "Outcome worsens once LV dilatation or symptoms develop unless treated.",
    ],
    pathophysiology: [
      "Diastolic backflow into the LV causes volume overload and eccentric hypertrophy.",
      "Large stroke volume produces bounding peripheral signs and wide pulse pressure.",
    ],
    vivaQuestions: [
      "How would you elicit and describe a collapsing pulse properly?",
      "What causes chronic aortic regurgitation?",
      "When would this patient need surgery?",
      "How would acute severe AR differ clinically from chronic AR?",
    ],
    pitfalls: [
      "Do not forget aortic root disease as a cause.",
      "A soft murmur can still represent severe regurgitation.",
      "Acute AR may lack classic peripheral signs because the LV has not adapted.",
    ],
  },
  {
    id: "mitral-regurgitation",
    name: "Mitral regurgitation",
    systems: ["Cardiovascular"],
    frequency: ["common", "classic"],
    clueTypes: [],
    labels: ["Very common", "Must know"],
    summary: "Pansystolic murmur at the apex radiating to the axilla, often with displaced apex and AF or heart failure clues.",
    signs: [
      "Displaced hyperdynamic apex if chronic severe MR.",
      "Pansystolic murmur loudest at the apex, often radiating to the axilla.",
      "May have soft S1 and third heart sound.",
      "Irregular pulse if AF is present.",
      "Look for causes: post-MI, prolapse habitus, sternotomy scar, heart failure signs.",
    ],
    differentials: [
      "Tricuspid regurgitation if murmur is left lower sternal and louder with inspiration.",
      "VSD if harsh pansystolic murmur with thrill and different site.",
      "Functional MR in dilated cardiomyopathy.",
    ],
    investigations: [
      "Echo for severity, mechanism, LA size, LV function, and pulmonary pressures.",
      "ECG for AF or LVH.",
      "CXR for cardiomegaly or pulmonary oedema.",
      "Bloods including BNP if heart failure suspected.",
      "Coronary assessment if surgery is planned or ischaemic cause suspected.",
    ],
    management: {
      initial: [
        "Treat heart failure symptoms and optimise blood pressure if relevant.",
        "Rate/rhythm control and anticoagulation decisions if AF is present.",
      ],
      definitive: [
        "Mitral repair preferred when feasible.",
        "Replacement if repair not possible or mechanism unsuitable.",
      ],
      longTerm: [
        "Serial echo and symptom review.",
        "Monitor LV function before irreversible deterioration.",
      ],
      mdt: [
        "Cardiology.",
        "Valve MDT and cardiac surgery.",
      ],
    },
    prognosis: [
      "Can remain compensated for a long time.",
      "Untreated severe MR risks AF, pulmonary hypertension, and LV dysfunction.",
    ],
    pathophysiology: [
      "Systolic backflow into the left atrium causes volume overload of LA and LV.",
      "Progressive LA enlargement predisposes to AF and pulmonary venous hypertension.",
    ],
    vivaQuestions: [
      "What bedside clues suggest chronic severe MR?",
      "What are the main causes of MR?",
      "Why is repair often preferred to replacement?",
      "What complications do you need to mention in finals?",
    ],
    pitfalls: [
      "Radiation to the axilla helps, but not every apical pansystolic murmur radiates classically.",
      "Do not miss functional MR in dilated cardiomyopathy.",
      "AF may be the clue that disease has been present for years.",
    ],
  },
  {
    id: "mitral-stenosis",
    name: "Mitral stenosis",
    systems: ["Cardiovascular"],
    frequency: ["classic"],
    clueTypes: [],
    labels: ["Classic examiner favourite", "Easy to miss"],
    summary: "Malar flush, tapping apex, opening snap and mid-diastolic murmur; think rheumatic disease and atrial fibrillation.",
    signs: [
      "Malar flush and small-volume pulse may be seen.",
      "Tapping, non-displaced apex beat.",
      "Loud S1 with opening snap followed by mid-diastolic rumble at the apex.",
      "May have AF and signs of pulmonary hypertension/right heart strain.",
      "Look for previous commissurotomy or sternotomy scar.",
    ],
    differentials: [
      "Tricuspid stenosis if murmur is more left parasternal and varies with inspiration.",
      "Left atrial myxoma causing position-dependent obstruction.",
      "Severe MR with flow rumble.",
    ],
    investigations: [
      "Echo is definitive: valve area, gradient, LA size, pulmonary pressures.",
      "ECG for AF and P mitrale if sinus rhythm.",
      "CXR for LA enlargement and pulmonary vascular changes.",
      "TOE if cardioversion or intervention is being considered.",
    ],
    management: {
      initial: [
        "Control heart rate if AF present and manage pulmonary congestion.",
        "Anticoagulate where indicated, especially AF or embolic risk.",
      ],
      definitive: [
        "Percutaneous mitral balloon valvotomy in suitable rheumatic anatomy.",
        "Surgery if anatomy unsuitable or valve heavily calcified.",
      ],
      longTerm: [
        "Echo surveillance and AF management.",
        "Pregnancy counselling if relevant because symptoms can worsen.",
      ],
      mdt: [
        "Cardiology and valve team.",
        "Cardiac surgery when intervention is needed.",
      ],
    },
    prognosis: [
      "Often slowly progressive, but AF and pulmonary hypertension worsen outlook.",
      "Intervention can improve symptoms significantly when timed appropriately.",
    ],
    pathophysiology: [
      "Obstructed flow across the mitral valve raises LA pressure and causes pulmonary venous hypertension.",
      "Chronic LA dilation leads to AF and embolic risk.",
    ],
    vivaQuestions: [
      "What are the common causes of mitral stenosis?",
      "Why does AF matter so much in mitral stenosis?",
      "How would you distinguish mitral stenosis from tricuspid stenosis?",
      "What intervention options are available?",
    ],
    pitfalls: [
      "In modern UK practice this is less common, so examiners like it because candidates miss it.",
      "AF may make the diastolic murmur harder to hear.",
      "Remember the embolic and pulmonary hypertension complications.",
    ],
  },
  {
    id: "heart-failure",
    name: "Chronic heart failure",
    systems: ["Cardiovascular"],
    frequency: ["common"],
    clueTypes: ["device"],
    labels: ["Very common", "Must know", "Device"],
    summary: "Breathless patient with elevated JVP, bibasal crackles, oedema, displacement of apex, sometimes CRT/ICD or sternotomy clues.",
    signs: [
      "Raised JVP, peripheral oedema, basal crackles, sacral oedema if severe.",
      "Displaced apex and possible gallop rhythm.",
      "Cachexia or muscle wasting in advanced disease.",
      "Look for CRT, ICD, pacemaker, sternotomy scar, CABG harvest scars.",
      "Consider underlying valve lesion or cardiomyopathy clues.",
    ],
    differentials: [
      "COPD with cor pulmonale.",
      "Nephrotic syndrome or renal failure causing oedema.",
      "Chronic liver disease with ascites and oedema.",
    ],
    investigations: [
      "BNP or NT-proBNP as screening support.",
      "Echo to define systolic function, valves, and structural cause.",
      "ECG for AF, previous MI, bundle branch block.",
      "CXR for pulmonary oedema, cardiomegaly, pleural effusions.",
      "Bloods: FBC, U&E, LFT, TFT, HbA1c.",
    ],
    management: {
      initial: [
        "Assess congestion and perfusion; treat acute decompensation if present.",
        "Loop diuretic for fluid overload.",
      ],
      definitive: [
        "Cause-directed treatment: revascularisation, valve intervention, rhythm management, device therapy when indicated.",
        "Optimise guideline-directed medical therapy for HFrEF.",
      ],
      longTerm: [
        "ACEi/ARB/ARNI, beta-blocker, MRA, SGLT2 inhibitor as appropriate.",
        "Fluid balance education, weight monitoring, vaccination, rehabilitation.",
      ],
      mdt: [
        "Heart failure nurses and cardiology.",
        "Device clinic, cardiac rehab, palliative care in advanced disease.",
      ],
    },
    prognosis: [
      "Chronic heart failure has significant morbidity and mortality, especially with recurrent admissions.",
      "Outlook depends on cause, EF, symptoms, renal function, and response to therapy.",
    ],
    pathophysiology: [
      "Reduced cardiac output and neurohormonal activation drive sodium and water retention.",
      "Elevated filling pressures cause pulmonary and systemic congestion.",
    ],
    vivaQuestions: [
      "What signs tell you this patient is fluid overloaded?",
      "What are the four major long-term drug classes in HFrEF?",
      "When would you think about CRT or ICD?",
      "What are the common causes of chronic heart failure in finals?",
    ],
    pitfalls: [
      "Do not assume all oedema is cardiac.",
      "Check whether a device is a pacemaker, ICD, or CRT system before you speak.",
      "Differentiate HFrEF from HFpEF conceptually even if bedside signs overlap.",
    ],
  },
  {
    id: "cardiac-device-sternotomy",
    name: "Cardiac device / post-sternotomy patient",
    systems: ["Cardiovascular"],
    frequency: ["common", "classic"],
    clueTypes: ["scar", "device"],
    labels: ["Scar / device", "Must know", "Classic examiner favourite"],
    summary: "Recognise sternotomy, vein-harvest scars, pacemaker/ICD/CRT boxes, valve clicks, and ask what underlying disease led to them.",
    signs: [
      "Midline sternotomy scar suggests CABG, valve surgery, or congenital repair.",
      "Left infraclavicular box may be pacemaker, ICD, or CRT device.",
      "Saphenous vein or radial artery harvest scars support CABG history.",
      "Mechanical valve clicks or prosthetic valve murmurs may be audible.",
      "Look for anticoagulation clues, heart failure signs, or device infection concerns.",
    ],
    differentials: [
      "CABG patient.",
      "Valve replacement or repair patient.",
      "Permanent pacemaker, ICD, or CRT recipient.",
      "Post congenital surgery patient.",
    ],
    investigations: [
      "ECG to look for pacing spikes, bundle branch block, or AF.",
      "CXR can confirm lead position and prior surgery markers.",
      "Echo to assess underlying function and prosthetic valves.",
      "Device interrogation when device issues are suspected.",
      "Blood cultures if infective endocarditis or device infection is a concern.",
    ],
    management: {
      initial: [
        "Identify what the scar or device probably represents and whether there are current complications.",
        "Assess symptoms: syncope, palpitations, heart failure, angina, fever.",
      ],
      definitive: [
        "Management depends on underlying disease: revascularisation follow-up, valve care, or device revision.",
        "Urgent cardiology input if suspected device malfunction or infective endocarditis.",
      ],
      longTerm: [
        "Device clinic follow-up and battery surveillance.",
        "Secondary prevention after CABG and anticoagulation where indicated.",
      ],
      mdt: [
        "Cardiology, electrophysiology, cardiac surgery.",
        "Heart failure team and anticoagulation services when relevant.",
      ],
    },
    prognosis: [
      "Often reflects treated chronic cardiac disease rather than active instability.",
      "Complications depend on underlying pathology, device function, and comorbidity burden.",
    ],
    pathophysiology: [
      "The scar or device is a clue to previous severe structural or rhythm disease.",
      "Examiners often want you to work backwards from the clue to the original diagnosis.",
    ],
    vivaQuestions: [
      "How would you distinguish a pacemaker from an ICD or CRT device clinically?",
      "What common operations leave a median sternotomy scar?",
      "What complications of prosthetic valves should you mention?",
      "What long-term secondary prevention follows CABG?",
    ],
    pitfalls: [
      "Do not guess the exact operation if the scar alone does not prove it.",
      "A left infraclavicular device is not always a simple pacemaker.",
      "Always tie the scar back to underlying pathology and current function.",
    ],
  },
  {
    id: "copd",
    name: "COPD",
    systems: ["Respiratory"],
    frequency: ["common"],
    clueTypes: ["device"],
    labels: ["Very common", "Must know", "Device"],
    summary: "Hyperinflation, pursed-lip breathing, reduced breath sounds, inhalers or home oxygen, smoker with chronic respiratory disease.",
    signs: [
      "Barrel chest, use of accessory muscles, pursed-lip breathing.",
      "Reduced chest expansion and globally reduced breath sounds.",
      "Wheeze may be present but is not universal.",
      "Cyanosis, cachexia, or ankle oedema if advanced or cor pulmonale.",
      "Look for inhalers, spacer, nebuliser, home oxygen, smoking clues.",
    ],
    differentials: [
      "Asthma with fixed obstruction.",
      "Bronchiectasis if marked sputum and crackles.",
      "Pulmonary fibrosis if crackles and clubbing dominate.",
    ],
    investigations: [
      "Spirometry: obstructive pattern with reduced FEV1/FVC.",
      "Pulse oximetry and ABG in severe disease.",
      "CXR to exclude alternate pathology and look for hyperinflation.",
      "ECG/echo if cor pulmonale suspected.",
      "Alpha-1 antitrypsin testing in younger or atypical patients.",
    ],
    management: {
      initial: [
        "Assess exacerbation versus stable disease and oxygen requirement.",
        "Smoking cessation is the most important disease-modifying step.",
      ],
      definitive: [
        "Inhaled bronchodilator therapy stepped to symptom burden and exacerbation history.",
        "Pulmonary rehab and vaccinations.",
      ],
      longTerm: [
        "Home oxygen in selected chronically hypoxic patients.",
        "Self-management plans, inhaler technique review, nutrition and exercise support.",
      ],
      mdt: [
        "Respiratory team, COPD nurses, pulmonary rehab, smoking cessation services.",
        "Physio and palliative care in advanced disease.",
      ],
    },
    prognosis: [
      "Progressive chronic disease with exacerbations driving decline.",
      "Smoking cessation and rehab improve trajectory and symptoms.",
    ],
    pathophysiology: [
      "Small airways disease and emphysematous destruction cause expiratory airflow limitation.",
      "Air trapping and hyperinflation increase work of breathing.",
    ],
    vivaQuestions: [
      "What bedside clues help you separate COPD from asthma?",
      "What investigations confirm COPD and assess severity?",
      "Who qualifies for long-term oxygen therapy?",
      "What complications of COPD should you mention?",
    ],
    pitfalls: [
      "Do not assume every wheezy patient has asthma.",
      "Home oxygen is not automatically indicated in all breathless patients.",
      "Look for coexistence of heart failure or lung cancer in smokers.",
    ],
  },
  {
    id: "bronchiectasis",
    name: "Bronchiectasis",
    systems: ["Respiratory"],
    frequency: ["common", "classic"],
    clueTypes: [],
    labels: ["Must know", "Classic examiner favourite"],
    summary: "Productive cough, coarse crackles, clubbing, recurrent infection history, sometimes sputum pot or chest physiotherapy clues.",
    signs: [
      "Coarse inspiratory crackles, often bibasal.",
      "Clubbing may be present.",
      "Wheeze can coexist because airways are damaged.",
      "Signs of chronic suppurative lung disease or weight loss in severe cases.",
      "Look for sputum volume, physiotherapy devices, or previous thoracic surgery.",
    ],
    differentials: [
      "COPD with chronic sputum.",
      "Pulmonary fibrosis with fine crackles rather than coarse wet crackles.",
      "Cystic fibrosis in younger patients.",
      "Lung cancer if focal changes or haemoptysis dominate.",
    ],
    investigations: [
      "High-resolution CT is the diagnostic test.",
      "Sputum culture including pseudomonas assessment.",
      "Spirometry for obstructive or mixed pattern.",
      "Screen for cause: immunoglobulins, ABPA, prior severe infection, CF testing if indicated.",
      "CXR is supportive but less sensitive.",
    ],
    management: {
      initial: [
        "Treat exacerbations promptly and obtain sputum if possible.",
        "Teach or reinforce airway clearance techniques.",
      ],
      definitive: [
        "Cause-specific treatment when found.",
        "Long-term airway clearance and targeted antibiotic strategies in recurrent infective disease.",
      ],
      longTerm: [
        "Vaccination, exercise, pulmonary rehab where appropriate.",
        "Monitor for recurrent infections, haemoptysis, and pseudomonas colonisation.",
      ],
      mdt: [
        "Respiratory team, physio, microbiology.",
        "Bronchiectasis specialist clinic if recurrent admissions or resistant organisms.",
      ],
    },
    prognosis: [
      "Variable: mild disease may remain stable, severe disease can be highly morbid.",
      "Repeated infection and colonisation worsen lung decline.",
    ],
    pathophysiology: [
      "Chronic infection and inflammation permanently dilate bronchi.",
      "Poor mucus clearance creates a cycle of infection, inflammation, and further damage.",
    ],
    vivaQuestions: [
      "What causes bronchiectasis?",
      "What investigations look for an underlying cause?",
      "How is bronchiectasis different from COPD clinically?",
      "What complications do you need to remember?",
    ],
    pitfalls: [
      "Do not forget to look for an underlying cause if the history is atypical.",
      "Clubbing pushes you toward bronchiectasis, fibrosis, or cancer more than uncomplicated COPD.",
      "Focal bronchiectasis may suggest an obstructing lesion.",
    ],
  },
  {
    id: "pulmonary-fibrosis",
    name: "Pulmonary fibrosis / fibrotic ILD",
    systems: ["Respiratory"],
    frequency: ["classic"],
    clueTypes: [],
    labels: ["Classic examiner favourite", "Must know"],
    summary: "Breathless patient with fine bibasal end-inspiratory crackles, clubbing, and reduced chest expansion; think fibrotic ILD.",
    signs: [
      "Fine bibasal end-inspiratory crackles, often described as Velcro-like.",
      "Clubbing may be present.",
      "Tachypnoea and reduced chest expansion.",
      "Cyanosis or pulmonary hypertension signs in advanced disease.",
      "Look for connective tissue disease clues or oxygen therapy.",
    ],
    differentials: [
      "Heart failure causing basal crackles.",
      "Bronchiectasis if crackles are coarse and sputum prominent.",
      "Asbestosis or other occupational lung disease.",
    ],
    investigations: [
      "High-resolution CT chest is central.",
      "Pulmonary function tests show restrictive defect with reduced DLCO.",
      "Autoimmune screen if connective tissue disease suspected.",
      "Echo if pulmonary hypertension suspected.",
      "Six-minute walk and oxygen assessment for severity.",
    ],
    management: {
      initial: [
        "Assess oxygen need and exclude infection or heart failure.",
        "Screen for occupational and autoimmune causes.",
      ],
      definitive: [
        "Antifibrotic therapy in suitable idiopathic pulmonary fibrosis.",
        "Cause-specific management for CTD-associated or exposure-related disease.",
      ],
      longTerm: [
        "Pulmonary rehab, vaccination, oxygen when required.",
        "Advance care planning in progressive disease.",
      ],
      mdt: [
        "ILD MDT, respiratory team, rheumatology if autoimmune cause.",
        "Transplant discussion in selected fit younger patients.",
      ],
    },
    prognosis: [
      "Often progressive, especially idiopathic pulmonary fibrosis.",
      "Pulmonary hypertension and oxygen dependency suggest worse outlook.",
    ],
    pathophysiology: [
      "Interstitial scarring reduces lung compliance and gas transfer.",
      "Exertional breathlessness reflects diffusion impairment and stiff lungs.",
    ],
    vivaQuestions: [
      "What bedside signs make you think fibrosis rather than COPD?",
      "What are important causes of fibrotic lung disease?",
      "What investigations would you request next?",
      "Who might be suitable for transplant referral?",
    ],
    pitfalls: [
      "Not all fibrotic ILD is idiopathic pulmonary fibrosis.",
      "Fine crackles can be subtle; listen carefully at the bases.",
      "Always ask yourself whether connective tissue disease could explain the picture.",
    ],
  },
  {
    id: "lung-cancer-lobectomy",
    name: "Lung cancer / post-lobectomy clues",
    systems: ["Respiratory"],
    frequency: ["common", "classic"],
    clueTypes: ["scar"],
    labels: ["Very common", "Classic examiner favourite", "Scar"],
    summary: "Thoracotomy scar, cachexia, clubbing, lymphadenopathy, hoarse voice or Horner clues can point to treated or active thoracic malignancy.",
    signs: [
      "Thoracotomy or VATS scars suggest prior lung resection.",
      "Clubbing, cachexia, nicotine staining, lymphadenopathy.",
      "Reduced expansion or breath sounds on one side after surgery.",
      "Horner syndrome or arm pain may suggest apical disease.",
      "Look for oxygen, pleural drain history, or palliative clues.",
    ],
    differentials: [
      "Previous lobectomy for bronchiectasis or other benign disease.",
      "Mesothelioma or pleural disease if scars and exposure history fit.",
      "Metastatic disease or recurrence in a known cancer patient.",
    ],
    investigations: [
      "CXR and CT chest.",
      "PET-CT and bronchoscopy/biopsy as indicated.",
      "Spirometry and cardiopulmonary assessment if surgery is considered.",
      "Staging imaging including brain imaging when appropriate.",
    ],
    management: {
      initial: [
        "Clarify whether the patient has active cancer, previous treatment, or recurrence concern.",
        "Assess symptoms such as haemoptysis, weight loss, pain, or breathlessness.",
      ],
      definitive: [
        "Treatment depends on type and stage: surgery, radiotherapy, systemic therapy, palliation.",
        "Manage malignant pleural effusions or airway obstruction if present.",
      ],
      longTerm: [
        "Oncology surveillance, smoking cessation, rehabilitation.",
        "Symptom control and palliative input when needed.",
      ],
      mdt: [
        "Lung cancer MDT, thoracic surgery, respiratory, oncology, palliative care.",
      ],
    },
    prognosis: [
      "Stage drives prognosis more than bedside signs alone.",
      "Curative resection offers best outcomes in early disease.",
    ],
    pathophysiology: [
      "Local invasion explains hoarseness, Horner syndrome, or recurrent collapse.",
      "Systemic effects drive weight loss and clubbing.",
    ],
    vivaQuestions: [
      "What features might suggest a Pancoast tumour?",
      "What investigations would stage suspected lung cancer?",
      "How would you tell if the thoracic scar is from lobectomy?",
      "What are the common complications of lung cancer?",
    ],
    pitfalls: [
      "A thoracotomy scar does not automatically mean cancer surgery.",
      "Clubbing after previous resection may persist.",
      "Remember mesothelioma and non-malignant thoracic surgery in the differential.",
    ],
  },
  {
    id: "chronic-liver-disease",
    name: "Chronic liver disease / cirrhosis",
    systems: ["Abdominal"],
    frequency: ["common", "classic"],
    clueTypes: [],
    labels: ["Very common", "Classic examiner favourite", "Must know"],
    summary: "Spider naevi, palmar erythema, gynaecomastia, ascites, caput medusae and splenomegaly; classic abdominal finals station.",
    signs: [
      "Spider naevi, palmar erythema, leukonychia, bruising.",
      "Gynaecomastia, testicular atrophy, muscle wasting.",
      "Ascites, hepatomegaly or shrunken liver, splenomegaly.",
      "Asterixis or confusion if encephalopathy.",
      "Look for paracentesis marks, transplant scar, alcohol clues, jaundice.",
    ],
    differentials: [
      "Right heart failure causing congestive hepatopathy and ascites.",
      "Malignancy with cachexia and ascites.",
      "Nephrotic syndrome if oedema and ascites without liver stigmata.",
    ],
    investigations: [
      "Bloods: LFT, INR, albumin, FBC, U&E.",
      "Liver aetiology screen: viral, autoimmune, iron studies, metabolic causes.",
      "Ultrasound abdomen with portal system and ascites assessment.",
      "Fibroscan or other fibrosis assessment when relevant.",
      "Endoscopy for varices in established portal hypertension.",
    ],
    management: {
      initial: [
        "Recognise decompensation: ascites, variceal bleed, encephalopathy, jaundice, sepsis.",
        "Manage alcohol withdrawal or infection risk if relevant.",
      ],
      definitive: [
        "Treat the cause: alcohol abstinence, antivirals, autoimmune treatment, metabolic management.",
        "Manage portal hypertension complications and consider transplant in advanced disease.",
      ],
      longTerm: [
        "HCC surveillance and variceal prophylaxis where indicated.",
        "Nutrition, vaccination, bone health, regular specialist review.",
      ],
      mdt: [
        "Hepatology, dietetics, alcohol services, transplant centre when appropriate.",
      ],
    },
    prognosis: [
      "Compensated cirrhosis can be stable; decompensation worsens survival significantly.",
      "Cause reversal can improve outlook if achieved early enough.",
    ],
    pathophysiology: [
      "Chronic injury causes fibrosis and nodular regeneration.",
      "Portal hypertension plus reduced synthetic function produce most classic signs and complications.",
    ],
    vivaQuestions: [
      "What causes chronic liver disease in the UK?",
      "Which signs suggest portal hypertension?",
      "What complications of cirrhosis must you mention?",
      "When should transplant be considered?",
    ],
    pitfalls: [
      "Do not forget non-alcohol causes.",
      "Ascites alone is not enough: support your diagnosis with other stigmata.",
      "A patient may have a transplant scar and still have chronic liver disease history to discuss.",
    ],
  },
  {
    id: "ibd-stoma",
    name: "Inflammatory bowel disease with stoma / abdominal surgery",
    systems: ["Abdominal"],
    frequency: ["common", "classic"],
    clueTypes: ["scar", "device"],
    labels: ["Very common", "Scar / device", "Must know"],
    summary: "Stoma, laparotomy scars, weight loss, clubbing and extra-intestinal features suggest IBD or previous colorectal surgery.",
    signs: [
      "Ileostomy or colostomy with surrounding skin assessment.",
      "Midline laparotomy, laparoscopic scars, fistula or drain scars.",
      "Clubbing, aphthous ulcers, erythema nodosum, pyoderma gangrenosum.",
      "Abdominal tenderness or mass if active disease or postoperative complication.",
      "Nutritional deficiency clues and steroid stigmata may coexist.",
    ],
    differentials: [
      "Colorectal cancer with stoma after resection.",
      "Familial polyposis or other colorectal surgery history.",
      "Diverticular disease with Hartmann's procedure.",
    ],
    investigations: [
      "Bloods: FBC, CRP, ESR, U&E, LFT, iron studies, B12, folate.",
      "Faecal calprotectin where relevant.",
      "Endoscopy with biopsies for diagnosis or reassessment.",
      "MRI small bowel or CT if Crohn's complications suspected.",
      "Stool cultures in flare to exclude infection.",
    ],
    management: {
      initial: [
        "Clarify whether this is quiescent treated disease or active flare.",
        "Assess hydration, stoma output, and nutritional status.",
      ],
      definitive: [
        "Medical therapy depending on disease pattern: steroids, aminosalicylates, immunomodulators, biologics.",
        "Surgery for refractory disease, strictures, fistulae, perforation, or dysplasia/cancer.",
      ],
      longTerm: [
        "Cancer surveillance, bone protection, vaccination, smoking advice in Crohn's disease.",
        "Stoma care and nutritional support.",
      ],
      mdt: [
        "Gastroenterology, colorectal surgery, IBD nurse, dietitian, stoma nurse.",
      ],
    },
    prognosis: [
      "Relapsing-remitting course is common.",
      "Prognosis depends on phenotype, complications, and response to biologic or surgical treatment.",
    ],
    pathophysiology: [
      "Immune-mediated intestinal inflammation causes mucosal or transmural disease depending on subtype.",
      "Extra-intestinal manifestations reflect systemic inflammatory activity.",
    ],
    vivaQuestions: [
      "What clues would make you think Crohn's rather than ulcerative colitis?",
      "What are the common indications for surgery in IBD?",
      "How would you assess a stoma on examination?",
      "What long-term complications should you mention?",
    ],
    pitfalls: [
      "A stoma is not synonymous with IBD; colorectal cancer surgery is common too.",
      "Remember extra-intestinal manifestations are high yield in finals.",
      "High-output ileostomy can be a key management issue.",
    ],
  },
  {
    id: "renal-transplant-dialysis",
    name: "Renal transplant / dialysis patient",
    systems: ["Abdominal"],
    frequency: ["common", "classic"],
    clueTypes: ["scar", "device", "transplant"],
    labels: ["Transplant", "Device", "Must know"],
    summary: "Iliac fossa transplant scar, AV fistula, dialysis lines, steroid stigmata and chronic kidney disease clues are very finals-friendly.",
    signs: [
      "Renal transplant scar in either iliac fossa.",
      "Functioning AV fistula with bruit and thrill in the forearm or arm.",
      "Tunnelled dialysis catheter scar or line history.",
      "Pallor, sallow skin, scratch marks, bruising, oedema, steroid features.",
      "Look for immunosuppression clues, skin cancer lesions, or failed graft clues.",
    ],
    differentials: [
      "Stable renal transplant recipient.",
      "CKD patient on haemodialysis or peritoneal dialysis.",
      "Failed transplant with return to dialysis.",
    ],
    investigations: [
      "U&E, creatinine, eGFR, bicarbonate, calcium, phosphate.",
      "Urinalysis and urine protein assessment.",
      "Drug levels for transplant immunosuppression where relevant.",
      "Ultrasound transplant kidney if obstruction or vascular issue suspected.",
      "FBC for anaemia and infection markers.",
    ],
    management: {
      initial: [
        "Check if the issue is routine follow-up, rejection concern, infection, or dialysis complication.",
        "Examine fistula patency and transplant site carefully.",
      ],
      definitive: [
        "Manage CKD complications or graft dysfunction with nephrology input.",
        "Treat rejection, obstruction, infection, or vascular access problems specifically.",
      ],
      longTerm: [
        "Immunosuppression monitoring, cardiovascular risk reduction, bone health, infection prevention.",
        "Anaemia and CKD-mineral bone disease management when relevant.",
      ],
      mdt: [
        "Nephrology, transplant team, dialysis nurses, vascular access team, dietitian.",
      ],
    },
    prognosis: [
      "A functioning transplant usually offers better quality of life and survival than long-term dialysis.",
      "CKD remains high-risk for cardiovascular disease and infection.",
    ],
    pathophysiology: [
      "Advanced CKD causes multisystem consequences through toxin retention, endocrine dysfunction, and fluid imbalance.",
      "Transplant findings reflect previous end-stage renal disease and chronic immunosuppression.",
    ],
    vivaQuestions: [
      "How do you examine and describe an AV fistula?",
      "What complications of renal transplant do you need to know?",
      "What long-term complications of immunosuppression are important?",
      "What are the common causes of end-stage renal disease?",
    ],
    pitfalls: [
      "Do not measure BP or take blood from a fistula arm if avoidable.",
      "A transplant scar does not mean the graft is still functioning well.",
      "Always mention infection risk in immunosuppressed patients.",
    ],
  },
  {
    id: "bells-palsy",
    name: "Bell's palsy",
    systems: ["Cranial nerves"],
    frequency: ["common"],
    clueTypes: [],
    labels: ["Very common", "Must know"],
    summary: "LMN facial weakness involving the forehead, inability to close eye fully, reduced blink and flattened nasolabial fold.",
    signs: [
      "LMN VII weakness affecting the whole ipsilateral face including forehead.",
      "Inability to fully close the eye, reduced blink, Bell's phenomenon may be seen.",
      "Flattened nasolabial fold and drooping mouth corner.",
      "May report altered taste or hyperacusis.",
      "No limb neurological deficit if isolated Bell's palsy.",
    ],
    differentials: [
      "Stroke causing UMN facial weakness with forehead sparing.",
      "Ramsay Hunt syndrome if vesicles or severe ear pain.",
      "Parotid tumour or other compressive VII lesion.",
      "Lyme disease in the right context.",
    ],
    investigations: [
      "Usually clinical if typical and isolated.",
      "Glucose or HbA1c if diabetes risk.",
      "Further imaging or ENT review if atypical, recurrent, gradual, or incomplete recovery.",
    ],
    management: {
      initial: [
        "Protect the cornea with lubricants and eye taping if closure is poor.",
        "Give steroids early in typical Bell's palsy.",
      ],
      definitive: [
        "Treat alternative cause if Ramsay Hunt, tumour, or stroke suspected.",
      ],
      longTerm: [
        "Most recover well; review if persistent weakness or synkinesis.",
        "Physiotherapy or specialist input for prolonged deficit.",
      ],
      mdt: [
        "GP or acute medicine initially; neurology/ENT/ophthalmology if atypical or severe eye involvement.",
      ],
    },
    prognosis: [
      "Most patients improve significantly over weeks to months.",
      "Incomplete recovery is more likely if paralysis is severe at onset.",
    ],
    pathophysiology: [
      "Believed to reflect inflammatory facial nerve swelling within the facial canal.",
      "Compression causes LMN dysfunction of the facial nerve.",
    ],
    vivaQuestions: [
      "How do you distinguish Bell's palsy from stroke clinically?",
      "Why is eye care so important?",
      "What red flags would make you doubt Bell's palsy?",
      "What are the possible causes of a facial nerve palsy?",
    ],
    pitfalls: [
      "Forehead sparing points away from Bell's palsy.",
      "Do not forget to mention corneal protection.",
      "Slowly progressive facial weakness needs a structural cause excluded.",
    ],
  },
  {
    id: "myasthenia-gravis",
    name: "Myasthenia gravis",
    systems: ["Cranial nerves"],
    frequency: ["classic"],
    clueTypes: [],
    labels: ["Classic examiner favourite", "Easy to miss"],
    summary: "Fatigable ptosis, diplopia, facial weakness, nasal speech or proximal weakness; symptoms worsen with use and later in the day.",
    signs: [
      "Ptosis that worsens with sustained upgaze.",
      "Variable ophthalmoplegia or diplopia.",
      "Fatigable facial weakness, nasal speech, poor palate elevation.",
      "Neck flexion or proximal limb weakness may coexist.",
      "Reflexes and sensation are usually normal.",
    ],
    differentials: [
      "Third nerve palsy or Horner syndrome for ptosis.",
      "Thyroid eye disease if ophthalmoplegia but no fatigability.",
      "Motor neurone disease or myopathy if bulbar weakness dominates.",
    ],
    investigations: [
      "ACh receptor and MuSK antibodies.",
      "Repetitive nerve stimulation or single-fibre EMG.",
      "CT or MRI mediastinum for thymoma.",
      "Respiratory function if crisis concern.",
    ],
    management: {
      initial: [
        "Assess for bulbar compromise or myasthenic crisis.",
        "Pyridostigmine for symptomatic control in many patients.",
      ],
      definitive: [
        "Immunosuppression depending on severity.",
        "Thymectomy in selected patients or thymoma.",
      ],
      longTerm: [
        "Avoid precipitating drugs and monitor respiratory/bulbar symptoms.",
        "Specialist follow-up for relapse and treatment adverse effects.",
      ],
      mdt: [
        "Neurology, thoracic surgery if thymectomy, respiratory support in crisis.",
      ],
    },
    prognosis: [
      "Often manageable but can relapse unpredictably.",
      "Outcome is good with modern treatment, though crisis remains serious.",
    ],
    pathophysiology: [
      "Autoantibodies impair neuromuscular transmission at the postsynaptic membrane.",
      "Repeated activation causes fatigue because transmission safety margin is reduced.",
    ],
    vivaQuestions: [
      "What bedside manoeuvre helps show fatigability?",
      "What investigations confirm myasthenia gravis?",
      "What is a myasthenic crisis?",
      "Why do we image the mediastinum?",
    ],
    pitfalls: [
      "Normal pupils help separate myasthenia from many cranial neuropathies.",
      "Symptoms may fluctuate and look deceptively mild in the morning.",
      "Always think about swallowing and breathing safety.",
    ],
  },
  {
    id: "horner-syndrome",
    name: "Horner syndrome",
    systems: ["Cranial nerves", "Respiratory"],
    frequency: ["classic"],
    clueTypes: [],
    labels: ["Classic examiner favourite", "Easy to miss"],
    summary: "Mild ptosis, miosis and anhidrosis; in finals think apical lung lesion, carotid pathology, or sympathetic chain disruption.",
    signs: [
      "Subtle ptosis with a smaller pupil on the affected side.",
      "Anhidrosis may be described, though often hard to appreciate.",
      "No ophthalmoplegia, helping distinguish it from third nerve palsy.",
      "Look for apical chest pathology, neck scar, or focal neurological deficit.",
    ],
    differentials: [
      "Third nerve palsy with ptosis but usually dilated pupil and eye movement abnormality.",
      "Myasthenia gravis causing ptosis without miosis.",
      "Physiological anisocoria.",
    ],
    investigations: [
      "Targeted imaging depends on suspected site: CXR/CT chest, CT or MR head/neck, vascular imaging.",
      "Neurological examination to localise associated deficits.",
    ],
    management: {
      initial: [
        "Treat as a localisation clue rather than a final diagnosis.",
        "Urgently assess for carotid dissection or stroke symptoms if acute.",
      ],
      definitive: [
        "Manage the underlying cause such as Pancoast tumour, carotid dissection, or brainstem lesion.",
      ],
      longTerm: [
        "Follow-up depends entirely on underlying pathology.",
      ],
      mdt: [
        "Neurology, respiratory, vascular, or oncology teams depending on cause.",
      ],
    },
    prognosis: [
      "Prognosis reflects the underlying disease rather than the sympathetic deficit itself.",
    ],
    pathophysiology: [
      "Interruption of the sympathetic pathway to the eye causes ptosis and miosis.",
      "The lesion can be central, preganglionic, or postganglionic.",
    ],
    vivaQuestions: [
      "What causes Horner syndrome?",
      "Why might Horner syndrome appear in a respiratory station?",
      "How do you distinguish Horner syndrome from a third nerve palsy?",
      "What urgent causes would you think about if the onset was acute?",
    ],
    pitfalls: [
      "This is a syndrome, not a final diagnosis.",
      "The ptosis is usually mild, so do not overcall it without checking the pupil.",
      "Remember the link with apical lung tumours.",
    ],
  },
  {
    id: "ulnar-neuropathy",
    name: "Ulnar neuropathy / cubital tunnel pattern",
    systems: ["Peripheral neurological - upper limb", "Elbow", "Hand"],
    frequency: ["common"],
    clueTypes: [],
    labels: ["Very common", "Must know"],
    summary: "Clawing of ring and little fingers, interossei wasting, weak finger abduction and sensory loss in the ulnar distribution.",
    signs: [
      "Wasting of interossei and hypothenar eminence.",
      "Clawing of the ring and little fingers if chronic.",
      "Weak finger abduction/adduction and positive Froment's sign.",
      "Sensory loss over little finger and ulnar border of hand.",
      "Look for elbow deformity, scar, or occupation-related compression clues.",
    ],
    differentials: [
      "C8/T1 radiculopathy.",
      "Lower brachial plexus lesion.",
      "Advanced motor neurone disease or peripheral neuropathy if multifocal.",
    ],
    investigations: [
      "Clinical localisation to elbow versus wrist.",
      "Nerve conduction studies and EMG.",
      "Imaging if structural compression, fracture, or elbow OA suspected.",
      "Glucose and other neuropathy screen if broader neuropathy possible.",
    ],
    management: {
      initial: [
        "Avoid pressure and repetitive elbow flexion.",
        "Splinting or ergonomic modification if mild compressive disease.",
      ],
      definitive: [
        "Surgical decompression if significant weakness, wasting, or persistent symptoms.",
      ],
      longTerm: [
        "Hand therapy and function support.",
        "Treat underlying cause such as rheumatoid elbow disease or trauma.",
      ],
      mdt: [
        "Hand surgery, orthopaedics, neurology, occupational therapy.",
      ],
    },
    prognosis: [
      "Good if compression is relieved early.",
      "Established wasting may not fully recover.",
    ],
    pathophysiology: [
      "Compression or injury of the ulnar nerve denervates intrinsic hand muscles.",
      "Loss of interossei function explains weak finger abduction and clawing pattern.",
    ],
    vivaQuestions: [
      "How would you test the ulnar nerve at the bedside?",
      "How do you distinguish ulnar neuropathy from median neuropathy?",
      "Where are the common sites of entrapment?",
      "When should decompression be considered?",
    ],
    pitfalls: [
      "Do not forget C8/T1 root lesions in the differential.",
      "Clawing suggests chronicity.",
      "The site of compression is often the elbow, not the wrist.",
    ],
  },
  {
    id: "median-nerve-carpal-tunnel",
    name: "Median nerve palsy / carpal tunnel syndrome",
    systems: ["Peripheral neurological - upper limb", "Hand"],
    frequency: ["common"],
    clueTypes: [],
    labels: ["Very common", "Must know"],
    summary: "Thenar wasting, weak thumb abduction or opposition, nocturnal paraesthesia in lateral three-and-a-half digits, positive Tinel/Phalen if mild.",
    signs: [
      "Thenar wasting if chronic.",
      "Weak thumb abduction or opposition.",
      "Sensory symptoms in thumb, index, middle, and radial half of ring finger.",
      "Tinel's and Phalen's may reproduce symptoms in carpal tunnel syndrome.",
      "Look for pregnancy, hypothyroidism, diabetes, RA, or repetitive use clues.",
    ],
    differentials: [
      "C6 or C7 radiculopathy.",
      "Pronator syndrome or more proximal median nerve lesion.",
      "Peripheral neuropathy if symptoms are symmetrical.",
    ],
    investigations: [
      "Usually clinical initially.",
      "Nerve conduction studies if diagnosis uncertain, severe, or before surgery.",
      "Screen for contributing conditions such as diabetes or hypothyroidism where relevant.",
    ],
    management: {
      initial: [
        "Neutral wrist splinting and activity modification.",
        "Consider steroid injection in suitable cases.",
      ],
      definitive: [
        "Carpal tunnel decompression if severe or persistent.",
      ],
      longTerm: [
        "Treat associated endocrine or inflammatory contributors.",
        "Hand therapy if weakness or postoperative recovery issues.",
      ],
      mdt: [
        "Hand surgery, rheumatology, endocrinology when underlying disease is relevant.",
      ],
    },
    prognosis: [
      "Most improve with splinting, injection, or decompression.",
      "Established thenar wasting may recover incompletely.",
    ],
    pathophysiology: [
      "Median nerve compression beneath the flexor retinaculum impairs sensory and motor function.",
      "Thenar muscle denervation explains loss of thumb abduction and opposition.",
    ],
    vivaQuestions: [
      "Which sensory territory is affected in median neuropathy?",
      "What causes carpal tunnel syndrome?",
      "When would you refer for surgery?",
      "How does carpal tunnel differ from an ulnar neuropathy clinically?",
    ],
    pitfalls: [
      "Thumb abduction is median; adduction is ulnar.",
      "Do not forget hypothyroidism and pregnancy as associations.",
      "Neck pathology can mimic hand neuropathy.",
    ],
  },
  {
    id: "diabetic-peripheral-neuropathy",
    name: "Diabetic peripheral neuropathy",
    systems: ["Peripheral neurological - lower limb", "Foot"],
    frequency: ["common"],
    clueTypes: [],
    labels: ["Very common", "Must know", "Easy to miss"],
    summary: "Stocking sensory loss, reduced ankle jerks, impaired vibration/proprioception, foot ulcer risk and diabetic complication clustering.",
    signs: [
      "Distal symmetrical sensory loss in a stocking pattern.",
      "Reduced vibration and proprioception at toes and ankles.",
      "Reduced ankle reflexes.",
      "Ulceration, callus, deformity, or previous amputation may coexist.",
      "Look for diabetic retinopathy, nephropathy clues, and footwear issues.",
    ],
    differentials: [
      "B12 deficiency neuropathy.",
      "Alcohol-related neuropathy.",
      "Spinal stenosis or root disease if more asymmetrical or posture-related.",
    ],
    investigations: [
      "HbA1c and diabetes review.",
      "Foot risk assessment including monofilament and pulses.",
      "B12, TFT, renal function, and broader neuropathy screen if picture is atypical.",
    ],
    management: {
      initial: [
        "Assess for active ulcer, infection, or Charcot change.",
        "Optimise glycaemic control and foot protection immediately.",
      ],
      definitive: [
        "Risk-factor control and pain management if neuropathic pain is present.",
        "Treat contributing deficiencies or alternative causes if found.",
      ],
      longTerm: [
        "Regular podiatry, footwear advice, ulcer prevention, smoking cessation.",
        "Microvascular risk reduction across diabetes care.",
      ],
      mdt: [
        "Diabetes team, podiatry, vascular surgery if ischaemia, orthopaedics if Charcot foot.",
      ],
    },
    prognosis: [
      "Often slowly progressive.",
      "Major impact is ulceration, infection, falls, and amputation risk rather than weakness alone.",
    ],
    pathophysiology: [
      "Chronic hyperglycaemia causes metabolic and microvascular nerve injury.",
      "Sensory loss removes protective warning and predisposes to trauma and ulceration.",
    ],
    vivaQuestions: [
      "How would you examine the feet of a patient with diabetes?",
      "What complications does peripheral neuropathy lead to?",
      "What other causes of peripheral neuropathy should you screen for?",
      "How does diabetic neuropathy fit with Charcot foot?",
    ],
    pitfalls: [
      "Always check pulses as well as sensation in diabetic feet.",
      "Painful neuropathy can exist even when objective signs are subtle.",
      "Atypical asymmetrical patterns need a broader differential.",
    ],
  },
  {
    id: "foot-drop-peroneal",
    name: "Foot drop / common peroneal palsy",
    systems: ["Peripheral neurological - lower limb"],
    frequency: ["classic"],
    clueTypes: [],
    labels: ["Classic examiner favourite", "Must know"],
    summary: "High-stepping gait, weakness of dorsiflexion and eversion, sensory loss over dorsum of foot; localise to peroneal nerve versus L5 root.",
    signs: [
      "High-stepping gait or inability to heel-walk.",
      "Weak ankle dorsiflexion and eversion.",
      "Sensory loss over dorsum of foot and lateral shin.",
      "Check inversion: preserved inversion favours common peroneal lesion over L5 radiculopathy.",
      "Look for fibular neck trauma, weight loss, plaster cast, or knee surgery history.",
    ],
    differentials: [
      "L5 radiculopathy.",
      "Motor neurone disease or broader neuropathy.",
      "Stroke if UMN pattern and other deficits are present.",
    ],
    investigations: [
      "Focused neuro exam to localise lesion.",
      "Nerve conduction studies and EMG.",
      "Lumbar spine imaging if root lesion suspected.",
      "Knee/fibular imaging if trauma or compression suspected.",
    ],
    management: {
      initial: [
        "Prevent falls and consider ankle-foot orthosis.",
        "Remove compression source if obvious.",
      ],
      definitive: [
        "Treat the underlying lesion, whether compression, trauma, or root pathology.",
      ],
      longTerm: [
        "Physiotherapy and gait rehabilitation.",
        "Surgical exploration in selected severe compressive or traumatic lesions.",
      ],
      mdt: [
        "Neurology, orthopaedics, physiotherapy, orthotics.",
      ],
    },
    prognosis: [
      "Depends on cause and chronicity.",
      "Compression neuropathies can recover well if relieved early.",
    ],
    pathophysiology: [
      "Loss of dorsiflexor innervation produces inability to clear the foot in swing phase.",
      "Common peroneal nerve is vulnerable at the fibular neck.",
    ],
    vivaQuestions: [
      "How do you distinguish peroneal nerve palsy from L5 radiculopathy?",
      "What are the causes of foot drop?",
      "How would you manage this patient initially?",
      "What complications matter functionally?",
    ],
    pitfalls: [
      "Do not forget to test ankle inversion.",
      "High-stepping gait is a clue, not a diagnosis.",
      "Always think about falls risk and orthotic support.",
    ],
  },
  {
    id: "hip-osteoarthritis",
    name: "Hip osteoarthritis",
    systems: ["Hip", "GALS"],
    frequency: ["common"],
    clueTypes: [],
    labels: ["Very common", "Must know"],
    summary: "Antalgic gait, reduced internal rotation first, pain on movement, older patient with functional restriction.",
    signs: [
      "Antalgic gait and reduced stance phase.",
      "Reduced internal rotation is often the earliest movement loss.",
      "Reduced flexion and abduction as disease advances.",
      "Pain referred to groin, buttock, or knee.",
      "Leg length discrepancy may be present in advanced disease.",
    ],
    differentials: [
      "Greater trochanteric pain syndrome.",
      "Avascular necrosis.",
      "Inflammatory arthritis.",
      "Lumbar radiculopathy causing referred pain.",
    ],
    investigations: [
      "Usually a clinical plus plain X-ray diagnosis.",
      "AP pelvis and lateral hip radiographs.",
      "Blood tests only if inflammatory or infective alternative suspected.",
    ],
    management: {
      initial: [
        "Simple analgesia, exercise advice, weight optimisation.",
        "Walking aids if function is limited.",
      ],
      definitive: [
        "Total hip replacement for severe symptomatic disease refractory to conservative care.",
      ],
      longTerm: [
        "Physiotherapy, strengthening, falls prevention, review function over time.",
      ],
      mdt: [
        "GP, physiotherapy, orthopaedics, occupational therapy.",
      ],
    },
    prognosis: [
      "Usually progressive but pace varies.",
      "Hip replacement offers excellent pain relief and function in advanced disease.",
    ],
    pathophysiology: [
      "Degeneration of articular cartilage with bony remodelling narrows joint space and reduces smooth movement.",
    ],
    vivaQuestions: [
      "What examination finding is typically reduced first in hip OA?",
      "How would you distinguish hip pathology from lumbar spine pathology?",
      "When is hip replacement indicated?",
      "What X-ray changes do you expect?",
    ],
    pitfalls: [
      "Knee pain can come from the hip.",
      "Do not forget gait and function in your summary.",
      "Normal inflammatory markers do not prove OA, but OA is still the commonest answer.",
    ],
  },
  {
    id: "total-hip-replacement",
    name: "Total hip replacement",
    systems: ["Hip", "GALS"],
    frequency: ["common", "classic"],
    clueTypes: ["scar", "device"],
    labels: ["Very common", "Scar / prosthesis", "Must know"],
    summary: "Posterolateral or anterior hip scar, improved but not normal ROM, leg length consideration and questions about indication or complications.",
    signs: [
      "Hip scar: posterolateral, lateral, or anterior approach.",
      "Reduced but usually painless range of movement compared with native arthritic hip.",
      "Abductor weakness or Trendelenburg gait may persist.",
      "Leg length discrepancy or walking aid may be present.",
      "Look for bilateral replacements or revision clues.",
    ],
    differentials: [
      "Hip hemiarthroplasty after fracture.",
      "Previous fixation rather than replacement.",
      "Revision arthroplasty.",
    ],
    investigations: [
      "X-ray pelvis/hip if pain or complication is suspected.",
      "Inflammatory markers if infection considered.",
      "Joint aspiration in suspected prosthetic joint infection.",
    ],
    management: {
      initial: [
        "Clarify why the replacement was done and whether current symptoms suggest complication.",
      ],
      definitive: [
        "Complication-specific treatment: revision, infection management, relocation for dislocation.",
      ],
      longTerm: [
        "Rehab, falls prevention, bone health, routine orthopaedic follow-up when indicated.",
      ],
      mdt: [
        "Orthopaedics, physio, occupational therapy, microbiology if infected.",
      ],
    },
    prognosis: [
      "Usually very good functional outcome.",
      "Longevity depends on implant type, age, activity, and complications.",
    ],
    pathophysiology: [
      "The prosthesis replaces a severely damaged joint surface to restore smooth movement and reduce pain.",
    ],
    vivaQuestions: [
      "What are the common indications for total hip replacement?",
      "What complications of hip replacement should you mention?",
      "How would you examine for Trendelenburg gait or leg length difference?",
      "How does a hemiarthroplasty differ from a total hip replacement?",
    ],
    pitfalls: [
      "Do not assume every hip scar is a replacement; fixation scars exist too.",
      "Always mention dislocation, loosening, and infection as key complications.",
      "Older fracture patients may have hemiarthroplasty rather than THR.",
    ],
  },
  {
    id: "rotator-cuff-disease",
    name: "Rotator cuff disease",
    systems: ["Shoulder"],
    frequency: ["common"],
    clueTypes: [],
    labels: ["Very common", "Must know"],
    summary: "Painful arc, weakness in abduction or external rotation, preserved passive movement unless pain-limited, older degenerative shoulder.",
    signs: [
      "Painful arc on abduction.",
      "Weakness of abduction or external rotation depending on tendon involved.",
      "Passive range is relatively preserved compared with frozen shoulder.",
      "Pain on resisted movements and overhead activity.",
      "Supraspinatus/infraspinatus wasting may be visible if chronic.",
    ],
    differentials: [
      "Adhesive capsulitis with marked passive restriction.",
      "Glenohumeral OA.",
      "Cervical radiculopathy referred pain.",
    ],
    investigations: [
      "Mainly a clinical diagnosis.",
      "X-ray if OA, calcific tendinopathy, or trauma is possible.",
      "Ultrasound or MRI if tear severity matters or surgery is considered.",
    ],
    management: {
      initial: [
        "Analgesia, activity modification, physiotherapy.",
      ],
      definitive: [
        "Subacromial steroid injection in selected cases.",
        "Surgical repair for significant tears in appropriate patients.",
      ],
      longTerm: [
        "Rehab and strengthening programme.",
      ],
      mdt: [
        "Physio, MSK clinic, orthopaedics if persistent or traumatic tear.",
      ],
    },
    prognosis: [
      "Many improve with conservative treatment.",
      "Large tears and chronic weakness can leave persistent functional limitation.",
    ],
    pathophysiology: [
      "Degenerative or impingement-related tendon injury reduces cuff function and causes painful shoulder mechanics.",
    ],
    vivaQuestions: [
      "How would you distinguish rotator cuff disease from adhesive capsulitis?",
      "Which tendon is most commonly involved?",
      "When would imaging change management?",
      "What are the treatment options?",
    ],
    pitfalls: [
      "If passive movement is also markedly reduced, think frozen shoulder or arthritis.",
      "Pain can make apparent weakness look worse than true tendon rupture.",
      "Always examine the neck if symptoms are atypical.",
    ],
  },
  {
    id: "adhesive-capsulitis",
    name: "Adhesive capsulitis",
    systems: ["Shoulder"],
    frequency: ["common"],
    clueTypes: [],
    labels: ["Very common", "Must know"],
    summary: "Painful stiff shoulder with global loss of active and passive movement, especially external rotation; classic in diabetes.",
    signs: [
      "Global restriction of active and passive movement.",
      "External rotation is especially reduced.",
      "Often painful at end range but less focal weakness than cuff tears.",
      "Usually no major visible deformity.",
      "Ask about diabetes, thyroid disease, or prolonged immobility.",
    ],
    differentials: [
      "Rotator cuff disease.",
      "Glenohumeral OA.",
      "Massive cuff tear with pseudoparalysis.",
    ],
    investigations: [
      "Clinical diagnosis in typical cases.",
      "X-ray if arthritis or other structural disease needs exclusion.",
    ],
    management: {
      initial: [
        "Analgesia and guided physiotherapy.",
      ],
      definitive: [
        "Steroid injection can help in early painful phase.",
        "Hydrodilatation or manipulation / arthroscopic release in refractory cases.",
      ],
      longTerm: [
        "Recovery can take months to years; reassure but encourage movement.",
      ],
      mdt: [
        "Physio, MSK clinic, orthopaedics if resistant.",
      ],
    },
    prognosis: [
      "Usually improves, but prolonged stiffness is common.",
      "Some patients have residual movement restriction.",
    ],
    pathophysiology: [
      "Capsular inflammation and fibrosis reduce glenohumeral volume and movement.",
    ],
    vivaQuestions: [
      "What movement is classically most restricted?",
      "How do you distinguish this from rotator cuff disease?",
      "What conditions are associated with frozen shoulder?",
      "What is the expected time course?",
    ],
    pitfalls: [
      "Restriction of passive movement is the key bedside clue.",
      "Do not forget diabetes association.",
      "This is often painful enough to make examination difficult, so describe what you could assess.",
    ],
  },
  {
    id: "knee-osteoarthritis",
    name: "Knee osteoarthritis",
    systems: ["Knee", "GALS"],
    frequency: ["common"],
    clueTypes: [],
    labels: ["Very common", "Must know"],
    summary: "Varus deformity, crepitus, bony enlargement, small effusion and reduced flexion in an older patient with mechanical symptoms.",
    signs: [
      "Varus or valgus deformity and antalgic gait.",
      "Bony enlargement and crepitus on movement.",
      "Reduced flexion, terminal extension pain, and small cool effusion.",
      "Quadriceps wasting if longstanding.",
      "Scars may suggest previous arthroscopy or arthroplasty.",
    ],
    differentials: [
      "Inflammatory arthritis if hot swollen joint with prolonged morning stiffness.",
      "Meniscal pathology in a younger patient.",
      "Crystal arthritis in acute red hot presentations.",
    ],
    investigations: [
      "Weight-bearing knee X-rays.",
      "Blood tests only if inflammatory or infective differential matters.",
      "Aspirate if hot swollen or diagnosis unclear.",
    ],
    management: {
      initial: [
        "Weight management, exercise, physio, analgesia.",
      ],
      definitive: [
        "Steroid injection for flare in selected patients.",
        "Arthroplasty for severe refractory disease.",
      ],
      longTerm: [
        "Function optimisation, walking aids, falls prevention.",
      ],
      mdt: [
        "GP, physio, orthopaedics, occupational therapy.",
      ],
    },
    prognosis: [
      "Usually progressive but variable.",
      "Arthroplasty gives good symptom relief in advanced disease.",
    ],
    pathophysiology: [
      "Degenerative cartilage loss and osteophyte formation create pain, stiffness, and deformity.",
    ],
    vivaQuestions: [
      "What are the typical radiographic features of OA?",
      "How would you distinguish OA from inflammatory arthritis clinically?",
      "When is knee replacement considered?",
      "What factors worsen knee OA symptoms?",
    ],
    pitfalls: [
      "A mild effusion can still be OA.",
      "Do not forget gait, alignment, and quadriceps wasting in your description.",
      "A red hot knee needs a different differential.",
    ],
  },
  {
    id: "total-knee-replacement",
    name: "Total knee replacement",
    systems: ["Knee", "GALS"],
    frequency: ["common", "classic"],
    clueTypes: ["scar", "device"],
    labels: ["Very common", "Scar / prosthesis", "Must know"],
    summary: "Midline knee scar, reduced but functional ROM, assess gait and think about indication, loosening, infection, and prosthetic complications.",
    signs: [
      "Anterior midline scar over the knee.",
      "Reduced range but usually relatively pain-free if functioning well.",
      "Warmth can persist for some time after surgery, but marked pain/swelling is concerning.",
      "Check gait, extension lag, and need for aids.",
      "Look for bilateral arthroplasties or revision scars.",
    ],
    differentials: [
      "Unicompartmental knee replacement.",
      "Arthrotomy or fixation scars after trauma.",
    ],
    investigations: [
      "X-ray if painful or loosening suspected.",
      "Inflammatory markers and joint aspiration for prosthetic joint infection.",
      "Orthopaedic review if instability or persistent pain.",
    ],
    management: {
      initial: [
        "Clarify indication and current complications.",
      ],
      definitive: [
        "Revision or other orthopaedic intervention if infection, loosening, or instability occurs.",
      ],
      longTerm: [
        "Physio, strengthening, falls prevention, weight optimisation.",
      ],
      mdt: [
        "Orthopaedics, physio, microbiology if infected.",
      ],
    },
    prognosis: [
      "Generally excellent pain relief and function.",
      "Revision risk rises over time with wear, loosening, or infection.",
    ],
    pathophysiology: [
      "Arthroplasty replaces damaged joint surfaces to improve mechanical function and pain.",
    ],
    vivaQuestions: [
      "What are the common indications for total knee replacement?",
      "What complications do you need to mention?",
      "How do you distinguish infection from expected postoperative findings?",
      "What advice would you give about long-term outcomes?",
    ],
    pitfalls: [
      "Not every old knee scar is a knee replacement.",
      "Always mention infection and loosening.",
      "Function matters more than range alone in your summary.",
    ],
  },
  {
    id: "rheumatoid-arthritis-hand",
    name: "Rheumatoid arthritis hand",
    systems: ["Hand", "Elbow", "GALS"],
    frequency: ["common", "classic"],
    clueTypes: [],
    labels: ["Very common", "Classic examiner favourite", "Must know"],
    summary: "Ulnar deviation, MCP swelling, Z-thumb, swan-neck or boutonniere deformities with systemic autoimmune context.",
    signs: [
      "Ulnar deviation at MCP joints.",
      "Swan-neck, boutonniere deformities, Z-thumb.",
      "MCP and PIP synovial thickening rather than hard bony nodes.",
      "Wrist involvement, reduced grip, elbow rheumatoid nodules may coexist.",
      "Look for vasculitic or extra-articular clues and medication effects.",
    ],
    differentials: [
      "Osteoarthritis with DIP nodes and less inflammatory pattern.",
      "Psoriatic arthritis with dactylitis and nail changes.",
      "Jaccoud arthropathy or connective tissue disease.",
    ],
    investigations: [
      "ESR/CRP, rheumatoid factor, anti-CCP.",
      "X-rays of hands/feet for erosive change.",
      "Ultrasound can show active synovitis.",
      "Baseline monitoring bloods before DMARDs.",
    ],
    management: {
      initial: [
        "Recognise active synovitis and functional limitation.",
        "Treat flares and pain while arranging specialist therapy.",
      ],
      definitive: [
        "DMARDs early, escalating to biologics if needed.",
      ],
      longTerm: [
        "Joint protection, physio, OT, cardiovascular and bone risk management.",
      ],
      mdt: [
        "Rheumatology, hand therapy, podiatry, orthopaedics in severe deformity.",
      ],
    },
    prognosis: [
      "Early treatment improves long-term joint preservation.",
      "Untreated disease causes progressive deformity and disability.",
    ],
    pathophysiology: [
      "Autoimmune synovitis drives pannus formation, cartilage damage, and erosions.",
    ],
    vivaQuestions: [
      "What deformities are classic for rheumatoid arthritis?",
      "How do you distinguish RA from osteoarthritis in the hands?",
      "What systemic complications should you know?",
      "Why is early DMARD treatment important?",
    ],
    pitfalls: [
      "DIP involvement alone points away from classic RA.",
      "Do not forget extra-articular disease.",
      "Candidates often describe the deformities but forget the underlying inflammatory diagnosis.",
    ],
  },
  {
    id: "dupuytrens-contracture",
    name: "Dupuytren's contracture",
    systems: ["Hand"],
    frequency: ["common", "classic"],
    clueTypes: [],
    labels: ["Classic examiner favourite", "Very common"],
    summary: "Palmar nodules and cords causing fixed flexion deformity, usually ring and little fingers, with classic associations.",
    signs: [
      "Palmar fascial thickening, nodules, and cords.",
      "Fixed flexion deformity most often of ring and little fingers.",
      "Cannot fully place hand flat on table in advanced disease.",
      "Usually painless and sensory function is normal.",
      "Look for bilateral disease and associated plantar or penile fibromatosis history.",
    ],
    differentials: [
      "Trigger finger.",
      "Ulnar claw hand.",
      "Scar contracture after trauma or burns.",
    ],
    investigations: [
      "Clinical diagnosis.",
      "No routine imaging needed.",
    ],
    management: {
      initial: [
        "Assess functional impact and degree of contracture.",
      ],
      definitive: [
        "Needle fasciotomy, collagenase in some settings, or surgical fasciectomy depending on severity and local practice.",
      ],
      longTerm: [
        "Hand therapy and recurrence counselling.",
      ],
      mdt: [
        "Hand surgery and hand therapy.",
      ],
    },
    prognosis: [
      "Often slowly progressive and can recur after treatment.",
    ],
    pathophysiology: [
      "Fibroproliferative palmar fascia disease leads to shortening and contracture.",
    ],
    vivaQuestions: [
      "What are the common associations of Dupuytren's contracture?",
      "How would you distinguish it from an ulnar nerve palsy?",
      "When is intervention considered?",
      "What is the recurrence risk after treatment?",
    ],
    pitfalls: [
      "This is not a tendon problem.",
      "Sensation is usually normal, which helps separate it from neuropathy.",
      "The exam favourite question is often about associations.",
    ],
  },
  {
    id: "diabetic-foot-charcot",
    name: "Diabetic foot / Charcot neuroarthropathy",
    systems: ["Foot", "Peripheral arterial", "GALS"],
    frequency: ["common", "classic"],
    clueTypes: [],
    labels: ["Very common", "Must know", "Easy to miss"],
    summary: "Ulcer risk, neuropathy, deformity, warm swollen midfoot in Charcot change, and the need to separate neuropathic from ischaemic disease.",
    signs: [
      "Ulcers, callus, deformity, previous amputation, infection signs.",
      "Reduced protective sensation and absent ankle jerks.",
      "Check pulses and capillary refill to assess ischaemia as well as neuropathy.",
      "Charcot foot may be warm, swollen, relatively painless, and collapsed in the midfoot.",
      "Inspect footwear and pressure points carefully.",
    ],
    differentials: [
      "Peripheral arterial disease with ischaemic ulceration.",
      "Cellulitis or osteomyelitis.",
      "Gout or inflammatory arthritis if hot swollen foot.",
    ],
    investigations: [
      "HbA1c, inflammatory markers, wound cultures if infected.",
      "Foot X-ray; MRI if osteomyelitis or early Charcot is suspected.",
      "ABPI or vascular assessment if pulses reduced.",
      "Probe-to-bone and specialist foot assessment for ulcers.",
    ],
    management: {
      initial: [
        "Identify limb-threatening infection or acute Charcot change urgently.",
        "Off-loading and pressure relief are key.",
      ],
      definitive: [
        "Antibiotics and debridement if infected.",
        "Total contact casting or specialist off-loading for Charcot neuroarthropathy.",
      ],
      longTerm: [
        "Diabetes control, podiatry, footwear, vascular risk reduction, ulcer prevention.",
      ],
      mdt: [
        "Multidisciplinary diabetic foot team: diabetes, podiatry, vascular, orthopaedics, microbiology.",
      ],
    },
    prognosis: [
      "High risk of recurrent ulceration and amputation if not aggressively managed.",
      "Early recognition of Charcot foot can prevent severe deformity.",
    ],
    pathophysiology: [
      "Neuropathy removes protective sensation and alters mechanics.",
      "Charcot change reflects repetitive trauma and abnormal inflammatory bone/joint destruction in an insensate foot.",
    ],
    vivaQuestions: [
      "How do you distinguish neuropathic from ischaemic diabetic foot disease?",
      "What is Charcot foot?",
      "What investigations help you look for osteomyelitis?",
      "Who needs urgent multidisciplinary input?",
    ],
    pitfalls: [
      "Always examine both sensation and pulses.",
      "A hot swollen diabetic foot is Charcot until proven otherwise, but infection must also be considered.",
      "Do not miss the need for off-loading.",
    ],
  },
  {
    id: "ankylosing-spondylitis",
    name: "Ankylosing spondylitis",
    systems: ["Spine", "GALS"],
    frequency: ["classic"],
    clueTypes: [],
    labels: ["Classic examiner favourite", "Must know"],
    summary: "Young adult with reduced spinal flexion, limited chest expansion, stooped posture and inflammatory back pain history.",
    signs: [
      "Loss of lumbar lordosis or stooped posture.",
      "Reduced spinal flexion and extension.",
      "Reduced chest expansion.",
      "Sacroiliac tenderness may be historical rather than obvious on exam.",
      "Look for uveitis history, psoriasis, IBD, or peripheral enthesitis.",
    ],
    differentials: [
      "Mechanical back pain.",
      "Diffuse idiopathic skeletal hyperostosis in older adults.",
      "Psoriatic or enteropathic spondyloarthritis.",
    ],
    investigations: [
      "Inflammatory markers can support but are not definitive.",
      "MRI sacroiliac joints or X-ray depending on stage.",
      "HLA-B27 may support diagnosis but is not diagnostic alone.",
    ],
    management: {
      initial: [
        "Recognise inflammatory pattern and functional restriction.",
        "NSAIDs and exercise are core first steps.",
      ],
      definitive: [
        "Biologic therapy in active disease not controlled by first-line measures.",
      ],
      longTerm: [
        "Physiotherapy, posture work, bone health, smoking cessation.",
      ],
      mdt: [
        "Rheumatology and physiotherapy; ophthalmology if uveitis.",
      ],
    },
    prognosis: [
      "Variable: some remain relatively functional, others develop major stiffness and deformity.",
      "Biologic therapy can improve symptoms and function substantially.",
    ],
    pathophysiology: [
      "Inflammation at entheses and axial joints leads to pain and eventual new bone formation/fusion.",
    ],
    vivaQuestions: [
      "What examination measures are useful in ankylosing spondylitis?",
      "What extra-articular features should you ask about?",
      "How do you distinguish inflammatory from mechanical back pain?",
      "What is the role of biologics?",
    ],
    pitfalls: [
      "Chest expansion is a classic exam point candidates forget.",
      "A young patient with chronic back stiffness is not automatically mechanical.",
      "Remember the link with uveitis and IBD.",
    ],
  },
  {
    id: "lumbar-spinal-stenosis",
    name: "Lumbar spinal stenosis",
    systems: ["Spine", "Peripheral neurological - lower limb"],
    frequency: ["common"],
    clueTypes: [],
    labels: ["Very common", "Easy to miss"],
    summary: "Older patient with neurogenic claudication, limited walking, relief on flexion, and often mixed lower-limb neurology.",
    signs: [
      "Often normal exam at rest, especially early on.",
      "May have lower-limb weakness or reduced reflexes if severe.",
      "Walking and extension provoke symptoms; flexion may relieve them.",
      "Posture may be slightly flexed.",
    ],
    differentials: [
      "Peripheral arterial disease causing vascular claudication.",
      "Peripheral neuropathy.",
      "Hip osteoarthritis or root compression.",
    ],
    investigations: [
      "MRI lumbar spine if symptoms are significant or surgery is considered.",
      "Vascular assessment if claudication pattern is unclear.",
      "Neuro exam to look for root involvement.",
    ],
    management: {
      initial: [
        "Analgesia, physiotherapy, walking aids and flexion-based strategies.",
      ],
      definitive: [
        "Epidural steroid may help some patients.",
        "Surgical decompression if disabling or progressive neurological deficit.",
      ],
      longTerm: [
        "Function optimisation and falls prevention.",
      ],
      mdt: [
        "Spinal orthopaedics or neurosurgery, physiotherapy, pain team.",
      ],
    },
    prognosis: [
      "Can remain stable, but mobility may progressively decline.",
      "Surgery can improve neurogenic claudication in selected patients.",
    ],
    pathophysiology: [
      "Degenerative narrowing of the spinal canal compresses cauda equina roots, especially during extension.",
    ],
    vivaQuestions: [
      "How do you distinguish neurogenic from vascular claudication?",
      "What bedside clues point to spinal stenosis?",
      "What investigations would you request?",
      "When would surgery be considered?",
    ],
    pitfalls: [
      "A near-normal static exam does not exclude spinal stenosis.",
      "Always compare with peripheral arterial disease.",
      "Watch for red-flag cauda equina symptoms.",
    ],
  },
  {
    id: "peripheral-arterial-disease",
    name: "Peripheral arterial disease",
    systems: ["Peripheral arterial", "Foot"],
    frequency: ["common"],
    clueTypes: [],
    labels: ["Very common", "Must know"],
    summary: "Hair loss, cool shiny skin, reduced pulses, dependent rubor, ulcers and vascular graft clues; common finals vascular station.",
    signs: [
      "Reduced or absent distal pulses and prolonged capillary refill.",
      "Cool shiny hairless skin with trophic change.",
      "Dependent rubor, elevation pallor, ischaemic ulceration or toe loss.",
      "Buerger's angle may be reduced.",
      "Look for bypass scars, amputations, smoking clues, diabetic complications.",
    ],
    differentials: [
      "Neuropathic diabetic foot disease.",
      "Chronic venous disease if oedema and gaiter pigmentation dominate.",
      "Acute limb ischaemia if suddenly painful and pale.",
    ],
    investigations: [
      "ABPI is the key bedside test.",
      "Duplex ultrasound, CT angiography, or MR angiography for intervention planning.",
      "HbA1c, lipids, renal function, ECG for cardiovascular risk.",
    ],
    management: {
      initial: [
        "Assess limb threat: rest pain, tissue loss, infection.",
        "Smoking cessation and cardiovascular risk reduction are essential.",
      ],
      definitive: [
        "Exercise therapy and antiplatelet/statin treatment.",
        "Endovascular or surgical revascularisation for severe disease or limb threat.",
      ],
      longTerm: [
        "Foot care, diabetes control, ulcer prevention, secondary prevention.",
      ],
      mdt: [
        "Vascular surgery, podiatry, diabetes team, smoking cessation services.",
      ],
    },
    prognosis: [
      "Major issue is cardiovascular event risk as well as limb outcomes.",
      "Critical limb ischaemia has poor limb salvage without prompt treatment.",
    ],
    pathophysiology: [
      "Atherosclerotic narrowing reduces arterial supply to exercising and later resting tissues.",
    ],
    vivaQuestions: [
      "How would you examine a limb for peripheral arterial disease?",
      "What does ABPI tell you?",
      "How do you manage intermittent claudication versus critical limb ischaemia?",
      "What systemic risks does PAD tell you about?",
    ],
    pitfalls: [
      "Always compare sides and go pulse by pulse.",
      "A diabetic patient may have both neuropathy and ischaemia.",
      "PAD is a marker of widespread atherosclerosis.",
    ],
  },
  {
    id: "chronic-venous-insufficiency",
    name: "Chronic venous insufficiency / varicose veins",
    systems: ["Peripheral venous"],
    frequency: ["common"],
    clueTypes: [],
    labels: ["Very common", "Must know"],
    summary: "Varicosities, oedema, gaiter hyperpigmentation, eczema and venous ulcers; distinguish carefully from arterial disease.",
    signs: [
      "Dilated tortuous superficial veins.",
      "Ankle oedema and gaiter area hyperpigmentation.",
      "Venous eczema, lipodermatosclerosis, healed or active ulcers near medial malleolus.",
      "Pulses should usually still be present unless mixed disease.",
      "Look for previous vein surgery scars or compression stockings.",
    ],
    differentials: [
      "Peripheral arterial disease.",
      "Lymphoedema.",
      "Heart failure or nephrotic oedema.",
      "Post-thrombotic syndrome.",
    ],
    investigations: [
      "Usually clinical plus duplex venous ultrasound if intervention is considered.",
      "ABPI before compression if ulceration or arterial disease is possible.",
    ],
    management: {
      initial: [
        "Compression after arterial disease has been excluded.",
        "Skin care, elevation, exercise, ulcer care if needed.",
      ],
      definitive: [
        "Endovenous ablation, foam sclerotherapy, or surgery depending on anatomy and symptoms.",
      ],
      longTerm: [
        "Compression adherence and recurrence prevention.",
      ],
      mdt: [
        "Vascular team, tissue viability / leg ulcer nurses, dermatology if severe eczema.",
      ],
    },
    prognosis: [
      "Chronic and often recurrent, but usually not limb-threatening unless ulcerated/infected.",
    ],
    pathophysiology: [
      "Venous valve incompetence causes venous hypertension and chronic skin/tissue change.",
    ],
    vivaQuestions: [
      "How do you distinguish venous from arterial ulceration?",
      "Why do you need ABPI before compression?",
      "What are the complications of chronic venous insufficiency?",
      "What definitive treatment options exist?",
    ],
    pitfalls: [
      "Do not put compression on significant arterial disease without checking ABPI.",
      "Varicose veins alone are less important than the skin changes and ulcer risk.",
      "Remember post-thrombotic syndrome in the differential.",
    ],
  },
  {
    id: "graves-thyrotoxicosis",
    name: "Graves' disease / thyrotoxicosis",
    systems: ["Thyroid", "Pituitary / endocrine appearance"],
    frequency: ["common", "classic"],
    clueTypes: [],
    labels: ["Very common", "Classic examiner favourite", "Must know"],
    summary: "Fine tremor, warm hands, tachycardia, eye signs, diffuse goitre and hyperdynamic appearance.",
    signs: [
      "Warm sweaty hands and fine tremor.",
      "Tachycardia or AF.",
      "Diffuse goitre, thyroid bruit in Graves' disease.",
      "Lid lag, stare, ophthalmopathy, proximal myopathy.",
      "Weight loss, hyperreflexia, and anxiety-type appearance.",
    ],
    differentials: [
      "Toxic multinodular goitre.",
      "Thyroiditis.",
      "Over-replacement with thyroxine.",
    ],
    investigations: [
      "TSH and free T4/T3.",
      "TSH receptor antibodies if Graves' disease suspected.",
      "ECG for AF.",
      "Ultrasound or uptake scan only in selected diagnostic uncertainty.",
    ],
    management: {
      initial: [
        "Beta-blocker for symptomatic control if appropriate.",
      ],
      definitive: [
        "Antithyroid medication, radioiodine, or surgery depending on cause and context.",
      ],
      longTerm: [
        "Monitor thyroid function and recurrence.",
        "Manage eye disease and bone/cardiac consequences.",
      ],
      mdt: [
        "Endocrinology, thyroid surgery, ophthalmology for Graves' orbitopathy.",
      ],
    },
    prognosis: [
      "Many patients are controllable, though relapse can occur after medication.",
      "Untreated thyrotoxicosis risks arrhythmia, bone loss, and thyroid storm.",
    ],
    pathophysiology: [
      "Excess thyroid hormone drives sympathetic overactivity and increased metabolic rate.",
      "Graves' disease is antibody-mediated thyroid stimulation.",
    ],
    vivaQuestions: [
      "What eye signs are specific to Graves' disease?",
      "What are the causes of thyrotoxicosis?",
      "How would you manage a patient with AF due to thyrotoxicosis?",
      "What definitive treatments are available?",
    ],
    pitfalls: [
      "Thyrotoxicosis is a syndrome; Graves' is one cause.",
      "Not all patients have obvious eye signs.",
      "Always check for AF in finals discussions.",
    ],
  },
  {
    id: "hypothyroidism-thyroid-treatment",
    name: "Hypothyroidism / post-thyroid treatment clues",
    systems: ["Thyroid"],
    frequency: ["common"],
    clueTypes: ["scar"],
    labels: ["Very common", "Must know", "Scar"],
    summary: "Slow-relaxing reflexes, dry skin, hoarse voice, bradycardia and possible thyroidectomy scar or radioiodine history.",
    signs: [
      "Dry coarse skin, thinning hair, puffy face.",
      "Bradycardia and slow-relaxing ankle reflexes.",
      "Hoarse voice and non-pitting oedema may be present.",
      "Goitre may be absent if post-thyroidectomy or post-radioiodine.",
      "Neck scar may suggest previous thyroid surgery.",
    ],
    differentials: [
      "Depression or chronic fatigue states.",
      "Cushingoid appearance from steroid use rather than hypothyroid puffiness.",
      "Post-thyroid cancer treatment with replacement therapy.",
    ],
    investigations: [
      "TSH and free T4.",
      "TPO antibodies if autoimmune thyroiditis suspected.",
      "Lipid profile and FBC if systemic impact is relevant.",
    ],
    management: {
      initial: [
        "Confirm biochemically and assess severity.",
      ],
      definitive: [
        "Levothyroxine replacement, titrated to thyroid function tests.",
      ],
      longTerm: [
        "Regular monitoring and dose adjustment.",
        "Lifelong treatment is common in primary hypothyroidism.",
      ],
      mdt: [
        "Primary care for routine management, endocrinology if complex or post-cancer.",
      ],
    },
    prognosis: [
      "Excellent once appropriately treated.",
      "Untreated disease causes significant systemic morbidity.",
    ],
    pathophysiology: [
      "Thyroid hormone deficiency slows metabolic activity across multiple systems.",
    ],
    vivaQuestions: [
      "What clinical signs suggest hypothyroidism?",
      "What are the common causes in the UK?",
      "How would previous thyroid surgery affect your differential?",
      "What complications arise if severe hypothyroidism is untreated?",
    ],
    pitfalls: [
      "A thyroidectomy scar may point to cancer or Graves' treatment, not primary spontaneous hypothyroidism alone.",
      "Clinical signs can be subtle; do not overstate confidence without blood tests.",
      "Slow-relaxing reflexes are a favourite viva clue.",
    ],
  },
  {
    id: "cushings-syndrome",
    name: "Cushing syndrome",
    systems: ["Pituitary / endocrine appearance"],
    frequency: ["common", "classic"],
    clueTypes: [],
    labels: ["Must know", "Classic examiner favourite"],
    summary: "Central adiposity, moon face, proximal myopathy, wide purple striae, bruising and hypertension; remember steroids first.",
    signs: [
      "Central obesity with relatively thin limbs.",
      "Moon face, supraclavicular fullness, buffalo hump.",
      "Wide purple striae, thin skin, easy bruising.",
      "Proximal muscle weakness and hypertension.",
      "Look for steroid clues, diabetes, acne, hirsutism, osteoporotic posture.",
    ],
    differentials: [
      "Exogenous steroid use.",
      "Pseudo-Cushing states such as severe alcohol excess or depression.",
      "Simple obesity without catabolic skin or muscle signs.",
    ],
    investigations: [
      "Screen with overnight dexamethasone suppression, late-night salivary cortisol, or 24-hour urinary free cortisol depending on local protocol.",
      "ACTH level after biochemical confirmation.",
      "Pituitary MRI or adrenal imaging depending on ACTH dependence.",
    ],
    management: {
      initial: [
        "Check whether the patient is taking prescribed steroids first.",
        "Assess complications: diabetes, hypertension, infection, osteoporosis.",
      ],
      definitive: [
        "Treat the underlying source: taper exogenous steroids if possible, pituitary/adrenal treatment, ectopic source management.",
      ],
      longTerm: [
        "Endocrine follow-up for recurrence and adrenal insufficiency risk after treatment.",
        "Manage bone, metabolic, and cardiovascular complications.",
      ],
      mdt: [
        "Endocrinology, pituitary MDT, neurosurgery, endocrine surgery depending on cause.",
      ],
    },
    prognosis: [
      "Complications can be substantial even after biochemical cure.",
      "Prognosis depends on cause and timeliness of treatment.",
    ],
    pathophysiology: [
      "Excess cortisol causes protein catabolism, insulin resistance, hypertension, and fat redistribution.",
    ],
    vivaQuestions: [
      "What is the commonest cause of Cushing syndrome?",
      "How would you screen for hypercortisolism?",
      "How do you distinguish Cushing disease from Cushing syndrome?",
      "What complications should you mention?",
    ],
    pitfalls: [
      "Exogenous steroids are the commonest cause: say this early.",
      "Simple obesity does not give wide purple striae and proximal myopathy to the same degree.",
      "Remember osteoporosis and infection risk.",
    ],
  },
  {
    id: "acromegaly",
    name: "Acromegaly",
    systems: ["Pituitary / endocrine appearance"],
    frequency: ["classic"],
    clueTypes: [],
    labels: ["Classic examiner favourite", "Must know"],
    summary: "Coarse facial features, enlarged hands, prognathism, sweating, carpal tunnel, visual field risk and cardiometabolic complications.",
    signs: [
      "Coarse facial features, prominent supraorbital ridges, prognathism.",
      "Large spade-like hands and soft tissue thickening.",
      "Macroglossia, interdental spacing, deep voice.",
      "Sweaty skin, skin tags, carpal tunnel signs.",
      "Consider bitemporal hemianopia if macroadenoma mass effect.",
    ],
    differentials: [
      "Familial coarse features without endocrine disease.",
      "Hypothyroidism causing puffiness rather than overgrowth.",
      "Gigantism history if disease began before epiphyseal closure.",
    ],
    investigations: [
      "IGF-1 as screening test.",
      "Oral glucose tolerance test with GH suppression assessment.",
      "Pituitary MRI.",
      "Screen for complications: glucose, BP, sleep apnoea, echocardiography as indicated.",
    ],
    management: {
      initial: [
        "Assess for visual symptoms, headaches, and cardiorespiratory comorbidity.",
      ],
      definitive: [
        "Transsphenoidal surgery for pituitary adenoma when appropriate.",
        "Medical therapy such as somatostatin analogues or GH receptor blockade when needed.",
      ],
      longTerm: [
        "Endocrine surveillance for recurrence and complication control.",
      ],
      mdt: [
        "Endocrinology, pituitary MDT, neurosurgery, ophthalmology if field defects.",
      ],
    },
    prognosis: [
      "Delayed diagnosis increases cardiovascular and metabolic morbidity.",
      "Good biochemical control improves long-term outcomes substantially.",
    ],
    pathophysiology: [
      "Excess growth hormone, usually from a pituitary adenoma, raises IGF-1 and causes soft tissue and bony overgrowth.",
    ],
    vivaQuestions: [
      "What examination features suggest acromegaly?",
      "What complications do you need to remember?",
      "What tests confirm the diagnosis?",
      "How is acromegaly treated?",
    ],
    pitfalls: [
      "Candidates often recognise the face but forget hands, sweating, and carpal tunnel.",
      "Visual field defects matter because the common cause is a pituitary macroadenoma.",
      "Mention obstructive sleep apnoea and cardiomyopathy.",
    ],
  },
  {
    id: "microcytic-anaemia-sob",
    name: "Microcytic anaemia with shortness of breath",
    systems: ["Cross-cutting viva", "Cardiovascular", "Respiratory", "Abdominal"],
    frequency: ["common", "classic"],
    clueTypes: [],
    labels: ["Must know", "Linked viva topic", "Very common"],
    summary: "A high-yield discussion stem: pallor, exertional breathlessness, possible flow murmur, and the need to explain likely iron deficiency causes and urgent exclusions.",
    signs: [
      "Conjunctival or palmar pallor.",
      "Flow murmur or tachycardia if anaemia is significant.",
      "Breathlessness on exertion out of proportion to chest findings.",
      "Look for koilonychia, glossitis, angular cheilitis, cachexia, melaena clues, or menorrhagia history cue if volunteered.",
      "Examination may also reveal the underlying cause such as IBD, malignancy, chronic kidney disease, or liver disease.",
    ],
    differentials: [
      "Iron deficiency anaemia from GI blood loss, menstrual loss, pregnancy, malabsorption, or poor intake.",
      "Anaemia of chronic disease, especially if inflammation, CKD, or malignancy is present.",
      "Thalassaemia trait, especially if microcytosis is disproportionate to anaemia.",
      "Less common: sideroblastic anaemia or lead exposure.",
    ],
    investigations: [
      "FBC with indices, blood film, reticulocytes.",
      "Ferritin, transferrin saturation, CRP, B12, folate, renal function.",
      "Coeliac screen and urinalysis where appropriate.",
      "Identify source: stool testing is not enough alone in adults; think upper and lower GI investigation when iron deficiency is confirmed and clinically indicated.",
      "CXR, ECG, BNP, or echo only if breathlessness suggests additional cardiopulmonary pathology.",
    ],
    management: {
      initial: [
        "Assess severity and stability: haemodynamic compromise, chest pain, syncope, or severe hypoxia need urgent action.",
        "If profoundly symptomatic or unstable, consider transfusion in the right clinical context.",
      ],
      definitive: [
        "Treat the cause as well as replacing iron.",
        "Oral iron is common first-line; IV iron if malabsorption, intolerance, ongoing losses, or need for faster repletion.",
      ],
      longTerm: [
        "Ensure haemoglobin and iron stores recover, then re-check response.",
        "Investigate or monitor the underlying cause such as menorrhagia, GI malignancy, coeliac disease, IBD, or CKD.",
      ],
      mdt: [
        "Primary care or acute medicine initially; gastroenterology, gynaecology, haematology, or specialty referral according to the likely source.",
      ],
    },
    prognosis: [
      "Anaemia itself usually improves if the cause is identified and treated.",
      "Prognosis depends more on the underlying driver, especially occult GI malignancy or chronic inflammatory disease.",
    ],
    pathophysiology: [
      "Microcytosis usually reflects impaired haemoglobin synthesis, most often from iron deficiency.",
      "Shortness of breath happens because reduced haemoglobin lowers oxygen-carrying capacity, so the body compensates with tachycardia and increased ventilatory drive.",
      "A severe anaemia can also precipitate angina or high-output heart failure in susceptible patients.",
    ],
    vivaQuestions: [
      "What are the likely causes of microcytic anaemia in this patient?",
      "Why does anaemia cause shortness of breath?",
      "What tests confirm iron deficiency and what tests look for the source?",
      "When would you consider blood transfusion or IV iron?",
      "What serious underlying cause must not be missed in an older adult with iron deficiency anaemia?",
    ],
    pitfalls: [
      "Do not stop at iron tablets without identifying the source of iron deficiency.",
      "Ferritin can be falsely normal in inflammation, so interpret iron studies in context.",
      "Breathlessness may not be due to anaemia alone; still consider concurrent heart or lung disease.",
    ],
  },
];

function stripTrailingPeriod(value) {
  return value.replace(/\.$/, "");
}

function uniqueItems(items) {
  return [...new Set(items.filter(Boolean))];
}

function hasCue(items, cue) {
  return items.some((item) => item.toLowerCase().includes(cue));
}

function ensurePrefix(items, prefix) {
  return items.map((item) =>
    item.startsWith(prefix) ? item : `${prefix}${item}`,
  );
}

const osceEnhancementsById = {
  "cardiac-device-sternotomy": {
    signsPrepend: [
      "Say what the scar or box most likely represents before moving to complications.",
    ],
    investigationsByCategory: {
      bedside: ["ECG first if the station suggests pacing, arrhythmia, or prosthetic-valve-related disease."],
    },
    vivaAppend: [
      "Examiner may ask: what operation or device do you think this is, and what bedside clues support that?",
    ],
  },
  "renal-transplant-dialysis": {
    signsPrepend: [
      "Comment on graft scar, fistula, dialysis access, and steroid or immunosuppression clues.",
    ],
    investigationsByCategory: {
      bedside: ["Urinalysis and focused assessment of fistula or graft site are high-yield bedside adjuncts."],
    },
  },
  "ibd-stoma": {
    signsPrepend: [
      "If a stoma is present, say the type, site, surrounding skin, and whether output appears high.",
    ],
    vivaAppend: [
      "Examiner may ask: how would you distinguish Crohn's disease from ulcerative colitis from bedside clues and surgical history?",
    ],
  },
  "total-hip-replacement": {
    signsPrepend: [
      "Identify the scar and say 'likely hip arthroplasty' before describing gait and function.",
    ],
  },
  "total-knee-replacement": {
    signsPrepend: [
      "Identify the midline scar and comment on function, gait, and current complications rather than range alone.",
    ],
  },
  "lung-cancer-lobectomy": {
    signsPrepend: [
      "If you see a thoracic scar, mention prior lobectomy / thoracotomy and look for recurrence or metastatic clues.",
    ],
  },
  "microcytic-anaemia-sob": {
    investigationsByCategory: {
      bloods: ["Prove iron deficiency, assess severity, and look for an inflammatory or renal contribution."],
    },
    vivaAppend: [
      "Examiner may ask: why can severe anaemia produce a flow murmur or precipitate heart failure?",
    ],
  },
};

function refineSummary(condition) {
  const base = stripTrailingPeriod(condition.summary);
  if (
    condition.clueTypes.includes("scar") ||
    condition.clueTypes.includes("device") ||
    condition.clueTypes.includes("transplant")
  ) {
    return `Bedside pattern: ${base}. Work backwards from the scar, device, or graft clue.`;
  }
  return `Bedside pattern: ${base}.`;
}

function refineSigns(condition) {
  const items = [...condition.signs];

  if (
    (condition.clueTypes.includes("scar") || condition.clueTypes.includes("device")) &&
    !hasCue(items, "scar") &&
    !hasCue(items, "device")
  ) {
    items.push(
      "Look for supporting scar, prosthesis, or device clues and say what underlying disease they imply.",
    );
  }

  if (condition.clueTypes.includes("transplant") && !hasCue(items, "transplant")) {
    items.push(
      "Look for graft site, immunosuppression clues, and complications of chronic immunosuppression.",
    );
  }

  const extra = osceEnhancementsById[condition.id]?.signsPrepend ?? [];
  return uniqueItems([...extra, ...items]);
}

function refineDifferentials(condition) {
  return uniqueItems(
    ensurePrefix(
      condition.differentials.map((item) => `${stripTrailingPeriod(item)}.`),
      "Differentiate from: ",
    ),
  );
}

function investigateCategory(item) {
  const text = item.toLowerCase();

  if (
    [
      "ecg",
      "abg",
      "pulse oximetry",
      "observations",
      "obs",
      "urinalysis",
      "urine dip",
      "urine protein",
      "peak flow",
      "sputum",
      "monofilament",
      "abpi",
      "ankle-brachial",
      "probe-to-bone",
      "six-minute walk",
      "6-minute walk",
      "foot risk assessment",
    ].some((keyword) => text.includes(keyword))
  ) {
    return "bedside";
  }

  if (
    [
      "fbc",
      "u&e",
      "u&es",
      "lft",
      "crp",
      "esr",
      "bnp",
      "nt-probnp",
      "hba1c",
      "glucose",
      "blood culture",
      "blood cultures",
      "coag",
      "inr",
      "albumin",
      "ferritin",
      "transferrin",
      "b12",
      "folate",
      "tsh",
      "free t4",
      "free t3",
      "antibody",
      "antibodies",
      "immunoglobulin",
      "renal function",
      "lipid",
      "calcium",
      "phosphate",
      "drug level",
      "drug levels",
      "acth",
      "igf-1",
      "gh suppression",
      "reticulocyte",
      "blood film",
      "iron studies",
      "viral",
      "autoimmune",
      "screen",
      "markers",
    ].some((keyword) => text.includes(keyword))
  ) {
    return "bloods";
  }

  return "imagingSpecial";
}

function refineInvestigations(condition) {
  const grouped = {
    bedside: [],
    bloods: [],
    imagingSpecial: [],
  };

  for (const item of condition.investigations) {
    grouped[investigateCategory(item)].push(item);
  }

  const extraGroups = osceEnhancementsById[condition.id]?.investigationsByCategory;
  if (extraGroups) {
    for (const [category, items] of Object.entries(extraGroups)) {
      grouped[category].push(...items);
    }
  }

  return {
    bedside: uniqueItems(grouped.bedside),
    bloods: uniqueItems(grouped.bloods),
    imagingSpecial: uniqueItems(grouped.imagingSpecial),
  };
}

function isImmediateManagement(item) {
  const text = item.toLowerCase();
  return [
    "assess",
    "stabil",
    "urgent",
    "emergency",
    "red-flag",
    "acute",
    "admission",
    "unwell",
    "protect the cornea",
    "crisis",
    "decompensation",
    "limb-threatening",
    "exclude infection",
    "check whether",
    "clarify whether",
    "identify",
  ].some((keyword) => text.includes(keyword));
}

function isConservativeManagement(item) {
  const text = item.toLowerCase();
  return [
    "smoking cessation",
    "physio",
    "physiotherapy",
    "rehab",
    "exercise",
    "weight",
    "monitor",
    "surveillance",
    "follow-up",
    "review",
    "education",
    "vaccination",
    "footwear",
    "splint",
    "orthosis",
    "lifestyle",
    "walking aid",
    "falls prevention",
    "nutrition",
    "off-loading",
    "pressure relief",
    "self-management",
    "counselling",
    "bone health",
    "risk reduction",
    "risk-factor",
    "serial echo",
    "serial",
    "airway clearance",
    "podiatry",
  ].some((keyword) => text.includes(keyword));
}

function isMedicalManagement(item) {
  const text = item.toLowerCase();
  return [
    "diuretic",
    "beta-blocker",
    "acei",
    "arb",
    "arni",
    "mra",
    "sglt2",
    "anticoag",
    "antiplatelet",
    "statin",
    "steroid",
    "antibiotic",
    "bronchodilator",
    "inhaled",
    "pyridostigmine",
    "levothyroxine",
    "radioiodine",
    "dmard",
    "biologic",
    "immunosuppression",
    "antifibrotic",
    "analgesia",
    "nsaid",
    "oxygen",
    "vaccination",
    "medical therapy",
    "drug treatment",
    "rate/rhythm control",
    "blood pressure",
    "treat heart failure",
    "loop diuretic",
    "symptomatic control",
    "iv iron",
    "oral iron",
    "somatostatin",
  ].some((keyword) => text.includes(keyword));
}

function isProceduralManagement(item) {
  const text = item.toLowerCase();
  return [
    "surgery",
    "surgical",
    "replacement",
    "repair",
    "tavi",
    "thymectomy",
    "decompression",
    "injection",
    "aspiration",
    "revascularisation",
    "revision",
    "arthroplasty",
    "manipulation",
    "release",
    "ablation",
    "valvotomy",
    "transplant",
    "endovascular",
    "fasciectomy",
    "fasciotomy",
    "casting",
    "total contact cast",
    "debridement",
    "arthroscopic",
    "procedure",
    "intervention",
    "operation",
    "imaging-guided",
  ].some((keyword) => text.includes(keyword));
}

function refineManagement(condition) {
  const grouped = {
    immediate: [],
    conservative: [],
    medical: [],
    surgicalProcedural: [],
  };

  const sourceEntries = [
    ...condition.management.initial.map((item) => ({ item, source: "initial" })),
    ...condition.management.definitive.map((item) => ({ item, source: "definitive" })),
    ...condition.management.longTerm.map((item) => ({ item, source: "longTerm" })),
    ...condition.management.mdt.map((item) => ({ item, source: "mdt" })),
  ];

  for (const { item, source } of sourceEntries) {
    if (isImmediateManagement(item) || source === "initial") {
      grouped.immediate.push(item);
      continue;
    }
    if (isProceduralManagement(item)) {
      grouped.surgicalProcedural.push(item);
      continue;
    }
    if (isMedicalManagement(item)) {
      grouped.medical.push(item);
      continue;
    }
    if (isConservativeManagement(item) || source === "longTerm" || source === "mdt") {
      grouped.conservative.push(item);
      continue;
    }
    if (source === "definitive") {
      grouped.medical.push(item);
      continue;
    }
    grouped.conservative.push(item);
  }

  return {
    immediate: uniqueItems(grouped.immediate),
    conservative: uniqueItems(grouped.conservative),
    medical: uniqueItems(grouped.medical),
    surgicalProcedural: uniqueItems(grouped.surgicalProcedural),
  };
}

function refinePrognosis(condition) {
  return uniqueItems(
    condition.prognosis.map((item, index) =>
      index === 0 ? `Viva line: ${stripTrailingPeriod(item)}.` : item,
    ),
  );
}

function refinePathophysiology(condition) {
  return uniqueItems(
    condition.pathophysiology.map((item, index) =>
      index === 0 ? `Exam explanation: ${stripTrailingPeriod(item)}.` : item,
    ),
  );
}

function refineVivaQuestions(condition) {
  const enhanced =
    osceEnhancementsById[condition.id]?.vivaAppend ?? [];
  return uniqueItems(
    ensurePrefix(
      [...condition.vivaQuestions, ...enhanced].map((item) => stripTrailingPeriod(item)),
      "Examiner may ask: ",
    ).map((item) => `${item}?`.replace(/\?\?$/, "?")),
  );
}

function refinePitfalls(condition) {
  return uniqueItems(
    condition.pitfalls.map((item) => {
      if (/^(Do not|Remember|Always|This|A )/.test(item)) {
        return item;
      }
      return `Do not forget: ${stripTrailingPeriod(item)}.`;
    }),
  );
}

const conditions = rawConditions.map((condition) => ({
  ...condition,
  summary: refineSummary(condition),
  signs: refineSigns(condition),
  differentials: refineDifferentials(condition),
  investigations: refineInvestigations(condition),
  management: refineManagement(condition),
  prognosis: refinePrognosis(condition),
  pathophysiology: refinePathophysiology(condition),
  vivaQuestions: refineVivaQuestions(condition),
  pitfalls: refinePitfalls(condition),
}));

const state = {
  search: "",
  system: "all",
  frequency: "all",
  clue: "all",
  focusLabel: null,
  selectedId: conditions[0].id,
  activeTab: "signs",
  selfTest: false,
  revealedByCondition: {},
  questionBanner: null,
};

const elements = {
  systemNav: document.querySelector("#systemNav"),
  clearSystemButton: document.querySelector("#clearSystemButton"),
  heroStats: document.querySelector("#heroStats"),
  systemFilter: document.querySelector("#systemFilter"),
  frequencyFilter: document.querySelector("#frequencyFilter"),
  clueFilter: document.querySelector("#clueFilter"),
  searchInput: document.querySelector("#searchInput"),
  randomConditionButton: document.querySelector("#randomConditionButton"),
  randomQuestionButton: document.querySelector("#randomQuestionButton"),
  selfTestButton: document.querySelector("#selfTestButton"),
  questionBanner: document.querySelector("#questionBanner"),
  resultsHeading: document.querySelector("#resultsHeading"),
  resultsMeta: document.querySelector("#resultsMeta"),
  conditionGrid: document.querySelector("#conditionGrid"),
  detailPanel: document.querySelector("#detailPanel"),
  miniChips: Array.from(document.querySelectorAll("[data-quick-filter]")),
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function flattenCondition(condition) {
  return [
    condition.name,
    condition.summary,
    condition.systems.join(" "),
    condition.labels.join(" "),
    condition.clueTypes.join(" "),
    condition.signs.join(" "),
    condition.differentials.join(" "),
    Object.values(condition.investigations).flat().join(" "),
    Object.values(condition.management).flat().join(" "),
    condition.prognosis.join(" "),
    condition.pathophysiology.join(" "),
    condition.vivaQuestions.join(" "),
    condition.pitfalls.join(" "),
  ]
    .join(" ")
    .toLowerCase();
}

function conditionMatches(condition) {
  const matchesSystem =
    state.system === "all" || condition.systems.includes(state.system);
  const matchesFrequency =
    state.frequency === "all" || condition.frequency.includes(state.frequency);
  const matchesClue =
    state.clue === "all" || condition.clueTypes.includes(state.clue);
  const matchesFocus =
    !state.focusLabel || condition.labels.includes(state.focusLabel);
  const haystack = flattenCondition(condition);
  const matchesSearch =
    !state.search || haystack.includes(state.search.trim().toLowerCase());

  return (
    matchesSystem &&
    matchesFrequency &&
    matchesClue &&
    matchesFocus &&
    matchesSearch
  );
}

function getVisibleConditions() {
  return conditions.filter(conditionMatches);
}

function getSelectedCondition(visibleConditions) {
  if (!visibleConditions.length) {
    return null;
  }

  const selected =
    visibleConditions.find((condition) => condition.id === state.selectedId) ??
    visibleConditions[0];

  if (selected.id !== state.selectedId) {
    state.selectedId = selected.id;
    if (state.selfTest) {
      resetReveals(selected.id);
    }
  }

  return selected;
}

function resetReveals(conditionId) {
  state.revealedByCondition[conditionId] = [];
}

function getRevealedTabs(conditionId) {
  if (!state.revealedByCondition[conditionId]) {
    state.revealedByCondition[conditionId] = [];
  }
  return state.revealedByCondition[conditionId];
}

function isTabRevealed(conditionId, tabId) {
  if (!state.selfTest) {
    return true;
  }
  return getRevealedTabs(conditionId).includes(tabId);
}

function revealCurrentTab(conditionId) {
  const revealed = getRevealedTabs(conditionId);
  if (!revealed.includes(state.activeTab)) {
    revealed.push(state.activeTab);
  }
  render();
}

function revealNextTab(conditionId) {
  const revealed = getRevealedTabs(conditionId);
  const nextTab = tabs.find((tab) => !revealed.includes(tab.id));
  if (!nextTab) {
    return;
  }
  revealed.push(nextTab.id);
  state.activeTab = nextTab.id;
  render();
}

function revealAllTabs(conditionId) {
  state.revealedByCondition[conditionId] = tabs.map((tab) => tab.id);
  render();
}

function hideAllTabs(conditionId) {
  resetReveals(conditionId);
  render();
}

function labelClass(label) {
  if (label.includes("Classic") || label.includes("Linked")) {
    return "pill pill--gold";
  }
  if (label.includes("Device") || label.includes("Transplant") || label.includes("prosthesis")) {
    return "pill pill--teal";
  }
  if (label.includes("Must") || label.includes("Very common")) {
    return "pill pill--accent";
  }
  return "pill";
}

function renderHeroStats() {
  const scarDeviceTransplantCount = conditions.filter(
    (condition) => condition.clueTypes.length > 0,
  ).length;
  elements.heroStats.innerHTML = `
    <div class="stat-card">
      <strong>${conditions.length}</strong>
      <span>Seeded cards</span>
    </div>
    <div class="stat-card">
      <strong>${systemsOrder.length - 1}</strong>
      <span>Exam systems</span>
    </div>
    <div class="stat-card">
      <strong>${scarDeviceTransplantCount}</strong>
      <span>Scar / device / transplant clues</span>
    </div>
  `;
}

function renderSystemOptions() {
  elements.systemFilter.innerHTML = `
    <option value="all">All systems</option>
    ${systemsOrder
      .map(
        (system) =>
          `<option value="${escapeHtml(system)}">${escapeHtml(system)}</option>`,
      )
      .join("")}
  `;
  elements.systemFilter.value = state.system;
}

function renderSystemNav() {
  elements.systemNav.innerHTML = systemsOrder
    .map((system) => {
      const count = conditions.filter((condition) =>
        condition.systems.includes(system),
      ).length;
      const activeClass = state.system === system ? "is-active" : "";
      return `
        <button class="system-button ${activeClass}" data-system="${escapeHtml(system)}" type="button">
          <span>${escapeHtml(system)}</span>
          <span class="system-button__count">${count}</span>
        </button>
      `;
    })
    .join("");

  elements.systemNav
    .querySelectorAll("[data-system]")
    .forEach((button) =>
      button.addEventListener("click", () => {
        state.system = button.dataset.system;
        elements.systemFilter.value = state.system;
        render();
      }),
    );
}

function resultsDescription(visibleConditions) {
  const activeBits = [];
  if (state.system !== "all") activeBits.push(state.system);
  if (state.frequency !== "all")
    activeBits.push(
      state.frequency === "common" ? "very common focus" : "classic focus",
    );
  if (state.clue !== "all") activeBits.push(`${state.clue} clues`);
  if (state.focusLabel) activeBits.push(state.focusLabel.toLowerCase());
  if (state.search) activeBits.push(`search: "${state.search}"`);

  elements.resultsHeading.textContent =
    visibleConditions.length === conditions.length && !activeBits.length
      ? "Showing all cards"
      : `${visibleConditions.length} filtered card${
          visibleConditions.length === 1 ? "" : "s"
        }`;

  elements.resultsMeta.textContent = activeBits.length
    ? `Filters: ${activeBits.join(" • ")}`
    : "Use sidebar, search, or filters to narrow the finals set.";
}

function renderCards(visibleConditions) {
  if (!visibleConditions.length) {
    elements.conditionGrid.innerHTML = `
      <div class="empty-state">
        No cards match the current filters. Clear a filter or broaden the search.
      </div>
    `;
    return;
  }

  elements.conditionGrid.innerHTML = visibleConditions
    .map((condition) => {
      const selectedClass =
        condition.id === state.selectedId ? "is-selected" : "";
      return `
        <button class="condition-card ${selectedClass}" type="button" data-condition-id="${condition.id}">
          <div class="condition-card__top">
            <h4>${escapeHtml(condition.name)}</h4>
            <span class="filter-pill ${
              condition.frequency.includes("classic") ? "" : "is-muted"
            }">
              ${condition.frequency.includes("classic") ? "Classic" : "Common"}
            </span>
          </div>
          <p>${escapeHtml(condition.summary)}</p>
          <div class="pill-row">
            ${condition.labels
              .slice(0, 3)
              .map(
                (label) =>
                  `<span class="${labelClass(label)}">${escapeHtml(label)}</span>`,
              )
              .join("")}
          </div>
          <div class="pill-row condition-card__systems">
            ${condition.systems
              .slice(0, 3)
              .map((system) => `<span class="pill">${escapeHtml(system)}</span>`)
              .join("")}
          </div>
        </button>
      `;
    })
    .join("");

  elements.conditionGrid
    .querySelectorAll("[data-condition-id]")
    .forEach((card) =>
      card.addEventListener("click", () => {
        state.selectedId = card.dataset.conditionId;
        state.activeTab = "signs";
        if (state.selfTest) {
          resetReveals(state.selectedId);
        }
        render();
      }),
    );
}

function getTabSections(condition, tabId) {
  switch (tabId) {
    case "signs":
      return [{ heading: "Key signs / examination clues", items: condition.signs }];
    case "differentials":
      return [
        { heading: "Differentials to keep in mind", items: condition.differentials },
      ];
    case "investigations":
      return [
        {
          heading: "Investigations",
          groups: [
            { heading: "Bedside", items: condition.investigations.bedside },
            { heading: "Bloods", items: condition.investigations.bloods },
            {
              heading: "Imaging / special tests",
              items: condition.investigations.imagingSpecial,
            },
          ].filter((group) => group.items.length > 0),
        },
      ];
    case "management":
      return [
        {
          heading: "Management",
          groups: [
            { heading: "Immediate", items: condition.management.immediate },
            { heading: "Conservative", items: condition.management.conservative },
            { heading: "Medical", items: condition.management.medical },
            {
              heading: "Surgical / procedural",
              items: condition.management.surgicalProcedural,
            },
          ].filter((group) => group.items.length > 0),
        },
      ];
    case "prognosis":
      return [{ heading: "Prognosis", items: condition.prognosis }];
    case "pathophysiology":
      return [{ heading: "Pathophysiology", items: condition.pathophysiology }];
    case "viva":
      return [{ heading: "Examiner-style viva questions", items: condition.vivaQuestions }];
    case "pitfalls":
      return [{ heading: "Pitfalls / high-yield extras", items: condition.pitfalls }];
    default:
      return [];
  }
}

function renderSectionCards(sections) {
  return sections
    .map(
      (section) => `
        <section class="section-card">
          <h4>${escapeHtml(section.heading)}</h4>
          ${
            section.groups
              ? `
                <div class="section-groups">
                  ${section.groups
                    .map(
                      (group) => `
                        <div class="section-group">
                          <h5>${escapeHtml(group.heading)}</h5>
                          <ul>
                            ${group.items
                              .map((item) => `<li>${escapeHtml(item)}</li>`)
                              .join("")}
                          </ul>
                        </div>
                      `,
                    )
                    .join("")}
                </div>
              `
              : `
                <ul>
                  ${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
                </ul>
              `
          }
        </section>
      `,
    )
    .join("");
}

function renderDetailPanel(condition) {
  if (!condition) {
    elements.detailPanel.innerHTML = `
      <div class="empty-state">
        Pick a card to start revising.
      </div>
    `;
    return;
  }

  const sections = getTabSections(condition, state.activeTab);
  const isRevealed = isTabRevealed(condition.id, state.activeTab);
  const revealedCount = getRevealedTabs(condition.id).length;

  elements.detailPanel.innerHTML = `
    <div class="detail-header">
      <p class="eyebrow">${escapeHtml(condition.systems.join(" • "))}</p>
      <div class="key-grid">
        <div>
          <h3>${escapeHtml(condition.name)}</h3>
          <p class="detail-summary">${escapeHtml(condition.summary)}</p>
        </div>
        <div>
          <div class="pill-row">
            ${condition.labels
              .map(
                (label) =>
                  `<span class="${labelClass(label)}">${escapeHtml(label)}</span>`,
              )
              .join("")}
            ${condition.clueTypes
              .map((clue) => `<span class="pill pill--teal">${escapeHtml(clue)}</span>`)
              .join("")}
          </div>
        </div>
      </div>
      <div class="detail-actions">
        <button class="secondary-button" type="button" id="detailRandomQuestion">Random viva</button>
        ${
          state.selfTest
            ? `
              <button class="secondary-button" type="button" id="revealCurrentButton">Reveal current tab</button>
              <button class="secondary-button" type="button" id="revealNextButton">Reveal next section</button>
              <button class="secondary-button" type="button" id="revealAllButton">Reveal all</button>
              <button class="secondary-button" type="button" id="hideAllButton">Hide answers</button>
              <span class="pill">${revealedCount}/${tabs.length} revealed</span>
            `
            : ""
        }
      </div>
    </div>

    <div class="tabs">
      ${tabs
        .map(
          (tab) => `
            <button class="tab-button ${
              tab.id === state.activeTab ? "is-active" : ""
            }" type="button" data-tab-id="${tab.id}">
              ${escapeHtml(tab.label)}
            </button>
          `,
        )
        .join("")}
    </div>

    <div class="tab-panel">
      ${
        state.selfTest && !isRevealed
          ? `
            <section class="reveal-card">
              <h4>Pause and answer aloud before you reveal</h4>
              <ul>
                <li>Use the tab title as your viva prompt.</li>
                <li>State your answer as if the examiner has just asked the follow-up.</li>
                <li>Reveal one section at a time to keep recall active.</li>
              </ul>
              <div class="reveal-actions">
                <button class="primary-button" type="button" id="revealCurrentInline">Reveal ${escapeHtml(
                  tabs.find((tab) => tab.id === state.activeTab)?.label ?? "tab",
                )}</button>
                <button class="secondary-button" type="button" id="revealNextInline">Reveal next section</button>
              </div>
            </section>
          `
          : renderSectionCards(sections)
      }
    </div>
  `;

  elements.detailPanel
    .querySelectorAll("[data-tab-id]")
    .forEach((button) =>
      button.addEventListener("click", () => {
        state.activeTab = button.dataset.tabId;
        render();
      }),
    );

  elements.detailPanel
    .querySelector("#detailRandomQuestion")
    ?.addEventListener("click", () => randomVivaQuestion(condition));

  elements.detailPanel
    .querySelector("#revealCurrentButton")
    ?.addEventListener("click", () => revealCurrentTab(condition.id));
  elements.detailPanel
    .querySelector("#revealNextButton")
    ?.addEventListener("click", () => revealNextTab(condition.id));
  elements.detailPanel
    .querySelector("#revealAllButton")
    ?.addEventListener("click", () => revealAllTabs(condition.id));
  elements.detailPanel
    .querySelector("#hideAllButton")
    ?.addEventListener("click", () => hideAllTabs(condition.id));
  elements.detailPanel
    .querySelector("#revealCurrentInline")
    ?.addEventListener("click", () => revealCurrentTab(condition.id));
  elements.detailPanel
    .querySelector("#revealNextInline")
    ?.addEventListener("click", () => revealNextTab(condition.id));
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function randomCondition() {
  const visible = getVisibleConditions();
  if (!visible.length) {
    return;
  }
  const pick = randomItem(visible);
  state.selectedId = pick.id;
  state.activeTab = "signs";
  if (state.selfTest) {
    resetReveals(pick.id);
  }
  render();
}

function randomVivaQuestion(selectedCondition = null) {
  const visible = getVisibleConditions();
  if (!visible.length) {
    return;
  }
  const sourceCondition = selectedCondition ?? randomItem(visible);
  const question = randomItem(sourceCondition.vivaQuestions);
  state.questionBanner = {
    conditionId: sourceCondition.id,
    conditionName: sourceCondition.name,
    question,
  };
  renderQuestionBanner();
}

function renderQuestionBanner() {
  if (!state.questionBanner) {
    elements.questionBanner.classList.add("hidden");
    elements.questionBanner.innerHTML = "";
    return;
  }

  elements.questionBanner.classList.remove("hidden");
  elements.questionBanner.innerHTML = `
    <div class="question-banner__header">
      <p class="eyebrow">Random Viva Prompt</p>
      <button class="ghost-button" type="button" id="dismissQuestionBanner">Dismiss</button>
    </div>
    <p><strong>${escapeHtml(state.questionBanner.conditionName)}:</strong> ${escapeHtml(
      state.questionBanner.question,
    )}</p>
  `;

  elements.questionBanner
    .querySelector("#dismissQuestionBanner")
    ?.addEventListener("click", () => {
      state.questionBanner = null;
      renderQuestionBanner();
    });
}

function renderQuickFilters() {
  elements.miniChips.forEach((chip) => {
    const type = chip.dataset.quickFilter;
    const active =
      (type === "must" && state.focusLabel === "Must know") ||
      (type === "classic" && state.frequency === "classic") ||
      (type === "scar" && state.clue === "scar") ||
      (type === "device" && state.clue === "device") ||
      (type === "transplant" && state.clue === "transplant");

    chip.classList.toggle("is-active", active);
  });
}

function render() {
  const visibleConditions = getVisibleConditions();
  const selectedCondition = getSelectedCondition(visibleConditions);

  renderHeroStats();
  renderSystemNav();
  renderQuickFilters();
  resultsDescription(visibleConditions);
  renderCards(visibleConditions);
  renderDetailPanel(selectedCondition);
  renderQuestionBanner();

  elements.selfTestButton.textContent = state.selfTest
    ? "Self-Test On"
    : "Self-Test Off";
  elements.selfTestButton.classList.toggle("is-active", state.selfTest);
  elements.selfTestButton.setAttribute("aria-pressed", String(state.selfTest));
}

function bindEvents() {
  elements.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    render();
  });

  elements.systemFilter.addEventListener("change", (event) => {
    state.system = event.target.value;
    render();
  });

  elements.frequencyFilter.addEventListener("change", (event) => {
    state.frequency = event.target.value;
    render();
  });

  elements.clueFilter.addEventListener("change", (event) => {
    state.clue = event.target.value;
    render();
  });

  elements.randomConditionButton.addEventListener("click", randomCondition);
  elements.randomQuestionButton.addEventListener("click", () =>
    randomVivaQuestion(getSelectedCondition(getVisibleConditions())),
  );

  elements.selfTestButton.addEventListener("click", () => {
    state.selfTest = !state.selfTest;
    if (state.selfTest) {
      resetReveals(state.selectedId);
    }
    render();
  });

  elements.clearSystemButton.addEventListener("click", () => {
    state.system = "all";
    elements.systemFilter.value = "all";
    render();
  });

  elements.miniChips.forEach((chip) =>
    chip.addEventListener("click", () => {
      const type = chip.dataset.quickFilter;
      if (type === "must") {
        state.focusLabel =
          state.focusLabel === "Must know" ? null : "Must know";
      } else if (type === "classic") {
        state.frequency = state.frequency === "classic" ? "all" : "classic";
        elements.frequencyFilter.value = state.frequency;
      } else {
        state.clue = state.clue === type ? "all" : type;
        elements.clueFilter.value = state.clue;
      }
      render();
    }),
  );
}

renderSystemOptions();
bindEvents();
render();

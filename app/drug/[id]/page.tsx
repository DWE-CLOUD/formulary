import DrugDetailClient from '../../../components/DrugDetailClient';

export async function generateStaticParams() {
  return [
    { id: 'metformin-hcl' },
    { id: 'lisinopril-ace' },
    { id: 'atorvastatin-cal' },
    { id: 'omeprazole-ppi' }
  ];
}

interface DrugDetails {
  [key: string]: {
    name: string;
    genericName: string;
    chemicalName: string;
    strength: string;
    manufacturer: string;
    tier: string;
    copay: string;
    status: string;
    description: string;
    mechanism: string;
    indications: string[];
    dosage: {
      initial: string;
      maintenance: string;
      maximum: string;
    };
    sideEffects: {
      common: string[];
      serious: string[];
    };
    contraindications: string[];
    interactions: string[];
    monitoring: string[];
    pregnancy: string;
    storage: string;
    halfLife: string;
    bioavailability: string;
  };
}

export default function DrugDetail({ params }: { params: { id: string } }) {
  const drugData: DrugDetails = {
    'metformin-hcl': {
      name: 'Metformin HCl',
      genericName: 'Metformin Hydrochloride',
      chemicalName: 'N,N-dimethylimidodicarbonimidic diamide hydrochloride',
      strength: '500mg',
      manufacturer: 'Teva Pharma',
      tier: 'Tier 1',
      copay: '$10',
      status: 'Preferred',
      description: 'Metformin is a first-line antidiabetic medication that belongs to the biguanide class. It works primarily by decreasing hepatic glucose production and improving insulin sensitivity.',
      mechanism: 'Activates AMP-activated protein kinase (AMPK), leading to decreased hepatic gluconeogenesis and increased glucose uptake by muscles.',
      indications: ['Type 2 Diabetes Mellitus', 'Prediabetes', 'Polycystic Ovary Syndrome (off-label)', 'Metabolic Syndrome (off-label)'],
      dosage: {
        initial: '500mg twice daily with meals',
        maintenance: '1000mg twice daily',
        maximum: '2550mg daily (divided doses)'
      },
      sideEffects: {
        common: ['Gastrointestinal upset', 'Nausea', 'Diarrhea', 'Metallic taste', 'Decreased appetite'],
        serious: ['Lactic acidosis (rare)', 'Vitamin B12 deficiency', 'Kidney dysfunction']
      },
      contraindications: ['Severe kidney disease (eGFR <30)', 'Metabolic acidosis', 'Diabetic ketoacidosis', 'Severe liver disease'],
      interactions: ['Alcohol (increases lactic acidosis risk)', 'Contrast dye procedures', 'Cimetidine', 'Furosemide'],
      monitoring: ['Kidney function every 3-6 months', 'Vitamin B12 levels annually', 'Blood glucose levels', 'Signs of lactic acidosis'],
      pregnancy: 'Category B - Generally safe in pregnancy',
      storage: 'Store at room temperature, protect from moisture',
      halfLife: '4-9 hours',
      bioavailability: '50-60%'
    },
    'lisinopril-ace': {
      name: 'Lisinopril ACE',
      genericName: 'Lisinopril Tablets',
      chemicalName: 'L-lysyl-L-proline dihydrate',
      strength: '500mg',
      manufacturer: 'Lupin Pharma',
      tier: 'Tier 1',
      copay: '$10',
      status: 'Generic',
      description: 'Lisinopril is an ACE inhibitor used to treat high blood pressure and heart failure. It helps relax blood vessels and reduces the workload on the heart.',
      mechanism: 'Inhibits angiotensin-converting enzyme (ACE), preventing conversion of angiotensin I to angiotensin II, resulting in vasodilation.',
      indications: ['Hypertension', 'Heart failure', 'Post-myocardial infarction', 'Diabetic nephropathy'],
      dosage: {
        initial: '10mg once daily',
        maintenance: '20-40mg once daily',
        maximum: '80mg daily'
      },
      sideEffects: {
        common: ['Dry cough', 'Dizziness', 'Headache', 'Fatigue', 'Nausea'],
        serious: ['Angioedema', 'Hyperkalemia', 'Acute kidney injury', 'Hypotension']
      },
      contraindications: ['History of angioedema', 'Pregnancy', 'Bilateral renal artery stenosis'],
      interactions: ['NSAIDs', 'Potassium supplements', 'Diuretics', 'Lithium'],
      monitoring: ['Blood pressure', 'Kidney function', 'Serum potassium', 'Signs of angioedema'],
      pregnancy: 'Category D - Avoid in pregnancy',
      storage: 'Store at room temperature, protect from moisture',
      halfLife: '12 hours',
      bioavailability: '25%'
    },
    'atorvastatin-cal': {
      name: 'Atorvastatin Cal',
      genericName: 'Atorvastatin Calcium',
      chemicalName: 'Fluorophenyl-pyrrol-heptanoic acid calcium salt',
      strength: '500mg',
      manufacturer: 'Pfizer Pharma',
      tier: 'Tier 2',
      copay: '$25',
      status: 'Brand',
      description: 'Atorvastatin is a statin medication used to lower cholesterol and reduce cardiovascular risk. It inhibits HMG-CoA reductase enzyme.',
      mechanism: 'Inhibits HMG-CoA reductase, the rate-limiting enzyme in cholesterol synthesis, reducing LDL cholesterol production.',
      indications: ['Hyperlipidemia', 'Primary prevention of CVD', 'Secondary prevention of CVD', 'Familial hypercholesterolemia'],
      dosage: {
        initial: '20mg once daily',
        maintenance: '40-80mg once daily',
        maximum: '80mg daily'
      },
      sideEffects: {
        common: ['Muscle pain', 'Headache', 'Nausea', 'Diarrhea', 'Upper respiratory infection'],
        serious: ['Rhabdomyolysis', 'Liver toxicity', 'Diabetes mellitus', 'Cognitive impairment']
      },
      contraindications: ['Active liver disease', 'Pregnancy and nursing', 'Concurrent cyclosporine use'],
      interactions: ['Warfarin', 'Digoxin', 'Cyclosporine', 'Gemfibrozil'],
      monitoring: ['Liver function tests', 'Lipid panel', 'Creatine kinase if symptoms', 'Blood glucose'],
      pregnancy: 'Category X - Contraindicated in pregnancy',
      storage: 'Store at room temperature, protect from light',
      halfLife: '14 hours',
      bioavailability: '14%'
    },
    'omeprazole-ppi': {
      name: 'Omeprazole PPI',
      genericName: 'Omeprazole Capsules',
      chemicalName: 'Methoxy-pyridinyl-benzimidazole sulfone',
      strength: '500mg',
      manufacturer: 'Astra Pharma',
      tier: 'Tier 1',
      copay: '$10',
      status: 'Preferred',
      description: 'Omeprazole is a proton pump inhibitor that reduces stomach acid production. Used to treat GERD, ulcers, and acid-related conditions.',
      mechanism: 'Irreversibly binds to and inhibits hydrogen-potassium ATPase (proton pump) in gastric parietal cells.',
      indications: ['GERD', 'Peptic ulcer disease', 'H. pylori eradication', 'Zollinger-Ellison syndrome'],
      dosage: {
        initial: '20mg once daily before meals',
        maintenance: '20-40mg once daily',
        maximum: '120mg daily (divided doses)'
      },
      sideEffects: {
        common: ['Headache', 'Diarrhea', 'Nausea', 'Abdominal pain', 'Flatulence'],
        serious: ['C. difficile infection', 'Bone fractures', 'Hypomagnesemia', 'Kidney disease']
      },
      contraindications: ['Hypersensitivity to PPIs', 'Concurrent rilpivirine use'],
      interactions: ['Clopidogrel', 'Warfarin', 'Phenytoin', 'Ketoconazole'],
      monitoring: ['Magnesium levels (long-term use)', 'Bone density (long-term use)', 'Symptom resolution'],
      pregnancy: 'Category C - Use if benefits outweigh risks',
      storage: 'Store at room temperature in dry place',
      halfLife: '0.5-1 hour',
      bioavailability: '35-40%'
    }
  };

  const drug = drugData[params.id] || drugData['metformin-hcl'];

  return (
    <div>
      <span style={{ display: 'none' }}>server-rendered</span>
      <DrugDetailClient drug={drug} />
    </div>
  );
}
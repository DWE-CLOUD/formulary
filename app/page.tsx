'use client';

import React, { useState } from 'react';
import { Search, Filter, Pill, ChevronRight, X, Activity, DollarSign, AlertCircle, Shield, Calendar, Clock } from 'lucide-react';

export default function Page() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedDrug, setSelectedDrug] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const drugs = [
    {
      id: 'metformin',
      name: 'Metformin',
      genericName: 'Metformin Hydrochloride',
      strength: '500mg, 850mg, 1000mg',
      manufacturer: 'Various',
      description: 'First-line antidiabetic medication that decreases hepatic glucose production and increases insulin sensitivity.',
      useCase: 'Type 2 diabetes mellitus, prediabetes, polycystic ovary syndrome (PCOS)',
      copay: '$4',
      tier: 'Tier 1',
      status: 'Generic',
      tierDescription: 'Generic medications with lowest cost',
      chemicalName: 'N,N-dimethylimidodicarbonimidic diamide',
      sideEffects: 'Gastrointestinal disturbances (nausea, diarrhea), metallic taste, vitamin B12 deficiency with long-term use',
      contraindications: 'Severe renal impairment (eGFR <30), metabolic acidosis, diabetic ketoacidosis'
    },
    {
      id: 'lisinopril',
      name: 'Lisinopril',
      genericName: 'Lisinopril',
      strength: '5mg, 10mg, 20mg, 40mg',
      manufacturer: 'Various',
      description: 'ACE inhibitor used for hypertension and heart failure management.',
      useCase: 'Hypertension, heart failure, diabetic nephropathy, post-myocardial infarction',
      copay: '$4',
      tier: 'Tier 1',
      status: 'Generic',
      tierDescription: 'Generic medications with lowest cost',
      chemicalName: '(S)-1-[N²-(1-carboxy-3-phenylpropyl)-L-lysyl]-L-proline dihydrate',
      sideEffects: 'Dry cough, hyperkalemia, angioedema (rare), hypotension, dizziness',
      contraindications: 'Angioedema history, bilateral renal artery stenosis, pregnancy'
    },
    {
      id: 'atorvastatin',
      name: 'Atorvastatin',
      genericName: 'Atorvastatin Calcium',
      strength: '10mg, 20mg, 40mg, 80mg',
      manufacturer: 'Various',
      description: 'HMG-CoA reductase inhibitor (statin) for cholesterol management.',
      useCase: 'Hyperlipidemia, cardiovascular disease prevention, familial hypercholesterolemia',
      copay: '$4',
      tier: 'Tier 1',
      status: 'Generic',
      tierDescription: 'Generic medications with lowest cost',
      chemicalName: '[R-(R*,R*)]-2-(4-fluorophenyl)-β,δ-dihydroxy-5-(1-methylethyl)-3-phenyl-4-[(phenylamino)carbonyl]-1H-pyrrole-1-heptanoic acid',
      sideEffects: 'Muscle pain, elevated liver enzymes, rhabdomyolysis (rare), memory issues',
      contraindications: 'Active liver disease, pregnancy, breastfeeding, concurrent cyclosporine use'
    },
    {
      id: 'omeprazole',
      name: 'Omeprazole',
      genericName: 'Omeprazole',
      strength: '20mg, 40mg',
      manufacturer: 'Various',
      description: 'Proton pump inhibitor that reduces stomach acid production.',
      useCase: 'GERD, peptic ulcers, Zollinger-Ellison syndrome, H. pylori eradication',
      copay: '$4',
      tier: 'Tier 1',
      status: 'Generic',
      tierDescription: 'Generic medications with lowest cost',
      chemicalName: '5-methoxy-2-[[(4-methoxy-3,5-dimethyl-2-pyridinyl)methyl]sulfinyl]-1H-benzimidazole',
      sideEffects: 'Headache, nausea, diarrhea, increased infection risk, B12 deficiency',
      contraindications: 'Hypersensitivity to benzimidazoles, concurrent rilpivirine use'
    },
    {
      id: 'amlodipine',
      name: 'Amlodipine',
      genericName: 'Amlodipine Besylate',
      strength: '2.5mg, 5mg, 10mg',
      manufacturer: 'Various',
      description: 'Calcium channel blocker for hypertension and angina.',
      useCase: 'Hypertension, chronic stable angina, vasospastic angina',
      copay: '$4',
      tier: 'Tier 1',
      status: 'Generic',
      tierDescription: 'Generic medications with lowest cost',
      chemicalName: '3-ethyl 5-methyl (4RS)-2-[(2-aminoethoxy)methyl]-4-(2-chlorophenyl)-6-methyl-1,4-dihydropyridine-3,5-dicarboxylate',
      sideEffects: 'Peripheral edema, flushing, dizziness, palpitations, gingival hyperplasia',
      contraindications: 'Cardiogenic shock, severe aortic stenosis, hypersensitivity'
    },
    {
      id: 'levothyroxine',
      name: 'Levothyroxine',
      genericName: 'Levothyroxine Sodium',
      strength: '25mcg, 50mcg, 75mcg, 100mcg, 125mcg, 150mcg',
      manufacturer: 'Various',
      description: 'Synthetic thyroid hormone replacement therapy.',
      useCase: 'Hypothyroidism, thyroid cancer suppression, goiter treatment',
      copay: '$4',
      tier: 'Tier 1',
      status: 'Generic',
      tierDescription: 'Generic medications with lowest cost',
      chemicalName: 'O-(4-hydroxy-3,5-diiodophenyl)-3,5-diiodo-L-tyrosine',
      sideEffects: 'Palpitations, insomnia, weight loss, heat intolerance when overdosed',
      contraindications: 'Untreated adrenal insufficiency, recent MI with hyperthyroidism'
    }
  ];

  const filterOptions = ['All', 'Tier 1', 'Tier 2', 'Tier 3', 'Generic', 'Brand', 'Preferred'];

  const filteredDrugs = drugs.filter(drug => {
    const matchesSearch = drug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         drug.useCase.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'All' || 
                         drug.tier === selectedFilter || 
                         drug.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const handleDrugClick = (drug) => {
    setSelectedDrug(drug);
    setIsModalOpen(true);
    setIsExpanded(false);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDrug(null);
    setIsExpanded(false);
  }

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white shadow-2xl">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm border border-white/30">
                  <Pill className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Medical Formulary System</h1>
                  <p className="text-blue-100 mt-1">Comprehensive Drug Information & Coverage Database</p>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <div className="text-right">
                  <div className="text-sm text-blue-200">Total Drugs</div>
                  <div className="text-2xl font-bold">{drugs.length}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-blue-200">Coverage Tiers</div>
                  <div className="text-2xl font-bold">3</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search drugs by name, condition, or use case..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-700 bg-gray-50"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="pl-12 pr-10 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-700 bg-gray-50 min-w-[200px]"
                >
                  {filterOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDrugs.map(drug => (
              <div
                key={drug.id}
                onClick={() => handleDrugClick(drug)}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-200/50 hover:border-blue-300 transform hover:-translate-y-1 group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 group-hover:bg-blue-100 transition-colors duration-200">
                      <Pill className="w-6 h-6 text-blue-600" />
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-200">{drug.name}</h3>
                  <p className="text-gray-600 mb-3">{drug.genericName}</p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-2">{drug.useCase}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                        drug.status === 'Generic' ? 'bg-green-100 text-green-800' :
                        drug.status === 'Brand' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {drug.status}
                      </span>
                      <span className="text-sm text-gray-500">{drug.tier}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-700">{drug.copay}</div>
                      <div className="text-xs text-gray-500">copay</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredDrugs.length === 0 && (
            <div className="text-center py-12">
              <div className="p-4 bg-gray-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No drugs found</h3>
              <p className="text-gray-600">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedDrug && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className={`relative bg-white rounded-2xl shadow-2xl border border-gray-200 animate-in zoom-in-95 slide-in-from-bottom-5 duration-300 ${
            isExpanded ? 'w-full h-full max-w-none max-h-none m-0 rounded-none' : 'max-w-4xl max-h-[90vh] w-full mx-4'
          } transition-all duration-500 ease-in-out overflow-hidden`}>
            {/* Header */}
            <div className={`border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 transition-all duration-500 ${
              isExpanded ? 'px-8 py-8' : 'px-6 py-6'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-3 bg-blue-100 rounded-xl border border-blue-200 transition-all duration-500 ${
                    isExpanded ? 'p-4' : ''
                  }`}>
                    <Pill className={`text-blue-600 transition-all duration-500 ${
                      isExpanded ? 'w-8 h-8' : 'w-6 h-6'
                    }`} />
                  </div>
                  <div>
                    <h2 className={`font-bold text-gray-900 transition-all duration-500 ${
                      isExpanded ? 'text-4xl mb-2' : 'text-2xl mb-1'
                    }`}>{selectedDrug.name}</h2>
                    <p className={`text-gray-600 transition-all duration-500 ${
                      isExpanded ? 'text-xl' : 'text-lg'
                    }`}>{selectedDrug.genericName}</p>
                    {isExpanded && (
                      <p className="text-gray-500 mt-1">{selectedDrug.strength} • {selectedDrug.manufacturer}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={toggleExpanded}
                    className={`p-2 hover:bg-blue-100 rounded-xl transition-all duration-200 ${
                      isExpanded ? 'rotate-90' : 'rotate-0'
                    }`}
                    title={isExpanded ? "Minimize" : "Expand"}
                  >
                    <ChevronRight className="w-6 h-6 text-gray-600" />
                  </button>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-red-100 rounded-xl transition-colors duration-200"
                  >
                    <X className="w-6 h-6 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className={`transition-all duration-500 ${
              isExpanded ? 'h-full overflow-y-auto' : 'max-h-96 overflow-y-auto'
            } ${isExpanded ? 'p-8' : 'p-6'}`}>
              {!isExpanded ? (
                /* Lightbox Content */
                <>
                  {/* Status and Tier */}
                  <div className="flex items-center gap-6 mb-6">
                    <span className={`px-6 py-3 rounded-xl font-semibold shadow-lg text-sm border ${
                      selectedDrug.status === 'Preferred' ? 'bg-emerald-50 text-emerald-800 border-emerald-200' :
                      selectedDrug.status === 'Brand' ? 'bg-blue-50 text-blue-800 border-blue-200' :
                      selectedDrug.status === 'Generic' ? 'bg-slate-50 text-slate-800 border-slate-200' :
                      'bg-blue-50 text-blue-800 border-blue-200'
                    }`}>
                      {selectedDrug.status}
                    </span>
                    <div className="flex items-center gap-3 bg-gradient-to-r from-emerald-50 to-green-50 px-4 py-2 rounded-xl shadow-lg border border-emerald-200">
                      <DollarSign className="w-4 h-4 text-emerald-700" />
                      <span className="font-bold text-green-800 text-lg">{selectedDrug.copay}</span>
                      <span className="text-green-600 font-medium text-sm">• {selectedDrug.tier}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Description</h3>
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200 shadow-lg">
                      <p className="text-slate-700 leading-relaxed">{selectedDrug.description}</p>
                    </div>
                  </div>

                  {/* Use Case */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Activity className="w-6 h-6 text-blue-500" />
                      <h3 className="font-bold text-gray-900 text-lg">Use Cases</h3>
                    </div>
                    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-200 shadow-lg">
                      <p className="text-slate-700">{selectedDrug.useCase}</p>
                    </div>
                  </div>

                  {/* Formulary Info */}
                  <div className="mb-6">
                    <h3 className="font-bold text-gray-900 mb-4 text-lg">Current Formulary Status</h3>
                    <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl shadow-lg border border-blue-200 p-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="text-gray-500 font-medium mb-1 text-sm">Tier Level</div>
                          <div className="font-bold text-gray-900 text-lg">{selectedDrug.tier}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-gray-500 font-medium mb-1 text-sm">Copay</div>
                          <div className="font-bold text-green-700 text-lg">{selectedDrug.copay}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-gray-500 font-medium mb-1 text-sm">Status</div>
                          <div className="font-bold text-blue-700 text-lg">{selectedDrug.status}</div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-blue-200/50 text-center">
                        <div className="text-slate-600 font-medium text-sm">{selectedDrug.tierDescription}</div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* Full Page Content */
                <div className="animate-in slide-in-from-bottom duration-700">
                  {/* Drug Overview Cards */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* Main Drug Info */}
                    <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                      <div className="flex items-start gap-6 mb-8">
                        <div className="p-4 bg-blue-50 rounded-2xl border-2 border-blue-100">
                          <Pill className="w-12 h-12 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-3xl font-bold text-gray-900 mb-3">{selectedDrug.name}</h2>
                          <p className="text-xl text-gray-700 mb-2">{selectedDrug.genericName}</p>
                          <p className="text-gray-600">{selectedDrug.strength} • {selectedDrug.manufacturer}</p>
                          <div className="flex items-center gap-4 mt-4">
                            <span className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                              selectedDrug.status === 'Preferred' ? 'bg-green-100 text-green-800' :
                              selectedDrug.status === 'Brand' ? 'bg-blue-100 text-blue-800' :
                              selectedDrug.status === 'Generic' ? 'bg-gray-100 text-gray-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {selectedDrug.status}
                            </span>
                            <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg border border-green-200">
                              <DollarSign className="w-4 h-4 text-green-600" />
                              <span className="font-bold text-green-800">{selectedDrug.copay}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">Clinical Description</h3>
                          <p className="text-gray-700 leading-relaxed text-lg bg-gray-50 p-4 rounded-xl">{selectedDrug.description}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">Primary Indications</h3>
                          <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                            <p className="text-gray-800 text-lg">{selectedDrug.useCase}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Formulary Status Card */}
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-xl">
                      <h3 className="text-2xl font-bold mb-6">Formulary Details</h3>
                      <div className="space-y-6">
                        <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                          <div className="text-blue-100 text-sm mb-1">Coverage Tier</div>
                          <div className="text-3xl font-bold">{selectedDrug.tier}</div>
                          <div className="text-blue-200 text-sm mt-1">{selectedDrug.tierDescription}</div>
                        </div>
                        
                        <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                          <div className="text-blue-100 text-sm mb-1">Patient Copay</div>
                          <div className="text-4xl font-bold text-green-300">{selectedDrug.copay}</div>
                          <div className="text-blue-200 text-sm mt-1">Per 30-day supply</div>
                        </div>

                        <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                          <div className="text-blue-100 text-sm mb-1">Prior Authorization</div>
                          <div className="text-xl font-semibold">
                            {selectedDrug.status === 'Prior Auth' ? 'Required' : 'Not Required'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Charts and Analytics Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Effectiveness Chart */}
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Clinical Effectiveness</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-700 font-medium">HbA1c Reduction</span>
                            <span className="text-blue-600 font-bold">1.5%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full" style={{width: '85%'}}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-700 font-medium">Weight Impact</span>
                            <span className="text-green-600 font-bold">-2.3kg</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full" style={{width: '78%'}}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-700 font-medium">CV Risk Reduction</span>
                            <span className="text-purple-600 font-bold">12%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full" style={{width: '65%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Side Effects Frequency */}
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Adverse Events Profile</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl border border-red-200">
                          <span className="text-gray-800 font-medium">GI Disturbances</span>
                          <div className="flex items-center gap-3">
                            <div className="w-16 bg-red-200 rounded-full h-2">
                              <div className="bg-red-500 h-2 rounded-full" style={{width: '45%'}}></div>
                            </div>
                            <span className="text-red-700 font-bold text-sm">25%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-amber-50 rounded-xl border border-amber-200">
                          <span className="text-gray-800 font-medium">Metallic Taste</span>
                          <div className="flex items-center gap-3">
                            <div className="w-16 bg-amber-200 rounded-full h-2">
                              <div className="bg-amber-500 h-2 rounded-full" style={{width: '30%'}}></div>
                            </div>
                            <span className="text-amber-700 font-bold text-sm">15%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                          <span className="text-gray-800 font-medium">Vitamin B12 Deficiency</span>
                          <div className="flex items-center gap-3">
                            <div className="w-16 bg-yellow-200 rounded-full h-2">
                              <div className="bg-yellow-500 h-2 rounded-full" style={{width: '15%'}}></div>
                            </div>
                            <span className="text-yellow-700 font-bold text-sm">7%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dosing Guidelines */}
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 mb-12">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-8">Clinical Dosing Protocol</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="text-center p-6 bg-blue-50 rounded-2xl border border-blue-200">
                        <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                        <div className="text-2xl font-bold text-blue-800 mb-2">Week 1-2</div>
                        <div className="text-gray-700 font-medium">500mg</div>
                        <div className="text-sm text-gray-600 mt-1">Once daily with dinner</div>
                      </div>
                      <div className="text-center p-6 bg-blue-50 rounded-2xl border border-blue-200">
                        <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                        <div className="text-2xl font-bold text-blue-800 mb-2">Week 3-4</div>
                        <div className="text-gray-700 font-medium">500mg</div>
                        <div className="text-sm text-gray-600 mt-1">Twice daily</div>
                      </div>
                      <div className="text-center p-6 bg-green-50 rounded-2xl border border-green-200">
                        <Calendar className="w-8 h-8 text-green-600 mx-auto mb-3" />
                        <div className="text-2xl font-bold text-green-800 mb-2">Week 5+</div>
                        <div className="text-gray-700 font-medium">850mg</div>
                        <div className="text-sm text-gray-600 mt-1">Twice daily</div>
                      </div>
                      <div className="text-center p-6 bg-purple-50 rounded-2xl border border-purple-200">
                        <Calendar className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                        <div className="text-2xl font-bold text-purple-800 mb-2">Max Dose</div>
                        <div className="text-gray-700 font-medium">2550mg</div>
                        <div className="text-sm text-gray-600 mt-1">Daily maximum</div>
                      </div>
                    </div>
                  </div>

                  {/* Safety Information */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-amber-100 rounded-xl">
                          <AlertCircle className="w-8 h-8 text-amber-600" />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900">Contraindications & Warnings</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                          <h4 className="font-semibold text-red-900 mb-2">Absolute Contraindications</h4>
                          <ul className="text-gray-700 space-y-1 text-sm">
                            <li>• Severe renal impairment (eGFR < 30)</li>
                            <li>• Metabolic acidosis</li>
                            <li>• Diabetic ketoacidosis</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                          <h4 className="font-semibold text-amber-900 mb-2">Monitoring Required</h4>
                          <ul className="text-gray-700 space-y-1 text-sm">
                            <li>• Renal function every 6 months</li>
                            <li>• Vitamin B12 levels annually</li>
                            <li>• Liver function if indicated</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-green-100 rounded-xl">
                          <Shield className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900">Drug Interactions</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                          <h4 className="font-semibold text-red-900 mb-2">Major Interactions</h4>
                          <ul className="text-gray-700 space-y-1 text-sm">
                            <li>• Contrast agents (hold 48h before/after)</li>
                            <li>• Alcohol (increased lactic acidosis risk)</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                          <h4 className="font-semibold text-yellow-900 mb-2">Moderate Interactions</h4>
                          <ul className="text-gray-700 space-y-1 text-sm">
                            <li>• Carbonic anhydrase inhibitors</li>
                            <li>• Corticosteroids (monitor glucose)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Patient Counseling Points */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl border border-blue-200">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Patient Counseling Key Points</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Clock className="w-6 h-6 text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Timing</h4>
                        <p className="text-gray-600 text-sm">Take with meals to reduce GI side effects</p>
                      </div>
                      <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <AlertCircle className="w-6 h-6 text-green-600" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Monitoring</h4>
                        <p className="text-gray-600 text-sm">Regular blood tests for kidney function</p>
                      </div>
                      <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Shield className="w-6 h-6 text-amber-600" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Precautions</h4>
                        <p className="text-gray-600 text-sm">Avoid alcohol and notify before procedures</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
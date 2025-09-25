'use client';

import { useState } from 'react';
import { Search, Pill, Users, Star, Clock, Shield, AlertCircle, User, Building, X, ChevronRight, Activity, Calendar, DollarSign } from 'lucide-react';

export default function Home() {
  const [isSearchMode, setIsSearchMode] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [activeTab, setActiveTab] = useState('Formulary');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDrug, setSelectedDrug] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const tabs = ['Formulary', 'People', 'Guidelines', 'Analytics'];

  const formularyDrugs = [
    { 
      name: 'Metformin', 
      strength: '500mg',
      manufacturer: 'Teva Pharmaceuticals',
      tier: 'Tier 1',
      copay: '$10',
      status: 'Preferred',
      icon: Pill,
      color: 'bg-green-100 text-green-700'
    },
    { 
      name: 'Metformin XR', 
      strength: '750mg',
      manufacturer: 'Bristol Myers',
      tier: 'Tier 2',
      copay: '$25',
      status: 'Covered',
      icon: Pill,
      color: 'bg-blue-100 text-blue-700'
    },
    { 
      name: 'Metformin HCL', 
      strength: '850mg',
      manufacturer: 'Sandoz',
      tier: 'Tier 1',
      copay: '$10',
      status: 'Preferred',
      icon: Pill,
      color: 'bg-green-100 text-green-700'
    },
    { 
      name: 'Metformin ER', 
      strength: '1000mg',
      manufacturer: 'Mylan',
      tier: 'Tier 2',
      copay: '$25',
      status: 'Prior Auth',
      icon: Shield,
      color: 'bg-orange-100 text-orange-700'
    },
    { 
      name: 'Metformin IR', 
      strength: '250mg',
      manufacturer: 'Generic Co.',
      tier: 'Tier 1',
      copay: '$5',
      status: 'Generic',
      icon: Pill,
      color: 'bg-gray-100 text-gray-700'
    }
  ];

  const people = [
    {
      name: 'Dr. Sarah Johnson',
      title: 'Endocrinologist',
      hospital: 'Mayo Clinic',
      prescriptions: '2,451',
      rating: '4.9',
      specialty: 'Diabetes Care',
      icon: User,
      avatar: 'SJ'
    },
    {
      name: 'Dr. Michael Chen',
      title: 'Internal Medicine',
      hospital: 'Johns Hopkins',
      prescriptions: '1,892',
      rating: '4.8',
      specialty: 'Primary Care',
      icon: User,
      avatar: 'MC'
    },
    {
      name: 'Dr. Emily Rodriguez',
      title: 'Family Medicine',
      hospital: 'Cleveland Clinic',
      prescriptions: '3,124',
      rating: '4.9',
      specialty: 'Family Practice',
      icon: User,
      avatar: 'ER'
    },
    {
      name: 'Dr. David Kim',
      title: 'Pharmacologist',
      hospital: 'Stanford Medical',
      prescriptions: '987',
      rating: '4.7',
      specialty: 'Clinical Pharmacy',
      icon: User,
      avatar: 'DK'
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      setIsLoading(true);
      // Simulate API call delay
      setTimeout(() => {
        setIsLoading(false);
        setIsSearchMode(false);
      }, 1500);
    }
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Pika Brand - Animated Position */}
      <div 
        className={`absolute transition-all duration-1000 ease-in-out z-10 ${
          isSearchMode 
            ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-32' 
            : 'top-8 left-8 transform translate-x-0 translate-y-0'
        }`}
      >
        <h1 className={`text-white font-bold transition-all duration-1000 ${
          isSearchMode ? 'text-6xl' : 'text-2xl'
        }`}>
          lens.
        </h1>
      </div>

      {/* Search Interface */}
      {isSearchMode && (
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-full max-w-2xl px-8">
            <form onSubmit={handleSearch} className="mt-8">
              <div className="flex items-center justify-center gap-4">
                <div 
                  className={`relative transition-all duration-1000 ease-in-out ${
                    isLoading 
                      ? 'w-16 h-16' 
                      : 'w-full max-w-2xl'
                  }`}
                >
                  {!isLoading && (
                    <>
                      <input
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Search for drugs, medications, or treatments..."
                        className="w-full px-8 py-6 text-xl bg-white/95 backdrop-blur-sm rounded-full shadow-lg border-0 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300 placeholder-gray-500"
                      />
                      <button
                        type="submit"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 p-4 text-gray-500 hover:text-gray-700 transition-colors"
                      >
                        <Search className="w-6 h-6" />
                      </button>
                    </>
                  )}
                  {isLoading && (
                    <div className="w-16 h-16 bg-white/95 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-700"></div>
                    </div>
                  )}
                </div>
                {isLoading && (
                  <span 
                    className="text-white text-xl font-medium opacity-0 animate-in fade-in-50"
                    style={{
                      animationDelay: '800ms',
                      animationFillMode: 'both'
                    }}
                  >
                    Searching in formulary database
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Drug Results Card - Slides in from right */}
      {!isSearchMode && (
        <div className="flex items-center justify-center min-h-screen p-4">
          <div 
            className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl w-full max-w-4xl p-6 transform transition-all duration-1000 ease-out animate-in slide-in-from-right-full"
            style={{
              animationDelay: '500ms',
              animationFillMode: 'both'
            }}
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-semibold text-gray-900">Search Results for "{searchValue || 'Metformin'}"</h2>
                <span className="text-gray-600">Updated: Today, 3:00 PM</span>
              </div>
              <div className="text-right text-sm text-gray-600 space-y-1">
                <div>Total Results: 47</div>
                <div>Formulary Matches: 5</div>
                <div>Providers: 12</div>
                <div>Coverage: 94%</div>
              </div>
            </div>

            {/* Drug Summary */}
            <div className="flex items-center gap-6 mb-8">
              <div className="text-blue-500">
                <Pill className="w-16 h-16" />
              </div>
              <div className="flex items-baseline">
                <span className="text-8xl font-light text-gray-900">5</span>
                <div className="ml-4 text-2xl">
                  <span className="font-medium text-gray-900">matches</span>
                  <div className="text-base text-gray-500 mt-1">in formulary</div>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-medium transition-colors relative ${
                    activeTab === tab
                      ? 'text-gray-900'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Formulary Content */}
            {activeTab === 'Formulary' && (
              <div className="space-y-6">
                <div className="flex items-baseline gap-4">
                  <span className="text-6xl font-light text-gray-900">5</span>
                  <span className="text-lg text-gray-600 font-medium">Formulary Options</span>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed max-w-2xl">
                  Multiple formulations available with varying tier levels and copay structures. 
                  Review prior authorization requirements and preferred alternatives.
                </p>

                {/* Horizontal Scrolling Drug Cards */}
                <div className="overflow-x-auto pb-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-2">
                    {[
                      {
                        id: 'metformin-hcl',
                        name: 'Metformin HCl',
                        genericName: 'Metformin Hydrochloride',
                        chemicalName: 'N,N-dimethylimidodicarbonimidic diamide',
                        strength: '500mg',
                        manufacturer: 'Teva Pharma',
                        tier: 'Tier 1',
                        copay: '$10',
                        status: 'Preferred',
                        tierDescription: 'Lowest cost with full coverage',
                        description: 'Type 2 diabetes medication that helps control blood sugar levels by reducing glucose production in the liver.',
                        useCase: 'First-line treatment for type 2 diabetes mellitus, PCOS treatment',
                        sideEffects: 'Nausea, diarrhea, stomach upset, metallic taste',
                        contraindications: 'Kidney disease, liver disease, heart failure'
                      },
                      {
                        id: 'lisinopril-ace',
                        name: 'Lisinopril ACE',
                        genericName: 'Lisinopril Tablets',
                        chemicalName: 'L-lysyl-L-proline dihydrate',
                        strength: '500mg',
                        manufacturer: 'Lupin Pharma',
                        tier: 'Tier 1',
                        copay: '$10',
                        status: 'Generic',
                        tierDescription: 'Lowest cost with full coverage',
                        description: 'ACE inhibitor used to treat high blood pressure and heart failure.',
                        useCase: 'Hypertension, heart failure, diabetic nephropathy',
                        sideEffects: 'Dry cough, dizziness, hyperkalemia, angioedema',
                        contraindications: 'Pregnancy, bilateral renal artery stenosis'
                      },
                      {
                        id: 'atorvastatin-cal',
                        name: 'Atorvastatin Cal',
                        genericName: 'Atorvastatin Calcium',
                        chemicalName: 'Fluorophenyl-pyrrol-heptanoic acid',
                        strength: '500mg',
                        manufacturer: 'Pfizer Pharma',
                        tier: 'Tier 2',
                        copay: '$25',
                        status: 'Brand',
                        tierDescription: 'Moderate cost standard coverage',
                        description: 'Statin medication used to lower cholesterol and reduce cardiovascular risk.',
                        useCase: 'High cholesterol, cardiovascular disease prevention',
                        sideEffects: 'Muscle pain, liver enzyme elevation, headache',
                        contraindications: 'Active liver disease, pregnancy, breastfeeding'
                      },
                      {
                        id: 'omeprazole-ppi',
                        name: 'Omeprazole PPI',
                        genericName: 'Omeprazole Capsules',
                        chemicalName: 'Methoxy-pyridinyl-benzimidazole',
                        strength: '500mg',
                        manufacturer: 'Astra Pharma',
                        tier: 'Tier 1',
                        copay: '$10',
                        status: 'Preferred',
                        tierDescription: 'Lowest cost with full coverage',
                        description: 'Proton pump inhibitor that reduces stomach acid production.',
                        useCase: 'GERD, peptic ulcers, Zollinger-Ellison syndrome',
                        sideEffects: 'Headache, nausea, diarrhea, vitamin B12 deficiency',
                        contraindications: 'Hypersensitivity to benzimidazoles'
                      },
                    ].map((drug, index) => {
                      return (
                        <div 
                          key={index} 
                          onClick={() => {
                            setSelectedDrug(drug);
                            setIsModalOpen(true);
                          }}
                          className="bg-gray-50 rounded-2xl p-4 border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                          {/* Header with status */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="p-3 rounded-full bg-blue-100">
                              <Pill className="w-6 h-6 text-blue-600" />
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              drug.status === 'Preferred' ? 'bg-green-100 text-green-700' :
                              drug.status === 'Brand' ? 'bg-purple-100 text-purple-700' :
                              drug.status === 'Generic' ? 'bg-gray-100 text-gray-700' :
                              'bg-blue-100 text-blue-700'
                            }`}>
                              {drug.status}
                            </span>
                          </div>
                          
                          {/* Drug Name & Details */}
                          <div className="mb-4">
                            <h3 className="font-bold text-gray-900 text-lg mb-2">{drug.name}</h3>
                            <p className="text-sm text-gray-600 mb-1">{drug.genericName}</p>
                            <p className="text-xs text-gray-500 mb-3">{drug.strength} • {drug.manufacturer}</p>
                          </div>
                          
                          {/* Chemical Structure Placeholder */}
                          <div className="mb-4 p-4 bg-white rounded-lg border border-gray-200">
                            <div className="text-center text-gray-400 text-xs mb-2">Chemical Structure</div>
                            <div className="h-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded flex items-center justify-center">
                              <div className="text-2xl text-gray-300 font-mono">
                                {index % 4 === 0 ? '⬢—⬢—NH₂' : 
                                 index % 4 === 1 ? '⬢—O—⬢' :
                                 index % 4 === 2 ? 'HO—⬢—COOH' : 
                                 '⬢—S—⬢'}
                              </div>
                            </div>
                          </div>
                          
                          {/* Tier Information */}
                          <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-semibold text-blue-900">{drug.tier}</span>
                              <span className="text-lg font-bold text-blue-800">{drug.copay}</span>
                            </div>
                            <div className="text-xs text-blue-700">{drug.tierDescription}</div>
                          </div>
                          
                          {/* Quick Actions */}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* People Content */}
            {activeTab === 'People' && (
              <div className="space-y-6">
                <div className="flex items-baseline gap-4">
                  <span className="text-4xl font-light text-gray-900">4</span>
                  <span className="text-lg text-gray-600 font-medium">Healthcare Providers</span>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed max-w-2xl">
                  Healthcare professionals who frequently prescribe this medication. 
                  Connect with specialists and review prescription patterns.
                </p>

                {/* People Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {people.slice(0, 4).map((person, index) => (
                    <div key={index} className="bg-gray-50 rounded-2xl p-4 border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                            {person.avatar}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">{person.name}</h3>
                            <p className="text-sm text-gray-600">{person.title}</p>
                            <p className="text-xs text-gray-500">{person.hospital}</p>
                          </div>
                          <div className="flex items-center text-xs text-gray-500">
                            <Star className="w-3 h-3 text-yellow-400 mr-1" />
                            {person.rating}
                          </div>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Prescriptions:</span>
                            <span className="font-medium text-gray-900">{person.prescriptions}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Specialty:</span>
                            <span className="text-gray-700">{person.specialty}</span>
                          </div>
                        </div>
                        <button className="w-full mt-4 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
                          View Profile
                        </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Guidelines Content */}
            {activeTab === 'Guidelines' && (
              <div className="space-y-6">
                <div className="flex items-baseline gap-4">
                  <span className="text-6xl font-light text-gray-900">8</span>
                  <span className="text-lg text-gray-600 font-medium">Clinical Guidelines</span>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed max-w-2xl">
                  Evidence-based guidelines and recommendations for medication usage, 
                  dosing, and patient monitoring requirements.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <AlertCircle className="w-5 h-5 text-orange-500" />
                      <h3 className="font-semibold text-gray-900">Dosage Guidelines</h3>
                    </div>
                    <p className="text-sm text-gray-600">Initial: 500mg twice daily with meals. Max: 2550mg daily.</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="w-5 h-5 text-green-500" />
                      <h3 className="font-semibold text-gray-900">Safety Profile</h3>
                    </div>
                    <p className="text-sm text-gray-600">Low risk of hypoglycemia. Monitor kidney function regularly.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Analytics Content */}
            {activeTab === 'Analytics' && (
              <div className="space-y-6">
                <div className="flex items-baseline gap-4">
                  <span className="text-6xl font-light text-gray-900">94%</span>
                  <span className="text-lg text-gray-600 font-medium">Coverage Rate</span>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed max-w-2xl">
                  High formulary coverage across major insurance plans with excellent 
                  patient access and cost-effectiveness ratings.
                </p>

                {/* Coverage Bar */}
                <div className="relative">
                  <div className="h-2 rounded-full bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 to-green-600"></div>
                  <div 
                    className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-lg"
                    style={{ left: '94%' }}
                  ></div>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>0%</span>
                    <span>25%</span>
                    <span>50%</span>
                    <span>75%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200 text-sm text-gray-500">
              <span>Data from FDA Orange Book</span>
              <button className="hover:text-gray-700 transition-colors">Share Feedback</button>
            </div>
          </div>
        </div>
      )}


      {/* Drug Detail Modal */}
      {isModalOpen && selectedDrug && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => {
              setIsModalOpen(false);
              setIsExpanded(false);
            }}
          />
          
          {/* Modal */}
          <div className={`absolute transition-all duration-500 ease-out ${
            isExpanded 
              ? 'inset-0' 
              : 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-auto max-h-[90vh]'
          }`}>
            <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden h-full transition-all duration-500 ${
              isExpanded ? 'rounded-none' : ''
            }`}>
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-blue-100">
                      <Pill className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{selectedDrug.name}</h2>
                      <p className="text-gray-600">{selectedDrug.genericName}</p>
                      <p className="text-sm text-gray-500">{selectedDrug.strength} • {selectedDrug.manufacturer}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="p-2 rounded-full hover:bg-white/50 transition-colors"
                    >
                      <ChevronRight className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`} />
                    </button>
                    <button
                      onClick={() => {
                        setIsModalOpen(false);
                        setIsExpanded(false);
                      }}
                      className="p-2 rounded-full hover:bg-white/50 transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${isExpanded ? 'h-full overflow-y-auto' : 'max-h-96 overflow-y-auto'} p-6`}>
                {/* Status and Tier */}
                <div className="flex items-center gap-4 mb-6">
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedDrug.status === 'Preferred' ? 'bg-green-100 text-green-700' :
                    selectedDrug.status === 'Brand' ? 'bg-purple-100 text-purple-700' :
                    selectedDrug.status === 'Generic' ? 'bg-gray-100 text-gray-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {selectedDrug.status}
                  </span>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-gray-500" />
                    <span className="text-lg font-semibold text-gray-900">{selectedDrug.copay}</span>
                    <span className="text-sm text-gray-500">{selectedDrug.tier}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedDrug.description}</p>
                </div>

                {/* Use Case */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="w-5 h-5 text-blue-500" />
                    <h3 className="text-lg font-semibold text-gray-900">Use Cases</h3>
                  </div>
                  <p className="text-gray-700">{selectedDrug.useCase}</p>
                </div>

                {/* Chemical Structure */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Chemical Structure</h3>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border border-gray-200">
                    <div className="text-center mb-4">
                      <div className="text-3xl text-gray-400 font-mono mb-2">
                        {selectedDrug.id.includes('metformin') ? '⬢—NH₂—⬢' : 
                         selectedDrug.id.includes('lisinopril') ? '⬢—O—⬢—NH' :
                         selectedDrug.id.includes('atorvastatin') ? 'HO—⬢—COOH' : 
                         '⬢—S—⬢—O'}
                      </div>
                      <p className="text-sm text-gray-600">{selectedDrug.chemicalName}</p>
                    </div>
                  </div>
                </div>

                {/* Formulary Info */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Current Formulary Status</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <div className="text-sm text-gray-500">Tier Level</div>
                        <div className="font-semibold text-gray-900">{selectedDrug.tier}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Copay</div>
                        <div className="font-semibold text-gray-900">{selectedDrug.copay}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Status</div>
                        <div className="font-semibold text-gray-900">{selectedDrug.status}</div>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <div className="text-sm text-gray-600">{selectedDrug.tierDescription}</div>
                {/* Side Effects & Contraindications - Only show in expanded mode */}
                {isExpanded && (
                  <>
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="w-5 h-5 text-orange-500" />
                        <h3 className="text-lg font-semibold text-gray-900">Side Effects</h3>
                      </div>
                      <p className="text-gray-700">{selectedDrug.sideEffects}</p>
                    </div>
                    </div>
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-5 h-5 text-red-500" />
                        <h3 className="text-lg font-semibold text-gray-900">Contraindications</h3>
                      </div>
                      <p className="text-gray-700">{selectedDrug.contraindications}</p>
                    </div>
                  </>
                )}
              </div>
                  </div>
              {/* Footer Actions */}
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Last updated: Today, 3:45 PM
                  </div>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      Add to Favorites
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                      Request Prior Auth
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
                </div>
      {/* Copyright Footer */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/80 text-sm">
        © 2025 copyright by Akshit.
      </div>
    </div>
  );
}
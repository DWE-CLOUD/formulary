'use client';

import { useState } from 'react';
import { Search, Pill, Users, Star, Clock, Shield, AlertCircle, User, Building, X, ChevronRight, Activity, Calendar, DollarSign, TrendingUp } from 'lucide-react';

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
        <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-300">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md transition-all duration-500 animate-in fade-in"
            onClick={() => {
              setIsModalOpen(false);
              setIsExpanded(false);
            }}
          />
          
          {/* Modal */}
          <div className={`absolute transition-all duration-500 ease-out ${
            isExpanded 
              ? 'inset-0 animate-in slide-in-from-bottom duration-700' 
              : 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-auto max-h-[85vh] animate-in zoom-in-95 slide-in-from-bottom-4 duration-500'
          }`}>
            <div className={`bg-gradient-to-br from-white via-gray-50 to-blue-50 shadow-2xl overflow-hidden h-full transition-all duration-700 ${
              isExpanded ? 'rounded-none' : 'rounded-3xl border border-gray-200/50'
            }`}>
              {/* Header */}
              <div className={`relative overflow-hidden transition-all duration-700 ${
                isExpanded 
                  ? 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 p-8' 
                  : 'bg-gradient-to-r from-blue-50 via-slate-50 to-blue-100 p-6'
              } border-b border-blue-200/30`}>
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-4 left-8 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-4 right-8 w-24 h-24 bg-cyan-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`transition-all duration-500 ${
                      isExpanded 
                        ? 'p-4 rounded-2xl bg-white/25 backdrop-blur-sm shadow-lg border border-white/30' 
                        : 'p-3 rounded-xl bg-white shadow-lg border border-blue-200'
                    }`}>
                      <Pill className={`transition-all duration-500 ${
                        isExpanded 
                          ? 'w-12 h-12 text-white' 
                          : 'w-8 h-8 text-blue-700'
                      }`} />
                    </div>
                    <div>
                      <h2 className={`font-bold transition-all duration-500 ${
                        isExpanded 
                          ? 'text-4xl text-white mb-2' 
                          : 'text-2xl text-gray-900'
                      }`}>
                        {selectedDrug.name}
                      </h2>
                      <p className={`transition-all duration-500 ${
                        isExpanded 
                          ? 'text-xl text-white/90' 
                          : 'text-gray-600'
                      }`}>
                        {selectedDrug.genericName}
                      </p>
                      <p className={`text-sm transition-all duration-500 ${
                        isExpanded 
                          ? 'text-white/70 mt-1' 
                          : 'text-gray-500'
                      }`}>
                        {selectedDrug.strength} • {selectedDrug.manufacturer}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                        isExpanded 
                          ? 'bg-white/25 hover:bg-white/35 backdrop-blur-sm border border-white/30' 
                          : 'bg-white hover:bg-blue-50 shadow-lg border border-blue-200'
                      }`}
                    >
                     <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                       isExpanded 
                         ? 'rotate-90 text-white' 
                         : 'rotate-0 text-blue-700'
                      }`} />
                    </button>
                    <button
                      onClick={() => {
                        setIsModalOpen(false);
                        setIsExpanded(false);
                      }}
                      className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                        isExpanded 
                          ? 'bg-white/25 hover:bg-white/35 backdrop-blur-sm border border-white/30' 
                          : 'bg-white hover:bg-blue-50 shadow-lg border border-blue-200'
                      }`}
                    >
                      <X className={`w-5 h-5 transition-all duration-300 ${
                        isExpanded ? 'text-white' : 'text-gray-600'
                      }`} />
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
                    <div className="flex items-center gap-4 mb-6 animate-in slide-in-from-left duration-500">
                      <span className={`px-4 py-2 rounded-lg font-semibold text-sm border shadow-md hover:shadow-lg transition-all duration-300 ${
                        selectedDrug.status === 'Preferred' ? 'bg-emerald-50 text-emerald-800 border-emerald-200' :
                        selectedDrug.status === 'Brand' ? 'bg-blue-50 text-blue-800 border-blue-200' :
                        selectedDrug.status === 'Generic' ? 'bg-slate-50 text-slate-800 border-slate-200' :
                        'bg-blue-50 text-blue-800 border-blue-200'
                      }`}>
                        {selectedDrug.status}
                      </span>
                      <div className="flex items-center gap-3 bg-gradient-to-r from-emerald-50 to-green-50 px-4 py-2 rounded-lg shadow-md border border-emerald-200 hover:shadow-lg transition-all duration-300">
                        <DollarSign className="w-4 h-4 text-emerald-700 animate-pulse" />
                        <span className="font-bold text-green-800 text-lg">{selectedDrug.copay}</span>
                        <span className="text-green-600 font-medium text-sm">• {selectedDrug.tier}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6 animate-in slide-in-from-bottom duration-600 delay-100">
                      <h3 className="font-bold text-gray-900 mb-3 text-lg">Description</h3>
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200 shadow-md hover:shadow-lg transition-all duration-300">
                        <p className="text-slate-700 leading-relaxed">{selectedDrug.description}</p>
                      </div>
                    </div>

                    {/* Use Case */}
                    <div className="mb-6 animate-in slide-in-from-bottom duration-600 delay-200">
                      <div className="flex items-center gap-3 mb-3">
                        <Activity className="w-6 h-6 text-blue-500" />
                        <h3 className="font-bold text-gray-900 text-lg">Use Cases</h3>
                      </div>
                      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4 border border-emerald-200 shadow-md hover:shadow-lg transition-all duration-300">
                        <p className="text-slate-700">{selectedDrug.useCase}</p>
                      </div>
                    </div>

                    {/* Formulary Info */}
                    <div className="mb-6 animate-in slide-in-from-bottom duration-600 delay-300">
                      <h3 className="font-bold text-gray-900 mb-4 text-lg">Current Formulary Status</h3>
                      <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg shadow-md border border-blue-200 p-4 hover:shadow-lg transition-all duration-300">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="text-center">
                            <div className="text-gray-500 font-medium mb-1 text-sm">Tier Level</div>
                            <div className="text-2xl font-bold text-blue-600">{selectedDrug.tier}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-gray-500 font-medium mb-1 text-sm">Patient Cost</div>
                            <div className="text-2xl font-bold text-green-600">{selectedDrug.copay}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-gray-500 font-medium mb-1 text-sm">Authorization</div>
                            <div className="text-lg font-semibold text-gray-700">
                              {selectedDrug.status === 'Prior Auth' ? 'Required' : 'Not Required'}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  /* Full Page Professional Content */
                  <div className="animate-in fade-in duration-800">
                    {/* Drug Overview Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 animate-in slide-in-from-left duration-700">
                      {/* Main Drug Info */}
                      <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                        <div className="flex items-start gap-6 mb-8">
                          <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl border-2 border-blue-200 shadow-lg">
                            <Pill className="w-12 h-12 text-blue-600 animate-pulse" />
                          </div>
                          <div className="flex-1">
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">{selectedDrug.name}</h2>
                            <p className="text-xl text-blue-700 mb-2 font-semibold">{selectedDrug.genericName}</p>
                            <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">{selectedDrug.strength}</span>
                              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">{selectedDrug.manufacturer}</span>
                              <span className="bg-blue-100 px-3 py-1 rounded-full text-sm font-medium text-blue-800">NDC: 00093-1084-01</span>
                            </div>
                            <div className="flex items-center gap-4 mt-4">
                              <span className={`px-4 py-2 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${
                                selectedDrug.status === 'Preferred' ? 'bg-green-100 text-green-800' :
                                selectedDrug.status === 'Brand' ? 'bg-blue-100 text-blue-800' :
                                selectedDrug.status === 'Generic' ? 'bg-gray-100 text-gray-800' :
                                'bg-blue-100 text-blue-800'
                              }`}>
                                {selectedDrug.status}
                              </span>
                              <div className="flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-lg border border-green-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                                <DollarSign className="w-4 h-4 text-green-600" />
                                <span className="font-bold text-green-800 text-lg">{selectedDrug.copay}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Clinical Description</h3>
                            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                              <p className="text-gray-700 leading-relaxed text-lg">{selectedDrug.description}</p>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Primary Indications</h3>
                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-all duration-300">
                              <p className="text-gray-800 text-lg">{selectedDrug.useCase}</p>
                            </div>
                          </div>

                          {/* Mechanism of Action */}
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Mechanism of Action</h3>
                            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200 shadow-sm hover:shadow-md transition-all duration-300">
                              <p className="text-gray-800 text-lg">Decreases hepatic glucose production and intestinal absorption of glucose. Improves insulin sensitivity by increasing peripheral glucose uptake and utilization.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Formulary Status Card */}
                      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                        
                        <h3 className="text-2xl font-bold mb-6">Formulary Details</h3>
                        <div className="space-y-6">
                          <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 border border-white/20">
                            <div className="text-blue-100 text-sm mb-1">Coverage Tier</div>
                            <div className="text-3xl font-bold">{selectedDrug.tier}</div>
                            <div className="text-blue-200 text-sm mt-1">{selectedDrug.tierDescription}</div>
                          </div>
                          
                          <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 border border-white/20">
                            <div className="text-blue-100 text-sm mb-1">Patient Copay</div>
                            <div className="text-4xl font-bold text-green-300 animate-pulse">{selectedDrug.copay}</div>
                            <div className="text-blue-200 text-sm mt-1">Per 30-day supply</div>
                          </div>

                          <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 border border-white/20">
                            <div className="text-blue-100 text-sm mb-1">Prior Authorization</div>
                            <div className="text-xl font-semibold">
                              {selectedDrug.status === 'Prior Auth' ? 'Required' : 'Not Required'}
                            </div>
                          </div>

                          <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 border border-white/20">
                            <div className="text-blue-100 text-sm mb-1">Formulary Position</div>
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                              <span className="text-lg font-semibold">Covered</span>
                            </div>
                            <div className="text-blue-200 text-sm mt-1">Effective Jan 2024</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Charts and Analytics Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 animate-in slide-in-from-right duration-700 delay-200">
                      {/* Effectiveness Chart */}
                      <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-2 bg-green-100 rounded-lg">
                            <TrendingUp className="w-6 h-6 text-green-600" />
                          </div>
                          <h3 className="text-2xl font-semibold text-gray-900">Clinical Outcomes</h3>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-gray-700 font-medium">HbA1c Reduction</span>
                              <span className="text-blue-600 font-bold text-lg">-1.5%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                              <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-4 rounded-full professional-transition hover:from-blue-600 hover:to-blue-700" style={{width: '85%'}}></div>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">Baseline to 6 months (n=1,247 patients)</div>
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-gray-700 font-medium">Weight Change</span>
                              <span className="text-green-600 font-bold text-lg">-2.3kg</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                              <div className="bg-gradient-to-r from-green-500 to-green-600 h-4 rounded-full professional-transition hover:from-green-600 hover:to-green-700" style={{width: '78%'}}></div>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">Average weight loss at 12 months</div>
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-gray-700 font-medium">CV Risk Reduction</span>
                              <span className="text-purple-600 font-bold text-lg">-14%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                              <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-4 rounded-full professional-transition hover:from-purple-600 hover:to-purple-700" style={{width: '70%'}}></div>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">Major adverse cardiovascular events (MACE)</div>
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-gray-700 font-medium">Renal Protection</span>
                              <span className="text-teal-600 font-bold text-lg">-18%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                              <div className="bg-gradient-to-r from-teal-500 to-teal-600 h-4 rounded-full professional-transition hover:from-teal-600 hover:to-teal-700" style={{width: '72%'}}></div>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">Diabetic nephropathy progression</div>
                          </div>
                        </div>
                      </div>

                      {/* Side Effects Frequency */}
                      <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-2 bg-amber-100 rounded-lg">
                            <AlertCircle className="w-6 h-6 text-amber-600" />
                          </div>
                          <h3 className="text-2xl font-semibold text-gray-900">Safety Profile</h3>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl border border-red-200 hover:bg-red-100 transition-all duration-300">
                            <span className="text-gray-800 font-medium">GI Disturbances</span>
                            <div className="flex items-center gap-3">
                              <div className="w-20 bg-red-200 rounded-full h-3 overflow-hidden">
                                <div className="bg-gradient-to-r from-red-400 to-red-500 h-3 rounded-full professional-transition" style={{width: '45%'}}></div>
                              </div>
                              <span className="text-red-700 font-bold text-sm">25%</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between p-4 bg-amber-50 rounded-xl border border-amber-200 hover:bg-amber-100 transition-all duration-300">
                            <span className="text-gray-800 font-medium">Diarrhea</span>
                            <div className="flex items-center gap-3">
                              <div className="w-20 bg-amber-200 rounded-full h-3 overflow-hidden">
                                <div className="bg-gradient-to-r from-amber-400 to-amber-500 h-3 rounded-full professional-transition" style={{width: '32%'}}></div>
                              </div>
                              <span className="text-amber-700 font-bold text-sm">19%</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl border border-orange-200 hover:bg-orange-100 transition-all duration-300">
                            <span className="text-gray-800 font-medium">Metallic Taste</span>
                            <div className="flex items-center gap-3">
                              <div className="w-20 bg-orange-200 rounded-full h-3 overflow-hidden">
                                <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-3 rounded-full professional-transition" style={{width: '25%'}}></div>
                              </div>
                              <span className="text-orange-700 font-bold text-sm">12%</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-xl border border-yellow-200 hover:bg-yellow-100 transition-all duration-300">
                            <span className="text-gray-800 font-medium">B12 Deficiency</span>
                            <div className="flex items-center gap-3">
                              <div className="w-20 bg-yellow-200 rounded-full h-3 overflow-hidden">
                                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-3 rounded-full professional-transition" style={{width: '15%'}}></div>
                              </div>
                              <span className="text-yellow-700 font-bold text-sm">7%</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-200 hover:bg-green-100 transition-all duration-300">
                            <span className="text-gray-800 font-medium">Hypoglycemia</span>
                            <div className="flex items-center gap-3">
                              <div className="w-20 bg-green-200 rounded-full h-3 overflow-hidden">
                                <div className="bg-gradient-to-r from-green-400 to-green-500 h-3 rounded-full professional-transition" style={{width: '8%'}}></div>
                              </div>
                              <span className="text-green-700 font-bold text-sm">2%</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
                          * Incidence rates from pooled clinical trials (n=3,892 patients)
                        </div>
                      </div>
                    </div>

                    {/* Dosing Guidelines */}
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 mb-12 hover:shadow-2xl transition-all duration-500 animate-in slide-in-from-left duration-700 delay-300">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <Calendar className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900">Dosing & Administration</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                          <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                          <div className="text-xl font-bold text-blue-800 mb-2">Week 1-2</div>
                          <div className="text-2xl font-bold text-gray-900 mb-1">500mg</div>
                          <div className="text-sm text-gray-600 mt-1">Once daily with dinner</div>
                          <div className="text-xs text-blue-600 mt-2 bg-blue-100 px-2 py-1 rounded-full">Initiation</div>
                        </div>
                        <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl border border-indigo-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                          <Calendar className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                          <div className="text-xl font-bold text-indigo-800 mb-2">Week 3-4</div>
                          <div className="text-2xl font-bold text-gray-900 mb-1">1000mg</div>
                          <div className="text-sm text-gray-600 mt-1">Twice daily</div>
                          <div className="text-xs text-indigo-600 mt-2 bg-indigo-100 px-2 py-1 rounded-full">Titration</div>
                        </div>
                        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                          <Calendar className="w-8 h-8 text-green-600 mx-auto mb-3" />
                          <div className="text-xl font-bold text-green-800 mb-2">Week 5+</div>
                          <div className="text-2xl font-bold text-gray-900 mb-1">1700mg</div>
                          <div className="text-sm text-gray-600 mt-1">Divided doses</div>
                          <div className="text-xs text-green-600 mt-2 bg-green-100 px-2 py-1 rounded-full">Maintenance</div>
                        </div>
                        <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl border border-red-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                          <AlertCircle className="w-8 h-8 text-red-600 mx-auto mb-3" />
                          <div className="text-xl font-bold text-red-800 mb-2">Maximum</div>
                          <div className="text-2xl font-bold text-gray-900 mb-1">2550mg</div>
                          <div className="text-sm text-gray-600 mt-1">Daily limit</div>
                          <div className="text-xs text-red-600 mt-2 bg-red-100 px-2 py-1 rounded-full">Do not exceed</div>
                        </div>
                      </div>
                      <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-4">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-amber-900 mb-2">Clinical Considerations</h4>
                            <ul className="text-sm text-amber-800 space-y-1">
                              <li>• Take with food to minimize GI effects</li>
                              <li>• Monitor eGFR before initiation and every 6 months</li>
                              <li>• Dose reduction required if eGFR 30-45 mL/min/1.73m²</li>
                              <li>• Discontinue if eGFR drops below 30 mL/min/1.73m²</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Safety Information */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 animate-in slide-in-from-bottom duration-700 delay-400">
                      <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-3 bg-red-100 rounded-xl">
                            <AlertCircle className="w-8 h-8 text-red-600" />
                          </div>
                          <h3 className="text-2xl font-semibold text-gray-900">Clinical Warnings</h3>
                        </div>
                        <div className="space-y-4">
                          <div className="p-4 bg-red-50 rounded-xl border border-red-200 hover:bg-red-100 transition-all duration-300">
                            <h4 className="font-semibold text-red-900 mb-2">Absolute Contraindications</h4>
                            <ul className="text-gray-700 space-y-1 text-sm">
                              <li>• Severe renal impairment (eGFR &lt; 30 mL/min/1.73m²)</li>
                              <li>• Metabolic acidosis</li>
                              <li>• Diabetic ketoacidosis</li>
                              <li>• Known hypersensitivity to metformin</li>
                            </ul>
                          </div>
                          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 hover:bg-amber-100 transition-all duration-300">
                            <h4 className="font-semibold text-amber-900 mb-2">Black Box Warning</h4>
                            <ul className="text-gray-700 space-y-1 text-sm">
                              <li>• Risk of lactic acidosis - rare but serious</li>
                              <li>• Discontinue before iodinated contrast procedures</li>
                              <li>• Avoid in hemodynamically unstable patients</li>
                            </ul>
                          </div>
                          <div className="p-4 bg-blue-50 rounded-xl border border-blue-200 hover:bg-blue-100 transition-all duration-300">
                            <h4 className="font-semibold text-blue-900 mb-2">Monitoring Parameters</h4>
                            <ul className="text-gray-700 space-y-1 text-sm">
                              <li>• eGFR at baseline, 6 months, then annually</li>
                              <li>• Vitamin B12 levels annually (long-term use)</li>
                              <li>• HbA1c every 3-6 months</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-3 bg-orange-100 rounded-xl">
                            <Shield className="w-8 h-8 text-orange-600" />
                          </div>
                          <h3 className="text-2xl font-semibold text-gray-900">Drug Interactions</h3>
                        </div>
                        <div className="space-y-4">
                          <div className="p-4 bg-red-50 rounded-xl border border-red-200 hover:bg-red-100 transition-all duration-300">
                            <h4 className="font-semibold text-red-900 mb-2">Major Interactions</h4>
                            <ul className="text-gray-700 space-y-1 text-sm">
                              <li>• Iodinated contrast (discontinue 48h before/after)</li>
                              <li>• Alcohol (increased lactic acidosis risk)</li>
                              <li>• Topiramate (increased acidosis risk)</li>
                            </ul>
                          </div>
                          <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-200 hover:bg-yellow-100 transition-all duration-300">
                            <h4 className="font-semibold text-yellow-900 mb-2">Moderate Interactions</h4>
                            <ul className="text-gray-700 space-y-1 text-sm">
                              <li>• Furosemide (altered metformin levels)</li>
                              <li>• Nifedipine (increased absorption)</li>
                              <li>• Cationic drugs (cimetidine, amiloride)</li>
                            </ul>
                          </div>
                          <div className="p-4 bg-green-50 rounded-xl border border-green-200 hover:bg-green-100 transition-all duration-300">
                            <h4 className="font-semibold text-green-900 mb-2">Beneficial Combinations</h4>
                            <ul className="text-gray-700 space-y-1 text-sm">
                              <li>• ACE inhibitors (cardiovascular protection)</li>
                              <li>• Statins (lipid management)</li>
                              <li>• Other antidiabetic agents (synergistic effects)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Patient Counseling Points */}
                    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 shadow-xl border border-blue-200 hover:shadow-2xl transition-all duration-500 animate-in slide-in-from-bottom duration-700 delay-500">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Patient Counseling Key Points</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Clock className="w-6 h-6 text-blue-600" />
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">Timing</h4>
                          <p className="text-gray-600 text-sm">Take with food to minimize gastrointestinal side effects</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Activity className="w-6 h-6 text-green-600" />
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">Monitoring</h4>
                          <p className="text-gray-600 text-sm">Regular blood tests for kidney function and B12 levels</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                          <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Shield className="w-6 h-6 text-amber-600" />
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">Precautions</h4>
                          <p className="text-gray-600 text-sm">Notify healthcare providers before imaging with contrast</p>
                        </div>
                      </div>
                      
                      {/* Additional Patient Education */}
                      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-blue-600" />
                            Expected Benefits
                          </h4>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              Lower blood sugar levels within 2-3 weeks
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              Reduced risk of diabetes complications
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              Possible modest weight loss
                            </li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <AlertCircle className="w-5 h-5 text-amber-600" />
                            When to Contact Provider
                          </h4>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              Persistent nausea, vomiting, or stomach pain
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              Unusual tiredness or weakness
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              Muscle pain or difficulty breathing
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer Actions */}
              <div className={`border-t border-gray-200/50 bg-gradient-to-r from-gray-50 to-blue-50/30 backdrop-blur-sm transition-all duration-500 ${
                isExpanded ? 'p-8' : 'p-6'
              }`}>
                <div className="flex items-center justify-between">
                  <div className={`text-gray-500 transition-all duration-500 ${
                    isExpanded ? 'text-base' : 'text-sm'
                  }`}>
                    Last updated: Today, 3:45 PM
                  </div>
                  <div className="flex gap-3">
                    <button className={`font-medium text-gray-700 bg-white border border-gray-300 rounded-xl shadow-sm hover:bg-gray-50 hover:shadow-md transform hover:scale-105 transition-all duration-300 ${
                      isExpanded ? 'px-8 py-4 text-base' : 'px-4 py-2 text-sm'
                    }`}>
                      Add to Favorites
                    </button>
                    <button className={`font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                      isExpanded ? 'px-8 py-4 text-base' : 'px-4 py-2 text-sm'
                    }`}>
                      Request Prior Auth
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Copyright Footer */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/80 text-sm">
        © 2025 copyright by Akshit.
      </div>
    </div>
  );
}
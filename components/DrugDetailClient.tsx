'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Pill, AlertTriangle, Shield, Clock, Building, User, ChevronDown, ChevronUp } from 'lucide-react';

interface Drug {
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
}

interface DrugDetailClientProps {
  drug: Drug;
}

export default function DrugDetailClient({ drug }: DrugDetailClientProps) {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    overview: true,
    formulary: false,
    clinical: false,
    safety: false
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const formularyOptions = [
    {
      name: 'Metformin HCl',
      strength: '500mg',
      manufacturer: 'Teva Pharmaceuticals',
      ndc: '0093-1074-01',
      tier: 'Tier 1',
      copay: '$10',
      status: 'Preferred',
      coverage: 98,
      quantityLimit: '180 tablets/30 days',
      priorAuth: false
    },
    {
      name: 'Metformin XR',
      strength: '750mg',
      manufacturer: 'Bristol Myers',
      ndc: '0087-6071-13',
      tier: 'Tier 2',
      copay: '$25',
      status: 'Covered',
      coverage: 85,
      quantityLimit: '60 tablets/30 days',
      priorAuth: true
    },
    {
      name: 'Metformin ER',
      strength: '1000mg',
      manufacturer: 'Mylan',
      ndc: '0378-0825-77',
      tier: 'Tier 2',
      copay: '$25',
      status: 'Step Therapy',
      coverage: 76,
      quantityLimit: '30 tablets/30 days',
      priorAuth: true
    },
    {
      name: 'Metformin IR',
      strength: '250mg',
      manufacturer: 'Generic Co.',
      ndc: '0555-0803-02',
      tier: 'Tier 1',
      copay: '$5',
      status: 'Generic',
      coverage: 99,
      quantityLimit: '240 tablets/30 days',
      priorAuth: false
    },
    {
      name: 'Metformin Extended Release',
      strength: '850mg',
      manufacturer: 'Sandoz',
      ndc: '0781-5423-31',
      tier: 'Tier 1',
      copay: '$10',
      status: 'Preferred',
      coverage: 94,
      quantityLimit: '90 tablets/30 days',
      priorAuth: false
    },
    {
      name: 'Metformin Osmotic',
      strength: '1000mg',
      manufacturer: 'Pfizer',
      ndc: '0069-1570-66',
      tier: 'Tier 3',
      copay: '$45',
      status: 'Non-Preferred',
      coverage: 62,
      quantityLimit: '30 tablets/30 days',
      priorAuth: true
    }
  ];

  const coverageBreakdown = {
    medicare: 96,
    commercial: 88,
    medicaid: 92,
    va: 100
  };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Professional Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">{drug.name}</h1>
                <p className="text-sm text-gray-600">{drug.genericName} • {drug.strength}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Last Updated</div>
              <div className="text-sm font-medium text-gray-900">January 15, 2025</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'formulary', label: 'Formulary' },
              { id: 'clinical', label: 'Clinical' },
              { id: 'safety', label: 'Safety' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeSection === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Overview Section */}
        {activeSection === 'overview' && (
          <div className="space-y-6">
            {/* Drug Information Card */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Basic Information */}
                  <div className="lg:col-span-2">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Drug Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <dt className="font-medium text-gray-700">Generic Name</dt>
                        <dd className="text-gray-600 mt-1">{drug.genericName}</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-700">Chemical Name</dt>
                        <dd className="text-gray-600 mt-1">{drug.chemicalName}</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-700">Strength</dt>
                        <dd className="text-gray-600 mt-1">{drug.strength}</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-700">Manufacturer</dt>
                        <dd className="text-gray-600 mt-1">{drug.manufacturer}</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-700">Half-life</dt>
                        <dd className="text-gray-600 mt-1">{drug.halfLife}</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-700">Bioavailability</dt>
                        <dd className="text-gray-600 mt-1">{drug.bioavailability}</dd>
                      </div>
                    </div>
                  </div>

                  {/* Status Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Formulary Status</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                        <span className="text-sm font-medium text-gray-700">{drug.tier}</span>
                        <span className="text-sm font-bold text-gray-900">{drug.copay}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${
                          drug.status === 'Preferred' ? 'bg-green-500' :
                          drug.status === 'Generic' ? 'bg-gray-500' :
                          'bg-blue-500'
                        }`}></div>
                        <span className="text-sm text-gray-700">{drug.status}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                  <p className="text-gray-700 leading-relaxed">{drug.description}</p>
                </div>

                {/* Mechanism of Action */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Mechanism of Action</h3>
                  <p className="text-gray-700 leading-relaxed">{drug.mechanism}</p>
                </div>
              </div>
            </div>

            {/* Indications */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Clinical Indications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {drug.indications.map((indication, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                    <Pill className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700">{indication}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dosage Information */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Dosage Guidelines</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <dt className="font-medium text-gray-700 mb-2">Initial Dose</dt>
                  <dd className="text-gray-600 text-sm">{drug.dosage.initial}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700 mb-2">Maintenance</dt>
                  <dd className="text-gray-600 text-sm">{drug.dosage.maintenance}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700 mb-2">Maximum</dt>
                  <dd className="text-gray-600 text-sm">{drug.dosage.maximum}</dd>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Formulary Section */}
        {activeSection === 'formulary' && (
          <div className="space-y-6">
            {/* Coverage Overview */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Formulary Coverage</h2>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">94%</div>
                  <div className="text-sm text-gray-500">Overall Coverage</div>
                </div>
              </div>

              {/* Coverage by Plan Type */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {Object.entries(coverageBreakdown).map(([plan, percentage]) => (
                  <div key={plan} className="text-center p-4 bg-gray-50 rounded">
                    <div className="text-xl font-bold text-gray-900">{percentage}%</div>
                    <div className="text-sm text-gray-600 capitalize">{plan}</div>
                    <div className="mt-2 bg-gray-200 rounded-full h-1">
                      <div 
                        className="bg-blue-600 h-1 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Formulary Options Table */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Available Formulations</h2>
                <p className="text-sm text-gray-600 mt-1">
                  {formularyOptions.length} formulations available across different tiers
                </p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Drug Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        NDC
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tier
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Copay
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Coverage
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {formularyOptions.map((option, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{option.name}</div>
                            <div className="text-sm text-gray-500">{option.strength} • {option.manufacturer}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 font-mono">{option.ndc}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded ${
                            option.tier === 'Tier 1' ? 'bg-green-100 text-green-800' :
                            option.tier === 'Tier 2' ? 'bg-blue-100 text-blue-800' :
                            'bg-orange-100 text-orange-800'
                          }`}>
                            {option.tier}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{option.copay}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${
                                  option.coverage >= 90 ? 'bg-green-600' :
                                  option.coverage >= 75 ? 'bg-blue-600' :
                                  'bg-orange-600'
                                }`}
                                style={{ width: `${option.coverage}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-700 w-10">{option.coverage}%</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded ${
                              option.status === 'Preferred' ? 'bg-green-100 text-green-800' :
                              option.status === 'Generic' ? 'bg-gray-100 text-gray-800' :
                              option.status === 'Step Therapy' ? 'bg-orange-100 text-orange-800' :
                              option.status === 'Non-Preferred' ? 'bg-red-100 text-red-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {option.status}
                            </span>
                            {option.priorAuth && (
                              <Shield className="w-4 h-4 text-orange-500" title="Prior Authorization Required" />
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Clinical Section */}
        {activeSection === 'clinical' && (
          <div className="space-y-6">
            {/* Clinical Efficacy */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Clinical Efficacy Data</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Primary Endpoints</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">HbA1c Reduction</span>
                      <span className="font-medium text-gray-900">1.5-2.0%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fasting Glucose Reduction</span>
                      <span className="font-medium text-gray-900">60-80 mg/dL</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Weight Change</span>
                      <span className="font-medium text-gray-900">-2 to -5 kg</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Study Population</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sample Size</span>
                      <span className="font-medium text-gray-900">N = 4,570</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Study Duration</span>
                      <span className="font-medium text-gray-900">52 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Evidence Level</span>
                      <span className="font-medium text-gray-900">Level A</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Monitoring Parameters */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Monitoring Parameters</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {drug.monitoring.map((param, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded border-l-4 border-blue-500">
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-blue-600 mt-0.5" />
                      <span className="text-sm text-gray-700">{param}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Drug Interactions */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Drug Interactions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Major Interactions</h3>
                  <ul className="space-y-2">
                    {drug.interactions.map((interaction, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5" />
                        <span className="text-gray-700">{interaction}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Contraindications</h3>
                  <ul className="space-y-2">
                    {drug.contraindications.map((contraindication, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Shield className="w-4 h-4 text-red-500 mt-0.5" />
                        <span className="text-gray-700">{contraindication}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Safety Section */}
        {activeSection === 'safety' && (
          <div className="space-y-6">
            {/* Adverse Effects */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Adverse Effects Profile</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Common (>10%)</h3>
                  <ul className="space-y-2">
                    {drug.sideEffects.common.map((effect, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        {effect}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Serious (<1%)</h3>
                  <ul className="space-y-2">
                    {drug.sideEffects.serious.map((effect, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        {effect}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Special Populations */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Special Populations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded">
                  <h3 className="font-medium text-gray-900 mb-2">Pregnancy</h3>
                  <p className="text-sm text-gray-700">{drug.pregnancy}</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded">
                  <h3 className="font-medium text-gray-900 mb-2">Renal Impairment</h3>
                  <p className="text-sm text-gray-700">Dose adjustment required if CrCl < 60 mL/min</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded">
                  <h3 className="font-medium text-gray-900 mb-2">Hepatic Impairment</h3>
                  <p className="text-sm text-gray-700">Use with caution in moderate impairment</p>
                </div>
              </div>
            </div>

            {/* Storage and Handling */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Storage and Handling</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Storage Conditions</h3>
                  <p className="text-sm text-gray-700">{drug.storage}</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Stability</h3>
                  <p className="text-sm text-gray-700">36 months from date of manufacture when stored appropriately</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
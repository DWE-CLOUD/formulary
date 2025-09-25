'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Pill, 
  Activity, 
  Users, 
  TrendingUp, 
  Shield, 
  Clock,
  ChevronDown,
  ChevronUp,
  Star,
  MapPin,
  Calendar,
  Building,
  Heart,
  Brain,
  Zap,
  Target,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info,
  DollarSign,
  BarChart3,
  Map,
  Stethoscope,
  FileText,
  Network,
  Search,
  Filter,
  Eye,
  PieChart,
  LineChart
} from 'lucide-react';

export default function DrugDetailPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const timer = setTimeout(() => {
      setExpandedSection('clinical');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Formulary Coverage Data
  const formularyPlans = [
    { planId: 'H1234-001', contractId: 'H1234', planName: 'Medicare Advantage Plus', tier: '2', priorAuth: 'N', stepTherapy: 'N', quantityLimit: 'Y', coverage: 92 },
    { planId: 'H5678-002', contractId: 'H5678', planName: 'Senior Choice Premier', tier: '3', priorAuth: 'Y', stepTherapy: 'N', quantityLimit: 'N', coverage: 87 },
    { planId: 'H9101-003', contractId: 'H9101', planName: 'Health First Medicare', tier: '2', priorAuth: 'N', stepTherapy: 'Y', quantityLimit: 'Y', coverage: 94 },
    { planId: 'H1121-004', contractId: 'H1121', planName: 'Golden Years Plan', tier: '4', priorAuth: 'Y', stepTherapy: 'Y', quantityLimit: 'N', coverage: 78 }
  ];

  // Prescribing Behavior Data
  const prescribingData = [
    { region: 'Northeast', totalPrescribers: 2847, totalClaims: 145680, fills30Day: 128934, drugCost: 15678920, beneficiaries: 98456 },
    { region: 'Southeast', totalPrescribers: 3251, totalClaims: 189324, fills30Day: 167892, drugCost: 21456780, beneficiaries: 124567 },
    { region: 'Midwest', totalPrescribers: 2134, totalClaims: 98765, fills30Day: 87654, drugCost: 11234567, beneficiaries: 67890 },
    { region: 'West', totalPrescribers: 2789, totalClaims: 156789, fills30Day: 142345, drugCost: 18765432, beneficiaries: 106789 }
  ];

  // Cost Analysis Data
  const costAnalysis = [
    { plan: 'Medicare Advantage Plus', avgCostPerClaim: 287.45, lisShare: 45.20, nonLisShare: 128.90, patientResponsibility: 32 },
    { plan: 'Senior Choice Premier', avgCostPerClaim: 312.80, lisShare: 52.30, nonLisShare: 145.60, patientResponsibility: 38 },
    { plan: 'Health First Medicare', avgCostPerClaim: 265.70, lisShare: 41.80, nonLisShare: 119.40, patientResponsibility: 29 },
    { plan: 'Golden Years Plan', avgCostPerClaim: 398.90, lisShare: 78.90, nonLisShare: 189.20, patientResponsibility: 47 }
  ];

  // Market Share Data
  const marketShare = {
    brandVsGeneric: { brand: 34, generic: 66 },
    competitiveAnalysis: [
      { drug: 'Ozempic (semaglutide)', marketShare: 42.3, trend: '+12%' },
      { drug: 'Trulicity (dulaglutide)', marketShare: 28.7, trend: '-3%' },
      { drug: 'Victoza (liraglutide)', marketShare: 15.2, trend: '-8%' },
      { drug: 'Generic semaglutide', marketShare: 13.8, trend: '+45%' }
    ]
  };

  // Drug Classification Data
  const drugClassification = {
    opioidFlag: false,
    antibioticFlag: false,
    antipsychoticFlag: false,
    specialtyFlag: true,
    controlledSubstance: false,
    riskCategory: 'Medium',
    dea_schedule: 'N/A'
  };

  // Regional Optimization Data
  const regionalData = [
    { region: 'PDP-01', regionName: 'Connecticut, Maine, Massachusetts, New Hampshire, Rhode Island, Vermont', plans: 23, avgTier: 2.4, accessScore: 87 },
    { region: 'PDP-02', regionName: 'New York', plans: 19, avgTier: 2.8, accessScore: 82 },
    { region: 'PDP-03', regionName: 'New Jersey', plans: 16, avgTier: 2.6, accessScore: 85 },
    { region: 'PDP-04', regionName: 'Pennsylvania', plans: 21, avgTier: 2.3, accessScore: 89 }
  ];

  // Network Analysis Data
  const networkData = {
    totalPharmacies: 67891,
    retailPharmacies: 58234,
    mailOrderPharmacies: 9657,
    coverage: {
      nationwide: 94.2,
      rural: 87.6,
      urban: 96.8
    },
    majorChains: [
      { name: 'CVS Health', locations: 12456, coverage: 'National' },
      { name: 'Walgreens', locations: 11234, coverage: 'National' },
      { name: 'Rite Aid', locations: 6789, coverage: 'Regional' },
      { name: 'Independent', locations: 23456, coverage: 'Local' }
    ]
  };

  const getTierColor = (tier: string) => {
    const colors = { '1': 'bg-green-500', '2': 'bg-blue-500', '3': 'bg-yellow-500', '4': 'bg-orange-500', '5': 'bg-red-500' };
    return colors[tier as keyof typeof colors] || 'bg-gray-500';
  };

  const getRestrictionBadge = (value: string, type: string) => {
    if (value === 'Y') {
      return <Badge variant="destructive" className="text-xs">{type}</Badge>;
    }
    return null;
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
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-900/50 to-indigo-900/60 backdrop-blur-[2px]"></div>
      
      {/* Header */}
      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold text-white">lens.</h1>
            <div className="text-white/80 text-lg">Drug Intelligence Platform</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-white/80 text-sm">
              Last Updated: Today, 3:45 PM
            </div>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-8 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="mb-8 animate-in slide-in-from-bottom duration-800">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg">
                <Pill className="w-12 h-12 text-white" />
              </div>
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-slate-800 mb-2">Ozempic® (semaglutide)</h1>
                <p className="text-xl text-slate-600 mb-4">Injectable GLP-1 Receptor Agonist</p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold text-sm">
                    FDA Approved
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-semibold text-sm">
                    Specialty Drug
                  </div>
                  <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg font-semibold text-sm">
                    Prior Authorization Required
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8 animate-in slide-in-from-bottom duration-800 delay-200">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6">
            <TabsList className="grid w-full grid-cols-7 mb-6">
              <TabsTrigger value="overview" className="text-sm">Overview</TabsTrigger>
              <TabsTrigger value="formulary" className="text-sm">Formulary</TabsTrigger>
              <TabsTrigger value="utilization" className="text-sm">Utilization</TabsTrigger>
              <TabsTrigger value="cost" className="text-sm">Cost Analysis</TabsTrigger>
              <TabsTrigger value="market" className="text-sm">Market Share</TabsTrigger>
              <TabsTrigger value="surveillance" className="text-sm">Surveillance</TabsTrigger>
              <TabsTrigger value="access" className="text-sm">Access</TabsTrigger>
            </TabsList>

            {/* Tab Content */}
            <TabsContent value="overview">
              {renderOverviewContent()}
            </TabsContent>

            <TabsContent value="formulary">
              <div className="space-y-6">
                {/* Formulary Coverage Mapping */}
                <Card className="bg-white/95 backdrop-blur-sm shadow-xl border border-white/20 hover:shadow-2xl professional-transition">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-slate-800">
                      <FileText className="w-6 h-6 text-blue-600" />
                      Formulary Coverage Mapping
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left py-3 px-2 font-semibold text-gray-700">Plan</th>
                            <th className="text-left py-3 px-2 font-semibold text-gray-700">Tier</th>
                            <th className="text-left py-3 px-2 font-semibold text-gray-700">Restrictions</th>
                            <th className="text-left py-3 px-2 font-semibold text-gray-700">Coverage</th>
                          </tr>
                        </thead>
                        <tbody>
                          {formularyPlans.map((plan, index) => (
                            <tr key={plan.planId} className="border-b border-gray-100 hover:bg-blue-50/50">
                              <td className="py-3 px-2">
                                <div>
                                  <div className="font-medium text-gray-900">{plan.planName}</div>
                                  <div className="text-xs text-gray-500">{plan.contractId} • {plan.planId}</div>
                                </div>
                              </td>
                              <td className="py-3 px-2">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white ${getTierColor(plan.tier)}`}>
                                  Tier {plan.tier}
                                </span>
                              </td>
                              <td className="py-3 px-2">
                                <div className="flex flex-wrap gap-1">
                                  {getRestrictionBadge(plan.priorAuth, 'PA')}
                                  {getRestrictionBadge(plan.stepTherapy, 'ST')}
                                  {getRestrictionBadge(plan.quantityLimit, 'QL')}
                                </div>
                              </td>
                              <td className="py-3 px-2">
                                <div className="flex items-center gap-2">
                                  <div className="w-16 bg-gray-200 rounded-full h-2">
                                    <div 
                                      className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" 
                                      style={{ width: `${plan.coverage}%` }}
                                    ></div>
                                  </div>
                                  <span className="text-sm font-medium text-gray-700">{plan.coverage}%</span>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="utilization">
              <div className="space-y-6">
                {/* Prescribing Behavior and Utilization Trends */}
                <Card className="bg-white/95 backdrop-blur-sm shadow-xl border border-white/20 hover:shadow-2xl professional-transition">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-slate-800">
                      <BarChart3 className="w-6 h-6 text-purple-600" />
                      Prescribing Behavior & Utilization Trends
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Regional Utilization Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {prescribingData.map((region, index) => (
                        <div key={region.region} className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-lg border border-purple-100">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                              <Map className="w-4 h-4 text-purple-600" />
                              {region.region}
                            </h4>
                            <Badge variant="secondary">{region.totalPrescribers.toLocaleString()} providers</Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div>
                              <div className="text-gray-600">Total Claims</div>
                              <div className="font-bold text-gray-900">{region.totalClaims.toLocaleString()}</div>
                            </div>
                            <div>
                              <div className="text-gray-600">30-Day Fills</div>
                              <div className="font-bold text-gray-900">{region.fills30Day.toLocaleString()}</div>
                            </div>
                            <div>
                              <div className="text-gray-600">Drug Cost</div>
                              <div className="font-bold text-green-700">${(region.drugCost / 1000000).toFixed(1)}M</div>
                            </div>
                            <div>
                              <div className="text-gray-600">Beneficiaries</div>
                              <div className="font-bold text-blue-700">{region.beneficiaries.toLocaleString()}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Trend Analysis */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-100">
                      <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <LineChart className="w-5 h-5 text-blue-600" />
                        Monthly Trends (Last 12 Months)
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600 mb-1">+12.3%</div>
                          <div className="text-sm text-gray-600">Claims Growth</div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600 mb-1">+8.7%</div>
                          <div className="text-sm text-gray-600">New Prescribers</div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600 mb-1">-3.2%</div>
                          <div className="text-sm text-gray-600">Cost Per Claim</div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full" style={{ width: '42%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="cost">
              <div className="space-y-6">
                {/* Cost, Reimbursement, and Patient Burden Analysis */}
                <Card className="bg-white/95 backdrop-blur-sm shadow-xl border border-white/20 hover:shadow-2xl professional-transition">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-slate-800">
                      <DollarSign className="w-6 h-6 text-green-600" />
                      Cost, Reimbursement & Patient Burden Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Cost Analysis Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {costAnalysis.map((plan, index) => (
                        <div key={plan.plan} className="bg-gradient-to-br from-green-50 to-blue-50 p-5 rounded-lg border border-green-100">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="font-semibold text-gray-800">{plan.plan}</h4>
                            <Badge 
                              variant={plan.patientResponsibility < 30 ? "default" : plan.patientResponsibility < 40 ? "secondary" : "destructive"}
                              className="text-xs"
                            >
                              {plan.patientResponsibility}% Patient Responsibility
                            </Badge>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Avg Cost Per Claim</span>
                              <span className="font-bold text-gray-900">${plan.avgCostPerClaim.toFixed(2)}</span>
                            </div>
                            
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">LIS Beneficiary Share</span>
                                <span className="font-semibold text-blue-700">${plan.lisShare.toFixed(2)}</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" 
                                  style={{ width: `${(plan.lisShare / plan.avgCostPerClaim) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Non-LIS Beneficiary Share</span>
                                <span className="font-semibold text-orange-700">${plan.nonLisShare.toFixed(2)}</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full" 
                                  style={{ width: `${(plan.nonLisShare / plan.avgCostPerClaim) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Cost Comparison Summary */}
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <PieChart className="w-5 h-5 text-green-600" />
                        Cost Impact Summary
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600 mb-1">$316.21</div>
                          <div className="text-sm text-gray-600">Avg Cost/Claim</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600 mb-1">$54.55</div>
                          <div className="text-sm text-gray-600">Avg LIS Share</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-600 mb-1">$145.78</div>
                          <div className="text-sm text-gray-600">Avg Non-LIS Share</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600 mb-1">36.5%</div>
                          <div className="text-sm text-gray-600">Avg Patient Burden</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="market">
              <div className="space-y-6">
                {/* Competitive Market Share Analysis */}
                <Card className="bg-white/95 backdrop-blur-sm shadow-xl border border-white/20 hover:shadow-2xl professional-transition">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-slate-800">
                      <PieChart className="w-6 h-6 text-indigo-600" />
                      Competitive Market Share Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Brand vs Generic */}
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-100">
                      <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5 text-indigo-600" />
                        Brand vs Generic Market Share
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-700">Brand Medications</span>
                            <span className="font-bold text-indigo-600">{marketShare.brandVsGeneric.brand}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div 
                              className="bg-gradient-to-r from-indigo-400 to-indigo-600 h-3 rounded-full" 
                              style={{ width: `${marketShare.brandVsGeneric.brand}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-700">Generic Medications</span>
                            <span className="font-bold text-green-600">{marketShare.brandVsGeneric.generic}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div 
                              className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full" 
                              style={{ width: `${marketShare.brandVsGeneric.generic}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Competitive Analysis */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-purple-600" />
                        Therapeutic Class Competition
                      </h4>
                      <div className="space-y-4">
                        {marketShare.competitiveAnalysis.map((drug, index) => (
                          <div key={drug.drug} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex-1">
                              <div className="font-medium text-gray-900">{drug.drug}</div>
                              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                <div 
                                  className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full" 
                                  style={{ width: `${drug.marketShare * 2}%` }}
                                ></div>
                              </div>
                            </div>
                            <div className="ml-4 text-right">
                              <div className="font-bold text-gray-900">{drug.marketShare}%</div>
                              <Badge 
                                variant={drug.trend.startsWith('+') ? "default" : "destructive"}
                                className="text-xs mt-1"
                              >
                                {drug.trend}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="surveillance">
              <div className="space-y-6">
                {/* Drug Classification & Surveillance */}
                <Card className="bg-white/95 backdrop-blur-sm shadow-xl border border-white/20 hover:shadow-2xl professional-transition">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-slate-800">
                      <Eye className="w-6 h-6 text-red-600" />
                      Opioid & Special Drug Class Surveillance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Drug Classification Status */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className={`p-4 rounded-lg border-2 ${drugClassification.opioidFlag ? 'bg-red-50 border-red-200' : 'bg-gray-50 border-gray-200'}`}>
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-800">Opioid Classification</span>
                          {drugClassification.opioidFlag ? (
                            <AlertTriangle className="w-5 h-5 text-red-600" />
                          ) : (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          )}
                        </div>
                        <div className="mt-2">
                          <Badge variant={drugClassification.opioidFlag ? "destructive" : "default"}>
                            {drugClassification.opioidFlag ? 'Yes' : 'No'}
                          </Badge>
                        </div>
                      </div>

                      <div className={`p-4 rounded-lg border-2 ${drugClassification.antibioticFlag ? 'bg-yellow-50 border-yellow-200' : 'bg-gray-50 border-gray-200'}`}>
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-800">Antibiotic Classification</span>
                          {drugClassification.antibioticFlag ? (
                            <AlertTriangle className="w-5 h-5 text-yellow-600" />
                          ) : (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          )}
                        </div>
                        <div className="mt-2">
                          <Badge variant={drugClassification.antibioticFlag ? "secondary" : "default"}>
                            {drugClassification.antibioticFlag ? 'Yes' : 'No'}
                          </Badge>
                        </div>
                      </div>

                      <div className={`p-4 rounded-lg border-2 ${drugClassification.specialtyFlag ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'}`}>
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-800">Specialty Drug</span>
                          {drugClassification.specialtyFlag ? (
                            <Info className="w-5 h-5 text-blue-600" />
                          ) : (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          )}
                        </div>
                        <div className="mt-2">
                          <Badge variant={drugClassification.specialtyFlag ? "secondary" : "default"}>
                            {drugClassification.specialtyFlag ? 'Yes' : 'No'}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Risk Assessment */}
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border border-orange-100">
                      <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-orange-600" />
                        Risk Assessment & Regulatory Status
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700">Risk Category</span>
                              <Badge 
                                variant={drugClassification.riskCategory === 'High' ? "destructive" : drugClassification.riskCategory === 'Medium' ? "secondary" : "default"}
                              >
                                {drugClassification.riskCategory}
                              </Badge>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700">Controlled Substance</span>
                              <Badge variant={drugClassification.controlledSubstance ? "destructive" : "default"}>
                                {drugClassification.controlledSubstance ? 'Yes' : 'No'}
                              </Badge>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700">DEA Schedule</span>
                              <Badge variant="secondary">
                                {drugClassification.dea_schedule}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="space-y-2">
                            <div className="text-sm text-gray-600">Surveillance Priority</div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                              <div className="bg-gradient-to-r from-orange-400 to-red-500 h-3 rounded-full" style={{ width: '65%' }}></div>
                            </div>
                            <div className="text-xs text-gray-500">Medium Priority (65%)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="access">
              <div className="space-y-6">
                {/* Access & Network Reach */}
                <Card className="bg-white/95 backdrop-blur-sm shadow-xl border border-white/20 hover:shadow-2xl professional-transition">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-slate-800">
                      <Network className="w-6 h-6 text-teal-600" />
                      Access & Network Reach Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Regional Coverage */}
                    <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-lg border border-teal-100">
                      <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <Map className="w-5 h-5 text-teal-600" />
                        Plan & Region Optimization
                      </h4>
                      <div className="space-y-4">
                        {regionalData.map((region, index) => (
                          <div key={region.region} className="bg-white p-4 rounded-lg border border-gray-100">
                            <div className="flex items-center justify-between mb-3">
                              <div>
                                <div className="font-medium text-gray-900">{region.region}</div>
                                <div className="text-sm text-gray-600 max-w-md">{region.regionName}</div>
                              </div>
                              <Badge 
                                variant={region.accessScore > 85 ? "default" : region.accessScore > 80 ? "secondary" : "destructive"}
                              >
                                Access Score: {region.accessScore}%
                              </Badge>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                              <div>
                                <div className="text-gray-600">Available Plans</div>
                                <div className="font-bold text-blue-700">{region.plans}</div>
                              </div>
                              <div>
                                <div className="text-gray-600">Avg Tier Level</div>
                                <div className="font-bold text-purple-700">{region.avgTier}</div>
                              </div>
                              <div>
                                <div className="text-gray-600">Access Score</div>
                                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                                  <div 
                                    className="bg-gradient-to-r from-teal-400 to-teal-600 h-2 rounded-full" 
                                    style={{ width: `${region.accessScore}%` }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Network Analysis */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                          <Building className="w-5 h-5 text-blue-600" />
                          Pharmacy Network Coverage
                        </h4>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="text-gray-600">Total Pharmacies</div>
                              <div className="font-bold text-gray-900">{networkData.totalPharmacies.toLocaleString()}</div>
                            </div>
                            <div>
                              <div className="text-gray-600">Retail Locations</div>
                              <div className="font-bold text-blue-700">{networkData.retailPharmacies.toLocaleString()}</div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700">Nationwide Coverage</span>
                              <span className="font-bold text-green-600">{networkData.coverage.nationwide}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{ width: `${networkData.coverage.nationwide}%` }}></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                          <Stethoscope className="w-5 h-5 text-purple-600" />
                          Major Chain Analysis
                        </h4>
                        <div className="space-y-3">
                          {networkData.majorChains.map((chain, index) => (
                            <div key={chain.name} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                              <div>
                                <div className="font-medium text-gray-900">{chain.name}</div>
                                <div className="text-sm text-gray-600">{chain.coverage}</div>
                              </div>
                              <div className="text-right">
                                <div className="font-bold text-purple-700">{chain.locations.toLocaleString()}</div>
                                <div className="text-xs text-gray-500">locations</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

          </Tabs>
        </div>
      </div>
    </div>
  );

  function renderOverviewContent() {
    return (
      <div className="space-y-6">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="xl:col-span-2 space-y-6">
            {/* Clinical Information */}
            <Card className="bg-white/95 backdrop-blur-sm shadow-xl border border-white/20 hover:shadow-2xl professional-transition animate-in slide-in-from-bottom duration-800 delay-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-slate-800">
                  <Stethoscope className="w-6 h-6 text-blue-600" />
                  Clinical Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100">
                    <div className="text-sm text-gray-600 mb-1">Therapeutic Class</div>
                    <div className="font-semibold text-gray-800">GLP-1 Receptor Agonist</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100">
                    <div className="text-sm text-gray-600 mb-1">Indication</div>
                    <div className="font-semibold text-gray-800">Type 2 Diabetes Mellitus</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-4 rounded-lg border border-purple-100">
                    <div className="text-sm text-gray-600 mb-1">Route of Administration</div>
                    <div className="font-semibold text-gray-800">Subcutaneous Injection</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-lg border border-orange-100">
                    <div className="text-sm text-gray-600 mb-1">Dosing Frequency</div>
                    <div className="font-semibold text-gray-800">Once Weekly</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg border border-gray-200 mt-4">
                  <div className="text-sm text-gray-600 mb-2">Mechanism of Action</div>
                  <div className="text-sm text-gray-800 leading-relaxed">
                    Semaglutide is a glucagon-like peptide-1 (GLP-1) receptor agonist that enhances glucose-dependent insulin secretion, 
                    suppresses glucagon release, slows gastric emptying, and promotes satiety through central appetite regulation.
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Clinical Outcomes */}
            <Card className="bg-white/95 backdrop-blur-sm shadow-xl border border-white/20 hover:shadow-2xl professional-transition animate-in slide-in-from-bottom duration-800 delay-400">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-slate-800">
                  <Activity className="w-6 h-6 text-green-600" />
                  Clinical Outcomes & Efficacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">HbA1c Reduction</span>
                        <span className="text-lg font-bold text-green-700">-1.8%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{width: '90%'}}></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">vs placebo at 30 weeks</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Weight Loss</span>
                        <span className="text-lg font-bold text-blue-700">-6.2kg</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">average at 68 weeks</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-4 rounded-lg border border-purple-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">CV Risk Reduction</span>
                        <span className="text-lg font-bold text-purple-700">-26%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">MACE in SUSTAIN-6</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-lg border border-orange-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Renal Protection</span>
                        <span className="text-lg font-bold text-orange-700">-36%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full" style={{width: '70%'}}></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">nephropathy progression</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Safety Profile */}
            <Card className="bg-white/95 backdrop-blur-sm shadow-xl border border-white/20 hover:shadow-2xl professional-transition animate-in slide-in-from-bottom duration-800 delay-500">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-slate-800">
                  <Shield className="w-6 h-6 text-amber-600" />
                  Safety Profile & Adverse Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-red-50 to-pink-50 p-4 rounded-lg border border-red-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-700">Nausea</span>
                        <span className="font-semibold text-red-700">20.3%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-red-400 to-red-500 h-2 rounded-full" style={{width: '20%'}}></div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-4 rounded-lg border border-orange-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-700">Diarrhea</span>
                        <span className="font-semibold text-orange-700">12.9%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-2 rounded-full" style={{width: '13%'}}></div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-4 rounded-lg border border-yellow-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-700">Vomiting</span>
                        <span className="font-semibold text-yellow-700">8.8%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2 rounded-full" style={{width: '9%'}}></div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-700">Hypoglycemia</span>
                        <span className="font-semibold text-green-700">3.6%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full" style={{width: '4%'}}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg border border-amber-200">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
                      <div>
                        <div className="font-semibold text-amber-900 mb-1">Black Box Warning</div>
                        <div className="text-sm text-amber-800">
                          Risk of thyroid C-cell tumors. Contraindicated in patients with personal or family history of MTC or MEN 2.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Key Metrics */}
          <div className="space-y-6">
            {/* Market Position */}
            <Card className="bg-white/95 backdrop-blur-sm shadow-xl border border-white/20 hover:shadow-2xl professional-transition animate-in slide-in-from-bottom duration-800 delay-600">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-slate-800">
                  <TrendingUp className="w-6 h-6 text-indigo-600" />
                  Market Position
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">#2</div>
                  <div className="text-sm text-gray-600">GLP-1 Market Rank</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Market Share</span>
                    <span className="font-semibold text-gray-800">28.7%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-indigo-400 to-indigo-600 h-2 rounded-full" style={{width: '29%'}}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">YoY Growth</span>
                    <span className="font-semibold text-green-600">+15.2%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{width: '76%'}}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Formulary Coverage */}
            <Card className="bg-white/95 backdrop-blur-sm shadow-xl border border-white/20 hover:shadow-2xl professional-transition animate-in slide-in-from-bottom duration-800 delay-700">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-slate-800">
                  <Shield className="w-6 h-6 text-blue-600" />
                  Formulary Coverage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">87%</div>
                  <div className="text-sm text-gray-600">Plans with Coverage</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Tier 2 Placement</span>
                    <span className="font-semibold text-gray-800">64%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" style={{width: '64%'}}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Prior Auth Required</span>
                    <span className="font-semibold text-orange-600">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full" style={{width: '78%'}}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Utilization Metrics */}
            <Card className="bg-white/95 backdrop-blur-sm shadow-xl border border-white/20 hover:shadow-2xl professional-transition animate-in slide-in-from-bottom duration-800 delay-800">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-slate-800">
                  <Users className="w-6 h-6 text-purple-600" />
                  Utilization Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-purple-600 mb-1">2.4M</div>
                    <div className="text-xs text-gray-600">Total Patients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600 mb-1">18K</div>
                    <div className="text-xs text-gray-600">Prescribers</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Avg Days Supply</span>
                    <span className="font-semibold text-gray-800">84 days</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Adherence Rate</span>
                    <span className="font-semibold text-green-600">76%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{width: '76%'}}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Discontinuation Rate</span>
                    <span className="font-semibold text-red-600">24%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-red-400 to-red-600 h-2 rounded-full" style={{width: '24%'}}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cost Analysis */}
            <Card className="bg-white/95 backdrop-blur-sm shadow-xl border border-white/20 hover:shadow-2xl professional-transition animate-in slide-in-from-bottom duration-800 delay-900">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-slate-800">
                  <Target className="w-6 h-6 text-green-600" />
                  Cost Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">$936</div>
                  <div className="text-sm text-gray-600">Avg Monthly Cost</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Patient Copay</span>
                    <span className="font-semibold text-gray-800">$25-$150</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Plan Coverage</span>
                    <span className="font-semibold text-blue-600">75-85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg border border-green-100">
                    <div className="text-xs text-green-800 font-medium mb-1">Cost-Effectiveness</div>
                    <div className="text-sm text-green-700">
                      $12,400 per QALY gained vs standard care
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowLeft, 
  TrendingUp, 
  DollarSign, 
  Users, 
  MapPin, 
  Shield, 
  AlertTriangle,
  BarChart3,
  PieChart,
  Activity,
  Calendar,
  Building2,
  Pill,
  FileText,
  Target,
  Globe,
  Stethoscope
} from 'lucide-react';

// Mock comprehensive formulary data
const formularyData = {
  metformin: {
    basicInfo: {
      brandName: 'Glucophage',
      genericName: 'Metformin HCl',
      rxcui: '6809',
      ndc: ['0781-5512-01', '0093-1060-01', '0004-0062-01'],
      strength: '500mg, 850mg, 1000mg',
      dosageForm: 'Tablet, Extended Release',
      manufacturer: 'Bristol-Myers Squibb, Teva, Pfizer'
    },
    formularyMapping: [
      {
        contractId: 'H5432',
        planId: '001',
        planName: 'Medicare Advantage Plus',
        tierLevel: 1,
        priorAuth: false,
        stepTherapy: false,
        quantityLimit: false,
        coverage: 'Preferred Generic',
        copay: '$5'
      },
      {
        contractId: 'S9876',
        planId: '002', 
        planName: 'Premium Care Select',
        tierLevel: 2,
        priorAuth: true,
        stepTherapy: false,
        quantityLimit: true,
        coverage: 'Non-Preferred Generic',
        copay: '$15'
      },
      {
        contractId: 'H1234',
        planId: '003',
        planName: 'Basic Medicare Plan',
        tierLevel: 1,
        priorAuth: false,
        stepTherapy: false,
        quantityLimit: false,
        coverage: 'Preferred Generic',
        copay: '$3'
      }
    ],
    utilizationTrends: {
      totalPrescribers: 45789,
      totalClaims: 2456789,
      total30DayFills: 1234567,
      totalDrugCost: 89765432,
      totalBeneficiaries: 876543,
      monthlyTrends: [
        { month: 'Jan 2024', claims: 198000, cost: 7200000, prescribers: 3890 },
        { month: 'Feb 2024', claims: 201000, cost: 7450000, prescribers: 3920 },
        { month: 'Mar 2024', claims: 215000, cost: 7800000, prescribers: 4010 },
        { month: 'Apr 2024', claims: 220000, cost: 7950000, prescribers: 4050 },
        { month: 'May 2024', claims: 225000, cost: 8100000, prescribers: 4100 },
        { month: 'Jun 2024', claims: 235000, cost: 8400000, prescribers: 4180 }
      ]
    },
    costAnalysis: {
      avgCostPerClaim: 36.52,
      lisBeneCostShare: 8.45,
      nonLisBeneCostShare: 28.07,
      planCosts: [
        { planName: 'Medicare Advantage Plus', avgCost: 32.15, patientCost: 5.00 },
        { planName: 'Premium Care Select', avgCost: 38.90, patientCost: 15.00 },
        { planName: 'Basic Medicare Plan', avgCost: 34.75, patientCost: 3.00 }
      ]
    },
    marketShare: {
      brandVsGeneric: [
        { category: 'Generic Metformin', claims: 2100000, percentage: 85.4 },
        { category: 'Glucophage (Brand)', claims: 256789, percentage: 10.4 },
        { category: 'Other Brands', claims: 100000, percentage: 4.2 }
      ],
      therapeuticClass: 'Antidiabetic - Biguanides',
      competitorAnalysis: [
        { drug: 'Metformin', marketShare: 65.2, trend: '+2.1%' },
        { drug: 'Glipizide', marketShare: 18.4, trend: '-1.8%' },
        { drug: 'Glyburide', marketShare: 12.1, trend: '-3.2%' },
        { drug: 'Pioglitazone', marketShare: 4.3, trend: '+0.5%' }
      ]
    },
    specialClassification: {
      opioidFlag: false,
      antibiticFlag: false,
      antipsychoticFlag: false,
      controlledSubstance: false,
      specialtyDrug: false,
      riskCategories: ['Diabetes Management', 'First-Line Therapy']
    },
    regionalOptimization: [
      {
        region: 'Northeast (Region 1)',
        planCount: 45,
        avgTierLevel: 1.2,
        avgCopay: '$6.50',
        accessibility: 'Excellent',
        utilization: 'High'
      },
      {
        region: 'Southeast (Region 2)', 
        planCount: 52,
        avgTierLevel: 1.4,
        avgCopay: '$8.25',
        accessibility: 'Good',
        utilization: 'Very High'
      },
      {
        region: 'Midwest (Region 3)',
        planCount: 38,
        avgTierLevel: 1.1,
        avgCopay: '$5.75',
        accessibility: 'Excellent',
        utilization: 'Moderate'
      }
    ],
    networkAccess: {
      totalPharmacies: 67890,
      retailPharmacies: 58902,
      mailOrderPharmacies: 8988,
      coverageByPlan: [
        { planName: 'Medicare Advantage Plus', retailCount: 19500, mailCount: 2800, coverage: '98.5%' },
        { planName: 'Premium Care Select', retailCount: 21200, mailCount: 3200, coverage: '97.8%' },
        { planName: 'Basic Medicare Plan', retailCount: 18200, mailCount: 2988, coverage: '99.2%' }
      ]
    }
  }
};

// Animation classes
const animationClasses = {
  fadeIn: 'animate-in slide-in-from-bottom duration-800',
  slideInLeft: 'animate-in slide-in-from-left duration-600',
  staggered: (index: number) => `animate-in slide-in-from-bottom duration-500 delay-[${index * 100}ms]`
};

export default function FormularySystem() {
  const [selectedDrug, setSelectedDrug] = useState<string | null>('metformin');
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(false);

  const drugData = selectedDrug ? formularyData[selectedDrug as keyof typeof formularyData] : null;

  const handleDrugSelect = (drugKey: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedDrug(drugKey);
      setIsLoading(false);
    }, 300);
  };

  if (!selectedDrug || !drugData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Comprehensive Formulary System</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.keys(formularyData).map((drugKey, index) => (
              <Card 
                key={drugKey}
                className={`cursor-pointer hover:shadow-lg transition-all duration-300 ${animationClasses.staggered(index)}`}
                onClick={() => handleDrugSelect(drugKey)}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold capitalize text-gray-900">{drugKey}</h3>
                  <p className="text-gray-600 mt-2">Click to view detailed formulary analysis</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => setSelectedDrug(null)}
                className="hover:bg-gray-100"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Formulary
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {drugData.basicInfo.brandName}
                </h1>
                <p className="text-gray-600">{drugData.basicInfo.genericName}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                Tier 1 Available
              </Badge>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                Generic Available
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-7 bg-white shadow-sm">
            <TabsTrigger value="overview" className="flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="formulary" className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Formulary</span>
            </TabsTrigger>
            <TabsTrigger value="utilization" className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>Utilization</span>
            </TabsTrigger>
            <TabsTrigger value="costs" className="flex items-center space-x-2">
              <DollarSign className="w-4 h-4" />
              <span>Costs</span>
            </TabsTrigger>
            <TabsTrigger value="market" className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4" />
              <span>Market</span>
            </TabsTrigger>
            <TabsTrigger value="regions" className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Regions</span>
            </TabsTrigger>
            <TabsTrigger value="network" className="flex items-center space-x-2">
              <Building2 className="w-4 h-4" />
              <span>Network</span>
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Basic Drug Information */}
              <Card className={`lg:col-span-2 ${animationClasses.fadeIn}`}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Pill className="w-5 h-5 text-blue-600" />
                    <span>Drug Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-500">Brand Name</label>
                        <p className="text-lg font-semibold text-gray-900">{drugData.basicInfo.brandName}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Generic Name</label>
                        <p className="text-gray-900">{drugData.basicInfo.genericName}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">RxCUI</label>
                        <p className="font-mono text-gray-900">{drugData.basicInfo.rxcui}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-500">Strength</label>
                        <p className="text-gray-900">{drugData.basicInfo.strength}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Dosage Form</label>
                        <p className="text-gray-900">{drugData.basicInfo.dosageForm}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Manufacturer</label>
                        <p className="text-gray-900">{drugData.basicInfo.manufacturer}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">NDC Numbers</label>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {drugData.basicInfo.ndc.map((ndc, index) => (
                        <Badge key={index} variant="outline" className="font-mono">
                          {ndc}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className={animationClasses.slideInLeft}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="w-5 h-5 text-green-600" />
                    <span>Quick Stats</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Total Prescribers</span>
                      <span className="font-semibold">{drugData.utilizationTrends.totalPrescribers.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Total Claims</span>
                      <span className="font-semibold">{drugData.utilizationTrends.totalClaims.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">30-Day Fills</span>
                      <span className="font-semibold">{drugData.utilizationTrends.total30DayFills.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Total Beneficiaries</span>
                      <span className="font-semibold">{drugData.utilizationTrends.totalBeneficiaries.toLocaleString()}</span>
                    </div>
                    <div className="pt-2 border-t">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Total Drug Cost</span>
                        <span className="font-semibold text-green-600">
                          ${(drugData.utilizationTrends.totalDrugCost / 1000000).toFixed(1)}M
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Classification & Flags */}
            <Card className={animationClasses.fadeIn}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  <span>Drug Classification & Special Flags</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  <div className="text-center">
                    <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center ${
                      drugData.specialClassification.opioidFlag ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-400'
                    }`}>
                      <Pill className="w-6 h-6" />
                    </div>
                    <p className="text-sm mt-2">Opioid</p>
                    <p className="text-xs text-gray-500">
                      {drugData.specialClassification.opioidFlag ? 'Yes' : 'No'}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center ${
                      drugData.specialClassification.antibiticFlag ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'
                    }`}>
                      <Shield className="w-6 h-6" />
                    </div>
                    <p className="text-sm mt-2">Antibiotic</p>
                    <p className="text-xs text-gray-500">
                      {drugData.specialClassification.antibiticFlag ? 'Yes' : 'No'}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center ${
                      drugData.specialClassification.antipsychoticFlag ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-400'
                    }`}>
                      <Stethoscope className="w-6 h-6" />
                    </div>
                    <p className="text-sm mt-2">Antipsychotic</p>
                    <p className="text-xs text-gray-500">
                      {drugData.specialClassification.antipsychoticFlag ? 'Yes' : 'No'}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center ${
                      drugData.specialClassification.controlledSubstance ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-400'
                    }`}>
                      <AlertTriangle className="w-6 h-6" />
                    </div>
                    <p className="text-sm mt-2">Controlled</p>
                    <p className="text-xs text-gray-500">
                      {drugData.specialClassification.controlledSubstance ? 'Yes' : 'No'}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center ${
                      drugData.specialClassification.specialtyDrug ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                    }`}>
                      <Target className="w-6 h-6" />
                    </div>
                    <p className="text-sm mt-2">Specialty</p>
                    <p className="text-xs text-gray-500">
                      {drugData.specialClassification.specialtyDrug ? 'Yes' : 'No'}
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t">
                  <h4 className="font-medium text-gray-900 mb-2">Risk Categories</h4>
                  <div className="flex flex-wrap gap-2">
                    {drugData.specialClassification.riskCategories.map((category, index) => (
                      <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Formulary Coverage Tab */}
          <TabsContent value="formulary" className="space-y-6">
            <Card className={animationClasses.fadeIn}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span>Formulary Coverage & Restrictions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {drugData.formularyMapping.map((plan, index) => (
                    <div key={index} className={`p-4 border rounded-lg hover:shadow-md transition-shadow ${animationClasses.staggered(index)}`}>
                      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900">{plan.planName}</h4>
                          <p className="text-sm text-gray-600">Contract: {plan.contractId}</p>
                          <p className="text-sm text-gray-600">Plan: {plan.planId}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div>
                            <Badge 
                              className={`${
                                plan.tierLevel === 1 ? 'bg-green-100 text-green-800' :
                                plan.tierLevel === 2 ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                              }`}
                            >
                              Tier {plan.tierLevel}
                            </Badge>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-green-600">{plan.copay}</p>
                            <p className="text-xs text-gray-500">Copay</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{plan.coverage}</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {plan.priorAuth && (
                              <Badge variant="outline" className="text-xs bg-red-50 text-red-700 border-red-200">
                                Prior Auth
                              </Badge>
                            )}
                            {plan.stepTherapy && (
                              <Badge variant="outline" className="text-xs bg-orange-50 text-orange-700 border-orange-200">
                                Step Therapy
                              </Badge>
                            )}
                            {plan.quantityLimit && (
                              <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                                Quantity Limit
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Utilization Trends Tab */}
          <TabsContent value="utilization" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className={animationClasses.fadeIn}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    <span>Monthly Claims Trend</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {drugData.utilizationTrends.monthlyTrends.map((month, index) => (
                      <div key={index} className={`space-y-2 ${animationClasses.staggered(index)}`}>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-600">{month.month}</span>
                          <span className="text-sm font-semibold text-gray-900">
                            {month.claims.toLocaleString()} claims
                          </span>
                        </div>
                        <Progress 
                          value={(month.claims / Math.max(...drugData.utilizationTrends.monthlyTrends.map(m => m.claims))) * 100} 
                          className="h-2"
                        />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>${(month.cost / 1000000).toFixed(1)}M cost</span>
                          <span>{month.prescribers.toLocaleString()} prescribers</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className={animationClasses.slideInLeft}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-green-600" />
                    <span>Utilization Metrics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600">
                        {drugData.utilizationTrends.totalPrescribers.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">Total Prescribers</div>
                      <div className="text-xs text-green-600 mt-1">↑ 8.2% vs last year</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-xl font-semibold text-green-600">
                          {(drugData.utilizationTrends.totalClaims / 1000000).toFixed(1)}M
                        </div>
                        <div className="text-xs text-gray-600">Total Claims</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-xl font-semibold text-purple-600">
                          {(drugData.utilizationTrends.total30DayFills / 1000000).toFixed(1)}M
                        </div>
                        <div className="text-xs text-gray-600">30-Day Fills</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Claims Growth Rate</span>
                        <Badge className="bg-green-100 text-green-800">+12.4%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Seasonal Variation</span>
                        <Badge className="bg-blue-100 text-blue-800">Low</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Geographic Spread</span>
                        <Badge className="bg-purple-100 text-purple-800">National</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Cost Analysis Tab */}
          <TabsContent value="costs" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className={animationClasses.fadeIn}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <span>Cost Breakdown Analysis</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">
                        ${drugData.costAnalysis.avgCostPerClaim}
                      </div>
                      <div className="text-sm text-gray-600">Average Cost Per Claim</div>
                      <div className="text-xs text-green-600 mt-1">↓ 2.1% vs last quarter</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="text-lg font-semibold text-blue-600">
                          ${drugData.costAnalysis.lisBeneCostShare}
                        </div>
                        <div className="text-xs text-gray-600">LIS Beneficiary Share</div>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <div className="text-lg font-semibold text-purple-600">
                          ${drugData.costAnalysis.nonLisBeneCostShare}
                        </div>
                        <div className="text-xs text-gray-600">Non-LIS Beneficiary Share</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium text-gray-900 mb-3">Cost Impact Distribution</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Plan Costs</span>
                        <span className="font-semibold">${(drugData.costAnalysis.avgCostPerClaim * 0.77).toFixed(2)}</span>
                      </div>
                      <Progress value={77} className="h-2" />
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Patient Costs</span>
                        <span className="font-semibold">${(drugData.costAnalysis.avgCostPerClaim * 0.23).toFixed(2)}</span>
                      </div>
                      <Progress value={23} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={animationClasses.slideInLeft}>
                <CardHeader>
                  <CardTitle>Plan-Specific Cost Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {drugData.costAnalysis.planCosts.map((plan, index) => (
                      <div key={index} className={`p-4 border rounded-lg hover:shadow-md transition-shadow ${animationClasses.staggered(index)}`}>
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-gray-900">{plan.planName}</h4>
                          <Badge 
                            className={`${
                              plan.avgCost < 35 ? 'bg-green-100 text-green-800' :
                              plan.avgCost < 38 ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}
                          >
                            ${plan.avgCost}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Average Cost:</span>
                            <div className="font-semibold">${plan.avgCost}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">Patient Cost:</span>
                            <div className="font-semibold text-green-600">${plan.patientCost.toFixed(2)}</div>
                          </div>
                        </div>
                        <div className="mt-2">
                          <Progress 
                            value={(plan.patientCost / plan.avgCost) * 100} 
                            className="h-1" 
                          />
                          <div className="text-xs text-gray-500 mt-1">
                            {((plan.patientCost / plan.avgCost) * 100).toFixed(1)}% patient responsibility
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Market Share Tab */}
          <TabsContent value="market" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className={animationClasses.fadeIn}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <PieChart className="w-5 h-5 text-purple-600" />
                    <span>Brand vs Generic Market Share</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {drugData.marketShare.brandVsGeneric.map((segment, index) => (
                      <div key={index} className={`space-y-2 ${animationClasses.staggered(index)}`}>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">{segment.category}</span>
                          <span className="font-semibold text-gray-900">{segment.percentage}%</span>
                        </div>
                        <Progress value={segment.percentage} className="h-3" />
                        <div className="text-xs text-gray-500">
                          {segment.claims.toLocaleString()} claims
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t">
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Therapeutic Class</p>
                      <p className="font-semibold text-gray-900">{drugData.marketShare.therapeuticClass}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={animationClasses.slideInLeft}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                    <span>Competitive Analysis</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {drugData.marketShare.competitorAnalysis.map((competitor, index) => (
                      <div key={index} className={`p-3 border rounded-lg hover:bg-gray-50 transition-colors ${animationClasses.staggered(index)}`}>
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium text-gray-900">{competitor.drug}</h4>
                          <div className="flex items-center space-x-2">
                            <Badge 
                              className={`${
                                competitor.trend.includes('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                              }`}
                            >
                              {competitor.trend}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">Market Share</span>
                          <span className="font-semibold">{competitor.marketShare}%</span>
                        </div>
                        <Progress value={competitor.marketShare} className="h-2 mt-2" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t text-center">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <div className="text-lg font-semibold text-green-600">65.2%</div>
                        <div className="text-xs text-gray-600">Market Leader</div>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="text-lg font-semibold text-blue-600">+2.1%</div>
                        <div className="text-xs text-gray-600">Growth Rate</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Regional Optimization Tab */}
          <TabsContent value="regions" className="space-y-6">
            <Card className={animationClasses.fadeIn}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <span>Regional Plan Optimization</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {drugData.regionalOptimization.map((region, index) => (
                    <div key={index} className={`p-6 border rounded-xl hover:shadow-lg transition-all duration-300 ${animationClasses.staggered(index)}`}>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-900">{region.region}</h3>
                        <Badge 
                          className={`${
                            region.accessibility === 'Excellent' ? 'bg-green-100 text-green-800' :
                            region.accessibility === 'Good' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {region.accessibility}
                        </Badge>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Plan Count</span>
                          <span className="font-semibold">{region.planCount}</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Avg Tier Level</span>
                          <Badge 
                            className={`${
                              region.avgTierLevel <= 1.2 ? 'bg-green-100 text-green-800' :
                              region.avgTierLevel <= 1.4 ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}
                          >
                            {region.avgTierLevel}
                          </Badge>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Avg Copay</span>
                          <span className="font-semibold text-green-600">{region.avgCopay}</span>
                        </div>
                        
                        <div className="pt-3 border-t">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-600">Utilization</span>
                            <span className="text-sm font-medium">{region.utilization}</span>
                          </div>
                          <Progress 
                            value={
                              region.utilization === 'Very High' ? 90 :
                              region.utilization === 'High' ? 75 :
                              region.utilization === 'Moderate' ? 50 : 25
                            } 
                            className="h-2" 
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Network Access Tab */}
          <TabsContent value="network" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className={animationClasses.fadeIn}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building2 className="w-5 h-5 text-indigo-600" />
                    <span>Pharmacy Network Overview</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="text-center p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-indigo-600">
                        {drugData.networkAccess.totalPharmacies.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">Total Pharmacies</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">98.5%</div>
                      <div className="text-sm text-gray-600">Avg Coverage</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Retail Pharmacies</span>
                        <span className="font-semibold">{drugData.networkAccess.retailPharmacies.toLocaleString()}</span>
                      </div>
                      <Progress value={87} className="h-2" />
                      <div className="text-xs text-gray-500 mt-1">87% of total network</div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Mail Order Pharmacies</span>
                        <span className="font-semibold">{drugData.networkAccess.mailOrderPharmacies.toLocaleString()}</span>
                      </div>
                      <Progress value={13} className="h-2" />
                      <div className="text-xs text-gray-500 mt-1">13% of total network</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={animationClasses.slideInLeft}>
                <CardHeader>
                  <CardTitle>Plan-Specific Network Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {drugData.networkAccess.coverageByPlan.map((plan, index) => (
                      <div key={index} className={`p-4 border rounded-lg hover:shadow-md transition-shadow ${animationClasses.staggered(index)}`}>
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-medium text-gray-900">{plan.planName}</h4>
                          <Badge className="bg-green-100 text-green-800">
                            {plan.coverage}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                          <div>
                            <span className="text-gray-600">Retail Pharmacies</span>
                            <div className="font-semibold">{plan.retailCount.toLocaleString()}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">Mail Order</span>
                            <div className="font-semibold">{plan.mailCount.toLocaleString()}</div>
                          </div>
                        </div>
                        
                        <div>
                          <Progress 
                            value={parseFloat(plan.coverage.replace('%', ''))} 
                            className="h-2" 
                          />
                          <div className="text-xs text-gray-500 mt-1">
                            Network coverage percentage
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
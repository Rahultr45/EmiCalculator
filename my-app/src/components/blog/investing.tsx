import { 

  TrendingUp,
  Shield,
  BarChart3,
  Building,
  AlertCircle,
  Info,
  Ban,
  ArrowRight,
  ArrowLeft,
  
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

const InvestmentSchemesPage = () => {
  const investmentOptions = [
    {
      icon: <Ban className="h-6 w-6 text-blue-600" />,
      title: "Fixed Deposits",
      description: "Secure investments with guaranteed returns",
      details: {
        riskLevel: "Low",
        returnPotential: "5-7% p.a.",
        liquidityLevel: "Medium",
        minInvestment: "₹1,000",
        suggestedTimeframe: "1-5 years"
      },
      benefits: [
        "Guaranteed returns",
        "Multiple tenure options",
        "Regular interest payouts"
      ]
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
      title: "Mutual Funds",
      description: "Professional managed diversified investments",
      details: {
        riskLevel: "Low to High",
        returnPotential: "8-15% p.a.",
        liquidityLevel: "High",
        minInvestment: "₹500",
        suggestedTimeframe: "3-7 years"
      },
      benefits: [
        "Professional management",
        "Portfolio diversification",
        "Systematic investment options"
      ]
    },
    {
      icon: <Building className="h-6 w-6 text-purple-600" />,
      title: "Real Estate Investment",
      description: "Tangible assets with rental income potential",
      details: {
        riskLevel: "Medium",
        returnPotential: "8-12% p.a.",
        liquidityLevel: "Low",
        minInvestment: "₹5,00,000",
        suggestedTimeframe: "5-10 years"
      },
      benefits: [
        "Regular rental income",
        "Property appreciation",
        "Tax benefits"
      ]
    },
    {
      icon: <Shield className="h-6 w-6 text-red-600" />,
      title: "Government Bonds",
      description: "Safe government-backed investment options",
      details: {
        riskLevel: "Very Low",
        returnPotential: "6-8% p.a.",
        liquidityLevel: "Medium",
        minInvestment: "₹1,000",
        suggestedTimeframe: "5-15 years"
      },
      benefits: [
        "Government backing",
        "Tax-free options available",
        "Regular interest payments"
      ]
    }
  ];

  const investmentStrategies = [
    {
      title: "Conservative Strategy",
      allocation: [
        { type: "Fixed Deposits", percentage: 40 },
        { type: "Government Bonds", percentage: 30 },
        { type: "Blue-chip Stocks", percentage: 20 },
        { type: "Cash", percentage: 10 }
      ]
    },
    {
      title: "Balanced Strategy",
      allocation: [
        { type: "Mutual Funds", percentage: 40 },
        { type: "Fixed Deposits", percentage: 25 },
        { type: "Stocks", percentage: 25 },
        { type: "Cash", percentage: 10 }
      ]
    },
    {
      title: "Aggressive Strategy",
      allocation: [
        { type: "Stocks", percentage: 50 },
        { type: "Mutual Funds", percentage: 30 },
        { type: "Real Estate", percentage: 15 },
        { type: "Cash", percentage: 5 }
      ]
    }
  ];

  const riskFactors = [
    {
      title: "Market Risk",
      description: "Potential for investment value fluctuation due to market conditions"
    },
    {
      title: "Inflation Risk",
      description: "Risk of investment returns not keeping pace with inflation"
    },
    {
      title: "Liquidity Risk",
      description: "Difficulty in converting investments to cash quickly"
    },
    {
      title: "Credit Risk",
      description: "Risk of default by the investment issuer"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className=" shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-[24px]">
        <a
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </a>
          <div className="text-center mt-[50px]">
          <h2 className="md:text-[44px] text-[28px] font-bold text-gray-900 mb-4">Investment Schemes</h2>
          <p className="text-lg text-gray-600">Discover the right investment options for your financial goals</p>
        </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Investment Options Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {investmentOptions.map((option, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {option.icon}
                  <CardTitle className="text-xl font-bold">{option.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold mb-2">Key Details</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm">
                      <span className="text-gray-600">Risk Level: </span>
                      <span className="font-medium">{option.details.riskLevel}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-600">Returns: </span>
                      <span className="font-medium">{option.details.returnPotential}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-600">Liquidity: </span>
                      <span className="font-medium">{option.details.liquidityLevel}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-600">Min Investment: </span>
                      <span className="font-medium">{option.details.minInvestment}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Benefits</h4>
                  <ul className="space-y-2">
                    {option.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-green-500" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Investment Strategies Section */}
        <div className="bg-blue-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <BarChart3 className="h-6 w-6 mr-2 text-blue-600" />
            Investment Strategies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {investmentStrategies.map((strategy, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{strategy.title}</h3>
                <ul className="space-y-2">
                  {strategy.allocation.map((item, idx) => (
                    <li key={idx} className="flex justify-between text-gray-600">
                      <span>{item.type}</span>
                      <span className="font-medium">{item.percentage}%</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Factors Section */}
        <div className="bg-red-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <AlertCircle className="h-6 w-6 mr-2 text-red-600" />
            Risk Considerations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {riskFactors.map((risk, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                  <Info className="h-5 w-5 mr-2 text-red-500" />
                  {risk.title}
                </h3>
                <p className="text-gray-600">{risk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentSchemesPage;
import {
  Calendar,
  TrendingDown,
  Shield,
  Calculator,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../ui/card";

const EMITipsPage = () => {
  const tips = [
    {
      icon: <Calculator className="h-6 w-6 text-blue-600" />,
      title: "Compare Different Loan Tenures",
      description:
        "Calculate EMIs for different loan durations. While longer tenures mean lower EMIs, they result in higher total interest. Find the sweet spot between affordable EMIs and reasonable interest costs.",
      actionItems: [
        "Use EMI calculator to compare different scenarios",
        "Consider your monthly budget constraints",
        "Factor in potential income growth",
      ],
    },
    {
      icon: <TrendingDown className="h-6 w-6 text-green-600" />,
      title: "Make Higher Down Payments",
      description:
        "A larger down payment reduces your loan amount, resulting in lower EMIs and less total interest paid over the loan tenure.",
      actionItems: [
        "Save at least 20% of asset value as down payment",
        "Consider liquidating low-yield investments",
        "Look for seasonal discounts or offers",
      ],
    },
    {
      icon: <Calendar className="h-6 w-6 text-purple-600" />,
      title: "Choose the Right Payment Date",
      description:
        "Align your EMI date with your salary credit date to ensure smooth payments and maintain a good credit score.",
      actionItems: [
        "Keep a 2-3 day buffer after salary credit",
        "Maintain sufficient account balance",
        "Set up automatic payments",
      ],
    },
    {
      icon: <Shield className="h-6 w-6 text-red-600" />,
      title: "Maintain a Good Credit Score",
      description:
        "A higher credit score can help you negotiate better interest rates, ultimately reducing your EMI burden.",
      actionItems: [
        "Pay all EMIs and credit card bills on time",
        "Keep credit utilization below 30%",
        "Regularly check your credit report",
      ],
    },
  ];

  const commonMistakes = [
    {
      title: "Not Reading the Fine Print",
      description:
        "Always understand all terms and conditions, especially prepayment penalties and processing fees.",
    },
    {
      title: "Ignoring Insurance",
      description:
        "Loan protection insurance can safeguard your family from EMI burden in unforeseen circumstances.",
    },
    {
      title: "Taking Too Many Loans",
      description:
        "Multiple EMIs should not exceed 50% of your monthly income to maintain financial health.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <a
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </a>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Smart EMI Management Tips
          </h1>
          <p className="text-lg text-gray-600">
            Master your loan payments with these expert strategies and
            guidelines
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Tips Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {tips.map((tip, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {tip.icon}
                  <CardTitle className="text-xl font-bold">
                    {tip.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{tip.description}</p>
                <ul className="space-y-2">
                  {tip.actionItems.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Common Mistakes Section */}
        <div className="bg-red-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <AlertCircle className="h-6 w-6 mr-2 text-red-500" />
            Common EMI Mistakes to Avoid
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commonMistakes.map((mistake, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {mistake.title}
                </h3>
                <p className="text-gray-600">{mistake.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick EMI Calculator */}
        <div className="bg-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Calculator className="h-6 w-6 mr-2 text-blue-600" />
            Quick EMI Calculation Guide
          </h2>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  EMI Formula
                </h3>
                <p className="text-gray-600 mb-4">
                  EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>P = Principal loan amount</li>
                  <li>r = Interest rate per month</li>
                  <li>n = Total number of months</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Pro Tips
                </h3>
                <ul className="space-y-2">
                  {[
                    "Convert annual interest rate to monthly (divide by 12)",
                    "Consider all fees and charges",
                    "Account for income tax benefits if applicable",
                  ].map((tip, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span className="text-gray-600">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMITipsPage;

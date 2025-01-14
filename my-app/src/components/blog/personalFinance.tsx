import {
  PiggyBank,
  TrendingUp,
  Shield,
  Target,
  ArrowUpCircle,
  ArrowDownCircle,
  BarChart3,
  BookOpen,
  ChevronRight,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../ui/card";

const PersonalFinancePage = () => {
  const financialPillars = [
    {
      icon: <PiggyBank className="h-6 w-6 text-blue-600" />,
      title: "Budgeting",
      description:
        "Track income and expenses to create a sustainable spending plan.",
      tips: [
        "Follow the 50/30/20 rule",
        "Use budgeting apps",
        "Review expenses monthly",
      ],
    },
    {
      icon: <Shield className="h-6 w-6 text-green-600" />,
      title: "Emergency Fund",
      description:
        "Build a safety net for unexpected expenses and financial security.",
      tips: [
        "Save 3-6 months of expenses",
        "Keep funds easily accessible",
        "Regularly top up the fund",
      ],
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-purple-600" />,
      title: "Investments",
      description: "Grow your wealth through diverse investment strategies.",
      tips: [
        "Start investing early",
        "Diversify your portfolio",
        "Consider long-term goals",
      ],
    },
    {
      icon: <Target className="h-6 w-6 text-red-600" />,
      title: "Goal Planning",
      description: "Set and achieve short-term and long-term financial goals.",
      tips: [
        "Define SMART financial goals",
        "Create timeline-based plans",
        "Monitor progress regularly",
      ],
    },
  ];

  const monthlyTracker = {
    income: [
      { category: "Salary", amount: "₹50,000" },
      { category: "Investments", amount: "₹5,000" },
      { category: "Side Hustle", amount: "₹10,000" },
    ],
    expenses: [
      { category: "Housing", amount: "₹15,000" },
      { category: "Transportation", amount: "₹5,000" },
      { category: "Groceries", amount: "₹8,000" },
      { category: "Utilities", amount: "₹3,000" },
    ],
  };

  const learningResources = [
    {
      title: "Understanding Market Basics",
      description:
        "Learn the fundamentals of financial markets and investment options.",
      difficulty: "Beginner",
    },
    {
      title: "Tax Planning Strategies",
      description:
        "Optimize your tax savings through legal deductions and investments.",
      difficulty: "Intermediate",
    },
    {
      title: "Retirement Planning",
      description:
        "Plan for a comfortable retirement through systematic investments.",
      difficulty: "Advanced",
    },
  ];

  return (
    <div className="min-h-screen ">
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
          <h2 className="md:text-[44px] text-[28px] font-bold text-gray-900 mb-4">
            Personal Finance Management
          </h2>
          <p className="text-lg text-gray-600">
            Master your money with expert financial planning strategies
          </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Financial Pillars Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {financialPillars.map((pillar, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {pillar.icon}
                  <CardTitle className="text-xl font-bold">
                    {pillar.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{pillar.description}</p>
                <ul className="space-y-2">
                  {pillar.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Monthly Finance Tracker */}
        <div className="bg-blue-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <BarChart3 className="h-6 w-6 mr-2 text-blue-600" />
            Monthly Finance Tracker
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Income Section */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <ArrowUpCircle className="h-5 w-5 mr-2 text-green-500" />
                Income Sources
              </h3>
              <div className="space-y-3">
                {monthlyTracker.income.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-600">{item.category}</span>
                    <span className="font-medium text-green-600">
                      {item.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Expenses Section */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <ArrowDownCircle className="h-5 w-5 mr-2 text-red-500" />
                Monthly Expenses
              </h3>
              <div className="space-y-3">
                {monthlyTracker.expenses.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-600">{item.category}</span>
                    <span className="font-medium text-red-600">
                      {item.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Learning Resources */}
        <div className="bg-purple-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <BookOpen className="h-6 w-6 mr-2 text-purple-600" />
            Financial Learning Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learningResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-purple-600">
                    {resource.difficulty}
                  </span>
                  <button className="text-blue-600 font-medium flex items-center hover:text-blue-700">
                    Learn More <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalFinancePage;

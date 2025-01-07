import React, { useState } from 'react';
import { BookOpen, DollarSign, Percent, Clock, ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <p className="mt-3 text-gray-600">{answer}</p>
      )}
    </div>
  );
};

const LoanBasicsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <a href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </a>
          <h1 className="text-3xl font-bold text-gray-900">Understanding Loan Basics</h1>
          <p className="mt-2 text-lg text-gray-600">Everything you need to know about loans and EMIs</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Concepts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: <BookOpen className="h-6 w-6" />,
              title: "What is a Loan?",
              description: "A sum of money borrowed that is expected to be paid back with interest"
            },
            {
              icon: <DollarSign className="h-6 w-6" />,
              title: "Principal Amount",
              description: "The initial amount of money borrowed from a lender"
            },
            {
              icon: <Percent className="h-6 w-6" />,
              title: "Interest Rate",
              description: "The percentage of principal charged by the lender for borrowing"
            },
            {
              icon: <Clock className="h-6 w-6" />,
              title: "Loan Tenure",
              description: "The time period over which the loan must be repaid"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Types of Loans Section */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Types of Loans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Home Loan",
                description: "Long-term financing for purchasing residential property. Usually has lower interest rates due to property collateral.",
                tenure: "15-30 years",
                interestRange: "6.5% - 9.5%"
              },
              {
                title: "Car Loan",
                description: "Financing specifically for purchasing vehicles. The vehicle serves as collateral for the loan.",
                tenure: "1-7 years",
                interestRange: "7.5% - 12.5%"
              },
              {
                title: "Personal Loan",
                description: "Unsecured loans for various purposes. Higher interest rates due to no collateral requirement.",
                tenure: "1-5 years",
                interestRange: "10.5% - 24%"
              },
              {
                title: "Education Loan",
                description: "Specifically for funding education expenses. Often comes with special terms for students.",
                tenure: "5-15 years",
                interestRange: "8.5% - 15%"
              },
              {
                title: "Business Loan",
                description: "For business purposes like expansion, inventory, or working capital needs.",
                tenure: "1-10 years",
                interestRange: "11% - 20%"
              },
              {
                title: "Gold Loan",
                description: "Loans with gold as collateral. Quick processing and lower interest rates.",
                tenure: "1-3 years",
                interestRange: "7.5% - 15%"
              }
            ].map((loan, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{loan.title}</h3>
                <p className="text-gray-600 mb-4">{loan.description}</p>
                <div className="flex flex-col space-y-2 text-sm">
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Typical tenure: {loan.tenure}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Percent className="h-4 w-4 mr-2" />
                    <span>Interest range: {loan.interestRange}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem 
              question="What factors affect loan approval?"
              answer="Key factors include credit score, income, employment stability, existing debts, and the loan-to-value ratio for secured loans. A good credit history and stable income significantly improve approval chances."
            />
            <FAQItem 
              question="How is loan EMI calculated?"
              answer="EMI is calculated using three main factors: principal amount, interest rate, and loan tenure. The formula uses compound interest and ensures equal monthly payments throughout the loan tenure."
            />
            <FAQItem 
              question="What is the difference between flat and reducing interest rates?"
              answer="Flat interest is calculated on the original principal throughout the loan tenure, while reducing interest is calculated on the outstanding principal balance. Reducing interest generally results in lower total interest payment."
            />
            <FAQItem 
              question="Can I prepay my loan before the tenure ends?"
              answer="Most loans allow prepayment, but there might be prepayment charges. Government regulations protect borrowers from excessive prepayment penalties on certain types of loans like floating rate home loans."
            />
            <FAQItem 
              question="How does my credit score affect loan interest rates?"
              answer="A higher credit score typically leads to lower interest rates as it indicates lower lending risk. Lenders offer their best rates to borrowers with scores above 750, while lower scores may result in higher interest rates or loan rejection."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanBasicsPage;
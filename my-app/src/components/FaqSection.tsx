import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { CardTitle } from "./ui/card";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is EMI?",
      answer:
        "EMI (Equated Monthly Installment) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. EMIs are used to pay off both the principal and interest on a loan, so that over a specified number of years, the loan is fully paid off along with interest.",
    },
    {
      question: "How does an EMI Calculator work?",
      answer:
        "EMI is calculated using the formula: EMI = P × r × (1 + r)^n/((1 + r)^n - 1), where P is the principal amount, r is the interest rate per month, and n is the total number of months.",
    },
    {
      question: "What factors affect EMI?",
      answer:
        "Your EMI is affected by three main factors: the principal loan amount, the interest rate, and the loan tenure (duration). A higher loan amount or interest rate will increase your EMI, while a longer loan tenure will decrease your monthly EMI but increase the total interest paid.",
    },
    {
      question: "Can I make prepayments to reduce EMI?",
      answer:
        "Yes, making prepayments can help reduce your future EMIs or loan tenure. However, some loans may have prepayment penalties, so it's important to check your loan terms before making additional payments.",
    },
    {
      question: "Can I change the inputs to compare different scenarios?",
      answer:
        "Yes, you can adjust the loan amount, tenure, or interest rate in the calculator to see how they affect your EMI. This helps you compare multiple loan options.",
    },
    {
      question: "Does the calculator show the total interest payable?",
      answer:
        "Yes, many EMI calculators also display the total interest payable and the overall repayment amount (principal + interest) for the loan tenure.",
    },
    {
      question: "Can the EMI amount change during the tenure?",
      answer:
        "The EMI generally remains constant for fixed-rate loans. For floating-rate loans, the EMI may change based on market interest rate fluctuations.",
    },
    {
      question: " What is the difference between EMI and loan amortization?",
      answer:
        "EMI is the fixed monthly payment you make toward your loan, while loan amortization refers to the process of paying off your loan in installments, including both principal and interest, over the tenure.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto md:max-w-[70%] max-w-[95%] my-[120px]">
      <CardTitle className="text-center text-[#1D2D35] mb-[50px]">
        <h3>We're Here to Help [FAQ]</h3>
      </CardTitle>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg w-full overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 flex justify-between items-center transition-colors duration-200"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200" />
              )}
            </button>
            <div
              className={`grid transition-all duration-200 ease-in-out ${
                openIndex === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
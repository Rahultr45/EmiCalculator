import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is EMI?",
      answer: "EMI (Equated Monthly Installment) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. EMIs are used to pay off both the principal and interest on a loan, so that over a specified number of years, the loan is fully paid off along with interest."
    },
    {
      question: "How is EMI calculated?",
      answer: "EMI is calculated using the formula: EMI = P × r × (1 + r)^n/((1 + r)^n - 1), where P is the principal amount, r is the interest rate per month, and n is the total number of months."
    },
    {
      question: "What factors affect my EMI?",
      answer: "Your EMI is affected by three main factors: the principal loan amount, the interest rate, and the loan tenure (duration). A higher loan amount or interest rate will increase your EMI, while a longer loan tenure will decrease your monthly EMI but increase the total interest paid."
    },
    {
      question: "Can I make prepayments to reduce my EMI?",
      answer: "Yes, making prepayments can help reduce your future EMIs or loan tenure. However, some loans may have prepayment penalties, so it's important to check your loan terms before making additional payments."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="border rounded-lg overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-white">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
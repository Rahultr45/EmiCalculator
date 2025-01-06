// src/pages/AboutUs.tsx
import React from "react";
import { Link } from "react-router-dom";

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-[70%] bg-[#ecfff4] border-[#27ae60]  border-[1px] mx-auto bg-transparent/10  px-6 py-12 mt-[70px] rounded-[16px] mb-[72px]">
      <h1 className="text-3xl font-bold mb-6">About Our EMI Calculator</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          We're dedicated to making financial decisions easier for everyone. Our
          EMI (Equated Monthly Installment) calculator helps you plan your loans
          and understand your monthly commitments before taking financial
          decisions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is EMI?</h2>
        <p className="text-gray-700 mb-4">
          EMI (Equated Monthly Installment) is a fixed payment amount made by a
          borrower to a lender at a specified date each month. EMIs are applied
          to both interest and principal each month so that over a specified
          number of years, the loan is paid off in full.
        </p>
      </section>

      <section className="mb-8 ">
        <h2 className="text-2xl font-semibold mb-4">
          How Our Calculator Helps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg border-[#27ae60]  border-[1px] ">
            <h3 className="text-xl font-semibold mb-2">
              Accurate Calculations
            </h3>
            <p className="text-gray-700">
              Our calculator uses precise mathematical formulas to determine
              your exact monthly payment obligations based on your loan amount,
              interest rate, and tenure.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border-[#27ae60]  border-[1px]">
            <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
            <p className="text-gray-700">
              With our user-friendly interface, you can quickly input your loan
              details and get instant results, making financial planning
              simpler.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Types of Loans We Cover</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Home Loans</li>
          <li>Personal Loans</li>
          <li>Car Loans</li>
          <li>Education Loans</li>
          <li>Business Loans</li>
        </ul>
      </section>

      <section className="bg-[#ecfff4] border-[#27ae60]  border-[2px] p-6 mt-[72px] rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Try Our Calculator</h2>
        <p className="text-gray-700 mb-4">
          Ready to calculate your EMI? Use our calculator to get started with
          your loan planning.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#27ae60] text-white px-6 py-2 rounded-[8px] hover:bg-[#27ae50] transition-colors"
        >
          Go to Calculator
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;

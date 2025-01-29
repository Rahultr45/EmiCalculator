// src/pages/AboutUs.tsx
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="mt-16 bg-black bg-opacity-30 backdrop-blur-md border-gray-400  border-[1px] p-6 text-gray-900 rounded-lg">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">
        Stay Updated with EMI Tips
      </h2>
      <p className="mb-6 text-gray-900">
        Get the latest financial advice and EMI calculation tips delivered
        to your inbox.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 border-[#27ae60]  border-[1px] rounded-lg text-gray-900 flex-grow max-w-md"
        />
        <button className=" bg-[#27ae60] text-white px-6 py-2 rounded-[8px] hover:bg-[#27ae50] transition-colors">
          Subscribe
        </button>
      </div>
    </div>
  </div>
  );
};

export default AboutUs;

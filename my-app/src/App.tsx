import React from 'react';
import InterestRateList from './components/InterestRateList.tsx';
import LoanCalculator from './components/LoanCalculator.tsx';

const App: React.FC = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen  mx-auto px-4 mt-[80px]">
      <h2 className="text-[#2E2E2E] text-center font-bold text-4xl mb-[48px]">Bank Interest Rate Management</h2>
      <LoanCalculator />
      <InterestRateList />
    </div>
  );
};

export default App;
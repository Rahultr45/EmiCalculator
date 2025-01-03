import React from 'react';
import InterestRateList from '../components/InterestRateList.tsx';
import LoanCalculator from '../components/LoanCalculator.tsx';
import FaqSection from '../components/FaqSection.tsx';

const App: React.FC = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen  mx-auto px-4 mt-[80px]">
      <LoanCalculator />
      <InterestRateList />
      <FaqSection/>
    </div>
  );
};

export default App;
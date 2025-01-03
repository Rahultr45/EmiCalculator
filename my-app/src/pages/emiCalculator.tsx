import React from 'react';
import InterestRateList from '../components/InterestRateList.tsx';
import LoanCalculator from '../components/LoanCalculator.tsx';

const App: React.FC = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen  mx-auto px-4 mt-[80px]">
      <LoanCalculator />
      <InterestRateList />
    </div>
  );
};

export default App;
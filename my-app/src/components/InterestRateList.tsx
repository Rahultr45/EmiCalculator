import React, { useEffect, useState } from "react";

const InterestRateList: React.FC = () => {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/interestRates")
      .then((response) => response.json())
      .then((data) => setRates(data));
  }, []);

  return (
    <ul>
      {rates.map((rate: { id: number; bankName: string; rate: number }) => (
        <li key={rate.id}>
          {rate.bankName}: {rate.rate}%
        </li>
      ))}
    </ul>
  );
};

export default InterestRateList;

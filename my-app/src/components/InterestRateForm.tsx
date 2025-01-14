// import React, { useState } from 'react';
// const InterestRateForm: React.FC = () => {
//     const [bankName, setBankName] = useState('');
//     const [rate, setRate] = useState('');
  
//     const handleSubmit = async (e: React.FormEvent) => {
//       e.preventDefault();
//       const response = await fetch('http://localhost:4000/api/interestRates', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ bankName, rate }),
//       });
//       if (response.ok) {
//         alert('Interest rate added successfully!');
//       }
//     };
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Bank Name"
//           value={bankName}
//           onChange={(e) => setBankName(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Interest Rate (%)"
//           value={rate}
//           onChange={(e) => setRate(e.target.value)}
//         />
//         <button type="submit">Add Interest Rate</button>
//       </form>
//     );
//   };
  
//   export default InterestRateForm;
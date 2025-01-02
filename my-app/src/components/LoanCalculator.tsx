import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card.tsx";
// import { Input } from './ui/input';
import { Button } from "./ui/button.tsx";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanDuration, setLoanDuration] = useState("");
  const [results, setResults] = useState({
    monthlyPayment: "",
    totalInterest: "",
    totalPayment: "",
  });

  const roundNumber = (num: number): number => {
    return Math.round(num);
  };

  const formatCurrency = (value: string | number): string => {
    if (value === "" || value === "Invalid input") return value as string;
    const numValue = typeof value === 'string' ? parseFloat(value) : value;
    return `₹${roundNumber(numValue).toLocaleString()}`;
  };

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate) / 100;
    const monthlyRate = annualRate / 12;
    const months = parseFloat(loanDuration) * 12;

    if (!isNaN(principal) && !isNaN(annualRate) && !isNaN(months)) {
      const monthlyPayment =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

      const totalPayment = monthlyPayment * months;
      const totalInterest = totalPayment - principal;

      setResults({
        monthlyPayment: roundNumber(monthlyPayment).toString(),
        totalInterest: roundNumber(totalInterest).toString(),
        totalPayment: roundNumber(totalPayment).toString(),
      });
    } else {
      setResults({
        monthlyPayment: "Invalid input",
        totalInterest: "Invalid input",
        totalPayment: "Invalid input",
      });
    }
  };

  const refreshInputs = () => {
    setLoanAmount("");
    setInterestRate("");
    setLoanDuration("");
    setResults({
      monthlyPayment: "",
      totalInterest: "",
      totalPayment: "",
    });
  };

  const getPieChartData = () => {
    if (results.totalInterest === "" || results.totalInterest === "Invalid input") {
      return [];
    }

    return [
      {
        name: "Principal Amount",
        value: roundNumber(parseFloat(loanAmount)),
      },
      {
        name: "Total Interest",
        value: roundNumber(parseFloat(results.totalInterest)),
      },
    ];
  };

  const COLORS = ["#3b82f6", "#ef4444"];

  return (
    <Card className="w-full max-w-[75%] mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-[#333333]">
          Bank Loan EMI Calculator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px]">
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium">Loan Amount </label>
              <input
                type="number"
                placeholder="Enter loan amount"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Interest Rate (%)</label>
              <input
                type="number"
                placeholder="Enter interest rate"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Loan Duration (Years)</label>
              <input
                type="number"
                placeholder="Enter loan duration"
                value={loanDuration}
                onChange={(e) => setLoanDuration(e.target.value)}
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex gap-2 pt-2">
              <Button onClick={calculateLoan} variant="outline" className="flex-1 hover:bg-[#EAF6FF]">
                Calculate
              </Button>
              <Button onClick={refreshInputs} variant="outline" className="flex-1 hover:bg-[#EAF6FF]">
                Reset
              </Button>
            </div>

            <div className="mt-[30px] space-y-4">
              <div className="flex justify-between p-3 bg-gray-100 rounded-md">
                <span className="font-medium text-[16px]">Monthly Payment:</span>
                  <span className="font-bold text-blue-600">
                  {formatCurrency(results.monthlyPayment)}
                </span>
              </div>
              <div className="flex justify-between p-3 bg-gray-100 rounded-md">
                <span className="font-medium text-[16px]">Total Interest:</span>
                <span className="font-bold text-blue-600">
                  {formatCurrency(results.totalInterest)}
                </span>
              </div>
              <div className="flex justify-between p-3 bg-gray-100 rounded-md">
                <span className="font-medium text-[16px]">Total Repayment:</span>
                <span className="font-bold text-blue-600">
                  {formatCurrency(results.totalPayment)}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold mb-4">Loan Breakdown</h3>
            <div className="w-full h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={getPieChartData()}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={({ percent }) => {
                      return `${(percent * 100).toFixed(1)}%`;
                    }}
                  >
                    {getPieChartData().map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => `₹${value.toLocaleString()}`}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoanCalculator;

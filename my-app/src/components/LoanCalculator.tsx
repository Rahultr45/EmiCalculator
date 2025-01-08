import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card.tsx";
import { Button } from "./ui/button.tsx";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanDuration, setLoanDuration] = useState("");
  const [durationType, setDurationType] = useState("years"); // New state for duration type
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
    const numValue = typeof value === "string" ? parseFloat(value) : value;
    return `₹${roundNumber(numValue).toLocaleString()}`;
  };

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate) / 100;
    const monthlyRate = annualRate / 12;
    // Convert duration to months based on selected type
    const months =
      durationType === "years"
        ? parseFloat(loanDuration) * 12
        : parseFloat(loanDuration);

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
    setDurationType("years");
    setResults({
      monthlyPayment: "",
      totalInterest: "",
      totalPayment: "",
    });
  };

  const getPieChartData = () => {
    if (
      results.totalInterest === "" ||
      results.totalInterest === "Invalid input"
    ) {
      return [
        {
          name: "Principal Amount",
          value: 1,
          class: "font-bold",
        },
        {
          name: "Total Interest",
          value: 0,
        },
      ];
    }

    return [
      {
        name: "Principal Amount",
        value: roundNumber(parseFloat(loanAmount)),
        class: "font-bold",
      },
      {
        name: "Total Interest",
        value: roundNumber(parseFloat(results.totalInterest)),
        class: "font-bold",
      },
    ];
  };

  const COLORS = ["#3b82f6", "#ef4444"];

  return (
    <Card className="w-full md:max-w-[70%] max-w-[95%] mx-auto ">
      <CardHeader>
        <CardTitle className=" text-center text-[#1D2D35]">
          <h3>Bank Loan EMI Calculator</h3>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px]">
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#1D2D35]">
                Loan Amount{" "}
              </label>
              <input
                type="number"
                placeholder="Enter loan amount"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#1D2D35]">
                Interest Rate (%)
              </label>
              <input
                type="number"
                placeholder="Enter interest rate"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#1D2D35]">
                Loan Duration
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Enter loan duration"
                  value={loanDuration}
                  onChange={(e) => setLoanDuration(e.target.value)}
                  className="flex-1 p-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#34835a]"
                />
                <select
                  value={durationType}
                  onChange={(e) => setDurationType(e.target.value)}
                  className="p-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#34835a]"
                >
                  <option value="years">Years</option>
                  <option value="months">Months</option>
                </select>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <Button
                onClick={calculateLoan}
                variant="outline"
                className="flex-1 text-[#34835a] hover:text-[white] border-[#34835a] bg-gray-100 hover:bg-[#27ae60]"
              >
                Calculate
              </Button>
              <Button
                onClick={refreshInputs}
                variant="outline"
                className="flex-1 text-[#34835a] hover:text-[white] border-[#34835a] bg-gray-100 hover:bg-[#27ae60]"
              >
                Reset
              </Button>
            </div>

            <div className="mt-[30px] space-y-4">
              <div className="flex justify-between p-3 w-full  bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <span className="font-medium text-[16px] text-[#1D2D35]">
                  Monthly Payment:
                </span>
                <span className="font-bold text-blue-600">
                  {formatCurrency(results.monthlyPayment)}
                </span>
              </div>
              <div className="flex justify-between p-3 w-full  bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <span className="font-medium text-[16px] text-[#1D2D35]">
                  Total Interest:
                </span>
                <span className="font-bold text-red-600">
                  {formatCurrency(results.totalInterest)}
                </span>
              </div>
              <div className="flex justify-between p-3 w-full  bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <span className="font-medium text-[16px] text-[#1D2D35]">
                  Total Repayment:
                </span>
                <span className="font-bold text-blue-600">
                  {formatCurrency(results.totalPayment)}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold mb-4 text-[#1D2D35]">
              Loan Portfolio
            </h3>
            <div className="w-full h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={getPieChartData()}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={({ percent }) => {
                      return `${(percent * 100).toFixed(1)}%`;
                    }}
                  >
                    {getPieChartData().map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#F3F4F6",
                      textAlign: "center",
                      borderRadius: "8px",
                    }}
                    formatter={(value) => `₹ ${value.toLocaleString()}`}
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

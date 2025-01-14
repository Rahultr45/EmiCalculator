// import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

// const CustomPieChart = () => {
//   const results = { totalInterest: "0" }; // Define results with a default value

//   const getPieChartData = () => {
//     if (
//       results.totalInterest === "" ||
//       results.totalInterest === "Invalid input"
//     ) {
//       return [];
//     }

//     return [
//       {
//         name: "Principal Amount",
//         value: roundNumber(parseFloat(loanAmount)),
//       },
//       {
//         name: "Total Interest",
//         value: roundNumber(parseFloat(results.totalInterest)),
//       },
//     ];
//   };

//   return (
//     <div className="flex flex-col items-center justify-center">
//       <h3 className="text-lg font-semibold mb-4">Loan Breakdown</h3>
//       <div className="w-full h-[300px]">
//         <ResponsiveContainer width="100%" height="100%">
//           <RechartsPieChart>
//             <Pie
//               data={getPieChartData()}
//               cx="50%"
//               cy="50%"
//               innerRadius={60}
//               outerRadius={100}
//               fill="#8884d8"
//               paddingAngle={5}
//               dataKey="value"
//               label={({ percent }) => {
//                 return `${(percent * 100).toFixed(1)}%`;
//               }}
//             >
//               {getPieChartData().map((_, index) => (
//                 <Cell
//                   key={`cell-${index}`}
//                   fill={COLORS[index % COLORS.length]}
//                 />
//               ))}
//             </Pie>
//             <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
//             <Legend />
//           </RechartsPieChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };
// export default CustomPieChart;

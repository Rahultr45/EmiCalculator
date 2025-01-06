
const FeaturesPage = () => {
  return (
    <div className="max-w-[70%] bg-[#ecfff4] border-[#27ae60]  border-[1px] mx-auto bg-transparent/10  px-6 py-12 mt-[70px] rounded-[16px] mb-[72px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Features of Our EMI Calculator
        </h1>

        {/* Overview */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Overview</h2>
          <p className="text-gray-600 text-lg">
            Our EMI (Equated Monthly Installment) Calculator is a robust and
            user-friendly tool built with the modern Vite + React framework. It
            is designed to simplify complex loan calculations and provide
            instant results.
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Key Features
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              <strong>Intuitive User Interface:</strong> Clean design, fully
              responsive layout, and interactive input fields.
            </li>
            <li>
              <strong>Real-Time Calculations:</strong> Instant updates for EMI,
              total interest, and total payment.
            </li>
            <li>
              <strong>Comprehensive Loan Insights:</strong> EMI breakdown, payment schedules, and amortization charts.
            </li>
            <li>
              <strong>Customizable Parameters:</strong> Adjustable loan sliders
              and interest rate options.
            </li>
            <li>
              <strong>Multi-Language Support:</strong> Available in multiple
              languages.
            </li>
            <li>
              <strong>Lightweight and Fast:</strong> Built with Vite for optimal
              performance.
            </li>
            <li>
              <strong>Secure and Private:</strong> No user data storage or
              tracking.
            </li>
            <li>
              <strong>Additional Features:</strong> Dark mode, shareable loan
              details, and integration with financial tools.
            </li>
          </ul>
        </section>

        {/* Benefits */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Benefits</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Simplifies the loan planning process.</li>
            <li>Empowers users to make informed financial decisions.</li>
            <li>Saves time with instant and accurate calculations.</li>
          </ul>
        </section>

        {/* Future Enhancements */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Future Enhancements (Coming Soon)
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Support for additional loan types (car loans, home loans).</li>
            <li>Graphical representation of repayment trends.</li>
            <li>Advanced customization options for repayment schedules.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default FeaturesPage;

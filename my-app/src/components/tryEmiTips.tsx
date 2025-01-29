const TryEmiTips: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className=" bg-black bg-opacity-10 backdrop-blur border-[#27ae60] border-[2px] p-6 text-gray-900 rounded-[12px]">
        <div className="md:max-w-[75%] max-w-[95%] mx-auto text-center">
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
              className="px-4 py-2 border-[#27ae60] border-[1px] rounded-lg text-gray-900 flex-grow max-w-md"
            />
            <button className="bg-[#27ae60] text-white px-6 py-2 rounded-[8px] hover:bg-[#27ae50] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryEmiTips;

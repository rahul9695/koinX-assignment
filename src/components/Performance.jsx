const Performance = () => {
  return (
    <div className="bg-white rounded-md px-6 py-6 pb-14 my-6">
      <h2 className="text-[24px] font-semibold">Performance</h2>
      <div className="mt-6 flex flex-col gap-[40px]">
        <div className="flex items-center justify-between gap-[20px]">
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Today&apos;s Low</span>
            <span>46,930.22</span>
          </div>
          <div className="max-w-[500px] bg-gradient-to-r from-[#FF4949] from-[#FF4E11] from-[#FC870A] from-[#FFAF11] to-[#C2CB21] to-[#11EB68] h-1 w-full bg-blue-400"></div>
          <div className="flex flex-col text-right">
            <span className="text-sm text-gray-500">Today&apos;s High</span>
            <span>49,343.83</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-[20px]">
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">52W Low</span>
            <span>16,930.22</span>
          </div>
          <div className="max-w-[500px] bg-gradient-to-r from-[#FF4949] from-[#FF4E11] from-[#FC870A] from-[#FFAF11] to-[#C2CB21] to-[#11EB68] h-1 w-full bg-blue-400"></div>
          <div className="flex flex-col text-right">
            <span className="text-sm text-gray-500">52W High</span>
            <span>49,743.83</span>
          </div>
        </div>
      </div>
      <h2 className="text-[24px] font-semibold mt-10">Fundamentals</h2>
      <div className="flex sm:gap-[50px] flex-col md:mt-6 sm:flex-row">
        <div className="flex flex-col w-full md:w-[50%]">
          <div className="flex justify-between border-b-2 pb-3 mt-3">
            <span className="text-gray-500 text-sm">Bitcoin Price</span>
            <span className="text-[16px] font-semibold">$16,815.46</span>
          </div>
          <div className="flex justify-between border-b-2 pb-3 mt-3">
            <span className="text-gray-500 text-sm">24h Low / 24h High</span>
            <span className="text-[16px] font-semibold">$16,382.07 / $16,874.12</span>
          </div>
          <div className="flex justify-between border-b-2 pb-3 mt-3">
            <span className="text-gray-500 text-sm">7d Low / 7d High</span>
            <span className="text-[16px] font-semibold">$16,382.07 / $16,874.12</span>
          </div>
          <div className="flex justify-between border-b-2 pb-3 mt-3">
            <span className="text-gray-500 text-sm">Trading Volume</span>
            <span className="text-[16px] font-semibold">$23,249,202,782</span>
          </div>
          <div className="flex justify-between border-b-2 pb-3 mt-3">
            <span className="text-gray-500 text-sm">Market Cap Rank</span>
            <span className="text-[16px] font-semibold">#1</span>
          </div>
        </div>

        <div className="flex flex-col w-full md:w-[50%]">
          <div className="flex justify-between border-b-2 pb-3 mt-3">
            <span className="text-gray-500 text-sm">Market Cap</span>
            <span className="text-[16px] font-semibold">$323,507,290,047</span>
          </div>
          <div className="flex justify-between border-b-2 pb-3 mt-3">
            <span className="text-gray-500 text-sm">Market Cap Dominance</span>
            <span className="text-[16px] font-semibold">38.343%</span>
          </div>
          <div className="flex justify-between border-b-2 pb-3 mt-3">
            <span className="text-gray-500 text-sm">Volume / Market Cap</span>
            <span className="text-[16px] font-semibold">0.0718</span>
          </div>
          <div className="flex justify-between border-b-2 pb-3 mt-3">
            <span className="text-gray-500 text-sm">All-Time High</span>
            <span className="text-[16px] font-semibold">$69,044.77 -75.6%</span>
          </div>
          <div className="flex justify-between border-b-2 pb-3 mt-3">
            <span className="text-gray-500 text-sm">All-Time Low</span>
            <span className="text-[16px] font-semibold">$67.81 24729.1%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;

import TradingViewChart from "./TradingViewChart";

const Chart = () => {
  return (
    <div className="">
      <div className="text-sm pt-3 pb-3">
        <span className="text-gray-500">Cryptocurrencies</span>
        <i className="fa-solid fa-angles-right fa-sm pl-2"></i>
        <span className="pl-2 font-semibold text-gray-600">Bitcoin</span>
      </div>
      <div className="w-full bg-white p-5 rounded-md">
        <div className="flex items-center gap-[10px]">
          <span className="w-10 h-10 bg-slate-300 rounded-full"></span>
          <span className="text-[24px] font-semibold">Bitcoin</span>
          <span className="text-sm font-semibold text-gray-400">BTC</span>
          <span className="py-2 px-3 bg-[#808A9D] text-sm text-white rounded-md ml-2">
            Rank #1
          </span>
        </div>
        <div className="flex flex-col mt-4">
            <div className="flex items-center">
                <span className="text-[28px] font-bold">$46,953.04</span>
                <span className="bg-[#EBF9F4] text-[#14B079] h-max p-1 w-[60px] text-center rounded-md ml-8">2.51%</span>
                <span className="ml-2 text-gray-400 text-sm">(24H)</span>
            </div>
            <div className="font-semibold">₹ 39,42,343</div>
        </div>
        <hr className="my-5"/>
        <div className="h-[500px]">
            <TradingViewChart />
        </div>
      </div>
    </div>
  );
};

export default Chart;

const TrendingCoins = () => {
  return (
    <div className="md:sticky top-20 mt-4 rounded-md mb-6 p-6 bg-white">
      <h2 className="text-[20px] font-semibold">Trending Coins (24h)</h2>
      <div>
        <div className="flex pt-4 items-center justify-between">
          <div className="flex gap-[10px] items-center">
            <span className="w-6 h-6 bg-slate-400 rounded-full"></span>
            <span>Ethereum(ETH)</span>
          </div>
          <span className="bg-[#EBF9F4] text-[#14B079] h-max p-1 w-[60px] text-center rounded-md ml-8">8.21%</span>
        </div>

        <div className="flex pt-4 items-center justify-between">
          <div className="flex gap-[10px] items-center">
            <span className="w-6 h-6 bg-slate-400 rounded-full"></span>
            <span>Bitcoin (BTC)</span>
          </div>
          <span className="bg-[#EBF9F4] text-[#14B079] h-max p-1 w-[60px] text-center rounded-md ml-8">5.26%</span>
        </div>

        <div className="flex pt-4 items-center justify-between">
          <div className="flex gap-[10px] items-center">
            <span className="w-6 h-6 bg-slate-400 rounded-full"></span>
            <span>Polygon (MATIC)</span>
          </div>
          <span className="bg-[#EBF9F4] text-[#14B079] h-max p-1 w-[60px] text-center rounded-md ml-8">4.32%</span>
        </div>
      </div>
    </div>
  );
};

export default TrendingCoins;

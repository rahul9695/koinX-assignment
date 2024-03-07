import BottomTinyChart from "./BottomTinyChart";

const YouMayAlsoLike = () => {
  return (
    <div className="bg-white rounded-md px-6 py-6 pb-14 relative">
      <h2 className="text-[24px] font-semibold">You May Also Like</h2>
      <div className="flex mt-6 gap-4 overflow-y-auto scrollbar-hide">
        <BottomTinyChart />
        <BottomTinyChart />
        <BottomTinyChart />
        <BottomTinyChart />
        <BottomTinyChart />
        <BottomTinyChart />
        <BottomTinyChart />
        <BottomTinyChart />
      </div>

      <h2 className="text-[24px] mt-6 font-semibold">Trending Coins</h2>
      <div className="flex mt-6 gap-4 overflow-y-auto scrollbar-hide">
        <BottomTinyChart />
        <BottomTinyChart />
        <BottomTinyChart />
        <BottomTinyChart />
        <BottomTinyChart />
        <BottomTinyChart />
        <BottomTinyChart />
        <BottomTinyChart />
      </div>
    </div>
  );
};

export default YouMayAlsoLike;

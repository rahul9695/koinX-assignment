
const BottomTinyChart = () => {
  return (
    <div className="min-w-[200px] border-2 rounded-md p-2">
      <div className="flex gap-[10px] items-center">
        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
        <h6>BNB</h6>
        <p className="bg-green-100 rounded-md text-sm p-1">+0.52%</p>
      </div>
      <h3 className="font-semibold mt-1 text-[20px]">$319.34</h3>
      <div className="w-full mt-2 h-[60px] border-2"></div>
    </div>
  );
};

export default BottomTinyChart;

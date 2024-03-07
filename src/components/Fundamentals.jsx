import Performance from "./Performance";

const Fundamentals = () => {
  return (
    <div className="mt-8">
      <div className="flex flex-col relative">
        <ul className=" overflow-y-scroll scrollbar-hide text-center flex mx-4 gap-[40px] font-semibold text-gray-600">
          <div className="w-[110px] h-[2px] bg-gray-500 absolute top-[35px] rounded-md"></div>
          <li className="cursor-pointer min-w-[110px]">Overview</li>
          <li className="cursor-pointer min-w-[110px]">Fundamentals</li>
          <li className="cursor-pointer min-w-[110px]">News Insights</li>
          <li className="cursor-pointer min-w-[110px]">Sentiments</li>
          <li className="cursor-pointer min-w-[110px]">Team</li>
          <li className="cursor-pointer min-w-[110px]">Technicals</li >
          <li className="cursor-pointer min-w-[110px]">Tokenomics</li>
        </ul>
        <hr className="max-w-[700px] my-3 border-gray-300"/>
        <Performance />
      </div>
    </div>
  );
};

export default Fundamentals;

import Performance from "./Performance";

const Fundamentals = () => {
  return (
    <div className="mt-8">
      <div className="flex flex-col relative">
        <ul className=" overflow-y-scroll scrollbar-hide flex px-2 gap-[30px] font-semibold text-gray-600">
          {/* <div className="w-[110px] h-[2px] bg-gray-500 absolute top-[35px] rounded-md"></div> */}
          <li className="cursor-pointer border-b-2 pb-2 border-gray-500">Overview</li>
          <li className="cursor-pointer">Fundamentals</li>
          <li className="cursor-pointer min-w-[110px]">News Insights</li>
          <li className="cursor-pointer">Sentiments</li>
          <li className="cursor-pointer">Team</li>
          <li className="cursor-pointer">Technicals</li >
          <li className="cursor-pointer">Tokenomics</li>
        </ul>
        <hr className="my-3 border-gray-300"/>
        <Performance />
      </div>
    </div>
  );
};

export default Fundamentals;

import Performance from "./Performance";

const Fundamentals = () => {
  return (
    <div className="md:mt-8">
      <div className="flex flex-col">
        <ul className="hidden md:flex mx-4 justify-between font-semibold text-gray-600">
          <li className="underline-offset-[17px] underline cursor-pointer">Overview</li>
          <li className="cursor-pointer">Fundamentals</li>
          <li className="cursor-pointer">News Insights</li>
          <li className="cursor-pointer">Sentiments</li>
          <li className="cursor-pointer">Team</li>
          <li className="cursor-pointer">Technicals</li >
          <li className="cursor-pointer">Tokenomics</li>
        </ul>
        <hr className="max-w-[700px] my-3 border-gray-300"/>
        <Performance />
      </div>
    </div>
  );
};

export default Fundamentals;

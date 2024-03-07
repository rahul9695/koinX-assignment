const Sentiments = () => {
  return (
    <div className="bg-white rounded-md px-6 py-6 pb-14 my-6 relative">
      <h2 className="text-[24px] font-semibold">Sentiments</h2>
      <h6 className="text-[20px] font-semibold text-gray-500 mt-1">
        Key Events
      </h6>
      <div className="flex gap-[20px] mt-5 overflow-y-scroll scrollbar-hide">
        <div className="min-w-[456px] px-6 py-3 flex gap-[10px] bg-[#E8F4FD] rounded-md">
          <div className="min-w-10 h-10 bg-gray-200 rounded-full"></div>
          <div className="flex flex-col gap-[10px]">
            <h3 className="font-bold text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
              mattis enim tincidunt.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
              faucibus metus quis. Amet sapien quam viverra adipiscing
              condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae
              sit nisi viverra natoque lacinia libero enim.
            </p>
          </div>
        </div>
        <div className="min-w-[456px] px-6 py-3 flex gap-[10px] bg-[#EBF9F4] rounded-md">
          <div className="min-w-10 h-10 bg-gray-200 rounded-full"></div>
          <div className="flex flex-col gap-[10px]">
            <h3 className="font-bold text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
              mattis enim tincidunt.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
              faucibus metus quis. Amet sapien quam viverra adipiscing
              condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae
              sit nisi viverra natoque lacinia libero enim.
            </p>
          </div>
        </div>
        <div className="w-10 h-10 flex rounded-full justify-center items-center absolute right-10 top-[200px] bg-gray-300 cursor-pointer hover:bg-gray-500">
          <i className="fa-solid fa-chevron-right fa-lg"></i>
        </div>
      </div>
      <h6 className="text-[20px] font-semibold text-gray-500 mt-10">
        Analyst Estimates
      </h6>
      <div className="flex gap-[40px] mt-10">
        <div className="w-[120px] h-[120px] bg-[#EBF9F4] rounded-full flex justify-center items-center">
          <div className="">
          <span className="text-[28px] font-semibold text-green-500">76</span>
          <span className="text-sm text-green-500 font-semibold ml-[2px]">%</span>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-[600px] gap-8">
          <div className="flex items-center">
            <span className="w-[50px] font-semibold text-gray-500">Buy</span>
            <div className="h-2 bg-green-500 rounded-md w-[76%]"></div>
            <span className="ml-5 font-semibold text-gray-500">76%</span>
          </div>

          <div className="flex items-center">
            <span className="w-[50px] font-semibold text-gray-500">Hold</span>
            <div className="h-2 bg-gray-400 rounded-md w-[8%]"></div>
            <span className="ml-5 font-semibold text-gray-500">8%</span>
          </div>

          <div className="flex items-center ">
            <span className="w-[50px] font-semibold text-gray-500">Sell</span>
            <div className="h-2 bg-red-500 rounded-md w-[16%]"></div>
            <span className="ml-5 font-semibold text-gray-500">16%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiments;

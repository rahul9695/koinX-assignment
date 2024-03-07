const Advertise = () => {
  return (
    <div className="flex flex-col gap-[2rem] text-center items-center w-full bg-[#0052FE] text-white rounded-md px-10 py-10">
      <h2 className="text-[24px] max-w-[268px]">
        Get Started with KoinX for FREE
      </h2>
      <p className="max-w-[317px] text-[14px]">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <img src="/frame-3.svg" alt="doddle" />
      <button className="bg-white max-w-[237px] w-full p-2 rounded-md font-semibold text-black hover:bg-transparent hover:text-white hover:border-2 hover:border-white hover:scale-[1.05] ease-in-out duration-300">Get Started for FREE</button>
    </div>
  );
};

export default Advertise;

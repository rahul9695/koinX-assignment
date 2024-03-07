const Navbar = () => {
  return (
    <header className="fixed w-full self-stretch bg-white shadow-[0px_0px_12px_rgba(16,_38,_73,_0.06)] flex items-center justify-between py-4 px-[30px] top-[0] z-[99] gap-[20px] border-b-[1px] border-solid">
      <img
        className="h-6 w-24"
        loading="lazy"
        alt=""
        src="/1-koinx-logo@2x.png"
      />
      <div className="lg:flex hidden flex-row items-center justify-start gap-[30px] max-w-full">
        <div className="h-[19px] w-[102px] font-semibold inline-block whitespace-nowrap">
          Crypto Taxes
        </div>
        <div className="h-[19px] w-[79px] relative tracking-[-0.01em] font-semibold inline-block whitespace-nowrap">
          Free Tools
        </div>
        <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[13px] pl-0">
          <div className="w-32 h-[19px] relative tracking-[-0.01em] font-semibold inline-block whitespace-nowrap">
            Resource Center
          </div>
        </div>
        <button className="w-[150px] h-10 flex-1 bg-[#2870EA] rounded-md text-white hover:bg-transparent hover:text-black hover:font-semibold hover:border-2 hover:border-blue-500 hover:scale-[1.05] ease-in-out duration-300">
          Get Started
        </button>
      </div>
      <div className="lg:hidden">
        <i className="fa-solid fa-bars fa-lg"></i>
      </div>
    </header>
  );
};

export default Navbar;

import AboutCoin from "../components/AboutCoin";
import Advertise from "../components/Advertise";
import Chart from "../components/Chart";
import Fundamentals from "../components/Fundamentals";
import Navbar from "../components/Navbar";
import Sentiments from "../components/Sentiments";
import Team from "../components/Team";
import Tokenomics from "../components/Tokenomics";
import TrendingCoins from "../components/TrendingCoins";
import YouMayAlsoLike from "../components/YouMayAlsoLike";

const Home = () => {
  return (
    <div className="max-w-[1650px] mx-auto">
      <Navbar />
      <div className="top-[80px] flex flex-col md:gap-[1%] bg-gray-200 px-[30px] relative h-max lg:flex-row">
        <div className="lg:w-[70%] w-[100%] h-max">
          <Chart />
          <Fundamentals />
          <Sentiments />
          <AboutCoin />
          <Tokenomics />
          <Team />
        </div>
        <div className="w-full lg:w-[30%] lg:pt-[43px]">
          <Advertise />
          <TrendingCoins />
        </div>
      </div>
      <YouMayAlsoLike />
    </div>
  );
};

export default Home;

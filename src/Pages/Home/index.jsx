import FrequentlyAskQuestion from "../../components/FAQ";
import IntroSection from "../../components/IntroSection";
import JudgingSection from "../../components/judging";
import PriceAndReward from "../../components/priceandreward";
import SectionTwo from "../../components/sectionTwo";
import SectionThree from "../../components/sectionthree";
import Sponsor from "../../components/sponsor";
import TimeLine from "../../components/timelinesection";
import MobileTimeLine from "./../../components/MobileTimeline/index";

function Home() {
  return (
    <>
      <IntroSection />
      <SectionTwo />
      <SectionThree />
      <JudgingSection />
      <FrequentlyAskQuestion />
      <TimeLine />
      <PriceAndReward />
      <Sponsor />

      {/* 
     >

      <div className="line"></div>

      {window.innerWidth < 900 ? <MobileTimeLine /> : <TimeLine />}

      <div className="line"></div>
      <PriceAndReward />
      <div className="line"></div>
      <div className="line"></div>
      <PravicySection />
      <div className="line"></div>
      <Footer /> */}
    </>
  );
}

export default Home;

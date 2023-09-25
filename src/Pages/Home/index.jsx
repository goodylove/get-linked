import FrequentlyAskQuestion from "../../components/FAQ";
import IntroSection from "../../components/IntroSection";
import JudgingSection from "../../components/judging";
import SectionTwo from "../../components/sectionTwo";
import SectionThree from "../../components/sectionthree";
import TimeLine from "../../components/timelinesection";

function Home() {
  return (
    <>
      <IntroSection />
      <SectionTwo />
      <SectionThree />
      <JudgingSection />
      <FrequentlyAskQuestion />
      <TimeLine />
      {/* 
     >

      <div className="line"></div>

      {window.innerWidth < 900 ? <MobileTimeLine /> : <TimeLine />}

      <div className="line"></div>
      <PriceAndReward />
      <div className="line"></div>
      <Sponsor />
      <div className="line"></div>
      <PravicySection />
      <div className="line"></div>
      <Footer /> */}
    </>
  );
}

export default Home;

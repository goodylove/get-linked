import FrequentlyAskQuestion from "../../components/FAQ";
import IntroSection from "../../components/IntroSection";
import JudgingSection from "../../components/judging";
import PriceAndReward from "../../components/priceandreward";
import PravicySection from "../../components/privacy";
import SectionTwo from "../../components/sectionTwo";
import SectionThree from "../../components/sectionthree";
import Sponsor from "../../components/sponsor";
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
      <PriceAndReward />

      <Sponsor />
      <PravicySection />
    </>
  );
}

export default Home;

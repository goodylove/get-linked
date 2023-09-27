import FrequentlyAskQuestion from "../../components/FAQ";
import IntroSection from "../../components/IntroSection";
import Footer from "../../components/footer";
import JudgingSection from "../../components/judging";
import PriceAndReward from "../../components/priceandreward";
import PravicySection from "../../components/privacy";
import SectionTwo from "../../components/sectionTwo";
import SectionThree from "../../components/sectionthree";
import Sponsor from "../../components/sponsor";
import TimeLine from "../../components/timelinesection";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Link as Links, animateScroll as scroll } from "react-scroll";

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
      <Footer />
      <Links
        to="top"
        spy={true}
        smooth={true}
        duration={500}
        className=" fixed bottom-[180px] right-4  h-[40px] w-[40px] rounded-full bg-custom-light text-white flex justify-center items-center"
      >
        <AiOutlineArrowUp />
      </Links>
    </>
  );
}

export default Home;

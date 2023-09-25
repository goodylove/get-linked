import { SVG } from "./../../constants/Icons/index";
import Title from "./../Title/index";

function PriceAndReward() {
  return (
    <>
      <div className="h-[1px] w-full  bg-line"></div>
      <section className="w-full flex justify-center items-center mt-10">
        <div className="flex w-[80%] md:flex-row flex-col justify-center gap-2 ">
          <div className="relative">
            <img src={SVG.pinkstart} alt="" />
            <img src={SVG.award} alt="" className="" />
            <img src={SVG.star2} alt="" />
            <div className="bg-custom-light w-[15rem]  absolute md:w-[20rem] h-[17rem]     rounded-full   top-8  left-[8rem]   md:left-0  blur-2xl opacity-[0.3]"></div>
          </div>

          <div className="right relative">
            <div className="bg-custom-light  absolute w-[5rem] md:h-[17rem] h-[10rem]    top-[9rem] right-0  rounded-full   md:top-[10rem]    md:right-[-60px]  blur-2xl opacity-[0.3]"></div>
            <Title title="Prizes and" text="Rewards" />
            <p className="mt-5 text-white text-center  md:text-start ">
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
            <img src={SVG.thirdRuner} className="w-[500px]" />
          </div>
          <img src={SVG.star2} alt="star white" className="w-[20px]" />
        </div>
      </section>
    </>
  );
}

export default PriceAndReward;

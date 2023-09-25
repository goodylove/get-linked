import { SVG } from "../../constants/Icons";
import Title from "./../Title/index";
import Licensepolicy from "./licensepolicy";

function PravicySection() {
  return (
    <>
      <div className="h-[1px] w-full  bg-line"></div>
      <section className="w-full justify-center  items-center flex my-9 relative">
        <div className="flex justify-center items-center w-[80%] flex-col md:flex-row">
          <div>
            <Title title="Privacy Policy and " text="Terms" />
            <h3 className="text-white my-6 text-center md:text-start">
              Last updated on September 12, 2023
            </h3>

            <img src={SVG.star2} alt="" />
            <p className="text-white text-[12px] md:text-[14px] leading-[26.38px] font-[400] md:w-[438px]  text-center md:text-start">
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
            <Licensepolicy />
          </div>

          <img src={SVG.privac} alt="" className="w-[450px]" />
        </div>
        <div className="bg-custom-light  absolute w-[17rem] md:h-[19rem] h-[10rem]   left-3   rounded-full   md:bottom-0      blur-2xl opacity-[0.3]"></div>
      </section>
    </>
  );
}

export default PravicySection;

import { SVG } from "../../constants/Icons";

function Sponsor() {
  return (
    <>
      <div className="h-[1px] w-full  bg-line"></div>

      <section className="flex w-full justify-center items-center my-9 relative">
        <div className="bg-custom-light  absolute w-[15rem] md:h-[17rem] h-[10rem]    top-[2rem]   rounded-full   md:top-[2rem]    md:left-5  blur-2xl opacity-[0.3]"></div>

        <div className="w-[80%] ">
          <div className="flex  flex-col gap-2 justify-center items-center text-white text-center">
            <h2 className=" font-clash font-[700] md:text-[32px]  ">
              Partners and Sponsors
            </h2>
            <p className="text-center text-[14px] font-montserrat leading-3-[27.5px] font-[400] md:w-[452px]">
              Getlinked Hackathon 1.0 is honored to have the following major
              companies as its partners and sponsors
            </p>
          </div>
          <img src={SVG.purpleStar} alt="" className="star" />
          <img
            src={SVG.purpleStar}
            alt=""
            className="absolute md:top-[10rem] md:left-[44rem] left-[14rem]"
          />
          <img
            src={SVG.star2}
            alt=""
            className="absolute md:top-[23rem] md:left-[44rem] left-[14rem]  top-[13rem]"
          />
          <div className="border-2 border-custom-pink p-6 rounded">
            <img src={SVG.patnerandsponsort} alt="sponsor" className="" />
          </div>
          <div className="bg-custom-light  absolute w-[15rem] md:h-[17rem] h-[10rem]    top-[9rem] right-0  rounded-full   md:top-[18rem]    md:right-8  blur-2xl opacity-[0.3]"></div>
        </div>
      </section>
    </>
  );
}

export default Sponsor;

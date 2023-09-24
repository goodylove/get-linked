import { SVG } from "./../../constants/Icons/index";
import Title from "./../Title/index";
function SectionThree() {
  return (
    <>
      <div className="h-[1px] w-full  bg-line"></div>

      <section className=" w-[100%] flex justify-center items-center overflow-x-hidden ">
        <div className="flex  md:flex-row flex-col w-[85%] justify-between items-center relative">
          <div className="relative">
            <div className="bg-custom-light  absolute md:w-[20rem] h-[17rem]    rounded-full   top-14  left-0    blur-2xl opacity-[0.3]"></div>

            <div className="flex  justify-center items-center">
              <img src={SVG.graystar} alt="" />
            </div>

            <Title title="Rule and" text="Guidelines" />

            <p className=" text-[13px]  text-white font-montserrat mt-5 md:text-[14px] leading-[27.5px] font-[400]">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
            <div className="flex justify-end items-end">
              <img src={SVG.star2} alt="star" />
            </div>
          </div>

          <img
            src={SVG.elipse}
            alt=""
            className="absolute right-28 top-[100px] -z-10 hidden md:flex"
          />
          <img
            src={SVG.lady}
            alt="bulb"
            className="xl:w-[600px]  lg:w-[500px] md:w-[400px]"
          />
          <div className="bg-custom-light  absolute w-[5rem] md:h-[17rem] h-[10rem]    right-0  rounded-full   top-[20rem]    md:right-[-6rem]  blur-2xl opacity-[0.3]"></div>
        </div>
      </section>
    </>
  );
}

export default SectionThree;

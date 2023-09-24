import { useEffect } from "react";
import { SVG } from "../../constants/Icons";
import Title from "./../Title/index";

function SectionTwo() {
  return (
    <>
      <div className="h-[1px] w-full  bg-line"></div>
      <section className=" w-[100%]  flex justify-center items-center mt-5">
        <div className="  w-[97%] flex flex-col md:flex-row    gap-20 xl:px-24  pl-3 items-center justify-center text-center">
          <div className="">
            <img src={SVG.pinkstart} alt="star" color="gray" />
            <img
              src={SVG.litlestart}
              alt="hack-bulb"
              className="xl:w-[450px]  md:w-[400px] w-[300px]"
            />

            <div className="flex justify-center items-center md:justify-end md:items-center">
              <img src={SVG.arrow} alt="" className="w-[30px]" />
            </div>
          </div>
          <div className=" md:w-[54%] md:mt-9 relative  ">
            <Title
              title=" Introduction to getlinked"
              text="tech Hackathon 1.0"
            />

            <img
              src={SVG.purpleStar}
              alt=""
              className="w-[20px]  absolute right-0 top-[32px] md:right-32"
            />
            <p className="font-montserrat xl:text-[14px] md:text-[13px] text-[12px]  my-5 text-white leading-[27.3px] font-[400] text-center md:text-start">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionTwo;

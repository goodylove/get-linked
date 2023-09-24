import styled from "styled-components";
import { Colors } from "../../constants/Colors";
import { SVG } from "../../constants/Icons";
import Button from "../Button.jsx/index.jsx";
import { keyAttribute } from "./keyattributedata";
import Title from "../Title";

function JudgingSection() {
  return (
    <>
      <div className="h-[1px] w-full  bg-line"></div>

      <section className="w-full flex justify-center items-center mt-5 p-5">
        <div className="w-[85%] flex md:flex-row flex-col justify-center items-center relative">
          <img
            src={SVG.purpleStar}
            alt=""
            className="top-[10px] left-[99px] absolute"
          />
          <img src={SVG.friends} alt="bulb" className="w-[550px]" />
          <img src={SVG.graystar} alt="" className=" absolute  left-[276px] " />
          <div className="bg-custom-light w-[15rem]  absolute md:w-[20rem] h-[17rem]     rounded-full   top-[17rem]  left-[8rem]   md:left-0  blur-2xl opacity-[0.3]"></div>

          <img src={SVG.star2} alt="" className="bottom-0 absolute" />

          <div className="">
            <Title title="Judging Criteria" text="Key attributes" />

            <div>
              {keyAttribute.map(({ title, value }) => {
                return (
                  <p className="text-white leading-[24.29px] text-[14px]  text-center md:text-start  font-montserrat font-[700]">
                    <span className=" text-custom-highlight">{title}</span>
                    {value}
                  </p>
                );
              })}
            </div>

            <span className="flex justify-center md:justify-start mt-6">
              <Button>Read More</Button>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default JudgingSection;

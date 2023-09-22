import { useEffect } from "react";
import { SVG } from "../../constants/Icons";
import { SectionTwoWrapper } from "./sectiontwoStyle";

function SectionTwo() {
  return (
    <SectionTwoWrapper className="section-two">
      <div>
        <img src={SVG.pinkstart} alt="star" color="gray" />
        <img src={SVG.litlestart} alt="bulb" className="sec-img" />
      </div>
      <div className="">
        <div className="intro-sec-two">
          <h2> Introduction to getlinked</h2>
          <h3> tech Hackathon 1.0</h3>
          <img src={SVG.purpleStar} alt="" />
        </div>
        <p>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
    </SectionTwoWrapper>
  );
}

export default SectionTwo;

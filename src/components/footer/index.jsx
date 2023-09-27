import styled from "styled-components";
import { SVG } from "../../constants/Icons";
import { Colors } from "./../../constants/Colors/index";

function Footer() {
  return (
    <section className=" w-full flex flex-col  justify-center items-center">
      <section className="flex justify-center items-center w-[80%] my-5">
        <div className="w-[100%] flex justify-between   flex-col md:flex-row  ml-9">
          <div className="section-about relative">
            <img src={SVG.logolink} alt="" />
            <img
              src={SVG.star2}
              alt="star"
              className="star absolute left-[-50px] w-[10px]"
            />
            <p className="text-white text-[12px] w-[271px]">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
            <div className="flex gap-2 text-white my-5 ">
              <span>Terms</span>
              <div className="h-[20px] w-[3px] bg-custom-highlight "></div>
              <span>Privacy</span>
            </div>
          </div>

          <div className="useful">
            <h3 className=" text-custom-highlight text-[14px]">Useful Links</h3>
            <ul className="text-white">
              <li>Overview</li>
              <li>FAQs</li>
              <li>Timeline</li>
              <li>Register</li>
              <li className="flex  gap-3 items-center text-custom-highlight">
                Follow Us
                <div className="flex justify-center items-center gap-5">
                  <img src={SVG.instagram} alt="" />
                  <img src={SVG.twiietr} alt="" />
                  <img src={SVG.facebook} alt="" />
                  <img src={SVG.linkedin} alt="" />
                </div>
                <img src={SVG.graystar} alt="star" className="star2" />
              </li>
            </ul>
          </div>

          <div className="contact-us mt-10">
            <h3 className="text-custom-highlight text-[14px]">Contact us</h3>
            <ul className="contact">
              <li className="text-white flex mt-2 gap-2 ">
                <img src={SVG.phonenum} alt="" />
                +234 9068557284
              </li>
              <li className="flex  gap-2">
                <span>
                  <img src={SVG.location} alt="" />
                </span>
                <span className="text-white  h-[57px] text-[12px] ">
                  27,Alara Street <br /> Yaba 100012 <br /> Lagos State
                </span>
              </li>
            </ul>
            <img
              src={SVG.star2}
              alt="star"
              className="star3 absolute right-2"
            />
          </div>
        </div>
      </section>
      <img
        src={SVG.pinkstart}
        alt="star"
        className="absolute left-9  md:left-[30rem] "
      />
      <div className="text-white  my-8 md:text-center text-start px-5">
        All rights reserved. © getlinked Ltd.
      </div>
    </section>
  );
}

export default Footer;

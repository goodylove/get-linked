import { useEffect, useState } from "react";
import { SVG } from "../../constants/Icons";
import Button from "../Button.jsx/index.jsx";

function IntroSection() {
  const [time, setTime] = useState(new Date());

  const hour = time.getHours().toString().padStart(2, "0");
  const min = time.getMinutes().toString().padStart(2, "0");
  const sec = time.getSeconds().toString().padStart(2, "0");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section>
      <div className="h-[1px] w-full  bg-line"></div>

      <div>
        <div className="bg-custom-light  absolute w-[20rem] h-[17rem]    rounded-full   top-14  left-0   md:left-[21rem]  blur-2xl opacity-[0.3]"></div>
        <div className="  text-white flex justify-end items-end  flex-col pr-10 md:mt-5  mt-2  font-montserrat">
          <span className="md:text-[20px] leading-[40px] text-[13px]">
            Igniting a Revolution in HR Innovation
          </span>
          <img src={SVG.line} alt="line" width={100} className="text-end" />
        </div>
      </div>
      <span className=" flex justify-center items-center">
        <img src={SVG.star2} alt="star" className="w-3" />
      </span>

      <section className=" flex flex-col md:flex-row   text-center justify-center items-center">
        <div className="">
          <div className="text-white relative">
            <img
              src={SVG.techbulb}
              alt="bulb"
              className="absolute  right-12 md:right-14  md:top-[-35px] md:w-[50px] w-[20px] top-[-5px]"
            />
            <h2 className="lg:text-[60px] md:leading-[89.4px] font-[700] text-[32px] xl:text-[72px] ">
              getlinked Tech
            </h2>
            <div className="flex justify-center">
              <h2 className="xl:text-[60px] lg:text-[40px] md:leading-[89.4px] font-[700] text-[32px] ">
                Hackathons <span className=" text-custom-highlight ">1.0</span>
              </h2>
              <span className="flex">
                <img
                  src={SVG.saveIcon}
                  alt="save"
                  className="md:w-[50px] w-[23px] "
                />
                <img
                  src={SVG.hackstar}
                  alt="star"
                  className="md:w-[50px]  w-[23px]"
                />
              </span>
            </div>
          </div>

          <p className="text-white xl:text-[20px]  mt-4 font-[400] md:leading-[33px]  leading-[20px] md:text-start md:text-[16px] text-center text-[12px]">
            Participate in getlinked tech Hackathon 2023 stand
            <br /> a chance to win a Big prize
          </p>

          <div className="mt-4 flex md:justify-start justify-center">
            <Button>Register</Button>
          </div>

          <div className=" md:justify-start justify-center flex items-center mt-6 text-white  font-unical text-[68px] gap-4">
            <span>
              {hour}
              <span className="text-sm">H</span>
            </span>
            <span>
              {min}
              <span className="text-sm">M</span>
            </span>
            <span>
              {sec}
              <span className="text-sm">S</span>
            </span>
          </div>
        </div>

        <div className=" relative">
          <div className="bg-custom-light  absolute w-[20rem] h-[17rem]   hidden md:flex  rounded-full   top-14  left-0     blur-2xl opacity-[0.3]"></div>

          <img src={SVG.graystar} alt="star" />
          <img
            src="./heroImage (1).webp"
            alt=""
            color="gray"
            className="w-[300px] md:w-[500px]"
          />
        </div>
      </section>
    </section>
  );
}

export default IntroSection;

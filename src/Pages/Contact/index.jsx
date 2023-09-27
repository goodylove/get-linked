import Button from "../../components/Button.jsx";
import { SVG } from "../../constants/Icons";
import Input from "./../../components/input/index";

function ContactPage() {
  return (
    <section className="w-full flex justify-center items-center my-10 relative">
      <div className="bg-custom-light  absolute w-[20rem] md:h-[17rem] h-[10rem]    top-[2rem]   rounded-full   md:top-[2rem]    md:left-0  blur-2xl opacity-[0.3]"></div>
      <div className="flex justify-between items-center flex-col md:flex-row w-[80%] gap-10 ">
        <div className="">
          <h3 className="text-custom-highlight font-[700]  font-montserrat my-5">
            Get in touch
          </h3>
          <ul className="text-white flex flex-col gap-8">
            <li>contact information</li>
            <li>
              27,Alara Street
              <br /> Yaba 100012 <br /> Lagos State
            </li>
            <li>Call Us : 07067981819</li>
            <li>
              we are open from Monday-Friday <br />
              08:00am - 05:00pm
            </li>
            <li className="text-custom-highlight">
              Share on
              <span className="flex items-center gap-3">
                <img src={SVG.instagram} alt="" />
                <img src={SVG.twiietr} alt="" />
                <img src={SVG.facebook} alt="" />
                <img src={SVG.linkedin} alt="" />
              </span>
            </li>
          </ul>
        </div>

        <div className="   relative">
          <div className="flex justify-end items-end  text-end ">
            <img src={SVG.graystar} alt="" className="w-[20px] " />
          </div>
          <img src={SVG.pinkstart} alt="" className="absolute top-80" />
          <img src={SVG.star2} alt="" className="absolute top-80 right-2" />
          <form
            action=""
            className="flex flex-col items-start justify-start gap-5 w-full  px-14 py-8 shadow-3xl  bg-[#1C152E] rounded-4"
          >
            <p className="text-custom-highlight max-w-[271px] text-start ">
              Questions or need assistance? Let us know about it!
            </p>

            <Input
              placeholder="First Name"
              className="w-[100%] p-2 rounded-[4px]  bg-custom-purple  border-[1.5px]"
            />
            <Input
              placeholder="Mail"
              className="w-[100%] p-2 rounded-[4px] bg-custom-purple  border-[1.5px]"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="3"
              placeholder="Message"
              className="w-[100%] rounded  bg-custom-purple border-[1.5px] p-2"
            ></textarea>
            <div className="flex justify-center items-center w-full">
              <Button> Submit</Button>
            </div>
          </form>
        </div>
        <div className="bg-custom-light  absolute w-[20rem] md:h-[17rem] h-[10rem] hidden md:flex   top-[2rem]   rounded-full   md:top-[10rem]   md:right-0  blur-2xl opacity-[0.3]"></div>
      </div>
    </section>
  );
}

export default ContactPage;

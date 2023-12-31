import Button from "../../components/Button.jsx";
import Input from "../../components/input";
import { SVG } from "../../constants/Icons";

function Register() {
  return (
    <section className="w-full flex justify-center items-center my-7 relative">
      <div className="bg-custom-light  absolute w-[20rem] md:h-[17rem] h-[10rem]    top-[2rem]   rounded-full   md:top-[2rem]    md:left-0  blur-2xl opacity-[0.3]"></div>

      <div className="flex w-full justify-center items-center md:flex-row flex-col">
        <div>
          <img src={SVG.register} alt="" className="w-[700px]" />
        </div>

        <div className=" ">
          <form
            action=""
            className="flex flex-col items-start justify-start gap-5 w-full  px-14 py-8 shadow-3xl  bg-[#1C152E] rounded-4"
          >
            <h3 className="text-custom-highlight tex-[20px] font-clash font-[700]">
              Register
            </h3>
            <div className="flex justify-between  items-center  relative">
              <span className=" text-white text-[11px]  text-start ">
                Be part of the movement!
              </span>
              <div className=" flex flex-col  mb-6 md:mb-3">
                <div className="flex justify-center">
                  <img src={SVG.female} alt="" />
                  <img src={SVG.male} alt="" />
                </div>
                <div className="w-[100px] h-[1px] border-[2px]    border-custom-pink  border-dashed"></div>
              </div>
            </div>
            {/* left-[211px] top-[21px] absolute */}
            <div className="flex items-center justify-center gap-6 md:flex-row flex-col w-full ">
              <Input
                name="Team's Name"
                label="Team's Name"
                placeholder="Enter the name of your group"
                className="w-[100%] p-2 rounded-[4px]  bg-custom-purple  border-[1.5px] text-[12px]"
              />
              <Input
                label="Phone"
                name="Phone"
                placeholder="Enter your phone number"
                className="w-[100%] p-2 rounded-[4px] bg-custom-purple  border-[1.5px] text-[12px]"
              />
            </div>
            <div className="flex items-center justify-center gap-6 md:flex-row flex-col w-full">
              <Input
                label="Email"
                name="Email"
                placeholder="Enter your email address"
                className="w-[100%] p-2 rounded-[4px]  bg-custom-purple  border-[1.5px] text-[12px]"
              />
              <Input
                placeholder="Whats your project topic"
                label="Project Topic"
                name="Project Topic"
                className="w-[100%] p-2 rounded-[4px] bg-custom-purple  border-[1.5px] text-[12px]"
              />
            </div>
            <div className="flex items-center justify-center gap-6 md:flex-row flex-col w-full">
              <Input
                name="Category"
                label="Category"
                placeholder="Select Category"
                className="w-[100%] p-2 rounded-[4px]  bg-custom-purple  border-[1.5px] text-[12px]"
              />
              <Input
                label="Group Size"
                name="Group Size"
                placeholder="Select"
                className="w-[100%] p-2 rounded-[4px] bg-custom-purple  border-[1.5px] text-[12px]"
              />
            </div>
            <p className="text-custom-highlight ">
              Please review your registration details before submitting
            </p>
            <div className="flex text-white  ">
              <input type="checkbox" />
              <p className="text-[10px]">
                I agreed with the event terms and conditions and privacy policy
              </p>
            </div>
            <div className="flex justify-center items-center w-full">
              <Button className="w-full  bg-button-gradient p-3 rounded-[4px] text-white">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-custom-light  absolute w-[20rem] md:h-[17rem] h-[10rem] hidden md:flex   top-[2rem]   rounded-full   md:top-[26rem]   md:right-0  blur-2xl opacity-[0.3]"></div>
    </section>
  );
}

export default Register;

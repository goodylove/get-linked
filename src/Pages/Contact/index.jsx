import Button from "../../components/Button.jsx";
import Input from "../../components/input";
import { SVG } from "../../constants/Icons";

function Contact() {
  return (
    <>
      <div className="grid relative text-white grid-cols-2 my-5 w-10/12 lg:w-11/12 max-md:w-full max-md:grid-cols-1 mx-auto">
        <div className="flex max-md:hidden items-center w-full justify-center relative">
          <span className="text-3xl max-sm:text-sm text-custom-highlight top-0 left-1/3  absolute z-20">
            &#x2726;
          </span>
          <div className="relative space-y-5">
            <p className="text-custom-highlight font-clash font-bold text-2xl mb-8 text-clash">
              Get in touch
            </p>

            <div>
              <p>Contact</p>
              <p>Information</p>
            </div>
            <div>
              <p> 27,Alara Street</p>
              <p>Yaba 100012</p>
              <p>Lagos State</p>
            </div>
            <div>
              <p>we are open from Monday-Friday</p>
              <p>08:00am - 05:00pm</p>
            </div>
            <div>
              <p className="text-custom-highlight  text-xl mb-3 text-clash">
                Share on
              </p>
              <div className="flex items-center gap-3 object-contain">
                <img src={SVG.instagram} alt="" />
                <img src={SVG.twiietr} alt="" />
                <img src={SVG.facebook} alt="" />
                <img src={SVG.linkedin} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-white font-montserrat max-md:shadow-none shadow-md my-8 shadow-zinc-900 max-md:bg-custom-purple bg-move p-8 relative max-md:p-4 max-sm:p-4 w-full">
          <span className="text-3xl max-md:right-1 max-sm:text-sm text-zinc-500 top-5 right-1/4  absolute z-20">
            &#x2726;
          </span>
          <div className="text-custom-highlight font-clash font-bold text-2xl mb-8">
            <p>Questions or need assistance?</p>

            <p>Let us know about it!</p>
          </div>
          <p className="text-red-700 text-sm">{"error"}</p>
          <div className="hidden max-md:block w-11/2 mx-auto">
            Email us below to any question related to our event
          </div>
          <form className="space-y-6">
            <Input
              label="Team’s Name"
              id="FirstName"
              placeholder="Enter First Name"
            />
            <Input label="Topic" id="Topic" placeholder="Enter your Topic" />
            <Input
              label="Mail"
              id="Mail"
              placeholder="Enter your Email"
              type="email"
            />
            <textarea
              name="message"
              id="message"
              cols={20}
              rows={10}
              style={{ resize: "none", height: "150px" }}
              className="w-full block h-24 placeholder:text-zinc-600 p-4 bg-inherit border border-zinc-600 rounded-md outline-none"
            ></textarea>
            <div className="flex justify-center">
              <Button>trss</Button>
            </div>
            <span className="text-3xl left-2 max-sm:text-sm text-custom-light bottom-1/4  absolute z-20">
              &#x2726;
            </span>
          </form>
        </div>
        <span className="text-3xl max-sm:text-sm text-white bottom-0 right-0  absolute z-20">
          &#x2726;
        </span>
      </div>
    </>
  );
}

export default Contact;

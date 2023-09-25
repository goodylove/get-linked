import { SVG } from "../../constants/Icons";
import Button from "../Button.jsx";

const policy = [
  {
    text: "The Standard License grants you a non-exclusive right to navigateand register for our event",
  },

  {
    text: "You are licensed to use the item available at any free source sites, for your project developement",
  },
];

function Licensepolicy() {
  return (
    <div className="border-2 border-custom-pink p-7 my-2 rounded-[5px]">
      <div className="">
        <p className=" font-montserrat font-[400] text-[14px] leading-[30.3px] text-white">
          At getlinked tech Hackathon 1.0, we value your privacy and are
          committed to protecting your personal information. This Privacy Policy
          outlines how we collect, use, disclose, and safeguard your data when
          you participate in our tech hackathon event. By participating in our
          event, you consent to the practices described in this policy.
        </p>
        <h3 className="text-white">Licensing Policy</h3>
        <h4 className="text-white">Here are terms of our Standard License:</h4>
        <div className="policy-wrapper">
          {policy.map((item, index) => (
            <div
              key={index}
              className="flex gap-2 py-4  text-white   items-start justify-start"
            >
              <img src={SVG.circle} alt="" className="w-[15px] mt-2" />
              <p>{item.text}</p>
            </div>
          ))}
          <Button>Read More</Button>
        </div>
      </div>
    </div>
  );
}

export default Licensepolicy;

import { navLink } from "./index";
import Button from "../Button.jsx";

function MobileNav({ toggle }) {
  return (
    <div className="flex  top-[23px] mobile  justify-center items-center ronded-[5px] cursor-pointer shadow-xl  h-[270px] w-[270px] absolute left-[172px] bg-[#150e28] ">
      <div>
        <div className="closes flex justify-end" onClick={toggle}>
          <span className="h-[20px] w-[20px] rounded-full border-2  border-x-custom-pink flex justify-center items-center text-white">
            x
          </span>
        </div>
        <ul className="text-white block ">
          {navLink.map((path, index) => (
            <li key={index} className="py-[10px]">
              {path.name}
            </li>
          ))}
          <Button>Register</Button>
        </ul>
      </div>
    </div>
  );
}

export default MobileNav;

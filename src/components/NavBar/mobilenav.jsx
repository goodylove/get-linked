import { navLink } from "./index";
import Button from "../Button.jsx";
import { Link, useNavigate } from "react-router-dom";
import { Link as Links, animateScroll as scroll } from "react-scroll";

function MobileNav({ toggle }) {
  const navigate = useNavigate();
  return (
    <div className="flex  top-[27px] mobile   items-center ronded-[5px] cursor-pointer shadow-xl  h-[330px] w-[330px] absolute left-[102px] bg-[#150e28] p-5 ">
      <div className="w-full">
        <div>
          <div
            className="closes flex justify-end  items-end pr-20"
            onClick={toggle}
          >
            <span className="h-[20px] w-[20px] rounded-full border-2  p-4 border-x-custom-pink flex justify-center items-center text-white">
              x
            </span>
          </div>
          <ul className="text-white block ">
            {navLink.map((path, index) => (
              <Links
                to={path.path}
                key={index}
                spy={true}
                duration={500}
                smooth={true}
              >
                <li
                  onClick={toggle}
                  className="py-[10px] hover:text-fuchsia-600 cursor-pointer"
                >
                  {path.name}
                </li>
              </Links>
            ))}
            <Link to="/register">
              <Button callback={toggle}>Register</Button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;

import { SVG } from "../../constants/Icons";
import Button from "../Button.jsx";

import MobileNav from "./mobilenav";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Link as Links, animateScroll as scroll } from "react-scroll";

export const navLink = [
  {
    name: "TimeLine",
    path: "timeline",
  },
  {
    name: "OverView",
    path: "overvie",
  },
  {
    name: "FAQS",
    path: "faq",
  },
];

// activeClass="active"
// to="section1"
// spy={true}
// smooth={true}
// offset={-70}
// duration={500}

function NavBar() {
  const [toggle, setToogle] = useState(false);
  const handleToggle = () => setToogle((prev) => !prev);
  const handleClose = () => setToogle(false);

  const navigate = useNavigate();
  return (
    <nav
      className="flex justify-between items-center pt-6 pb-3  px-5 md:px-24 w-full"
      id="top"
    >
      <Link to="/">
        <img src={SVG.logolink} alt="logo" className="" />
      </Link>

      <div>
        <ul className="md:flex justify-center items-center text-white  gap-8 hidden ">
          {navLink.map((nav, index) => (
            <Links
              to={nav.path}
              key={index}
              spy={true}
              duration={500}
              smooth={true}
            >
              <li className="hover:text-fuchsia-600 cursor-pointer">
                {nav.name}
              </li>
            </Links>
          ))}
          <Link
            to="/contact "
            className="hover:text-fuchsia-600 cursor-pointer"
          >
            Contact
          </Link>
          <Button callback={() => navigate("/register")}>Risgister</Button>
        </ul>
        {/* mobile */}
        <div className=" flex md:hidden">
          <img src={SVG.mobilehambuger} alt="hambuger" onClick={handleToggle} />
        </div>
      </div>
      {toggle && <MobileNav toggle={handleClose} />}
    </nav>
  );
}

export default NavBar;

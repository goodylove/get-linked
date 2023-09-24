import styled from "styled-components";
import { SVG } from "../../constants/Icons";
import Button from "../Button.jsx";

import MobileNav from "./mobilenav";
import { useState } from "react";

export const navLink = [
  {
    name: "TimeLine",
    path: "",
  },
  {
    name: "OverView",
    path: "",
  },
  {
    name: "FAQS",
    path: "",
  },
  {
    name: "Contacts",
    path: "",
  },
];

function NavBar() {
  const [toggle, setToogle] = useState(false);
  const handleToggle = () => setToogle((prev) => !prev);
  const handleClose = () => setToogle(false);
  console.log(toggle);

  return (
    <nav className="flex justify-between items-center pt-6 pb-3  px-5 md:px-24 w-full">
      <img src={SVG.logolink} alt="logo" className="" />

      <div>
        <ul className="md:flex justify-center items-center text-white  gap-8 hidden ">
          {navLink.map((nav, index) => (
            <li key={index}>{nav.name}</li>
          ))}
          <Button>Risgister</Button>
        </ul>
        {/* mobile */}
        <div className=" flex md:hidden">
          <img src={SVG.mobilehambuger} alt="hambuger" />
        </div>
      </div>
      {/* {toggle && <MobileNav toggle={handleClose} />} */}
    </nav>
  );
}

export default NavBar;

import styled from "styled-components";
import { SVG } from "../../constants/Icons";
import Button from "../Button.jsx";
import { NavWrapper } from "./NavBarStyle";
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
    <NavWrapper>
      <img src={SVG.logolink} alt="logo" className="logo" />

      <div>
        <ul>
          {navLink.map((nav, index) => (
            <li key={index}>{nav.name}</li>
          ))}
          <Button>Risgister</Button>
        </ul>
        {/* mobile */}
        <div>
          <img
            src={SVG.mobilehambuger}
            alt=""
            className="mobile"
            onClick={handleToggle}
          />
        </div>
        {toggle && <MobileNav toggle={handleClose} />}
      </div>
    </NavWrapper>
  );
}

export default NavBar;

const Wrapper = styled.div``;

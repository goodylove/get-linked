import { SVG } from "../../constants/Icons";
import Button from "../Button.jsx";
import { NavWrapper } from "./NavBarStyle";

const navLink = [
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
  return (
    <NavWrapper>
      <img src={SVG.logolink} alt="" />

      <ul>
        {navLink.map((nav, index) => (
          <li key={index}>{nav.name}</li>
        ))}
        <Button>Risgister</Button>
      </ul>
    </NavWrapper>
  );
}

export default NavBar;

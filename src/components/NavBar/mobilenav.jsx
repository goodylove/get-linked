import styled from "styled-components";
import { navLink } from "./index";
import Button from "../Button.jsx";
import { Colors } from "../../constants/Colors";

function MobileNav({ toggle }) {
  return (
    <Wrapper>
      <div>
        <div className="closes" onClick={toggle}>
          <span>x</span>
        </div>
        <ul>
          {navLink.map((path, text) => (
            <li>{path.name}</li>
          ))}
          <Button>Register</Button>
        </ul>
      </div>
    </Wrapper>
  );
}

export default MobileNav;

const Wrapper = styled.div`
  display: flex;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 2px 2px 2px, 2px 2px 2px;
  background-color: #150e28;
  height: 270px;
  width: 270px;
  border-radius: 5px;
  position: absolute;
  left: 172px;
  top: 23px;
  z-index: 1;
  transtion: 0.3s ease-in-out;
  justify-content: center;
  align-items: center;

  ul {
    color: white;
    display: block;
    li {
      padding: 10px 0;
    }
  }

  .closes {
    display: flex;
    justify-content: flex-end;
    span {
      height: 20px;
      width: 20px;
      border-radius: 50%;
      border: 2px solid ${Colors.pink};
      .hide {
        dispaly: none;
      }
      color: white;
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

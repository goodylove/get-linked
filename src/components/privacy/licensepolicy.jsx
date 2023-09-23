import styled from "styled-components";
import { Colors } from "./../../constants/Colors/index";
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
    <Wrapper>
      <div className="second-wrapper">
        <p>
          At getlinked tech Hackathon 1.0, we value your privacy and are
          committed to protecting your personal information. This Privacy Policy
          outlines how we collect, use, disclose, and safeguard your data when
          you participate in our tech hackathon event. By participating in our
          event, you consent to the practices described in this policy.
        </p>
        <h3>Licensing Policy</h3>
        <h4>Here are terms of our Standard License:</h4>
        <div className="policy-wrapper">
          {policy.map((item, index) => (
            <div key={index} className="policy">
              <img src={SVG.circle} alt="" />
              <p>{item.text}</p>
            </div>
          ))}
          <Button>Read More</Button>
        </div>
      </div>
    </Wrapper>
  );
}

export default Licensepolicy;

const Wrapper = styled.div`
  border: 1px solid ${Colors.pink};
  width: 79%;
  color: white;
  padding: 37px;
  display: flex;
  justify-content: center;
  border-radius:5px;
  align-items: center;

  .second-wrapper {
    width: 80%;
    display: flex;
    flex-direction: column;
    aligin-items: center;
    justify-content: center;

    p {
      font-weight: 400;
      font-size: 14px;

      line-height: 30.3px;
    }
    h3 {
      color: ${Colors.pink};
      padding: 1rem 0;
    }

    h4{
        margin:20px 0;
        
    }
    .policy-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        .policy {
      display: flex;
      justify-content: center;
      gap:20px;
      img{
        height: 13px;
    margin-top: 24px;
    width: 20px;
      }
  }

    }
    @media  screen and (max-width:1000px){

        .second-wrapper{
            width: 100%;
    display: flex;
    flex-direction: column;
    aligin-items: center;
    justify-content: center;
        }
       
    }

`;

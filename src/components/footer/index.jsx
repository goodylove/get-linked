import styled from "styled-components";
import { SVG } from "../../constants/Icons";
import { Colors } from "./../../constants/Colors/index";

function Footer() {
  return (
    <Wrapper>
      <section>
        <div className="Wrapper-about">
          <img src={SVG.logolink} alt="" />
          <img src={SVG.star2} alt="star" className="star" />
          <p>
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <div className="terms">
            <span>Terms</span>
            <div></div>
            <span>Privacy</span>
          </div>
        </div>

        <div className="useful">
          <h3>Useful Links</h3>
          <ul>
            <li>Overview</li>
            <li>FAQs</li>
            <li>Timeline</li>
            <li>Register</li>
            <li className="follow">
              Follow Us
              <div className="social">
                <img src={SVG.instagram} alt="" />
                <img src={SVG.twiietr} alt="" />
                <img src={SVG.facebook} alt="" />
                <img src={SVG.linkedin} alt="" />
              </div>
              <img src={SVG.graystar} alt="star" className="star2" />
            </li>
          </ul>
        </div>
        <div className="contact-us">
          <h3>Contact us</h3>
          <ul className="contact">
            <li>
              <img src={SVG.phonenum} alt="" />
              +234 9068557284
            </li>
            <li>
              <span>
                <img src={SVG.location} alt="" />
              </span>
              <span style={{ width: "89px" }}>
                27,Alara Street Yaba 100012 Lagos State
              </span>
            </li>
          </ul>
          <img src={SVG.star2} alt="star" className="star3" />
        </div>
      </section>
      <img src={SVG.pinkstart} alt="" />
      <div className="allright">All rights reserved. © getlinked Ltd.</div>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.footer`
  width: 80%;
  margin: 2rem 0;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  section {
    width: 100%;
    display: flex;
    justify-content: space-around;

    .Wrapper-about {
      position: relative;
      .star {
        position: absolute;
        left: -2rem;
        top: 70px;
        width: 20px;
      }
    }
    .useful {
      position: relative;
      .star2 {
        position: absolute;
        left: 2rem;
        top: 70px;
        width: 20px;
      }
    }
    .contact-us {
      position: relative;
      .star3 {
        position: absolute;
        left: -2rem;
        top: 70px;
        width: 20px;
      }
    }
    .terms {
      color: white;
      display: flex;
      justify-content: start;
      gap: 0.5em;
      align-items: center;
      margin-top: 3.6rem;
      div {
        height: 20px;
        width: 2px;
        background: ${Colors.pink};
      }
    }
    .follow {
      color: ${Colors.pink};
      display: flex;
      justify-content: centet;
      align-items: center;
      gap: 5px;

      .social {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
      }
    }

    .contact {
      li {
        display: flex;
        justify-content: cenetr;
        font-size: 12px;
        gap: 10px;
        line-height: 18.95px;
      }
    }
    ul {
      color: white;
      font-size: 13px;
      li {
        padding: 10px;
      }
    }
    h3 {
      color: ${Colors.pink};
    }
    p {
      font-size: 12px;
      line-height: 30.69px;
      font-weight: 400;
      color: white;
      max-width: 400px;
      word-wrap: break-word;
      margin-top: 1rem;
    }
  }
  .allright {
    color: white;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  @media (max-width: 1000px) {
    section {
      flex-wrap: wrap;
    }
  }
  @media (max-width: 768px) {
    section {
      flex-wrap: wrap;
      flex-direction: column;
      gap: 1rem;

      p {
        word-wrap: break-word;
        font-size: 12px;
      }
      .terms {
        margin: 2rem 0;
      }
    }
    .allright {
      text-align: start;
    }
  }
`;

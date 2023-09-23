import styled from "styled-components";
import { SVG } from "../../constants/Icons";
import Title from "./../Title/index";
import Licensepolicy from "./licensepolicy";

function PravicySection() {
  return (
    <Wrapper>
      <div>
        <Title title="Privacy Policy and " text="Terms" />
        <h3 style={{ color: "white", margin: "20px 0" }}>
          Last updated on September 12, 2023
        </h3>

        <p>
          Below are our privacy & policy, which outline a lot of goodies. it’s
          our aim to always take of our participant
        </p>
        <Licensepolicy />
      </div>
      <div>
        <img src={SVG.privac} alt="" />
      </div>
    </Wrapper>
  );
}

export default PravicySection;

const Wrapper = styled.section`
  width: 80%;
  margin: 1rem 0;

  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    margin-top: 1rem;
  }
  p {
    color: white;
    margin: 1rem 0;
  }
  img {
    width: 400px;
  }
  @media (max-width: 1000px) {
    flex-wrap: wrap;
    flex-direction: column;
    img {
      width: 230px;
    }
  }
`;

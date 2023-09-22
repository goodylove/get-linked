import styled from "styled-components";
import { SVG } from "./../../constants/Icons/index";
import Title from "./../Title/index";

function PriceAndReward() {
  return (
    <Wrapper>
      <div>
        <img src={SVG.pinkstart} alt="" />
        <img src={SVG.award} alt="" className="award" />
        <img src={SVG.star2} alt="" />
      </div>

      <div className="right">
        <Title title="Prizes and" text="Rewards" />
        <p>
          Highlight of the prizes or rewards for winners and <br />
          for participants.
        </p>
        <img src={SVG.thirdRuner} className="winner" />
      </div>
      <img src={SVG.star2} alt="" />
    </Wrapper>
  );
}

export default PriceAndReward;

const Wrapper = styled.section`
  width: 80%;
  margin: 1.3rem 0;
  display: flex;
  gap: 1.3rem;
  justify-content: center;
  align-items: center;

  p {
    color: white;
    margin: 2rem 0;
    font-size: 14px;
    line-height: 20px.;
  }
  .award {
    width: 400px;
    object-fit: cover;
    margin-top: 70px;
  }
  .right {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    .winner {
      width: 500px;
      object-fit: cover;
      margin-top: 50px;
    }
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;

    p {
      color: white;
      margin: 1rem 0;
      font-size: 12px;
      line-height: 20px.;
    }

    .award {
      width: 300px;
      margin: 0px;
    }
    .right {
      text-align: center;
      .winner {
        width: 300px;
      }
    }
  }
`;

import styled from "styled-components";
import { SVG } from "../../constants/Icons";
import { Colors } from "../../constants/Colors";

function Sponsor() {
  return (
    <Wrapper>
      <h2>Partners and Sponsors</h2>
      <p>
        Getlinked Hackathon 1.0 is honored to have the following major companies
        as its partners and sponsors
      </p>
      <img src={SVG.purpleStar} alt="" className="star" />
      <img src={SVG.purpleStar} alt="" className="star2" />
      <img src={SVG.star2} alt="" className="star3" />
      <div className="sponsor-img">
        <img src={SVG.patnerandsponsort} alt="sponsor" />
      </div>
    </Wrapper>
  );
}

export default Sponsor;

const Wrapper = styled.section`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  gap: 2rem;
  padding: 30px 0;
  color: white;
  text-align: center;

  .star {
    position: absolute;
    top: 7.7rem;
    width: 20px;
    inset: 0px 0px auto auto;
  }
  .star2 {
    position: absolute;
    top: 14rem;
    width: 20px;
    right: 28rem;
    inset: 0px 0px auto auto;
  }

  .star3 {
    position: absolute;
    top: 24rem;
    width: 20px;
    right: 28rem;
    inset: 0px 0px auto auto;
  }
  p {
    font-size: 14px;

    line-height: 27.5px;
  }
  .sponsor-img {
    display: flex;
    border: 1px solid ${Colors.pink};
    padding: 3rem;
    display: flex;
    justify-content: center;

    img {
      width: 500px;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column;
    p {
      font-size: 12px;

      line-height: 22.5px;
      text-align: center;
    }

    .sponsor-img {
      display: flex;
      border: 1px solid ${Colors.pink};

      display: flex;
      justify-content: center;

      img {
        width: 200px;
      }
    }
  }
`;

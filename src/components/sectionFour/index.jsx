import styled from "styled-components";
import { Colors } from "../../constants/Colors";
import { SVG } from "../../constants/Icons";
import Button from "../Button.jsx";
import { keyAttribute } from "./keyattributedata";

function SectionFour() {
  return (
    <SectionFourWrapper>
      <div className="sec-four-left">
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            textAlign: "start",
            marginLeft: "5.5rem",
          }}
        >
          <img src={SVG.purpleStar} alt="" />
        </div>
        <img src={SVG.friends} alt="bulb" className="sec-img" />
        <div>
          <img src={SVG.graystar} alt="" className="middlestar" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "end",
            textAlign: "center",
          }}
        >
          <img src={SVG.star2} alt="" />
        </div>
      </div>

      <div className="sec-four-right">
        <div>
          <h2>Judging Criteria </h2>
          <h3>Key attributes</h3>
        </div>
        <div>
          {keyAttribute.map(({ title, value }) => {
            return (
              <p>
                <span style={{ color: `${Colors.pink}` }}>{title}</span>
                {value}
              </p>
            );
          })}
        </div>

        <p>
          <Button>Read More</Button>
        </p>
      </div>
    </SectionFourWrapper>
  );
}

export default SectionFour;

const SectionFourWrapper = styled.section`
  margin: 1.4rem 0;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;

  .sec-img {
    width: 500px;
  }
  .sec-four-right {
    position: relative;
    img {
      position: absolute;
    }
    h3 {
      color: ${Colors.pink};
      font-size: 22px;
      line-height: 32.56px;
    }
    h2 {
      color: white;
      font-size: 22px;
      line-height: 20.56px;
    }

    p {
      margin-top: 10px;
      color: white;
      font-size: 14px;
      font-weight: 400;
      line-height: 27.5px;
    }
  }
  .sec-four-left {
    position: relative;
    .middlestar {
      position: absolute;
      top: 16rem;
      left: 16rem;
    }
  }

  @media screen and (max-width: 1000px) {
    margin: 1.5rem 0;
    width: 80%;
    display: flex;
    align-items: center;
    text-align: center;

    flex-wrap: wrap;

    gap: 60px;

    .sec-img {
      width: 340px;
    }

    .intro-sec-two {
      position: relative;
      img {
        position: absolute;
        right: 0;
        top: 0;
      }

      h3 {
        color: #fe34b9;
        font-size: 23px;
        line-height: 41.56px;
      }
      h2 {
        color: white;
        font-size: 20px;
        line-height: 16.56px;
        font-weight: 600;
      }
    }

    p {
      color: white;
      font-size: 14px;
      font-weight: 400;
      line-height: 27.5px;
    }
  }
`;

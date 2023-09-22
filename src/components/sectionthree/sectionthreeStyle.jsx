import styled from "styled-components";
import { Colors } from "./../../constants/Colors/index";

export const SectionThreeWrapper = styled.section`
  margin: 1.2rem 0;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;

  .sec-img {
    width: 400px;
  }
  .sec-three-left {
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
      color: white;
      font-size: 14px;
      font-weight: 400;
      line-height: 27.5px;
    }
  }

  @media screen and (max-width: 1000px) {
    margin: 1.5rem 0;
    width: 80%;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column-reverse;

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

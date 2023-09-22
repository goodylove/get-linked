import styled from "styled-components";
import { Colors } from "../../constants/Colors";

export const SectionFourWrapper = styled.section`
  margin: 1.4rem 0;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;

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
`;

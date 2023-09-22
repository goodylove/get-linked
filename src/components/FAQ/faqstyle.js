import styled from "styled-components";
import { Colors } from "../../constants/Colors";

export const FaqWrapper = styled.section`
  width: 80%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: white;
  .f-img {
    width: 630px;
  }
  .heading {
    line-height: 35px;
  }
  h3 {
    color: ${Colors.pink};
    font-size: 30px;
  }

  h5 {
    font-size: 14px;
    font-weight: 400;
    margin: 20px 0;

    line-height: 27.5px;
  }
  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;

    .heading {
      text-align: center;
      h3 {
        color: ${Colors.pink};
        font-size: 30px;
      }
    }
    .f-img {
      width: 330px;
    }
  }
`;

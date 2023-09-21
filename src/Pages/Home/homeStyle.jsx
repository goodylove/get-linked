import styled from "styled-components";
import { Colors } from "../../constants/Colors";

export const HomeWrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .line {
    width: 100%;
    height: 1px;
    background-color: hsla(0, 0%, 100%, 0.18);
  }
  .star {
    top: 184px;
    position: absolute;
    left: 215px;
  }
  .hr-innovation {
    color: white;
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    align-items: self-end;

    .img {
      margin-left: 16rem;
    }
  }
  .section-one {
    .left-side {
      .title {
        font-size: 50px;
        line-height: 94.8px;
        font-weight: 800;
        color: #ffffff;
        position: relative;

        .techbulb {
          position: absolute;
          left: 30rem;
          top: -20px;
          width: 30px;
        }
      }
    }
    .right-side {
    }
  }
`;

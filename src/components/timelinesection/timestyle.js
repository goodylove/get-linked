import styled from "styled-components";
import { Colors } from "../../constants/Colors";

export const TimeLineWrapper = styled.section`
  width: 80%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  align-items: center;
  flex-direction: column;

  .time-r {
    .title-time-line {
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      color: #ffff;

      h3 {
        color: #ffff;
        font-size: 20px;
        font-weight: 700;
      }
    }
  }

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    margin: 30px 0;

    .wrapper {
      display: flex;
      width: 100%;
      justify-content: flex-start;
      gap: 4rem;
      align-items: end;
      margin: 1rem 0;

      .pink-line {
        background: linear-gradient(to right, ${Colors.pink}, ${Colors.purple});
        height: 5rem;
        width: 6px;
        margin-left: 27px;
      }

      .date {
        display: flex;
        justify-content: center;
        align-items: end;
      }
    }

    .wrapper-2 {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      gap: 4rem;
      align-items: end;
      margin-left: 2.4rem;

      .pink-line {
        background: linear-gradient(to right, ${Colors.pink}, ${Colors.purple});
        height: 5rem;
        width: 6px;
        margin-left: 27px;
      }

      .date {
        display: flex;
        justify-content: center;
        align-items: end;
      }
    }

    .wrapper-6 {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      gap: 4rem;
      align-items: end;
      margin-left: 5.4rem;
      .pink-line {
        background: linear-gradient(to right, ${Colors.pink}, ${Colors.purple});
        height: 5rem;
        width: 6px;
        margin-left: 27px;
      }

      .date {
        display: flex;
        justify-content: center;
        align-items: end;
      }
    }

    .wrapper-1 {
      display: flex;
      width: 100%;
      // justify-content: flex-end;
      gap: 4rem;
      align-items: end;
      margin-right: 11rem;
      .pink-line {
        background: linear-gradient(to right, ${Colors.pink}, ${Colors.purple});
        height: 5rem;
        width: 6px;
        margin-left: 27px;
      }

      .date {
        display: flex;
        justify-content: center;
        align-items: end;
      }
    }
  }
`;

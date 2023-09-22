import styled from "styled-components";
import { Colors } from "../../constants/Colors";

function SingleFaq({ ques }) {
  return (
    <SingleWrapper>
      <div className="wrapper">
        <div className="question">
          <h4>{ques.question}</h4>

          <span>+</span>
        </div>
        <p className="answer">yes</p>
      </div>
    </SingleWrapper>
  );
}

export default SingleFaq;

const SingleWrapper = styled.div`
  color: white;
  border-bottom: 1px solid ${Colors.pink};
  padding: 10px 0;
  width: 360px;
  margin: 10px 0;
  cursor: pointer;
  .wrapper {
    width: 100%;
    .question {
      font-size: 10px;
      display: flex;
      gap: 8px;
      align-items: center;
      justify-content: space-between;
      span {
        font-size: 20px;
        font-weight: 700;
        color: ${Colors.pink};
      }
    }
    .answer {
      display: none;
    }
  }

  @media screen and (max-width: 100px) {
  }
`;

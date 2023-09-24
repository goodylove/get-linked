import styled from "styled-components";
import { Colors } from "../../constants/Colors";

function LeftTimeLine({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default LeftTimeLine;

export const MonthTime = () => {
  return <Wrap>November 18, 2023</Wrap>;
};

const Wrapper = styled.div`
  line-height: 30px;
  text-align: right;
  h3 {
    color: ${Colors.pink};
    font-size: 13px;
  }
  span {
    color: white;
    font-size: 14px;
  }

  @media screen and (max-width: 1000px) {
    line-height: 27px;
    text-align: start;
    h3 {
      color: ${Colors.pink};
      font-size: 14px;
    }
    span {
      color: white;
      font-size: 14px;
    }
  }
`;

const Wrap = styled.div`
  color: ${Colors.pink};
  font-size: 18px;
  font-weight: 700;
  line-height: 70.67px;
`;

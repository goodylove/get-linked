import styled from "styled-components";
import { Colors } from "./../../constants/Colors/index";
function Title({ title, text }) {
  return (
    <Wrapper>
      <h2>{title} </h2>
      <h3> {text}</h3>
    </Wrapper>
  );
}

export default Title;

const Wrapper = styled.div`
  h3 {
    color: ${Colors.pink};
    font-size: 22px;
    line-height: 20.56px;
  }
  h2 {
    color: white;
    font-size: 22px;
    line-height: 20.56px;
  }
`;

import styled from "styled-components";
import { Colors } from "../../constants/Colors";

function Righttime({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
export default Righttime;
const Wrapper = styled.div`
  text-align: start;
  h3 {
    color: ${Colors.pink};
    font-size: 13px;
  }
  span {
    color: white;
    font-size: 14px;
    line-height: 20px;
  }
`;

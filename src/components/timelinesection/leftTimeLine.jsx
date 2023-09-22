import styled from "styled-components";
import { Colors } from "../../constants/Colors";

function LeftTimeLine() {
  return (
    <Wrapper>
      <h3>Hackathon Announcement</h3>
      <span>
        The getlinked tech hackathon 1.0 is formally announced <br />
        to the general public and teams begin to get ready to register
      </span>
    </Wrapper>
  );
}

export default LeftTimeLine;

const Wrapper = styled.div`
  text-align: right;
  h3 {
    color: ${Colors.pink};
  }
  span {
    color: white;
    font-size: 14px;
  }
`;

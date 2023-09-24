import styled from "styled-components";
import { SVG } from "../../constants/Icons";
import LeftTimeLine, { MonthTime } from "../timelinesection/leftTimeLine";
import { Colors } from "../../constants/Colors";

function MobileTimeLine() {
  return (
    <>
      <Wrapper>
        <div>
          <div className="pink-line"></div>
          <img src={SVG.one} alt="" />
        </div>
        <div>
          <LeftTimeLine>
            <h3>Hackathon Announcement</h3>
            <span>
              The getlinked tech hackathon 1.0 is formally announced <br />
              to the general public and teams begin to get ready to register
            </span>
          </LeftTimeLine>
          <MonthTime />
        </div>
      </Wrapper>

      <Wrapper>
        <div>
          <div className="pink-line"></div>
          <img src={SVG.two} alt="" />
        </div>
        <div>
          <LeftTimeLine>
            <h3>Teams Registration begins</h3>
            <span>
              Interested teams can now show their interest in the
              <br /> getlinked tech hackathon 1.0 2023 by proceeding to register
            </span>
          </LeftTimeLine>
          <MonthTime />
        </div>
      </Wrapper>
      <Wrapper>
        <div>
          <div className="pink-line"></div>
          <img src={SVG.three} alt="" />
        </div>
        <div>
          <LeftTimeLine>
            <h3>Teams Registration ends</h3>
            <span>
              Interested Participants are no longer Allowed to
              <br /> register
            </span>
          </LeftTimeLine>
          <MonthTime />
        </div>
      </Wrapper>
      <Wrapper>
        <div>
          <div className="pink-line"></div>
          <img src={SVG.four} alt="" />
        </div>
        <div>
          <LeftTimeLine>
            <h3>Announcement of the accepted teams and ideas</h3>
            <span>
              All teams whom idea has been accepted into getlinked tech
              <br />
              hackathon 1.0 2023 are formally announced
            </span>
          </LeftTimeLine>
          <MonthTime />
        </div>
      </Wrapper>

      <Wrapper>
        <div>
          <div className="pink-line"></div>
          <img src={SVG.five} alt="" />
        </div>
        <div>
          <LeftTimeLine>
            <h3>Getlinked Hackathon 1.0 Offically Begins</h3>
            <span>
              Accepted teams can now proceed to build their
              <br /> ground breaking skill driven solutions
            </span>
          </LeftTimeLine>
          <MonthTime />
        </div>
      </Wrapper>
      <Wrapper>
        <div>
          <div className="pink-line"></div>
          <img src={SVG.six} alt="" />
        </div>
        <div>
          <LeftTimeLine>
            <h3>Demo Day</h3>
            <span>
              Teams get the opportunity to pitch their projects to judges.
              <br /> The winner of the hackathon will also be announced on this
              day
            </span>
          </LeftTimeLine>
          <MonthTime />
        </div>
      </Wrapper>
    </>
  );
}

export default MobileTimeLine;

const Wrapper = styled.section`
  display: flex;
  gap: 10px;
  .pink-line {
    background: linear-gradient(to right, ${Colors.pink}, ${Colors.purple});
    height: 5rem;
    width: 6px;
    margin-left: 27px;
  }
  @media screen and (max-width: 500px) {
    .pink-line {
      background: linear-gradient(to right, ${Colors.pink}, ${Colors.purple});
      height: 8rem;
      width: 6px;
      margin-left: 27px;
    }
  }
`;

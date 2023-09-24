import { SVG } from "../../constants/Icons";
import { TimeLineWrapper } from "./timestyle";
import LeftTimeLine, { MonthTime } from "./leftTimeLine";
import Righttime from "./righttime";

function TimeLine() {
  return (
    <TimeLineWrapper>
      <div className="time-r">
        <div className="title-time-line">
          <h3>Timeline</h3>
          <p>
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>
      </div>
      <section>
        <div className="wrapper-1">
          <LeftTimeLine>
            <h3>Hackathon Announcement</h3>
            <span>
              The getlinked tech hackathon 1.0 is formally announced <br />
              to the general public and teams begin to get ready to register
            </span>
          </LeftTimeLine>

          <div>
            <div className="pink-line"></div>
            <img src={SVG.one} alt="" />
          </div>

          <div className="date">
            <MonthTime />
          </div>
        </div>
        <div className="wrapper-2">
          <div className="date">
            <MonthTime />
          </div>
          <div>
            <div className="pink-line"></div>
            <img src={SVG.two} alt="" />
          </div>

          <Righttime>
            <h3>Teams Registration begins</h3>
            <span>
              Interested teams can now show their interest in the
              <br /> getlinked tech hackathon 1.0 2023 by proceeding to register
            </span>
          </Righttime>
        </div>
        <div className="wrapper">
          <LeftTimeLine>
            <h3>Teams Registration ends</h3>
            <span>
              Interested Participants are no longer Allowed to
              <br /> register
            </span>
          </LeftTimeLine>

          <div>
            <div className="pink-line"></div>
            <img src={SVG.three} alt="" />
          </div>

          <div className="date">
            <MonthTime />
          </div>
        </div>
        <div className="wrapper-2">
          <div className="date">
            <MonthTime />
          </div>
          <div>
            <div className="pink-line"></div>
            <img src={SVG.four} alt="" />
          </div>

          <Righttime>
            <h3>Announcement of the accepted teams and ideas</h3>
            <span>
              All teams whom idea has been accepted into getlinked tech
              <br />
              hackathon 1.0 2023 are formally announced
            </span>
          </Righttime>
        </div>
        <div className="wrapper">
          <LeftTimeLine>
            <h3>Getlinked Hackathon 1.0 Offically Begins</h3>
            <span>
              Accepted teams can now proceed to build their
              <br /> ground breaking skill driven solutions
            </span>
          </LeftTimeLine>

          <div>
            <div className="pink-line"></div>
            <img src={SVG.five} alt="" />
          </div>

          <div className="date">
            <MonthTime />
          </div>
        </div>

        <div className="wrapper-6">
          <div className="date">
            <MonthTime />
          </div>
          <div>
            <div className="pink-line"></div>
            <img src={SVG.six} alt="" />
          </div>

          <Righttime>
            <h3>Demo Day</h3>
            <span>
              Teams get the opportunity to pitch their projects to judges.
              <br /> The winner of the hackathon will also be announced on this
              day
            </span>
          </Righttime>
        </div>
      </section>
    </TimeLineWrapper>
  );
}

export default TimeLine;

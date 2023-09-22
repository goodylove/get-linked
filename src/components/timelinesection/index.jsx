import { SVG } from "../../constants/Icons";
import { TimeLineWrapper } from "./timestyle";
import LeftTimeLine from "./leftTimeLine";
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
    </TimeLineWrapper>
  );
}

export default TimeLine;

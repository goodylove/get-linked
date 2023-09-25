import styled from "styled-components";
import { SVG } from "../../constants/Icons";
import LeftTimeLine, {
  MonthTime,
  Righttime,
} from "../timelinesection/leftTimeLine";
import { Colors } from "../../constants/Colors";

function MobileTimeLine() {
  return (
    <section className=" flex w-full justify-center items-center mt-10">
      <div className="w-[80%] justify-center flex items-center ">
        <div className="w-[100%] justify-center flex flex-col ">
          <div className="flex justify-center items-center gap-5">
            <div className="flex flex-col justify-center items-center ">
              <div className="h-[100px]  md:h-[70px]  w-[6px] bg-button-gradient"></div>
              <img src={SVG.one} alt="" />
            </div>
            <div>
              <Righttime
                title="Hackathon Announcement"
                subtitle="The getlinked tech hackathon 1.0 is formally announced 
              to the general public and teams begin to get ready to register"
              />

              <MonthTime />
            </div>
          </div>

          <div className="flex justify-center items-center gap-5">
            <div className="flex flex-col justify-center items-center ">
              <div className="h-[100px]  md:h-[70px]  w-[6px] bg-button-gradient"></div>
              <img src={SVG.two} alt="" />
            </div>
            <div>
              <Righttime
                title="Teams Registration begins"
                subtitle=" Interested teams can now show their interest in the
               getlinked tech hackathon 1.0 2023 by proceeding to register"
              />
              <MonthTime />
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="flex flex-col justify-center items-center ">
              <div className="h-[100px]  md:h-[70px]  w-[6px] bg-button-gradient"></div>
              <img src={SVG.three} alt="" className="" />
            </div>
            <div>
              <Righttime
                title="Teams Registration ends"
                subtitle="  Interested Participants are no longer Allowed to
               register"
              />
              <MonthTime />
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="flex flex-col justify-center items-center ">
              <div className="h-[100px]  md:h-[70px]  w-[6px] bg-button-gradient"></div>
              <img src={SVG.four} alt="" />
            </div>
            <div>
              <Righttime
                title="Announcement of the accepted teams and ideas"
                subtitle=" All teams whom idea has been accepted into getlinked tech
              
              hackathon 1.0 2023 are formally announced"
              />
              <MonthTime />
            </div>
          </div>

          <div className="flex justify-center items-center gap-5">
            <div className="flex flex-col justify-center items-center ">
              <div className="h-[100px]  md:h-[70px] w-[6px] bg-button-gradient"></div>
              <img src={SVG.five} alt="" />
            </div>
            <div>
              <Righttime
                title="Getlinked Hackathon 1.0 Offically Begins"
                subtitle="  Accepted teams can now proceed to build their
              ground breaking skill driven solutions"
              />

              <MonthTime />
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="flex flex-col justify-center items-center ">
              <div className="h-[100px]  md:h-[70px] w-[6px] bg-button-gradient"></div>
              <img src={SVG.six} alt="" />
            </div>
            <div>
              <Righttime
                title="Demo Day"
                subtitle=" Teams get the opportunity to pitch their projects to judges.
               The winner of the hackathon will also be announced on this
              day"
              />

              <MonthTime />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileTimeLine;

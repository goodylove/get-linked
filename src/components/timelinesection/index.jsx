import { SVG } from "../../constants/Icons";
import MobileTimeLine from "../MobileTimeline";
import LeftTimeLine, { MonthTime, Righttime } from "./leftTimeLine";

function TimeLine() {
  return (
    <>
      <div className="h-[1px] w-full  bg-line"></div>
      <section className="w-full flex justify-center items-center  my-10 ">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-col justify-center items-center">
            <div className="text-white text-center md:text-[14px] text-[13px]">
              <h3>Timeline</h3>
              <p>
                Here is the breakdown of the time we anticipate using for the
                upcoming event.
              </p>
            </div>
          </div>

          {window.innerWidth < 900 ? (
            <MobileTimeLine />
          ) : (
            <div className=" flex justify-center  gap-12 items-center mt-5">
              {/* left */}
              <div className="">
                <div className="mt-14">
                  <LeftTimeLine
                    title="Hackathon Announcement"
                    subtitle=" The getlinked tech hackathon 1.0 is formally announced 
              to the general public and teams begin to get ready to register"
                  />
                </div>
                <div className=" mt-20 text-end">
                  <MonthTime />
                </div>
                <div className="mt-24">
                  <LeftTimeLine
                    title="Teams Registration ends"
                    subtitle="Interested Participants are no longer Allowed to
             register"
                  />
                </div>
                <div className="  mt-24 text-end">
                  <MonthTime />
                </div>
                <div className="mt-20">
                  <LeftTimeLine
                    title="Getlinked Hackathon 1.0 Offically Begins"
                    subtitle="  Accepted teams can now proceed to build their
             ground breaking skill driven solutions"
                  />
                </div>
                <div className="text-end  mt-24">
                  <MonthTime />
                </div>
              </div>

              {/* middle */}
              <div className="flex flex-col gap-11 w-[50px] md:w-[60px]">
                <div className="flex flex-col justify-center items-center ">
                  <div className="h-[70px] w-[6px] bg-button-gradient"></div>
                  <img src={SVG.one} alt="" className="w-[50px]" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="h-[70px] w-[6px] bg-button-gradient"></div>
                  <img src={SVG.two} alt="two" className="w-[50px]" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="h-[70px] w-[6px] bg-button-gradient"></div>
                  <img src={SVG.three} alt="3" className="w-[50px]" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="h-[70px] w-[6px] bg-button-gradient"></div>
                  <img src={SVG.four} alt="four" className="w-[50px]" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="h-[70px] w-[6px] bg-button-gradient"></div>
                  <img src={SVG.five} alt="five" className="w-[50px]" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="h-[70px] w-[6px] bg-button-gradient"></div>
                  <img src={SVG.six} alt="six" className="w-[50px]" />
                </div>
              </div>

              {/* right */}

              <div className="mt-10">
                <div className="">
                  <MonthTime />
                </div>
                <div className=" mt-32">
                  <Righttime
                    title="Teams Registration begins"
                    subtitle=" Interested teams can now show their interest in the
              getlinked tech hackathon 1.0 2023 by proceeding to register"
                  />
                </div>
                <div className="mt-20">
                  <MonthTime />
                </div>
                <div className="mt-24">
                  <Righttime
                    title="Announcement of the accepted teams and ideas"
                    subtitle="All teams whom idea has been accepted into getlinked tech
              
              hackathon 1.0 2023 are formally announced"
                  />
                </div>
                <div className=" mt-20">
                  <MonthTime />
                </div>
                <div className="mt-20">
                  <Righttime
                    title="Demo Day"
                    subtitle="  Teams get the opportunity to pitch their projects to judges.
             The winner of the hackathon will also be announced on this
            day"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default TimeLine;

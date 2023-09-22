import { Colors } from "../../constants/Colors";
import { SVG } from "../../constants/Icons";
import Button from "../Button.jsx";
import { keyAttribute } from "./keyattributedata";
import { SectionFourWrapper } from "./sectionfourStyle";
function SectionFour() {
  return (
    <SectionFourWrapper>
      <div className="sec-four-left">
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            textAlign: "start",
            marginLeft: "5.5rem",
          }}
        >
          <img src={SVG.purpleStar} alt="" />
        </div>
        <img src={SVG.friends} alt="bulb" className="sec-img" />
        <div>
          <img src={SVG.graystar} alt="" className="middlestar" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "end",
            textAlign: "center",
          }}
        >
          <img src={SVG.star2} alt="" />
        </div>
      </div>

      <div className="sec-four-right">
        <div>
          <h2>Judging Criteria </h2>
          <h3>Key attributes</h3>
        </div>
        <div>
          {keyAttribute.map(({ title, value }) => {
            return (
              <p>
                <span style={{ color: `${Colors.pink}` }}>{title}</span>
                {value}
              </p>
            );
          })}
        </div>

        <p>
          <Button>Read More</Button>
        </p>
      </div>
    </SectionFourWrapper>
  );
}

export default SectionFour;

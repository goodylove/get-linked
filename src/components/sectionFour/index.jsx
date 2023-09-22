import { Colors } from "../../constants/Colors";
import { SVG } from "../../constants/Icons";
import Button from "../Button.jsx";
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
        <img src={SVG.friends} alt="bulb" width={450} />
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
          <p>
            <span style={{ color: `${Colors.pink}` }}>
              Innovation and Creativity:
            </span>
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </p>

          <p>
            <span style={{ color: `${Colors.pink}` }}> Functionality:</span>
            Assess how well the solution works. Does it perform its intended
            functions effectively and without major issues? Judges would
            consider the completeness and robustness of the solution.
          </p>

          <p>
            <span style={{ color: `${Colors.pink}` }}>
              Impact and Relevance:
            </span>
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </p>

          <p>
            <span style={{ color: `${Colors.pink}` }}>
              Technical Complexity:
            </span>
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </p>

          <p>
            <span style={{ color: `${Colors.pink}` }}>
              Adherence to Hackathon Rules:
            </span>
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.
          </p>
        </div>

        <p>
          <Button>Read More</Button>
        </p>
      </div>
    </SectionFourWrapper>
  );
}

export default SectionFour;

import { SectionThreeWrapper } from "./sectionthreeStyle";
import { SVG } from "./../../constants/Icons/index";
function SectionThree() {
  return (
    <SectionThreeWrapper>
      <div className="sec-three-left">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img src={SVG.graystar} alt="" />
        </div>
        <div>
          <h2>Rules and </h2>
          <h3> Guidelines</h3>
        </div>
        <p>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            textAlign: "end",
          }}
        >
          <img src={SVG.star2} alt="star" />
        </div>
      </div>
      <div>
        <img src={SVG.lady} alt="bulb" className="sec-img" />
      </div>
    </SectionThreeWrapper>
  );
}

export default SectionThree;

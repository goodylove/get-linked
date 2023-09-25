import { SVG } from "../../constants/Icons";
import Title from "./../Title/index";
import Licensepolicy from "./licensepolicy";

function PravicySection() {
  return (
    <section>
      <div>
        <Title title="Privacy Policy and " text="Terms" />
        <h3 style={{ color: "white", margin: "20px 0" }}>
          Last updated on September 12, 2023
        </h3>

        <p>
          Below are our privacy & policy, which outline a lot of goodies. it’s
          our aim to always take of our participant
        </p>
        <Licensepolicy />
      </div>
      <div>
        <img src={SVG.privac} alt="" />
      </div>
    </section>
  );
}

export default PravicySection;

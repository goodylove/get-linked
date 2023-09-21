import Button from "../../components/Button.jsx";
import NavBar from "../../components/NavBar";
import { Colors } from "../../constants/Colors/index.jsx";
import { SVG } from "../../constants/Icons";
import { HomeWrapper, SectionWrapper } from "./homeStyle";

function Home() {
  return (
    <HomeWrapper>
      <span className="gredient"></span>
      <NavBar />

      <div className="line"></div>

      <div className="hr-innovation">
        <h2>Igniting a Revolution in HR Innovation</h2>
        <img src={SVG.line} alt="line" width={150} />
        <img src={SVG.star2} alt="star" className="star" />
      </div>

      <section className="section-one">
        <div className="left-side">
          <div className="title">
            <img src={SVG.techbulb} alt="bulb" className="techbulb" />
            <h2>getlinked Tech</h2>
            <h2>
              Hackathons <span style={{ color: `${Colors.pink}` }}> 1.0</span>
              <img src={SVG.saveIcon} alt="save" className="saveIcon" />
              <img src={SVG.hackstar} alt="star" className="hackstar" />
            </h2>
          </div>

          <p className="left-side-p">
            Participate in getlinked tech Hackathon 2023 stand <br />a chance to
            win a Big prize
          </p>

          <Button>Register</Button>

          <div className="timer-wrapper">
            <div className="timer">
              <div>
                00<span>H</span>
              </div>
              <div>
                00<span>M</span>
              </div>
              <div>
                00<span>S</span>
              </div>
            </div>
          </div>
        </div>

        <div className="right-side">
          <img src={SVG.graystar} alt="star" className="star" />
          <img
            src="./heroImage .webp"
            alt=""
            width={500}
            color="gray"
            className="right-side-star"
          />
        </div>
      </section>
    </HomeWrapper>
  );
}

export default Home;

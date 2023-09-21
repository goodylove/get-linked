import Button from "../../components/Button.jsx";
import NavBar from "../../components/NavBar";
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
              Hackathon 1.0
              <img src={SVG.saveIcon} alt="save" />
              <img src={SVG.hackstar} alt="star" />
            </h2>
          </div>

          <p>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>

          <Button>Register</Button>

          <div className="timer">
            <span>00H</span>
            <span>00M</span>
            <span>00S</span>
          </div>
        </div>

        <div className="right-side">
          <img src={SVG.moon} alt="heromoon" />
          <img src={SVG.manimg} alt="heroman" />
        </div>
      </section>
    </HomeWrapper>
  );
}

export default Home;

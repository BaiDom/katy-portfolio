import "../Css/Intro.css";
import Radio1 from "../Assets/BBC_Radio_1_2021.png";
import Capital from "../Assets/capital.svg";
import Kiss from "../Assets/Kiss.svg";
import George from "../Assets/George-FM.png";

const Intro = () => {
  return (
    <section className="intro-section" id="katy-intro">
      <div className="page-container">
        <div className="overlay">
          <div className="intro-cont">
            <div className="hero-cont">
              <div className="katy-title">Katy Alex</div>
              <div className="katy-products">
                DJ | Producer | Writer | Singer | Model
              </div>
              <div className="katy-bio-sub">
                {/* <span style={{ color: "#c8102e" }}> */}
                Proud Scouser and Devoted Liverpool Fan #AllezAllezAllez
                {/* </span>{" "} */}
                <a href="#contact ">
                  <div className="cta cta-intro ">Make An Enquiry</div>
                </a>
              </div>
            </div>
            {/* <a href="#contact ">
              <div className="cta cta-intro ">Make An Enquiry</div>
            </a> */}
            <div className="katy-bio">
              <div className="intro-releases">
                Latest releases include collaborations with Roger Sanchez, Sammy
                Virji, and Laidback Luke. Working with labels such as Toolroom,
                D4D4nce, and Mixmash.
              </div>
              <br></br>

              <div className="intro-support">
                Supported by: <br></br>
                <div className="radio-support">
                  <img src={Radio1} alt="radio 1 logo"></img>
                  <img src={Capital} alt="capital radio logo"></img>
                  <img src={Kiss} alt="kiss fm logo"></img>
                  <img src={George} id="george" alt="george fm logo"></img>
                </div>
                and more...
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

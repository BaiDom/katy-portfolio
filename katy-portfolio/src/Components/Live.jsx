import "../Css/Live.css";
import { InstagramEmbed } from "react-social-media-embed";
import Cream from "../Assets/creamfields.png";
import Boss from "../Assets/boss-night.jpeg";
import OnRun from "../Assets/on-running-logo-vector.svg";
import Mambo from "../Assets/mambo.jpeg";

const Live = () => {
  return (
    <section className="live-section" id="live-work">
      <div className="page-container">
        <div className="live-cont">
          <div className="live-overlay">
            <h1 className="live-title">Live</h1>
            {/* <div className="live-click-below">Click Below</div> */}

            <div className="live-list">
              <a href="https://www.on-running.com/en-gb/" target="_blank">
                {" "}
                <img
                  // className="on-badge"
                  src={OnRun}
                  alt="on running logo"
                ></img>
              </a>
              <a href="https://bossnight.co.uk" target="_blank">
                <img src={Boss} alt="boss night logo"></img>
              </a>
              <a href="https://creamfields.com" target="_blank">
                <img src={Cream} alt="creamfields logo"></img>
              </a>

              <a href="https://www.cafemamboibiza.com" target="_blank">
                {" "}
                <img
                  // className="on-badge"
                  src={Mambo}
                  alt="cafe mambo ibiza logo"
                ></img>
              </a>
              <a>
                {" "}
                <img
                  src={
                    "https://redrunactivewear.com/cdn/shop/files/Red_Run_Logo_CMYK-03_280x@2x.png?v=1613777303"
                  }
                  alt="ren run logo"
                ></img>
              </a>
            </div>
            <div className="live-link-cont">
              <div className="live-links">
                <div
                  className="live-post"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <InstagramEmbed
                    url="https://www.instagram.com/p/Cyv-af1MdSX/"
                    width={328}
                  />
                </div>{" "}
                <div
                  className="live-post"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <InstagramEmbed
                    url="https://www.instagram.com/p/Cwf0oWFs6gg/?img_index=1"
                    width={328}
                  />
                </div>{" "}
                <div
                  className="live-post"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <InstagramEmbed
                    url="https://www.instagram.com/p/Cv72d9tsqiL/?img_index=1"
                    width={328}
                  />
                </div>
                <div
                  className="live-post"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <InstagramEmbed
                    url="https://www.instagram.com/p/CwNxlTUsrKI/?img_index=1"
                    width={328}
                  />
                </div>
                <div
                  className="live-post"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <InstagramEmbed
                    url="https://www.instagram.com/p/CsT62Bgs8yw/?img_index=2"
                    width={328}
                  />
                </div>
                <div
                  className="live-post"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <InstagramEmbed
                    url="https://www.instagram.com/p/CsO1BwSgPAo/"
                    width={328}
                  />
                </div>
                <div
                  className="live-post"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <InstagramEmbed
                    url="https://www.instagram.com/p/CsEgMWDs_M5/?img_index=2"
                    width={328}
                  />
                </div>
                <div
                  className="live-post"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <InstagramEmbed
                    url="https://www.instagram.com/p/CodBZA5slvG/?img_index=2"
                    width={328}
                  />
                </div>
                <div
                  className="live-post"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <InstagramEmbed
                    url="https://www.instagram.com/p/Cly7NIeM9kg/?img_index=1"
                    width={328}
                  />
                </div>
              </div>
            </div>
            {/* <a href="#contact">
              <div className="cta">Live Enquiries</div>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Live;

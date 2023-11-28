import "../Css/Live.css";
import { InstagramEmbed } from "react-social-media-embed";

const Live = () => {
  return (
    <section className="live-section">
      <div className="page-container">
        <div className="live-cont">
          <h1 className="live-title">Live</h1>
          <div className="live-click-below">Click Below</div>
          <div className="live-link-cont">
            <div className="overlay">
              <div className="live-links">
                <div
                  className="live1"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <InstagramEmbed
                    url="https://www.instagram.com/p/Cyv-af1MdSX/"
                    width={328}
                  />
                </div>
                <div
                  className="live2"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <InstagramEmbed
                    url="https://www.instagram.com/p/Cwf0oWFs6gg/?img_index=1"
                    width={328}
                  />
                </div>
                <div
                  className="live3"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <InstagramEmbed
                    url="https://www.instagram.com/p/Cv72d9tsqiL/?img_index=1"
                    width={328}
                  />
                </div>
              </div>

              <div className="helen-email">Helen@ITB.CO.UK</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Live;

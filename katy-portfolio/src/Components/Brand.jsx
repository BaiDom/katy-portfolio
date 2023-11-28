import "../Css/Brand.css";
import { InstagramEmbed } from "react-social-media-embed";

const Brand = () => {
  return (
    <section className="brand-section">
      <div className="page-container">
        <div className="brand-cont">
          <h1 className="brand-title">Brand Work</h1>
          <div className="click-below">Click Below</div>
          <div className="brand-link-cont">
            <div className="overlay">
              <div className="brand-links">
                <div
                  className="inst1"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <InstagramEmbed
                    url="https://www.instagram.com/p/CzCCFO6MsiT/"
                    width={328}
                  />
                </div>
                <div
                  className="inst2"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <InstagramEmbed
                    url="https://www.instagram.com/p/CyoXaKLtFdy/"
                    width={328}
                  />
                </div>
                <div
                  className="inst3"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <InstagramEmbed
                    url="https://www.instagram.com/p/CvsSaBEM9fb/?img_index=1"
                    width={328}
                  />
                </div>
                <div
                  className="inst4"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <InstagramEmbed
                    url="https://www.instagram.com/p/CvVA6XoM0By/?img_index=1"
                    width={328}
                  />
                </div>
                <div
                  className="inst5"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <InstagramEmbed
                    url="https://www.instagram.com/p/CsT62Bgs8yw/?img_index=1"
                    width={328}
                  />
                </div>
                <div
                  className="inst6"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <InstagramEmbed
                    url="https://www.instagram.com/p/CxbAbhSsSli/"
                    width={328}
                  />
                </div>
                <div
                  className="inst7"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <InstagramEmbed
                    url="https://www.instagram.com/p/Cw25oZ5MTag/?img_index=1"
                    width={328}
                  />
                </div>
                <div
                  className="inst8"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <InstagramEmbed
                    url="https://www.instagram.com/p/Cyv-af1MdSX/"
                    width={328}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
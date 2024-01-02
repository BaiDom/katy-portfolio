import "../Css/Contact.css";
import Live from "../Assets/Katy-live-min.svg";
import Brand from "../Assets/Katy-brand-min.svg";
import X from "../Assets/x-logo.png";
import Instagram from "../Assets/Instagram_icon.png";
import Linked from "../Assets/LinkedIn.png";
import Spotify from "../Assets/Spotify-logo.svg";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="page-container">
        <div className="contact-flex">
          {/* <div className="socials-cont">
            <div className="socials-title">Socials</div>
            <div className="social-links">
              <a
                href="https://www.instagram.com/katyalexmusic/?img_index=1"
                target="_blank"
              >
                <img src={Instagram} alt="Instagram logo"></img>
              </a>
              <a href="https://twitter.com/KatyAlexMusic" target="_blank">
                <img src={X} alt="X logo"></img>
              </a>
              <a
                href="https://www.linkedin.com/in/katy-alex-9b618b148/?originalSubdomain=uk"
                target="_blank"
              >
                <img src={Linked} alt="LinkedIn logo"></img>
              </a>
              <a
                href="https://open.spotify.com/artist/63wpGjuYtKMliedy9FjHMB"
                target="_blank"
              >
                <img src={Spotify} alt="Spotify logo"></img>
              </a>
            </div>
          </div> */}
          <div className="contact-top">
            <div className="left-half">
              <div className="contact-title">Get In Touch</div>

              <div className="enquiry-text">
                If you'd like to enquire about Katy being part of your project,
                click one of the links below!
              </div>
              <div className="email-cont">
                <div className="sam-email" id="email">
                  <div className="sam">Sam</div>
                  {/* For Brand Work enquiries
                  contact: <br></br>sam@sm-mgmt.uk */}
                </div>
                <div className="helen-email" id="email">
                  <div className="helen">Helen</div>
                  {/* For Live Show enquiries
                  contact:<br></br> helen@itb.co.uk */}
                </div>
              </div>
            </div>
            <div className="right-half">
              <img
                src={Brand}
                id="contact-img"
                loading="lazy"
                alt="katy brand work pic"
              ></img>
            </div>
          </div>

          {/* <div className="contact-bottom">
            <div className="left-half">
              {" "}
              <img
                src={Live}
                id="contact-img"
                loading="lazy"
                alt="katy live work pic"
              ></img>
            </div>
            <div className="right-half"></div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;

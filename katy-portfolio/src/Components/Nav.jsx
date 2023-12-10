// import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../Css/Nav.css";
import X from "../Assets/x-logo.png";
import Instagram from "../Assets/Instagram_icon.png";
import Linked from "../Assets/LinkedIn.png";
import Spotify from "../Assets/Spotify-logo.svg";

const Nav = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const menuClick = (e) => {
    setMenuToggle((current) => !current);
  };

  return (
    <div className="page-container">
      <nav className="Nav">
        <div className="full-nav">
          <div className="nav-left">
            <ul className="nav-left-ul">
              <li id="katy-nav">
                <a href={"#katy-intro"} style={{ textDecoration: "none" }}>
                  <span>Katy Alex</span>
                </a>
              </li>
              <li className="nav-li">
                <a href={"#brand-work"} style={{ textDecoration: "none" }}>
                  Brand Work
                </a>
              </li>
              <li className="nav-li">
                <a href={"#live-work"} style={{ textDecoration: "none" }}>
                  Live Work
                </a>
              </li>
              <li className="nav-li">
                <a href={"#contact"} style={{ textDecoration: "none" }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-right">
            <ul className="nav-right-ul">
              <li>
                <a
                  href="https://www.instagram.com/katyalexmusic/?img_index=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Instagram} alt="Instagram logo"></img>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/KatyAlexMusic"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={X} alt="X logo"></img>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/katy-alex-9b618b148/?originalSubdomain=uk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Linked} alt="LinkedIn logo"></img>
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/artist/63wpGjuYtKMliedy9FjHMB"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Spotify} alt="Spotify logo"></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mob-nav">
          <ul className="mob-nav-ul">
            <li id="katy-nav">
              <div
                className={
                  menuToggle ? "menu-toggle close" : "menu-toggle open"
                }
                onClick={menuClick}
              >
                {/* <img src={Plus}></img> */}➕
              </div>
              <a href={"#katy-intro"} style={{ textDecoration: "none" }}>
                Katy Alex
              </a>
            </li>
            <div
              className={
                menuToggle
                  ? "mob-nav-content-visible"
                  : "mob-nav-content-hidden"
              }
            >
              <li className="nav-li">
                <a href={"#brand-work"} style={{ textDecoration: "none" }}>
                  Brand Work
                </a>
              </li>
              <li className="nav-li">
                <a href={"#live-work"} style={{ textDecoration: "none" }}>
                  Live Work
                </a>
              </li>
              <li className="nav-li">
                <a href={"#contact"} style={{ textDecoration: "none" }}>
                  Contact
                </a>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

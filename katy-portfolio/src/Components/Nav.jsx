import { NavLink } from "react-router-dom";
import "../Css/Nav.css";

const Nav = () => {
  return (
    <div className="page-container">
      <nav className="Nav">
        <ul>
          <li className="nav-li">
            <a href={"#katy-intro"} style={{ textDecoration: "none" }}>
              <span>Katy Alex</span>
            </a>
          </li>
          <li className="nav-li">
            <a href={"#brand-work"} style={{ textDecoration: "none" }}>
              <span>Brand Work</span>
            </a>
          </li>
          <li className="nav-li">
            <a href={"#live-work"} style={{ textDecoration: "none" }}>
              <span>Live Work</span>
            </a>
          </li>
          <li className="nav-li">
            <a href={"#contact"} style={{ textDecoration: "none" }}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;

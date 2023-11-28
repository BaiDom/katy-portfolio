import { NavLink } from "react-router-dom";
import "../Css/Nav.css";

const Nav = () => {
  return (
    <div className="page-container">
      <nav className="Nav">
        <ul>
          <li className="nav-li">
            <NavLink style={{ textDecoration: "none" }}>
              <span>Katy Alex</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;

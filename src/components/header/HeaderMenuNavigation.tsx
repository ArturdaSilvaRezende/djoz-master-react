import { NavLink } from "react-router-dom";
import "./animation.css";

const HeaderMenuNavigation = () => {
  return (
    <nav className="menu__navigation fadeIn">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/discography"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Discography
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tours"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Tours
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderMenuNavigation;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" id="navbar-logo">
          <img
            className="navbar-logo-img"
            src="logo-transparent-beige4.png"
            alt="Ukulele Repo Logo"
            height="80px"
          />
        </NavLink>
        <div
          className={`navbar-toggle ${isActive ? "is-active" : ""}`}
          id="mobile-menu"
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`navbar-menu ${isActive ? "active" : ""}`}>
          <li className="navbar-item">
            <NavLink to="/" className="navbar-links">
              Home
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/songs" className="navbar-links">
              Songs
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/faq" className="navbar-links">
              FAQ
            </NavLink>
          </li>
          <li className="navbar-btn">
            <NavLink className="signup-btn" to="/signup">
              Sign Up
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

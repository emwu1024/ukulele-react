import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      {/*  Navbar  */}
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" id="navbar-logo">
            <img src="logo-transparent-beige4.png" alt="Ukulele Repo Logo" />
            {/* <i className="fa-solid fa-guitar"></i>Ukulele */}
          </a>
          <div className="navbar-toggle" id="mobile-menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className="navbar-menu">
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
    </>
  );
};

export default Navbar;

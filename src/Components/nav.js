import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { About } from "./About";
import Home from "./Home";

function Nav() {
  const navItemStyle = {
    color: "white",
  };

  return (
    <nav className="Nav">
      <ul className="nav-links">
        <Link to="/loan" style={navItemStyle}>
          <li>LoanCalculator</li>
        </Link>
        <Link to="/tax" style={navItemStyle}>
          <li>TaxCalculator</li>
        </Link>
        <Link to="/bugtracker" style={navItemStyle}>
          <li>BugTracker</li>
        </Link>
        <Link to="/home" style={navItemStyle}>
          <li>Home</li>
        </Link>
        <Link to="/about" style={navItemStyle}>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;

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

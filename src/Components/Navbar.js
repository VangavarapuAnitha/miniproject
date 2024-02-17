import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <img className="navbar-logo-container" src="mca-logo.jpg" alt="" />

      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/View">View</Link>
        </li>

        <li>
          <Link to="/AdminLoginPage"> Admin</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

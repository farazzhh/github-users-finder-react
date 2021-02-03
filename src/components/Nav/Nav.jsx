import React from "react";
import { Link } from "react-router-dom";  

const Nav = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark py-3">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand">GitHub User Finder</span>
        </Link>

        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link text-light" to="/about">
              about
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/Contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

import React from "react";
import "./Heading.css";
import logo from "./media/logo.png";
import { Link } from "react-scroll";

const Heading = () => {
  return (
    <div className="App-header">
      <nav className="navbar navbar-expand-md navbar-light bg-transparent">
        <a className="navbar-brand" href="#">
          CheckInn
          <img className="logo" src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Link
              to="main-home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="nav-item nav-link"
            >
              Home
            </Link>
            <Link
              to="attractions"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              className="nav-item nav-link"
            >
              Attractions
            </Link>
            <Link
              to="food"
              spy={true}
              smooth={true}
              offset={0}
              duration={1500}
              className="nav-item nav-link"
            >
              Food
            </Link>
            <Link
              to="guest-list"
              spy={true}
              smooth={true}
              offset={0}
              duration={2000}
              className="nav-item nav-link"
            >
              Guest list
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Heading;

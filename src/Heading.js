import React from "react";
import "./Heading.css";
import logo from "./media/logo.png";

const Heading = () => {
  return (
    <div className="App-header-image">
      <nav className="navbar navbar-expand-sm navbar-light bg-transparent">
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
            <a className="nav-item nav-link active" href="#">
              Home
            </a>

            <a className="nav-item nav-link" href="#">
              Attractions
            </a>
            <a className="nav-item nav-link active" href="#">
              Food
            </a>
            <a className="nav-item nav-link active" href="#">
              Guest list
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Heading;

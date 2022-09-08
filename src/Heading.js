import React from "react";
import "./Heading.css";
import logo from "./Images/logo.png";

// Renders page heading, called by `App.js`.
const Heading = () => {
  return (
    <header className="Heading-header Heading-title d-flex shadow">
      <img className="Heading-logo" src={logo} alt="CYF Hotel Logo" />
      <h1>CYF Hotel</h1>
    </header>
  );
};

export default Heading;

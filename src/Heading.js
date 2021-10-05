import React from "react";
import "./Heading.css";

// Renders page heading, called by `App.js`.
const Heading = () => {
  return (
    <header className="Heading-header Heading-title d-flex shadow">
      <img
        className="Heading-logo"
        src="https://image.flaticon.com/icons/svg/139/139899.svg"
        alt="CYF Hotel Logo"
      />
      <h1>CYF Hotel</h1>
    </header>
  );
};

export default Heading;

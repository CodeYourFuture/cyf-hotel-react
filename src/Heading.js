import React from "react";
import "./Heading.css";

const Heading = () => {
  return (
    <header bg="dark" variant="dark">
      <a href="#home">
        <img
          alt="Logo"
          src="https://image.flaticon.com/icons/svg/139/139899.svg"
          className="d-inline-block align-top App-logo"
        />
      </a>
      CYF Hotel
    </header>
  );
};

export default Heading;

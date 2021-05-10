import React from "react";
import "./Heading.css";

const Heading = () => {
  return (
    <header bg="dark" variant="dark">
      <a href="#home">
        <img
          alt="Logo"
          src="/images/hotel-logo.png"
          className="d-inline-block align-top app-logo"
        />
      </a>
      CYF Hotel
    </header>
  );
};

export default Heading;

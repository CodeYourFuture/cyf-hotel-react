import React from "react";
import "./css/Heading.css";
import logofile from "./images/hotel-building.svg";

const Heading = () => {
  return (
    <header className="App-header">
      {/* <img src={logofile} className="Heading-logo" alt="hotel cyf" /> */}
      <object
        type="image/svg+xml"
        data={logofile}
        className="Heading-logo"
        alt="hotel cyf"
      />{" "}
      CYF Hotel
    </header>
  );
};

export default Heading;

import React from "react";
import hotelLogo from "./images/logo.png";
import "./index.css";

const Heading = () => {
  return (
    <header className="App-header">
      <img src={hotelLogo} alt="Logo CYF" />
      Claridge's Hotel
    </header>
  );
};

export default Heading;

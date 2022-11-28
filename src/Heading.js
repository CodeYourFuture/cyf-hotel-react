import React from "react";
import hotelLogo from "./images/logo.jpg";
import "./App.css";

const Heading = () => {
  return (
    <header className="App-header text-warning">
      <img className="hotelLogo" src={hotelLogo} alt="Logo CYF" />
      Claridge's Hotel
    </header>
  );
};

export default Heading;

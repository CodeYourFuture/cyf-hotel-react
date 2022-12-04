import React from "react";
import "./App.css";
import HotelLogo from "./HotelLogo.png";

const Heading = () => {
  return (
    <header className="App-header">
      <img className="App-logo" src={HotelLogo} alt="Logo" />
      CYF Hotel
    </header>
  );
};

export default Heading;

// import { ReactComponent as MySVG } from "./hotel-svgrepo-com.svg";
import React from "react";
import logo from "./hotel-svgrepo-com.svg";

const Heading = () => {
  return (
    <header className="App-header">
      <p className="logo-title">CYF Hotel</p>
      <img className="logo-hotel" src={logo} alt="Hotel Logo" />
    </header>
  );
};

export default Heading;

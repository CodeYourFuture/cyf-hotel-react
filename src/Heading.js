import React from "react";
import logo from "./logo.png";

const Heading = () => {
  return (
    <header className="App-header">
      <h1 className="logo-title">CYF Hotel</h1>
      <img className="logo-hotel" src={logo} alt="Hotel Logo" />
    </header>
  );
};

export default Heading;

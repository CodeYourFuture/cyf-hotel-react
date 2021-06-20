import React from "react";
import logo from "./logo.PNG";

const Heading = () => {
  return (
    <header className="App-header">
      <img id="logo" src={logo} alt="logo" />
      <h1> Welcome to CYF Hotel</h1>
    </header>
  );
};

export default Heading;

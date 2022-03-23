import React from "react";
import logo from "./images/logo.png";

function Heading() {
  return (
    <header className="App-header">
      <img src={logo} alt="logo" style={{ width: "80px" }} />
      <p>CYF Hotel</p>
    </header>
  );
}

export default Heading;

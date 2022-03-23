import React from "react";
import logo from "./hotel.jpg";

function Heading() {
  return (
    <div>
      <div className="header-wrapper">
        <img className="header-logo" alt="Hotel-logo " src={logo} />
        <header className="App-header">CYF Hotel</header>
      </div>
    </div>
  );
}

export default Heading;

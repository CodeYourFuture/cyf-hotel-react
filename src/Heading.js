import React from "react";
import logo from "./hotel.svg";

function Heading() {
  return (
    <div>
      <div className="header-wrapper">
        <header className="App-header">CYF Hotel</header>
        <img className="header-logo" alt="Hotel-logo " src={logo} />
      </div>
    </div>
  );
}
export default Heading;

import React from "react";
import logo from "./images/hotel-svgrepo-com.svg";
const Heading = () => {
  return (
    <header className="App-header">
      <div className="App-logo">
        <img src={logo} alt="hotel icon" />
      </div>
      <span className="App-logo-text">CYF Hotel</span>
    </header>
  );
};

export default Heading;

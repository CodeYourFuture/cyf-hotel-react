import React from "react";
import Clock from "./Clock.js";

const Heading = () => {
  return (
    <div className="header">
      <img
        className="App-logo"
        src="https://image.flaticon.com/icons/svg/139/139899.svg"
        alt="Logo"
      />
      <Clock />
      <header className="App-header">CYF Hotel</header>
    </div>
  );
};

export default Heading;

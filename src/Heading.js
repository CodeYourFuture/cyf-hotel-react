import React from "react";
import Clock from "./Clock.js";

const Heading = () => {
  return (
    <header className="App-header row">
      <img
        class="App-logo"
        src="https://image.freepik.com/free-vector/pin-map-hotel-logo_1043-112.jpg"
        height="80px"
        alt="logo"
      />
      <Clock />
      <p class="App-title">CYF Hotel</p>
    </header>
  );
};

export default Heading;

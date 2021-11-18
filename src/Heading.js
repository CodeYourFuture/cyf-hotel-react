import React from "react";
import hotelLogo from "./hotelLogo.png";
const Heading = () => {
  return (
    <div>
      <header className="App-header">
        <img className="App-header App-logo" src={hotelLogo} alt="Hotel" />
        CYF Hotel
      </header>
    </div>
  );
};

export default Heading;

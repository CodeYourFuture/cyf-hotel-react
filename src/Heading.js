import React from "react";
import logoHotel from "./images/495.jpg";

const Heading = () => {
  const name = "Beko CYF Luxury Hotel";
  return (
    <div>
      <header className="App-header">
        <h5>{name}</h5>
        <img src={logoHotel} className="App-logo" />
      </header>
    </div>
  );
};

export default Heading;

import React from "react";
import HotelCyf from "../src/images/HotelCyf.jpg";

const Heading = () => {
  return (
    <header className="App-header">
      <img src={HotelCyf} alt="logo" className="hotel-logo" />
      <h1> CYF Hotel</h1>
    </header>
  );
};
export default Heading;

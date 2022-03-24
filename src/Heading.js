import React from "react";
import HotelCyf from "../src/images/HotelCyf.png";

const Heading = () => {
  return (
    <header className="App-header">
      CYF Hotel
      <img src={HotelCyf} alt="logo" className="hotel-logo" />
    </header>
  );
};
export default Heading;

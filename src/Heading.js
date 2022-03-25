import React from "react";
import Logo from "./HotelImage.jpeg";

const Heading = () => {
  return (
    <header className="App-header">
      <img className="image-header" src={Logo} alt="CYF Hotel" />
      <span>CYF Hotel</span>
    </header>
  );
};

export default Heading;

import React from "react";
import Logo from "../assets/images/hotel.png";

const heading = () => {
  return (
    <div>
      <header className="header">
        <img className="hotel-logo" src={Logo} alt="logo" />
        <span>CYF HOTEL</span>
      </header>
    </div>
  );
};

export default heading;

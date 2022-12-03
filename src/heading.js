import React from "react";
import Logo from "./images/hotel.png";

const heading = () => {
  return (
    <div>
      <header className="header">
        <img src={Logo} alt="logo" />
        <span>CYF HOTEL</span>
      </header>
    </div>
  );
};

export default heading;

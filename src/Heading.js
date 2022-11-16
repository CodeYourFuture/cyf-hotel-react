import React from "react";
import "./Heading.css";

const Heading = () => {
  return (
    <header className="heading">
      <div className="heading-logo">
        <img
          src={require("./image/christmas_2012_new_6458.jpg")}
          alt="logo"
          width="70px"
          height="70px"
        />
        <div className="navbar__title navbar__item">CYF Hotel</div>
        <div className="navbar">
          <div className="navbar__item">About Us</div>
          <div className="navbar__item">Contact</div>
          <div className="navbar__item">Help</div>
        </div>
      </div>
    </header>
  );
};

export default Heading;

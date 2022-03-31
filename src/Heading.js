import React from "react";
import "./Heading.css";

const Heading = () => {
  return (
    <div>
      <header className="App-header">
        <img
          src="img/hotellogo.jpg "
          alt=""
          className="hotel-image img-thumbnail"
        />
        <p className="heading-text">CYF Hotel Royal</p>
      </header>
    </div>
  );
};

export default Heading;

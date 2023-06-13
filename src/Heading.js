import React from "react";
import hotelImg from "./images/hotel.png";

const Heading = (props) => {
  return (
    <React.Fragment>
      <header className="App-header d-flex justify-content-between align-items-center">
        <span>CYF Hotel</span>
        <img src={hotelImg} className="App-logo ms-auto" />
      </header>
    </React.Fragment>
  );
};

export default Heading;

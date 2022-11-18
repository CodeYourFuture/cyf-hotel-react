import React from "react";
//import HotelCyf from "../src/images/HotelCyf.jpg";
import "./App.css";
const Heading = () => {
  return (
    <div className="header">
      <img
        className="hotel-logo"
        src={
          "https://i.pinimg.com/originals/da/b9/13/dab913ab4fec9a9cb5b38b6ce8c00902.png"
        }
        alt="heading"
      />
      {/* <img className="hotel-logo-items width: 100px height:40px "/>  */}

      <header className="App-header">CYF Hotel</header>
    </div>
  );
};

export default Heading;

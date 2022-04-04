import React from "react";
// import logo from "./img/Background-1";

const Heading = () => {
  return (
    <div>
      <header className="App-header">
        <i className="fa fa-h-square" aria-hidden="true" alt="Hotel Logo"></i>
        <h1> CYF Hotel</h1>

        <img
          className="Header-background-image"
          src="https://i.pinimg.com/originals/c8/fa/45/c8fa45c7cf32e04c991b390908efcb2e.jpg"
          // src="http://yarori.sideka.id/wp-content/uploads/sites/6234/2019/03/header-image-1-2.png"
          width="100%"
          alt="City scene"
        />
      </header>
    </div>
  );
};

export default Heading;

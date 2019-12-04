import React from "react";
import Clock from "./Clock";

const Heading = () => {
  return (
    <header className="App-header d-flex justify-content-around align-items-center">
      <img
        className="App-logo"
        src="https://image.flaticon.com/icons/svg/139/139899.svg"
        alt=""
      />
      <Clock />
      <h1 className="App-title">CYF Hotel</h1>
    </header>
  );
};

export default Heading;

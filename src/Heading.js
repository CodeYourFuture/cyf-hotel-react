import React from "react";
import "./App.css";

const Logo = () => {
  return (
    <img src="https://image.flaticon.com/icons/svg/139/139899.svg" alt="Logo" />
  );
};

const Heading = () => {
  return (
    <div className="Heading">
      <Logo />
      <header className="App-header">CYF Hotel</header>
    </div>
  );
};

export default Heading;

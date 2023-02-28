import React from "react";
import Logo from "./Logo.jpg";

const Heading = () => {
  return (
    <header className="App-header">
      <img className="App-logo" src={Logo} alt="Hotel Logo" />
      <span>CYF Hotel</span>
    </header>
  );
};
export default Heading;

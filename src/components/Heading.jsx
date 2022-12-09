import React from "react";
import Logo from "./Logo.png";

const Heading = () => {
  return (
    <div>
      <header className="App-header">
        <img className="theLogo" src={Logo} alt="Logo" />
        CYF Hotel
      </header>
    </div>
  );
};

export default Heading;

import React from "react";
import CYFimage from "./Image/CYF.png";
const Heading = () => {
  return (
    <div>
      <header className="App-header">
        <img className="CYFLogo" src={CYFimage} />
        <div>CYF Hotel</div>
      </header>
    </div>
  );
};

export default Heading;

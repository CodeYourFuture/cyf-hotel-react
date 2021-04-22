/* eslint-disable indent*/

import React from "react";
import logo from "./logo-image.png";
// "https://image.flaticon.com/icons/svg/139/139899.svg"
function Heading() {
  return (
    <div>
      <header className="App-header">CYF Hotel</header>
      <img src={logo} alt="logo image" />
    </div>
  );
}

export default Heading;

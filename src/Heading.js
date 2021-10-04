import React from "react";

// Renders page heading, called by `App.js`.
const Heading = () => {
  return (
    <header className="App-header App-title d-flex shadow">
      <img
        className="App-logo"
        src="https://image.flaticon.com/icons/svg/139/139899.svg"
        alt="CYF Hotel Logo"
      />
      <h1>CYF Hotel</h1>
    </header>
  );
};

export default Heading;

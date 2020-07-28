import React from "react";

import Bookings from "./Bookings";
import "./App.css";

const Heading = () => {
  return (
    <header className="App-header">
      CYF Hotel
      <img
        src="https://image.flaticon.com/icons/svg/139/139899.svg"
        alt="logo image"
      />
    </header>
  );
};

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
    </div>
  );
};

export default App;

import React from "react";

import Bookings from "./Bookings";
import "./App.css";

const Heading = () => (
  <div className="App-header">
    <img src="./5-stars.png" className="Logo-header" />
    <header>CYF Hotel</header>
  </div>
);

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
    </div>
  );
};

export default App;

import React from "react";

import Bookings from "./Bookings";
import "./App.css";

const Heading = () => {
  return (
    <div>
      <img src="https://image.flaticon.com/icons/svg/139/139899.svg" alt="" />
      <header className="App-header">CYF Hotel</header>
    </div>
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

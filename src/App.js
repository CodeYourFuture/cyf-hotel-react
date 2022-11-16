import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
    </div>
  );
};

export default App;

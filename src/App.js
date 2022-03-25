import React from "react";

import TouristInfoCards from "./TouristInfoCards";
import Heading from "./Heading";
import Bookings from "./Bookings";
import "./App.css";

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

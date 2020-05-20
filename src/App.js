import React from "react";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards.js";
import Bookings from "./Bookings";

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

import React from "react";
import Heading from "./Heading.js";
import Bookings from "./Bookings";
import "./App.css";
import TouristInfoCards from "./TouristInfoCards.js";
const App = props => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <TouristInfoCards />
      <TouristInfoCards />
    </div>
  );
};

export default App;

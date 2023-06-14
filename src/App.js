import React from "react";
import Heading from "./Heading.js";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards.js";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
    </div>
  );
};
export default App;

import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <TouristInfoCards />
      <Bookings />
      <Heading />
    </div>
  );
};

export default App;

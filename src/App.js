import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import "./App.css";
import TouristInfoCards from "./TouristInfoCards";

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

import React from "react";
import Heading from "./Heading";
import TouristInfoCard from "./TouristInfoCards";
import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCard />
      <Bookings />
    </div>
  );
};

export default App;

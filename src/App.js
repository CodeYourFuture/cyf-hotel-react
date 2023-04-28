import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import TouristInfoCard from "./TouristInfoCard";
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

import React from "react";
import TouristInfoCards from "./components/TouristInfoCards";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./components/Heading";

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

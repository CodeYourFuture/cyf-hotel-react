import React from "react";
import Heading from "./components/heading";
import Bookings from "./components/Bookings";
import TouristInfoCards from "./components/TouristInfoCards";
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

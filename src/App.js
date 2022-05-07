import React from "react";
import Bookings from "./Bookings";
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";
import cities from "./cities.json";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards cities={cities} />
      <Bookings />
    </div>
  );
};

export default App;

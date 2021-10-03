import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <div className="cardContainer">
        <TouristInfoCards city="Glasgow" />
        <TouristInfoCards city="Manchester" />
        <TouristInfoCards city="London" />
      </div>
      <Bookings />
    </div>
  );
};

export default App;

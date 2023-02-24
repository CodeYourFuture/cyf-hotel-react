import React from "react";

import Bookings from "./Bookings";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <div className="info-cards">
        <TouristInfoCards city="Glasgow" />
        <TouristInfoCards city="Manchester" />
        <TouristInfoCards city="London" />
      </div>
    </div>
  );
};

export default App;

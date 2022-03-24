import React from "react";

import Header from "./Header";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />

      <Bookings />
      <TouristInfoCards />
    </div>
  );
};

export default App;

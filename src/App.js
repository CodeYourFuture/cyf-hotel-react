import React from "react";

import Bookings from "./Bookings";
import "./App.css";

// My import
import Header from "./Header";
import TouristInfoCards from "./TouristInfoCards";

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

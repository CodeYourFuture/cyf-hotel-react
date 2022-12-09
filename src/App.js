import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import InfoCards from "./TouristInfoCards";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <InfoCards />
      <Bookings />
    </div>
  );
};

export default App;

import React from "react";

import Bookings from "./Bookings";
import Heading from "./Heading";
import TouristInfoCards from "./TouristCards";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      {/* <header className="App-header">CYF Hotel</header> */}
      <TouristInfoCards />
      <Bookings />
    </div>
  );
};

export default App;

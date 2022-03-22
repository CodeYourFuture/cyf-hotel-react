import React from "react";

import Bookings from "./Bookings";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading text={"CYF Hotel - Marina"} />
      <TouristInfoCards />
      <Bookings />
    </div>
  );
};

export default App;

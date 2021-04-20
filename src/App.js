import React from "react";

import Bookings from "./Bookings";
import Heading from "../src/Heading.js";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
    </div>
  );
};

export default App;

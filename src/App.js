import React from "react";
import Heading from "./Heading.js";
import Bookings from "./Bookings";
import "./App.css";

const App = props => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
    </div>
  );
};

export default App;

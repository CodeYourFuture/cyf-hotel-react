import React from "react";
import Bookings from "./Components/Bookings";
import Heading from "./Components/Heading";
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

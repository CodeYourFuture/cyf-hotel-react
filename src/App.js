import React from "react";
import Bookings from "./components/Bookings";
import Heading from "./components/Heading";
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

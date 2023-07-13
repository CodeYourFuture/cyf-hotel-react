import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./components/Heading";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
    </div>
  );
};

export default App;

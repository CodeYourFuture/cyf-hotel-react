import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import "./App.css";
import SearchButton from "./SearchButton";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
    </div>
  );
};

export default App;

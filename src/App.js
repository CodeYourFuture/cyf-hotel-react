import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import SearchButton from "./SearchButton";
import Heading from "./Heading";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <SearchButton />
    </div>
  );
};

export default App;

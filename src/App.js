import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import SearchButton from "./SearchButton";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <SearchButton />
    </div>
  );
};

export default App;

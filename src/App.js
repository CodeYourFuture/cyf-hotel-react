import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import SearchButton from "./components/SearchButton";
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";

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

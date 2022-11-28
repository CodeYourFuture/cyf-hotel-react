import React from "react";
import SearchButton from "./SearchButton.js";
import Heading from "./Heading";
import ToursInfoCard from "./ToursInfoCard";

import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <ToursInfoCard />
      <Bookings />
    </div>
  );
};

export default App;

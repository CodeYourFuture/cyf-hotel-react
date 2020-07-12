import React from "react";
import SearchButton from "./SearchButton";
import Heading from "./Heading";

import Bookings from "./Bookings";
import "./App.css";

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

import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import SearchButton from "./SearchButton";
import Header from "./Header";

const App = () => {
  return (
    <div className="App">
      <Bookings />
      <SearchButton />
    </div>
  );
};

export default App;

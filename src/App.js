import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import SearchButton from "./SearchButton";
import Header from "./Header";
import TouristInfoCards from "./TouristInfoCards";

const App = () => {
  return (
    <div className="App">
      <TouristInfoCards />
      <Bookings />
      <SearchButton />
      <Header />
    </div>
  );
};

export default App;

import React from "react";
import Search from "./Search.js";
import Heading from "./Heading.js";
import TouristInfoCard from "./TouristInfoCards.js";

import Bookings from "./Bookings.js";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header">CYF Hotel</header> */}

      <Heading />
      <TouristInfoCard />
      <Bookings />
      <Search />
    </div>
  );
};

export default App;

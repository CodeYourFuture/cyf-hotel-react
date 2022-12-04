import React from "react";
import SearchButton from "./SearchButton";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";

const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header">CYF Hotel</header> */}
      <Heading />
      <Bookings />
      <SearchButton />
    </div>
  );
};

export default App;

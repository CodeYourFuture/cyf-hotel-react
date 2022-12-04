import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import "./App.css";
import SearchButton from "./SearchButton";
import TouristInfoCards from "./TouristInfoCards";

const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header">CYF Hotel</header> */}
      <Heading />
      <Bookings />
      <SearchButton />
      <TouristInfoCards />
    </div>
  );
};

export default App;

import React from "react";
import Search from "./Search";
import TouristInfoCards from "./TouristInfoCards.js";
import Bookings from "./Bookings";
import Footer from "./Footer.js";
import "./App.css";
import Heading from "./Heading";

const App = () => {
  return (
    <div className="App">
      <Heading />

      <header className="App-header">CYF Hotel..</header>
      <TouristInfoCards />
      <Search />
      <Bookings />

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;

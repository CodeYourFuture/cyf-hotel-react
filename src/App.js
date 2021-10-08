import React from "react";

import Heading from "./components/Heading";
import Bookings from "./Bookings";
import "./App.css";
import TouristInfoCards from "./components/TouristInfoCards";
import Footer from "./components/Footer";
import SearchResults from "./components/SearchResults";
// import fakeBookings from "./data/fakeBookings.json";

const address = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <div className="cards">
        <TouristInfoCards />
      </div>
      <Bookings />
      <SearchResults />
      <Footer address={address} />
    </div>
  );
};

export default App;

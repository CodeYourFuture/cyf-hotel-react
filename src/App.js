import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Footer from "./Footer";
import SearchResults from "./SearchResults";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <TouristInfoCards />
      <Footer />
      <SearchResults />
    </div>
  );
};

export default App;

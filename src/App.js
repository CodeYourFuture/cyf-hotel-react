import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import "./App.css";
import TouristInfoCardDetails from "./TouristInfoCardDetails";
import Footer from "./Footer";
import SearchResults from "./SearchResults";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCardDetails />
      <Bookings />
      <SearchResults />
      <Footer />
    </div>
  );
};

export default App;

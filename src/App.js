import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import cities from "./CardCities";
import Footer from "./Footer ";
import footer from "./FooterArray";
import SearchResults from "./SearchResults";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <TouristInfoCards cities={cities} />
      <SearchResults />
      <Footer footer={footer} />
    </div>
  );
};

export default App;

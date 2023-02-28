import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import "./App.css";
import TouristInfoCardDetails from "./TouristInfoCardDetails";
import Footer from "./Footer";
import SearchResults from "./SearchResults";
const footerArray = ["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCardDetails />
      <Bookings />
      <SearchResults />
      <Footer list = {footerArray}/>
    </div>
  );
};

export default App;

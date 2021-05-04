import React from "react";
import Heading from "./Heading.js";
import TouristInfoCards from "./TouristInfoCards.js";
import Bookings from "./Bookings";
import Footer from "./Footer.js";
// import SearchResults from "./SearchResults.js";
import Restaurant from "./Restaurant.js";
import "./App.css";

const App = () => {
  let contactDetails = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer hotelAddress={contactDetails} />
    </div>
  );
};

export default App;

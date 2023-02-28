import React from "react";
import Heading from "./Heading.js";
import TouristInfoCards from "./TouristInfoCards.js";
import Bookings from "./Bookings.js";
import Footer from "./Footer.js";
import "./App.css";

const App = () => {
  const footerArray = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Footer appFooter={footerArray} />
    </div>
  );
};

export default App;

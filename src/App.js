import React from "react";
import Heading from "./Heading.js";
import TouristInfoCards from "./TouristInfoCards.js";
import Bookings from "./Bookings";
import Footer from "./Footer.js";
import "./App.css";
import Restaurant from "./Restaurant.js";

const App = () => {
  let contact = [
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
      <Footer contact={contact} />
    </div>
  );
};

export default App;

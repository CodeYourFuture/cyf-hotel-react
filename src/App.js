import React from "react";
import Restaurant from "./Restaurant";
import Heading from "./Heading.js";
import Bookings from "./Bookings";
import TouristInfoCards from "./TuristInfoCards";
import "./App.css";
import Footer from "./Footer";
const App = () => {
  let address = [
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
      <Footer address={address} />
    </div>
  );
};

export default App;

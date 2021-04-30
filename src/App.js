import React from "react";
import Heading from "./Heading.js";
import TouristInfoCard from "./TouristInfoCard.js";
import Footer from "./Footer.js";
import Restaurant from "./Restaurant.js";
import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  let props = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCard />
      <Bookings />
      <Restaurant />
      <Footer props={props} />
    </div>
  );
};

export default App;

import React from "react";
import "./App.css";
import Bookings from "./Bookings";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";

import Restaurant from "./Restaurant";

const details = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />

      <div className="footer footer-list">
        <Footer contactDetails={details} />
      </div>
    </div>
  );
};

export default App;

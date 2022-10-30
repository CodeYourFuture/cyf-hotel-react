import React from "react";

import Bookings from "./Bookings";
import Heading from "./Heading.js";
import TouristInfoCards from "./TouristInfoCards.js";
import Footer from "./Footer.js";
import "./App.css";

let contactDetails = [
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
      <Footer contactDetails={contactDetails} />
    </div>
  );
};
export default App;

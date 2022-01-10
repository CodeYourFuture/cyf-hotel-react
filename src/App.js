import React from "react";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";

import Footer from "./Footer";

import "./App.css";

const App = () => {
  const contactList = [
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
      <Footer contacts={contactList} />
    </div>
  );
};

export default App;

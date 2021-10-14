import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Header";
import TouristInfoCard from "./TouristInfoCards";
import Footer from "./footer";

const footer = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCard />
      <Bookings />
      <Footer adress={footer} />
    </div>
  );
};

export default App;

import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards ";
import Footer from "./Footer";
import Restaurant from "./Restaurant";

const footer = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <TouristInfoCards />
      <Restaurant />
      <Footer footer={footer} />
    </div>
  );
};

export default App;

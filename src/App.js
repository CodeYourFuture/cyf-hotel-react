import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Bookings from "./Bookings";
import "./App.css";
import Restaurant from "./Restaurant";

const address = [
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
      <Footer props={address} />
    </div>
  );
};

export default App;

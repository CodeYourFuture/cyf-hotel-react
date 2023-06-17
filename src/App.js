import React from "react";
import Heading from"./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  const addresses = ["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Footer addresses={addresses} />
    </div>
  );
};

export default App;

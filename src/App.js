import React, { useState } from "react";
import TouristInfoCards from "./TouristInfoCards";
import Heading from "./Heading";
import Bookings from "./Bookings";
import Footer from "./Footer";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";

const App = () => {

  const address = ["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"]

  return (
    <div className="App">
      <Heading />
      <TouristInfoCards/>
      <Bookings />
      <Restaurant />
      <Footer address={address}/>
    </div>
  );
};

export default App;

import React from "react";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import Footer from "./Footer";
import Restaurant from "./Restaurant";
import Hero from "./Hero";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Hero />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />

      <Footer />
    </div>
  );
};

export default App;



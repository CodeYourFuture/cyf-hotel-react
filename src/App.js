import React from "react";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";
import Heading from "./Heading";
import "./App.css";
import cardN from "./data/cardN.json";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards Data={cardN} />
      <Bookings />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;

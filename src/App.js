import "./App.css";
import contactDetails from "./data/contactDetails";
import React from "react";
import Bookings from "./Bookings";
import Heading from "./Heading.js";
import TouristInfoCards from "./TouristInfoCards.js";
import Restaurant from "./Restaurant.js";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer data={contactDetails} />
    </div>
  );
};

export default App;

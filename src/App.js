import "./App.css";
import React from "react";
import Bookings from "./Bookings";
import Heading from "./Heading.js";
import TouristInfoCards from "./TouristInfoCards.js";
import Footer from "./Footer";
import contactDetails from "./data/contactDetails";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Footer data={contactDetails} />
    </div>
  );
};

export default App;

import React from "react";
import Contact from "./data/Contact";
import Bookings from "./Bookings";
import "./App.css";
import Restaurant from "./Restaurant";
import TouristInfoCards from "./TouristInfoCards";
import Heading from "./Heading";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />

      <Bookings />
      <Restaurant />
      <Footer data={Contact} />
    </div>
  );
};

export default App;

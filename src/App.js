import React from "react";
import Heading from "./Heading"
import TouristInfoCards from "./TouristInfoCards"
import Bookings from "./Bookings";
import "./App.css";
import FooterData from './FooterData.json'
import Footer from "./Footer"
import Restaurant from "./Restaurant"

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Restaurant />
      <Bookings />
      <Footer info={FooterData} />

    </div>
  );
};

export default App;

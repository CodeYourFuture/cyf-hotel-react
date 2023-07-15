import React from "react";
import Bookings from "./Bookings";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Restaurant from "./Restaurant";
import Footer from "./Footer";


import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;
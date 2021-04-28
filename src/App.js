import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import TouristInfoCards from "./TouristInfoCards";
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

import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import Restaurant from "./Restaurant";
import Footer from "./Footer";
import TouristInfoCards from "./TouristInfoCards";
import Heading from "./Heading";

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

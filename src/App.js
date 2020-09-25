import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Heading from "./Heading";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <TouristInfoCards />
      <Footer />
    </div>
  );
};

export default App;

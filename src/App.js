import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import Footer from "./Footer";
import TouristInfoCards from "./TouristInfoCards";
import Restaurant from "./Restaurant";
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

import React from "react";
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";
import Bookings from "./components/Bookings";
import Restaurant from "./components/Restaurant";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <div className="restaurant-newbooking-wrapper">
        <Restaurant />
      </div>
      <Footer />
    </div>
  );
};

export default App;

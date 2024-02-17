import React from "react";
import Bookings from "./Components/Bookings";
import "./App.css";
import Heading from "./Components/Heading";
import Footer from "./Components/Footer";
import TouristInfoCards from "./Components/TouristInfoCards";
import Restaurant from "./Components/Restaurant";
import HotelServices from "./Components/HotelServices";
import RoomTypes from "./Components/RoomTypes";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <HotelServices />
      <RoomTypes />
      <Bookings />

      <Footer />
    </div>
  );
};

export default App;

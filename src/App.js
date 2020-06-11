import React from "react";
import Heading from "./Heading";
import TouristicInfoCards from "./TouristicInfoCards";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  const hotelInfo = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <TouristicInfoCards />
      <Bookings />
      <Restaurant />
      <Footer hotelInfo={hotelInfo} />
    </div>
  );
};

export default App;

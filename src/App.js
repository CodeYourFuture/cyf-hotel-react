import React, { useState } from "react";

import "./App.css";

import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Footer from "./Footer";
import Restaurant from "./Restaurant";
import NewBookingsForm from "./NewBookingsForm";

const hotelInfos = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  const [newBooking, setNewBooking] = useState(null);

  function getNewBooking(booking) {
    setNewBooking(booking);
  }

  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings newBooking={newBooking} />
      <Restaurant />
      <NewBookingsForm getBooking={getNewBooking} />
      <Footer hotelInfos={hotelInfos} />
    </div>
  );
};

export default App;

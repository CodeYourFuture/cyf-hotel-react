import React, { useState } from "react";

import Bookings from "./Bookings";
import Heading from "./Heading";
import Footer from "./Footer";
import "./App.css";
import Restaurant from "./Restaurant";
import HotelImages from "./HotelImages";
import NewBookingForm from "./NewBookingForm";
import WelcomeInfo from "./WelcomeInfo";
import Attractions from "./Attractions";
import Arrow from "./Arrow";

const App = () => {
  const [guestList, setGuestList] = useState("");

  let footerArray = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789",
  ];
  return (
    <div className="App">
      <div id="main-home" className="main-wrapper">
        <Heading />
        <div className="main-page-wrapper">
          <NewBookingForm
            bookingsList={guestList}
            addNewBooking={setGuestList}
          />
          <WelcomeInfo />
        </div>
      </div>

      <HotelImages />
      <Attractions />

      <Restaurant />
      <Bookings bookings={guestList} setBookings={setGuestList} />
      <Footer array={footerArray} />
      <Arrow />
    </div>
  );
};

export default App;

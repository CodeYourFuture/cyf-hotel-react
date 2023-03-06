import React, { useState } from "react";

import Bookings from "./Bookings";
import Heading from "./Heading";
import TouristInfoCard from "./TouristInfoCard";
import Footer from "./Footer";
import "./App.css";
import Cities from "./data/cities.json";
import Restaurant from "./Restaurant";
import HotelImages from "./HotelImages";
import NewBookingForm from "./NewBookingForm";
import WelcomeInfo from "./WelcomeInfo";

const App = () => {
  const [guestList, setGuestList] = useState("");

  let footerArray = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789",
  ];
  return (
    <div className="App">
      <div className="main-wrapper">
        <Heading />
        <div>
          <NewBookingForm
            bookingsList={guestList}
            addNewBooking={setGuestList}
          />
          <WelcomeInfo />
        </div>
      </div>

      <HotelImages />
      <div className="attractions">
        {Cities.map((city) => {
          return <TouristInfoCard key={city.id} city={city} />;
        })}
      </div>
      <Restaurant />
      <Bookings bookings={guestList} setBookings={setGuestList} />
      <Footer array={footerArray} />
    </div>
  );
};

export default App;

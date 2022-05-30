import React, { useState } from "react";

import Bookings from "./Bookings";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";
import AddBooking from "./AddBooking";
import "./App.css";

const App = () => {
  const [bookings, setBookings] = useState([]);
  const urlToFetch = "https://matildaako-hotel-server.glitch.me";
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings
        bookings={bookings}
        setBookings={setBookings}
        urlToFetch={urlToFetch}
      />
      <AddBooking
        bookings={bookings}
        setBookings={setBookings}
        urlToFetch={urlToFetch}
      />
      <Restaurant />
      <Footer
        contact={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;

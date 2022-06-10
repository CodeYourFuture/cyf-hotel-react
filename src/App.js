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
  const urlToFetch = "http://localhost:7555";
  const [status, setStatus] = useState("fetching");

  const getBookings = () => {
    fetch(`${urlToFetch}/bookings`)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setStatus("failed");
        } else {
          setBookings(data);
          setStatus("success");
        }
      });
  };
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings
        bookings={bookings}
        setBookings={setBookings}
        urlToFetch={urlToFetch}
        status={status}
        getBookings={getBookings}
      />
      <AddBooking
        bookings={bookings}
        setBookings={setBookings}
        urlToFetch={urlToFetch}
        getBookings={getBookings}
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

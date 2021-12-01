import React, { useState } from "react";
import Heading from "./Heading.js";
import Bookings from "./Bookings.js";
import TouristInfoCards from "./TouristInfoCards.js";
import Footer from "./Footer.js";
import "./App.css";
import Restaurant from "./Restaurant.js";
import Form from "./Form.js";

let contactDetails = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  const [newBooking, setNewBooking] = useState(null);

  const getNewBooking = bookingObject => {
    setNewBooking(bookingObject);
  };

  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings newBooking={newBooking} />
      <Restaurant />
      <Form getNewBooking={getNewBooking} />
      <Footer contactDetails={contactDetails} />
    </div>
  );
};

export default App;

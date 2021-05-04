import React from "react";

import Bookings from "./Bookings";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Restaurant from "./Restaurant";
import BookingForm from "./BookingForm";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  const footerArray = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      {/* <BookingForm/> */}
      <Restaurant />
      <Footer footerArray={footerArray} />
    </div>
  );
};

export default App;

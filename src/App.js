import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import "./App.css";
import TouristInfoCards from "./TouristInfoCards";
import data from "./data/fakeBookings.json";
import Footer from "./footer";
import Restaurant from "./Restaurant";
import SingleBooking from "./SingleBooking";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />

      {/*------- Footer -------*/}

      <Footer
        address={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789",
        ]}
      />
    </div>
  );
};

export default App;

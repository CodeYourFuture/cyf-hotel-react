import React from "react";
import Heading from "./Heading";
import TouristInfo from "./Components/TouristInfoCards";
import Bookings from "./Bookings";
import "./App.css";
import Footer from "./Components/Footer";

import Restaurant from "./Restaurant";
const App = () => {
  const bookingData = [
    "https://cyf-react.glitch.me/",
    "https://cyf-react.glitch.me/delayed",
    "https://cyf-react.glitch.me/error"
  ];
  const footerData = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];

  return (
    <div className="App">
      <Heading />
      <TouristInfo />
      <Bookings bookingData={bookingData[1]} />

      <Restaurant />
      <Footer address={footerData} />
    </div>
  );
};

export default App;

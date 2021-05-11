import React from "react";

import Bookings from "./Bookings";
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";
import Footer from "./components/Footer";
import "./App.css";
import Restaurant from "./Restaurant";

const App = () => {
  const footerArray = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];

  return (
    <div className="App">
      <Heading />
      <Bookings />
      <Restaurant />
      <TouristInfoCards />
      <Footer info={footerArray} />
    </div>
  );
};

export default App;

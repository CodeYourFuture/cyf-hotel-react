import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";
import Bookings from "./Bookings";
import Cards from "./Cards";
import "./App.css";

const App = () => {
  const footerDetails = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];

  return (
    <div className="App">
      <Heading />
      <TouristInfoCards cardsInfo={Cards} />
      <Bookings />
      <Restaurant />
      <Footer footerDetails={footerDetails} />
    </div>
  );
};

export default App;

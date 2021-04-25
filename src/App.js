import React from "react";
import Heading from "./Heading.js";
import TouristInfoCard from "./TouristInfoCard.js";
import Bookings from "./Bookings";
import Footer from "./Footer.js";
import "./App.css";
import Restaurant from "./Restaurant.js";
import Cities from "./data/cities-info";

const App = () => {
  let contact = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <div className="card-wrapper">
        {Cities.map((city, index) => (
          <TouristInfoCard city={city} key={index} />
        ))}
      </div>
      <Bookings />
      <Restaurant />
      <Footer contact={contact} />
    </div>
  );
};

export default App;

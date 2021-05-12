import React from "react";
import Heading from "./components/Heading.js";
import TouristInfoCard from "./components/TouristInfoCard.js";
import Bookings from "./components/Bookings";
import Footer from "./components/Footer.js";
import "./App.css";
import Restaurant from "./components/Restaurant.js";
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

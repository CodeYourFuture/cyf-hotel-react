import React from "react";

import Bookings from "./Bookings";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import "./App.css";
import Cities from "./data/cities.json";

const App = () => {
  let footerArray = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789",
  ];
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <div className="info-cards">
        {Cities.map((city, index) => {
          return <TouristInfoCards key={index} city={city} />;
        })}
      </div>
      <Footer array={footerArray} />
    </div>
  );
};

export default App;

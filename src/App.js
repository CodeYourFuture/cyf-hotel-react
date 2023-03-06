import React from "react";

import Bookings from "./Bookings";
import Heading from "./Heading";
import TouristInfoCard from "./TouristInfoCard";
import Footer from "./Footer";
import "./App.css";
import Cities from "./data/cities.json";
import Restaurant from "./Restaurant";

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
        {Cities.map((city) => {
          return <TouristInfoCard key={city.id} city={city} />;
        })}
      </div>
      <Restaurant />
      <Footer array={footerArray} />
    </div>
  );
};

export default App;

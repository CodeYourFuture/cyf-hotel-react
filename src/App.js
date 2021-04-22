import React from "react";
import Bookings from "./Bookings";
import Heading from "./Heading.js";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer.js";
import "./App.css";
import { cities } from "./data/cities";

const footerInfo = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <div className="cards">
        {cities.map((city, index) => {
          return <TouristInfoCards city={city} key={index} />; // passing whole object for each city
        })}
      </div>
      <Bookings />
      <Footer elements={footerInfo} />
    </div>
  );
};

export default App;

import React from "react";
import Bookings from "./Bookings";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import { cities } from "./data/cities";
import Restaurant from "./Restaurant";
import "./App.css";

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
      <Restaurant />
      <Footer elements={footerInfo} />
    </div>
  );
};

export default App;

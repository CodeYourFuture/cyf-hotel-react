import React from "react";
import { Heading, TouristInfoCards, Footer, cities } from "./components";
import Bookings from "./Bookings";
import "./App.css";
import Restaurant from "./Restaurant";
const info = [
  "Address: 123 Fake Street, London, E1 4UD",
  "Email: hello@fakehotel.com",
  "Telephone Number: 0123 456789"
];
const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards citiesData={cities} />
      <Bookings />
      <Restaurant />
      <Footer hotelContactInfo={info} />
    </div>
  );
};

export default App;

import React from "react";

import Bookings from "./components/bookings/Bookings";
import Heading from "./components/heading/Heading";
import TouristInfoCards from "./components/tourists-info/TouristInfoCards";
import Footer from "./components/footer/Footer";
import Restaurant from "./components/restaurant/Restaurant";

import "./App.css";

const data = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer data={data} />
    </div>
  );
};

export default App;

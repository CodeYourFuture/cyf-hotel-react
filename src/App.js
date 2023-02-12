import React from "react";
import TouristInfoCards from "./components/TouristInfoCards";
import Bookings from "./components/Bookings";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import Restaurant from "./components/Restaurant";
import "./css/App.css";

const footerArray = [
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
      <Footer footerArray={footerArray} />
    </div>
  );
};

export default App;

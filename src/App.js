import React from "react";
import Footer from "./components/Footer";
import Bookings from "./components/Bookings";
import TouristInfoCards from "./components/TouristInfoCards";
import Restaurant from "./components/Restaurant";
import Home from "./components/Home";
import citiesInUK from "./data/citiesInUK.json";

const footerData = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Home />
      <TouristInfoCards cardData={citiesInUK} />
      <Bookings />
      <Restaurant />
      <Footer footerData={footerData} />
    </div>
  );
};

export default App;

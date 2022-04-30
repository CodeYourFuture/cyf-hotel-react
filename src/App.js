import React from "react";
import Footer from "./Footer";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import Restaurant from "./Restaurant";
import Home from "./Home";
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

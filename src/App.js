import React from "react";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Heading from "./Heading";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <div className="tourist-card-container">
        <TouristInfoCards />
      </div>
      <Bookings />
      <Footer
        address="123 Fake Street, London, E1 4UD"
        email="hello@fakehotel.com"
        telephone="0123 456789"
      />
    </div>
  );
};

export default App;

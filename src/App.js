import React from "react";
import Heading from "./components/Heading";
import Bookings from "./components/Bookings";
import TouristInfoCards from "./components/TouristInfoCards";
import Footer from "./components/Footer";
//import SearchResults from "./SearchResults";
import "./App.css";

const App = () => {
  const hotelContact = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Footer hotelContact={hotelContact} />
    </div>
  );
};

export default App;

import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import "./App.css";
import Footer from "./Footer";

const App = () => {
  const contactList = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];

  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Footer contacts={contactList} />
    </div>
  );
};

export default App;

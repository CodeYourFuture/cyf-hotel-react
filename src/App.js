import React from "react";
import Header from "./Heading";
import Card from "./TouristInfoCards";
import Bookings from "./Bookings";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  const contactsList = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Header />
      <Card />
      <Bookings />
      <Footer contacts={contactsList} />
    </div>
  );
};

export default App;

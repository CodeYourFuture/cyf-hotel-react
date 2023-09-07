import React from "react";
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";
import Bookings from "./Bookings";
import Footer from "./components/Footer";
import "./App.css";
import Restaurant from "./Restaurant";

const App = () => {
  const address = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789",
  ];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer address = {address}/>
    </div>
  );
};

export default App;

import React from "react";
import TouristInfoCards from "./TouristInfoCards";

import Bookings from "./Bookings";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  const arr = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];

  return (
    <div className="App">
      <Header />
      <TouristInfoCards />
      <Bookings />
      <Footer arr={arr} />
    </div>
  );
};

export default App;

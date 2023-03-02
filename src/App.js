import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Restaurant from "./Restaurant";
import Footer from "./Footer";

const App = () => {
  const address = ["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer address={address} />
    </div>
  );
};

export default App;

import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer"

import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  const address = ["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Footer address = {address}/>
    </div>
  );
};

export default App;

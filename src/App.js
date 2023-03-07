import React from "react";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import Heading from "./Heading";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading/>
      <TouristInfoCards/>
      <Bookings />
      <Footer addresses={["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"]} />
    </div>
  );
};

export default App;

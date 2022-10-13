import React from "react";
import Contact from "./data/Contact";
import Bookings from "./Bookings";
import "./App.css";

import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Footer data={Contact} />
    </div>
  );
};

export default App;

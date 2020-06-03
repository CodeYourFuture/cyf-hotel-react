import React from "react";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";
import heading from "./Heading";

import "./App.css";
import Heading from "./Heading";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <Restaurant />
      <TouristInfoCards />
      <Footer />
    </div>
  );
};

export default App;

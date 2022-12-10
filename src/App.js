import React from "react";
import Heading from "./components/Heading";
import Bookings from "./components/Bookings";
import TouristInfoCards from "./components/TouristInfoCards";
import Footer from "./components/Footer";
import Restaurant from "./components/Restaurant";

import "./App.css";

const App = () => {
  return (
    <div>
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;

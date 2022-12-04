import React from "react";
import Heading from "./components/Heading";
import Bookings from "./components/Bookings";

import TouristInfoCards from "./components/TouristInfoCards";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <div>
      <Heading />
      <Bookings />

      <TouristInfoCards />
      <Footer />
    </div>
  );
};

export default App;

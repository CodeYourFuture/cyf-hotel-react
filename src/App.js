import React from "react";

import Bookings from "./Bookings";
import Heading from "./Heading";
import "./App.css";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Heading />
      <Bookings />
      <TouristInfoCards />
      <Footer />
    </>
  );
};

export default App;

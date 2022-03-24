import React from "react";

import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="App">
        <Heading />
        <TouristInfoCards />
        <Bookings />
        <Restaurant />
      </div>
      <Footer />
    </>
  );
};

export default App;

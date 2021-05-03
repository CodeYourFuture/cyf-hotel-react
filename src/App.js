import React from "react";
import Bookings from "../src/components/Bookings";
import Restaurant from "../src/components/Restaurant";
import Footer from "../src/components/Footer";
import TouristInfoCards from "../src/components/TouristInfoCards";
import Heading from "../src/components/Heading";
import "./App.css";
import "./Grid.css";

const App = () => {
  return (
    <div className="App ">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;

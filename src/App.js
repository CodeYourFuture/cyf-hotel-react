import React from "react";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Footer from "./Footer";
import TouristInfoCards from "./TouristInfoCards";
import Heading from "./Heading";
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

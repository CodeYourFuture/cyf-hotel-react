import React from "react";
//import Search from "./Search";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import Restaurant from "./Restaurant";
import TouristInFoCards from "./TouristInFoCards";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <Restaurant />
      <TouristInFoCards />
      <Footer />
    </div>
  );
};

export default App;

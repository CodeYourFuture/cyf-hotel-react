import React from "react";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import Footer from "./Footer";
import Restaurant from "./Restaurant";


const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      < Restaurant />
      <TouristInfoCards />
      <Footer />
    </div>
  );
};

export default App;



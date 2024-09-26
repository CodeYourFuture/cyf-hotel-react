import React from "react";
import Heading from "./Components/Heading";
import TouristInfoCards from "./Components/TouristInfoCards";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import "./App.css";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;

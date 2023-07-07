import React from "react";
import Bookings from "./Components/Bookings";
import "./App.css";
import Heading from "./Components/Heading";
import Footer from "./Components/Footer";
import TouristInfoCards from "./Components/TouristInfoCards";
import Restaurant from "./Components/Restaurant";
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

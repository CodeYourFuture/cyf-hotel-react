import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";
import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <Heading />
      <TouristInfoCards />
      <Restaurant />
      <Bookings />
      <Footer />
    </div>
  );
};

export default App;

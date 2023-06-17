import React from "react";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Header";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <TouristInfoCards />

      <Heading />

      <Bookings />

      <Footer />
    </div>
  );
};

export default App;

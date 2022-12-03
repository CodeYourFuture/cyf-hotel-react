import React from "react";
import Bookings from "./Bookings";
import Footer from "./footer";
import Header from "./header";
import TouristInfoCards from "./card";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TouristInfoCards />
      <Bookings />
      <Footer />
    </div>
  );
};

export default App;

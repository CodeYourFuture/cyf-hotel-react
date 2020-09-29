import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Header from "./Header";

import Footer from "./Footer";
import CardsSection from "./CardsSection";
import Restaurant from "./Restaurant";

const App = () => {
  return (
    <div className="App">
      <Header />
      <CardsSection />
      <Bookings />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;

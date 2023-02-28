import React from "react";
import { Header } from "./Header";
import { Card } from "./Card";
import Bookings from "./Bookings";
import Footer from "./Footer";
import { TouristInfoCards } from "./TouristInfoCards";
import { Hero } from "./Hero";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <TouristInfoCards />
      <Bookings />
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { TouristInfoCards } from "./TouristInfoCards";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <TouristInfoCards />
      <div className="main-content">
        <Bookings />
        <Restaurant />
      </div>
      <Footer />
    </div>
  );
};

export default App;

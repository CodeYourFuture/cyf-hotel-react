import React from "react";
import Bookings from "./Bookings";
import Footer from "./footer";
import Header from "./header";
import Restaurant from "./Restaurant";
import TouristInfoCards from "./card";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;

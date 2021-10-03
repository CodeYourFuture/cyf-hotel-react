import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Header from "./components/Header";
import TouristInfoCards from "./components/TouristInfoCards";
import Footer from "./components/Footer";

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

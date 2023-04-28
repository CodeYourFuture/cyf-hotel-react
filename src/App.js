import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Booking from "./pages/Booking.js";
import Offers from "./pages/Offers.js";
import About from "./pages/About.js";

import "./App.css";

const App = props => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/booking" element={<Booking />} />

        <Route path="/offers" element={<Offers />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;

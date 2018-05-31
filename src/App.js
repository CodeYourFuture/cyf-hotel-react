import React from "react";

import Bookings from "./containers/Bookings.js";
import Footer from "./components/Footer.js";
import Logo from "./components/Logo.js";
import "./App.css";
import SpecialDeals from "./components/SpecialDeals.js";

const App = () => {
  return (
    <div className="App">
      <Logo title="Welcome to CYF Hotel" />
      <Bookings />
      <SpecialDeals />
      <Footer />
    </div>
  );
};

export default App;

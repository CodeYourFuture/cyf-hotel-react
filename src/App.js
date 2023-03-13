import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Headings from "./Headings";
import TouristInfoCards from "./TouristInfoCards";
import GlasgowViews from "./GlasglowViews";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <TouristInfoCards />
      <Bookings />
      <Headings />
      <Footer />
    </div>
  );
};

export default App;

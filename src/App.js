import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";

const Heading = () => {
  return (
    <div>
      <header className="App-header">CYF Hotel</header>
      <img
        className="App-logo"
        src="https://image.flaticon.com/icons/svg/139/139899.svg"
        alt="icon"
      />
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Footer />
    </div>
  );
};

export default App;

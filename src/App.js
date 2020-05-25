import React from "react";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <heading className="App-header">
        CYF Hotel
        <img
          className="App-logo "
          src=" https://image.flaticon.com/icons/svg/139/139899.svg "
        />
      </heading>

      <Bookings />
      <Restaurant />
      <TouristInfoCards />
      <Footer />
    </div>
  );
};

export default App;

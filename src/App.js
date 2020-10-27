import React from "react";
import Restaurant from "./Restaurant.js";
import TouristInfoCards from "./TouristInfoCards.js";
import Bookings from "./Bookings";
import Footer from "./Footer.js";
import "./App.css";
import Heading from "./Heading";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <header className="App-header">CYF Hotel..</header>
      <TouristInfoCards />
      <Bookings />

      <Restaurant />
      <div>
        <Footer />
      </div>
    </div>
  );
};

// };

export default App;

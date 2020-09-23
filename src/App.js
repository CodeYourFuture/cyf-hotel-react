import React from "react";
import Heading from "/home/cyf/Desktop/react/cyf-hotel-react/src/Heading.js";
import Bookings from "/home/cyf/Desktop/react/cyf-hotel-react/src/Bookings.js";
import TouristInfoCards from "/home/cyf/Desktop/react/cyf-hotel-react/src/TouristInfoCards.js";
import Restaurant from "/home/cyf/Desktop/react/cyf-hotel-react/src/Restaurant.js";

import "/home/cyf/Desktop/react/cyf-hotel-react/src/App.css";
import Footer from "/home/cyf/Desktop/react/cyf-hotel-react/src/Footer.js";
const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;

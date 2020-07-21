import React from "react";

import "./App.css";
import Heading from "./components/Heading.js";
import TouristInfoCards from "./components/TouristInfoCards.js";
import Bookings from "./components/Bookings.js";
import Restaurant from "./components/Restaurant.js";
import Footer from "./components/Footer.js";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer
        contactDetails={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;

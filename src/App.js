import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Footer
        array={[
          "221B Baker Street, London, E1 4UD",
          "sherlock.holmes@fake.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;

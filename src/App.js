import React from "react";

import Heading from "./Heading/Heading";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards/TouristInfoCards";
import Footer from "./Footer/Footer";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Footer
        contactInfo={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;

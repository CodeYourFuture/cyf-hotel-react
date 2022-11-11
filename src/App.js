import React from "react";

import Heading from "./Heading/Heading";
import TouristInfoCards from "./TouristInfoCards/TouristInfoCards";
import Bookings from "./Bookings/Bookings";
import Restaurant from "./Restaurant/Restaurant";
import Footer from "./Footer/Footer";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
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

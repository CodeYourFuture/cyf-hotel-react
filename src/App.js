import React from "react";

import Bookings from "./Bookings";
import Heading from "./Heading";
import Restaurant from "./Restaurant";
import "./App.css";
import Footer from "./Footer";
import TourisrticInfoCardsContainer from "./TourisrticInfoCardsContainer";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TourisrticInfoCardsContainer />
      <Bookings />
      <Restaurants />
      <Footer
        address={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;

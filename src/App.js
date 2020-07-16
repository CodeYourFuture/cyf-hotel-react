import React from "react";
import Bookings from "./Bookings";
import Heading from "./Heading";
import Footer from "./Footer";
import "./App.css";
import TourisrticInfoCardsContainer from "./TouristicInfoCardsContainer";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TourisrticInfoCardsContainer />
      <Bookings />
      <Footer
        adress={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;

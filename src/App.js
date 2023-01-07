import React from "react";
import Bookings from "./Bookings";
import Heading from "./Heading";
import Restaurant from "./Restaurant";
import "./App.css";
import Footer from "./Footer";
import TouristInfoCardsContainer from "./TouristInfoCardsContainer";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCardsContainer />
      <Bookings />
      <Restaurant />
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

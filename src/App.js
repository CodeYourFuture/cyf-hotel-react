import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import CardCities from "./data/cardCities.json";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Footer from "./Footer";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards cities={CardCities} />
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

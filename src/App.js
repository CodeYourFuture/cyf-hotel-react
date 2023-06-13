import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import FooterCompo from "./FooterCompo";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings name />
      <FooterCompo
        details={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789",
        ]}
      />
    </div>
  );
};

export default App;


import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import TouristInfoCards from "./TouristInfoCards";
import FooterCompo from "./FooterCompo";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings name />
      <Restaurant />
      <FooterCompo
        details={
          {
            address: "123 Fake Street, London, E1 4UD",
            email: "hello@fakehotel.com",
            phone: "0123 456789",
          }
        }
      />
    </div>
  );
};

export default App;


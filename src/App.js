import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCard from "./TouristInfoCard";
import Footer from "./Footer";
import Restaurant from "./Restaurant.js";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <div className="flex">
        <TouristInfoCard link="https://peoplemakeglasgow.com" name="Glasgow" />
        <TouristInfoCard link="https://visitmanchester.com" name="Manchester" />
        <TouristInfoCard link="https://visitlondon.com" name="London" />
      </div>
      <Bookings />
      <Restaurant />
      <Footer
        info={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;

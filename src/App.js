import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <div className="flex">
        <TouristInfoCards link="https://peoplemakeglasgow.com" name="Glasgow" />
        <TouristInfoCards
          link="https://visitmanchester.com"
          name="Manchester"
        />
        <TouristInfoCards link="https://visitlondon.com" name="London" />
      </div>
      <Bookings />
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

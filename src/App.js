import React from "react";
import Bookings from "./Bookings";
import Heading from "./Heading";
import Footer from "./Footer";
import TouristInfoCards from "./TouristicInfoCards";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
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

import React from "react";
import Bookings from "./Bookings";
import { Footer } from "./components/Footer";
import "./App.css";
import { Heading } from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Footer
        items={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;

import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";
import Footer from "./components/Footer";

const App = () => {
    const footerInfo = [
      "123 Fake Street, London, E1 4UD",
      "hello@fakehotel.com",
      "0123 456789",
    ];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Footer footerInfo={footerInfo} />
    </div>
  );
};

export default App;

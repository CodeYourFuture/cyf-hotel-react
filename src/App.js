import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Restaurant from "./Restaurant";
import Footer from "./Footer";

import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  const FooterData = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer FooterData={FooterData} />
    </div>
  );
};

export default App;

import React from "react";
import Heading from "./Heading";
import TouristsInfoCards from "./TouristsInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";

import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  const footerData = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <TouristsInfoCards />
      <Bookings />
      <Restaurant />
      <Footer data={footerData} />
    </div>
  );
};

export default App;

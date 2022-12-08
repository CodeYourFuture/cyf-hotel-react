import React from "react";

import Restaurant from "./Restaurant";
import Bookings from "./Bookings";
import Heading from "./myComponents/Heading";
import TouristInfoCards from "./myComponents/TouristInfoCards";
import Footer from "./myComponents/Footer";

import "./App.css";

const footer = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header">CYF Hotel</header> */}
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer footer={footer} />
    </div>
  );
};

export default App;

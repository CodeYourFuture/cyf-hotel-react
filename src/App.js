import React from "react";
import Footer from "./Footer";
import Bookings from "./Bookings";
import "./App.css";
import TouristInfoCards from "./TouristInfoCards";
import Restaurant from "./Restaurant";

const cityMap = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer cityMap={cityMap} />
    </div>
  );
};

export default App;

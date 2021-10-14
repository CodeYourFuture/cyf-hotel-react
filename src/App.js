import React from "react";
import Search from "./Search";
import Header from "./components/Header";
import TouristInfoCards from "./components/TouristInfoCards";
import Footer from "./components/Footer";

import Bookings from "./Bookings";
import "./App.css";
import Restaurant from "./Restaurant";
const contactInfo = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Header />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Search />
      <Footer contactInfo={contactInfo} />
    </div>
  );
};

export default App;

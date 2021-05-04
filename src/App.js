import React from "react";
import Header from "./components/Header";
import TouristInfoCards from "./components/TouristInfoCards";
import Bookings from "./components/Bookings";
import Footer from "./components/Footer";
import Restaurant from "./components/Restaurant";
import "./App.css";

const App = () => {
  const info = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Header />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer details={info} />
    </div>
  );
};

export default App;

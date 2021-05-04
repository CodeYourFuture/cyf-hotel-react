import React from "react";
import Bookings from "../pages/Bookings";
import "./App.css";
import Heading from "../components/header/Heading";
import Restaurant from "../pages/Restaurant";
import TouristInfoCards from "../pages/TouristInfoCards";
import Footer from "../components/footer/Footer";

const App = () => {
  const footerInfo = [
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
      <Footer footerInfo={footerInfo} />
    </div>
  );
};

export default App;

import React from "react";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import "./css/App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./footer/Footer";

const App = () => {
  const footerData = [
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
      <Footer data={footerData} />
    </div>
  );
};

export default App;

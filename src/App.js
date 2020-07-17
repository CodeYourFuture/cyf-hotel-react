import React from "react";
import Bookings from "./Components/Bookings";
import "./App.css";
import Heading from "./Components/Heading";
import TouristInfoCards from "./Components/TouristInfoCards";
import Footer from "./Components/Footer";

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
      <Footer info={footerInfo} />
    </div>
  );
};

export default App;

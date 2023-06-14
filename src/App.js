import React from "react";
import Heading from "./Heading.js";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards.js";
import "./App.css";
import Footer from "./Footer.js";
const App = () => {
    const footerData = [
      "123 Fake Street, London, E1 4UD",
      "hello@fakehotel.com",
      "0123 456789",
    ];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Footer address={footerData} />
    </div>
  );
};
export default App;

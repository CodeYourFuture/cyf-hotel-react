import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import "./App.css";
import SearchButton from "./SearchButton";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";

const App = () => {
  const FooterInfo = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <TouristInfoCards />
      <Bookings />
      <Footer value={FooterInfo} />
    </div>
  );
};

export default App;

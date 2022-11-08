import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./components/Heading";
import TouristInfoCard from "./components/TouristInfoCard";
import Footer from "./components/Footer";
import Restaurant from "./Restaurant";

const App = () => {
  const contactDetails = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCard />
      <Bookings />
      <Restaurant />
      <Footer contacts={contactDetails} />
    </div>
  );
};

export default App;

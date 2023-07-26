import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCard from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const contactDetails = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789",
  ];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCard />
      <Bookings />
      <Restaurant />
      <Footer props={contactDetails} />
    </div>
  );
};

export default App;



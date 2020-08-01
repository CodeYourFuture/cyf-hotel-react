import React, { useState } from "react";

import Bookings from "./components/Bookings";
import Header from "./components/Heading";
import DisplayTouristCard from "./components/DisplayTouristCard";

import "./components/TouristInfoCard";
import Footer from "./components/Footer";
import Restaurant from "./components/Restaurant";

import AddCustomerForm from "./components/AddCustomerForm";

const App = () => {
  return (
    <div className="App">
      <Header />
      <DisplayTouristCard />
      <Bookings />
      <Restaurant />

      <Footer
        footerData={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;

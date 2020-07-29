import React, { useState } from "react";

import Bookings from "./Bookings";
import Header from "./Heading";
import DisplayTouristCard from "./DisplayTouristCard";
import "./App.css";
import "./TouristInfoCard.css";
import Footer from "./Footer";
import Restaurant from "./Restaurant";
import RestaurantButton from "./RestaurantButton";
import AddCustomerForm from "./AddCustomerForm";

const App = () => {
  return (
    <div className="App">
      <Header />
      <DisplayTouristCard />
      <Bookings />
      <Restaurant />
      <RestaurantButton />

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

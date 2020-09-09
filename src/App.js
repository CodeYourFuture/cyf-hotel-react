import React, { useState } from "react";
import Bookings from "./Components/Bookings";
import "./App.css";
import Heading from "./Components/Heading";
import TouristInfoCards from "./Components/TouristInfoCards";
import Footer from "./Components/Footer";
import Restaurant from "./Components/Restaurant";
import NewCustomerForm from "./Components/NewCustomerForm";

const App = () => {
  const footerInfo = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  const [newCustomerInfo, setNewCustomerInfo] = useState(null);
  const handleNewCustomerSubmit = info => {
    setNewCustomerInfo(info);
  };

  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings newCustomerInfo={newCustomerInfo} />
      <Restaurant />
      <NewCustomerForm handleNewCustomerSubmit={handleNewCustomerSubmit} />
      <Footer info={footerInfo} />
    </div>
  );
};

export default App;

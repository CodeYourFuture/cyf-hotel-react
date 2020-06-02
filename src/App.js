import React, { useState } from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Footer from "./Footer";
import Resturant from "./Restaurant";
import "./App.css";

const App = () => {
  const addresses = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  const [orders, setOrders] = useState(0);
  function handleOrders() {
    setOrders(orders + 1);
  }
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Resturant orders={orders} handleOrders={handleOrders} />
      <Footer keys={addresses} />
    </div>
  );
};

export default App;

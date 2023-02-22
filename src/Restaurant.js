import React, { useState } from "react";
import RestaurantButton from "./components/RestaurantButton";
import "./App.css";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul className="btnContainer">
        <RestaurantButton orderOne={orderOne} orders={orders} />
      </ul>
    </div>
  );
};

export default Restaurant;

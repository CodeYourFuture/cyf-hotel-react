import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
const Restaurant = () => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        {" "}
        <RestaurantButton orderOne={orderOne} />
        <li>pizzas: {orders}</li>
      </ul>
    </div>
  );
};

export default Restaurant;

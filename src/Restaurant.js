import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders => orders + 1);
  }
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>Pizzas: {orders} </li>
        <RestaurantButton handler={orderOne} />
      </ul>
    </div>
  );
};

export default Restaurant;

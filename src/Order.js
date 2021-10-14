import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = () => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(currentOrders => currentOrders + 1);
  }
  return (
    <div>
      <ul>
        <li>Pizzas: {orders} </li>
      </ul>
      <RestaurantButton handleOrder={orderOne} />
    </div>
  );
};

export default Order;

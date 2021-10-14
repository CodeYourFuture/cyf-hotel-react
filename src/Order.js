import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = () => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(currentOrders => {
      return currentOrders + 1;
    });
  }
  return (
    <div>
      <li>
        Pizzas: {orders} <RestaurantButton handleClick={orderOne} />
      </li>
    </div>
  );
};

export default Order;

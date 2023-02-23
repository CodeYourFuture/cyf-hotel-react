import React from "react";
import RestaurantButton from "./RestaurantButton";
import { useState } from "react";

const Order = () => {
  // const pizzas = 0;

  const [orders, setOrders] = useState(0);
  function onAdd() {
    setOrders(orders + 1);
  }
  return (
    <li>
      Pizzas: {orders}
      <RestaurantButton onAdd={onAdd} />
    </li>
  );
};

export default Order;

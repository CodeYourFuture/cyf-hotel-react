import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = () => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => setOrders(preOrder => preOrder + 1);
  return (
    <li>
      Pizzas: {orders} <RestaurantButton clickEvent={orderOne} />
    </li>
  );
};

export default Order;

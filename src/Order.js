import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = () => {
  let [orders, setOrders] = useState(0);
  let orderOne = () => {
    setOrders((orders += 1));
  };
  return (
    <li>
      Pizzas: {orders}
      <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

export default Order;

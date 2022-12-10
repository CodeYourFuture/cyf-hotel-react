import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

export default function Order() {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    return setOrders(orders + 1);
  }
  return (
    <li>
      Pizzas: {orders} <RestaurantButton handleClick={orderOne} />
    </li>
  );
}

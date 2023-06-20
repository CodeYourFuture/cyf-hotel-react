import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function Order() {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <li>
      Pizzas: {orders}
      <RestaurantButton order={orderOne} />
    </li>
  );
}

export default Order;

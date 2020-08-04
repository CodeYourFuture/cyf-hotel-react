import RestaurantButton from "./RestaurantButton";
import React, { useState } from "react";

const Order = () => {
  const [orders, setOrder] = useState(0);
  function orderOne() {
    setOrder(orders + 1);
  }
  return (
    <li>
      Pizzas: {orders} <RestaurantButton handleClick={orderOne} />
    </li>
  );
};
export default Order;

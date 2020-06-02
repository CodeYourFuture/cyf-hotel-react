import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = () => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  function cancel() {
    setOrders(0);
  }
  return (
    <li>
      <h3>Pizzas:{orders}</h3>{" "}
      <RestaurantButton cancelOrder={cancel} orderOne={orderOne} />
    </li>
  );
};

export default Order;

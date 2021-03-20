import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
const Order = () => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders => orders + 1);
  }
  return (
    <>
      <li>Pizzas: {orders} </li>
      <RestaurantButton handler={orderOne} />
    </>
  );
};
export default Order;

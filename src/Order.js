import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = prop => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <li>
      {prop.orderType}: {orders} <RestaurantButton orderFunction={orderOne} />
    </li>
  );
};

export default Order;

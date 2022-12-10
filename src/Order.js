import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

export default function Order({ orderType }) {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    return setOrders(orders + 1);
  }
  return (
    <li>
      {orderType}: {orders} <RestaurantButton handleClick={orderOne} />
    </li>
  );
}

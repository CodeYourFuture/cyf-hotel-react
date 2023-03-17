import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

export default function Order(props) {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }

  return (
    <li>
      {props.orderType}: {orders}
      <RestaurantButton orderOne={orderOne} />
    </li>
  );
}

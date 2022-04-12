import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function Order(props) {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(currentOrders => currentOrders + 1);
  }

  return (
    <li>
      {props.orderType}: {orders} <RestaurantButton handleClick={orderOne} />
    </li>
  );
}

export default Order;

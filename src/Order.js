import React from "react";
import { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function Order(props) {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(currentOrder => {
      return currentOrder + 1;
    });
  }

  return (
    <li>
      {props.orderType}: {orders} <RestaurantButton handleClick={orderOne} />
    </li>
  );
}

export default Order;

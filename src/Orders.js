import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

export default function Orders(props) {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(function(currentOrder) {
      return currentOrder + 1;
    });
  }

  return (
    <div>
      <li>
        {props.orderType}: {orders}
        <RestaurantButton handleClick={orderOne} />
      </li>
    </div>
  );
}

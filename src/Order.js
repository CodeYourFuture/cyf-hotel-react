import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <ul>
      <li>
        {props.orderType}: {orders} <RestaurantButton order={orderOne} />
      </li>
    </ul>
  );
};

export default Order;

import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    return setOrders(currentCount => currentCount + 1);
  }

  return (
    <li className="order">
      {orderType}: {orders} <RestaurantButton handleClick={orderOne} />
    </li>
  );
};

export default Order;

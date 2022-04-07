import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
import "./order.css";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(o1 => o1 + 1);
  }
  return (
    <li className="orderStyle">
      {orderType}: {orders}
      <RestaurantButton handleClick={orderOne} />
    </li>
  );
};

export default Order;

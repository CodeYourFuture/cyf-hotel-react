import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(o1 => o1 + 1);
  }
  return (
    <li>
      {orderType}: {orders}
      <RestaurantButton handleClick={orderOne} />
    </li>
  );
};

export default Order;

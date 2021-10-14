import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    //increment orders value by 1
    setOrders(orders + 1);
  }

  return (
    <li>
      {orderType}: {orders} <RestaurantButton handleClick={orderOne} />
    </li>
  );
};

export default Order;

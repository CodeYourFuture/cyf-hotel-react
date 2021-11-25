import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);

  // onClick event for adding pizza
  const orderOne = () => setOrders(orders => (orders += 1));

  return (
    <li>
      {orderType}: {orders} <RestaurantButton clickEvent={orderOne} />
    </li>
  );
};

export default Order;

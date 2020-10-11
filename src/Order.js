import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <li className="text-light m-2 d-flex justify-content-between align-items-center">
      {orderType}: {orders} <RestaurantButton clickEvent={orderOne} />
    </li>
  );
};

export default Order;

import React, { useState } from "react";
import "./Order.css";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <li className="padding margin">
      {orderType}: {orders} <RestaurantButton totalOrders={orderOne} />
    </li>
  );
};

export default Order;

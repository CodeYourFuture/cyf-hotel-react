import React, { useState } from "react";

import RestaurantButton from "../RestaurantButton";

import "./Order.css";

const Order = props => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(currentOrders => currentOrders + 1);
  };

  return (
    <li className="order">
      {props.orderType}: {orders} <RestaurantButton handleClick={orderOne} />{" "}
    </li>
  );
};

export default Order;

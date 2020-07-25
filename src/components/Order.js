import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
import "./Order.css";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };

  return (
    <li className="order">
      <span className="order-type">
        {orderType}: {orders}
      </span>{" "}
      <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

export default Order;

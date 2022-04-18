import React from "react";
import { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    if (orders < 20) {
      setOrders(orders + 1);
    }
  };
  const orderRemove = () => {
    if (orders > 0) {
      setOrders(orders - 1);
    }
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {orderType}{" "}
      <span className="badge badge-primary badge-pill">{orders}</span>{" "}
      <RestaurantButton orderRemove={orderRemove} orderOne={orderOne} />
    </li>
  );
};

export default Order;

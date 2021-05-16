import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center my-1 mx-4 px-4">
      {props.orderType}: {orders} <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

export default Order;

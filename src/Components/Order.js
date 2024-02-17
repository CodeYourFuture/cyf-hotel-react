import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
const Order = (props) => {
  const [order, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(order + 1);
  };
  return (
    <li classList="list-group-item">
      <h2>
        {props.orderType}: {order}
      </h2>
      <RestaurantButton order={orderOne} />
    </li>
  );
};

export default Order;

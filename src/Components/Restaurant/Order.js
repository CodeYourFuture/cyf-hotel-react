import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => setOrders(preOrder => preOrder + 1);
  return (
    <li>
      {props.orderType}: {orders} <RestaurantButton clickEvent={orderOne} />
    </li>
  );
};

export default Order;

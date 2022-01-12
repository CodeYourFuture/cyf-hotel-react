import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
import "./index.css";

const Order = props => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => setOrders(orders + 1);

  return (
    <li>
      {props.orderType} : {orders} <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

export default Order;

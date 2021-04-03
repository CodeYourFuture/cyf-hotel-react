import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Orders = props => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders => orders + 1);
  };
  const removeOne = () => {
    setOrders(orders => orders - 1);
  };
  return (
    <li>
      {props.orderType}: {orders}
      <RestaurantButton orderOne={orderOne} removeOne={removeOne} />
    </li>
  );
};

export default Orders;

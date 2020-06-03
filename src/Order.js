import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
const Order = props => {
  const [orders, setOrders] = useState(0);
  const orderOne = props => {
    setOrders(orders + 1);
  };
  return (
    <li>
      <RestaurantButton orderOne={orderOne} />
      {props.orderType}: {orders}
    </li>
  );
};
export default Order;

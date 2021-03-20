import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, serOrders] = useState(0);
  const orderOne = () => {
    serOrders(orders + 1);
  };
  return (
    <li>
      {props.orderType}: {orders}
      <RestaurantButton order={orderOne} />
    </li>
  );
};

export default Order;

import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, serOrders] = useState(0);
  const orderOne = () => {
    serOrders(orders + 1);
  };
  return (
    <li className="orders">
      <RestaurantButton order={orderOne} />
      {props.orderType}: {orders}
    </li>
  );
};

export default Order;

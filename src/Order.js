import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
const Order = (props) => {
  const [order, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(order + 1);
  };
  return (
    <li>
      {props.orderType}: {order}
      <RestaurantButton order={orderOne} />
    </li>
  );
};

export default Order;

import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <li className="m-3 d-inline-block">
      {props.orderType}: {orders} <RestaurantButton orderAdder={orderOne} />
    </li>
  );
};

export default Order;

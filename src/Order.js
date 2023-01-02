import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

export default function Order(props) {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(prevState => prevState + 1);
  };

  return (
    <li className="order-list">
      {props.orderType}: {orders} <RestaurantButton handleClick={orderOne} />
    </li>
  );
}

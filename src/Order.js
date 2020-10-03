import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  // Declare a new state variable, which we'll call "orders"
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };

  return (
    <li>
      {props.orderType} : {orders} <RestaurantButton name={orderOne} />
    </li>
  );
};

export default Order;

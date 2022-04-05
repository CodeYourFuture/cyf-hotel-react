import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton.js";

const order = props => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(currentOrder => {
      return currentOrder + 1;
    });
  };

  return (
    <li>
      {props.orderType}: {orders} <RestaurantButton onHandler={orderOne} />
    </li>
  );
};
export default order;

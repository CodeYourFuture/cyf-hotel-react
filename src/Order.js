import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
const Order = ({ orderType }) => {
  const [Orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(Orders + 1);
  };
  return (
    <li>
      {orderType}: {Orders} <RestaurantButton handleClick={orderOne} />
    </li>
  );
};

export default Order;

import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);

  const OrderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <li>
      {orderType}:{orders} <RestaurantButton prop={OrderOne} />
    </li>
  );
};

export default Order;

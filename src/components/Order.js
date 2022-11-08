import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders => {
      const plusOne = orders + 1;
      return plusOne;
    });
  };
  return (
    <li>
      {orderType}: {orders} <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

export default Order;

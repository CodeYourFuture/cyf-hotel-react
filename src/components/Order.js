import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setOrder] = useState(0);
  const OrderOne = () => {
    setOrder(orders + 1);
  };

  return (
    <li>
      {orderType}: {orders} <RestaurantButton orderOne={OrderOne} />
    </li>
  );
};

export default Order;

import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = prop => {
  const [orders, setOrder] = useState(0);
  const orderOne = () => {
    setOrder(orders + 1);
  };
  return (
    <li>
      {prop.orderType} : {orders} <RestaurantButton order={orderOne} />
    </li>
  );
};

export default Order;

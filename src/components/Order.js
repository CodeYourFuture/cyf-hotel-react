import React, { useState } from "react";
import RestaurantButton from "./buttons/RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    return setOrders(orders + 1);
  };

  return (
    <li className="order-block">
      {orderType}: {orders}
      <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

export default Order;

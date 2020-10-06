import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };

  return (
    <li className="m-3">
      {orderType}: {orders} <RestaurantButton orderOne={orderOne} />
      <hr />
    </li>
  );
};

export default Order;

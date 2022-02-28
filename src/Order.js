import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(value => value + 1);
  };

  return (
    <div>
      <li>
        {orderType}: {orders} <RestaurantButton handleClick={orderOne} />
      </li>
    </div>
  );
};

export default Order;

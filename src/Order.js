import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);

  const OrderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <div className="order">
      <li className="orderItem">
        {orderType}:{orders} <RestaurantButton prop={OrderOne} />
      </li>
    </div>
  );
};

export default Order;

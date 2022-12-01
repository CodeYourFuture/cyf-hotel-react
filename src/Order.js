import React from "react";
import { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(order => {
      return order + 1;
    });
  };
  return (
    <li>
      {`${orderType}`}: {orders} <RestaurantButton orderOne={orderOne} />
    </li>
  );
};
export default Order;

import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Orders = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <li className="d-flex justify-content-between">
      {orderType}: {orders} <RestaurantButton const clickFunction={orderOne} />
    </li>
  );
};

export default Orders;

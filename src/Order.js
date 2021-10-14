import React, { useState } from 'react'
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  let [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <li>
      {orderType}: {orders}
      <RestaurantButton onClick={orderOne} />
    </li>
  );
};

export default Order

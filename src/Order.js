import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType, buttonText }) => {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <li>
      {orderType}: {orders}
      <RestaurantButton orderOne={orderOne} buttonText={buttonText} />
    </li>
  );
};

export default Order;

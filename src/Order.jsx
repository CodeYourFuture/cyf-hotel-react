import React from "react";
import { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = prop => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <div>
      <li>
        {prop.orderType}: {orders}
        <RestaurantButton order={orderOne} />
      </li>
    </div>
  );
};

export default Order;

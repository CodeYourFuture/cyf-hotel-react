import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = () => {
  let [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <div>
      <li>
        Pizzas: {orders} <RestaurantButton increment={orderOne} />
      </li>
    </div>
  );
};

export default Order;

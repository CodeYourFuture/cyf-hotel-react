import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = () => {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    //increment orders value by 1
    setOrders(orders + 1);
  }

  return (
    <li>
      Pizzas: {orders} <RestaurantButton handleClick={orderOne} />
    </li>
  );
};

export default Order;

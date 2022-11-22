import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = () => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(prevOrders => prevOrders + 1);
  };
  return (
    <div>
      <li>
        Pizzas: {orders} <RestaurantButton orderOne={orderOne} />
      </li>
    </div>
  );
};

export default Order;

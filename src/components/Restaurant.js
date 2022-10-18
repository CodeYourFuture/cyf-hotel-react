import React, { useState } from "react";
import Order from "./Order";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orders={orders} />
        <RestaurantButton clickEVent={orderOne} />
      </ul>
    </div>
  );
};

export default Restaurant;

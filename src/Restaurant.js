import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <div className="center">
      <h3>Restaurant Orders</h3>
      <ul>
        <span>
          Pizzas: {orders}
          <RestaurantButton order={orderOne} />
        </span>
      </ul>
    </div>
  );
};

export default Restaurant;

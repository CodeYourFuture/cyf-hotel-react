import React, { useState } from "react";
import Order from "./Order";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    return setOrders(orders + 1);
  };
  return (
    <div>
      <h3 className="text-center">Restaurant Orders</h3>
      <ul>
        <Order numberOfOrder={orders} />
        <RestaurantButton order={orderOne} />
      </ul>
    </div>
  );
};

export default Restaurant;

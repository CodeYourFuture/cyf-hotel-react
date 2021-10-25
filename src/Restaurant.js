import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  // declare a new state variable
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };

  return (
    <div className="app-content container text-center">
      <h3>Restaurant Orders</h3>
      <ul className="container">
        <li>
          Pizzas: {orders} <RestaurantButton orderOne={orderOne} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;

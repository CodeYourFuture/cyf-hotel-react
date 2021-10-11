import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  let [orders, setOrders] = useState(0);
  function orderOne () {
    setOrders(orders + 1);
  }
  return (
    <div className="Restaurant-orders container">
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders}
          <RestaurantButton onClick={orderOne} /> 
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;

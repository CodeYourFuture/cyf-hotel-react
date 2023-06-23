import React, { useState } from "react";
import "./Restaurant.css";
import RestaurantButton from "./components/RestaurantButton";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders => orders + 1);
  }
  return (
    <div className="restaurant-orders">
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders}
          <RestaurantButton orderOne={orderOne}/>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;

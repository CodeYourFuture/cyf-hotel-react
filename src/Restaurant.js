import React, { useState } from "react";
import "./Restaurant.css";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);
  const orederOne = () => {
    setOrders(orders => orders + 1);
  }
  return (
    <div className="restaurant-orders">
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders} <button className="btn btn-primary" onClick={orederOne}>Add</button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;

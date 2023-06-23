import React, { useState } from "react";
import "./Restaurant.css";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);
  return (
    <div className="restaurant-orders">
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders} <button className="btn btn-primary">Add</button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;

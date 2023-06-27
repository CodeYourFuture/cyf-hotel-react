import { useState } from "react";
import React from "react";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders((orders) => orders + 1);
  };
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders}{" "}
          <button className="btn btn-primary" onClick={orderOne}>
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
